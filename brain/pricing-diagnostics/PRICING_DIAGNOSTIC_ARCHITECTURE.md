# Pricing Diagnostic Architecture

## A. Core Advisory Question

This diagnostic architecture is designed to help the Pricing Reasoning System answer:

> "How should we design our pricing mechanism?"

The system should not jump from a client symptom to a pricing recommendation. It should first diagnose which profit outcome the pricing system needs to improve, then identify the causal mechanism lever that could plausibly change customer behavior and business economics.

The core distinction is:

1. Profit Outcome Engines are the business results pricing is meant to improve.
2. Causal Mechanism Levers are the behavioral or economic pathways through which pricing can produce those outcomes.

## B. Diagnostic Flow

```text
Client challenge
-> profit outcome engine
-> causal mechanism lever
-> required data
-> recommendation state
-> pricing design options
-> validation plan
-> governance checks
```

Each step should preserve uncertainty. The diagnostic output should identify what is known, what is missing, and whether the system may recommend, pilot only, or decline to recommend a pricing mechanism yet.

## C. Profit Outcome Engines

### O1 Qualified adoption

Code: `O1`

Name: Qualified adoption

Definition: Pricing improves the rate at which suitable prospects begin using, evaluating, or buying the offer without attracting mostly unqualified or uneconomic customers.

Diagnostic question: Is the pricing mechanism preventing the right customers from starting, trying, or adopting?

Typical symptoms: Low conversion from visit to signup, low trial-to-paid conversion, high upfront resistance, high perceived commitment risk, strong interest but low activation, many prospects stuck before first value.

Typical metrics: Signup rate, trial start rate, activation rate, qualified conversion rate, sales acceptance rate, time to first value, paid conversion rate, support cost per trial, early cohort quality.

### O2 Revenue per customer

Code: `O2`

Name: Revenue per customer

Definition: Pricing improves average revenue per customer by aligning spend with usage, value, willingness to pay, bundle fit, or expansion path.

Diagnostic question: Are high-value or high-usage customers paying too little relative to the value they receive?

Typical symptoms: Low ARPU despite heavy usage, flat revenue across heterogeneous customers, high-value customers concentrated in low tiers, underpriced add-ons, weak expansion from mature accounts.

Typical metrics: ARPU, ARPA, average contract value, expansion revenue, usage-to-revenue ratio, revenue by cohort, attach rate, upgrade rate, net revenue retention.

### O3 Retention duration

Code: `O3`

Name: Retention duration

Definition: Pricing improves how long customers stay by reducing surprise, friction, misfit, distrust, or switching triggers created by pricing.

Diagnostic question: Is the pricing mechanism causing customers to leave earlier than their product value would predict?

Typical symptoms: Churn after invoice increases, churn after trial conversion, cancellation after complex bills, downgrades after unused capacity, customer complaints about unpredictability.

Typical metrics: Logo retention, revenue retention, churn rate, downgrade rate, renewal rate, invoice dispute rate, bill shock incidents, tenure by pricing cohort.

### O4 Customer portfolio mix

Code: `O4`

Name: Customer portfolio mix

Definition: Pricing improves the composition of customers by attracting, retaining, or prioritizing segments with better margin, fit, strategic value, or lifetime value.

Diagnostic question: Is the current pricing mechanism attracting too many low-fit, low-margin, or high-friction customers?

Typical symptoms: Growth from low-margin segments, high support burden from small accounts, enterprise prospects blocked by weak packaging, poor fit between willingness to pay and service load.

Typical metrics: Gross margin by segment, LTV by segment, CAC payback by segment, support cost by segment, customer quality score, product-qualified account mix.

### O5 Price realization

Code: `O5`

Name: Price realization

Definition: Pricing improves the share of intended price actually captured after discounts, concessions, approvals, channel incentives, and renewal negotiations.

Diagnostic question: Is revenue leaking between list price, quoted price, contracted price, and invoice price?

Typical symptoms: Frequent discount exceptions, inconsistent quoting, weak renewal uplift, sales-controlled concessions, channel conflict, large spread between list and net price.

Typical metrics: Net realized price, discount percentage, approval exception rate, price waterfall, renewal uplift, quote-to-invoice variance, margin after discount.

### O6 Cost to serve coverage

Code: `O6`

Name: Cost to serve coverage

Definition: Pricing improves whether the customers or behaviors that create service, fulfillment, support, capacity, or risk costs pay enough to cover those costs.

Diagnostic question: Are costly customer behaviors being subsidized by customers who do not create those costs?

