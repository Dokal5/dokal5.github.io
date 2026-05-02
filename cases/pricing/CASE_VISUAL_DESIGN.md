# Pricing Case Visual Design Contract

## Purpose

Public pricing case pages are decision interfaces, not prose reports.

The goal is to help readers understand:
1. what is monetized
2. what changes the bill
3. who pays more and why
4. what pricing logic is assumed to work
5. what decision should be tested first

This file defines how analytical artifacts should be visually rendered on public case pages.

It does not define:
1. canonical case data structure
2. Layer 1 analytical requirements
3. primary component token definitions
4. index records
5. source of truth for case logic

Those remain governed by:
1. CASE_SCHEMA.md
2. CASE_LAYER1_SCHEMA.md
3. CASE_TEMPLATE.html
4. COMPONENT_LIBRARY.md
5. case-library.js
6. index.html

## Core Design Principle

Do not render schema fields directly.

Render the decision pattern behind the schema.

A field-rich JSON object should not automatically become a paragraph-heavy card. The public page should compress the analytical structure into flow, comparison, transition, ranking, and stress-test visuals.

## Design Goal

A reader should understand the main point of each major section within 10 seconds.

The page should be scan-first, then explain.

Use:
1. flow before paragraph
2. comparison before repeated cards
3. transition before explanation
4. ranking before rationale
5. evidence before interpretation
6. short labels before long prose

Avoid:
1. paragraph-heavy cards
2. repeated field labels across many cards
3. direct JSON-to-card rendering
4. feature comparison tables unless the feature changes the bill
5. decorative visuals that do not explain pricing logic

## Public Page Visual Hierarchy

The public page should follow this hierarchy:

1. Evidence artifact
2. Core pricing insight
3. What changes the bill
4. Hypothesized causal chain
5. Primary pricing mechanism visual
6. Bill consequence examples
7. Architecture structure
8. Boundary transitions
9. Strategic tension
10. Decision moves
11. Test priority
12. Reasoning stress test
13. Sources

This hierarchy follows the fixed section order in CASE_TEMPLATE.html.

## Section Rendering Rules

### 01 Pricing Page Visual

Purpose:
Show the pricing artifact before interpretation.

Default rendering:
Local screenshot asset with source metadata.

Required visual elements:
1. local pricing screenshot
2. source URL
3. screenshot captured date
4. source reviewed date
5. short caption naming what to notice

Recommended layout:
Image left or top.
Caption and metadata right or below.

Do not:
1. use thum.io
2. use remote screenshot proxy
3. hotlink external screenshot images
4. use placeholder visuals for finished cases
5. show a broken image

Visual density rule:
The caption should not exceed two short paragraphs.

### 02 Core Insight

Purpose:
Expose the decision core before details.

Default rendering:
Three concise decision-core bullets.

Required visual elements:
1. what is monetized
2. what changes the bill
3. who pays more and why

Recommended labels:
Monetized
Bill changes when
Higher payers

Do not:
1. use generic business insight
2. repeat the full case logic
3. add long explanation

Visual density rule:
Each bullet should be one sentence.

### 03 Pricing Logic Deconstruction

Purpose:
Make the bill-changing mechanism explicit.

Default rendering:
Three answer cards.

Required cards:
1. Key driver
2. Scaling logic
3. Main upgrade condition

Required statement:
The bill changes when ______.

Do not:
1. explain pricing without naming the driver
2. add more than three primary cards
3. turn this into a feature list

Visual density rule:
Each card should contain one short label, one strong answer, and one short explanation.

### 04 Strategic Logic

Purpose:
Show the hypothesized causal chain.

Default rendering:
Canonical five-step strip.

Required sequence:
Customer Condition
→ Behavior Change
→ Pricing Driver
→ Billing Change
→ Financial Outcome

Required support:
Main Assumption
Main Failure Risk

Do not:
1. render DAGs
2. render network graphs
3. render Mermaid
4. use multi-directional arrows
5. repeat the whole chain as prose below the strip

Visual density rule:
Each node should be 2 to 8 words where possible.

### 05 Pricing Mechanism Logic

Purpose:
Render the primary_component visually.

Default rendering depends on primary_component.

#### If primary_component is tier_ladder

Render:
Vertical or stepped tier ladder.

