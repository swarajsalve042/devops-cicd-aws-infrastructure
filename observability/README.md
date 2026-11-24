# DevOps Monitoring & Observability Platform

Advanced monitoring lab using Node.js, Prometheus, Grafana, Docker Compose and GitHub Actions.

## Capabilities
- Prometheus counters, uptime gauge and request-latency histogram.
- Prometheus scraping and alert rules for target downtime, high error ratio and high p95 latency.
- Provisioned Grafana data source and dashboard.
- Docker Compose stack with application health checks.
- GitHub Actions unit tests, Prometheus configuration checks, image build and end-to-end smoke tests.

## Architecture
See docs/architecture.md.

## Quick start
Requirements: Docker Engine with Docker Compose plugin.

~~~bash
cp .env.example .env
# Change GRAFANA_ADMIN_PASSWORD in .env.
docker compose up -d --build
docker compose ps
~~~

Open the application at localhost:3000, Prometheus at localhost:9090 and Grafana at localhost:3001. Grafana username is admin; use the password in .env.

## Demo endpoints
| Endpoint | Purpose |
|---|---|
| / | API information |
| /health | Health check |
| /api/orders | Sample business endpoint |
| /metrics | Prometheus metrics |
| /simulate-error | Intentional HTTP 500 for alert experiments |

The error endpoint is intentionally included for testing, not a real incident generator.

## Metrics
- demo_http_requests_total: request counter labeled by route and status.
- demo_http_request_duration_seconds: request latency histogram.
- demo_app_uptime_seconds: process uptime gauge.
- demo_app_errors_total: HTTP 5xx counter.
- demo_app_requests_total: total requests.

## Alert rules
- DemoAppTargetDown: scrape target down for one minute.
- DemoAppHighErrorRate: five-minute HTTP 5xx ratio above 5 percent for two minutes.
- DemoAppHighLatency: p95 latency above 500 ms for five minutes.

## CI evidence
The workflow at .github/workflows/observability-ci.yml runs tests, validates Prometheus config and rules, builds the app image, starts the full stack, checks app/Prometheus/Grafana readiness, verifies Prometheus scraping and runs smoke tests. It always removes the temporary containers.

A successful GitHub Actions run verifies that workflow on a temporary runner. It does not mean a permanent server, cloud deployment, notification channel or production monitoring service is running.

## Cost and security
No AWS resources or paid cloud services are required. Change the local Grafana password, keep .env uncommitted, do not expose Grafana or Prometheus publicly, and use fictional telemetry only.

## Learning outcomes
Prometheus instrumentation, PromQL, Grafana provisioning, alert design, Docker Compose networking, health checks, CI automation and incident troubleshooting.