# Operations Runbook

## Start locally
1. Copy .env.example to .env.
2. Set a unique local Grafana password in .env.
3. Run docker compose up -d --build.
4. Check docker compose ps.

## Endpoints
- App: http://localhost:3000
- App health: http://localhost:3000/health
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001 (admin / password from .env)

## Generate sample traffic
- GET /api/orders for a successful request.
- GET /simulate-error for an intentional HTTP 500.
- GET /metrics to inspect raw Prometheus metrics.

## Troubleshooting
1. Inspect docker compose ps and docker compose logs --tail=100.
2. Check /health on the app and /-/ready on Prometheus.
3. Open Prometheus Targets and verify demo-app is UP.
4. Check Grafana data source health and the provisioned DevOps Observability dashboard.
5. Validate Prometheus configuration with promtool check config.

## Stop
Run docker compose down -v to stop containers and remove local monitoring data.