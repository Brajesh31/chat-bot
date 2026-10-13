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

The response helper uses ordered, case-insensitive substring checks. A prompt may match a short keyword earlier in the function than a longer phrase. Jokes, facts, and unknown input may return different replies because they are selected randomly. Edit the local response rules to change this behavior; no model is being queried.

## Messages disappeared

This is expected. The conversation exists only in React state and resets when the page reloads or the app remounts.

## Fonts look different or fail to load

The stylesheet imports Google Fonts. If the browser is offline or the request is blocked, system fallback fonts are used. No chat message is needed to load the font files.

## Lint or build errors

Run `npm run lint` for ESLint and `npm run build` for a production bundle. Include the command and relevant error output in an issue, after removing local paths or private values. There is no test script in the current package.
