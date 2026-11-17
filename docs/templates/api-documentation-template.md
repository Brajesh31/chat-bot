# 📡 API Documentation Template

> **Not applicable to the current runtime.** The application does not expose HTTP endpoints. Use this template only after a backend/API is approved and implemented.

## API metadata

- Service:
- Version:
- Base URL:
- Owner:
- Status:
- Related ADR:

## Authentication and authorization

Describe identity, credentials, permission scopes, session policy, and error behavior. Never publish secrets.

## Endpoints

| Method | Path | Purpose | Authentication | Rate limit |
|---|---|---|---|---|

## Request and response schema

Include types, required fields, validation, examples using synthetic data, and sensitivity labels.

## Errors

| Status / code | Cause | Safe response | Retry behavior |
|---|---|---|---|

## Security and privacy

Input limits, logging, retention, provider processing, data transfer, and abuse protection.

## Compatibility and versioning

Deprecation, migration, client behavior, and backwards compatibility.

## Testing

Contract tests, authentication tests, invalid-input tests, rate-limit tests, timeout and provider-failure tests.
