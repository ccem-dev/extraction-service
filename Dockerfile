FROM node:10.16.1
ENV API_PORT 8080
COPY source/dist/. src/
WORKDIR /src
CMD node --optimize-for-size --inspect server.js