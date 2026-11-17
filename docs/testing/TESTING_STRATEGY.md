# 🧪 Testing Strategy

Verify response helper behavior, form submission, message rendering, and production build without external services.

Layers: unit response tests; component tests for empty/valid submissions; integration chat flow; ESLint; Vite build.

Avoid asserting a specific random reply unless randomness is controlled. Test positive, negative, and ambiguous phrases. Render prompts as text. Do not call real model providers in unit tests.

```bash
npm ci
npm run lint
npm test
npm run build
```
