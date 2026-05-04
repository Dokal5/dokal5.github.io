# Case Insight Brief

Company:
HP Instant Ink

Case ID:
hp-instant-ink-page-count-subscription-pricing

Pricing model:
Printer consumables subscription based on monthly page allowance, rollover pages, and additional page blocks.

Primary insight:
HP Instant Ink turns printer ink and toner from a cartridge-purchase model into a page-count subscription where the bill changes when printed pages exceed allowance and rollover buffer.

What is monetized:
HP monetizes printer consumable access, automatic ink or toner replenishment, and the right to print a monthly number of pages through enrolled HP printers.

How users are segmented:
Users are segmented by monthly page allowance, ink versus toner subscription, printing frequency, rollover balance, and overage exposure.

What drives price differences:
The main driver is printed pages per billing period, mediated by plan allowance, rollover balance, additional page blocks, and ink or toner plan type.

Why this pricing works:
The hypothesized logic is that customers value predictable consumable availability and lower mental load, while HP captures recurring revenue by pricing the output unit customers actually consume: printed pages.

Where friction appears:
Customers may think they are buying ink, but the subscription charges by pages printed. A low-ink page and a high-ink page both count as pages, which can create perception friction.

Where risk appears:
Printing spikes can push customers through allowance, rollover, and additional-page states. The model can feel unfair if customers anchor on ink usage instead of page count.

Structural weakness:
The model simplifies consumables replenishment, but it creates a measurement mismatch: HP prices the page, while customers may perceive value through ink coverage, cartridge ownership, or occasional printing needs.

Student 10-second takeaway:
The bill changes when monthly printed pages exceed plan allowance and rollover buffer, not when ink physically runs out.

Pricing architecture note:
Public pricing structure reviewed May 4, 2026. The official HP source artifacts reviewed are US English pages. Exact prices, page allowances, and extra-page block sizes may vary by country and plan type.

Evidence note:
Primary evidence comes from HP Instant Ink plan pages, HP billing support, and HP Instant Ink terms. Exact prices, page allowances, and extra-page block sizes may vary by country and plan type, so the public page cites the local official pricing artifact used for the screenshot.

Scope:
Monthly page allowance, rollover pages, additional page blocks, ink versus toner plan distinction, page-count value metric, and consumables subscription logic.

Out of scope:
Full HP printer hardware strategy, printer lock-in litigation, third-party cartridge policy, regional legal disputes, enterprise managed print services, full HP financial performance, and technical print-quality claims.

# Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "case_type": "hardware",
  "evidence_level": "observed",
  "pricing_model": "Printer consumables subscription based on monthly page allowance, rollover pages, and additional page blocks",
  "value_metric": "Printed pages per billing period",
  "segmentation_type": "Monthly page allowance, ink versus toner plan type, rollover balance, and overage exposure",
  "tiers": [
    "Low monthly page allowance",
    "Moderate monthly page allowance",
    "High monthly page allowance",
    "Ink plan",
    "Toner plan",
    "Additional page blocks"
  ],
  "segments": [
    "Occasional home printers",
    "Regular household printers",
    "Higher-volume home office printers",
    "Ink subscription users",
    "Toner subscription users",
    "Users with printing spikes",
    "Users with rollover buffer"
  ],
  "pricing_logic": "HP Instant Ink charges customers through a page-count subscription. A monthly plan covers a fixed page allowance, unused eligible pages can roll over subject to caps, and additional page blocks apply when the customer prints beyond plan allowance and rollover balance.",
  "key_driver": "Printed pages per billing period",
  "drivers": [
    {
      "driver": "Monthly page allowance",
      "type": "commitment",
      "pricing_role": "base_charge",
      "direction": "segment_users",
      "effect": "The selected plan sets the included number of pages the customer can print during the billing period.",
      "student_label": "Plan pages"
    },
    {
      "driver": "Printed pages per billing period",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "More printed pages consume the monthly allowance and determine whether the customer crosses into rollover or additional-page states.",
      "student_label": "Printed pages"
    },
    {
      "driver": "Rollover page balance",
      "type": "usage",
      "pricing_role": "cap",
      "direction": "reduce_friction",
      "effect": "Unused eligible pages can create a buffer for later printing spikes, but rollover is capped by plan type.",
      "student_label": "Rollover buffer"
    },
    {
      "driver": "Additional page blocks",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "When printed pages exceed plan allowance and rollover balance, the customer enters additional-page billing.",
      "student_label": "Extra pages"
    },
    {
      "driver": "Ink or toner plan type",
      "type": "asset",
      "pricing_role": "threshold",
      "direction": "segment_users",
      "effect": "Ink and toner subscriptions follow related but different plan and rollover logic, including different rollover caps.",
      "student_label": "Ink vs toner"
    },
    {
      "driver": "Printer enrollment and connectivity",
      "type": "asset",
      "pricing_role": "access",
      "direction": "enforce_upgrade",
      "effect": "The subscription depends on an eligible enrolled HP printer connected to the Instant Ink service.",
      "student_label": "Enrolled printer"
    }
  ],
  "formula": {
    "expression": "monthly_customer_bill = plan_fee + additional_page_block_charges + applicable_adjustments",
    "variables": [
      {
        "symbol": "plan_fee",
        "label": "Monthly subscription fee for selected page allowance",
        "maps_to_driver": "Monthly page allowance"
      },
      {
        "symbol": "additional_page_block_charges",
        "label": "Charges when printed pages exceed plan pages plus rollover pages",
        "maps_to_driver": "Printed pages per billing period and Additional page blocks"
      },
      {
        "symbol": "applicable_adjustments",
        "label": "Promotions, trials, taxes, or regional billing adjustments where applicable",
        "maps_to_driver": "Monthly page allowance"
      }
    ],
    "output_label": "Monthly Instant Ink bill",
    "explanation": "The customer's monthly bill is anchored by the selected page allowance, then changes when actual printed pages exceed the included allowance and any rollover buffer."
  },
  "upgrade_triggers": [
    {
      "trigger": "Plan allowance is exhausted",
      "from": "Included monthly page allowance",
      "to": "Rollover page consumption",
      "why_it_happens": "The customer prints more pages than the selected plan includes for the billing period.",
      "pricing_effect": "The customer begins using accumulated rollover pages instead of immediately paying overage."
    },
    {
      "trigger": "Rollover balance is exhausted",
      "from": "Rollover buffer",
      "to": "Additional page block billing",
      "why_it_happens": "The customer prints beyond both plan allowance and available rollover balance.",
      "pricing_effect": "Additional page blocks are charged."
    },
    {
      "trigger": "Repeated printing spikes exceed plan fit",
      "from": "Current monthly page plan",
      "to": "Higher monthly page allowance plan",
      "why_it_happens": "The customer's printing pattern repeatedly exceeds the current plan and creates additional-page exposure.",
      "pricing_effect": "Upgrade pressure appears because a higher allowance may reduce surprise overage."
    },
    {
      "trigger": "Unused pages exceed rollover cap",
      "from": "Eligible unused monthly pages",
      "to": "Forfeited excess rollover potential",
      "why_it_happens": "Unused pages exceed the rollover balance limit set by plan type.",
      "pricing_effect": "Not all unused pages become future print capacity."
    },
    {
      "trigger": "Customer switches between ink and toner plan logic",
      "from": "Ink page subscription logic",
      "to": "Toner page subscription logic",
      "why_it_happens": "The enrolled printer and consumable type place the customer into a different subscription category.",
      "pricing_effect": "Rollover caps and plan economics may differ."
    }
  ],
  "visualization": {
    "primary_component": "trigger_path",
    "supporting_components": [
      "page allowance depletion path",
      "bill examples comparison table",
      "boundary crossing transition rows",
      "decision priority table",
      "reasoning error stress-test table"
    ],
    "interactive_controls": [
      "monthly plan allowance selector",
      "printed pages input",
      "rollover balance input",
      "ink versus toner toggle",
      "extra page block preview"
    ],
    "default_view": "Plan allowance to rollover to additional page block trigger path",
    "student_prompt": "At what point does printing move from included pages to rollover use and then to extra-page billing?"
  },
  "primary_component": "trigger_path",
  "decision_core": {
    "what_is_monetized": "Printer consumable access and automatic ink or toner replenishment through a monthly page-count subscription.",
    "what_changes_the_bill": "The bill changes when printed pages exceed the selected monthly allowance, consume rollover balance, or trigger additional page blocks.",
    "who_pays_more_and_why": "Customers who print more pages than their plan and rollover buffer cover pay more because they consume more page capacity during the billing period."
  },
  "student_10_second_takeaway": "HP Instant Ink prices printing by page-count states: included pages first, rollover buffer second, additional page blocks after that.",
  "friction_points": [
    "Customers may think they are paying for ink volume, but the value metric is printed pages.",
    "A page with little ink and a page with heavy ink coverage both count as printed pages.",
    "Rollover pages reduce surprise but are capped.",
    "Printing spikes can turn a predictable subscription into additional-page charges.",
    "Ink and toner plans may have different rollover limits."
  ],
  "risks": [
    "Customers may perceive the model as unfair if they anchor on ink usage rather than page count.",
    "Overage charges can create bill surprise after occasional printing spikes.",
    "Rollover caps can feel like lost value when low-print months accumulate unused allowance.",
    "Subscription dependence can create lock-in perception if customers expect cartridge ownership rather than service access."
  ],
  "structural_weakness": "The model creates predictable recurring revenue and simplifies replenishment, but it depends on customers accepting page count as the fair value metric for consumables.",
  "strategic_insight": "HP shifts consumables economics from cartridge replacement to recurring page-count monetization, using allowance, rollover, and overage states to balance predictability with variable printing demand.",
  "strategic_logic": {
    "customer_condition": "Customer wants predictable printing",
    "behavior_change": "Customer enrolls printer",
    "pricing_driver": "Printed pages per billing period",
    "billing_change": "Plan pages, rollover, then overage",
    "financial_outcome": "HP converts consumables into recurring revenue",
    "dominant_causal_chain": [
      "Customer wants predictable ink or toner availability",
      "Customer enrolls eligible HP printer",
      "Monthly printed pages consume plan allowance",
      "Printing beyond allowance uses rollover or extra-page blocks",
      "HP converts variable consumables demand into recurring subscription revenue"
    ],
    "main_assumption": "Customers accept printed pages as the fair value metric because the subscription reduces the inconvenience and uncertainty of buying replacement ink or toner.",
    "main_failure_risk": "If customers perceive page counting as disconnected from actual ink use, the subscription can feel like a control mechanism rather than a convenience service.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Page-state billing preview",
      "pricing_move": "Show customers a clear preview of plan pages, rollover pages, and additional-page exposure before and during each billing cycle.",
      "expected_effect": "Reduces bill surprise and helps customers understand when they are approaching an additional-page charge.",
      "trade_off": "May make overage mechanics more salient and encourage customers to print less or downgrade.",
      "leading_indicator": "Lower billing support contact rate and higher user comprehension of page allowance status."
    },
    {
      "option": "Printing spike recommendation",
      "pricing_move": "Recommend a temporary or permanent plan change when customers repeatedly exceed their allowance and rollover buffer.",
      "expected_effect": "Moves customers toward a better-fit page allowance and reduces surprise additional-page blocks.",
      "trade_off": "Could reduce short-term overage revenue if customers move to a more predictable higher plan.",
      "leading_indicator": "Higher plan-fit adjustment rate and lower repeated overage incidence."
    },
    {
      "option": "Ink-use perception explainer",
      "pricing_move": "Explain clearly that plans are based on printed pages rather than the amount of ink or toner used on each page.",
      "expected_effect": "Improves perceived fairness by aligning customer expectations with the actual value metric.",
      "trade_off": "May increase resistance among customers who print many low-coverage pages.",
      "leading_indicator": "Lower confusion around page counting and lower cancellation reason share related to fairness."
    }
  ],
  "bill_examples": [
    {
      "scenario": "Light monthly printing within allowance",
      "customer_situation": "A customer prints fewer pages than the selected plan allowance.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period",
      "variable_charge": "No additional page block is triggered.",
      "discount_or_adjustment": "Unused eligible pages may roll over subject to plan limits.",
      "final_bill": "Monthly bill = plan fee, with unused eligible pages added to rollover balance up to the applicable cap.",
      "pricing_lesson": "The subscription remains predictable when printing stays within allowance."
    },
    {
      "scenario": "Printing spike covered by rollover",
      "customer_situation": "A customer prints more than the monthly plan allowance but still has rollover pages available.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period and rollover balance",
      "variable_charge": "Rollover pages are consumed before additional-page billing applies.",
      "discount_or_adjustment": "Rollover balance reduces immediate overage exposure.",
      "final_bill": "Monthly bill = plan fee, while extra printed pages reduce rollover balance instead of triggering additional page blocks.",
      "pricing_lesson": "Rollover functions as a buffer that smooths occasional spikes."
    },
    {
      "scenario": "Printing beyond plan and rollover",
      "customer_situation": "A customer prints more than both monthly plan allowance and available rollover pages.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period",
      "variable_charge": "Additional page blocks are charged.",
      "discount_or_adjustment": "none",
      "final_bill": "Monthly bill = plan fee + additional page block charges.",
      "pricing_lesson": "The trigger path turns a predictable subscription into variable billing once allowance and rollover are exhausted."
    },
    {
      "scenario": "Low-print months hit rollover cap",
      "customer_situation": "A customer repeatedly prints fewer pages than the plan allowance.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Rollover page balance",
      "variable_charge": "No additional page charge applies, but not all unused pages may carry forward once the cap is reached.",
      "discount_or_adjustment": "Excess unused pages above the rollover cap are not banked.",
      "final_bill": "Monthly bill = plan fee, with rollover balance capped by plan and service type.",
      "pricing_lesson": "Rollover adds flexibility, but it is not unlimited stored value."
    }
  ],
  "boundary_crossing_map": [
    {
      "from_state": "Within monthly page allowance",
      "boundary_condition": "Printed pages exceed plan allowance.",
      "to_state": "Rollover page consumption",
      "driver": "Printed pages per billing period",
      "billing_effect": "The customer starts using rollover pages instead of immediately paying additional-page charges.",
      "customer_perception_risk": "The customer may not notice the buffer is being depleted."
    },
    {
      "from_state": "Rollover buffer available",
      "boundary_condition": "Printed pages exceed plan allowance plus rollover balance.",
      "to_state": "Additional page block billing",
      "driver": "Printed pages per billing period",
      "billing_effect": "Additional page blocks are charged.",
      "customer_perception_risk": "The customer may experience bill surprise after a temporary printing spike."
    },
    {
      "from_state": "Current plan appears sufficient",
      "boundary_condition": "Customer repeatedly triggers additional page blocks.",
      "to_state": "Upgrade pressure to a higher allowance plan",
      "driver": "Monthly page allowance",
      "billing_effect": "A higher plan may become more predictable than repeated overage.",
      "customer_perception_risk": "The customer may feel pushed upward even if high usage is episodic."
    },
    {
      "from_state": "Unused pages can roll over",
      "boundary_condition": "Rollover balance reaches the applicable cap.",
      "to_state": "Unused pages no longer create additional future buffer",
      "driver": "Rollover page balance",
      "billing_effect": "Excess unused pages are not banked beyond the cap.",
      "customer_perception_risk": "The customer may feel they are losing paid-for page capacity."
    },
    {
      "from_state": "Ink plan rollover logic",
      "boundary_condition": "Customer uses toner subscription plan logic instead.",
      "to_state": "Toner rollover logic",
      "driver": "Ink or toner plan type",
      "billing_effect": "Rollover caps and plan economics may differ.",
      "customer_perception_risk": "Customers may assume ink and toner plans behave identically."
    }
  ],
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Page-state billing preview",
      "why_first": "It addresses the main source of bill surprise: customers may not know whether they are still inside allowance, using rollover, or entering additional-page billing.",
      "test_type": "Billing comprehension and usage-state visibility test",
      "risk_level": "low",
      "upside_potential": "Higher trust and fewer billing support contacts.",
      "implementation_complexity": "low",
      "success_metric": "Lower billing confusion contact rate and higher page-state comprehension."
    },
    {
      "priority_rank": 2,
      "option": "Printing spike recommendation",
      "why_first": "It improves plan fit after usage patterns reveal repeated allowance mismatch.",
      "test_type": "Plan-fit recommendation experiment",
      "risk_level": "medium",
      "upside_potential": "Better plan fit and lower repeated overage frustration.",
      "implementation_complexity": "medium",
      "success_metric": "Higher accepted plan-fit recommendations and lower repeated overage incidence."
    },
    {
      "priority_rank": 3,
      "option": "Ink-use perception explainer",
      "why_first": "It addresses fairness perception, but it may also make page-count pricing more controversial for low-coverage users.",
      "test_type": "Value metric explanation test",
      "risk_level": "medium",
      "upside_potential": "Better understanding of page-count pricing and fewer fairness-related cancellations.",
      "implementation_complexity": "low",
      "success_metric": "Lower cancellation reason share related to page-count fairness."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "Assuming that page-count pricing automatically improves customer satisfaction because it simplifies ink replacement.",
      "case_specific_check": "Separate observed billing structure from hypothesized convenience value.",
      "evidence_needed": "Customer retention, support, cancellation reason, and satisfaction data before and after billing explanation improvements.",
      "failure_signal": "Customers understand the model but still perceive page counting as unfair."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Treating Instant Ink as an ink-volume subscription when the bill is actually driven by printed pages.",
      "case_specific_check": "Keep the analysis centered on page count, not cartridge volume or ink coverage.",
      "evidence_needed": "Official plan wording and billing support showing plan pages, rollover pages, and additional page charges.",
      "failure_signal": "Students explain the case as ink consumption pricing rather than page-count pricing."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "Ignoring the boundary between plan allowance, rollover balance, and additional page blocks.",
      "case_specific_check": "Show the full trigger path from included pages to rollover to extra-page billing.",
      "evidence_needed": "Official billing support explaining what happens when customers exceed plan and rollover pages.",
      "failure_signal": "The case becomes a simple subscription ladder instead of a threshold-trigger case."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Suggesting clearer billing previews without recognizing that transparency may reduce overage revenue or encourage downgrades.",
      "case_specific_check": "Every recommended pricing move must include a revenue or behavior trade off.",
      "evidence_needed": "A/B test data comparing billing comprehension, overage incidence, plan changes, and churn.",
      "failure_signal": "Transparency improves trust but lowers average revenue per user without retention benefit."
    }
  ]
}
```

# Render Instruction

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "render_goal": "Help students see that HP Instant Ink prices printing capacity by page-count states, not ink volume.",
  "primary_component": "trigger_path",
  "secondary_components": [
    "page allowance depletion trigger path",
    "bill examples comparison table",
    "boundary crossing transition rows",
    "decision priority table",
    "reasoning error stress-test table"
  ],
  "first_screen_priority": [
    "HP monetizes printing capacity through monthly page allowance",
    "The bill changes when printed pages exceed plan allowance and rollover balance",
    "The core mechanism is allowance to rollover to additional-page billing"
  ],
  "interactive_controls": [
    "monthly plan allowance selector",
    "printed pages input",
    "rollover balance input",
    "ink versus toner toggle",
    "extra page block preview"
  ],
  "avoid": [
    "Do not turn this into a generic HP printer hardware case.",
    "Do not frame this as cartridge-volume pricing.",
    "Do not make plan ladder the primary mechanism.",
    "Do not focus on printer lock-in controversy unless it directly affects pricing logic.",
    "Do not calculate exact bills unless the official local pricing artifact provides the exact plan and extra-page block values."
  ],
  "failure_modes": [
    "The page becomes a plan comparison table instead of a trigger-path pricing case.",
    "The key driver drifts from printed pages to ink consumption.",
    "Rollover is described as unlimited stored value.",
    "Additional page blocks are treated as an add-on instead of a threshold state.",
    "The case ignores customer perception risk around page-count fairness."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "upgrade_triggers",
    "primary_component",
    "Official HP Instant Ink plans page",
    "Official HP Instant Ink billing support page",
    "Official HP Instant Ink terms explaining rollover pages",
    "Local screenshot of the official HP Instant Ink pricing artifact"
  ]
}
```

