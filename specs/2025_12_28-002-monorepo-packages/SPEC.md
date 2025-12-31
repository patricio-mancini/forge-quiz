## Feature Spec: Missing monorepo workspace packages (apps/* + packages/*)

> Runbook: `/specs/_framework/runbooks/SPEC_CREATION.md`

### ID (folder name)
- `2025_12_28-002-monorepo-packages`

### Metadata
- Status: draft
- Owner: pato
- Target module(s):
  - `apps/web` (workspace package: `@forgequiz/web`)
  - `packages/tsconfig` (workspace package: `@forgequiz/tsconfig`)
  - `packages/eslint-config` (workspace package: `@forgequiz/eslint-config`)
- Out of scope:
  - Implementing the Go core domain, persistence, or Redis layers
  - Defining product module boundaries under `/modules/*` (this is workspace scaffolding only)
  - Adding contract schemas (contracts live under `/modules/<module>/contracts/`)
  - Adding a task runner (ex: Turborepo) unless/until justified by scale
- Risk level: low

### Problem statement
The repo declares a pnpm workspace (`pnpm-workspace.yaml`) that includes `apps/*` and `packages/*`, but those directories/packages do not exist yet. This creates ambiguity for contributors and agents: there is no runnable UI entrypoint and no shared JS/TS configuration baseline, increasing inconsistency and slowing safe iteration.

We need a minimal, explicit set of workspace packages that matches the repo’s intended architecture (UI in Next.js; tooling in `/tools/*`; domain in Go) while preserving the Constitution’s coupling rules.

### User flow (happy path)
1) A developer clones the repo and runs `pnpm -w install`.
2) The developer discovers a clear UI entrypoint at `apps/web` and consistent config packages under `packages/*`.
3) The developer can run a standard workflow (dev/lint/typecheck) in the UI workspace package using shared configuration.

### Scope
- In scope:
  - Define the minimal set of pnpm workspace packages we are currently missing:
    - `apps/web` (`@forgequiz/web`): Next.js UI entrypoint (orchestrates UX; does not own core domain logic)
    - `packages/tsconfig` (`@forgequiz/tsconfig`): shared TypeScript configuration
    - `packages/eslint-config` (`@forgequiz/eslint-config`): shared ESLint configuration
  - Define boundaries and invariants for these packages (what they may/may not depend on).
  - Define deterministic validation expectations for the workspace packages.
- Non-goals:
  - Shipping a complete quiz product UI (only scaffolding + baseline wiring)
  - Introducing shared “domain model” TS libraries under `packages/*`
  - Defining HTTP APIs, events, or DTOs for core product modules (handled via `/modules/*/contracts/`)

### Inputs / Outputs (boundary-level)
- Inputs:
  - `pnpm-workspace.yaml` (workspace globs for `apps/*`, `packages/*`, `tools/*`)
  - Repo policy docs: `CONSTITUTION.md`, `/specs/_framework/*`
- Outputs:
  - A runnable UI workspace entrypoint package at `apps/web` (Next.js)
  - Shared configuration packages at `packages/tsconfig` and `packages/eslint-config`
  - A clearly enforced dependency rule: product/runtime code must not depend on `/tools/*`

### Contracts (links)
- OpenAPI: No contract changes required (workspace scaffolding only).
- JSON Schemas: No contract changes required (workspace scaffolding only).
- Events: No contract changes required (workspace scaffolding only).

### Invariants (must never break)
- INV-1: `apps/*` and `packages/*` are pnpm workspace packages discoverable via `pnpm -r list`.
- INV-2: Tooling packages under `/tools/*` remain **dev/CI-only** and are **not** runtime dependencies of `apps/*` or `packages/*`.
- INV-3: `packages/*` must not become a “shared domain dumping ground”.
  - Cross-boundary DTOs/events/AI envelopes are defined as contracts under `/modules/<module>/contracts/**`, not as shared TS domain models.
- INV-4: `apps/web` is responsible for UI/UX orchestration only; it does not embed core domain logic that belongs in the Go domain layer.
- INV-5: New workspace packages under `apps/*` and `packages/*` include an `AGENT_GUIDE.md` so limited-context AI agents can modify them safely without guessing.

### Validation rules (deterministic)
- VR-1: `pnpm -r list` enumerates at least `@forgequiz/spec-tools`, `@forgequiz/web`, `@forgequiz/tsconfig`, and `@forgequiz/eslint-config`.
- VR-2: `@forgequiz/web` can run `lint` and `typecheck` using the shared configs (`@forgequiz/eslint-config`, `@forgequiz/tsconfig`).
- VR-3: No `apps/*` or `packages/*` production dependency graph includes `/tools/*` packages.
- VR-4: `apps/web/AGENT_GUIDE.md`, `packages/tsconfig/AGENT_GUIDE.md`, and `packages/eslint-config/AGENT_GUIDE.md` exist and state ownership + invariants.

### Failure modes
- FM-1: Workspace packages are missing or misnamed, causing `pnpm -r` workflows to fail or be ambiguous.
- FM-2: Shared `packages/*` grows to include domain logic/types, creating implicit coupling across modules.
- FM-3: The UI (`apps/web`) takes a runtime dependency on `/tools/*`, violating the tooling policy.

### Edge cases (with proposed solution)
- EC-1:
  - Scenario: A contributor adds “shared domain types” to `packages/*` because it feels convenient.
  - Proposed solution / handling: Enforce INV-3 with explicit documentation in the package READMEs and repository checks (reject PRs that introduce cross-module domain coupling via shared TS libs).
  - Validation / tests: CI rule/validation step that blocks additions of domain-model directories under `packages/*` (only allow configs + UI-only libraries by explicit allowlist).
- EC-2:
  - Scenario: A contributor imports `/tools/*` at runtime from `apps/web` (accidental coupling).
  - Proposed solution / handling: Add a deterministic check in the workspace (lint rule / dependency graph check) that forbids `@forgequiz/spec-tools` (and any `/tools/*` package) as a dependency of runtime packages.
  - Validation / tests: Dependency graph validation in CI; `pnpm -r` scripts fail if the forbidden dependency is present.

### Security & privacy
- Data classification: Public / non-sensitive (scaffolding only; no user data flows introduced).
- Threat notes:
  - Prevent accidental leakage of secrets into the UI repo by ensuring env handling is explicit in `apps/web` when implemented.
  - Keep `/tools/*` dev-only to avoid supply-chain and runtime attack surface expansion.

### Observability
- Logs: Not applicable for scaffolding-only changes (no runtime services introduced by this spec).
- Metrics: Not applicable.
- Traces: Not applicable.
- Alerts: Not applicable.

### Acceptance criteria
- AC-1: This spec identifies the missing workspace packages and their responsibilities: `apps/web`, `packages/tsconfig`, `packages/eslint-config`.
- AC-2: The invariants explicitly prohibit runtime dependency on `/tools/*` and prohibit “shared domain model” creep under `packages/*`.
- AC-3: Validation rules define deterministic checks for workspace discovery (`pnpm -r list`) and dependency boundary enforcement.
- AC-4: A corresponding `PLAN.md` exists in this folder and explicitly resolves: contracts required (yes/no) and ADR required (yes/no).
- AC-5: Each new workspace package includes an `AGENT_GUIDE.md` sufficient for safe, limited-context AI edits.

### Open questions
- Q-1: Do we want to add an explicit `packages/prettier-config` now, or keep formatting local to `apps/web` initially?
- Q-2: Should `apps/web` start with “no backend calls” scaffolding only, or include a placeholder API boundary aligned to the future Go domain layer?


