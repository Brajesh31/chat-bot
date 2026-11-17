# 🪵 Logging and Diagnostics

## Current implementation

The application does not implement a structured logging subsystem, analytics pipeline, error-reporting SDK, or server log collector. The chat message flow does not intentionally send prompt content to an application server.

Browser runtime errors can be inspected with the browser developer console. Vite and npm print development/build information to the terminal. These are diagnostic tools, not a production observability system.

## Privacy rules for diagnostics

- Do not add chat message bodies to diagnostic logs by default.
- Do not log credentials, cookies, access tokens, or personal data.
- Sanitize stack traces or environment output before publishing issue reports.
- Do not collect session replay or analytics without a documented privacy review.

## Future logging requirements

If a backend is introduced, define event names, field allowlists, severity levels, correlation IDs, retention, access, redaction, and incident use. Establish a privacy review and make sure logging does not accidentally become transcript storage.

## Support evidence

Ask contributors for the exact command, sanitized error text, Node/npm version, browser/version, and steps to reproduce. Avoid asking users to publish private chat content.
