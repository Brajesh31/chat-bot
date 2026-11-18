# 🔭 Future Scope

This page groups possible future directions for ChatBuddy. Every item below is a proposal. None should be described as implemented until code, tests, documentation, and verification evidence are present.

## Near-term product improvements

- Improve input and control accessibility after manual browser and assistive-technology review.
- Refine ambiguous phrase matching and false-positive behavior.
- Expand deterministic regression coverage for overlapping prompt categories.
- Review external font requests and fallback behavior.
- Capture real desktop and mobile screenshots from an actual browser session.

## Learning and documentation improvements

- Add practical teaching exercises for React state, forms, effects, and phrase-rule testing.
- Add a browser-level test suite if the UI workflow becomes more complex.
- Add measured performance and contrast evidence rather than estimated claims.
- Keep the project tree and documentation indexes synchronized.

## Larger architecture proposals

A remote AI provider, server API, transcript storage, user accounts, analytics, or multi-user support would materially change this product. Each requires an approved feature proposal and architecture decision covering:
- User need and acceptance criteria.
- Data flow and trust boundaries.
- Secret and identity management.
- Privacy notice, retention, and deletion.
- Abuse controls, rate limits, and cost.
- Error handling and availability.
- Security and accessibility testing.
- Monitoring and support ownership.
- Migration and rollback.

## Explicit non-goals until approved

- Exposing model-provider credentials in browser code.
- Describing phrase matching as generative AI.
- Adding a database merely to justify an ER diagram.
- Adding fake API endpoints or a deployment badge.
- Persisting visitor messages without clear notice and deletion behavior.

See [ROADMAP.md](../ROADMAP.md) for prioritized project proposals.
