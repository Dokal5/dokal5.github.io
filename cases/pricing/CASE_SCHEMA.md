# Pricing Case JSON Schema

This file defines the canonical structured JSON schema for pricing cases.

Canonical source of truth: `CASE_SCHEMA.md` is the canonical source of truth for pricing case data structure only. It does not define page structure, rendering order, or visual composition.

## Purpose

The canonical case JSON must answer:

1. what is monetized
2. what changes the bill
3. who pays more and why

Pricing structure answers how the bill is calculated. Strategic logic answers why this pricing structure is expected to work. Strategic logic is a hypothesized causal-assumption layer, not proof of causality.

The schema below matches the hidden JSON contract embedded in `CASE_TEMPLATE.html`.

## Canonical Object Shape

```json
{
  "schema_version": "1.0",
  "case_id": "",
  "case_type": "",
  "evidence_level": "",
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
  "strategic_insight": "",
  "strategic_logic": {
    "customer_condition": "",
    "behavior_change": "",
    "pricing_driver": "",
    "billing_change": "",
    "financial_outcome": "",
    "dominant_causal_chain": [],
    "main_assumption": "",
    "main_failure_risk": "",
    "evidence_status": "",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [],
  "reasoning_error_check": []
}
```

## Top-Level Field Contract

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `schema_version` | string | required | none | Current supported value is `1.0`. |
| `case_id` | string | required | none | Stable case identifier. |
| `case_type` | enum string | required | none | Must be one of: `saas`, `retail`, `subscription`, `marketplace`, `service`, `hardware`, `restaurant`, `logistics`, `other`. |
| `evidence_level` | enum string | required | none | Must be one of: `observed`, `inferred`, `hypothesized`. |
| `pricing_model` | string | required | none | Short statement of the monetization model. |
| `value_metric` | string | required | none | Names the unit of value capture used by the model. |
| `segmentation_type` | string | required | none | Names how buyers, users, or assets are segmented. |
| `tiers` | array of strings | required | `[]` | Ordered tier labels used by the case. |
| `segments` | array of strings | required | `[]` | Segment labels used by the case. |
| `pricing_logic` | string | required | none | Short explanation of the pricing mechanism. |
| `key_driver` | string | required | none | Names the variable or classification that most directly changes the bill. |
| `drivers` | array of `Driver` | required | `[]` | Strategic role of each pricing variable. |
| `formula` | string or `FormulaObject` | required | none | Must distinguish direct bill drivers from higher-level drivers that set parameters. |
| `upgrade_triggers` | array of `UpgradeTrigger` | required | `[]` | Conditions that move the buyer into a higher payment level or tighter governance tier. |
| `visualization` | object | required | `{}` | Visualization metadata object. May remain empty when no visualization metadata is defined. |
| `primary_component` | enum string | required | none | Must be one of: `tier_ladder`, `matrix`, `driver_logic`, `trigger_path`, `value_extraction_map`. |
| `decision_core` | `DecisionCore` object | required | none | Explicit answers to the three pricing questions. |
| `student_10_second_takeaway` | string | required | none | One-sentence statement of what changes the bill. |
| `friction_points` | array of strings | required | `[]` | Buyer-side friction caused by pricing structure. |
| `risks` | array of strings | required | `[]` | Risk statements tied to the pricing structure. |
| `structural_weakness` | string | required | none | Main weakness in the pricing architecture. |
| `strategic_insight` | string | required | none | Short strategic implication of the pricing structure. |
| `strategic_logic` | `StrategicLogic` object | required | `{ "customer_condition": "", "behavior_change": "", "pricing_driver": "", "billing_change": "", "financial_outcome": "", "dominant_causal_chain": [], "main_assumption": "", "main_failure_risk": "", "evidence_status": "", "visual_strip": { "enabled": true, "layout": "canonical_five_step_strip" } }` | Captures the hypothesized pricing-relevant causal logic behind the case. It explains why the pricing structure is expected to work, without claiming proof. |
| `decision_alternatives` | array of `DecisionAlternative` | required | `[]` | Concrete pricing moves with expected effects, trade offs, and leading indicators. |
| `reasoning_error_check` | array of `ReasoningErrorCheck` | required | `[]` | Standard stress-test layer for checking whether the case logic is overclaimed, incomplete, or missing trade offs. |

