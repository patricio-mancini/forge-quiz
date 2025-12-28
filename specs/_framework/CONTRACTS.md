# Contracts in ForgeQuiz

## What is a contract?

A contract is an explicit, versionable **boundary definition** between modules and/or external systems.

Contracts exist to enable:
- deterministic validation
- safe change with low context
- explicit coupling (no guessing)

## Contract types

- **HTTP APIs**: OpenAPI (preferred for service boundaries)
- **Data shapes**: JSON Schema (preferred for DTOs, events, AI I/O envelopes)
- **Events**: JSON Schema per event type

## Rules

- Contracts describe **edge shapes**, not domain internals.
- If a change is breaking, it requires **explicit versioning** and a migration plan.
- Validation is deterministic and must run in CI (tooling may evolve; the rule does not).

## Where contracts live

All module contracts live under:

`/modules/<module>/contracts/`

Recommended contents:
- `README.md` (required): what is public, stable, and how to call it safely
- `http.openapi.yaml` (optional): HTTP contract for this module (if it exposes HTTP)
- `schemas/*.schema.json` (optional): DTO/envelope schemas
- `events/*.schema.json` (optional): event schemas

## Minimal contracts README must answer

- What is stable vs experimental?
- What are the invariants callers must respect?
- How do other modules integrate (inputs/outputs)?
- How are breaking changes versioned?


