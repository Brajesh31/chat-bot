# Contributing

Thanks for considering a contribution. This repository is a browser-only React/Vite demonstration with local phrase-matched responses. Keep pull requests scoped and product claims aligned with actual behavior.

## Before starting
1. Search existing issues and discussions.
2. Open a proposal for larger changes.
3. Do not begin external AI integration without server-side design and privacy/security review.

## Local setup
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

## Expectations
- Use npm and update the lockfile with package changes.
- Add tests for behavior changes, including negative phrase-match cases.
- Keep user content rendered as text.
- Do not commit secrets, env files, build output, or real transcripts.
- Consider keyboard, screen-reader, contrast, reduced-motion, and responsive behavior.
- Update documentation, examples, diagrams, and changelog when relevant.
- Explain unverified checks honestly.

Use the pull request template and provide problem statement, implementation summary, test evidence, relevant UI evidence, and security/privacy/accessibility notes.
