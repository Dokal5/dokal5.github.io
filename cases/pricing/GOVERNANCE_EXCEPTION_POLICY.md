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

## Future Integration

A future audit-engine integration may load the registry to annotate known findings, downgrade approved warnings, or fail expired exceptions. No audit suppression, CI integration, or production schema behavior is implemented in v1.
