# Brain Lookup Protocol

Brain Lookup is the first step in Brain Workflow v1 for candidate pricing cases.

It is a structured pre-implementation lookup protocol. It is not an automated retrieval engine, database, ontology layer, agent orchestrator, or production source of truth.

## Purpose

Before generating or implementing a pricing case, use Brain Lookup to place the candidate inside the existing case library and pricing cognition system.

The lookup should answer:

- which existing cases are most similar
- which pricing concepts are relevant
- which component pattern is likely, without locking the final component too early
- where the candidate fits in the teaching sequence
- what evidence is needed before Layer 1 can be trusted
- whether the candidate expands, challenges, or duplicates the existing pricing cognition system

## Required Inputs

Use the best available candidate information:

- company or offer name
- pricing page, help article, terms page, or other official pricing artifact
- market or domain
- suspected pricing mechanism
- known price driver, tier boundary, fee trigger, usage rule, or value-capture point
- date reviewed

If the candidate lacks an official pricing artifact or enough mechanism evidence, mark the lookup as blocked before Layer 1 generation.

## Lookup Steps

1. Check existing pricing cases in `/cases/pricing`.
2. Identify up to 4 related cases and explain the pricing similarity, or document why no close case exists yet.
3. Identify relevant pricing concepts, such as value metric, price driver, tier boundary, threshold, usage meter, fee incidence, access model, or value-capture boundary.
4. Identify the most likely component pattern from `/cases/pricing/COMPONENT_LIBRARY.md`.
5. Identify how the candidate might extend the teaching sequence without duplicating an existing case.
6. List evidence gaps, unsupported claims, and risks that must be resolved during Layer 1.

## Reasoning Novelty

Brain Lookup should not only identify similar cases. It should also identify whether the candidate expands the pricing cognition system.

Required questions:

- What new pricing insight might this candidate add?
- Does this candidate challenge any existing assumption in the case library?
- Does it introduce a new variation of an existing mechanism?
- Is it redundant with an existing case, or does it teach something materially different?

Novelty does not require a new component token, schema field, or rendering pattern. It should explain what the candidate adds to pricing reasoning, comparison, or teaching reuse.

## Evidence Confidence

Use one evidence confidence level:

- `HIGH`: official pricing page or authoritative source directly supports the mechanism
- `MEDIUM`: official support article, terms page, or indirect official evidence supports the mechanism
- `LOW`: mechanism is inferred and needs more support before Layer 1 should be trusted

## Mechanism Uncertainty

Evidence confidence and mechanism certainty are not the same thing. A source may be official, but the causal mechanism may still be only partially understood.

Use one mechanism certainty level:

- `HIGH`: pricing mechanism and bill-changing driver are directly supported and clearly observable
- `MEDIUM`: pricing mechanism is supported, but some causal interpretation or customer condition remains inferred
- `LOW`: pricing mechanism is mostly inferred or materially ambiguous

Name the remaining uncertainty directly. This should identify what is still unclear about the pricing mechanism, fee trigger, value driver, or customer condition.

## Output Shape

Use this compact markdown shape in the candidate notes or at the top of the Layer 1 artifact:

```md
## Brain Lookup

Candidate:
Reviewed date:
Official artifact:

Related cases:
- [case id]: [pricing similarity]

Relevant pricing concepts:
- [concept]: [why it matters]

Likely component pattern:
[tier_ladder | matrix | driver_logic | trigger_path | value_extraction_map]

Teaching sequence fit:
[how this case extends the library]

Reasoning novelty:
- [new insight, challenged assumption, or reason this is not novel]

Evidence confidence:
HIGH | MEDIUM | LOW

Mechanism certainty:
HIGH | MEDIUM | LOW

Mechanism uncertainty:
- [what is still unclear about the pricing mechanism, fee trigger, value driver, or customer condition]

Evidence gaps:
- [gap or unsupported claim]

Lookup status:
READY_FOR_LAYER_1 | BLOCKED
```

## Readiness Gate

Brain Lookup passes only if:

- at least one official pricing artifact or authoritative support artifact is identified
- related cases or explicit "no close case yet" reasoning is documented
- relevant pricing concepts are named
- a likely component pattern is proposed as a hypothesis
- reasoning novelty is stated
- evidence confidence is `HIGH` or `MEDIUM`
- mechanism certainty is `HIGH` or `MEDIUM`
- any remaining mechanism uncertainty is explicitly scoped
- evidence gaps are listed
- the status is `READY_FOR_LAYER_1`

If evidence confidence is `LOW`, the lookup should normally be `BLOCKED`. A `LOW` confidence candidate may proceed only when the unsupported mechanism is explicitly scoped as a hypothesis and the Layer 1 brief is not presented as implementation-ready.

If mechanism certainty is `LOW`, the lookup should normally be `BLOCKED`. A `LOW` certainty candidate may proceed only when the Layer 1 brief is explicitly scoped as exploratory and not implementation-ready.

If the status is `BLOCKED`, do not generate an implementation-ready Layer 1 brief.
