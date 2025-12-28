# ADR 0001: Monorepo tooling (package manager + workspace strategy)

- Status: accepted
- Date: 2025-12-28

## Context

ForgeQuiz is a **monorepo modular monolith**. We need a workspace toolchain that:
- stays low-bloat and easy for AI agents to reason about
- supports multiple “package types” (Next.js app, tooling, optional TS shared libs)
- remains compatible with Go (which will be managed with Go tooling, not JS tooling)

## Decision

Use **pnpm workspaces** as the default JS/TS monorepo tool.

- Workspace management: `pnpm-workspace.yaml`
- Tooling packages live under `/tools/*` (initially)
- App entrypoints live under `/apps/*` (later)

Optional (deferred): add a task runner like Turborepo only when we have enough packages to justify it.

## Consequences

- We get a minimal monorepo setup with strong, deterministic dependency resolution.
- We avoid “framework bloat” and keep repository policies readable.
- Go modules remain first-class and managed by Go tooling; JS tooling is not allowed to define Go architecture.


