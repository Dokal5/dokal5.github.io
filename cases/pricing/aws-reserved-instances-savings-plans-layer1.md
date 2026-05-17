# AWS Reserved Instances / Savings Plans Layer 1

- Status: Implementation Ready
- Scope: Layer 1 analytical brief
- Case: AWS Reserved Instances / Savings Plans
- Case ID: aws-reserved-instances-savings-plans
- File slug: aws-reserved-instances-savings-plans
- Source page: `aws-reserved-instances-savings-plans.html`
- Reviewed: 2026-05-16

## Brain Lookup

Candidate:
AWS Reserved Instances / Savings Plans

Reviewed date:
2026-05-16

Official artifacts:
- https://aws.amazon.com/ec2/pricing/reserved-instances/
- https://aws.amazon.com/savingsplans/
- https://aws.amazon.com/savingsplans/faqs/
- https://aws.amazon.com/savingsplans/compute-pricing/

Related cases:
- `amazon-fba-fulfillment-storage-pricing`: Verified in Layer 1, HTML, and `case-library.js`. Related because both cases translate capacity burden and predictability into structured pricing exposure.
- `shopify-transaction-platform-pricing`: Verified in Layer 1, HTML, and `case-library.js`. Related because both cases monetize platform infrastructure through customer activity flowing through the system.
- `hp-instant-ink-page-count-subscription-pricing`: Verified in Layer 1, HTML, and `case-library.js`. Related because both cases make forecastable usage economically valuable while exposing the customer to overuse or underuse risk.
- `monday_seat_based_work_management_pricing`: Verified as the canonical `case_id` in Layer 1 and HTML; `case-library.js` uses slug `monday-seat-based-work-management-pricing`. Related because commitment and scale affect spend, although AWS commitment pricing is not a simple seat subscription.

Relevant pricing concepts:
- Commitment pricing: customers receive lower effective rates in exchange for one- or three-year usage commitments.
- Usage meter: eligible cloud usage is still metered; the commitment changes the rate applied to covered usage.
- Discount-for-predictability: steady or forecastable usage can receive lower prices than fully flexible On-Demand usage.
- Flexibility premium: more flexible usage rights generally trade off against maximum discount depth.
- Utilization risk transfer: unused commitment value becomes the customer's risk rather than AWS's idle-demand risk.
- Capacity reservation: zonal EC2 Reserved Instances can add capacity assurance, while Savings Plans do not provide capacity reservation.
- Effective compute rate: the relevant learner question is not the list price alone, but the blended rate across covered, uncovered, and unused committed usage.
- Uncovered usage exposure: usage beyond the commitment is charged at On-Demand rates.
- Forecasting value: better workload forecasts improve the customer's ability to choose commitment amount, term, and flexibility level.

Likely component pattern:
`driver_logic`

Primary component justification:
`driver_logic` is selected because the case is best explained through pricing drivers: commitment coverage, term length, payment option, flexibility/specificity, and uncovered usage exposure. A `matrix` may help compare RI and Savings Plans variants, but the core teaching goal is to show what changes the bill, not to classify AWS products.

Teaching sequence fit:
This case expands the library beyond simple SaaS subscriptions by showing pricing as financial engineering inside cloud infrastructure. The buyer is not only choosing a plan or usage tier; the buyer is trading flexibility for a lower effective rate while accepting forecasting and utilization risk.

Reasoning novelty:
- The new insight is that AWS monetizes uncertainty reduction: predictable future demand is worth a discount because it gives AWS stronger demand visibility while moving underuse risk to the customer.
- This challenges a simple "usage costs more when usage rises" assumption. In this case, the same usage can cost less when the customer commits to it in advance.
- It introduces a commitment-coverage variation of usage pricing, where the bill depends on the relationship between forecasted usage, committed usage, actual usage, and flexibility rights.
- It is not redundant with the existing SaaS or marketplace cases because the economic object being priced is not only access, seats, transactions, or operational burden; it is predictable infrastructure demand.

Evidence confidence:
HIGH

Mechanism certainty:
MEDIUM

Mechanism uncertainty:
- Exact savings depend on RI type, Savings Plan type, region, operating system, term, payment option, instance attributes, and eligible services.
- Savings Plans do not provide EC2 capacity reservation; zonal EC2 Reserved Instances can.
- The claim that AWS monetizes uncertainty reduction is an analytical interpretation from official pricing mechanics, not an AWS-stated causal claim.

Evidence gaps:
- Official pages support discount, commitment, term, payment option, capacity reservation, and uncovered usage mechanics, but they do not state the full strategic causal logic.
- Dated local screenshots were captured from the official AWS Savings Plans and EC2 Reserved Instances pages on 2026-05-17 for the public implementation.

Lookup status:
READY_FOR_LAYER_1

## Case Insight Brief

Company:
AWS

Case ID:
aws-reserved-instances-savings-plans

Pricing model:
Commitment-discount pricing for eligible cloud usage, with optional capacity reservation for zonal EC2 Reserved Instances.

Primary insight:
AWS turns usage predictability into a pricing asset by discounting eligible usage that customers commit to in advance while leaving uncovered or underused commitment exposure with the customer.

