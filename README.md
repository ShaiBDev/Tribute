# Tribute — Applied AI Portfolio

Two interactive prototypes exploring operations analytics and human-supervised workflow automation, built with AI assistance. Dark, responsive portfolio design with fictional business data and inspectable architecture notes.

## Try locally

Open `dist/index.html`. No installation, API key, or account required.

**Current capability:** deterministic analytics and keyword-based workflow simulation. No live AI model, external business integrations, or real actions. Do not present this as a production AI deployment.

## Meet ShAI (current Shai)

An interactive portfolio guide with a warm, witty voice, source notes, project links, question prompts, and typed questions. The public site uses labelled prewritten guide answers, not live model inference. An optional local live-AI server is implemented separately; credentials and public server hosting are not configured. See [SHAI.md](SHAI.md) for architecture and remaining steps.

## Demos

- **Operations Command Center:** team/date filters, KPI calculations, request-volume charts, explicit risk rules, executive briefing, and CSV export.
- **Workflow Automation Studio:** validated input, structured classification, response draft, approve/reject controls, and session activity log. Editing a request invalidates its pending approval.

## Verification

With Node.js 24:

```sh
node check.cjs
node scripts/security-check.cjs
node scripts/workflow-check.cjs
```

Checks cover calculations, routing, input limits, approval transitions, safe rendering patterns, publish-file allowlisting, browser policy, and common credential patterns. They are targeted regression checks, not proof that every vulnerability has been eliminated.

## Deploy

In repository Settings → Pages, choose **GitHub Actions** as the source. The included workflow tests pull requests and deploys `dist` from `main` only after checks pass. No custom deployment secret is required. Repository protections and secret-scanning settings require owner configuration; see [SECURITY.md](SECURITY.md).

Deployment is not confirmed until the workflow succeeds and its returned URL has been checked. No live URL is claimed here.

See [PROJECT_GUIDE.md](PROJECT_GUIDE.md) for architecture and an honest interview walkthrough. Live Python/API integration and a verified LinkedIn link remain next steps.
