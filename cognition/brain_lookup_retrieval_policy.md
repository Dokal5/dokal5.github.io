# Brain Lookup Retrieval Policy v1

## Recommended Approach

Brain Lookup Retrieval Policy v1 defines how Brain Lookup should select related cases using Pricing Reasoning Ontology v1 and Ontology Fit Classification v1.

Ontology identifies the shared causal pattern. Ontology Fit determines whether that shared pattern is strong enough to anchor reasoning, broaden comparison, clarify boundaries, or signal a possible ontology gap.

This is a documentation-only Brain-layer policy. It does not modify production pricing case schema, hidden JSON, public pages, `case-library.js`, course pages, UI behavior, database behavior, build behavior, automation, ontology labels, or production schema fields.

## Why This Matters

Brain Lookup should not simply return cases with shared labels because shared labels do not guarantee equal analogy quality.

A retrieval policy is necessary to prevent weak analogies from being treated as strong examples. It separates archetypes, supporting examples, contrast cases, and ontology gap candidates so related-case reasoning can be more explicit before Layer 1 drafting.

This improves Workbench Artifact quality, future recommendation and decision engine quality, and ontology governance. It also reduces ontology drift by making weak fit visible instead of creating new labels too quickly.

Brain Lookup should prefer causal pricing similarity over industry, category, or surface pricing similarity.

## Retrieval Priority

Use this default order:

1. High-fit archetype cases.
2. High- or medium-fit supporting examples.
3. Contrast cases.
4. Low-fit ontology gap candidates.

Archetypes anchor the reasoning because they cleanly prove the mapped causal pattern. Supporting examples broaden comparison and show useful variation without becoming the main proof. Contrast cases clarify boundaries by showing what the candidate is not. Ontology gap candidates are used only when testing whether the vocabulary is insufficient.

If no high-fit archetype exists, Brain Lookup should say so explicitly, mark the retrieval as exploratory, and avoid using related cases as proof of the pattern.

## Retrieval Output Shape

Use this standard section in Brain Lookup outputs when related cases are selected by ontology and fit quality:

```md
## Related Case Retrieval

- Case:
  Shared ontology pattern:
  ontology_fit: high | medium | low
  use_as: archetype | supporting_example | contrast_case | ontology_gap_candidate
  fit_reason:
  Why this case is useful:
  Warning if mapping is stretched:
```

Use `None` for the warning only when the mapping is high-fit and no material stretch is present. For medium- or low-fit cases, name the stretch plainly.

## Retrieval Rules

- Always include at least one high-fit archetype if available.
- If no high-fit archetype exists, mark the retrieval as exploratory and avoid using related cases as proof of the pattern.
- Do not use low-fit cases as proof of a pattern.
- Use medium-fit cases for nuance or comparison, not as the main anchor.
- Use contrast cases to explain what the candidate is not.
- Use ontology gap candidates only when the candidate may reveal a missing causal structure.
- Do not retrieve cases only because they share an industry.
- Do not retrieve cases only because they share a surface pricing form.
- Prefer causal similarity over category similarity.
- If no high-fit case exists, state that clearly.
- Keep Brain Lookup compact: retrieve up to 4 related cases unless the candidate is explicitly an ontology stress test.

## Examples

### A. Candidate: AWS-like commitment pricing

Expected retrieval:

| Case | Use |
| --- | --- |
| AWS Reserved Instances / Savings Plans | High-fit archetype for `predictability_exchange` and commitment economics. |
| Gym annual membership | Supporting example if using stress-test context; shows commitment and underuse risk outside cloud infrastructure. |
| HP Instant Ink | Contrast or supporting comparison only if discussing predictability versus threshold logic. |

### B. Candidate: Uber-like surge pricing

Expected retrieval:

| Case | Use |
| --- | --- |
| Uber surge pricing | Low-fit `ontology_gap_candidate`; useful for testing dynamic condition repricing. |
| Disney Lightning Lane | Partial supporting example around scarce capacity and service boundaries. |
| HP Instant Ink | Contrast case; threshold allowances are not proof of dynamic repricing. |

Because no clean current archetype exists for Uber-like surge pricing, the retrieval should be marked exploratory.

### C. Candidate: Apple One-like bundle pricing

