# UI + Content rating — Aryze Commercial Operating Dashboard

**Date:** 2026-05-21
**Method:** Full read of all 11 pages + topbar inspection. Rated on Topbar consistency, Content clarity, Visual UI strength, Brand compliance. Scale 1–10.

---

## TL;DR — what to fix

1. **5 different topbar implementations exist across 11 pages.** That is the single biggest visual inconsistency. Unifying them is the highest-impact fix.
2. **Sales Strategy + Sales-to-Onboarding are content-strong but visually dense.** Both pages are 246–347 lines. Adding sticky TOC and a "TL;DR" block at the top makes them scannable.
3. **Aryze-objectives + plan-pages all use the same `.plan-topbar`** — but it doesn't match Strategy/Onboarding/Template. Cheapest unification: migrate plan-topbar to match the report `.topbar`.
4. **SBC Report (`brand-mark` + `report-header`) and April Sales Report (own CSS) are fully separate visual systems.** These are the most expensive to unify; lowest priority for now.
5. **Brand-wise everything is clean** — no ARYZE-caps, no forbidden phrases left. Capability discipline holds.

---

## Topbar inventory (root cause of inconsistency)

| # | Pages | Markup | CSS source | Issue |
|---|---|---|---|---|
| **A** | `index.html` | `<aside class="sidebar">` + `<nav class="side-nav">` | `styles.css` | Unique dashboard sidebar — correctly different |
| **B** | `sales-strategy`, `sales-onboarding`, `monthly-sales-report-template` | `<header class="topbar">` + `<nav class="nav">` | `report-style.css` | **Canonical "report" topbar** ← target |
| **C** | `april-sales-report` | `<header class="topbar">` inside `<div class="site-shell">` | `april-sales-report.css` | Same class name, different styles — risk of bleeding |
| **D** | `aryze-objectives`, `lead-pipeline-process`, `maalsaetninger-for-aryze` (orphan), `nbc-stockholm-marketing-plan`, `pay-by-bank-marketing-plan` | `<header class="plan-topbar">` + `<nav class="plan-nav">` | `styles.css` | Plan-page topbar — does not match B |
| **E** | `sbc-report/index`, `sbc-report/pipeline` | `<header class="site-header report-header">` + `<a class="brand-mark">` + `<nav class="report-nav">` | `sbc-report/styles.css` | Own design language — most divergent |

**Recommendation:** Migrate C, D, E to the **B** topbar (`<header class="topbar">` + `<nav class="nav">` from `report-style.css`). Keep A as the dashboard's unique sidebar.

---

## Per-page rating

### `index.html` — Dashboard

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 10/10 | Intentionally unique (dashboard sidebar). Correct. |
| Content clarity | 7/10 | Card grid is clear; snapshot tallies work; admin button is hidden when logged out. |
| Visual UI strength | 8/10 | Clean sidebar, good card density, search + filter usable. |
| Brand compliance | 10/10 | Aryze correctly cased; no forbidden phrases. |
| **Overall** | **8.5/10** | Strong as the central hub. No structural fix needed. |

**Suggested tweaks (optional):** Add a "Last updated" timestamp on snapshot card; allow drag-reordering of cards in admin mode.

---

### `reports/sales-strategy.html` — Sales Strategy

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 10/10 | Canonical `.topbar`. ✓ |
| Content clarity | 8/10 | 13 sections is a lot. ICP + Personas + Qualification + Objections are excellent additions, but the page is long. |
| Visual UI strength | 7/10 | Dense — no clear "TL;DR" landing block. Reader must scroll to know what's covered. |
| Brand compliance | 10/10 | Tesco Bank cited correctly; "No named customers in canonical source" honesty on Factory + DC. |
| **Overall** | **8.75/10** | Content is now strong. Visual overview can be sharpened. |

**Suggested tweaks (will fix):**

- Add a sticky "On this page" TOC for the 13 sections (currently only in nav bar at top)
- Add a "Strategy in 60 seconds" TL;DR card at the top — 4 bullets, nothing more
- Numbered section headings (01 / 02 / 03 …) for visual rhythm

---

### `reports/sales-onboarding.html` — Sales-to-Onboarding

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 10/10 | Canonical `.topbar`. ✓ |
| Content clarity | 9/10 | Handoff packet matrix is the strongest section. SLA + escalation tables are concrete. |
| Visual UI strength | 7/10 | Similar density issue to Strategy. Reader needs a quick map. |
| Brand compliance | 10/10 | No issuer/operator slippage. Aryze cased correctly. |
| **Overall** | **9/10** | Strong page. Same TL;DR + TOC treatment as Strategy. |

