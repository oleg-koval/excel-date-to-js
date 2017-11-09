FROM node:8.5.0-alpine

RUN apk update && \
    apk add bash python make g++ postgresql-client git && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

RUN npm install -g --quiet
