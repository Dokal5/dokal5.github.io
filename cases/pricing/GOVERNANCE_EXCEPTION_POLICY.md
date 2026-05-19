# Pricing Governance Exception Policy

This registry documents explicit, reviewable exceptions for the pricing governance audit surface. It is not a waiver system for avoiding production governance.

## Purpose

`governance-exceptions.json` records known, deterministic exceptions such as intentional identifier divergence, historical artifact policy gaps, temporary governance drift, legacy support states, and transitional publishing states.

Each entry is an explicit allowlist record for one audit `check_id` and one `target_file`. Entries are not wildcard ignores and do not suppress unknown failures.

## Boundaries

- Brain-only concepts may never be waived into production.
- Production schema governance is not bypassed by this registry.
- Hidden JSON, public page content, Layer 1 sidecars, and audit logic are not changed by this registry.
- Historical case status does not automatically waive artifact governance.
- Publication status never counts as Human Gate approval.
- `FAIL` severity findings remain failures unless a future audit-engine integration explicitly approves another behavior.

## Lifecycle

Allowed status values are `active`, `expired`, `resolved`, and `rejected`.

Expired exceptions must remain visible until they are resolved or rejected. Owners should review each entry by `review_after` and either resolve the drift, renew the exception with a concrete reason, or mark it expired.

## Registry Entry Schema

Each registry entry is a governance trace record for one deterministic audit finding. Entries are not wildcard ignores, do not bypass unknown failures, and do not create suppression behavior by themselves.

Required fields:

- `exception_id`: Stable unique identifier for this exception entry.
- `check_id`: Deterministic audit check identifier that produced the finding.
- `severity`: Audit severity observed for the finding.
- `target_file`: Exact repository path for the affected file.
- `target_scope`: Controlled scope classification for the exception.
- `reason`: Human-readable explanation for why the exception exists.
- `status`: Current lifecycle state.
- `created_at`: Date the exception was created.
- `review_after`: Date when the exception must be reviewed again.
- `owner`: Team or maintainer responsible for review and resolution.
- `allowed_until`: Date after which the exception should no longer be treated as current.
- `resolution_plan`: Concrete path to remove, resolve, or formally renew the exception.

Optional fields:

- `linked_issue`: Issue, PR, or governance thread that tracks follow-up work.
- `notes`: Additional context that helps reviewers understand the exception.

Entries must remain human-reviewable. They document known governance state; they are not suppression magic and do not authorize future drift outside the explicit `check_id`, `target_file`, and `target_scope`.

## Allowed Values

### status

Allowed values:

- `active`
- `expired`
- `resolved`
- `rejected`

### target_scope

Allowed values:

- `hidden_json`
- `layer1`
- `library_record`
- `cache_buster`
- `artifact_policy`
- `identifier_alignment`
- `governance_trace`

Scopes are descriptive classifications only. They do not imply production authority, schema permission, or audit suppression. New scopes require governance review before use.

## Initial Exception Candidates

These are expected early use cases for governance-tracked exceptions. They are not permanent allowed states.

### monday.com identifier divergence

The monday.com case has a known slug versus internal identifier mismatch. The exception documents a temporary governance normalization state and does not indicate a production routing issue.

### IKEA historical artifact waiver

The IKEA case is historical, but evidence governance is still required. A waiver documents the absence of a local artifact or the recovery plan; it is not approval to ignore artifact governance.

### Legacy Layer 1 maturity transition

Some legacy Layer 1 sidecars may remain published while migration is phased. Legacy status is descriptive and does not suppress unrelated failures or replace missing governance gates.

### Cache-buster transitional mismatch

A cache-buster mismatch may describe a temporary deployment inconsistency. It must remain reviewable, time-bound, and actively resolved so it does not become permanent drift.

## Governance Clarifications

- Exceptions do not override production contracts.
- Exceptions do not create schema permissions.
- Exceptions do not authorize Brain-only concepts in production.
- Exceptions do not approve publication.
- Exceptions do not replace Human Gate.
- Exceptions do not downgrade `FAIL` automatically in v1.

## Future Integration

A future audit-engine integration may load the registry to annotate known findings, downgrade approved warnings, or fail expired exceptions. No audit suppression, CI integration, or production schema behavior is implemented in v1.
