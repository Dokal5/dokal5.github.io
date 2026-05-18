# Ontology Fit Classification v1

## Purpose

Ontology Fit Classification v1 defines a Brain-layer confidence system for ontology mappings.

Ontology labels say what pricing pattern a case resembles. Ontology Fit says how reliable that mapping is for reasoning, teaching, lookup, and future recommendation.

This document is a reasoning governance layer. It does not modify production pricing case schema, hidden JSON, public pages, `case-library.js`, database behavior, UI behavior, build behavior, automation, or ontology labels.

## Why This Matters

Pricing Reasoning Ontology v1 already contains both natural mappings and stretched mappings. Before the case library scales into a pricing reasoning engine, the Brain layer needs a way to distinguish strong analogies from weak analogies.

Ontology Fit helps prevent false analogies by making weak mappings visible instead of letting every shared label imply equal similarity. It reduces overconfident reasoning by forcing the system to say when a label is useful but incomplete. It separates archetype cases from stretched examples, so clean cases can teach a pattern while weaker cases can reveal contrast, ambiguity, or possible ontology gaps.

Fit classification also supports better Brain Lookup, related-case selection, Mechanism Navigator grouping, course-to-case links, Alignment Audit work, and future recommendation or decision engines. It lets the ontology stay small by discouraging new labels for every medium-fit case, while still tracking repeated low-fit cases that may reveal a missing causal structure.

## Fit Levels

Use three levels only. Do not use numeric scores.

| Fit Level | Definition |
| --- | --- |
| `high` | The ontology label naturally explains the core bill-changing logic. No major conceptual stretch. |
| `medium` | The label explains the case, but one dimension is stretched or incomplete. Useful for analogy, not ideal as archetype. |
| `low` | The label only partially explains the case. The case may indicate an ontology gap or should be used as a contrast case. |

## Supporting Fields

| Field | Allowed Values | Definition |
| --- | --- | --- |
| `ontology_fit` | `high`, `medium`, `low` | Confidence level for the mapping quality between the case and its mapped ontology pattern. |
| `fit_reason` | Short text | One or two sentences explaining why the mapping is high, medium, or low fit. |
| `stretch_point` | Short text | The part of the mapping that feels forced, incomplete, or conceptually overloaded. Use `None material` only for high-fit mappings. |
| `use_as` | `archetype`, `supporting_example`, `contrast_case`, `ontology_gap_candidate` | Guidance for how Brain Lookup, teaching, comparison, and future tooling should use the case. |

## Use Guidance

| `use_as` | Meaning |
| --- | --- |
| `archetype` | A clean teaching anchor for the mapped pattern. |
| `supporting_example` | A useful comparison case, but not the cleanest proof of the pattern. |
| `contrast_case` | A case that helps show where the existing label stops working. |
| `ontology_gap_candidate` | A low-fit case that may reveal a missing reusable causal structure if repeated across more cases. |

## Example Fit Mapping Table

| Case | Mapped Primary Pattern | `ontology_fit` | `fit_reason` | `stretch_point` | `use_as` |
| --- | --- | --- | --- | --- | --- |
| AWS Reserved Instances / Savings Plans | `predictability_exchange` | `high` | The buyer clearly trades flexibility and usage uncertainty for lower, more predictable economics. The label explains the core bill-changing logic and risk transfer. | None material. | `archetype` |
| HP Instant Ink | `threshold_trigger` | `high` | Page allowances, rollover boundaries, and overage behavior naturally explain how the bill changes. The case cleanly teaches usage thresholds as pricing logic. | None material. | `archetype` |
| Uber surge pricing | `threshold_trigger` | `low` | The ontology partially explains visible price movement, but the causal mechanism is dynamic market repricing, not a defined allowance or service boundary. | `threshold_trigger` and `service_mode_changes` are forced to cover real-time demand-supply conditions. | `ontology_gap_candidate` |
| Apple One bundle pricing | `trigger_path_monetization` | `low` | Subscription entry explains part of the case, but the central mechanism is bundled entitlement access across several services. | Existing labels do not fully capture one recurring price granting a heterogeneous portfolio of benefits. | `ontology_gap_candidate` |
| Amazon Prime membership | `trigger_path_monetization` | `low` | Recurring membership and underuse risk are visible, but the mapping misses the portfolio-of-benefits logic that drives perceived value. | `subscription` and `trigger_path_monetization` under-explain bundled shopping, delivery, media, and service entitlements. | `ontology_gap_candidate` |
| Spotify Family Plan | `organization_scale_monetization` | `medium` | Multi-user access works mechanically like seat expansion, but the household context makes the organization-oriented vocabulary awkward. | `organization_scale_monetization`, `seat`, and `grow_team_or_control_seats` sound enterprise-oriented for a family plan. | `supporting_example` |
| TikTok Creator Marketplace | `platform_activity_capture` | `medium` | Platform activity capture explains monetization through mediated brand-creator activity, but the buyer-decision vocabulary is incomplete. | `self_serve_or_outsource` only approximates marketplace matching and campaign execution. | `supporting_example` |
| Snowflake consumption pricing | `threshold_trigger` | `high` | Usage growth and optional commitment economics map cleanly to usage-based bill movement, overage risk, and predictability exchange. | None material; note that continuous consumption should be described carefully where no discrete threshold exists. | `archetype` |

