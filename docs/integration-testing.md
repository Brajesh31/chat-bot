# 🔗 Integration Testing Status

## Current architecture

The application does not have multiple network services or a backend boundary. The form invokes a local response function directly. Therefore, the repository currently has no HTTP integration test suite.

## What can be verified across modules

The manual browser journey covers the path from input submission to rendered messages. Repository integrity tests verify links, assets, metadata, and package consistency. These are not equivalent to a full automated integration test.

## Future integration tests

If an API is introduced, cover:
- Valid request and response.
- Invalid input and oversized payloads.
- Authentication and authorization.
- Rate limits and abuse controls.
- Provider unavailable and timeout.
- Cancellation and retry.
- Response schema validation.
- Privacy-safe logging and retention behavior.

## Status

Automated application integration tests: **not implemented**. Do not add test names or badges implying they exist.
