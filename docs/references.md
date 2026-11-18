# 📚 Technical References

This page lists primary references used for the project's engineering and maintenance guidance. Verify current versions and policies before relying on them for a future upgrade.

## Application and build tools

- [React documentation](https://react.dev/learn): component composition, state, effects, and rendering.
- [React DOM client API](https://react.dev/reference/react-dom/client): browser root creation.
- [Vite documentation](https://vite.dev/guide/): development server, configuration, and production build.
- [Vite config reference](https://vite.dev/config/): configuration options and plugin setup.
- [Node.js documentation](https://nodejs.org/en/docs): runtime APIs and built-in test runner.
- [Node.js test runner](https://nodejs.org/api/test.html): `node:test` and assertion APIs.
- [ESLint documentation](https://eslint.org/docs/latest/): flat config and lint rules.
- [npm documentation](https://docs.npmjs.com/): package manifests, lockfiles, and audit commands.

## Runtime support and security

- [Node.js release schedule](https://nodejs.org/en/about/previous-releases): supported release lines and end-of-life status.
- [Node.js November 2026 security release](https://nodejs.org/en/blog/vulnerability/november-2026-security-releases/): security updates for supported 22.x, 24.x, and 26.x lines.
- [GitHub Advisory GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf): picomatch ReDoS advisory tracked in the dependency register.
- [picomatch release history](https://github.com/micromatch/picomatch/releases): upstream package releases.
- [picomatch remediation proposal #238](https://github.com/micromatch/picomatch/pull/238): upstream fix proposal reviewed during the 2026-11-18 maintenance pass. An open proposal is not a published patched release.

## GitHub automation and repository policy

- [GitHub Actions documentation](https://docs.github.com/actions): workflow authoring and permissions.
- [GitHub Actions security hardening](https://docs.github.com/actions/security-guides/security-hardening-for-github-actions): least-privilege workflow guidance.
- [CodeQL documentation](https://docs.github.com/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql): code scanning overview.
- [Dependency Review Action](https://github.com/actions/dependency-review-action): review of dependency changes in pull requests.
- [Gitleaks](https://github.com/gitleaks/gitleaks): secret scanning tool and action.
- [GitHub repository social previews](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-your-repository): repository presentation and social preview settings.

## Accessibility and web platform

- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/): accessibility success criteria.
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/): accessible interaction patterns.
- [MDN prefers-reduced-motion](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion): reduced-motion media query.
- [MDN HTML form controls](https://developer.mozilla.org/docs/Web/HTML/Element/form): native form behavior.

## Project-specific verification note

The current repository is a client-only scripted chat UI. It has no application backend, database, authentication service, model provider, analytics pipeline, or persistent transcript store. References to those technologies are future design inputs, not evidence that those systems are present.
