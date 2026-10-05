---
title: 'DLBR.gg'
description: 'The main hub for the Brazilian Deadlock community: one platform behind the website, the admin panel, and the Discord bots that run its pickup games.'
period:
  start: '2024-01-01'
tags: ['astro', 'vue', 'typescript', 'tailwindcss', 'postgresql', 'discord', 'community']
url: 'https://dlbr.gg'
icon: '/projects/icons/dlbr.webp'
---

Deadlock is a competitive multiplayer game by Valve. I helped found the Brazilian community around it, and dlbr.gg is its home. It started as a simple landing page and grew alongside the scene into the platform the community runs on.

For players, it brings everything into one place: patch notes, hero builds, clips from Brazilian streamers, a blog, a tierlist, player profiles, teams, and a curated directory of community tools. It also runs the mix, an in-house pickup-game queue with its own rules, match history, and rankings.

The architecture is built around a single source of truth. One Astro app serves the public site, the admin panel, and the API, backed by its own PostgreSQL database. Everything else is a client of that app: the two Discord bots, one for the community server and one dedicated to the mix, talk to it over HTTPS instead of keeping state of their own, so a match started on Discord shows up on the site and an action in the admin panel reaches Discord without any sync in between. Game data and events come from the public Deadlock API, and Cloudflare sits in front of the site, caching public pages at the edge.

An earlier version leaned on a headless CMS and an automation tool to glue these pieces together. Moving that logic into the app and its own database removed a whole layer of moving parts and made the system easier to evolve.

Built with Astro and Vue 3, styled with Tailwind CSS v4, rendered server-side on Node, with Drizzle ORM on top of PostgreSQL. The UI reuses my own open-source `@deadlock-api/ui` Web Components. All content is in Brazilian Portuguese.