**Suggested tweaks (will fix):**

- "Process in 60 seconds" TL;DR card at top — 4 bullets
- Sticky TOC
- Numbered headings

---

### `reports/monthly-sales-report-template.html` — Report Template

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 10/10 | Canonical `.topbar`. ✓ |
| Content clarity | 9/10 | Clear placeholder system; how-to-use comment block in header; instructions inline. |
| Visual UI strength | 8/10 | Renders cleanly; matches Strategy/Onboarding. |
| Brand compliance | 10/10 | Aryze cased correctly; no forbidden phrases. |
| **Overall** | **9.25/10** | Ready to use. |

**Suggested tweaks:** None critical. Could add a tiny "TEMPLATE — do not publish" warning ribbon for safety.

---

### `reports/april-sales-report.html` — April Sales Report

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 4/10 | Uses `.topbar` BUT loaded from `april-sales-report.css` — different design than canonical B. |
| Content clarity | 8/10 | Detailed monthly readout; clear structure; pipeline stage bars work well. |
| Visual UI strength | 7/10 | Heavier gradient background, different palette weighting. Not bad — just different. |
| Brand compliance | 10/10 | "Stronger control" fixed earlier; no forbidden phrases. |
| **Overall** | **7.25/10** | Strong content, weak consistency. |

**Suggested tweaks:**

- Migrate to `report-style.css` to match Strategy/Onboarding/Template
- Could become the first concrete "filled" version of the new monthly template

---

### `reports/aryze-objectives.html` — 2026 Objectives (OKR)

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 5/10 | Uses `.plan-topbar` — does not match canonical B. |
| Content clarity | 8/10 | Strong: roadmap, market lanes, December proof point. Good visual hierarchy within its own design language. |
| Visual UI strength | 8/10 | Custom styling for premium roadmap, runway panel, scoreboard. Visually rich. |
| Brand compliance | 10/10 | "ARYZE" → "Aryze" fix applied. No forbidden phrases. |
| **Overall** | **7.75/10** | Best of the plan-pages. Just needs topbar swap. |

**Suggested tweaks:**

