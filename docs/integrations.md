# 🔌 Integrations

## Current integrations

The current app has no application-service integration, model-provider integration, payment service, authentication provider, analytics SDK, or webhook consumer.

The HTML/CSS references Google Fonts. This is an external presentation resource, not a chat-processing integration.

## Integration inventory

| Service | Purpose | Receives chat messages? | Status |
|---|---|---|---|
| Google Fonts | Font styles and font files | No application prompt payload is sent by the chat helper | Referenced externally |
| Model provider | Generative response | Not applicable | Not integrated |
| Database | Message persistence | Not applicable | Not integrated |
| Analytics | Usage measurement | Not applicable | Not integrated |

## Adding a service

Before introducing an integration, document business purpose, data fields, recipient, authentication, secrets, permissions, rate limits, retention, user disclosure, failure behavior, monitoring, cost, and vendor terms. Add a threat model and privacy review.

## Non-goal

Do not create placeholder client SDKs or environment variables for hypothetical services.
