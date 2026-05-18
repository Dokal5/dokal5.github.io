#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(process.argv[2] || ".");
const pricingDir = path.join(root, "cases", "pricing");
const libraryPath = path.join(pricingDir, "case-library.js");
const indexPath = path.join(pricingDir, "index.html");
const today = new Date();
const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
const errors = [];

function rel(filePath) {
  return path.relative(root, filePath) || ".";
}

function addError(filePath, message) {
  errors.push(`${rel(filePath)}: ${message}`);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function isIsoDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day;
}

function dateToNumber(value) {
  return Number(String(value).replaceAll("-", ""));
}

function ageInDays(value) {
  const [year, month, day] = value.split("-").map(Number);
  const reviewedUtc = Date.UTC(year, month - 1, day);
  return Math.floor((todayUtc - reviewedUtc) / 86400000);
}

function loadCaseLibrary() {
  const sandbox = { window: {} };
  vm.runInNewContext(readText(libraryPath), sandbox, { filename: libraryPath });
  const records = sandbox.window.pricingCaseRecords;
  if (!Array.isArray(records)) {
    addError(libraryPath, "window.pricingCaseRecords must be an array");
    return [];
  }
  return records;
}

function extractHiddenSchema(html, pagePath) {
  const match = html.match(/<script type="application\/json" id="pricing-case-schema">\s*([\s\S]*?)\s*<\/script>/);
  if (!match) {
    addError(pagePath, "missing hidden JSON script id=\"pricing-case-schema\"");
    return null;
  }
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    addError(pagePath, `hidden JSON does not parse: ${error.message}`);
    return null;
  }
}

function collectLocalScreenshotPaths(value, paths = []) {
  if (!value || typeof value !== "object") {
    return paths;
  }
  for (const [key, nested] of Object.entries(value)) {
    if (
      key === "local_screenshot_path" ||
      key === "local_screenshot_paths" ||
      key === "additional_local_screenshot_paths"
    ) {
      if (typeof nested === "string" && nested.trim()) {
        paths.push(nested);
      } else if (Array.isArray(nested)) {
        for (const item of nested) {
          if (typeof item === "string" && item.trim()) {
            paths.push(item);
          }
        }
      }
    } else if (nested && typeof nested === "object") {
      collectLocalScreenshotPaths(nested, paths);
    }
  }
  return paths;
}

function visiblePricingArtifactPaths(html) {
  const paths = [];
  const pattern = /<img\b[^>]*\bsrc="([^"]*assets\/pricing-artifacts\/[^"]+)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    paths.push(match[1]);
  }
  return paths;
}

function validateCacheKey(records) {
  const html = readText(indexPath);
  const match = html.match(/<script\s+src="case-library\.js\?v=([^"]+)"><\/script>/);
  if (!match) {
    addError(indexPath, "case-library.js script must include a versioned cache key");
    return;
  }
  const keyMatch = match[1].match(/^(\d{8})(?:-[a-z0-9-]+)?$/);
  if (!keyMatch) {
    addError(indexPath, `case-library.js cache key has unexpected format: ${match[1]}`);
    return;
  }
  const maxReviewed = records
    .map((record) => record.reviewed_at)
    .filter(isIsoDate)
    .reduce((latest, value) => Math.max(latest, dateToNumber(value)), 0);
  if (Number(keyMatch[1]) < maxReviewed) {
    addError(indexPath, `case-library.js cache key ${match[1]} is older than latest reviewed_at ${maxReviewed}`);
  }
}

function validateRecord(record, recordsBySlug, index) {
  const requiredStrings = [
    "slug",
    "title",
    "company",
    "industry",
    "market",
    "reviewed_at",
    "case_status",
    "mechanism_summary",
    "transferable_principle",
    "page_path"
  ];
  for (const field of requiredStrings) {
    if (typeof record[field] !== "string" || !record[field].trim()) {
      addError(libraryPath, `record ${index + 1} missing ${field}`);
    }
  }
  if (recordsBySlug.has(record.slug)) {
    addError(libraryPath, `duplicate slug ${record.slug}`);
  }
  recordsBySlug.set(record.slug, record);
  if (!isIsoDate(record.reviewed_at)) {
    addError(libraryPath, `record ${record.slug || index + 1} has invalid reviewed_at`);
  }
  if (!["current", "historical"].includes(record.case_status)) {
    addError(libraryPath, `record ${record.slug || index + 1} has invalid case_status`);
  }
  if (record.stale_after_days !== undefined && (!Number.isInteger(record.stale_after_days) || record.stale_after_days <= 0)) {
    addError(libraryPath, `record ${record.slug || index + 1} stale_after_days must be a positive integer`);
  }
  if (record.page_path && (path.isAbsolute(record.page_path) || record.page_path.includes("..") || !record.page_path.endsWith(".html"))) {
    addError(libraryPath, `record ${record.slug || index + 1} has unsafe page_path ${record.page_path}`);
  }
}

