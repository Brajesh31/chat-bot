# 🔭 Observability

## Current observability

The repository has GitHub Actions job logs and CodeQL results for source and build verification. The browser exposes runtime diagnostics through developer tools. There is no application telemetry SDK, server metrics, distributed tracing, structured app log, or user session replay.

## Signals available today

- CI pass/fail and step logs.
- CodeQL workflow results.
- npm audit output.
- Browser console errors during manual reproduction.
- Static host metrics only if separately configured by the deployment owner.

## Privacy constraints

Do not add prompt-body telemetry or session replay without a documented purpose, privacy review, user disclosure, field minimization, access controls, and retention policy.

## Future service requirements

A backend would need service-level indicators, alert thresholds, correlation IDs, log redaction, monitoring ownership, and incident routing. Do not describe these proposed capabilities as deployed.
