# Workbench Artifact Contract

The Workbench Artifact is the approved Layer 1 sidecar used by Brain Workflow v1 before Codex implementation.

It is a markdown production support artifact stored beside the public pricing case page. It is not a database, generated build artifact, external artifact store, or replacement for `/cases/pricing` contracts.

## Location

Use this path:

```text
cases/pricing/[slug]-layer1.md
```

The file should exist before public page implementation begins. For revisions to existing cases, update the same sidecar instead of creating a second artifact.

## Required Header

Every Workbench Artifact should start with:

```md
# [Case Title] Layer 1

- Status: Draft | Constitutional Review PASS | Implementation Ready | Production Support Artifact | Needs Revision
- Scope: Layer 1 analytical brief
- Case: [human-readable case name]
- Case ID: [case_id used in Case JSON]
- File slug: [slug used for the markdown and HTML filenames]
- Source page: `[slug].html`
- Reviewed: YYYY-MM-DD
```

Use `Implementation Ready` only after Constitutional Review returns `PASS` and all required fixes are resolved.

## Canonical Insight Sentence

Every Workbench Artifact must include a compressed reasoning memory after the Case Insight Brief.

Required format:

```md
## Canonical Insight Sentence

This case monetizes [what is monetized] by changing [what changes the bill] when [customer condition, usage condition, or boundary condition occurs].
```

Purpose:

This sentence becomes the compressed reasoning memory for future lookup, comparison, and teaching reuse.

## Generalizable Pricing Principle

Every Workbench Artifact must also state what the case teaches beyond itself.

Required format:

```md
## Generalizable Pricing Principle

This case illustrates that [general pricing principle] when [condition or boundary] because [causal logic].
```

Examples:

- This case illustrates that operational overload can become monetizable when supplier effort increases nonlinearly because pricing can transfer complexity cost to the customer segment creating it.
- This case illustrates that usage thresholds can protect entry-level adoption while monetizing heavy users when marginal usage intensity reveals higher willingness to pay.

## Required Sections

The Workbench Artifact must contain:

1. `Brain Lookup`
2. `Case Insight Brief`
3. `Canonical Insight Sentence`
4. `Generalizable Pricing Principle`
5. `Case JSON`
6. `Render Instruction`
7. `Strategic Logic`
8. `Decision Alternatives`
9. `Bill Examples`
10. `Boundary Crossing Map`
11. `Decision Priority`
12. `Reasoning Error Check`
13. `Constitutional Review`
14. `Implementation Gate`

The nine Layer 1 analytical artifacts must follow `/cases/pricing/CASE_LAYER1_SCHEMA.md`.

## Implementation Gate

Codex implementation may begin only when the Workbench Artifact shows:

- Brain Lookup status is `READY_FOR_LAYER_1`
- all nine Layer 1 artifacts are present
- `Case JSON.schema_version` is `"1.0"`
- `decision_core` is complete
- Canonical Insight Sentence is present
- Generalizable Pricing Principle is present
- 10-second bill logic is clear
- exactly one valid `primary_component` from `/cases/pricing/COMPONENT_LIBRARY.md` is selected
- Constitutional Review status is `PASS`
- unsupported logic risks are absent or explicitly resolved
- required source artifacts and screenshot needs are named

10-second bill logic is clear when a reviewer can quickly identify what changes the customer bill without reading the whole page.

Use this output shape:

```md
## Implementation Gate

Status: READY_FOR_CODEX | BLOCKED

Checks:
- Brain Lookup ready: PASS | FAIL
- Nine Layer 1 artifacts present: PASS | FAIL
- Case JSON schema-ready: PASS | FAIL
- Decision core complete: PASS | FAIL
- Canonical insight sentence present: PASS | FAIL
- Generalizable pricing principle present: PASS | FAIL
- 10-second bill logic clear: PASS | FAIL
- Primary component valid: PASS | FAIL
- Constitutional Review passed: PASS | FAIL
- Evidence risks resolved or scoped: PASS | FAIL
- Pricing artifact plan named: PASS | FAIL

Required fixes before Codex:
[None, or list fixes]
```

## Revision Rule

If implementation review finds that the public page needs logic changes, update the Workbench Artifact first, then update the HTML, hidden JSON, assets, or library index.

Layer 1 governs rendering. Rendering does not silently rewrite Layer 1.
