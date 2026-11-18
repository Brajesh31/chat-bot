# 🤝 Contributing to ChatBuddy

Thank you for considering a contribution. ChatBuddy is a small browser-only React/Vite demonstration. Contributions should improve the learning experience, correctness, accessibility, reproducibility, or maintainability without describing unimplemented services as real features.

## 🌱 Ways to contribute

- Fix a reproducible UI or phrase-matching defect.
- Improve keyboard operation, accessible names, focus, announcements, or responsive behavior.
- Add deterministic tests for response rules and edge cases.
- Improve product, architecture, setup, security, privacy, or operations documentation.
- Improve the documentation validator, GitHub automation, or visual assets.
- Review dependency updates and security advisories.
- Suggest a new feature through an issue before beginning substantial work.

## 🚦 Before opening a pull request

1. Search existing issues and pull requests for duplicates.
2. Check the [roadmap](ROADMAP.md), [known issues](docs/known-issues.md), and [technical debt register](docs/technical-debt.md).
3. For a substantial feature, open a proposal that explains the user problem, acceptance criteria, scope, risks, and test plan.
4. Do not begin model-provider, backend, storage, authentication, or analytics work without an architecture, privacy, and security proposal.
5. Confirm that your proposed contribution does not require licenses or assets you cannot redistribute.

## 🧰 Development setup

### Prerequisites

- Node.js 26 is the preferred local version and is pinned in `.nvmrc`.
- Node.js 22 and 24 are also included in the CI matrix.
- npm and Git.
- A modern browser for manual UI checks.

### Clone and install

```bash
git clone https://github.com/Brajesh31/chat-bot.git
cd chat-bot
nvm install
nvm use
npm ci
npm run dev
```

Open the URL printed by Vite. No API key, database, Docker environment, or model account is required.

## 🧪 Required checks

Run the applicable checks before submitting:

```bash
npm run lint
npm test
npm run docs:check
node scripts/validate-markdown.mjs
npm run markdown:check
npm run build
npm audit --audit-level=high
```

The audit currently reports a high-severity picomatch 4.0.7 advisory in Vite's development/build dependency chain. It is documented in [DEPENDENCIES.md](docs/DEPENDENCIES.md). Do not hide or suppress the audit failure. Your pull request should still report whether lint, tests, documentation validation, and build succeeded.

## 🧭 Code guidelines

### JavaScript and React
- Follow the existing JavaScript ES module and React component structure.
- Keep high-level chat history and visibility state in `src/App.jsx` unless a reviewed design change justifies otherwise.
- Keep input submission in `ChatForm.jsx`, message rendering in `ChatMessage.jsx`, and local response rules in `ChatbotResponse.js`.
- Prefer small, focused components and readable functions.
- Avoid adding a dependency for a task that can be handled safely with the current platform APIs.
- Do not introduce speculative routers, stores, server layers, or abstractions.

### Response rules
- Understand the existing ordered branch chain before adding or changing a rule.
- The first matching branch wins. Preserve or deliberately change precedence.
- Add a positive example and a negative/near-match example.
- Add a mixed-intent case when earlier rules can capture the same prompt.
- Control `Math.random` in tests for random-array responses.
- Do not make scripted replies claim live knowledge, human identity, or model inference.

### UI and CSS
- Use native form controls and buttons where possible.
- Keep visitor text rendered as text, not injected HTML.
- Preserve accessible names, keyboard operation, and visible focus.
- Check narrow viewports, long message wrapping, zoom, and footer overlap.
- Respect `prefers-reduced-motion`.
- Do not use color as the only indicator of state.

## 📚 Documentation and visual assets

Update documentation whenever behavior, setup, configuration, dependencies, privacy, security, or deployment assumptions change. Check the [change impact matrix](docs/CHANGE_IMPACT_MATRIX.md).

- Update the main docs index when a documentation file is added, moved, or removed.
- Keep `docs/PROJECT_STRUCTURE.md` synchronized with the tracked tree.
- Update diagrams when source modules or data flow changes.
- Use synthetic examples only.
- Label SVG wireframes as illustrations, not screenshots.
- Use meaningful alt text for images.
- Do not claim that a proposed feature has been implemented.

## 🔐 Security and privacy

- Never commit API keys, passwords, access tokens, cookies, or private environment files.
- Do not add secrets to Vite `VITE_*` variables. They are browser-visible.
- Do not include real user conversations in tests, fixtures, screenshots, or issue reports.
- Keep logs and error output free of unnecessary user text.
- Report suspected vulnerabilities through the private route in [SECURITY.md](SECURITY.md), not a public issue.
- Review third-party asset and dependency licenses before redistribution.

## ♿ Accessibility expectations

For UI changes, consider:
- Keyboard-only interaction and visible focus.
- Programmatic names and expanded/collapsed states.
- Screen-reader reading order and live announcements.
- Contrast for text, controls, and focus indicators.
- 200% zoom and narrow viewport reflow.
- Reduced-motion behavior.

The project has not completed a formal WCAG conformance assessment. Do not claim conformance in a contribution unless you provide an appropriate assessment and evidence.

## 🌿 Branches and commits

Use a focused branch with a descriptive name, for example:

```bash
git switch -c fix/response-boundary-case
git switch -c docs/add-browser-verification
git switch -c feat/improve-chat-controls
```

Suggested commit prefixes:
- `feat:` user-visible functionality.
- `fix:` defect correction.
- `docs:` documentation-only changes.
- `test:` test additions or corrections.
- `ci:` workflow and automation changes.
- `refactor:` code restructuring without intended behavior change.
- `chore:` maintenance that does not fit another category.

## 🔍 Pull request checklist

- [ ] The change addresses a linked issue or clearly stated problem.
- [ ] The change is focused and preserves unrelated files.
- [ ] Acceptance criteria are testable.
- [ ] Relevant tests are added or updated.
- [ ] Lint, tests, docs validation, and build were run.
- [ ] Dependency audit status is reported honestly.
- [ ] Manual browser checks are recorded or marked outstanding.
- [ ] Security, privacy, and accessibility impacts are described.
- [ ] Documentation, diagrams, examples, and indexes are current.
- [ ] No secrets, private transcripts, generated build output, or fake screenshots are included.
- [ ] Known limitations and unresolved risks are disclosed.

## 🧐 Review process

Maintainers may request changes, ask for additional evidence, or decline changes that add unsupported complexity or misleading claims. Reviews should focus on correctness, maintainability, risk, and user impact. Do not treat an approval as evidence that manual checks were completed unless the review records them.

## 💬 Questions

Use repository issues for ordinary questions and proposals. For support boundaries, see [SUPPORT.md](SUPPORT.md). For conduct concerns, see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
