# Pricing Intervention Simulation Protocol v1

## Recommended Approach

Pricing Intervention Simulation Protocol v1 defines how the Brain should reason about what changes when a pricing mechanism is modified.

This is a documentation-only Brain-layer reasoning protocol. It does not modify production pricing case schema, hidden JSON, public pages, course pages, `case-library.js`, UI behavior, database behavior, build behavior, automation, ontology labels, or production schema fields.

The protocol should be used manually during Brain Lookup, Workbench Artifact drafting, Decision Alternatives, Decision Priority, and reasoning review when a pricing case needs to move from mechanism description to intervention reasoning.

The core question is:

```text
If this pricing mechanism changes, what causal chain changes?
```

## Why This Matters

Describing a pricing mechanism is necessary, but it is not enough for decision reasoning.

Mechanism description answers:

```text
How does the bill change today?
```

Intervention simulation answers:

```text
If we change the mechanism, who pays differently, who behaves differently, what seller economics change, and what risk moves?
```

A pricing reasoning engine should support counterfactual thinking. It should help a reviewer reason about expected causal effects, unintended consequences, trade-offs, and evidence limits before treating an intervention as a recommendation.

This matters because pricing changes rarely affect only one outcome. A clearer fee may improve comprehension while reducing conversion. A stronger renewal recap may increase confidence for high-use customers while increasing cancellation among low-use customers. A changed discount rule may improve perceived fairness while weakening margin, predictability, or segment discipline.

The Brain should therefore separate expected effects from verified effects. It should name when an effect is hypothesized, observed, or verified, and it should not claim causal proof without evidence.

## Standard Intervention Structure

Use this reusable structure when simulating a pricing intervention:

```md
## Pricing Intervention Simulation

Current pricing mechanism:
Proposed intervention:
Intervention type:
What changes in the bill:
Who pays more and why:
Who pays less and why:
What changes in buyer behavior:
What changes in seller economics:
What risk moves:
Expected upside:
Expected downside:
Trade-off:
Leading indicator:
Failure signal:
Evidence needed:
Confidence level:
- high
- medium
- low
Evidence status:
- hypothesized
- observed
- verified
```

Confidence level describes confidence in the simulation logic, not proof that the outcome will happen.

Evidence status describes the strength of evidence behind the claimed effect:

| Evidence Status | Definition |
| --- | --- |
| `hypothesized` | The effect is a plausible causal expectation, but it has not been observed or tested in the case evidence. |
| `observed` | The effect is visible in available evidence, but causal proof is incomplete. |
| `verified` | The effect has direct supporting evidence from a test, measurement, or reliable source. |

Use `hypothesized` whenever the evidence is incomplete.

## Intervention Types

Use these initial intervention types:

| Intervention Type | Meaning |
| --- | --- |
| `change_price_level` | Change the amount charged while keeping the same pricing mechanism. |
| `change_pricing_unit` | Change what the buyer is charged by, such as seat, usage, transaction, access, or commitment. |
| `add_or_remove_tier` | Add, remove, merge, or split a pricing tier. |
| `change_threshold` | Change an allowance, limit, cap, boundary, usage trigger, or eligibility point. |
| `change_bundle_boundary` | Change what is included together versus priced or explained separately. |
| `change_commitment_requirement` | Change term, minimum spend, prepayment, renewal, or usage commitment requirements. |
| `change_discount_logic` | Change how discounts, offsets, incentives, or price reductions are earned or applied. |
| `change_fee_visibility` | Change where a fee is shown, explained, absorbed, itemized, or deducted. |
| `change_service_boundary` | Change where self-service ends and paid service, convenience, support, or fulfillment begins. |
| `change_value_metric` | Change the metric used to express or justify value capture. |
| `change_reward_or_credit_logic` | Change how rewards, credits, cashback, rebates, or future offsets are earned, capped, explained, or redeemed. |

These are intervention types, not new Pricing Reasoning Ontology labels. Do not add ontology labels during v1.

## Simulation Rules

- Start from the existing bill-changing logic.
- Do not simulate interventions without naming the current mechanism.
- Always identify who pays more and why after the change.
- Always identify who pays less and why after the change.
- Always name the trade-off.
- Always name the expected behavior change.
- Always name a leading indicator.
- Do not claim causal proof without evidence.
- Separate expected effect from verified effect.
- Use `hypothesized` when evidence is incomplete.
- Prefer small testable interventions over broad strategic claims.
- Treat customer segments separately when the intervention likely affects high-use and low-use buyers differently.
- Do not confuse a recommendation with a tested effect.
- Do not treat all customer segments as identical unless the mechanism truly affects them identically.
- Do not optimize one metric without naming the metric that may be damaged.

