FROM nginx:stable-alpine

WORKDIR /etc/nginx/

RUN rm conf.d/default.conf

COPY nginx.conf nginx.conf

WORKDIR /usr/local/bin/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]