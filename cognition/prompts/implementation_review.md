# Prompt: Implementation Review For Pricing Case Output

Use this prompt when ChatGPT must review a Codex-produced pricing case page before merge or publication.

## Required Reading

Review the implementation against:

1. `/cognition/brain_lookup.md`
2. `/cognition/workbench_artifact.md`
3. `/cognition/constitution/pricing_constitution.md`
4. the case-specific `cases/pricing/[slug]-layer1.md`
5. `/cases/pricing/CASE_SCHEMA.md`
6. `/cases/pricing/CASE_LAYER1_SCHEMA.md`
7. `/cases/pricing/COMPONENT_LIBRARY.md`
8. `/cases/pricing/CASE_TEMPLATE.html`
9. `/cases/pricing/CASE_VISUAL_DESIGN.md`
10. `/cases/pricing/case-library.js`
11. `/cases/pricing/index.html`

## Review Standard

The review must decide whether the Codex output is faithful to the approved Layer 1 artifact and safe to publish.

Evaluate the public page as a decision interface, not a prose report. Do not introduce new schema fields, component tokens, rendering systems, pricing claims, or retrieval requirements during review.

## Required Checks

Check:

- the Workbench Artifact has `Implementation Gate` status `READY_FOR_CODEX`
- the public HTML follows `CASE_TEMPLATE.html` section intent and page shell requirements
- public copy preserves the approved pricing logic without adding unsupported claims
- the hidden JSON conforms to `CASE_SCHEMA.md`
- hidden JSON maps back to the approved Layer 1 Case JSON
- `decision_core` is complete and visible logic matches it
- the approved Canonical Insight Sentence is preserved
- `primary_component` is exactly one valid token from `COMPONENT_LIBRARY.md`
- the rendered mechanism makes the bill-changing driver clear
- the reader can identify what changes the bill within 10 seconds
- the monetization mechanism is visually and textually obvious
- the strategic tension is clear without reading the entire page
- the page can be mentally summarized in one sentence
- the case creates a reusable pricing mental model
- the Generalizable Pricing Principle remains visible in the page logic
- the case is useful for EVAC teaching, not just technically correct
- the pricing artifact is local, dated, and relevant to the official source
- `case-library.js` includes only lightweight index data and links to the correct page
- navigation, backlinks, counts, sorting, and filters remain consistent with the static-site contracts
- Brain Update needs are identified before or after merge

## Required Output

Return:

```md
# Implementation Review

Status: PASS | FAIL

## Layer 1 Fidelity
[Assess whether the page, hidden JSON, and index entry preserve the approved Workbench Artifact.]

## Schema And Hidden JSON
[Assess CASE_SCHEMA compliance, decision_core completeness, schema_version, and component validity.]

## Public Page Rendering
[Assess whether the page follows CASE_TEMPLATE and CASE_VISUAL_DESIGN as a decision interface.]

## Cognitive Clarity
[Assess whether the reader can identify what changes the bill within 10 seconds, whether the monetization mechanism is visually and textually obvious, whether the strategic tension is clear without reading the entire page, whether the page behaves as a decision interface rather than a prose report, and whether the approved Canonical Insight Sentence has been preserved.]

## Strategic Compression
[Assess whether the page can be mentally summarized in one sentence, whether the strategic tension is memorable, whether the page creates a reusable pricing mental model, whether the Generalizable Pricing Principle remains visible in the page logic, and whether the case is useful for EVAC teaching rather than only technically correct.]

## Pricing Artifact And Evidence
[Assess local artifact, dates, official-source support, and unsupported-claim risk.]

## Library And Navigation
[Assess case-library.js entry, pricing index behavior, backlinks, dynamic counts, sorting, and filters.]

## Brain Update
[List related cases, concepts, backlinks, or teaching-sequence updates required before merge or after merge.]

## Required Fixes Before Merge
[List fixes. If Status is PASS, write "None."]
```

## PASS Criteria

Return `PASS` only if:

- the implementation follows an approved Workbench Artifact
- hidden JSON conforms to `CASE_SCHEMA.md`
- public rendering follows the template and visual design contracts
- Cognitive Clarity passes
- Strategic Compression passes
- no unsupported pricing logic is introduced
- case-library.js remains lightweight
- navigation and library behavior are intact
- required pre-merge Brain Update items are complete or explicitly listed as blockers

Return `FAIL` if any condition above is not met.
