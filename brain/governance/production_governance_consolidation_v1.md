# Production Governance Consolidation Plan v1

## Summary

Production governance must be stabilized before more Brain expansion because the pricing case system now has multiple reasoning, implementation, and publishing layers that can each appear authoritative. If those layers keep diverging, future Brain work will make retrieval, analogy, and implementation feel more sophisticated while making production truth less clear.

This plan is documentation-only. It defines how to classify case maturity, keep Brain-only concepts out of production contracts, and decide which file owns each kind of production truth before new ontology work, stress testing, reasoning protocols, or new pricing cases resume.

The goal is not more theory. The goal is to stop production truth from fragmenting as the reasoning system grows.

## Problem

The latest production audit found drift across Human Gate requirements, hidden JSON freshness and evidence fields, monday.com case identifiers, IKEA historical evidence labeling, cache-busting, and legacy Layer 1 sidecars.

The deeper issue is authority-chain ambiguity:

- current published cases have different maturity levels
- Brain concepts risk leaking into production contracts
- production truth is split across hidden JSON, `case-library.js`, Layer 1 sidecars, public HTML, and Brain docs
- not all published cases should be treated as equal authority
- future retrieval and analogy quality depends on knowing which cases are production-stable

Published status alone is not enough. A case can be useful publicly while still being a weak precedent for future implementation, analogy, or archetype formation.

## Layer 1: Case Maturity Classification

Case maturity is not a public marketing label. It is internal governance truth used to decide whether a case can support retrieval, analogy, archetype reuse, or future production implementation.

| Status | Meaning | Minimum requirements | Allowed use | Forbidden use | Archetype use | Future production implementation |
| --- | --- | --- | --- | --- | --- | --- |
| `legacy_published` | Published public case, but does not fully meet current Workbench or hidden JSON governance. | Public page exists, library entry exists, and case logic is inspectable. | Teaching reference, migration backlog, cautious comparison. | Treating it as contract-stable, using it as implementation precedent, or inferring gates. | No, except as a historical or legacy example with a caveat. | Blocks new implementation until contract gaps are repaired. |
| `contract_aligned` | Hidden JSON, library record, public page metadata, and evidence/freshness fields agree. | Hidden JSON includes canonical production metadata; `case-library.js` mirrors lightweight discovery data; evidence is local or explicitly waived. | Public library reference, retrieval input, lightweight comparison, maintenance baseline. | Treating it as Workbench-complete or governance-reviewed. | Limited to production structure patterns already in schema. | Can support maintenance edits; logic revisions still require Layer 1 review. |
| `workbench_complete` | Full current Workbench Artifact exists and has required readiness trace. | Brain Lookup, Canonical Insight Sentence, Generalizable Pricing Principle, Constitutional Review, Implementation Gate, and Human Gate trace exist. | Implementation source, production maintenance baseline, strong retrieval reference. | Treating Human Gate as reusable approval for unrelated future revisions. | Yes, for its approved mechanism only. | Can support implementation when Human Gate explicitly approves that implementation scope. |
| `review_governed` | Case has explicit Brain Review or governance trace records. | `contract_aligned` or `workbench_complete` status plus review board or governance notes. | Governance comparison, promotion review, high-confidence teaching sequence. | Treating review outcome as production schema authority. | Yes, with review-scope limits. | Can support future implementation after current gates are rechecked. |
| `stress_tested` | Case has been used in applied reasoning stress tests, analogical comparisons, or failure records. | Documented stress-test, analogy, or failure record linked to the case. | Analogy calibration, failure memory, retrieval quality review. | Treating stress-test status as public metadata or production schema. | Yes, only if stress results confirm stable transfer boundaries. | Does not authorize implementation; production gates still apply. |

Maturity can increase only through explicit repair or review. It must not be inferred from a case being live, indexed, visually polished, or cited by another Brain document.

## Layer 2: Production Safe Boundary

Default rule: Brain reasoning concepts stay Brain-only unless explicitly promoted through review. Production-safe fields are fields already governed by `CASE_SCHEMA.md`, `CASE_TEMPLATE.html`, `COMPONENT_LIBRARY.md`, or established public rendering behavior.