What is monetized:
Predictable future eligible cloud usage commitments and, for zonal EC2 Reserved Instances, optional capacity reservation.

How users are segmented:
Customers are segmented by On-Demand usage, commitment-covered usage, specific EC2 Reserved Instance attributes, Savings Plan flexibility level, payment option, term length, and uncovered usage exposure.

What drives price differences:
Commitment coverage, term length, payment option, flexibility or specificity of the commitment, and how much actual usage remains uncovered or underused.

Why this pricing works:
The hypothesized logic is that customers with predictable workloads accept commitment risk because lower effective rates are worth more than full flexibility, while AWS gains more predictable demand and revenue visibility.

Where friction appears:
Customers must forecast workload usage, choose commitment depth, understand flexibility constraints, and avoid both uncovered usage and unused commitments.

Where risk appears:
The structure can punish poor forecasts: too little commitment leaves spend at On-Demand rates, while too much commitment shifts underuse risk to the customer.

Structural weakness:
The model rewards forecasting discipline, but it can become cognitively difficult because discount depth, eligibility, flexibility, capacity reservation, and unused commitment risk interact.

Student 10-second takeaway:
The bill changes when eligible usage is covered by a commitment; uncovered usage stays On-Demand, and underused commitments leave the customer carrying utilization risk.

## Canonical Insight Sentence

This case monetizes infrastructure predictability by changing the effective compute rate when customers exchange future usage flexibility for a one- or three-year commitment.

## Generalizable Pricing Principle

