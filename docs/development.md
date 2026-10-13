# Development

## Commands

The root `package.json` defines:

| Command | Use |
| --- | --- |
| `npm run dev` | Run Vite with hot-module reload |
| `npm run build` | Produce optimized static assets in `dist/` |
| `npm run preview` | Preview a built bundle locally |
| `npm run lint` | Run ESLint |

There is currently no test script or automated test suite.

## Change workflow

1. Create a focused branch from the current default branch.
2. Install dependencies using `npm ci`.
3. Implement a cohesive change using the existing React and ES module structure.
4. Run the relevant lint or build command if useful, and report only checks actually performed.
5. Exercise the changed UI in a browser. The project has no automated browser or unit tests at present.
6. Review the final diff for secrets, generated `dist/` output, and unrelated files.
7. Update the README and docs if runtime behavior, configuration, privacy, or deployment changes.

## Code conventions

- Keep the high-level message state in `App.jsx` unless there is a reason to introduce a dedicated state layer.
- Keep local phrase rules in `ChatbotResponse.js` while responses remain synchronous and local.
- Preserve text rendering for prompts and replies. Do not turn user input into HTML.
- Add explicit loading, error, empty, and keyboard behavior if a future network integration is introduced.
- Keep dependencies minimal and update `package-lock.json` with `package.json` changes.

## Credentials and user data

The current application requires no credentials and does not persist the conversation. Never commit `.env` files, provider keys, or real user messages. Any future external AI provider key must remain on a server and must never be bundled into the Vite frontend.
