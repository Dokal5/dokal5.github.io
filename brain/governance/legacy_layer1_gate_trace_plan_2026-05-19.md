# Legacy Layer 1 Gate Trace Plan

Date: 2026-05-19

## Purpose

This note records the current relationship between legacy Layer 1 artifacts and the newer Workbench Artifact contract.

It does not modify production pricing cases, hidden JSON, public pages, `case-library.js`, schema files, UI, automation, build behavior, ontology labels, or production schema fields.

## Current State

- `cases/pricing/aws-reserved-instances-savings-plans-layer1.md` is the current full Workbench Artifact format. It includes Brain Lookup, Constitutional Review, and Implementation Gate, but it does not contain a Human Gate trace.
- The other published `cases/pricing/*-layer1.md` files are legacy partial artifacts that predate the current Workbench Artifact contract.
- Missing current-gate sections in legacy artifacts should not be read as retroactive approval or retroactive failure.

## Migration Rule

Do not rewrite legacy Layer 1 artifacts solely to satisfy the current Workbench Artifact contract.

Future migration should happen only when a case is actively revised, refreshed, republished, or used as the basis for new implementation work.

When a case is migrated, update the Layer 1 artifact first, then update any public page, hidden JSON, evidence artifact, or index entry required by the case revision.

## Human Gate Rule

Do not invent retrospective Human Gate approval.

Add Human Gate trace only when there is explicit human approval for implementation or republication.

## Non-Changes

This note does not edit legacy Layer 1 files.

This note does not authorize implementation, publication, schema changes, or case migration.
