# 📏 Code Standards

## General principles

- Keep code aligned with the existing React and ES module structure.
- Prefer clear and small functions with a single responsibility.
- Avoid adding dependencies for functionality already available in the platform.
- Preserve the local-only product boundary unless a reviewed architecture change authorizes more.
- Keep user-controlled text out of HTML injection sinks.

## React

- Keep app-level message history in App unless there is a justified ownership change.
- Keep presentation components focused.
- Prefer state updates that derive from the previous state when appending or transforming history.
- Preserve meaningful accessible labels and state attributes.
- Avoid effects that are unnecessary for deriving render output.

## Response helper

- Maintain ordered branch precedence deliberately.
- Use narrow matching where possible.
- Add negative and ambiguous examples for word boundaries and substring checks.
- Keep scripted output transparent and avoid claims of live knowledge.
- Control Math.random in deterministic tests.

## CSS

- Keep global resets and base styles in index.css.
- Use App.css for high-level shell sizing.
- Use chatbot-enhancements.css for responsive and interaction refinements.
- Preserve visible keyboard focus and reduced-motion behavior.
- Check long-message wrapping and mobile viewport sizing.

## Quality

Run npm ci, npm run lint, npm test, npm run build, and npm audit --audit-level=high. Record audit failures honestly and do not downgrade a security gate to make CI appear green.
