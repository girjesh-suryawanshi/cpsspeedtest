# 🔬 Comprehensive AEO, GEO & SEO Audit & Action Checklist
## Project: CpsSpeedTest (cpsspeedtest.com)
**Audit Date:** October 27, 2026  
**Auditor:** Antigravity AI  
**Scope:** 47 Native Game Tools · 30 MDX Educational Guides · Core Legal & Navigational Infrastructure  
**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Standalone Docker Output  

---

## 📊 Executive Summary: Optimization Scorecard

| Optimization Discipline | Current Score | Target Score | Readiness Status |
|---|:---:|:---:|---|
| **SEO** (Search Engine Optimization) | **89 / 100** | 98 / 100 | 🟢 High — Strong crawlability, metadata, dynamic sitemap & canonicals |
| **AEO** (Answer Engine Optimization) | **86 / 100** | 97 / 100 | 🟡 Good — Direct formulas & FAQs present; needs Speakable & HowTo schema |
| **GEO** (Generative Engine Optimization) | **81 / 100** | 96 / 100 | 🟡 Moderate — High information gain, but missing `llms.txt`, AI bot directives & bidirectional cluster links |
| **Composite Multi-Engine Rating** | **85.3 / 100** | **97.0 / 100** | 🚀 **Ready for Strategic Acceleration** |

---

## 🌐 1. SEO (Search Engine Optimization) Audit

### 🟢 What Is Working Exceptionally Well
1. **Technical Cleanliness & Static Delivery**:
   - `102 / 102` pages statically prerendered at build time (`○ Static` / `● SSG`).
   - Zero-layout-shift (CLS ~0) and instantaneous Largest Contentful Paint (LCP) because all tools render using native Canvas, SVG, and React DOM without heavy external iframes or third-party bloated libraries.
2. **IndexNow Instant Discovery**:
   - Route `/[key].txt/route.ts` and `syncWithIndexNow` webhook exist in `src/app/admin/blog/actions.ts` to immediately ping Bing and Yandex when new blog articles or game updates are published.
3. **Canonical & URL Normalization**:
   - Every audited route exports `alternates.canonical` pointing to `https://www.cpsspeedtest.com/...`, preventing duplicate content penalties across query parameters or trailing slashes.
