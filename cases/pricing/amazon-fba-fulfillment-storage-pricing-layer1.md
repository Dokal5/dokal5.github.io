# Case Insight Brief

Company:
Amazon FBA

Case ID:
amazon-fba-fulfillment-storage-pricing

Pricing model:
Fulfillment and inventory storage fee matrix based on product size tier, shipping weight, storage volume, season, and inventory age.

Primary insight:
Amazon FBA converts operational burden into a seller-facing fee matrix, so sellers pay more when products become harder to pick, pack, ship, store, or keep in inventory.

What is monetized:
Amazon monetizes outsourced fulfillment work and inventory capacity: picking, packing, shipping, handling, customer service, returns handling, warehouse space, and long-duration inventory occupation.

How users are segmented:
Sellers are segmented by product size tier, shipping weight, apparel or non-apparel classification, storage volume, season, and inventory age.

What drives price differences:
Fulfillment and storage burden by product size, shipping weight, cubic-foot storage volume, peak season, and inventory age.

Why this pricing works:
The hypothesized logic is that sellers accept operationally driven fees when Amazon converts logistics complexity into Prime-ready fulfillment, customer service, and storage capacity, but the same matrix pushes sellers to redesign products, packaging, and inventory velocity.

Where friction appears:
Sellers may underestimate the margin effect of crossing size tiers, weight bands, Q4 storage rates, or aged inventory thresholds before those fees hit their settlement economics.

Where risk appears:
The pricing structure can feel unpredictable when small packaging, seasonality, or slow inventory movement creates a disproportionate fee increase.

Structural weakness:
The model aligns Amazon fees with operational burden, but it can punish low-velocity or bulky products in ways sellers may not fully price into their retail margin.

Student 10-second takeaway:
The seller's bill changes when the same product becomes larger, heavier, slower to sell, more space-consuming, or stored during higher-capacity-pressure periods.

Pricing architecture note:
Public pricing structure reviewed May 3, 2026.

Scope:
FBA fulfillment fee, monthly inventory storage fee, aged inventory surcharge exposure, manual verification required.

Out of scope:
Referral fees, seller subscription fees, advertising fees, full marketplace commission, full seller P&L, returns processing fees, removal and disposal fees, inbound placement service fees. These may be mentioned as adjacent fees, but they are not the primary case logic.

# Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "case_type": "logistics",
  "evidence_level": "observed",
  "pricing_model": "Fulfillment and inventory storage fee matrix based on product size tier, shipping weight, storage volume, season, and inventory age",
  "value_metric": "Operational burden created by each seller product inside Amazon fulfillment and storage infrastructure",
  "segmentation_type": "Product size tier, shipping weight, apparel classification, cubic-foot storage volume, season, and inventory age",
  "tiers": [
    "Small standard",
    "Large standard",
    "Large bulky",
    "Extra-large 0 to 50 lb",
    "Extra-large 50+ to 70 lb",
    "Extra-large 70+ to 150 lb",
    "Extra-large 150+ lb"
  ],
  "segments": [
    "Non-apparel products",
    "Apparel products",
    "Low-price FBA products",
    "Standard-size inventory",
    "Oversize inventory",
    "Peak-season storage inventory",
    "Aged inventory"
  ],
  "pricing_logic": "Amazon FBA charges sellers through a fee matrix that maps product size, shipping weight, storage volume, season, and inventory age to fulfillment and storage costs. The seller bill changes when a product crosses operational burden boundaries.",
  "key_driver": "Fulfillment and storage burden by product size, weight, volume, season, and inventory age",
  "drivers": [
    {
      "driver": "Product size tier",
      "type": "asset",
      "pricing_role": "threshold",
      "direction": "increase_revenue",
      "effect": "Larger or bulkier packaged products move into higher fulfillment fee states because they require more handling, space, and shipping capacity.",
      "student_label": "Size tier"
    },
    {
      "driver": "Shipping weight",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Higher shipping weight pushes the product into higher weight bands or per-pound intervals inside the fulfillment fee table.",
      "student_label": "Shipping weight"
    },
    {
      "driver": "Apparel or non-apparel classification",
      "type": "asset",
      "pricing_role": "threshold",
      "direction": "segment_users",
      "effect": "Apparel and non-apparel items can follow different fee tables, changing the fulfillment cost for similar weight bands.",
      "student_label": "Category table"
    },
    {
      "driver": "Storage volume",
      "type": "volume",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Inventory that occupies more cubic feet creates higher monthly storage cost because Amazon charges storage by average daily volume.",
      "student_label": "Cubic feet"
    },
    {
      "driver": "Season",
      "type": "usage",
      "pricing_role": "threshold",
      "direction": "increase_revenue",
      "effect": "Inventory stored during October to December faces higher storage rates than January to September, reflecting peak-season capacity pressure.",
      "student_label": "Peak season"
    },
    {
      "driver": "Inventory age",
      "type": "usage",
      "pricing_role": "threshold",
      "direction": "increase_revenue",
      "effect": "Inventory stored for more than the published aging threshold can trigger aged inventory surcharge exposure, manual verification required.",
      "student_label": "Inventory age"
    }
  ],
  "formula": {
    "expression": "seller_fba_cost = fulfillment_fee_by_size_weight_category + monthly_storage_fee_by_cubic_feet_and_season + aged_inventory_surcharge",
    "variables": [
      {
        "symbol": "fulfillment_fee_by_size_weight_category",
        "label": "Fulfillment fee by size, weight, and category",
        "maps_to_driver": "Product size tier, Shipping weight, Apparel or non-apparel classification"
      },
      {
        "symbol": "monthly_storage_fee_by_cubic_feet_and_season",
        "label": "Monthly storage fee by volume and season",
        "maps_to_driver": "Storage volume, Season"
      },
      {
        "symbol": "aged_inventory_surcharge",
        "label": "Aged inventory surcharge exposure, manual verification required",
        "maps_to_driver": "Inventory age"
      }
    ],
    "output_label": "Seller FBA cost exposure",
    "explanation": "The seller's FBA cost is not a single fee. It is a layered operational-cost matrix where packaged size, weight, volume, season, and inventory aging change the final cost exposure."
  },
  "upgrade_triggers": [
    {
      "trigger": "Product crosses into a larger size tier",
      "from": "Standard-size fulfillment logic",
      "to": "Bulky or extra-large fulfillment logic",
      "why_it_happens": "The packaged product becomes larger or heavier than lower-effort size-tier boundaries.",
      "pricing_effect": "The fulfillment fee moves into a higher operational handling state."
    },
    {
      "trigger": "Shipping weight crosses a weight interval",
      "from": "Lower weight band",
      "to": "Higher weight band or added per-pound interval",
      "why_it_happens": "The product's unit weight or dimensional weight increases past the next published fee interval.",
      "pricing_effect": "The per-unit fulfillment fee increases."
    },
    {
      "trigger": "Inventory is stored during peak season",
      "from": "January to September storage state",
      "to": "October to December storage state",
      "why_it_happens": "Amazon fulfillment-center capacity becomes more constrained during peak retail months.",
      "pricing_effect": "The monthly storage rate per cubic foot increases."
    },
    {
      "trigger": "Inventory becomes aged",
      "from": "Normal inventory storage",
      "to": "Aged inventory surcharge exposure, manual verification required",
      "why_it_happens": "Inventory remains in Amazon fulfillment centers beyond the published aging threshold.",
      "pricing_effect": "Additional monthly surcharge exposure appears on top of normal storage fees."
    }
  ],
  "visualization": {
    "primary_component": "matrix",
    "supporting_components": [
      "fulfillment burden matrix",
      "storage burden matrix",
      "boundary crossing transition rows"
    ],
    "interactive_controls": [
      "size tier selector",
      "shipping weight band selector",
      "storage season toggle",
      "inventory age state selector"
    ],
    "default_view": "Operational burden fee matrix",
    "student_prompt": "Which operational boundary changes the seller's FBA cost exposure?"
  },
  "primary_component": "matrix",
  "decision_core": {
    "what_is_monetized": "Outsourced fulfillment work and inventory capacity inside Amazon's logistics infrastructure.",
    "what_changes_the_bill": "The bill changes when product size tier, shipping weight, category table, storage volume, season, or inventory age changes the seller's operational burden.",
    "who_pays_more_and_why": "Sellers with bulkier, heavier, slower-moving, higher-volume, or peak-season inventory pay more because their products consume more fulfillment labor, shipping capacity, warehouse space, or aging inventory capacity."
  },
  "student_10_second_takeaway": "Amazon FBA fees rise when a seller's product crosses operational burden boundaries in size, weight, storage volume, season, or inventory age.",
  "friction_points": [
    "Small packaging changes can move a product into a higher fee state.",
    "Sellers may focus on retail price and underestimate fulfillment fee exposure.",
    "Peak-season storage rates can change margin expectations even if sales price stays constant.",
    "Slow-moving inventory can become expensive even before another unit is sold."
  ],
  "risks": [
    "Sellers may treat FBA as a simple outsourcing cost rather than a variable operational margin system.",
    "The fee matrix may create late-stage margin surprise when products cross size, weight, or aging boundaries.",
    "Low-velocity products can become structurally unattractive when storage and aged inventory costs accumulate."
  ],
  "structural_weakness": "The model is operationally fairer than flat fulfillment pricing, but it is cognitively difficult for sellers because multiple fee boundaries interact before the seller sees final margin impact.",
  "strategic_insight": "Amazon FBA protects fulfillment capacity by translating operational burden into seller fees, while sellers are pushed to optimize product design, packaging, replenishment timing, and inventory velocity.",
  "strategic_logic": {
    "customer_condition": "Sellers outsource fulfillment",
    "behavior_change": "Inventory enters Amazon logistics",
    "pricing_driver": "Fulfillment and storage burden",
    "billing_change": "Operational burden raises fees",
    "financial_outcome": "Amazon protects fulfillment capacity",
    "dominant_causal_chain": [
      "Sellers outsource fulfillment to Amazon",
      "Products consume handling, shipping, and warehouse capacity",
      "Size, weight, volume, season, and inventory age classify operational burden",
      "Fulfillment and storage fees increase",
      "Amazon protects logistics capacity while sellers optimize product and inventory economics"
    ],
    "main_assumption": "Sellers accept operationally driven FBA fees because Amazon reduces fulfillment complexity and offers access to fulfillment capabilities that would otherwise be costly to manage independently.",
    "main_failure_risk": "Sellers may experience the fee matrix as margin erosion if they do not understand how packaging, storage time, and seasonal capacity charges affect profit.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Packaging boundary optimizer",
      "pricing_move": "Give sellers a clearer pre-shipment tool that shows how packaging dimensions and weight affect FBA fulfillment fee states before inventory is sent.",
      "expected_effect": "Reduces seller surprise and encourages packaging choices that lower operational burden.",
      "trade_off": "May make fee boundaries more salient and increase seller sensitivity to Amazon fulfillment costs.",
      "leading_indicator": "More sellers adjust package dimensions before shipment and fewer support contacts mention unexpected size-tier fees."
    },
    {
      "option": "Inventory aging warning layer",
      "pricing_move": "Show sellers a sharper warning path before inventory crosses aged inventory surcharge exposure, manual verification required.",
      "expected_effect": "Improves inventory velocity decisions and reduces seller frustration with slow-moving stock fees.",
      "trade_off": "May push sellers to discount, remove, or avoid stocking products that Amazon would otherwise store and monetize.",
      "leading_indicator": "Lower aged inventory exposure and higher seller action rate before aging thresholds."
    },
    {
      "option": "Seasonal storage planning guide",
      "pricing_move": "Give sellers a forward-looking storage cost preview that compares January to September storage with October to December peak storage exposure.",
      "expected_effect": "Helps sellers plan Q4 inventory and understand why storage cost changes without a change in product price.",
      "trade_off": "May make sellers more cautious about sending inventory before peak season.",
      "leading_indicator": "Improved inventory planning actions before October and fewer disputes about peak-season storage charges."
    }
  ],
  "bill_examples": [
    {
      "scenario": "Small standard non-apparel product",
      "customer_situation": "A seller sends a compact, lightweight non-apparel item to FBA.",
      "base_price": "Fulfillment fee based on small or large standard size and shipping weight band",
      "pricing_driver": "Product size tier and shipping weight",
      "variable_charge": "The item moves through the fulfillment fee table based on packaged weight and dimensions.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = fulfillment fee by size and weight + any applicable storage cost.",
      "pricing_lesson": "Small products stay in lower operational burden states when packaging remains compact and lightweight."
    },
    {
      "scenario": "Bulky product with higher handling burden",
      "customer_situation": "A seller sends a larger packaged item that falls into bulky or extra-large logic.",
      "base_price": "Fulfillment fee from bulky or extra-large size tier",
      "pricing_driver": "Product size tier and shipping weight",
      "variable_charge": "Per-pound or interval charges can apply above the base tier.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = higher fulfillment fee state + weight interval charge + storage by occupied volume.",
      "pricing_lesson": "A product can become less profitable when physical design pushes it across a size-tier boundary."
    },
    {
      "scenario": "Slow-moving inventory during storage period",
      "customer_situation": "A seller keeps inventory in Amazon fulfillment centers for a long period.",
      "base_price": "Monthly storage fee based on average daily cubic-foot volume",
      "pricing_driver": "Storage volume, season, and inventory age",
      "variable_charge": "Peak-season rates or aged inventory surcharge exposure, manual verification required, can increase storage cost.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = monthly storage by cubic feet and season + aged inventory surcharge exposure, manual verification required, where applicable.",
      "pricing_lesson": "Unsold inventory is not neutral. Time and space become pricing drivers."
    }
  ],
  "boundary_crossing_map": [
    {
      "from_state": "Standard-size fulfillment logic",
      "boundary_condition": "Packaged size or weight crosses into bulky or extra-large classification.",
      "to_state": "Bulky or extra-large fulfillment logic",
      "driver": "Product size tier",
      "billing_effect": "The product enters a higher handling and shipping fee state.",
      "customer_perception_risk": "The seller may see a small packaging change as an unexpectedly large margin hit."
    },
    {
      "from_state": "Lower shipping weight band",
      "boundary_condition": "Unit weight or dimensional weight crosses the next fee interval.",
      "to_state": "Higher shipping weight band",
      "driver": "Shipping weight",
      "billing_effect": "The per-unit fulfillment fee increases.",
      "customer_perception_risk": "The seller may not see the weight interval until after packaging or shipment decisions are already made."
    },
    {
      "from_state": "January to September storage state",
      "boundary_condition": "Inventory is stored during October to December.",
      "to_state": "Peak-season storage state",
      "driver": "Season",
      "billing_effect": "Monthly storage rate per cubic foot increases.",
      "customer_perception_risk": "The seller may interpret the increase as unpredictable unless peak capacity logic is visible."
    },
    {
      "from_state": "Normal storage inventory",
      "boundary_condition": "Inventory remains in fulfillment centers beyond the aged inventory threshold, manual verification required.",
      "to_state": "Aged inventory surcharge exposure, manual verification required",
      "driver": "Inventory age",
      "billing_effect": "Additional monthly surcharge exposure appears on top of normal storage cost.",
      "customer_perception_risk": "Slow-moving inventory can feel like a penalty after the seller has already committed stock to FBA."
    }
  ],
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Packaging boundary optimizer",
      "why_first": "It addresses the clearest controllable seller decision: product packaging and size-tier exposure before inventory is sent.",
      "test_type": "Pre-shipment fee comprehension and packaging simulation test",
      "risk_level": "low",
      "upside_potential": "Lower seller surprise and better packaging decisions.",
      "implementation_complexity": "medium",
      "success_metric": "Higher use of pre-shipment packaging preview and lower unexpected fulfillment-fee support contact rate."
    },
    {
      "priority_rank": 2,
      "option": "Inventory aging warning layer",
      "why_first": "It targets a high-friction margin risk after inventory is already stored.",
      "test_type": "Inventory health alert experiment",
      "risk_level": "medium",
      "upside_potential": "Lower aged inventory exposure and improved seller action before surcharge thresholds.",
      "implementation_complexity": "medium",
      "success_metric": "Lower aged inventory surcharge exposure, manual verification required, and higher removal, discount, or replenishment adjustment action rate."
    },
    {
      "priority_rank": 3,
      "option": "Seasonal storage planning guide",
      "why_first": "It improves seasonal planning but may change seller inventory behavior before peak season.",
      "test_type": "Storage cost preview and Q4 planning experiment",
      "risk_level": "medium",
      "upside_potential": "Better Q4 inventory planning and fewer peak storage fee disputes.",
      "implementation_complexity": "low",
      "success_metric": "Higher pre-October storage planning engagement and fewer support contacts about peak-season storage charges."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "Assuming that Amazon's fee matrix directly causes better seller behavior without evidence.",
      "case_specific_check": "Separate observed fee structure from hypothesized seller optimization behavior.",
      "evidence_needed": "Seller behavior data showing packaging changes, inventory velocity changes, or reduced aged inventory after fee visibility improvements.",
      "failure_signal": "Sellers pay the fees but do not change product design, packaging, or inventory behavior."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Treating FBA fees as simple cost recovery rather than a designed pricing architecture that also guides seller behavior.",
      "case_specific_check": "Check whether the analysis links each fee to a visible operational burden and seller decision point.",
      "evidence_needed": "Fee table structure, capacity logic, and seller decision paths before shipment and inventory aging.",
      "failure_signal": "The case becomes a fee list rather than a pricing mechanism case."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "Missing the non-linear effect of crossing size, weight, seasonal, or aging boundaries.",
      "case_specific_check": "Use boundary examples rather than only average fee statements.",
      "evidence_needed": "Examples of products moving between size tiers, storage seasons, or inventory age states.",
      "failure_signal": "Students think FBA cost changes smoothly when the actual pricing architecture contains thresholds."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Suggesting seller-facing clarity improvements without recognizing that transparency can increase fee salience and seller resistance.",
      "case_specific_check": "Every decision alternative must include a trade off.",
      "evidence_needed": "A/B test or support data showing whether visibility reduces confusion without increasing avoidance of FBA.",
      "failure_signal": "Better explanation increases seller concern without improving operational decisions."
    }
  ]
}
```

# Render Instruction

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "render_goal": "Show how Amazon FBA turns fulfillment and storage burden into fee matrix states that change seller cost exposure.",
  "primary_component": "matrix",
  "secondary_components": [
    "strategic logic strip",
    "bill examples",
    "boundary crossing map",
    "decision priority table",
    "reasoning stress test"
  ],
  "first_screen_priority": [
    "pricing artifact",
    "decision_core",
    "key_driver"
  ],
  "interactive_controls": [
    "size tier selector",
    "shipping weight band selector",
    "storage season toggle",
    "inventory age state selector"
  ],
  "avoid": [
    "turning the case into an Amazon seller fee encyclopedia",
    "including referral fees, advertising fees, seller subscription fees, returns processing fees, removal fees, or inbound placement service fees as primary logic",
    "inventing exact bill amounts in examples",
    "using the matrix as a feature comparison table"
  ],
  "failure_modes": [
    "The learner cannot see that product size and shipping weight jointly affect fulfillment fees.",
    "The learner cannot see that storage volume, season, and inventory age jointly affect storage burden.",
    "The page drifts from FBA fulfillment and storage into general marketplace economics.",
    "Decision priority options stop matching the approved decision alternatives."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "primary_component",
    "bill_examples",
    "boundary_crossing_map",
    "decision_alternatives",
    "decision_priority",
    "reasoning_error_check"
  ]
}
```

