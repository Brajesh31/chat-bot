# 📡 API Reference and Current API Status

## Status

The project does not expose an application HTTP API. It has no backend server, REST or GraphQL endpoints, API authentication, webhooks, or public SDK.

## Internal function boundary

The local response helper is a JavaScript module function imported by ChatForm. It accepts a prompt string and returns a response string synchronously. It is not a network API and does not define an HTTP request/response contract.

## Data contract in the UI

A message entry is represented in application state using a role and text value. The current role values used by the UI distinguish visitor messages from bot-role responses. This in-memory shape is an implementation detail, not a stable external API.

## Future API proposal requirements

If a backend endpoint is proposed, document:
- Method and path.
- Authentication and authorization.
- Request and response schemas.
- Maximum request size and validation.
- Error codes and retry rules.
- Rate limits and abuse controls.
- Logging and retention.
- Provider processing and data transfers.
- Versioning and deprecation.

Until such a service exists, do not add fabricated endpoints to documentation, generated SDKs, or badges.
