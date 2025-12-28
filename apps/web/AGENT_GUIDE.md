# `@forgequiz/web` — Agent Guide

## What this package does

- Provides the **Next.js UI entrypoint** for ForgeQuiz (`apps/web`).
- Owns UI/UX orchestration (routing, rendering, UI state).

## What this package does NOT do

- Does **not** implement core domain logic (that belongs in the Go domain layer).
- Does **not** define cross-module DTOs/contracts (those belong under `/modules/<module>/contracts/**`).
- Must **not** take runtime dependencies on `/tools/*` packages (dev/CI only).

## How it interacts with others

- May consume shared **configuration** from `packages/*` (ex: `@forgequiz/tsconfig`, `@forgequiz/eslint-config`).
- May call backend boundaries only via explicit contracts once they exist (future `/modules/*/contracts/**`).

## Invariants (must never break)

- UI-only responsibilities (no domain rules embedded here).
- No runtime dependency on `/tools/*`.
- Keep dependencies minimal; prefer workspace config packages over per-app bespoke config.

## How to modify safely (AI-safe edit rules)

- If you need shared types across boundaries, **stop** and add them to `/modules/<module>/contracts/**` instead of `packages/*`.
- If you need new lint/tsconfig defaults for multiple packages, change `packages/eslint-config` or `packages/tsconfig` and keep this app thin.
- When adding dependencies, ensure tooling packages are only used as **devDependencies** (never `dependencies`).


