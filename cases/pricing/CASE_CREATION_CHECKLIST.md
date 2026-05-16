# Pricing Case Creation Checklist

Use this checklist when creating or revising a production pricing case.

## 1. Layer 1 Brief

- Generate or revise the Layer 1 analytical brief.
- Check the brief against `CASE_LAYER1_SCHEMA.md`.
- Confirm the primary component uses a token from `COMPONENT_LIBRARY.md`.
- Keep the Layer 1 file beside the case page as `cases/pricing/[slug]-layer1.md`.

## 2. Public Case Page

- Start from `CASE_TEMPLATE.html` for new pages.
- Preserve the standard section order and Case Snapshot sidebar.
- Include the required company lockup in the hero.
- Keep public copy concise and teaching-oriented.
- Embed the hidden JSON schema required by `CASE_SCHEMA.md`.

## 3. Pricing Artifact

- Capture the pricing page or official pricing artifact.
- Store it under `assets/pricing-artifacts/[slug]/`.
- Stamp the visible page copy with capture and review dates.
- Avoid remote image dependencies for the case visual.

## 4. Library Index

- Add or update the record in `case-library.js`.
- Keep the index lightweight: title, company, industry, market, review date, mechanism summary, transferable principle, optional preview summaries, and page path.
- Do not move canonical case analysis into `case-library.js`.

## 5. Verification

- Open the case page locally.
- Check the hero lockup, pricing artifact, back link, section order, and hidden JSON.
- Check the Pricing Cases index count, sorting, filters, and card link.
- Check Home and Case Library dynamic counts.
- After publishing, compare key online files against local files and account for GitHub Pages cache.