- Swap `.plan-topbar` for `.topbar` markup
- Keep the rest of the body design (it's actually well-crafted)

---

### `reports/lead-pipeline-process.html` — Lead Pipeline Process

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 5/10 | `.plan-topbar`. |
| Content clarity | 8/10 | Compact, image-heavy, easy to scan. Good "Update the board when status changes" rule. |
| Visual UI strength | 7/10 | Uses images for board/cards/notes — feels different from text-heavy peers. |
| Brand compliance | 10/10 | Aryze cased correctly. |
| **Overall** | **7.5/10** | Solid process doc, needs topbar match. |

**Suggested tweaks:**

- Swap `.plan-topbar` for `.topbar` markup
- Verify image links still work after any structural change

---

### `reports/pay-by-bank-marketing-plan.html` — Pay by Bank Marketing Plan

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 5/10 | `.plan-topbar`. |
| Content clarity | 7/10 | Good campaign brief. Six-week calendar is clear. Audience definition slightly loose ("iGaming, crypto, marketplaces"). |
| Visual UI strength | 7/10 | Plan-page hero + metrics + channels grid all work. |
| Brand compliance | 9/10 | "Danish-built payment infrastructure for serious merchants" — borderline promotional. Could tighten. "Built for serious deployment" was flagged in the May audit — this echoes it. |
| **Overall** | **7/10** | Needs topbar swap + light copyedit. |

**Suggested tweaks:**

- Swap topbar
- Tighten positioning line ("Danish-built … serious merchants" → "UK and EU payment infrastructure for high-volume merchants")
- Align ICP wording with canonical (currently "iGaming, crypto, marketplaces"; canonical says iGaming + betting + trading + card-under-served)

---

### `reports/nbc-stockholm-marketing-plan.html` — NBC Stockholm

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 5/10 | `.plan-topbar`. |
| Content clarity | 8/10 | Tight event plan. Clear targets, booth system, lead capture, budget. |
| Visual UI strength | 8/10 | Compact and effective. |
| Brand compliance | 10/10 | Date fix applied (2025 → 2026). Aryze cased correctly. |
| **Overall** | **8/10** | Just needs topbar match. |

**Suggested tweaks:**

- Swap topbar
- Mini Golf "The Payment Race" — verify with sales team before published widely

---

### `reports/sbc-report/index.html` — SBC Summit Report

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 3/10 | Fully separate design system (`brand-mark`, `report-header`, own CSS). Looks like a different product. |
| Content clarity | 9/10 | Excellent: executive readout, leverage map, strategic highlights, tiered pipeline, roadmap, risks, conclusion. Best-structured page. |
| Visual UI strength | 9/10 | Polished — but polished as its own thing. |
| Brand compliance | 10/10 | Aryze cased correctly. Pipeline names treated honestly. |
| **Overall** | **7.75/10** | Great document, isolated from the rest of the dashboard. |

**Suggested tweaks:**

- Topbar swap is heaviest here (full markup + CSS migration)
- If time-constrained, leave SBC alone for now and tackle in a separate session
- The body design is excellent — consider porting its leverage-map and tiered-pipeline patterns INTO the canonical `report-style.css` so future reports inherit them

---

### `reports/sbc-report/pipeline.html` — SBC Summit Pipeline

| Aspect | Score | Note |
|---|---|---|
| Topbar consistency | 3/10 | Same as above. |
| Content clarity | 9/10 | Operational lead-by-lead breakdown with contact details and next steps. Excellent. |
| Visual UI strength | 9/10 | Pipeline lead cards work well. |
| Brand compliance | 10/10 | Clean. |
| **Overall** | **7.75/10** | Same migration recommendation as the parent report. |

---

### `reports/maalsaetninger-for-aryze.html` — Orphan Danish version (root duplicate)

This file is marked for deletion. Not rated. Action: delete in Finder.

---

## Aggregate scoreboard

| Page | Topbar | Content | UI | Brand | Overall |
|---|---:|---:|---:|---:|---:|
| index.html (dashboard) | 10 | 7 | 8 | 10 | **8.5** |
| sales-strategy | 10 | 8 | 7 | 10 | **8.75** |
| sales-onboarding | 10 | 9 | 7 | 10 | **9.0** |
| monthly-sales-report-template | 10 | 9 | 8 | 10 | **9.25** |
| april-sales-report | 4 | 8 | 7 | 10 | **7.25** |
| aryze-objectives | 5 | 8 | 8 | 10 | **7.75** |
| lead-pipeline-process | 5 | 8 | 7 | 10 | **7.5** |
| pay-by-bank-marketing-plan | 5 | 7 | 7 | 9 | **7.0** |
| nbc-stockholm-marketing-plan | 5 | 8 | 8 | 10 | **8.0** |
| sbc-report/index | 3 | 9 | 9 | 10 | **7.75** |
| sbc-report/pipeline | 3 | 9 | 9 | 10 | **7.75** |

**Workspace average: 7.96 / 10** — solid foundation, with the obvious lift coming from topbar unification + light TL;DR work on Strategy + Onboarding.

---

## Proposed fix plan (in priority order)

### Phase 1 — Topbar unification (1 hour, high impact)

Migrate **5 plan-pages + April Sales Report** to the canonical `.topbar` from `report-style.css`:

- `aryze-objectives.html`
- `lead-pipeline-process.html`
- `nbc-stockholm-marketing-plan.html`
- `pay-by-bank-marketing-plan.html`
- `april-sales-report.html`

Each migration: swap `<header class="plan-topbar">` → `<header class="topbar">`, swap `<nav class="plan-nav">` → `<nav class="nav">`, add `<link rel="stylesheet" href="./report-style.css">` if not present, remove or downgrade conflicting CSS. Test render.

**Outcome:** 6 pages move from topbar-score 4–5 to 10.

### Phase 2 — Strategy + Onboarding overview (45 min, high impact)

- Add "Strategy in 60 seconds" / "Process in 60 seconds" TL;DR card at top of each
- Add sticky on-this-page TOC (right rail) for both
- Number section headings (01 / 02 …) for visual rhythm

**Outcome:** Both pages move UI-score from 7 to 9.

### Phase 3 — SBC Report migration (1.5 hours, medium impact)

Port `sbc-report` to canonical topbar + body styles. Largest single migration because of its own CSS file.

### Phase 4 — Light copyedit on `pay-by-bank-marketing-plan.html` (15 min)

Tighten positioning line; align ICP language with canonical.

### Phase 5 — Optional polish

- Migrate April Sales Report to be the first filled instance of the monthly template
- Delete `april-sales-report.css` and `sbc-report/styles.css` once migrations complete

---

## Sign-off question

Which phase do you want me to start with? My recommendation is Phase 1 (topbar unification) — biggest visible win for least risk.
