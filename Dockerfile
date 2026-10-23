# syntax=docker/dockerfile:1

ARG NODE_IMAGE=node:24.22.1-alpine3.24@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53

FROM ${NODE_IMAGE} AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY script/ ./script/
COPY source/ ./source/
COPY app/frontend/ ./app/frontend/
RUN npm run build

FROM ${NODE_IMAGE} AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

FROM ${NODE_IMAGE} AS runtime
LABEL org.opencontainers.image.title="goCamOpenSource" \
      org.opencontainers.image.source="https://github.com/Godotcam/goCamOpenSource" \
      org.opencontainers.image.licenses="AGPL-3.0"
ENV NODE_ENV=production \
    HTTP_BIND_ADDRESS=0.0.0.0 \
    HTTP_SERVER_PORT=3300
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/app ./app
COPY package.json LICENSE ./
COPY docker/healthcheck.cjs ./docker/healthcheck.cjs
# The example /callback endpoint writes here. Mount a volume or tmpfs at runtime.
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/corepack /opt/yarn-v1.22.22 \
        /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack \
        /usr/local/bin/yarn /usr/local/bin/yarnpkg \
    && mkdir log \
    && chown node:node log
USER node
EXPOSE 3300
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD ["node", "docker/healthcheck.cjs"]
STOPSIGNAL SIGTERM
CMD ["node", "app/backend/app.js"]
