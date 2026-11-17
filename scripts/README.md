# 🧰 Repository Validation Scripts

## Available scripts

### validate-docs.mjs

Checks repository documentation and visual assets without third-party packages. It validates:
- Local Markdown links.
- Local HTML src/href references in the root README and index.html.
- JSON examples under docs/examples/.
- SVG title and description metadata.
- Basic SVG closing-tag integrity.
- Absence of inline script elements or remote linked resources in documentation SVG files.

Run it with:

```bash
npm run docs:check
```

## Script design requirements

- Use Node.js built-ins only.
- Print actionable file paths when validation fails.
- Exit non-zero when a broken local reference or invalid asset is found.
- Do not modify files during validation.
- Do not print secrets or environment values.
- Do not claim that link validation establishes factual accuracy or WCAG conformance.

## Adding a validator

Document its inputs, checks, limitations, exit behavior, and the command that runs it. Add it to CI only when it is deterministic and safe to run on pull requests.
