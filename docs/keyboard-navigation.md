# ⌨️ Keyboard Navigation

## Current control set

The chat UI contains a text input, a send button, a clear conversation button, and a minimize/expand button. They are native HTML controls and should remain operable without a pointer.

## Expected keyboard path

1. Tab to the text input.
2. Type a synthetic prompt.
3. Press Enter to submit.
4. Tab to the clear or minimize action as needed.
5. Activate a focused button with Enter or Space according to native behavior.
6. Expand the chat and continue.

## Focus requirements

- Focus order should follow the visual interaction order.
- Focus must be visible against the current background.
- Focus must not be hidden behind the footer or clipped container.
- Minimize/expand should expose a correct expanded state.
- Clearing history should not unexpectedly lose focus.

## Verification

The project has not completed a full manual keyboard audit. Use BROWSER_VERIFICATION.md and record browser/version, tested controls, failure steps, and evidence. Do not mark a checklist pass without performing the interaction.
