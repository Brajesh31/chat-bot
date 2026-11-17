# 🧯 Error Handling and Failure Boundaries

## Current application behavior

The response function is synchronous and local, so the message flow has no provider/network error path. Empty input is ignored by the form. A valid prompt is sent to the local helper and a returned string is appended to React state.

## Current failure categories

| Failure | Current behavior / boundary | Maintainer action |
|---|---|---|
| Whitespace-only prompt | No message pair is added | Preserve and test |
| Unknown phrase | Local fallback string is selected | Document and test |
| Random reply branch | One fixed string is selected from a local array | Control randomness in tests |
| External font unavailable | Browser fallback fonts apply | Verify no layout break |
| JavaScript runtime error | Browser reports an error; no global app recovery UI is configured | Reproduce and fix |
| Build failure | CI workflow fails | Inspect first failing job |

## Do not claim

The app does not have provider retries, offline synchronization, API timeout handling, streaming recovery, server-side message validation, or a model fallback service.

## Future asynchronous behavior

If remote inference or any API is introduced, define:
- Client and server validation.
- Timeout and cancellation behavior.
- Retry policy and idempotency.
- Offline and connection-loss states.
- Provider outage and rate-limit messages.
- Error identifiers and privacy-safe logging.
- User-visible recovery and escalation.
- Tests for success, timeout, invalid response, authorization, and provider failure.

Do not present a canned local response as a successful remote model response.
