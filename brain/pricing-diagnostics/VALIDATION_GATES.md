# Validation Gates

## A. Recommendation States

### Recommend

Use only when local evidence is sufficient, causal logic is clear, data is measurable, and governance risks are acceptable.

A `Recommend` state means the system can propose a pricing mechanism as the preferred direction, while still defining validation, rollout boundaries, and monitoring.

### Pilot only

Use when external evidence is credible but local evidence is incomplete, or when the mechanism needs bounded testing.

A `Pilot only` state means the system may propose design options, but must frame them as experiments with scope limits, success thresholds, failure thresholds, and hard stops.

### Do not recommend yet

Use when required data is missing, causal attribution is weak, customer harm risk is high, or governance checks fail.

A `Do not recommend yet` state means the system should identify missing evidence and possible future tests rather than prescribing a mechanism.

## B. Universal Validation Gates

Every recommendation must check:

- Observed business problem
- Causal mechanism clarity
- Data sufficiency
- Metric availability
- Customer behavior hypothesis
- Expected business outcome
- Fairness risk
- Transparency risk
- Cost risk
- Customer backlash risk
- Legal or compliance risk
- Validation feasibility

If any universal gate fails, the recommendation state should be downgraded to `Pilot only` or `Do not recommend yet`.

## C. Lever Specific Validation Gates

### L1 Access enablement

Required evidence: Entry friction, qualified prospect demand, activation tracking, paid conversion path, support cost per entrant.

Recommended first test: Run a bounded free trial, starter tier, or activation-based trial for a qualified segment.

Hard stop conditions: No activation tracking; free users create unsustainable support cost; paid customer cannibalization cannot be monitored; upgrade path is not defined.

### L2 Predictability and friction reduction

Required evidence: Pricing complexity, invoice variability, bill shock, plan confusion, or transaction friction linked to conversion, churn, or renewal problems.

Recommended first test: Test clearer plan boundaries, bill caps, spend alerts, or simplified packaging with affected customers.

Hard stop conditions: No invoice or customer complaint evidence; pricing friction is actually product failure; simplified design would hide material fees; revenue downside cannot be measured.

### L3 Value metric and nonlinear tariff alignment

Required evidence: Usage, value, cost, or willingness-to-pay differences that current pricing does not capture.

Recommended first test: Simulate bills under the candidate metric, then pilot with a narrow cohort or opt-in migration.

Hard stop conditions: Candidate metric is noisy; metric is easy to game; metric is not understandable to customers; bill shock risk cannot be monitored.

### L4 Segmentation, versioning, and fences

Required evidence: Observable differences in customer needs, willingness to pay, value received, or cost to serve.

Recommended first test: Pilot revised tier fences, eligibility rules, or segment-specific packages with clear migration rules.

Hard stop conditions: Segment definitions are unsupported; fences are arbitrary or discriminatory; customers can easily game eligibility; high-value customers can remain indefinitely in low-value packages.

### L5 Bundling and modular architecture

Required evidence: Feature complementarity, add-on demand, bundle margin, customer preference, or package confusion.

Recommended first test: Test one bundle or modular add-on change with existing customers or a new-acquisition cohort.

Hard stop conditions: Bundle includes unwanted mandatory elements; add-ons hide required functionality; margin impact is unknown; choice overload is likely and untested.

### L6 Framing, anchoring, and reference price management

Required evidence: Customers compare against the wrong reference, misunderstand value, or need clearer tradeoff presentation.

Recommended first test: A/B test transparent framing or anchoring changes while monitoring conversion quality and complaints.

Hard stop conditions: Effect depends on deception; reference price is fake; mandatory fees are hidden; fairness risk is ignored.

### L7 Realized price governance

Required evidence: Discount leakage, exception frequency, quote-to-invoice variance, weak renewal uplift, or approval bypasses.

Recommended first test: Apply discount guardrails, approval thresholds, or renewal playbooks in one segment, channel, or region.

Hard stop conditions: Net price data is unavailable; discount reasons cannot be separated; governance would block strategically necessary deals; sellers can bypass controls.

### L8 Cost to serve allocation and ancillary pricing

Required evidence: Measurable cost-to-serve differences by customer behavior, service level, order type, return, support use, or fulfillment mode.

Recommended first test: Pilot a visible cost-linked fee, threshold, service tier, or allowance with customer communication and margin monitoring.

Hard stop conditions: Cost driver is not measurable; customers cannot control the cost driver; fee is effectively hidden; vulnerable customer impact is unacceptable.

### L9 Commitment, prepayment, and switching economics

Required evidence: Revenue volatility, payment timing issues, low commitment, churn timing, and proof that committed customers receive recurring value.

Recommended first test: Offer an annual, prepaid, reserved, or commitment option to activated customers with clear savings and cancellation terms.

Hard stop conditions: Customers have not reached value; churn is caused by product non-use; commitment creates unacceptable lock-in; discount cost exceeds retention or cash benefit.

### L10 Outcome based risk sharing

Required evidence: Customer distrust of promised value, measurable outcome, attribution logic, baseline, contracting capability, and dispute process.

Recommended first test: Pilot an outcome-linked agreement with strict measurement boundaries and capped exposure.

Hard stop conditions: Outcome is not measurable; outcome is not attributable; contracting capability is absent; dispute mechanism is absent.

### L11 Dynamic demand and capacity pricing

Required evidence: Demand varies by time or state, capacity or inventory is constrained, customer response is plausible, and operations can support the rule.

Recommended first test: Start with a simple transparent peak/off-peak, inventory, or capacity rule before algorithmic dynamic pricing.

Hard stop conditions: No demand state data; no capacity or inventory constraint; no fairness guardrail; algorithmic opacity risk is unacceptable.

### L12 Multisided subsidy and cross side pricing

Required evidence: Distinct platform sides, measurable cross-side value, participation imbalance, liquidity constraint, and monetization path.

Recommended first test: Pilot a constrained subsidy, incentive, or take-rate adjustment in one market, category, or side.

Hard stop conditions: Cross side network effect is weak; multihoming dominates; no monetization path exists; subsidy attracts low-quality participation that does not improve liquidity.

### L13 Channel and sales incentive alignment

Required evidence: Seller, partner, or channel incentives create discounting, mis-selling, weak renewal discipline, or poor customer mix.

Recommended first test: Test revised approval paths, compensation measures, channel margin rules, or renewal incentives in one channel or team.

Hard stop conditions: Incentive data is unavailable; compensation cannot be changed; channel conflict risk is unmanaged; customer quality and retention cannot be monitored.
