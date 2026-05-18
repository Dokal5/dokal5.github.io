# Brain Failure Archive v1

## Purpose

Brain Failure Archive v1 records reusable reasoning failures discovered during Applied Reasoning Stress testing, comparison work, retrieval review, intervention simulation, and governance review.

The archive treats failures as learning assets. A failure record is not embarrassment, cleanup work, a debugging log, or a production QA artifact. It is a way to preserve where the Brain's reasoning became too confident, too clean, too broad, or too eager to transfer lessons across cases.

Repeated failure patterns are strategically valuable because they reveal:

- ontology weakness
- analogy limits
- retrieval drift
- intervention overconfidence
- governance blind spots
- abstraction collapse

This archive is documentation-only. It does not modify production schema, hidden JSON, public pages, course pages, `case-library.js`, UI behavior, database behavior, build behavior, automation, navigator logic, recommendation logic, ontology labels, production cases, or existing governance documents.

## Why Failure Memory Matters

Successful abstractions can create false confidence. When a concept explains several clean cases, reviewers may start treating the concept as stronger than the evidence supports.

Clean ontology mappings can hide mechanism differences. Two cases may share vocabulary while differing in what changes the bill, what risk moves, who has control, how value is realized, or which governance layer should limit transfer.

Retrieval can sound intelligent while weakening discrimination. A retrieved case is harmful when it feels relevant because of surface similarity but distracts from causal differences that should have blocked analogy.

Intervention simulation can drift into recommendation theater. A simulated change may sound like advice even when the evidence status is hypothesized, the harmed segment is unnamed, or the trade-off has not been stated.

Repeated weak fit is more informative than isolated awkwardness. One awkward case may be noise. A pattern of weak fit can reveal that a concept is too broad, a retrieval rule is too loose, or a governance checkpoint is missing.

Governance systems only mature after repeated edge-case pressure. Failure archives help preserve epistemic discipline by making reasoning boundaries explicit and reviewable.

Reasoning quality is not only what the Brain can explain. Reasoning quality is also what the Brain refuses to overclaim.

## Failure Categories

