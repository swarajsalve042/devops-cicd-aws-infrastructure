# Portfolio project verification audit

Last updated: 27 November 2026

This report records automated evidence from the public GitHub repositories. A successful CI workflow proves only the checks listed for that workflow; it is not a claim of production readiness or a live cloud deployment.

## DevOps repositories

### Abode DevOps Lifecycle
- Latest CI run: [#17 — successful](https://github.com/swarajsalve042/abode-devops-lifecycle/actions/runs/45950934625)
- Verified: Node.js tests, Jenkinsfile Groovy parsing, Docker image build, temporary container startup, and `/health` response.
- SQL Server portfolio workflow #2 passed on 25 November. The CI runs SQL Server scripts against a temporary SQL Server container.
- Not verified: execution on a separately provisioned Jenkins controller/agent or a production deployment.

### Jenkins and Docker
- Latest Node.js/Docker CI run: [#18 — successful](https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github/actions/runs/45950939582)
- Verified: Node.js tests, Docker image build, temporary container startup, and health endpoint.
- The Jenkinsfile has separate Groovy syntax validation.
- Not verified: execution on a live Jenkins controller/agent.

### AWS CI/CD and Infrastructure
- Latest Node.js CI: [#98 — successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953031935)
- Latest Docker build/runtime test: [#96 — successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953031975)
- Latest GHCR publishing: [#95 — successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953031930)
- Latest Terraform, Ansible, Kubernetes schema, and Jenkinsfile validation: [#7 — all jobs successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953027842)
- Latest ephemeral Kind deployment: [#2 — two replicas and Service health check successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953027834)
- Latest Observability stack end-to-end validation: [#14 — successful](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45953031956)
- Amazon ECR publishing was previously verified using GitHub OIDC, ECR login, image build, and push: [successful manual run](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623225).

## Other portfolio repositories

- [Hospital Management System — PHP syntax and PHP/MySQL integration workflows passed](https://github.com/swarajsalve042/online-medical-hospital-management-system/actions).
- [Large Relational Database — SQL Server script validation #18 passed](https://github.com/swarajsalve042/querying-large-relational-database/actions/runs/45950974841).
- [Expense Tracker — Node.js CI #19 passed](https://github.com/swarajsalve042/Expense-tracker/actions/runs/45951291978).
- [Employee Management System — Maven CI #15 passed](https://github.com/swarajsalve042/Employee-Management-System/actions/runs/45952249226).
- [E-Commerce Web Application — Maven CI #15 passed](https://github.com/swarajsalve042/E-commorce-Web-application/actions/runs/45951892177).
- [Student Management System — Maven/JUnit CI #6 passed](https://github.com/swarajsalve042/Student-Management-System/actions/runs/45952474271).

## Deployment and cost boundaries

The project owner requested a ₹0 deployment-test budget. Therefore:
- Terraform is formatted and statically validated, but no EC2 instance is provisioned.
- Ansible syntax is validated, but no real remote host is configured or modified.
- Kubernetes is deployed to a temporary Kind cluster in CI; no persistent EKS cluster is created.
- ECR push was previously run manually and verified. The workflow remains manual-only to avoid recurring uploads/storage costs.
- ECS/Fargate production service creation and a public production endpoint remain unverified and are not claimed.
- Jenkinsfile syntax is checked, but no persistent Jenkins controller/agent is provisioned.

## Completion standard

A repository is considered CI-verified when its current workflow run is successful and the workflow exercises the documented scope. A production deployment is considered complete only after the target infrastructure exists, the application is reachable, operational checks pass, and cost/security controls are confirmed. The latter has not been claimed for this portfolio.
