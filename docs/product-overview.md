# 💬 Product Overview

## What ChatBuddy is

ChatBuddy is a small browser-based chat interface built with React 18 and Vite 6. It demonstrates how a visitor can submit text through a form, how React state stores a short-lived message list, and how a local JavaScript function selects a prewritten response using ordered phrase checks.

It is an educational frontend project. It is not a production customer-support channel, general-purpose assistant, search engine, or generative AI system.

## The visitor experience

A visitor opens the page and sees an initial greeting. They can type a plain-text message, submit with Enter or the send control, and see their text alongside a locally selected response. The header exposes clear and minimize/expand actions. The newest message is brought into view.

## Product capabilities

| Capability | Current implementation |
|---|---|
| Message input | Single-line plain-text field, trimmed before submission |
| Input length | HTML input maximum of 1,000 characters |
| Response generation | Ordered local phrase-matching branches |
| Random replies | Fixed local arrays for selected joke, fact, and fallback categories |
| Message history | React component state, not persistent storage |
| Clear | Removes submitted messages; initial greeting remains |
| Minimize / expand | Hides or restores the body and footer without clearing state |
| Date/time | Uses browser locale and clock for matching prompts |
| Weather | Static disclaimer, not a forecast |

## Architecture boundary

Messages are handled inside the current browser page. The project does not include an application backend, HTTP API, database, authentication, remote AI provider, transcript persistence, or cross-device synchronization. The page references Google Fonts, which may generate separate browser requests to that third-party host.

## Intended audience

The project is useful to people learning React component composition, controlled and ref-backed form behavior, state-driven rendering, simple deterministic rules, responsive CSS, and regression testing.

## Product success

For this project, success means that a new contributor can install it, run it, understand the source path from form to response helper to rendered messages, and safely modify the phrase rules with regression tests. It does not mean that the demo can answer arbitrary questions.