## Nested Object Contract

### `DecisionCore`

`decision_core` is required and must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `what_is_monetized` | string | required | none | Names what the company actually charges for. |
| `what_changes_the_bill` | string | required | none | States the condition or variable that changes spend. |
| `who_pays_more_and_why` | string | required | none | Explains which buyers pay more and the causal reason. |

### `StrategicLogic`

`strategic_logic` is required and must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `customer_condition` | string | required | none | Names the customer or market state that activates the pricing logic. This is the canonical source for the Customer Condition strip node. Keep it concise. |
| `behavior_change` | string | required | none | Names the customer behavior shift. This is mandatory and is the canonical source for the Behavior Change strip node. Keep it concise. |
| `pricing_driver` | string | required | none | Names what changes the bill. It must match or clearly map to `key_driver`. This is the canonical source for the Pricing Driver strip node. |
| `billing_change` | string | required | none | Names how spending changes. This is the canonical source for the Billing Change strip node. Keep it concise. |
| `financial_outcome` | string | required | none | Names the intended revenue, margin, ARPA, retention, or profit effect. This is the canonical source for the Financial Outcome strip node. |
| `dominant_causal_chain` | array of strings | required | `[]` | Ordered compatibility array for rendering or migration. It should duplicate the five explicit causal fields in order when the strip is enabled and must not contradict them. |
| `main_assumption` | string | required | none | The core causal assumption that must hold for the pricing logic to work. |
| `main_failure_risk` | string | required | none | The main way the causal logic could break. |
| `evidence_status` | enum string | required | none | Must be one of `observed`, `inferred`, `hypothesized`. It should usually match or be more cautious than `evidence_level`. |
| `visual_strip` | `StrategicLogicVisualStrip` object | required | `{ "enabled": true, "layout": "canonical_five_step_strip" }` | Controls whether the public page may render the canonical strategic logic strip. This is an analytical reasoning layer, not a primary component. |

### `StrategicLogicVisualStrip`

`strategic_logic.visual_strip` is required and must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `enabled` | boolean | required | `true` | Whether the public page should render the canonical strategic logic strip. |
| `layout` | enum string | required | none | Must currently equal `canonical_five_step_strip`. |

### `DecisionAlternative`

Each item in `decision_alternatives` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `option` | string | required | none | Short label for the decision alternative. |
| `pricing_move` | string | required | none | Concrete pricing move or pricing-system change. |
| `expected_effect` | string | required | none | What the move is expected to affect. |
| `trade_off` | string | required | none | What the move sacrifices or risks. |
| `leading_indicator` | string | required | none | Signal to monitor before treating the move as successful. |

### `ReasoningErrorCheck`

Each item in `reasoning_error_check` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `error_type` | enum string | required | none | Must be one of: `category_error`, `causal_overclaim`, `correlation_as_causation`, `weak_evidence_fit`, `missing_mechanism`, `missing_boundary_conditions`, `no_trade_off`, `value_price_confusion`, `governance_blindness`, `static_thinking`. |
| `risk_statement` | string | required | none | Names the reasoning risk in the case interpretation. |
| `case_specific_check` | string | required | none | Practical check tied to this case's existing logic. |
| `evidence_needed` | string | required | none | Evidence required to reduce uncertainty. |
| `failure_signal` | string | required | none | Observable signal that the interpretation or decision is failing. |

### `Driver`

