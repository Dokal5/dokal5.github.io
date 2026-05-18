# Pricing Reasoning Ontology v1

## Purpose

Pricing Reasoning Ontology v1 defines a small reusable vocabulary for comparing pricing cases by causal structure.

It is a Brain-layer reasoning guide. It does not modify production pricing case schema, hidden JSON, public pages, `case-library.js`, database behavior, automation, or build behavior.

The ontology helps the pricing case system move from a case archive toward a reasoning engine by making cross-case questions easier to answer:

- Which cases share the same pricing logic?
- Which cases change the bill in similar ways?
- Which cases transfer similar risk?
- Which cases cross similar commercial boundaries?
- Which cases are useful for the same teaching purpose?

Ontology labels are not industry categories. They describe reusable causal pricing patterns.

## Scope

Use this document during Brain Lookup, Workbench Artifact drafting, case comparison, course alignment, and alignment audit work.

Do not treat this document as a production schema. Selected ontology fields may enter `CASE_SCHEMA.md` later only after the vocabulary has been tested manually across more cases.

## Ontology Primitives

Use six controlled dimensions in v1.

| Primitive | Purpose |
| --- | --- |
| `decision_pattern` | The reusable causal pricing logic behind the case. |
| `pricing_unit` | What the buyer is effectively charged by or through. |
| `bill_trigger` | The condition that changes spend. |
| `risk_transfer_type` | The risk moved from seller to buyer, buyer to seller, or one side of a marketplace to another. |
| `buyer_decision` | The buyer choice created by the pricing architecture. |
| `teaching_use` | The concept the case is best suited to teach. |

## Controlled Vocabulary

### Decision Patterns

| Token | Definition |
| --- | --- |
| `predictability_exchange` | The buyer gives the seller more demand, usage, or revenue predictability in exchange for lower, simpler, or more stable economics. |
| `threshold_trigger` | The bill changes when usage, behavior, or classification crosses a defined allowance, limit, gate, or boundary. |
| `operational_burden_transfer` | Pricing shifts higher cost-to-serve, handling effort, complexity, or operational load to the buyer creating that burden. |
| `fee_visibility_shift` | Pricing changes where a fee is seen, absorbed, displayed, or deducted without necessarily changing the underlying value captured. |
| `platform_activity_capture` | The platform captures value as buyer, seller, merchant, or user activity flows through platform infrastructure. |
| `organization_scale_monetization` | Spend rises as organizational size, collaboration scope, governance needs, or operating complexity expands. |
| `trigger_path_monetization` | One purchase, enrollment, access choice, or usage state moves the buyer into a new monetization path. |
| `service_boundary_pricing` | The bill changes when the buyer crosses from one service mode, fulfillment mode, or responsibility boundary into another. |
| `commitment_discount_exchange` | The buyer accepts a term, usage, spend, or payment commitment in exchange for lower effective pricing. |
| `utilization_risk_transfer` | Pricing makes the buyer responsible for using enough of a committed or subscribed resource to justify the spend. |

### Pricing Units

| Token | Definition |
| --- | --- |
| `seat` | A paid user, collaborator, account, or named access unit. |
| `usage` | Consumption, volume, pages, compute, storage, or other metered activity. |
| `transaction` | A booking, order, payment, sale, or platform-mediated commercial event. |
| `capacity` | Reserved, consumed, or constrained operational capacity. |
| `fulfillment` | Handling, shipping, storage, delivery, or logistics work. |
| `subscription` | Recurring access to a service, replenishment system, content layer, or membership. |
| `commitment` | A time, spend, usage, or payment promise that changes effective economics. |
| `service_mode` | A selected level of service, convenience, handling, delivery, or responsibility transfer. |

### Bill Triggers

| Token | Definition |
| --- | --- |
| `user_count_growth` | Spend changes when paid users, seats, collaborators, or organizational access grows. |
| `usage_crosses_threshold` | Spend changes when usage exceeds an allowance, block, tier, cap, or rollover state. |
| `service_mode_changes` | Spend changes when the buyer selects or qualifies for a different service mode. |
| `commitment_changes` | Spend changes when term, payment option, commitment level, or coverage changes. |
| `transaction_volume_changes` | Spend changes when commercial activity volume, payment flow, or order volume changes. |
| `basket_complexity_changes` | Spend changes when product, basket, inventory, size, weight, storage, or handling complexity changes. |
| `hardware_purchase_triggers_subscription` | Spend changes when hardware ownership activates or makes relevant a recurring service layer. |
| `fee_incidence_moves` | Spend changes, or appears to change, when fee responsibility moves between parties or bill locations. |

