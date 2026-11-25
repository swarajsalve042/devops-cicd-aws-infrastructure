#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${BASE_URL:-http://127.0.0.1:3000}"
PROM_URL="${PROM_URL:-http://127.0.0.1:9090}"
GRAFANA_URL="${GRAFANA_URL:-http://127.0.0.1:3001}"

check() {
  local name="$1"
  shift
  if "$@"; then
    echo "PASS: $name"
  else
    echo "FAIL: $name" >&2
    exit 1
  fi
}
check "Application health endpoint" bash -c 'curl --fail --silent "$1/health" | grep -q "\"status\":\"ok\""' _ "$BASE_URL"
check "Orders API" bash -c 'curl --fail --silent "$1/api/orders" | grep -q "ORD-1001"' _ "$BASE_URL"
check "Application metrics endpoint" bash -c 'curl --fail --silent "$1/metrics" | grep -q "demo_http_requests_total"' _ "$BASE_URL"
check "Prometheus readiness" bash -c 'curl --fail --silent "$1/-/ready" | grep -qi "ready"' _ "$PROM_URL"
check "Grafana health API" curl --fail --silent "$GRAFANA_URL/api/health" --output /dev/null
echo "Smoke tests passed."