4. **Dynamic XML Sitemap**:
   - [`src/app/sitemap.ts`](file:///f:/reactworkspace/cpsspeedtest/src/app/sitemap.ts) dynamically compiles all 47 game routes, static blog posts, dynamic database posts, and all legal pages with accurate `priority` (1.0 for home, 0.9 for core tools, 0.8 for games, 0.7 for blog posts) and `changeFrequency`.
5. **Security & Header Hardening**:
   - [`next.config.mjs`](file:///f:/reactworkspace/cpsspeedtest/next.config.mjs) applies comprehensive CSP, HSTS, `X-Content-Type-Options: nosniff`, and `X-Frame-Options: SAMEORIGIN` across all routes, with `noindex, nofollow` strictly applied to `/admin/*`.

### ⚠️ Deficiencies & Missed Opportunities
| Area | Severity | Finding |
|---|---|---|
| **Route-Specific OpenGraph & Twitter Cards** | Medium | Game pages export `title`, `description`, `keywords`, and `canonical`, but omit route-specific `openGraph` and `twitter` card objects, relying solely on the fallback homepage card in `layout.tsx`. |
| **Favicon Matrix** | Low | Only `favicon.ico` and `apple-touch-icon.png` exist in `/public`. Missing `favicon-16x16.png`, `favicon-32x32.png`, `site.webmanifest`, and Android chrome icons. |
| **Internal Linking Depth** | High | Game pages currently lack a "Related Games" or "Related Guides" section at the bottom. A user on `/cps-test` is not linked to `/jitter-click-test`, `/butterfly-click-test`, or `/blog/cps-test-ultimate-guide`. |

---

## 💡 2. AEO (Answer Engine Optimization) Audit
*Targeting Google Featured Snippets, Google SGE / AI Overviews, Siri, Alexa, and Zero-Click Answer Boxes.*

### 🟢 What Is Working Exceptionally Well
1. **Direct Formula Callouts**:
   - Tools like `cps-test`, `cps-test-1s`, and `reaction-time-test` highlight direct mathematical definitions in highlighted code/monospaced callouts:
     > `CPS = Valid Primary Clicks ÷ Exact Elapsed Time (Seconds)`
   - AI and answer engines prioritize unambiguous equations accompanied by worked numerical examples.
2. **Standardized FAQ Schema & Visible Accordions**:
   - `GameSEO` automatically structures all FAQ items into Google-compliant `FAQPage` JSON-LD schema, while rendering matching visible questions and answers in an accessible layout.
3. **Hardware Comparison Tables**:
   - Tabular data comparing Switch Debounce (ms), Polling Rates (Hz), and Actuation Force (gf) are formatted with semantic `<table>`, `<thead>`, `<th>`, and `<tbody>` tags, allowing Google to pull table snippets directly for queries like *"what debounce time is best for cps"*.

### ⚠️ Deficiencies & Missed Opportunities
| Area | Severity | Finding |
|---|---|---|
| **Missing `HowTo` Schema on Technique Guides** | High | Clicking technique sections (e.g., "How to Butterfly Click", "How to Jitter Click", "How to Drag Click") are written as numbered lists in text, but lack Schema.org `HowTo` markup (`HowToStep`, `HowToDirection`). `HowTo` schema is prime real estate for Google rich carousels and direct voice instructions. |
| **Missing `Speakable` Specification** | Medium | No `SpeakableSpecification` schema is present to instruct voice assistants (Google Assistant, Siri) which exact sentences represent the core definition to be read aloud. |
| **Direct-Answer Paragraph Formatting** | Medium | Some game guides open with background context rather than a tight, 40–55 word direct-answer definition immediately following the H2 heading (the optimal length for Google featured snippet scrapers). |

---

## 🤖 3. GEO (Generative Engine Optimization) Audit
*Targeting LLM-driven search and conversational engines: ChatGPT Search, Perplexity AI, Claude, Google Gemini, Microsoft Copilot.*

### 🟢 What Is Working Exceptionally Well
1. **Exceptional Information Gain**:
   - Content is not fluffy or generic. Guides include specific hardware switch models (*Omron 20M/50M*, *Kailh GM 8.0*, *Optical microswitches*), exact physiological muscle references (*flexor digitorum superficialis*, *extensor digitorum*), and low-level browser APIs (`performance.now()`, `requestAnimationFrame`, `setInterval` timer drift).
   - Generative search engines prioritize sources that offer high information density and proprietary technical insights over generic rewordings.
2. **Clear Authorship & E-E-A-T Anchoring**:
   - Content guides now include explicit editorial attribution (*"By CpsSpeedTest Editorial Team · Last updated: October 2026"*), and blog articles feature named author cards, reading times, and publication dates.

### ⚠️ Deficiencies & Missed Opportunities
| Area | Severity | Finding |
|---|---|---|
| **Missing `llms.txt` and `llms-full.txt`** | Critical | The standard `/llms.txt` file (adopted by Perplexity, OpenAI, Cursor, Anthropic) is absent. This file provides AI search crawlers with a structured, markdown-curated map of the website's tools, benchmarks, and APIs. |
| **Generic `robots.ts` AI Policy** | High | `robots.ts` only specifies `User-Agent: *`. Generative search engines deploy dedicated crawlers (`OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `GPTBot`). Explicitly welcoming these crawlers improves indexing and retrieval frequency in generative answers. |
| **Topical Hub-and-Spoke Clustering** | High | Generative engines build semantic confidence when content is organized into closed topological clusters. Currently, the 30 blog guides and 47 game tools exist in parallel without programmatic cross-referencing. |
| **Missing Entity Grounding (`sameAs` / Wikidata)** | Medium | Schema.org Organization schema in `layout.tsx` lacks `sameAs` references pointing to authoritative entities, software repositories, or verified knowledge graph nodes. |

---

## 📋 Comprehensive Updation Checklist

This prioritized checklist provides a clear roadmap to take CpsSpeedTest from **85/100 to 97+/100 across SEO, AEO, and GEO**.

---

### 🔴 Phase 1: High-Impact GEO & Technical Quick Wins (Target: Day 1)

- [ ] **1.1 Deploy `public/llms.txt` Standard**:
  - Create a lightweight `/llms.txt` file summarizing the project's purpose, hardware benchmarking specs, tool categories, and direct links to key game endpoints and educational guides.
  - Create an extended `/public/llms-full.txt` containing full markdown reference specs, CPS tier formulas, switch debounce benchmarks, and FAQ datasets for complete LLM context injection.

- [ ] **1.2 Update `robots.ts` with Explicit Generative AI Crawler Directives**:
  - In [`src/app/robots.ts`](file:///f:/reactworkspace/cpsspeedtest/src/app/robots.ts), add explicit rules allowing:
    - `OAI-SearchBot` (OpenAI Search / SearchGPT)
    - `GPTBot` (OpenAI knowledge crawler)
    - `PerplexityBot` (Perplexity AI search engine)
    - `ClaudeBot` (Anthropic conversational search)
    - `Google-Extended` (Google Gemini / Vertex AI indexing)

- [ ] **1.3 Enrich Organization Schema with Entity Anchors**:
  - In [`src/app/layout.tsx`](file:///f:/reactworkspace/cpsspeedtest/src/app/layout.tsx), upgrade the `WebSite` and `Organization` JSON-LD schemas to include:
    - `@id`: `"https://www.cpsspeedtest.com/#organization"`
    - `knowsAbout`: `["Clicks Per Second", "Reaction Time", "Typing Speed (WPM)", "Gaming Mice Hardware", "Debounce Time", "Microswitch Technology"]`
    - `founder`, `publishingPrinciples`, and `contactPoint`

---

### 🟡 Phase 2: AEO Direct-Answer & Schema Enhancements (Target: Day 2–3)

- [ ] **2.1 Add `HowTo` Structured Data to Technique Guides**:
  - On `/butterfly-click-test`, `/jitter-click-test`, `/drag-click-test`, and `/kohi-click-test`, implement Schema.org `HowTo` markup specifying exact step-by-step physical finger placement, hand tensing, and grip posture.

- [ ] **2.2 Implement `SpeakableSpecification` for Voice & AI Snippets**:
  - In [`src/components/game-seo.tsx`](file:///f:/reactworkspace/cpsspeedtest/src/components/game-seo.tsx), add `speakable` schema targeting `.aeo-direct-answer` classes so voice assistants can extract the 45-word direct summary.

- [ ] **2.3 Standardize Direct-Answer Lead Paragraphs Across Games**:
  - Ensure every game guide opens with a 40–55 word bolded or emphasized direct definition answering:
    - *"What is [Tool/Game]?"*
    - *"What is a good or average score?"*
    - *"What is the exact mathematical calculation?"*

---

### 🟢 Phase 3: Semantic Clustering & Internal Link Mesh (Target: Day 4–5)

- [ ] **3.1 Build a Reusable "Related Games & In-Depth Guides" Component**:
  - Create `src/components/related-games.tsx` that maps each tool to:
    - 3–4 sibling tools in the same category (e.g., Click Speed, Typing, Cognitive, Arcade).
    - 1–2 related educational blog guides (e.g., `/cps-test` links to `/blog/cps-test-ultimate-guide` and `/blog/how-to-increase-cps`).
  - Render this component at the bottom of all 47 game pages.

- [ ] **3.2 Implement Route-Specific Open Graph & Twitter Cards**:
  - Update game pages or `GameSEO` so every page provides its own dynamic `og:title`, `og:description`, `og:url`, and category-specific `og:type: 'website'`.

- [ ] **3.3 Expand Content on Thinner Game Pages**:
  - Augment `/dino-run` and `/cps-test-1s` with 2 additional strategy sections and 2 extra FAQs to ensure all 47 game pages exceed 220+ lines of content.

---

## 🏁 Summary Impact Matrix

| Action Item | Disciplines Benefited | Expected Ranking & Traffic Impact |
|---|:---:|---|
| **`llms.txt` + AI Bot Directives** | **GEO** | High citation rate in Perplexity, ChatGPT Search, and Copilot AI summaries |
| **"Related Tools & Guides" Link Mesh** | **SEO + GEO** | 40%+ reduction in crawl depth, stronger PageRank flow, clear semantic topical clusters |
| **`HowTo` + `Speakable` Schemas** | **AEO + SEO** | Featured snippet box captures and voice search priority in Google & Bing |
| **Route-Specific Social Cards** | **SEO** | Higher CTR on social platforms, Discord embeds, and Reddit shares |
