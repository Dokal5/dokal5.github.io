# Pricing Diagnostic Stress Test Results

Task name: `brain/pricing-diagnostic-stress-test-v1`

Execution type: Brain-only documentation stress test.

Promotion status: `brain_only`.

This report stress tests the current Pricing Diagnostic Architecture against five pricing challenge patterns. It does not modify production contracts, Layer 1 schemas, case pages, hidden JSON, `case-library.js`, navigation, or automation files.

## A. Overall Stress Test Design

The stress test evaluates whether the Brain-only module can answer:

> "How should we design our pricing mechanism?"

Method:

- Map each client challenge to profit outcome engines and causal levers from `PRICING_DIAGNOSTIC_ARCHITECTURE.md`.
- Check whether `DIAGNOSTIC_RULES.md` provides a natural rule path.
- Use `REQUIRED_DATA_FIELDS.md` to define confirming evidence, minimum data, missing data, and data quality risks.
- Use `VALIDATION_GATES.md` to assign conservative recommendation states and hard stops.
- Check that `PRICING_DIAGNOSTIC_OUTPUT_SCHEMA.md` can express the output fields, especially `required_confirming_evidence`, `hard_stop_conditions`, `recommendation_state_rationale`, and `promotion_status`.

Stress-test result: all five cases can be expressed with the current Brain-only architecture.

## B. Stress Test Case Matrix

| Case | Client challenge | Primary outcome | Secondary outcomes | Primary lever | Secondary levers | Main rules | Fit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SaaS trial conversion | Many free trial users, few convert to paid | O1 | O3, O2 | L1 | L2, L4 | R1; R3 if invoice shock or churn appears | Clean |
| B2B service margin | Revenue grows, but margins are poor because small customers need too much support/customization | O6 | O4, O2 | L8 | L4, L3 | R6, R4 | Clean, with O6/O4 ordering to watch |
| Marketplace liquidity | Demand exists, but supply is thin in key segments and match rates are weak | O8 | O1, O6 | L12 | L4, L11 | R8; R10 if demand/capacity state matters | Clean |
| Discount leakage | Sales discounts heavily and invoice prices are far below list prices | O5 | O2, O4 | L7 | L13 | R5 | Clean |
| Usage monetization | High-usage customers pay almost the same as low-usage customers | O2 | O6, O4 | L3 | L4, L5 | R2; R6 if cost exposure matters | Clean, with value-vs-usage caution |

## C. Expected Diagnostic Outputs For Each Case

### 1. SaaS Trial Conversion Problem

| Required field | Expected output |
| --- | --- |
| Client challenge | "We have many free trial users, but few convert to paid." |
| Expected primary outcome engine | O1 Qualified adoption |
| Expected secondary outcome engines | O3 Retention duration; O2 Revenue per customer if weak upgrade path suppresses ARPU |
| Expected primary causal lever | L1 Access enablement |
| Expected secondary causal levers | L2 Predictability and friction reduction; L4 Segmentation, versioning, and fences |
| Required confirming evidence | Trial starts, activation definition/rate, trial-to-paid conversion, qualified trial-user evidence, support cost per trial user, cannibalization monitoring |
| Minimum required data | Prospect volume, trial start rate, activation definition, activation rate, paid conversion rate, qualified conversion rate, early support cost |
| Likely missing data | Activation definition, support cost by free cohort, qualification quality, paid-plan cannibalization, drop-off reasons |
| Recommendation state expected | Pilot only |
| Recommendation state rationale | R1 supports an access/adoption pathway, but broad recommendation should wait until trial users are proven qualified and activation, support cost, and cannibalization are measurable. |
| Hard stop conditions | No activation tracking; free users create unsustainable support costs; cannibalization cannot be monitored; upgrade path unclear |
| Validation plan | Pilot an activation-based trial or starter-tier redesign for a qualified cohort; compare activation, conversion, support cost, paid cannibalization, and early retention |
| Governance risks | Bait-and-switch perception, unclear trial limits, unfair eligibility, support burden, renewal/cancellation compliance |
| Good diagnostic answer | Separates raw trial volume from qualified adoption; refuses to recommend a broader free plan without activation, cost, and cannibalization evidence |
| Bad diagnostic answer | Recommends making the trial freer or longer based only on signup volume |
| Promotion status | `brain_only` |

### 2. B2B Service Margin Problem

