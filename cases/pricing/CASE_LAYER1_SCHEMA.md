# Pricing Case Layer 1 Schema

Layer 1 is the upstream structuring step before page rendering. Its job is to define the pricing logic clearly enough that the page, mechanism component, and index layer can render the case without re-interpreting it.

Layer 1 separates analytical structure from public-page presentation.

## Layer 1 Output

Every pricing case should produce three artifacts before page rendering:

1. `Case Insight Brief`
2. `Case JSON`
3. `Render Instruction`

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

## Layer 1 Acceptance Gate

Layer 1 is complete only if:

- the case can answer what is monetized
- the case can answer what changes the bill
- the case can answer who pays more and why
- the case explains why the pricing works, not only how it is structured
- `decision_core` is explicitly filled
- the main pricing driver is explicit
- `upgrade_triggers` are explicit
- the recommended component follows from the pricing logic
- the render instruction defines at least one failure mode
