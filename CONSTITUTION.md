# ForgeQuiz – Project Constitution

## Purpose

ForgeQuiz exists to prove that AI-driven products can scale in **correctness, velocity, and reliability** if architecture and specifications are treated as first-class system components.

This is not a quiz app with AI bolted on. This is an **AI-native system** where prompts define curricula, specifications define behavior, and architecture defines what is possible without regression.

---

## Core Vision

- The **prompt is the learning contract**
- The **quiz is a deterministic projection of that contract**
- The **feedback loop is the product**
- The **specification is the system**

ForgeQuiz optimizes for:
1. First-pass success on new features
2. Safe evolution of a growing architecture
3. AI agents operating with limited context but high confidence
4. Human developers spending time on intent, not archaeology

---

## Non-Negotiable Principles

### 1. Spec-Driven Development (SDD)

All work begins with a spec.

No code is written without:
- A defined problem statement
- Explicit scope and non-goals
- Clear acceptance criteria
- Defined contracts and invariants

Specs are not documentation. Specs are **the authoritative source of truth**.

---

### 2. Architecture Is AI-Readable Infrastructure

Architecture documents are written assuming:
- AI agents have **limited context windows**
- AI agents must act **without tribal knowledge**
- AI agents must succeed **without guessing**

Every module must be:
- Locally complete
- Explicit in responsibility
- Clear about what it owns and what it does not

---

### 3. Modular Monolith by Default

ForgeQuiz is a **modular monolith**.

- Module boundaries are hard.
- Deployment boundaries are optional.
- Cross-module communication is explicit.

We do not distribute until forced by scale.

---

### 4. Contracts Over Conventions

No implicit coupling.

All communication occurs via:
- Explicit APIs
- Versioned schemas
- Domain events (where applicable)

If it is not written down, it does not exist.

---

### 5. AI Is Powerful but Untrusted

AI outputs are:
- Generated probabilistically
- Validated deterministically
- Rejected or corrected if they violate constraints

The system never assumes correctness from AI. Correctness is enforced by structure.

---

## System Boundaries

ForgeQuiz consists of:
- A user interface layer (Next.js)
- A core domain layer (Go)
- A persistence layer (PostgreSQL)
- An ephemeral state layer (Redis)
- An AI Gateway layer (external models)

AI models are external dependencies. They are never allowed to leak into core domain logic directly.

---

## Source of Truth Hierarchy

1. **Specs** (`/specs`)
2. **Architecture Docs** (`/architecture`)
3. **Module Contracts** (`/modules/*/contracts`)
4. **Code**
5. **Tests**

If code and specs disagree, the code is wrong.

---

## Specification Requirements

Every feature spec must define:

- Problem statement
- User flow
- Inputs and outputs
- Domain model changes
- API contracts (OpenAPI / JSON Schema)
- Validation rules
- Failure modes
- Security and privacy considerations
- Observability requirements
- Acceptance criteria

No spec, no merge.

---

## Module Design Rules

Every module must include:

- Clear ownership statement
- Public API definition
- Data ownership definition
- Invariants that must never break
- Failure handling strategy
- Test strategy
- Change guidelines

Modules must be independently understandable.

---

## AI Agent Enablement

Each module must contain an **Agent Guide** that answers:

- What does this module do?
- What does it not do?
- How does it interact with others?
- What invariants must be preserved?
- How should an agent modify it safely?

If an AI agent cannot safely change the module using only its docs, the module is incomplete.

---

## Change Process

1. Write or update spec
2. Validate architectural impact
3. Generate a change plan
4. Implement with tests
5. Update docs
6. Verify acceptance criteria

Skipping steps is considered a defect.

---

## Quality Bar

ForgeQuiz prioritizes:
- Correctness over cleverness
- Explicitness over brevity
- Stability over novelty

Velocity is a consequence of clarity.

---

## Definition of Success

A feature is successful when:
- It meets the spec
- It does not break invariants
- It requires no undocumented knowledge
- It can be extended by an AI agent in the future

---

## Final Principle

> “If the architecture cannot explain itself to an AI, it does not truly understand itself.”

ForgeQuiz is built so that understanding compounds instead of decays.


