# ✍️ Coding Guidelines

## Before editing

1. Inspect the current source and tests.
2. Identify the actual behavior and its owner.
3. Read related documentation and the project change-impact matrix.
4. Keep the change focused and preserve unrelated files.

## Implementing a response rule

1. Choose the narrowest trigger that matches the intended prompt.
2. Inspect all earlier rules to avoid accidental precedence changes.
3. Add a positive test.
4. Add a negative near-match test.
5. Add a mixed-intent precedence test if necessary.
6. Stub randomness for array-backed branches.
7. Update the response catalog, sample prompts, and regression fixtures.

## Implementing UI changes

- Use native controls where possible.
- Provide accessible names and keyboard operation.
- Preserve visible focus.
- Handle empty and long text.
- Honor reduced motion.
- Check narrow viewports and 200% zoom manually.

## Security and privacy

Never commit secrets, local .env files, private prompts, or real transcripts. Keep user text as text. Document new external requests or storage before implementation. Do not place credentials in Vite client variables.

## Pull request quality

Explain the problem, implementation, tests, manual checks, documentation updates, and residual risk. Separate automated evidence from manual checks that remain outstanding.
