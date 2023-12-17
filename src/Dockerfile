
FROM node:18-bullseye AS build

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start"]