| Concept type | Hidden JSON | Public page | `case-library.js` | Brain only | Notes |
| --- | --- | --- | --- | --- | --- |
| `schema_version` | Allowed | Not required visibly | Not needed | No | Production contract field. |
| `reviewed_at` | Allowed | Allowed as visible metadata | Allowed for sorting | No | Production-safe by default. |
| `case_status` | Allowed | Allowed as badge or note | Allowed for filtering and badges | No | Editorial status only: `current` or `historical`. |
| `freshness_policy` | Allowed | Derived display only | Lightweight stale window only | No | Hidden JSON is canonical. |
| `pricing_artifact` | Allowed | Visible artifact or waiver | Not canonical | No | Must be local or explicitly waived. |
| `primary_component` | Allowed | Rendered via page pattern | Optional lightweight summary | No | Must stay within `COMPONENT_LIBRARY.md` tokens. |
| `decision_core` | Allowed | Visible teaching surface | Summary only | No | Production-safe by schema. |
| `bill_examples` | Allowed | Visible teaching surface | Summary only | No | Production-safe by schema. |
| `boundary_crossing_map` | Allowed | Visible teaching surface | Summary only | No | Production-safe by schema. |
| `decision_priority` | Allowed | Visible teaching surface | Summary only | No | Production-safe by schema. |
| `reasoning_error_check` | Allowed if schema-backed | Visible teaching surface | Summary only | No | Production-safe when matching schema. |
| Ontology labels | Not by default | Not by default | Not by default | Yes | Promote only through separate production review. |
| `ontology_fit` | Forbidden by default | Forbidden | Forbidden | Yes | Advisory only unless production promotion is approved. |
| `analogy_strength` | Forbidden by default | Forbidden | Forbidden | Yes | Useful for Brain comparison, not production truth. |
| `retrieval_confidence` | Forbidden by default | Forbidden | Forbidden | Yes | Retrieval quality metadata stays internal. |
| `intervention_confidence` | Forbidden by default | Forbidden | Forbidden | Yes | Avoid turning simulations into recommendations. |
| `stress_test_status` | Forbidden by default | Forbidden | Forbidden | Yes | Internal maturity/status only. |
| `candidate_gap` | Forbidden by default | Forbidden | Forbidden | Yes | Concept lifecycle input, not page metadata. |
| `failure_category` | Forbidden by default | Forbidden | Forbidden | Yes | Failure archive concept, not production field. |
| Brain Review outcome | Forbidden by default | Forbidden | Forbidden | Yes | Can inform maturity docs, not hidden JSON. |
| Human Gate | Not case schema | Not public | Not index data | Governance trace | Belongs in Workbench or governance trace, not public page JSON. |
| Implementation Gate | Not case schema | Not public | Not index data | Governance trace | Analytical readiness trace, not public case metadata. |

Production-safe by default:

- `reviewed_at`
- `case_status`
- `freshness_policy`
- `pricing_artifact`
- `schema_version`
- `primary_component`
- `decision_core`
- `bill_examples`
- `boundary_crossing_map`
- `decision_priority`
- `reasoning_error_check` if already in schema

Not production-safe by default:

- `ontology_fit`
- `analogy_strength`
- `retrieval_confidence`
- `intervention_confidence`
- `stress_test_status`
- `candidate_gap`
- `failure_category`
- Brain Review outcome

## Layer 3: Canonical Production Truth Policy

| Information | Canonical source | Secondary / derived source | Notes |
| --- | --- | --- | --- |
| Allowed production data structure | `cases/pricing/CASE_SCHEMA.md` | `CASE_TEMPLATE.html` | Do not change schema in this consolidation plan. |
| Page structure and required sections | `cases/pricing/CASE_TEMPLATE.html` | `CASE_VISUAL_DESIGN.md` | Template governs production page shape. |
| Component tokens | `cases/pricing/COMPONENT_LIBRARY.md` | Layer 1 sidecar | No new tokens during consolidation. |
| Case-specific production metadata | Hidden JSON in each public case page | `case-library.js` summaries | Hidden JSON should own `reviewed_at`, `case_status`, `freshness_policy`, and `pricing_artifact`. |
| Library discovery data | `cases/pricing/case-library.js` | Hidden JSON for validation | Lightweight index only, not full truth. |
| Public teaching copy | Public HTML page | Hidden JSON and Layer 1 | Rendered teaching surface, not governance source. |
| Pricing evidence artifact | Local artifact under `assets/pricing-artifacts/` | Explicit waiver in case metadata | Local artifact preferred; waiver must be explicit. |
| Upstream reasoning | Case-specific Layer 1 sidecar | Workbench contract docs | Reasoning source before implementation, not post-publication production truth unless updated. |
| Workbench readiness | Workbench Artifact | Implementation prompt and checklist | Upstream readiness artifact; includes gates and trace. |
| Brain governance | `brain/governance/` docs | `cognition/` prompts | Guides reasoning; does not override production contracts. |
| Production implementation procedure | `cognition/prompts/implement_from_layer1.md` | `CASE_CREATION_CHECKLIST.md` | Must align with Workbench Artifact contract. |

Policy:

