# ── Build stage: compile the static Astro site ──
FROM node:22-slim AS build

WORKDIR /app
ENV PNPM_HOME="/pnpm" \
    PATH="/pnpm:$PATH" \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

# Install with the full workspace so the @repo/cv package resolves.
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @repo/site build

# ── Runtime stage: serve the static output on port 3000 ──
# No reverse proxy here; Dokploy's Caddy handles the edge (TLS, routing).
FROM node:22-alpine AS runtime

WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/apps/site/dist ./dist

EXPOSE 3000
# No -s flag: this is a multi-page static site, not an SPA.
CMD ["serve", "dist", "-l", "3000"]
