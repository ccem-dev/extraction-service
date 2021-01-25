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
ENV MEMORY 1024
ENV API_PORT 8080
ENV ELASTICSEARCH_HOSTNAME elasticsearch
ENV ELASTICSEARCH_PORT 9200
ENV ELASTICSEARCH_PROTOCOL ELASTICSEARCH_PROTOCOL
ENV ELASTICSEARCH_INITIALIZE ELASTICSEARCH_INITIALIZE
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect config/init/server.js