- `CASE_SCHEMA.md` governs allowed production data structure.
- Hidden JSON is canonical for case-specific production metadata.
- `case-library.js` is a lightweight discovery and index layer, not full truth.
- Layer 1 is reasoning source before implementation, not production truth after publication unless updated.
- Public HTML is rendered teaching surface, not governance source.
- Brain docs guide reasoning but do not override production contracts.
- Pricing artifacts must be local or explicitly waived.
- Workbench Artifact is upstream readiness artifact, not post-publication truth unless revised.

## Case Status Application

| Case | Likely current maturity | Reason |
| --- | --- | --- |
| AWS Reserved Instances / Savings Plans | Near `workbench_complete`, blocked from full status by missing Human Gate trace. | Full modern sidecar and hidden JSON alignment are present, but Human Gate is absent. |
| IKEA Netherlands delivery fulfillment pricing | `legacy_published` / partial `contract_aligned`. | Hidden JSON has freshness fields and historical status, but evidence artifact path is empty and waiver is missing. |
| Shopify transaction platform pricing | Partial `contract_aligned`. | Has `pricing_artifact`, but hidden JSON still lacks `reviewed_at`, `case_status`, and `freshness_policy`. |
| Airbnb service-fee incidence pricing | `legacy_published`. | Published and indexed, but hidden JSON lacks canonical freshness/evidence fields and sidecar is legacy. |
| Amazon FBA fulfillment and storage pricing | `legacy_published`. | Published and indexed, but hidden JSON lacks canonical freshness/evidence fields and sidecar is legacy. |
| HP Instant Ink page-count subscription pricing | `legacy_published`. | Published and indexed, but hidden JSON lacks canonical freshness/evidence fields and sidecar is legacy. |
| Peloton hardware-to-membership pricing | `legacy_published`. | Published and indexed, but hidden JSON lacks canonical freshness/evidence fields and sidecar is legacy. |
| monday.com seat-based work management pricing | `legacy_published`, blocked for promotion. | Hidden JSON lacks canonical freshness/evidence fields, sidecar is legacy, and `case_id` has underscore/slug drift. |

These statuses are proposed internal governance classifications. They should not be rendered publicly until a separate production decision approves public maturity labels.

## Relationship To Stabilization Sprint

The Pricing Case Contract Stabilization Sprint fixes immediate drift:

- Human Gate contract conflict
- hidden JSON freshness and evidence gaps
- monday.com identifier normalization
- IKEA artifact waiver
- cache-buster cleanup
- lightweight legacy Layer 1 trace policy

This plan defines longer-term production governance:

- Case Maturity Classification
- Production Safe Boundary
- Canonical Production Truth Policy

During stabilization, Brain-only concepts must not be merged into production schema, hidden JSON, `case-library.js`, public pages, or UI. Production governance consolidation should happen after immediate contract repairs and before applied reasoning stress testing resumes.

## Risks And Guardrails

- Maturity labels may become public-facing too early.
- Brain-only concepts may leak into hidden JSON, `case-library.js`, or public pages.
- `case-library.js` may become treated as the source of truth instead of a discovery index.
- Legacy cases may be treated as invalid instead of legacy.
- Reviewers may create fake retrospective Implementation Gate or Human Gate approvals.
- Public URL changes may break existing links, especially monday.com.
- Governance work may become overengineered instead of repairing current contract drift.

Guardrails:

- Keep maturity labels internal.
- Keep Brain-only concepts out of production by default.
- Keep `case-library.js` lightweight.
- Preserve legacy teaching value while limiting authority.
- Require explicit approval for Human Gate.
- Preserve public URLs.
- Repair contracts before expanding theory.

## Recommended Execution Order

1. Finish Human Gate contract repair.
2. Backfill canonical freshness/evidence fields.
3. Normalize monday.com identifier.
4. Resolve IKEA artifact waiver.
5. Update cache-buster.
6. Then create or maintain production governance docs:
   - Case Maturity Classification
   - Production Safe Boundary
   - Canonical Production Truth Policy
7. Only after that resume applied reasoning stress testing.

## Proposed Future Files

Use this consolidated file first:

```text
brain/governance/production_governance_consolidation_v1.md
```

One file is preferred for v1 because the three missing governance layers are tightly coupled. Split them into separate files only after the policy proves stable and repeated maintenance creates a real navigation burden.

## V1 Non-Changes

This plan does not modify:

- production schema
- hidden JSON
- public pages
- `case-library.js`
- UI
- automation
- build behavior
- ontology labels
- Brain protocols
- published cases
- course pages
- Layer 1 sidecars
- runtime behavior

This plan does not add new cases, add applied reasoning stress tests, or create new Brain theory.
