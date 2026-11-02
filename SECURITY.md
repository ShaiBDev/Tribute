# Security model

This public portfolio is a local-only simulation. Its browser policy blocks network connections, external scripts, frames, forms, and plugins. All assets are served from the same origin. Input uses text rendering rather than HTML insertion. Fictional sample data only. No API keys, cookies, analytics, external fonts, backend, or persistent request storage.

## Checks

Run `node check.cjs`, `node scripts/security-check.cjs`, and `node scripts/workflow-check.cjs`. The workflow checks execute real event handlers in a minimal DOM; they are not browser integration tests. Credential scanning is heuristic, and source pattern checks are regression checks, not a comprehensive security audit.

GitHub Actions checks pull requests with read-only permissions. Only a successful main-branch check can proceed to deployment, in a separate job with Pages-specific permissions. Actions are pinned to full commit IDs. Only the four public files in `dist` are uploaded; documentation, tests, Git metadata, and environment files are excluded.

## Repository owner settings

Enable GitHub secret scanning and push protection where available. Protect `main` with required checks and pull-request review. Select GitHub Actions under Settings → Pages, enforce HTTPS, and restrict the `github-pages` environment to `main`. These account/repository settings are separate from code and must be verified in GitHub; this file does not enable them.

## Limits

Client-side approvals are demonstrative and can be bypassed by a visitor editing their own browser. They authorize no real work. GitHub Pages does not offer arbitrary security response headers, so the policy uses HTML meta. Frame-ancestor restrictions cannot be enforced through that meta policy. If anti-framing or custom response headers become mandatory, move hosting to a service with header configuration.

For live AI, move all credentials to a server, repeat validation there, validate model output, authenticate real approvals, add durable audit records, rate and spending limits, and treat all model/user content as untrusted. Never rely on a prompt or client-side state to authorize an integration.

Report concerns privately through GitHub private vulnerability reporting if the owner enables it. Do not post secrets or personal data in public issues.