| Required field | Expected output |
| --- | --- |
| Client challenge | "Our revenue is growing, but margins are poor because small customers require too much support and customization." |
| Expected primary outcome engine | O6 Cost to serve coverage |
| Expected secondary outcome engines | O4 Customer portfolio mix; O2 Revenue per customer |
| Expected primary causal lever | L8 Cost to serve allocation and ancillary pricing |
| Expected secondary causal levers | L4 Segmentation, versioning, and fences; L3 Value metric and nonlinear tariff alignment |
| Required confirming evidence | Gross margin by segment, support/customization cost by segment, service usage, order/account size, evidence customers can influence service load |
| Minimum required data | Revenue by customer/order, gross margin, fulfillment/support/customization cost, service usage, order/account size |
| Likely missing data | Activity-based cost, customization cost attribution, controllability of support drivers, segment consistency, fairness exposure |
| Recommendation state expected | Pilot only; Do not recommend yet if cost drivers are not measurable |
| Recommendation state rationale | R6 and R4 cover the symptom. Pricing action should remain bounded until cost drivers are measurable, material, and controllable by customers. |
| Hard stop conditions | Cost driver not measurable; customer cannot control the behavior; fees would hide mandatory costs; vulnerable/customer-access impact unacceptable |
| Validation plan | Pilot support tiers, minimums, customization fees, or service packages in one segment; monitor contribution margin, support load, conversion, retention, complaints |
| Governance risks | Punitive-fee perception, arbitrary segmentation, access/fairness risk, hidden-fee risk, sales workaround risk |
| Good diagnostic answer | Distinguishes bad customer mix from unpriced cost-to-serve behavior and requires measurable, controllable cost drivers |
| Bad diagnostic answer | Simply raises prices on small customers without checking cost attribution, retention, or fairness |
| Promotion status | `brain_only` |

### 3. Marketplace Liquidity Problem

| Required field | Expected output |
| --- | --- |
| Client challenge | "Our marketplace has demand, but supply is thin in key segments, so match rates are weak." |
| Expected primary outcome engine | O8 Competitive and network position |
| Expected secondary outcome engines | O1 Qualified adoption; O6 Cost to serve coverage if incentives/capacity costs matter |
| Expected primary causal lever | L12 Multisided subsidy and cross-side pricing |
| Expected secondary causal levers | L4 Segmentation, versioning, and fences; L11 Dynamic demand and capacity pricing |
| Required confirming evidence | Platform sides, constrained side, match/liquidity rate, segment/geographic imbalance, cross-side value, monetization path, subsidy/incentive cost |
| Minimum required data | Participation by side/segment, liquidity or match rate, utilization/fill rate, take rate or monetization metric, competitive win/loss |
| Likely missing data | Network effect strength, participant quality, multihoming, subsidy payback, geographic/category density, capacity-state data |
| Recommendation state expected | Pilot only |
| Recommendation state rationale | R8 supports cross-side pricing, but a subsidy or take-rate change needs proof of network effects, participant quality, and monetization path before recommendation. |
| Hard stop conditions | Weak cross-side network effect; multihoming dominates; no monetization path; subsidy attracts low-quality supply; fairness guardrails absent |
| Validation plan | Run a bounded segment/geography/category subsidy or take-rate pilot; track supply participation, match rate, retention, contribution margin, incentive cost |
| Governance risks | Discriminatory eligibility, opaque dynamic rules, subsidy dependence, unfair treatment between sides, algorithmic/fairness complaints |
| Good diagnostic answer | Treats liquidity as a network-design problem and requires proof that pricing can change constrained-side participation |
| Bad diagnostic answer | Recommends broad supply subsidies without monetization path, quality checks, or cross-side retention evidence |
| Promotion status | `brain_only` |

### 4. Discount Leakage Problem

| Required field | Expected output |
| --- | --- |
| Client challenge | "Our sales team often discounts heavily, and invoice prices are far below list prices." |
| Expected primary outcome engine | O5 Price realization |
| Expected secondary outcome engines | O2 Revenue per customer; O4 Customer portfolio mix if discounting attracts poor-fit accounts |
| Expected primary causal lever | L7 Realized price governance |
| Expected secondary causal levers | L13 Channel and sales incentive alignment |
| Required confirming evidence | List/quote/contract/invoice variance, discount percentage, exception rate, renewal uplift, seller/channel incentives, discount reasons |
| Minimum required data | List price, quoted price, invoice price, discount percentage, approval exceptions, renewal uplift, net realized price if available |
| Likely missing data | Discount rationale, competitive context, contracted price reconciliation, approval logs, seller compensation data, deal-level margin |
| Recommendation state expected | Recommend if leakage is measurable and controllable; otherwise Pilot only |
| Recommendation state rationale | R5 cleanly covers price realization. A guarded recommendation is possible only if leakage is measurable, controllable, and separable from strategic discounting. |
| Hard stop conditions | Net price unavailable; discount reasons cannot be separated; governance blocks strategic deals; sellers can bypass controls |
| Validation plan | Pilot guardrails or approval thresholds in one segment/channel/region; track net realized price, win rate, cycle time, exception volume, churn |
| Governance risks | Sales velocity loss, channel conflict, unfair inconsistency, strategic-deal blockage, incentive misalignment |
| Good diagnostic answer | Separates destructive leakage from justified competitive discounting and ties governance to seller behavior |
| Bad diagnostic answer | Imposes blanket discount bans without win/loss, margin, exception, or incentive evidence |
| Promotion status | `brain_only` |

### 5. Usage Monetization Problem

