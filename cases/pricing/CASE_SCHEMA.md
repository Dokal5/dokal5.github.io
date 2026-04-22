# Pricing Case Template

This file is the working template and quality standard for new pages added under `cases/pricing/`.

## Purpose

Each case should do three things clearly:

1. Show how the pricing structure actually works.
2. Explain where the buying friction or strategic weakness sits.
3. Leave the reader with a reusable commercial takeaway.

The page should stay abstract and teachable. It is not a dump of research notes, framework mapping, or internal review commentary.

## Public Page Rules

For every published case page:

- Write for a public reader, not for an internal PR review.
- Keep the page focused on the case itself, not on which framework it matches.
- Do not include a separate `Framework Links` section.
- Do not include a separate `Transferable principle` or callout box.
- Do not add extra “why this belongs in EVAC/Marketing” explanation on the page.
- Primary sources must use APA-style reference entries.
- The key analytical sentence in each major section should be bolded inline.

## Required Section Order

Every pricing case page should follow this order:

1. `Case Claim`
2. `Tier Ladder Analysis`
3. `Mechanism Summary`
4. `Target Buyer Inference`
5. `Decision Friction`
6. `Exposure and Risk Logic`
7. `Logic Flaw and Vulnerability` or `Logic Flaw, Vulnerability, and Strategic Opportunity`
8. `Primary Sources`

If a visual helps, place the pricing-page screenshot inside the pricing section rather than creating a separate standalone section.

## Writing Rules By Section

### 1. Case Claim

- Open with the most important analytical claim.
- The strongest takeaway sentence in the paragraph should be in `<strong>...</strong>`.
- Do not add a separate principle box below it.

### 2. Tier Ladder Analysis

- Analyze the visible tier ladder and what matters commercially.
- State how many visible tiers exist.
- Explain the likely target buyer for each tier.
- Name how each tier is labeled on the page.
- Identify the anchor price for each tier when public pricing is shown.
- State the price gap between tiers when the math is visible.
- Explain the value-add argument used to push buyers upward.
- Include the screenshot and a short caption if useful.
- Bold the sentence that explains why the ladder matters.

### 3. Mechanism Summary

- Explain the mechanism in plain language.
- Bold the sentence that states what the real mechanism is.

### 4. Target Buyer Inference

- State who this structure is really for.
- If using bullets, each bullet must have a clear label and interpretation.
- Bold the most decision-relevant inference.

### 5. Decision Friction

- Explain where the buyer has to think, classify, estimate, or hesitate.
- Bold the sentence that names the main friction.

### 6. Exposure and Risk Logic

- Explain what risk the company takes on by pricing this way.
- Bold the sentence that names the core exposure.

### 7. Logic Flaw / Vulnerability / Strategic Opportunity

- Name the weakness clearly.
- Explain why that weakness matters.
- End with the strategic opening created by the weakness.
- Bold the sentence that identifies the core flaw or the key strategic conclusion.

### 8. Primary Sources

- Use APA-style entries only.
- Use organization name as author when no individual author is shown.
- Include retrieval date and full URL.
- Example format:
  - `<cite>Figma.</cite> (n.d.). <a href="...">Plans & pricing</a>. Retrieved April 22, 2026, from <a href="...">https://...</a>`

## Things To Remove From Old Drafts

If you are revising an older case, remove these elements when present:

- `Framework Links`
- `Transferable principle` callout panels
- PR-style evaluation commentary written for merge decisions
- repetitive framework tags inside the body

## Metadata Rules

The case record in `case-library.js` may still keep structured metadata for internal sorting and future automation, including:

- `framework_tags[]`
- scoring fields
- `verdict`
- `transferable_principle`

But those fields do not all need to be rendered on the public page.

## Acceptance Gate

A case is ready for the live site only if:

- it has at least 2 public primary sources
- the argument is analytically reusable
- the section structure matches this template
- the body has been cleaned of framework-justification sections and principle callout boxes
- the references are in APA-style format

## Automation Rule

Any future automation or manual drafting flow should generate copy in this exact public-facing shape first, then store extra scoring or framework metadata only in the data layer if needed.

## HTML Starter

Use `cases/pricing/CASE_TEMPLATE.html` as the copyable starting point for any new published pricing case page.
