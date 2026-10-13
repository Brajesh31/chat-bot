# Deployment

## Current deployment model

This is a static frontend. Build it with Vite and host the generated `dist/` directory on a static web host. No application server or database needs to be deployed.

## Build

From the repository root:

```sh
npm ci
npm run build
```

The build output is `dist/`. Upload that directory using the hosting provider's static-site workflow. If hosting below a URL subpath, configure Vite's `base` option for that path. There are no client-side routes requiring a server fallback in the current app.

## Configuration and privacy

There are no runtime environment settings. Any `VITE_*` value is public because Vite embeds it into browser assets. Do not deploy provider API keys or other secrets in the frontend. The page loads Google Fonts from an external origin; use local fonts if deployment privacy requirements prohibit that request.

## Before publishing

- Run the production build and inspect the rendered result at the final URL.
- Check a narrow viewport and keyboard interaction.
- Confirm the host serves `index.html`, scripts, styles, and icons over HTTPS.
- Review source, font, and dependency licenses before redistribution.
- If a remote chat service is added, design and deploy it separately with server-side secret storage, input limits, abuse controls, privacy disclosures, and documented failure behavior.
