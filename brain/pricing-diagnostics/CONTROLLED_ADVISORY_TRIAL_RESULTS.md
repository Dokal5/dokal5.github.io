# Controlled Pricing Diagnostic Advisory Trial Results

Task name: `brain-pricing-diagnostic-controlled-advisory-trial-v1`

Execution type: Brain-only controlled advisory trial.

Promotion status: `brain_only`.

This artifact tests whether the completed Pricing Diagnostic Architecture can produce high-quality advisory reasoning for realistic client pricing challenges. It tests judgment quality, not production readiness.

This artifact does not modify or authorize production contracts, Layer 1 schemas, public case pages, hidden JSON, `case-library.js`, navigation, automation files, or pricing artifacts. All outputs remain Brain-only advisory reasoning.

## A. Trial Purpose

The controlled advisory trial checks whether the diagnostic layer can:

- Use existing outcome engines, causal levers, diagnostic rules, required data fields, validation gates, and advisory output fields.
- Preserve uncertainty instead of overclaiming from symptoms.
- Identify required confirming evidence and likely missing data.
- Propose bounded pricing mechanism options and a recommended first pilot.
- Apply hard stops and governance risks before recommending a mechanism.
- Keep every advisory output at `promotion_status: brain_only`.

The trial passes only if all three advisory answers are at least `Adequate`, with no `Weak` score on recommendation state, hard stops, governance, or Brain-only boundary.

## B. Trial Method And Rubric

Each trial case is scored `Strong`, `Adequate`, or `Weak` on the following dimensions:

| Dimension | Strong answer | Weak answer |
| --- | --- | --- |
| Diagnostic fit | Maps symptoms to the right outcome engines, causal levers, and rules. | Uses a fashionable mechanism without causal mapping. |
| Causal discipline | Explains how pricing would change customer behavior. | Treats the symptom as enough proof. |
| Evidence discipline | Separates known facts, required evidence, missing data, and data quality risks. | Hides uncertainty or treats missing data as available. |
| Recommendation state | Uses `Pilot only` or `Do not recommend yet` unless local evidence justifies `Recommend`. | Recommends a broad mechanism before evidence supports it. |
| Mechanism quality | Offers plausible options with tradeoffs and boundaries. | Jumps to one answer without alternatives. |
| Pilot design | Defines bounded scope, comparison, metrics, success threshold, and failure threshold. | Provides no measurable test. |
| Hard stops | Names conditions that block or downgrade action. | Omits conditions that would make the advice unsafe. |
| Governance | Covers fairness, transparency, cost, backlash, legal or compliance, and validation feasibility. | Ignores customer harm or operational feasibility. |
| Brain-only boundary | Keeps `promotion_status: brain_only` and avoids production authority. | Implies schema, Layer 1, public page, hidden JSON, `case-library.js`, navigation, automation, or artifact authority. |
| Advisory usefulness | Gives a client-facing reasoning path. | Merely fills fields without useful judgment. |

## C. Trial Case Inputs

| Case | Client challenge | Candidate mechanisms under consideration |
| --- | --- | --- |
| SaaS or AI tool adoption | Many signups or trials, but low paid conversion. | Freemium, usage-based pricing, tiered pricing. |
| B2B service margin | Revenue is growing, but small customers consume heavy support and customization. | Minimum fees, support tiers, retainers, service packages. |
| Marketplace liquidity | Demand exists, but qualified supply is thin in key segments. | Supplier subsidies, take-rate changes, segment incentives, dynamic pricing. |

## D. Advisory Diagnostic Outputs

### 1. SaaS Or AI Tool Adoption Problem

