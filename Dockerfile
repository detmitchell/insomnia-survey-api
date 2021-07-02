FROM node:alpine

RUN mkdir -p /usr/src/insomnia-survey-api && chown -R node:node /usr/src/insomnia-survey-api

WORKDIR /usr/src/insomnia-survey-api

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000