This case illustrates that uncertainty can be monetized when customers have forecastable demand because a seller can trade lower unit economics for stronger utilization predictability and transfer underuse risk to the buyer.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "aws-reserved-instances-savings-plans",
  "case_type": "other",
  "evidence_level": "inferred",
  "pricing_model": "Commitment-discount pricing for eligible cloud usage, with optional capacity reservation for zonal EC2 Reserved Instances",
  "value_metric": "Eligible cloud usage covered by a committed usage level or reserved EC2 attributes",
  "segmentation_type": "On-Demand usage, commitment-covered usage, RI attribute coverage, Savings Plan flexibility level, payment option, term length, and uncovered usage",
  "tiers": [
    "On-Demand usage",
    "1-year commitment",
    "3-year commitment",
    "No Upfront",
    "Partial Upfront",
    "All Upfront"
  ],
  "segments": [
    "Fully flexible On-Demand users",
    "Savings Plans customers",
    "EC2 Reserved Instance customers",
    "Zonal EC2 Reserved Instance customers",
    "Uncovered usage",
    "Underused commitment"
  ],
  "pricing_logic": "AWS discounts eligible usage when customers commit to a one- or three-year usage level or EC2 Reserved Instance attributes. The customer bill changes with commitment coverage, term length, payment option, commitment specificity, and any usage that remains uncovered or underused.",
  "key_driver": "Commitment coverage of eligible usage",
  "drivers": [
    {
      "driver": "Commitment coverage of eligible usage",
      "type": "commitment",
      "pricing_role": "discount",
      "direction": "segment_users",
      "effect": "Eligible usage covered by a commitment receives discounted pricing instead of fully flexible On-Demand pricing.",
      "student_label": "Coverage"
    },
    {
      "driver": "Term length",
      "type": "commitment",
      "pricing_role": "discount",
      "direction": "segment_users",
      "effect": "Longer commitments generally support deeper effective discounts because the customer gives AWS more future-demand certainty.",
      "student_label": "Term"
    },
    {
      "driver": "Payment option",
      "type": "commitment",
      "pricing_role": "discount",
      "direction": "segment_users",
      "effect": "No Upfront, Partial Upfront, and All Upfront options change payment timing and can change the effective discounted rate.",
      "student_label": "Payment timing"
    },
    {
      "driver": "Flexibility or specificity of commitment",
      "type": "commitment",
      "pricing_role": "discount",
      "direction": "segment_users",
      "effect": "More specific commitments can produce lower prices, while more flexible commitments preserve workload mobility at a shallower discount.",
      "student_label": "Flexibility"
    },
    {
      "driver": "Uncovered usage exposure",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Usage beyond the active commitment remains charged at On-Demand rates, raising the blended effective bill.",
      "student_label": "Uncovered usage"
    },
    {
      "driver": "Capacity reservation scope",
      "type": "asset",
      "pricing_role": "access",
      "direction": "segment_users",
      "effect": "A zonal EC2 Reserved Instance can add capacity reservation for matching EC2 attributes, separating capacity assurance from Savings Plans discount coverage.",
      "student_label": "Capacity scope"
    }
  ],
  "formula": {
    "expression": "effective_cloud_bill = discounted_covered_usage + on_demand_uncovered_usage + unused_commitment_exposure",
    "variables": [
      {
        "symbol": "discounted_covered_usage",
        "label": "Eligible usage covered by commitment",
        "maps_to_driver": "Commitment coverage of eligible usage"
      },
      {
        "symbol": "on_demand_uncovered_usage",
        "label": "Usage beyond commitment billed On-Demand",
        "maps_to_driver": "Uncovered usage exposure"
      },
      {
        "symbol": "unused_commitment_exposure",
        "label": "Committed value not matched by actual usage",
        "maps_to_driver": "Commitment coverage of eligible usage"
      }
    ],
    "output_label": "Effective cloud bill exposure",
    "explanation": "The customer's final bill depends on how much actual eligible usage is covered by commitment pricing, how much remains On-Demand, and whether any committed usage value goes unused."
  },
  "upgrade_triggers": [
    {
      "trigger": "Customer moves from On-Demand to committed usage",
      "from": "Fully flexible On-Demand usage",
      "to": "Committed usage discount state",
      "why_it_happens": "The customer believes a workload is predictable enough to justify a one- or three-year commitment.",
      "pricing_effect": "Covered eligible usage receives discounted pricing, while the customer accepts commitment and utilization risk."
    },
    {
      "trigger": "Customer chooses a longer or more specific commitment",
      "from": "More flexible or shorter commitment",
      "to": "Lower effective rate with more commitment constraints",
      "why_it_happens": "The customer values lower effective cost more than preserving maximum future flexibility.",
      "pricing_effect": "Discount depth can improve, but the customer has less room for forecast error or workload change."
    },
    {
      "trigger": "Actual usage exceeds commitment coverage",
      "from": "Usage covered by commitment",
      "to": "Uncovered usage billed On-Demand",
      "why_it_happens": "The customer uses more eligible cloud capacity than the committed amount or covered attributes allow.",
      "pricing_effect": "The blended bill rises because the excess usage is charged at On-Demand rates."
    },
    {
      "trigger": "Actual usage falls below commitment coverage",
      "from": "Forecasted usage matches commitment",
      "to": "Underused commitment exposure",
      "why_it_happens": "The customer's workload demand falls, migrates, or changes faster than the commitment can absorb.",
      "pricing_effect": "The customer still carries commitment cost, reducing or eliminating the expected savings."
    },
    {
      "trigger": "Customer specifies an Availability Zone for an EC2 Reserved Instance",
      "from": "Regional discount-oriented coverage",
      "to": "Zonal EC2 Reserved Instance capacity reservation",
      "why_it_happens": "The customer wants additional confidence that matching EC2 capacity will be available in a specific Availability Zone.",
      "pricing_effect": "The commitment can provide both RI discount coverage and reserved EC2 capacity for matching attributes."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [
      "variant comparison table",
      "boundary transition rows"
    ],
    "interactive_controls": [
      "commitment coverage",
      "term length",
      "payment option",
      "flexibility or specificity",
      "uncovered usage"
    ],
    "default_view": "Commitment coverage drives effective bill exposure",
    "student_prompt": "What portion of usage is covered, uncovered, or underused?",
    "local_screenshot_paths": [
      "../../assets/pricing-artifacts/aws-reserved-instances-savings-plans/aws-reserved-instances-savings-plans-page-2026-05-17.png",
      "../../assets/pricing-artifacts/aws-reserved-instances-savings-plans/aws-ec2-reserved-instances-page-2026-05-17.png"
    ],
    "screenshot_captured_at": "2026-05-17"
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Predictable future eligible cloud usage commitments and, for zonal EC2 Reserved Instances, optional capacity reservation.",
    "what_changes_the_bill": "The bill changes when eligible usage is covered by a commitment, when term length, payment option, or commitment specificity changes the effective rate, and when usage remains uncovered or underused.",
    "who_pays_more_and_why": "Customers who keep full flexibility, under-commit, over-commit, or run usage outside commitment coverage pay more because they either remain exposed to On-Demand rates or carry unused commitment cost."
  },
  "student_10_second_takeaway": "The bill changes when eligible usage is covered by a commitment; uncovered usage stays On-Demand, and underused commitments leave the customer carrying utilization risk.",
  "friction_points": [
    "Customers must forecast future usage before knowing whether the commitment will be fully used.",
    "Discount depth depends on product rules, term length, payment option, region, operating system, and usage eligibility.",
    "Savings Plans and EC2 Reserved Instances can look similar as discount vehicles while differing on capacity reservation and flexibility.",
    "A lower nominal rate can hide underuse risk if workloads shrink or move."
  ],
  "risks": [
    "Customers may overbuy commitments and lose expected savings through underutilization.",
    "Customers may underbuy commitments and leave predictable usage at On-Demand rates.",
    "Buyers may confuse Savings Plans discounts with EC2 capacity reservation.",
    "The analytical interpretation of uncertainty monetization could be overclaimed if presented as AWS's stated strategy."
  ],
  "structural_weakness": "The model creates powerful savings for predictable workloads, but the buyer must understand commitment coverage, flexibility limits, capacity reservation differences, and utilization risk before the effective bill is clear.",
  "strategic_insight": "AWS commitment pricing works when customers can convert workload predictability into lower effective rates while AWS gains stronger demand visibility and shifts underuse risk to the customer.",
  "strategic_logic": {
    "customer_condition": "Customers face usage uncertainty",
    "behavior_change": "They commit predictable workloads",
    "pricing_driver": "Commitment coverage of eligible usage",
    "billing_change": "Covered usage receives discounted rates",
    "financial_outcome": "AWS gains demand predictability while customers carry utilization risk",
    "dominant_causal_chain": [
      "Customers face usage uncertainty",
      "They commit predictable workloads",
      "Commitment coverage of eligible usage",
      "Covered usage receives discounted rates",
      "AWS gains demand predictability while customers carry utilization risk"
    ],
    "main_assumption": "Customers can forecast enough eligible usage that the discount is worth the flexibility and utilization risk they accept.",
    "main_failure_risk": "Workload demand changes faster than the commitment can adapt, causing underused commitments or uncovered usage to erode expected savings.",
    "evidence_status": "inferred",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Underuse-risk calculator",
      "pricing_move": "Make underused commitment exposure visible beside projected savings before purchase.",
      "expected_effect": "Improves commitment sizing discipline and reduces buyer surprise when usage falls below forecast.",
      "trade_off": "Makes commitment risk more salient and may reduce aggressive upfront commitment purchases.",
      "leading_indicator": "Lower post-purchase commitment underutilization and fewer support or billing questions about expected savings."
    },
    {
      "option": "Coverage-first purchase flow",
      "pricing_move": "Frame purchase decisions around covered, uncovered, and underused usage before showing detailed product variant comparisons.",
      "expected_effect": "Keeps the buyer focused on what changes the bill instead of only comparing AWS product labels.",
      "trade_off": "May simplify product differences that matter for advanced FinOps buyers.",
      "leading_indicator": "Higher share of buyers completing recommendations with explicit coverage targets and fewer mismatched commitment choices."
    },
    {
      "option": "Capacity-reservation separation",
      "pricing_move": "More clearly separate Savings Plans discount coverage from zonal EC2 RI capacity reservation in the purchase education path.",
      "expected_effect": "Reduces category errors between discount commitments and capacity assurance.",
      "trade_off": "Adds another decision step for buyers who only want a savings recommendation.",
      "leading_indicator": "Lower rate of customers expecting Savings Plans to provide EC2 capacity reservation."
    }
  ],
  "bill_examples": [
    {
      "scenario": "Predictable workload covered by commitment",
      "customer_situation": "A customer has steady eligible usage and commits to the expected baseline for one or three years.",
      "base_price": "On-Demand rate for the eligible usage",
      "pricing_driver": "Commitment coverage of eligible usage",
      "variable_charge": "Eligible usage up to the commitment receives the applicable discounted commitment rate.",
      "discount_or_adjustment": "Commitment discount applies to covered usage; exact discount depends on AWS product rules and selected terms.",
      "final_bill": "Illustrative logic: covered usage is billed at discounted commitment pricing instead of On-Demand pricing.",
      "pricing_lesson": "Forecastable usage becomes cheaper when the customer trades flexibility for commitment coverage."
    },
    {
      "scenario": "Usage exceeds commitment",
      "customer_situation": "A customer commits to a baseline but actual eligible usage rises above the committed amount.",
      "base_price": "Committed usage charge plus On-Demand pricing for excess usage",
      "pricing_driver": "Uncovered usage exposure",
      "variable_charge": "Usage beyond the active commitment is billed at regular On-Demand rates.",
      "discount_or_adjustment": "Discount applies only to covered eligible usage.",
      "final_bill": "Illustrative logic: blended bill rises because uncovered usage keeps full flexibility and full On-Demand exposure.",
      "pricing_lesson": "Under-commitment preserves flexibility but leaves incremental usage outside the savings envelope."
    },
    {
      "scenario": "Commitment is underused",
      "customer_situation": "A customer commits to expected usage, then workload demand falls or migrates outside the covered pattern.",
      "base_price": "Committed usage obligation",
      "pricing_driver": "Commitment coverage of eligible usage",
      "variable_charge": "Actual covered usage is lower than the commitment level.",
      "discount_or_adjustment": "Expected savings shrink because committed value is not fully matched by usage.",
      "final_bill": "Illustrative logic: the customer still carries commitment exposure, so the effective savings can disappear.",
      "pricing_lesson": "The discount is valuable only when the customer can use enough of the commitment."
    },
    {
      "scenario": "Zonal EC2 RI for capacity assurance",
      "customer_situation": "A customer needs matching EC2 capacity confidence in a specific Availability Zone.",
      "base_price": "EC2 usage matching RI attributes",
      "pricing_driver": "Capacity reservation scope",
      "variable_charge": "The zonal EC2 RI can provide capacity reservation plus discounted RI pricing for matching attributes.",
      "discount_or_adjustment": "RI discount applies when matching usage attributes are present.",
      "final_bill": "Illustrative logic: the buyer receives discount mechanics and capacity assurance, unlike a Savings Plan alone.",
      "pricing_lesson": "Capacity assurance is a different pricing boundary from generic commitment discount coverage."
    }
  ],
  "boundary_crossing_map": [
    {
      "from_state": "Fully flexible On-Demand usage",
      "boundary_condition": "Customer commits to eligible usage for one or three years",
      "to_state": "Discounted commitment-covered usage",
      "driver": "Commitment coverage of eligible usage",
      "billing_effect": "Covered usage receives commitment pricing instead of On-Demand pricing.",
      "customer_perception_risk": "The discount may look simple while the commitment risk is harder to price mentally."
    },
    {
      "from_state": "Covered commitment usage",
      "boundary_condition": "Actual usage exceeds the commitment or covered attributes",
      "to_state": "Uncovered On-Demand usage",
      "driver": "Uncovered usage exposure",
      "billing_effect": "Excess usage is charged at On-Demand rates.",
      "customer_perception_risk": "The buyer may expect the discount to cover more usage than the commitment actually covers."
    },
    {
      "from_state": "Forecasted usage matches commitment",
      "boundary_condition": "Actual usage falls below the committed level",
      "to_state": "Underused commitment exposure",
      "driver": "Commitment coverage of eligible usage",
      "billing_effect": "Expected savings decline because the customer carries unused commitment value.",
      "customer_perception_risk": "The buyer may experience the discount as lock-in if workloads shrink or move."
    },
    {
      "from_state": "Savings Plans discount expectation",
      "boundary_condition": "Customer needs EC2 capacity reserved in a specific Availability Zone",
      "to_state": "Zonal EC2 Reserved Instance capacity reservation logic",
      "driver": "Capacity reservation scope",
      "billing_effect": "The buyer must use zonal EC2 RI reservation logic for capacity assurance rather than relying on Savings Plans alone.",
      "customer_perception_risk": "The buyer may confuse discount coverage with capacity reservation."
    }
  ],
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Coverage-first purchase flow",
      "why_first": "It targets the fastest comprehension problem: what portion of usage is covered, uncovered, or underused.",
      "test_type": "Purchase-flow comprehension test",
      "risk_level": "low",
      "upside_potential": "Better commitment matching without changing the underlying pricing model.",
      "implementation_complexity": "medium",
      "success_metric": "Increase in buyers who can correctly identify covered, uncovered, and underused bill exposure before purchase."
    },
    {
      "priority_rank": 2,
      "option": "Underuse-risk calculator",
      "why_first": "It directly reduces the main customer-side failure mode but requires more usage-forecast modeling.",
      "test_type": "Recommendation tool experiment",
      "risk_level": "medium",
      "upside_potential": "Lower regret and better realized savings for commitment buyers.",
      "implementation_complexity": "medium",
      "success_metric": "Reduction in commitment underutilization among customers using the calculator."
    },
    {
      "priority_rank": 3,
      "option": "Capacity-reservation separation",
      "why_first": "It fixes an important category error, but only for customers evaluating EC2 capacity assurance.",
      "test_type": "Documentation and purchase education test",
      "risk_level": "low",
      "upside_potential": "Fewer mismatched expectations between Savings Plans and zonal EC2 RIs.",
      "implementation_complexity": "low",
      "success_metric": "Decrease in capacity reservation confusion signals in support, docs search, or purchase-flow feedback."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case could overstate AWS's strategic intent by saying AWS explicitly monetizes uncertainty reduction.",
      "case_specific_check": "Keep the uncertainty-monetization claim framed as analytical interpretation from commitment pricing mechanics.",
      "evidence_needed": "Official AWS strategy language would be needed to state intent rather than inferred mechanism.",
      "failure_signal": "The public page presents the strategic interpretation as an AWS-stated claim."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "The case could blur Savings Plans and EC2 Reserved Instances into one product.",
      "case_specific_check": "Maintain the boundary that Savings Plans provide discount coverage but no EC2 capacity reservation, while zonal EC2 RIs can reserve capacity.",
      "evidence_needed": "Official AWS RI and Savings Plans documentation on capacity reservation behavior.",
      "failure_signal": "A reader believes Savings Plans provide capacity reservation."
    },
    {
      "error_type": "weak_evidence_fit",
      "risk_statement": "Exact discount claims may be too broad because AWS discount levels vary by product, region, OS, term, payment option, and eligibility.",
      "case_specific_check": "Use only broad official maximum discount language and avoid invented exact pricing examples.",
      "evidence_needed": "AWS pricing tables or calculator output for any exact future implementation example.",
      "failure_signal": "The artifact or page gives precise savings that are not traceable to a dated official source."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "The discount can look like pure savings if underuse risk and flexibility loss are hidden.",
      "case_specific_check": "Every bill example and decision alternative should show the trade between lower effective rate and commitment risk.",
      "evidence_needed": "Commitment utilization reporting or customer forecast outcomes would help validate the practical size of the trade off.",
      "failure_signal": "The page teaches buyers to maximize discount depth without showing utilization risk."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "The case could confuse workload value with the price driver.",
      "case_specific_check": "Keep `key_driver` anchored on commitment coverage of eligible usage, not generic cloud value or workload importance.",
      "evidence_needed": "No extra evidence needed if all JSON fields continue to map to commitment coverage, uncovered usage, term, payment option, flexibility, and capacity scope.",
      "failure_signal": "The case starts explaining cloud architecture value instead of what changes the bill."
    }
  ]
}
```

## Render Instruction

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "render_goal": "Show within 10 seconds that AWS discounts eligible usage covered by commitment, while uncovered usage remains On-Demand and underused commitments transfer utilization risk to the customer.",
  "primary_component": "driver_logic",
  "secondary_components": [
    "compact comparison table for RI and Savings Plans variants",
    "boundary transition rows for covered, uncovered, underused, and capacity-reserved states"
  ],
  "first_screen_priority": [
    "decision_core",
    "student_10_second_takeaway",
    "key_driver",
    "commitment coverage vs uncovered usage"
  ],
  "interactive_controls": [
    "commitment coverage",
    "term length",
    "payment option",
    "flexibility or specificity",
    "uncovered usage"
  ],
  "avoid": [
    "Do not render AWS product variants as the primary mechanism.",
    "Do not turn the page into a cloud infrastructure explainer.",
    "Do not imply Savings Plans provide EC2 capacity reservation.",
    "Do not invent exact prices or discounts beyond official maximum discount language.",
    "Do not use a matrix as the primary component."
  ],
  "failure_modes": [
    "A reader cannot tell that covered usage, uncovered usage, and underused commitment create different bill effects.",
    "The page classifies AWS products but fails to show what changes the bill.",
    "The strategic interpretation is shown as AWS-stated intent rather than hypothesized pricing logic.",
    "The capacity reservation boundary between Savings Plans and zonal EC2 RIs is hidden."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "primary_component",
    "strategic_logic",
    "bill_examples",
    "boundary_crossing_map"
  ]
}
```

