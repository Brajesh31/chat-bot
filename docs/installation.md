# Installation

## Requirements

- Node.js and npm
- Git
- A modern web browser

The current version does not require an API key, backend, or database.

## Install

1. Clone the repository and enter its root directory.
2. Install the locked dependencies:

   ```sh
   npm ci
   ```

3. Start Vite:

   ```sh
   npm run dev
   ```

4. Open the local address printed by Vite, usually `http://localhost:5173`.

Use `npm install` instead of `npm ci` only when intentionally changing dependency versions and the lockfile.

## Configuration

No environment variables are currently consumed by the application. `.env.example` is a comment-only placeholder. Do not add private keys to `VITE_*` variables: Vite substitutes them into client-side assets, where visitors can inspect them.

## Build and preview

```sh
npm run build
npm run preview
```

The production bundle is written to `dist/`. The preview server is for local inspection, not a production hosting service. See [deployment.md](deployment.md).

## Common setup issues

- If `npm ci` fails, confirm the command runs from the repository root and inspect the exact npm error.
- If the page does not load, check the Vite terminal output and browser console.
- If remote fonts are unavailable, the app should fall back to local system fonts.
