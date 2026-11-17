# ✅ Security Best Practices

## Source and UI

- Render visitor text as text, never as raw HTML.
- Avoid eval, dynamic code generation, and unsafe URL handling.
- Keep input size bounded.
- Do not trust user-controlled values in future API or file paths.
- Avoid collecting real transcripts in tests, logs, screenshots, or issue reports.

## Dependencies

- Keep package-lock.json committed.
- Review dependency updates and transitive changes.
- Inspect install scripts and license requirements.
- Run npm audit and review advisories.
- Keep known vulnerabilities visible until properly remediated.

## GitHub workflows

- Use the minimum permissions needed.
- Avoid storing credentials in source files.
- Review third-party actions before use.
- Keep CodeQL and CI active.
- Do not turn off required checks just to obtain a green badge.

## Secrets

No secrets are needed by the current app. Never add a provider key to frontend source or VITE_ variables.

## Future server controls

A future server must assess authentication, authorization, abuse limits, request validation, CSRF/CORS as appropriate, secure headers, logging minimization, retention, encryption at rest/in transit, and incident recovery.
