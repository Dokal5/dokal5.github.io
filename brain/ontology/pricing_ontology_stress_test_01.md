# Ontology Stress Test v1

## Purpose

This stress test evaluates whether Pricing Reasoning Ontology v1 survives unfamiliar pricing systems without uncontrolled label growth.

The test is not trying to classify each case perfectly. It asks whether the existing ontology vocabulary can still explain reusable commercial reasoning: what changes the bill, what risk moves between parties, what buyer decision the architecture creates, and what teaching purpose the case can serve.

The expected outcome is practical ontology governance. If the current labels explain most unfamiliar cases well enough, the ontology can keep being used manually. If a case forces awkward mapping, the document records that weakness without immediately expanding the controlled vocabulary.

## Stress Test Method

The existing ontology must be reused first. Each case is mapped with the six current dimensions:

- `decision_pattern`
- `pricing_unit`
- `bill_trigger`
- `risk_transfer_type`
- `buyer_decision`
- `teaching_use`

Ontology expansion should be rare. A new primitive is only worth considering when the current vocabulary cannot reasonably explain the case, the missing concept is reusable across industries, and the gap affects bill-changing logic or risk transfer.

The goal is reusable causal abstraction, not perfect categorization. A mapping can be useful even when it is slightly awkward, as long as it preserves the pricing mechanism clearly enough for comparison and teaching.

## Case Evaluations

### 1. Costco membership

Costco charges an annual membership fee that gives customers access to warehouse pricing and member benefits.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `predictability_exchange` |
| Secondary `decision_patterns` | `trigger_path_monetization`, `utilization_risk_transfer` |
| `pricing_unit` | `subscription` |
| `bill_trigger` | `commitment_changes` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `commit_or_stay_flexible` |
| `teaching_use` | `recurring_value_capture` |

Causal structure: Customers pay upfront for access to lower effective shopping economics, while Costco receives recurring demand predictability and the customer accepts underuse risk.

Evaluation: The ontology explains the case well because membership is a recurring access layer with clear utilization risk. The mapping is not very awkward, although `subscription` has to carry both access and membership meaning. No label appears severely overloaded. No important bill-changing dimension is missing.

Verdict: No new ontology label required.

### 2. Uber surge pricing

Uber raises or lowers ride prices when local demand and driver supply conditions change.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `threshold_trigger` |
| Secondary `decision_patterns` | `fee_visibility_shift` |
| `pricing_unit` | `capacity` |
| `bill_trigger` | `service_mode_changes` |
| `risk_transfer_type` | `capacity_risk` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `risk_allocation` |

Causal structure: Riders pay more when real-time capacity pressure changes the effective ride condition, transferring peak-load capacity risk into the visible fare.

Evaluation: The ontology can partially explain the case, but the mapping is awkward. `threshold_trigger` implies a defined allowance, gate, or boundary, while surge pricing is driven by dynamic market conditions. `service_mode_changes` is also stretched because the rider is not necessarily choosing a different service mode. The missing dimension is not merely surface description; it affects bill-changing logic directly.

Verdict: Potential ontology gap detected.

### 3. Disney Genie+ / Lightning Lane

Disney sells paid access mechanisms that let visitors reduce wait time or enter selected attraction access paths.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `service_boundary_pricing` |
| Secondary `decision_patterns` | `threshold_trigger` |
| `pricing_unit` | `capacity` |
| `bill_trigger` | `service_mode_changes` |
| `risk_transfer_type` | `capacity_risk` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `boundary_crossing` |

Causal structure: Visitors pay to cross from ordinary queue access into a constrained convenience path, shifting scarcity and wait-time pressure into a priced capacity boundary.

Evaluation: The ontology explains the case reasonably well because the pricing mechanism is a service boundary around scarce access. The mapping is mildly awkward because wait-time reduction is both a convenience mode and a capacity allocation mechanism. `capacity` and `service_mode_changes` do useful work here without requiring a new label. The important reasoning dimension is present.

Verdict: No new ontology label required.

### 4. Snowflake consumption pricing

Snowflake charges customers based on consumed cloud data platform resources, often with usage, capacity, and commitment economics interacting.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `threshold_trigger` |
| Secondary `decision_patterns` | `predictability_exchange`, `commitment_discount_exchange` |
| `pricing_unit` | `usage` |
| `bill_trigger` | `usage_crosses_threshold` |
| `risk_transfer_type` | `overage_risk` |
| `buyer_decision` | `commit_or_stay_flexible` |
| `teaching_use` | `value_metric` |

Causal structure: Customers pay as consumption grows, with optional commitment economics trading predictability for better effective rates and shifting usage planning risk to the buyer.