# Strategic Logic

Customer Condition:
Customer wants predictable printing

Behavior Change:
Customer enrolls printer

Pricing Driver:
Printed pages per billing period

Billing Change:
Plan pages, rollover, then overage

Financial Outcome:
HP converts consumables into recurring revenue

Dominant causal chain:
Customer wants predictable ink or toner availability
-> Customer enrolls eligible HP printer
-> Monthly printed pages consume plan allowance
-> Printing beyond allowance uses rollover or extra-page blocks
-> HP converts variable consumables demand into recurring subscription revenue

Main Assumption:
Customers accept printed pages as the fair value metric because the subscription reduces the inconvenience and uncertainty of buying replacement ink or toner.

Main Failure Risk:
If customers perceive page counting as disconnected from actual ink use, the subscription can feel like a control mechanism rather than a convenience service.

Evidence Status:
Observed pricing structure; strategic causal logic is hypothesized.

# Decision Alternatives

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "decision_alternatives": [
    {
      "option": "Page-state billing preview",
      "pricing_move": "Show customers a clear preview of plan pages, rollover pages, and additional-page exposure before and during each billing cycle.",
      "expected_effect": "Reduces bill surprise and helps customers understand when they are approaching an additional-page charge.",
      "trade_off": "May make overage mechanics more salient and encourage customers to print less or downgrade.",
      "leading_indicator": "Lower billing support contact rate and higher user comprehension of page allowance status."
    },
    {
      "option": "Printing spike recommendation",
      "pricing_move": "Recommend a temporary or permanent plan change when customers repeatedly exceed their allowance and rollover buffer.",
      "expected_effect": "Moves customers toward a better-fit page allowance and reduces surprise additional-page blocks.",
      "trade_off": "Could reduce short-term overage revenue if customers move to a more predictable higher plan.",
      "leading_indicator": "Higher plan-fit adjustment rate and lower repeated overage incidence."
    },
    {
      "option": "Ink-use perception explainer",
      "pricing_move": "Explain clearly that plans are based on printed pages rather than the amount of ink or toner used on each page.",
      "expected_effect": "Improves perceived fairness by aligning customer expectations with the actual value metric.",
      "trade_off": "May increase resistance among customers who print many low-coverage pages.",
      "leading_indicator": "Lower confusion around page counting and lower cancellation reason share related to fairness."
    }
  ]
}
```

# Bill Examples

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "bill_examples": [
    {
      "scenario": "Light monthly printing within allowance",
      "customer_situation": "A customer prints fewer pages than the selected plan allowance.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period",
      "variable_charge": "No additional page block is triggered.",
      "discount_or_adjustment": "Unused eligible pages may roll over subject to plan limits.",
      "final_bill": "Monthly bill = plan fee, with unused eligible pages added to rollover balance up to the applicable cap.",
      "pricing_lesson": "The subscription remains predictable when printing stays within allowance."
    },
    {
      "scenario": "Printing spike covered by rollover",
      "customer_situation": "A customer prints more than the monthly plan allowance but still has rollover pages available.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period and rollover balance",
      "variable_charge": "Rollover pages are consumed before additional-page billing applies.",
      "discount_or_adjustment": "Rollover balance reduces immediate overage exposure.",
      "final_bill": "Monthly bill = plan fee, while extra printed pages reduce rollover balance instead of triggering additional page blocks.",
      "pricing_lesson": "Rollover functions as a buffer that smooths occasional spikes."
    },
    {
      "scenario": "Printing beyond plan and rollover",
      "customer_situation": "A customer prints more than both monthly plan allowance and available rollover pages.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Printed pages per billing period",
      "variable_charge": "Additional page blocks are charged.",
      "discount_or_adjustment": "none",
      "final_bill": "Monthly bill = plan fee + additional page block charges.",
      "pricing_lesson": "The trigger path turns a predictable subscription into variable billing once allowance and rollover are exhausted."
    },
    {
      "scenario": "Low-print months hit rollover cap",
      "customer_situation": "A customer repeatedly prints fewer pages than the plan allowance.",
      "base_price": "Monthly plan fee",
      "pricing_driver": "Rollover page balance",
      "variable_charge": "No additional page charge applies, but not all unused pages may carry forward once the cap is reached.",
      "discount_or_adjustment": "Excess unused pages above the rollover cap are not banked.",
      "final_bill": "Monthly bill = plan fee, with rollover balance capped by plan and service type.",
      "pricing_lesson": "Rollover adds flexibility, but it is not unlimited stored value."
    }
  ]
}
```

