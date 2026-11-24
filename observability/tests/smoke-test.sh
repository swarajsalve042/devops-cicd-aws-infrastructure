#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${BASE_URL:-http://127.0.0.1:3000}"
PROM_URL="${PROM_URL:-http://127.0.0.1:9090}"
GRAFANA_URL="${GRAFANA_URL:-http://127.0.0.1:3001}"
curl --fail --silent "$BASE_URL/health" | grep -q '"status":"ok"'
curl --fail --silent "$BASE_URL/api/orders" | grep -q 'ORD-1001'
curl --fail --silent "$BASE_URL/metrics" | grep -q 'demo_http_requests_total'
curl --fail --silent "$PROM_URL/-/ready" | grep -qi 'ready'
curl --fail --silent "$GRAFANA_URL/api/health" | grep -q '"database":"ok"'
echo "Smoke tests passed."