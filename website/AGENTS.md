# What's in Space — Project Context

## Stack

Astro (static output, no adapter for now), Sanity, Figma MCP, Yarn, GitHub, GitKraken

## Architecture split

- Editorial content → Sanity schema (hero, richText, siteSettings, page)
- Live data (NEOs, satellites, people in space) → NASA APIs via server islands, NEVER Sanity fields

## Canonical types

[paste your canonical-types.md table here, or reference its file path]

## Conventions

- Figma component naming: Content/X for Sanity-backed, Live/X for API-driven
- Breakpoint variants: Desktop/Tablet/Mobile, one component per set (not separate components)
- Package manager: Yarn only, not npm

## Figma MCP (no Code Connect)

- Figma plan is Pro — Code Connect requires Organization/Enterprise, so it's
  not available. Don't assume Code Connect mappings exist or suggest setting
  them up.
- Using the remote Dev Mode MCP Server instead (`https://mcp.figma.com/mcp`,
  added via `claude mcp add --transport http figma ...`, OAuth via `/mcp`).
  No desktop app required.
- Without Code Connect, the MCP server infers code from the design each time
  rather than returning real component source — so reuse of existing
  components (see Canonical types) has to be enforced manually, not by
  tooling. Always check the canonical types table before generating a
  component from a Figma frame link.
- Rate limit on Pro: 200 calls/day, 15/min.