Typical symptoms: Low margin on small orders, high support use without fees, high return or rush-service costs, unpriced customization, capacity strain from low-yield demand.

Typical metrics: Gross margin by order/customer, cost to serve, fulfillment cost, support cost, return cost, service usage, contribution margin by usage or behavior.

### O7 Cash flow and commitment

Code: `O7`

Name: Cash flow and commitment

Definition: Pricing improves upfront cash, revenue predictability, commitment depth, or switching economics without creating unacceptable customer lock-in risk.

Diagnostic question: Does the pricing mechanism leave too much revenue uncertain, delayed, or easy to abandon?

Typical symptoms: Month-to-month volatility, low annual commitment, weak renewal discipline, customers pause frequently, high exposure to demand swings, cash collection lag.

Typical metrics: Annual contract share, prepaid share, deferred revenue, renewal commitment rate, average contract length, payment timing, cancellation timing, cash conversion.

### O8 Competitive and network position

Code: `O8`

Name: Competitive and network position

Definition: Pricing improves marketplace liquidity, competitive positioning, adoption loops, cross-side participation, or strategic share where value depends on network or relative position.

Diagnostic question: Does pricing need to strengthen network participation, marketplace balance, or competitive position rather than only near-term monetization?

Typical symptoms: Marketplace imbalance, weak liquidity, one side of a platform underparticipates, competitors undercut strategic entry points, high-value network effects fail to form.

Typical metrics: Cross-side participation, liquidity rate, match rate, fill rate, utilization, share of wallet, competitive win rate, network activation, contribution by side.

## D. Causal Mechanism Levers

### L1 Access enablement

Code: `L1`

Name: Access enablement

Definition: Pricing reduces the economic barrier to start, trial, entry, or first use for qualified customers.

Primary outcome engines: `O1`, `O3`, `O8`

Diagnostic signal: Prospects show interest but avoid or delay adoption because the starting commitment feels too costly or risky.

Expected customer behavior change: More qualified prospects begin, activate, and reach first value.

Typical pricing mechanisms: Free trial, freemium, starter tier, deposit-light onboarding, entry bundle, first-period discount, activation-based trial.

Common failure modes: Low-quality users flood the system, support costs exceed expected value, paid users downgrade or wait for free access, upgrade path remains unclear.

Evidence caution: Access mechanisms should be tied to qualification and activation evidence, not raw signup volume alone.

### L2 Predictability and friction reduction

Code: `L2`

Name: Predictability and friction reduction

Definition: Pricing reduces uncertainty, bill shock, cognitive load, or transaction friction so customers can choose and stay with less perceived risk.

Primary outcome engines: `O1`, `O3`, `O7`

Diagnostic signal: Customers object to complexity, unpredictable bills, unclear usage consequences, or difficult comparison.

Expected customer behavior change: Customers commit, convert, renew, or expand because the bill feels understandable and manageable.

Typical pricing mechanisms: Flat-rate tiers, usage caps, spend alerts, clearer package boundaries, predictable bundles, simplified rate cards, guided plan selection.

Common failure modes: Oversimplification hides important cost drivers, caps create artificial constraints, revenue upside is limited, customers still distrust unclear exceptions.

Evidence caution: Simplicity should be validated against behavior and margin, not assumed to be good in every pricing context.

### L3 Value metric and nonlinear tariff alignment

Code: `L3`

Name: Value metric and nonlinear tariff alignment

Definition: Pricing changes the unit, metric, tier curve, threshold, or nonlinear tariff so customer spend better tracks value received and cost created.

Primary outcome engines: `O2`, `O4`, `O6`

Diagnostic signal: Usage, value, cost, or willingness to pay varies widely while pricing remains flat or poorly correlated.

Expected customer behavior change: Higher-value customers pay more, lower-value customers retain a viable entry path, and usage choices better reflect economics.

Typical pricing mechanisms: Usage-based pricing, seats, transactions, volume tiers, block pricing, overage, metered add-ons, value metric migration.

Common failure modes: Metric is noisy, easy to game, hard to understand, creates bill shock, or misaligns with customer-perceived value.

Evidence caution: Value metric changes require local usage distribution and customer comprehension evidence before broad recommendation.

### L4 Segmentation, versioning, and fences

Code: `L4`

Name: Segmentation, versioning, and fences

Definition: Pricing separates customer groups, use cases, service levels, or willingness-to-pay bands through packages, eligibility rules, or fences.

Primary outcome engines: `O1`, `O2`, `O4`

Diagnostic signal: Different customer types have meaningfully different needs, value, willingness to pay, or costs, but one price architecture serves all.

