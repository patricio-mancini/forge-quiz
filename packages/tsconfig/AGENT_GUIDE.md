# `@forgequiz/tsconfig` — Agent Guide

## What this package does

- Publishes shared **TypeScript `tsconfig` presets** for ForgeQuiz workspace packages.
- Provides stable export paths:
  - `@forgequiz/tsconfig/base`
  - `@forgequiz/tsconfig/nextjs`

## What this package does NOT do

- Does **not** ship runtime code.
- Does **not** contain domain models or cross-module DTOs (those belong under `/modules/<module>/contracts/**`).

## How it interacts with others

- `apps/*` and `packages/*` extend these configs via `tsconfig.json`.

## Invariants (must never break)

- Config-only package: keep it free of runtime code.
- Changes should be backwards compatible when possible; breaking changes require coordinated updates in dependent workspace packages.

## How to modify safely (AI-safe edit rules)

- Prefer adding new presets (new export) rather than breaking `base` defaults.
- Keep the exported file paths stable (`exports` in `package.json`).
- Validate consumers can still `typecheck` after changes.


