# What's in Space

This project shows data pulled from various live sources, alongside editorial
content, about items in space — astronauts, near-earth objects, planets,
stars, black holes, and other intriguing space-based subjects.

## Content model

The project draws a hard line between two kinds of content:

- **Editorial content** (hero copy, page intros, curated callouts) is
  authored in [Sanity](https://www.sanity.io/) and rendered as static
  `.astro` components — zero client-side JS.
- **Live data** (people currently in space, near-earth objects, satellites)
  is fetched from NASA and other open APIs at request time, via Astro server
  islands. It is never duplicated into Sanity — live data goes stale the
  moment it's copied.

## Stack

- **Frontend:** [Astro](https://astro.build/) — static output, no adapter
- **CMS:** [Sanity](https://www.sanity.io/) — separate Studio project, queried via GROQ
- **Design → code:** [Figma](https://www.figma.com/), via the Dev Mode MCP
  Server and Code Connect, feeding real component context to Claude Code
- **AI-assisted development:** [Claude Code](https://claude.com/claude-code)
- **Package manager:** Yarn (never npm)
- **Version control:** GitHub (remote), GitKraken (local)

Publicly available on GitHub.

## Getting started

This repo has two projects, each with its own dependencies:

```bash
# Sanity Studio (content editing) — http://localhost:3333
cd studio
yarn install
yarn dev
```

```bash
# Astro site (the front end) — http://localhost:4321
cd website
yarn install
yarn dev
```

### Editor setup (VS Code)

Opening this repo's root folder in VS Code will prompt you to install the
recommended extensions (Astro language support + Prettier) — accept that
prompt. If you miss it or it doesn't appear, install manually:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) (`astro-build.astro-vscode`) — syntax highlighting, IntelliSense, and file icons for `.astro` files
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (`esbenp.prettier-vscode`) — code formatting, including `.astro` files, on save

Both are declared in `.vscode/extensions.json`; formatting config lives in
`website/.prettierrc.json`.

## Status

Early stage — project structure and components are being rebuilt from
scratch. See `CLAUDE.md` for the full generation workflow and canonical
component/type reference used when building new components.
