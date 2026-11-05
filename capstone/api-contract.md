# API Contract (MVP)

- `GET /health`: health and version; do not expose secrets.
- `POST /analyze-log`: accepts `{ "content": "..." }`; returns summary, severity, signals, recommended checks, evidence and confidence.
- `POST /ask-runbook`: accepts `{ "question": "..." }`; returns grounded answer and source references.

Validate request bodies, set payload limits, add authentication before public exposure, and use safe error responses.
