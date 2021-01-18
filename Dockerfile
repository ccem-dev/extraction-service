FROM node:10.16.1

RUN apt update
RUN apt install -y dirmngr \
    apt-transport-https \
    ca-certificates \
    software-properties-common \
    gnupg2
RUN apt-key adv \
    --keyserver keys.gnupg.net \
    --recv-key 'E19F5F87128899B192B1A2C2AD5F960A256A04AF'
RUN add-apt-repository 'deb https://cloud.r-project.org/bin/linux/debian stretch-cran35/'
RUN apt install -y r-base
RUN apt install -y r-base-dev
RUN apt install -y build-essential
RUN Rscript -e 'install.packages("devtools",dependencies=TRUE, repos = "http://cran.us.r-project.org")'
RUN Rscript -e 'install.packages("rjson",dependencies=TRUE, repos = "http://cran.us.r-project.org")'
COPY source/dist/. src/
WORKDIR /src
ENV API_PORT 8080
ENV DATABASE_HOSTNAME otus-database
ENV DATABASE_PORT 27017
ENV DATABASE_USER otus
ENV DATABASE_PASS otus
ENV DATABASE otus
ENV ELASTICSEARCH_PROTOCOL ELASTICSEARCH_PROTOCOL
ENV ELASTICSEARCH_HOSTNAME ELASTICSEARCH_HOSTNAME
ENV ELASTICSEARCH_PORT 9200
ENV ELASTICSEARCH_INITIALIZE ELASTICSEARCH_INITIALIZE
ENV NODE_OPTIONS --max_old_space_size=1024
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect config/init/server.js
