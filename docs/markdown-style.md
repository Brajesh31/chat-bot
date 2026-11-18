# ✍️ Markdown and Documentation Style

## Purpose

This guide keeps the repository handbook consistent and readable. It is a project writing convention, not a claim that a third-party Markdown linter is configured.

## Headings

- Use one top-level `#` title per document.
- Use `##` for primary sections and `###` for subsections.
- Keep heading text descriptive.
- Use emojis where they clarify or visually distinguish a major topic; avoid decorative overload.

## Content

- Write about the implementation that exists.
- Mark future proposals and unsupported functionality clearly.
- Prefer concrete examples, tables, and commands.
- Explain why a rule or configuration exists.
- Keep project-specific guidance separate from generic examples.
- Avoid empty documents and filler sections.
- Record external references with their official source.

## Code and diagrams

- Use fenced code blocks with an appropriate language identifier.
- Use `mermaid` for editable diagrams.
- Label proposed or illustrative architectures.
- Never include real user transcripts or secrets in examples.
- Keep file paths and commands synchronized with the repository.

## Links and images

- Use descriptive link text.
- Use relative links for repository-local documents and assets.
- Provide meaningful non-empty alt text for Markdown images.
- Do not label a wireframe or SVG illustration as a real screenshot.
- Keep the relevant directory index updated.

## Validation

Run:
```bash
npm run docs:check
npm run markdown:check
npm test
```

The custom Markdown validator checks structural issues such as newline and fence balance and validates the opening syntax of Mermaid blocks. It is not a full CommonMark parser or replacement for a complete Markdown lint engine.

## Automated Markdown checks

The repository pins `markdownlint-cli2@0.24.1` in the npm script without adding it to the application dependency graph. The tool is fetched by npx when the command runs; it is not shipped in the production browser bundle.

The active lint profile checks heading-level progression, consistent heading syntax, trailing whitespace, hard tabs, repeated blank lines, heading indentation, and final newlines. It disables blank-line spacing rules around headings, lists, fences, and tables because the existing handbook uses compact layouts and table/list blocks in its templates. The structural validator separately checks final newlines, LF line endings, balanced code fences, and recognized Mermaid declarations. Review any further rule exception before adding it.

The structural validator checks final newlines, LF line endings, balanced code fences, and recognized Mermaid diagram declarations. It does not render Mermaid or prove the diagram's logic is correct.
