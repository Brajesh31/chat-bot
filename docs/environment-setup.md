# 🧰 Environment Setup

## 1. Required tools

| Tool | Recommended version | Purpose |
|---|---|---|
| Node.js | 26 (Active LTS) | Runs Vite, ESLint and Node's test runner |
| Node.js alternatives | 22 or 24 | Both remain LTS lines and are included in CI |
| npm | Bundled with Node.js | Installs the locked dependency graph and runs scripts |
| Git | Current stable release | Clone, branch and inspect source history |
| Browser | Current evergreen browser | Runs the client application and manual checks |

The repository pins Node.js 26 in `.nvmrc`. Node.js 22 and 24 remain supported by the CI matrix. Do not use an end-of-life runtime for new development.

## 2. Clone and install

```bash
git clone https://github.com/Brajesh31/chat-bot.git
cd chat-bot
nvm install
nvm use
node --version
npm --version
npm ci
```

If you do not use nvm, install Node.js 26 or another version listed in the [support matrix](SUPPORT_MATRIX.md). The application does not require an API key, database service, Docker, cloud CLI, or AI model account.

## 3. Start the development server

```bash
npm run dev
```

Open the exact local URL printed by Vite, usually `http://localhost:5173`. Vite may select another port if the default is occupied.

## 4. Verify the environment

```bash
npm run lint
npm test
npm run docs:check
npm run build
```

The complete quality workflow also runs `npm audit --audit-level=high`. That audit currently detects the unresolved picomatch 4.0.7 advisory described in [DEPENDENCIES.md](DEPENDENCIES.md). A successful install or build does not clear that security finding.

## 5. Environment variables

The current app does not consume runtime environment variables. The root `.env.example` intentionally contains explanatory comments only. Do not create unused settings or add placeholder secrets.

Any future variable must be documented with its purpose, exposure level, format, default, and environment. Vite variables prefixed with `VITE_` are bundled for browser access and must never contain privileged credentials.

## 6. Troubleshooting setup

- **Wrong Node version:** run `nvm use` and confirm `node --version`.
- **Install mismatch:** remove `node_modules` and run `npm ci`; preserve the lockfile.
- **Port in use:** read Vite's terminal output and open the alternate URL it reports.
- **Missing asset:** inspect the Network panel and check the asset path and deployment base.
- **Font unavailable:** verify that system fallback fonts remain readable.
- **Audit failure:** read the first actionable advisory and follow the dependency guidance. Do not suppress the check to get a green workflow.

## 7. Local privacy boundary

Chat messages are handled in the current browser page and held in React state. They are not sent to an application API or model provider. The page separately references Google Fonts, which may cause browser resource requests to that provider.
