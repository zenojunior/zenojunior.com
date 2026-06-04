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

The student experience is a React PWA that installs to the home screen and works offline through a service worker. Each trainer's app is fully branded: themes are defined as typed design tokens (colors, fonts, radius) and injected at runtime, with custom domains and custom themes unlocked on higher plans. Students view their workouts, log sets, and track body measurements through bioimpedance and skinfold protocols.

Authorization is enforced with ZenStack on top of Prisma, wrapping the client so the same `@@allow` rules guard every query across three roles (admin, trainer, student). Billing is tiered (Free, Basic, Pro) through Stripe, with feature gates for the assistant, forms, Google Calendar sync, load progression, and unlimited clients.

Pro trainers get an AI assistant powered by an MCP server embedded directly in the API, giving the model read-only, access-controlled visibility into clients, workouts, training logs, and measurements without ever bypassing the tenant isolation rules.

The stack is a pnpm + Turborepo monorepo: a Hono API, Astro + Vue dashboards, a React 19 + Vite + Tailwind student PWA, PostgreSQL, and shared TypeScript packages for types, plan limits, and themes. The entire product is built in Brazilian Portuguese for the Brazilian personal-training market.
