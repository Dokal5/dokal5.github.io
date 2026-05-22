# Effectory Real Advisory Pricing Diagnostic Test

Task name: `effectory-pricing-diagnostic-real-advisory-test-v1`

Execution type: Brain-only real advisory prompt test.

Promotion status: `brain_only`.

Source: `https://www.effectory.com/plans/`

This artifact tests whether the completed Pricing Diagnostic Architecture can reason from a real public pricing page toward a practical advisory answer about monetizing customer complexity while keeping package choice clear and reducing unnecessary quote or discount leakage.

This is not a production case. It does not modify or authorize production contracts, Layer 1 schemas, public case pages, hidden JSON, `case-library.js`, navigation, automation files, pricing artifacts, README, or project handoff files.

## A. Trial Purpose

This real advisory prompt test evaluates whether the Brain-only pricing diagnostic layer can:

- Use public package evidence without overclaiming private economics.
- Diagnose a plausible monetization question from package structure, add-ons, and quote-based pricing.
- Preserve uncertainty around actual prices, margins, discounting, customer behavior, and sales leakage.
- Identify confirming evidence needed before recommending a mechanism.
- Propose bounded pricing mechanism tests that remain internal and advisory.
- Keep every output at `promotion_status: brain_only`.

The advisory test question is:

> How should Effectory design or refine its pricing mechanism to monetize value across different customer complexity levels while keeping package choice clear and avoiding unnecessary sales/pricing leakage?

## B. Evidence Summary From The Effectory Pricing Page

Public page evidence used for this test:

- Effectory presents "Packages that adjust to your needs."
- Pricing is personalized and quote-based; users are asked to schedule a chat or get a quote.
- Packages shown: Starter, Professional, Expert.
- Starter includes standard features such as security and accessibility, up to 3 languages, approximately 5 coordinators, branding and communication, results dashboard, employee dashboard, benchmarking, action planner, and HRIS integration.
- Professional includes Starter and adds SSO, up to 5 languages, approximately 175 coordinators, more customization, and custom segments.
- Expert includes Starter and Professional and adds deeper customization, more than 5 languages, approximately 500 coordinators, and advanced analytics.
- Add-ons include examples such as Org.mapper, Non-desk workers, Languages ++, and Access ++, with some add-ons included in higher packages.

Public page evidence not available:

- Actual prices.
- Discounting or quote exception behavior.
- Customer segment distribution.
- Revenue, margin, or cost-to-serve by package.
- Add-on attach rates.
- Customer comprehension, churn, or sales friction.

## C. Diagnostic Hypothesis

Effectory's pricing mechanism appears to monetize customer complexity through package tiers, coordinator and language allowances, customization depth, analytics depth, and selected add-ons.

The diagnostic question is whether these package fences and add-ons capture value cleanly, or whether quote-based selling creates ambiguity, unnecessary sales effort, inconsistent package mapping, or discount leakage.

The public page supports a plausible diagnostic hypothesis, but it does not prove actual customer value, willingness to pay, cost to serve, margin, discounting, or leakage.

## D. Expected Outcome Engine Mapping

| Role | Outcome engine | Rationale |
| --- | --- | --- |
| Primary | `O2` Revenue per customer | Package depth, add-ons, customization, languages, coordinators, and analytics likely drive expansion and account value. |
| Secondary | `O4` Customer portfolio mix | Tiers may separate simpler customers from more complex enterprise needs. |
| Secondary | `O6` Cost to serve coverage | Customization, coordinators, languages, access, non-desk workers, and analytics likely affect implementation or support complexity. |
| Secondary | `O5` Price realization | Quote-based pricing may require governance to avoid inconsistent concessions or avoidable discounting. |

Expected diagnostic rules:

- `R2` for revenue per customer and value capture across usage, value, package, and add-on differences.
- `R4` for customer portfolio mix and segment/package fit.
- `R6` for cost-to-serve differences created by customization, implementation, access, analytics, and language complexity.
- `R5` for realized price governance if quote, discount, or exception leakage appears in internal data.

## E. Expected Causal Lever Mapping