| Category | Definition | Why dangerous | Typical symptom | Reviewer check |
| --- | --- | --- | --- | --- |
| `false_analogy` | Treating two cases as transferable when their bill-changing mechanisms, risk movement, buyer control, or seller economics differ. | It lets one case borrow certainty from another without causal warrant. | The comparison says two cases are "like" each other before naming what actually changes the bill. | Identify the shared structure, critical difference, and what lesson cannot transfer. |
| `ontology_stretch` | Applying an ontology label beyond its tested scope because the case partially resembles a known pattern. | It makes the ontology look more complete while reducing discrimination. | A low-fit or hybrid case is forced into a clean label. | Check whether the label explains the core mechanism or merely describes a surface feature. |
| `retrieval_failure` | Retrieving cases that sound related but do not clarify the target case's causal logic, boundaries, or intervention risks. | It makes lookup feel useful while weakening reasoning quality. | Retrieved cases repeat keywords but do not expose a mechanism-level distinction. | Ask whether retrieval improved causal discrimination or encouraged premature analogy. |
| `intervention_overclaim` | Treating a simulated pricing change as a tested recommendation or likely outcome without sufficient evidence. | It converts hypothesized causal reasoning into advice. | The intervention language promises conversion, trust, revenue, fairness, or retention effects without evidence status. | Verify expected upside, downside, evidence needed, confidence level, and failure signal. |
| `hidden_bill_trigger_confusion` | Missing or misnaming the actual condition that changes what the buyer pays. | It corrupts every downstream analogy, ontology fit, and intervention claim. | The reasoning focuses on price level, bundle name, or plan label instead of the trigger that changes the bill. | State the exact event, threshold, usage, role, time, commitment, or classification that changes payment. |
| `risk_transfer_blindness` | Failing to identify which risk moves between buyer, seller, supplier, platform, or participant. | It hides the economic logic behind discounts, commitments, usage rules, guarantees, and capacity constraints. | The case describes cheaper or more expensive pricing without naming who absorbs uncertainty. | Name the risk before and after the mechanism or intervention. |
| `surface_similarity_trap` | Letting visible similarity, shared vocabulary, or familiar category names override causal differences. | It creates confident but shallow comparisons. | Cases are grouped because they both have tiers, subscriptions, fees, bundles, or dynamic prices. | Test whether similarity remains after comparing bill trigger, value realization, risk movement, and buyer control. |
| `archetype_misuse` | Using an archetype as a shortcut that replaces mechanism analysis. | It turns a reasoning aid into a label that stops inquiry. | The archetype is named early and then treated as explanation. | Require the case-specific causal chain before accepting archetype language. |
| `bundle_flattening` | Treating different bundled entitlement systems as equivalent because they package multiple benefits. | It hides differences in access rights, usage allowances, renewal logic, fulfillment cost, sharing rules, and perceived value. | Amazon Prime, Microsoft 365, telecom bundles, Costco, or Apple One are compared as generic bundles. | Separate what is paid for, what is used, what is subsidized, and what renewal logic depends on. |
| `dynamic_pricing_flattening` | Treating all price changes over time, demand, capacity, or inventory as the same dynamic pricing mechanism. | It hides differences in perishability, supply response, buyer urgency, substitutability, transparency, and seller control. | Airline yield pricing, hotel rates, surge pricing, cloud spot pricing, and ticket pricing are collapsed into one logic. | Identify whether the mechanism clears capacity, rations demand, extracts willingness to pay, smooths demand, or transfers risk. |
| `unsupported_causal_transfer` | Borrowing a causal claim from one case or intervention into another without showing the required mechanism match. | It makes analogy appear like evidence. | A lesson from one case is used to predict behavior in another case. | State the causal condition required for transfer and whether the target case satisfies it. |
| `governance_failure` | A review, constitution, lifecycle, retrieval, comparison, or intervention governance layer fails to block premature confidence. | It allows weak reasoning to harden into stable guidance. | A questionable claim survives review because no checkpoint owns the concern. | Identify which governance layer should have caught the issue and what signal it missed. |
| `schema_pressure_failure` | Letting unstable Brain concepts create pressure for production schema fields, hidden JSON values, UI categories, or automation signals. | It pollutes production contracts with reasoning concepts that have not matured. | A reviewer proposes storing ontology fit, analogy status, or intervention confidence in production data too early. | Confirm whether the concept has repeated evidence, review approval, and a genuine production need. |
| `concept_overexpansion` | Creating or broadening concepts in response to isolated awkward cases instead of collecting repeated evidence. | It grows vocabulary faster than reasoning quality. | Every hard case becomes a candidate label, exception, or protocol. | Check whether existing concepts truly failed across repeated cases and non-examples. |
| `intervention_tradeoff_blindness` | Simulating an intervention without naming who may be harmed, what metric may worsen, or what seller economics may change. | It makes intervention reasoning sound clean when pricing changes usually redistribute cost, risk, control, or value. | The reasoning lists upside but no downside, segment split, leading indicator, or failure signal. | Require expected downside, trade-off, affected segments, leading indicator, and failure signal. |

## Standard Failure Record Structure

Use this template for manual failure records:

```md
# Failure Record

Failure ID:
Date:
Related case:
Failure category:
Related ontology labels:
Ontology fit:
Detected during:
- Brain Lookup
- Retrieval
- Analogical Comparison
- Intervention Simulation
- Constitutional Review
- Review Board
- Stress Test

What went wrong:
Why the reasoning failed:
Dangerous overgeneralization:
What causal distinction was missed:
What should have blocked the reasoning earlier:
Recovery or correction:
Should ontology change:
- no
- maybe later
- repeated evidence needed

Governance implication:
Production risk if uncorrected:
Reusable lesson:
```
