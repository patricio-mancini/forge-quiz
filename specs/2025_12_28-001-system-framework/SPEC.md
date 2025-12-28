## Spec: System Framework (SSD + Modular Monolith)

### ID
2025_12_28-001-system-framework

### Status
draft

### Purpose
Define repo-wide invariants and the minimal structure required for safe development by humans and limited-context AI agents.

### Scope (in)
- Source-of-truth hierarchy and enforcement expectations
- Modular monolith layout contract (directories + required module docs)
- Cross-module interaction rules (allowed patterns)
- Contract standards (formats, location, versioning)
- SSD SDLC lifecycle + merge gates
- ADR process (when required + naming + indexing)
- Tooling package location (dev/CI only; no runtime dependency)

### Non-goals (out)
- Full implementation scaffolding for Next.js / Go services
- CI tooling specifics (may be implemented later; rules are defined here)
- Exhaustive module decomposition

---

## Source of truth hierarchy (repo invariant)

This repo adopts the hierarchy defined in `CONSTITUTION.md` as a repo invariant.

---

## Monorepo + modular monolith contract

### Monorepo

ForgeQuiz is developed in a **single repository** that contains:
- specs and architecture docs
- module implementations
- runnable app entrypoints (later)
- tooling packages (dev/CI)

### Modular monolith (design rule)

- Module boundaries are **hard**.
- Deployment boundaries are **optional**.
- Cross-module communication is **explicit**.

### Module unit of ownership

Each module MUST live at:

`/modules/<module>/`

Each module MUST include:
- `AGENT_GUIDE.md`
- `contracts/README.md`

---

## Boundary rules (contracts over conventions)

- Repo policy authority: `CONSTITUTION.md` + `/specs/_framework/CONTRACTS.md`
- Additional structural rule: **no cross-module imports of internals**

---

## AI policy (untrusted by default)

AI governance is defined in `CONSTITUTION.md`. This spec requires that AI access remains behind an explicit gateway boundary.

---

## SSD SDLC (process contract)

The authoritative SSD framework lives in:
- `/specs/_framework/`

---

## ADR policy

ADR process is defined in:
- `/specs/_framework/ADR_PROCESS.md`

ADRs live in:
- `/architecture/adr/`

Naming conventions are defined in:
- `/specs/_framework/NAMING.md`

---

## Tooling package policy

Tooling packages (scaffolding/validators) may live under:
- `/tools/` (preferred early)

Rules:
- Tooling is dev/CI only.
- Product modules must not depend on tooling at runtime.

---

## Acceptance criteria

- Repo contains:
  - `/specs/_framework/` docs + templates
  - `/specs/2025_12_28-001-system-framework/{SPEC.md,PLAN.md}`
  - `/architecture/adr/{ADR-INDEX.md}`
  - `/modules/_template/` with required docs
  - `/tools/spec/` placeholder package (dev/CI tooling)
- Root `README.md` links to the framework entrypoint.


