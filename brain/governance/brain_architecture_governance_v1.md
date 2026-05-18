# Brain Architecture Governance v1

## Purpose

This file governs the relationship between Brain-layer reasoning documents, production contracts, and future reasoning expansion.

It exists to keep upstream pricing reasoning useful without letting it silently alter production data, rendering contracts, public pages, hidden JSON, component tokens, ontology labels, automation, or case implementation behavior.

Brain documents may guide how a reviewer reasons about a pricing case. Production contracts define what can be stored, rendered, indexed, and shipped.

## Why Governance Is Needed

The Brain system is growing from isolated reasoning aids into a layered architecture. Without explicit governance, that growth can create reasoning sprawl instead of reasoning quality.

Governance is needed to prevent:

- protocol overlap, where multiple documents claim to govern the same decision
- duplicated reasoning rules, where the same rule appears with different wording or authority
- circular references, where documents depend on each other without a clear source of truth
- ontology inflation, where every awkward mapping becomes a new label
- simulation drift, where counterfactuals start sounding like verified effects
- production schema pollution, where unstable Brain concepts enter `CASE_SCHEMA.md`
- advisory docs pretending to be production contracts
- everything-connects-to-everything failure, where no reviewer can tell which document governs what

The goal is not to slow reasoning down. The goal is to keep each layer narrow enough that future reasoning expansion remains reviewable.

## Brain Layers

### 1. Constitutional Layer

Purpose: non-negotiable reasoning principles.

Examples:

- `cognition/constitution/pricing_constitution.md`

Can govern:

- all reasoning behavior
- evidence discipline
- mechanism-first reasoning
- unsupported logic rejection

Cannot do:

- define production schema
- render public pages
- create component tokens
- change hidden JSON contracts

### 2. Workflow Layer

Purpose: operational flow from Brain Lookup to Workbench Artifact to review.

Examples:

- `cognition/brain_lookup.md`
- `cognition/workbench_artifact.md`

Can govern:

- process sequence
- artifact flow
- readiness gates
- implementation handoff requirements

Cannot do:

- override the constitution
- override production schema
- create ontology labels
- silently authorize public implementation

### 3. Ontology Layer

Purpose: controlled vocabulary for causal pricing patterns.

Examples:

- `brain/ontology/pricing_reasoning_ontology.md`
- `brain/ontology/ontology_fit_classification.md`
- `brain/ontology/pricing_ontology_stress_test_01.md`

Can govern:

- pattern language
- fit confidence
- candidate gaps
- ontology stress-test interpretation

Cannot do:

- directly change `cases/pricing/CASE_SCHEMA.md`
- directly change public UI
- create production component tokens
- turn a single awkward mapping into a schema field

### 4. Retrieval And Comparison Layer

Purpose: select and compare related cases.

Examples:

- `cognition/brain_lookup_retrieval_policy.md`
- `brain/analogical_reasoning/analogical_comparison_protocol.md`

Can govern:

- analogy quality
- retrieval roles
- comparison discipline
- transfer warnings

Cannot do:

- invent ontology labels
- override evidence rules
- redefine production schema
- treat similarity as proof of archetype validity

### 5. Intervention Layer

Purpose: simulate pricing changes and counterfactual effects.

Examples:

- `brain/intervention/pricing_intervention_simulation_protocol.md`

Can govern:

- intervention reasoning
- hypothesized effects
- evidence needs
- leading indicators and failure signals

Cannot do:

- treat simulations as verified effects
- treat simulations as production recommendations
- override case evidence
- bypass human approval

### 6. Production Contract Layer

Purpose: public case structure and implementation contracts.

Examples:

- `cases/pricing/CASE_SCHEMA.md`
- `cases/pricing/CASE_LAYER1_SCHEMA.md`
- `cases/pricing/COMPONENT_LIBRARY.md`
- `cases/pricing/CASE_TEMPLATE.html`
- `cases/pricing/CASE_VISUAL_DESIGN.md`

Can govern:

- hidden JSON
- rendering contracts
- component tokens
- page structure
- public case implementation behavior

Cannot do:

