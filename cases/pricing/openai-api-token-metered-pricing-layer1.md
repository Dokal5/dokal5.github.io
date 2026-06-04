# OpenAI API Token-Metered Pricing Layer 1

- Status: Implementation Ready
- Scope: Layer 1 analytical brief for production case rendering
- Case: OpenAI API token-metered pricing
- Case ID: openai-api-token-metered-pricing
- File slug: openai-api-token-metered-pricing
- Source page: `openai-api-token-metered-pricing.html`
- Reviewed: 2026-06-04
- Production status: Promoted through `case-library.js` after explicit production promotion review

## Brain Lookup

Candidate:
OpenAI API token-metered pricing

Reviewed date:
2026-06-04

Official artifact:
- https://developers.openai.com/api/docs/pricing
- https://openai.com/api/pricing/
- https://developers.openai.com/api/docs/guides/batch

Related cases:
- `aws-reserved-instances-savings-plans`: Related because both cases expose infrastructure consumption and processing choice as pricing drivers, while AWS adds commitment coverage and OpenAI adds token and processing-tier meters.
- `shopify-transaction-platform-pricing`: Related because both cases monetize platform activity flowing through an infrastructure layer rather than only access to the platform.
- `hp-instant-ink-page-count-subscription-pricing`: Related because both cases translate use into a countable billing unit, but OpenAI has no fixed monthly allowance in the core text/model API scope.
- `monday-seat-based-work-management-pricing`: Related because both cases show price-performance segmentation, though monday.com uses user/tier packaging while OpenAI primarily uses model choice and token consumption.

Relevant pricing concepts:
- Token meter: input tokens, cached input tokens, and output tokens are separate billing categories.
- Model choice: model selection changes the per-token rate and therefore changes the effective bill for the same usage shape.
- Output intensity: longer or more expensive generated output can dominate the bill because output tokens are priced separately from input tokens.
- Cached input discount: repeated context can be charged differently from uncached input, making context reuse a pricing-relevant behavior.
- Processing tier: Standard, Batch, Flex, Priority, and regional processing options change price or performance tradeoffs where officially supported by the model and endpoint and where the workload timing fits.
- Tool boundary: tool calls, storage, containers, and search can add non-token or token-adjacent charges, but remain boundary notes in this case.
- Cost-control layer: budgets, usage dashboard, and project restrictions help customers manage consumption exposure.

Likely component pattern:
`driver_logic`

Primary component justification:
`driver_logic` is selected because the bill is driven by variable usage and rate modifiers: model choice, input volume, cached input reuse, output volume, processing tier, and tool usage. A `matrix` could compare model families and token categories, but the teaching goal is to show how bill movement follows drivers rather than to reproduce a full price table.

Teaching sequence fit:
This case extends the pricing library into high-change AI infrastructure pricing. It teaches a modern usage-based model where the buyer must manage not just volume, but token mix, output length, context reuse, workload urgency, and tool boundaries.

Reasoning novelty:
- The new insight is that API pricing can separate computation into directional meters: input, cached input, output, and service tier.
- It challenges the simple idea that "more usage means more spend" by showing that the same broad workload can produce different bills depending on model choice, output length, caching, and processing mode.
- It introduces cached-context reuse as a pricing-relevant behavior rather than only an engineering optimization.
- It is not redundant with existing cases because the dominant bill driver is neither seats, delivery burden, page allowance, nor committed usage; it is a multi-variable computation meter.

Evidence confidence:
HIGH

Mechanism certainty:
HIGH

Mechanism uncertainty:
- The published pricing structure is observable, but the strategic reasons for input/output asymmetry, cached-input discounts, and processing-tier design are analytical hypotheses.
- Model availability and prices change quickly, so the case should be rechecked within 30 days and exact price examples should be recaptured from official OpenAI pricing sources within 7 days before any production promotion.
- Tool, image, realtime, transcription, and enterprise pricing are official boundary categories but are not the core mechanism in this case.

Evidence gaps:
- Screenshot artifact captured from the official OpenAI developer pricing docs; evidence status is `captured`.
- Official pages support observable pricing categories and Batch logic, but do not prove OpenAI internal cost structure or strategic intent.

Lookup status:
READY_FOR_LAYER_1

## Case Insight Brief

Company:
OpenAI

Case ID:
openai-api-token-metered-pricing

