# Kubernetes Project

This project demonstrates a Kubernetes setup involving Dockerized applications, namespace management with quotas, deployments, services, and ingress configurations.

# Project Overview

**Dockerize Applications**: Two applications are Dockerized, one at the root (`/`) and another in a subdirectory using specific features.
**Push Docker Images**: The images for both applications are built and pushed to a Docker Hub repository.

**Kubernetes Setup**:
**Namespaces**: Two namespaces (`ns1` and `ns2`) are created with resource quotas allowing only one deployment per namespace.
**Deployments**: Each namespace hosts a deployment. The `ns1` namespace deploys both images, while `ns2` deploys the app with additional features.
**Services**: Two services are created to expose the deployments.
**Ingress**: An ingress controller is configured to route traffic to the services using domain names `app1.example.com` and `app2.example.com`.

# Prerequisites

- Docker and Docker Hub account
- Kubernetes cluster -> Minikube
- Ingress controller (NGINX Ingress) installed -> minikube addons enable ingress

# Add entries to your local DNS /etc/hosts :
# 127.0.0.1 app1.example.com
# 127.0.0.1 app2.example.com
