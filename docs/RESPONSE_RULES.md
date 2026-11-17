# 🧩 Local Response Rules

## Current implementation
The helper at `src/components/ChatbotResponse.js` receives a string, normalizes it to lowercase, and evaluates ordered conditional branches. The first matching branch supplies the response. Joke, fact, and unknown-input branches choose randomly from fixed local arrays.

The greeting branch recognizes standalone `hello` and `hi` words using word boundaries. The standalone `help`, `support`, `time`, `date`, `weather`, `dance`, and `story` categories also use word boundaries. This avoids common accidental matches such as `hi` in `history`/`high`, `story` in `history`, `time` in `timeline`, and `help` in `helpful`. Other multiword rules still use substring checks.

## Response transparency
Responses should not describe this project as a generative AI assistant. The runtime is a browser-side React demo with hand-written conditions and canned text. Replies about its name, creator, location, and AI status have been worded to reflect that fact.

## Existing categories
- Greetings: hello, hi, good morning, good night.
- Personal prompts: status, name, creator, runtime location, human status.
- Entertainment: jokes, facts, singing, dancing, scripted story reply, motivation.
- Help and support.
- Time and date, based on the visitor's browser locale and clock.
- Weather disclaimer, not a forecast.
- Food and technology prompts.
- Goodbyes.
- Random fallback for unmatched input.

See [response catalog](RESPONSE_CATALOG.md) for the detailed trigger and behavior summary.

## Known limitations
- Rule order matters. Earlier broad matches can prevent later rules from being evaluated.
- Some multiword checks still use substring matching and can produce false positives.
- Random branches are nondeterministic.
- Browser-local date/time varies with the visitor's environment.
- Weather is a fixed disclaimer, not a weather service.
- This is not a classifier, search engine, language model, or factual retrieval system.

## Safe extension workflow
1. State the user intent and response contract.
2. Add the narrowest matching condition possible.
3. Check precedence against every earlier rule.
4. Add a positive example, a negative example, and at least one ambiguous phrase.
5. Add deterministic tests for random branches by controlling `Math.random`.
6. Keep output as plain text.
7. Avoid claims of live data, human judgment, or generative AI unless those capabilities are implemented.
8. Update this guide, response catalog, and test matrix.

## Refactor proposal
A structured rules table may eventually replace the long conditional chain. Preserve existing precedence deliberately, avoid regex complexity without test coverage, and treat any behavior change as a user-visible change.