```json
{
  "client_challenge": "A SaaS or AI tool company has many signups or trials but low paid conversion. The team is considering freemium, usage-based pricing, and tiered pricing.",
  "diagnosed_problem": "The company may be generating entry volume without proving qualified activation, paid-path clarity, or a value metric that customers understand.",
  "expected_diagnostic_path": ["R1 primary", "R2 secondary if usage/value alignment explains conversion", "R4 secondary if tier design or fences explain conversion"],
  "primary_outcome_engine": {
    "code": "O1",
    "name": "Qualified adoption"
  },
  "secondary_outcome_engines": [
    {
      "code": "O2",
      "name": "Revenue per customer"
    },
    {
      "code": "O3",
      "name": "Retention duration"
    }
  ],
  "primary_causal_lever": {
    "code": "L1",
    "name": "Access enablement"
  },
  "secondary_causal_levers": [
    {
      "code": "L2",
      "name": "Predictability and friction reduction"
    },
    {
      "code": "L3",
      "name": "Value metric and nonlinear tariff alignment"
    },
    {
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    }
  ],
  "causal_hypothesis": "If qualified prospects reach activation with a clear paid path and manageable commitment, paid conversion should improve without attracting uneconomic free usage or confusing customers with a weak usage metric.",
  "required_confirming_evidence": [
    "Signup or trial source",
    "Activation definition and activation rate",
    "Trial-to-paid conversion",
    "Evidence that trial users are qualified prospects",
    "Usage distribution and usage-to-value relationship",
    "Support cost per entrant",
    "Paid customer cannibalization monitoring"
  ],
  "likely_missing_data": [
    "Stable activation definition",
    "Free-user support cost",
    "Trial-user qualification quality",
    "Paid-plan cannibalization",
    "Usage-to-value proof"
  ],
  "pricing_design_options": [
    "Activation-based trial",
    "Capped freemium",
    "Starter tier",
    "Guided trial for qualified users",
    "Usage-based expansion path",
    "Tier fences tied to value or support cost"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because low conversion plausibly reflects access or activation friction, but the available case facts do not prove whether the right intervention is freemium, usage-based pricing, tier redesign, onboarding, or stronger qualification.",
  "recommended_first_pilot": "Run an activation-based trial or starter-tier pilot for a qualified cohort, with usage caps and a clearly defined paid upgrade path.",
  "hard_stop_conditions": [
    "No activation tracking exists",
    "Free or low-price users create unsustainable support burden",
    "Upgrade path is unclear",
    "Paid customer cannibalization cannot be monitored",
    "Candidate usage metric is noisy, confusing, or easy to game"
  ],
  "validation_plan": {
    "scope": "One qualified acquisition segment or product-led cohort.",
    "comparison": "Compare against current trial flow or a matched historical cohort.",
    "leading_metrics": [
      "Activation rate",
      "Time to first value",
      "Qualified engagement",
      "Support tickets per entrant"
    ],
    "lagging_metrics": [
      "Trial-to-paid conversion",
      "ARPU after conversion",
      "Early paid retention",
      "Paid-plan cannibalization",
      "Support cost per converted customer"
    ],
    "success_threshold": "Qualified activation and paid conversion improve without material support-cost increase, paid-plan cannibalization, or bill-shock complaints.",
    "failure_threshold": "Lift comes mainly from low-fit users, support cost rises materially, paid users downgrade, or the usage metric creates confusion."
  },
  "governance_risks": [
    "Bait-and-switch perception",
    "Unclear limits",
    "Unfair eligibility",
    "Bill shock",
    "Support burden",
    "Renewal or cancellation compliance"
  ],
  "strong_advisory_answer": "Separates raw signup volume from qualified adoption and refuses to recommend freemium or usage pricing without activation, cost, value, and cannibalization evidence.",
  "weak_advisory_answer": "Recommends freemium, usage-based pricing, or broader free access because signups are high.",
  "promotion_status": "brain_only"
}
```

### 2. B2B Service Margin Problem

