###############################################
###               Variables                 ###
###############################################
variable "extraction-service-dockerfile" {
  default = "."
}
variable "extraction-service-name" {
  default = "extraction-service"
}
variable "extraction-service-directory" {
  default = "extraction-service"
}
variable "extraction-service-source" {
  default = "source"
}
variable "extraction-service-cleanup" {
  default = "rm -rf node_modules dist package-lock.json"
}
variable "extraction-service-npminstall" {
  default = "npm install"
}
variable "extraction-service-npmtest" {
  default = "npm test"
}
variable "extraction-service-npmbuild" {
  default = "npm run build"
}

#################################################
### EXTRACTION-SERVICE : Build Image Service ###
#################################################
resource "null_resource" "extraction-service-cleanup" {
  provisioner "local-exec" {
    working_dir = var.extraction-service-source
    command = var.extraction-service-cleanup
  }
}

resource "null_resource" "extraction-service-install" {
  depends_on = [null_resource.extraction-service-cleanup]
  provisioner "local-exec" {
    working_dir = var.extraction-service-source
    command = var.extraction-service-npminstall
  }
}

resource "null_resource" "extraction-service-test" {
  depends_on = [null_resource.extraction-service-install]
  provisioner "local-exec" {
    working_dir = var.extraction-service-source
    command = var.extraction-service-npmtest
  }
}

resource "null_resource" "extraction-service-build" {
  depends_on = [null_resource.extraction-service-install]
  provisioner "local-exec" {
    working_dir = var.extraction-service-source
    command = var.extraction-service-npmbuild
  }
}

resource "null_resource" "extraction-service" {
  depends_on = [null_resource.extraction-service-build]
  provisioner "local-exec" {
    command = "docker build -t ${var.extraction-service-name} ${var.extraction-service-dockerfile}"
  }
}