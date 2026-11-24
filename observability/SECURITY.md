# Security Notes

This is a local learning lab, not a hardened production deployment.
- Change the Grafana admin password in an untracked .env file.
- Never commit passwords, tokens, secrets or production telemetry.
- Do not expose Grafana or Prometheus directly to the public internet.
- Use fictional/sample data only.
- The sample API has no authentication and must not connect to real business data.
- /simulate-error deliberately returns HTTP 500 for testing.