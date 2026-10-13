# Contributing

Thanks for considering a contribution. This project is a small React chat UI with local, phrase-based responses. Keep changes focused and describe user-visible behavior accurately; do not present scripted responses as model-generated AI.

## Before starting

1. Read the README and the relevant pages in `docs/`.
2. Search existing issues and pull requests for related work.
3. Open an issue first for larger changes such as a remote model integration, persistence, accounts, or a backend.
4. Never commit API keys, credentials, private conversations, or local environment files.

## Local setup

Install dependencies from the root lockfile with `npm ci`, then run `npm run dev`. The current application needs no credentials or backend. See [docs/installation.md](docs/installation.md).

## Change guidelines

- Use a focused branch and keep each change reviewable.
- Follow the existing React and Vite module conventions.
- Keep the response rules in `src/components/ChatbotResponse.js` deterministic except where the current feature intentionally selects a random response.
- Preserve safe text rendering. Do not use `dangerouslySetInnerHTML` for user prompts or bot replies.
- If you add a remote AI/API integration, document the provider, data sent, secret handling, errors, privacy implications, and setup requirements before merging.
- Run the relevant available checks and state exactly what you ran. The project currently has lint and build scripts but no test script.
- Update README and docs when runtime behavior or setup changes.

## Pull requests

Include the reason for the change, user-visible behavior, screenshots for material UI changes, configuration or data effects, and validation results. Remove chat transcripts and personal information from screenshots. Check the final diff for secrets, generated `dist/`, local dependencies, and unrelated changes.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Authorship and licensing

Submit work you have the right to contribute and identify third-party code, fonts, and images. The repository's existing source provenance is not established by its package metadata. The MIT grant added with this handbook is scoped to documentation authored by Brajesh Kumar; see [LICENSE](LICENSE) before reusing project content.
