# 🧪 Test Strategy

## Unit-level behavior

Test ChatbotResponse.js with synthetic prompts. Include:
- Positive examples for each configured response category.
- Negative examples for selected word-boundary rules.
- Overlapping prompts to verify first-match precedence.
- Controlled randomness for joke, fact, and fallback arrays.
- Stable output contracts for browser date/time behavior.

## Repository integrity

Test that package metadata matches the lockfile, local Markdown links resolve, SVG files have title and description metadata, and key documentation files remain present.

## Static and build verification

Use ESLint and the Vite production build. Run on the Node.js versions configured by CI.

## Manual testing

Use BROWSER_VERIFICATION.md for actual UI interaction, responsive layout, keyboard, live announcements, reduced motion, and font fallback.

## Non-goals

Do not pretend that the current suite covers backend integration, API authentication, database migrations, model evaluation, or browser E2E. Those layers do not exist.

## Determinism

Control random selection inside tests and restore global state after each stub. Avoid assumptions about the test machine's timezone or locale.
