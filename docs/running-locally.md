# ▶️ Running Locally

## Development mode

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, typically http://localhost:5173. The development server supports hot module replacement.

## Production preview

```bash
npm run build
npm run preview
```

Open the preview URL printed by Vite. The preview uses the static production output and is useful for checking asset paths and production-only behavior.

## Stop the process

Use Ctrl+C in the terminal running Vite.

## Port conflicts

If the default Vite port is in use, Vite may select another available port or report an error. Read the terminal output and use the exact address provided. Do not assume the app always runs on a fixed port.

## Network behavior

Chat prompts are handled locally. The page may request Google Fonts resources separately. No application API request is required for a reply.