### Risk Transfer Types

| Token | Definition |
| --- | --- |
| `demand_risk` | Exposure to whether enough demand appears to justify capacity, price, or commitment. |
| `utilization_risk` | Exposure to whether a committed, subscribed, or reserved resource is used enough to justify its cost. |
| `inventory_risk` | Exposure to storage, aging, velocity, or stock planning problems. |
| `capacity_risk` | Exposure to constrained operational capacity, reserved capacity, or peak-load burden. |
| `operational_burden` | Exposure to cost-to-serve, labor, handling, support, fulfillment, or complexity. |
| `conversion_risk` | Exposure to lost conversion when price, fee visibility, or checkout economics become less attractive. |
| `underuse_risk` | Exposure to paying for access, seats, membership, or capacity that is not fully used. |
| `overage_risk` | Exposure to incremental charges when usage exceeds included allowances or expected limits. |

### Buyer Decisions

| Token | Definition |
| --- | --- |
| `commit_or_stay_flexible` | Choose between lower committed economics and higher-flexibility pricing. |
| `upgrade_or_tolerate_limits` | Choose between paying more for fewer limits and staying within current constraints. |
| `self_serve_or_outsource` | Choose between doing the work internally and paying for a service layer. |
| `accept_fee_visibility_or_shift_fee` | Choose whether to expose, absorb, reframe, or move fee visibility. |
| `buy_hardware_or_use_app_only` | Choose between standalone digital access and hardware-linked recurring economics. |
| `grow_team_or_control_seats` | Choose between broader collaboration and tighter paid-seat control. |

### Teaching Uses

| Token | Definition |
| --- | --- |
| `value_metric` | Teaches how the chosen unit of monetization shapes perceived fairness and bill movement. |
| `price_architecture` | Teaches how multiple price layers, units, or mechanisms combine into total spend. |
| `boundary_crossing` | Teaches how movement across thresholds, tiers, modes, or service states changes price. |
| `strategic_logic` | Teaches the assumed causal chain behind a pricing structure. |
| `fairness_perception` | Teaches how price visibility, incidence, or metric choice affects perceived fairness. |
| `cost_to_serve` | Teaches how operational burden or delivery complexity becomes price logic. |
| `risk_allocation` | Teaches how pricing assigns uncertainty, utilization, capacity, or demand risk. |
| `recurring_value_capture` | Teaches how a one-time action or product relationship becomes recurring monetization. |

## Initial Case Mapping

| Case | Primary Pattern | Secondary Patterns | Pricing Unit | Bill Trigger | Risk Transfer | Buyer Decision | Teaching Use | Causal Structure |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AWS Reserved Instances / Savings Plans | `predictability_exchange` | `commitment_discount_exchange`, `utilization_risk_transfer` | `commitment` | `commitment_changes` | `utilization_risk` | `commit_or_stay_flexible` | `risk_allocation` | Customers trade future flexibility for lower effective rates while accepting the risk that committed usage may be underused. |
| Amazon FBA fulfillment and storage | `operational_burden_transfer` | `service_boundary_pricing`, `threshold_trigger` | `fulfillment` | `basket_complexity_changes` | `operational_burden` | `self_serve_or_outsource` | `cost_to_serve` | Sellers outsource fulfillment, and fees rise when product size, weight, storage, season, or aging creates higher operational burden. |
| IKEA Netherlands delivery fulfillment | `service_boundary_pricing` | `operational_burden_transfer`, `fee_visibility_shift` | `service_mode` | `service_mode_changes` | `operational_burden` | `self_serve_or_outsource` | `boundary_crossing` | Customers preserve low product-price perception but pay more when they shift fulfillment work from self-service to higher-effort delivery modes. |
| Airbnb service-fee incidence | `fee_visibility_shift` | `platform_activity_capture` | `transaction` | `fee_incidence_moves` | `conversion_risk` | `accept_fee_visibility_or_shift_fee` | `fairness_perception` | Airbnb preserves platform value capture while moving fee visibility between guest checkout and host payout. |
| HP Instant Ink | `threshold_trigger` | `predictability_exchange`, `trigger_path_monetization` | `subscription` | `usage_crosses_threshold` | `overage_risk` | `upgrade_or_tolerate_limits` | `value_metric` | Customers buy predictable replenishment, but page usage crossing allowance and rollover boundaries changes the bill. |
| Shopify transaction platform | `platform_activity_capture` | `fee_visibility_shift`, `organization_scale_monetization` | `transaction` | `transaction_volume_changes` | `conversion_risk` | `upgrade_or_tolerate_limits` | `price_architecture` | Shopify monetizes commerce infrastructure by capturing value as merchant activity, payment configuration, and enterprise complexity flow through the platform. |
| monday.com seat-based work management | `organization_scale_monetization` | `threshold_trigger`, `commitment_discount_exchange` | `seat` | `user_count_growth` | `underuse_risk` | `grow_team_or_control_seats` | `price_architecture` | Team growth and workflow complexity expand spend through paid seats, tier depth, billing cycle, and governance boundaries. |
| Peloton hardware-to-membership | `trigger_path_monetization` | `service_boundary_pricing`, `platform_activity_capture` | `subscription` | `hardware_purchase_triggers_subscription` | `underuse_risk` | `buy_hardware_or_use_app_only` | `recurring_value_capture` | Buying connected hardware changes the customer from one-time product buyer into a recurring membership relationship. |

