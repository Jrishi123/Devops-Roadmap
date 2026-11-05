# Capstone Architecture

```text
Engineer -> Next.js UI -> FastAPI API
                         |-> Log parser
                         |-> RAG service -> document chunks -> vector index
                         |-> LLM provider
Observability: structured logs + metrics + dashboards
Delivery: GitHub Actions -> container images -> Helm -> Kubernetes / AKS
Secrets: environment injection locally; managed identity / Key Vault CSI or equivalent in cloud
```

Treat logs and retrieved documents as untrusted. Validate model output, cite evidence, return insufficient-evidence responses when needed, and require human approval for operational changes.
