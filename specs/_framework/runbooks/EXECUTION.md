# Runbook: Execution (`PLAN.md` → code/tests/docs)

This runbook helps an agent execute `PLAN.md` without drift, while enforcing deterministic verification before claiming completion.

Policy authority (do not restate here):
- Governance/principles: `CONSTITUTION.md`
- Lifecycle gates: `/specs/_framework/SSD_SDLC.md`

## Inputs

- Feature plan: `./PLAN.md`
- Feature spec: `./SPEC.md`
- Module docs/contracts: `/modules/<module>/**` (as applicable)

## Output

- Implementation changes (code)
- Deterministic tests/validators updated or added
- Documentation updates when behavior/invariants change

## Procedure (deterministic)

1) Lock scope to plan
   - If a required change is not in the plan, update `PLAN.md` first

2) Apply changes in plan order
   - Contracts (if any) before code that depends on them

3) Verify deterministically (no “looks good”)
   - Run the validations declared in the plan (schema validation, tests, migrations checks, etc.)
   - Ensure failure modes (`FM-*`) are tested or explicitly justified

4) Update docs when behavior changes
   - Module `AGENT_GUIDE.md` if responsibilities/invariants/behavior changed
   - Module `contracts/README.md` if public surface/stability/compat rules changed

5) Reconcile outputs with spec
   - If implementation diverged, update the spec and plan so they match reality

## Completion checklist (Definition of Done mirror)

- `PLAN.md` reflects what was actually executed
- `SPEC.md` is still accurate (especially invariants + acceptance criteria)
- All deterministic verifications pass
- Module docs updated when responsibility/invariants changed


