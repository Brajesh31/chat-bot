# 🏷️ GitHub Repository Presentation

This document records the current repository About settings and gives a safe, accurate presentation proposal. It does not claim that repository settings were changed by a file commit.

## Current GitHub settings observed on 2026-11-18

| Setting | Observed value |
|---|---|
| Description | Empty |
| Homepage URL | Empty |
| Topics | None |
| Default branch | `main` |
| GitHub Pages | Disabled |
| GitHub Discussions | Disabled |
| Published GitHub Releases | None |
| Social preview | Not verified as configured |

## Suggested About description

> A small React and Vite chat interface demo that uses local scripted phrase matching. No backend or generative AI provider.

## Suggested repository topics

Use only topics that accurately describe the current source:
- `react`
- `vite`
- `javascript`
- `chatbot`
- `chat-ui`
- `frontend`
- `learning-project`
- `scripted-responses`

Do not add `ai`, `llm`, `api`, `database`, `full-stack`, or `production` as project topics while those capabilities are absent.

## Homepage and demo URL

No verified live deployment URL was found in the repository settings during this audit. Leave the homepage field empty until a real deployment is available and tested.

## Social preview asset

The repository includes [social-preview.svg](assets/social-preview.svg), an original 1280×640 project presentation graphic. It is a vector source asset, not a browser screenshot. GitHub's social preview setting is managed separately from repository files. Export a PNG/JPG of the approved artwork and upload it through repository Settings / General / Social preview if you want it to appear on GitHub cards. The connector used for file commits does not expose this settings write operation.

## Discussions, Pages and branch protection

Discussion templates exist, but GitHub Discussions is disabled in repository settings. Enabling it requires a repository-settings change and an owner decision. GitHub Pages is also disabled; no Pages deployment is claimed.

Branch-protection settings could not be read through the available GitHub integration permissions. This does not prove that protection is disabled. The repository owner should verify that `main` requires the current CI, CodeQL, Markdown lint, documentation validation, and secret-scanning checks before merging. Do not claim required status checks are enforced until this is verified in repository settings.

## Scope of this guide

The current GitHub connector used for repository file and commit operations does not expose a write action for About description, topics, homepage, social-preview, Pages, or Discussions settings. Those settings remain manual owner actions and are explicitly not represented as completed.