```json
{
  "client_challenge": "A B2B service business has growing revenue but poor margins because small customers require heavy support and customization. The team is considering minimum fees, support tiers, retainers, and service packages.",
  "diagnosed_problem": "The company may have unpriced cost-to-serve variation that current packages do not recover, but the pricing response depends on whether the costly behaviors are measurable, material, and customer-controllable.",
  "expected_diagnostic_path": ["R6 primary", "R4 secondary for customer mix and segmentation"],
  "primary_outcome_engine": {
    "code": "O6",
    "name": "Cost to serve coverage"
  },
  "secondary_outcome_engines": [
    {
      "code": "O4",
      "name": "Customer portfolio mix"
    },
    {
      "code": "O2",
      "name": "Revenue per customer"
    }
  ],
  "primary_causal_lever": {
    "code": "L8",
    "name": "Cost to serve allocation and ancillary pricing"
  },
  "secondary_causal_levers": [
    {
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    },
    {
      "code": "L3",
      "name": "Value metric and nonlinear tariff alignment"
    }
  ],
  "causal_hypothesis": "If high-support or high-customization customers face clear service boundaries, minimum economics, or paid service options, they will either pay for costly behaviors, reduce them, or move into better-fit packages.",
  "required_confirming_evidence": [
    "Revenue by customer",
    "Gross margin by customer or segment",
    "Support and customization cost",
    "Service usage by customer",
    "Order or account size",
    "Evidence customers can influence cost-driving behaviors"
  ],
  "likely_missing_data": [
    "Activity-based cost",
    "Customization cost attribution",
    "Segment consistency",
    "Customer controllability evidence",
    "Fairness exposure",
    "Retention by service tier"
  ],
  "pricing_design_options": [
    "Minimum fees",
    "Support tiers",
    "Retainers",
    "Customization fees",
    "Service packages",
    "Allowance and overage model"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the symptom fits cost-to-serve pricing, but a broad recommendation requires stronger proof that the cost driver is measurable, material, controllable, and not mainly an internal efficiency problem.",
  "recommended_first_pilot": "Pilot a visible service tier or minimum-fee structure for one segment, with clear migration rules and customer communication.",
  "hard_stop_conditions": [
    "Cost driver is not measurable",
    "Customers cannot control the cost-driving behavior",
    "Fee hides mandatory service",
    "Vulnerable or access-sensitive customer impact is unacceptable",
    "Margin issue is primarily internal inefficiency rather than pricing"
  ],
  "validation_plan": {
    "scope": "One customer segment or service line with visible support/customization cost variance.",
    "comparison": "Compare against a similar untreated segment or pre-pilot baseline.",
    "leading_metrics": [
      "Support hours per account",
      "Customization requests",
      "Service-tier selection",
      "Sales objections",
      "Complaint rate"
    ],
    "lagging_metrics": [
      "Contribution margin",
      "Conversion rate",
      "Retention",
      "Average revenue per customer",
      "Sales workaround rate"
    ],
    "success_threshold": "Contribution margin improves and support load becomes more aligned with paid service levels without unacceptable retention, complaint, or sales-workaround effects.",
    "failure_threshold": "Customers perceive the fee as punitive or hidden, support behavior does not change, retention falls sharply, or sales bypasses the design."
  },
  "governance_risks": [
    "Punitive-fee perception",
    "Arbitrary segmentation",
    "Hidden-fee risk",
    "Access or fairness risk",
    "Sales workaround risk"
  ],
  "strong_advisory_answer": "Distinguishes unpriced cost-to-serve behavior from bad customer mix and requires measurable, controllable cost drivers.",
  "weak_advisory_answer": "Tells the business to raise prices on small customers without proving cost attribution, customer response, or fairness.",
  "promotion_status": "brain_only"
}
```

### 3. Marketplace Liquidity Problem

