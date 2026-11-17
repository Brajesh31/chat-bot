# 🧠 Product Behavior Contract

## Identity

The interface presents itself as ChatBuddy, a local scripted demo. Its copy must not imply that it is a human, generative model, live search service, or always-current factual source.

## Input contract

- Input is plain text.
- The form trims leading and trailing whitespace.
- Empty or whitespace-only text is ignored.
- The input element limits the message to 1,000 characters.
- A valid submission is passed synchronously to the local phrase matcher.
- Message history is held in React state, not persisted to a server or browser database.

## Response contract

The response function lowercases the prompt and evaluates ordered conditions. The first matching branch returns one text value. Some fixed arrays are selected randomly for jokes, facts, and fallbacks. Rule order is user-visible behavior and must be covered by regression tests.

## Conversation contract

Each successful submission appends a user message and a model-role message to in-memory history. The initial greeting is rendered separately. Clear resets submitted history. Minimize/expand affects visibility only. Refreshing discards conversation state.

## External behavior

The app references Google Fonts. It does not make an application network request for chat messages. Date/time responses use the visitor's browser clock and locale. Weather responses are static disclaimers.

## Future change requirements

If a provider, API, storage layer, analytics, or authentication is introduced, revise this contract with the exact data path, user disclosure, error states, retention, user controls, and security owner. A proposal or template is not evidence of implementation.
