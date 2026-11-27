# Kubernetes deployment manifests

The manifests in this directory define the Node.js application Deployment and ClusterIP Service.

## Automated verification

- `deployment-ci.yaml` is applied to a temporary Kind cluster in GitHub Actions.
- The workflow waits for two replicas to become ready.
- It checks the Deployment, Pods, Service, and the application's `/health` endpoint through the Service.
- The Kind cluster is temporary and is removed when the workflow finishes.

The separate infrastructure workflow validates `deployment.yaml` against Kubernetes schemas.

## Important deployment boundary

A successful Kind smoke test proves that the manifests and application work in a temporary CI cluster. It does not mean the application is deployed to Amazon EKS or another persistent Kubernetes cluster.

The production-oriented `deployment.yaml` references the ECR image in `ap-south-1`. A live cluster, image-pull permissions, networking, ingress/load balancer, secrets, monitoring, and ongoing operating costs must be reviewed before a cloud deployment.

No EKS cluster or billable cloud infrastructure is created by these workflows. This is intentional under the ₹0 deployment-test budget.
