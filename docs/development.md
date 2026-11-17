# Development

## Commands

| Command | Use |
|---|---|
| `npm ci` | Install exact locked dependencies |
| `npm run dev` | Run Vite with hot-module reload |
| `npm run build` | Produce optimized static assets in `dist/` |
| `npm run preview` | Preview a built bundle locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run Node.js built-in tests |
| `npm run test:watch` | Watch and rerun Node.js tests |

## Change workflow
1. Create a focused branch from the current default branch.
2. Install dependencies using `npm ci`.
3. Implement a cohesive change using the existing React and ES module structure.
4. Add regression tests for changed behavior, including ambiguous and negative prompt examples.
5. Run lint, tests, dependency audit, and production build.
6. Exercise changed UI in a browser and record manual accessibility checks.
7. Review the diff for secrets, generated `dist/` output, and unrelated files.
8. Update README and docs when runtime behavior, configuration, privacy, or deployment changes.

## Code conventions
- Keep high-level message state in `App.jsx` unless a dedicated state layer is justified.
- Keep local phrase rules in `ChatbotResponse.js` while responses remain synchronous and local.
- Preserve text rendering for prompts and replies. Do not turn user input into HTML.
- Keep the form input size limit and document changes to it.
- Keep dependencies minimal and update `package-lock.json` with `package.json` changes.

## Credentials and user data
The current application requires no credentials and does not persist the conversation. Never commit `.env` files, provider keys, or real user messages. Any future external AI provider key must remain on a server and must never be bundled into the Vite frontend.