Evaluation: The ontology explains the case well. Usage is the central value metric, thresholds and consumption changes move the bill, and commitment discounts fit existing vocabulary. No label feels badly overloaded. The case reinforces the usefulness of separating `usage`, `commitment_changes`, and `commitment_discount_exchange`.

Verdict: No new ontology label required.

### 5. OpenAI API token pricing

OpenAI API pricing charges by metered token usage, with total spend changing as input, output, and model usage changes.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `threshold_trigger` |
| Secondary `decision_patterns` | `platform_activity_capture` |
| `pricing_unit` | `usage` |
| `bill_trigger` | `usage_crosses_threshold` |
| `risk_transfer_type` | `overage_risk` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `value_metric` |

Causal structure: Developers pay as application activity consumes metered tokens, so product behavior and model choice convert usage growth into bill growth.

Evaluation: The ontology explains the case well. Token pricing is a clean example of usage as a value metric and overage risk as an engineering and product design concern. `threshold_trigger` is slightly broad because token spend can be continuous rather than thresholded, but it still covers usage crossing expected limits. No new label is required.

Verdict: No new ontology label required.

### 6. Ryanair unbundled fee pricing

Ryanair keeps base fares low while charging separately for optional services, handling needs, and convenience choices.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `service_boundary_pricing` |
| Secondary `decision_patterns` | `operational_burden_transfer`, `fee_visibility_shift` |
| `pricing_unit` | `service_mode` |
| `bill_trigger` | `service_mode_changes` |
| `risk_transfer_type` | `operational_burden` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `price_architecture` |

Causal structure: Travelers start with a low visible base fare and pay more when they cross into convenience, handling, or responsibility boundaries that add operational burden.

Evaluation: The ontology explains the case well. The separation between base price, optional service modes, fee visibility, and operational burden captures the commercial mechanism. No label is especially awkward. The case is useful for teaching price architecture because total spend emerges from multiple fee layers.

Verdict: No new ontology label required.

### 7. NVIDIA DGX Cloud

NVIDIA DGX Cloud offers access to high-performance AI computing capacity through a cloud service model rather than direct ownership and operation.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `service_boundary_pricing` |
| Secondary `decision_patterns` | `commitment_discount_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `capacity` |
| `bill_trigger` | `commitment_changes` |
| `risk_transfer_type` | `utilization_risk` |
| `buyer_decision` | `self_serve_or_outsource` |
| `teaching_use` | `risk_allocation` |

Causal structure: Buyers pay for cloud access to constrained AI capacity instead of operating infrastructure directly, while commitment and utilization choices determine how much capacity risk they retain.

Evaluation: The ontology explains the case well enough. `capacity`, `service_boundary_pricing`, and `self_serve_or_outsource` capture the move from owned infrastructure to managed access. The mapping would need more evidence for a live case, but as a stress test the vocabulary is adequate. No new ontology label is required.

Verdict: No new ontology label required.

### 8. Gym annual membership

A gym annual membership charges recurring or upfront access fees regardless of how often the customer uses the facility.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `predictability_exchange` |
| Secondary `decision_patterns` | `commitment_discount_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `subscription` |
| `bill_trigger` | `commitment_changes` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `commit_or_stay_flexible` |
| `teaching_use` | `risk_allocation` |

Causal structure: The customer trades commitment for access and possibly lower effective economics, while the gym receives demand predictability and the buyer bears underuse risk.

Evaluation: The ontology explains this case cleanly. It is a simple underuse-risk membership model and closely resembles the existing `predictability_exchange` and `utilization_risk_transfer` definitions. No label is overloaded. No missing abstraction is exposed.

Verdict: No new ontology label required.

### 9. Adobe Creative Cloud subscription

Adobe Creative Cloud sells recurring access to creative software, with individual and team plans using access, seat, and commitment economics.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `organization_scale_monetization` |
| Secondary `decision_patterns` | `trigger_path_monetization`, `commitment_discount_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `seat` |
| `bill_trigger` | `user_count_growth` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `grow_team_or_control_seats` |
| `teaching_use` | `recurring_value_capture` |

Causal structure: Creative software access becomes recurring monetization, and team spend grows as more named users and organizational needs are brought into the paid access model.

Evaluation: The ontology explains team-oriented Creative Cloud pricing well. Individual plans lean more toward `subscription` and `trigger_path_monetization`, but the team case fits `seat` and `organization_scale_monetization`. The mapping shows that one offer can contain different dominant patterns by segment. No new label is required.

Verdict: No new ontology label required.

### 10. WeWork flexible office membership

WeWork sells flexible office access, with spend changing based on access mode, capacity, location, and commitment level.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `service_boundary_pricing` |
| Secondary `decision_patterns` | `commitment_discount_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `capacity` |
| `bill_trigger` | `service_mode_changes` |
| `risk_transfer_type` | `utilization_risk` |
| `buyer_decision` | `commit_or_stay_flexible` |
| `teaching_use` | `risk_allocation` |

