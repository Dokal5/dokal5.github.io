# Case Insight Brief

Company:
Airbnb

Case ID:
airbnb-service-fee-incidence-pricing

Pricing model:
Marketplace service-fee structure that shifts platform fee incidence between guest-visible checkout fee and host-side payout deduction.

Primary insight:
Airbnb's service-fee design changes not only how much the platform captures, but where the fee appears: split fee makes the guest service fee visible at checkout, while single fee deducts the fee from host payout and makes the guest-facing price simpler.

What is monetized:
Airbnb monetizes marketplace trust, booking infrastructure, payment processing, customer support, host demand generation, and guest search and transaction coordination.

How users are segmented:
Users are segmented by fee structure, host type, software connection status, hospitality listing status, geography, currency condition, and booking type.

What drives price differences:
The main driver is fee incidence structure: whether the booking uses split-fee logic or single-fee logic, and whether service-fee exposure appears on the guest side, host side, or through host price adjustment.

Why this pricing works:
The hypothesized logic is that shifting toward single-fee pricing improves guest price transparency and comparability, while Airbnb preserves platform value capture by moving fee responsibility into host-side payout economics.

Where friction appears:
Hosts may need to adjust prices to protect payout, while guests may interpret the visible booking price differently when the separate guest service fee disappears.

Where risk appears:
If hosts do not adjust prices, their payout falls. If hosts do adjust prices, guests may see higher listed prices even though the final payment may remain similar.

Structural weakness:
The model improves guest-facing price simplicity, but it moves pricing responsibility and margin management onto hosts, especially those transitioning from split fee to single fee.

Student 10-second takeaway:
Airbnb changes the bill by moving the platform fee from guest-visible checkout fee to host-side payout deduction.

Pricing architecture note:
Public pricing structure reviewed May 6, 2026. Airbnb's official Help Center describes split fee and single fee structures, while Airbnb's Resource Center explains the host price adjustment needed to keep guest price and host payout similar under single fee.

Evidence note:
Primary evidence comes from Airbnb Help Center and Airbnb Resource Center. Exact rates vary by host category, geography, currency, listing type, and Airbnb policy changes, so the public page must cite the official Airbnb artifact used for the screenshot.

Scope:
Split fee, single fee, host service fee, guest service fee, host payout deduction, guest total-price visibility, host price adjustment response, software-connected or hospitality listing fee state where officially stated.

