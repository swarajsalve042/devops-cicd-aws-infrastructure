# Jenkins execution runbook

Repository: https://github.com/swarajsalve042/devops-cicd-aws-infrastructure

## Purpose and safety boundary

This Jenkins pipeline runs application tests and builds a local Docker image. It does not assume an AWS role, push to Amazon ECR, create cloud infrastructure, or deploy an application. AWS publishing remains a separate, explicitly controlled GitHub Actions workflow.

## Prerequisites

- Jenkins 2.x or later.
- Jenkins Pipeline and Git plugins.
- A Linux build agent with Node.js 20+, npm, Docker CLI, and access to a running Docker daemon.
- The Jenkins agent account must have approved access to the Docker daemon.

The Jenkinsfile performs an Agent Preflight stage and checks Node.js 20+, npm, Docker CLI, and Docker daemon connectivity before installing dependencies.

## Configure the job

1. Create a Jenkins **Pipeline** job.
2. Choose **Pipeline script from SCM** and select **Git**.
3. Repository URL: `https://github.com/swarajsalve042/devops-cicd-aws-infrastructure.git`.
4. Branch specifier: `*/main`.
5. Script path: `Jenkinsfile`.
6. Save, select **Build Now**, and inspect **Console Output**.

## Expected result

Checkout, Agent Preflight, Install and Test, and Build Docker Image should pass. The local image is `devops-cicd-aws-demo:<BUILD_NUMBER>` on the Jenkins agent.

## AWS credentials and deployment

No AWS credentials are required for this Jenkinsfile. Do not add AWS keys to the repository or Jenkins job for this local build. ECR publishing and infrastructure provisioning are intentionally outside this pipeline and require a separate reviewed workflow and explicit approval.

## Completion evidence

Capture the Jenkins build URL, build number, and successful stage/console output. GitHub Actions syntax validation does not count as a live Jenkins build.

## Troubleshooting

- Install Node.js 20+ and Docker CLI on the actual build agent.
- Verify the Jenkins service account can access the Docker daemon.
- Confirm GitHub connectivity from the agent.
- The repository is public; no personal access token is needed for read-only checkout.