| Required field | Expected output |
| --- | --- |
| Client challenge | "Our high-usage customers pay almost the same as low-usage customers, and ARPU does not grow with customer value." |
| Expected primary outcome engine | O2 Revenue per customer |
| Expected secondary outcome engines | O6 Cost to serve coverage; O4 Customer portfolio mix |
| Expected primary causal lever | L3 Value metric and nonlinear tariff alignment |
| Expected secondary causal levers | L4 Segmentation, versioning, and fences; L5 Bundling and modular architecture |
| Required confirming evidence | Usage distribution, revenue by usage cohort, value proxy, cost by usage cohort, upgrade/add-on behavior, customer comprehension/gaming risk |
| Minimum required data | Revenue per customer, usage by customer, plan/package, customer value proxy, upgrade history, expansion/add-on revenue |
| Likely missing data | Customer-perceived value driver, willingness-to-pay by metric, bill shock simulation, metric gaming risk, cohort profitability |
| Recommendation state expected | Pilot only, unless local usage/value/revenue evidence is strong enough to Recommend |
| Recommendation state rationale | R2 supports value metric redesign, but broad recommendation needs proof that the candidate metric tracks customer value, cost, and customer understanding. |
| Hard stop conditions | Candidate metric noisy; easy to game; not understandable; bill shock cannot be monitored; usage does not reflect value |
| Validation plan | Simulate bills under candidate value metric, then pilot opt-in or narrow-cohort tier/metric migration; monitor ARPU, churn, complaints, usage changes |
| Governance risks | Bill shock, metric opacity, gaming, fairness concerns, forced migration backlash |
| Good diagnostic answer | Tests whether usage tracks value and cost before recommending usage-based pricing |
| Bad diagnostic answer | Assumes heavy usage always means higher willingness to pay and jumps to metered pricing |
| Promotion status | `brain_only` |

## D. Architecture Coverage Assessment

| Area | Assessment | Result |
| --- | --- | --- |
| Diagnostic rules | R1, R2, R4, R5, R6, R8, and R10 cover the five challenge types without forcing awkward mappings. | Sufficient |
| Required data fields | Existing data fields cover funnel, usage, segment margin, realized price, cost to serve, and marketplace liquidity evidence. | Sufficient |
| Validation gates | Universal and lever-specific gates provide clear downgrade logic and hard stops for each case. | Sufficient |
| Output schema | The schema can express confirming evidence, hard stops, recommendation rationale, validation plan, governance risks, and `promotion_status`. | Sufficient |
| Brain-only boundary | Current schema language keeps advisory fields from becoming production authority. | Sufficient |

## E. Potential Gaps Or Weak Spots

- B2B service margin requires disciplined ordering between O6 and O4. O6 should be primary when the problem is unpriced support/customization cost; O4 should become primary only when the central issue is attracting the wrong customer mix.
- Marketplace liquidity needs strong causality discipline. The module should penalize answers that assume subsidies will fix liquidity without network-effect evidence, participant quality checks, or a monetization path.
- Usage monetization needs value discipline. Usage should not be treated as value unless a value proxy, cost relationship, or willingness-to-pay evidence supports it.
- Discount leakage depends on distinguishing harmful leakage from strategic discounting. The current docs support this, but the stress test should keep it explicit.
- No new outcome engine, causal lever, data category, validation gate, or production field is needed from this pass.

## F. Recommended Execution Plan

The first execution pass is complete as a desk-review stress test. A later, deeper execution could:

1. Convert each expected output into full JSON-style advisory diagnostics using `PRICING_DIAGNOSTIC_OUTPUT_SCHEMA.md`.
2. Score each output field-by-field for completeness.
3. Add reviewer notes for any ambiguous outcome/lever ordering.
4. Keep every output at `promotion_status: brain_only` unless a separate approval process changes that.

## G. Files Created Or Modified In This Execution

Created Brain-only artifacts:

- `brain/pricing-diagnostics/STRESS_TEST_PLAN.md`
- `brain/pricing-diagnostics/STRESS_TEST_RESULTS.md`

Files intentionally not modified:

- Production schemas and templates.
- Case pages.
- Hidden JSON.
- `case-library.js`.
- Navigation files.
- Automation files.
- Layer 1 contracts.

## H. Validation Checks For Later Execution

Use these checks before any future promotion or deeper execution:

- Every diagnostic output includes `promotion_status: brain_only`.
- No output implies production authority or Layer 1 schema changes.
- Every recommendation state has a rationale tied to evidence sufficiency.
- Every `Recommend` or `Pilot only` includes hard stops and measurable validation.
- Missing data downgrades recommendation confidence where appropriate.
- Governance checks cover fairness, transparency, cost, backlash, legal/compliance, and validation feasibility.
- No case answer recommends a mechanism based only on symptom matching.

## I. Recommendation

Accept current module as ready for stress test.

Rationale: the current Brain-only architecture handles all five challenge types with natural mappings, sufficient required data categories, useful validation gates, and an output schema that can express the needed advisory fields. The observed weak spots are review cautions, not blockers.
