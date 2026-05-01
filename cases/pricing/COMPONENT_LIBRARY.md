# Pricing Case Component Library

This file defines reusable pricing case components. It does not define data structure, page structure, or visual styling.

Layer 1 selects the primary component based on the pricing logic. `COMPONENT_LIBRARY.md` defines how each component should be used.

Use exactly one primary component per case. Supporting visuals may exist, but they do not replace the primary component and they are not system identifiers.

Strategic Logic Strip is not a primary component.
It is a canonical reasoning overlay defined in `CASE_SCHEMA.md` and `CASE_LAYER1_SCHEMA.md`.

Its purpose is:

- explaining hypothesized pricing-relevant causal logic
- improving fast causal comprehension
- supporting EVAC teaching

It must not replace:

- `tier_ladder`
- `matrix`
- `driver_logic`
- `trigger_path`
- `value_extraction_map`

Do not add a new component token.

## Canonical Primary Component Tokens

Use these exact tokens across Layer 1, the public-page template, and the case index:

- `tier_ladder`
- `matrix`
- `driver_logic`
- `trigger_path`
- `value_extraction_map`

Use the tokens above exactly. No alias or synonym is valid in stored pricing case data.

## Primary Component Decision Logic

Choose the primary component based on what most directly changes the bill.

Priority order:

1. what most directly changes the bill
2. what creates the strongest upgrade pressure
3. what can be understood fastest within 10 seconds visually

## `tier_ladder`

When to use:

- pricing is mainly driven by discrete named plan packaging
- the main teaching question is why buyers move from one plan to another
- plan position matters more than continuous usage or two-dimensional classification

What pricing logic it represents:

- discrete plan-based movement across a visible ladder
- buyer movement caused by plan scope, governance, or bundled capability changes

Required data fields:

- `tiers`
- `pricing_model`
- `key_driver`
- `upgrade_triggers`
- `decision_core`

What it must visually show:

- the named plans in order
- anchor price or pricing state for each plan when public
- what changes when the buyer moves up
- the main upgrade condition between plans

When not to use it:

- pricing is mainly driven by a continuous variable
- pricing depends on two meaningful dimensions at once
- the key teaching moment is threshold crossing rather than stable plan comparison

## `matrix`

When to use:

- pricing depends on two meaningful dimensions that jointly change the bill
- the learner needs to understand how classification across two axes changes spend
- examples include plan tier x role type, product layer x user permission, or asset layer x collaboration layer

What pricing logic it represents:

- two-dimensional pricing classification
- bill movement created by crossing or combining categories, not by simple feature comparison

Required data fields:

- `tiers`
- `segments`
- `key_driver`
- `drivers`
- `upgrade_triggers`
- `decision_core`

What it must visually show:

- two pricing-relevant axes
- how each axis changes the bill when combined with the other
- which classifications are free, lower-priced, or higher-priced
- how movement across the matrix changes payment level

When not to use it:

- only one dimension meaningfully changes the bill
- the visual would become a feature comparison table instead of a pricing mechanism
- the main logic is continuous variable growth or a single threshold event

Constraint:

- `matrix` must not be used as a feature comparison table. It must show how pricing classification changes the bill.

## `driver_logic`

When to use:

- pricing depends on a dominant continuous or scalable variable
- the main insight comes from how input changes bill movement
- the student needs to see one primary driver more than plan labels or classification categories

What pricing logic it represents:

- variable-driven bill movement
- continuous or hybrid scaling where one dominant driver changes spend directly

Required data fields:

- `drivers`
- `formula`
- `key_driver`
- `decision_core`

Recommended supporting fields:

- `visualization.interactive_controls`
- `upgrade_triggers`

What it must visually show:

- the dominant driver
- how spend changes when that driver changes
- the output or bill consequence of the driver change
- any supporting driver only if one dominant driver still remains visually primary

When not to use it:

- pricing is mainly fixed by plan packaging
- pricing is mainly explained by two-axis classification
- the core teaching moment is a discrete threshold or forced upgrade path

## `trigger_path`

When to use:

- pricing depends on thresholds, limits, gates, or governance moments
- the main teaching question is what has to happen before the buyer pays more
- upgrade pressure is more important than continuous variable motion

What pricing logic it represents:

- threshold-based movement
- forced upgrade logic created by crossing a boundary or triggering a governance change

Required data fields:

- `upgrade_triggers`
- `key_driver`
- `drivers`
- `decision_core`

Recommended supporting fields:

- `tiers`
- `segments`

What it must visually show:

- the threshold, gate, or trigger condition
- the before/after state or movement path
- what changes once the trigger is crossed
- why the buyer is pushed into the higher payment level

When not to use it:

- there is no meaningful threshold or discrete gate
- the bill mainly changes through continuous scaling
- two-axis classification is the clearer teaching mechanism

## `value_extraction_map`

When to use:

- the key insight is where billing captures value relative to where customers receive value
- pricing cannot be taught clearly enough through plan ladders, matrices, continuous driver movement, or threshold triggers alone

What pricing logic it represents:

- value capture mismatch or indirect billing logic
- mapping from user activity or customer value to the billing moment

Required data fields:

- `pricing_logic`
- `value_metric`
- `key_driver`
- `drivers`
- `formula`
- `decision_core`

What it must visually show:

- where the customer receives value
- where the company charges
- how value flows into the billing event
- the mismatch or handoff between value creation and monetization

When not to use it:

- the case is already well explained by plan ladders, matrices, driver movement, or trigger thresholds
- the main insight is simply tier movement, threshold crossing, or variable growth
