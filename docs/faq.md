# FAQ

## Is this connected to ChatGPT or another AI model?

No. The app uses local phrase matching and fixed responses in `ChatbotResponse.js`. It makes no model API request.

## Where do responses come from?

The code checks lowercased input for configured phrases and returns the first matching response. Some categories choose a random item from an array. See [api.md](api.md).

## Does it keep conversation history?

Only until the page reloads. Chat messages live in React memory; there is no database, local storage, or server history.

## Does it need an API key?

No. There are no API credentials or runtime environment variables in the current project.

## What command starts the app?

Run `npm ci` once, then `npm run dev` from the repository root. See [installation.md](installation.md).

## How do I create a production build?

Run `npm run build`; Vite writes static files to `dist/`. See [deployment.md](deployment.md).

## Can I safely add an AI API key as a `VITE_*` variable?

No. Vite embeds such values into browser assets. A private provider key belongs on a server, which this repository does not currently contain.

## What does the MIT grant cover?

The new handbook and guidance authored by Brajesh Kumar are covered by the scoped grant in [LICENSE](../LICENSE). Existing source, fonts, icons, and dependencies are not covered by that documentation grant unless separately licensed.
