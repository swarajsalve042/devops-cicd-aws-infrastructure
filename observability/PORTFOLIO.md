# Portfolio Entry — DevOps Monitoring & Observability Platform

## Project summary
Designed an advanced monitoring lab that instruments a Node.js service and collects, queries, visualizes and validates application telemetry using Prometheus and Grafana.

## Implemented in the repository
- Node.js HTTP service with health and sample business endpoints.
- Prometheus counters, process uptime gauge and request-duration histogram.
- Prometheus scrape configuration and alert rules for target availability, HTTP 5xx ratio and p95 latency.
- Grafana provisioning for a Prometheus data source and an overview dashboard.
- Docker Compose orchestration for the application, Prometheus and Grafana.
- GitHub Actions workflow for unit tests, Prometheus config/rule validation, Docker build, stack startup, readiness checks, scrape verification and cleanup.

## Technologies
Node.js, Prometheus, PromQL, Grafana, Docker, Docker Compose, GitHub Actions, YAML, Linux shell.

## Evidence policy
The source files and workflow are committed to this repository. Mark runtime checks as verified only after the GitHub Actions run completes successfully. A successful temporary-runner test is not a permanent production deployment. No AWS resources are used.

## LinkedIn project description
Built a DevOps Monitoring & Observability Platform using Prometheus, Grafana, Docker Compose and GitHub Actions. Instrumented a Node.js service with custom Prometheus metrics, configured scraping and alert rules for service availability, HTTP errors and request latency, and provisioned a Grafana dashboard. Added automated tests and CI validation for configuration, container build, service readiness and metrics collection.

**Project repository:** https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/tree/main/observability
