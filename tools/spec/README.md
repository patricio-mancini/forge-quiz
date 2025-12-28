# spec tooling (ForgeQuiz)

This package is reserved for **dev/CI-only** tooling to support the SSD framework:

- scaffold spec folders from templates
- validate repository invariants (required files exist)
- validate contracts (OpenAPI / JSON Schema)

## Policy

- This tooling must **not** be a runtime dependency of product modules.
- The authoritative rules live in `/specs/_framework/`.


