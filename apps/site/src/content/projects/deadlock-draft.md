---
title: 'Deadlock Draft'
description: 'A real-time pick/ban draft tool for the Deadlock competitive scene, used by hundreds of streamers across multiple countries.'
period:
  start: '2026-04-01'
tags: ['next.js', 'react', 'socket.io', 'tailwindcss', 'typescript', 'open-source']
url: 'https://draft.deadlock.pro.br/'
repo: 'https://github.com/deadlockprobr/draft'
---

Deadlock is a competitive multiplayer game by Valve. I helped found the Brazilian community around it, and as the scene grew, so did the demand for tooling. Deadlock Draft started as an internal need for tournaments and broadcasts, but I decided to open-source it so the wider community could use, adapt, and contribute.

What began as a simple pick/ban screen in English and Portuguese quickly gained traction. Hundreds of streamers on Twitch picked it up, players from multiple countries started using it, and the tool surpassed 1,500 completed drafts. The community then asked for timed phases, which are essential for tournaments and custom matches where two teams need structured hero pick and ban rounds.

Built with Next.js 15, React 19, Socket.IO, and Tailwind CSS v4. Features include multiple draft formats (standard, tournament, watchparty), configurable timers, live WebSocket synchronization, stream-safe viewing modes with chroma-key support for broadcasters, and a public API for programmatic draft creation with webhook notifications.

Supports English, Portuguese, Spanish, and Russian. Fully open-source under MIT license.
