# ADR Process (ForgeQuiz)

## When to write an ADR

Write an ADR when a decision changes constraints across modules, including:
- module boundaries / ownership
- contract formats or versioning rules
- persistence model or consistency strategy
- AI gateway policy or validation policy
- observability standards that affect multiple modules

If the decision only affects internal implementation inside one module (no boundary impact), prefer updating that module’s `AGENT_GUIDE.md` instead.

For the deterministic ADR decision gate used during planning, see:
- `/specs/_framework/runbooks/PLAN_CONTRACTS.md`

## Location & naming

- Folder: `/architecture/adr/`
- Naming: `YYYY_MM_DD-<seq>-<slug>.md` (e.g. `2025_12_28-001-monorepo-tooling.md`)
- Maintain an index: `ADR-INDEX.md`

## Template

Use this structure:
- Context
- Decision
- Consequences

Keep it short and explicit.


