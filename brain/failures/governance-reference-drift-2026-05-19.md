# Failure Record

Failure ID: governance-reference-drift-2026-05-19
Date: 2026-05-19
Related case: Brain governance architecture, not a production pricing case
Failure category: governance_failure
Related ontology labels: None
Ontology fit: Not applicable
Detected during:
- Review Board
- Stress Test

What went wrong:
Brain governance documents referenced ontology, retrieval, and analogical comparison support files in ways that could be read as active architecture, but those files were not present in the repository.

Why the reasoning failed:
The architecture map described intended layers more strongly than the repository state supported. That made planned or architecture-context files look closer to active governance than they were.

Dangerous overgeneralization:
Because a layer is named in the architecture, reviewers may assume its support files already exist, have been reviewed, and can govern future case work.

What causal distinction was missed:
The governance docs did not consistently distinguish active source-of-truth files from planned or referenced architecture context.

What should have blocked the reasoning earlier:
Architecture governance review should have required a visible missing-reference note when documents named support files that were not in the checkout.

Recovery or correction:
Mark absent support files as referenced architecture context only. Do not create missing ontology, retrieval, or comparison files as part of the repair unless a later review approves their scope.

Should ontology change:
- no

Governance implication:
Future Brain governance documents must state whether referenced files are present and active, planned, or intentionally absent.

Production risk if uncorrected:
Reviewers could treat nonexistent Brain files as authority and accidentally let unstable reasoning concepts pressure production schema, hidden JSON, public pages, UI, automation, or case implementation rules.

Reusable lesson:
Governance docs must distinguish active files from planned architecture context. Missing support docs must not imply production authority or working workflow coverage.
