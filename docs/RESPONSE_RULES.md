# 🧩 Local Response Rules

## Current implementation
The helper at `src/components/ChatbotResponse.js` receives a string, normalizes it to lowercase, then evaluates ordered conditional branches. The first branch that matches supplies the response. Joke, fact, and unknown-input branches choose a response randomly.

The greeting branch recognizes standalone `hello` and `hi` words using word boundaries. The standalone `help`, `support`, `time`, `date`, `weather`, `dance`, and `story` categories also use word boundaries. This avoids common accidental matches such as `hi` in `history`/`high`, `story` in `history`, `time` in `timeline`, and `help` in `helpful`. Other multiword rules still use substring checks.

## Existing categories
- Greetings: hello, hi, good morning, good night.
- Personal questions: status, name, creator, location, human status.
- Fun: jokes, facts, singing, dancing, stories, motivation.
- Help and support.
- Time and date, based on the browser's local clock.
- Weather disclaimer, not a forecast.
- Food and technology prompts.
- Goodbye phrases.
- Random fallback for unmatched input.

## Known limitations
- Rule order matters. Earlier broad matches can prevent later rules from being evaluated.
- Most checks use substring matching, which can still produce false positives.
- Random branches are nondeterministic.
- Browser-local date/time varies with the visitor's environment.
- Weather is a fixed sentence, not a weather service.
- This is not a classifier, search engine, language model, or factual retrieval system.

## Safe extension workflow
1. State the user intent and response contract.
2. Add the narrowest matching condition possible.
3. Check precedence against every earlier rule.
4. Add a positive example, a negative example, and at least one ambiguous phrase.
5. Add deterministic tests for random branches by controlling `Math.random`.
6. Keep output as plain text.
7. Update this guide and the test matrix.

## Refactor proposal
A structured rules table may eventually replace the long conditional chain. Preserve existing precedence deliberately, avoid regex complexity without test coverage, and treat any behavior change as a user-visible change.
