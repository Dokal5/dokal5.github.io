# Required Data Fields

## A. Data Principle

Pricing advice should not move from challenge to recommendation without checking data sufficiency.

The system may diagnose a plausible pricing pathway with incomplete data, but it must not present that pathway as a recommendation unless the minimum required data exists, the causal logic is measurable, and validation is feasible.

## B. Data Levels

Minimum required data: The smallest local evidence set needed to diagnose the outcome engine, evaluate the causal lever, and decide whether the answer can be `Recommend`, `Pilot only`, or `Do not recommend yet`.

Recommended data: Additional data that improves confidence, helps prioritize among design options, and reduces false attribution.

Advanced data: Higher-resolution or experimental data that supports stronger causal inference, more precise design, or broader rollout.

## C. Data Fields By Profit Outcome Engine

### O1 Qualified adoption

Minimum required data: Prospect volume, signup or trial start rate, activation definition, activation rate, qualified conversion rate, paid conversion rate, early support cost.

Recommended data: Drop-off by funnel stage, prospect source, segment, reason for non-conversion, time to first value, trial engagement, sales qualification notes.

Advanced data: Cohort-level lifetime value, activation propensity model, willingness-to-pay research, trial design experiment results, cannibalization monitoring.

Common data quality risks: Raw signups confused with qualified adoption, no activation definition, support costs missing, free-user quality unknown, attribution by channel incomplete.

### O2 Revenue per customer

Minimum required data: Revenue per customer, usage by customer, plan or package, customer value proxy, upgrade history, expansion or add-on revenue.

Recommended data: Revenue by usage cohort, willingness-to-pay indicators, feature use, account size, segment, discount history, attach rate.

Advanced data: Customer-level value modeling, price elasticity estimates, usage-to-value analysis, bundle conjoint or choice research, expansion propensity.

Common data quality risks: Usage treated as value without proof, averages hiding heterogeneous cohorts, discounts mixed with list price, add-on revenue not linked to customers.

### O3 Retention duration

Minimum required data: Churn rate, renewal rate, tenure, invoice history, plan history, downgrade or cancellation timing, pricing-related support tickets.

Recommended data: Churn reasons, invoice shock flags, overage history, renewal uplift, usage before churn, customer health score, complaint themes.

Advanced data: Survival analysis by pricing cohort, churn attribution model, billing experience experiments, retention impact by commitment term.

Common data quality risks: Churn reason codes are unreliable, pricing and product non-use are conflated, invoice data is incomplete, downgrades are not separated from churn.

### O4 Customer portfolio mix

Minimum required data: Customer segment, revenue by segment, gross margin by segment, support or service cost by segment, retention by segment.

Recommended data: Acquisition source, customer size, use case, service load, customer quality score, LTV by segment, CAC by segment.

Advanced data: Segment-level profitability model, propensity-to-serve cost model, price sensitivity by segment, package migration simulation.

Common data quality risks: Segment labels are inconsistent, margin excludes support or fulfillment cost, low-fit customers are not distinguishable, CAC is blended.

### O5 Price realization

Minimum required data: List price, quoted price, invoice price, discount percentage, approval exceptions, renewal uplift, net realized price if available.

Recommended data: Contracted price, price waterfall, discount reason, seller, channel, region, customer segment, win/loss, renewal concession history.

Advanced data: Deal-level margin, competitive context, approval workflow logs, seller compensation data, channel economics, price realization by cohort.

Common data quality risks: List price is not meaningful, invoice and quote systems do not reconcile, discount reasons are missing, exceptions are recorded inconsistently.

### O6 Cost to serve coverage

Minimum required data: Revenue by customer or order, gross margin, fulfillment cost, support cost, service usage, return or refund cost, order size.

Recommended data: Cost by behavior, rush or premium service usage, capacity usage, customization cost, geography, customer controllability of cost driver.

Advanced data: Activity-based costing, marginal cost curves, service-level profitability, cost-to-serve model, behavioral response to fees or thresholds.

Common data quality risks: Average cost masks high-cost behaviors, fixed and variable costs are blended, cost driver is not customer-controllable, service costs are unallocated.

