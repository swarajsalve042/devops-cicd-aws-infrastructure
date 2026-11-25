# Portfolio Entry — DevOps Monitoring & Observability Platform

## Project summary
Designed and implemented an advanced monitoring lab that instruments a Node.js service and collects, queries, visualizes and validates application telemetry using Prometheus and Grafana.

## Implemented
- Node.js HTTP service with health and sample business endpoints.
- Custom Prometheus counters, process uptime gauge and request-duration histogram.
- Prometheus scrape configuration and alert rules for target availability, HTTP 5xx ratio and p95 latency.
- Grafana provisioning for a Prometheus data source and an overview dashboard.
- Docker Compose orchestration for the application, Prometheus and Grafana.
- GitHub Actions CI for unit tests, Prometheus config/rule validation, Docker image build, temporary stack startup, readiness checks, scrape verification, smoke tests and cleanup.

## Technology stack
Node.js, Prometheus, PromQL, Grafana, Docker, Docker Compose, GitHub Actions, YAML and shell scripting.

## Verified evidence
- Observability Platform CI run #9 completed successfully: https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45566731453
- Verified in that run: application unit tests, Compose validation, Prometheus configuration and alert-rule validation, Docker image build, temporary monitoring-stack startup/readiness, Prometheus scrape/metrics checks, smoke tests and cleanup.
- On the subsequent README update commit, Node.js CI, Docker Build and Test, and Publish Docker image to GHCR completed successfully: https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions
- The latest Observability Platform CI run for that README update was still in progress at the time this file was updated. Check the Actions page for its final result.

## Scope and honest limitations
The monitoring stack was started and tested on a temporary GitHub Actions runner. This verifies the CI test environment; it does not mean the services are hosted permanently or publicly available. No production AWS deployment or paid cloud resources are claimed. The project is designed to be reproducible locally with Docker Compose.

## LinkedIn project description
Built a DevOps Monitoring & Observability Platform using Prometheus, Grafana, Docker Compose and GitHub Actions. Instrumented a Node.js service with custom Prometheus metrics, configured scraping and alert rules for service availability, HTTP errors and request latency, and provisioned a Grafana dashboard. Added automated CI checks for application tests, configuration validation, container build, service readiness, metrics collection and smoke testing.

**Repository:** https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/tree/main/observability
**CI evidence:** https://github.com/swarajsalve042/devops-cicd-aws-infrastructure/actions/runs/45566731453