Expected retrieval:

| Case | Use |
| --- | --- |
| Amazon Prime membership | Low-fit `ontology_gap_candidate`; similar bundled entitlement weakness. |
| Costco membership | Supporting example for membership and underuse risk, but not full bundle entitlement pricing. |
| Peloton hardware-to-membership | Contrast case for trigger-path recurring monetization rather than portfolio bundle access. |

Because no clean current archetype exists for Apple One-like bundle pricing, the retrieval should be marked exploratory.

### D. Candidate: API usage pricing

Expected retrieval:

| Case | Use |
| --- | --- |
| OpenAI API token pricing | High-fit stress-test example for usage-based bill movement. |
| Snowflake consumption pricing | High- or medium-fit supporting example for consumption economics and optional commitments. |
| HP Instant Ink | Contrast case if allowance, overage, or threshold logic matters. |

## Recommended File Location

Keep this policy in:

```text
cognition/brain_lookup_retrieval_policy.md
```

Adding the policy directly to `cognition/brain_lookup.md` would keep lookup rules in one file, but it risks bloating the core protocol.

Placing it under `brain/ontology/` would make it look like ontology vocabulary governance, but this is operational Brain Lookup behavior.

`cognition/brain_lookup_retrieval_policy.md` is the right v1 location because retrieval policy belongs beside Brain Lookup workflow docs while still referencing ontology and ontology fit as inputs.

## Relationship To Brain Workflow

This policy extends Brain Lookup; it does not replace it.

Later, `cognition/brain_lookup.md` can reference this policy from its Lookup Steps and Output Shape sections. The Brain Lookup protocol should remain the main workflow entrypoint, while this retrieval policy defines how related cases are selected and qualified.

| Workflow Area | Role |
| --- | --- |
| Brain Lookup | Adds a policy for ranking and explaining related cases. |
| Workbench Artifact | Improves the quality of related-case reasoning before Layer 1 drafting. |
| Ontology docs | Uses causal labels as retrieval inputs, not production fields. |
| Ontology Fit | Uses fit confidence to prevent weak analogies from becoming anchors. |
| Implementation Review | Can later check whether related-case claims relied on appropriate analogy strength. |
| Alignment Audit | Can flag cases where teaching links or claims depend on weak retrieval. |

## Future Uses

Brain Lookup Retrieval Policy v1 can later support:

- Better Brain Lookup prompts.
- Related-case recommendation.
- Mechanism Navigator refinement.
- Course-to-case link quality checks.
- Alignment Audit reports.
- Future Decision Pattern Engine.
- Future analogical reasoning engine.
- Pattern explorer grouping by archetype, supporting example, contrast case, and ontology gap candidate.

## Risks And Guardrails

| Risk | Guardrail |
| --- | --- |
| Over-retrieval | Keep default related-case retrieval to up to 4 cases. |
| Weak analogy inflation | Require `ontology_fit`, `use_as`, and stretched-mapping warnings. |
| Industry similarity mistaken for causal similarity | Prefer bill-changing logic, risk transfer, and buyer decision over market category. |
| Low-fit cases treated as proof | Prohibit low-fit cases as pattern anchors. |
| Too much process overhead | Keep the retrieval section compact and optional until manually tested. |
| Premature automation | Keep v1 documentation-only; no database, UI, schema, or retrieval engine changes. |
| Ontology drift | Do not add new labels from a single weak retrieval; require repeated low-fit evidence. |

## Suggested Next Implementation Step

Reference this policy from `cognition/brain_lookup.md` only after it has been manually tested during Brain Lookup on real candidate pricing cases.

Do not automate retrieval, promote ontology fields into schema, or change production contracts during v1.

## V1 Non-Changes

Brain Lookup Retrieval Policy v1 must not:

- Modify `cases/pricing/CASE_SCHEMA.md`.
- Modify hidden JSON in existing case pages.
- Modify `cases/pricing/case-library.js`.
- Modify public pages.
- Modify course pages.
- Add UI.
- Add a database.
- Add a build system.
- Add automation.
- Add new ontology labels.
- Promote ontology fields into production schema.

## Acceptance Check

A reviewer should be able to use this document during Brain Lookup to select related cases by analogy quality, not just shared labels.
