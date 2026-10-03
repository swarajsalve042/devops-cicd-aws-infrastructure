# Architecture

Developer -> GitHub -> AWS CodeBuild/Jenkins -> Docker image -> Kubernetes master -> 2 replicas -> NodePort 30008.

Terraform provisions AWS infrastructure. Ansible configures required software on controller/worker machines.

## Suggested Machine Roles
- Worker 1: Jenkins and Java
- Worker 2: Docker and Kubernetes
- Worker 3: Java, Docker and Kubernetes
- Worker 4: Docker and Kubernetes

## Release
The assignment specifies a controlled release on the 25th of every month.