Causal structure: Customers choose between flexible access and more committed office capacity, trading flexibility against lower or more predictable workspace economics.

Evaluation: The ontology explains the case well. The important commercial logic is the boundary between flexible access and committed capacity. `capacity`, `service_mode_changes`, and `commitment_discount_exchange` capture the bill-changing mechanism. No new label is required.

Verdict: No new ontology label required.

### 11. TikTok Creator Marketplace

TikTok Creator Marketplace connects brands and creators, with platform value tied to campaign, creator, and transaction activity.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `platform_activity_capture` |
| Secondary `decision_patterns` | `fee_visibility_shift`, `service_boundary_pricing` |
| `pricing_unit` | `transaction` |
| `bill_trigger` | `transaction_volume_changes` |
| `risk_transfer_type` | `conversion_risk` |
| `buyer_decision` | `self_serve_or_outsource` |
| `teaching_use` | `price_architecture` |

Causal structure: Platform-mediated campaign activity creates monetization opportunities as brands move from self-managed creator discovery toward marketplace-enabled transactions and services.

Evaluation: The ontology explains platform activity capture well, but the buyer decision is awkward. `self_serve_or_outsource` approximates the brand choice between managing creator work directly and using marketplace infrastructure, but it does not fully capture mediated matching or campaign execution. The gap is not strong enough to justify a new label because it does not yet clearly affect bill-changing logic across enough cases.

Verdict: No new ontology label required.

### 12. Apple One bundle pricing

