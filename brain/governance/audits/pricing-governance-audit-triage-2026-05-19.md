# Pricing Governance Audit Triage

Date: 2026-05-19
Branch: case/pricing-governance-audit-triage-v1
Audit command: `node scripts/audit-pricing-governance.mjs --format json`

## Summary

Total audit rows: 301

- PASS: 231
- WARNING: 5
- FAIL: 65

Non-PASS findings grouped: 70

This triage groups findings by repair root cause. It does not repair hidden JSON, public pages, case-library records, Layer 1 files, UI, automation, build files, or ontology labels.

## Root-Cause Groups

### 1. Legacy hidden JSON missing review/status/freshness governance fields

Classification: true drift
Findings grouped: 42 FAIL
Current stabilization sprint: yes

Root cause:
Six published pricing cases still use the older hidden JSON contract shape. The audit now expects `reviewed_at`, `case_status`, and `freshness_policy`, so each missing field creates both required-field failures and downstream freshness/status failures.

Checks included:
- `HJ002_required_fields_present`: 18 FAIL
- `FR001_reviewed_at_exists`: 6 FAIL
- `FR002_case_status_allowed`: 6 FAIL
- `FR003_freshness_policy_complete`: 6 FAIL
- `FR004_computed_staleness`: 6 FAIL

Affected files:
- `cases/pricing/airbnb-service-fee-incidence-pricing.html`
- `cases/pricing/amazon-fba-fulfillment-storage-pricing.html`
- `cases/pricing/hp-instant-ink-page-count-subscription-pricing.html`
- `cases/pricing/monday-seat-based-work-management-pricing.html`
- `cases/pricing/peloton-hardware-membership-pricing.html`
- `cases/pricing/shopify-transaction-platform-pricing.html`

Recommended repair:
Add the missing governance fields to these cases in one migration pass, using valid `YYYY-MM-DD` review dates, allowed `case_status` values, and complete freshness policy values. Repair this before artifact-specific failures because it unblocks staleness computation.

### 2. Legacy hidden JSON missing pricing artifact object or waiver metadata

Classification: true drift
Findings grouped: 20 FAIL
Current stabilization sprint: yes

Root cause:
Five legacy pricing cases do not expose a `pricing_artifact` object. That creates one required-field failure and several dependent artifact validation failures per file.

Checks included:
- `HJ002_required_fields_present`: 5 FAIL for missing `pricing_artifact`
- `AR001_pricing_artifact_exists`: 5 FAIL
- `AR002_local_screenshot_path_exists`: 5 FAIL because `pricing_artifact` is missing
- `AR003_missing_artifact_has_waiver`: 5 FAIL

Affected files:
- `cases/pricing/airbnb-service-fee-incidence-pricing.html`
- `cases/pricing/amazon-fba-fulfillment-storage-pricing.html`
- `cases/pricing/hp-instant-ink-page-count-subscription-pricing.html`
- `cases/pricing/monday-seat-based-work-management-pricing.html`
- `cases/pricing/peloton-hardware-membership-pricing.html`

Recommended repair:
After the review/status/freshness fields are added, either attach valid local screenshot artifact metadata or add explicit waiver metadata where an artifact is intentionally unavailable.

### 3. IKEA artifact metadata exists but lacks local screenshot path

Classification: true drift
Findings grouped: 1 WARNING
Current stabilization sprint: yes

Root cause:
The IKEA pricing case appears partially migrated: `pricing_artifact` exists, but `local_screenshot_path` is empty or missing.

Checks included:
- `AR002_local_screenshot_path_exists`: 1 WARNING

Affected file:
- `cases/pricing/ikea-nl-delivery-fulfillment-pricing.html`

Recommended repair:
Add the local screenshot path if an artifact exists. If the artifact is intentionally absent, make the waiver state explicit and consistent with the artifact governance contract.

### 4. Monday identifier exception still emitted as warnings

Classification: likely script false positive
Findings grouped: 3 WARNING
Current stabilization sprint: no
Deferred: yes

