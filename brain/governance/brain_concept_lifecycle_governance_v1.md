# Brain Concept Lifecycle Governance v1

## Purpose

This file governs the lifecycle of Brain-layer concepts.

It defines how Brain concepts are proposed, tested, promoted, downgraded, deprecated, archived, and rejected before they can influence stable reasoning guidance or production-facing work.

This is documentation-only governance. It does not modify production schema, hidden JSON, public pages, course pages, `case-library.js`, UI behavior, database behavior, build behavior, automation, ontology labels, production cases, or existing Brain protocols.

## Why Lifecycle Governance Is Needed

The Brain system now includes pricing reasoning ontology, ontology fit classification, retrieval policy, analogical comparison protocol, intervention simulation protocol, architecture governance, and review board governance.

As the system grows, the next risk is concept entropy: concepts are created but never retired, downgraded, rejected, or archived.

Lifecycle governance is needed to prevent:

- concept accumulation, where every Brain exercise leaves behind more vocabulary than future reviewers can use
- zombie concepts, where unused ideas remain active because no one explicitly retired them
- ontology inflation, where every awkward case becomes pressure for a new concept
- advisory concepts becoming assumed truth, where manual reasoning aids start acting like stable rules
- candidate gaps never being resolved, where repeated uncertainty stays open without review
- production schema contamination, where unstable Brain concepts leak into `CASE_SCHEMA.md`, hidden JSON, UI, public pages, automation, or `case-library.js`
- deprecated reasoning rules remaining active, where old concepts keep influencing reviews after they have been replaced

The goal is not to slow concept creation. The goal is to make concept creation reversible, reviewable, and separate from production contracts.

## Concept States

### `candidate_gap`

Meaning:
A recurring or strategically important reasoning gap that existing Brain concepts do not clearly explain. It is not yet a concept.

Allowed use:
Record the gap in Brain notes, stress tests, review records, or manual reasoning discussion. Use it to ask whether existing concepts are insufficient.

Forbidden use:
Do not use it as an ontology label, schema field, UI category, case implementation rule, hidden JSON value, automation signal, or stable reasoning rule.

Promotion condition:
Promote to `experimental` only when the gap has examples and non-examples, cannot be handled cleanly by existing concepts, and affects bill-changing logic, risk transfer, buyer decision, or intervention reasoning.

Downgrade or retirement condition:
Retire or reject the gap if it is one-case awkwardness, surface wording, industry-specific description, or a misunderstanding of an existing concept.

### `experimental`

Meaning:
A trial concept being tested against cases, analogies, non-examples, and failure modes.

Allowed use:
Use in exploratory Brain work, ontology stress tests, comparison notes, intervention reasoning notes, and review board discussion.

Forbidden use:
Do not treat it as advisory guidance, stable truth, production-safe vocabulary, public UI language, hidden JSON structure, or implementation logic.

Promotion condition:
Promote to `advisory` only after repeated stress tests show that the concept improves cross-case reasoning beyond existing concepts and has clear examples, non-examples, and scope limits.

Downgrade or retirement condition:
Downgrade to `candidate_gap`, deprecate, or reject if the concept creates confusion, overlaps with a better concept, fails stress tests, encourages false analogy, or cannot explain more than one case.

### `advisory`

Meaning:
A Brain concept that is useful for manual reasoning but is not authoritative over stable Brain governance or production contracts.

Allowed use:
Use during Brain Lookup, ontology fit discussion, analogical comparison, intervention simulation, workbench drafting, and review board deliberation.

Forbidden use:
Do not use it to override `CASE_SCHEMA.md`, hidden JSON, public rendering, UI categories, automation, existing stable reasoning rules, or production case implementation.

Promotion condition:
Promote to `stable_reasoning_rule` only after several uses across multiple cases show repeated reasoning value, clear boundaries, low confusion, and no unresolved conflict with existing Brain governance.

Downgrade or retirement condition:
Downgrade to `experimental` or deprecate if repeated use reveals ambiguity, weak fit, false transfer, scope drift, or overlap with a clearer concept.

### `stable_reasoning_rule`

Meaning:
A repeatedly tested Brain reasoning rule that may guide Brain work broadly.

Allowed use:
Use as active Brain guidance across lookup, ontology, comparison, intervention, workbench, and review workflows.

Forbidden use:
Do not treat it as a production schema field, hidden JSON requirement, public UI category, automation trigger, or case implementation contract unless it separately becomes `production_safe`.

Promotion condition:
Promote to `production_safe` only if production use is genuinely needed, repeated Brain use supports it, failure modes have been reviewed, and the Brain Review Board recommends a separate production promotion review.

Downgrade or retirement condition:
Downgrade to `advisory` or deprecate if the rule stops improving reasoning, causes repeated confusion, conflicts with newer governance, or becomes too broad to apply safely.

