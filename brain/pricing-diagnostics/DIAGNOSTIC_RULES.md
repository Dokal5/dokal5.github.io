# Diagnostic Rules

These rules map observed pricing problems to possible outcome engines and causal levers. They are advisory prompts, not automatic prescriptions. A rule match means the system may consider a causal pathway, pilot a bounded design, or decline to recommend until evidence improves.

## Rule 1

Rule ID: `R1`

Observed problem: Low adoption caused by high upfront risk or commitment.

Possible outcome engine: `O1` Qualified adoption

Candidate causal lever: `L1` Access enablement, `L2` Predictability and friction reduction, `L4` Segmentation, versioning, and fences

Required confirming evidence: Prospect drop-off before payment or activation, stated commitment concern, low trial-to-paid or signup-to-activation conversion, evidence that blocked customers are qualified.

Possible pricing designs: Consider free trial redesign, starter tier, activation-based trial, usage cap, guided onboarding, lower-risk segment-specific entry offer.

Do not recommend when: No activation tracking exists, free or low-price users create unsustainable support costs, paid customer cannibalization cannot be monitored, or the upgrade path is unclear.

Recommendation state logic: Recommend only if qualified adoption evidence is strong and unit economics are measurable. Pilot only when adoption friction is plausible but cohort quality or cannibalization is uncertain. Do not recommend yet when blocked prospects cannot be distinguished from low-fit demand.

Validation idea: Run a bounded entry-offer or trial-design test with activation, conversion, support cost, and paid cannibalization guardrails.

## Rule 2

Rule ID: `R2`

Observed problem: Low ARPU despite high usage or high value customers.

Possible outcome engine: `O2` Revenue per customer

Candidate causal lever: `L3` Value metric and nonlinear tariff alignment, `L4` Segmentation, versioning, and fences, `L5` Bundling and modular architecture

Required confirming evidence: Usage or value distribution varies materially, high-usage cohorts pay similar amounts to low-usage cohorts, upgrade or add-on adoption is weak, revenue does not track customer value.

Possible pricing designs: Consider usage-based tiers, value metric migration, higher-tier feature fences, premium bundles, modular add-ons, volume thresholds, or expansion packages.

Do not recommend when: Candidate value metric is noisy, customers cannot understand the metric, bill shock cannot be monitored, high usage does not reflect higher value, or cost data contradicts the revenue opportunity.

Recommendation state logic: Recommend only if local usage, revenue, and customer value evidence align. Pilot only when external evidence is credible but customer comprehension or migration risk is unresolved. Do not recommend yet when value attribution is weak.

Validation idea: Test a new metric, tier, or bundle with a subset of accounts and monitor ARPU, conversion, complaints, downgrades, and usage changes.

## Rule 3

Rule ID: `R3`

Observed problem: High churn after invoice shock or pricing complexity.

Possible outcome engine: `O3` Retention duration

Candidate causal lever: `L2` Predictability and friction reduction, `L9` Commitment, prepayment, and switching economics, `L3` Value metric and nonlinear tariff alignment

Required confirming evidence: Churn or downgrades cluster after invoices, overages, renewal increases, plan confusion, or pricing surprises; customer complaints mention unpredictability or complexity.

Possible pricing designs: Consider spend alerts, caps, clearer tiers, smoother usage bands, renewal ramps, annual plans after value proof, or simplified plan architecture.

Do not recommend when: Churn is driven by product non-use rather than pricing, invoice data is unavailable, complexity cannot be isolated from service failure, or commitment would trap low-fit customers.

Recommendation state logic: Recommend only when churn is clearly linked to pricing surprise and mitigation metrics exist. Pilot only when the causal link is plausible but attribution is incomplete. Do not recommend yet when retention drivers are not separated.

Validation idea: Test bill predictability controls for a cohort and compare churn, support tickets, invoice disputes, and net revenue retention against a matched baseline.

## Rule 4

Rule ID: `R4`

Observed problem: Poor customer mix or too many low margin customers.

Possible outcome engine: `O4` Customer portfolio mix

Candidate causal lever: `L4` Segmentation, versioning, and fences, `L8` Cost to serve allocation and ancillary pricing, `L3` Value metric and nonlinear tariff alignment

Required confirming evidence: Margin, support burden, fulfillment cost, or retention differs materially by segment, order type, usage pattern, or service need.

Possible pricing designs: Consider segment-specific packages, minimum order thresholds, service tiers, cost-based fees, value-based tiers, eligibility rules, or feature fences.

Do not recommend when: Segment definitions are unsupported, cost-to-serve differences are not measurable, customers cannot control the cost driver, or fairness and access risks are unresolved.

Recommendation state logic: Recommend only when customer mix economics and segmentation evidence are strong. Pilot only when cost differences are visible but customer response is uncertain. Do not recommend yet when low margin cannot be attributed to specific customer behaviors or segments.

Validation idea: Pilot revised package fences or cost-to-serve charges with one segment while measuring margin, conversion, retention, support load, and customer complaints.

## Rule 5

Rule ID: `R5`

Observed problem: Large discount leakage or weak net price realization.

Possible outcome engine: `O5` Price realization

Candidate causal lever: `L7` Realized price governance, `L13` Channel and sales incentive alignment

Required confirming evidence: List, quote, contract, and invoice prices diverge; discount exceptions are frequent; renewal uplift is inconsistent; sales or channel incentives reward discounting.

Possible pricing designs: Consider discount guardrails, approval thresholds, deal desk rules, renewal uplift playbooks, price floors, channel margin rules, or compensation changes.

Do not recommend when: Discounts are strategically justified by competitive context, net price data is incomplete, governance would block critical deals, or seller incentives cannot be changed.

