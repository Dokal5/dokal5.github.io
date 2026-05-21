# Pricing Diagnostic Output Schema

This document defines a structured advisory output format for future diagnostic answers.

This is not a production JSON schema. This is a Brain advisory output structure only. It must not be copied into `CASE_SCHEMA.md`, `CASE_LAYER1_SCHEMA.md`, hidden JSON, public pages, `case-library.js`, or case navigation without explicit human approval and a separate production implementation plan.

The default `promotion_status` is `brain_only`.

Allowed `promotion_status` values:

- `brain_only`: Advisory Brain structure only. It has no production authority.
- `candidate_for_layer1`: Human reviewers may consider using the diagnostic output as upstream context for Layer 1.
- `approved_for_production`: Explicit human approval has separately authorized production-facing use.

## Example Advisory Output

```json
{
  "client_challenge": "Many prospects start a free trial, but few convert to paid users.",
  "diagnosed_problem": "Qualified prospects may not be reaching activation or may perceive the move to paid as too risky.",
  "primary_outcome_engine": {
    "code": "O1",
    "name": "Qualified adoption"
  },
  "secondary_outcome_engines": [
    {
      "code": "O3",
      "name": "Retention duration"
    }
  ],
  "observed_symptoms": [
    "High free trial starts",
    "Low trial-to-paid conversion",
    "Unknown activation rate"
  ],
  "recommended_causal_pathway": "Reduce adoption risk and billing uncertainty for qualified prospects while preserving a clear upgrade path.",
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
  "causal_hypothesis": "If qualified trial users reach first value with lower perceived risk and clearer plan boundaries, more will convert to paid without attracting uneconomic demand.",
  "expected_customer_behavior_change": "More qualified trial users activate, understand the paid path, and convert to an appropriate paid tier.",
  "expected_business_outcome": "Higher qualified adoption and trial-to-paid conversion with monitored support cost and cannibalization risk.",
  "required_data": {
    "minimum_required": [
      "Trial starts",
      "Activation definition",
      "Activation rate",
      "Trial-to-paid conversion",
      "Support cost per trial user",
      "Paid customer cannibalization indicator"
    ],
    "recommended": [
      "Trial usage by segment",
      "Drop-off reasons",
      "Time to first value",
      "Upgrade path behavior",
      "Customer qualification source"
    ],
    "advanced": [
      "Lifetime value by trial cohort",
      "Activation propensity",
      "Trial design experiment results"
    ]
  },
  "minimum_required": [
    "Trial starts",
    "Activation rate",
    "Trial-to-paid conversion",
    "Support cost per trial user"
  ],
  "missing_data": [
    "Activation definition",
    "Support cost by trial cohort",
    "Cannibalization monitoring"
  ],
  "data_quality_risks": [
    "Raw trial starts may include low-fit users",
    "Activation may not be consistently tracked",
    "Support cost may not be allocated to free users"
  ],
  "pricing_design_options": [
    "Redesign the free trial around activation milestones",
    "Introduce a starter tier with usage caps",
    "Use guided trial onboarding for qualified segments",
    "Offer an annual incentive only after activation"
  ],
  "recommendation_state": "Pilot only",
  "validation_plan": {
    "test": "Pilot an activation-based trial redesign for a qualified cohort.",
    "duration": "One or two buying cycles, depending on normal trial length.",
    "comparison": "Compare against current trial cohort or matched historical cohort."
  },
  "leading_metrics": [
    "Activation rate",
    "Time to first value",
    "Qualified trial engagement",
    "Support tickets per trial user"
  ],
  "lagging_metrics": [
    "Trial-to-paid conversion",
    "Paid retention",
    "ARPU after conversion",
    "Support cost per converted customer"
  ],
  "success_threshold": "Activation and trial-to-paid conversion improve without material support-cost increase or paid-plan cannibalization.",
  "failure_threshold": "Conversion lift is driven by low-fit users, support cost rises materially, or paid customers downgrade to the entry path.",
  "governance_checks": [
    "Data sufficiency",
    "Fairness risk",
    "Transparency risk",
    "Cost risk",
    "Customer backlash risk",
    "Legal or compliance risk",
    "Validation feasibility"
  ],
  "fairness_risk": "Low, if eligibility and plan limits are clear and not discriminatory.",
  "transparency_risk": "Medium, if trial limits or upgrade triggers are unclear.",
  "cost_risk": "Medium, because free or low-price users may create support burden.",
  "customer_backlash_risk": "Medium, if customers perceive the trial as a bait-and-switch.",
  "legal_or_compliance_risk": "Review required if claims, renewal terms, or cancellation terms change.",
  "case_library_links_optional": [],
  "promotion_status": "brain_only"
}
```
