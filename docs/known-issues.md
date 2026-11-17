# 🧯 Known Issues and Limitations

## Product behavior

- The response engine uses a finite set of local phrase rules.
- First matching rule wins, which can produce surprising results for mixed-intent prompts.
- Some branches still use substring checks and may produce false positives.
- Jokes, facts, and fallbacks may return different fixed values.
- Date/time behavior depends on browser clock and locale.
- Weather wording is a static disclaimer, not a forecast.

## UI and quality

- Automated tests do not cover complete browser rendering or React component interaction.
- Screen-reader behavior has not been formally audited.
- Contrast values have not been formally measured.
- There is no automated visual-regression suite.

## Dependency security

- picomatch 4.0.7 is flagged by the high-severity ReDoS advisory in the Vite build dependency chain.
- The npm audit gate currently fails until a verified remediation is available.
- Do not suppress or misrepresent the finding.

## Deployment

No production deployment was verified during the current repository enhancement. CI build success is not a live deployment check.

## Updating this file

Remove an issue only after verifying the fix in code and tests. Link the relevant commit or issue where available.
