---
title: 'Deadlock Draft'
description: 'A real-time pick/ban draft tool for the Deadlock competitive scene, used by hundreds of streamers across multiple countries.'
period:
  start: '2026-04-01'
tags: ['next.js', 'react', 'socket.io', 'tailwindcss', 'typescript', 'open-source']
url: 'https://draft.deadlock.pro.br'
repo: 'https://github.com/deadlockprobr/draft'
---

Deadlock is a competitive multiplayer game by Valve. I helped found the Brazilian community around it, and as the scene grew, so did the demand for tooling. Deadlock Draft started as an internal need for tournaments and broadcasts, but I decided to open-source it so the wider community could use, adapt, and contribute.

What began as a simple pick/ban screen in English and Portuguese quickly gained traction. Hundreds of streamers on Twitch picked it up, players from multiple countries started using it, and the tool surpassed 1,500 completed drafts. The community then asked for timed phases, which are essential for tournaments and custom matches where two teams need structured hero pick and ban rounds.

## The draft screen

At its core is a shared draft screen built around two captains. Both teams watch the same board in real time over WebSockets: while one captain is on the clock picking or banning a hero, the other side waits for their turn, with live synchronization keeping everyone in sync.

<figure>
  <img src="/projects/deadlock/draft/dd1.webp" alt="Pick/ban draft interface with two team panels, a central hero grid, and a waiting state while the opposing captain selects" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">The shared draft board: each captain picks and bans while the other side waits, synced live for both teams.</figcaption>
</figure>

## Formats for every occasion

The tool is built to adapt to different games and competitions. When creating a draft, you choose the pick/ban sequence that fits the moment, from a full competitive ruleset to a relaxed watchparty with no bans. Running a tournament with a custom sequence? The community Discord is the place to reach out.

<figure>
  <img src="/projects/deadlock/draft/dd3.webp" alt="Draft format picker listing Standard, Mini tournaments, Watchparty, Simple, and Advanced presets with their pick/ban patterns" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">Pick a preset format, from Standard tournaments to a no-bans watchparty, or get a custom sequence through Discord.</figcaption>
</figure>

## Made for broadcasts

A dedicated streamer view turns the draft into a broadcast overlay, so the audience can follow every pick and ban as it happens. With chroma-key support it drops cleanly into OBS, pulling viewers into the strategic decisions both teams are making live.

<figure>
  <img src="/projects/deadlock/draft/dd2.webp" alt="Streamer overlay showing Team A versus Team B with both rosters of selected heroes side by side" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">The streamer overlay: a broadcast-ready board where the audience follows both teams' picks and bans in real time.</figcaption>
</figure>

## Under the hood

Built with Next.js 15, React 19, Socket.IO, and Tailwind CSS v4. Features include multiple draft formats (standard, tournament, watchparty), configurable timers, live WebSocket synchronization, stream-safe viewing modes with chroma-key support for broadcasters, and a public API for programmatic draft creation with webhook notifications.

Supports English, Portuguese, Spanish, and Russian. Fully open-source under MIT license.
