# Naming conventions (Specs + ADRs + branches)

ForgeQuiz optimizes for **stable identifiers** and **low-context navigation**.

## Specs

### Folder name

Specs live under `/specs/` and use:

`YYYY_MM_DD-<seq>-<slug>/`

Example:
- `2025_12_28-001-system-framework/`

### Rules

- **Date** is the day the spec is created (not necessarily implemented).
- **`<seq>`** is a 3-digit sequence per day (`001`, `002`, ...).
- **`<slug>`** is kebab-case and short.

### Required files

- `SPEC.md`
- `PLAN.md`

## ADRs

ADRs live under `/architecture/adr/` and use:

`YYYY_MM_DD-<seq>-<slug>.md`

Example:
- `2025_12_28-001-monorepo-tooling.md`

## Branches

Branches should reuse the same stable identifier as the feature spec folder name.

Format:
- `feat/YYYY_MM_DD-<seq>-<slug>`
- `fix/YYYY_MM_DD-<seq>-<slug>`
- `docs/YYYY_MM_DD-<seq>-<slug>`
- `chore/YYYY_MM_DD-<seq>-<slug>` (framework, tooling, repo maintenance)

Examples:
- `chore/2025_12_28-001-system-framework`
- `docs/2025_12_28-002-framework-runbooks`

## Why this convention

- Prevents renumbering churn when inserting earlier decisions/specs.
- Sorts naturally in file explorers.
- Keeps identifiers stable for long-lived links.


