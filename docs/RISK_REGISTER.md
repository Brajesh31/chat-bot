# ⚠️ Risk Register

| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R-01 | Canned replies mistaken for AI | Medium | Medium | Disclose limitations |
| R-02 | Substring false positives | High | Low | Negative tests and precedence review |
| R-03 | Future key exposed in Vite bundle | Medium | High | Server-side secret storage |
| R-04 | Unbounded in-memory history | Low | Low | Bound/virtualize if justified |
| R-05 | External font request | Medium | Low | Document or self-host |
| R-06 | CI workflow drift | Medium | Medium | Keep commands aligned |

Ratings are qualitative, not incident statistics. Revisit when architecture changes.
