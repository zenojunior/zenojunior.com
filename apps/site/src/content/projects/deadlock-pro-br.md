---
title: 'Deadlock Pro BR'
description: 'The main hub for the Brazilian Deadlock community: news, builds, clips, an in-house mix queue, player profiles, and tooling.'
period:
  start: '2024-01-01'
tags: ['astro', 'vue', 'typescript', 'tailwindcss', 'graphql', 'directus', 'community']
url: 'https://deadlock.pro.br'
---

Deadlock is a competitive multiplayer game by Valve. I helped found the Brazilian community around it, and deadlock.pro.br is its home: a content and tooling hub that grew alongside the scene from a simple landing page into a full portal.

The site pulls everything a player needs into one place: the latest patch updates, hero builds sourced live from the Deadlock API, Twitch clips from Brazilian streamers, a community blog, a tierlist, and a hero glossary. A curated tools directory links out to the rest of the ecosystem, including the Deadlock Draft tool the community uses for broadcasts.

Beyond aggregation, it hosts its own systems. The mix feature is an in-house pickup-game queue with published rules, match history, and per-match pages. Player profiles surface individual stats, and there are even recruitment ("currículo") and ad-slot pages to support the community commercially.

Built with Astro and Vue 3, styled with Tailwind CSS v4, and rendered server-side on Node. Content is managed through a Directus headless CMS (queried over GraphQL with Apollo, with Redis backing real-time updates), and game data is fetched from the public Deadlock API. The UI reuses my own open-source `@deadlock-api/ui` Web Components for rendering items. All content is in Brazilian Portuguese.
