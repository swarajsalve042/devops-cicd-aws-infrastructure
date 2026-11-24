# GitHub Portfolio — Swaraj Salve

**Target roles:** DevOps Engineer (Fresher) | AWS Cloud Support | Cloud / Technical Support

This portfolio lists hands-on projects and clearly distinguishes verified automation from planned or locally configured components.

## 1. DevOps Lifecycle Implementation — Jenkins, Docker, GitHub Actions

**Repository:** https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github

Built a small Node.js application with a health endpoint, automated tests, Docker packaging instructions, and a Jenkins declarative pipeline. Added a GitHub Actions workflow to install dependencies and run the Node.js test suite on pushes and pull requests.

**Verified:** GitHub Actions workflow run completed successfully; checkout, Node.js setup, dependency installation, and automated tests passed.

**Not yet verified:** Running the Jenkins pipeline and building/running the Docker image.

**Technologies:** Node.js, JavaScript, Git, GitHub, GitHub Actions, Jenkins, Docker.

## 2. DevOps CI/CD and AWS Infrastructure

**Repository:** https://github.com/swarajsalve042/devops-cicd-aws-infrastructure

Created a Node.js demo application and infrastructure/pipeline configurations covering GitHub Actions, Docker, Amazon ECR, Amazon ECS/Fargate, Terraform, Kubernetes manifests, and Ansible.

**Verified from project progress:** GitHub Actions successfully built and pushed a Docker image to Amazon ECR. AWS OIDC identity provider and IAM role were configured. An ECS cluster and Fargate task definition were created.

**Not deployed:** The ECS service creation was intentionally paused before launch to avoid unexpected AWS charges. The application is not live on ECS. Kubernetes, Terraform, Ansible, and Jenkins execution still require validation.

**Technologies:** AWS IAM/OIDC, Amazon ECR, Amazon ECS/Fargate, GitHub Actions, Docker, Node.js, Terraform, Kubernetes, Ansible.

## 3. Abode Software DevOps CI/CD Lifecycle Assignment

**Repository:** https://github.com/swarajsalve042/abode-devops-lifecycle

Prepared a DevOps lifecycle assignment demonstrating a proposed branch-based workflow for build, test, and production release, with Jenkins pipeline configuration, AWS CodeBuild buildspec, and Docker packaging.

**Current evidence:** Repository includes README, Jenkinsfile, buildspec, Dockerfile, and a project strategy PDF.

**Not yet verified:** End-to-end Jenkins/CodeBuild execution, image publishing, and production deployment. Treat the architecture as a configured assignment, not a live production system.

**Technologies:** GitHub, Jenkins, AWS CodeBuild, Docker, CI/CD concepts.

## 4. AdventureWorks2012 SQL Server Analysis

**Repository:** https://github.com/swarajsalve042/querying-large-relational-database

Created a T-SQL analysis project using Microsoft's AdventureWorks2012 sample database. The query set covers person/contact details, May 2011 sales orders and order details, total monthly sales, month-on-month sales change using LAG(), and customer-level sales analysis.

**Current evidence:** SQL script and project README are present in the repository.

**Not yet verified:** Query execution against a restored AdventureWorks2012 database and captured result screenshots.

**Technologies:** Microsoft SQL Server, SSMS, T-SQL, joins, aggregation, CTEs, window functions.

---

## How to present this portfolio

- Highlight Project 1 as the strongest verified CI example.
- Highlight Project 2 as AWS hands-on setup and ECR image publishing, not as a completed ECS deployment.
- Present Project 3 as a DevOps assignment/configuration.
- Present Project 4 as a SQL analysis project; add result screenshots after running the queries.

## GitHub Profile

https://github.com/swarajsalve042

## Accuracy note

A committed pipeline file is not proof that the pipeline ran. A Dockerfile is not proof that an image was built. Cloud resources being configured is not proof that an application was deployed. Add execution screenshots, workflow links, and deployment endpoints only after verifying them.
