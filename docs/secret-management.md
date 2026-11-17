# 🔑 Secret Management

## Current state

The current application does not require secrets. There is no provider API key, database password, signing secret, OAuth client secret, or server session key.

The root .env.example intentionally contains explanatory comments only. It must not be filled with fake or real credentials.

## Vite client exposure

Any VITE_-prefixed variable referenced by client code can be embedded in browser assets. Treat it as public configuration. Do not put privileged secrets in VITE_ variables, even if the repository file is ignored.

## If a server is introduced

- Store secrets in the hosting provider's protected server environment or a managed secret store.
- Grant only the required service identity access.
- Rotate and revoke credentials through a documented process.
- Keep secret values out of logs and error messages.
- Use placeholders in documentation and examples.
- Test missing and invalid configuration behavior.
- Document ownership, environment, expiry, and emergency rotation.

## Incident response

If a secret is accidentally committed, revoke or rotate it first. Removing the text from the latest commit does not remove it from Git history. Follow SECURITY.md and incident response guidance.
