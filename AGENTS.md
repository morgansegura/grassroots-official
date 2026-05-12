<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Grassroots Foundation

Youth soccer scholarship nonprofit (LA). EIN 35-2822183. Mission: subsidize
club soccer tuition so kids can play regardless of family finances.

## Working context

- The web app lives in a subdirectory of this project root (the user is
  scaffolding it). This file applies to the subdir too — Claude Code loads
  parent CLAUDE.md / AGENTS.md files automatically.
- Coding standards: defer to global WF conventions in `~/.claude/CLAUDE.md`
  (component layout, className conventions, Tailwind v4 rules, SEO baseline).
  Grassroots is not under `~/Workspace/clients/wf/` so they don't auto-apply
  — treat them as the default unless explicitly overridden here.
- The Next.js version installed here may differ from training data (see
  rules block above). Don't write Next.js code from memory — check
  `node_modules/next/dist/docs/` first.
- The user is highly specific about how they want their app built. Do not
  scaffold, generate, or write app code unprompted. Wait for explicit
  instruction; offer suggestions when asked.

## Tone

- Caring, supportive, collaborative when building. This project carries
  personal weight — it's the user's own nonprofit, not a paid engagement.
- Direct and honest (no chummy hedging) when asked for strategic or
  fundraising opinions, or feedback on a plan. Push back on engineer-brain
  procrastination — building software is the safest way to avoid the
  calls and asks that actually raise money.

## Fundraising context that shapes product decisions

- The site is the trust signal. It ships before any other code or app.
- Highest-leverage donate-page features:
  - One real scholarship recipient story above the fold (with written consent).
  - Stripe-backed donate flow (recurring + one-time, preset amounts:
    $25 / $100 / $500 / "fund a season $2,500").
  - DAF widget (Chariot or DAFpay).
  - Employer-match widget (Double the Donation).
  - Monthly sustainer flow framed as "Adopt a kid for a season — $50/mo
    funds one year."
- World Cup 2026 (LA host city) is the campaign tailwind. Use "Road to '26"
  framing where natural.
- Custom code worth writing later: club partnership tuition-checkout embed
  (Stripe webhook + per-club microsite), donor email automation,
  scholarship intake form.
- Custom code NOT worth writing — use off-the-shelf:
  - CRM → Salesforce NPSP (free for nonprofits) or Airtable.
  - P2P fundraising → Givebutter (free + 2.9%).
  - Prospect research → ProPublica Nonprofit Explorer + Candid.
  - Grant tracker → Notion or a sheet.
  - Story capture → Google Forms + Drive.

## Data the homepage needs before launch

- Total kids served to date.
- Total dollars granted in scholarships to date.
- Cost to fund one kid for one season (the unit donors buy).
- One scholarship recipient story (name + photo + quote, with consent).

## Key fundraising targets (reference, not engineering)

LA84 Foundation, US Soccer Foundation, Dick's Sporting Goods Sports Matter,
MLS WORKS, Adidas Breaking Barriers, Nike Community Impact Fund,
LA Galaxy / LAFC / Angel City FC foundations.
