ARG NODE_IMG=20-bookworm

FROM node:${NODE_IMG} AS base

RUN apt-get update && apt-get install --no-install-recommends -y tini &&\
    find /var/lib/apt/lists/ /var/cache/apt/archives/ -type f -delete

WORKDIR /home/node/app

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node
USER node
COPY --chown=node:node package*.json ./

# == deps
FROM base AS deps
RUN npm ci

FROM deps AS sources
COPY --chown=node:node . .

FROM sources AS build-frontend
RUN npm run buildJsFrontend
RUN npm run buildCssFrontend

FROM scratch AS frontend
COPY --from=build-frontend /home/node/app/frontend/static/ /

FROM build-frontend AS build-backend
RUN npm run buildJsBackend

FROM base AS backend

COPY --from=deps /home/node/app/package*.json ./
COPY --from=deps /home/node/app/node_modules ./node_modules
RUN npm prune --omit=dev

COPY --from=build-frontend /home/node/app/app/frontend ./app/frontend
COPY --from=build-backend /home/node/app/app/backend ./app/backend

ENV NODE_ENV=production
ENV HTTP_SERVER_PROTOCOL="http"
ENV HTTP_SERVER_HOST="0.0.0.0"
ENV HTTP_SERVER_PORT="3300"

EXPOSE 3300

ENTRYPOINT [ "tini", "-g", "--" ]
CMD [ "node", "./app/backend/app.js" ]
