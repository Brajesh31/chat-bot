# 🧪 Testing Strategy

The repository uses Node.js' built-in test runner to avoid adding a separate test framework dependency to this small frontend.

## Current automated coverage
- Configured deterministic responses for every existing rule category.
- Case-insensitive greetings and standalone word-boundary matching.
- Regression cases for false positives such as `hi` in `high`, `story` in `history`, `time` in `timeline`, and `help` in `helpful`.
- Deterministic joke, fact, and fallback selection through controlled randomness.
- Local time/date output shape.
- Product intent order when a message includes multiple rules.
- Package and lockfile consistency.
- Relative Markdown link targets, branded favicon references, and SVG metadata integrity.

## Not yet covered automatically
- React component rendering and full keyboard interaction.
- Real browser layout, responsive behavior, and screen-reader behavior.
- Complete end-to-end browser workflow.
- Human-reviewed accessibility conformance.

These need browser-based tests or manual review. Do not describe the current suite as browser E2E or a complete accessibility audit.

## Commands
```bash
npm ci
npm run lint
npm test
npm audit --audit-level=high
npm run build
```