Expected customer behavior change: Customers self-select into better-fit offers, and high-value customers have a credible reason to pay more.

Typical pricing mechanisms: Good-better-best tiers, student/nonprofit plans, enterprise plans, feature fences, usage caps, service-level versions, eligibility-based offers.

Common failure modes: Fences are arbitrary, customers feel forced or penalized, high-value users stay in low tiers, segmentation invites gaming or fairness concerns.

Evidence caution: Versioning should follow observable differences in value or cost, not stereotypes or unsupported willingness-to-pay assumptions.

### L5 Bundling and modular architecture

Code: `L5`

Name: Bundling and modular architecture

Definition: Pricing combines or separates features, services, or rights to improve perceived value, adoption, expansion, or monetization.

Primary outcome engines: `O2`, `O4`, `O3`

Diagnostic signal: Customers buy fragments that reduce value, skip high-value complements, or resist paying for unwanted bundle elements.

Expected customer behavior change: Customers choose packages that increase realized value, attach rate, and account revenue.

Typical pricing mechanisms: Bundles, add-ons, modules, platform packages, included allowances, premium packs, attach incentives.

Common failure modes: Bundle feels bloated, modularity creates choice overload, margin suffers from over-inclusion, add-ons become hidden mandatory fees.

Evidence caution: Bundle logic should be supported by attach behavior, value complementarity, and willingness-to-pay evidence.

### L6 Framing, anchoring, and reference price management

Code: `L6`

Name: Framing, anchoring, and reference price management

Definition: Pricing changes how customers perceive price, value, comparison, or tradeoffs through transparent presentation and reference structures.

Primary outcome engines: `O1`, `O2`, `O5`

Diagnostic signal: Customers misread value, compare against the wrong reference, or anchor on a misleading alternative.

Expected customer behavior change: Customers evaluate the offer against a more relevant value or comparison frame.

Typical pricing mechanisms: Per-day framing, annual savings display, tier anchoring, decoy-safe plan layout, transparent reference comparisons, value calculators.

Common failure modes: Framing becomes manipulative, reference prices are fake, fees are hidden, customers perceive deception.

Evidence caution: Framing must remain truthful and transparent; persuasion is not a substitute for value or evidence.

### L7 Realized price governance

Code: `L7`

Name: Realized price governance

Definition: Pricing improves control over discounts, exceptions, approval paths, quote discipline, renewal uplift, and net price capture.

Primary outcome engines: `O5`, `O2`

Diagnostic signal: List prices are reasonable but actual prices vary widely without clear economic justification.

Expected customer behavior change: Customers and sellers face clearer rules, reducing unnecessary concessions and inconsistent price expectations.

Typical pricing mechanisms: Discount guardrails, approval thresholds, price floors, renewal playbooks, exception governance, deal desk rules.

Common failure modes: Sales velocity drops, rules are bypassed, governance ignores competitive context, customers perceive unfair inconsistency.

Evidence caution: Governance should distinguish destructive leakage from strategically justified concessions.

### L8 Cost to serve allocation and ancillary pricing

Code: `L8`

Name: Cost to serve allocation and ancillary pricing

Definition: Pricing assigns service, fulfillment, support, return, customization, or convenience costs to the customers or behaviors that create them.

Primary outcome engines: `O6`, `O4`, `O2`

Diagnostic signal: Some customers or behaviors create high variable costs that current pricing does not recover.

Expected customer behavior change: Customers either pay for costly behaviors, reduce those behaviors, or choose more efficient service modes.

Typical pricing mechanisms: Delivery fees, rush fees, support tiers, return fees, minimum order thresholds, service surcharges, ancillary charges.

Common failure modes: Fees feel punitive, customers cannot control the cost driver, fee complexity increases backlash, low-income or vulnerable customers are harmed.

Evidence caution: Cost allocation requires evidence that the cost driver is measurable, meaningful, and reasonably controllable by customers.

### L9 Commitment, prepayment, and switching economics

Code: `L9`

Name: Commitment, prepayment, and switching economics

Definition: Pricing changes contract duration, payment timing, renewal terms, or switching economics to improve cash flow and retention.

Primary outcome engines: `O7`, `O3`

Diagnostic signal: Customers churn, pause, or delay payment despite recurring value, creating revenue and cash uncertainty.

Expected customer behavior change: Customers commit earlier, stay longer, prepay, or renew with clearer tradeoffs.

Typical pricing mechanisms: Annual plans, prepaid credits, commitment discounts, minimum commits, reserved capacity, cancellation terms, loyalty pricing.

