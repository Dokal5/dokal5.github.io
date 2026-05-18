# Brain Review Board v1

## Purpose

This file defines the review procedure for resolving Brain-layer conflicts and preventing reasoning drift.

The Brain Review Board is a documentation-first manual review process. It helps decide how to handle Brain-layer disagreements, promotion decisions, ontology stretch, analogy risk, and intervention overclaim before any concept affects production schema, UI, automation, hidden JSON, public rendering, public pages, course pages, or case implementation behavior.

This file does not modify production contracts, create ontology labels, add automation, add a database, change public pages, modify hidden JSON, or promote Brain concepts into production schema. Production promotion remains a separate review decision that requires explicit human approval.

## Why Review Governance Is Needed

Review governance is needed because Brain documents can improve reasoning while still creating drift if their authority is unclear.

The review procedure guards against:

- ontology stretch, where an awkward case fit becomes a new label too quickly
- weak analogy risk, where a partial comparison is treated as proof
- intervention overclaim, where a simulation is treated as a recommendation or verified effect
- schema promotion pressure, where useful reasoning concepts are pushed into production fields before they are stable
- advisory docs acting like authority, where guidance begins to override production contracts or stable reasoning principles
- repeated candidate gaps, where unresolved concepts keep appearing without a clear review path
- production leakage, where exploratory Brain concepts affect hidden JSON, public rendering, UI, automation, or case implementation behavior

The goal is not to slow reasoning down. The goal is to keep reasoning expansion explicit, reviewable, and separated from production change until the concept is stable and needed.

## Review Triggers

A Brain Review Board review is required when:

- a new ontology label is proposed
- a candidate gap appears repeatedly
- a low-fit analogy is used as a teaching anchor
- an intervention simulation is treated as recommendation
- a Brain concept is proposed for schema or UI promotion
- two Brain documents conflict
- a case fails Implementation Gate because of reasoning ambiguity
- an alignment audit reports cross-page reasoning drift

## Review Questions

Each review must answer:

- What is the decision under review?
- Which Brain layer owns this decision?
- Which documents have authority?
- Is this concept exploratory, advisory, stable, or production-safe?
- Is the evidence observed, hypothesized, or verified?
- Is the analogy strong, partial, contrast, or ontology stress?
- What should not be transferred?
- What is the risk of overclaim?
- What happens if we do nothing?

## Review Outcomes

Allowed review outcomes are:

- approve for manual use
- keep advisory only
- request more stress tests
- reject as overfit
- mark as candidate gap
- promote to stable reasoning rule
- recommend production promotion review
- block production use

No other outcome may authorize production use. A recommendation for production promotion review is not approval to edit `CASE_SCHEMA.md`, hidden JSON, UI, automation, public rendering, public pages, course pages, or `case-library.js`.

## Promotion Review Procedure

Before any Brain concept enters schema, UI, automation, or public rendering, reviewers must:

- verify repeated use across multiple cases
- verify stress-test evidence
- check conflict with `CASE_SCHEMA.md` and `CASE_TEMPLATE.html`
- check failure modes
- check whether the concept is actually needed in production
- require explicit human approval

Do not allow this direct jump:

```text
candidate gap -> production field
```

Required path:

```text
candidate gap
-> repeated stress-test evidence
-> advisory concept
-> stable reasoning rule
-> production-safe field, only if needed
```

Promotion must remain need-based. A concept can be useful for manual reasoning and still stay outside production schema, hidden JSON, public pages, UI, automation, and rendering.

## Conflict Resolution Procedure

Use this authority order when Brain documents or production contracts appear to conflict:

1. `pricing_constitution` for reasoning principles
2. `CASE_SCHEMA` for production data structure
3. `CASE_TEMPLATE` / `CASE_VISUAL_DESIGN` for public rendering
4. `COMPONENT_LIBRARY` for component tokens
5. Brain Architecture Governance for layer boundaries
6. specific Brain protocols for local reasoning guidance

If conflict remains, default to narrower scope, lower confidence, and no production change.

Production contracts remain the authority for stored case data and public rendering. Brain protocols may guide reasoning, but they do not silently change schema, hidden JSON, UI behavior, component tokens, public pages, automation, or implementation behavior.

## Example Review Scenarios

### 1. Should `bundle_entitlement_pricing` become a new ontology label?

Likely decision:
mark as candidate gap

Reason:
The concept may identify a recurring pattern, but a new ontology label needs repeated stress-test evidence across multiple cases before becoming stable.

Required follow-up:
Run ontology stress tests against cases where bundles, access rights, membership benefits, and usage allowances differ. Record what transfers, what does not transfer, and whether the candidate label improves reasoning beyond existing ontology language.

### 2. Should Uber surge pricing create a dynamic repricing primitive?

Likely decision:
request more stress tests

Reason:
Dynamic repricing may be a useful reasoning primitive, but it risks overfitting one highly visible case unless tested against other mechanisms with time, demand, capacity, inventory, or marketplace constraints.

Required follow-up:
Stress test the candidate primitive against unfamiliar dynamic pricing cases and contrast cases where price changes are scheduled, negotiated, threshold-based, or usage-based rather than dynamically repriced.

### 3. Should `ontology_fit` enter `CASE_SCHEMA`?

Likely decision:
block production use

Reason:
`ontology_fit` is a Brain-layer reasoning assessment. It should not enter production schema unless repeated use, stress-test evidence, failure modes, and production need are explicitly reviewed and approved.

Required follow-up:
Keep `ontology_fit` advisory while documenting whether reviewers repeatedly need it during manual case analysis. If a production need emerges, start a separate production promotion review.

### 4. Should Costco membership become a public pricing case?

Likely decision:
approve for manual use

Reason:
Costco membership can be useful as a Brain-layer worked example or manual reasoning reference, but public case creation requires the normal Workbench Artifact, Implementation Gate, Human Gate, and production implementation process.

Required follow-up:
If a public case is desired, create or update the Layer 1 Workbench Artifact, verify official pricing evidence, pass Constitutional Review and Implementation Gate, then request explicit human approval before implementation.

### 5. Should an intervention simulation be used as a recommendation?

Likely decision:
keep advisory only

Reason:
An intervention simulation is a hypothesized causal reasoning tool unless verified evidence supports the effect. It should not be treated as a recommendation or tested outcome by default.

Required follow-up:
State evidence status, confidence level, expected upside, expected downside, leading indicator, failure signal, and evidence needed. Use recommendation language only after separate review confirms adequate evidence and approval.

## Review Record Template

```md
# Brain Review Record

Date:
Reviewer:
Decision under review:
Affected files:
Brain layer:
Authority documents:
Stability category:
Evidence status:
Analogy strength:
Main risk:
Decision:
Reason:
Required follow-up:
Production impact:
```