Recommendation state logic: Recommend only when leakage is measurable and controllable. Pilot only when leakage is evident but seller response is uncertain. Do not recommend yet when list price is not a meaningful benchmark or discount rationale is unavailable.

Validation idea: Run governance rules in one channel, region, or segment and track net realized price, win rate, cycle time, exception volume, and churn.

## Rule 6

Rule ID: `R6`

Observed problem: Low margin due to high service or fulfillment cost.

Possible outcome engine: `O6` Cost to serve coverage

Candidate causal lever: `L8` Cost to serve allocation and ancillary pricing, `L3` Value metric and nonlinear tariff alignment

Required confirming evidence: Specific order sizes, service behaviors, support usage, returns, fulfillment modes, or capacity demands create measurable cost variance.

Possible pricing designs: Consider minimum order thresholds, delivery or rush fees, support tiers, return fees, usage-based cost drivers, service packages, or overage charges.

Do not recommend when: Cost drivers are not measurable, customers cannot influence the behavior, fees would hide mandatory costs, or vulnerable customers would be harmed.

Recommendation state logic: Recommend only when cost drivers are measurable, controllable, and material. Pilot only when customer reaction is uncertain. Do not recommend yet when margin issues come from internal inefficiency rather than pricing.

Validation idea: Test a cost-linked fee or threshold for a bounded cohort and monitor margin, behavior change, complaints, conversion, and repeat purchase.

## Rule 7

Rule ID: `R7`

Observed problem: Weak cash predictability or low commitment.

Possible outcome engine: `O7` Cash flow and commitment

Candidate causal lever: `L9` Commitment, prepayment, and switching economics, `L2` Predictability and friction reduction

Required confirming evidence: Revenue volatility, low annual plan adoption, frequent pauses, late payment, weak renewal commitments, or customer reluctance caused by uncertainty.

Possible pricing designs: Consider annual incentives, prepaid credits, commitment discounts, reserved capacity, renewal ramps, cancellation term changes, or simpler predictable plans.

Do not recommend when: Customers have not reached proven value, churn risk is high, discounting damages lifetime value, or commitment terms would create unacceptable lock-in.

Recommendation state logic: Recommend only when customers have demonstrated value and commitment economics are positive. Pilot only when cash benefits are plausible but retention impact is uncertain. Do not recommend yet when commitment would mask weak product-market fit.

Validation idea: Offer a commitment option to activated customers and compare cash collection, retention, discount cost, and cancellation sentiment.

## Rule 8

Rule ID: `R8`

Observed problem: Platform liquidity, marketplace imbalance, or weak network position.

Possible outcome engine: `O8` Competitive and network position

Candidate causal lever: `L12` Multisided subsidy and cross side pricing, `L11` Dynamic demand and capacity pricing, `L4` Segmentation, versioning, and fences

Required confirming evidence: One side of the platform is constrained, liquidity or match rates are low, demand and capacity vary by state, or segment imbalance prevents network value.

Possible pricing designs: Consider subsidizing the constrained side, changing take rates, seller or buyer incentives, peak/off-peak pricing, capacity pricing, or segment-specific participation rules.

Do not recommend when: Cross-side network effects are weak, multihoming dominates, no monetization path exists, capacity constraints are unmeasured, or fairness guardrails are absent.

Recommendation state logic: Recommend only when network effects and monetization path are credible. Pilot only when imbalance is clear but subsidy level or dynamic rule is uncertain. Do not recommend yet when liquidity issues are not pricing-caused.

Validation idea: Run a geographic, segment, or demand-state pilot and track liquidity, fill rate, participation, contribution margin, and cross-side retention.

## Rule 9

Rule ID: `R9`

Observed problem: Customer does not trust promised value or outcome.

Possible outcome engine: `O1` Qualified adoption, `O2` Revenue per customer, `O3` Retention duration

Candidate causal lever: `L10` Outcome based risk sharing

Required confirming evidence: Prospects or customers cite ROI uncertainty, distrust of promised savings, adoption risk, or inability to justify spend before results.

Possible pricing designs: Consider performance pricing, savings share, success fees, outcome milestones, limited guarantee, or refund-backed proof period.

Do not recommend when: Outcome is not measurable, outcome is not attributable, contracting capability is absent, dispute mechanism is absent, or seller cannot bear the risk.

Recommendation state logic: Recommend only when outcome measurement and attribution are robust. Pilot only when outcome logic is strong but operational contracting needs testing. Do not recommend yet when disputes would be likely or costly.

Validation idea: Pilot an outcome-linked contract with strict measurement definitions, attribution rules, dispute process, and downside exposure cap.

## Rule 10

Rule ID: `R10`

Observed problem: Demand or capacity varies strongly by time, inventory, or state.

Possible outcome engine: `O2` Revenue per customer, `O6` Cost to serve coverage, `O8` Competitive and network position

Candidate causal lever: `L11` Dynamic demand and capacity pricing

Required confirming evidence: Demand, capacity, inventory, utilization, congestion, or fulfillment cost varies materially by time or state and customers can respond to price signals.

Possible pricing designs: Consider peak/off-peak pricing, inventory-based pricing, capacity reservations, time-based discounts, yield management, or demand-shifting incentives.

Do not recommend when: No demand-state data exists, no capacity or inventory constraint exists, fairness guardrails are absent, algorithmic opacity risk is unacceptable, or operations cannot respond.

Recommendation state logic: Recommend only when demand-state data, customer response, and governance controls are strong. Pilot only when the pattern is clear but fairness and elasticity need testing. Do not recommend yet when dynamic pricing would look arbitrary.

Validation idea: Test a simple transparent time- or capacity-based rule before algorithmic pricing and track utilization, yield, fairness complaints, and customer substitution.