Pricing model:
Token-metered API pricing with separate input, cached input, output, model-choice, processing-tier, and tool-boundary billing layers.

Primary insight:
OpenAI API pricing makes the customer bill move with both the amount of computation consumed and the urgency or mode in which that computation is processed.

What is monetized:
API computation consumed through model calls, primarily measured by input tokens, cached input tokens, output tokens, processing tier, and tool usage boundaries.

How users are segmented:
Customers are segmented by model choice, token mix, context reuse, synchronous or asynchronous workload needs, processing tier, and optional tool usage.

What drives price differences:
Model-level token rates, input volume, cached input reuse, output length, processing tier, and tool usage change the bill.

Why this pricing works:
The hypothesized logic is that customers can trade off capability, latency, urgency, and cost by choosing model and processing modes while OpenAI aligns revenue with computation consumed.

Where friction appears:
Customers must estimate token volume, output length, cacheability, processing urgency, and tool usage before the final bill is obvious.

Where risk appears:
The structure can create bill surprise when output grows, caching assumptions fail, workloads use tools, or developers confuse ChatGPT subscriptions with separately billed API usage.

Structural weakness:
The model is precise and flexible, but it can be hard for customers to forecast because token mix, model choice, output behavior, and processing tier interact.

Student 10-second takeaway:
The bill changes when model choice, input volume, cached context reuse, output length, processing tier, or tool usage changes the amount and urgency of API computation consumed.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "openai-api-token-metered-pricing",
  "case_type": "other",
  "evidence_level": "observed",
  "reviewed_at": "2026-06-04",
  "case_status": "current",
  "freshness_policy": {
    "review_interval_days": 30,
    "stale_after_days": 30,
    "historical_rule": "Mark historical if OpenAI no longer presents token-metered API pricing with separate input, cached input, output, and processing-tier logic as current public evidence."
  },
  "pricing_model": "Token-metered API pricing with separate input, cached input, output, model-choice, processing-tier, and tool-boundary billing layers.",
  "value_metric": "API computation consumed, primarily measured through input tokens, cached input tokens, output tokens, and processing tier.",
  "segmentation_type": "Model choice, token category, context reuse, workload urgency, processing mode, and optional tool usage.",
  "tiers": [
    "Standard processing",
    "Batch processing",
    "Flex processing",
    "Priority processing",
    "Regional processing"
  ],
  "segments": [
    "Synchronous API workloads",
    "Asynchronous batch workloads",
    "Cost-sensitive flexible workloads",
    "Latency-sensitive priority workloads",
    "Tool-using applications"
  ],
  "pricing_logic": "OpenAI API pricing separates model usage into input tokens, cached input tokens, and output tokens, then changes the effective bill through model choice, processing tier, and tool or storage boundaries where used.",
  "key_driver": "API computation consumed",
  "drivers": [
    {
      "driver": "Model choice",
      "type": "add_on",
      "pricing_role": "multiplier",
      "direction": "segment_users",
      "effect": "The selected model sets the per-token rate for the workload.",
      "student_label": "Model"
    },
    {
      "driver": "Input token volume",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "More uncached input tokens increase the input portion of the bill.",
      "student_label": "Input"
    },
    {
      "driver": "Cached input reuse",
      "type": "usage",
      "pricing_role": "discount",
      "direction": "reduce_friction",
      "effect": "Repeated context can qualify for cached input pricing, reducing the charge for that input category where supported.",
      "student_label": "Cached input"
    },
    {
      "driver": "Output token volume",
      "type": "usage",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Longer generated responses increase the output portion of the bill.",
      "student_label": "Output"
    },
    {
      "driver": "Processing tier",
      "type": "add_on",
      "pricing_role": "multiplier",
      "direction": "segment_users",
      "effect": "Batch, Flex, Standard, Priority, and regional processing choices change the price-performance or timing tradeoff where officially supported by the model and endpoint and where workload timing fits.",
      "student_label": "Processing mode"
    },
    {
      "driver": "Tool usage boundary",
      "type": "add_on",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Built-in tools, file storage, web search, or containers can add charges beyond core text tokens.",
      "student_label": "Tools"
    }
  ],
  "formula": {
    "expression": "API bill = model_rate(input_tokens + cached_input_tokens + output_tokens) adjusted by processing_tier + tool_boundary_charges",
    "variables": [
      {
        "symbol": "M",
        "label": "Model choice",
        "maps_to_driver": "Model choice"
      },
      {
        "symbol": "I",
        "label": "Input token volume",
        "maps_to_driver": "Input token volume"
      },
      {
        "symbol": "C",
        "label": "Cached input reuse",
        "maps_to_driver": "Cached input reuse"
      },
      {
        "symbol": "O",
        "label": "Output token volume",
        "maps_to_driver": "Output token volume"
      },
      {
        "symbol": "P",
        "label": "Processing tier",
        "maps_to_driver": "Processing tier"
      },
      {
        "symbol": "T",
        "label": "Tool usage boundary",
        "maps_to_driver": "Tool usage boundary"
      }
    ],
    "output_label": "API usage bill",
    "explanation": "The formula is conceptual: exact rates depend on the model and officially supported processing mode reviewed on the pricing page."
  },
  "upgrade_triggers": [
    {
      "trigger": "Higher-priced model selected",
      "from": "Lower-cost model usage",
      "to": "Higher-rate model usage",
      "why_it_happens": "The workload needs more capability, reasoning, context, or performance than the lower-priced model provides.",
      "pricing_effect": "The same token shape is charged at a higher model-specific rate."
    },
    {
      "trigger": "Output grows",
      "from": "Short generated output",
      "to": "Longer generated output",
      "why_it_happens": "The application asks for longer, more detailed, or multi-step responses.",
      "pricing_effect": "Output token charges increase with generated length."
    },
    {
      "trigger": "Context becomes cacheable",
      "from": "Uncached input",
      "to": "Cached input",
      "why_it_happens": "Repeated context is reused in a way that qualifies for cached input pricing where supported.",
      "pricing_effect": "The input portion can be charged at the cached input rate instead of the uncached input rate."
    },
    {
      "trigger": "Workload moves to asynchronous processing",
      "from": "Standard synchronous processing",
      "to": "Batch processing",
      "why_it_happens": "The job uses a model and endpoint that support Batch and can tolerate delayed asynchronous completion.",
      "pricing_effect": "Batch can be a lower-cost asynchronous path only where the model and endpoint support Batch and the workload can tolerate delayed completion."
    },
    {
      "trigger": "Tool boundary crossed",
      "from": "Core model token usage",
      "to": "Model usage plus tool, storage, search, or container charges",
      "why_it_happens": "The application uses built-in tools or storage-backed workflows.",
      "pricing_effect": "Non-token or token-adjacent charges can be added to model token charges."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [
      "bill_examples",
      "boundary_crossing_map",
      "decision_priority"
    ],
    "interactive_controls": [
      "Model choice",
      "Input token volume",
      "Cached input reuse",
      "Output token volume",
      "Processing tier"
    ],
    "default_view": "Text/model API token-metering logic",
    "student_prompt": "Change one driver and explain how the API bill moves."
  },
  "pricing_artifact": {
    "source_url": "https://developers.openai.com/api/docs/pricing",
    "local_screenshot_path": "../../assets/pricing-artifacts/openai-api-token-metered-pricing/openai-api-pricing-page-2026-06-04.png",
    "artifact_date": "2026-06-04",
    "source_screenshot_date": "2026-06-04",
    "source_reviewed_at": "2026-06-04",
    "artifact_type": "official_pricing_page_screenshot",
    "capture_status": "captured",
    "alt_text": "Screenshot of the official OpenAI API pricing documentation showing token pricing categories and model rates reviewed on 2026-06-04."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "API computation consumed through model calls, primarily measured by token category and processing mode.",
    "what_changes_the_bill": "Model choice, input token volume, cached input reuse, output token volume, processing tier, and tool usage boundaries.",
    "who_pays_more_and_why": "Customers using higher-priced models, more uncached input, longer output, more urgent processing, or additional tools pay more because they consume more or higher-priority API capacity."
  },
  "student_10_second_takeaway": "The bill changes when model choice, input volume, cached context reuse, output length, processing tier, or tool usage changes the amount and urgency of API computation consumed.",
  "friction_points": [
    "Developers must estimate token mix before spend is easy to forecast.",
    "Output length can dominate spend even when input volume looks modest.",
    "Caching benefits depend on whether repeated context qualifies for cached input pricing.",
    "Processing-tier choices require teams to decide whether immediacy is worth the price-performance tradeoff.",
    "Tool usage can make the bill extend beyond core model token charges."
  ],
  "risks": [
    "Customers may confuse ChatGPT subscriptions with separately billed API usage.",
    "Applications may create bill surprise if output length grows unnoticed.",
    "A full model price table can distract from the mechanism and become stale quickly.",
    "Interpreting price differences as internal cost proof would overclaim beyond public evidence."
  ],
  "structural_weakness": "The pricing architecture is granular and adaptable, but customers must forecast multiple interacting drivers before the final bill is intuitive.",
  "strategic_insight": "OpenAI API pricing works as a flexible computation meter: it lets customers choose capability, urgency, and cost posture while tying revenue to observable API consumption.",
  "strategic_logic": {
    "customer_condition": "Variable AI workloads",
    "behavior_change": "Choose model and urgency",
    "pricing_driver": "API computation consumed",
    "billing_change": "Token and tier charges change",
    "financial_outcome": "Revenue tracks workload shape",
    "dominant_causal_chain": [
      "Variable AI workloads",
      "Choose model and urgency",
      "API computation consumed",
      "Token and tier charges change",
      "Revenue tracks workload shape"
    ],
    "main_assumption": "Customers can understand and manage token mix, output length, caching, and processing tier well enough to choose their preferred price-performance tradeoff.",
    "main_failure_risk": "If developers cannot forecast token and tool usage, the pricing system can feel unpredictable even when the billing units are explicit.",
    "evidence_status": "hypothesized",
    "visual_strip": {
      "enabled": true,
      "layout": "canonical_five_step_strip"
    }
  },
  "decision_alternatives": [
    {
      "option": "Token mix estimator",
      "pricing_move": "Make input, cached input, and output token exposure more visible before customers run production workloads.",
      "expected_effect": "Reduce bill surprise and improve model selection discipline.",
      "trade_off": "Making cost drivers more salient may slow adoption for customers who prefer simple experimentation.",
      "leading_indicator": "More customers set budgets or choose lower-cost models before production launch."
    },
    {
      "option": "Batch eligibility nudge",
      "pricing_move": "Surface Batch as a potentially lower-cost asynchronous path only for workloads whose model and endpoint support Batch and that can tolerate delayed completion.",
      "expected_effect": "Move asynchronous workloads into a pricing mode that better matches urgency.",
      "trade_off": "Customers may overuse Batch for jobs that actually need interactive latency or cannot tolerate delayed completion.",
      "leading_indicator": "Higher share of eligible evaluation, classification, and bulk jobs processed through Batch without support escalation."
    },
    {
      "option": "Cached context education",
      "pricing_move": "Explain cached input pricing with practical examples of repeated system prompts or reusable context.",
      "expected_effect": "Encourage customers to design reusable context patterns where appropriate.",
      "trade_off": "Customers may over-optimize prompts for caching even when product quality or simplicity matters more.",
      "leading_indicator": "A higher share of repeated-context workloads show cached input usage without degraded output quality."
    }
  ],
  "bill_examples": [
    {
      "scenario": "Standard uncached text workload",
      "customer_situation": "A developer uses a flagship text model with uncached input and generated output.",
      "base_price": "Example using reviewed gpt-5.5 standard short-context rates: input $5.00 per 1M tokens and output $30.00 per 1M tokens.",
      "pricing_driver": "Input token volume and Output token volume",
      "variable_charge": "1M input tokens plus 1M output tokens.",
      "discount_or_adjustment": "none",
      "final_bill": "Example bill logic: $5.00 input + $30.00 output = $35.00 before any tool or storage charges.",
      "pricing_lesson": "The output side can dominate the bill even when input and output token counts are equal."
    },
    {
      "scenario": "Cached context reuse",
      "customer_situation": "A developer reuses context that qualifies for cached input pricing on the same reviewed model.",
      "base_price": "Example using reviewed gpt-5.5 standard short-context rates: cached input $0.50 per 1M tokens and output $30.00 per 1M tokens.",
      "pricing_driver": "Cached input reuse and Output token volume",
      "variable_charge": "1M cached input tokens plus 1M output tokens.",
      "discount_or_adjustment": "Cached input rate applies where supported.",
      "final_bill": "Example bill logic: $0.50 cached input + $30.00 output = $30.50 before any tool or storage charges.",
      "pricing_lesson": "Caching changes the input portion of the bill, but output length can still drive most spend."
    },
    {
      "scenario": "Batch-eligible asynchronous workload",
      "customer_situation": "A bulk job uses a model and endpoint that support Batch and can tolerate delayed asynchronous completion.",
      "base_price": "Example using reviewed gpt-5.5 Batch short-context rates: input $2.50 per 1M tokens and output $15.00 per 1M tokens.",
      "pricing_driver": "Processing tier",
      "variable_charge": "1M input tokens plus 1M output tokens processed through Batch.",
      "discount_or_adjustment": "Batch processing rate applies only where the model and endpoint support Batch and the workload can tolerate delayed completion.",
      "final_bill": "Example bill logic: $2.50 input + $15.00 output = $17.50 before any tool or storage charges.",
      "pricing_lesson": "Processing urgency changes the price-performance tradeoff only when the model and endpoint support Batch and the workload can tolerate delayed completion."
    }
  ],
  "boundary_crossing_map": [
    {
      "from_state": "Lower-cost model",
      "boundary_condition": "Workload needs higher capability or performance",
      "to_state": "Higher-rate model",
      "driver": "Model choice",
      "billing_effect": "The same broad token shape is charged at a different model-specific rate.",
      "customer_perception_risk": "Customers may think model selection is a quality choice only, not a billing boundary."
    },
    {
      "from_state": "Uncached input",
      "boundary_condition": "Context becomes reusable and eligible for cached input pricing",
      "to_state": "Cached input",
      "driver": "Cached input reuse",
      "billing_effect": "The input portion can be charged at the cached input rate where supported.",
      "customer_perception_risk": "Customers may overestimate savings if the workload is not actually cacheable."
    },
    {
      "from_state": "Short output",
      "boundary_condition": "Prompt or product behavior produces longer generated responses",
      "to_state": "Long output",
      "driver": "Output token volume",
      "billing_effect": "Output charges increase with generated length.",
      "customer_perception_risk": "Users may not notice that response style or verbosity has become a billing driver."
    },
    {
      "from_state": "Standard synchronous job",
      "boundary_condition": "Job can tolerate asynchronous completion",
      "to_state": "Batch job",
      "driver": "Processing tier",
      "billing_effect": "Batch can be a lower-cost asynchronous path only where the model and endpoint support Batch and delayed completion is acceptable.",
      "customer_perception_risk": "Customers may choose the lower-cost tier without recognizing the time-to-completion tradeoff."
    },
    {
      "from_state": "Core model call",
      "boundary_condition": "Application invokes built-in tools, search, files, or containers",
      "to_state": "Model call plus tool boundary",
      "driver": "Tool usage boundary",
      "billing_effect": "Tool, storage, or container charges can be added to token charges.",
      "customer_perception_risk": "The bill may feel surprising if customers budget only for model tokens."
    }
  ],
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Token mix estimator",
      "why_first": "It directly reduces the main forecasting friction without changing prices or requiring customers to change processing mode.",
      "test_type": "Price page or dashboard experiment",
      "risk_level": "low",
      "upside_potential": "Better customer cost comprehension and fewer bill-surprise escalations.",
      "implementation_complexity": "medium",
      "success_metric": "Increase in customers setting budgets or selecting model tiers after viewing token mix guidance."
    },
    {
      "priority_rank": 2,
      "option": "Batch eligibility nudge",
      "why_first": "It is useful after customers understand token mix because it teaches the urgency-for-cost tradeoff.",
      "test_type": "Cohort comparison for eligible asynchronous workloads",
      "risk_level": "medium",
      "upside_potential": "Higher Batch adoption for jobs that do not need immediate responses.",
      "implementation_complexity": "medium",
      "success_metric": "Share of eligible bulk jobs moved to Batch without increased failure or support rate."
    },
    {
      "priority_rank": 3,
      "option": "Cached context education",
      "why_first": "It can improve cost efficiency but requires careful workload understanding to avoid over-optimization.",
      "test_type": "Documentation and example-path test",
      "risk_level": "medium",
      "upside_potential": "More efficient repeated-context workloads.",
      "implementation_complexity": "low",
      "success_metric": "Increase in cached input share for repeated-context use cases without lower task quality."
    }
  ],
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case could imply that published price differences prove OpenAI's internal cost structure.",
      "case_specific_check": "Keep all internal-cost claims out of the page and label strategic logic as hypothesized.",
      "evidence_needed": "Direct OpenAI statement would be needed to discuss internal cost rationale.",
      "failure_signal": "The page says output is priced higher because it costs OpenAI exactly more to produce."
    },
    {
      "error_type": "category_error",
      "risk_statement": "The case could mix API pricing with ChatGPT subscription pricing.",
      "case_specific_check": "Keep ChatGPT subscriptions only as a boundary note and state that API usage is billed separately.",
      "evidence_needed": "Official billing FAQ or pricing page language separating API and ChatGPT billing.",
      "failure_signal": "The case treats ChatGPT Plus, Business, Enterprise, or Edu as API pricing tiers."
    },
    {
      "error_type": "static_thinking",
      "risk_statement": "The case could become stale quickly if it preserves exact model prices as if they are stable.",
      "case_specific_check": "Limit exact prices to dated examples and enforce a 30-day review window.",
      "evidence_needed": "Fresh official pricing check within 7 days before any promotion; if exact prices are not recaptured, remove them and keep driver-based examples only.",
      "failure_signal": "A reader can mistake the case for a current comprehensive model price table."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "The case could present Batch or caching as pure savings without showing timing, eligibility, or product-quality tradeoffs.",
      "case_specific_check": "Every decision alternative must include trade off and leading indicator.",
      "evidence_needed": "Workload-level evidence that lower-cost processing modes fit the use case.",
      "failure_signal": "Customers move latency-sensitive jobs into Batch or over-optimize context for price while harming product behavior."
    }
  ]
}
```

## Render Instruction

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "render_goal": "Help learners see how API spend moves when model choice, token mix, caching, output length, processing tier, and tool boundaries change.",
  "primary_component": "driver_logic",
  "secondary_components": [
    "bill_examples",
    "boundary_crossing_map",
    "decision_priority"
  ],
  "first_screen_priority": [
    "decision_core",
    "freshness_warning",
    "key_driver"
  ],
  "interactive_controls": [
    "Model choice",
    "Input token volume",
    "Cached input reuse",
    "Output token volume",
    "Processing tier"
  ],
  "avoid": [
    "Do not render a full OpenAI model price table.",
    "Do not imply price differences prove internal cost differences.",
    "Do not mix ChatGPT subscription pricing into the API case.",
    "Do not make tool, image, realtime, transcription, or enterprise pricing the core mechanism."
  ],
  "failure_modes": [
    "The page becomes a price table rather than a mechanism case.",
    "The driver logic is hidden behind model catalog details.",
    "Observed pricing structure and hypothesized strategy are not separated.",
    "Boundary notes expand into a full OpenAI product-pricing analysis."
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
    "reasoning_error_check"
  ]
}
```