Apple One bundles several Apple services into one recurring subscription tier.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `trigger_path_monetization` |
| Secondary `decision_patterns` | `predictability_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `subscription` |
| `bill_trigger` | `service_mode_changes` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `price_architecture` |

Causal structure: Customers enter a recurring bundle path where one subscription price grants access to multiple entitlements, making realized value depend on cross-service use.

Evaluation: The ontology explains part of the case through subscription, underuse risk, and price architecture, but the mapping is incomplete. The central mechanism is not simply subscription or upgrade; it is bundled entitlement access across several services. That concept affects bill logic because the buyer pays one price for a portfolio rather than a single service unit.

Verdict: Potential ontology gap detected.

### 13. Spotify Family Plan

Spotify Family Plan charges for a shared household plan that covers multiple listener accounts under one subscription relationship.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `organization_scale_monetization` |
| Secondary `decision_patterns` | `threshold_trigger`, `utilization_risk_transfer` |
| `pricing_unit` | `seat` |
| `bill_trigger` | `user_count_growth` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `grow_team_or_control_seats` |
| `teaching_use` | `value_metric` |

Causal structure: A household converts multiple individual accounts into a shared paid access structure where value depends on how many eligible listeners use the included access.

Evaluation: The ontology can explain the case, but several labels are overloaded. `organization_scale_monetization` and `grow_team_or_control_seats` were designed for teams and organizations, not households. `seat` works mechanically as a paid access unit, but it sounds enterprise-oriented. This is a vocabulary ambiguity, not yet a required new primitive.

Verdict: No new ontology label required.

### 14. Amazon Prime membership

Amazon Prime charges a recurring membership fee for a portfolio of shopping, delivery, media, and service benefits.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `trigger_path_monetization` |
| Secondary `decision_patterns` | `predictability_exchange`, `utilization_risk_transfer` |
| `pricing_unit` | `subscription` |
| `bill_trigger` | `commitment_changes` |
| `risk_transfer_type` | `underuse_risk` |
| `buyer_decision` | `commit_or_stay_flexible` |
| `teaching_use` | `recurring_value_capture` |

Causal structure: A recurring membership converts scattered shopping and media benefits into one paid access relationship whose value depends on cross-benefit utilization.

Evaluation: The ontology explains Prime as membership and recurring value capture, but the bundled entitlement mechanism is only partially captured. Like Apple One, Prime is not just a subscription; one fee grants a mixed portfolio of benefits with different value metrics. This missing abstraction appears reusable and affects risk transfer because the buyer bears underuse risk across a bundle, not a single service.

Verdict: Potential ontology gap detected.

### 15. Cloudflare usage and enterprise pricing

Cloudflare combines usage-based, plan-based, and enterprise pricing for network, security, and application services.

| Dimension | Mapping |
| --- | --- |
| Primary `decision_pattern` | `organization_scale_monetization` |
| Secondary `decision_patterns` | `threshold_trigger`, `commitment_discount_exchange`, `service_boundary_pricing` |
| `pricing_unit` | `usage` |
| `bill_trigger` | `usage_crosses_threshold` |
| `risk_transfer_type` | `overage_risk` |
| `buyer_decision` | `upgrade_or_tolerate_limits` |
| `teaching_use` | `price_architecture` |

Causal structure: Customer spend rises as traffic, security needs, service boundaries, and enterprise requirements expand, combining usage logic with organizational complexity.

Evaluation: The ontology explains the case well at a high level. Cloudflare is a layered price architecture with usage, service boundaries, and enterprise commitments. The mapping may need multiple rows for a production case, but as an ontology stress test the current vocabulary is adequate. No new label is required.

Verdict: No new ontology label required.

## Emerging Weaknesses

- `service_mode_changes` is sometimes forced to cover real-time market repricing, especially in Uber surge pricing.
- `threshold_trigger` can become too broad when spend changes continuously with usage or dynamic conditions rather than at a defined allowance, cap, or boundary.
- `organization_scale_monetization` and `grow_team_or_control_seats` become awkward for household and family plans, where the causal logic resembles seat expansion but the buyer is not an organization.
- `subscription` works as a pricing unit but does not fully explain membership, bundle, or entitlement economics.
- Buyer decision vocabulary is narrower than decision-pattern vocabulary, especially for marketplace matching and bundle adoption.
- Some cases reveal tension between pricing surface and underlying mechanism: unbundled fees look like optional add-ons, bundles look like discounts, and marketplaces look like transactions, but the causal mechanism may be risk allocation, access bundling, or platform value capture.

## Candidate Ontology Gaps

These are candidate gaps only. They should not be added to the controlled vocabulary until more manual cases confirm that the existing ontology cannot reasonably handle them.

### Dynamic condition repricing

Existing labels fail most clearly for Uber surge pricing. `threshold_trigger` and `service_mode_changes` can describe a visible price change, but they do not explain the causal bill-changing mechanism: real-time market conditions, demand-supply imbalance, or capacity pressure change the price before the buyer changes usage volume or service mode.

The concept appears reusable because many industries change price according to external or system conditions rather than buyer consumption alone.

Cross-industry examples:

- Ride-hailing surge pricing, where local demand and driver availability change the fare.
- Hotel or airline yield pricing, where remaining capacity and booking timing change the price.
- Event ticket dynamic pricing, where demand signals change the cost of admission.
- Cloud spot capacity pricing, where available compute capacity changes the effective rate.

This gap affects bill-changing logic and risk transfer because the buyer absorbs market or capacity condition volatility at purchase time.

### Bundle entitlement pricing

Existing labels explain subscription access and underuse risk, but they do not fully explain cases where one recurring price grants a portfolio of heterogeneous entitlements. Apple One and Amazon Prime are the clearest examples in this stress test.

The concept appears reusable because many industries package multiple services, benefits, or access rights into one recurring price. The buyer decision is not only whether to subscribe, but whether expected use across the portfolio justifies the combined price.

Cross-industry examples:

- Consumer media bundles that combine music, video, games, or storage.
- Telecom bundles that combine mobile, broadband, content, and device benefits.
- Software suites that combine multiple tools under one license.
- Retail or travel memberships that combine delivery, discounts, upgrades, and service privileges.

This gap affects risk transfer because the buyer bears underuse risk across a portfolio, while the seller captures recurring revenue and can cross-subsidize benefits inside the bundle.

## Stability Assessment

Ontology v1 appears stable enough for continued manual use. Most unfamiliar cases can be explained using the existing vocabulary without creating new labels.

The ontology is strongest for:

- usage pricing
- commitment discounts
- operational burden transfer
- service boundary pricing
- platform activity capture
- seat or team expansion
- utilization and underuse risk

The ontology is weaker for:

- dynamic condition-based repricing
- bundled entitlement portfolios
- household or family access models that resemble seats but are not organizational
- buyer decisions in marketplaces where the choice is mediated matching rather than simple outsourcing

More manual testing is still needed before schema integration. The stress test found candidate gaps, and several labels are useful but stretched. That is acceptable for a Brain-layer reasoning guide, but premature for production schema fields.

Schema integration should still wait. The ontology should remain documentation-only until additional stress tests confirm which candidate gaps are persistent and which are just edge-case wording problems.

## Recommendation

Keep ontology documentation-only.

Continue manual stress testing before promoting any ontology fields into `CASE_SCHEMA.md`, hidden JSON, navigator filters, or production UI. Ontology v1 is stable enough to support Brain Lookup, Workbench Artifact drafting, case comparison, and teaching alignment, but not stable enough for schema integration.

Do not add new ontology labels yet. Track `dynamic condition repricing` and `bundle entitlement pricing` as candidate gaps, then test them against more cases before deciding whether either deserves a controlled primitive.