```json
{
  "client_challenge": "A marketplace has demand but not enough qualified supply in key segments. The team is considering supplier subsidies, take-rate changes, segment incentives, or dynamic pricing.",
  "diagnosed_problem": "The marketplace may have a constrained-side participation problem, but pricing should only be used if incentives can improve qualified liquidity with a credible monetization path.",
  "expected_diagnostic_path": ["R8 primary", "R10 secondary if demand or capacity state varies"],
  "primary_outcome_engine": {
    "code": "O8",
    "name": "Competitive and network position"
  },
  "secondary_outcome_engines": [
    {
      "code": "O1",
      "name": "Qualified adoption"
    },
    {
      "code": "O6",
      "name": "Cost to serve coverage"
    }
  ],
  "primary_causal_lever": {
    "code": "L12",
    "name": "Multisided subsidy and cross side pricing"
  },
  "secondary_causal_levers": [
    {
      "code": "L11",
      "name": "Dynamic demand and capacity pricing"
    },
    {
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    }
  ],
  "causal_hypothesis": "If targeted incentives increase qualified supply in constrained segments, match reliability should improve for demand-side users and strengthen cross-side retention without creating subsidy dependence.",
  "required_confirming_evidence": [
    "Defined platform sides",
    "Constrained side",
    "Liquidity or match rate",
    "Supply quality",
    "Segment or geographic imbalance",
    "Cross-side value evidence",
    "Monetization path",
    "Incentive cost"
  ],
  "likely_missing_data": [
    "Network effect strength",
    "Multihoming behavior",
    "Participant quality",
    "Subsidy payback",
    "Category or geographic density",
    "Capacity-state data"
  ],
  "pricing_design_options": [
    "Constrained supplier subsidy",
    "Take-rate adjustment",
    "Segment incentive",
    "Quality-gated participation incentive",
    "Transparent peak/off-peak or capacity rule"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the imbalance plausibly fits cross-side pricing, but broad recommendation requires proof that pricing can attract qualified supply, improve liquidity, and produce monetizable network effects.",
  "recommended_first_pilot": "Pilot a constrained subsidy or take-rate adjustment in one market, category, or segment with participant-quality gates.",
  "hard_stop_conditions": [
    "Cross-side network effect is weak",
    "No monetization path exists",
    "Multihoming dominates",
    "Subsidy attracts low-quality supply",
    "Fairness guardrails are absent"
  ],
  "validation_plan": {
    "scope": "One constrained market, category, or supplier segment.",
    "comparison": "Compare against similar untreated markets or pre-pilot baseline.",
    "leading_metrics": [
      "Qualified supply participation",
      "Supply activation",
      "Availability in constrained segment",
      "Incentive redemption",
      "Supply quality score"
    ],
    "lagging_metrics": [
      "Match rate",
      "Cross-side retention",
      "Contribution margin after incentives",
      "Repeat supply participation",
      "Post-incentive liquidity persistence"
    ],
    "success_threshold": "Qualified supply and match rate improve while participant quality, contribution after incentive cost, and cross-side retention remain acceptable.",
    "failure_threshold": "Incentives attract low-quality or transient supply, match rate does not improve, contribution deteriorates, or liquidity disappears after incentives end."
  },
  "governance_risks": [
    "Discriminatory eligibility",
    "Subsidy dependence",
    "Opaque dynamic rules",
    "Unfair treatment between sides",
    "Algorithmic or fairness complaints"
  ],
  "strong_advisory_answer": "Treats liquidity as a network-design problem and requires proof pricing can change constrained-side participation without degrading quality.",
  "weak_advisory_answer": "Recommends broad supplier subsidies or take-rate cuts without monetization, quality, retention, or fairness checks.",
  "promotion_status": "brain_only"
}
```

## E. Evaluation Results

| Case | Diagnostic fit | Causal discipline | Evidence discipline | Recommendation state | Mechanism quality | Pilot design | Hard stops | Governance | Brain-only boundary | Advisory usefulness | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SaaS or AI tool adoption | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Pass |
| B2B service margin | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Pass |
| Marketplace liquidity | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Strong | Pass |

Reviewer notes:

- The SaaS or AI tool answer avoids the common weak answer of recommending freemium from signup volume alone. It correctly downgrades to `Pilot only` until activation, support cost, value metric, and cannibalization evidence exist.
- The B2B service margin answer keeps O6 primary and uses O4 as a secondary segmentation check. This avoids confusing unpriced support/customization cost with a generic small-customer problem.
- The marketplace answer treats liquidity as a cross-side network mechanism, not a generic supply-acquisition problem. It requires qualified supply, monetization path, and post-incentive persistence before broader recommendation.

## F. Cross-Case Findings

- The diagnostic architecture can produce client-useful advisory reasoning without creating new outcome engines, causal levers, data fields, validation gates, or production fields.
- The strongest pattern across all three cases is disciplined downgrading to `Pilot only` when symptoms are plausible but local evidence is incomplete.
- The architecture handles realistic ambiguity well when the answer explicitly separates mechanism options from the recommended first pilot.
- The main risk remains overclaiming: future advisory outputs should not convert Brain-only fields into Layer 1 fields, production schema, hidden JSON, public sections, `case-library.js` records, navigation, automation, or pricing artifacts.
- No additional diagnostic documentation is needed from this trial.

## G. Recommendation

Accept the Pricing Diagnostic Architecture as ready for controlled Brain-only advisory use.

Future work should use the diagnostic layer in advisory trials with real or realistic client prompts, then decide through explicit governance whether any single field should ever be promoted. This trial does not approve any promotion.

Promotion status: `brain_only`.
