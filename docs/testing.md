# 🧪 Testing Overview

## Current testing layers

The repository uses Node.js' built-in test runner for response logic and repository integrity. ESLint checks configured static rules. Vite creates the static production bundle. npm audit reviews known dependency advisories.

## Available commands

```bash
npm ci
npm run lint
npm test
npm run build
npm audit --audit-level=high
```

## What is automated

- Phrase matching and deterministic examples.
- Rule precedence and negative near-match behavior.
- Browser-local date/time output contract.
- Package manifest and lockfile alignment.
- Local Markdown link and directory-index coverage.
- Markdown structure, fenced-code and Mermaid declaration checks.
- SVG metadata and app stylesheet integrity.
- Markdown style linting through the pinned markdownlint-cli2 tool.
- Documentation and repository assertions.

## What remains manual or absent

There is no browser E2E automation, React Testing Library, jsdom component test, visual regression service, API integration test, performance benchmark suite, or formal accessibility audit.

## Testing policy

Do not describe a manual check as automated. Record environment, browser/version, exact commit, result, and evidence. Add a new test layer only when it provides stable and maintainable coverage for a real feature.
