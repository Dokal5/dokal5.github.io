# Pricing Handoff Protocol

Use this file as the stable protocol for regenerating pricing project handoff snapshots.

## Worktree Safety

- Run handoff automation only from `/Users/davechiu/Projects/25032026 Github perosnal website` or another explicit real repository checkout.
- If the current working directory contains `/.codex/worktrees/`, stop and report an unsafe execution environment.
- Before generating a snapshot, confirm the repo is on `main` or the explicitly intended active branch.

## Source Of Truth Order

1. Current repository files and audit output.
2. `cases/pricing/case-library.js` for published pricing case count.
3. `node scripts/audit-pricing-governance.mjs` output for governance status.
4. `cases/pricing/governance-exceptions.json` for active, resolved, expired, and rejected exceptions.
5. `project/DECISION_LOG.md` for append-only decision history.
6. `project/HANDOFF_CURRENT.md` as generated restart context.
7. `project/HANDOFF_EXPORT.md` as copy-ready ChatGPT Project upload text.

## Snapshot Rules

- Regenerate `project/HANDOFF_CURRENT.md` from current repo evidence only.
- Regenerate `project/HANDOFF_EXPORT.md` as a copy-ready export that includes the full current snapshot plus a concise change summary.
- Do not copy stale branch, warning, exception, or case-count claims from older handoff files.
- Append `project/DECISION_LOG.md` only when a real governance or protocol decision is evaluated.
- Report whether handoff audit automation exists. If `project/HANDOFF_AUDIT.md` or `scripts/audit-project-handoff.mjs` is missing, say it is not implemented.

## Boundary Reminders

- Do not add new pricing cases as part of handoff maintenance.
- Do not modernize Layer 1 sidecars unless explicitly asked.
- Do not redesign pricing governance during the handoff pass.
- Do not move Brain-only concepts into hidden JSON, public pages, Layer 1, navigation, automation, or `case-library.js`.