# Strategic Logic

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "strategic_logic": {
    "customer_condition": "Sellers outsource fulfillment",
    "behavior_change": "Inventory enters Amazon logistics",
    "pricing_driver": "Fulfillment and storage burden",
    "billing_change": "Operational burden raises fees",
    "financial_outcome": "Amazon protects fulfillment capacity",
    "dominant_causal_chain": [
      "Sellers outsource fulfillment to Amazon",
      "Products consume handling, shipping, and warehouse capacity",
      "Size, weight, volume, season, and inventory age classify operational burden",
      "Fulfillment and storage fees increase",
      "Amazon protects logistics capacity while sellers optimize product and inventory economics"
    ],
    "main_assumption": "Sellers accept operationally driven FBA fees because Amazon reduces fulfillment complexity and offers access to fulfillment capabilities that would otherwise be costly to manage independently.",
    "main_failure_risk": "Sellers may experience the fee matrix as margin erosion if they do not understand how packaging, storage time, and seasonal capacity charges affect profit.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  }
}
```

# Decision Alternatives

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "decision_alternatives": [
    {
      "option": "Packaging boundary optimizer",
      "pricing_move": "Give sellers a clearer pre-shipment tool that shows how packaging dimensions and weight affect FBA fulfillment fee states before inventory is sent.",
      "expected_effect": "Reduces seller surprise and encourages packaging choices that lower operational burden.",
      "trade_off": "May make fee boundaries more salient and increase seller sensitivity to Amazon fulfillment costs.",
      "leading_indicator": "More sellers adjust package dimensions before shipment and fewer support contacts mention unexpected size-tier fees."
    },
    {
      "option": "Inventory aging warning layer",
      "pricing_move": "Show sellers a sharper warning path before inventory crosses aged inventory surcharge exposure, manual verification required.",
      "expected_effect": "Improves inventory velocity decisions and reduces seller frustration with slow-moving stock fees.",
      "trade_off": "May push sellers to discount, remove, or avoid stocking products that Amazon would otherwise store and monetize.",
      "leading_indicator": "Lower aged inventory exposure and higher seller action rate before aging thresholds."
    },
    {
      "option": "Seasonal storage planning guide",
      "pricing_move": "Give sellers a forward-looking storage cost preview that compares January to September storage with October to December peak storage exposure.",
      "expected_effect": "Helps sellers plan Q4 inventory and understand why storage cost changes without a change in product price.",
      "trade_off": "May make sellers more cautious about sending inventory before peak season.",
      "leading_indicator": "Improved inventory planning actions before October and fewer disputes about peak-season storage charges."
    }
  ]
}
```

