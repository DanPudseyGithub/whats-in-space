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
