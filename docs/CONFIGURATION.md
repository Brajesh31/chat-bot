# ⚙️ Configuration

The current client reads no environment variables. `.env.example` is explanatory only.

Vite exposes `VITE_*` variables in browser assets. Treat them as public. Never store provider keys, database credentials, or signing secrets there.

If a backend is added, document server-only variables, validate them at startup, and provide examples without real credentials.
