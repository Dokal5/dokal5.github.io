#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT_DIR = process.cwd();
const PRICING_DIR = path.join(ROOT_DIR, "cases", "pricing");
const CASE_LIBRARY_PATH = path.join(PRICING_DIR, "case-library.js");
const CACHE_BUSTER_FILES = [
  path.join(ROOT_DIR, "cases", "index.html"),
  path.join(PRICING_DIR, "index.html")
];

const REQUIRED_HIDDEN_JSON_FIELDS = [
  "schema_version",
  "case_id",
  "reviewed_at",
  "case_status",
  "freshness_policy",
  "pricing_artifact",
  "primary_component",
  "decision_core"
];

const ALLOWED_CASE_STATUSES = new Set(["current", "historical"]);
const MISSING_HISTORICAL_ARTIFACT_WAIVERS = new Set(["missing_historical_waiver"]);

const BRAIN_ONLY_FIELDS = [
  "ontology_fit",
  "analogy_strength",
  "retrieval_confidence",
  "intervention_confidence",
  "stress_test_status",
  "candidate_gap",
  "failure_category"
];

const NON_CASE_HTML_FILES = new Set([
  "index.html",
  "CASE_TEMPLATE.html",
  "mechanism-navigator.html"
]);

const KNOWN_IDENTIFIER_EXCEPTIONS = {};

const KNOWN_CACHE_BUSTER_EXCEPTIONS = {};

const args = process.argv.slice(2);
const outputJson = args.includes("--format") && args[args.indexOf("--format") + 1] === "json";
const strictMode = args.includes("--strict");
const findings = [];

function rel(filePath) {
  return path.relative(ROOT_DIR, filePath).replaceAll(path.sep, "/");
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function addFinding(check_id, severity, file, message, suggested_repair) {
  findings.push({
    check_id,
    severity,
    file: rel(file),
    message,
    suggested_repair
  });
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isNonEmpty(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

function parseDateOnly(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;

  const yyyy = parsed.getUTCFullYear().toString().padStart(4, "0");
  const mm = (parsed.getUTCMonth() + 1).toString().padStart(2, "0");
  const dd = parsed.getUTCDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}` === value ? parsed : null;
}

function extractPricingCaseSchema(html) {
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = scriptRegex.exec(html)) !== null) {
    const attrs = match[1];
    if (
      /\bid\s*=\s*["']pricing-case-schema["']/i.test(attrs) &&
      /\btype\s*=\s*["']application\/json["']/i.test(attrs)
    ) {
      return match[2].trim();
    }
  }

  return null;
}

function discoverCaseHtmlFiles() {
  return fs.readdirSync(PRICING_DIR)
    .filter((fileName) => fileName.endsWith(".html"))
    .filter((fileName) => !NON_CASE_HTML_FILES.has(fileName))
    .map((fileName) => path.join(PRICING_DIR, fileName))
    .sort();
}

function decodeJsString(raw) {
  try {
    return JSON.parse(`"${raw}"`);
  } catch {
    return raw;
  }
}

function findTopLevelObjectBlocks(source) {
  const blocks = [];
  let depth = 0;
  let start = -1;
  let quote = null;
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "\"" || char === "'") {
      quote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) start = index;
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        blocks.push(source.slice(start, index + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

function parseCaseLibraryRecords(text) {
  const arrayMatch = text.match(/window\.pricingCaseRecords\s*=\s*\[([\s\S]*?)\]\s*;/);
  if (!arrayMatch) return [];

  return findTopLevelObjectBlocks(arrayMatch[1]).map((block) => {
    const record = {};
    const fieldRegex = /\b([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(?:"((?:\\.|[^"\\])*)"|(-?\d+(?:\.\d+)?)|(true|false|null))/g;
    let match;

    while ((match = fieldRegex.exec(block)) !== null) {
      const [, key, stringValue, numberValue, literalValue] = match;
      if (stringValue !== undefined) {
        record[key] = decodeJsString(stringValue);
      } else if (numberValue !== undefined) {
        record[key] = Number(numberValue);
      } else if (literalValue === "true") {
        record[key] = true;
      } else if (literalValue === "false") {
        record[key] = false;
      } else {
        record[key] = null;
      }
    }

    return record;
  });
}

function extractLayer1CaseId(markdown) {
  const jsonCaseId = markdown.match(/"case_id"\s*:\s*"([^"]+)"/);
  if (jsonCaseId) return jsonCaseId[1];

  const plainCaseId = markdown.match(/^Case ID:\s*\n([^\n]+)/im);
  if (plainCaseId) return plainCaseId[1].trim();

  return null;
}

function containsHeading(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^#{1,6}\\s+(?:\\d+\\.\\s*)?${escaped}\\s*$`, "im").test(markdown);
}

function classifyLayer1Maturity(markdown) {
  const hasCaseJson = containsHeading(markdown, "Case JSON");
  const hasRenderInstruction = containsHeading(markdown, "Render Instruction");
  const hasStrategicLogic = containsHeading(markdown, "Strategic Logic");
  const hasDecisionAlternatives = containsHeading(markdown, "Decision Alternatives");
  const hasBillExamples = containsHeading(markdown, "Bill Examples");
  const hasBoundaryCrossing = containsHeading(markdown, "Boundary Crossing Map");
  const hasDecisionPriority = containsHeading(markdown, "Decision Priority");
  const hasReasoningError = containsHeading(markdown, "Reasoning Error Check");
  const hasConstitutionalReview = containsHeading(markdown, "Constitutional Review");
  const hasImplementationGate = containsHeading(markdown, "Implementation Gate");
  const hasStressLanguage = /\bstress[- ]test(?:ed|ing)?\b/i.test(markdown) || hasReasoningError;

  const coreSectionsPresent = [
    hasCaseJson,
    hasRenderInstruction,
    hasStrategicLogic,
    hasDecisionAlternatives,
    hasBillExamples,
    hasBoundaryCrossing,
    hasDecisionPriority,
    hasReasoningError
  ].every(Boolean);

  if (coreSectionsPresent && hasConstitutionalReview && hasImplementationGate && hasStressLanguage) {
    return "stress_tested";
  }

  if (coreSectionsPresent && hasConstitutionalReview && hasImplementationGate) {
    return "review_governed";
  }

  if (coreSectionsPresent) {
    return "workbench_complete";
  }

  if (hasCaseJson && hasRenderInstruction) {
    return "contract_aligned";
  }

  return "legacy_published";
}

function hasKnownIdentifierException(slug, expectedField, actualValue) {
  const exception = KNOWN_IDENTIFIER_EXCEPTIONS[slug];
  return Boolean(exception && exception[expectedField] === actualValue);
}

function collectObjectKeys(value, keys = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectObjectKeys(item, keys));
    return keys;
  }

  if (isPlainObject(value)) {
    Object.entries(value).forEach(([key, child]) => {
      keys.push(key);
      collectObjectKeys(child, keys);
    });
  }

  return keys;
}

