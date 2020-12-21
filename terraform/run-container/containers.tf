variable "extraction-service-port"{
  default = 53004
}

variable "extraction-service-name"{
  default = "extraction-service:latest"
}

variable "extraction-service-network"{
  default = "otus-platform-network"
}

resource "docker_image" "extraction-service" {
  name = var.extraction-service-name
}

resource "docker_container" "extraction-service" {
  name = "extraction-service"
  image = docker_image.extraction-service.name
  ports {
    internal = 8080
    external = var.extraction-service-port
  }
  networks_advanced {
    name = var.extraction-service-network
  }
}