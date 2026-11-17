# 🧑‍💻 Local Development

## Prepare the environment

Use a Node.js version supported by the CI matrix and npm. Check the versions with:

```bash
node --version
npm --version
```

Install from the lockfile:

```bash
npm ci
```

## Start the dev server

```bash
npm run dev
```

Vite prints the local URL. The current app uses the root page; it does not have a client-side route table.

## Work loop

1. Make a focused change in src/.
2. Run the relevant test while editing.
3. Run npm run lint and npm test.
4. Run npm run build before submitting.
5. Test changed UI behavior in a browser.
6. Update docs, assets, and templates affected by the change.

## Environment and privacy

No runtime environment variable is required. Avoid creating a local .env file unless a real, documented need is introduced. Never place provider keys in a Vite frontend variable.

## Clean reset

If the install becomes inconsistent, remove node_modules and run npm ci again. Do not delete or regenerate package-lock.json as a routine troubleshooting step.
