# Pricing Diagnostic JSON Output Test Results

Task name: `brain-pricing-diagnostic-json-output-test-v1`

Execution type: Brain-only JSON-style advisory output test.

This artifact checks whether the advisory output structure can support five complete pricing diagnostic answers. Each output keeps uncertainty visible, uses conservative recommendation states, and sets `promotion_status` to `brain_only`.

## Summary Matrix

| Case | Primary outcome | Primary lever | Recommendation state | Promotion status |
| --- | --- | --- | --- | --- |
| SaaS trial conversion | O1 Qualified adoption | L1 Access enablement | Pilot only | `brain_only` |
| B2B service margin | O6 Cost to serve coverage | L8 Cost to serve allocation and ancillary pricing | Pilot only | `brain_only` |
| Marketplace liquidity | O8 Competitive and network position | L12 Multisided subsidy and cross-side pricing | Pilot only | `brain_only` |
| Discount leakage | O5 Price realization | L7 Realized price governance | Pilot only | `brain_only` |
| Usage monetization | O2 Revenue per customer | L3 Value metric and nonlinear tariff alignment | Pilot only | `brain_only` |

## 1. SaaS Trial Conversion Problem

```json
{
  "client_challenge": "We have many free trial users, but few convert to paid.",
  "diagnosed_problem": "The free trial may be generating trial starts without creating qualified activation, paid-path clarity, or confidence that conversion will be worth the commitment.",
  "primary_outcome_engine": {
    "code": "O1",
    "name": "Qualified adoption"
  },
  "secondary_outcome_engines": [
    {
      "code": "O3",
      "name": "Retention duration"
    },
    {
      "code": "O2",
      "name": "Revenue per customer"
    }
  ],
  "observed_symptoms": [
    "High free trial volume",
    "Low trial-to-paid conversion",
    "Unknown activation quality",
    "Unclear support burden from free users"
  ],
  "recommended_causal_pathway": "Reduce adoption risk for qualified prospects while measuring activation, support cost, and cannibalization before expanding any entry offer.",
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
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    }
  ],
  "causal_hypothesis": "If qualified trial users reach first value and understand the paid path, more will convert to paid without increasing low-fit usage or support load.",
  "expected_customer_behavior_change": "Qualified prospects activate during the trial, choose an appropriate paid path, and avoid surprise at conversion.",
  "expected_business_outcome": "Higher qualified trial-to-paid conversion with monitored early retention, support cost, and paid-plan cannibalization.",
  "required_confirming_evidence": [
    "Trial starts by source or segment",
    "Activation definition and activation rate",
    "Trial-to-paid conversion rate",
    "Evidence that trial users are qualified prospects",
    "Support cost per trial user",
    "Paid customer cannibalization monitoring"
  ],
  "required_data": {
    "minimum_required": [
      "Prospect volume",
      "Trial start rate",
      "Activation definition",
      "Activation rate",
      "Paid conversion rate",
      "Qualified conversion rate",
      "Early support cost"
    ],
    "recommended": [
      "Drop-off by funnel stage",
      "Trial usage by segment",
      "Time to first value",
      "Reasons for non-conversion",
      "Upgrade path behavior",
      "Paid-plan cannibalization indicator"
    ],
    "advanced": [
      "Lifetime value by trial cohort",
      "Activation propensity by source",
      "Trial design experiment results",
      "Willingness-to-pay research"
    ]
  },
  "minimum_required": [
    "Prospect volume",
    "Trial start rate",
    "Activation definition",
    "Activation rate",
    "Paid conversion rate",
    "Qualified conversion rate",
    "Early support cost"
  ],
  "missing_data": [
    "Stable activation definition",
    "Support cost by free cohort",
    "Trial-user qualification quality",
    "Paid-plan cannibalization monitoring",
    "Drop-off reasons"
  ],
  "data_quality_risks": [
    "Raw trial starts may include low-fit demand",
    "Activation may be inconsistently tracked",
    "Support cost may not be allocated to free users",
    "Paid conversion may not be segmented by qualification quality"
  ],
  "pricing_design_options": [
    "Pilot an activation-based trial for a qualified cohort",
    "Test a starter tier with clear usage caps and upgrade path",
    "Use guided onboarding for higher-fit trial segments",
    "Offer an annual incentive only after activation"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the symptom supports an access and adoption pathway, but local evidence is not yet strong enough to separate trial design, activation failure, pricing uncertainty, low fit, and product value gaps.",
  "validation_plan": {
    "test": "Run a bounded activation-based trial or starter-tier redesign for qualified prospects.",
    "duration": "One or two normal trial cycles.",
    "comparison": "Compare against the current trial path or a matched historical cohort."
  },
  "leading_metrics": [
    "Activation rate",
    "Time to first value",
    "Qualified trial engagement",
    "Support tickets per trial user",
    "Paid-path comprehension"
  ],
  "lagging_metrics": [
    "Trial-to-paid conversion",
    "Paid retention after conversion",
    "ARPU after conversion",
    "Support cost per converted customer",
    "Paid-plan cannibalization"
  ],
  "success_threshold": "Activation and trial-to-paid conversion improve for qualified users without material support-cost increase, paid-plan cannibalization, or early retention decline.",
  "failure_threshold": "Conversion lift comes mainly from low-fit users, support cost rises materially, paid customers downgrade to the entry path, or early paid churn increases.",
  "hard_stop_conditions": [
    "No activation tracking exists",
    "Free users create unsustainable support cost",
    "Paid customer cannibalization cannot be monitored",
    "The upgrade path from trial or starter tier is unclear"
  ],
  "governance_checks": [
    "Data sufficiency",
    "Causal mechanism clarity",
    "Metric availability",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Low to medium if eligibility, caps, and limits are clear and consistently applied.",
  "transparency_risk": "Medium if customers do not understand trial limits, upgrade triggers, or paid conversion terms.",
  "cost_risk": "Medium because free or low-price users may create support burden before qualification is known.",
  "customer_backlash_risk": "Medium if the trial feels like a bait-and-switch or the starter path is too constrained.",
  "legal_or_compliance_risk": "Review required if trial conversion, renewal, cancellation, or claims language changes.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```

