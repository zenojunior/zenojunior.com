---
title: 'CS Demo Analyzer'
description: 'The fastest free browser-based 2D replay analyzer for Counter-Strike 2 demos. Drop a .dem file and rewatch the match round by round, fully client-side.'
period:
  start: '2026-06-16'
tags: ['vue', 'typescript', 'rust', 'webassembly', 'tailwindcss', 'open-source']
url: 'https://cs2.zenojunior.com'
repo: 'https://github.com/zenojunior/cs-demo-analyzer'
icon: '/projects/icons/cs-demo-analyzer.webp'
---

Counter-Strike 2 is a competitive multiplayer shooter by Valve, the latest entry in the Counter-Strike series and one of the most played games in the world, with hundreds of thousands of concurrent players at any given moment and a thriving professional scene. After every match the game can record a demo: a full replay of everything that happened, which is exactly what makes deep post-match analysis possible.

I have played Counter-Strike since I was a kid, and analyzing those demos with friends after a PUG was always part of the fun. The problem was the tooling. Every existing analyzer had too much friction: install a database, spin up Docker, wire up config, all before you could watch a single round, and the visual side still felt like an afterthought.

I just wanted a simple way to review the comms and positioning of our matches, so I built the tool I always wished existed: instant to open, good-looking, and fully client-side. You drop a `.dem` file and rewatch the match round by round. No install, no upload, not a single byte leaving your machine. It is open source so it can grow with the CS2 community, and it is a first step toward building in esports.

## 2D replay

At its core is a round-by-round 2D replay of player movement, duels and timing, with a live scoreboard, killfeed and in-game chat, and auto-advance between rounds. The original player comms are replayed alongside the action, so you hear the calls exactly as they happened while you watch the round unfold.

<figure>
  <img src="/projects/cs-demo-analyzer/replay.webp" alt="2D replay of a CS2 demo on de_dust2 with player positions, scoreboard, killfeed and timeline" width="1280" height="800" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">The 2D replay: player movement, duels and timing on the radar, with scoreboard, killfeed and a scrubbable timeline.</figcaption>
</figure>

## Heatmaps and utility analysis

Beyond the replay, the analyzer turns a match into stats. Heatmaps for deaths, presence and utility can be filtered by side, player and round, with multi-floor support for maps like Nuke and Vertigo. There is a full breakdown of grenade trajectories for smokes, molotovs, HEs, flashes and decoys, plus flash effectiveness (who blinded whom and for how long) and HE / molotov damage dealt per player.

<figure>
  <img src="/projects/cs-demo-analyzer/heatmaps.webp" alt="Death heatmap overlaid on the de_dust2 radar, filterable by side, player and round" width="1280" height="800" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">Heatmaps for kills, deaths and presence, filtered by side, player, round and round time.</figcaption>
</figure>

<figure>
  <img src="/projects/cs-demo-analyzer/utilities.webp" alt="Grenade trajectories for smokes, molotovs, flashes and HEs drawn over the map" width="1280" height="800" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">Every grenade thrown in the match, with the option to jump straight into the replay from a throw.</figcaption>
</figure>

## Economy

A per-round economy breakdown shows buy types, equipment value and money flow, so you can see where a team's eco broke down or which force-buy swung the half.

<figure>
  <img src="/projects/cs-demo-analyzer/economy.webp" alt="Economy breakdown comparing two teams by buy type, with a starting-money chart over the match" width="1280" height="800" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">Round outcomes by economy type and starting money over the match, side by side for both teams.</figcaption>
</figure>

## Under the hood

The whole thing runs in the browser. The demo is read and parsed in a Web Worker by a custom Rust parser compiled to WebAssembly, built on top of [`source2-demo`](https://crates.io/crates/source2-demo), so nothing is ever sent to a server. Uploads can be `.dem`, `.gz`, `.zip` or `.zst` (CS2 / Source 2), with decompression handled client-side before parsing.

The app is Vue 3, Vue Router and Vite, styled with Tailwind CSS v4 and Reka UI. An analyzed match can be exported as a compact `.cs2dv` file and reopened instantly without re-parsing the original demo, and a local history keeps your recently analyzed demos in the browser. The interface is translated into nine languages so far: English, Portuguese, Spanish, French, German, Russian, Polish, Turkish and Ukrainian.

There is also a built-in showcase to rewatch Counter-Strike Major playoff matches in 2D, map by map, with the replays bundled in the project. Fully open-source under MIT license, and contributions are welcome.
