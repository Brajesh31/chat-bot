# 🆘 Support and Troubleshooting

ChatBuddy is a community-maintained educational frontend project. It is not a hosted AI assistant, commercial support service, or guaranteed-response helpdesk. No support response-time commitment is made.

## 📌 What this project supports

The repository provides:
- A React/Vite chat interface.
- Local, prewritten phrase-matching responses.
- A documented npm development/build workflow.
- Automated tests, static analysis, and repository validation.
- Documentation and reusable templates for contributors.

It does not provide user accounts, an AI provider, a backend API, database storage, persistent chat history, live weather, live search, or a hosted chatbot endpoint.

## 🐛 Report an application issue

Before filing, search the [existing issues](https://github.com/Brajesh31/chat-bot/issues). Use the appropriate issue form.

Include:
1. A concise description of the observed problem.
2. Operating system and browser/version.
3. Node.js and npm versions for install, test, or build failures.
4. Exact commit or deployed version when known.
5. Numbered reproduction steps using synthetic prompts.
6. Expected and actual behavior.
7. Sanitized console output or screenshot when relevant.
8. Whether the problem is reproducible after a clean reload.

Do not include private conversations, personal information, passwords, access tokens, cookies, API keys, or environment values.

## 🔐 Security reports

Do not report suspected vulnerabilities through a public issue. Follow the private reporting route in [SECURITY.md](SECURITY.md) or the repository's security contact link. Do not publish exploit details or leaked secrets in public discussions.

## 🧰 Setup troubleshooting

### Install fails

```bash
node --version
npm --version
npm ci
```

Use Node.js 26 where possible, or the Node 22/24 versions included in CI. Remove `node_modules` and run `npm ci` again if the local install is inconsistent. Keep `package-lock.json`.

### Development server does not start

Run `npm run dev` from the repository root. Read the exact port and error reported by Vite. If the default port is occupied, Vite may choose another one.

### Tests fail

Run `npm test` and inspect the first failing test. Response tests may stub randomness to make array-backed replies deterministic. Restore global state in test helpers.

### Documentation validation fails

Run `npm run docs:check`. The validator reports broken local Markdown/HTML references, invalid example JSON, or SVG metadata problems with file paths.

### Build fails

Run `npm ci`, then `npm run build`. Check import path casing, missing assets, and the first actionable error. A successful build is not proof of deployment.

### Dependency audit fails

Run `npm audit` and review the advisory. The current tree contains the documented picomatch 4.0.7 ReDoS advisory through Vite's build dependencies. Do not suppress the high-severity gate or force an unverified package override. See [DEPENDENCIES.md](docs/DEPENDENCIES.md).

## ♿ Accessibility and usability reports

Use the accessibility issue form for keyboard, focus, screen-reader, contrast, zoom, motion, or responsive barriers. Include browser and assistive-technology versions where possible. Use synthetic prompts and sanitized evidence.

## 🔁 How reports are handled

A maintainer may:
1. Confirm whether the report is in scope.
2. Request minimal additional reproduction details.
3. Classify severity and user impact.
4. Link a duplicate or track a fix.
5. Request regression coverage.
6. Verify the fix against an exact commit.
7. Update the issue with the known outcome and limitations.

Response timing depends on maintainer availability. Do not assume an issue is being actively worked on until a maintainer confirms ownership.

## 📚 Related resources

- [User guide](docs/USER_GUIDE.md)
- [Getting started](docs/getting-started.md)
- [Troubleshooting](docs/troubleshooting.md)
- [Known issues](docs/known-issues.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