Pricing artifact plan:
Dated local screenshots were captured from the official AWS EC2 Reserved Instances page and AWS Savings Plans page on 2026-05-17. Cite the Savings Plans FAQ and Compute Savings Plans pricing page as supporting sources for commitment, overage, flexibility, and capacity-reservation distinctions.

## Strategic Logic

Strategic logic compression:
customer uncertainty -> commitment behavior -> AWS predictability -> pricing discount -> transferred utilization risk

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "strategic_logic": {
    "customer_condition": "Customers face usage uncertainty",
    "behavior_change": "They commit predictable workloads",
    "pricing_driver": "Commitment coverage of eligible usage",
    "billing_change": "Covered usage receives discounted rates",
    "financial_outcome": "AWS gains demand predictability while customers carry utilization risk",
    "dominant_causal_chain": [
      "Customers face usage uncertainty",
      "They commit predictable workloads",
      "Commitment coverage of eligible usage",
      "Covered usage receives discounted rates",
      "AWS gains demand predictability while customers carry utilization risk"
    ],
    "main_assumption": "Customers can forecast enough eligible usage that the discount is worth the flexibility and utilization risk they accept.",
    "main_failure_risk": "Workload demand changes faster than the commitment can adapt, causing underused commitments or uncovered usage to erode expected savings.",
    "evidence_status": "inferred",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  }
}
```

## Decision Alternatives

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "decision_alternatives": [
    {
      "option": "Underuse-risk calculator",
      "pricing_move": "Make underused commitment exposure visible beside projected savings before purchase.",
      "expected_effect": "Improves commitment sizing discipline and reduces buyer surprise when usage falls below forecast.",
      "trade_off": "Makes commitment risk more salient and may reduce aggressive upfront commitment purchases.",
      "leading_indicator": "Lower post-purchase commitment underutilization and fewer support or billing questions about expected savings."
    },
    {
      "option": "Coverage-first purchase flow",
      "pricing_move": "Frame purchase decisions around covered, uncovered, and underused usage before showing detailed product variant comparisons.",
      "expected_effect": "Keeps the buyer focused on what changes the bill instead of only comparing AWS product labels.",
      "trade_off": "May simplify product differences that matter for advanced FinOps buyers.",
      "leading_indicator": "Higher share of buyers completing recommendations with explicit coverage targets and fewer mismatched commitment choices."
    },
    {
      "option": "Capacity-reservation separation",
      "pricing_move": "More clearly separate Savings Plans discount coverage from zonal EC2 RI capacity reservation in the purchase education path.",
      "expected_effect": "Reduces category errors between discount commitments and capacity assurance.",
      "trade_off": "Adds another decision step for buyers who only want a savings recommendation.",
      "leading_indicator": "Lower rate of customers expecting Savings Plans to provide EC2 capacity reservation."
    }
  ]
}
```

