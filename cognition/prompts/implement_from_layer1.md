# Prompt: Implement Pricing Case From Approved Layer 1

Use this prompt when Codex must convert an approved Layer 1 Workbench Artifact into a public pricing case HTML page.

This prompt is a controlled implementation instruction, rendering governance prompt, fidelity-preservation contract, and standard execution procedure.

It is not a reasoning-generation prompt, replacement for Layer 1, orchestration engine, automated trigger, auto-publishing system, or merge instruction.

## Usage Example

Use this prompt when implementing:

```text
cases/pricing/[slug]-layer1.md
```

Target output:

```text
cases/pricing/[slug].html
```

## Preconditions

Implementation may begin only when both gates are satisfied:

1. `Implementation Gate = READY_FOR_CODEX`
2. `Human Gate = APPROVED_FOR_IMPLEMENTATION`

`READY_FOR_CODEX` means the reasoning artifact is technically complete and governance-valid. The Workbench Artifact has passed Layer 1 completeness, schema readiness, component validity, Constitutional Review, evidence scoping, and pricing artifact planning.

`APPROVED_FOR_IMPLEMENTATION` means the human owner has decided the case should become a public page.

Codex is not authorized to bypass Human Gate approval.

If either gate is missing, unclear, blocked, or weaker than the required status, stop and report the missing approval or readiness condition. Do not implement the public HTML page.

## Required Source Inputs

Before editing the target page, read:

1. the specific Layer 1 artifact: `cases/pricing/[slug]-layer1.md`
2. `cases/pricing/CASE_SCHEMA.md`
3. `cases/pricing/CASE_LAYER1_SCHEMA.md`
4. `cases/pricing/COMPONENT_LIBRARY.md`
5. `cases/pricing/CASE_TEMPLATE.html`
6. `cases/pricing/CASE_VISUAL_DESIGN.md`
7. `cases/pricing/case-library.js`
8. `cognition/prompts/implementation_review.md`

Use `/cases/pricing` as the production source of truth for canonical case structure, page structure, component tokens, visual design, public page behavior, library indexing, and navigation expectations.

Use `/cognition` as the upstream reasoning and execution-contract layer.

## Layer 1 Fidelity Rules

Layer 1 governs rendering. Rendering does not silently rewrite Layer 1.

Preserve:

- approved reasoning
- `decision_core`
- `strategic_logic`
- Canonical Insight Sentence
- Generalizable Pricing Principle
- approved `primary_component`
- bill-changing logic
- reasoning boundaries and uncertainty notes
- approved evidence scope and screenshot needs

Do not:

- rewrite the monetization logic
- change the approved `primary_component`
- invent unsupported causal claims
- add unsupported pricing numbers
- introduce ontology drift
- create new drivers, tiers, segments, upgrade triggers, formula variables, or pricing moves that are absent from the approved Layer 1 artifact
- turn uncertainty notes into stronger claims

If implementation reveals a reasoning gap, stop and request a Workbench Artifact revision before changing the public page logic.

## Hidden JSON Rules

The hidden JSON inside the page is the reasoning source inside the public HTML page.

Require:

- compliance with `CASE_SCHEMA.md`
- `schema_version` equal to `"1.0"`
- schema-valid enum values only
- canonical case structure preserved
- hidden JSON aligned with the approved Layer 1 Case JSON
- `decision_core`, `strategic_logic`, `decision_alternatives`, `bill_examples`, `boundary_crossing_map`, `decision_priority`, and `reasoning_error_check` preserved without unsupported logic changes

If a proposed enum value is invalid, use the nearest schema-valid value and document the substitution.

Do not duplicate hidden JSON into `case-library.js`.

## Rendering Rules

The public page must behave as a decision interface, not a prose report.

Require:

- the bill-changing mechanism is understandable within 10 seconds
- strategic tension remains visible
- pricing state transitions remain visible
- component rendering follows the approved `primary_component`
- section order follows `CASE_TEMPLATE.html`
- analytical artifacts are rendered as visual decision patterns, not repeated paragraph cards
- the page preserves what is monetized, what changes the bill, and who pays more and why

Use existing reusable render structures where they fit the approved Layer 1 artifact, including:

- strategic logic strips
- driver logic renderers
- boundary crossing maps
- bill example tables
- reasoning error checks

Do not define new component systems, new component tokens, visual ontologies, graph grammars, JavaScript frameworks, build tooling, or orchestration layers.

## Evidence And Assets

Use official artifacts whenever possible.

Require:

- official pricing pages, support pages, documentation, terms, filings, or company-owned sources when available
- local screenshots preferred over hotlinks
- dated screenshot and source review metadata
- no random third-party imagery
- no remote screenshot proxies for finished cases
- explicit placeholder notes if screenshots are still missing

Do not invent exact prices, thresholds, formulas, tiers, or billing effects. If exact public pricing is unavailable, use clearly labeled illustrative or public price-band language consistent with the approved Layer 1 artifact.

## `case-library.js` Rules

Update `case-library.js` only when a public page is actually being added to the library.

Require:

- lightweight index entries only
- no duplication of full hidden JSON
- no overriding canonical case analysis
- minimal changes only
- page path, title, company, industry, market, reviewed date, mechanism summary, transferable principle, and optional lightweight summaries consistent with the public page and hidden JSON

`case-library.js` is not the system of record for case analysis.

## Implementation Procedure

1. Confirm both gates:
   - `Implementation Gate = READY_FOR_CODEX`
   - `Human Gate = APPROVED_FOR_IMPLEMENTATION`
2. Read the required source inputs.
3. Map the approved Layer 1 Case JSON into the hidden JSON block in the target HTML page.
4. Use `CASE_TEMPLATE.html` for public section order and page shell.
5. Use `CASE_VISUAL_DESIGN.md` to render the approved artifacts as decision visuals.
6. Render exactly one approved `primary_component` from `COMPONENT_LIBRARY.md`.
7. Add or reference local evidence assets according to the approved evidence plan.
8. Add a lightweight `case-library.js` entry only if the page is ready for the public library.
9. Verify links, references, hidden JSON integrity, visual hierarchy, and library behavior.
10. Do not merge, publish, or auto-trigger any downstream workflow.

## Final Review Requirement

Before returning, Codex must mentally check the generated page against:

```text
cognition/prompts/implementation_review.md
```

Especially check:

- Cognitive Clarity
- Strategic Compression
- Layer 1 fidelity
- reasoning compression
- hidden JSON integrity
- navigation and library integrity

If the page would fail Implementation Review, fix the implementation when the fix is rendering-only. If the fix requires changing approved reasoning, stop and request a Workbench Artifact revision.
