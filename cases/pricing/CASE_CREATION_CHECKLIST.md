# Pricing Case Creation Checklist

Use this checklist when creating or revising a production pricing case.

## 1. Brain Lookup

- Run the lookup protocol in `/cognition/brain_lookup.md`.
- Identify related pricing cases or state why no close case exists yet.
- Name relevant pricing concepts, likely component pattern, teaching sequence fit, and evidence gaps.
- Do not generate an implementation-ready Layer 1 brief unless Brain Lookup status is `READY_FOR_LAYER_1`.

## 2. Workbench Artifact And Layer 1 Brief

- Generate or revise the Layer 1 analytical brief.
- Check the brief against `CASE_LAYER1_SCHEMA.md`.
- Confirm the primary component uses a token from `COMPONENT_LIBRARY.md`.
- Keep the Layer 1 file beside the case page as `cases/pricing/[slug]-layer1.md`.
- Structure the file as the Workbench Artifact defined in `/cognition/workbench_artifact.md`.
- Include the nine Layer 1 artifacts, Constitutional Review, and Implementation Gate.

## 3. Constitutional Review And Implementation Gate

- Run `/cognition/prompts/constitutional_review.md` before Codex implementation.
- Confirm Constitutional Review status is `PASS`.
- Confirm the Workbench Artifact Implementation Gate status is `READY_FOR_CODEX`.
- Resolve or explicitly scope unsupported pricing logic, evidence gaps, and artifact needs before implementation.

## 4. Public Case Page

- Start from `CASE_TEMPLATE.html` for new pages.
- Preserve the standard section order and Case Snapshot sidebar.
- Include the required company lockup in the hero.
- Keep public copy concise and teaching-oriented.
- Embed the hidden JSON schema required by `CASE_SCHEMA.md`.
- Ensure public copy and hidden JSON stay faithful to the approved Workbench Artifact.

## 5. Pricing Artifact

- Capture the pricing page or official pricing artifact.
- Store it under `assets/pricing-artifacts/[slug]/`.
- Stamp the visible page copy with capture and review dates.
- Avoid remote image dependencies for the case visual.

## 6. Freshness Review

For every new or revised case:

- Refresh official pricing or fee sources before updating the case.
- Update `reviewed_at` after manual evidence review.
- Update `pricing_artifact.source_reviewed_at` for the official source check.
- Update the local screenshot artifact if the visible pricing structure changed.
- Ensure `pricing_artifact.artifact_date` matches the dated local asset filename.
- Keep `case_status` as `current` unless the case is retained for teaching but no longer presented as current evidence.
- Mark `case_status` as `historical` when the mechanism is retained for teaching but no longer presented as current.
- Add a visible historical note when `case_status` is `historical`.

## 7. Library Index

- Add or update the record in `case-library.js`.
- Keep the index lightweight: title, company, industry, market, review date, case status, optional stale window, mechanism summary, transferable principle, optional preview summaries, and page path.
- Do not move canonical case analysis into `case-library.js`.

## 8. Implementation Review

- Run `/cognition/prompts/implementation_review.md` before merge or publication.
- Check the page against the approved Layer 1, `CASE_SCHEMA.md`, `CASE_TEMPLATE.html`, `CASE_VISUAL_DESIGN.md`, and `case-library.js`.
- Confirm hidden JSON, mechanism rendering, evidence artifact, navigation, index entry, sorting, filters, and counts.
- Treat `FAIL` as a blocker before merge.

## 9. Local Verification

- Run `node scripts/validate-pricing-cases.mjs` from the repository root.
- Open the case page locally.
- Check the hero lockup, pricing artifact, back link, section order, and hidden JSON.
- Check the Pricing Cases index count, sorting, filters, and card link.
- Check Home and Case Library dynamic counts.

## 10. GitHub PR And Post Merge Audit

- Use the PR for final human review and merge decision.
- After publishing, compare key online files against local files and account for GitHub Pages cache.
- Check the live GitHub Pages page, navigation, assets, library counts, sorting, and filters.
- Record any cache delay or live/local mismatch before treating the case as fully published.

## 11. Brain Update

- Before merge, add public backlinks or teaching-sequence links required by the case page.
- After merge, update internal related-case, concept, or teaching-sequence notes when needed.
- Ensure the published case becomes part of the pricing library knowledge network, not only a standalone page.
