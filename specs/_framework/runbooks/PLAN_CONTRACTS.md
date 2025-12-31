# Runbook: Plan + contracts (`SPEC.md` → `PLAN.md`)

This runbook helps an agent convert a spec into an executable plan, while deterministically deciding whether contracts and/or an ADR are required.

Policy authority (do not restate here):
- Lifecycle gates: `/specs/_framework/SSD_SDLC.md`
- Contracts rules: `/specs/_framework/CONTRACTS.md`
- ADR rules: `/specs/_framework/ADR_PROCESS.md`

## Guardrails (hard rules)

- This runbook creates/edits **only** planning artifacts:
  - `PLAN.md`
  - Contracts under `/modules/<module>/contracts/**` (**only if Gate A requires**)
  - An ADR under `/architecture/adr/**` (**only if Gate B requires**)
- **Do not** implement product code or tests in this step. Implementation belongs to: `/specs/_framework/runbooks/EXECUTION.md`.
- If `SPEC.md` is missing required detail (scope, invariants, ACs, contracts clarity), stop and request a separate prompt to update the spec (do not “patch spec + write plan” in one step).

## Inputs

- Feature spec: `./SPEC.md`
- Current module contracts (if applicable): `/modules/<module>/contracts/`

## Output

- `./PLAN.md` using `/specs/_framework/templates/FEATURE_PLAN.template.md`
- Contract changes (only if required): `/modules/<module>/contracts/**`
- ADR (only if required): `/architecture/adr/YYYY_MM_DD-<seq>-<slug>.md` + update `/architecture/adr/ADR-INDEX.md`

## Deterministic gates

### Gate A — Do we need contract changes?

Contracts are required when the change affects any **boundary shape**, including:
- HTTP API request/response shapes
- DTO/event/envelope shapes used across module boundaries
- AI I/O envelopes that cross the AI Gateway boundary

If **yes**:
- List the exact contract files to add/edit under `Execution steps → 1) Contracts`
- Add deterministic validation steps (schema validation, openapi lint/validation, contract tests)

If **no**:
- Explicitly state in the plan: “No contract changes required” and why

### Gate B — ADR required? (ADR decision gate text)

Write an ADR if the change makes or modifies a decision that affects constraints **across modules**, including:
- Module boundaries / ownership
- Contract formats or versioning rules
- Persistence model or consistency strategy
- AI gateway policy or validation policy
- Observability standards that affect multiple modules

If the change only affects internal implementation inside one module (no boundary impact), do **not** write an ADR; update that module’s `AGENT_GUIDE.md` instead.

When ADR is required:
- Create `/architecture/adr/YYYY_MM_DD-<seq>-<slug>.md` (Context / Decision / Consequences)
- Add it to `/architecture/adr/ADR-INDEX.md`
- Add the ADR path under plan preconditions or step 0

## Procedure (deterministic)

1) Copy the plan template into `PLAN.md`
2) Fill **Preconditions** from spec risk/unknowns (contracts, migrations, flags, data needs)
3) Apply Gate A (contracts) and Gate B (ADR) and list required artifacts
4) Fill **Execution steps** with:
   - Explicit ordered steps
   - Exact file paths to touch
   - Deterministic validations to run
5) Map plan verification back to `SPEC.md` acceptance criteria (`AC-*`) and invariants (`INV-*`)

## Completion checklist (must be true before implementation)

- Every step names the file(s) to touch
- Gate A is explicitly resolved (contracts: yes/no + why)
- Gate B is explicitly resolved (ADR: yes/no + why)
- Verification checklist references `AC-*` and covers failure modes


