# Extraction-service

[comment]: <> (<Description related to extractions.>)

[comment]: <> (# Build Code)

[comment]: <> (`npm run production --prefix source/`)

# Terraform

## Build Image
`terraform init terraform/build-image`
`terraform apply terraform/build-image`

## Build Container
`terraform init terraform/run-container`
`terraform apply terraform/run-container`

[comment]: <> (# !Terraform)

[comment]: <> (## Build Code)

[comment]: <> (`npm run production --prefix source/`)

## Build Image
`docker build -t extraction-service .`

[comment]: <> (## Build Container)

[comment]: <> (`docker run -d -p 80:8080)

[comment]: <> (-e MEMORY=1024)

[comment]: <> (-e DATABASE_HOSTNAME='extraction-db')

[comment]: <> (-e DATABASE_POR=27017)

[comment]: <> (-e DATABASE_USER='user')

[comment]: <> (-e DATABASE_PASS='user')

[comment]: <> (-e DATABASE='extraction-database')

[comment]: <> (--name extraction-service extraction-service`)

[comment]: <> (# Contato)

[comment]: <> (contato@otus-solutions.com.br)