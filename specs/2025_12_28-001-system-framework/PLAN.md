## Plan: System Framework (policy-only bootstrap)

### Linked spec
- SPEC: ./SPEC.md

### Execution steps (immediately executable)
1) Create the framework docs and templates:
   - `specs/_framework/README.md`
   - `specs/_framework/SSD_SDLC.md`
   - `specs/_framework/CONTRACTS.md`
   - `specs/_framework/ADR_PROCESS.md`
   - `specs/_framework/NAMING.md`
   - `specs/_framework/templates/*`

2) Create architecture scaffolding:
   - `architecture/README.md`
   - `architecture/adr/ADR-INDEX.md`
   - `architecture/adr/2025_12_28-001-monorepo-tooling.md`

3) Create module template scaffolding:
   - `modules/_template/AGENT_GUIDE.md`
   - `modules/_template/contracts/README.md`

4) Create tooling placeholder package:
   - `tools/spec/README.md`
   - `tools/spec/package.json` (minimal; no runtime deps)

5) Update root README:
   - link to `specs/_framework/README.md`
   - link to `specs/2025_12_28-001-system-framework/SPEC.md`

### Verification checklist
- [x] Folder skeleton exists as defined in SPEC.
- [x] Templates are minimal and consistent with the Constitution.
- [x] Monorepo tool choice is documented as an ADR.
