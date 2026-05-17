# Cognition Governance

This directory defines an upstream reasoning governance layer for pricing case generation.

It does not replace the production pricing case contracts.

## Brain Workflow v1

Brain Workflow v1 formalizes the pricing case production flow:

```text
Brain Lookup
-> Workbench Artifact
-> Constitutional Review
-> Implementation Gate
-> Human Gate
-> Codex Implementation from Layer 1
-> Implementation Review
-> Post Merge Audit
-> Brain Update
```

This workflow is a repo-level protocol. It does not add a database, build step, server runtime, automated retrieval engine, automated orchestration layer, or publishing trigger.

The repo now contains a reusable implementation execution prompt for converting an approved Workbench Artifact into a public pricing case page. Implementation still requires explicit human approval through the Human Gate.

## Dry Run Protocol

Before expanding automation, Brain Workflow v1 must be tested on real candidate pricing cases.

The first dry run should stop at approved Workbench Artifact before Codex implementation.

Suggested dry-run sequence:

1. Select one candidate pricing case.
2. Complete Brain Lookup.
3. Draft Workbench Artifact.
4. Run Constitutional Review.
5. Resolve required fixes.
6. Set Implementation Gate to `READY_FOR_CODEX` only if all checks pass.
7. Set Human Gate to `APPROVED_FOR_IMPLEMENTATION` only when the human owner explicitly approves public-page implementation.
8. Do not implement HTML during the first dry run unless explicitly approved.

The purpose of the dry run is to test reasoning quality, not publishing speed.

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

The cognition layer clarifies how to think before producing Layer 1, how to authorize implementation, how Codex should execute from an approved Layer 1 artifact, and how to review implementation fidelity after Codex produces a page. It governs upstream reasoning and execution contracts. It does not create new production schemas, component tokens, rendering contracts, automation, retrieval, or agent orchestration.

## Workflow Roles

ChatGPT should read `/cognition` before generating a Layer 1 pricing brief, running Constitutional Review, or running Implementation Review.

Codex should implement only after the Workbench Artifact passes the Implementation Gate and the Human Gate records explicit approval. During implementation, Codex should use `/cognition/prompts/implement_from_layer1.md`, `/cases/pricing` production contracts, and the approved case-specific Layer 1 sidecar.

Linear can reference `/cognition/prompts` during workflow orchestration when a ticket requires Layer 1 generation or review.

No automated orchestration or trigger exists yet. Human approval remains a separate governance boundary before Codex implementation begins.

## Architecture Boundaries

`workbench_artifact.md` is the reasoning artifact contract.

`prompts/implement_from_layer1.md` is the implementation execution prompt.

`prompts/implementation_review.md` is the post-implementation audit contract.

`/cases/pricing/CASE_SCHEMA.md` is the canonical case schema.

`/cases/pricing/CASE_TEMPLATE.html` is the public rendering structure.

## Files

- `brain_lookup.md`: structured lookup protocol for relating a candidate case to existing cases, pricing concepts, component patterns, and teaching sequence before Layer 1 generation.
- `workbench_artifact.md`: approved Layer 1 sidecar contract and Implementation Gate for `cases/pricing/[slug]-layer1.md`.
- `constitution/pricing_constitution.md`: reasoning principles that govern pricing case cognition before Layer 1 output.
- `prompts/generate_layer1.md`: generation prompt for producing the nine Layer 1 artifacts required by the production Layer 1 schema.
- `prompts/constitutional_review.md`: review prompt for checking a Layer 1 brief against the constitution and production contracts.
- `prompts/implement_from_layer1.md`: reusable Codex execution prompt for converting an approved Workbench Artifact into a public pricing case HTML page after Implementation Gate and Human Gate approval.
- `prompts/implementation_review.md`: review prompt for checking Codex output against the approved Workbench Artifact, hidden JSON, case template, visual design, and library index.
