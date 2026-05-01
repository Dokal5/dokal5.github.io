# Pricing Case Layer 1 Schema

Layer 1 is the upstream structuring step before page rendering. Its job is to define the pricing logic clearly enough that the page, mechanism component, and index layer can render the case without re-interpreting it.

Layer 1 separates analytical structure from public-page presentation.

## Layer 1 Output

Every pricing case should produce four artifacts before page rendering:

1. `Case Insight Brief`
2. `Case JSON`
3. `Render Instruction`
4. `Strategic Logic`

## 1. Case Insight Brief

The brief is a compact analyst-facing summary. It should explain the pricing mechanism without page layout, visual styling, or long prose.

Required fields:

```md
# Case Insight Brief

Company:
Case ID:
Pricing model:
Primary insight:
What is monetized:
How users are segmented:
What drives price differences:
Why this pricing works:
Where friction appears:
Where risk appears:
Structural weakness:
Student 10-second takeaway:
```

Rules:

- Keep `Primary insight` to one sentence.
- Use `Why this pricing works` for causal judgment, not structure restatement.
- Keep `Student 10-second takeaway` to one sentence.
- Do not describe page sections.
- Do not include marketing copy.
- Do not list product features unless a feature is a pricing boundary.

## 2. Case JSON

The Layer 1 case JSON must conform to `CASE_SCHEMA.md`.

Additional Layer 1 rules:

- `schema_version` must be `"1.0"` in every Layer 1 case JSON object.
- `decision_core` must answer:
  - what is monetized
  - what changes the bill
  - who pays more and why
- `primary_component` must use one canonical token from `COMPONENT_LIBRARY.md`:
  - `tier_ladder`
  - `matrix`
  - `driver_logic`
  - `trigger_path`
  - `value_extraction_map`
- `primary_component` must follow the pricing logic, not visible page aesthetics.
- `student_10_second_takeaway` should tell a learner what changes the bill within one sentence.

Deterministic mapping rules:

- `Company` remains in the brief only. It does not map into `Case JSON`.
- `schema_version` is not derived from the brief. It must be set directly to `"1.0"` in `Case JSON`.
- `Case ID` in the brief maps to `case_id`.
- `Pricing model` in the brief maps to `pricing_model`.
- `Primary insight` in the brief maps to `pricing_logic`.
- `What is monetized` in the brief maps to `decision_core.what_is_monetized`.
- `How users are segmented` in the brief maps to `segmentation_type`. Any explicit segment labels belong in `segments`.
- `What drives price differences` in the brief maps to `decision_core.what_changes_the_bill`. The dominant driver named in that statement must also populate `key_driver`.
- `Why this pricing works` remains in the brief only unless the same reasoning is stated directly in `strategic_insight`. Do not infer that mapping silently.
- `Where friction appears` in the brief maps to `friction_points` as one or more array items.
- `Where risk appears` in the brief maps to `risks` as one or more array items.
- `Structural weakness` in the brief maps to `structural_weakness`.
- `Student 10-second takeaway` in the brief maps to `student_10_second_takeaway`.

## 3. Render Instruction

The render instruction tells the UI layer what to emphasize. It selects components and interaction intent, not CSS or final visual design.

Required shape:

```json
{
  "case_id": "",
  "render_goal": "",
  "primary_component": "tier_ladder | matrix | driver_logic | trigger_path | value_extraction_map",
  "secondary_components": [],
  "first_screen_priority": [],
  "interactive_controls": [],
  "avoid": [],
  "failure_modes": [],
  "data_dependencies": []
}
```

Field guidance:

- `render_goal`: what the student should understand fastest
- `primary_component`: the one component that carries the mechanism logic
- `secondary_components`: supporting context only
- `first_screen_priority`: what must appear before detailed architecture
- `interactive_controls`: variables a learner can change
- `avoid`: render choices that would obscure the pricing logic
- `failure_modes`: what a weak rendering would make unclear
- `data_dependencies`: case JSON fields the renderer must consume

Deterministic render mapping rules:

- `Render Instruction.case_id` must match `Case JSON.case_id`.
- `Render Instruction.primary_component` must match `Case JSON.primary_component`.
- `Render Instruction.data_dependencies` must include `decision_core`, `key_driver`, `upgrade_triggers`, and `primary_component`.
- `Render Instruction.first_screen_priority` must place `decision_core` before detailed architecture.
- `Render Instruction.secondary_components` may support the primary mechanism only. They may not introduce new pricing logic.
- `Render Instruction.interactive_controls` may reference only existing drivers or formula variables already defined in the case JSON.

## 4. Strategic Logic

Purpose:

Strategic Logic makes the assumed causal chain behind the pricing case explicit. It is not proof. It is the case's dominant hypothesized pricing logic.

Required shape:

```json
{
  "case_id": "",
  "strategic_logic": {
    "dominant_causal_chain": [
      "customer condition",
      "behavior change",
      "pricing driver",
      "billing change",
      "financial outcome"
    ],
    "main_assumption": "",
    "main_failure_risk": "",
    "evidence_status": "observed | inferred | hypothesized"
  }
}
```

Field guidance:

- `dominant_causal_chain`: 3 to 5 steps only. Prefer the sequence customer condition -> behavior change -> pricing driver -> billing change -> financial outcome.
- `main_assumption`: the one causal belief the pricing model relies on.
- `main_failure_risk`: the most likely way the logic breaks.
- `evidence_status`: how confident the analyst can be based on available evidence.

Deterministic mapping rules:

- `Strategic Logic.case_id` must match `Case JSON.case_id`.
- `Strategic Logic.strategic_logic` maps directly to `Case JSON.strategic_logic`.
- `Strategic Logic` must not modify `primary_component`.
- `Strategic Logic` must not introduce new drivers, tiers, segments, or upgrade triggers.
- If `Strategic Logic` reveals a missing driver or trigger, update `Case JSON` first.
- `Strategic Logic` should use the same `key_driver` already defined in `Case JSON`.
- `Strategic Logic` is analyst-facing and may be rendered publicly only as a teaching aid.

## Layer 1 Acceptance Gate

Layer 1 is complete only if:

- the case can answer what is monetized
- the case can answer what changes the bill
- the case can answer who pays more and why
- the case explains why the pricing works, not only how it is structured
- `decision_core` is explicitly filled
- `schema_version` is explicitly set to `"1.0"`
- the main pricing driver is explicit
- `upgrade_triggers` are explicit
- every case includes one dominant hypothesized causal chain
- the chain has 3 to 5 steps
- the chain includes the main pricing driver
- the chain has a main assumption and main failure risk
- the chain remains pricing-relevant and does not become a general business strategy map
- the recommended component follows from the pricing logic
- the render instruction defines at least one failure mode
