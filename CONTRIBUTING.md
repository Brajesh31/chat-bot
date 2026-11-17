# Contributing

This repository is a browser-only React/Vite demonstration with local phrase-matched responses. Keep pull requests focused and product claims aligned with actual behavior.

## Before starting
1. Search existing issues and discussions.
2. Open a proposal for larger work.
3. Do not start external AI integration without a server-side design and privacy/security review.

## Local setup
```bash
npm ci
npm run dev
```

## Required checks
```bash
npm run lint
npm test
npm run build
```

## Expectations
- Use npm and update `package-lock.json` with package changes.
- Add tests for behavior changes, including negative phrase-match cases.
- Render user content as text, not raw HTML.
- Do not commit secrets, env files, build output, or real transcripts.
- Consider keyboard, screen-reader, contrast, reduced-motion, and responsive behavior.
- Update documentation, examples, diagrams, and changelog when relevant.
- Report unverified checks honestly.

Use the PR template. Include the problem, implementation summary, test evidence, relevant UI evidence, and security/privacy/accessibility notes.
