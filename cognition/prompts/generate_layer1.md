# Prompt: Generate Pricing Layer 1

Use this prompt when ChatGPT must generate a Layer 1 analytical brief for a pricing case.

## Required Reading

Read these files before generating output:

1. `/cognition/constitution/pricing_constitution.md`
2. `/cases/pricing/CASE_SCHEMA.md`
3. `/cases/pricing/CASE_LAYER1_SCHEMA.md`
4. `/cases/pricing/COMPONENT_LIBRARY.md`
5. `/cases/pricing/CASE_TEMPLATE.html`
6. `/cases/pricing/CASE_VISUAL_DESIGN.md`

## Task

Generate the nine Layer 1 artifacts required by `/cases/pricing/CASE_LAYER1_SCHEMA.md`:

1. `Case Insight Brief`
2. `Case JSON`
3. `Render Instruction`
4. `Strategic Logic`
5. `Decision Alternatives`
6. `Bill Examples`
7. `Boundary Crossing Map`
8. `Decision Priority`
9. `Reasoning Error Check`

## Reasoning Requirements

Before writing the artifacts:

- identify what is monetized
- identify what changes the bill
- identify who pays more and why
- identify the dominant pricing driver
- identify the evidence level for the pricing logic
- reject any unsupported pricing logic

Do not write a company summary. Write a mechanism explanation.

## Case JSON Requirements

The Case JSON must conform to `/cases/pricing/CASE_SCHEMA.md`.

It must:

- set `schema_version` to `"1.0"`
- include a complete `decision_core`
- include explicit `key_driver`
- include `drivers`, `formula`, and `upgrade_triggers`
- include `strategic_logic`
- include the decision training overlays required by the schema
- avoid introducing unsupported drivers, tiers, segments, triggers, formulas, prices, or pricing moves

## Primary Component Selection

Select exactly one `primary_component` from `/cases/pricing/COMPONENT_LIBRARY.md`:

- `tier_ladder`
- `matrix`
- `driver_logic`
- `trigger_path`
- `value_extraction_map`

Select the component based on what most directly changes the bill, not on visible page aesthetics.

Do not create aliases, synonyms, new component tokens, framework overlays, or ontology systems.

## Render Instruction Requirements

The Render Instruction must follow `/cases/pricing/CASE_TEMPLATE.html` and `/cases/pricing/CASE_VISUAL_DESIGN.md`.

It must:

- match `Case JSON.case_id`
- match `Case JSON.primary_component`
- place `decision_core` before detailed architecture in `first_screen_priority`
- include `decision_core`, `key_driver`, `upgrade_triggers`, and `primary_component` in `data_dependencies`
- define at least one rendering failure mode
- describe decision-interface emphasis, not CSS implementation
- avoid paragraph-heavy direct JSON-to-card rendering

## Acceptance Gates

Before final output, run these checks and include the results:

### Core Logic Gate

- Does the case answer what is monetized?
- Does the case answer what changes the bill?
- Does the case answer who pays more and why?
- Is `decision_core` complete?
- Is `schema_version` exactly `"1.0"`?
- Is the main pricing driver explicit?
- Do all artifacts map back to Case JSON?

### Strategic Logic Gate

- Are all five strategic logic slots filled?
- Is `behavior_change` present?
- Does `pricing_driver` map to `key_driver`?
- Is the chain 3 to 5 pricing-relevant steps?
- Is causal language appropriately observed, inferred, or hypothesized?
- Is any unsupported causal proof claim removed?

### Mechanism Rendering Gate

- Is exactly one valid `primary_component` selected?
- Does the component show what most directly changes the bill?
- Can the public page follow the visual design contract without becoming a prose report?
- Are unsupported components, overlays, or ontology systems avoided?

### Decision Training Gate

- Are Decision Alternatives concrete pricing moves?
- Do Decision Alternatives include trade offs and leading indicators?
- Are Bill Examples present when required?
- Is Boundary Crossing Map present when required?
- Does Decision Priority rank existing alternatives only?
- Is the first priority testable and tied to a success metric?

### Reasoning Integrity Gate

- Does Reasoning Error Check include at least three checks?
- Do evidence needs and failure signals appear?
- Do checks link back to existing case logic?
- Has unsupported pricing logic been rejected?

## Final Output

Return the nine Layer 1 artifacts followed by the acceptance gate results.

If any gate fails, do not present the brief as implementation-ready. List the required fixes before Codex implementation.