## 2. B2B Service Margin Problem

```json
{
  "client_challenge": "Our revenue is growing, but margins are poor because small customers require too much support and customization.",
  "diagnosed_problem": "Revenue growth may be masking unpriced cost-to-serve differences, especially where smaller customers consume support or customization that current pricing does not recover.",
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
  "observed_symptoms": [
    "Revenue growth with weak margins",
    "Small customers requiring high support",
    "Customization load not reflected in price",
    "Unclear cost attribution by customer behavior"
  ],
  "recommended_causal_pathway": "Identify measurable and customer-controllable service cost drivers, then test whether packages, thresholds, or service tiers can improve contribution margin without unfairly penalizing customers.",
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
  "causal_hypothesis": "If customers that create higher support or customization cost face clearer service boundaries or cost-linked packages, service demand will shift toward economically viable levels while margin improves.",
  "expected_customer_behavior_change": "Customers choose support levels, customization scopes, or package tiers that better reflect the cost and value of the service they consume.",
  "expected_business_outcome": "Improved contribution margin and support capacity discipline without unnecessary loss of good-fit customers.",
  "required_confirming_evidence": [
    "Gross margin by customer segment",
    "Support cost by customer or segment",
    "Customization cost by customer or segment",
    "Service usage and order or account size",
    "Evidence that customers can influence the service load",
    "Retention and complaint patterns for affected segments"
  ],
  "required_data": {
    "minimum_required": [
      "Revenue by customer or order",
      "Gross margin",
      "Fulfillment cost",
      "Support cost",
      "Service usage",
      "Order size",
      "Customer controllability of cost driver"
    ],
    "recommended": [
      "Customization cost",
      "Cost by behavior",
      "Customer segment",
      "Service frequency",
      "Complaint history",
      "Retention by segment",
      "Affordability or fairness exposure"
    ],
    "advanced": [
      "Activity-based costing",
      "Marginal cost by behavior",
      "Service-level profitability",
      "Threshold simulation",
      "Fee response experiment"
    ]
  },
  "minimum_required": [
    "Revenue by customer or order",
    "Gross margin",
    "Fulfillment cost",
    "Support cost",
    "Service usage",
    "Order size",
    "Customer controllability of cost driver"
  ],
  "missing_data": [
    "Activity-based support cost",
    "Customization cost attribution",
    "Evidence that support drivers are customer-controllable",
    "Consistent segment definitions",
    "Fairness exposure for affected customers"
  ],
  "data_quality_risks": [
    "Average margin may hide high-cost behaviors",
    "Fixed and variable service costs may be blended",
    "Small-customer labels may mask different use cases",
    "Internal inefficiency may be misread as a pricing problem"
  ],
  "pricing_design_options": [
    "Pilot support tiers with clear service boundaries",
    "Test minimum order or account thresholds",
    "Introduce visible customization packages",
    "Create cost-linked service allowances for one segment"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the symptom fits cost-to-serve coverage, but pricing action should remain bounded until cost drivers are measurable, material, and controllable by customers.",
  "validation_plan": {
    "test": "Pilot revised service tiers, thresholds, or customization packages in one clearly defined segment.",
    "duration": "One or two sales and service cycles.",
    "comparison": "Compare contribution margin, service load, conversion, retention, and complaints against a similar untreated segment or historical baseline."
  },
  "leading_metrics": [
    "Support requests per customer",
    "Customization hours per customer",
    "Service-tier selection",
    "Exception requests",
    "Customer complaints about service boundaries"
  ],
  "lagging_metrics": [
    "Contribution margin",
    "Gross margin by segment",
    "Retention by affected segment",
    "Expansion revenue",
    "Support cost per retained customer"
  ],
  "success_threshold": "Contribution margin improves and support load declines or is better recovered without disproportionate churn, complaint escalation, or loss of good-fit accounts.",
  "failure_threshold": "Customers cannot control the cost driver, churn rises among good-fit accounts, service fees are perceived as hidden, or margin does not improve after cost allocation.",
  "hard_stop_conditions": [
    "Cost driver is not measurable",
    "Customers cannot control the behavior that creates cost",
    "Fees would hide mandatory service costs",
    "Customer access or fairness impact is unacceptable"
  ],
  "governance_checks": [
    "Data sufficiency",
    "Causal mechanism clarity",
    "Metric availability",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Medium if small customers are penalized without evidence that service load is measurable and controllable.",
  "transparency_risk": "Medium if service boundaries, included support, or customization charges are unclear.",
  "cost_risk": "Medium to high if cost attribution is weak or internal inefficiency is being shifted to customers.",
  "customer_backlash_risk": "Medium if customers perceive the change as punitive or as charging for previously expected support.",
  "legal_or_compliance_risk": "Review required if service commitments, contracted support levels, or mandatory fees change.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```

