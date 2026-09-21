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

```bash
yarn install
yarn dev
```

## Status

Early stage — project structure and components are being rebuilt from
scratch. See `CLAUDE.md` for the full generation workflow and canonical
component/type reference used when building new components.
