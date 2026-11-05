# 30-Day DevOps + AI Bootcamp

A hands-on, intermediate-level learning path designed for **3–4 hours per day** (approximately **90–120 hours**). The goal is to strengthen practical DevOps skills and build an **AI-powered DevOps Assistant** that analyzes logs and answers questions using trusted runbooks.

## Four-week plan
1. **Days 1–7 — DevOps Foundations:** Linux, Git, scripting, networking, Docker and CI/CD.
2. **Days 8–15 — Cloud DevOps:** Azure/AWS, cloud networking, Terraform, Kubernetes, Helm, GitOps and observability.
3. **Days 16–22 — AI Foundations:** Python for AI, ML basics, LLMs, prompt engineering, APIs, RAG and evaluation.
4. **Days 23–30 — AI + DevOps Integration:** design, build, containerize, test, deploy and monitor the AI DevOps Assistant.

## Daily study rhythm
- Learn concepts: 45–60 minutes.
- Guided practical lab: 90–120 minutes.
- Assignment and evidence: 30–45 minutes.
- Review: 15 minutes.

## Recommended environment
macOS host + Ubuntu 24.04 VM, Git/GitHub, Docker Desktop, Python 3.11+, Node.js LTS, Terraform, kubectl, Helm and kind/minikube. Azure/AWS accounts are optional. Avoid billable resources unless you understand the cost and have budget alerts.

### Ubuntu VM with Multipass
```bash
brew install --cask multipass
multipass launch 24.04 --name devops-lab --cpus 2 --memory 4G --disk 20G
multipass shell devops-lab
```
Inside Ubuntu:
```bash
sudo apt update
sudo apt install -y git curl wget jq tree python3 python3-pip python3-venv nginx
```

## Interactive progress dashboard

A standalone dashboard is included in [`dashboard/`](dashboard/). Open `dashboard/index.html` in a browser or read [`dashboard/README.md`](dashboard/README.md) for local run and GitHub Pages deployment instructions. It tracks daily status, hours, quiz scores, checklists, weekly milestones and capstone tasks. Progress is stored in browser localStorage; export JSON backups regularly.

## Repository structure
```text
.
├── README.md
├── ROADMAP.md
├── roadmap/30-day-roadmap.md
├── days/day-01.md ... day-30.md
├── labs/week-01 ... week-04
├── scripts/
├── capstone/
└── .github/workflows/ci.yml
```

## GitHub upload
```bash
git init
git add .
git commit -m "docs: add 30-day DevOps and AI bootcamp"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/devops-ai-30-day-bootcamp.git
git push -u origin main
```

## Safety
Never commit `.env`, passwords, API keys, private keys, kubeconfigs or Terraform state. Use `.env.example` with placeholders. Review Terraform plans and cloud costs before applying. AI recommendations must be verified by an engineer; do not allow autonomous production remediation.
