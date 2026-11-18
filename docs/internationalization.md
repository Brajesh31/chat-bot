# 🌐 Internationalization and Localization

## Current state

The application is currently English-only. The HTML document declares `lang="en"`. UI labels, helper text, prewritten responses, examples, and documentation use English. There is no translation catalogue, language selector, locale preference, or automated localization test suite.

## Why this matters

Chat UI text appears in multiple places: the page shell, form labels, action names, initial greeting, response helper, and documentation examples. Translating only the visible heading would leave a mixed-language experience and may create inconsistent accessibility announcements.

## Future localization design

Before adding another language:
1. Identify supported locales and the intended audience.
2. Centralize UI strings and scripted response content in a locale-aware resource structure.
3. Update the document `lang` value for the active locale.
4. Use locale-aware date and time formatting.
5. Test text expansion, line wrapping, and font fallback.
6. Check keyboard and screen-reader announcements in every supported language.
7. Define how phrase matching behaves for each language and Unicode word boundaries.
8. Add synthetic prompts and regression fixtures for each locale.
9. Document translation ownership and review.
10. Verify right-to-left layout only if an RTL locale is added.

## Current limitation

The response helper contains English phrase checks and cannot reliably match arbitrary languages. Do not claim multilingual support or add a language toggle until the complete flow is implemented and tested.
