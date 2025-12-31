## Feature Plan: Missing monorepo workspace packages (apps/* + packages/*)

> Runbook: `/specs/_framework/runbooks/PLAN_CONTRACTS.md`

### ID (folder name)
- `2025_12_28-002-monorepo-packages`

### Linked spec
- SPEC: ./SPEC.md

### Preconditions
- No product module contracts are required for this scaffolding change (confirmed below).
- No persistence or migration work is included.

### ADR gate (required decision)
- ADR: not required
- Rationale: We are not changing cross-module architectural constraints; we are implementing the already-accepted monorepo workspace strategy from `architecture/adr/2025_12_28-001-monorepo-tooling.md`.

### Execution steps (ordered)
1) Contracts
   - Files: none
   - Validation: No contract changes required because this work introduces only workspace scaffolding and shared tooling/config packages; boundary shapes remain defined under `/modules/<module>/contracts/**` when product modules are introduced.

2) Implementation
   - Files:
     - `apps/web/package.json` (+ minimal Next.js scaffold as needed)
     - `apps/web/AGENT_GUIDE.md` (AI-facing ownership + invariants)
     - `packages/tsconfig/package.json` (+ tsconfig presets)
     - `packages/tsconfig/AGENT_GUIDE.md` (AI-facing ownership + invariants)
     - `packages/eslint-config/package.json` (+ shared ESLint config)
     - `packages/eslint-config/AGENT_GUIDE.md` (AI-facing ownership + invariants)
     - (Optional) root-level docs updates if needed to point contributors to `apps/web`
   - Notes:
     - Enforce the invariant that `/tools/*` packages are dev/CI only and must not be runtime dependencies of `apps/*` or `packages/*`.
     - Avoid introducing shared domain model libraries under `packages/*` (INV-3).

3) Tests
   - Unit: N/A (scaffolding only)
   - Integration:
     - Validate pnpm workspace discovery: `pnpm -r list`
     - Validate lint/typecheck for `@forgequiz/web` using shared configs
   - Contract tests (if applicable): N/A

4) Observability
   - Logs: N/A
   - Metrics: N/A
   - Traces: N/A

### Rollout
- Feature flags: N/A
- Backward compatibility: N/A (new packages only)
- Migration / backfill: N/A
- Rollback plan: Revert the added workspace packages/directories if needed.

### Verification checklist
- Acceptance criteria satisfied: AC-1, AC-2, AC-3, AC-4, AC-5
- Invariants preserved: INV-1, INV-2, INV-3, INV-4, INV-5
- Failure modes tested:
  - FM-1: `pnpm -r list` shows the expected packages
  - FM-3: dependency check shows no runtime dependency on `/tools/*`