## Recommended File Location

Keep Ontology Fit in this separate file:

```text
brain/ontology/ontology_fit_classification.md
```

Adding fit rules directly to `brain/ontology/pricing_reasoning_ontology.md` would keep ontology and confidence guidance together, but it risks making the core ontology document carry too much governance logic.

Adding fit fields directly to `cases/pricing/CASE_SCHEMA.md` would be premature. Fit is not production schema yet and should not be promoted into hidden JSON, public pages, navigator filters, or case-library behavior.

This separate file is the right v1 location because Ontology Fit is a reasoning governance layer. It should guide Brain-layer work before any production schema integration is considered.

## Governance Rules

- Do not use low-fit mappings as archetype examples.
- Use high-fit mappings as teaching anchors.
- Use medium-fit mappings for comparison, not as primary pattern proof.
- Use low-fit mappings to identify ontology gaps or contrast cases.
- Do not create new ontology labels just because fit is medium.
- Consider new ontology labels only after repeated low-fit cases show the same missing causal structure.
- Always explain `stretch_point` when fit is `medium` or `low`.
- Never hide weak fit behind confident language.
- Do not let `ontology_fit` replace ontology labels; it qualifies confidence in the mapping.
- Do not promote fit fields into production schema during v1.
- Use low-fit cases in Alignment Audit to flag reasoning risk, not to prove a pattern.

## Relationship To Brain Workflow

Ontology Fit supports the existing Brain Workflow without replacing ontology labels, evidence confidence, mechanism certainty, or production contracts.

| Workflow Area | Fit Classification Role |
| --- | --- |
| Brain Lookup | Rank related cases by analogy quality, not just shared ontology labels. Prefer high-fit cases when selecting teaching anchors. |
| Workbench Artifact drafting | Add confidence language when using related cases, especially in Canonical Insight Sentence and Generalizable Pricing Principle reasoning. |
| Related-case selection | Separate archetype cases from supporting examples and contrast cases. |
| Mechanism Navigator | Later, fit can help group cases by clean pattern examples versus edge cases, without changing navigator behavior in v1. |
| Course-to-case links | Use high-fit cases for primary teaching links and medium-fit cases for comparison or nuance. |
| Alignment Audit | Flag cases where public teaching claims rely on medium- or low-fit analogies. |
| Future Decision Pattern Engine | Use fit as an analogy-quality signal before recommending cases or patterns. |

## Future Uses

Ontology Fit can later support:

- Stronger Brain Lookup retrieval.
- Case recommendation ranking.
- Analogy quality warnings.
- Pattern explorer grouping.
- Ontology stress testing.
- Alignment audit reports.
- Course-to-case link quality checks.
- Future decision simulator prompts.
- Identification of repeated ontology gaps before label expansion.

## Risks And Guardrails

| Risk | Guardrail |
| --- | --- |
| False precision | Use three qualitative levels only; no numeric scores. |
| Over-scoring | Keep fit as reasoning guidance, not a ranking system pretending to be measurement. |
| Subjective opinion drift | Require `fit_reason` and `stretch_point` so judgments are inspectable. |
| Process overhead | Apply fit first to ontology stress tests, Brain Lookup, and related-case reasoning, not every production artifact. |
| Misusing low-fit cases | Prohibit low-fit mappings as archetype proof. |
| Label explosion | Do not create new labels for medium fit; require repeated low-fit evidence before considering expansion. |
| Premature schema changes | Keep v1 in Brain documentation only. Do not add fields to `CASE_SCHEMA.md` or hidden JSON. |

## V1 Non-Changes

Ontology Fit Classification v1 must not:

- Modify `cases/pricing/CASE_SCHEMA.md`.
- Modify hidden JSON in existing case pages.
- Modify `cases/pricing/case-library.js`.
- Add public UI, navigator filters, or case pages.
- Add a database, build system, automation, vector search, MCP integration, or runtime service.
- Add new ontology labels.
- Promote ontology fields into production schema.

## Acceptance Check

A reviewer should be able to use this document during Brain Lookup, Workbench Artifact drafting, related-case selection, and Alignment Audit work to distinguish strong analogies from stretched mappings without needing any code or schema changes.
