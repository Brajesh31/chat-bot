# 🧪 Testing Strategy

The repository uses Node.js' built-in test runner to avoid adding a test framework dependency to this small frontend.

## Current automated coverage
- Case-insensitive greeting behavior.
- Standalone "hi" recognition and regression against the "history" false positive.
- Fixed greeting response.
- Deterministic joke and fact selection with controlled randomness.
- Deterministic fallback selection.
- Static weather disclaimer and goodbye response.

## Not yet covered automatically
- React component rendering and keyboard interaction.
- Browser layout, responsive behavior, and screen-reader behavior.
- Full end-to-end browser flow.

These need browser-based tests or manual review. Do not describe the current suite as component or end-to-end coverage.

## Commands
```bash
npm ci
npm run lint
npm test
npm run build
```