- silently absorb unstable Brain concepts
- treat advisory ontology labels as production-safe fields
- convert stress-test notes into stored schema without review

### 7. Advisory / Experimental Layer

Purpose: stress tests, candidate gaps, experimental reasoning notes.

Examples:

- ontology stress tests
- candidate ontology gaps
- exploratory comparison notes
- early intervention observations

Can govern:

- nothing directly

Cannot do:

- override stable docs
- override production contracts
- create schema fields
- create public UI dependencies
- define source-of-truth labels

## Authority Hierarchy

1. `pricing_constitution.md` governs reasoning principles.
2. `CASE_SCHEMA.md` governs production data structure.
3. `CASE_TEMPLATE.html` and `CASE_VISUAL_DESIGN.md` govern public rendering structure.
4. `COMPONENT_LIBRARY.md` governs allowed primary components.
5. `workbench_artifact.md` governs upstream artifact flow.
6. Ontology, Fit, Retrieval, Comparison, and Intervention docs guide reasoning, but do not override production contracts.
7. Stress tests and candidate gaps are advisory only.

Conflict rule:

- If a Brain-layer advisory document conflicts with `CASE_SCHEMA.md` or `CASE_TEMPLATE.html`, production contracts win.
- If a workflow document conflicts with `pricing_constitution.md`, `pricing_constitution.md` wins.
- If ontology labels are unstable, they must stay outside production schema.
- If comparison, retrieval, or intervention documents imply a new production field, that implication has no authority until explicitly promoted.

## Dependency Direction

Allowed direction:

```text
Constitution
-> Workflow
-> Ontology
-> Fit
-> Retrieval
-> Comparison
-> Intervention
-> Workbench Artifact
-> Production implementation
```

Production contracts may be referenced by Brain docs, but unstable Brain docs must not silently change production contracts.

Forbidden patterns:

- UI needs creating ontology labels
- `case-library.js` becoming the ontology source of truth
- intervention simulations being treated as verified causal effects
- retrieval policy inventing labels
- comparison protocol overriding ontology definitions
- advisory stress tests changing schema
- production pages depending on experimental Brain labels
- hidden JSON storing candidate gaps as canonical data
- public rendering behavior depending on exploratory reasoning notes

## Stability Categories

| Category | Definition |
| --- | --- |
| exploratory | Early idea, not reusable yet. |
| advisory | Useful for manual reasoning, but not authoritative over stable docs or production contracts. |
| stable | Tested across multiple cases and workflows. |
| production-safe | Ready to enter schema, UI, automation, or production implementation if explicitly approved. |

Current asset classification:

| Asset | Stability |
| --- | --- |
| `cognition/constitution/pricing_constitution.md` | stable |
| `cases/pricing/CASE_SCHEMA.md` | production-safe |
| `cases/pricing/CASE_TEMPLATE.html` | production-safe |
| `cases/pricing/COMPONENT_LIBRARY.md` | production-safe |
| `brain/ontology/pricing_reasoning_ontology.md` | advisory |
| `brain/ontology/ontology_fit_classification.md` | advisory |
| `cognition/brain_lookup_retrieval_policy.md` | advisory |
| `brain/analogical_reasoning/analogical_comparison_protocol.md` | advisory |
| `brain/intervention/pricing_intervention_simulation_protocol.md` | exploratory to advisory |
| ontology stress tests | exploratory |
| candidate ontology gaps | exploratory |

## Promotion Rules

A Brain concept may move into production schema or UI only after:

- repeated use across multiple cases
- stress testing against unfamiliar cases
- no unresolved conflict with production contracts
- clear definitions and examples
- reviewed failure modes
- evidence that the concept improves reasoning quality
- explicit human approval

Do not allow this direct jump:

```text
candidate gap -> schema field
```

Required path:

```text
candidate gap
-> repeated stress-test evidence
-> advisory concept
-> stable reasoning rule
-> production-safe field, only if needed
```

Promotion must be need-based. A concept can improve manual reasoning and still remain outside schema, UI, automation, and public pages.

## Reasoning Failure Modes