## Worked Example: Costco Membership

These examples use Costco Membership Layer 1 as the worked example because the dry run already describes bill-changing logic: the customer pays when they join, renew, or upgrade membership, while realized value depends on use, rewards, and benefits.

### A. Clarify Executive Break-Even Logic

## Pricing Intervention Simulation

Current pricing mechanism:
Annual membership plus Executive upgrade and 2% Reward logic.

Proposed intervention:
Make the Executive break-even logic more explicit by showing how eligible purchase activity relates to the incremental Executive upgrade fee, reward exclusions, reward cap, and reward timing.

Intervention type:
`change_reward_or_credit_logic`

What changes in the bill:
The membership fee does not change. The buyer better understands the effective cost exposure after possible Executive reward offset.

Who pays more and why:
Members who still choose Executive pay more upfront because they understand and accept the higher annual fee and reward economics.

Who pays less and why:
No one pays less directly. Some low-usage members may avoid paying more by not upgrading.

What changes in buyer behavior:
Executive upgrade decisions may become more deliberate, with fewer upgrades from members unlikely to earn or value enough reward benefit.

What changes in seller economics:
Upgrade revenue may become more qualified. Costco may lose some low-quality upgrades, but reduce dissatisfaction, reward confusion, downgrade pressure, or support burden.

What risk moves:
Reward misunderstanding risk decreases. Underuse risk becomes more visible before upgrade.

Expected upside:
Better upgrade comprehension and higher-quality Executive adoption.

Expected downside:
Some low-usage members may decide not to upgrade once the break-even logic is clearer.

Trade-off:
Clarity may improve trust and comprehension while reducing upgrades from members who are unlikely to realize enough value.

Leading indicator:
Improved Executive upgrade comprehension and fewer reward eligibility objections.

Failure signal:
Upgrade conversion falls without improved satisfaction, lower downgrade rates, or fewer reward-related support contacts.

Evidence needed:
Comprehension test, upgrade conversion by usage segment, downgrade or refund behavior, and reward-related support contacts.

Confidence level:
medium

Evidence status:
hypothesized

### B. Strengthen Renewal Value Recap

## Pricing Intervention Simulation

Current pricing mechanism:
Annual renewal decision.

Proposed intervention:
Show realized membership value, Executive rewards, and used benefits before renewal.

Intervention type:
`change_fee_visibility`

What changes in the bill:
Renewal price does not change. The renewal bill is framed against realized member value.

Who pays more and why:
Members with visible realized value may be more likely to renew and pay the annual fee.

Who pays less and why:
Underusing members may cancel or downgrade instead of renewing.

What changes in buyer behavior:
Members may evaluate renewal with more concrete evidence of prior-year value instead of relying only on memory or expected future savings.

What changes in seller economics:
Renewal revenue may improve among members with visible value, while low-use member retention may weaken.

What risk moves:
Value perception risk moves earlier into the renewal moment. Underuse risk becomes more explicit before payment.

Expected upside:
Higher renewal confidence among members who realized value.

Expected downside:
The recap may highlight low use and increase cancellation risk for underusing members.

Trade-off:
Value transparency may strengthen renewal among high-value members while exposing weak value realization among low-use members.

Leading indicator:
Renewal completion improves among members with meaningful benefit or reward history.

Failure signal:
Low-use member cancellations rise more than high-value renewals improve.

Evidence needed:
Renewal A/B test, usage-segment retention, cancellation reasons, and support contacts about membership value.

Confidence level:
medium

Evidence status:
hypothesized

### C. Separate Access Value From Benefit Portfolio

## Pricing Intervention Simulation

Current pricing mechanism:
Membership access plus member benefits.

Proposed intervention:
Frame base membership as paid access first, then separately explain Executive reward and benefits.

Intervention type:
`change_bundle_boundary`

What changes in the bill:
The buyer sees the base fee as access pricing and the Executive upgrade as added reward or benefit economics.

Who pays more and why:
Buyers who understand and value paid access may still join or upgrade because the fee logic is clearer.

Who pays less and why:
Buyers who mainly expected a rich benefit bundle may avoid joining or upgrading if base membership feels narrower.

What changes in buyer behavior:
Prospective and renewing members may distinguish the base membership access decision from the Executive reward and benefit decision.

What changes in seller economics:
Base membership conversion may become more dependent on perceived access value, while Executive upgrade value may become easier to explain separately.

What risk moves:
Bundle confusion risk decreases. Base-access value scrutiny increases.

Expected upside:
Clearer understanding of what the base fee buys.

Expected downside:
Base membership may feel less rich if benefits are underplayed.

Trade-off:
Conceptual clarity may reduce confusion while making the base membership value proposition feel narrower.

