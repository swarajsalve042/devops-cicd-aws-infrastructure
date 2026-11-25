variable "aws_region" {
  description = "AWS region to use if infrastructure is deployed after cost review and approval."
  type        = string
  default     = "ap-south-1"
}

variable "ami_id" {
  description = "Region-compatible AMI ID for the DevOps controller instance."
  type        = string

  validation {
    condition     = can(regex("^ami-[0-9a-f]{8,17}$", var.ami_id))
    error_message = "ami_id must use the AWS AMI ID format: ami- followed by 8 to 17 hexadecimal characters."
  }
}

variable "controller_instance_type" {
  description = "EC2 instance type for the controller; provisioning is intentionally disabled in this repository's CI."
  type        = string
  default     = "t3.medium"
}