## Strategic Logic

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "strategic_logic": {
    "customer_condition": "Variable AI workloads",
    "behavior_change": "Choose model and urgency",
    "pricing_driver": "API computation consumed",
    "billing_change": "Token and tier charges change",
    "financial_outcome": "Revenue tracks workload shape",
    "dominant_causal_chain": [
      "Variable AI workloads",
      "Choose model and urgency",
      "API computation consumed",
      "Token and tier charges change",
      "Revenue tracks workload shape"
    ],
    "main_assumption": "Customers can understand and manage token mix, output length, caching, and processing tier well enough to choose their preferred price-performance tradeoff.",
    "main_failure_risk": "If developers cannot forecast token and tool usage, the pricing system can feel unpredictable even when the billing units are explicit.",
    "evidence_status": "hypothesized",
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
  "case_id": "openai-api-token-metered-pricing",
  "decision_alternatives": [
    {
      "option": "Token mix estimator",
      "pricing_move": "Make input, cached input, and output token exposure more visible before customers run production workloads.",
      "expected_effect": "Reduce bill surprise and improve model selection discipline.",
      "trade_off": "Making cost drivers more salient may slow adoption for customers who prefer simple experimentation.",
      "leading_indicator": "More customers set budgets or choose lower-cost models before production launch."
    },
    {
      "option": "Batch eligibility nudge",
      "pricing_move": "Surface Batch as a potentially lower-cost asynchronous path only for workloads whose model and endpoint support Batch and that can tolerate delayed completion.",
      "expected_effect": "Move asynchronous workloads into a pricing mode that better matches urgency.",
      "trade_off": "Customers may overuse Batch for jobs that actually need interactive latency or cannot tolerate delayed completion.",
      "leading_indicator": "Higher share of eligible evaluation, classification, and bulk jobs processed through Batch without support escalation."
    },
    {
      "option": "Cached context education",
      "pricing_move": "Explain cached input pricing with practical examples of repeated system prompts or reusable context.",
      "expected_effect": "Encourage customers to design reusable context patterns where appropriate.",
      "trade_off": "Customers may over-optimize prompts for caching even when product quality or simplicity matters more.",
      "leading_indicator": "A higher share of repeated-context workloads show cached input usage without degraded output quality."
    }
  ]
}
```

## Bill Examples

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "bill_examples": [
    {
      "scenario": "Standard uncached text workload",
      "customer_situation": "A developer uses a flagship text model with uncached input and generated output.",
      "base_price": "Example using reviewed gpt-5.5 standard short-context rates: input $5.00 per 1M tokens and output $30.00 per 1M tokens.",
      "pricing_driver": "Input token volume and Output token volume",
      "variable_charge": "1M input tokens plus 1M output tokens.",
      "discount_or_adjustment": "none",
      "final_bill": "Example bill logic: $5.00 input + $30.00 output = $35.00 before any tool or storage charges.",
      "pricing_lesson": "The output side can dominate the bill even when input and output token counts are equal."
    },
    {
      "scenario": "Cached context reuse",
      "customer_situation": "A developer reuses context that qualifies for cached input pricing on the same reviewed model.",
      "base_price": "Example using reviewed gpt-5.5 standard short-context rates: cached input $0.50 per 1M tokens and output $30.00 per 1M tokens.",
      "pricing_driver": "Cached input reuse and Output token volume",
      "variable_charge": "1M cached input tokens plus 1M output tokens.",
      "discount_or_adjustment": "Cached input rate applies where supported.",
      "final_bill": "Example bill logic: $0.50 cached input + $30.00 output = $30.50 before any tool or storage charges.",
      "pricing_lesson": "Caching changes the input portion of the bill, but output length can still drive most spend."
    },
    {
      "scenario": "Batch-eligible asynchronous workload",
      "customer_situation": "A bulk job uses a model and endpoint that support Batch and can tolerate delayed asynchronous completion.",
      "base_price": "Example using reviewed gpt-5.5 Batch short-context rates: input $2.50 per 1M tokens and output $15.00 per 1M tokens.",
      "pricing_driver": "Processing tier",
      "variable_charge": "1M input tokens plus 1M output tokens processed through Batch.",
      "discount_or_adjustment": "Batch processing rate applies only where the model and endpoint support Batch and the workload can tolerate delayed completion.",
      "final_bill": "Example bill logic: $2.50 input + $15.00 output = $17.50 before any tool or storage charges.",
      "pricing_lesson": "Processing urgency changes the price-performance tradeoff only when the model and endpoint support Batch and the workload can tolerate delayed completion."
    }
  ]
}
```

