# Applied AI portfolio — prototype foundation

Two interactive, fictional business demonstrations in a dependency-free static site. Built with AI assistance. These are prototypes, not production deployments or evidence of measured business impact.

## Run and check

Open `dist/index.html` in a browser. With Node installed, run `node check.cjs` to check business calculations and classification. Publish the contents of `dist` with any static host, including GitHub Pages. No install step or API key is needed.

## Operations Command Center

Eight weeks of fictional records for three service teams feed filters, weighted SLA, request volume, resolution rate, net backlog change, risk rules, and an executive briefing. Compare the selected window with the preceding equal window. The table and CSV export let a reviewer inspect the evidence. Net backlog change is not total outstanding backlog.

The briefing is deterministic text assembled from calculated results. It is **not generative AI**. This keeps the first prototype free, reproducible, and honest while establishing the data contract for a future AI integration.

## Workflow Automation Studio

Input → validation → keyword classification → structured result → draft → human approval → simulated routing. Ambiguous requests go to manual triage. Editing the input invalidates its pending draft; approval cannot be reused. Logs are in browser memory and disappear on reload. No messages are sent. No input is uploaded. This is a workflow simulation, not an autonomous AI agent.

## Security boundaries

- No credentials, external APIs, persistence, or real actions in this version.
- Input length is checked; user-derived content renders through textContent rather than HTML.
- A production backend must repeat validation. Browser checks are for demonstration and are bypassable.
- Durable approval, identity verification, authorization, rate limits, audit logs, and privacy review must precede real integrations.

## Next phase: Python API and live AI

Add FastAPI endpoints `/api/operations/summary` and `/api/workflow/analyze`. Store the provider key only in server environment variables. Use an explicit JSON response schema, check model output, enforce limits and timeouts, and keep the deterministic calculations as the numerical source of truth. Never trust a model to authorize an action. Keep anonymous public access rate-limited with a daily spending cap and a free fallback mode.

The frontend currently has **no live AI/API integration**. Do not advertise it as completed. A provider, model, hosting plan, and credentials still need selection. Verify current provider documentation when adding this service.

## Suggested GitHub organization

Start with one repository, `applied-ai-portfolio`, containing this folder. This is easier to maintain than three repos at this stage. Commit no `.env` files. Publish `dist` using GitHub Pages or a static-host deployment workflow. GitHub creation and verified repository/profile URLs are still pending.

## Interview walkthrough

1. State the business problem and show the fictional-data label.
2. Change team and date filters; inspect how the calculated KPIs and chart change.
3. Generate a briefing and trace its figures to the table.
4. Load a workflow example; explain category, priority, routing, and uncertainty.
5. Change the input after analysis to demonstrate approval invalidation.
6. Approve a simulation; show the activity log and explain the lack of external side effects.
7. Explain the future API boundary and production controls.

Suggested honest phrasing: “I used AI-assisted development to create and review an interactive prototype. It demonstrates deterministic analytics and a human approval workflow. Live model integration is the next development phase.” Only claim personal testing after you perform the walkthrough yourself.

## Remaining personalization

Provide your preferred public name, professional headline, LinkedIn URL, and GitHub profile. These are intentionally not guessed. No repository or contact link is fabricated.
