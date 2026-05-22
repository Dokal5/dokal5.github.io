# Pricing Diagnostic Stress Test Plan

Task name: `brain/pricing-diagnostic-stress-test-v1`

This plan defines a Brain-only stress test for the Pricing Diagnostic Architecture. It does not create production authority, Layer 1 requirements, public rendering requirements, hidden JSON fields, navigation entries, automation changes, or `case-library.js` records.

Default promotion status for all stress-test outputs: `brain_only`.

## A. Overall Stress Test Design

The stress test checks whether the diagnostic module can consistently answer:

> "How should we design our pricing mechanism?"

The test uses the current files in this folder as source of truth:

- `PRICING_DIAGNOSTIC_ARCHITECTURE.md` for outcome engines and causal levers.
- `DIAGNOSTIC_RULES.md` for symptom-to-diagnostic mappings.
- `REQUIRED_DATA_FIELDS.md` for minimum data and likely data quality risks.
- `VALIDATION_GATES.md` for recommendation states, hard stops, and governance discipline.
- `PRICING_DIAGNOSTIC_OUTPUT_SCHEMA.md` for the advisory output structure.

Success criteria:

- Each challenge maps cleanly to at least one diagnostic rule.
- Each challenge produces a conservative recommendation state.
- Each answer includes confirming evidence, minimum data, likely missing data, hard stops, validation plan, governance risks, and good/bad answer criteria.
- Any gaps remain advisory findings only unless separately approved for production work.

## B. Stress Test Case Matrix

| Case | Client challenge | Primary outcome | Secondary outcomes | Primary lever | Secondary levers | Main rules |
| --- | --- | --- | --- | --- | --- | --- |
| SaaS trial conversion | Many free trial users, few convert to paid | O1 | O3, O2 | L1 | L2, L4 | R1; R3 if invoice shock or churn appears |
| B2B service margin | Revenue grows, but margins are poor because small customers need too much support/customization | O6 | O4, O2 | L8 | L4, L3 | R6, R4 |
| Marketplace liquidity | Demand exists, but supply is thin in key segments and match rates are weak | O8 | O1, O6 | L12 | L4, L11 | R8; R10 if demand/capacity state matters |
| Discount leakage | Sales discounts heavily and invoice prices are far below list prices | O5 | O2, O4 | L7 | L13 | R5 |
| Usage monetization | High-usage customers pay almost the same as low-usage customers | O2 | O6, O4 | L3 | L4, L5 | R2; R6 if cost exposure matters |

## C. Expected Diagnostic Output Template

Each stress-test answer must include:

- Client challenge.
- Expected primary outcome engine.
- Expected secondary outcome engines.
- Expected primary causal lever.
- Expected secondary causal levers.
- Required confirming evidence.
- Minimum required data.
- Likely missing data.
- Expected recommendation state.
- Hard stop conditions.
- Validation plan.
- Governance risks.
- What would count as a good diagnostic answer.
- What would count as a bad diagnostic answer.

Each output should also preserve the schema concepts:

- `required_confirming_evidence`
- `hard_stop_conditions`
- `recommendation_state_rationale`
- `promotion_status: brain_only`

## D. Architecture Coverage Checks

For each case, review four coverage questions:

- Rules: does `DIAGNOSTIC_RULES.md` cover the challenge without awkward mapping?
- Data: does `REQUIRED_DATA_FIELDS.md` provide enough evidence categories for diagnosis?
- Gates: does `VALIDATION_GATES.md` prevent overconfident recommendations?
- Schema: can `PRICING_DIAGNOSTIC_OUTPUT_SCHEMA.md` express the stress-test output?

## E. Potential Gap Checks

The stress test should be conservative. It may identify possible future gaps, but it must not propose new production fields or production schema changes.

Specific weak spots to watch:

- B2B service margin: ambiguity between O6 cost coverage and O4 portfolio mix.
- Marketplace liquidity: overconfidence that price can solve what may be a product, operations, or acquisition constraint.
- Usage monetization: treating usage as customer value without proof.
- Discount leakage: failing to distinguish destructive leakage from strategic discounting.

## F. Execution Steps

1. Draft one Brain-only diagnostic answer per challenge.
2. Score each draft against the required diagnostic-output fields.
3. Score architecture fit across rules, data fields, validation gates, and schema.
4. Record the expected recommendation state for each case.
5. Summarize gaps as advisory findings only.
6. Recommend one final module readiness state:
   - Accept current module as ready for stress test.
   - Minor patch before stress test.
   - Important patch before stress test.

## G. Files Allowed For This Brain-Only Execution

Allowed Brain-only artifacts:

- `brain/pricing-diagnostics/STRESS_TEST_PLAN.md`
- `brain/pricing-diagnostics/STRESS_TEST_RESULTS.md`

No production-facing files should be modified.

## H. Validation Checks

After execution, verify:

- Every diagnostic output includes `promotion_status: brain_only`.
- No output implies production authority or Layer 1 schema changes.
- Every recommendation state has evidence-based rationale.
- Every `Recommend` or `Pilot only` output includes hard stops and measurable validation.
- Missing data downgrades confidence where appropriate.
- Governance checks cover fairness, transparency, cost, backlash, legal/compliance, and validation feasibility.
- No recommendation is based only on symptom matching.

## I. Recommendation Standard

The module should be accepted as ready for stress testing if all five challenge patterns map naturally to existing rules, data fields, validation gates, and output schema fields.
