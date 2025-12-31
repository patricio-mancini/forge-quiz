## Feature Plan: <name>

> Runbook: `/specs/_framework/runbooks/PLAN_CONTRACTS.md`

### Guardrails
- This document is **plan-only** (steps + files + deterministic validations).
- Do **not** implement product code/tests while writing the plan; execution belongs to `/specs/_framework/runbooks/EXECUTION.md`.
- If you discover missing spec detail, stop and update `SPEC.md` first (separate prompt), then return to planning.

### ID (folder name)
- `YYYY_MM_DD-<seq>-<slug>` (example: `2025_12_28-001-system-framework`)

### Linked spec
- SPEC: ./SPEC.md

### Preconditions
- Required contracts exist (or explicitly not needed).
- Migration strategy defined (if persistence changes).

### ADR gate (required decision)
- ADR: required | not required
- Rationale:
- If required:
  - ADR file:
  - ADR-INDEX updated:

### Execution steps (ordered)
1) Contracts
   - Files:
   - Validation:

2) Implementation
   - Files:
   - Notes:
     - If adding new workspace packages under `apps/*` or `packages/*`, include an `AGENT_GUIDE.md` for each (ownership + invariants + safe edit rules).

3) Tests
   - Unit:
   - Integration:
   - Contract tests (if applicable):

4) Observability
   - Logs:
   - Metrics:
   - Traces:

### Rollout
- Feature flags:
- Backward compatibility:
- Migration / backfill:
- Rollback plan:

### Verification checklist
- Acceptance criteria satisfied:
- Invariants preserved:
- Failure modes tested:


