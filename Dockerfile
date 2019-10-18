FROM node:10

COPY src/ /node_app/src
COPY package.json /node_app/package.json
COPY package-lock.json /node_app/package-lock.json

WORKDIR /node_app

RUN npm i --production
ENV NODE_ENV=production
CMD node src/index.js
