# GitHub Portfolio — Swaraj Salve

**Target roles:** DevOps Engineer (Fresher) | AWS Cloud Support | Cloud Operations | Technical Support

This portfolio records repository work and CI evidence, while distinguishing automated checks from live infrastructure execution.

## 1. DevOps CI/CD and AWS Infrastructure

**Repository:** https://github.com/swarajsalve042/devops-cicd-aws-infrastructure

Built a Node.js demo app and CI/CD workflows that test the app, build Docker images, publish to GitHub Container Registry, and authenticate to AWS using GitHub OIDC to push an image to Amazon ECR. Added Terraform, Ansible, Kubernetes and Jenkins configuration examples.

**Verified**
- GitHub Actions Node.js CI passed.
- Docker image build and runtime health test passed.
- GHCR publish workflow passed.
- AWS OIDC authentication and Amazon ECR image push workflow passed.
- Terraform formatting, initialization without backend, and validation passed.
- Ansible playbook syntax validation passed.
- Kubernetes manifest schema validation passed.
- Jenkinsfile Groovy syntax parsing passed.

**Not performed:** No live Jenkins controller execution, Terraform apply, Ansible host configuration, Kubernetes cluster deployment, or ECS service launch. ECS service launch remains intentionally paused under the user's ₹0 deployment-test budget. The app is not claimed to be live on ECS.

**Technologies:** AWS IAM/OIDC, Amazon ECR, ECS/Fargate configuration, GitHub Actions, Docker, Node.js, Terraform, Kubernetes, Ansible, Jenkins.

Evidence: https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions

## 2. DevOps Lifecycle — Jenkins, Docker and GitHub

**Repository:** https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github

Built a Node.js application with automated tests and a /health endpoint. Added a Docker workflow and a declarative Jenkinsfile for checkout, dependency installation, tests, and Docker image build.

**Verified:** GitHub Actions completed successfully: dependencies installed, tests passed, Docker image built, container started, and /health smoke test passed. The Jenkinsfile also passed Groovy syntax validation in GitHub Actions.

**Not yet verified:** Execution of the Jenkinsfile on a real Jenkins controller/agent. A Jenkinsfile Runner setup was attempted, but its external plugin downloads failed before the pipeline could start; no Jenkins pipeline execution is claimed.

**Technologies:** Node.js, JavaScript, Git, GitHub Actions, Jenkins, Docker.

Evidence: Node.js/Docker CI https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github/actions/runs/45358590955
Jenkinsfile syntax validation https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github/actions/runs/45362500114

## 3. Abode Software DevOps Lifecycle Assignment

**Repository:** https://github.com/swarajsalve042/abode-devops-lifecycle

Retained the assignment material and added an independent Node.js sample application because the referenced external hshar/webapp source was not present in the repository. Added automated tests, Docker packaging, a Jenkins pipeline, a CodeBuild buildspec, and deployment-scope documentation.

**Verified:** GitHub Actions tests passed, Docker image built, temporary container started, and /health endpoint passed. The workflow removed the temporary container after testing.

**Not performed:** No production deployment, live Jenkins execution, or AWS CodeBuild project execution. The sample app is an independent demonstration, not the original external application.

**Technologies:** Node.js, GitHub Actions, Jenkins pipeline configuration, Docker, AWS CodeBuild buildspec.

Evidence: https://github.com/swarajsalve042/abode-devops-lifecycle/actions/runs/45356279393

## 4. AdventureWorks2012 SQL Server Analysis

**Repository:** https://github.com/swarajsalve042/querying-large-relational-database

Created seven T-SQL analysis queries covering person contact details, July 2005 sales orders and line items, total sales, 2006 monthly sales ranking, month-on-month changes using LAG(), and sales for Gustavo Achong.

**Verified against the official database:** A GitHub Actions job started a temporary SQL Server Developer container, restored Microsoft's official AdventureWorks2012 backup, executed all seven queries, saved the output artifact, and removed the container. The run completed successfully.

**Actual results:** 19,972 person/contact rows; 184 July 2005 orders; 498 July 2005 line items; July 2005 total sales 1,074,117.4188; 12 monthly rows for 2006; Gustavo Achong (CustomerID 29484) total sales 147,804.9208.

**Data-quality correction:** The restored AdventureWorks2012 backup contains 31,465 orders dated 2005-07-01 through 2008-07-31 and no May 2011 sales. The original 2011 filters were corrected to use real dates in the dataset.

Evidence: https://github.com/swarajsalve042/querying-large-relational-database/actions/runs/45357844364
Results artifact: https://github.com/swarajsalve042/querying-large-relational-database/actions/runs/45357844364/artifacts/14903331970

**Technologies:** Microsoft SQL Server, SSMS, T-SQL, joins, aggregation, CTEs, date filtering, window functions.

Evidence: https://github.com/swarajsalve042/querying-large-relational-database/actions/runs/45357844364

---

## Recommended portfolio presentation

- Lead with Project 1 for AWS OIDC, ECR publishing, and infrastructure validation.
- Use Project 2 to demonstrate an application CI and Docker runtime smoke test.
- Present Project 3 as an independently built CI/Docker sample based on the assignment.
- Present Project 4 as a SQL analysis project with successful execution of all seven queries against the official AdventureWorks2012 database.

## GitHub Profile

https://github.com/swarajsalve042

## Accuracy standard

A workflow file is not proof of execution. Syntax validation is not a live service run. A Docker image build is not a production deployment. A cloud task definition is not a running application. Only claim the verified items above; update this document when additional live execution evidence exists.
