# Site Navigation Contract

This site is published as static HTML on GitHub Pages. Navigation must stay usable without JavaScript and without a build step.

## Global Navigation

Every major sidebar navigation block should include these links:

- Home
- Thoughts
- Courses
- Case Library

## Library Navigation

Pages that expose library navigation should include:

- Pricing Cases

Course pages should include both a path to Case Library and a direct path to Pricing Cases so readers are not trapped inside one course section. Case library pages should include the Pricing Cases library link. Pricing case detail pages should keep the Pricing Cases section with Library Home and the active case link where useful.

## Relative Paths

Use relative paths based on page depth:

- Root pages: `cases/index.html` and `cases/pricing/index.html`
- `courses/*/index.html`: `../../cases/index.html` and `../../cases/pricing/index.html`
- `courses/index.html`: `../cases/index.html` and `../cases/pricing/index.html`
- `cases/index.html`: `pricing/index.html`
- `cases/pricing/*.html`: `../index.html` for Case Library and `index.html` for Pricing Cases Library Home

## Constraints

- Do not require JavaScript for basic navigation.
- Do not introduce a build system or templating framework unless the repository already has one.
- Do not move pricing case analysis or hidden JSON into navigation or index data.
- Keep `cases/pricing/case-library.js` as a lightweight index for sorting, previews, and dynamic counts.
