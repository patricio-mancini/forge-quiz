# Runbook: Spec creation (prompt → `SPEC.md`)

This runbook helps an agent transform a user prompt into a complete feature spec without guessing.

Policy authority (do not restate here):
- Governance/principles: `CONSTITUTION.md`
- Lifecycle gates: `/specs/_framework/SSD_SDLC.md`

## Inputs

- User prompt / request (the “learning contract” intent, feature intent, or change intent)
- Target module(s) (if known)
- Constraints: scope, deadlines, risk tolerance, compliance/security constraints

## Output

- `/specs/YYYY_MM_DD-<seq>-<slug>/SPEC.md` using `/specs/_framework/templates/FEATURE_SPEC.template.md`

## Procedure (deterministic)

1) Create the spec folder (follow `/specs/_framework/NAMING.md`)
2) Copy the feature spec template into `SPEC.md`
3) Fill sections in this order:
   - **Metadata**: status, owner, target module(s), risk level
   - **Problem statement**: why now; what breaks without this
   - **User flow**: happy path steps; note the primary actor
   - **Scope**:
     - In scope: what will change
     - Non-goals: what will *not* change (explicitly)
   - **Inputs / Outputs (boundary-level)**:
     - Name the boundary surfaces (UI/API/module contract/event/AI gateway)
     - Keep it at “edge shape” level, not internal domain design
   - **Contracts (links)**:
     - If *any* boundary shape changes, add concrete contract paths under `/modules/<module>/contracts/`
     - If not needed, state “No contract changes required” (and why)
   - **Invariants**: list as `INV-1`, `INV-2`, ...
   - **Validation rules (deterministic)**: list as `VR-1`, `VR-2`, ...
   - **Failure modes**: list as `FM-1`, `FM-2`, ...
   - **Edge cases (with proposed solution)**: list as `EC-1`, `EC-2`, ...
     - Each edge case must include a concrete handling strategy
     - Prefer linking each edge case to at least one validation/test idea
   - **Security & privacy**: data classification + threat notes
   - **Observability**: logs/metrics/traces/alerts (only what matters)
   - **Acceptance criteria**: list as `AC-1`, `AC-2`, ... (testable)
   - **Open questions**: anything that blocks implementation confidence

## Completion checklist (must be true before planning)

- `SPEC.md` exists and uses the template structure
- Every acceptance criterion is testable (no vague words like “fast” without a threshold)
- Every invariant has at least one validation rule and at least one test idea implied
- Edge cases exist and each includes a proposed solution/handling
- Contracts section is explicit: either links to intended contract paths or states “not needed”


