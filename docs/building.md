# 🏗️ Building the Application

## Production build

```bash
npm ci
npm run build
```

Vite writes the production output to dist/. The output contains static frontend assets suitable for a static hosting provider.

## Preview the build

```bash
npm run preview
```

Use the local preview URL printed by Vite. This checks the generated bundle locally; it does not deploy the site.

## Build configuration

vite.config.js enables the React plugin. The current application entry point is index.html and src/main.jsx. If the site is hosted below a domain root, configure and verify the Vite base path before building.

## Build troubleshooting

- Confirm the expected Node.js and npm versions.
- Use npm ci to restore the lockfile dependency tree.
- Check the first build error, not just the final summary.
- Verify import paths and filename case.
- Do not commit dist or node_modules.
- Inspect browser asset requests in the preview.

## Security note

The current full dependency audit reports the documented picomatch advisory. Do not mislabel a successful bundle as an audit pass. See DEPENDENCIES.md for remediation tracking.