| Role | Causal lever | Rationale |
| --- | --- | --- |
| Primary | `L4` Segmentation, versioning, and fences | Starter, Professional, and Expert create visible package versions and complexity fences. |
| Secondary | `L3` Value metric and nonlinear tariff alignment | Coordinator count, language count, access needs, employee population, analytics, and add-ons may act as value or complexity metrics. |
| Secondary | `L5` Bundling and modular architecture | Add-ons and included higher-tier capabilities shape bundle logic and expansion paths. |
| Secondary | `L7` Realized price governance | Quote-based pricing needs discount, approval, and exception discipline. |
| Secondary | `L8` Cost to serve allocation and ancillary pricing | Customization, implementation, languages, SSO, non-desk access, and analytics may create cost-to-serve differences. |

## F. Required Confirming Evidence Not Visible From The Public Page

- Revenue and ARPA by package.
- Upgrade and downgrade paths between Starter, Professional, and Expert.
- Add-on attach rates and add-on revenue by package.
- Customer segment, employee count, coordinator count, language count, and customization need.
- Gross margin and support or implementation cost by package and add-on.
- Quote, contracted, and invoice price data.
- Discount reasons, approval exceptions, renewal uplift, and win/loss.
- Customer comprehension of packages and add-ons.
- Churn, complaints, or sales friction tied to package complexity.

## G. Likely Missing Data

- Whether coordinator and language thresholds reflect customer value, cost, or both.
- Whether add-ons are perceived as optional value modules or hidden mandatory capabilities.
- Whether higher-tier inclusions reduce choice complexity or under-monetize heavy usage.
- Whether quote-based pricing improves fit or creates price realization leakage.
- Whether customers self-select into the intended package based on complexity.
- Whether sales teams apply package fences consistently.

## H. Recommendation State Expectation

Expected recommendation state: `Pilot only`.

Rationale: the public page provides enough evidence for a plausible diagnostic hypothesis, but not enough local evidence to recommend a pricing mechanism. The answer should remain bounded because actual prices, package economics, add-on attach behavior, customer comprehension, discounting, and quote governance are not visible from the public page.

If key price realization or cost-to-serve data is unavailable during a future internal test, specific mechanisms should downgrade to `Do not recommend yet`.

## I. Pricing Mechanism Options To Test

- Clarify tier fences around complexity markers: coordinators, languages, customization, analytics, access, and integration needs.
- Simulate a complexity-based value metric or scoring model for quote guidance.
- Test add-on packaging rules: included-in-tier, paid add-on, or migration trigger.
- Define quote guardrails around package floor, add-on discounting, and exception approvals.
- Test bundle simplification for common customer profiles such as simple pulse survey, multinational HR program, and complex enterprise analytics.
- Pilot sales enablement that maps customer complexity to Starter, Professional, Expert, and add-ons without exposing rigid public prices.

## J. Recommended First Pilot

Recommended first pilot: Brain-only complexity-to-package quote guidance for a bounded sales segment.

The pilot should map customer complexity signals to package recommendation and add-on guidance:

- Employee population or respondent coverage.
- Coordinator or admin count.
- Language needs.
- SSO or access requirements.
- Custom segments and reporting complexity.
- Advanced analytics needs.
- Non-desk worker access.
- Org mapping needs.

The pilot should not change public pricing. It should test whether internal quote guidance improves package fit, add-on attach, price realization, and sales clarity.

## K. Hard Stops

- No quote, contracted price, or invoice data.
- Discount reasons cannot be separated from strategic competitive concessions.
- Package usage and add-on attach data are unavailable.
- Coordinator, language, and customization thresholds are not tied to value or cost evidence.
- Sales can bypass package guidance without approval visibility.
- Add-ons are actually mandatory capabilities but presented as optional.
- Customer fairness or transparency risks cannot be reviewed.

## L. Validation Plan

| Area | Plan |
| --- | --- |
| Scope | One region, customer segment, or sales team. |
| Comparison | Matched historical quotes or a comparable untreated sales segment. |
| Leading metrics | Package recommendation accuracy, sales cycle time, exception rate, add-on attach rate, customer package comprehension, quote revision count. |
| Lagging metrics | ARPA, expansion revenue, net realized price, gross margin, win rate, renewal uplift, downgrade rate, churn or complaints. |
| Success threshold | Higher package fit and add-on monetization without lower win rate, longer sales cycle, higher complaint rate, or increased discount exceptions. |
| Failure threshold | Guidance increases confusion, pushes customers into unsuitable tiers, triggers discount workarounds, or fails to improve realized price or margin. |