## Governance Rules

- Do not create new pattern names unless no existing pattern explains the causal structure.
- Prefer causal names over industry names.
- Do not confuse `pricing_unit` with `decision_pattern`.
- Do not confuse visible price format with underlying monetization logic.
- Each case gets one primary decision pattern and up to three secondary patterns.
- Every pattern must explain either what changes the bill or what risk is transferred.
- Every ontology label must be reusable across industries.
- Pattern names must remain stable, lowercase, and snake_case.
- New labels require a short definition and at least two plausible cross-industry uses, unless deliberately marked experimental.
- Ontology is advisory until selected fields are intentionally promoted into `CASE_SCHEMA.md`.

## Relationship To Existing Brain Workflow

Ontology should guide reasoning before implementation. It should not replace existing contracts.

| System Part | Ontology Relationship |
| --- | --- |
| Brain Lookup | Adds a structured way to identify related cases by causal pattern, not just topic or component. |
| Workbench Artifact | Can inform Canonical Insight Sentence, Generalizable Pricing Principle, and related-case reasoning. |
| Case JSON | No v1 schema change. Existing `decision_core`, `strategic_logic`, `drivers`, and `boundary_crossing_map` remain canonical. |
| Mechanism Navigator | Ontology can later supply cross-case grouping logic, but should not change current navigator behavior in v1. |
| Course-to-case links | Teaching uses can make course alignment more deliberate without editing course pages yet. |
| Alignment Audit | Provides labels for checking whether case, course, and teaching purpose are aligned. |
| Future Decision Pattern Engine | Becomes the seed vocabulary for comparing cases and recommending analogies. |

## Future Uses

After v1 has been used manually on more cases, it could support:

- Pattern explorer grouped by causal pricing logic.
- Case recommendation during Brain Lookup.
- Course mapping by `teaching_use`.
- Pricing decision simulator prompts based on recurring patterns.
- Cross-case comparison pages.
- Automated alignment audit checks.
- Better Brain Lookup summaries and similar-case reasoning.
- Later promotion of stable ontology fields into `CASE_SCHEMA.md`.

## Risks And Guardrails

| Risk | Guardrail |
| --- | --- |
| Over-classification | Keep v1 to six dimensions and one primary pattern per case. |
| Too many pattern names | Require reuse first; new labels need justification. |
| Vague labels | Every label must answer bill change, risk transfer, buyer decision, or teaching purpose. |
| Industry-category drift | Reject names like `marketplace_pricing` unless they describe causal logic. |
| Premature schema changes | Keep ontology in Brain docs until tested manually. |
| Database or UI distraction | No database, page, navigator, search, or automation work in v1. |
| False precision | Treat mappings as reasoning aids, not proof of causality. |

## V1 Non-Changes

Pricing Reasoning Ontology v1 must not:

- Modify `cases/pricing/CASE_SCHEMA.md`.
- Modify hidden JSON in existing case pages.
- Modify `cases/pricing/case-library.js`.
- Create new public pages or new pricing cases.
- Add a database, build system, automation, vector search, MCP integration, or runtime service.
- Change existing mechanism navigator behavior.

## Acceptance Check

A reviewer should be able to use this document during Brain Lookup to identify which existing cases share causal pricing structure with a new candidate case, without needing any code changes.
