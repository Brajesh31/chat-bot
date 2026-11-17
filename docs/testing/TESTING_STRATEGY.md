# 🧪 Testing Strategy

The repository uses Node.js' built-in test runner to avoid adding a separate test framework dependency to this small frontend.

## Current automated coverage
- Configured deterministic responses across the current response categories.
- Case-insensitive greeting behavior and standalone word-boundary matching.
- Regression cases for false positives such as `hi` in `high`, `story` in `history`, `time` in `timeline`, `help` in `helpful`, and `weather` in `weatherproof`.
- Deterministic joke, fact, and fallback selection through controlled randomness.
- Browser-local time/date output shape.
- Product-intent precedence when one prompt includes multiple rules.
- Explicit disclosure that this project is a scripted demo, not a generative AI model.
- Executable synthetic prompt regression fixtures from `docs/examples/prompt-regression-cases.json`.
- Package and lockfile alignment.
- Local Markdown link resolution across repository-owned Markdown files.
- Branded favicon and accessible SVG title/description metadata.

## Not yet covered automatically
- React component rendering and complete keyboard interaction.
- Real browser layout, responsive behavior, and screen-reader behavior.
- Full end-to-end browser workflow.
- Human-reviewed accessibility conformance.

These still require browser-based tests or manual review. Do not describe the current suite as browser E2E or a complete accessibility audit.

## Commands
```bash
npm ci
npm run lint
npm test
npm audit --audit-level=high
npm run build
```