## Boundary Crossing Map

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "boundary_crossing_map": [
    {
      "from_state": "Lower-cost model",
      "boundary_condition": "Workload needs higher capability or performance",
      "to_state": "Higher-rate model",
      "driver": "Model choice",
      "billing_effect": "The same broad token shape is charged at a different model-specific rate.",
      "customer_perception_risk": "Customers may think model selection is a quality choice only, not a billing boundary."
    },
    {
      "from_state": "Uncached input",
      "boundary_condition": "Context becomes reusable and eligible for cached input pricing",
      "to_state": "Cached input",
      "driver": "Cached input reuse",
      "billing_effect": "The input portion can be charged at the cached input rate where supported.",
      "customer_perception_risk": "Customers may overestimate savings if the workload is not actually cacheable."
    },
    {
      "from_state": "Short output",
      "boundary_condition": "Prompt or product behavior produces longer generated responses",
      "to_state": "Long output",
      "driver": "Output token volume",
      "billing_effect": "Output charges increase with generated length.",
      "customer_perception_risk": "Users may not notice that response style or verbosity has become a billing driver."
    },
    {
      "from_state": "Standard synchronous job",
      "boundary_condition": "Job can tolerate asynchronous completion",
      "to_state": "Batch job",
      "driver": "Processing tier",
      "billing_effect": "Batch can be a lower-cost asynchronous path only where the model and endpoint support Batch and delayed completion is acceptable.",
      "customer_perception_risk": "Customers may choose the lower-cost tier without recognizing the time-to-completion tradeoff."
    },
    {
      "from_state": "Core model call",
      "boundary_condition": "Application invokes built-in tools, search, files, or containers",
      "to_state": "Model call plus tool boundary",
      "driver": "Tool usage boundary",
      "billing_effect": "Tool, storage, or container charges can be added to token charges.",
      "customer_perception_risk": "The bill may feel surprising if customers budget only for model tokens."
    }
  ]
}
```

## Decision Priority

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "decision_priority": [
    {
      "priority_rank": 1,
      "option": "Token mix estimator",
      "why_first": "It directly reduces the main forecasting friction without changing prices or requiring customers to change processing mode.",
      "test_type": "Price page or dashboard experiment",
      "risk_level": "low",
      "upside_potential": "Better customer cost comprehension and fewer bill-surprise escalations.",
      "implementation_complexity": "medium",
      "success_metric": "Increase in customers setting budgets or selecting model tiers after viewing token mix guidance."
    },
    {
      "priority_rank": 2,
      "option": "Batch eligibility nudge",
      "why_first": "It is useful after customers understand token mix because it teaches the urgency-for-cost tradeoff.",
      "test_type": "Cohort comparison for eligible asynchronous workloads",
      "risk_level": "medium",
      "upside_potential": "Higher Batch adoption for jobs that do not need immediate responses.",
      "implementation_complexity": "medium",
      "success_metric": "Share of eligible bulk jobs moved to Batch without increased failure or support rate."
    },
    {
      "priority_rank": 3,
      "option": "Cached context education",
      "why_first": "It can improve cost efficiency but requires careful workload understanding to avoid over-optimization.",
      "test_type": "Documentation and example-path test",
      "risk_level": "medium",
      "upside_potential": "More efficient repeated-context workloads.",
      "implementation_complexity": "low",
      "success_metric": "Increase in cached input share for repeated-context use cases without lower task quality."
    }
  ]
}
```

