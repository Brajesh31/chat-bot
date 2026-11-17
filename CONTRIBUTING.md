# Contributing

This repository is a browser-only React/Vite demonstration with local phrase-matched responses. Keep pull requests focused and product claims aligned with actual behavior.

## Before starting
1. Search existing issues and discussions.
2. Open a proposal for larger work.
3. Do not start external AI integration without server-side design and privacy/security review.

## Setup
```bash
npm ci
npm run dev
```

## Checks
```bash
npm run lint
npm test
npm run build
```

Use npm and update the lockfile with package changes. Add tests for behavior changes, including negative phrase-match cases. Render user content as text. Do not commit secrets, env files, build output, or real transcripts. Consider keyboard, screen-reader, contrast, reduced-motion, and responsive behavior. Update docs/examples/diagrams/changelog as appropriate. Report unverified checks honestly.

Use the PR template and include problem, implementation, test evidence, UI evidence, and security/privacy/accessibility notes.
