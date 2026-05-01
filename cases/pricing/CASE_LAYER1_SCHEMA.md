# Pricing Case Layer 1 Schema

Layer 1 is the upstream structuring step before page rendering. Its job is to define the pricing logic clearly enough that the page, mechanism component, and index layer can render the case without re-interpreting it.

Layer 1 separates analytical structure from public-page presentation.

## Layer 1 Output

Every pricing case should produce six artifacts before page rendering:

1. `Case Insight Brief`
2. `Case JSON`
3. `Render Instruction`
4. `Strategic Logic`
5. `Decision Alternatives`
6. `Reasoning Error Check`

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
    "customer_condition": "",
    "behavior_change": "",
    "pricing_driver": "",
    "billing_change": "",
    "financial_outcome": "",
    "dominant_causal_chain": [
      "customer condition",
      "behavior change",
      "pricing driver",
      "billing change",
      "financial outcome"
    ],
    "main_assumption": "",
    "main_failure_risk": "",
    "evidence_status": "observed | inferred | hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  }
}
```

Field guidance:

- `customer_condition`: names the customer or market state that activates the pricing logic.
- `behavior_change`: names the customer behavior shift. This is mandatory.
- `pricing_driver`: names what changes the bill. It must map to `key_driver`.
- `billing_change`: names how spending changes.
- `financial_outcome`: names the intended revenue, margin, ARPA, retention, or profit effect.
- `dominant_causal_chain`: may duplicate the five explicit slots as an ordered array for rendering compatibility.
- `main_assumption`: the one causal belief the pricing model relies on.
- `main_failure_risk`: the most likely way the logic breaks.
- `evidence_status`: how confident the analyst can be based on available evidence.

Visual rendering rule:

If `strategic_logic.visual_strip.enabled` is true, the case may render the strategic logic using the canonical five-step strip layout.

The strip must always follow this direction:

Customer Condition -> Behavior Change -> Pricing Driver -> Billing Change -> Financial Outcome

Do not render:

- free DAGs
- network graphs
- causal loop diagrams
- force-directed graphs
- multi-directional arrows

The strip is designed for:

- fast causal comprehension
- teaching pricing logic
- reducing reasoning ambiguity
- making cases comparable across industries

Not for:

- full strategic simulation
- exhaustive causal modeling

Deterministic mapping rules:

- `Strategic Logic.case_id` must match `Case JSON.case_id`.
- `Strategic Logic.strategic_logic` maps directly to `Case JSON.strategic_logic`.
- `Strategic Logic` must not modify `primary_component`.
- `Strategic Logic` must not introduce new drivers, tiers, segments, or upgrade triggers.
- If `Strategic Logic` reveals a missing driver or trigger, update `Case JSON` first.
- `Strategic Logic` should use the same `key_driver` already defined in `Case JSON`.
- `Strategic Logic` is analyst-facing and may be rendered publicly only as a teaching aid.
- `Strategic Logic` must be hypothesized unless direct evidence supports it.
- Use concise node text, ideally 2 to 8 words per node.
- It must render as a canonical five-step strip.
- It must not become a full company strategy DAG.
- `Strategic Logic` must contain five named causal slots: `customer_condition`, `behavior_change`, `pricing_driver`, `billing_change`, and `financial_outcome`.
- Do not allow long prose in the five slot fields.
- `pricing_driver` must map to `key_driver`.
- If a new driver appears in Strategic Logic, update Case JSON `key_driver` and `drivers` first.
- `dominant_causal_chain` step count must remain between 3 and 5.
- When `visual_strip.enabled` is true, `dominant_causal_chain` should contain five steps matching the five explicit causal slots.
- If fewer than 5 steps are used, preserve directional order.
- The chain must include or clearly map to `key_driver`.
- Behavior Change is required.
- If Behavior Change cannot be identified, the case is incomplete.
- The strip must not introduce new drivers, segments, tiers, or upgrade triggers.

## 5. Decision Alternatives

Purpose:

Decision Alternatives turn strategic opportunity into concrete pricing moves. They make the page useful for decision training by forcing the learner to compare action, expected effect, sacrifice, and signal.

Required shape:

```json
{
  "case_id": "",
  "decision_alternatives": [
    {
      "option": "",
      "pricing_move": "",
      "expected_effect": "",
      "trade_off": "",
      "leading_indicator": ""
    }
  ]
}
```

Field guidance:

- `option`: short label for the alternative.
- `pricing_move`: concrete change to the pricing structure, packaging, fee visibility, discounting, threshold, or governance rule.
- `expected_effect`: what the move is expected to improve or protect.
- `trade_off`: what the move sacrifices, risks, or makes more salient.
- `leading_indicator`: early signal to watch before treating the move as successful.

Deterministic mapping rules:

- `Decision Alternatives.case_id` must match `Case JSON.case_id`.
- `decision_alternatives` maps directly to `Case JSON.decision_alternatives`.
- Each option must be a concrete pricing move.
- Each option must include `trade_off` and `leading_indicator`.
- Avoid generic strategy language.
- Decision alternatives must not introduce new drivers, tiers, segments, or upgrade triggers. If an option requires a new driver or trigger, update `Case JSON` first.

## 6. Reasoning Error Check

Purpose:

Reasoning Error Check stress tests the case logic before a learner accepts the recommendation. It turns the case into a pricing decision training page rather than a pricing description.

Required shape:

```json
{
  "case_id": "",
  "reasoning_error_check": [
    {
      "error_type": "category_error | causal_overclaim | correlation_as_causation | weak_evidence_fit | missing_mechanism | missing_boundary_conditions | no_trade_off | value_price_confusion | governance_blindness | static_thinking",
      "risk_statement": "",
      "case_specific_check": "",
      "evidence_needed": "",
      "failure_signal": ""
    }
  ]
}
```

Field guidance:

- `error_type`: the reasoning error being tested.
- `risk_statement`: what could be wrong in the case interpretation.
- `case_specific_check`: how to test the risk using this case's structure.
- `evidence_needed`: evidence required to reduce uncertainty.
- `failure_signal`: observable signal that the interpretation or decision is failing.

Deterministic mapping rules:

- `Reasoning Error Check.case_id` must match `Case JSON.case_id`.
- `reasoning_error_check` maps directly to `Case JSON.reasoning_error_check`.
- It must stress test the case logic.
- It must not introduce new drivers, segments, tiers, or upgrade triggers.
- It must link back to at least one of: `decision_core`, `key_driver`, `drivers`, `formula`, `upgrade_triggers`, `risks`, `structural_weakness`, `strategic_logic`, or `decision_alternatives`.

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
- Strategic Logic has all five slots filled
- the chain has 3 to 5 steps
- the case includes a behavior change step
- Behavior Change is not empty
- the chain includes the main pricing driver
- Pricing Driver maps to `key_driver`
- each slot is concise
- the strategic logic chain can be rendered linearly
- the chain can render as a strip without prose
- the chain supports fast causal comprehension
- no free-form causal graph structure is introduced
- the chain has a main assumption and main failure risk
- the chain remains pricing-relevant and does not become a general business strategy map
- the recommended component follows from the pricing logic
- the render instruction defines at least one failure mode
- Decision Alternatives include at least two concrete pricing moves
- each decision alternative includes `trade_off` and `leading_indicator`
- Reasoning Error Check includes at least three checks
- evidence and failure signals are explicit
- no analytical layer introduces unmodeled pricing logic