## Reasoning Error Check

```json
{
  "case_id": "openai-api-token-metered-pricing",
  "reasoning_error_check": [
    {
      "error_type": "causal_overclaim",
      "risk_statement": "The case could imply that published price differences prove OpenAI's internal cost structure.",
      "case_specific_check": "Keep all internal-cost claims out of the page and label strategic logic as hypothesized.",
      "evidence_needed": "Direct OpenAI statement would be needed to discuss internal cost rationale.",
      "failure_signal": "The page says output is priced higher because it costs OpenAI exactly more to produce."
    },
    {
      "error_type": "category_error",
      "risk_statement": "The case could mix API pricing with ChatGPT subscription pricing.",
      "case_specific_check": "Keep ChatGPT subscriptions only as a boundary note and state that API usage is billed separately.",
      "evidence_needed": "Official billing FAQ or pricing page language separating API and ChatGPT billing.",
      "failure_signal": "The case treats ChatGPT Plus, Business, Enterprise, or Edu as API pricing tiers."
    },
    {
      "error_type": "static_thinking",
      "risk_statement": "The case could become stale quickly if it preserves exact model prices as if they are stable.",
      "case_specific_check": "Limit exact prices to dated examples and enforce a 30-day review window.",
      "evidence_needed": "Fresh official pricing check within 7 days before any promotion; if exact prices are not recaptured, remove them and keep driver-based examples only.",
      "failure_signal": "A reader can mistake the case for a current comprehensive model price table."
    },
    {
      "error_type": "no_trade_off",
      "risk_statement": "The case could present Batch or caching as pure savings without showing timing, eligibility, or product-quality tradeoffs.",
      "case_specific_check": "Every decision alternative must include trade off and leading indicator.",
      "evidence_needed": "Workload-level evidence that lower-cost processing modes fit the use case.",
      "failure_signal": "Customers move latency-sensitive jobs into Batch or over-optimize context for price while harming product behavior."
    }
  ]
}
```

## Production Notes And Freshness Boundary

- Do not treat exact example prices as stable evidence beyond the 30-day review window.
- Exact price examples must be recaptured from official OpenAI pricing sources within 7 days before any future production promotion or material update. If they are not recaptured, remove exact prices and keep only driver-based bill examples.