Common failure modes: Commitment feels coercive, low-fit customers are locked in, discounts reduce long-term yield, deferred churn appears later.

Evidence caution: Commitment should follow proven value and customer fit; it should not mask weak retention economics.

### L10 Outcome based risk sharing

Code: `L10`

Name: Outcome based risk sharing

Definition: Pricing links payment to measured outcomes, performance, savings, results, or risk transfer.

Primary outcome engines: `O1`, `O2`, `O3`

Diagnostic signal: Customers hesitate because they do not trust promised value, cannot verify ROI, or face asymmetric adoption risk.

Expected customer behavior change: Customers adopt or expand because payment risk is partly shifted to the seller or tied to proven value.

Typical pricing mechanisms: Performance pricing, savings share, success fees, guarantees, outcome milestones, refund-backed promises.

Common failure modes: Outcome is not attributable, measurement is disputed, seller takes uncontrollable risk, contracting operations cannot support it.

Evidence caution: Outcome pricing needs measurable, attributable outcomes and a credible dispute mechanism before recommendation.

### L11 Dynamic demand and capacity pricing

Code: `L11`

Name: Dynamic demand and capacity pricing

Definition: Pricing varies by time, demand state, inventory, capacity, scarcity, or operational load to balance utilization and yield.

Primary outcome engines: `O2`, `O6`, `O8`

Diagnostic signal: Demand and capacity vary materially, and static prices cause shortages, idle capacity, congestion, or low yield.

Expected customer behavior change: Some demand shifts to lower-pressure states, while higher-urgency customers pay for scarce capacity.

Typical pricing mechanisms: Surge pricing, peak/off-peak pricing, inventory-based pricing, yield management, time-based discounts, capacity reservations.

Common failure modes: Customers see pricing as unfair, algorithmic logic is opaque, no real capacity constraint exists, operations cannot respond.

Evidence caution: Dynamic pricing requires demand-state data, fairness guardrails, and operational readiness.

### L12 Multisided subsidy and cross side pricing

Code: `L12`

Name: Multisided subsidy and cross side pricing

Definition: Pricing allocates charges, subsidies, or incentives across sides of a platform to build liquidity, participation, and monetizable network effects.

Primary outcome engines: `O8`, `O1`, `O2`

Diagnostic signal: One side of a platform is blocking liquidity, participation, or network formation.

Expected customer behavior change: The constrained side joins or participates more, improving value for the monetized side.

Typical pricing mechanisms: Free or subsidized side, take rate, listing fees, transaction fees, seller subscriptions, buyer incentives, cross-side promotions.

Common failure modes: Subsidized side never monetizes indirectly, multihoming weakens network effects, imbalance persists, subsidy attracts low-quality participants.

Evidence caution: Cross-side pricing should be tied to measurable network effects and a credible monetization path.

### L13 Channel and sales incentive alignment

Code: `L13`

Name: Channel and sales incentive alignment

Definition: Pricing aligns channel economics, seller incentives, partner margins, and compensation with intended price realization and customer fit.

Primary outcome engines: `O5`, `O4`, `O2`

Diagnostic signal: Sales or channel behavior undermines the intended price architecture through discounting, mis-selling, or incentive conflict.

Expected customer behavior change: Customers receive more consistent offers, and sellers steer accounts toward economically appropriate pricing.

Typical pricing mechanisms: Compensation redesign, channel margin rules, discount authorization, partner tiers, SPIFF controls, renewal incentive changes.

Common failure modes: Channel conflict increases, sellers avoid strategic deals, incentives are too complex, governance is ignored under quota pressure.

Evidence caution: Incentive changes should be tested against seller behavior and customer quality, not only gross bookings.

## E. Relationship To Existing Layer 1

Diagnostic Architecture produces advisory reasoning outputs.

Layer 1 produces case implementation inputs.

Diagnostic outputs may later become upstream context for Layer 1, but only after explicit approval. This file must not redefine Layer 1 schema fields, create new public rendering requirements, add hidden JSON fields, alter `CASE_SCHEMA.md`, or change `CASE_LAYER1_SCHEMA.md`.

This diagnostic architecture must not modify or redefine `CASE_SCHEMA.md`, `CASE_LAYER1_SCHEMA.md`, `CASE_TEMPLATE.html`, `CASE_VISUAL_DESIGN.md`, `case-library.js`, public case pages, hidden JSON, case artifacts, navigation, or automation files.

If this Brain diagnostic architecture conflicts with existing pricing production contracts, the production contracts remain authoritative.