### O7 Cash flow and commitment

Minimum required data: Payment timing, contract length, prepaid share, monthly versus annual share, renewal rate, cancellation timing, cash collection.

Recommended data: Deferred revenue, commitment discount, plan migration, pause frequency, payment failure, renewal negotiation notes, cohort retention by term.

Advanced data: Cash flow forecasts by pricing design, commitment elasticity, churn by contract term, discount payback, customer liquidity sensitivity.

Common data quality risks: Bookings confused with cash, annual discounts not tied to retention, cancellation timing missing, commitment quality not separated from contract length.

### O8 Competitive and network position

Minimum required data: Participation by side or segment, liquidity or match rate, utilization or fill rate, take rate or monetization metric, competitive win/loss.

Recommended data: Supply and demand imbalance, cross-side conversion, geographic density, multihoming behavior, incentive cost, contribution by side.

Advanced data: Network effect strength, marketplace simulation, competitive price tracking, dynamic state model, subsidy payback analysis.

Common data quality risks: Activity confused with liquidity, network effects assumed but not measured, subsidized participants are low quality, competitive data is anecdotal.

## D. Data Fields By Causal Mechanism Lever

### L1 Access enablement

Minimum required data: Current entry price or commitment, trial or signup rate, activation rate, paid conversion rate, support cost per entrant.

Recommended data: Prospect qualification, drop-off reasons, time to first value, trial usage, cannibalization indicators, upgrade path performance.

Advanced data: Entry-offer experiment, segment-level conversion economics, lifetime value by entry path, activation propensity.

Common data quality risks: Entry volume mistaken for qualified adoption, activation not tracked, support burden omitted, cannibalization invisible.

### L2 Predictability and friction reduction

Minimum required data: Current billing structure, invoice variability, customer complaints, churn or conversion timing, plan selection behavior.

Recommended data: Bill shock incidents, support tickets, pricing page behavior, plan comparison data, overage frequency, renewal objections.

Advanced data: Billing comprehension research, plan simplification experiment, predicted bill simulation, churn impact analysis.

Common data quality risks: Complexity is asserted but not observed, product complaints are misread as pricing friction, invoice history is incomplete.

### L3 Value metric and nonlinear tariff alignment

Minimum required data: Current pricing metric, candidate value metric, usage distribution, revenue by usage cohort, cost by usage cohort if available, customer understanding risk, gaming risk.

Recommended data: Customer-perceived value drivers, willingness-to-pay by metric, bill simulation, cohort profitability, migration impact, bill shock exposure.

Advanced data: Elasticity by usage band, metric gaming model, value metric experiment, customer research on comprehension and fairness.

Common data quality risks: Metric is noisy, easy to game, poorly understood, weakly tied to value, or creates unmanaged bill shock.

### L4 Segmentation, versioning, and fences

Minimum required data: Customer segments, plan or package usage, revenue by segment, margin or value by segment, feature or service usage.

Recommended data: Segment needs, willingness-to-pay indicators, upgrade/downgrade paths, fence eligibility, customer complaints, fairness review.

Advanced data: Choice modeling, package migration simulation, segment-level LTV, fence gaming analysis, competitive package benchmarking.

Common data quality risks: Segments are arbitrary, high-value customers can remain in low tiers, fences are easy to bypass, fairness risks are ignored.

### L5 Bundling and modular architecture

Minimum required data: Current package structure, feature usage, add-on attach rate, revenue by package, churn or conversion by package.

Recommended data: Complementarity between features, customer preference research, margin by bundle, upgrade paths, unused feature complaints.

Advanced data: Conjoint or choice research, bundle profitability simulation, attach-rate experiment, package simplification test.

Common data quality risks: Feature usage is not linked to value, bundle costs are hidden, choice overload is unmeasured, add-ons are perceived as mandatory fees.

### L6 Framing, anchoring, and reference price management

Minimum required data: Current price presentation, customer comparison set, conversion by price display, complaint or objection themes.