## M. Governance Risks

- Quote opacity: customers may not understand why packages differ.
- Fairness risk: similar customers may receive inconsistent package or discount treatment.
- Hidden-fee risk: add-ons may feel mandatory after the sales process begins.
- Complexity risk: too many add-ons can undermine clear package choice.
- Sales-governance risk: quote-based pricing can create inconsistent exceptions.
- Customer backlash risk: migration triggers may feel punitive if thresholds are unclear.
- Compliance risk: accessibility, employee data, and HRIS/SSO-related claims should remain accurate and transparent.

## N. Strong Advisory Answer

A strong advisory answer will:

- Use the public page only as evidence of package structure, not as proof of economics.
- Keep `O2` and `L4` primary while using `O4`, `O6`, `O5`, `L3`, `L5`, `L7`, and `L8` as secondary lenses.
- Explain how customer complexity could map to package value, cost, add-on logic, and quote governance.
- Recommend a bounded internal pilot instead of public pricing changes.
- Name missing data, hard stops, validation metrics, and governance risks.
- Keep `promotion_status: brain_only`.

## O. Weak Advisory Answer

A weak advisory answer would:

- Claim Effectory should publish prices, raise prices, or change packages based only on the public page.
- Treat coordinator count, languages, or add-ons as proven value metrics without customer, usage, revenue, or cost evidence.
- Ignore quote governance and price realization risk.
- Recommend broad public pricing, Layer 1 work, hidden JSON changes, or case production.
- Omit hard stops, customer transparency risks, or sales exception risks.

## P. Brain-Only Or Later Layer 1 Production

This case should remain Brain-only for this execution.

It may be considered later as a Layer 1 case candidate only after explicit governance approval and a separate scoped plan. Minimum prerequisites for later consideration:

- Stable source capture policy.
- Clear case-production purpose.
- Verified public evidence.
- No unresolved concern that private commercial data would be required to make the public case meaningful.
- Separate approval to touch production case contracts, public pages, hidden JSON, or `case-library.js`.

## Q. Advisory Output Summary

```json
{
  "client_challenge": "How should Effectory design or refine its pricing mechanism to monetize value across different customer complexity levels while keeping package choice clear and avoiding unnecessary sales/pricing leakage?",
  "diagnosed_problem": "Effectory appears to use package versions, add-ons, and quote-based pricing to monetize customer complexity, but the public page cannot prove whether these fences capture value cleanly, cover cost-to-serve differences, or prevent unnecessary quote and discount leakage.",
  "primary_outcome_engine": {
    "code": "O2",
    "name": "Revenue per customer"
  },
  "secondary_outcome_engines": [
    {
      "code": "O4",
      "name": "Customer portfolio mix"
    },
    {
      "code": "O6",
      "name": "Cost to serve coverage"
    },
    {
      "code": "O5",
      "name": "Price realization"
    }
  ],
  "primary_causal_lever": {
    "code": "L4",
    "name": "Segmentation, versioning, and fences"
  },
  "secondary_causal_levers": [
    {
      "code": "L3",
      "name": "Value metric and nonlinear tariff alignment"
    },
    {
      "code": "L5",
      "name": "Bundling and modular architecture"
    },
    {
      "code": "L7",
      "name": "Realized price governance"
    },
    {
      "code": "L8",
      "name": "Cost to serve allocation and ancillary pricing"
    }
  ],
  "recommendation_state": "Pilot only",
  "recommendation_state_rationale": "Pilot only because public package evidence supports a plausible complexity monetization hypothesis, but actual prices, revenue, margin, add-on attach behavior, customer comprehension, discounting, and quote governance evidence are not visible.",
  "recommended_first_pilot": "Run a Brain-only complexity-to-package quote guidance pilot for one bounded sales segment without changing public pricing.",
  "promotion_status": "brain_only"
}
```

## R. Recommendation

Execute this as a Brain-only real advisory test. Do not promote it to Layer 1, production case work, public page work, hidden JSON, `case-library.js`, navigation, automation, pricing artifacts, README, or project handoff updates in this execution.
