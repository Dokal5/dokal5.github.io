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
  "bill_examples": [],
  "boundary_crossing_map": [],
  "decision_priority": [],
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
| `bill_examples` | array of `BillExample` | required | `[]` | Concrete numerical, semi-numerical, banded, or illustrative examples showing how the pricing mechanism changes the final customer bill. |
| `boundary_crossing_map` | array of `BoundaryCrossingMap` | required | `[]` | Buyer movement across pricing-relevant boundaries such as service bands, thresholds, tiers, role classifications, usage levels, delivery modes, or governance gates. |
| `decision_priority` | array of `DecisionPriority` | required | `[]` | Ranking of existing decision alternatives by testability, risk, upside, and implementation complexity. |
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

### `BillExample`

Each item in `bill_examples` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `scenario` | string | required | none | Short label for the customer bill situation. |
| `customer_situation` | string | required | none | Customer context that activates the pricing logic. |
| `base_price` | string | required | none | Visible base price, product price, subscription fee, transaction value, menu item price, device price, or plan fee. It can be an exact public price, public price band, or clearly marked illustrative value. |
| `pricing_driver` | string | required | none | Driver that changes the bill. It must map to `key_driver`, `drivers`, `formula`, `upgrade_triggers`, or `decision_core.what_changes_the_bill`. |
| `variable_charge` | string | required | none | Additional fee, usage charge, seat charge, service fee, delivery fee, commission, add-on fee, consumption charge, transaction fee, or other variable price element tied to the pricing driver. |
| `discount_or_adjustment` | string | required | none | Discount, membership benefit, credit, adjustment, subsidy, bundle effect, negotiated discount, or offset. Use `none` if not applicable. |
| `final_bill` | string | required | none | Final customer bill logic or final bill example. It may be exact, banded, or illustrative, but must be clearly labeled. |
| `pricing_lesson` | string | required | none | One sentence explaining what the example teaches about the pricing mechanism. |

Contract:

`bill_examples` convert abstract pricing logic into concrete customer bill scenarios. They show how the customer's final bill changes when the pricing driver changes.

Rules:

- Use existing `formula`, `drivers`, `value_metric`, `upgrade_triggers`, `decision_core`, or `strategic_logic`.
- Do not introduce new pricing logic.
- Do not invent exact prices.
- If exact public prices are unavailable, use `illustrative` or `public price band` language.
- Each example must include `pricing_lesson`.
- For `driver_logic` cases, examples should show how changes in the driver alter the final bill.
- At least two examples are required when `formula`, usage, `driver_logic`, or customer bill movement is central.
- At least three examples are recommended for teaching cases.
- For SaaS cases, examples may show plan fee plus seats, usage, credits, active profiles, tasks, or add-ons.
- For retail cases, examples may show product basket plus delivery, installation, warranty, membership, or service charges.
- For restaurant cases, examples may show menu item plus add-ons, combo upgrades, service charge, delivery, or portion upgrades.
- For marketplace cases, examples may show transaction value plus commission, service fee, payment fee, promoted listing, or seller net revenue.
- For hardware cases, examples may show device price plus accessories, consumables, subscription, maintenance, or service contract.
- For logistics cases, examples may show base shipment price plus weight, distance, speed, handling, customs, or service level charges.

### `BoundaryCrossingMap`

Each item in `boundary_crossing_map` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `from_state` | string | required | none | Current pricing state, service state, user classification, tier, usage level, basket state, role type, transaction state, delivery state, or access state before the boundary is crossed. |
| `boundary_condition` | string | required | none | Condition that causes the buyer to cross into a different pricing state. |
| `to_state` | string | required | none | New pricing state, service state, user classification, tier, usage level, basket state, role type, transaction state, delivery state, or access state after the boundary is crossed. |
| `driver` | string | required | none | Pricing driver responsible for the boundary movement. Must map to `key_driver`, `drivers`, `formula`, `upgrade_triggers`, or `decision_core.what_changes_the_bill`. |
| `billing_effect` | string | required | none | What changes financially after the boundary is crossed. |
| `customer_perception_risk` | string | required | none | Risk that the boundary feels surprising, unfair, unclear, hidden, hard to predict, or hard to justify. |

Contract:

`boundary_crossing_map` shows the conditions that move buyers into higher fee states, different pricing states, or different pricing classifications.

Rules:

- Required when `primary_component` is `driver_logic` or `trigger_path`.
- Recommended when `primary_component` is `tier_ladder` or `matrix`.
- Each boundary must map to `key_driver`, `drivers`, `formula`, `upgrade_triggers`, or `decision_core.what_changes_the_bill`.
- Do not create boundaries that are not already part of the pricing logic.
- Each boundary must state `billing_effect`.
- Each boundary should identify `customer_perception_risk` when the jump may feel surprising or unfair.
- Boundary Crossing Map must not replace `upgrade_triggers`. It explains buyer movement in a more decision-readable way.
- For SaaS cases, boundaries may include free-to-paid, plan limit, usage cap, seat role, governance gate, or enterprise threshold.
- For retail cases, boundaries may include basket size, delivery mode, warranty choice, installation choice, or membership benefit eligibility.
- For restaurant cases, boundaries may include single item to combo, regular to large, base dish to premium add-on, dine-in to delivery, or service charge threshold.
- For marketplace cases, boundaries may include seller volume tier, buyer service fee, promoted listing, commission band, or payment processing threshold.
- For hardware cases, boundaries may include device-only to subscription, warranty upgrade, service contract, consumable lock-in, or maintenance tier.
- For logistics cases, boundaries may include weight band, distance band, speed tier, handling requirement, customs complexity, or delivery service level.

