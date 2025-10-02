ARG NODE_IMG=20-bookworm

FROM node:${NODE_IMG} AS nodejs

RUN apt-get update && apt-get install -y tini &&\
    find /var/lib/apt/lists/ /var/cache/apt/archives/ -type f -delete

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node

WORKDIR /home/node/app
USER node

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

FROM nodejs AS build-frontend
RUN npm run buildJsFrontend
RUN npm run buildCssFrontend

FROM scratch AS frontend
COPY --from=build-frontend /home/node/app/frontend/static/ /

FROM nodejs AS backend
RUN npm run buildJsBackend

ENV HTTP_SERVER_PROTOCOL="http"
ENV HTTP_SERVER_HOST="0.0.0.0"
ENV HTTP_SERVER_PORT="3300"

EXPOSE 3300

ENTRYPOINT [ "tini", "--" ]
CMD [ "node", "./app/backend/app.js" ]
