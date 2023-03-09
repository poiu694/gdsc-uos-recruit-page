## BUILDER
FROM node:16-alpine AS builder
ARG BUILD_CONTEXT
RUN apk add --no-cache libc6-compat

RUN mkdir /app
WORKDIR /app
# Copy root lockfile
RUN echo 'YARN VERSION IN BUILDER: ' && yarn --version
COPY . .
RUN yarn install
RUN yarn ${BUILD_CONTEXT}:build

## ---
## service RUNNER
FROM node:alpine AS runner
ARG BUILD_CONTEXT
ARG PORT
ENV APP_ENV production

RUN mkdir /app
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true

# Don't run production as root
RUN echo 'YARN VERSION IN RUNNER: ' && yarn --version
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY . .
COPY --from=builder /app/${BUILD_CONTEXT}/next.config.js ./${BUILD_CONTEXT}/next.config.js
COPY --from=builder /app/${BUILD_CONTEXT}/public ./${BUILD_CONTEXT}/public
COPY --from=builder /app/${BUILD_CONTEXT}/.next ./${BUILD_CONTEXT}/.next
COPY --from=builder /app/${BUILD_CONTEXT}/package.json ./${BUILD_CONTEXT}/package.json
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json

RUN rm -rf /app/.yarn/unplugged
RUN yarn install
RUN chown -R nextjs:nodejs /app/${BUILD_CONTEXT}/.next

USER nextjs
EXPOSE ${PORT}
CMD ["yarn", "service"]
