---
title: 'TreinaHub'
description: 'Multi-tenant SaaS that lets fitness trainers manage clients, build workout plans, and ship a branded installable app to their students.'
period:
  start: '2026-05-01'
tags: ['typescript', 'hono', 'astro', 'vue', 'react', 'pwa', 'prisma', 'postgresql', 'saas']
url: 'https://treinahub.com'
icon: '/projects/icons/treinahub.svg'
---

TreinaHub is a multi-tenant SaaS for fitness trainers to manage their clients and prescribe workout plans. A single platform serves three distinct frontends: a trainer dashboard, an admin panel, and an installable student PWA, all backed by a REST API with database-level row security so every trainer only ever touches their own data.

## Designing a student's program

At the heart of the trainer dashboard is the workout board. Inspired by Trello, each training day is a column and each exercise a card, so a trainer can shape a student's whole routine by dragging columns and cards into place. Sets, reps, weight, and rest sit right on the card, drafts stay hidden from the student until they are ready, and exercises can be grouped into structures like tri-sets.

<figure>
  <img src="/projects/treinahub/th0.webp" alt="Trello-style workout board with draggable training-day columns, each holding exercise cards that show sets, reps, weight, and rest" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">The workout board: a drag-and-drop, Trello-inspired layout where each column is a training day and each card an exercise.</figcaption>
</figure>

## Building workouts

The workout builder goes beyond sets and reps. When a trainer creates a custom exercise, an interactive SVG body map lets them tag the muscle groups it works and set a per-muscle intensity, so the load is visualized exactly as it falls on the body. Each set is configured independently with its own type, reps, weight, and rest interval.

<figure>
  <img src="/projects/treinahub/th1.webp" alt="Custom exercise editor with an SVG muscle map highlighting chest and shoulders, intensity sliders per muscle, and a configurable set table" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">The custom-exercise editor: an SVG muscle visualizer with per-muscle intensity, alongside per-set reps, weight, and rest.</figcaption>
</figure>

## A branded app for every trainer

The student experience is a React PWA that installs to the home screen and works offline through a service worker. Each trainer's app is fully branded: building on shadcn/ui theming, the trainer can switch the entire look of their students' app with a single click, turning it into a product that carries their own identity. Themes are defined as typed design tokens (colors, fonts, radius) and injected at runtime, with custom domains and bespoke themes unlocked on higher plans.

<figure>
  <img src="/projects/treinahub/th2.webp" alt="App personalization settings showing the app name, icon, and a grid of selectable themes with a live phone preview on the right" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">One-click theming for the student app, with a live preview of how it lands on the student's phone.</figcaption>
</figure>

## Tracking progress

Students log sets and record body measurements through bioimpedance and skinfold protocols. The trainer sees it all come together in two views. Evolution charts, rendered with ECharts, plot weight, body composition, visceral fat, body water, and basal metabolic rate over time.

<figure>
  <img src="/projects/treinahub/th3.webp" alt="Evolution dashboard with summary cards and ECharts line graphs for weight, body composition, visceral fat, body water, and basal metabolic rate" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">Body-composition evolution over time, charted with ECharts.</figcaption>
</figure>

A training-frequency heatmap turns the year into a glance: which days a student trained, which they skipped, and how consistent they have been. Tapping into any day opens that session in detail, down to how the workout went and any feedback the student left.

<figure>
  <img src="/projects/treinahub/th4.webp" alt="Training activity view with a year-long frequency heatmap and a list of recent workout sessions tagged with mood feedback" />
  <figcaption class="text-sm text-text-muted text-center -mt-2 mb-8">A year-long training heatmap, with each day drillable down to the session and the student's feedback.</figcaption>
</figure>

## Under the hood

Authorization is enforced with ZenStack on top of Prisma, wrapping the client so the same `@@allow` rules guard every query across three roles (admin, trainer, student). Billing is tiered (Free, Basic, Pro) through Stripe, with feature gates for the assistant, forms, Google Calendar sync, load progression, and unlimited clients.

Pro trainers get an AI assistant powered by an MCP server embedded directly in the API, giving the model read-only, access-controlled visibility into clients, workouts, training logs, and measurements without ever bypassing the tenant isolation rules.

The stack is a pnpm + Turborepo monorepo: a Hono API, Astro + Vue dashboards, a React 19 + Vite + Tailwind student PWA, PostgreSQL, and shared TypeScript packages for types, plan limits, and themes. The entire product is built in Brazilian Portuguese for the Brazilian personal-training market.
