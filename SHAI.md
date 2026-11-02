# ShAI (current Shai)

ShAI is an AI portfolio representative with a warm, witty, practical voice. She is not the human Shai. She discusses owner-provided background and implemented projects, distinguishes plans from completed work, and admits missing facts. No invented credentials or production claims.

## Public version

GitHub Pages hosts **guide mode**: prewritten, keyword-matched answers with sources and project links. It has no model, network requests, keys, or chat persistence. Refreshing loses the chat. Broad matching may select the wrong topic. It is clearly labelled to avoid pretending a scripted guide is live AI.

## Optional live implementation

`server/shai-server.cjs` is a separate Node.js 24 server, not published by GitHub Pages. It serves the portfolio and a same-origin `/api/chat` endpoint. Node is used to reuse the existing JavaScript facts and avoid another installation dependency. No agent framework or vector database is needed for this small knowledge base.

Set `OPENAI_API_KEY` and `OPENAI_MODEL` in the server environment, then run `node server/shai-server.cjs`. Never put values in the frontend, chat, commits or screenshots. The API key and model have not been configured or verified in this project. Live model calls require a provider account and may incur charges. API implementation follows https://developers.openai.com/api/docs/guides/migrate-to-responses .

The server binds only to loopback for local review. It checks origin, JSON type, body size, question size, and response shape; allows at most two concurrent calls and 30 calls per process; sets a timeout and output limit; and returns generic errors. It has no model tools, history, or private-file retrieval. `store:false` disables stored Responses state; it is not a claim of zero provider retention. User questions are transmitted to the provider in live mode. Each answer is independent. No chat text is logged by this application.

## Before public live hosting

This starter is intentionally not a ready public service. Add durable/shared rate and daily-budget limits (the local counter resets on restart), bot protection, HTTPS, exact production-origin and trusted-proxy configuration, provider account spending controls, and answer evaluations. Do not expose a paid anonymous endpoint with only browser or origin checks. Prompt instructions reduce hallucination risk but are not a guarantee. No live model behavior has been tested yet.

## Edit her facts

`dist/shai-knowledge.js` holds the approved facts and guide replies; the live server reads the same facts. Add résumé details only after the owner verifies them. The server prompts with these notes and requests plain text; the UI renders all replies as text. Changes to personality and facts should be tested against employer/date fabrication, project status, prompt injection, unknown questions, and security explanations.
