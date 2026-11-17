# ⚠️ Security Risk Register

This register summarizes security-specific risks. It complements the broader project risk register.

| ID | Risk | Status | Treatment |
|---|---|---|---|
| SEC-01 | Visitor text could be mishandled by future unsafe rendering | Current guard: React text rendering | Preserve text rendering and add tests for new sinks |
| SEC-02 | Privileged secret exposed through Vite client variables | No secret required today | Keep server-only secrets out of VITE_ variables |
| SEC-03 | Transitive picomatch 4.0.7 ReDoS advisory in build tooling | Open / unresolved | Keep audit gate enabled and track official fix |
| SEC-04 | External Google Fonts request | Known external resource | Document and consider self-hosting after license review |
| SEC-05 | Lack of server-side controls | Not applicable to current client-only runtime | Reassess before any backend/API feature |
| SEC-06 | Manual browser security review incomplete | Outstanding | Record exact checks and results before release if required |

## Risk acceptance

A risk acceptance must name an owner, rationale, scope, expiry/review date, and mitigation. Do not treat a qualitative rating as proof of exploitability or reachability.

## Escalation

Suspected vulnerability reports should use the private route in SECURITY.md. Do not publish sensitive reproduction details in a public issue.
