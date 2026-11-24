# Architecture

~~~mermaid
flowchart LR
  U[User or test client] --> A[Node.js demo API]
  A -->|/metrics| P[Prometheus]
  P -->|PromQL| G[Grafana]
  R[Alert rules] --> P
  CI[GitHub Actions] --> A
  CI --> P
  CI --> G
~~~

The app exposes health, sample business traffic, an intentional test error and Prometheus metrics. Prometheus scrapes the app, evaluates alert rules and serves metrics to Grafana. GitHub Actions runs tests and validates the full stack in a temporary runner. No cloud resources are required.