# DevOps CI/CD & AWS Infrastructure Project

Professional DevOps assignment project based on the supplied Analytics Pvt Ltd brief.

## Stack
GitHub, Jenkins, AWS CodeBuild, Docker, Kubernetes, Terraform, Ansible.

## Requirements
- Git workflow and controlled release lifecycle
- Release scheduled for the 25th of each month
- AWS CodeBuild trigger on master/main commits
- Docker image build from Dockerfile
- Kubernetes deployment with 2 replicas
- NodePort 30008
- Jenkins Pipeline
- Ansible configuration management
- Terraform-based AWS infrastructure

## Architecture
Developer -> GitHub -> CodeBuild/Jenkins -> Docker image -> Kubernetes cluster -> 2 replicas -> NodePort 30008.

Terraform provisions AWS infrastructure. Ansible configures required software on controller/worker machines.

## Project Structure
- `Jenkinsfile`
- `Dockerfile`
- `k8s/deployment.yaml`
- `terraform/main.tf`
- `terraform/variables.tf`
- `ansible/site.yml`
- `docs/architecture.md`
- `DevOps_CICD_AWS_Project_Presentation.pptx`

## Important
Replace placeholders for the GitHub repository URL, container registry, AWS AMI IDs, credentials, and cluster-specific settings before deployment.

This repository is a project/assignment starter and should be reviewed and adapted to the target AWS and Kubernetes environment before production use.
