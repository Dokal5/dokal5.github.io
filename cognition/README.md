# Cognition Governance

This directory defines an upstream reasoning governance layer for pricing case generation.

It does not replace the production pricing case contracts.

## Source Of Truth

`/cases/pricing` remains the production source of truth for pricing cases, including schema, Layer 1 requirements, component selection, public-page template, visual design, library indexing, and rendered case behavior.

Production implementation must continue to follow:

- `/cases/pricing/CASE_SCHEMA.md`
- `/cases/pricing/CASE_LAYER1_SCHEMA.md`
- `/cases/pricing/COMPONENT_LIBRARY.md`
- `/cases/pricing/CASE_TEMPLATE.html`
- `/cases/pricing/CASE_VISUAL_DESIGN.md`
- `/cases/pricing/case-library.js`
- `/cases/pricing/index.html`

## Purpose

`/cognition` exists before production implementation. It guides ChatGPT when reasoning about pricing mechanisms and generating Layer 1 analytical briefs.

The cognition layer clarifies how to think before producing Layer 1. It does not create new schemas, component tokens, rendering contracts, automation, retrieval, or agent orchestration.

## Workflow Roles

ChatGPT should read `/cognition` before generating a Layer 1 pricing brief.

Codex should use `/cases/pricing` production contracts when implementing or editing pricing case pages.

Linear can reference `/cognition/prompts` during workflow orchestration when a ticket requires Layer 1 generation or review.

## Files

- `constitution/pricing_constitution.md`: reasoning principles that govern pricing case cognition before Layer 1 output.
- `prompts/generate_layer1.md`: generation prompt for producing the nine Layer 1 artifacts required by the production Layer 1 schema.
- `prompts/constitutional_review.md`: review prompt for checking a Layer 1 brief against the constitution and production contracts.
