# Pricing Constitution

This constitution governs upstream reasoning before generating a Layer 1 pricing case brief.

It does not replace `/cases/pricing/CASE_SCHEMA.md`, `/cases/pricing/CASE_LAYER1_SCHEMA.md`, `/cases/pricing/COMPONENT_LIBRARY.md`, `/cases/pricing/CASE_TEMPLATE.html`, or `/cases/pricing/CASE_VISUAL_DESIGN.md`.

## Governing Principles

1. Pricing cases are mechanism explanations, not company summaries.
2. Every case must answer:
   - what is monetized
   - what changes the bill
   - who pays more and why
3. Decision Core is mandatory.
4. Reasoning must be mechanism-first. Start with how the bill changes, then explain the surrounding strategy.
5. Strategic logic is hypothesized causal logic, not proof.
6. Pricing tension must come from pricing structure, not from generic UX, product, or brand complaints.
7. Conceptual clarity is more important than completeness.
8. No unsupported pricing logic may be introduced.
9. Layer 1 governs rendering, not the reverse.
10. `primary_component` must represent what most directly changes the bill.
11. Public pricing pages are decision interfaces, not narrative reports.
12. Consistency with `/cases/pricing/CASE_SCHEMA.md` and `/cases/pricing/COMPONENT_LIBRARY.md` is mandatory.

## Decision Core Requirement

A case is incomplete unless `decision_core` clearly answers:

- `what_is_monetized`: what the company actually charges for
- `what_changes_the_bill`: the condition, variable, threshold, or classification that changes spend
- `who_pays_more_and_why`: which buyers pay more and the causal pricing reason

Do not infer these answers from prose. State them directly in Layer 1 and in the Case JSON.

## Mechanism-First Reasoning

Begin with the bill-changing mechanism:

1. Identify the monetized unit or access point.
2. Identify the driver that changes the bill.
3. Identify the buyer movement, threshold, tier, segment, formula, or value-capture point that produces a higher bill.
4. Only then explain why the structure may work strategically.

Avoid company-history summaries, broad business-model descriptions, feature lists, or brand narratives unless they directly explain pricing structure.

## Strategic Logic Discipline

Strategic logic explains the assumed causal chain behind the pricing structure. It is not proof.

It must:

- include customer condition, behavior change, pricing driver, billing change, and financial outcome
- keep `behavior_change` explicit
- map `pricing_driver` to `key_driver`
- remain a pricing-relevant causal chain
- use cautious evidence language when claims are inferred or hypothesized

It must not:

- claim causality without evidence
- become a full company strategy map
- introduce new drivers, tiers, segments, or upgrade triggers absent from the Case JSON
- replace the selected primary component

## Pricing Tension Discipline

Pricing tension must be caused by pricing structure.

Valid tension comes from:

- a named driver
- a segmentation rule
- an upgrade trigger
- a threshold
- a billing formula
- a value-capture boundary

Invalid tension includes generic UX complaints, product complaints, page design criticism, brand criticism, or customer annoyance that is not caused by pricing structure.

## Component Discipline

Select exactly one `primary_component` from `/cases/pricing/COMPONENT_LIBRARY.md`:

- `tier_ladder`
- `matrix`
- `driver_logic`
- `trigger_path`
- `value_extraction_map`

The selected component must represent what most directly changes the bill. Supporting overlays may clarify the decision, but they must not become new component tokens or ontology systems.

## Rendering Discipline

Layer 1 governs rendering. Rendering does not govern Layer 1.

The Layer 1 brief must identify the pricing mechanism clearly enough that the public page can render a decision interface using `/cases/pricing/CASE_TEMPLATE.html` and `/cases/pricing/CASE_VISUAL_DESIGN.md`.

Do not add prose-heavy rendering instructions, decorative visual systems, new component categories, or new schema concepts.

## Unsupported Logic Rule

Unsupported pricing logic must be rejected.

If a pricing claim, bill driver, upgrade condition, strategic causal step, bill example, boundary crossing, or decision move is not supported by the available evidence or by the canonical Case JSON, remove it or label it as unsupported and request evidence.

Do not invent exact prices, thresholds, formulas, tiers, segmentation rules, or causal outcomes.
