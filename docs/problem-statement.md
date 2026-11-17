# 🧩 Problem Statement

## Learning problem

A developer learning frontend interaction needs a compact example that connects user input, event handling, business rules, state updates, and visible output. A bare form does not show the full loop, while a production AI chatbot adds service, credentials, networking, data governance, and operational complexity.

## User problem

The primary user is a learner or maintainer who wants to:
- Run a small chat UI locally.
- Trace how a message reaches the response helper.
- Understand why a particular local reply is chosen.
- Change the interface or phrase rules without introducing a large infrastructure stack.

## Current constraints

The application intentionally handles only a limited set of predefined phrase categories. It cannot understand arbitrary prompts. Some rules still rely on substring matching, which can create false positives. Random response branches can return different fixed strings. Date and time replies depend on the visitor's browser environment.

## Impact of these constraints

The project is useful for learning predictable frontend behavior, but it must not be presented as a real AI assistant or relied on for current, complete, or high-stakes information.

## Problem boundary

The project is not currently solving server-side conversation management, authentication, model quality, message moderation, durable storage, or multi-tenant operation. Those are separate product problems and should not be introduced merely to make the repository look more sophisticated.
