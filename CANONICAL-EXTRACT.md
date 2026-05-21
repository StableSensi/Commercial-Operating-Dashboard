# Canonical Extract — Aryze Sales Strategy + Sales-to-Onboarding

**Source:** 12 canonical files under `Documents/Analyser/` and `Brain/Personas/Sales-*`
**Generated:** 2026-05-21
**Purpose:** Structured input for dashboard rewrite (Sales Strategy + Sales-to-Onboarding pages)

---

## Pay by Bank

### ICP

UK and EU/EEA merchants in iGaming, betting, trading, and card-under-served verticals — 100k+ tx/month, average transaction value 35+ EUR — where card friction, settlement delay, chargeback exposure, or payment cost is material to margin and daily operations (ICP.md L9-11).

**Top fit criteria:**
- **Industry:** iGaming/casinos/betting (core), trading platforms, high-risk merchants, card-under-served (ICP.md L47-53)
- **Size:** 100k+ tx/month, avg ticket 35+ EUR (ICP.md L38)
- **Geo:** UK live today; EU/EEA rollout late Q2 2026 pending Volt-extension signature (ICP.md L28; Product-Description.md L22)
- **Regulatory:** PIS-only operation via Mastercard Open Banking; merchant doesn't need own licence (Product-Description.md L166-171)
- **Technical maturity:** Internal payment owner + dev capacity to integrate a new rail (ICP.md L42-44)
- **Trigger:** Payment performance discussed at leadership level (strongest signal) (ICP.md L78)