## 3. Marketplace Liquidity Problem

```json
{
  "client_challenge": "Our marketplace has demand, but supply is thin in key segments, so match rates are weak.",
  "diagnosed_problem": "The marketplace may have a constrained-side participation problem where supply density, participant quality, or segment coverage is too weak to create reliable matches.",
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
  "observed_symptoms": [
    "Demand exists but supply is thin",
    "Weak match rates in key segments",
    "Possible category or geography imbalance",
    "Unknown constrained-side participation quality"
  ],
  "recommended_causal_pathway": "Test whether a bounded supply-side incentive, take-rate adjustment, or segment rule can improve liquidity where cross-side value and monetization path are credible.",
  "primary_causal_lever": {
    "code": "L12",
    "name": "Multisided subsidy and cross-side pricing"
  },
  "secondary_causal_levers": [
    {
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    },
    {
      "code": "L11",
      "name": "Dynamic demand and capacity pricing"
    }
  ],
  "causal_hypothesis": "If constrained-side participants receive a targeted economic reason to join or stay in weak segments, match rates will improve enough to increase cross-side retention and contribution after incentive cost.",
  "expected_customer_behavior_change": "More qualified suppliers participate in targeted segments, improving buyer match success and repeat platform use.",
  "expected_business_outcome": "Higher liquidity, stronger network position, and better cross-side retention with incentive cost and participant quality under control.",
  "required_confirming_evidence": [
    "Distinct marketplace sides",
    "Constrained side by segment or geography",
    "Liquidity or match rate",
    "Cross-side value evidence",
    "Monetization path",
    "Subsidy or incentive cost",
    "Participant quality and retention"
  ],
  "required_data": {
    "minimum_required": [
      "Participation by side or segment",
      "Liquidity or match rate",
      "Utilization or fill rate",
      "Take rate or monetization metric",
      "Competitive win/loss"
    ],
    "recommended": [
      "Supply and demand imbalance",
      "Cross-side conversion",
      "Geographic density",
      "Category density",
      "Multihoming behavior",
      "Incentive cost",
      "Contribution by side"
    ],
    "advanced": [
      "Network effect strength",
      "Subsidy payback analysis",
      "Marketplace simulation",
      "Cross-side elasticity",
      "Dynamic state model"
    ]
  },
  "minimum_required": [
    "Participation by side or segment",
    "Liquidity or match rate",
    "Utilization or fill rate",
    "Take rate or monetization metric",
    "Competitive win/loss"
  ],
  "missing_data": [
    "Network effect strength",
    "Participant quality measures",
    "Multihoming behavior",
    "Subsidy payback",
    "Geographic or category density",
    "Capacity-state data"
  ],
  "data_quality_risks": [
    "Marketplace activity may be confused with real liquidity",
    "Network effects may be assumed but not measured",
    "Subsidized participants may be low quality",
    "Demand-side retention may not be linked to supply-side changes"
  ],
  "pricing_design_options": [
    "Pilot a constrained-side incentive in one segment or geography",
    "Test a temporary take-rate adjustment for targeted supply",
    "Use segment-specific participation rules where eligibility is clear",
    "Test simple transparent peak or capacity rules only if demand-state evidence exists"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the imbalance is clear enough to test, but broad recommendation requires evidence of cross-side network effects, participant quality, incentive payback, and monetization path.",
  "validation_plan": {
    "test": "Run a bounded supply-side incentive or take-rate pilot in one weak segment, category, or geography.",
    "duration": "One or two marketplace liquidity cycles.",
    "comparison": "Compare targeted segments against untreated comparable segments or matched historical performance."
  },
  "leading_metrics": [
    "Supply participation",
    "Qualified supply activation",
    "Supply retention",
    "Match rate",
    "Incentive cost per qualified participant"
  ],
  "lagging_metrics": [
    "Cross-side retention",
    "Contribution margin after incentive cost",
    "Repeat demand",
    "Take-rate yield",
    "Segment liquidity durability"
  ],
  "success_threshold": "Match rate and cross-side retention improve in the targeted segment while participant quality and contribution after incentive cost remain acceptable.",
  "failure_threshold": "Incentives attract low-quality or transient supply, match rates do not improve, contribution deteriorates, or liquidity disappears after incentives end.",
  "hard_stop_conditions": [
    "Cross-side network effect is weak",
    "Multihoming dominates participation behavior",
    "No monetization path exists",
    "Subsidy attracts low-quality participation",
    "Fairness guardrails are absent"
  ],
  "governance_checks": [
    "Data sufficiency",
    "Causal mechanism clarity",
    "Metric availability",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Medium if segment eligibility or incentive access is arbitrary or discriminatory.",
  "transparency_risk": "Medium if participants cannot understand why incentives, take rates, or eligibility differ.",
  "cost_risk": "High if subsidy payback is unknown or incentives attract supply that does not improve liquidity.",
  "customer_backlash_risk": "Medium if one side sees the design as unfair or if incentive withdrawal disrupts participation.",
  "legal_or_compliance_risk": "Review required if marketplace rules, participant eligibility, or side-specific economic terms create regulated exposure.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```

