######################################
## BUILDER
FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

RUN mkdir /app
WORKDIR /app
# Copy root lockfile
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope='@gdsc-uos/service' --docker

######################################
## INSTALLER
FROM node:16-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update

RUN mkdir /app
WORKDIR /app

RUN yarn global add pnpm
# COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY turbo.json turbo.json

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm install

RUN pnpm turbo run build --filter='@gdsc-uos/service'

######################################
## RUNNER
FROM node:16-alpine AS runner

RUN mkdir /app
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/service/next.config.js .
COPY --from=installer /app/apps/service/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/service/.next/static ./apps/service/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/service/public ./apps/service/public

CMD ["pnpm", "turbo", "run", "start", "--filter=service"]