function validateSchema(record, html, pagePath, schema) {
  const slug = record.slug;
  if (schema.schema_version !== "1.0") {
    addError(pagePath, "schema_version must be 1.0");
  }
  const compatibleCaseIds = new Set([slug, slug.replaceAll("-", "_")]);
  if (!compatibleCaseIds.has(schema.case_id)) {
    addError(pagePath, `case_id ${schema.case_id || "(missing)"} does not match library slug ${slug}`);
  }
  if (schema.reviewed_at !== record.reviewed_at) {
    addError(pagePath, `reviewed_at must match case-library.js (${record.reviewed_at})`);
  }
  if (schema.case_status !== record.case_status) {
    addError(pagePath, `case_status must match case-library.js (${record.case_status})`);
  }
  if (!isIsoDate(schema.reviewed_at)) {
    addError(pagePath, "reviewed_at must be an ISO date");
  }
  if (!["current", "historical"].includes(schema.case_status)) {
    addError(pagePath, "case_status must be current or historical");
  }
  const freshness = schema.freshness_policy;
  if (!freshness || typeof freshness !== "object") {
    addError(pagePath, "freshness_policy is required");
  } else {
    for (const field of ["review_interval_days", "stale_after_days"]) {
      if (!Number.isInteger(freshness[field]) || freshness[field] <= 0) {
        addError(pagePath, `freshness_policy.${field} must be a positive integer`);
      }
    }
    if (typeof freshness.historical_rule !== "string" || !freshness.historical_rule.trim()) {
      addError(pagePath, "freshness_policy.historical_rule is required");
    }
    if (
      schema.case_status !== "historical" &&
      isIsoDate(schema.reviewed_at) &&
      Number.isInteger(freshness.stale_after_days) &&
      ageInDays(schema.reviewed_at) > freshness.stale_after_days
    ) {
      addError(pagePath, `case is stale: reviewed_at ${schema.reviewed_at} exceeds ${freshness.stale_after_days} days`);
    }
  }

  const visiblePaths = visiblePricingArtifactPaths(html);
  const schemaPaths = collectLocalScreenshotPaths(schema);
  const normalizedSchemaPaths = new Set(schemaPaths.map((item) => item.replace(/^\.\//, "")));
  for (const artifactPath of schemaPaths) {
    const resolvedPath = path.resolve(path.dirname(pagePath), artifactPath);
    if (!fs.existsSync(resolvedPath)) {
      addError(pagePath, `pricing artifact does not exist: ${artifactPath}`);
    }
  }
  for (const visiblePath of visiblePaths) {
    if (!normalizedSchemaPaths.has(visiblePath.replace(/^\.\//, ""))) {
      addError(pagePath, `visible pricing artifact is missing from hidden JSON: ${visiblePath}`);
    }
  }
}

const records = loadCaseLibrary();
const recordsBySlug = new Map();
records.forEach((record, index) => validateRecord(record, recordsBySlug, index));
validateCacheKey(records);

for (const record of records) {
  if (!record.page_path) {
    continue;
  }
  const pagePath = path.join(pricingDir, record.page_path);
  if (!fs.existsSync(pagePath)) {
    addError(libraryPath, `page_path does not exist for ${record.slug}: ${record.page_path}`);
    continue;
  }
  const html = readText(pagePath);
  const schema = extractHiddenSchema(html, pagePath);
  if (schema) {
    validateSchema(record, html, pagePath, schema);
  }
}

if (errors.length) {
  console.error(`Pricing case validation failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Pricing case validation passed for ${records.length} case(s).`);
