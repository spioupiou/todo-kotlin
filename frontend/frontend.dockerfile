FROM node:14-alpine

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package.json ./

COPY frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]