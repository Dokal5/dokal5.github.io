---
name: pricing-case-page-editor
description: Use when creating or revising pricing case pages under cases/pricing so published pages keep the established case structure, concise public analysis, and required company icon lockup.
---

# Pricing Case Page Editor

Use this skill for edits to pages under `cases/pricing/`.

## Goal

Keep pricing case pages consistent, public-facing, and easy to scan.

## Required Hero Pattern

Every published pricing case detail page must include a company lockup immediately after `.case-kicker` and before the `<h1>`:

- `.case-company-lockup`
- `.case-company-icon`
- `.case-company-name`

If a verified local logo asset exists in `assets/images/cases/`, place the `<img>` inside `.case-company-icon`.

If no verified logo asset exists, use the text fallback:

```html
<div class="case-company-lockup">
  <div class="case-company-icon case-company-icon--text" aria-label="[Company Name] icon">[IN]</div>
  <div class="case-company-meta">
    <div class="case-company-name">[Company Name]</div>
  </div>
</div>
```

Do not publish a pricing case detail page without a visible company icon.

## Editing Workflow

1. Start from `cases/pricing/CASE_TEMPLATE.html` for new pages.
2. Check `cases/pricing/CASE_SCHEMA.md` before changing section order or page structure.
3. Preserve the standard section order and `Case Snapshot` sidebar.
4. Keep framework/scoring metadata in `case-library.js` unless the page explicitly needs public copy.
5. After edits, verify the hero includes the company icon lockup and that the page still links back to `cases/pricing/index.html`.