# Boundary Crossing Map

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "boundary_crossing_map": [
    {
      "from_state": "Within monthly page allowance",
      "boundary_condition": "Printed pages exceed plan allowance.",
      "to_state": "Rollover page consumption",
      "driver": "Printed pages per billing period",
      "billing_effect": "The customer starts using rollover pages instead of immediately paying additional-page charges.",
      "customer_perception_risk": "The customer may not notice the buffer is being depleted."
    },
    {
      "from_state": "Rollover buffer available",
      "boundary_condition": "Printed pages exceed plan allowance plus rollover balance.",
      "to_state": "Additional page block billing",
      "driver": "Printed pages per billing period",
      "billing_effect": "Additional page blocks are charged.",
      "customer_perception_risk": "The customer may experience bill surprise after a temporary printing spike."
    },
    {
      "from_state": "Current plan appears sufficient",
      "boundary_condition": "Customer repeatedly triggers additional page blocks.",
      "to_state": "Upgrade pressure to a higher allowance plan",
      "driver": "Monthly page allowance",
      "billing_effect": "A higher plan may become more predictable than repeated overage.",
      "customer_perception_risk": "The customer may feel pushed upward even if high usage is episodic."
    },
    {
      "from_state": "Unused pages can roll over",
      "boundary_condition": "Rollover balance reaches the applicable cap.",
      "to_state": "Unused pages no longer create additional future buffer",
      "driver": "Rollover page balance",
      "billing_effect": "Excess unused pages are not banked beyond the cap.",
      "customer_perception_risk": "The customer may feel they are losing paid-for page capacity."
    },
    {
      "from_state": "Ink plan rollover logic",
      "boundary_condition": "Customer uses toner subscription plan logic instead.",
      "to_state": "Toner rollover logic",
      "driver": "Ink or toner plan type",
      "billing_effect": "Rollover caps and plan economics may differ.",
      "customer_perception_risk": "Customers may assume ink and toner plans behave identically."
    }
  ]
}
```

# Decision Priority

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Page-state billing preview",
      "why_first": "It addresses the main source of bill surprise: customers may not know whether they are still inside allowance, using rollover, or entering additional-page billing.",
      "test_type": "Billing comprehension and usage-state visibility test",
      "risk_level": "low",
      "upside_potential": "Higher trust and fewer billing support contacts.",
      "implementation_complexity": "low",
      "success_metric": "Lower billing confusion contact rate and higher page-state comprehension."
    },
    {
      "priority_rank": 2,
      "option": "Printing spike recommendation",
      "why_first": "It improves plan fit after usage patterns reveal repeated allowance mismatch.",
      "test_type": "Plan-fit recommendation experiment",
      "risk_level": "medium",
      "upside_potential": "Better plan fit and lower repeated overage frustration.",
      "implementation_complexity": "medium",
      "success_metric": "Higher accepted plan-fit recommendations and lower repeated overage incidence."
    },
    {
      "priority_rank": 3,
      "option": "Ink-use perception explainer",
      "why_first": "It addresses fairness perception, but it may also make page-count pricing more controversial for low-coverage users.",
      "test_type": "Value metric explanation test",
      "risk_level": "medium",
      "upside_potential": "Better understanding of page-count pricing and fewer fairness-related cancellations.",
      "implementation_complexity": "low",
      "success_metric": "Lower cancellation reason share related to page-count fairness."
    }
  ]
}
```

