# Think with Dave

Static GitHub Pages site for decision frameworks, teaching notes, and pricing case studies.

The site is published from this repository as plain HTML, CSS, and JavaScript. There is no build step, package manager, or server-side runtime.

## Current Site Shape

- Home: overview of the knowledge garden and current content counts.
- Thoughts: standalone essays on strategy, value, and business-model logic.
- Courses: teaching pages for Marketing and Effective Value Capturing.
- Case Library: case-based teaching material.
- Pricing Cases: structured pricing mechanism cases rendered from static case pages and a lightweight index file.

As of the 2026-05-16 progress review, the site includes:

- 2 thought essays.
- 15 course pages.
- 7 published pricing cases.

## Pricing Case Workflow

Production pricing case work is governed by the contracts in `cases/pricing/`:

- `CASE_SCHEMA.md`
- `CASE_LAYER1_SCHEMA.md`
- `COMPONENT_LIBRARY.md`
- `CASE_TEMPLATE.html`
- `CASE_VISUAL_DESIGN.md`
- `CASE_CREATION_CHECKLIST.md`
- `case-library.js`

Use `cognition/` for upstream reasoning prompts and constitution checks before production implementation. Use `cases/pricing/` as the source of truth for production pages, schemas, public rendering, and index behavior.

## Local Verification

Because the site is static, most pages can be opened directly in a browser. For local HTTP testing:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Before publishing, check:

- `git status --short --branch`
- Home page pricing case count.
- Case Library pricing case count.
- Pricing Cases list sorting and filters.
- Latest pricing case detail page assets and back links.

## Deployment

The live site is:

```text
https://dokal5.github.io/
```

GitHub Pages cache may take up to 10 minutes to reflect a recent push.
