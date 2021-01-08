FROM node:10.16.1
COPY source/dist/. src/
WORKDIR /src
ENV API_PORT 8080
ENV DATABASE_HOSTNAME otus-database
ENV DATABASE_PORT 27017
ENV DATABASE_USER otus
ENV DATABASE_PASS otus
ENV DATABASE otus
ENV NODE_OPTIONS --max_old_space_size=1024
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect config/init/server.js