Each item in `drivers` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `driver` | string | required | none | Name of the pricing variable or classification. |
| `type` | enum string | required | none | Must be one of: `seat`, `role`, `usage`, `volume`, `asset`, `outcome`, `commitment`, `add_on`. |
| `pricing_role` | enum string | required | none | Must be one of: `base_charge`, `variable_charge`, `multiplier`, `threshold`, `discount`, `cap`, `zero_price_layer`, `access`. |
| `direction` | enum string | required | none | Must be one of: `increase_revenue`, `reduce_cost`, `segment_users`, `enforce_upgrade`, `reduce_friction`, `improve_adoption`. |
| `effect` | string | required | none | Explains what the driver does strategically. |
| `student_label` | string | required | none | Short student-facing label. |

### `FormulaObject`

When `formula` is an object, it must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `expression` | string | required | none | Concise formula expression. |
| `variables` | array of `FormulaVariable` | required | `[]` | Variables referenced in the expression. |
| `output_label` | string | required | none | Names the bill output. |
| `explanation` | string | optional | `""` | Clarifies how the formula works when needed. |

Each `FormulaVariable` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `symbol` | string | required | none | Variable symbol used in the expression. |
| `label` | string | required | none | Human-readable variable label. |
| `maps_to_driver` | string | required | none | Must match the corresponding pricing driver name. |

### `UpgradeTrigger`

Each item in `upgrade_triggers` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `trigger` | string | required | none | Names the upgrade condition. |
| `from` | string | required | none | Starting pricing state. |
| `to` | string | required | none | Higher pricing state reached after the trigger. |
| `why_it_happens` | string | required | none | Explains why the trigger occurs. |
| `pricing_effect` | string | required | none | Explains what changes financially after the trigger. |

### `visualization`

When `visualization` is populated, it may contain only:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `primary_component` | enum string | optional | `""` | Must match top-level `primary_component` when present. |
| `supporting_components` | array of strings | optional | `[]` | Supporting components may not introduce new pricing logic. |
| `interactive_controls` | array of strings | optional | `[]` | Learner-adjustable controls tied to existing drivers or formula variables. |
| `default_view` | string | optional | `""` | Default visualization state. |
| `student_prompt` | string | optional | `""` | Prompt shown to focus the learner on the mechanism. |

## Cross-Field Rules

- `schema_version` is required and the current supported value is `1.0`.
- Any `schema_version` mismatch is a FAIL.
- `decision_core` is required. Do not infer the three pricing answers from prose.
- `key_driver` is required and must match the mechanism logic selected by `primary_component`.
- `upgrade_triggers` are required and must state what moves the buyer into a higher payment level, stronger governance tier, or more expensive pricing classification.
- `formula` is required. It may use the string form or the object form, but it must distinguish direct bill drivers from higher-level drivers that set parameters.
- `primary_component` must use exactly one canonical token:
  - `tier_ladder`
  - `matrix`
  - `driver_logic`
  - `trigger_path`
  - `value_extraction_map`
