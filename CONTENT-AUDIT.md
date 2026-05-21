# Content audit — Sales Strategy vs Sales-to-Onboarding

**Date:** 2026-05-21
**Purpose:** Map current content on both pages, identify overlap and misplacement, propose a clean split.

---

## 1. Where each page sits today

### Sales Strategy (`reports/sales-strategy.html`)

| # | Section | Anchor | What it covers |
|---|---|---|---|
| 1 | Cover | `#top` | How Aryze turns activity into qualified opportunities |
| 2 | Strategic shift | `#change` | Avoid broad selling → target segment-led selling |
| 3 | Channels & qualification | `#entry` | 7 channels (agents, memberships, events, etc.) + qualification standard |
| 4 | Origination model | `#origination` | Agents and memberships as access layer + agent quality test |
| 5 | Operating flow | `#flow` | 6-stage sales flow: Introduction → One-pager → Meeting → Call 1 → Risk review → Owned progression |
| 6 | Sales motions | `#products` | 3 products × 3 motions (Pay by Bank commercial-led, Factory product-led, Digital Cash enterprise-led) |
| 7 | Market focus | `#markets` | Priority markets per product |
| 8 | Pipeline gates | `#pipeline` | 4 gates: Prioritise / Segment / Own / Progress |
| 9 | Next-cycle priorities | `#next-steps` | Matrix: priority × strategic role × commercial focus × success signal |
| 10 | Scorecard | `#scorecard` | How management judges the strategy |
| 11 | Source material | `#source-material` | PDFs: Sales Analysis, ICP, VPC, Segment Analysis, Product Suite |

### Sales-to-Onboarding (`reports/sales-onboarding.html`)

| # | Section | Anchor | What it covers |
|---|---|---|---|
| 1 | Cover | `#top` | A controlled path from qualified interest to onboarding start |
| 2 | Handoff standard | `#change` | Informal handoff → readiness-led handoff |
| 3 | Entry points | `#entry` | 6 entry points + handoff packet |
| 4 | Readiness flow | `#flow` | 6-stage onboarding flow: Qualified → Context → Readiness review → KYB → IT/legal → Handoff |
| 5 | Three handoff paths | `#products` | 3 products × 3 implementation paths |
| 6 | Readiness reviews | `#calls` | 2 calls: Commercial readiness review + Implementation readiness review |
| 7 | Onboarding Readiness Rules | `#rules` | 6 gates: Qualified opp / Handoff packet / Implementation path / KYB-ready / Tech+legal review / Onboarding-ready |
| 8 | Ownership model | `#ownership` | 4 roles: Commercial / Legal / IT / Account management |
| 9 | Follow-up meetings | `#follow-up` | 4 types of follow-up |
| 10 | What must be true | `#readiness` | Commercial / Compliance / Technical / Handoff readiness checklists |
| 11 | Measurement | `#measurement` | Conversion / Speed / Quality / Decision question |

---

## 2. Overlap and misplacement issues

### Structural mirror

Both pages share an identical template:

| Strategy section | Onboarding section | Issue |
|---|---|---|
| Strategic shift (`#change`) | Handoff standard (`#change`) | Same template, different content — OK but feels repetitive |
| 6-stage flow (`#flow`) | 6-stage flow (`#flow`) | Both have 6 stages. Strategy = sales pipeline. Onboarding = readiness path. Reader confusion likely. |
| Three products (`#products`) | Three products (`#products`) | Same products, different angle (sales motion vs. handoff focus). Risk of duplication. |
| 4 gates (`#pipeline`) | 6 gates (`#rules`) | Different but both feel like "operating rules" |
| Scorecard | Measurement | Both measure success. Different KPIs but same purpose. |

→ Not technically wrong, but visually and structurally they look like **the same page with different labels**. That likely caused the impression that "ChatGPT failed."

### Content actually on the wrong page

**On Sales Strategy → could move to Onboarding:**

- `#flow` stage 5: "Risk + stakeholder review — Clarify the decision path, buyer maturity and commercial risks before the opportunity slows down" — this is closer to **handoff readiness** than sales motion. In Onboarding's flow it appears as stage 3 ("Readiness review") and stage 5 ("IT/legal alignment").
- `#pipeline` gate 3 ("Owner and next date") — operating discipline that applies just as much to onboarding as to sales.

**On Sales-to-Onboarding → could move to Strategy:**

- `#entry` entry point "Qualified opportunity — Sales has confirmed product fit, use case and credible customer intent" — this is **sales output**, not onboarding input. Belongs in Strategy as the definition of "qualified."
- `#entry` entry point "Commercial commitment — The customer has agreed a concrete next step or implementation conversation" — same; sales-side concept.

