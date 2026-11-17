# 🔑 Environment Variables

## Current requirement

The current client-only app does not read environment variables at runtime. The root .env.example documents this intentionally. No provider key, database URL, API base URL, or authentication secret is required to run the application.

## Vite exposure rule

Vite-exposed variables prefixed with VITE_ are included in browser-delivered assets. They are public values, not a secret store. Never place API keys, database passwords, signing secrets, private tokens, or privileged credentials in VITE_ variables.

## Adding configuration safely

1. Identify a real configuration need.
2. Decide whether the value is public or secret.
3. Keep secrets on a server if a backend is introduced.
4. Validate required values at startup.
5. Put only safe placeholder names in .env.example.
6. Document each variable's purpose, default, allowed format, environment, owner, and rotation behavior.
7. Add tests for missing and invalid values.
8. Update CONFIGURATION.md, deployment docs, and CI.

## Current examples

There are no required entries to add to .env.example today. An empty variable catalogue is more accurate than inventing settings that the app does not consume.