## 4. Discount Leakage Problem

```json
{
  "client_challenge": "Our sales team often discounts heavily, and invoice prices are far below list prices.",
  "diagnosed_problem": "Revenue may be leaking between list, quote, contract, and invoice prices because discount governance, exception discipline, or seller incentives are not controlling realized price.",
  "primary_outcome_engine": {
    "code": "O5",
    "name": "Price realization"
  },
  "secondary_outcome_engines": [
    {
      "code": "O2",
      "name": "Revenue per customer"
    },
    {
      "code": "O4",
      "name": "Customer portfolio mix"
    }
  ],
  "observed_symptoms": [
    "Frequent heavy discounting",
    "Invoice prices far below list prices",
    "Possible approval exceptions",
    "Unknown distinction between strategic discounts and leakage"
  ],
  "recommended_causal_pathway": "Measure net price leakage and discount rationale, then pilot targeted guardrails or approval rules where discounting is controllable without blocking strategically necessary deals.",
  "primary_causal_lever": {
    "code": "L7",
    "name": "Realized price governance"
  },
  "secondary_causal_levers": [
    {
      "code": "L13",
      "name": "Channel and sales incentive alignment"
    }
  ],
  "causal_hypothesis": "If discount authority, exceptions, and seller incentives are aligned with realized price quality, net realized price will improve without unacceptable win-rate, cycle-time, or retention damage.",
  "expected_customer_behavior_change": "Customers encounter more consistent discount boundaries, and sellers reserve exceptions for justified deals rather than defaulting to heavy concessions.",
  "expected_business_outcome": "Higher net realized price and cleaner price waterfalls while preserving strategically important wins and renewals.",
  "required_confirming_evidence": [
    "List, quote, contract, and invoice price variance",
    "Discount percentage by deal",
    "Exception frequency and approval path",
    "Renewal uplift discipline",
    "Seller or channel incentive structure",
    "Discount reasons and competitive context"
  ],
  "required_data": {
    "minimum_required": [
      "List price",
      "Quoted price",
      "Invoice price",
      "Discount percentage",
      "Approval exceptions",
      "Renewal uplift",
      "Net realized price if available"
    ],
    "recommended": [
      "Contracted price",
      "Price waterfall",
      "Discount reason",
      "Seller",
      "Channel",
      "Region",
      "Customer segment",
      "Win/loss",
      "Renewal concession history"
    ],
    "advanced": [
      "Deal-level margin",
      "Competitive context",
      "Approval workflow logs",
      "Seller compensation data",
      "Channel economics",
      "Price realization by cohort"
    ]
  },
  "minimum_required": [
    "List price",
    "Quoted price",
    "Invoice price",
    "Discount percentage",
    "Approval exceptions",
    "Renewal uplift",
    "Net realized price if available"
  ],
  "missing_data": [
    "Discount rationale",
    "Competitive context",
    "Contracted price reconciliation",
    "Approval logs",
    "Seller compensation data",
    "Deal-level margin"
  ],
  "data_quality_risks": [
    "List price may not be a meaningful benchmark",
    "Quote and invoice systems may not reconcile",
    "Discount reasons may be missing or vague",
    "Strategic discounts may be incorrectly treated as leakage"
  ],
  "pricing_design_options": [
    "Pilot discount approval thresholds in one segment or region",
    "Test price floors with documented exception rules",
    "Introduce a renewal uplift playbook",
    "Measure seller incentives against net realized price quality"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because discount leakage is plausible, but broad governance should wait until leakage is measurable, controllable, and separated from justified competitive or strategic concessions.",
  "validation_plan": {
    "test": "Run discount guardrails, approval thresholds, or renewal playbook changes in one segment, channel, or region.",
    "duration": "One or two sales cycles plus the relevant renewal window if renewal uplift is tested.",
    "comparison": "Compare against similar teams, regions, or historical cohorts with no guardrail change."
  },
  "leading_metrics": [
    "Discount percentage",
    "Exception volume",
    "Approval cycle time",
    "Seller override attempts",
    "Quote-to-invoice variance"
  ],
  "lagging_metrics": [
    "Net realized price",
    "Win rate",
    "Sales cycle length",
    "Deal-level margin",
    "Renewal uplift",
    "Churn or downgrade rate"
  ],
  "success_threshold": "Net realized price and margin improve without material win-rate loss, unacceptable cycle-time increase, or retention damage.",
  "failure_threshold": "Guardrails block strategically necessary deals, sellers bypass controls, win rate drops materially, or discount rationale remains unavailable.",
  "hard_stop_conditions": [
    "Net price data is unavailable",
    "Discount reasons cannot be separated",
    "Governance would block strategically necessary deals",
    "Sellers can bypass controls",
    "Seller incentives cannot be changed or measured"
  ],
  "governance_checks": [
    "Data sufficiency",
    "Causal mechanism clarity",
    "Metric availability",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Low to medium if similar customers receive inconsistent discounts without documented rationale.",
  "transparency_risk": "Low to medium if customers or sellers cannot understand exception rules.",
  "cost_risk": "Medium if tighter governance slows deals or reduces volume more than realized price improves.",
  "customer_backlash_risk": "Medium if customers accustomed to large concessions perceive the new discipline as arbitrary.",
  "legal_or_compliance_risk": "Review required if discount rules vary across channels, regions, or customer groups in sensitive ways.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```