| Failure mode | Definition | Example | Guardrail |
| --- | --- | --- | --- |
| false analogy | Treating two cases as equivalent when their bill-changing mechanisms differ. | Comparing a usage meter to a plan ladder because both have tiers. | Compare the actual driver that changes the bill before transferring lessons. |
| surface pricing similarity | Matching cases by visible pricing form instead of causal pricing logic. | Calling two offers subscriptions even though one monetizes access and the other monetizes usage intensity. | Require `decision_core.what_changes_the_bill` before declaring similarity. |
| subscription-form confusion | Assuming recurring payment means the same pricing mechanism. | Treating membership renewal, SaaS seats, and usage bundles as the same archetype. | Separate payment cadence from monetized unit and bill trigger. |
| hidden bill-trigger confusion | Missing the condition that actually causes spend to rise. | Focusing on plan names while the bill changes through overage, service boundary, or fulfillment threshold. | Identify the key driver and upgrade trigger before writing comparison claims. |
| risk-transfer blindness | Missing which risk moves from seller to buyer or buyer to seller. | Describing a commitment discount without naming demand risk transfer. | State what risk moves in strategic logic or intervention reasoning. |
| unsupported causal overclaim | Presenting hypothesized logic as proven. | Saying a fee increases retention without direct evidence. | Use evidence status and cautious language unless verified. |
| intervention overconfidence | Treating a simulated change as a tested recommendation. | Recommending fee visibility changes as guaranteed conversion improvements. | Intervention simulation must state confidence level and evidence status. |
| bundle flattening | Treating a bundle as one undifferentiated price. | Ignoring separate access, usage, reward, service, or support boundaries inside one offer. | Map bundle boundaries to monetized unit, driver, and buyer movement. |
| ontology overreach | Creating or applying labels beyond their tested fit. | Naming a new archetype from one awkward case. | Keep candidate gaps exploratory until repeated stress tests support them. |
| schema pollution | Adding unstable reasoning concepts to production data contracts. | Adding ontology labels to hidden JSON before promotion. | Require the full promotion path and explicit human approval. |
| production leakage | Letting experimental Brain concepts affect public pages or UI. | Rendering experimental labels on case pages. | Production pages may depend only on production-safe contracts. |
| protocol bloat | Creating a new protocol for a problem an existing layer already covers. | Adding a separate comparison policy when the retrieval and comparison layer can handle it. | Require a gap statement before creating any new protocol. |

## Governance Rules

- No new reasoning protocol unless the existing layers cannot handle the problem.
- No production schema change from a single case.
- No ontology label from a single awkward mapping.
- Low-fit analogies cannot be archetype proof.
- Intervention simulation must state evidence status.
- Every protocol must say what it does not govern.
- Future automation must be read-only first unless explicitly approved.
- Brain documents should reduce ambiguity, not create process bloat.
- Production contracts remain the authority for stored case data and public rendering.
- Candidate gaps are not production fields.
- Stress tests are evidence inputs, not schema migrations.
- Comparison transfer warnings must not override evidence requirements.

## Future Uses

This governance map supports:

- alignment audits by showing which document has authority over each decision
- contributor onboarding by explaining the Brain layers and production boundary
- future automation by defining read-only-first limits and promotion gates
- schema promotion decisions by separating exploratory, advisory, stable, and production-safe concepts
- reasoning QA by naming common failure modes and guardrails
- future decision engine work by clarifying which reasoning concepts are mature enough to be operationalized
- preventing Brain drift by blocking everything-connects-to-everything architecture

## Suggested Next Step

Freeze new protocol creation temporarily.

Manually run the full Brain workflow on more hard cases.

Use this governance map during reviews to classify conflicts, authority, stability, and promotion risk.

Only after those reviews should any Brain concept be considered for schema promotion.

## V1 Non-Changes

This file does not modify production schema, hidden JSON, public pages, `case-library.js`, UI, automation, ontology labels, build behavior, production cases, course pages, database behavior, or existing Brain protocols.

It creates no new source of truth for pricing case data. It adds no public rendering behavior. It does not promote Brain concepts into production schema.

V1 is documentation-only governance.
