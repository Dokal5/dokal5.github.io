# Pricing Case Layer 1 Schema

Layer 1 is the upstream case structuring process before rendering. Its job is to define the pricing insight clearly enough that a page, simulator, diagram, or future React component can render it without re-interpreting the case.

Layer 1 separates pricing insight definition from UI implementation.

## Layer 1 Output

Every case should produce three artifacts before page rendering:

1. `Case Insight Brief`
2. `Case JSON`
3. `Render Instruction`

## 1. Case Insight Brief

The brief is a compact analyst-facing summary. It should explain the pricing logic without page layout, visual styling, or long prose.

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
- Use `Why this pricing works` for causal judgment: explain why the structure makes sense from customer behavior, value capture, willingness to pay, cost structure, adoption logic, or governance logic.
- Do not repeat the pricing structure in `Why this pricing works`. Explain the causal logic behind it.
- Keep `Student 10-second takeaway` to one sentence.
- Do not describe page sections.
- Do not include marketing copy.
- Do not list product features unless a feature is a pricing boundary.

Bad `Why this pricing works`: Figma charges different prices for different roles.

Better `Why this pricing works`: Figma can charge more for creator and developer roles because those users create or operationalize more workflow value, while free viewers reduce adoption friction.

## 2. Case JSON

The case JSON is the canonical structured data object. It should include enough information to render the case and any interactive visualization.

`decision_core` must answer the three pricing questions directly. Do not make the renderer infer them from tiers, segments, or prose.

Required shape:

```json
{
  "case_id": "",
  "case_type": "saas | retail | subscription | marketplace | service | hardware | restaurant | logistics | other",
  "evidence_level": "observed | inferred | hypothesized",
  "pricing_model": "",
  "value_metric": "",
  "segmentation_type": "",
  "tiers": [],
  "segments": [],
  "pricing_logic": "",
  "key_driver": "",
  "drivers": [],
  "formula": "",
  "upgrade_triggers": [],
  "visualization": {},
  "primary_component": "",
  "decision_core": {
    "what_is_monetized": "",
    "what_changes_the_bill": "",
    "who_pays_more_and_why": ""
  },
  "student_10_second_takeaway": "",
  "friction_points": [],
  "risks": [],
  "structural_weakness": "",
  "strategic_insight": ""
}
```

Recommended detail shapes:

```json
{
  "case_type": "saas | retail | subscription | marketplace | service | hardware | restaurant | logistics | other",
  "evidence_level": "observed | inferred | hypothesized",
  "drivers": [
    {
      "driver": "",
      "type": "seat | role | usage | volume | asset | outcome | commitment | add_on",
      "pricing_role": "base_charge | variable_charge | multiplier | threshold | discount | cap",
      "direction": "increase_revenue | reduce_cost | segment_users | enforce_upgrade | reduce_friction | improve_adoption",
      "effect": "",
      "student_label": ""
    }
  ],
  "formula": {
    "expression": "",
    "variables": [
      {
        "symbol": "",
        "label": "",
        "maps_to_driver": ""
      }
    ],
    "output_label": ""
  },
  "upgrade_triggers": [
    {
      "trigger": "",
      "from": "",
      "to": "",
      "why_it_happens": "",
      "pricing_effect": ""
    }
  ],
  "visualization": {
    "primary_component": "",
    "supporting_components": [],
    "interactive_controls": [],
    "default_view": "",
    "student_prompt": ""
  },
  "decision_core": {
    "what_is_monetized": "",
    "what_changes_the_bill": "",
    "who_pays_more_and_why": ""
  }
}
```

Use `case_type` for indexing and comparison across cases.

Use `evidence_level` to mark confidence:

- `observed`: directly visible in public pricing, documentation, or primary sources.
- `inferred`: reasoned from public evidence but not stated directly by the company.
- `hypothesized`: plausible but weakly evidenced; should be used sparingly.

Use `direction` to explain what each driver does strategically. A driver is incomplete if it only names a variable and does not explain whether that variable increases revenue, reduces cost, segments users, enforces upgrade, reduces friction, or improves adoption.

## 3. Render Instruction

The render instruction tells the UI layer what to emphasize. It should select components and interaction intent, not define CSS or final layout.

Required fields:

```json
{
  "case_id": "",
  "render_goal": "",
  "primary_component": "",
  "secondary_components": [],
  "first_screen_priority": [],
  "interactive_controls": [],
  "avoid": [],
  "failure_modes": [],
  "data_dependencies": []
}
```

Field guidance:

- `render_goal`: what the student should understand fastest.
- `primary_component`: the one component that carries the case logic.
- `secondary_components`: supporting components only when they clarify the primary mechanism.
- `first_screen_priority`: fields or claims that must appear before secondary detail.
- `interactive_controls`: the variables a learner can change.
- `avoid`: visual or content choices that would obscure the pricing mechanism.
- `failure_modes`: what a bad rendering would make unclear.
- `data_dependencies`: JSON fields the renderer must consume.

Example failure modes:

- user cannot identify the main pricing driver within 5 seconds
- tier ladder becomes a feature comparison table
- segmentation and pricing layers are visually merged
- interactive controls change values but do not reveal pricing logic

## Practical Scope Rule

A Layer 1 case should be fillable within 30 minutes. If not, either the schema is too heavy or the case is too complex.

Do not add fields unless they improve:

1. pricing judgment
2. renderability
3. teaching clarity

## Layer 1 Acceptance Gate

Layer 1 is complete only if:

- the case can answer what is monetized
- the case can answer what changes the bill
- the case can answer who pays more and why
- the case explains why the pricing works, not only how it is structured
- `decision_core` is explicitly filled
- the main pricing driver is explicit
- each driver has a strategic direction
- the recommended component follows from the pricing logic
- the JSON can support a static page and an interactive visualization
- the render instruction defines at least one failure mode