- `primary_component` must match the mechanism logic, not the visible marketing layout.
- `visualization.primary_component` must match `primary_component` when both are present.
- `student_10_second_takeaway` should tell a learner what changes the bill in one sentence.
- `strategic_logic` is required.
- `strategic_logic` must be written as hypothesized logic unless supported by direct evidence.
- `strategic_logic` is not a primary component.
- `strategic_logic.customer_condition`, `strategic_logic.behavior_change`, `strategic_logic.pricing_driver`, `strategic_logic.billing_change`, and `strategic_logic.financial_outcome` are required.
- The five explicit strategic logic fields are the canonical source for rendering the Strategic Logic Strip.
- `strategic_logic.behavior_change` is required and must not be empty.
- `strategic_logic.pricing_driver` must match or clearly map to `key_driver`.
- The five strategic logic fields must be short enough to render as strip nodes.
- `strategic_logic.dominant_causal_chain` must contain 3 to 5 steps.
- When `strategic_logic.visual_strip.enabled` is true, `strategic_logic.dominant_causal_chain` should contain five steps matching the five explicit causal fields.
- `strategic_logic.dominant_causal_chain` must be pricing-relevant only.
- `strategic_logic.dominant_causal_chain` must not become a full company strategy DAG.
- `strategic_logic.dominant_causal_chain` must include the `key_driver` or a direct equivalent from `decision_core.what_changes_the_bill`.
- `strategic_logic.dominant_causal_chain` must not contradict the five explicit strategic logic fields.
- `strategic_logic.visual_strip.layout` must use the canonical five-step strip.
- `strategic_logic.visual_strip.layout` must equal `canonical_five_step_strip`.
- Do not allow arbitrary graph layouts.
- Do not allow free-form DAG rendering.
- The strip must remain directional and linear.
- The strip must visually follow: customer condition -> behavior change -> pricing driver -> billing change -> financial outcome.
- Each `dominant_causal_chain` item should map approximately to one visual node.
- `dominant_causal_chain` must contain 3 to 5 steps only.
- The chain must remain pricing-relevant.
- The chain must not become a general company strategy diagram.
- `strategic_logic` must connect to at least one of: `drivers`, `formula`, `upgrade_triggers`, `risks`, `structural_weakness`, or `strategic_insight`.
- `strategic_logic` must not introduce new tiers, segments, drivers, or upgrade triggers that are absent from the case JSON.
- `strategic_logic` must not introduce unmodeled drivers, segments, tiers, or upgrade triggers.
- If the causal chain implies a new driver, update `drivers` and `key_driver` first.
- `strategic_logic.evidence_status` must not be stronger than `evidence_level` unless explicitly justified in `strategic_insight`.
- Strategic Logic is hypothesized unless `evidence_status` is `observed` and justified.
- `decision_alternatives` is required and must include at least two concrete pricing moves for a complete teaching case.
- Each `decision_alternatives` item must include `option`, `pricing_move`, `expected_effect`, `trade_off`, and `leading_indicator`.
- Each decision alternative must imply a concrete pricing move. Do not use vague strategy statements.
- Each decision alternative must include a trade off and a leading indicator.
- `reasoning_error_check` is required and must include at least three checks for a complete teaching case.
- If `evidence_level` is `inferred` or `hypothesized`, `reasoning_error_check` must include `causal_overclaim` or `weak_evidence_fit`.
- If `decision_alternatives` are present, `reasoning_error_check` must include `no_trade_off`.
- If the case includes fulfillment, delivery, sales execution, discounting, enterprise pricing, negotiation, or operational governance, include `governance_blindness` or `missing_boundary_conditions` where relevant.
- Each reasoning error check must refer back to existing case logic. It must not introduce new pricing logic.
- Reasoning error checks must link back to at least one of: `decision_core`, `key_driver`, `drivers`, `formula`, `upgrade_triggers`, `risks`, `structural_weakness`, `strategic_logic`, or `decision_alternatives`.

## Acceptance Gate

A pricing case JSON object is complete only if:

- all required top-level fields are present
- `schema_version` is present and equals `1.0`
- `decision_core` is explicitly filled
- `key_driver` is explicit
- `drivers` and `formula` can support the chosen mechanism
- `upgrade_triggers` explain how payment level changes
- `strategic_logic` is present
- `strategic_logic` includes five explicit causal slots
- `strategic_logic.behavior_change` is filled
- `strategic_logic.pricing_driver` maps to `key_driver`
- the five strategic logic slots are short enough to render as nodes
- `strategic_logic.visual_strip` is valid
- `strategic_logic.dominant_causal_chain` has 3 to 5 pricing-relevant steps
- `strategic_logic.main_assumption` is explicit
- `strategic_logic.main_failure_risk` is explicit
- `dominant_causal_chain` can be rendered as a fixed five-step strip
- the strategic logic chain includes or clearly maps to `key_driver`
- the strategic logic chain does not claim proven causality without evidence
- `decision_alternatives` includes at least two concrete pricing moves
- each decision alternative includes `trade_off` and `leading_indicator`
- `reasoning_error_check` includes at least three checks
- evidence needs and failure signals are explicit
- no analytical layer introduces unmodeled pricing logic
- no arbitrary DAG structure is introduced
- `primary_component` matches the mechanism logic
- the structure can support both a public page and system use
