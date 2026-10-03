variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "ami_id" {
  type = string
}

variable "controller_instance_type" {
  type    = string
  default = "t3.medium"
}
