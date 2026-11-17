# 🧪 Unit Testing

## Current unit-test focus

The main pure logic surface is src/components/ChatbotResponse.js. It accepts a string and returns a response string selected by ordered condition checks. The Node.js built-in test runner executes tests in tests/ChatbotResponse.test.js.

## Test patterns

- Use node:test and node:assert/strict.
- Use synthetic prompts.
- Assert exact text only when stable and meaningful.
- Use contains/pattern assertions for environment-dependent output.
- Stub Math.random in a try/finally helper for array-backed branches.
- Test negative near-matches, not only positive triggers.
- Verify branch precedence where multiple triggers occur.

## Running tests

```bash
npm test
npm run test:watch
```

## Maintenance

When adding or changing a response rule, update the response catalog, sample prompts, prompt regression fixtures, and tests. Keep the first-match behavior deliberate and visible.
