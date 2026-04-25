# Pricing Case Framework

This file defines the public-page structure for pricing case pages under `cases/pricing/`.

Layer 1 defines the analytical structure. The public page defines the reading and teaching sequence. The public page does not need to follow the same order as Layer 1.

The page is not a description of pricing. The page is a tool to understand what changes the bill.

## Public Page Rules

- Keep the page modular and scan-first.
- Core Insight must appear before detailed architecture.
- The main mechanism component must follow `cases/pricing/COMPONENT_LIBRARY.md`.
- Do not turn the page into a feature comparison.
- Do not add marketing copy, long narrative setup, framework justification, or a separate transferable-principle callout.
- Keep the hero company lockup immediately after `.case-kicker`.
- If a verified local logo asset exists, place the `<img>` inside `.case-company-icon`; otherwise use `.case-company-icon case-company-icon--text`.
- Keep extra scoring metadata in `case-library.js`; do not render scoring on the public case page.
- Decision Core Alignment: each public page must visibly answer what is monetized, what changes the bill, and who pays more and why.
- Keep the embedded JSON object for system use, but do not render a visible Case Snapshot.

## Public Section Order

Every public pricing case page should follow this reader-facing order:

1. `Pricing Page Visual`
2. `Core Insight`
3. `Pricing Logic Deconstruction`
4. `Pricing Matrix / Mechanism Logic`
5. `Pricing Architecture`
6. `Decision Tension Layer`
7. `Optional Simulator`
8. `Strategic Opportunity`
9. `References`
10. `Hidden JSON Schema`

## Section Rules

### 1. Pricing Page Visual

Show the original pricing artifact or pricing page screenshot. This grounds the analysis in a real object.

If no original pricing artifact is available, use a reconstructed pricing visual based on verified public information and label it clearly as reconstructed.

### 2. Core Insight

Show the main pricing insight in no more than three short bullets. These bullets must align with `decision_core`.

### 3. Pricing Logic Deconstruction

Explain the core pricing logic before showing the full architecture. This section should make clear what changes the bill.

### 4. Pricing Matrix / Mechanism Logic

Use the correct mechanism format:

- matrix for two-dimensional pricing logic
- tier ladder for named plans
- driver logic for usage-based pricing
- trigger path for threshold-based pricing
- value extraction map for value-capture mismatch

The selected mechanism must follow `COMPONENT_LIBRARY.md` and align with `drivers`, `formula`, `upgrade_triggers`, and `decision_core`.

### 5. Pricing Architecture

Organize the structure into plan tiers, segments, drivers, and upgrade triggers. This section may show the full structure, but should not replace the mechanism explanation.

### 6. Decision Tension Layer

Show where the pricing model creates classification friction, buyer confusion, admin burden, forecasting difficulty, or governance tension.

### 7. Optional Simulator

Include only when interaction makes the pricing mechanism easier to understand. Do not add a simulator just because the template allows it.

### 8. Strategic Opportunity

Explain the competitor attack angle or improvement opportunity created by the pricing structure. It must follow from the decision tension or structural weakness.

### 9. References

Use public primary sources where possible.

References support observed facts. Strategic interpretation and inferred pricing logic should be clearly distinguishable from sourced facts.

### 10. Hidden JSON Schema

Embed the Layer 1 JSON object for system use. Do not render a visible Case Snapshot and do not show raw JSON to readers.

```html
<script type="application/json" id="pricing-case-schema">
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
</script>
```

## Interactive Field Priority

- `primary_component` defines the main explanation layer.
- `drivers`, `formula`, and `upgrade_triggers` must support the primary component.
- `visualization` must not introduce new logic.
- Do not render multiple competing explanations.

## Funnel Logic Rule

Funnel Logic may be used only when the case is about adoption, activation, conversion, or free-to-paid movement. It should not be required for all pricing cases.

## Reusable Components

For component definitions and primary-component selection, use `cases/pricing/COMPONENT_LIBRARY.md`.

Existing HTML/CSS primitives from `CASE_TEMPLATE.html` and `assets/css/pricing-cases.css` may be reused, but the public reading order above is the source of truth.

## Acceptance Gate

A public case page is ready only if:

- the pricing mechanism is understandable within 10 seconds
- Core Insight appears before detailed architecture
- the main mechanism component follows from `COMPONENT_LIBRARY.md`
- Decision Tension explains the buyer-side difficulty
- Strategic Opportunity follows from the tension or structural weakness
- Optional Simulator is used only when it clarifies bill movement or value capture
- the embedded JSON remains valid
- References include public primary sources where available
