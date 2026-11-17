# 📝 Architecture and Product Decision Log

This log records decisions that materially shape the current implementation. New consequential choices should use a numbered ADR under the repository's decision record process.

## ADR-001: Describe the baseline as a local scripted chat

**Status:** Accepted.

The current code uses ordered conditional phrase matching and prewritten responses. It has no backend, model provider, or live retrieval. Public copy and documentation must preserve this distinction. A remote provider requires a separately reviewed server boundary.

## ADR-002: Use npm and the committed lockfile

**Status:** Accepted.

Contributors use npm and npm ci. Package manifest changes must include the corresponding lockfile update. Avoid introducing another package manager without an explicit decision.

## ADR-003: Test the actual local response contract

**Status:** Accepted.

The response helper is tested with Node's built-in test runner. Tests cover rule categories, false positives, precedence, and deterministic selection for random branches. External provider calls are not part of unit tests.

## ADR-004: Keep application state local

**Status:** Accepted.

Submitted messages are held in React state. No persistent transcript storage is implemented. Any storage proposal must include privacy, retention, deletion, and security design before coding.

## Review rule

A decision can be superseded, but the old record should remain for historical context. Include evidence, alternatives, consequences, and the exact commit or issue that led to the change.
