# Prompt: Constitutional Review For Pricing Layer 1

Use this prompt when ChatGPT must review a completed Layer 1 pricing brief before Codex implementation.

## Required Reading

Review the Layer 1 brief against:

1. `/cognition/constitution/pricing_constitution.md`
2. `/cases/pricing/CASE_SCHEMA.md`
3. `/cases/pricing/CASE_LAYER1_SCHEMA.md`
4. `/cases/pricing/COMPONENT_LIBRARY.md`
5. `/cases/pricing/CASE_TEMPLATE.html`
6. `/cases/pricing/CASE_VISUAL_DESIGN.md`

## Review Standard

The review must decide whether the brief is ready for Codex implementation.

Use the constitution to evaluate reasoning discipline, and use `/cases/pricing` contracts to evaluate schema, artifact, component, and rendering readiness.

Do not add new ontology systems, schema fields, component tokens, automation steps, retrieval requirements, or agent orchestration.

## Required Output

Return:

```md
# Constitutional Review

Status: PASS | FAIL

## Decision Core Consistency
[Assess whether decision_core directly answers what is monetized, what changes the bill, and who pays more and why.]

## What Changes The Bill Clarity
[Assess whether the bill-changing driver is explicit and consistent across Case JSON, Strategic Logic, Bill Examples, Boundary Crossing Map, and Render Instruction.]

## Primary Component Validity
[Assess whether exactly one valid primary_component from COMPONENT_LIBRARY.md is selected and whether it represents what most directly changes the bill.]

## Strategic Logic Validity
[Assess whether strategic logic is a hypothesized pricing-relevant causal chain, includes behavior_change, maps pricing_driver to key_driver, and avoids causal overclaim.]

## Visual Rendering Readiness
[Assess whether the Render Instruction can follow CASE_TEMPLATE.html and CASE_VISUAL_DESIGN.md without becoming direct JSON-to-card rendering or a prose report.]

## Unsupported Logic Risks
[List unsupported prices, drivers, triggers, segments, strategic claims, bill examples, boundary crossings, decision moves, or rendering assumptions.]

## Required Fixes Before Codex Implementation
[List required fixes. If Status is PASS, write "None."]
```

## PASS Criteria

Return `PASS` only if:

- the brief complies with `pricing_constitution.md`
- all nine Layer 1 artifacts are present
- Case JSON conforms to `CASE_SCHEMA.md`
- `decision_core` is complete
- `primary_component` is exactly one valid token from `COMPONENT_LIBRARY.md`
- strategic logic is complete and appropriately cautious
- Render Instruction follows `CASE_TEMPLATE.html` and `CASE_VISUAL_DESIGN.md`
- no unsupported pricing logic is introduced
- all required fixes are either absent or already resolved

Return `FAIL` if any condition above is not met.
