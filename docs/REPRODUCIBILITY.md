# 🔁 Reproducibility

Use Node.js 20/22 and npm. Run `npm ci` from a clean checkout, then lint, tests, and build. Record commit SHA, Node, npm, and commands when sharing results.

Random response branches are nondeterministic. Tests should assert allowed response sets or control randomness. Never use real conversation transcripts as fixtures.
