# `@forgequiz/web`

ForgeQuiz UI entrypoint (Next.js).

## Policy (invariants)

- UI/UX orchestration only (core domain logic belongs in the Go domain layer).
- Must not take runtime dependencies on `/tools/*` packages (dev/CI only).


