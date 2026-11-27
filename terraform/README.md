# Terraform infrastructure

This directory contains the AWS infrastructure definition for the DevOps learning project.

## Current configuration

- AWS provider region: `ap-south-1`
- Resource definition: one EC2 controller instance
- Default instance type: `t3.medium`
- AMI ID: supplied through the required `ami_id` input variable

## Validation

The GitHub Actions infrastructure workflow checks formatting, initializes Terraform without a remote backend, and runs `terraform validate`. It supplies a syntactically valid placeholder AMI only so static validation can run without AWS credentials.

These checks do **not** create infrastructure, confirm that an AMI exists in the selected region, or prove that the instance can boot.

## Safe local commands

```bash
terraform fmt -check -recursive
terraform init -backend=false
terraform validate
```

Before any real plan or apply, select a currently available AMI for the target region, review the full plan, confirm the account and region, and estimate EC2, EBS, networking, and data-transfer costs.

## Deployment status

No EC2 instance is launched by CI. Terraform provisioning remains intentionally disabled to preserve the project's ₹0 deployment-test budget. Do not treat static validation as a production deployment.
