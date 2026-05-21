# Hard audit — Aryze Commercial Operating Dashboard

**Date:** 2026-05-21
**Method:** Brutal pass on all 11 content pages. No diplomatic softening. Every issue cited with file + line.

---

## CRITICAL — fix before anything else

### C1. "Payable / Volt" — unverified partner name in OKR

`reports/aryze-objectives.html` lines 730, 844 (also in the soon-to-be-deleted root `maalsaetninger-for-aryze.html`):

> "Secure the EU licensing roof through Payable / Volt."
> "Make Payable / Volt coverage the foundation for EU casino activation."

**Problem:** Master CLAUDE.md says: *"UK live today via Volt.io partnership; EU/EEA rollout begins late Q2 2026, pending Volt-extension contract signature."* Canonical extract confirms Volt.io. **"Payable" does not appear in any canonical source.** Either:

- It's a typo (should be just "Volt")
- It's an internal partner name the canonical docs don't track (then add it to the source-of-truth before quoting it on the OKR page)
- It's wrong

This is a real Aryze-vs-OKR claim. If a board member reads this and asks "who is Payable?" we need a straight answer.

**Action required:** Confirm with leadership. Until confirmed, replace with "Volt.io (UK live)" and footnote "EU rollout pending Volt-extension contract."

### C2. Pay by Bank Marketing Plan — three forbidden phrases stacked

`reports/pay-by-bank-marketing-plan.html` lines 43–45:

> "The Pay by Bank campaign educates high-risk merchants on the true cost of card processing and positions Aryze as a **faster, cheaper and more reliable** account-to-account payment infrastructure partner."

Three vague comparatives in a row. None is sourced. "Faster than what? Cheaper than what? More reliable than what?" CLAUDE.md forbids exactly this construction.

`reports/pay-by-bank-marketing-plan.html` line 90:

> "presents Pay by Bank as the direct, regulated and **operationally simpler alternative**."

Same problem. "Simpler" is comparative without referent.

`reports/pay-by-bank-marketing-plan.html` line 102:

> "**Danish-built** payment infrastructure for serious merchants."

"Danish-built" is fine (verifiable). "**Serious merchants**" is exactly the glide flagged in the 13 May 2026 audit ("Built for serious deployment — all deployments are serious"). Same problem here.

**Action required:** Rewrite the campaign positioning. Replace with concrete claims:

- "Lower per-transaction cost than card schemes" (sourceable to scheme-fee benchmarks)
- "Faster settlement than card processing" (sourceable to settlement-time data)
- "Fewer chargebacks via irrevocable A2A" (sourceable; already in canonical)

### C3. Em-dash AI-tell — 3 pages over the threshold

| File | Em-dashes | Lines | Density |
|---|---:|---:|---:|
| `monthly-sales-report-template.html` | 19 | 308 | 1 per 16 lines |
| `sales-strategy.html` | 16 | 347 | 1 per 22 lines |
| `sales-onboarding.html` | 16 | 246 | 1 per 15 lines |

Per the humanizer skill (Wikipedia AI-tells), em-dash overuse is a major flag for AI-generated writing. The three pages I rewrote in this session are guilty.

**Action required:** Replace ~50% of em-dashes with full stops or commas. Most cases work as:

- "X &mdash; not Y" → "X. Not Y." or "X, not Y."
- "X &mdash; Y" mid-sentence → ", " or ": "

### C4. "Live in 2 weeks" / "Live in 6 weeks" embedded as quotes

`reports/sales-strategy.html` lines 121, 131 — these are inside the "Kills the deal" sections, framed as things NOT to say. Good defensive use.

BUT — same phrasing pattern can be misread as a positive claim if someone scrolls past context. Worth tightening to make it unambiguously a counter-example. E.g., prefix with "**Don't say:** 'Live in 2 weeks'..."

### C5. Orphan file with mismatched language

