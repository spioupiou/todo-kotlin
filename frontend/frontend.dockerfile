FROM node:14-alpine

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package.json /app

COPY frontend/yarn.lock /app

RUN yarn install --frozen-lockfile

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]