Root cause:
The Monday case uses underscores in canonical `case_id` while the published slug uses hyphens. The audit output says this is documented as an exception, but still emits warnings.

Checks included:
- `ID002_hidden_json_case_id_alignment`: 1 WARNING
- `ID003_layer1_case_id_alignment`: 1 WARNING
- `ID004_documented_identifier_exception`: 1 WARNING

Affected files:
- `cases/pricing/monday-seat-based-work-management-pricing.html`
- `cases/pricing/monday-seat-based-work-management-pricing-layer1.md`

Recommended repair:
Do not change identifiers during stabilization. Defer unless the audit policy is changed to treat documented identifier exceptions as PASS or informational output.

### 5. Monday Layer 1 classified as legacy published

Classification: expected legacy status
Findings grouped: 1 WARNING
Current stabilization sprint: no
Deferred: yes

Root cause:
The Layer 1 sidecar is classified as `legacy_published`. The audit also states legacy status is descriptive and not an automatic failure.

Checks included:
- `L1003_maturity_classified`: 1 WARNING

Affected file:
- `cases/pricing/monday-seat-based-work-management-pricing-layer1.md`

Recommended repair:
Defer. Treat as inventory unless a separate Layer 1 modernization batch is approved.

### 6. AWS Layer 1 claims current Workbench format but lacks Human Gate

Classification: true drift
Findings grouped: 1 FAIL
Current stabilization sprint: yes

Root cause:
The AWS Layer 1 sidecar is detected as current Workbench format or contains implementation prompt text that requires a Human Gate, but the explicit Human Gate section is missing.

Checks included:
- `GT002_human_gate_required_when_prompt_requires`: 1 FAIL

Affected file:
- `cases/pricing/aws-reserved-instances-savings-plans-layer1.md`

Recommended repair:
Add or reconcile the Human Gate contract in a Layer 1 governance repair batch. Because this touches Layer 1, keep it separate from public HTML hidden JSON migration work.

### 7. Case-library cache-buster versions are inconsistent without documented exception

Classification: true drift
Findings grouped: 2 FAIL
Current stabilization sprint: yes

Root cause:
`cases/index.html` and `cases/pricing/index.html` reference different `case-library.js` cache-buster version strings, and the audit has no documented exception for that mismatch.

Checks included:
- `CB002_case_library_version_consistent`: 1 FAIL
- `CB003_cache_buster_exception_documented`: 1 FAIL

Affected files:
- `cases/index.html`
- `cases/pricing/index.html`

Recommended repair:
Align the cache-buster versions if the mismatch is accidental. If intentional, document a narrow exception in the audit policy instead of changing page references.

## Recommended Repair Order

1. Repair legacy hidden JSON review/status/freshness fields across the six affected published cases.
2. Repair missing pricing artifact objects or waiver metadata for the five affected cases.
3. Repair the IKEA local screenshot path or waiver metadata.
4. Resolve the cache-buster version mismatch or document the exception.
5. Repair the AWS Layer 1 Human Gate contract in a separate Layer 1 batch.
6. Defer the Monday identifier exception warnings unless audit severity policy changes.
7. Defer the Monday `legacy_published` Layer 1 maturity warning until a broader Layer 1 modernization effort.

## Current Stabilization Sprint

Fix in the current stabilization sprint:
- Group 1: legacy hidden JSON review/status/freshness fields
- Group 2: missing pricing artifact object or waiver metadata
- Group 3: IKEA local screenshot path metadata
- Group 6: AWS Layer 1 Human Gate contract
- Group 7: cache-buster version mismatch

Defer:
- Group 4: Monday documented identifier exception warnings
- Group 5: Monday `legacy_published` Layer 1 maturity warning

## Recommended Next Repair Batch

Start with Groups 1 and 2 as a single hidden JSON governance migration batch for the legacy published pricing cases. This batch addresses 62 of 70 non-PASS findings and removes the downstream freshness and artifact failures caused by missing contract fields. Keep the cache-buster and Layer 1 Human Gate repairs as separate follow-up batches because they touch different ownership surfaces.
