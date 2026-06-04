# syntax=docker/dockerfile:1.7

# Base com Node + pnpm via corepack
FROM node:22-alpine AS base
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    CI=true \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
WORKDIR /app

# Instala dependencias do workspace inteiro com cache do store do pnpm.
# Copia primeiro so os manifestos para maximizar o cache de layers: enquanto
# nenhum package.json/lockfile mudar, esta etapa nao reinstala.
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/site/package.json apps/site/package.json
COPY packages/cv/package.json packages/cv/package.json
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --frozen-lockfile

# Build estatico do site (Astro gera HTML + OG + sitemap em build time).
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/site/node_modules ./apps/site/node_modules
COPY --from=deps /app/packages/cv/node_modules ./packages/cv/node_modules
COPY . .
RUN pnpm --filter @repo/site build

# Runtime: serve estatico na porta 3000.
# Sem reverse proxy aqui; o Dokploy (Caddy) cuida do edge (TLS, roteamento).
FROM node:22-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/apps/site/dist ./dist

EXPOSE 3000
# Sem flag -s: e um site multi-pagina estatico, nao uma SPA.
CMD ["serve", "dist", "-l", "3000"]