# Bill Examples

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "bill_examples": [
    {
      "scenario": "Small standard non-apparel product",
      "customer_situation": "A seller sends a compact, lightweight non-apparel item to FBA.",
      "base_price": "Fulfillment fee based on small or large standard size and shipping weight band",
      "pricing_driver": "Product size tier and shipping weight",
      "variable_charge": "The item moves through the fulfillment fee table based on packaged weight and dimensions.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = fulfillment fee by size and weight + any applicable storage cost.",
      "pricing_lesson": "Small products stay in lower operational burden states when packaging remains compact and lightweight."
    },
    {
      "scenario": "Bulky product with higher handling burden",
      "customer_situation": "A seller sends a larger packaged item that falls into bulky or extra-large logic.",
      "base_price": "Fulfillment fee from bulky or extra-large size tier",
      "pricing_driver": "Product size tier and shipping weight",
      "variable_charge": "Per-pound or interval charges can apply above the base tier.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = higher fulfillment fee state + weight interval charge + storage by occupied volume.",
      "pricing_lesson": "A product can become less profitable when physical design pushes it across a size-tier boundary."
    },
    {
      "scenario": "Slow-moving inventory during storage period",
      "customer_situation": "A seller keeps inventory in Amazon fulfillment centers for a long period.",
      "base_price": "Monthly storage fee based on average daily cubic-foot volume",
      "pricing_driver": "Storage volume, season, and inventory age",
      "variable_charge": "Peak-season rates or aged inventory surcharge exposure, manual verification required, can increase storage cost.",
      "discount_or_adjustment": "none",
      "final_bill": "FBA cost exposure = monthly storage by cubic feet and season + aged inventory surcharge exposure, manual verification required, where applicable.",
      "pricing_lesson": "Unsold inventory is not neutral. Time and space become pricing drivers."
    }
  ]
}
```

# Boundary Crossing Map

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "boundary_crossing_map": [
    {
      "from_state": "Standard-size fulfillment logic",
      "boundary_condition": "Packaged size or weight crosses into bulky or extra-large classification.",
      "to_state": "Bulky or extra-large fulfillment logic",
      "driver": "Product size tier",
      "billing_effect": "The product enters a higher handling and shipping fee state.",
      "customer_perception_risk": "The seller may see a small packaging change as an unexpectedly large margin hit."
    },
    {
      "from_state": "Lower shipping weight band",
      "boundary_condition": "Unit weight or dimensional weight crosses the next fee interval.",
      "to_state": "Higher shipping weight band",
      "driver": "Shipping weight",
      "billing_effect": "The per-unit fulfillment fee increases.",
      "customer_perception_risk": "The seller may not see the weight interval until after packaging or shipment decisions are already made."
    },
    {
      "from_state": "January to September storage state",
      "boundary_condition": "Inventory is stored during October to December.",
      "to_state": "Peak-season storage state",
      "driver": "Season",
      "billing_effect": "Monthly storage rate per cubic foot increases.",
      "customer_perception_risk": "The seller may interpret the increase as unpredictable unless peak capacity logic is visible."
    },
    {
      "from_state": "Normal storage inventory",
      "boundary_condition": "Inventory remains in fulfillment centers beyond the aged inventory threshold, manual verification required.",
      "to_state": "Aged inventory surcharge exposure, manual verification required",
      "driver": "Inventory age",
      "billing_effect": "Additional monthly surcharge exposure appears on top of normal storage cost.",
      "customer_perception_risk": "Slow-moving inventory can feel like a penalty after the seller has already committed stock to FBA."
    }
  ]
}
```

