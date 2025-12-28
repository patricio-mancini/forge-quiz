# ForgeQuiz SSD SDLC (Spec-Driven Development Lifecycle)

## Purpose

Define the **minimal, repeatable** lifecycle for changes so that humans and limited-context AI agents can ship safely.

## Runbooks (procedural guides)

For step-by-step instructions to produce artifacts deterministically, follow:

- `/specs/_framework/runbooks/SPEC_CREATION.md`
- `/specs/_framework/runbooks/PLAN_CONTRACTS.md`
- `/specs/_framework/runbooks/EXECUTION.md`

## Non-negotiables

- **No spec, no merge.**
- **No plan, no merge.**
- **Contracts over conventions**: if it isn't written down, it doesn't exist.
- **AI is powerful but untrusted**: outputs are probabilistic; validation is deterministic.

## Artifacts

- **Feature spec** (required): `/specs/YYYY_MM_DD-<seq>-<slug>/SPEC.md`
- **Feature plan** (required): `/specs/YYYY_MM_DD-<seq>-<slug>/PLAN.md`
- **Contracts** (required when boundary shapes change): `/modules/<module>/contracts/*`
- **ADR** (required for architecture decisions): `/architecture/adr/YYYY_MM_DD-<seq>-<slug>.md`

Naming rules are defined in: `/specs/_framework/NAMING.md`

## Lifecycle (gated)

### 1) Spec

Write `SPEC.md`:
- problem, scope/non-goals
- user flow
- inputs/outputs (boundary-level)
- invariants + validation rules
- failure modes
- security/privacy + observability
- acceptance criteria

### 2) Contracts-first (when applicable)

If a boundary shape changes, update contracts before implementation:
- OpenAPI for HTTP boundaries
- JSON Schema for DTOs/events/AI I/O envelopes

### 3) Plan

Write `PLAN.md`:
- ordered steps + files to touch
- tests to add/update
- rollout/migration/rollback (as needed)
- verification checklist mapped to acceptance criteria

### 4) Implement

Implement exactly what the plan says, or update the plan first.

### 5) Verify (deterministic)

Validate deterministically:
- contract validation (OpenAPI / JSON Schema)
- tests (unit/integration/contract)
- migrations (if applicable)

### 6) Document

Update module docs if behavior/invariants changed:
- `modules/<module>/AGENT_GUIDE.md`
- `modules/<module>/contracts/README.md`

Add an ADR when a decision changes architecture constraints.

## Definition of Done

- `SPEC.md` is complete and still accurate after implementation.
- `PLAN.md` reflects what was executed.
- Contracts are updated + versioned when boundary shapes changed.
- Tests cover invariants + failure modes.
- No undocumented knowledge required to extend the change.


