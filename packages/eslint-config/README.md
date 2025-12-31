# `@forgequiz/eslint-config`

Shared ESLint configuration presets for ForgeQuiz workspace packages.

## Policy

- This package is **dev-only configuration** (no runtime code).
- Product/runtime packages must **not** depend on `/tools/*` packages.
- Do **not** introduce shared domain models here; cross-module shapes belong under `/modules/<module>/contracts/**`.