### `production_safe`

Meaning:
A Brain concept that is safe for production consideration only if production use is needed and separately approved.

Allowed use:
Use as a candidate for production promotion review after Brain Review Board review.

Forbidden use:
Do not directly edit `CASE_SCHEMA.md`, hidden JSON, public pages, course pages, UI, automation, `case-library.js`, production cases, or build behavior merely because a concept is `production_safe`.

Promotion condition:
Production use requires Brain Review Board approval, production promotion review, explicit human approval, and a scoped implementation plan for the affected production contracts.

Downgrade or retirement condition:
Downgrade to `stable_reasoning_rule`, deprecate, or archive if production need disappears, implementation risk is too high, or later evidence shows the concept should remain Brain-only.

### `deprecated`

Meaning:
A concept that should no longer be used in active Brain reasoning, usually because it has been replaced, is confusing, is stale, or remains low-fit.

Allowed use:
Mention only as a warning, transition note, or historical explanation while reviewers move away from it.

Forbidden use:
Do not use it as active guidance, ontology label, schema field, UI category, automation signal, hidden JSON value, or case implementation logic.

Promotion condition:
Restore only through Brain Review Board review with new evidence, clear examples and non-examples, and a reason the prior deprecation no longer applies.

Downgrade or retirement condition:
Move to `archived` when no active migration or warning value remains. Move to `rejected` if the concept is shown to be invalid rather than merely obsolete.

### `archived`

Meaning:
A concept retained for historical reasoning traceability only.

Allowed use:
Cite in historical notes, review records, or rationale for why a concept was replaced, rejected, or removed from active guidance.

Forbidden use:
Do not use as an active label, schema field, UI category, automation signal, hidden JSON value, production case implementation rule, or current Brain reasoning rule.

Promotion condition:
Reactivation requires a new lifecycle review starting from `candidate_gap` or `experimental`, not silent restoration.

Downgrade or retirement condition:
Keep archived unless the record is proven erroneous. If the concept should never be reused, mark it `rejected` in future review records.

### `rejected`

Meaning:
A concept that has been explicitly declined because it does not improve Brain reasoning or would create harmful drift.

Allowed use:
Use as a non-example or review precedent explaining what not to create.

Forbidden use:
Do not use it in active reasoning, ontology labels, production schema, hidden JSON, UI, public pages, automation, case implementation logic, or stable Brain guidance.

Promotion condition:
Reconsider only if new cross-case evidence appears and reviewers restart the lifecycle from `candidate_gap`.

Downgrade or retirement condition:
Keep rejected as a non-example. Do not archive in a way that makes the rejection harder to find.

## Concept Birth Rules

A new Brain concept may be proposed only when:

- existing concepts fail clearly
- the gap appears in more than one case or is strategically important
- the gap affects bill-changing logic, risk transfer, buyer decision, or intervention reasoning
- the proposal includes examples and non-examples

No concept may be created only because one case feels awkward.

A proposal should answer:

- What existing concept failed?
- What does the new concept explain better?
- What cases support the proposal?
- What cases are non-examples?
- What production contamination risk would the concept create if misused?

If these questions cannot be answered, keep the issue as `candidate_gap` or reject it.

## Promotion Path

The required promotion path is:

```text
candidate_gap
-> experimental
-> advisory
-> stable_reasoning_rule
-> production_safe, only if needed
```

No direct jump is allowed:

```text
candidate_gap -> production_safe
```

Promotion must remain need-based. A concept can improve manual Brain reasoning and still remain outside production schema, hidden JSON, public pages, UI, automation, and `case-library.js`.

## Downgrade Rules

A concept must be downgraded if:

- it creates repeated confusion
- it overlaps with a better existing concept
- it fails stress tests
- it encourages false analogy
- it is used outside its intended scope
- it lacks repeated use

Downgrade is not failure. It is how the Brain system prevents unstable vocabulary from becoming assumed truth.

## Deprecation Rules

A concept should be deprecated when:

- a better concept replaces it
- it causes more confusion than clarity
- it has not been used in recent Brain work
- it remains low-fit across repeated cases
- it cannot be defined with clear examples and non-examples

Deprecated concepts should be visible enough that reviewers know not to reuse them, but they should not remain in active guidance.

## Archive Rules

Archived concepts should be retained for historical reasoning traceability.

Archived concepts must not be used as:

- active labels
- schema fields
- UI categories
- hidden JSON values
- automation signals
- public case implementation logic
- active Brain reasoning rules

Archive records should preserve why the concept existed, why it stopped being active, and what replaced it if anything did.

## Rejection Rules

Reject a concept when:

- it is industry-specific rather than causal
- it duplicates an existing concept
- it describes surface pricing form rather than underlying mechanism
- it cannot support cross-case reasoning
- it is only useful for one case

