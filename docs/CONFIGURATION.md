# ⚙️ Configuration Reference

## Current application

The current browser application has no required runtime environment variables. The example environment file is explanatory and does not configure a provider or server.

| Setting | Required | Meaning |
|---|---|---|
| Vite development host | No | Vite default is sufficient for local development |
| Vite base path | Only for nested deployment | Must match the static host path |
| AI provider key | No | No AI provider is integrated |
| Database URL | No | No database is configured |
| API base URL | No | No application API exists |

## Environment variable safety

Vite client variables prefixed with VITE_ are bundled into browser-visible assets. Never place provider keys, database passwords, signing secrets, or privileged tokens in them.

If a backend is introduced:
- Keep server-only secrets outside the client build.
- Validate required variables at server startup.
- Provide an example file containing placeholders only.
- Document rotation, revocation, and least privilege.
- Avoid logging secret values.
- Add deployment-specific configuration checks.

## Deployment path

For a site hosted beneath a path, configure the Vite base path before building and verify asset URLs in the generated output. The current root-route app does not require a client-side SPA rewrite. Reassess when routing is added.

## Configuration change checklist

Record the setting, owner, expected value shape, default, validation, exposure, environments, rollback, and tests. Update this page, the sample environment file, deployment guide, and CI configuration together.
