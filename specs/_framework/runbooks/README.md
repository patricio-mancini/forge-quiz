# SSD Runbooks (ForgeQuiz)

These runbooks are **procedural guides** for humans and AI agents to reliably produce the required SSD artifacts.

Policy authority:
- Governance and repo-wide principles: `CONSTITUTION.md`
- Lifecycle gates (spec → plan → implement → verify → docs): `/specs/_framework/SSD_SDLC.md`

## Guardrail: one runbook per prompt

For AI agents, treat each runbook as a **separate prompt** and a **separate output phase**:
- Spec creation must not also write a plan.
- Planning must not also implement code.
- Execution must not re-plan; it executes the plan (or updates the plan first).

## Runbooks (master guides)

- `SPEC_CREATION.md`: prompt → `SPEC.md`
- `PLAN_CONTRACTS.md`: `SPEC.md` → `PLAN.md` (+ contracts, + ADR gate)
- `EXECUTION.md`: `PLAN.md` → code/tests/docs (deterministic verification)


