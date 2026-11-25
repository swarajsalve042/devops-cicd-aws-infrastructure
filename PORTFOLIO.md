# Swaraj Salve — DevOps & Cloud Portfolio

**Aspiring DevOps Engineer | AWS Cloud | CI/CD | Docker | Monitoring**

M.Sc. Computer Science graduate building practical projects around CI/CD automation, containerization, cloud image delivery, application development, and observability. This portfolio links to working repositories and their automated validation evidence.

- **GitHub:** [@swarajsalve042](https://github.com/swarajsalve042)
- **LinkedIn:** [Swaraj Salve](https://www.linkedin.com/in/swaraj-salve-853800173/)
- **Email:** swarajsalve042@gmail.com
- **Target roles:** DevOps Engineer (Fresher), AWS Cloud Support, Cloud Operations, Junior DevOps, Technical Support

---

## Featured DevOps projects

### 1. DevOps Monitoring & Observability Platform
**Prometheus · Grafana · Docker Compose · Node.js · GitHub Actions**

An end-to-end monitoring lab with application metrics, Prometheus scraping, alert rules, a provisioned Grafana dashboard, container orchestration, and automated smoke validation.

- Instrumented HTTP request counts, latency, uptime, and errors.
- Added alert rules for target downtime, elevated error rate, and high p95 latency.
- Automated tests, configuration checks, image build, stack startup, readiness, metrics checks, and smoke tests in CI.
- **Validation:** [Successful observability CI run](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45566731453).
- **Code:** [Open project folder](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/tree/main/observability) · [Project README](observability/README.md)

### 2. DevOps CI/CD & AWS Infrastructure
**GitHub Actions · Docker · AWS ECR · OIDC · Kubernetes · Jenkins · Terraform · Ansible**

A Node.js application delivery project demonstrating automated tests, Docker image builds, container health checks, GHCR publishing, AWS ECR image publishing through GitHub OIDC, and Kubernetes smoke testing on a temporary Kind cluster.

- CI workflows validate the Node.js app and build/run its container.
- AWS ECR image publishing uses short-lived GitHub OIDC credentials rather than stored AWS access keys.
- A two-replica Kubernetes smoke test was verified on an ephemeral Kind cluster.
- **Validation:** [ECR publishing workflow](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623225) · [Kubernetes smoke test](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45363355524).
- **Code:** [Repository](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure)

**Deployment boundary:** The image-publishing and temporary CI smoke tests are verified. A permanent ECS/Fargate service or production Kubernetes cluster is not claimed as deployed. Cloud service launch remains paused to respect a ₹0 deployment-test budget. Jenkins execution on a configured agent and real-host Terraform/Ansible execution are not represented as completed.

---

## Application development projects

These are focused portfolio applications with CI workflows. They are learning projects, not production systems.

### 3. E-Commerce Web Application
**Java 17 · Spring Boot · Spring Data JPA · H2 · Maven · GitHub Actions**

A product catalogue REST API supporting product creation, listing, retrieval, and deletion, with validation for product names and positive prices.

- **CI evidence:** [Successful Maven workflow](https://github.com/swarajsalve042/E-commorce-Web-application/actions/runs/45571348440)
- **Repository:** [E-Commerce Web Application](https://github.com/swarajsalve042/E-commorce-Web-application)

*Scope note: cart, checkout, payments, authentication, and production database integration are not included.*

### 4. Employee Management System
**Java 17 · Spring Boot · Spring Data JPA · H2 · Maven · GitHub Actions**

A REST API for creating, listing, retrieving, updating, and deleting employee records.

- **CI evidence:** [Successful Maven workflow](https://github.com/swarajsalve042/Employee-Management-System/actions/runs/45571288955)
- **Repository:** [Employee Management System](https://github.com/swarajsalve042/Employee-Management-System)

*Scope note: authentication, role permissions, and production database integration are not included.*

### 5. Expense Tracker API
**Node.js · JavaScript · REST API · Node Test Runner · GitHub Actions**

A lightweight API to check service health and create, list, and delete expense records, with input validation and automated tests.

- **CI evidence:** [Successful npm test workflow](https://github.com/swarajsalve042/Expense-tracker/actions/runs/45571389422)
- **Repository:** [Expense Tracker](https://github.com/swarajsalve042/Expense-tracker)

*Scope note: records are held in memory and reset when the process restarts; persistent storage, authentication, and a frontend are not included.*

### 6. Student Management JDBC Project
**Java · JDBC · H2 · JUnit 5 · Maven · GitHub Actions**

A focused JDBC data-access project demonstrating student table initialization, prepared-statement inserts, listing, deletion, and resource handling.

- **CI evidence:** [Successful Maven/JUnit workflow](https://github.com/swarajsalve042/Student-Management-System/actions/runs/45571222705)
- **Repository:** [Student Management System](https://github.com/swarajsalve042/Student-Management-System)

*Scope note: this is a JDBC layer demonstration, not a complete web or desktop application.*

---

## Technical toolkit

- **Cloud:** AWS fundamentals; Amazon ECR; IAM; GitHub OIDC
- **DevOps & CI/CD:** Git, GitHub, GitHub Actions, Jenkins concepts
- **Containers & orchestration:** Docker, Docker Compose, Kubernetes/Kind
- **Monitoring:** Prometheus, Grafana, metrics, alert rules
- **Infrastructure tools:** Terraform and Ansible learning/validation
- **Programming & data:** Java, JavaScript, Node.js, SQL, JDBC, Spring Boot
- **Systems:** Linux fundamentals

Skill levels vary; tools listed here reflect project use, guided practice, or current learning rather than professional production experience.

## Professional background

M.Sc. Computer Science graduate with previous sales-management experience. That experience developed communication, customer handling, coordination, and problem-solving skills; it is separate from my technical project work.

## Current focus

Continuing to strengthen Linux, AWS, infrastructure as code, CI/CD troubleshooting, and practical deployment skills while building a verifiable entry-level DevOps portfolio.

---

*Project claims are intentionally limited to the features and CI checks linked above. A green CI run confirms the listed automated checks, not production readiness or a permanent cloud deployment.*