Recommended data: A/B tests of framing, reference price evidence, competitive comparisons, customer comprehension, fee visibility.

Advanced data: Behavioral experiment results, willingness-to-pay research, price perception study, long-term trust or complaint monitoring.

Common data quality risks: Reference price is unsupported, conversion lift hides backlash, mandatory fees are obscured, framing effect depends on deception.

### L7 Realized price governance

Minimum required data: List price, quote price, contracted or invoice price, discount percentage, approval exceptions, seller or channel, renewal uplift.

Recommended data: Discount reasons, win/loss, deal size, customer segment, competitive context, approval workflow, margin after discount.

Advanced data: Seller compensation data, deal desk logs, price waterfall analytics, exception impact analysis, governance pilot results.

Common data quality risks: Systems do not reconcile, exception reasons are vague, strategic discounts are treated as leakage, seller behavior is not measured.

### L8 Cost to serve allocation and ancillary pricing

Minimum required data: Order size, fulfillment cost, support cost, returns cost, rush service usage, customer controllability of cost driver.

Recommended data: Service frequency, geography, capacity usage, customization, cost by segment, complaint history, affordability or fairness exposure.

Advanced data: Activity-based costing, marginal cost by behavior, fee response experiments, threshold simulation, contribution by service mode.

Common data quality risks: Costs are averaged too broadly, cost drivers are not controllable, fee visibility is poor, vulnerable customer impact is unmeasured.

### L9 Commitment, prepayment, and switching economics

Minimum required data: Contract length, payment timing, monthly versus annual mix, renewal rate, cancellation timing, discount levels.

Recommended data: Customer activation state, usage before commitment, churn by term, cash collection timing, payment failure, pause behavior.

Advanced data: Commitment elasticity, retention impact by contract term, cash flow simulation, lock-in sentiment research, deferred churn analysis.

Common data quality risks: Commitment is offered before value proof, discount cost is underestimated, churn is deferred rather than reduced, customer harm is ignored.

### L10 Outcome based risk sharing

Minimum required data: Promised outcome, measurable outcome metric, baseline, attribution logic, contract capability, dispute mechanism.

Recommended data: Historical outcome evidence, customer-specific baselines, operational ability to track outcomes, risk exposure, payout scenarios.

Advanced data: Causal attribution model, third-party verification, outcome pricing pilot, dispute rate, seller risk simulation.

Common data quality risks: Outcome is not attributable, measurement is disputed, seller controls too little of the outcome, contract operations are immature.

### L11 Dynamic demand and capacity pricing

Minimum required data: Demand by time or state, capacity or inventory constraint, elasticity estimate or proxy, customer fairness risk, operational response capability.

Recommended data: Utilization, congestion or stockout history, customer substitution options, competitive price context, transparency requirements.

Advanced data: Demand forecasting, dynamic pricing simulation, fairness guardrail monitoring, algorithm audit, state-level experiment results.

Common data quality risks: No real capacity constraint, demand state is noisy, fairness risk is underestimated, algorithmic opacity blocks trust.

### L12 Multisided subsidy and cross side pricing

Minimum required data: Platform sides, participation by side, liquidity or match rate, monetized side, subsidy or incentive cost, cross-side value evidence.

Recommended data: Multihoming behavior, side-specific retention, quality of participants, geographic or category density, take rate economics.

Advanced data: Network effect model, subsidy payback, marketplace simulation, cross-side elasticity, competitive platform behavior.

Common data quality risks: Network effects are assumed, subsidized side is low quality, no monetization path exists, multihoming weakens pricing power.

### L13 Channel and sales incentive alignment

Minimum required data: Sales channel, seller incentives, discount behavior, quote and invoice price, customer segment, renewal or expansion incentives.

Recommended data: Compensation plan details, partner margin, channel conflict, win/loss by discount, customer fit by seller or partner, approval exceptions.

Advanced data: Incentive experiment, seller behavior model, channel profitability, compensation redesign simulation, long-term customer quality by channel.

Common data quality risks: Incentives are opaque, channel data is incomplete, discounting is misattributed, bookings are measured without retention or margin.
