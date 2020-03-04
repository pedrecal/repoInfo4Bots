FROM node:12-alpine

WORKDIR /usr/repoInfo4Bots

COPY package*.json ./
RUN yarn

COPY . .

ENV PORT=80
EXPOSE 80

ENTRYPOINT [ "yarn" ]

CMD ["start"]