Must show:
1. ordered tiers
2. anchor price or pricing state when public
3. what changes when moving up
4. upgrade trigger between tiers

Do not:
Turn it into a feature comparison table.

#### If primary_component is matrix

Render:
Two-axis pricing classification matrix.

Must show:
1. axis 1
2. axis 2
3. how crossing categories changes the bill
4. lower, higher, free, or restricted pricing states

Do not:
Use the matrix only to compare features.

#### If primary_component is driver_logic

Render:
Driver-to-bill flow.

Must show:
1. dominant driver
2. formula or bill consequence
3. input change
4. spending change

Recommended structure:
Driver
→ Pricing parameter
→ Bill effect
→ Customer consequence

#### If primary_component is trigger_path

Render:
Trigger path or threshold ladder.

Must show:
1. starting state
2. trigger condition
3. crossed boundary
4. new payment state
5. billing effect

#### If primary_component is value_extraction_map

Render:
Value flow map.

Must show:
1. where customer receives value
2. where activity flows
3. where company charges
4. resulting bill consequence

Recommended structure:
Customer value creation
→ Customer activity or usage flow
→ Company billing points
→ Final bill consequence

Do not:
Render a value_extraction_map as a plan comparison table.

Visual density rule:
The primary mechanism visual should be understandable without reading more than four short captions.

### 06 Bill Examples

Purpose:
Show how customer bills change under different scenarios.

Default rendering:
Comparison table or compact comparison grid.

Preferred columns:
1. Scenario
2. Base layer
3. Variable layer
4. Final bill logic
5. Pricing lesson

Use long cards only when:
There is only one bill example.

Do not:
1. render every BillExample field as repeated paragraphs
2. create three long cards with identical labels
3. invent exact prices
4. use unsupported precision

Visual density rule:
Multiple examples should be comparable horizontally or in compact rows.

### 07 Pricing Architecture

Purpose:
Show structure only.

Default rendering:
Architecture panels.

Required panels where relevant:
1. Tiers
2. Segmentation
3. Drivers
4. Upgrade triggers

Do not:
1. explain why the model works
2. repeat the strategic logic
3. add value-capture interpretation
4. overload with prose

Visual density rule:
This section should function as a structural map, not an essay.

### 08 Boundary Crossing Map

Purpose:
Show when the buyer enters a different pricing state.

Default rendering:
Transition rows.

Required row structure:
From state
→ To state
Driver
Billing effect
Perception risk

Do not:
1. render boundary crossings as prose-heavy cards
2. hide the from-to transition
3. invent boundaries not present in case logic

Visual density rule:
Each transition row should be scannable in under 5 seconds.

### 09 Decision Tension Layer

Purpose:
Show the strategic tension created by pricing structure.

Default rendering:
Central tension visual plus compact supporting tensions.

Recommended visual:
Before perception
→ Trigger or driver
→ After perception

Example:
Infrastructure partner
→ commerce flow grows
→ tax on growth

Do not:
1. list generic UX complaints
2. add product complaints unrelated to pricing
3. create long prose cards

Visual density rule:
The central tension should be visible before supporting explanation.

### 10 Decision Alternatives

Purpose:
Show concrete pricing moves.

Default rendering:
Compact move cards.

Each card should show:
1. option
2. pricing move
3. expected effect
4. trade off
5. leading indicator

Do not:
1. use vague strategy language
2. create new drivers
3. repeat Decision Priority text

Visual density rule:
Each move card should be short enough to compare against other moves.

### 11 Decision Priority

Purpose:
Show what should be tested first.

Default rendering:
Ranked testing strip or compact priority table.

Preferred columns:
1. Rank
2. Move
3. Why this priority
4. Risk
5. Complexity
6. Success metric

Do not:
1. repeat full Decision Alternatives cards
2. introduce new pricing moves
3. use “Why first” as a visible label for all ranks

Visible label:
Why this priority

Hidden JSON field remains:
why_first

Visual density rule:
The reader should immediately see Priority 1, risk, complexity, and success metric.

### 12 Reasoning Error Check

Purpose:
Stress test the case logic.

Default rendering:
Stress-test checklist or compact table.

Preferred columns:
1. Reasoning risk
2. Case-specific check
3. Evidence needed
4. Failure signal

Do not:
1. add new pricing logic
2. turn it into a general risk list
3. hide the evidence requirement

