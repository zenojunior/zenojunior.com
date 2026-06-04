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

# ── Runtime stage: serve the static output with nginx ──
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/site/dist /usr/share/nginx/html

EXPOSE 80