# Reasoning Error Check

```json
{
  "case_id": "hp-instant-ink-page-count-subscription-pricing",
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "Assuming that page-count pricing automatically improves customer satisfaction because it simplifies ink replacement.",
      "case_specific_check": "Separate observed billing structure from hypothesized convenience value.",
      "evidence_needed": "Customer retention, support, cancellation reason, and satisfaction data before and after billing explanation improvements.",
      "failure_signal": "Customers understand the model but still perceive page counting as unfair."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Treating Instant Ink as an ink-volume subscription when the bill is actually driven by printed pages.",
      "case_specific_check": "Keep the analysis centered on page count, not cartridge volume or ink coverage.",
      "evidence_needed": "Official plan wording and billing support showing plan pages, rollover pages, and additional page charges.",
      "failure_signal": "Students explain the case as ink consumption pricing rather than page-count pricing."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "Ignoring the boundary between plan allowance, rollover balance, and additional page blocks.",
      "case_specific_check": "Show the full trigger path from included pages to rollover to extra-page billing.",
      "evidence_needed": "Official billing support explaining what happens when customers exceed plan and rollover pages.",
      "failure_signal": "The case becomes a simple subscription ladder instead of a threshold-trigger case."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Suggesting clearer billing previews without recognizing that transparency may reduce overage revenue or encourage downgrades.",
      "case_specific_check": "Every recommended pricing move must include a revenue or behavior trade off.",
      "evidence_needed": "A/B test data comparing billing comprehension, overage incidence, plan changes, and churn.",
      "failure_signal": "Transparency improves trust but lowers average revenue per user without retention benefit."
    }
  ]
}
```