`maalsaetninger-for-aryze.html` (root) still exists with `lang="da"` but the title and body are now in English ("Aryze 2026 Objectives"). Internally inconsistent. **Must be deleted in Finder** (already flagged in task #12).

---

## HIGH PRIORITY — per-page deep dive

### `index.html`

**What works:** Dashboard sidebar layout, search + filter, snapshot card.

**Issues:**

- Card descriptions for Sales Strategy + Sales-to-Onboarding still reflect the OLD content. Current text:
  - sales-strategy: "How Aryze sells: channels, qualification, product motions and pipeline ownership."
  - sales-onboarding: "Readiness process for moving qualified customers into controlled onboarding."

  After the rewrite, these are too generic. Should reflect ICP/personas/handoff-packet additions. Suggested:
  - sales-strategy: "ICP per product, personas, qualification standard, sales motions, pipeline rules and top objections — end-to-end."
  - sales-onboarding: "Handoff packet, readiness gates per product, SLA targets and escalation paths."

- The snapshot card sums Pay by Bank leads across April (19) + SBC (16) = 35. You confirmed these are different tracks so the sum may double-count or may not. Decide and either:
  - Keep as-is and add a tooltip explaining the sum logic
  - Or only sum the most recent month's report
  - Today the dashboard claims "35 active Pay by Bank leads" implicitly. That number has no source the reader can verify.

- "Aryze 2026 Objectives" card has `data-title="aryze 2026 objectives okr goals strategy casino transactions revenue"` — fine for search. But the card has no `data-event` or `data-pay-bank-leads`, so it contributes nothing to snapshot. That's correct; just verifying.

### `reports/sales-strategy.html`

**What works:** ICP, personas, qualification, objections sections are the strongest content additions.

**Issues:**

- 13 sections, no on-page TOC, no TL;DR block. Reader has to scroll to know what's covered. (Already flagged in RATING.md as Phase 2.)
- Em-dash density: 16 in 347 lines. (See C3.)
- Line 178: "more relevant conversations, stronger buyer context and faster movement" — rule-of-three with three vague comparatives. Tighten.
- Line 286: "~50% faster repeat" — sourced to RememberMe in canonical. OK, but the ~ should ideally cite the source: "~50% faster repeat (Mastercard A2A research)". Without a citation, the % feels invented.
- The "Source material" `<details>` section at the bottom still references PDFs that are duplicates: `../docs/sales-analysis.pdf` (linked) vs `./docs/customer-segment-analysis-v2.pdf`, `./docs/ideal-customer-profiles-v2.pdf`, etc. Two of those file *paths* exist (`docs/sales-analysis.pdf` at root, and `reports/docs/*-v2.pdf` in reports/docs/). Verify they all open in browser. If they're old versions superseded by `Documents/Analyser/`, point users at the canonical Markdown files in StableSensei root.

### `reports/sales-onboarding.html`

**What works:** Handoff packet matrix (concrete 10×3 field grid), SLA per product, escalation paths.

**Issues:**

- Same density problem as Strategy (Phase 2).
- Em-dash: 16 in 246 lines (highest density). (See C3.)
- Section IDs `follow-up` and `readiness` exist but are not in the topnav. Either add them or rename to match. Decide: are these intentional intermediate sections or oversight?
- Line 78: "Sales checks **whether** KYB, legal, technical or operational work is needed" — "whether" usage here is fine (natural English), not the AI-tell type.
- Line 224: "**The faster a stall is visible, the easier it is to resolve.**" — sounds like a fortune cookie. Rewrite: "Stalls become harder to resolve the longer they sit." Stronger because it forces accountability.
- The "Readiness checklist" section (`#readiness`) and the new SLA section (`#sla`) overlap conceptually. SLA says "what's the deadline"; readiness says "what must be true". Could merge into one section to reduce repetition.

### `reports/monthly-sales-report-template.html`

**What works:** Clear placeholder convention, how-to-use comment block, all sections follow the same naming as April.

**Issues:**

- Em-dash density highest (19 in 308 lines). (See C3.)
- Line 241: "[Fill in: which product was **easier or harder** to talk about this month..." — wider problem: template instructions encourage the writer to use vague comparatives. Rewrite instructions to demand concrete language.
- Template lacks a "Customer wins" / "Customer losses" section. April had none either, but every monthly readout should track at least the wins by name (per canonical extract: Tesco Bank-equivalents).
- No place for "Open commercial questions for product/leadership" — useful to surface monthly.

### `reports/april-sales-report.html`

**What works:** Pipeline stage bars, structured monthly format.

**Issues:**

- Topbar is `.topbar` BUT loaded from `april-sales-report.css` — visually divergent from canonical. (Phase 1.)
- Line 335: "The buyer wants **better payment performance**" — vague comparative. Should be "lower per-transaction cost, faster settlement, or fewer chargebacks" (the canonical pain trio).
- Line 377: "Simple deployment, less friction, **faster learning** and a credible upgrade path" — rule-of-three with vague comparative. "Faster learning" doesn't mean anything concrete here.
- Line 418: "Pay by Bank was **easier to communicate openly** in April" — vague. Concrete: "Pay by Bank conversations were more direct because the buyer pain (chargebacks, scheme costs) is well-defined."
- Stage bar percentages (17%, 67%, 100%, 17%) — these are derived from the absolute counts (1, 4, 6, 1) but the source-of-derivation isn't shown. A reader cannot verify. Either show the formula in a footnote or remove the bars.

### `reports/aryze-objectives.html`

**What works:** Strong custom visual design — premium roadmap, runway panel, scoreboard. Best of the plan-pages.

**Issues:**

- "Payable / Volt" appears twice (C1).
- Line 644: "**The second-half plan is simple and aggressive**" — borderline promotional. "Aggressive" is a vague descriptor for a plan. "Demanding" or specific milestones would be sharper.
- Line 712: "**six milestones that turn access into revenue scale**" — fine, but "revenue scale" is jargon. Just say "monthly revenue".
- The `>4.2M monthly txns / >840k EUR monthly revenue / >40 UK casinos / >100 EU casinos` targets are ambitious. Who validated these? If they came from leadership, fine. If they were generated as plausible aspiration without backing, that's a problem when they appear on an internal OKR page.
- Topbar is `.plan-topbar` — not canonical. (Phase 1.)
- Uses `objectives-auth.js` for separate password gate. Adds friction. Worth questioning whether two-tier auth is needed when the workspace already has its own auth wall.

### `reports/lead-pipeline-process.html`

**What works:** Image-driven, scannable, compact.

**Issues:**

- Topbar is `.plan-topbar`. (Phase 1.)
- Images: `assets/lead-pipeline/pipeline-board.png` (164KB), `lead-cards.png` (46KB), `lead-notes.png` (48KB). These are screenshots from whatever tool the team uses. Risk: if the tool changes UI, the screenshots become outdated. Document the tool name (Notion? Linear? Airtable?) and consider versioning.
- Line 105: "Move forward only when the opportunity is **concrete**" — vague. Define "concrete" inline: "named decision owner + agreed next step + dated review."

### `reports/pay-by-bank-marketing-plan.html`

**What works:** Six-week campaign calendar, channel breakdown, budget table.

**Issues:**

- Three forbidden-phrase stacks in the hero alone (C2).
- ICP definition differs from canonical:
  - This page (line 96): "**iGaming operators, crypto exchanges and online marketplaces**"
  - Canonical: "**iGaming/casinos/betting (core), trading platforms, high-risk merchants, card-under-served verticals**"
  - "Crypto exchanges" is not in canonical ICP. "Online marketplaces" is not in canonical ICP. Either align to canonical or document the canonical source for crypto + marketplaces as Pay by Bank targets.
- Line 197: "DKK 1,000-1,500" for LinkedIn sponsored posts — is that per post? Per week? Total? Ambiguous.
- "Bitcoin Pizza Day" mentioned (line 138) as an event hook. Verify timing relevance — Bitcoin Pizza Day is 22 May. Out of campaign window now (we're past it).
- Topbar is `.plan-topbar`. (Phase 1.)

### `reports/nbc-stockholm-marketing-plan.html`

**What works:** Tight event plan, clear booth design, lead-capture flow.

**Issues:**

- Topbar is `.plan-topbar`. (Phase 1.)
- "Mini Golf: The Payment Race" — verify with sales team this is approved. Could backfire as gimmicky if buyer-level visitors don't engage.
- Line 132: "**The obstacle lane shows payment friction; the clear lane shows 'The Aryze Way'**" — "The Aryze Way" is brand-vague. Replace with the actual differentiator ("the direct A2A lane").
- Date NBC 26-27 May 2026 — verify with event organisers that the dates haven't moved. We're 5–6 days out from this event right now.

### `reports/sbc-report/index.html`

**What works:** Best-structured page in the workspace. Executive readout, leverage map, strategic highlights, tiered pipeline, roadmap, risk grid, decision summary.

**Issues:**

- Topbar is `site-header report-header` — fully separate design (Phase 3).
- Line 67: "**April 30, 2026**" — dated correctly. But notice that this report was prepared a year ago in the original (if the date was 2025); confirm this is the current SBC, not last year's. The actual SBC Summit 2026 (Lisbon) was 19–21 March 2026. April 30 is *after* the event — that's the reporting date, fine.
- Line 39: "Strategic market access for Aryze Pay by Bank" — H1 is good.
- Line 138: "lower payment costs, simpler flows, faster settlement, and fewer chargeback issues" — four pains, but "simpler flows" is vague. Make all four parallel: "lower per-transaction cost, faster settlement, fewer chargebacks, cleaner reconciliation."
- Apcopay/GameBridge/Finnplay all named with specific contact persons. Make sure the SBC report respects discretion — these are real people's names + phone numbers (pipeline.html). If the dashboard is ever opened beyond Aryze, this is a privacy concern.

### `reports/sbc-report/pipeline.html`

**What works:** Operational lead-by-lead breakdown.

**Issues:**

- 16 real contacts with phone numbers, emails, WhatsApp/Telegram/Skype handles (line 399 has "Telegram: @malekzitouni, Skype: live:samirassafir" — sensitive data).
- Per GDPR: this is personal data of identifiable individuals. Hosting on a workspace with password access is one thing. Hosting it inside a Git repo (especially public) is another. **Verify the repo `Commercial-Operating-Dashboard` is private on GitHub before anyone pushes.**
- Topbar same as parent (Phase 3).

---

## CROSS-CUTTING ISSUES

### CC1. Rule-of-three constructions

Most common triplets across all files:

| Pattern | Count |
|---|---:|
| "owners, blockers and next [step]" | 3 |
| "technical, compliance and commercial" | 2 |
| "context, ownership and readiness" | 2 |
| "case, maturity and decision" | 2 |

Three or more of the same triplet structure across a page is an AI-tell. The first one is fine, the third or fourth becomes patterned. The new pages have variation but Strategy + Onboarding both use the same "owner / blocker / next" structure repeatedly.

**Action:** Vary the construction. Some bullet lists could become 2 items or 4 items instead of always 3.

### CC2. Snapshot card on dashboard double-counts (?)

Snapshot sums Pay by Bank leads across cards: April (`data-pay-bank-leads="19"`) + SBC (`data-pay-bank-leads="16"`) = **35**. If these overlap (a lead present in both April pipeline and SBC pipeline), the dashboard misleads.

You said "different tracks" — but is 35 the correct total? Or is it really April's 19 + 16 SBC-unique = 35 (no overlap, then total is right)?

Without a definitive answer, **the dashboard claims a number it cannot defend.**

**Action:** Either:

- Document the snapshot logic on hover/tooltip ("Sum of leads listed in each individual report card")
- Or change the logic to take the latest month only (don't sum across reports)
- Or stop displaying the snapshot until the source of truth is clear

### CC3. Auth complexity

Three independent auth layers:

1. `site-auth.js` — workspace access (every page)
2. `script.js` lines 24-26 — admin login (dashboard only)
3. `reports/objectives-auth.js` — extra password gate on OKR page

The OKR-only second-gate is over-engineered. If a user has workspace access, the OKR contents (revenue targets, customer count targets) aren't more sensitive than the SBC pipeline (with real contacts + phone numbers). Either:

- Drop `objectives-auth.js` and rely on `site-auth.js` for everything
- Or apply the second-gate logic consistently — also on SBC pipeline (where the real PII lives)

Currently the design is internally inconsistent.

### CC4. PDF source-of-truth

`reports/sales-strategy.html` references:

- `../docs/sales-analysis.pdf` (root docs/)
- `./docs/customer-segment-analysis-v2.pdf` (reports/docs/)
- `./docs/ideal-customer-profiles-v2.pdf`
- `./docs/product-suite-master-description-v2.pdf`
- `./docs/value-proposition-canvas-v2.pdf`

But the **real canonical sources** now live at `/StableSensei/Documents/Analyser/[Product]/{ICP,Product-Description,VPC}.md` (extracted in `CANONICAL-EXTRACT.md`).

The PDF versions in the repo are v2 and v4 versions. The Documents/Analyser/ has v4 master and per-product. Versions drift.

**Action:** Decide one source of truth. Either:

- Keep PDFs in `reports/docs/` as the canonical and remove the Analyser/.md files (wrong — Analyser is master)
- Remove the PDFs from the repo and link to the Analyser folder externally (cleaner)
- Or auto-generate PDFs from the .md files and version them (most work but most accurate)

### CC5. Mobile readiness

Most pages don't have inline `@media` queries because they rely on external CSS. report-style.css has 3 media queries (1120px, 940px, 680px). styles.css (root) presumably has similar.

But the SBC report (`sbc-report/styles.css`, 46KB) and April Sales Report (`april-sales-report.css`, 14KB) have their own — they may not break the same way.

**Action when migrating (Phase 3):** Test SBC + April on mobile after migration. The fancy custom layouts (premium-roadmap, leverage-map) need to gracefully collapse.

### CC6. Page weight + redundant CSS

After the report-style.css extraction we have:

- `styles.css` (root) — 22KB, used by index + plan-pages
- `report-style.css` — 14KB, used by Strategy + Onboarding + Template
- `april-sales-report.css` — 14KB, used by 1 page
- `sbc-report/styles.css` — 46KB, used by 2 pages

Total: **96KB of CSS** for what is functionally a few layouts. The 46KB SBC file alone is bigger than report-style + styles combined.

**Action:** Phase 3 migration will collapse the 46KB SBC and 14KB April into existing CSS, saving ~50KB. Real-world impact: faster loads, easier maintenance, one place to fix bugs.

### CC7. Brand voice — "channels", "discipline", "ownership" overused

Across the new Strategy and Onboarding pages, these three words appear:

- "ownership" — 11 times on Onboarding, 8 on Strategy
- "discipline" — 5 times on Strategy
- "channels" — 9 times on Strategy

That's not wrong, but it's monotonous. Synonyms: "accountability", "rigour", "routes", "sources".

---

## ACCESSIBILITY

### A1. Image alt text

Sweep shows all `<img>` tags have `alt="Aryze"` or `alt="..."` — good. **No image-without-alt issues.**

### A2. Heading hierarchy

Quick check: each page has exactly one `<h1>`. Good.

However Sales Strategy and Sales-to-Onboarding have multiple `<h3>` inside `.flow-section` (flow stages) without an `<h2>` parent above them within the same DOM block. Screen reader users would hear them as orphans.

**Action:** Ensure section-title `<h2>` always precedes the in-section `<h3>` cards. Spot-check on the new pages.

### A3. Color contrast

Not measured automatically. Canonical palette uses:

- Ink `#001e2b` on paper `#f7f9fa` — high contrast, fine
- Teal `#007599` on white — should be fine for headings
- Muted `#52636d` on white — borderline for body text (WCAG AA needs 4.5:1)

**Action:** Run a contrast checker on `var(--muted)` body text. If under 4.5:1, darken to `#3a4a55` or similar.

### A4. Keyboard navigation

Topbar nav uses `<a>` tags with `href="#anchor"` — keyboard-navigable. Admin button on dashboard is `<button>` — good. **No issues.**

### A5. Focus styles

Quick check: `report-style.css` and `styles.css` don't appear to define custom `:focus` outlines. Browser defaults apply. **No actual issue, but for accessibility polish, define `:focus-visible` styles.**

---

## ACTION PRIORITY (revised)

| # | Action | Impact | Effort | Risk |
|---|---|---|---|---|
| 1 | **Resolve C1: "Payable / Volt" naming** | Brand accuracy | 5 min ask + 2 min edit | Low |
| 2 | **Resolve C2: PbB Marketing forbidden phrases** | Brand voice | 20 min | Low |
| 3 | **Phase 1: Topbar unification** (from RATING.md) | Visual consistency | 60 min | Low |
| 4 | **C3: Em-dash reduction** on 3 pages | AI-tell removal | 30 min | Low |
| 5 | **Phase 2: TL;DR + TOC on Strategy + Onboarding** | Overview/scannability | 45 min | Low |
| 6 | **CC2: Snapshot card semantics** — decide and document | Numbers honesty | 10 min decision | Low |
| 7 | **Update index.html card descriptions for Strategy + Onboarding** | Discoverability | 5 min | Low |
| 8 | **Light copyedit on PbB Marketing + April + Onboarding** (specific lines flagged above) | Quality | 30 min | Low |
| 9 | **CC4: PDF source-of-truth decision** | Maintenance | 15 min decision + 30 min execute | Medium |
| 10 | **CC3: Drop or extend `objectives-auth.js`** | Consistency | 20 min | Medium |
| 11 | **Phase 3: SBC Report migration** | Visual consistency | 90 min | Medium |
| 12 | **CC5: Mobile test after Phase 1 + 3** | Mobile UX | 30 min | Low |

**Total estimated: 6–7 hours of focused work.**

---

## What this audit did NOT cover (call out)

- **Render testing in real browsers** — I cannot see what the pages actually look like. Some issues only surface visually.
- **Browser-side JavaScript bugs** — `script.js` works in theory, not tested under all admin flows.
- **Cross-browser compatibility** — Safari, Chrome, Firefox, Edge may render `clamp()` and `gap` differently.
- **Print stylesheets** — none exist. If anyone tries to print a strategy doc, it'll print badly.
- **Performance audit** — no Lighthouse run. CSS is 96KB; font loads from Google — fine but not measured.
- **Translation/i18n** — single-language assumption.
- **Backend** — there is none. This is static HTML with localStorage. Card edits don't persist across browsers/devices.
- **GDPR review of SBC pipeline.html** — flagged but not exhaustively assessed.

---

## Single decision to make first

**C1 (Payable / Volt naming) blocks publishing the OKR page externally.** Confirm with leadership before anything else.
