# Troubleshooting

## Vite does not start
- Run the command from the repository root.
- Confirm dependencies installed successfully with `npm ci`.
- Check whether the local development port is already in use; use the URL Vite prints if it selects another port.

## The browser page is blank
- Check the Vite terminal for compile errors.
- Open browser developer tools and inspect runtime errors.
- Confirm JavaScript is enabled and that the browser loaded `src/main.jsx` and its imported styles.

## The bot reply is unexpected
The response helper uses ordered, case-insensitive rules. Some single-word rules use word boundaries to avoid matching inside longer words, but many multi-word checks still use substring matching. Rule order matters. Jokes, facts, and unknown input may return different replies because they are selected randomly. Use [response rule guide](RESPONSE_RULES.md) and add regression tests for both expected and unexpected matches.

## Messages disappeared
This is expected. The conversation exists only in React state and resets when the page reloads or the app remounts. The clear button intentionally resets the same in-memory history.

## Fonts look different or fail to load
The page references Google Fonts. If the browser is offline or the request is blocked, system fallback fonts are used. No chat message is needed to load font files.

## Lint, test, audit, or build errors
Run `npm run lint`, `npm test`, `npm audit --audit-level=high`, and `npm run build`. Include the failed command and relevant sanitized output in an issue. Do not attach credentials, private prompts, or complete conversation histories.
