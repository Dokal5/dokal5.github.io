---
name: marketing-course-page-editor
description: Use when creating or revising marketing course pages in this repository that should preserve the existing editorial design system, keep a strategic business-decision-maker tone, and follow the established page structure, cross-linking, and teaching logic used across the marketing course pages.
---

# Marketing Course Page Editor

Use this skill for edits to pages under `courses/marketing/`.

## Goal

Preserve the site's existing editorial identity while improving clarity, structure, and strategic usefulness.

The audience is **business decision makers**, not students.

## Design Rules

- Preserve the existing visual language:
  serif headlines, mono/technical body text, card layouts, warm off-white and black alternating sections, minimal but strong typography.
- Do not redesign pages unless explicitly asked.
- Prefer local refinements over global CSS changes.
- Reuse existing section, card, and grid patterns before creating new ones.
- Keep pages responsive. If adding dense content, ensure it still works on mobile, usually via stacked grids or horizontal table scrolling.

## Content Rules

- Write for strategic readers and operators.
- Prefer business implications, decision quality, market diagnosis, and operating logic over classroom-style explanation.
- Avoid vague phrases when a more concrete term is available.
- Make each section answer a distinct question.
- Reduce repetition between sections; each block should add a new layer of logic.
- When using frameworks, clarify what question each framework answers.

## Structural Rules

Default sequence for strategic marketing concept pages:

1. Hero:
   explain the core distinction and why it matters.
2. Decision framework:
   show the logic in explicit steps.
3. Diagnostic section:
   help the reader identify what is happening in practice.
4. Response section:
   explain what should change in message, proof, offer, channel, or retention logic.
5. Secondary framework section:
   only after diagnosis and response logic are clear.
6. Closing alignment section:
   summarize the strategic implication.

## Cross-Linking Rules

- If a page materially relates to another course page, add a visible reciprocal cross-link in the **hero** of both pages.
- Do not hide important cross-links only in body copy.
- Introduce the linked page explicitly:
  explain why the other page matters and what perspective it adds.
- Keep body cross-links only as supporting references, not as the primary discovery mechanism.

## Funnel / Journey Rules

When a page touches product life cycle, diffusion, adoption stages, or market development:

- Clarify that product life cycle answers:
  `Where is the market now?`
- Clarify that diffusion answers:
  `Who is buying now?`
- Clarify that customer journey / funnel answer:
  `How does the buyer move, and how should the firm respond at each step?`
- Make explicit that lifecycle and diffusion shape how the funnel should be designed.

## Tables And Diagnostic Tools

- When practical diagnosis matters, prefer compact comparison structures over long prose.
- Good formats:
  comparison tables, symptom grids, stage-by-stage diagnostic cards, or structured signal rows.
- For tables:
  make the first column scan quickly; use stronger label styling.
- If a table becomes too wide, wrap it in horizontal scroll rather than shrinking type too aggressively.

## Copy Preferences

- Prefer:
  `market response`, `growth direction`, `buyer type`, `proof required`, `adoption barrier`, `market stage`.
- Avoid overusing:
  `logic` when a more specific term is available.
- Keep section intros short and purposeful.
- Use conclusion sections to reinforce executive takeaway, not to repeat the page.

## Editing Workflow

1. Read the full page before editing.
2. Identify the page's main decision flow.
3. Tighten section order and transitions before adding more content.
4. Update related pages too if the conceptual relationship changes.
5. Preserve existing interactions and only update JS copy/content when needed.
6. After edits, read the affected sections end-to-end to ensure the page now feels like one coherent argument.

## Current Repository Conventions

- Important related pages currently include:
  `courses/marketing/product-life-cycle-and-diffusion.html`
  `courses/marketing/customer-journey-and-funnel.html`
- These two pages should cross-reference each other in the hero.
- Related-page links should be visibly introduced, not buried.

