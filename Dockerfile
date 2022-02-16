FROM node:16-alpine

WORKDIR /home/node/app

RUN npm install -g npm@8.1.2

COPY ./package*.json .eslintrc.js tsconfig.build.json tsconfig.json ./
RUN npm install
COPY ./src ./src

RUN npm run build:docker
