# DevOps CI/CD & AWS Infrastructure

A hands-on DevOps project demonstrating a Node.js application, automated testing, Docker containerization, image publishing to Amazon ECR and GitHub Container Registry, and AWS deployment preparation.

## Verified implementation

The following GitHub Actions workflows have completed successfully on the `main` branch:

| Workflow | Verified result |
|---|---|
| Node.js CI | Dependencies installed and automated tests passed |
| Docker Build and Test | Docker image built; container started; `/health` endpoint returned the expected response |
| Kubernetes Deployment Smoke Test | Temporary Kind cluster created; two replicas became ready; Kubernetes Service `/health` check passed |
| Publish Docker image to GHCR | Container image built and published to GitHub Container Registry |
| Build and Push Node.js Image to Amazon ECR | GitHub OIDC authentication succeeded; image built, tagged, and pushed to ECR |

Latest verified workflow runs:
- [Node.js CI](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623282)
- [Docker Build and Test](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623152)
- [Publish Docker image to GHCR](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623147)
- [Build and Push to Amazon ECR](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623225)

## Application

- Node.js HTTP application listens on port 3000.
- `/` displays the project demo page.
- `/health` returns JSON with service health.
- Automated tests are located in `test/app.test.js`.
- Node.js 20 is used in CI and the Docker image.

## CI/CD workflow

1. Code is stored in GitHub.
2. GitHub Actions checks out the repository and runs Node.js tests.
3. Docker workflow builds the image, starts a container, and checks the health endpoint.
4. GHCR workflow publishes the image to GitHub Container Registry.
5. The AWS ECR publishing workflow can be run manually after reviewing cost impact and receiving approval; it assumes the IAM role using GitHub OIDC, logs in to Amazon ECR, and pushes versioned and `latest` image tags.

### AWS image repository

- Region: `ap-south-1`
- ECR repository: `nodejs-app`
- Image URI: `079131597175.dkr.ecr.ap-south-1.amazonaws.com/nodejs-app`
- Authentication: GitHub Actions OIDC and IAM role `GitHubActionsECRPushRole`

No long-lived AWS access key is stored in the repository.

## Repository structure

```text
.
├── .github/workflows/
│   ├── deploy-ecr.yml
│   ├── docker.yml
│   ├── nodejs.yml
│   └── publish-ghcr.yml
├── app.js
├── test/app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Jenkinsfile
├── k8s/deployment.yaml
├── terraform/
└── ansible/
```

## Deployment status and remaining work

**Verified:** CI tests, Docker build and container health check, GHCR publishing, Amazon ECR image publishing, and a two-replica Kubernetes deployment to an ephemeral Kind cluster. The temporary cluster was removed after the successful smoke test. [Kubernetes deployment run](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45363355524).

The Kind test proves the manifest and application can run on a temporary local Kubernetes cluster; it does not mean an AWS EKS or other production cluster is deployed.

**Prepared but not yet verified end to end:**
- Jenkins pipeline execution on a configured Jenkins agent.
- Terraform validation and any infrastructure provisioning.
- Ansible syntax and execution against real hosts.
- Kubernetes manifest validation and deployment to a cluster.
- ECS/Fargate service launch and public application endpoint.

An ECS cluster and Fargate task definition were created during the learning exercise. ECS service creation was deliberately paused before launch to avoid unexpected AWS charges. The application is not currently confirmed live on ECS.

## Safe validation

Run locally after installing Node.js 20 and Docker:

```bash
npm ci
npm test
docker build -t devops-cicd-aws-demo:local .
docker run --rm -p 3000:3000 devops-cicd-aws-demo:local
```

In another terminal, check `http://localhost:3000/health`.

Terraform, Kubernetes, and Ansible checks should be run only after their tools and required configuration are available. Review any cloud plan and estimated charges before provisioning resources.

## Security and cost

- Amazon ECR publishing is manual-only; routine GitHub pushes do not upload new AWS images.
- ECS service launch and all other billable deployment steps remain paused under the ₹0 deployment-test budget.
- Never commit AWS keys, passwords, tokens, private keys, or kubeconfig files.
- Prefer short-lived OIDC credentials and least-privilege IAM permissions.
- Review AWS resource types, region, network exposure, and cost before launching.
- Stop or delete temporary billable resources when no longer required.

## Maintainer

**Swaraj Salve** — [GitHub profile](https://github.com/swarajsalve042)

## Monitoring & Observability Lab

An advanced Prometheus and Grafana monitoring lab is maintained in [`observability/`](observability/README.md). It includes a Node.js metrics-instrumented service, Prometheus scrape configuration and alert rules, a provisioned Grafana dashboard, Docker Compose orchestration, and a GitHub Actions end-to-end validation workflow. The lab uses no AWS resources and is tested separately from the existing CI/CD application.
