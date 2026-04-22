# Pricing Case Library Schema

This document is the operating contract for new pricing cases added to `cases/pricing/`.

## Purpose

Each case must help do at least one of the following:

1. Explain how a company captures value in practice.
2. Reveal a flaw or vulnerability in the pricing logic.
3. Show a positioning or price-competition opening.
4. Infer target-buyer differences from pricing structure.
5. Surface decision friction in the buying process.
6. Expose how cost structure and delivery risk show up in value capture.

Cases are not descriptive pricing writeups. If the page cannot extract a reusable pricing principle, it does not belong in the library.

## Required Fields

Each case record must include:

- `slug`
- `title`
- `company`
- `industry`
- `market`
- `reviewed_at`
- `framework_tags[]`
- `mechanism_type`
- `counterintuitive_score`
- `teaching_value_score`
- `strategic_gap_score`
- `portability_score`
- `evidence_strength_score`
- `verdict`
- `transferable_principle`
- `pricing_surface`
- `mechanism_summary`
- `target_buyer_inference`
- `decision_friction`
- `exposure_logic`
- `logic_flaw`
- `strategic_opportunity`
- `source_urls[]`
- `page_path`

## Acceptance Gate

A case may be added to the live library only if all of the following are true:

- It cites at least 2 public primary sources.
- It includes a clear `transferable_principle`.
- `counterintuitive_score >= 4`
- `teaching_value_score >= 4`
- `verdict = Accept`

If the case is interesting but not ready:

- use `verdict = Revise`
- do not feature it as a lead teaching case

If the case is mainly descriptive:

- use `verdict = Reject-as-library-case`
- do not add a live case page

## Page Template

Every published case page must include these sections:

1. Case title and one-sentence claim
2. Quick facts
3. Pricing surface
4. Mechanism summary
5. Target buyer inference
6. Decision friction
7. Exposure / risk logic
8. Logic flaw / vulnerability
9. Strategic opportunity
10. Transferable pricing principle
11. Framework links
12. Scoreboard
13. Primary sources

## Automation Rules

The weekly case automation should:

1. Start from the latest `main`.
2. Create a fresh branch named `codex/pricing-case-YYYYMMDD-<company-or-theme>`.
3. Evaluate candidate cases using public primary sources first.
4. Produce at most 1 case per run.
5. Update:
   - `cases/pricing/index.html`
   - `cases/pricing/case-library.js`
   - the selected case page under `cases/pricing/`
   - the EVAC library entry only if the featured case changes
6. Open a draft PR when a case passes the acceptance gate.
7. Skip repo edits and PR creation if no candidate qualifies.
