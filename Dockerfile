FROM node:10.16.1
COPY source/dist/. src/
WORKDIR /src
ENV MEMORY 2048
ENV API_PORT 8080
ENV ELASTICSEARCH_HOSTNAME elasticsearch
ENV ELASTICSEARCH_PORT 9200
ENV ELASTICSEARCH_PROTOCOL http
ENV ELASTICSEARCH_INITIALIZE false
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect config/init/server.js