### `DecisionPriority`

Each item in `decision_priority` must contain:

| Field | Type | Required | Empty state | Contract |
| --- | --- | --- | --- | --- |
| `priority_rank` | integer | required | none | Ranking for the test sequence. `1` means recommended first test. |
| `option` | string | required | none | Must match or clearly reference an option in `decision_alternatives`. |
| `why_first` | string | required | none | Explains why this move should be tested at this priority level. |
| `test_type` | string | required | none | Recommended test design, for example A/B test, pilot, cohort comparison, price page experiment, sales policy test, regional rollout, menu test, channel test, or controlled pricing experiment. |
| `risk_level` | enum string | required | none | Must be one of: `low`, `medium`, `high`. |
| `upside_potential` | string | required | none | Short statement of the expected upside. |
| `implementation_complexity` | enum string | required | none | Must be one of: `low`, `medium`, `high`. |
| `success_metric` | string | required | none | Metric that determines whether the test worked. |

Contract:

`decision_priority` ranks existing `decision_alternatives` by testability, risk, upside, learning value, and implementation complexity. It helps decision makers know which pricing move to test first.

Rules:

- `decision_priority` must reference existing `decision_alternatives`.
- At least one option must be marked as the recommended first test.
- Every item must include `success_metric`.
- Do not add new pricing moves here. New pricing moves belong in `decision_alternatives` first.
- `risk_level` must be one of `low`, `medium`, `high`.
- `implementation_complexity` must be one of `low`, `medium`, `high`.
- The first priority should usually be the lowest-risk test that produces useful learning fastest, unless the case clearly justifies a different choice.
- The priority order should be useful for decision makers, not just a restatement of the alternatives.

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

### Core Data Contract

- `schema_version` is required and must equal `1.0`; any mismatch is a FAIL.
- `decision_core` is required. Do not infer the three pricing answers from prose.
- `key_driver` is required and must match the mechanism logic selected by `primary_component`.
- `primary_component` must use exactly one canonical token:
  - `tier_ladder`
  - `matrix`
  - `driver_logic`
  - `trigger_path`
  - `value_extraction_map`
- `primary_component` must match the mechanism logic, not the visible marketing layout.
- `visualization.primary_component` must match `primary_component` when both are present.
- `student_10_second_takeaway` should tell a learner what changes the bill in one sentence.

### Mechanism Consistency

- `drivers` are required and must support the chosen mechanism.
- `formula` is required. It may use the string form or the object form, but it must distinguish direct bill drivers from higher-level drivers that set parameters.
- `upgrade_triggers` are required and must state what moves the buyer into a higher payment level, stronger governance tier, or more expensive pricing classification.
- `primary_component` must match the mechanism logic implied by `key_driver`, `drivers`, `formula`, and `upgrade_triggers`.
- No field may introduce unsupported drivers, tiers, segments, upgrade triggers, or pricing logic.

### Strategic Logic Consistency

- `strategic_logic` is required and is not a primary component.
- `strategic_logic` must be written as hypothesized logic unless supported by direct evidence.
- `strategic_logic.customer_condition`, `strategic_logic.behavior_change`, `strategic_logic.pricing_driver`, `strategic_logic.billing_change`, and `strategic_logic.financial_outcome` are required and are the canonical source for rendering the Strategic Logic Strip.
- `strategic_logic.behavior_change` is required and must not be empty.
- `strategic_logic.pricing_driver` must match or clearly map to `key_driver`.
- `strategic_logic.dominant_causal_chain` must contain 3 to 5 pricing-relevant steps.
- When `strategic_logic.visual_strip.enabled` is true, `strategic_logic.dominant_causal_chain` should contain five steps matching the five explicit causal fields in order.
- `strategic_logic.visual_strip.layout` must equal `canonical_five_step_strip`.
- Do not allow free-form DAGs, arbitrary graph layouts, network diagrams, or multi-directional causal structures.
- `strategic_logic` must connect to at least one of: `drivers`, `formula`, `upgrade_triggers`, `risks`, `structural_weakness`, or `strategic_insight`.
- `strategic_logic` must not introduce new tiers, segments, drivers, or upgrade triggers that are absent from the case JSON. If the causal chain implies a new driver, update `drivers` and `key_driver` first.
- `strategic_logic.evidence_status` must not be stronger than `evidence_level` unless explicitly justified in `strategic_insight`.

