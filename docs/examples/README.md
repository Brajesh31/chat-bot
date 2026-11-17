# 🧪 Synthetic Examples and Fixtures

All examples in this directory are synthetic. Never add real user transcripts, personal information, access tokens, or provider output that has not been cleared for publication.

## Files

- [Sample prompts](sample-prompts.md): positive triggers, negative near-matches, ambiguous prompts, and unmatched examples.
- [Response contract](response-contract.json): illustrative future metadata for a possible structured rule catalogue. It is not loaded by the application.
- [Prompt regression fixtures](prompt-regression-cases.json): executable prompt and expected-response fixtures consumed by the Node.js tests.

## Fixture conventions

Each regression case should define:
- A synthetic prompt.
- An expected response category or text fragment.
- A stable random index when the tested branch selects from an array.
- A short purpose or regression identifier where appropriate.

Avoid brittle tests that assume uncontrolled random output or a visitor's local clock. Use deterministic stubs or assert only stable output contracts.

## Adding examples

1. Confirm the prompt reflects an actual rule or a deliberate no-match case.
2. Add at least one near-match when word boundaries or substring checks are relevant.
3. Add a precedence test when multiple rules can match.
4. Update the sample-prompt guide and response catalog when behavior changes.
5. Run the full test suite and confirm fixtures are not mistaken for production configuration.