### Content missing from both

**Missing from Sales Strategy:**

- Explicit ICP per product (currently only linked as PDF)
- Qualification framework (what does "qualified" actually mean — BANT, fit/intent/timing, etc.)
- Buyer personas per product (the CLAUDE.md mentions Payments Operations Lead, Builder/CTO, Executive Sponsor — none of those appear here)
- Win/loss criteria
- Sales team structure (who owns what)
- Pricing discipline / discount authority

**Missing from Sales-to-Onboarding:**

- Concrete KYB document checklist (what must the customer produce?)
- Handoff packet template (what's in it line-by-line — currently described abstractly)
- SLA / time targets per stage (today there are no dates anywhere — "speed" is listed as a metric but not defined)
- Escalation paths when an onboarding stalls
- Who owns the customer relationship between sales close and onboarding live (continuity)

---

## 3. Proposed clean split

### Sales Strategy — should answer "how Aryze wins deals"

```
1. Cover — Aryze sales strategy in one paragraph
2. The strategic choice — fit before volume; right-to-win first
3. ICP per product — concrete definitions for Pay by Bank, Stablecoin Factory, Digital Cash
   (replaces today's #entry channels-as-qualification mix; channels move to section 5)
4. Qualification standard — what "qualified" means at Aryze
5. Channels & origination — agents, memberships, events, outbound, inbound
6. The sales process — 6 stages from first signal to commercial commitment
   (rename: "Owned progression" → "Commercial commitment to onboarding" to clarify it ends where Onboarding begins)
7. Sales motions per product — Pay by Bank commercial-led, Factory product-led, Digital Cash enterprise-led
8. Pipeline management — gates, owners, stage rules
9. Markets we prioritise — gaming/betting/trading for PbB, builders for Factory, licensed FIs for Digital Cash
10. How we measure strategy — pipeline quality, movement, market signal
11. Source material — PDFs (keep)
```

### Sales-to-Onboarding — should answer "how Aryze moves a closed deal to live"

```
1. Cover — When this process starts (where Strategy ends)
2. The handoff standard — readiness-led, not informal
3. The handoff packet — concrete line-by-line contents
   (NEW — currently only described in prose)
4. The onboarding readiness flow — 6 stages from sales close to live
5. Readiness gates — Commercial / KYB / Legal / Technical / Operational (with concrete checklists)
6. Readiness review meetings — Commercial readiness review + Implementation readiness review
7. Ownership model — who owns what, when each role enters
8. Follow-up meetings — when extra alignment is needed
9. SLA & time targets — how long each stage should take
   (NEW — currently absent)
10. Escalation paths — what happens when an onboarding stalls
    (NEW — currently absent)
11. How we measure handoff quality — conversion, speed, quality, restart-from-zero rate
```

### What links them

- Strategy's section 6 ("The sales process") **ends** at "Commercial commitment"
- Onboarding's section 1 ("Cover") **starts** at "Commercial commitment"
- Both pages explicitly link to each other at the handoff point
- No more 6-stage flow on both — Strategy keeps its 6-stage sales process, Onboarding keeps its 6-stage readiness flow, but they're clearly sequential, not parallel

---

## 4. Tone / English-quality observations

Across both pages, recurring patterns to fix during the rewrite:

- **Vague comparatives** ("stronger control", "cleaner reconciliation", "faster movement") — already fixed in `april-sales-report`, but still scattered elsewhere
- **Abstraction over concretion** — "operating model", "qualified movement", "owned progression" appear constantly. Reader can't picture what they mean
- **Same phrase reused 5+ times** — "owner, next step and date" appears in 6+ places across the two pages
- **No examples** — abstract rules without "for instance, an Apcopay-style opportunity would..."
- **Passive voice & nominalisation** — "Qualification standards should be applied" → "The seller qualifies the lead"
- **No concrete numbers** — what's a stale opportunity? 30 days? 60? Not defined.

---

## 5. Ask before I restructure

1. **Sign-off on the split** — does the proposed Sales Strategy + Sales-to-Onboarding structure (sections 3 above) look right?
2. **New sections** — should I write the missing pieces (ICP per product, handoff packet template, SLA targets, escalation paths) from scratch, or do you have source material I should pull from?
3. **Concrete examples** — am I allowed to use real customers (Apcopay, Finnplay, GameBridge) as examples in the rewrite, or should examples stay anonymous?
4. **Tone level** — keep the current "internal operating doc" register, or move toward something more direct/punchy?