Visual density rule:
Evidence needed and failure signal should be visible, not buried.

### 13 References

Purpose:
Support claims and evidence.

Default rendering:
Compact source list.

Must include:
1. source organization
2. source title
3. retrieved date
4. URL

Do not:
1. use unsupported price claims
2. cite weak third-party sources when official sources exist
3. mix evidence dates with screenshot dates unless explicitly stated

## Prose Density Rules

A visual section is too text-heavy if any of the following are true:

1. A card contains more than one main idea.
2. Three or more cards repeat the same field labels.
3. A reader must read paragraphs to understand the main comparison.
4. The mechanism is explained mainly through prose instead of visual structure.
5. Decision Priority repeats Decision Alternatives in full.
6. Boundary Crossing Map hides the transition inside paragraph text.
7. Bill Examples are not easily comparable.

Preferred maximums:
1. Core Insight: three bullets
2. Strategic Logic node: 2 to 8 words
3. Bill Example row: one sentence per cell
4. Boundary transition row: one short line per field
5. Decision Priority row: one short phrase per field
6. Reasoning Error Check: concise table or checklist

## Visual Pattern Selection

Use this mapping:

Case artifact:
Strategic Logic
Visual pattern:
five-step causal strip

Case artifact:
Bill Examples
Visual pattern:
comparison table

Case artifact:
Boundary Crossing Map
Visual pattern:
transition rows

Case artifact:
Decision Tension Layer
Visual pattern:
central tension visual

Case artifact:
Decision Alternatives
Visual pattern:
compact move cards

Case artifact:
Decision Priority
Visual pattern:
ranked testing strip

Case artifact:
Reasoning Error Check
Visual pattern:
stress-test checklist

Case artifact:
Pricing Mechanism Logic
Visual pattern:
selected primary_component visual

## Invalid Visual Rendering

A public case page is visually invalid if:

1. Pricing Mechanism Logic is mostly prose.
2. The selected primary_component is not visually clear.
3. value_extraction_map is rendered as a plan comparison.
4. matrix is rendered as a feature comparison.
5. Bill Examples are rendered as long repeated paragraph cards when multiple examples exist.
6. Boundary Crossing Map is rendered as prose-heavy cards.
7. Decision Priority repeats full Decision Alternatives text.
8. Strategic Logic becomes a paragraph explanation instead of a strip.
9. Pricing Page Visual is missing, broken, remote-proxy based, or unstamped.
10. The page requires reading most paragraphs before the mechanism is understandable.

## CSS Guidance

Use existing CSS where possible.

Allowed reusable visual classes:
case-value-flow-map
case-value-flow-node
case-value-flow-arrow
case-comparison-table
case-transition-map
case-transition-row
case-tension-visual
case-priority-table
case-stress-test-table

Do not:
1. add JavaScript for static visual cases
2. add graph libraries
3. add Mermaid
4. add animations unless explicitly requested
5. redesign the entire site

Design goals:
1. clear hierarchy
2. generous whitespace
3. readable mobile stacking
4. no broken layout
5. visual compression without losing analytical precision

## Relationship to Existing Framework Files

CASE_SCHEMA.md:
Defines canonical data only. Do not add visual layout rules there unless they are evidence asset requirements.

CASE_LAYER1_SCHEMA.md:
Defines analytical artifacts. Render Instruction may reference this visual design contract.

CASE_TEMPLATE.html:
Defines public section order. It should instruct renderers to follow this file for visual rendering.

COMPONENT_LIBRARY.md:
Defines primary pricing mechanism tokens. Do not add visual overlays as new primary_component tokens.

case-library.js:
Lightweight index only. It should not contain visual rendering rules.

index.html:
Library listing only. It should not define individual case visual composition.

## Codex Rendering Rule

When generating or editing a public pricing case page:

1. Read CASE_SCHEMA.md for data structure.
2. Read CASE_LAYER1_SCHEMA.md for analytical artifacts.
3. Read COMPONENT_LIBRARY.md for primary_component selection.
4. Read CASE_TEMPLATE.html for section order.
5. Read CASE_VISUAL_DESIGN.md for visual rendering.

The renderer must not convert JSON fields directly into repeated paragraph cards.

The renderer must convert analytical artifacts into the recommended visual patterns.