### Decision Training Overlays

- `decision_alternatives` is required and must include at least two concrete pricing moves for a complete teaching case.
- Each `decision_alternatives` item must include `option`, `pricing_move`, `expected_effect`, `trade_off`, and `leading_indicator`.
- `bill_examples` must use existing `formula`, `drivers`, `value_metric`, `decision_core`, `strategic_logic`, or `upgrade_triggers`.
- `bill_examples.pricing_driver` must map to `key_driver`, `drivers`, `formula`, `upgrade_triggers`, or `decision_core.what_changes_the_bill`.
- `bill_examples` must not invent unsupported exact prices.
- If exact public prices are unavailable, bill examples must be marked illustrative or use public price band language.
- Each bill example must include `pricing_lesson`.
- `driver_logic` cases should include bill examples that show how changes in the driver alter the final bill.
- At least two bill examples are required when `formula`, usage, `driver_logic`, or customer bill movement is central.
- These examples must remain industry-neutral and must not assume delivery, fulfillment, SaaS, or subscription unless the case itself is from that category.
- `boundary_crossing_map` is required when `primary_component` is `driver_logic` or `trigger_path`.
- `boundary_crossing_map.driver` must map to `key_driver`, `drivers`, `formula`, `upgrade_triggers`, or `decision_core.what_changes_the_bill`.
- Boundary crossing entries must not create boundaries that are absent from the pricing logic.
- Each boundary crossing must state `billing_effect`.
- Boundary crossing entries should identify `customer_perception_risk` when the jump may feel surprising or unfair.
- Boundary crossing map must remain industry-neutral and must not assume delivery, fulfillment, SaaS, or subscription unless the case itself is from that category.
- `decision_priority` must rank existing `decision_alternatives`.
- At least one `decision_priority` item must be the recommended first test with `priority_rank` equal to `1`.
- Every `decision_priority` item must include `success_metric`.
- `decision_priority.option` must match an existing `decision_alternatives.option`.
- `decision_priority` must not add new pricing moves. New pricing moves belong in `decision_alternatives` first.
- `decision_priority.risk_level` must be one of `low`, `medium`, or `high`.
- `decision_priority.implementation_complexity` must be one of `low`, `medium`, or `high`.
- `bill_examples`, `boundary_crossing_map`, and `decision_priority` must not introduce new tiers, segments, drivers, upgrade triggers, or pricing logic absent from the canonical case JSON.

### Reasoning Integrity

- `reasoning_error_check` is required and must include at least three checks for a complete teaching case.
- If `evidence_level` is `inferred` or `hypothesized`, `reasoning_error_check` must include `causal_overclaim` or `weak_evidence_fit`.
- If `decision_alternatives` are present, `reasoning_error_check` must include `no_trade_off`.
- If the case includes fulfillment, delivery, sales execution, discounting, enterprise pricing, negotiation, or operational governance, include `governance_blindness` or `missing_boundary_conditions` where relevant.
- Reasoning error checks must link back to at least one of: `decision_core`, `key_driver`, `drivers`, `formula`, `upgrade_triggers`, `risks`, `structural_weakness`, `strategic_logic`, or `decision_alternatives`.
- Reasoning checks cannot introduce new pricing logic.

## Acceptance Gate

A pricing case JSON object is complete only if it passes all gates below.

### Gate 1: Core Pricing Logic

- all required top-level fields are present
- `schema_version` equals `"1.0"`
- `decision_core` is filled
- `key_driver` is explicit
- `student_10_second_takeaway` explains what changes the bill

### Gate 2: Mechanism Validity

- `drivers` and `formula` support the chosen mechanism
- `upgrade_triggers` explain how payment level changes
- `primary_component` matches mechanism logic
- no unsupported drivers, tiers, segments, or upgrade triggers are introduced

### Gate 3: Strategic Logic

- `strategic_logic` is present
- the five explicit causal slots are filled
- `behavior_change` is filled
- `pricing_driver` maps to `key_driver`
- `dominant_causal_chain` has 3 to 5 pricing-relevant steps
- `visual_strip` is valid and uses `canonical_five_step_strip`
- the chain does not claim proven causality without evidence

### Gate 4: Decision Training Overlays

- `decision_alternatives` includes at least two concrete pricing moves when the case is a teaching case
- each decision alternative has `trade_off` and `leading_indicator`
- `bill_examples` are present when the case relies on `formula`, usage logic, customer bill movement, `driver_logic`, or final bill change
- `boundary_crossing_map` is present when the case relies on `driver_logic`, `trigger_path`, thresholds, service bands, usage limits, role boundaries, access gates, or classification changes
- `decision_priority` ranks existing `decision_alternatives` when `decision_alternatives` are present
- no overlay introduces unsupported pricing logic

### Gate 5: Reasoning Stress Test

- `reasoning_error_check` includes at least three checks
- evidence needs and failure signals are explicit
- reasoning checks link back to existing case logic
- no arbitrary DAG structure is introduced
- the structure can support both public page rendering and system use
