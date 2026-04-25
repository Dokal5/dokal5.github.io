# Pricing Case Component Library

This file defines reusable pricing case components at the schema and instruction level. It does not define visual styling.

Layer 1 selects the primary component based on the pricing logic. `COMPONENT_LIBRARY.md` defines how each component should be used.

Use only one primary component per case unless the render instruction gives a specific reason.

## Primary Component Decision Logic

Use this mapping to select the primary component:

- If pricing is driven by a continuous variable, use `Pricing Driver Simulator`.
- If pricing is driven by thresholds, limits, or gates, use `Upgrade Trigger Visual`.
- If pricing is driven by discrete plan packaging, use `Tier Ladder`.
- If pricing is driven by value capture mismatch, use `Value Extraction Map`.

Fallback rule: If multiple mechanisms exist, select the component that most directly changes the bill and can be understood within 10 seconds visually.

Priority rule: If multiple conditions apply, select the primary component based on:

1. what most directly changes the bill
2. what creates the strongest upgrade pressure
3. what can be understood fastest within 10 seconds visually

## Tier Ladder

Purpose: Show the visible plan hierarchy and how each tier changes the buyer promise.

Selection rule: Use as primary when the main pricing logic is a named plan ladder and the central question is why buyers move from one tier to another.

Component role: primary.

Decision core requirement: Must make clear what is monetized, what changes the bill, and who pays more and why.

Required JSON fields:

- `tiers`
- `pricing_model`
- `upgrade_triggers`
- `decision_core`

Recommended UI pattern: Vertical or horizontal ladder with tier name, anchor price, buyer logic, and upgrade trigger.

Pricing question answered: What tier is the buyer in, and what makes them move up?

Mutual exclusivity rules: Do not use as primary when pricing is mainly driven by continuous usage, outcome volume, or another scalable variable. Use `Pricing Driver Simulator` instead.

## Segmentation Map

Purpose: Show how users, customers, roles, assets, or usage types are separated before pricing is applied.

Selection rule: Use as supporting when the case needs to clarify role, customer, asset, or usage segmentation before explaining the main pricing mechanism.

Component role: supporting.

Decision core requirement: Must support what is monetized, what changes the bill, and who pays more and why without replacing the primary component.

Required JSON fields:

- `segments`
- `segmentation_type`
- `drivers`
- `decision_core`

Recommended UI pattern: Labeled map or matrix separating segment basis from pricing effect.

Pricing question answered: Who or what is treated differently by the pricing model?

Mutual exclusivity rules: Do not use as primary. If segmentation itself forces payment changes, use `Tier Ladder`, `Upgrade Trigger Visual`, or `Pricing Driver Simulator` as primary and keep this as context.

Constraint: Segmentation must not visually dominate the primary component. It provides context, not the pricing mechanism.

## Pricing Driver Simulator

Purpose: Let a student change the main variables and see how spend or value capture changes.

Selection rule: Use as primary when pricing depends on a continuous or scalable variable and the main insight comes from how inputs change the bill.

Component role: primary.

Decision core requirement: Must make clear what is monetized, what changes the bill, and who pays more and why.

Required JSON fields:

- `drivers`
- `formula`
- `key_driver`
- `decision_core`
- `visualization.interactive_controls`

Recommended UI pattern: Control panel plus output summary showing bill movement, upgrade pressure, or value captured.

Pricing question answered: What variable actually makes the customer pay more?

Mutual exclusivity rules: Do not use as primary when pricing is fixed per tier with no meaningful variable driver. Use `Tier Ladder` for fixed plan packaging or `Upgrade Trigger Visual` for threshold movement.

Constraint: When used as primary, the visualization must clearly highlight one dominant driver. Multiple drivers can exist, but one must be visually and logically primary.

## Upgrade Trigger Visual

Purpose: Show the conditions that push a buyer from one tier, segment, or payment level to another.

Selection rule: Use as primary when pricing depends on thresholds, limits, gates, or governance moments and the main insight is when a buyer is forced to upgrade or pay more.

Component role: primary.

Decision core requirement: Must make clear what is monetized, what changes the bill, and who pays more and why.

Required JSON fields:

- `upgrade_triggers`
- `tiers`
- `segments`
- `drivers`
- `decision_core`

Recommended UI pattern: Trigger path, threshold line, or before/after state comparison.

Pricing question answered: What has to happen before the buyer upgrades or pays more?

Mutual exclusivity rules: Do not use as primary when there is no clear threshold, limit, or upgrade moment. Use `Pricing Driver Simulator` when spend changes continuously without a discrete trigger.

## Value Extraction Map

Purpose: Show where the company captures value relative to where the customer receives value.

Selection rule: Use as primary only when pricing cannot be clearly explained by tiers, thresholds, or drivers, and the key insight requires mapping value creation to the billing moment.

Component role: primary.

Decision core requirement: Must make clear what is monetized, what changes the bill, and who pays more and why.

Required JSON fields:

- `pricing_logic`
- `value_metric`
- `drivers`
- `formula`
- `decision_core`

Recommended UI pattern: Flow from customer activity to value received to billing event.

Pricing question answered: Where does the company extract value?

Mutual exclusivity rules: Do not use as primary when the main insight is simply tier movement, threshold crossing, or variable usage growth. Use the corresponding primary component for those cases.

## Friction Map

Purpose: Show where buyers slow down because they must estimate, classify, forecast, justify, or govern pricing.

Selection rule: Use as supporting when friction explains why the pricing model is hard to buy, forecast, administer, or defend.

Component role: supporting.

Decision core requirement: Must support what is monetized, what changes the bill, and who pays more and why without replacing the primary component.

Required JSON fields:

- `friction_points`
- `drivers`
- `formula`
- `upgrade_triggers`
- `decision_core`

Recommended UI pattern: Labeled friction points connected to the driver or decision that creates them.

Pricing question answered: Where does the customer get confused, delayed, or anxious?

Mutual exclusivity rules: Do not use as primary. If friction is caused by a specific driver, threshold, or value-capture mismatch, make that mechanism the primary component and use this map to explain the consequence.

## Risk / Vulnerability Map

Purpose: Show the structural risks created by the pricing model and where competitors can attack.

Selection rule: Use as supporting when the case needs to explain monetization risk, operational complexity, customer behavior risk, or a competitor attack surface.

Component role: supporting.

Decision core requirement: Must support what is monetized, what changes the bill, and who pays more and why without replacing the primary component.

Required JSON fields:

- `risks`
- `structural_weakness`
- `strategic_insight`
- `drivers`
- `decision_core`
- `student_10_second_takeaway`

Recommended UI pattern: Three-part risk map covering monetization risk, operational complexity, and customer behavior risk, plus the competitor opening.

Pricing question answered: What can break in this pricing model, and how could a competitor exploit it?

Mutual exclusivity rules: Do not use as primary. Risk explains the consequence of the pricing logic; it should not replace the component that explains the logic itself.