**Anti-ICP:** Outside UK+EU/EEA; primary need is outgoing payouts/withdrawals (we're customer→merchant only); needs AIS features (account aggregation, balance check, AOV) — we're PIS-only (ICP.md L149-160).

### Buyer persona

- **Title:** Payments Operations Lead (primary, Brand Guide v1.0) (ICP.md L112)
- **Secondary:** Head of Payments, CFO/Finance Director, COO/Payment Operations Director (ICP.md L114-118)
- **What they care about:** Drift, integration, control, exception handling, reconciliation cycle, chargeback rate, VAMP exposure (Persona §1)
- **What they need to see to engage:** Their own numbers run through savings calculator; concrete answer on volume/AOV/blended rate; honest scope on AIS/payouts/recurring (Persona §3.1, §4.1)
- **What kills the deal:** Promising features we don't have (AIS, standalone payouts, standalone recurring); "UK licensed" used as geography signal; unsourced conversion-lift % (Persona §5)

### Capability gospel

**One-line position:** *"A better way for UK and European merchants to get paid."* (Product-Description.md L87)

**Top capabilities (LIVE):**
- A2A payment rail via Mastercard Open Banking — 19 European markets, 2,900+ banks (Product-Description.md L150)
- Fixed fee per transaction (not % of amount) — core anti-card argument (Product-Description.md L151)
- Near-zero chargebacks — A2A is irrevocable + SCA-authenticated, no scheme dispute path (Product-Description.md L152)
- RememberMe token, 15-month validity, ~50% faster repeat flow, ~2× fewer clickthrough steps (Product-Description.md L153)
- Theming/custom branding on checkout (logo, colours, font) (Product-Description.md L157)
- 99.99%+ uptime, geo-redundancy, auto failover, 24/7 support (Product-Description.md L160)

**Hard limits (NOT delivered):**
- **PIS-only — no AIS at all** (no AOV, balance check, account aggregation, spending insights, KYC-via-Open-Banking) (Product-Description.md L168)
- **No payouts (merchant→customer)** as standalone flow — withdrawals/refunds not productised at Aryze (Product-Description.md L169)
- **No standalone recurring under PSD2** — only via Mastercard Payment Services DK/NO (605-registration) until PSD3 (~2027-28) (Product-Description.md L170)
- **Refunds:** MCOBS EU is technical service provider — verify with product (Product-Description.md L171)

**Geographic + licensing:** UK live today via Volt.io partnership; EU/EEA rollout begins late Q2 2026 (Volt-extension contract pending). Not "UK only", not "global", not "both open today" (Product-Description.md L21-24).

### Value proposition

**Top 3 customer pains:**
1. High card costs — scheme fees +75% since 2021 at large merchants (VPC.md L43-44)
2. Chargeback/dispute burden — iGaming 2-4% vs 0.5-1% normal e-com; cost per dispute 20-100 EUR + loaded ~2.5× tx value (VPC.md L49-50)
3. Visa VAMP threshold drops to 1.5% April 2026 — existing chargeback rates threaten scheme relationships (VPC.md L56)

**Top 3 gains:**
1. Predictable, fixed cost per transaction (VPC.md L70)
2. Faster settlement → cash flow (VPC.md L71)
3. Near-zero chargebacks via irrevocable + SCA-authenticated A2A (VPC.md L118)

**Top 3 jobs:**
1. Receive incoming payments reliably and fast (VPC.md L21)
2. Reduce dispute/chargeback burden (VPC.md L23)
3. Reconcile incoming funds cleanly (VPC.md L24)

### Sales motion

- **Cycle:** 6-12 weeks SMB; 3-6 months enterprise (master CLAUDE.md)
- **Who initiates:** Commercial, merchant-focused — direct merchant conversations, warm intros, payment-focused partnerships, website + savings calculator, LinkedIn, targeted outreach (Product-Description.md L94-101)
- **What proves it:** Demo + sandbox + savings calculator output on customer's own numbers (Product-Description.md L208-209)

### Real customer examples

- **Tesco Bank** (Mastercard-official case): ~40% volume share via Pay by Bank for credit-card payments; ~25% rolling 12-month growth Sep 22–Aug 23 (Persona §3.3)
- **bet365** (competitor reference, NOT Aryze customer): went live on TrueLayer Pay by Bank UK + Germany 2026 (ICP.md L206)
- **Volt.io** (Aryze partner, not customer): provides UK rails today (Product-Description.md L22)

---

## Stablecoin Factory

### ICP

Builders, technical teams, and innovation/digital-asset teams with a concrete stablecoin or tokenised-asset use case, who want to deploy via a self-serve, AI-native flow without starting with enterprise complexity on day one (ICP.md L11).

**Top fit criteria:**
- **Industry:** Fintech, web3, digital asset teams, innovation teams at larger companies (ICP.md L42-48)
- **Size:** Seed to Series A typical for founders; mid-market enterprises for internal venture/innovation (ICP.md L43-46)
- **Geo:** Not bounded — EU MiCA-aligned, US-aware via Genius Act context (ICP.md L199-200)
- **Regulatory status:** Customer (or parent/partner) holds the licence — Aryze does NOT issue (ICP.md L34)
- **Technical maturity:** Has technical team that can use sandbox + docs to self-evaluate (ICP.md L33)
- **Trigger:** Concrete use case validated; custom-build is too heavy; path to live in weeks-to-a-quarter (ICP.md L76-82)

**Anti-ICP:** Needs full institutional operating layer day one (re-route to Digital Cash); pure research with no execution path or budget; expects Aryze as issuer or regulated operator (ICP.md L152-160).

### Buyer persona

**Differs per motion** (Product-Description.md L104-156):
- **Own Programme:** Founder, CTO, Head of Product, Technical Lead
- **Partner-Led:** Head of Distribution, BD Lead, Platform Lead
- **White-Label:** Platform Lead, Head of Product, Commercial Lead/Head of BD

**What they care about:** Time-to-live, sandbox quality, brand preservation, deployment path, migration upward (ICP.md L100-107)

**What they need to see to engage:** Self-serve sandbox + documentation immediately (no gating); AI-native deployment UX; clear motion fit before commercial conversation (Persona §3.2, §4.1)

**What kills the deal:** Selling Factory as "lightweight Digital Cash"; promising RWA capabilities without product verification; "live in 2 weeks" without seeing their stack; offering Aryze as issuer or operator (Persona §5)

### Capability gospel

**One-line position:** *"A faster way to launch a simple stablecoin."* (Product-Description.md L81)

**Top capabilities (LIVE):**
- AI-native self-serve deployment flow (Product-Description.md L89)
- Issuance path for simple stablecoin or tokenised asset (customer is issuer) (Product-Description.md L90)
- Sandbox + documentation for technical evaluation (Product-Description.md L91)
- Three commercial motions: Own Programme / Partner-Led / White-Label (Product-Description.md L92, L104-156)
- Path upward to Digital Cash when use case scales (positioning story, not productised step) (Product-Description.md L93)

**Hard limits (NOT delivered):**
- **Aryze is NOT issuer** — customer (or parent/partner licensed entity) remains issuer (Product-Description.md L163)
- **Aryze is NOT regulated operator** — customer operates (Product-Description.md L164)
- **NOT Digital Cash** — no full institutional operating layer (settlement, ramps, treasury, multi-currency, governance) from day one (Product-Description.md L165)
- **No custom enterprise programmes from day one** (Product-Description.md L166)
- **RWA-specific capabilities beyond one-pagers:** verify with product per deal (Product-Description.md L167)
- **No licence delivery** — Aryze doesn't provide the licence (Product-Description.md L170)

**Geographic + licensing:** Not jurisdictionally bounded but MiCA-aligned in EU. Customer holds licence — Aryze is infrastructure (Product-Description.md L17, ICP.md L199).

### Value proposition

**Top 3 customer pains:**
1. Path from idea to live is too heavy — too many decisions, vendors, internal alignment (ICP.md L89)
2. Custom build costs 6-12 months + multiple FTEs without validation guarantee (ICP.md L90)
3. Fragmented vendor stack — wallet, ledger, custody, ramps, compliance all separate (ICP.md L91)

**Top 3 gains:**
1. Fast route from concept to live (weeks to a quarter, not 6-12 months) (ICP.md L101)
2. Self-serve product experience — not an enterprise sales cycle (ICP.md L102)
3. Path upward to Digital Cash if use case scales (ICP.md L105)

**Top 3 jobs:**
1. Deploy stablecoin/tokenised asset from concept to live (VPC.md L23)
2. Test the use case in practice before deeper infrastructure commitment (VPC.md L24)
3. Bevare governance og operationel kontrol over programmet (VPC.md L28)

### Sales motion

- **Cycle:** Weeks to a quarter (Own Programme); a quarter to two quarters (Partner-Led); two quarters+ (White-Label) (Product-Description.md L121, L137, L153)
- **Who initiates:** Product-led + ecosystem-led — inbound from event/content/partner; self-serve product funnel; developer communities; conferences (Token2049, Permissionless, EthCC) (Product-Description.md L180-189)
- **What proves it:** Sandbox-first; technical walkthrough; motion-fit confirmed before scoping (Persona §4.1-4.2)

### Real customer examples

Not in source — no named Stablecoin Factory customers in canonical files. Persona §9 Q5 notes: "the old motion one-pagers were archived (Lorem ipsum issues). Sellers currently have nothing to send when a partner-led conversation goes well."

---

## Digital Cash

### ICP

Already-licensed institutions (banks, licensed financial institutions, fintech clusters, licensed conglomerates) with a concrete digital cash, settlement, treasury, or liquidity use case — and the internal maturity to move past research into live operation (ICP.md L11).

**Top fit criteria:**
- **Industry:** Tier-2/Tier-3 banks following JPM/Citi/BBVA/Santander; licensed financial institutions; fintech clusters in EMI/PI segment; licensed conglomerates (ICP.md L41-48)
- **Size:** Institutional scale — multi-year capex/opex framing, not pilot budget (ICP.md L35)
- **Geo:** Not jurisdiction-bounded but MiCA-relevant for EU; central banks rare but strategic (ICP.md L48)
- **Regulatory status:** **Already-licensed** — licence covers digital cash issuance or related activities (ICP.md L29)
- **Technical maturity:** Can engage treasury, legal, compliance, risk, and technology simultaneously (ICP.md L31)
- **Trigger:** Compliance deadline; peer-move; concrete use case validated; cost of existing settlement rails (ICP.md L65-73)

**Anti-ICP:** Unlicensed buyer (re-route or disqualify); wants Aryze as issuer/operator; needs only simple stablecoin deployment (re-route to Factory); no identified executive sponsor and no path to one (ICP.md L148-158).

### Buyer persona

- **Primary:** **Executive Sponsor** (CFO, COO, Chief Digital Officer — Board-adjacent). Identify early — deal doesn't close without one (ICP.md L110)
- **Line leadership:** Head of Treasury, Head of Transaction Banking, Head of Payments, Digital Assets Lead, CFO, COO (ICP.md L111-117)
- **Secondary (decisive but not daily):** CIO/CTO, Chief Compliance Officer/MLRO, General Counsel, Risk Committee (ICP.md L119-123)

**What they care about:** Control, credibility, infrastructure depth, regulator-readiness, integration with existing systems, multi-year partnership (ICP.md L92-101)

**What they need to see to engage:** Credible operating model (not marketing deck); architecture-diagram for CTO/Risk; legal pre-read for General Counsel; multi-stakeholder workshop (Persona §4.1-4.4)

**What kills the deal:** "Live in 6 weeks" (wrong scale); "stablecoin" used loosely with Treasury; "plug-and-play" language; positioning Aryze as issuer or operator; promising regulator approval (Persona §5)

### Capability gospel

**One-line position:** *"The infrastructure layer for institutions that want to operate digital cash properly."* (Product-Description.md L85)

**Top capabilities (LIVE):**
- Issuance under institution's licence — Aryze is NOT issuer (Product-Description.md L93)
- Settlement — clearing and settlement between participants (Product-Description.md L94)
- On/off-ramps via Mastercard Open Banking partnership (Product-Description.md L95)
- Treasury functionality — liquidity management, reserve handling (Product-Description.md L96)
- Multi-currency issuance — several currencies on same operating layer (Product-Description.md L97)
- Interoperability + asset movement across networks/counterparties (Product-Description.md L98-99)
- Governance hooks — controls, approvals, audit trails (Product-Description.md L100)
- ISO 20022, FATF, MiCA conformance where relevant; AML/KYC/sanctions screening hooks built-in (Product-Description.md L107-108)

**Hard limits (NOT delivered):**
- **Aryze does NOT hold the institution's licence** (Product-Description.md L117)
- **Aryze is NOT issuer** — institution issues (Product-Description.md L118)
- **Aryze does NOT operate the programme** — institution operates under own licence (Product-Description.md L119)
- **NOT "live in 6 weeks"** — cycle is 6-18 months (Product-Description.md L120)
- **NOT plug-and-play** — destroys credibility with buying committee (Product-Description.md L121)
- **NO consortium-building** — that's Fnality/Partior territory (Product-Description.md L122)
- **NO central bank functions** — Aryze is not a central bank vendor (Product-Description.md L124)
- **NO licence delivery** (Product-Description.md L125)

**Geographic + licensing:** Not jurisdiction-bounded; MiCA-aligned in EU; institution operates under own existing licence. Specific networks/jurisdictions/custody partners confirmed per deal (Product-Description.md L123).

### Value proposition

**Top 3 customer pains:**
1. Issuance ≠ operation — simple issuance doesn't solve settlement, liquidity, treasury, ramps, compliance, auditability, interoperability, reporting (ICP.md L79)
2. Internal build is slow (12-24 months), expensive (5+ FTEs), complex (ICP.md L80)
3. Governance/compliance stakeholders require credible operating model — pilots without operating story don't pass risk committee (ICP.md L81)

**Top 3 gains:**
1. Controlled issuance under own licence — Aryze must NOT become issuer (ICP.md L93)
2. Full operational infrastructure behind the token — settlement, ramps, treasury, multi-currency, interoperability (ICP.md L94)
3. Credible operating model that defends to regulators, board, counterparties (ICP.md L96)

**Top 3 jobs:**
1. Issue digital cash under own licence and governance (VPC.md L24)
2. Run programmes meeting treasury/settlement/liquidity/value-movement use cases (VPC.md L25)
3. Settle transactions on-ledger with credible operational backing (VPC.md L26)

### Sales motion

- **Cycle:** 6-18 months (master CLAUDE.md; Product-Description.md L154)
- **Who initiates:** Direct institutional outreach; warm intros via advisors/lawyers/regulators/industry bodies; conferences (Sibos, Money20/20, Point Zero, Digital Assets Week); RFP inbound; regulator-driven intros (Product-Description.md L135-142)
- **What proves it:** Multi-stakeholder workshop with treasury/legal/compliance/tech; solution architecture against existing stack; executive-sponsor brief; legal/risk pre-read; phased pilot or fase-1 deployment (Product-Description.md L144-155)

### Real customer examples

Not in source — no named Digital Cash customers in canonical files. Peer-reference banks mentioned for context only: JPM Coin, Citi Token Services, BBVA, Santander (Tier-1 references, NOT Aryze customers) (ICP.md L194; Product-Description.md L221).

---

## Qualification standard — what Aryze considers "qualified"

**Universal qualifiers across all three products:**
- Concrete use case in one sentence (not "we're exploring") (Factory ICP.md L138; DC ICP.md L131)
- Identified decision-owner / executive sponsor (Factory: founder/CTO; DC: Board-adjacent sponsor; PbB: Payments Ops Lead) (each persona §1)
- Budget framing exists (Factory: motion-fit pricing; DC: capex/opex line, not pilot; PbB: card P&L impact visible) (each ICP.md)
- Trigger event present — *why this quarter* (compliance deadline, peer move, funding round, VAMP threshold, scheme-fee pressure)
- Customer holds licence (Factory + DC); merchant has internal payment owner (PbB)
- Technical maturity to integrate / evaluate

**Product-specific minimum-info before pitching concrete:**

| Product | Must answer before pitching |
|---|---|
| Pay by Bank | Volume + AOV (Q1), blended card fee % (Q2), current stack/PSP (Q5) (PbB Persona §8 Play 3) |
| Stablecoin Factory | Use case (Q1), stage (Q2), motion fit (Q6) (Factory Persona §8 Play 3) |
| Digital Cash | Licence status (Q1), use case (Q2), executive sponsor (Q4), timeline (Q7) (DC Persona §8 Play 3) |

**The single most important Factory-vs-DC qualifier:** *"Simple deployment, or full institutional operation?"* — Simple → Factory. Full → Digital Cash (Factory Persona §8).

---

## Top sales objections per product

### Pay by Bank (Persona §8 Play 2)
1. "We already have an open-banking provider (Trustly/TrueLayer/Volt)" — acknowledge, pivot to specific job their provider doesn't fill (theming, pricing, market depth)
2. "Our chargeback rate is fine" — ask the number; reference VAMP April 2026 (1.5%, acquirers held at 0.5-0.7%)
3. "How do we know it will convert?" — never quote conversion % without their data; reference RememberMe (~50% faster repeat)
4. "What about payouts/withdrawals?" — direct: "Not productised at Aryze today. We cover deposits/top-ups/customer funding"
5. "Integration will be a long project" — onboarding is 4-step; integration sits on top of existing checkout, not rebuild

### Stablecoin Factory (Persona §8 Play 2)
1. "Why Aryze and not Fireblocks/Circle/Brale?" — acknowledge; pivot to self-serve speed + path upward to Digital Cash
2. "Can Aryze issue the stablecoin for us?" — direct NO; customer is issuer
3. "We need full settlement + treasury + ramps from day one" — re-route to Digital Cash; don't sell Factory as lightweight DC
4. "Can you tokenise [specific RWA asset class]?" — calibrate asset class; verify with product before promising
5. "How fast can we be live?" — weeks-to-a-quarter for own programme; never "2 weeks" without seeing stack

### Digital Cash (Persona §8 Play 2)
1. "Why not build internally?" — acknowledge; 12-24 months + 5+ FTEs reality; phase as partnership
2. "How do we know this is regulator-friendly?" — frame model (institution remains issuer/operator); offer MLRO/GC workshop
3. "What about Fnality/Partior/JPM Onyx?" — acknowledge; single-institution vs consortium-binding positioning
4. "How fast can we be live?" — honest 6-18 months; phase-1 possible in 4-6 months on narrow scope
5. "Aryze is small — stable enough for institutional infrastructure?" — frame architecture preserves control; Mastercard partnership credibility; vendor due-diligence expected

---

## KYB / Onboarding gates referenced

### Pay by Bank
- **4-step onboarding** (Product-Description.md L123-128):
  1. Map payment flow — volume, markets, current friction
  2. **KYB** — company verification, documentation, approvals
  3. Integration & test — callbacks, reporting, sandbox journeys
  4. Go live — monitoring, support, handover
- **Sandbox access:** `https://digitalonepager.aryze.io/sandbox-access` (Product-Description.md L209)
- **Booking link:** `https://cal.com/rabiiahmadesteitie/lets-connect` (Product-Description.md L210)
- **Open questions (Persona §9):** Sandbox access workflow (self-serve vs gated); refund clarification with product; VAMP exposure check service

### Stablecoin Factory
- **Technical readiness gate:** Customer must have technical team able to use sandbox + docs (ICP.md L33)
- **Issuer-model gate:** Customer (or parent/partner licensed entity) must hold the licence — Aryze does NOT deliver licence (ICP.md L34, L160)
- **Motion-fit gate:** Own Programme / Partner-Led / White-Label confirmed before commercial scoping (Product-Description.md L155)
- **Typical motion (Product-Description.md L191-198):** Inbound/warm intro → qualifying call → technical walkthrough + sandbox → solution scoping → commercial framing → deployment → path to scale
- **Open questions (Persona §9):** Sandbox public URL or gated form (unclear); public docs URL; supported networks list; RWA capability matrix; MiCA EMT/ART status

### Digital Cash
- **Licence gate:** Institution must already be licensed; licence must cover digital cash issuance or related activities (ICP.md L29, L133)
- **Executive sponsor gate:** Board-adjacent champion identified before deal can progress (ICP.md L125)
- **Multi-stakeholder gate:** Institution must be able to engage treasury, legal, compliance, risk, and technology simultaneously (ICP.md L31)
- **Typical motion (Product-Description.md L144-155):**
  1. Discovery (multi-touch) — confirm licence, surface use case, identify exec sponsor
  2. Workshop / deep-dive — treasury + compliance + technology in room
  3. Solution architecture — map existing stack
  4. Commercial framing — phased deployment, pricing, success criteria
  5. Legal / risk / procurement (several months)
  6. Pilot or phase-1 deployment
  7. Live operation + expansion
- **Document gates referenced (Persona §4.1-4.4):** Executive-Sponsor Brief; multi-stakeholder workshop facilitation; 1-page architecture diagram; legal/risk pre-read (contract framework, indemnification, IP/data ownership, exit/migration, vendor due-diligence support, compliance hooks)
- **Open questions (Persona §9):** Architecture-diagram template; compliance-pack-for-procurement (SOC 2 / ISO 27001 / AML programme summary location); reference architecture per use case; multi-year framework agreement template; CFO settlement-cost calculator

---

## Cross-product positioning rule (critical)

**Never mix the three products.** From Stablecoin Factory VPC.md L183-193 and Digital Cash VPC.md L214-224:

| Question | Pay by Bank | Stablecoin Factory | Digital Cash |
|---|---|---|---|
| Who is issuer? | N/A (merchant payments) | Customer | Institution |
| Who operates? | Merchant | Customer (self-serve) | Institution (institutional scale) |
| Aryze's role | Payment rail infrastructure | Deployment infrastructure | Operating infrastructure |
| Sold on | Payment performance, cost, control | Speed, simplicity, deployment path | Control, credibility, infrastructure depth |
| Cycle | 6-12 wks SMB / 3-6 mo enterprise | Weeks to a quarter (Own Prog) | 6-18 months |
| Pricing | Fixed fee per tx | Self-serve / motion-specific | Enterprise multi-year |
| Buyer | Payments Operations Lead | Founder, CTO, product lead, innovation lead | Executive sponsor + treasury, MLRO, GC, risk |

**Mixing them is the most common way Aryze loses a deal** (master CLAUDE.md).