## 5. Usage Monetization Problem

```json
{
  "client_challenge": "Our high-usage customers pay almost the same as low-usage customers, and ARPU does not grow with customer value.",
  "diagnosed_problem": "Current pricing may not align revenue with usage, value, or cost differences, but usage should not be treated as value until local evidence supports that link.",
  "primary_outcome_engine": {
    "code": "O2",
    "name": "Revenue per customer"
  },
  "secondary_outcome_engines": [
    {
      "code": "O6",
      "name": "Cost to serve coverage"
    },
    {
      "code": "O4",
      "name": "Customer portfolio mix"
    }
  ],
  "observed_symptoms": [
    "High-usage customers pay nearly the same as low-usage customers",
    "ARPU does not grow with customer value",
    "Current metric may be too flat",
    "Unknown customer understanding of a usage or value metric"
  ],
  "recommended_causal_pathway": "Validate whether usage tracks customer value or cost, then test a narrow value-metric, tier, or bundle change with bill-shock and gaming guardrails.",
  "primary_causal_lever": {
    "code": "L3",
    "name": "Value metric and nonlinear tariff alignment"
  },
  "secondary_causal_levers": [
    {
      "code": "L4",
      "name": "Segmentation, versioning, and fences"
    },
    {
      "code": "L5",
      "name": "Bundling and modular architecture"
    }
  ],
  "causal_hypothesis": "If pricing tracks a customer-understandable metric that reflects value or cost, high-value accounts will contribute more revenue while lower-value accounts retain a viable entry path.",
  "expected_customer_behavior_change": "High-value or high-usage customers select higher tiers, usage bands, or add-ons when those options map clearly to value received.",
  "expected_business_outcome": "Higher ARPU and expansion revenue with manageable churn, bill shock, complaint, and gaming risk.",
  "required_confirming_evidence": [
    "Usage distribution by customer",
    "Revenue by usage cohort",
    "Customer value proxy",
    "Cost by usage cohort if available",
    "Upgrade or add-on behavior",
    "Customer comprehension risk",
    "Metric gaming risk"
  ],
  "required_data": {
    "minimum_required": [
      "Revenue per customer",
      "Usage by customer",
      "Plan or package",
      "Customer value proxy",
      "Upgrade history",
      "Expansion or add-on revenue"
    ],
    "recommended": [
      "Revenue by usage cohort",
      "Willingness-to-pay indicators",
      "Feature use",
      "Account size",
      "Segment",
      "Discount history",
      "Attach rate",
      "Bill simulation"
    ],
    "advanced": [
      "Customer-level value modeling",
      "Price elasticity estimates",
      "Usage-to-value analysis",
      "Bundle choice research",
      "Expansion propensity",
      "Metric gaming model"
    ]
  },
  "minimum_required": [
    "Revenue per customer",
    "Usage by customer",
    "Plan or package",
    "Customer value proxy",
    "Upgrade history",
    "Expansion or add-on revenue"
  ],
  "missing_data": [
    "Customer-perceived value driver",
    "Willingness-to-pay by metric",
    "Bill shock simulation",
    "Metric gaming risk",
    "Cohort profitability",
    "Customer comprehension evidence"
  ],
  "data_quality_risks": [
    "Usage may be treated as value without proof",
    "Averages may hide heterogeneous cohorts",
    "Discounts may be mixed with list price",
    "Add-on revenue may not be linked to customer-level usage",
    "Candidate metric may be noisy or easy to game"
  ],
  "pricing_design_options": [
    "Simulate bills under a candidate value metric before any customer-facing test",
    "Pilot a narrow usage-band or tier migration",
    "Test higher-tier feature fences for high-value use cases",
    "Pilot a premium bundle or modular add-on for accounts with clear value signals"
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because the symptom supports value-metric investigation, but broad recommendation requires proof that the candidate metric tracks customer value, cost, willingness to pay, and customer understanding.",
  "validation_plan": {
    "test": "Simulate customer bills under the candidate metric, then run an opt-in or narrow-cohort tier, metric, or bundle pilot.",
    "duration": "One or two billing cycles after the simulation review.",
    "comparison": "Compare ARPU, complaints, churn, and usage changes against current-plan customers or matched historical cohorts."
  },
  "leading_metrics": [
    "Bill simulation variance",
    "Customer comprehension of the metric",
    "Upgrade intent",
    "Add-on attach rate",
    "Complaint rate",
    "Usage behavior changes"
  ],
  "lagging_metrics": [
    "ARPU",
    "Expansion revenue",
    "Net revenue retention",
    "Churn or downgrade rate",
    "Gross margin by usage cohort",
    "Support tickets related to billing"
  ],
  "success_threshold": "ARPU or expansion improves for high-value cohorts without material churn, bill-shock complaints, gaming, or harm to viable lower-value accounts.",
  "failure_threshold": "Usage does not track value, customers cannot understand the metric, bill shock rises materially, gaming appears, or high-value accounts downgrade or churn.",
  "hard_stop_conditions": [
    "Candidate metric is noisy",
    "Candidate metric is easy to game",
    "Candidate metric is not understandable to customers",
    "Bill shock cannot be monitored",
    "Usage does not reflect customer value"
  ],
  "governance_checks": [
    "Data sufficiency",
    "Causal mechanism clarity",
    "Metric availability",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Medium if the metric charges more without a clear value or cost rationale.",
  "transparency_risk": "High if customers cannot predict bills or understand the usage metric.",
  "cost_risk": "Medium if heavy usage is not actually costly or valuable enough to justify higher charges.",
  "customer_backlash_risk": "High if existing customers experience bill shock or forced migration.",
  "legal_or_compliance_risk": "Review required if metering, billing disclosures, renewal terms, or usage measurement terms change.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```