## Bill Examples

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "bill_examples": [
    {
      "scenario": "Predictable workload covered by commitment",
      "customer_situation": "A customer has steady eligible usage and commits to the expected baseline for one or three years.",
      "base_price": "On-Demand rate for the eligible usage",
      "pricing_driver": "Commitment coverage of eligible usage",
      "variable_charge": "Eligible usage up to the commitment receives the applicable discounted commitment rate.",
      "discount_or_adjustment": "Commitment discount applies to covered usage; exact discount depends on AWS product rules and selected terms.",
      "final_bill": "Illustrative logic: covered usage is billed at discounted commitment pricing instead of On-Demand pricing.",
      "pricing_lesson": "Forecastable usage becomes cheaper when the customer trades flexibility for commitment coverage."
    },
    {
      "scenario": "Usage exceeds commitment",
      "customer_situation": "A customer commits to a baseline but actual eligible usage rises above the committed amount.",
      "base_price": "Committed usage charge plus On-Demand pricing for excess usage",
      "pricing_driver": "Uncovered usage exposure",
      "variable_charge": "Usage beyond the active commitment is billed at regular On-Demand rates.",
      "discount_or_adjustment": "Discount applies only to covered eligible usage.",
      "final_bill": "Illustrative logic: blended bill rises because uncovered usage keeps full flexibility and full On-Demand exposure.",
      "pricing_lesson": "Under-commitment preserves flexibility but leaves incremental usage outside the savings envelope."
    },
    {
      "scenario": "Commitment is underused",
      "customer_situation": "A customer commits to expected usage, then workload demand falls or migrates outside the covered pattern.",
      "base_price": "Committed usage obligation",
      "pricing_driver": "Commitment coverage of eligible usage",
      "variable_charge": "Actual covered usage is lower than the commitment level.",
      "discount_or_adjustment": "Expected savings shrink because committed value is not fully matched by usage.",
      "final_bill": "Illustrative logic: the customer still carries commitment exposure, so the effective savings can disappear.",
      "pricing_lesson": "The discount is valuable only when the customer can use enough of the commitment."
    },
    {
      "scenario": "Zonal EC2 RI for capacity assurance",
      "customer_situation": "A customer needs matching EC2 capacity confidence in a specific Availability Zone.",
      "base_price": "EC2 usage matching RI attributes",
      "pricing_driver": "Capacity reservation scope",
      "variable_charge": "The zonal EC2 RI can provide capacity reservation plus discounted RI pricing for matching attributes.",
      "discount_or_adjustment": "RI discount applies when matching usage attributes are present.",
      "final_bill": "Illustrative logic: the buyer receives discount mechanics and capacity assurance, unlike a Savings Plan alone.",
      "pricing_lesson": "Capacity assurance is a different pricing boundary from generic commitment discount coverage."
    }
  ]
}
```

## Boundary Crossing Map

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "boundary_crossing_map": [
    {
      "from_state": "Fully flexible On-Demand usage",
      "boundary_condition": "Customer commits to eligible usage for one or three years",
      "to_state": "Discounted commitment-covered usage",
      "driver": "Commitment coverage of eligible usage",
      "billing_effect": "Covered usage receives commitment pricing instead of On-Demand pricing.",
      "customer_perception_risk": "The discount may look simple while the commitment risk is harder to price mentally."
    },
    {
      "from_state": "Covered commitment usage",
      "boundary_condition": "Actual usage exceeds the commitment or covered attributes",
      "to_state": "Uncovered On-Demand usage",
      "driver": "Uncovered usage exposure",
      "billing_effect": "Excess usage is charged at On-Demand rates.",
      "customer_perception_risk": "The buyer may expect the discount to cover more usage than the commitment actually covers."
    },
    {
      "from_state": "Forecasted usage matches commitment",
      "boundary_condition": "Actual usage falls below the committed level",
      "to_state": "Underused commitment exposure",
      "driver": "Commitment coverage of eligible usage",
      "billing_effect": "Expected savings decline because the customer carries unused commitment value.",
      "customer_perception_risk": "The buyer may experience the discount as lock-in if workloads shrink or move."
    },
    {
      "from_state": "Savings Plans discount expectation",
      "boundary_condition": "Customer needs EC2 capacity reserved in a specific Availability Zone",
      "to_state": "Zonal EC2 Reserved Instance capacity reservation logic",
      "driver": "Capacity reservation scope",
      "billing_effect": "The buyer must use zonal EC2 RI reservation logic for capacity assurance rather than relying on Savings Plans alone.",
      "customer_perception_risk": "The buyer may confuse discount coverage with capacity reservation."
    }
  ]
}
```

