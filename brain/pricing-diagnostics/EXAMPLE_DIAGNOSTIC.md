# Example Diagnostic

## Client Challenge

"We have a SaaS product. Many prospects start a free trial, but few convert to paid users. What pricing mechanism should we design?"

## Initial Diagnosis

The observed symptom is not simply low revenue. The immediate pricing question is whether the free trial is creating qualified adoption or merely attracting low-commitment usage.

The diagnostic should first separate three possibilities:

- Prospects start the trial but do not reach first value.
- Prospects reach value but do not understand or trust the paid path.
- The trial attracts too many low-fit users who would not become profitable customers.

Until activation, support cost, and trial-to-paid behavior are measured, this should remain a bounded diagnostic rather than a full recommendation.

## Possible Outcome Engines

Primary outcome engine: `O1` Qualified adoption

Reason: The client needs more suitable prospects to move from trial interest to paid adoption.

Possible secondary outcome engine: `O3` Retention duration

Reason: If trial users convert without understanding value, plan limits, or pricing expectations, the system may create early churn after conversion.

## Candidate Levers

Primary candidate lever: `L1` Access enablement

Reason: The current free trial may need redesign so qualified prospects can reach first value with less perceived adoption risk.

Secondary candidate lever: `L2` Predictability and friction reduction

Reason: Prospects may hesitate because paid plan limits, usage consequences, renewal terms, or upgrade expectations are unclear.

Secondary candidate lever: `L4` Segmentation, versioning, and fences

Reason: The same trial may be serving different customer types poorly. A starter tier, usage cap, or qualification fence may help preserve access while reducing low-fit usage.

## Required Data

Minimum required data:

- Trial starts
- Activation definition
- Activation rate
- Trial-to-paid conversion rate
- Paid conversion by trial cohort
- Support cost per trial user
- Paid customer cannibalization indicator
- Upgrade path from trial or starter tier

Recommended data:

- Trial usage by segment
- Time to first value
- Drop-off stage
- Reasons for non-conversion
- Product-qualified account signal
- Sales-qualified account signal
- Plan page or paywall behavior
- Early paid retention after conversion

Advanced data:

- Lifetime value by trial cohort
- Activation propensity by source
- Trial design experiment results
- Willingness-to-pay or buyer research
- Support cost by usage pattern

## Missing Data

This example should be treated as incomplete if the client lacks:

- A stable activation definition
- Activation tracking during the trial
- Support cost allocation for free users
- Segment or qualification data for trial users
- Paid cannibalization monitoring
- Early retention by conversion path

## Recommendation State

Recommendation state: `Pilot only`

Why not `Recommend`: The symptom suggests an `O1` qualified adoption problem, and `L1`, `L2`, and `L4` are plausible levers. However, the client has not yet shown enough local evidence to know whether low conversion is caused by access design, activation failure, pricing uncertainty, poor segmentation, low customer fit, or product value gaps.

Why not `Do not recommend yet`: The free-trial symptom is specific enough to justify a bounded pricing design pilot if minimum measurement is installed first.

## Suggested Pricing Design Options

Consider piloting one or more of these options:

- Free trial redesign around activation milestones rather than calendar time alone.
- Starter tier with clear usage caps and a visible upgrade path.
- Guided trial for qualified prospects, with onboarding tied to first value.
- Segment-specific trial or entry offer for higher-fit prospects.
- Annual incentive only after activation, not before value proof.

These are design options, not automatic prescriptions. The pilot should choose the simplest mechanism that tests the causal hypothesis.

## Validation Plan

Hypothesis: If qualified prospects reach first value during the trial and understand the paid path, trial-to-paid conversion will improve without increasing support cost or cannibalizing paid plans.

Recommended first test: Pilot an activation-based trial redesign for a qualified segment.

Leading metrics:

- Activation rate
- Time to first value
- Qualified trial engagement
- Plan selection behavior
- Support tickets per trial user

Lagging metrics:

- Trial-to-paid conversion
- Paid retention after conversion
- ARPU after conversion
- Support cost per converted customer
- Paid customer cannibalization

Success threshold: Activation and trial-to-paid conversion improve for qualified users without material support-cost increase or paid-plan cannibalization.

Failure threshold: Conversion lift comes mainly from low-fit users, support cost rises materially, paid customers downgrade to the new entry path, or early paid churn increases.

## Governance Checks

Fairness risk: Trial eligibility, usage caps, and starter tier limits must be clear and non-discriminatory.

Transparency risk: Upgrade triggers, usage caps, renewal terms, and paid conversion conditions must be visible before customers commit.

Cost risk: Free or low-price users may create unsustainable support cost.

Customer backlash risk: Customers may react negatively if the trial feels like a bait-and-switch or if the starter tier is too constrained.

Legal or compliance risk: Review cancellation, auto-renewal, claims, and trial conversion terms before rollout.

Validation feasibility: The pilot should not launch unless activation tracking, support cost tracking, and cannibalization monitoring are in place.

## Hard Stops

Do not recommend broad rollout if:

- No activation tracking exists.
- Free users create unsustainable support cost.
- Paid customer cannibalization cannot be monitored.
- The upgrade path from trial or starter tier is weak.
- Trial-to-paid conversion cannot be separated by segment or qualification quality.

## Why This Remains Pilot Only

This diagnosis points to a plausible pricing pathway, but the missing data prevents confident causal attribution. The client may have a pricing access problem, a packaging problem, an activation problem, a segment-fit problem, or a product-value problem.

The safest advisory answer is to pilot a narrow pricing design with measurement in place. A full recommendation should wait until the system can verify that the mechanism improves `O1` Qualified adoption without damaging `O3` Retention duration, support economics, or paid-plan integrity.
