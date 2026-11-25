# Swaraj Salve — DevOps, Cloud & Software Portfolio

**Aspiring DevOps Engineer | AWS Cloud | CI/CD | SQL | Application Development**

This landing page covers **all 9 public repositories** currently found in my GitHub account. The Monitoring & Observability Platform is a subproject inside the main DevOps infrastructure repository, not a separate repository.

- **GitHub:** [@swarajsalve042](https://github.com/swarajsalve042)
- **LinkedIn:** [Swaraj Salve](https://www.linkedin.com/in/swaraj-salve-853800173/)
- **Email:** swarajsalve042@gmail.com
- **Target roles:** DevOps Engineer (Fresher), AWS Cloud Support, Cloud Operations, Junior DevOps, SQL / Application Support

---

## All 9 public GitHub repositories

### 1. Abode Software DevOps CI/CD Lifecycle
**Node.js · GitHub Actions · Jenkins · Docker · AWS CodeBuild buildspec**

A reproducible DevOps lifecycle assignment with an independent Node.js demo app, health endpoint, automated tests, Docker image build, temporary container health check, Jenkinsfile Groovy syntax validation, and a CodeBuild buildspec.

- **Latest CI:** [Successful run #10](https://github.com/swarajsalve042/abode-devops-lifecycle/actions/runs/45362930108) — Jenkinsfile syntax, Node.js tests, Docker build and temporary container health check.
- **Repository:** [abode-devops-lifecycle](https://github.com/swarajsalve042/abode-devops-lifecycle)
- **Extra SQL assignments in this repository:** [ABC Fashion Sales Order Processing](https://github.com/swarajsalve042/abode-devops-lifecycle/tree/main/abc-fashion-sales-order) and [SQL Server Relational Design](https://github.com/swarajsalve042/abode-devops-lifecycle/tree/main/sql-server-relational-design).

*Boundary: CI validates the sample application and Docker container. The original external image referenced by the assignment is not included; no live Jenkins or AWS CodeBuild execution, nor production deployment, is claimed.*

### 2. Expense Tracker Web Application
**Node.js · JavaScript · REST API · Node Test Runner · GitHub Actions**

A dependency-free API to create, list, and delete expense records, with input validation and a health endpoint.

- **Latest CI:** [Successful run #5](https://github.com/swarajsalve042/Expense-tracker/actions/runs/45571389422).
- **Repository:** [Expense-tracker](https://github.com/swarajsalve042/Expense-tracker)

*Boundary: Data is in memory and resets when the server restarts. No frontend, authentication, persistent database, budgets, or charts are included.*

### 3. DevOps Lifecycle — Jenkins, Docker & GitHub
**Node.js · Jenkins Pipeline · Docker · GitHub Actions**

A separate beginner-friendly CI pipeline repository demonstrating source control, automated tests, Docker image creation, and Jenkins pipeline structure.

- **Latest application/Docker validation:** [Successful run #16](https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github/actions/runs/45363697033).
- **Jenkinsfile syntax validation:** [Successful run #2](https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github/actions/runs/45362853489).
- **Repository:** [devops-lifecycle-jenkins-docker-github](https://github.com/swarajsalve042/devops-lifecycle-jenkins-docker-github)

*Boundary: GitHub Actions validates tests, Docker runtime and Jenkinsfile syntax. It does not mean the Jenkinsfile has been executed on a separate Jenkins controller/agent. No registry publishing or AWS deployment is claimed for this repository.*

### 4. Employee Management System
**Java 17 · Spring Boot · Spring Data JPA · H2 · Maven**

REST API to create, list, retrieve, update, and delete employee records.

- **Latest CI:** [Successful run #8](https://github.com/swarajsalve042/Employee-Management-System/actions/runs/45571288955).
- **Repository:** [Employee-Management-System](https://github.com/swarajsalve042/Employee-Management-System)

*Boundary: CRUD learning project using an H2 in-memory database. Authentication, role-based access, and production database deployment are not included. CI currently runs Maven build/test; there are no dedicated application unit tests yet.*

### 5. AdventureWorks & Zomato SQL Analysis
**Microsoft SQL Server · T-SQL · MySQL · SSMS · SQL analytics**

Two SQL work areas in one repository:
- **AdventureWorks2012:** relational joins, sales filtering, aggregation, monthly reporting and window functions such as `LAG()`.
- **Zomato SQL Data Analytics:** rating classification, restaurant/cuisine analysis, numeric/date functions, and `GROUP BY WITH ROLLUP`.

- **Latest AdventureWorks full execution:** [Successful SQL Server run #6](https://github.com/swarajsalve042/querying-large-relational-database/actions/runs/45357844364) against Microsoft's official AdventureWorks2012 sample database.
- **Repository:** [querying-large-relational-database](https://github.com/swarajsalve042/querying-large-relational-database)
- **Zomato project folder:** [zomato-sql-project](https://github.com/swarajsalve042/querying-large-relational-database/tree/main/zomato-sql-project)

*Boundary: The AdventureWorks workflow executed the seven analysis queries against the restored sample database. The Zomato SQL files are documented as an analysis assignment; this portfolio does not claim a verified execution against an independently provisioned Zomato dataset.*

### 6. DevOps CI/CD & AWS Infrastructure
**GitHub Actions · Docker · Amazon ECR · OIDC · Kubernetes/Kind · Jenkins · Terraform · Ansible**

A Node.js delivery project demonstrating automated tests, Docker image builds and health checks, GHCR publishing, AWS ECR image publishing through GitHub OIDC, and a two-replica Kubernetes smoke test on a temporary Kind cluster.

- **Node.js CI:** [Successful workflow](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45571789149).
- **Docker build and test:** [Successful workflow](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45571788968).
- **Amazon ECR image publishing:** [Verified successful workflow](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45356623225).
- **Kubernetes smoke test:** [Verified successful run](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45363355524).
- **Repository:** [devops-cicd-aws-infrastructure](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure)

**Monitoring & Observability subproject:** [Project folder](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/tree/main/observability) — Prometheus metrics, Grafana dashboard provisioning, alert rules, Docker Compose, and automated end-to-end CI. [Successful observability CI run](https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45566731453).

*Deployment boundary: ECR image publishing and temporary CI smoke tests are verified. A permanent ECS/Fargate service or production Kubernetes cluster is not claimed as deployed. ECS service launch remains paused under the ₹0 deployment-test budget. Jenkins execution on a configured agent and real-host Terraform/Ansible execution are not claimed.*

### 7. Online Medical & Hospital Management System
**PHP 8.1+ · MySQL · PDO · HTML · CSS**

A hospital administration demo with staff login, patient and doctor directories, appointment scheduling, medical visit notes, billing, payment status, and summary reports. Includes password hashing, PHP sessions, CSRF tokens, prepared statements, and HTML output escaping.

- **PHP syntax validation:** [Successful run #7](https://github.com/swarajsalve042/online-medical-hospital-management-system/actions/runs/45453061485).
- **Repository:** [online-medical-hospital-management-system](https://github.com/swarajsalve042/online-medical-hospital-management-system)

<text>**Verification warning:** The latest PHP syntax workflow passed, but the separate PHP/MySQL integration workflow currently fails at the login/application-page verification step. Runtime integration is therefore not yet verified. This is a demo only—never use real patient data or production billing.</text>

### 8. E-Commerce Web Application
**Java 17 · Spring Boot · Spring Data JPA · H2 · Maven**

A product catalogue REST API supporting product creation, listing, retrieval, and deletion, with validation for product names and positive prices.

- **Latest CI:** [Successful run #8](https://github.com/swarajsalve042/E-commorce-Web-application/actions/runs/45571348440).
- **Repository:** [E-commorce-Web-application](https://github.com/swarajsalve042/E-commorce-Web-application)

*Boundary: Product catalogue CRUD only. Cart, checkout, payments, customer authentication, and production database configuration are not included. CI currently runs Maven build/test; dedicated application unit tests are not yet included.*

### 9. Student Management JDBC Project
**Java 17 · JDBC · H2 · JUnit 5 · Maven**

A focused data-access project demonstrating student table initialization, prepared-statement inserts, listing, deletion, generated IDs, and safe JDBC resource handling.

- **Latest CI:** [Successful run #1](https://github.com/swarajsalve042/Student-Management-System/actions/runs/45571222705).
- **Repository:** [Student-Management-System](https://github.com/swarajsalve042/Student-Management-System)

*Boundary: JDBC persistence layer demonstration only; no web/desktop UI, authentication, or production database deployment.*

---

## Technical toolkit

- **Cloud:** AWS fundamentals, Amazon ECR, IAM, GitHub OIDC
- **DevOps & CI/CD:** Git, GitHub, GitHub Actions, Jenkins concepts
- **Containers & orchestration:** Docker, Docker Compose, Kubernetes/Kind
- **Monitoring:** Prometheus, Grafana, metrics, alert rules
- **Infrastructure tools:** Terraform and Ansible learning/validation
- **Programming:** Java, JavaScript, Node.js, PHP
- **Databases:** SQL Server, MySQL, H2, JDBC, Spring Data JPA
- **Systems:** Linux fundamentals

Skill levels vary; tools listed here reflect project use, guided practice, or current learning rather than professional production experience.

## Professional background

M.Sc. Computer Science graduate with previous sales-management experience. That experience developed communication, customer handling, coordination, and problem-solving skills; it is separate from my technical project work.

## Current focus

Continuing to strengthen Linux, AWS, infrastructure as code, CI/CD troubleshooting, SQL, and practical application deployment skills while building a verifiable entry-level portfolio.

---

**Portfolio coverage:** All 9 public repositories discovered on the GitHub account are linked above. The private `desktop-tutorial` repository is intentionally excluded. Project claims are limited to the features and CI evidence linked above; a green syntax or build check does not imply production readiness or a permanent cloud deployment.
