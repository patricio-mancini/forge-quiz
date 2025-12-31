# `@forgequiz/eslint-config` — Agent Guide

## What this package does

- Publishes shared **ESLint config presets** for ForgeQuiz workspace packages.
- Provides stable export paths:
  - `@forgequiz/eslint-config`
  - `@forgequiz/eslint-config/next`

## What this package does NOT do

- Does **not** ship runtime code.
- Does **not** enforce cross-module coupling via shared domain types (contracts live under `/modules/<module>/contracts/**`).

## How it interacts with others

- Workspace packages extend these configs (example: `apps/web/.eslintrc.cjs`).

## Invariants (must never break)

- Config-only package: keep it free of runtime code.
- Keep presets small and predictable; avoid surprising rules that require deep context to fix.

## How to modify safely (AI-safe edit rules)

- Prefer adding a new preset export instead of changing existing behavior drastically.
- Keep `peerDependencies` broad enough for workspace consumers, but do not add runtime dependencies.
- Validate consumers can still `lint` after changes.