# Decision Priority

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Packaging boundary optimizer",
      "why_first": "It addresses the clearest controllable seller decision: product packaging and size-tier exposure before inventory is sent.",
      "test_type": "Pre-shipment fee comprehension and packaging simulation test",
      "risk_level": "low",
      "upside_potential": "Lower seller surprise and better packaging decisions.",
      "implementation_complexity": "medium",
      "success_metric": "Higher use of pre-shipment packaging preview and lower unexpected fulfillment-fee support contact rate."
    },
    {
      "priority_rank": 2,
      "option": "Inventory aging warning layer",
      "why_first": "It targets a high-friction margin risk after inventory is already stored.",
      "test_type": "Inventory health alert experiment",
      "risk_level": "medium",
      "upside_potential": "Lower aged inventory exposure and improved seller action before surcharge thresholds.",
      "implementation_complexity": "medium",
      "success_metric": "Lower aged inventory surcharge exposure, manual verification required, and higher removal, discount, or replenishment adjustment action rate."
    },
    {
      "priority_rank": 3,
      "option": "Seasonal storage planning guide",
      "why_first": "It improves seasonal planning but may change seller inventory behavior before peak season.",
      "test_type": "Storage cost preview and Q4 planning experiment",
      "risk_level": "medium",
      "upside_potential": "Better Q4 inventory planning and fewer peak storage fee disputes.",
      "implementation_complexity": "low",
      "success_metric": "Higher pre-October storage planning engagement and fewer support contacts about peak-season storage charges."
    }
  ]
}
```

# Reasoning Error Check

```json
{
  "case_id": "amazon-fba-fulfillment-storage-pricing",
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "Assuming that Amazon's fee matrix directly causes better seller behavior without evidence.",
      "case_specific_check": "Separate observed fee structure from hypothesized seller optimization behavior.",
      "evidence_needed": "Seller behavior data showing packaging changes, inventory velocity changes, or reduced aged inventory after fee visibility improvements.",
      "failure_signal": "Sellers pay the fees but do not change product design, packaging, or inventory behavior."
    },
    {
      "error_type": "value_price_confusion",
      "risk_statement": "Treating FBA fees as simple cost recovery rather than a designed pricing architecture that also guides seller behavior.",
      "case_specific_check": "Check whether the analysis links each fee to a visible operational burden and seller decision point.",
      "evidence_needed": "Fee table structure, capacity logic, and seller decision paths before shipment and inventory aging.",
      "failure_signal": "The case becomes a fee list rather than a pricing mechanism case."
    },
    {
      "error_type": "missing_boundary_conditions",
      "risk_statement": "Missing the non-linear effect of crossing size, weight, seasonal, or aging boundaries.",
      "case_specific_check": "Use boundary examples rather than only average fee statements.",
      "evidence_needed": "Examples of products moving between size tiers, storage seasons, or inventory age states.",
      "failure_signal": "Students think FBA cost changes smoothly when the actual pricing architecture contains thresholds."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "Suggesting seller-facing clarity improvements without recognizing that transparency can increase fee salience and seller resistance.",
      "case_specific_check": "Every decision alternative must include a trade off.",
      "evidence_needed": "A/B test or support data showing whether visibility reduces confusion without increasing avoidance of FBA.",
      "failure_signal": "Better explanation increases seller concern without improving operational decisions."
    }
  ]
}
```
