# 🤝 Contributor Guide

## First contribution

Read README.md, CONTRIBUTING.md, the documentation hub, and the guide closest to the code you plan to change. Search issues and avoid duplicate proposals.

## Setup

```bash
npm ci
npm run dev
```

## Contribution expectations

- Keep scope focused.
- Preserve unrelated source and assets.
- Use npm and update the lockfile with dependency changes.
- Add deterministic tests for local response changes.
- Add negative and precedence examples.
- Preserve text rendering for visitor content.
- Consider keyboard, focus, screen-reader, contrast, reduced-motion, and responsive behavior.
- Update documentation, asset indexes, and changelog.

## Submission evidence

Run lint, tests, build, and audit. Link the CI run and exact commit. Report manual checks separately. The current audit has a known high-severity picomatch finding; see DEPENDENCIES.md.

## Conduct and security

Follow CODE_OF_CONDUCT.md. Do not publish vulnerability details in public issues. Never upload credentials or real private conversation transcripts.
