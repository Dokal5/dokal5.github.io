# Pricing Case JSON Schema

This file defines the canonical structured JSON schema for pricing cases.

Use this file for case-data shape only. Layer 1 workflow belongs in `CASE_LAYER1_SCHEMA.md`. Public page order and section behavior belong in `CASE_TEMPLATE.html`.

## Purpose

The schema should make the pricing mechanism explicit enough that a page, visualization, simulator, or future automation can render the case without inferring the core logic from prose.

The canonical case JSON must answer:

1. what is monetized
2. what changes the bill
3. who pays more and why

The required shape below matches the hidden JSON contract already embedded in `CASE_TEMPLATE.html`.

## Required Shape

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
  "primary_component": "tier_ladder | matrix | driver_logic | trigger_path | value_extraction_map",
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

## Field Rules

- `decision_core` is required. Do not make the renderer infer the three pricing answers from tiers, segments, or narrative copy.
- `key_driver` must name the variable or pricing classification that most directly changes the bill.
- `drivers` must explain the strategic role of each pricing variable, not just name the variable.
- `formula` is required. It may be represented as a concise expression string or a structured object, but it must distinguish direct bill drivers from higher-level drivers that set parameters. Do not treat parameter-setting drivers such as plan tier as fixed constants when they determine prices inside the formula.
- `upgrade_triggers` must name the conditions that move a buyer into a higher payment level, tighter governance tier, or more expensive pricing classification.
- `primary_component` must use exactly one canonical token:
  - `tier_ladder`
  - `matrix`
  - `driver_logic`
  - `trigger_path`
  - `value_extraction_map`
- `primary_component` must match the mechanism logic, not the visible marketing layout.
- `visualization.primary_component` must match `primary_component` when both are present.
- `student_10_second_takeaway` should tell a learner what changes the bill in one sentence.
- `friction_points`, `risks`, and `strategic_insight` support teaching and critique, but they do not replace `decision_core`, `key_driver`, `drivers`, `formula`, or `upgrade_triggers`.

## Recommended Detail Shapes

```json
{
  "drivers": [
    {
      "driver": "",
      "type": "seat | role | usage | volume | asset | outcome | commitment | add_on",
      "pricing_role": "base_charge | variable_charge | multiplier | threshold | discount | cap | zero_price_layer | access",
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
    "output_label": "",
    "explanation": ""
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
    "primary_component": "tier_ladder | matrix | driver_logic | trigger_path | value_extraction_map",
    "supporting_components": [],
    "interactive_controls": [],
    "default_view": "",
    "student_prompt": ""
  }
}
```

## Acceptance Gate

A pricing case JSON object is complete only if:

- `decision_core` is explicitly filled
- `key_driver` is explicit
- `drivers` and `formula` can support the chosen mechanism
- `upgrade_triggers` explain how payment level changes
- `primary_component` matches the mechanism logic
- the structure can support both a public page and system use
