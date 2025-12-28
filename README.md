# ForgeQuiz

ForgeQuiz is an **AI-native, spec-driven learning platform** that turns natural language prompts into adaptive multiple-choice quizzes with structured feedback loops.

Users describe what they want to practice in a single prompt. ForgeQuiz generates a **constrained, validated** quiz tailored to that intent, evaluates submissions, provides feedback grounded in the original learning scope, and enables iterative practice—either by regenerating quizzes from the same prompt or evolving the prompt itself.

Built as an **AI-first modular monolith**, ForgeQuiz treats specifications and architecture as **executable contracts**. Every module is self-documented and designed for both human engineers and AI agents to reason about safely, enabling reliable first-pass feature development even as system complexity grows.

## Constitution

This repo is governed by the ForgeQuiz Constitution:

- `CONSTITUTION.md`

If code and specs disagree, **the code is wrong**.

## SSD framework (how we build)

The authoritative Spec-Driven Development framework lives in:

- `specs/_framework/README.md`

Bootstrap spec (policy-only, immediately executable):

- `specs/2025_12_28-001-system-framework/SPEC.md`

Architecture decisions:

- `architecture/adr/ADR-INDEX.md`

## Core principles

- **Spec-Driven Development** as the primary workflow
- **AI as a first-class system participant**, not an add-on
- **Hard module boundaries**, soft deployment boundaries
- **Deterministic validation** around probabilistic generation
- **Architecture optimized for limited-context AI agents**

## Tech stack (target)

- **Next.js**: UI, UX, orchestration
- **Go**: core domain, quiz generation pipeline
- **PostgreSQL**: persistence (+ **pgvector** ready)
- **Redis**: ephemeral state
- **External AI model APIs** via a strict gateway
- **OpenAPI**, **JSON Schema**, and **Markdown specs** as source of truth

## Repository intent

This repo is intended to evolve around the source-of-truth hierarchy defined in:

- `CONSTITUTION.md`
