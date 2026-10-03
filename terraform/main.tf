provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "controller" {
  ami           = var.ami_id
  instance_type = var.controller_instance_type
  tags = { Name = "devops-controller" }
}