Rejected concepts should be kept available as non-examples so future reviewers do not recreate the same weak concept under a new name.

## Review Cadence

Candidate gaps should be reviewed after repeated stress tests or when the same gap appears in strategically important Brain work.

Advisory concepts should be reviewed after several uses to confirm whether they reduce reasoning ambiguity or merely add vocabulary.

Stable concepts should be periodically challenged against unfamiliar cases, low-fit cases, and analogy stress tests.

Deprecated concepts should be checked before removal from active guidance to confirm they are no longer needed for migration, warning, or review context.

Review cadence should be evidence-sensitive. A concept used often but poorly needs review sooner than a concept used rarely but clearly.

## Production Contamination Prevention

Brain concepts cannot enter `CASE_SCHEMA.md`, hidden JSON, public UI, automation, public pages, course pages, `case-library.js`, build behavior, or production case implementation unless they pass Brain Review Board and production promotion review.

The following are not production approval:

- being useful in Brain Lookup
- appearing in an ontology stress test
- being marked `advisory`
- being marked `stable_reasoning_rule`
- being mentioned in an intervention simulation
- being useful for analogical comparison
- appearing repeatedly as a candidate gap

Production contracts remain separate from Brain reasoning. A Brain concept may be stable for reasoning and still have no production role.

## Zombie Concept Prevention

Every active Brain concept should have a current lifecycle state.

Unused concepts should not remain active forever. A concept should be challenged when:

- it has no recent Brain use
- reviewers cannot name clear examples and non-examples
- it appears in guidance but not in actual reasoning work
- it survives only because it was never reviewed
- a clearer concept now handles the same reasoning job

Zombie concepts should be downgraded, deprecated, archived, or rejected. Keeping a concept active requires evidence that it still improves Brain reasoning.

## Relationship To Existing Governance

This file governs concept lifecycle. It does not replace architecture governance, review board procedure, ontology definitions, retrieval rules, comparison rules, or intervention simulation rules.

Relationship to current and referenced Brain governance:

- `brain_architecture_governance_v1.md` governs Brain layer boundaries, authority hierarchy, dependency direction, stability categories, and separation from production contracts.
- `brain_review_board_v1.md` governs manual review procedure, review triggers, promotion review, conflict resolution, and allowed review outcomes.
- `pricing_reasoning_ontology.md` is referenced architecture context for advisory ontology concepts that should be subject to lifecycle review.
- `ontology_fit_classification.md` is referenced architecture context for fit language, low-fit cases, and candidate gap signals that may trigger lifecycle review.
- `brain_lookup_retrieval_policy.md` is referenced architecture context for retrieval gaps and lookup signals; retrieval can surface gaps but cannot promote concepts by itself.
- `analogical_comparison_protocol.md` is referenced architecture context for transfer quality and false analogy risk; comparison can stress-test concepts but cannot make them production-safe by itself.
- `pricing_intervention_simulation_protocol.md` governs intervention reasoning gaps, hypothesized effects, evidence status, and intervention discipline; it can reveal concept gaps but cannot promote concepts alone.

If a referenced governance or protocol file is not present in the checkout, it remains referenced architecture context only. This lifecycle governance file does not create, modify, or backfill absent referenced files.

## Failure Modes

| Failure mode | Definition | Guardrail |
| --- | --- | --- |
| vocabulary explosion | Too many concepts are created for small differences. | Require examples, non-examples, and clear failure of existing concepts before concept birth. |
| concept drift | A concept starts meaning different things in different Brain workflows. | Review actual usage and downgrade when scope becomes unclear. |
| false stability | A concept feels stable because it is familiar, not because it survived stress tests. | Require repeated cross-case evidence before stable status. |
| one-case overfitting | A concept is built around one awkward case. | Reject concepts that cannot support cross-case reasoning. |
| hidden schema promotion | Brain vocabulary silently enters hidden JSON or production schema. | Require Brain Review Board and production promotion review before production use. |
| advisory concept hardening | Manual guidance becomes treated as authority. | Keep `advisory` concepts subordinate to stable governance and production contracts. |
| deprecated concept reuse | Retired concepts keep appearing in active reasoning. | Mark deprecated and archived concepts as forbidden for active use. |

## V1 Non-Changes

This file does not modify production schema, hidden JSON, public pages, course pages, `case-library.js`, UI, database behavior, build behavior, automation, ontology labels, production cases, or existing Brain protocols.

It does not create new ontology labels.

It does not promote Brain concepts into production schema.

It does not modify `CASE_SCHEMA.md`.

It does not modify hidden JSON.

It does not modify public pages.

It does not modify course pages.

It does not modify `case-library.js`.

It does not add UI.

It does not add a database.

It does not add a build system.

It does not add automation.

V1 is documentation-only governance.
