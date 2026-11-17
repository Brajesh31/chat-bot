# 🎓 Educator Guide

## Suggested 75-minute workshop

| Time | Activity | Learning outcome |
|---|---|---|
| 0–10 min | Run the application | Identify the visible chat interface |
| 10–25 min | Trace components | Explain component responsibilities |
| 25–40 min | Follow input and state | Explain React state and message lifecycle |
| 40–55 min | Inspect response rules | Explain phrase matching and precedence |
| 55–65 min | Add a regression test | Understand deterministic testing |
| 65–75 min | Discuss the AI boundary | Distinguish a scripted UI from an AI service |

## Setup

Learners need Node.js and npm. Use npm ci and npm run dev. No API key, paid account, database, or model provider is needed.

## Exercises

- Add a response branch and write positive/negative tests.
- Demonstrate a false positive caused by substring matching.
- Explain why the first matching branch wins.
- Improve accessible labels or keyboard focus in a controlled change.
- Explain why Vite client variables cannot hold secrets.

## Assessment

Ask learners to trace one prompt from form submission through the helper and back into the rendered log. Evaluate their explanation of limitations as carefully as their code.

## Privacy and inclusion

Use synthetic prompts only. Offer a source walkthrough if learners cannot install dependencies. Provide readable materials and keyboard-accessible exercises.

## Boundaries

Do not describe the workshop as model training or RAG implementation. It teaches frontend structure, deterministic local rules, documentation, and regression testing.