Leading indicator:
Better recall of base membership versus Executive value.

Failure signal:
Base membership conversion drops or customer confusion shifts from price logic to benefit sufficiency.

Evidence needed:
Pricing page comprehension test, join conversion, upgrade conversion, and customer-reported understanding.

Confidence level:
medium

Evidence status:
hypothesized

## Relationship To Brain Workflow

Pricing Intervention Simulation Protocol v1 extends existing Brain assets without replacing them.

| Brain Asset | Relationship |
| --- | --- |
| Pricing Reasoning Ontology | Supplies the current mechanism vocabulary, especially bill trigger, risk transfer, buyer decision, and teaching use. |
| Ontology Fit Classification | Qualifies whether the current mechanism mapping is strong enough to support simulation or should be treated cautiously. |
| Brain Lookup Retrieval Policy | Provides related cases that can inform plausible intervention effects, without treating analogy as proof. |
| Analogical Comparison Protocol | Helps test whether an intervention lesson transfers from another case or whether the analogy is dangerous. |
| Workbench Artifact | Can use intervention simulation as reasoning support, especially near Decision Alternatives, without changing the artifact contract in v1. |
| Decision Alternatives | Intervention simulations are the deeper reasoning form behind alternatives, making upside, downside, indicators, and evidence limits explicit. |
| Decision Priority | Simulations can help rank alternatives by testability, risk, upside, and evidence strength. |
| Reasoning Error Check | Should flag false causality, missing trade-offs, weak evidence, and segment-blind intervention claims. |
| Future Decision Engine | This protocol becomes the seed for structured counterfactual pricing reasoning before any automated simulator exists. |

## Future Uses

Pricing Intervention Simulation Protocol v1 can later support:

- Manual intervention simulation during Layer 1 drafting.
- Better Decision Alternatives and Decision Priority sections.
- Review checks for unsupported pricing recommendations.
- Case comparison by what would change if the mechanism were modified.
- Future decision simulator prompts after more manual examples exist.
- Future evidence-aware recommendation logic after v1 is tested manually.
- A later library of intervention examples grouped by mechanism, risk movement, and evidence status.

## Risks And Guardrails

| Risk | Guardrail |
| --- | --- |
| False causality | Require evidence status and prohibit causal proof language without evidence. |
| Overconfident simulation | Use confidence levels and `hypothesized` for incomplete evidence. |
| Intervention without evidence | Require evidence needed for every simulation. |
| Ignoring trade-offs | Require expected downside and trade-off fields. |
| Treating all customer segments as identical | Require who pays more and who pays less. |
| Optimizing one metric while damaging another | Require leading indicator and failure signal. |
| Confusing recommendation with tested effect | Separate proposed intervention from verified effect. |
| Process bloat | Keep the structure compact and use it only where intervention reasoning is needed. |
| Weak analogy transfer | Use Analogical Comparison before borrowing an intervention lesson from another case. |
| Premature production integration | Keep v1 documentation-only and do not promote fields into schema. |

## Recommended File Location

Keep this protocol in:

```text
brain/intervention/pricing_intervention_simulation_protocol.md
```

This is the preferred location because Pricing Intervention Simulation is a Brain-layer reasoning protocol, not a production artifact contract.

`cognition/pricing_intervention_simulation_protocol.md` would be plausible if this were mainly an operational workflow entrypoint, but the protocol is more directly about reasoning behavior.

Adding this protocol to `cognition/workbench_artifact.md` would make the Workbench Artifact contract carry too much reasoning governance and could imply a required production-sidecar schema change too early.

## Suggested Next Implementation Step

Use this protocol manually on the next pricing case that includes Decision Alternatives. The first validation pass should check whether the simulation structure helps reviewers identify:

- what changes in the bill
- who pays more and why
- who pays less and why
- what behavior may change
- what seller economics may change
- what risk moves
- what evidence is needed
- whether the effect is hypothesized, observed, or verified

Do not automate this protocol, promote fields into schema, or change production contracts during v1.

## V1 Non-Changes

Pricing Intervention Simulation Protocol v1 must not:

- Modify `cases/pricing/CASE_SCHEMA.md`.
- Modify hidden JSON in existing case pages.
- Modify `cases/pricing/case-library.js`.
- Modify public pages.
- Modify course pages.
- Add UI.
- Add a database.
- Add a build system.
- Add automation.
- Add new ontology labels.
- Promote fields into production schema.
- Create new production cases.
- Modify existing production cases.

## Acceptance Check

A reviewer should be able to use this protocol to manually simulate a pricing intervention by identifying what changes in the bill, who pays more and why, who pays less and why, what behavior may change, what seller economics may change, what risk moves, what evidence is needed, and whether the effect is hypothesized, observed, or verified.
