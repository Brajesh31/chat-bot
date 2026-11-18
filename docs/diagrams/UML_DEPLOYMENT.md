# 🚀 UML-Style Deployment View

```mermaid
flowchart LR
 Dev[Developer workstation] -->|npm run build| Dist[(Static dist/ bundle)]
 CI[GitHub Actions] -->|npm run build| Dist
 Dist -.->|May be published by owner| Host[Static hosting provider]
 Visitor[Visitor] -->|HTTPS request if deployed| Browser[Visitor browser]
 Host -->|HTML, CSS, JS and assets| Browser
 Browser -.->|External font requests| Fonts[Google Fonts]
```

## Deployment status

The source repository contains a Vite static build process. No configured GitHub Pages deployment, production host, public demo URL, or deployment workflow was verified during the current audit. The static host in this diagram is an optional deployment target, not an existing resource.
