# 🏛️ Governance

The repository owner maintains direction. CODEOWNERS documents review routing. Principles: accurately describe capabilities, prefer small tested changes, review data flows, include accessibility, and document compatibility risks.

```mermaid
flowchart TD
 A[Issue or proposal] --> B[Scope and risk review]
 B --> C[Implementation branch]
 C --> D[Lint, tests, build]
 D --> E[Pull request review]
 E --> F{Approved?}
 F -- No --> C
 F -- Yes --> G[Merge and release notes]
```
