# Case Insight Brief

Company: IKEA Netherlands
Case ID: ikea-nl-delivery-fulfillment-pricing
Pricing model: Product-price separation with fulfillment service bands, handling surcharges, and membership discounts.
Primary insight: IKEA Netherlands keeps product prices separate from fulfillment service prices so the bill changes when the basket becomes harder to move, hand over, or prepare.
What is monetized: Product ownership plus optional fulfillment work such as parcel delivery, truck delivery, collection preparation, and floor-and-room handling.
How users are segmented: Customers are segmented by fulfillment mode, basket weight and size, delivery effort, and membership status.
What drives price differences: Basket fulfillment difficulty, expressed through weight bands, parcel eligibility, truck delivery type, floor-and-room handling, and membership discount eligibility.
Why this pricing works: The hypothesized logic is that customers who value low product prices can self-transport or collect, while customers with heavier or more convenience-sensitive baskets accept a separate service charge because the additional logistics work is visible.
Where friction appears: Buyers have to estimate whether basket weight, dimensions, membership status, and handling preference will push them into a higher service band before checkout confirms exact options.
Where risk appears: The separated service bill can make the product price feel incomplete if delivery or room handling materially changes the landed cost.
Structural weakness: The model protects low product-price perception, but it can create late-stage surprise when a bulky basket moves from parcel or pickup logic into truck delivery.
Student 10-second takeaway: The bill changes when the same IKEA basket becomes heavier, bulkier, more convenient to receive, or eligible for a service discount.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "ikea-nl-delivery-fulfillment-pricing",
  "case_type": "retail",
  "evidence_level": "observed",
  "pricing_model": "Product-price separation with fulfillment service bands, handling surcharges, and membership discounts",
  "value_metric": "Fulfillment effort required to move the basket from IKEA to the customer",
  "segmentation_type": "Fulfillment mode, basket weight and size, handling location, and membership status",
  "tiers": [
    "Click & Collect",
    "Parcel delivery",
    "Single-driver truck delivery",
    "Two-driver truck delivery",
    "Floor and room of choice"
  ],
  "segments": [
    "Self-collecting customers",
    "Parcel-eligible baskets",
    "Truck-delivery baskets",
    "Higher-effort floor or room delivery",
    "IKEA Family members"
  ],
  "pricing_logic": "IKEA Netherlands separates the product price from fulfillment service fees. The bill changes when the basket crosses weight, size, service-mode, handling, or membership conditions.",
  "key_driver": "Basket fulfillment difficulty",
  "drivers": [
    {
      "driver": "Basket fulfillment difficulty",
      "type": "volume",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Heavier, bulkier, or harder-to-handle baskets move into higher fulfillment service charges.",
      "student_label": "Fulfillment difficulty"
    },
    {
      "driver": "Membership status",
      "type": "commitment",
      "pricing_role": "discount",
      "direction": "improve_adoption",
      "effect": "IKEA Family membership can reduce parcel delivery or Click & Collect service prices when the published conditions are met.",
      "student_label": "Membership discount"
    },
    {
      "driver": "Handling location",
      "type": "add_on",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Floor and room of choice delivery adds a higher service charge because the delivery team does more carrying work.",
      "student_label": "Room handling"
    }
  ],
  "formula": {
    "expression": "landed_bill = product_price + fulfillment_service_fee - membership_discount",
    "variables": [
      {
        "symbol": "product_price",
        "label": "Product price",
        "maps_to_driver": "Basket fulfillment difficulty"
      },
      {
        "symbol": "fulfillment_service_fee",
        "label": "Fulfillment service fee",
        "maps_to_driver": "Basket fulfillment difficulty"
      },
      {
        "symbol": "membership_discount",
        "label": "Membership discount",
        "maps_to_driver": "Membership status"
      }
    ],
    "output_label": "Landed customer bill",
    "explanation": "Product price stays separate from the service fee. The service fee is determined by fulfillment mode, basket weight or size, handling location, and membership eligibility."
  },
  "upgrade_triggers": [
    {
      "trigger": "Basket no longer qualifies for parcel or low-effort collection",
      "from": "Parcel delivery or Click & Collect",
      "to": "Truck delivery",
      "why_it_happens": "The basket becomes too heavy, too large, or otherwise unsuitable for lower-effort fulfillment.",
      "pricing_effect": "A higher truck delivery fee replaces the lower parcel or collection fee."
    },
    {
      "trigger": "Basket requires two-driver handling",
      "from": "Single-driver truck delivery",
      "to": "Two-driver truck delivery",
      "why_it_happens": "The basket is too large or difficult for one driver under the published delivery logic.",
      "pricing_effect": "The customer moves into higher weight-band truck delivery prices."
    },
    {
      "trigger": "Customer chooses floor and room of choice",
      "from": "Ground-floor threshold delivery",
      "to": "Floor and room of choice delivery",
      "why_it_happens": "The delivery team carries the order beyond the threshold to a floor or room selected by the customer.",
      "pricing_effect": "An added handling charge is included in the delivery price."
    },
    {
      "trigger": "Customer qualifies for IKEA Family service pricing",
      "from": "Standard service price",
      "to": "Discounted member service price",
      "why_it_happens": "The customer is an IKEA Family member and meets the published service condition.",
      "pricing_effect": "The service fee is reduced rather than increased."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [],
    "interactive_controls": [],
    "default_view": "fulfillment effort ladder",
    "student_prompt": "Follow the same basket as it becomes heavier, bulkier, and more convenient to receive."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Product ownership plus optional fulfillment work such as parcel delivery, truck delivery, collection preparation, and floor-and-room handling.",
    "what_changes_the_bill": "The bill changes when basket weight, basket size, fulfillment mode, floor-and-room handling, or IKEA Family eligibility changes the fulfillment fee layered onto product price.",
    "who_pays_more_and_why": "Buyers with heavier, bulkier, or more convenient-to-receive baskets pay more because IKEA and its delivery partners perform more logistics and handling work."
  },
  "student_10_second_takeaway": "The bill changes when the same IKEA basket becomes heavier, bulkier, more convenient to receive, or eligible for a service discount.",
  "friction_points": [
    "The buyer may not know the final fulfillment option until checkout confirms weight, size, address, demand, and availability.",
    "The separated service fee can make the product price feel incomplete for heavy or bulky baskets.",
    "Membership discounts and fulfillment choices require the buyer to compare product price, service mode, and convenience together."
  ],
  "risks": [
    "Late-stage landed-cost surprise can weaken trust in the low product-price anchor.",
    "Customers may abandon bulky baskets if the fulfillment charge feels disconnected from the product price.",
    "Competitors can attack with simpler upfront landed-cost certainty."
  ],
  "structural_weakness": "The model protects low product-price perception, but it can create late-stage surprise when a bulky basket moves from parcel or pickup logic into truck delivery.",
  "strategic_insight": "The structure works as a low-price retail logic only if customers accept fulfillment work as a separate service rather than as a hidden part of the product price.",
  "strategic_logic": {
    "customer_condition": "Low visible product prices",
    "behavior_change": "Customers outsource logistics work",
    "pricing_driver": "Fulfillment difficulty band",
    "billing_change": "Larger baskets pay more",
    "financial_outcome": "Preserve low-price perception",
    "dominant_causal_chain": [
      "Low visible product prices",
      "Customers outsource logistics work",
      "Fulfillment difficulty band",
      "Larger baskets pay more",
      "Preserve low-price perception"
    ],
    "main_assumption": "Customers tolerate fulfillment fees when product prices stay visibly low.",
    "main_failure_risk": "Fees feel hidden instead of earned by logistics work.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Earlier landed cost estimate",
      "pricing_move": "Show estimated fulfillment fee earlier in the shopping journey.",
      "expected_effect": "Reduces checkout surprise and increases price certainty.",
      "trade_off": "May reduce basket continuation if high delivery fees become salient too early.",
      "leading_indicator": "Checkout abandonment after delivery fee reveal."
    },
    {
      "option": "Member fulfillment benefit",
      "pricing_move": "Tie clearer delivery or pickup discounts to IKEA Family membership.",
      "expected_effect": "Increases membership signups and repeat purchase tracking.",
      "trade_off": "May reduce fulfillment service margin.",
      "leading_indicator": "IKEA Family uptake tied to delivery discount usage."
    },
    {
      "option": "Delivery threshold framing",
      "pricing_move": "Offer delivery discount or clearer service bands above selected basket thresholds.",
      "expected_effect": "Encourages basket building and improves perceived fairness.",
      "trade_off": "Can create margin leakage on bulky low-margin baskets.",
      "leading_indicator": "Average basket value and fulfillment fee as percentage of basket value."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case may overclaim that separated fulfillment pricing preserves IKEA's low-price image.",
      "case_specific_check": "Is low-price perception driven by separated delivery fees, or mainly by product design, scale, store format, and brand memory?",
      "evidence_needed": "Customer perception data comparing product price salience and final landed cost perception.",
      "failure_signal": "Customers increasingly describe IKEA as expensive after delivery fees are revealed."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Customers may not perceive fulfillment work as separately valuable even if it has real operational cost.",
      "case_specific_check": "Do customers see delivery and room-of-choice fees as earned logistics value or as hidden charges?",
      "evidence_needed": "Complaint analysis, delivery option conversion, and willingness-to-pay evidence for service levels.",
      "failure_signal": "Higher abandonment or complaints at the delivery option step."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "The model depends on customers accepting unbundled fulfillment fees.",
      "case_specific_check": "What happens if competitors offer clearer all-in delivery pricing?",
      "evidence_needed": "Competitor landed-cost comparison and conversion impact of all-in pricing.",
      "failure_signal": "Customers shift to competitors with simpler or more predictable delivery pricing."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Improvements such as earlier landed cost visibility may reduce checkout surprise but also expose fees earlier.",
      "case_specific_check": "Does earlier fee visibility improve trust without reducing basket completion?",
      "evidence_needed": "A/B test of earlier landed cost estimate versus checkout-only fee reveal.",
      "failure_signal": "Lower add-to-cart or basket continuation after early delivery estimate."
    }
  ]
}
```

## Render Instruction

```json
{
  "case_id": "ikea-nl-delivery-fulfillment-pricing",
  "render_goal": "Show that the same basket becomes more expensive when fulfillment difficulty and handling convenience rise.",
  "primary_component": "driver_logic",
  "secondary_components": [],
  "first_screen_priority": [
    "decision_core",
    "key_driver",
    "student_10_second_takeaway"
  ],
  "interactive_controls": [],
  "avoid": [
    "Do not render this as a feature comparison table.",
    "Do not imply IKEA proves the causal chain.",
    "Do not introduce service modes not present in the public source pages."
  ],
  "failure_modes": [
    "The page would fail if it made product tiers look like the main mechanism.",
    "The page would fail if it did not show fulfillment difficulty as the driver.",
    "The page would fail if strategic logic introduced a new driver absent from Case JSON."
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
    "reasoning_error_check"
  ]
}
```

## 4. Strategic Logic

```json
{
  "case_id": "ikea-nl-delivery-fulfillment-pricing",
  "strategic_logic": {
    "customer_condition": "Low visible product prices",
    "behavior_change": "Customers outsource logistics work",
    "pricing_driver": "Fulfillment difficulty band",
    "billing_change": "Larger baskets pay more",
    "financial_outcome": "Preserve low-price perception",
    "dominant_causal_chain": [
      "Low visible product prices",
      "Customers outsource logistics work",
      "Fulfillment difficulty band",
      "Larger baskets pay more",
      "Preserve low-price perception"
    ],
    "main_assumption": "Customers tolerate fulfillment fees when product prices stay visibly low.",
    "main_failure_risk": "Fees feel hidden instead of earned by logistics work.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  }
}
```

## 5. Decision Alternatives

```json
{
  "case_id": "ikea-nl-delivery-fulfillment-pricing",
  "decision_alternatives": [
    {
      "option": "Earlier landed cost estimate",
      "pricing_move": "Show estimated fulfillment fee earlier in the shopping journey.",
      "expected_effect": "Reduces checkout surprise and increases price certainty.",
      "trade_off": "May reduce basket continuation if high delivery fees become salient too early.",
      "leading_indicator": "Checkout abandonment after delivery fee reveal."
    },
    {
      "option": "Member fulfillment benefit",
      "pricing_move": "Tie clearer delivery or pickup discounts to IKEA Family membership.",
      "expected_effect": "Increases membership signups and repeat purchase tracking.",
      "trade_off": "May reduce fulfillment service margin.",
      "leading_indicator": "IKEA Family uptake tied to delivery discount usage."
    },
    {
      "option": "Delivery threshold framing",
      "pricing_move": "Offer delivery discount or clearer service bands above selected basket thresholds.",
      "expected_effect": "Encourages basket building and improves perceived fairness.",
      "trade_off": "Can create margin leakage on bulky low-margin baskets.",
      "leading_indicator": "Average basket value and fulfillment fee as percentage of basket value."
    }
  ]
}
```

## 6. Reasoning Error Check

```json
{
  "case_id": "ikea-nl-delivery-fulfillment-pricing",
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case may overclaim that separated fulfillment pricing preserves IKEA's low-price image.",
      "case_specific_check": "Is low-price perception driven by separated delivery fees, or mainly by product design, scale, store format, and brand memory?",
      "evidence_needed": "Customer perception data comparing product price salience and final landed cost perception.",
      "failure_signal": "Customers increasingly describe IKEA as expensive after delivery fees are revealed."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Customers may not perceive fulfillment work as separately valuable even if it has real operational cost.",
      "case_specific_check": "Do customers see delivery and room-of-choice fees as earned logistics value or as hidden charges?",
      "evidence_needed": "Complaint analysis, delivery option conversion, and willingness-to-pay evidence for service levels.",
      "failure_signal": "Higher abandonment or complaints at the delivery option step."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "The model depends on customers accepting unbundled fulfillment fees.",
      "case_specific_check": "What happens if competitors offer clearer all-in delivery pricing?",
      "evidence_needed": "Competitor landed-cost comparison and conversion impact of all-in pricing.",
      "failure_signal": "Customers shift to competitors with simpler or more predictable delivery pricing."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Improvements such as earlier landed cost visibility may reduce checkout surprise but also expose fees earlier.",
      "case_specific_check": "Does earlier fee visibility improve trust without reducing basket completion?",
      "evidence_needed": "A/B test of earlier landed cost estimate versus checkout-only fee reveal.",
      "failure_signal": "Lower add-to-cart or basket continuation after early delivery estimate."
    }
  ]
}
```
