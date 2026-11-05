/* 30-day curriculum data. Edit this file to customize the roadmap. */
window.BOOTCAMP_DAYS = [
  {
    "day": 1,
    "title": "Linux Fundamentals & Environment Setup",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Linux architecture, filesystem, shell, users, permissions, processes and services.",
    "objectives": [
      "Explain kernel, shell, processes and distributions",
      "Navigate the Linux filesystem and inspect system health",
      "Manage users, groups and file permissions",
      "Inspect processes, services and logs"
    ],
    "labs": [
      "Set up Ubuntu 24.04 using Multipass on macOS (or a Linux VM)",
      "Explore /etc, /var, /home, /tmp, /usr and /opt",
      "Create a devops-lab directory with scripts, logs and config folders",
      "Install Nginx; inspect it with systemctl, curl and journalctl",
      "Create and run system-info.sh and disk-monitor.sh"
    ],
    "deliverables": [
      "scripts/system-info.sh",
      "scripts/disk-monitor.sh",
      "logs/application.log",
      "README notes with VM setup and command output"
    ],
    "checkpoint": "Explain chmod 755 vs 600; identify /etc; show Nginx status; explain df vs du."
  },
  {
    "day": 2,
    "title": "Git, GitHub & Collaboration",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Git internals, commits, branches, remotes, pull requests and conflict resolution.",
    "objectives": [
      "Configure Git identity and understand working tree/index/repository",
      "Create meaningful commits and branches",
      "Push a repository to GitHub",
      "Resolve a simple merge conflict"
    ],
    "labs": [
      "Initialize a repo for the bootcamp labs",
      "Create feature/linux-labs branch and commit scripts",
      "Push to GitHub and open a pull request",
      "Create a deliberate conflict in two branches and resolve it"
    ],
    "deliverables": [
      "GitHub repository URL",
      "At least 5 meaningful commits",
      "A pull request with summary and test evidence"
    ],
    "checkpoint": "Describe git fetch vs pull; reset vs revert; merge vs rebase."
  },
  {
    "day": 3,
    "title": "Bash Scripting & Python Automation",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Shell scripting, exit codes, arguments, pipes, Python subprocess, files and JSON.",
    "objectives": [
      "Use variables, conditionals, loops and functions in Bash",
      "Handle errors and exit codes",
      "Automate file and command tasks with Python",
      "Write scripts that are safe to rerun"
    ],
    "labs": [
      "Build a log parser that counts INFO/WARN/ERROR lines",
      "Write a Python disk-usage reporter",
      "Add command-line arguments and input validation",
      "Test with normal, empty and missing files"
    ],
    "deliverables": [
      "scripts/log_analyzer.py",
      "scripts/backup_logs.sh",
      "Sample logs and test output"
    ],
    "checkpoint": "What does set -euo pipefail do? What is an exit code?"
  },
  {
    "day": 4,
    "title": "Networking for DevOps",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "IP, CIDR, DNS, ports, TCP/UDP, HTTP, TLS, routing and diagnostic tools.",
    "objectives": [
      "Explain DNS resolution and TCP connection establishment",
      "Read CIDR ranges and identify network/broadcast addresses",
      "Use curl, dig, ping, ss and traceroute",
      "Diagnose common connection failures"
    ],
    "labs": [
      "Inspect local interfaces and routes",
      "Resolve a domain with dig/nslookup",
      "Use curl -v and openssl s_client against a test endpoint",
      "Run a local Nginx server and test ports"
    ],
    "deliverables": [
      "networking-lab.md with command outputs",
      "Network troubleshooting decision tree"
    ],
    "checkpoint": "Explain 0.0.0.0 vs 127.0.0.1; DNS A vs CNAME; TCP vs UDP."
  },
  {
    "day": 5,
    "title": "Docker Fundamentals",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Images, containers, layers, registries, volumes, networks and Dockerfiles.",
    "objectives": [
      "Explain image vs container and layered builds",
      "Build and run a container",
      "Persist data with volumes",
      "Inspect container logs, networks and resource usage"
    ],
    "labs": [
      "Install Docker Desktop for Mac",
      "Run Nginx and a small Python/Node app",
      "Build a non-root Docker image",
      "Use bind mounts and named volumes",
      "Inspect logs, exec, inspect and stats"
    ],
    "deliverables": [
      "Dockerfile",
      "compose.yaml",
      "Container run notes and screenshots"
    ],
    "checkpoint": "Explain CMD vs ENTRYPOINT; bind mount vs volume."
  },
  {
    "day": 6,
    "title": "Docker Compose & Container Security",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Multi-container development, health checks, secrets, image hygiene and least privilege.",
    "objectives": [
      "Define multi-service apps with Compose",
      "Add health checks and service dependencies",
      "Reduce image size and attack surface",
      "Avoid embedding secrets in images"
    ],
    "labs": [
      "Create API + PostgreSQL Compose stack",
      "Add health checks and persistent DB volume",
      "Use environment file locally without committing secrets",
      "Scan image with an available scanner and fix obvious issues"
    ],
    "deliverables": [
      "compose.yaml",
      ".env.example (no secrets)",
      "Container security checklist"
    ],
    "checkpoint": "Why should secrets not be baked into an image?"
  },
  {
    "day": 7,
    "title": "CI/CD with GitHub Actions",
    "week": 1,
    "weekName": "DevOps Foundations",
    "summary": "Workflow triggers, jobs, runners, artifacts, caching, environments and deployment gates.",
    "objectives": [
      "Explain CI vs continuous delivery vs deployment",
      "Write workflow YAML",
      "Run lint/test/build on pull requests",
      "Use secrets and protected environments safely"
    ],
    "labs": [
      "Create GitHub Actions workflow for Python tests",
      "Add Docker build validation",
      "Trigger on pull_request and push to main",
      "Document workflow status and failure handling"
    ],
    "deliverables": [
      ".github/workflows/ci.yml",
      "Passing workflow run",
      "Week 1 review notes"
    ],
    "checkpoint": "What is a runner? Why use PR checks?"
  },
  {
    "day": 8,
    "title": "Cloud Fundamentals: Azure & AWS",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Cloud shared responsibility, regions, AZs, IAM, compute, storage, networking and cost.",
    "objectives": [
      "Compare region, availability zone and edge location",
      "Explain IAM roles/policies and least privilege",
      "Map common Azure and AWS services",
      "Identify cost and security guardrails"
    ],
    "labs": [
      "Create a cloud service mapping table",
      "Draw a simple highly available web app architecture",
      "Review IAM/RBAC examples and identify over-permissioning",
      "Set a small budget alert if an account is available; otherwise document steps"
    ],
    "deliverables": [
      "cloud-service-mapping.md",
      "Cloud architecture diagram",
      "IAM least-privilege review"
    ],
    "checkpoint": "Compare Azure VNet and AWS VPC; role vs user."
  },
  {
    "day": 9,
    "title": "Cloud Networking & Security",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "VNet/VPC, subnets, route tables, NSGs/security groups, NAT, private endpoints and firewalls.",
    "objectives": [
      "Design public/private subnet segmentation",
      "Explain ingress/egress and stateful filtering",
      "Describe private connectivity patterns",
      "Apply network least privilege"
    ],
    "labs": [
      "Design hub-and-spoke network with workload spokes",
      "Define subnet and route table plan",
      "Write sample NSG/security group rules",
      "Document private access to a database"
    ],
    "deliverables": [
      "architecture/network-design.md",
      "Firewall and security rules matrix"
    ],
    "checkpoint": "Why keep databases private? NSG vs route table."
  },
  {
    "day": 10,
    "title": "Terraform Fundamentals",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Providers, resources, variables, outputs, state, plan/apply/destroy and dependency graph.",
    "objectives": [
      "Understand declarative IaC and Terraform lifecycle",
      "Write variables, outputs and resources",
      "Explain state and drift",
      "Use fmt, validate, plan and apply safely"
    ],
    "labs": [
      "Install Terraform",
      "Create a local lab using random/local providers or a cloud sandbox",
      "Add variables and outputs",
      "Run fmt, validate, plan and inspect state",
      "Destroy only the lab resources"
    ],
    "deliverables": [
      "terraform/main.tf",
      "variables.tf",
      "outputs.tf",
      "terraform lab README"
    ],
    "checkpoint": "What is Terraform state? Why inspect plan before apply?"
  },
  {
    "day": 11,
    "title": "Terraform Modules & Remote State",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Module design, backends, state locking, workspaces, environments and policy.",
    "objectives": [
      "Build reusable modules with clear inputs/outputs",
      "Explain remote state and locking",
      "Separate dev/stage/prod state",
      "Prevent accidental production changes"
    ],
    "labs": [
      "Create a reusable network module skeleton",
      "Create separate environment variable files",
      "Document remote backend and locking design",
      "Add validation and naming conventions"
    ],
    "deliverables": [
      "terraform/modules/network/",
      "terraform/environments/",
      "State strategy document"
    ],
    "checkpoint": "Why not share one state file across unrelated environments?"
  },
  {
    "day": 12,
    "title": "Kubernetes Core Concepts",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Control plane, nodes, Pods, Deployments, ReplicaSets, Services, ConfigMaps and Secrets.",
    "objectives": [
      "Explain Kubernetes architecture",
      "Deploy and scale a Deployment",
      "Expose an app with a Service",
      "Inspect events, logs and resource status"
    ],
    "labs": [
      "Use kind or Docker Desktop Kubernetes",
      "Deploy Nginx with 2 replicas",
      "Expose via ClusterIP and port-forward",
      "Inspect describe, logs, events and rollout history"
    ],
    "deliverables": [
      "kubernetes/deployment.yaml",
      "kubernetes/service.yaml",
      "kubectl command notes"
    ],
    "checkpoint": "Pod vs Deployment; ClusterIP vs NodePort vs LoadBalancer."
  },
  {
    "day": 13,
    "title": "Kubernetes Configuration & Storage",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Probes, requests/limits, ConfigMaps, Secrets, volumes, PVCs and StatefulSets.",
    "objectives": [
      "Configure readiness/liveness/startup probes",
      "Set CPU/memory requests and limits",
      "Mount configuration and secrets safely",
      "Explain PVC and StatefulSet use cases"
    ],
    "labs": [
      "Add probes and resources to a sample deployment",
      "Mount ConfigMap",
      "Create PVC and test persistence",
      "Document secret injection options"
    ],
    "deliverables": [
      "kubernetes/configmap.yaml",
      "kubernetes/pvc.yaml",
      "Updated deployment manifest"
    ],
    "checkpoint": "Readiness vs liveness; PV vs PVC."
  },
  {
    "day": 14,
    "title": "Helm, Ingress & GitOps",
    "week": 2,
    "weekName": "Cloud DevOps",
    "summary": "Helm charts, values, templates, ingress, release lifecycle, Argo CD/Flux concepts.",
    "objectives": [
      "Package an app as a Helm chart",
      "Use values and helpers",
      "Route HTTP traffic with ingress",
      "Explain GitOps reconciliation"
    ],
    "labs": [
      "Create a small Helm chart with values.yaml and templates",
      "Run helm lint and helm template",
      "Install/upgrade/rollback locally",
      "Draw a GitOps flow using Argo CD or Flux"
    ],
    "deliverables": [
      "helm/my-app/",
      "Ingress manifest",
      "GitOps architecture notes",
      "Week 2 review"
    ],
    "checkpoint": "helm install vs upgrade; imperative deploy vs GitOps."
  },
  {
    "day": 15,
    "title": "Observability & Incident Response",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Metrics, logs, traces, Prometheus, Grafana, alerts, SLI/SLO, MTTR and runbooks.",
    "objectives": [
      "Distinguish metrics, logs and traces",
      "Define useful SLIs and SLOs",
      "Build a basic dashboard and alert",
      "Use a structured incident response process"
    ],
    "labs": [
      "Run a sample app with Prometheus/Grafana or use a local demo",
      "Create CPU/request/error-rate panels",
      "Write an alert rule concept",
      "Draft a runbook for elevated 5xx responses"
    ],
    "deliverables": [
      "observability/dashboard-notes.md",
      "runbooks/high-5xx.md",
      "Week 2 review notes"
    ],
    "checkpoint": "What is an SLO? Golden signals?"
  },
  {
    "day": 16,
    "title": "Python for AI Engineering",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Python data structures, functions, typing, virtual environments, packages, APIs and notebooks.",
    "objectives": [
      "Build clean Python modules",
      "Use virtual environments and dependency files",
      "Read/write JSON and CSV",
      "Call a REST API and handle errors"
    ],
    "labs": [
      "Create a Python 3.11 virtual environment",
      "Build a CLI that reads JSON logs",
      "Add type hints, logging and unit tests",
      "Call a public sample API with timeout and error handling"
    ],
    "deliverables": [
      "ai-foundations/log_cli.py",
      "requirements.txt or pyproject.toml",
      "Unit tests"
    ],
    "checkpoint": "Why use a virtual environment? How handle API timeouts?"
  },
  {
    "day": 17,
    "title": "Machine Learning Concepts",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Features, labels, training/testing, supervised/unsupervised learning, overfitting and evaluation.",
    "objectives": [
      "Explain training vs inference",
      "Identify features and labels",
      "Explain overfitting and data leakage",
      "Choose basic classification/regression metrics"
    ],
    "labs": [
      "Use a small public/sample dataset",
      "Train a simple scikit-learn model",
      "Split train/test data",
      "Evaluate with suitable metrics and document limitations"
    ],
    "deliverables": [
      "notebooks/ml-basics.ipynb or ml_basics.py",
      "Model evaluation summary"
    ],
    "checkpoint": "Precision vs recall; why keep a test set?"
  },
  {
    "day": 18,
    "title": "LLMs & Generative AI",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Tokens, context windows, inference, temperature, system/user messages, hallucinations and model limits.",
    "objectives": [
      "Explain high-level LLM operation",
      "Understand tokens and context limits",
      "Choose generation settings appropriately",
      "Recognize hallucination and prompt injection risks"
    ],
    "labs": [
      "Use an approved LLM playground or local mock",
      "Compare concise vs detailed prompts",
      "Test temperature and output constraints",
      "Record failure cases and mitigations"
    ],
    "deliverables": [
      "llm-concepts.md",
      "Prompt experiment log"
    ],
    "checkpoint": "What is a context window? Why can LLMs hallucinate?"
  },
  {
    "day": 19,
    "title": "Prompt Engineering & Structured Outputs",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Instruction hierarchy, role/task/context/format, few-shot examples, decomposition and JSON schemas.",
    "objectives": [
      "Write precise prompts with acceptance criteria",
      "Use examples to shape output",
      "Request and validate structured JSON",
      "Separate trusted instructions from untrusted data"
    ],
    "labs": [
      "Create prompts to classify DevOps logs",
      "Require JSON output with severity, evidence and next steps",
      "Validate output with Pydantic",
      "Test malformed and adversarial inputs"
    ],
    "deliverables": [
      "prompts/log-triage.md",
      "schemas/incident.schema.json",
      "Validation tests"
    ],
    "checkpoint": "Why validate model output instead of trusting it?"
  },
  {
    "day": 20,
    "title": "LLM APIs & Tool Calling",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "API keys, environment variables, retries, rate limits, streaming, tool/function calling and cost control.",
    "objectives": [
      "Call an LLM API from Python",
      "Keep API keys out of source control",
      "Implement timeout/retry and usage logging",
      "Understand tool calling boundaries"
    ],
    "labs": [
      "Build a FastAPI endpoint that sends a prompt to an LLM provider",
      "Load keys from environment variables",
      "Add request validation, timeout and safe error responses",
      "Add mock mode for local testing"
    ],
    "deliverables": [
      "ai-service/ FastAPI starter",
      " .env.example",
      "API usage and security notes"
    ],
    "checkpoint": "How do you protect API keys? Why add timeouts and rate limits?"
  },
  {
    "day": 21,
    "title": "Embeddings, Vector Search & RAG",
    "week": 3,
    "weekName": "AI Foundations",
    "summary": "Embeddings, chunking, vector stores, retrieval, grounding, citations and RAG evaluation.",
    "objectives": [
      "Explain embedding similarity",
      "Design document chunking strategy",
      "Build retrieval-augmented generation flow",
      "Ground answers in retrieved source passages"
    ],
    "labs": [
      "Index a small set of DevOps runbooks/docs",
      "Retrieve top-k relevant chunks",
      "Generate answers with source references",
      "Test relevant, irrelevant and unanswerable questions"
    ],
    "deliverables": [
      "rag/ingest.py",
      "rag/retrieve.py",
      "Sample knowledge docs",
      "RAG evaluation notes"
    ],
    "checkpoint": "Why chunk documents? What should happen when retrieval finds no evidence?"
  },
  {
    "day": 22,
    "title": "AI Evaluation, Safety & Reliability",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "Golden datasets, accuracy, groundedness, latency, cost, prompt injection, privacy and human review.",
    "objectives": [
      "Define evaluation cases and metrics",
      "Measure groundedness and retrieval quality",
      "Mitigate prompt injection and data leakage",
      "Add human approval for risky actions"
    ],
    "labs": [
      "Create 15\u201320 test questions for DevOps assistant",
      "Score answer relevance and evidence",
      "Add refusal/uncertainty behavior",
      "Document actions that must never execute automatically"
    ],
    "deliverables": [
      "evaluation/test-cases.jsonl",
      "evaluation-report.md",
      "AI safety checklist"
    ],
    "checkpoint": "How evaluate RAG? Why require human approval for remediation?"
  },
  {
    "day": 23,
    "title": "Capstone Architecture & API Design",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "System boundaries, frontend/backend, ingestion, retrieval, auth, schemas and architecture decisions.",
    "objectives": [
      "Define capstone MVP and non-goals",
      "Design API contracts and data flow",
      "Choose a vector store and LLM integration strategy",
      "Document security and operational requirements"
    ],
    "labs": [
      "Create architecture diagram for AI DevOps Assistant",
      "Define /health, /analyze-log, /ask-runbook endpoints",
      "Create FastAPI project skeleton and Next.js UI skeleton",
      "Write ADRs for model, vector store and deployment"
    ],
    "deliverables": [
      "capstone/architecture.md",
      "capstone/api-contract.md",
      "Backend/frontend skeleton"
    ],
    "checkpoint": "Explain request flow from UI to retrieval to LLM to response."
  },
  {
    "day": 24,
    "title": "Build the DevOps Assistant Backend",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "FastAPI services, log parsing, RAG pipeline, Pydantic validation, errors and tests.",
    "objectives": [
      "Implement log upload/analysis endpoint",
      "Connect retrieval to runbook knowledge",
      "Return structured, evidence-backed recommendations",
      "Test failure and edge cases"
    ],
    "labs": [
      "Implement FastAPI /health and /analyze-log",
      "Parse severity, timestamps and component names",
      "Implement /ask-runbook using RAG",
      "Add tests and structured logging"
    ],
    "deliverables": [
      "backend/ source",
      "API tests",
      "Sample incident analysis output"
    ],
    "checkpoint": "Show one answer with evidence and a clear uncertainty statement."
  },
  {
    "day": 25,
    "title": "Build the Frontend & User Experience",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "Next.js UI, API integration, loading/error states, chat history and accessible design.",
    "objectives": [
      "Build dashboard and log-analysis screens",
      "Connect frontend to FastAPI",
      "Display severity, evidence and recommended checks",
      "Handle loading, empty and error states"
    ],
    "labs": [
      "Build Next.js app shell",
      "Create log input/upload form and runbook chat",
      "Render structured results with citations",
      "Add responsive layout and accessible labels"
    ],
    "deliverables": [
      "frontend/ source",
      "Screenshots",
      "Frontend integration notes"
    ],
    "checkpoint": "Demonstrate a log analysis from UI through API."
  },
  {
    "day": 26,
    "title": "Containerize & Test the Capstone",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "Multi-stage Docker builds, Compose, health checks, non-root containers and integration tests.",
    "objectives": [
      "Build frontend and backend images",
      "Use Compose for local stack",
      "Add health checks and persistent vector data where needed",
      "Scan and harden containers"
    ],
    "labs": [
      "Write Dockerfiles for frontend and backend",
      "Create Compose stack",
      "Add .dockerignore and health checks",
      "Run end-to-end smoke tests"
    ],
    "deliverables": [
      "Dockerfiles",
      "compose.yaml",
      "Container test report"
    ],
    "checkpoint": "Show clean startup, health endpoint and graceful failure."
  },
  {
    "day": 27,
    "title": "CI/CD, Quality Gates & Supply Chain",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "GitHub Actions, tests, linting, image builds, artifact tagging and deployment approvals.",
    "objectives": [
      "Build CI pipeline for frontend/backend",
      "Run tests and static checks",
      "Build and tag immutable images",
      "Use secrets and environment protection"
    ],
    "labs": [
      "Add GitHub Actions workflow",
      "Run Python and frontend checks",
      "Build Docker images on main",
      "Document image promotion and release tagging"
    ],
    "deliverables": [
      ".github/workflows/ci.yml",
      "CI run evidence",
      "Release process notes"
    ],
    "checkpoint": "What must pass before image promotion?"
  },
  {
    "day": 28,
    "title": "Deploy to Kubernetes / AKS",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "Kubernetes deployment, Helm, ingress, secrets, probes, resources and cloud identity.",
    "objectives": [
      "Deploy frontend/backend to local Kubernetes or AKS",
      "Configure Helm values and ingress",
      "Inject secrets using secure mechanisms",
      "Validate probes, resources and rollout"
    ],
    "labs": [
      "Create Helm chart for capstone services",
      "Deploy to kind/minikube; optionally AKS",
      "Configure ingress and probes",
      "Use Kubernetes Secret only for local lab; document Key Vault CSI/Workload Identity for AKS"
    ],
    "deliverables": [
      "helm/capstone/",
      "Deployment evidence",
      "Secrets and ingress design notes"
    ],
    "checkpoint": "Explain how production secrets reach pods without hardcoding."
  },
  {
    "day": 29,
    "title": "Monitoring, Runbooks & Reliability",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "Service metrics, dashboards, alerts, logs, SLOs, backup/restore and incident playbooks.",
    "objectives": [
      "Instrument API latency, errors and request counts",
      "Create dashboard and alert thresholds",
      "Write incident runbooks",
      "Perform a recovery test"
    ],
    "labs": [
      "Expose Prometheus metrics or equivalent",
      "Create dashboard for latency/error rate",
      "Simulate backend failure and recover",
      "Write runbooks for 5xx, model API outage and vector store failure"
    ],
    "deliverables": [
      "observability/",
      "runbooks/",
      "Reliability test report"
    ],
    "checkpoint": "Show alert \u2192 investigation \u2192 mitigation \u2192 verification sequence."
  },
  {
    "day": 30,
    "title": "Final Review, Demo & Portfolio Release",
    "week": 4,
    "weekName": "AI + DevOps Integration",
    "summary": "End-to-end validation, documentation, demo, architecture review and portfolio presentation.",
    "objectives": [
      "Demonstrate the product end to end",
      "Explain architecture and trade-offs",
      "Present security, reliability and cost decisions",
      "Publish a clean GitHub portfolio repository"
    ],
    "labs": [
      "Run full test checklist",
      "Record a 3\u20135 minute demo or capture screenshots",
      "Complete README with setup/deploy/troubleshooting",
      "Tag v1.0.0 and write retrospective with next steps"
    ],
    "deliverables": [
      "Working AI DevOps Assistant",
      "Architecture diagram",
      "README and demo",
      "Release tag v1.0.0",
      "Retrospective"
    ],
    "checkpoint": "Can another engineer clone, run, test and understand the project without help?"
  }
];