## Decision Priority

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Coverage-first purchase flow",
      "why_first": "It targets the fastest comprehension problem: what portion of usage is covered, uncovered, or underused.",
      "test_type": "Purchase-flow comprehension test",
      "risk_level": "low",
      "upside_potential": "Better commitment matching without changing the underlying pricing model.",
      "implementation_complexity": "medium",
      "success_metric": "Increase in buyers who can correctly identify covered, uncovered, and underused bill exposure before purchase."
    },
    {
      "priority_rank": 2,
      "option": "Underuse-risk calculator",
      "why_first": "It directly reduces the main customer-side failure mode but requires more usage-forecast modeling.",
      "test_type": "Recommendation tool experiment",
      "risk_level": "medium",
      "upside_potential": "Lower regret and better realized savings for commitment buyers.",
      "implementation_complexity": "medium",
      "success_metric": "Reduction in commitment underutilization among customers using the calculator."
    },
    {
      "priority_rank": 3,
      "option": "Capacity-reservation separation",
      "why_first": "It fixes an important category error, but only for customers evaluating EC2 capacity assurance.",
      "test_type": "Documentation and purchase education test",
      "risk_level": "low",
      "upside_potential": "Fewer mismatched expectations between Savings Plans and zonal EC2 RIs.",
      "implementation_complexity": "low",
      "success_metric": "Decrease in capacity reservation confusion signals in support, docs search, or purchase-flow feedback."
    }
  ]
}
```

## Reasoning Error Check

```json
{
  "case_id": "aws-reserved-instances-savings-plans",
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case could overstate AWS's strategic intent by saying AWS explicitly monetizes uncertainty reduction.",
      "case_specific_check": "Keep the uncertainty-monetization claim framed as analytical interpretation from commitment pricing mechanics.",
      "evidence_needed": "Official AWS strategy language would be needed to state intent rather than inferred mechanism.",
      "failure_signal": "The public page presents the strategic interpretation as an AWS-stated claim."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "The case could blur Savings Plans and EC2 Reserved Instances into one product.",
      "case_specific_check": "Maintain the boundary that Savings Plans provide discount coverage but no EC2 capacity reservation, while zonal EC2 RIs can reserve capacity.",
      "evidence_needed": "Official AWS RI and Savings Plans documentation on capacity reservation behavior.",
      "failure_signal": "A reader believes Savings Plans provide capacity reservation."
    },
    {
      "error_type": "weak_evidence_fit",
      "risk_statement": "Exact discount claims may be too broad because AWS discount levels vary by product, region, OS, term, payment option, and eligibility.",
      "case_specific_check": "Use only broad official maximum discount language and avoid invented exact pricing examples.",
      "evidence_needed": "AWS pricing tables or calculator output for any exact future implementation example.",
      "failure_signal": "The artifact or page gives precise savings that are not traceable to a dated official source."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "The discount can look like pure savings if underuse risk and flexibility loss are hidden.",
      "case_specific_check": "Every bill example and decision alternative should show the trade between lower effective rate and commitment risk.",
      "evidence_needed": "Commitment utilization reporting or customer forecast outcomes would help validate the practical size of the trade off.",
      "failure_signal": "The page teaches buyers to maximize discount depth without showing utilization risk."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "The case could confuse workload value with the price driver.",
      "case_specific_check": "Keep `key_driver` anchored on commitment coverage of eligible usage, not generic cloud value or workload importance.",
      "evidence_needed": "No extra evidence needed if all JSON fields continue to map to commitment coverage, uncovered usage, term, payment option, flexibility, and capacity scope.",
      "failure_signal": "The case starts explaining cloud architecture value instead of what changes the bill."
    }
  ]
}
```

## Constitutional Review

Status: PASS

Decision core clarity:
PASS. The artifact directly states what is monetized, what changes the bill, and who pays more and why. The 10-second bill logic is visible before detailed cloud mechanics.

Component alignment:
PASS. `driver_logic` matches the bill-changing mechanism because commitment coverage and uncovered usage exposure directly change the effective bill. `matrix` is intentionally rejected as primary because product classification is secondary to bill movement.

Causal coherence:
PASS. The strategic chain is linear and pricing-relevant: customer uncertainty -> commitment behavior -> AWS predictability -> pricing discount -> transferred utilization risk.

Unsupported claims:
PASS WITH SCOPE. Official AWS artifacts support discounts, commitments, terms, payment options, Savings Plans coverage, On-Demand overage, and the RI capacity reservation distinction. The uncertainty-monetization claim is explicitly labeled as analytical interpretation, not official AWS intent.

Strategic tension visibility:
PASS. The artifact exposes the core tension: lower effective cost requires reduced flexibility and customer-side utilization risk.

Reasoning compression quality:
PASS. The canonical insight sentence, generalizable principle, student takeaway, and primary driver all compress the same mechanism without drifting into cloud feature explanation.

Constitutional conclusion:
The Layer 1 brief satisfies mechanism-first reasoning, component discipline, strategic logic discipline, and unsupported-logic controls. Remaining uncertainty is scoped rather than blocking.

## Implementation Gate

Status: READY_FOR_CODEX

Checks:
- Brain Lookup ready: PASS
- Nine Layer 1 artifacts present: PASS
- Case JSON schema-ready: PASS
- Decision core complete: PASS
- Canonical insight sentence present: PASS
- Generalizable pricing principle present: PASS
- 10-second bill logic clear: PASS
- Primary component valid: PASS
- Constitutional Review passed: PASS
- Evidence risks resolved or scoped: PASS
- Pricing artifact plan named: PASS

Required fixes before Codex:
None.

Unresolved mechanism uncertainty:
- Exact savings depend on RI type, Savings Plan type, region, operating system, term, payment option, instance attributes, and eligible services.
- Savings Plans do not provide EC2 capacity reservation; zonal EC2 Reserved Instances can.
- The uncertainty-monetization framing is analytical interpretation from official pricing mechanics, not official AWS causal language.

Recommended next action:
Run a review-only pass against `cognition/workbench_artifact.md` and `cases/pricing/CASE_LAYER1_SCHEMA.md`. If the artifact remains `READY_FOR_CODEX`, plan the public HTML implementation separately.
