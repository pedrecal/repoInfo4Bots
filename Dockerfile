FROM node:12-alpine

WORKDIR /usr/repoInfo4Bots

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 7023

CMD ["yarn", "dev"]