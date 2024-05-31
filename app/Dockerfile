FROM node:lts-alpine

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1

RUN apk add --no-cache openssl \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package.json .

RUN npm install

COPY index.js .

WORKDIR /usr/src/bin

COPY docker-entrypoint.sh .

RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3000

WORKDIR /usr/src/app

CMD ["npm", "start"]