Out of scope:
Cleaning fees, taxes, cancellation policies, host earnings optimization, Airbnb search ranking, dynamic pricing tools, regulatory debate, trust and safety policy, full Airbnb financial performance, and guest demand modeling.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "airbnb-service-fee-incidence-pricing",
  "case_type": "marketplace",
  "evidence_level": "observed",
  "pricing_model": "Marketplace service-fee structure that shifts platform fee incidence between guest-visible checkout fee and host-side payout deduction",
  "value_metric": "Confirmed booking subtotal and marketplace transaction coordination",
  "segmentation_type": "Fee structure, host type, software connection status, hospitality listing status, geography, currency condition, and booking type",
  "tiers": [
    "Split fee",
    "Single fee",
    "Host service fee",
    "Guest service fee",
    "Host payout deduction",
    "Host price adjustment"
  ],
  "segments": [
    "Hosts on split-fee structure",
    "Hosts on single-fee structure",
    "Software-connected hosts",
    "Traditional hospitality listings",
    "Guests seeing separate service fee",
    "Guests seeing simpler total price",
    "Hosts adjusting listed price"
  ],
  "pricing_logic": "Airbnb charges service fees through either a split-fee structure or a single-fee structure. Under split fee, the platform fee is split between host payout deduction and guest-visible checkout fee. Under single fee, the entire fee is deducted from host payout, making the guest-facing price simpler while shifting fee incidence to the host side.",
  "key_driver": "Fee incidence structure",
  "drivers": [
    {
      "driver": "Fee incidence structure",
      "type": "commitment",
      "pricing_role": "threshold",
      "direction": "segment_users",
      "effect": "The booking follows either split-fee or single-fee logic, changing whether the platform fee appears separately to guests or is deducted from host payout.",
      "student_label": "Fee incidence"
    },
    {
      "driver": "Booking subtotal",
      "type": "volume",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Service fees are calculated as a percentage of the booking subtotal, excluding taxes and certain fee categories where stated.",
      "student_label": "Booking subtotal"
    },
    {
      "driver": "Host software connection status",
      "type": "asset",
      "pricing_role": "threshold",
      "direction": "segment_users",
      "effect": "Software-connected hosts may be required to use the single-fee structure, changing payout deduction and price adjustment needs.",
      "student_label": "Software-connected host"
    },
    {
      "driver": "Hospitality listing status",
      "type": "asset",
      "pricing_role": "threshold",
      "direction": "segment_users",
      "effect": "Certain traditional hospitality listings are required to use single-fee logic.",
      "student_label": "Hospitality listing"
    },
    {
      "driver": "Currency condition",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Cross-currency bookings can increase guest service fee exposure under split-fee logic.",
      "student_label": "Currency condition"
    },
    {
      "driver": "Host price adjustment",
      "type": "commitment",
      "pricing_role": "base_charge",
      "direction": "improve_adoption",
      "effect": "Hosts can raise listed prices under single-fee logic to preserve payout and keep the guest final payment similar.",
      "student_label": "Host markup response"
    }
  ],
  "formula": {
    "expression": "guest_payment_and_host_payout = booking_subtotal + guest_service_fee - host_service_fee_or_single_fee_deduction",
    "variables": [
      {
        "symbol": "booking_subtotal",
        "label": "Nightly price plus host-charged fees before guest service fee and taxes",
        "maps_to_driver": "Booking subtotal"
      },
      {
        "symbol": "guest_service_fee",
        "label": "Guest-visible service fee under split-fee logic",
        "maps_to_driver": "Fee incidence structure"
      },
      {
        "symbol": "host_service_fee_or_single_fee_deduction",
        "label": "Fee deducted from host payout under split-fee or single-fee logic",
        "maps_to_driver": "Fee incidence structure"
      },
      {
        "symbol": "host_price_adjustment",
        "label": "Host listed-price adjustment used to preserve payout under single fee",
        "maps_to_driver": "Host price adjustment"
      }
    ],
    "output_label": "Guest payment and host payout exposure",
    "explanation": "The economic fee may be similar, but the visible bill and payout logic change depending on whether Airbnb applies split-fee or single-fee incidence."
  },
  "upgrade_triggers": [
    {
      "trigger": "Booking uses split-fee structure",
      "from": "Host listed price",
      "to": "Guest-visible service fee plus host payout deduction",
      "why_it_happens": "Airbnb divides service-fee incidence between host and guest.",
      "pricing_effect": "Guests see a service fee added to the listed price, while hosts receive payout after host service fee deduction."
    },
    {
      "trigger": "Booking uses single-fee structure",
      "from": "Split-fee logic",
      "to": "Host-side full service-fee deduction",
      "why_it_happens": "Airbnb applies a structure where the entire service fee is deducted from host payout.",
      "pricing_effect": "Guests see a simpler booking price while hosts absorb the platform fee through payout deduction."
    },
    {
      "trigger": "Host adjusts listed price after fee migration",
      "from": "Same host listed price",
      "to": "Higher host listed price under single fee",
      "why_it_happens": "The host raises price to preserve payout after the single-fee deduction.",
      "pricing_effect": "Guest final payment may remain similar while the visible listed price changes."
    },
    {
      "trigger": "Host does not adjust listed price after fee migration",
      "from": "Split-fee payout economics",
      "to": "Lower host payout under single fee",
      "why_it_happens": "The host keeps the same listed price even though Airbnb deducts a larger host-side fee.",
      "pricing_effect": "Guests may pay less, but host payout falls."
    },
    {
      "trigger": "Booking has cross-currency condition under split fee",
      "from": "Standard guest service fee exposure",
      "to": "Higher guest service fee exposure",
      "why_it_happens": "Airbnb adjusts guest service fee to align with value provided in cross-currency bookings.",
      "pricing_effect": "Guest service fee can rise within the officially stated range."
    }
  ],
  "visualization": {
    "primary_component": "value_extraction_map",
    "supporting_components": [
      "fee incidence comparison map",
      "bill examples comparison table",
      "boundary crossing transition rows",
      "decision priority table",
      "reasoning error stress-test table"
    ],
    "interactive_controls": [
      "fee structure selector",
      "booking subtotal input",
      "host price adjustment toggle",
      "software-connected host toggle",
      "currency condition toggle"
    ],
    "default_view": "Split fee versus single fee incidence map",
    "student_prompt": "Where does Airbnb's service fee appear: guest checkout, host payout, or host listed price?"
  },
  "primary_component": "value_extraction_map",
  "decision_core": {
    "what_is_monetized": "Marketplace trust, booking infrastructure, payment processing, customer support, demand generation, and transaction coordination.",
    "what_changes_the_bill": "The bill changes when Airbnb applies split-fee versus single-fee logic, shifting service-fee visibility between guest checkout and host payout deduction.",
    "who_pays_more_and_why": "Hosts under single-fee logic bear more visible payout deduction because Airbnb deducts the full service fee from host payout, while guests see a simpler booking price."
  },
  "student_10_second_takeaway": "Airbnb changes fee incidence: split fee shows service fee to guests, while single fee deducts the fee from host payout.",
  "friction_points": [
    "Guests may dislike seeing a separate service fee added at checkout under split-fee logic.",
    "Hosts may need to raise listed prices under single-fee logic to preserve payout.",
    "If hosts do not adjust prices, host payout can fall.",
    "If hosts do adjust prices, guests may see higher listed prices even if final payment remains similar.",
    "Different host categories and geographies can make fee structure difficult to compare."
  ],
  "risks": [
    "Hosts may perceive single fee as a margin hit if they do not adjust pricing.",
    "Guests may perceive higher listed prices as Airbnb becoming more expensive, even when total final payment is similar.",
    "Fee migration can create confusion if host tools and price displays do not explain payout preservation.",
    "Marketplace transparency gains may be offset by host resistance to increased visible payout deduction."
  ],
  "structural_weakness": "The model improves guest-facing price transparency, but it transfers price-management burden to hosts who must decide whether and how to adjust listed prices.",
  "strategic_insight": "Airbnb can preserve platform value capture while changing fee visibility by shifting service-fee incidence from guest checkout to host payout, but the change requires hosts to manage listed-price response.",
  "strategic_logic": {
    "customer_condition": "Guests compare final prices",
    "behavior_change": "Airbnb simplifies fee display",
    "pricing_driver": "Fee incidence structure",
    "billing_change": "Fee shifts to host payout",
    "financial_outcome": "Platform preserves value capture",
    "dominant_causal_chain": [
      "Guests compare total booking prices",
      "Separate guest service fees reduce price transparency",
      "Airbnb shifts service fee into host-side payout deduction",
      "Hosts adjust listed prices or accept lower payout",
      "Airbnb preserves platform value capture while simplifying guest-facing price"
    ],
    "main_assumption": "Guest conversion improves when the guest-facing price is simpler and fewer fees appear at checkout.",
    "main_failure_risk": "Hosts may resist or mismanage price adjustment, creating payout dissatisfaction or higher visible listed prices.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Host payout preservation preview",
      "pricing_move": "Show hosts how different listed-price adjustments affect guest payment and host payout under single-fee logic.",
      "expected_effect": "Reduces host confusion and helps hosts preserve payout without overcorrecting listed prices.",
      "trade_off": "May make the larger host-side deduction more salient and increase resistance to the migration.",
      "leading_indicator": "Higher adoption of price adjustment tool and fewer support contacts about payout drops."
    },
    {
      "option": "Guest total-price clarity label",
      "pricing_move": "Explain that the guest-facing price under single fee includes Airbnb service-fee economics rather than adding a separate checkout service fee.",
      "expected_effect": "Improves guest trust and reduces checkout fee surprise.",
      "trade_off": "May make guests more aware that hosts could embed service-fee recovery into listed price.",
      "leading_indicator": "Lower checkout abandonment after price breakdown view and higher perceived price transparency."
    },
    {
      "option": "Fee migration comparison view",
      "pricing_move": "Offer hosts a before-and-after comparison of split fee versus single fee using their own booking examples.",
      "expected_effect": "Clarifies whether guests pay roughly the same, hosts earn the same, or either side changes after migration.",
      "trade_off": "May reveal winners and losers more explicitly, increasing complaints from hosts whose economics worsen.",
      "leading_indicator": "Higher comprehension of fee migration and lower dispute rate around service-fee changes."
    }
  ],
  "bill_examples": [
    {
      "scenario": "Split-fee booking",
      "customer_situation": "A host sets a listed price under split-fee logic.",
      "base_price": "Host listed price",
      "pricing_driver": "Fee incidence structure",
      "variable_charge": "Guest service fee is added at checkout and host service fee is deducted from payout.",
      "discount_or_adjustment": "None unless Airbnb-specific promotions, taxes, or regional rules apply.",
      "final_bill": "Guest payment = listed price + guest service fee; host payout = listed price - host service fee.",
      "pricing_lesson": "The guest sees a higher checkout price than the host listed price."
    },
    {
      "scenario": "Single-fee booking with price adjustment",
      "customer_situation": "A host raises listed price to preserve payout after moving to single-fee logic.",
      "base_price": "Adjusted host listed price",
      "pricing_driver": "Fee incidence structure",
      "variable_charge": "Airbnb deducts the full service fee from host payout.",
      "discount_or_adjustment": "Host price adjustment can preserve host payout and guest final payment compared with the previous split-fee structure.",
      "final_bill": "Guest payment = adjusted listed price; host payout = adjusted listed price - single fee deduction.",
      "pricing_lesson": "The final guest payment can stay similar, but the fee is now embedded in host-side pricing and payout logic."
    },
    {
      "scenario": "Single-fee booking without price adjustment",
      "customer_situation": "A host keeps the same listed price after moving to single-fee logic.",
      "base_price": "Unchanged host listed price",
      "pricing_driver": "Fee incidence structure",
      "variable_charge": "Airbnb deducts the full service fee from host payout.",
      "discount_or_adjustment": "No host price adjustment is made.",
      "final_bill": "Guest payment = unchanged listed price; host payout = unchanged listed price - single fee deduction.",
      "pricing_lesson": "Guests may pay less, but host payout falls."
    },
    {
      "scenario": "Cross-currency split-fee booking",
      "customer_situation": "Guest pays in a different currency from the host listing currency under split-fee logic.",
      "base_price": "Host listed price",
      "pricing_driver": "Currency condition",
      "variable_charge": "Guest service fee may include an additional amount within Airbnb's stated range.",
      "discount_or_adjustment": "Currency-related fee adjustment may apply.",
      "final_bill": "Guest payment = listed price + adjusted guest service fee, while host payout follows host service fee deduction.",
      "pricing_lesson": "Currency condition can change guest fee exposure even when host price is unchanged."
    }
  ],
  "boundary_crossing_map": [
    {
      "from_state": "Split fee",
      "boundary_condition": "Airbnb applies single-fee logic to the host or listing category.",
      "to_state": "Single fee",
      "driver": "Fee incidence structure",
      "billing_effect": "Guest service fee disappears as a separate checkout item while full service fee is deducted from host payout.",
      "customer_perception_risk": "Guests may see simpler pricing, while hosts may feel their payout has been reduced."
    },
    {
      "from_state": "Same host listed price",
      "boundary_condition": "Host does not adjust price after moving to single fee.",
      "to_state": "Lower host payout",
      "driver": "Host price adjustment",
      "billing_effect": "The full service fee is deducted from the same listed price.",
      "customer_perception_risk": "Host may interpret the migration as a margin cut."
    },
    {
      "from_state": "Same host payout target",
      "boundary_condition": "Host raises listed price to preserve payout under single fee.",
      "to_state": "Higher listed price",
      "driver": "Host price adjustment",
      "billing_effect": "Guest may pay a similar final amount, but the visible listed price is higher.",
      "customer_perception_risk": "Guest may interpret the listing as more expensive even when total payment is similar."
    },
    {
      "from_state": "Standard guest service fee range",
      "boundary_condition": "Guest pays in a different currency from the host listing currency.",
      "to_state": "Cross-currency fee exposure",
      "driver": "Currency condition",
      "billing_effect": "Guest service fee can increase within Airbnb's stated range.",
      "customer_perception_risk": "Guest may not understand why service fee percentage differs."
    },
    {
      "from_state": "Independent host fee logic",
      "boundary_condition": "Host uses property management software or qualifies as certain hospitality listing.",
      "to_state": "Mandatory single-fee logic",
      "driver": "Host software connection status",
      "billing_effect": "The host is moved into single-fee payout deduction logic.",
      "customer_perception_risk": "Host may feel the pricing structure is imposed rather than chosen."
    }
  ],
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Host payout preservation preview",
      "why_first": "It addresses the biggest adoption risk: hosts may not understand how to preserve payout after fee incidence shifts.",
      "test_type": "Host pricing adjustment comprehension test",
      "risk_level": "low",
      "upside_potential": "Higher successful price adjustment and fewer payout-related support contacts.",
      "implementation_complexity": "low",
      "success_metric": "Higher price adjustment tool usage and lower payout-drop complaint rate."
    },
    {
      "priority_rank": 2,
      "option": "Fee migration comparison view",
      "why_first": "It explains before-and-after economics using concrete booking examples, reducing confusion around the migration.",
      "test_type": "Before-and-after fee comprehension experiment",
      "risk_level": "medium",
      "upside_potential": "Higher host understanding and lower migration dispute rate.",
      "implementation_complexity": "medium",
      "success_metric": "Higher fee structure comprehension and lower service-fee dispute rate."
    },
    {
      "priority_rank": 3,
      "option": "Guest total-price clarity label",
      "why_first": "It improves guest trust, but it is downstream from host price adjustment quality.",
      "test_type": "Guest checkout transparency experiment",
      "risk_level": "medium",
      "upside_potential": "Lower checkout abandonment and higher perceived price transparency.",
      "implementation_complexity": "low",
      "success_metric": "Lower checkout abandonment after price breakdown view."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "Assuming single-fee pricing automatically improves conversion because it simplifies guest-facing price.",
      "case_specific_check": "Separate observed fee incidence structure from hypothesized conversion impact.",
      "evidence_needed": "Booking conversion, checkout abandonment, host payout, and price adjustment data before and after migration.",
      "failure_signal": "Guest price transparency improves, but conversion does not rise or host dissatisfaction offsets the benefit."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Treating the change as only a fee increase rather than a fee incidence and visibility redesign.",
      "case_specific_check": "Keep the analysis centered on who sees the fee, who absorbs it, and how listed price changes.",
      "evidence_needed": "Official split-fee and single-fee examples showing guest payment and host payout under both structures.",
      "failure_signal": "Students explain the case as Airbnb simply charging hosts more."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "Ignoring the boundary between split fee, single fee, and host price adjustment response.",
      "case_specific_check": "Show the transition from guest service fee to host payout deduction and the host markup decision.",
      "evidence_needed": "Official Airbnb evidence explaining when single fee applies and how hosts can adjust prices.",
      "failure_signal": "The case becomes a generic marketplace fee table instead of a fee-incidence mechanism case."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Suggesting price transparency without recognizing host payout risk and visible listed-price inflation.",
      "case_specific_check": "Every recommended pricing move must include both guest-side and host-side trade offs.",
      "evidence_needed": "A/B data or migration analytics comparing guest conversion, host payout satisfaction, and listing price changes.",
      "failure_signal": "Guest transparency improves but host economics or perceived competitiveness worsen."
    }
  ]
}
```

## Render Instruction

```json
{
  "case_id": "airbnb-service-fee-incidence-pricing",
  "render_goal": "Help students see that Airbnb service-fee pricing is about fee incidence and price visibility, not only fee percentage.",
  "primary_component": "value_extraction_map",
  "secondary_components": [
    "fee incidence comparison map",
    "bill examples comparison table",
    "boundary crossing transition rows",
    "decision priority table",
    "reasoning error stress-test table"
  ],
  "first_screen_priority": [
    "Airbnb monetizes marketplace transaction coordination",
    "The bill changes when service-fee incidence shifts from guest checkout to host payout",
    "The core mechanism is split fee versus single fee and host price adjustment"
  ],
  "interactive_controls": [
    "fee structure selector",
    "booking subtotal input",
    "host price adjustment toggle",
    "software-connected host toggle",
    "currency condition toggle"
  ],
  "avoid": [
    "Do not turn this into a general Airbnb host fee page.",
    "Do not make fee percentage table the primary mechanism.",
    "Do not focus on cleaning fees, taxes, cancellation policies, or dynamic pricing.",
    "Do not claim conversion impact without evidence.",
    "Do not treat single fee as simply a fee increase; it is a fee-incidence and visibility redesign."
  ],
  "failure_modes": [
    "The page becomes a generic marketplace fee table instead of a value extraction map.",
    "The key driver drifts from fee incidence structure to booking subtotal only.",
    "Host price adjustment is ignored.",
    "Guest total-price visibility is not distinguished from host payout deduction.",
    "The analysis overclaims that single fee improves conversion."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "primary_component",
    "strategic_logic",
    "decision_alternatives",
    "bill_examples",
    "boundary_crossing_map",
    "decision_priority",
    "reasoning_error_check",
    "Official Airbnb service fees help page",
    "Official Airbnb Resource Center fee migration page",
    "Local screenshot of official Airbnb service-fee artifact",
    "Official example showing split fee versus single fee guest payment and host payout"
  ]
}
```

## Strategic Logic

Customer Condition:
Guests compare final prices

Behavior Change:
Airbnb simplifies fee display

Pricing Driver:
Fee incidence structure

Billing Change:
Fee shifts to host payout

Financial Outcome:
Platform preserves value capture

Dominant causal chain:
Guests compare total booking prices
-> Separate guest service fees reduce price transparency
-> Airbnb shifts service fee into host-side payout deduction
-> Hosts adjust listed prices or accept lower payout
-> Airbnb preserves platform value capture while simplifying guest-facing price

Main Assumption:
Guest conversion improves when the guest-facing price is simpler and fewer fees appear at checkout.

Main Failure Risk:
Hosts may resist or mismanage price adjustment, creating payout dissatisfaction or higher visible listed prices.

Evidence Status:
Observed pricing structure; strategic causal logic is hypothesized.

## Decision Alternatives

```json
[
  {
    "option": "Host payout preservation preview",
    "pricing_move": "Show hosts how different listed-price adjustments affect guest payment and host payout under single-fee logic.",
    "expected_effect": "Reduces host confusion and helps hosts preserve payout without overcorrecting listed prices.",
    "trade_off": "May make the larger host-side deduction more salient and increase resistance to the migration.",
    "leading_indicator": "Higher adoption of price adjustment tool and fewer support contacts about payout drops."
  },
  {
    "option": "Guest total-price clarity label",
    "pricing_move": "Explain that the guest-facing price under single fee includes Airbnb service-fee economics rather than adding a separate checkout service fee.",
    "expected_effect": "Improves guest trust and reduces checkout fee surprise.",
    "trade_off": "May make guests more aware that hosts could embed service-fee recovery into listed price.",
    "leading_indicator": "Lower checkout abandonment after price breakdown view and higher perceived price transparency."
  },
  {
    "option": "Fee migration comparison view",
    "pricing_move": "Offer hosts a before-and-after comparison of split fee versus single fee using their own booking examples.",
    "expected_effect": "Clarifies whether guests pay roughly the same, hosts earn the same, or either side changes after migration.",
    "trade_off": "May reveal winners and losers more explicitly, increasing complaints from hosts whose economics worsen.",
    "leading_indicator": "Higher comprehension of fee migration and lower dispute rate around service-fee changes."
  }
]
```

## Bill Examples

```json
[
  {
    "scenario": "Split-fee booking",
    "customer_situation": "A host sets a listed price under split-fee logic.",
    "base_price": "Host listed price",
    "pricing_driver": "Fee incidence structure",
    "variable_charge": "Guest service fee is added at checkout and host service fee is deducted from payout.",
    "discount_or_adjustment": "None unless Airbnb-specific promotions, taxes, or regional rules apply.",
    "final_bill": "Guest payment = listed price + guest service fee; host payout = listed price - host service fee.",
    "pricing_lesson": "The guest sees a higher checkout price than the host listed price."
  },
  {
    "scenario": "Single-fee booking with price adjustment",
    "customer_situation": "A host raises listed price to preserve payout after moving to single-fee logic.",
    "base_price": "Adjusted host listed price",
    "pricing_driver": "Fee incidence structure",
    "variable_charge": "Airbnb deducts the full service fee from host payout.",
    "discount_or_adjustment": "Host price adjustment can preserve host payout and guest final payment compared with the previous split-fee structure.",
    "final_bill": "Guest payment = adjusted listed price; host payout = adjusted listed price - single fee deduction.",
    "pricing_lesson": "The final guest payment can stay similar, but the fee is now embedded in host-side pricing and payout logic."
  },
  {
    "scenario": "Single-fee booking without price adjustment",
    "customer_situation": "A host keeps the same listed price after moving to single-fee logic.",
    "base_price": "Unchanged host listed price",
    "pricing_driver": "Fee incidence structure",
    "variable_charge": "Airbnb deducts the full service fee from host payout.",
    "discount_or_adjustment": "No host price adjustment is made.",
    "final_bill": "Guest payment = unchanged listed price; host payout = unchanged listed price - single fee deduction.",
    "pricing_lesson": "Guests may pay less, but host payout falls."
  },
  {
    "scenario": "Cross-currency split-fee booking",
    "customer_situation": "Guest pays in a different currency from the host listing currency under split-fee logic.",
    "base_price": "Host listed price",
    "pricing_driver": "Currency condition",
    "variable_charge": "Guest service fee may include an additional amount within Airbnb's stated range.",
    "discount_or_adjustment": "Currency-related fee adjustment may apply.",
    "final_bill": "Guest payment = listed price + adjusted guest service fee, while host payout follows host service fee deduction.",
    "pricing_lesson": "Currency condition can change guest fee exposure even when host price is unchanged."
  }
]
```

## Boundary Crossing Map

```json
[
  {
    "from_state": "Split fee",
    "boundary_condition": "Airbnb applies single-fee logic to the host or listing category.",
    "to_state": "Single fee",
    "driver": "Fee incidence structure",
    "billing_effect": "Guest service fee disappears as a separate checkout item while full service fee is deducted from host payout.",
    "customer_perception_risk": "Guests may see simpler pricing, while hosts may feel their payout has been reduced."
  },
  {
    "from_state": "Same host listed price",
    "boundary_condition": "Host does not adjust price after moving to single fee.",
    "to_state": "Lower host payout",
    "driver": "Host price adjustment",
    "billing_effect": "The full service fee is deducted from the same listed price.",
    "customer_perception_risk": "Host may interpret the migration as a margin cut."
  },
  {
    "from_state": "Same host payout target",
    "boundary_condition": "Host raises listed price to preserve payout under single fee.",
    "to_state": "Higher listed price",
    "driver": "Host price adjustment",
    "billing_effect": "Guest may pay a similar final amount, but the visible listed price is higher.",
    "customer_perception_risk": "Guest may interpret the listing as more expensive even when total payment is similar."
  },
  {
    "from_state": "Standard guest service fee range",
    "boundary_condition": "Guest pays in a different currency from the host listing currency.",
    "to_state": "Cross-currency fee exposure",
    "driver": "Currency condition",
    "billing_effect": "Guest service fee can increase within Airbnb's stated range.",
    "customer_perception_risk": "Guest may not understand why service fee percentage differs."
  },
  {
    "from_state": "Independent host fee logic",
    "boundary_condition": "Host uses property management software or qualifies as certain hospitality listing.",
    "to_state": "Mandatory single-fee logic",
    "driver": "Host software connection status",
    "billing_effect": "The host is moved into single-fee payout deduction logic.",
    "customer_perception_risk": "Host may feel the pricing structure is imposed rather than chosen."
  }
]
```

## Decision Priority

```json
[
  {
    "priority_rank": 1,
    "option": "Host payout preservation preview",
    "why_first": "It addresses the biggest adoption risk: hosts may not understand how to preserve payout after fee incidence shifts.",
    "test_type": "Host pricing adjustment comprehension test",
    "risk_level": "low",
    "upside_potential": "Higher successful price adjustment and fewer payout-related support contacts.",
    "implementation_complexity": "low",
    "success_metric": "Higher price adjustment tool usage and lower payout-drop complaint rate."
  },
  {
    "priority_rank": 2,
    "option": "Fee migration comparison view",
    "why_first": "It explains before-and-after economics using concrete booking examples, reducing confusion around the migration.",
    "test_type": "Before-and-after fee comprehension experiment",
    "risk_level": "medium",
    "upside_potential": "Higher host understanding and lower migration dispute rate.",
    "implementation_complexity": "medium",
    "success_metric": "Higher fee structure comprehension and lower service-fee dispute rate."
  },
  {
    "priority_rank": 3,
    "option": "Guest total-price clarity label",
    "why_first": "It improves guest trust, but it is downstream from host price adjustment quality.",
    "test_type": "Guest checkout transparency experiment",
    "risk_level": "medium",
    "upside_potential": "Lower checkout abandonment and higher perceived price transparency.",
    "implementation_complexity": "low",
    "success_metric": "Lower checkout abandonment after price breakdown view."
  }
]
```

## Reasoning Error Check

```json
[
  {
    "error_type": "causal_overclaim",
    "risk_statement": "Assuming single-fee pricing automatically improves conversion because it simplifies guest-facing price.",
    "case_specific_check": "Separate observed fee incidence structure from hypothesized conversion impact.",
    "evidence_needed": "Booking conversion, checkout abandonment, host payout, and price adjustment data before and after migration.",
    "failure_signal": "Guest price transparency improves, but conversion does not rise or host dissatisfaction offsets the benefit."
  },
  {
    "error_type": "value_price_confusion",
    "risk_statement": "Treating the change as only a fee increase rather than a fee incidence and visibility redesign.",
    "case_specific_check": "Keep the analysis centered on who sees the fee, who absorbs it, and how listed price changes.",
    "evidence_needed": "Official split-fee and single-fee examples showing guest payment and host payout under both structures.",
    "failure_signal": "Students explain the case as Airbnb simply charging hosts more."
  },
  {
    "error_type": "missing_boundary_conditions",
    "risk_statement": "Ignoring the boundary between split fee, single fee, and host price adjustment response.",
    "case_specific_check": "Show the transition from guest service fee to host payout deduction and the host markup decision.",
    "evidence_needed": "Official Airbnb evidence explaining when single fee applies and how hosts can adjust prices.",
    "failure_signal": "The case becomes a generic marketplace fee table instead of a fee-incidence mechanism case."
  },
  {
    "error_type": "no_trade_off",
    "risk_statement": "Suggesting price transparency without recognizing host payout risk and visible listed-price inflation.",
    "case_specific_check": "Every recommended pricing move must include both guest-side and host-side trade offs.",
    "evidence_needed": "A/B data or migration analytics comparing guest conversion, host payout satisfaction, and listing price changes.",
    "failure_signal": "Guest transparency improves but host economics or perceived competitiveness worsen."
  }
]
```
