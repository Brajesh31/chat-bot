# 🧑‍🏫 Contributor Learning Path

This is a React UI and local rule-matching project. It is not a model training, RAG, or LLM operations example.

## Beginner: understand the app

1. Follow the HTML entry into src/main.jsx.
2. Identify component state and control handling in src/App.jsx.
3. Trace the form submission in src/components/ChatForm.jsx.
4. Inspect message rendering and the local response helper.
5. Run the development server and try synthetic prompts.

**Outcome:** Explain how a visitor message becomes a pair of rendered messages.

## Intermediate: modify behavior safely

1. Map the order of conditions in ChatbotResponse.js.
2. Identify word-boundary and substring matching differences.
3. Add one narrow response branch.
4. Add positive, negative, ambiguous, and precedence tests.
5. Control Math.random for deterministic tests.
6. Run lint, tests, audit, and production build.

**Outcome:** Make a small behavior change without introducing a regression.

## Advanced: improve the product boundary

Study accessibility, data minimization, threat modeling, build and deployment. Propose an architecture change before adding a remote provider or storage layer. Consent, privacy, server-side secrets, rate limits, cost controls, and failure behavior come before remote inference.

**Outcome:** Produce an evidence-backed design and decision record, not just an SDK integration.