function hasWaiverMetadata(artifact) {
  if (!isPlainObject(artifact)) return false;

  return Object.entries(artifact).some(([key, value]) => {
    return /waiver|reason|exception/i.test(key) && isNonEmpty(value);
  });
}

function resolveArtifactPath(caseFile, artifactPath) {
  return path.resolve(path.dirname(caseFile), artifactPath);
}

function extractCaseLibraryVersion(html) {
  const match = html.match(/<script\b[^>]*\bsrc=["'][^"']*case-library\.js\?v=([^"'\s<>]+)["'][^>]*>/i);
  return match ? match[1] : null;
}

function auditHiddenJson(casePages) {
  casePages.forEach((page) => {
    if (!page.rawHiddenJson) {
      addFinding(
        "HJ001_hidden_json_exists",
        "FAIL",
        page.file,
        "Published pricing case page does not contain the fixed pricing-case-schema JSON script block.",
        "Add the required hidden JSON script block before publishing the case."
      );
      return;
    }

    addFinding(
      "HJ001_hidden_json_exists",
      "PASS",
      page.file,
      "Hidden pricing-case-schema JSON script block exists.",
      "No repair needed."
    );

    if (!page.hiddenJson) {
      addFinding(
        "HJ002_required_fields_present",
        "FAIL",
        page.file,
        `Hidden JSON could not be parsed: ${page.hiddenJsonError}`,
        "Fix the hidden JSON syntax, then rerun the audit."
      );
      return;
    }

    REQUIRED_HIDDEN_JSON_FIELDS.forEach((field) => {
      const present = Object.prototype.hasOwnProperty.call(page.hiddenJson, field);
      addFinding(
        "HJ002_required_fields_present",
        present ? "PASS" : "FAIL",
        page.file,
        present ? `Required hidden JSON field "${field}" is present.` : `Required hidden JSON field "${field}" is missing.`,
        present ? "No repair needed." : `Add "${field}" to the hidden JSON contract for this case.`
      );

      if (present) {
        const nonempty = isNonEmpty(page.hiddenJson[field]);
        addFinding(
          "HJ003_required_fields_nonempty",
          nonempty ? "PASS" : "WARNING",
          page.file,
          nonempty ? `Required hidden JSON field "${field}" is nonempty.` : `Required hidden JSON field "${field}" is empty.`,
          nonempty ? "No repair needed." : `Populate "${field}" with governance-critical case data.`
        );
      }
    });
  });
}

function auditIdentifierAlignment(casePages, libraryBySlug) {
  casePages.forEach((page) => {
    const libraryRecord = libraryBySlug.get(page.slug);
    const exception = KNOWN_IDENTIFIER_EXCEPTIONS[page.slug];

    addFinding(
      "ID001_html_to_library_slug",
      libraryRecord ? "PASS" : "FAIL",
      page.file,
      libraryRecord ? `HTML filename slug "${page.slug}" has a matching case-library.js record.` : `HTML filename slug "${page.slug}" has no matching case-library.js record.`,
      libraryRecord ? "No repair needed." : "Add a matching case-library.js record or document an explicit identifier exception."
    );

    if (!page.hiddenJson?.case_id) {
      addFinding(
        "ID002_hidden_json_case_id_alignment",
        "FAIL",
        page.file,
        "Hidden JSON case_id is missing, so identifier alignment cannot be verified.",
        "Add a hidden JSON case_id that aligns with the published slug or a documented exception."
      );
    } else if (page.hiddenJson.case_id === page.slug) {
      addFinding(
        "ID002_hidden_json_case_id_alignment",
        "PASS",
        page.file,
        "Hidden JSON case_id matches the HTML filename slug.",
        "No repair needed."
      );
    } else if (hasKnownIdentifierException(page.slug, "hidden_case_id", page.hiddenJson.case_id)) {
      addFinding(
        "ID002_hidden_json_case_id_alignment",
        "WARNING",
        page.file,
        `Hidden JSON case_id "${page.hiddenJson.case_id}" differs from slug "${page.slug}" but is documented as an exception.`,
        "Keep the exception documented until the production identifiers are normalized."
      );
    } else {
      addFinding(
        "ID002_hidden_json_case_id_alignment",
        "FAIL",
        page.file,
        `Hidden JSON case_id "${page.hiddenJson.case_id}" differs from slug "${page.slug}" without a documented exception.`,
        "Align case_id with the slug or add a narrow KNOWN_IDENTIFIER_EXCEPTIONS entry."
      );
    }

    if (!page.layer1Path) {
      addFinding(
        "ID003_layer1_case_id_alignment",
        "WARNING",
        page.file,
        "No matching Layer 1 sidecar exists, so Layer 1 case_id alignment cannot be verified.",
        "Create or locate the Layer 1 sidecar before relying on Layer 1 governance alignment."
      );
    } else if (!page.layer1CaseId) {
      addFinding(
        "ID003_layer1_case_id_alignment",
        "WARNING",
        page.layer1Path,
        "Layer 1 sidecar exists but no case_id was detected.",
        "Add a detectable case_id to the Layer 1 sidecar."
      );
    } else if (page.layer1CaseId === page.slug) {
      addFinding(
        "ID003_layer1_case_id_alignment",
        "PASS",
        page.layer1Path,
        "Layer 1 case_id matches the HTML filename slug.",
        "No repair needed."
      );
    } else if (hasKnownIdentifierException(page.slug, "layer1_case_id", page.layer1CaseId)) {
      addFinding(
        "ID003_layer1_case_id_alignment",
        "WARNING",
        page.layer1Path,
        `Layer 1 case_id "${page.layer1CaseId}" differs from slug "${page.slug}" but is documented as an exception.`,
        "Keep the exception documented until the production identifiers are normalized."
      );
    } else {
      addFinding(
        "ID003_layer1_case_id_alignment",
        "FAIL",
        page.layer1Path,
        `Layer 1 case_id "${page.layer1CaseId}" differs from slug "${page.slug}" without a documented exception.`,
        "Align the Layer 1 case_id with the slug or add a narrow KNOWN_IDENTIFIER_EXCEPTIONS entry."
      );
    }

    if (exception) {
      addFinding(
        "ID004_documented_identifier_exception",
        "WARNING",
        page.file,
        `Identifier exception is documented for "${page.slug}": ${exception.reason}`,
        "Keep this exception narrow and remove it once identifiers are normalized."
      );
    } else {
      addFinding(
        "ID004_documented_identifier_exception",
        "PASS",
        page.file,
        "No documented identifier exception is needed for this case.",
        "No repair needed."
      );
    }
  });
}

function auditFreshness(casePages) {
  const now = new Date();

  casePages.forEach((page) => {
    const data = page.hiddenJson;
    const reviewedAt = data?.reviewed_at;
    const reviewedDate = parseDateOnly(reviewedAt);

    addFinding(
      "FR001_reviewed_at_exists",
      reviewedDate ? "PASS" : "FAIL",
      page.file,
      reviewedDate ? `reviewed_at "${reviewedAt}" is a valid date.` : "reviewed_at is missing or not a valid YYYY-MM-DD date.",
      reviewedDate ? "No repair needed." : "Set reviewed_at to a valid YYYY-MM-DD date after manual evidence review."
    );

    const statusAllowed = ALLOWED_CASE_STATUSES.has(data?.case_status);
    addFinding(
      "FR002_case_status_allowed",
      statusAllowed ? "PASS" : "FAIL",
      page.file,
      statusAllowed ? `case_status "${data.case_status}" is allowed.` : `case_status "${data?.case_status ?? ""}" is not allowed.`,
      statusAllowed ? "No repair needed." : "Set case_status to either current or historical."
    );

    const freshnessPolicy = data?.freshness_policy;
    const reviewIntervalPresent = isPlainObject(freshnessPolicy) && Number.isFinite(Number(freshnessPolicy.review_interval_days));
    const staleAfterPresent = isPlainObject(freshnessPolicy) && Number.isFinite(Number(freshnessPolicy.stale_after_days));
    const policyComplete = reviewIntervalPresent && staleAfterPresent;

    addFinding(
      "FR003_freshness_policy_complete",
      policyComplete ? "PASS" : "FAIL",
      page.file,
      policyComplete ? "freshness_policy includes review_interval_days and stale_after_days." : "freshness_policy is missing review_interval_days or stale_after_days.",
      policyComplete ? "No repair needed." : "Add numeric review_interval_days and stale_after_days to freshness_policy."
    );

    if (!reviewedDate || !policyComplete || !statusAllowed) {
      addFinding(
        "FR004_computed_staleness",
        "FAIL",
        page.file,
        "Computed stale status cannot be determined from the current governance fields.",
        "Fix reviewed_at, case_status, and freshness_policy before relying on computed freshness."
      );
      return;
    }

    const staleAfterMs = Number(freshnessPolicy.stale_after_days) * 24 * 60 * 60 * 1000;
    const stale = now.getTime() - reviewedDate.getTime() > staleAfterMs;
    const severity = stale && data.case_status === "current" ? "WARNING" : "PASS";
    const message = data.case_status === "historical"
      ? "Case is marked historical; computed stale display is overridden by editorial status."
      : stale
        ? "Case computes as stale while case_status is current."
        : "Case computes as fresh under its stale_after_days policy.";

    addFinding(
      "FR004_computed_staleness",
      severity,
      page.file,
      message,
      severity === "PASS" ? "No repair needed." : "Review the case evidence and update reviewed_at or mark the case historical."
    );
  });
}

function auditArtifacts(casePages) {
  casePages.forEach((page) => {
    const artifact = page.hiddenJson?.pricing_artifact;
    const artifactExists = isPlainObject(artifact);

    addFinding(
      "AR001_pricing_artifact_exists",
      artifactExists ? "PASS" : "FAIL",
      page.file,
      artifactExists ? "pricing_artifact object exists." : "pricing_artifact object is missing.",
      artifactExists ? "No repair needed." : "Add pricing_artifact governance data or a documented waiver."
    );

    if (!artifactExists) {
      addFinding(
        "AR002_local_screenshot_path_exists",
        "FAIL",
        page.file,
        "local_screenshot_path cannot be checked because pricing_artifact is missing.",
        "Add pricing_artifact before checking local screenshot evidence."
      );
      addFinding(
        "AR003_missing_artifact_has_waiver",
        "FAIL",
        page.file,
        "Missing artifact has no waiver metadata.",
        "Add capture_status or waiver metadata explaining why the artifact is missing."
      );
      return;
    }

    const localPath = typeof artifact.local_screenshot_path === "string" ? artifact.local_screenshot_path.trim() : "";
    const captureStatus = typeof artifact.capture_status === "string" ? artifact.capture_status.trim() : "";

    if (localPath) {
      const resolved = resolveArtifactPath(page.file, localPath);
      const exists = fileExists(resolved);
      addFinding(
        "AR002_local_screenshot_path_exists",
        exists ? "PASS" : "FAIL",
        page.file,
        exists ? `local_screenshot_path exists at ${localPath}.` : `local_screenshot_path points to a missing file: ${localPath}.`,
        exists ? "No repair needed." : "Capture the referenced artifact or correct the local_screenshot_path."
      );
      addFinding(
        "AR003_missing_artifact_has_waiver",
        "PASS",
        page.file,
        "local_screenshot_path is present, so no missing-artifact waiver is needed.",
        "No repair needed."
      );
    } else {
      const explained = Boolean(captureStatus) || hasWaiverMetadata(artifact);
      const hasHistoricalArtifactWaiver =
        page.hiddenJson?.case_status === "historical" &&
        MISSING_HISTORICAL_ARTIFACT_WAIVERS.has(captureStatus);
      addFinding(
        "AR002_local_screenshot_path_exists",
        hasHistoricalArtifactWaiver ? "PASS" : "WARNING",
        page.file,
        hasHistoricalArtifactWaiver
          ? `local_screenshot_path is missing under explicit historical waiver: ${captureStatus}.`
          : "local_screenshot_path is missing or empty.",
        hasHistoricalArtifactWaiver
          ? "No repair needed."
          : "Add a local screenshot path, or keep a clear capture_status or waiver for the missing artifact."
      );
      addFinding(
        "AR003_missing_artifact_has_waiver",
        explained ? "PASS" : "FAIL",
        page.file,
        explained ? "Missing local_screenshot_path is explained by capture_status or waiver metadata." : "Missing local_screenshot_path is not explained by capture_status or waiver metadata.",
        explained ? "No repair needed." : "Add nonempty capture_status or waiver metadata explaining the missing artifact."
      );
    }

    if (Object.prototype.hasOwnProperty.call(artifact, "capture_status")) {
      addFinding(
        "AR004_capture_status_valid",
        captureStatus ? "PASS" : "WARNING",
        page.file,
        captureStatus ? `capture_status is nonempty: ${captureStatus}.` : "capture_status is present but empty.",
        captureStatus ? "No repair needed." : "Populate capture_status or remove it until it is needed."
      );
    } else {
      addFinding(
        "AR004_capture_status_valid",
        "PASS",
        page.file,
        "capture_status is not used for this artifact.",
        "No repair needed."
      );
    }
  });
}

function auditLayer1Maturity(libraryRecords) {
  libraryRecords.forEach((record) => {
    const slug = record.slug;
    const sidecarPath = path.join(PRICING_DIR, `${slug}-layer1.md`);

    if (!fileExists(sidecarPath)) {
      addFinding(
        "L1001_sidecar_exists",
        "WARNING",
        CASE_LIBRARY_PATH,
        `No Layer 1 sidecar found for case-library.js slug "${slug}".`,
        `Add cases/pricing/${slug}-layer1.md if this case should have Layer 1 governance.`
      );
      addFinding(
        "L1004_legacy_not_auto_failed",
        "PASS",
        CASE_LIBRARY_PATH,
        `Missing or legacy Layer 1 state for "${slug}" is reported descriptively, not auto-failed.`,
        "No repair needed."
      );
      return;
    }

    const markdown = readText(sidecarPath);
    const caseId = extractLayer1CaseId(markdown);
    const maturity = classifyLayer1Maturity(markdown);

    addFinding(
      "L1001_sidecar_exists",
      "PASS",
      sidecarPath,
      `Layer 1 sidecar exists for slug "${slug}".`,
      "No repair needed."
    );
    addFinding(
      "L1002_case_id_present",
      caseId ? "PASS" : "WARNING",
      sidecarPath,
      caseId ? `Layer 1 case_id detected: ${caseId}.` : "No Layer 1 case_id was detected.",
      caseId ? "No repair needed." : "Add a detectable case_id to the Layer 1 sidecar."
    );
    addFinding(
      "L1003_maturity_classified",
      maturity === "legacy_published" ? "WARNING" : "PASS",
      sidecarPath,
      `Layer 1 maturity classified as ${maturity}.`,
      maturity === "legacy_published" ? "Review the sidecar if current Workbench governance is required." : "No repair needed."
    );
    addFinding(
      "L1004_legacy_not_auto_failed",
      "PASS",
      sidecarPath,
      "Layer 1 maturity is descriptive; legacy status is not treated as an automatic failure.",
      "No repair needed."
    );
  });
}

function auditGateTrace(libraryRecords) {
  libraryRecords.forEach((record) => {
    const sidecarPath = path.join(PRICING_DIR, `${record.slug}-layer1.md`);

    if (!fileExists(sidecarPath)) {
      addFinding(
        "GT001_implementation_gate_exists",
        "WARNING",
        CASE_LIBRARY_PATH,
        `No Layer 1 sidecar found for "${record.slug}", so Implementation Gate trace cannot be checked.`,
        "Locate or create the Layer 1 sidecar before relying on gate governance."
      );
      return;
    }

    const markdown = readText(sidecarPath);
    const hasImplementationGate = containsHeading(markdown, "Implementation Gate");
    const currentWorkbenchClaimed = hasImplementationGate ||
      containsHeading(markdown, "Constitutional Review") ||
      /\bREADY_FOR_CODEX\b/.test(markdown) ||
      /\bWorkbench Artifact\b/i.test(markdown);
    const hasHumanGate = containsHeading(markdown, "Human Gate");
    const implementationPromptRequiresHumanGate = /\bimplementation prompt\b[\s\S]{0,600}\bHuman Gate\b/i.test(markdown);
    const publicationInference = /\b(publication|published)\b[\s\S]{0,120}\bHuman Gate\b[\s\S]{0,120}\b(approved|approval|satisfied|passed)\b/i.test(markdown);
    const conflict = /\bHuman Gate\b[\s\S]{0,160}\b(conflict|contradict|missing|required but absent)\b/i.test(markdown);

    if (currentWorkbenchClaimed) {
      addFinding(
        "GT001_implementation_gate_exists",
        hasImplementationGate ? "PASS" : "FAIL",
        sidecarPath,
        hasImplementationGate ? "Implementation Gate exists where current Workbench format is claimed." : "Current Workbench format is claimed but Implementation Gate is missing.",
        hasImplementationGate ? "No repair needed." : "Add an explicit Implementation Gate or remove the current Workbench format claim."
      );
    } else {
      addFinding(
        "GT001_implementation_gate_exists",
        "PASS",
        sidecarPath,
        "Current Workbench format is not claimed, so Implementation Gate is not required by this v1 check.",
        "No repair needed."
      );
    }

    const humanGateRequired = currentWorkbenchClaimed || implementationPromptRequiresHumanGate;
    addFinding(
      "GT002_human_gate_required_when_prompt_requires",
      !humanGateRequired || hasHumanGate ? "PASS" : "FAIL",
      sidecarPath,
      !humanGateRequired
        ? "Human Gate is not required by detected Workbench or implementation prompt text."
        : hasHumanGate
          ? "Human Gate exists where current Workbench format or implementation prompt requires it."
          : "Human Gate is required by current Workbench format or implementation prompt text but is missing.",
      !humanGateRequired || hasHumanGate ? "No repair needed." : "Add an explicit Human Gate section or resolve the Workbench contract requirement."
    );

    addFinding(
      "GT003_no_publication_as_human_gate",
      publicationInference ? "FAIL" : "PASS",
      sidecarPath,
      publicationInference ? "Text appears to infer Human Gate approval from publication." : "No text infers Human Gate approval from publication.",
      publicationInference ? "Remove publication-as-approval language and add explicit Human Gate approval if required." : "No repair needed."
    );

    addFinding(
      "GT004_gate_contract_conflict",
      conflict ? "FAIL" : "PASS",
      sidecarPath,
      conflict ? "Gate contract conflict text was detected." : "No explicit gate contract conflict text was detected.",
      conflict ? "Resolve the Human Gate contract conflict before treating the case as fully governed." : "No repair needed."
    );
  });
}

function auditLibraryAlignment(casePages, libraryRecords, libraryBySlug, pagesBySlug) {
  libraryRecords.forEach((record) => {
    const pagePath = record.page_path ? path.join(PRICING_DIR, record.page_path) : path.join(PRICING_DIR, `${record.slug}.html`);
    const exists = fileExists(pagePath);

    addFinding(
      "LB001_library_record_has_html",
      exists ? "PASS" : "FAIL",
      CASE_LIBRARY_PATH,
      exists ? `case-library.js record "${record.slug}" has matching HTML page ${record.page_path}.` : `case-library.js record "${record.slug}" has no matching HTML page.`,
      exists ? "No repair needed." : "Create the referenced HTML page or remove the stale library record."
    );
  });

  casePages.forEach((page) => {
    const record = libraryBySlug.get(page.slug);

    addFinding(
      "LB002_html_has_library_record",
      record ? "PASS" : "FAIL",
      page.file,
      record ? "Published pricing HTML page has a matching case-library.js record." : "Published pricing HTML page has no matching case-library.js record.",
      record ? "No repair needed." : "Add a matching case-library.js record or document why this page is excluded from the library."
    );

    if (!record || !page.hiddenJson) return;

    if (record.reviewed_at && page.hiddenJson.reviewed_at) {
      addFinding(
        "LB003_reviewed_at_consistent",
        record.reviewed_at === page.hiddenJson.reviewed_at ? "PASS" : "WARNING",
        page.file,
        record.reviewed_at === page.hiddenJson.reviewed_at
          ? "reviewed_at is consistent between hidden JSON and case-library.js."
          : `reviewed_at differs: hidden JSON has ${page.hiddenJson.reviewed_at}, case-library.js has ${record.reviewed_at}.`,
        record.reviewed_at === page.hiddenJson.reviewed_at ? "No repair needed." : "Update the non-canonical source after deciding which review date is authoritative."
      );
    }

    if (record.case_status && page.hiddenJson.case_status) {
      addFinding(
        "LB004_case_status_consistent",
        record.case_status === page.hiddenJson.case_status ? "PASS" : "FAIL",
        page.file,
        record.case_status === page.hiddenJson.case_status
          ? "case_status is consistent between hidden JSON and case-library.js."
          : `case_status differs: hidden JSON has ${page.hiddenJson.case_status}, case-library.js has ${record.case_status}.`,
        record.case_status === page.hiddenJson.case_status ? "No repair needed." : "Align case_status across hidden JSON and case-library.js."
      );
    }
  });

  libraryRecords.forEach((record) => {
    if (!pagesBySlug.has(record.slug)) return;
    if (record.page_path !== `${record.slug}.html`) {
      addFinding(
        "LB001_library_record_has_html",
        "WARNING",
        CASE_LIBRARY_PATH,
        `case-library.js slug "${record.slug}" uses non-standard page_path "${record.page_path}".`,
        "Confirm the page_path is intentional and documented if it differs from the slug filename."
      );
    }
  });
}

function auditCacheBusters() {
  const versions = CACHE_BUSTER_FILES.map((file) => {
    if (!fileExists(file)) {
      return { file, version: null, missing: true };
    }
    return { file, version: extractCaseLibraryVersion(readText(file)), missing: false };
  });

  versions.forEach(({ file, version, missing }) => {
    addFinding(
      "CB001_case_library_version_present",
      !missing && version ? "PASS" : "WARNING",
      file,
      missing
        ? "Cache-buster page is missing."
        : version
          ? `case-library.js version string is present: ${version}.`
          : "case-library.js version string is missing.",
      !missing && version ? "No repair needed." : "Add a case-library.js script reference with a ?v= version string."
    );
  });

  const presentVersions = versions.filter((item) => item.version);
  const uniqueVersions = new Set(presentVersions.map((item) => item.version));
  const exceptionKey = "cases/index.html|cases/pricing/index.html";
  const hasException = Boolean(KNOWN_CACHE_BUSTER_EXCEPTIONS[exceptionKey]);

  if (presentVersions.length === versions.length && uniqueVersions.size === 1) {
    addFinding(
      "CB002_case_library_version_consistent",
      "PASS",
      CACHE_BUSTER_FILES[0],
      "cases/index.html and cases/pricing/index.html use the same case-library.js version string.",
      "No repair needed."
    );
    addFinding(
      "CB003_cache_buster_exception_documented",
      "PASS",
      CACHE_BUSTER_FILES[0],
      "No cache-buster exception is needed.",
      "No repair needed."
    );
  } else if (hasException) {
    addFinding(
      "CB002_case_library_version_consistent",
      "WARNING",
      CACHE_BUSTER_FILES[0],
      "case-library.js version strings differ, but a documented cache-buster exception exists.",
      "Remove the exception once cache-busters can be aligned."
    );
    addFinding(
      "CB003_cache_buster_exception_documented",
      "WARNING",
      CACHE_BUSTER_FILES[0],
      KNOWN_CACHE_BUSTER_EXCEPTIONS[exceptionKey],
      "Keep the exception narrow and temporary."
    );
  } else {
    addFinding(
      "CB002_case_library_version_consistent",
      "FAIL",
      CACHE_BUSTER_FILES[0],
      `case-library.js version strings differ or are incomplete: ${versions.map((item) => `${rel(item.file)}=${item.version ?? "missing"}`).join(", ")}.`,
      "Align the case-library.js cache-buster version strings or add a documented exception."
    );
    addFinding(
      "CB003_cache_buster_exception_documented",
      "FAIL",
      CACHE_BUSTER_FILES[0],
      "No documented cache-buster exception exists for the version mismatch.",
      "Add a narrow KNOWN_CACHE_BUSTER_EXCEPTIONS entry only if the mismatch is intentional."
    );
  }
}

function auditProductionBoundary(casePages, libraryRecords) {
  casePages.forEach((page) => {
    if (!page.hiddenJson) return;

    const keys = collectObjectKeys(page.hiddenJson);
    const leakedFields = BRAIN_ONLY_FIELDS.filter((field) => keys.includes(field));

    addFinding(
      "PB001_no_brain_fields_in_hidden_json",
      leakedFields.length === 0 ? "PASS" : "FAIL",
      page.file,
      leakedFields.length === 0
        ? "No Brain-only fields were found in hidden JSON."
        : `Brain-only fields found in hidden JSON: ${leakedFields.join(", ")}.`,
      leakedFields.length === 0 ? "No repair needed." : "Remove Brain-only fields from production hidden JSON and keep them in Brain governance docs."
    );
  });

  const libraryKeys = new Set();
  libraryRecords.forEach((record) => {
    Object.keys(record).forEach((key) => libraryKeys.add(key));
  });
  const leakedLibraryFields = BRAIN_ONLY_FIELDS.filter((field) => libraryKeys.has(field));

  addFinding(
    "PB002_no_brain_fields_in_case_library",
    leakedLibraryFields.length === 0 ? "PASS" : "FAIL",
    CASE_LIBRARY_PATH,
    leakedLibraryFields.length === 0
      ? "No Brain-only fields were found as case-library.js record fields."
      : `Brain-only fields found in case-library.js records: ${leakedLibraryFields.join(", ")}.`,
    leakedLibraryFields.length === 0 ? "No repair needed." : "Remove Brain-only fields from case-library.js and keep them in Brain governance docs."
  );
}

function buildCasePageModel() {
  return discoverCaseHtmlFiles().map((file) => {
    const html = readText(file);
    const rawHiddenJson = extractPricingCaseSchema(html);
    const slug = path.basename(file, ".html");
    const layer1Path = path.join(PRICING_DIR, `${slug}-layer1.md`);
    let hiddenJson = null;
    let hiddenJsonError = null;

    if (rawHiddenJson) {
      try {
        hiddenJson = JSON.parse(rawHiddenJson);
      } catch (error) {
        hiddenJsonError = error.message;
      }
    }

    let layer1CaseId = null;
    if (fileExists(layer1Path)) {
      layer1CaseId = extractLayer1CaseId(readText(layer1Path));
    }

    return {
      file,
      slug,
      html,
      rawHiddenJson,
      hiddenJson,
      hiddenJsonError,
      layer1Path: fileExists(layer1Path) ? layer1Path : null,
      layer1CaseId
    };
  });
}

function main() {
  const casePages = buildCasePageModel();
  const libraryText = readText(CASE_LIBRARY_PATH);
  const libraryRecords = parseCaseLibraryRecords(libraryText);
  const libraryBySlug = new Map(libraryRecords.map((record) => [record.slug, record]));
  const pagesBySlug = new Map(casePages.map((page) => [page.slug, page]));

  auditHiddenJson(casePages);
  auditIdentifierAlignment(casePages, libraryBySlug);
  auditFreshness(casePages);
  auditArtifacts(casePages);
  auditLayer1Maturity(libraryRecords);
  auditGateTrace(libraryRecords);
  auditLibraryAlignment(casePages, libraryRecords, libraryBySlug, pagesBySlug);
  auditCacheBusters();
  auditProductionBoundary(casePages, libraryRecords);

  if (outputJson) {
    console.log(JSON.stringify(findings, null, 2));
  } else {
    findings.forEach((finding) => {
      console.log(`${finding.severity} ${finding.check_id} ${finding.file} ${finding.message} Suggested repair: ${finding.suggested_repair}`);
    });
  }

  if (strictMode && findings.some((finding) => finding.severity === "FAIL")) {
    process.exitCode = 1;
  }
}

main();
