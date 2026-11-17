# 🛠️ Operations

Production is a static Vite bundle. There is no app server or database. Routine: verify commit; run clean install, lint, tests, build; inspect `dist/`; test HTTPS, assets, and chat flow. For blank screens inspect browser errors and asset paths. For stale assets inspect the deployment artifact and host/CDN cache. Security reports follow SECURITY.md.
