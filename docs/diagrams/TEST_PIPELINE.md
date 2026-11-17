# Test and Build Pipeline

```mermaid
flowchart TD
 A[Push or pull request] --> B[npm ci]
 B --> C[ESLint]
 C --> D[Node built-in test runner]
 D --> E[Vite production build]
 E --> F{All passed?}
 F -- Yes --> G[Green CI check]
 F -- No --> H[Fix and push]
 H --> B
```

This checks code quality and build output. It does not deploy the app.
