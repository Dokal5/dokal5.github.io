# Pricing Case JSON Schema

This file defines the canonical structured JSON schema for pricing cases.

## Purpose

Each case should do three things clearly:

1. Show how the pricing structure actually works.
2. Explain where the buying friction or strategic weakness sits.
3. Leave the reader with a reusable commercial takeaway.

The page should stay abstract and teachable. It is not a dump of research notes, framework mapping, or internal review commentary.

## Public Page Rules

For every published case page:

- Write for a public reader, not for an internal PR review.
- Keep the page focused on the case itself, not on which framework it matches.
- Use the section headings and order exactly as written below.
- The right sidebar should be `Case Snapshot` only. Do not render a sidebar `Scoreboard`.
- The hero must include a visible company lockup immediately after `case-kicker`: `.case-company-lockup`, `.case-company-icon`, and `.case-company-name`.
- If a verified local logo asset exists, place the `<img>` inside `.case-company-icon`; otherwise use `.case-company-icon case-company-icon--text` with a short 2-3 character company initial fallback.
- Do not include a separate `Framework Links` section.
- Do not include a separate `Transferable principle` or callout box.
- Do not add extra “why this belongs in EVAC/Marketing” explanation on the page.
- Primary sources must use APA-style reference entries.
- The key analytical sentence in each major section should be bolded inline.

## Required Section Order

Every pricing case page should follow this order:

1. `Case Claim`
2. `Tier Ladder Analysis`
3. `Mechanism Summary`
4. `Target Buyer Inference`
5. `Decision Friction`
6. `Exposure and Risk Logic`
7. `Logic Flaw and Vulnerability` or `Logic Flaw, Vulnerability, and Strategic Opportunity`
8. `Primary Sources`

If a visual helps, place the pricing-page screenshot inside the pricing section rather than creating a separate standalone section.

## Writing Rules By Section

### 1. Case Claim

- Open with the most important analytical claim.
- The strongest takeaway sentence in the paragraph should be in `<strong>...</strong>`.
- Do not add a separate principle box below it.

### 2. Tier Ladder Analysis

- Analyze the visible tier ladder and what matters commercially.
- State how many visible tiers exist.
- Explain the likely target buyer for each tier.
- Name how each tier is labeled on the page.
- Identify the anchor price for each tier when public pricing is shown.
- State the price gap between tiers when the math is visible.
- Explain the value-add argument used to push buyers upward.
- Include the screenshot and a short caption if useful.
- Bold the sentence that explains why the ladder matters.

### 3. Mechanism Summary

- Explain the mechanism in plain language.
- Bold the sentence that states what the real mechanism is.

### 4. Target Buyer Inference

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
