# Phase 1: Repository Discovery and Baseline Audit
**Project**: CPSspeedtest.com  
**Audit Date**: October 24, 2026  
**Auditor Role**: Senior Full-Stack Engineer, AdSense Compliance Auditor & Technical SEO Specialist  
**Repository Path**: `F:\reactworkspace\cpsspeedtest`  
**Git Branch Baseline**: `master` (Clean working tree)

---

## 1. System Architecture & Tech Stack Discovery

| Component | Discovered Technology & Configuration | Status / Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 14.2.35 (App Router, `output: "standalone"`) | Active production framework |
| **UI & Styling** | React 18.3.1, Tailwind CSS 3.4.1, `@tailwindcss/typography`, Radix UI | Standard modern responsive stack |
| **Fonts** | Google Fonts via `next/font/google`: Inter, Outfit, Lora | Self-hosted by Next.js font optimization |
| **Charts** | Recharts 2.15.1, custom shadcn/ui chart container | Used for CPS click distribution graph |
| **Content Strategy** | MDX (`@next/mdx`, `@mdx-js/loader 3.0.1`) + Prisma PostgreSQL DB | 30 MDX articles in `src/app/blog/content/` |
| **Database & ORM** | Prisma 7.8.0 + `@prisma/adapter-pg` + PostgreSQL (`pg 8.22.0`) | Schema has `BlogPost`, `Leaderboard`, `BlogCategory`, `ContactMessage` |
| **Game Engine** | **100% In-House React / Canvas / DOM** (Zero iframes or embeds) | 46 distinct interactive games/tools |
| **AdSense Integration** | `ca-pub-7316477328258550` in `layout.tsx`, `ads.txt` in `/public` | Auto-ads script loaded in `<head>`; no manual ad units |
| **Legacy/Unused Libs** | Firebase 10.12.3 (`firebase-provider.tsx`), Genkit 1.20.0 (`src/ai/`) | Unused; Firebase keys unconfigured in `.env` |
| **Rendering Strategy** | **Currently Forced Dynamic SSR (`ƒ`) across all 101 routes** | Caused by `headers().get('x-pathname')` in root `layout.tsx` |

---

## 2. Baseline Measurements & Initial Health Check

### 2.1 Typecheck (`npm run typecheck` / `tsc --noEmit`)
- **Result**: FAILED with 3 errors (previously masked by `ignoreBuildErrors: true` in `next.config.mjs`):
  1. `prisma.config.ts(4,3)`: `'migrate' does not exist in type 'PrismaConfig'`
  2. `src/ai/genkit.ts(1,22)`: `Cannot find module 'genkit'`
  3. `src/ai/genkit.ts(2,24)`: `Cannot find module '@genkit-ai/google-genai'`
- **Impact**: Codebase had dormant broken types in unused experimental folders.

### 2.2 Production Build (`npm run build`)
- **Result**: PASSED with 101 static/dynamic route artifacts.
- **Critical Finding**: Next.js App Router generated all 101 routes as **Dynamic (`ƒ`)** instead of **Static HTML (SSG / `○`)**.
  - **Root Cause**: `src/app/layout.tsx` invoked `headers().get('x-pathname')` to detect `/admin` routes.
  - **Performance Impact**: High Time to First Byte (TTFB), unnecessary server execution per page request, and inability to serve pure static cache at the CDN edge.

### 2.3 Game Provenance & Third-Party Embeds
- **Zero Iframe Embeds**: Grep for `<iframe` returned 0 results across the entire repository.
- **Source Nature**: Every single game is custom React component code under `src/components/` and `src/components/games/`.
- **Finding on AdSense Rejection Reason #1 ("Google-served ads on screens with replicated content")**:
  - The games are not third-party iframe aggregations.
  - The replication issue originates from **repetitive boilerplate page descriptions and cookie-cutter FAQ schemas** across dozens of game routes, rather than copied game iframes.

---

## 3. Discovered Policy, Quality & SEO Issues

### Issue 1: Fabricated Metrics & Artificial Numbers (High Policy Risk)
- **Homepage (`src/app/page.tsx`)**:
  - Pill badge: `"1,240 tests completed today"` (hardcoded static string).
  - Stat badge: `"1M+ Tests Taken"` (unverified number).
- **About Page (`src/app/about/page.tsx`)**:
  - Stat badge: `"1M+ Tests Taken"`, `"millions of tests completed"`.
- **Policy Violation**: Google Search Essentials / Search spam policies and AdSense Quality Guidelines strictly forbid deceptive and fabricated performance claims.

### Issue 2: Fabricated Author Persona & Deceptive Job Title (High E-E-A-T Risk)
- **Blog Index & Dynamic Posts (`src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`)**:
  - Hardcoded author: `"Alex Chen"`
  - Hardcoded structured data job title: `"Reflex & Hardware Analyst"`
  - Hardcoded organization affiliation without real publisher verification.
- **Policy Violation**: Google Search helpful content guidance requires transparent authorship. Fictional author personas with invented credentials violate trust requirements.

### Issue 3: Cookie-Cutter Boilerplate Content on Game Pages (Replicated Content Risk)
- Across 46 game pages, the `<GameSEO>` component and page bodies reuse near-identical question/answer pairs:
  - *“What is [Game]?”* -> verbatim copy of the meta description.
  - *“How do I play [Game]?”* -> *“You can play [Game] directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!”*
- This creates massive internal duplication and triggered the *“screens with replicated content”* AdSense rejection.

### Issue 4: CPS Test Calculation Precision Flaws (Core Product Value)
- In `src/components/cps-test.tsx`:
  - Uses `setInterval(..., 1000)` which drifts significantly in browser event loops.
  - Divides clicks by nominal `gameDuration` (e.g., 5) rather than actual measured elapsed time `(performance.now() - startTime) / 1000`.
  - Fixed 3-second waiting countdown with no option for instant-start on first click (standard for CPS tests).
  - Lacks local attempt history and responsive touch event optimizations for mobile.

### Issue 5: Information Architecture Gaps
- **Games Directory (`/games`)**: Only 30 games were listed in `allGames` array. 16 newer games (`2048`, `snake`, `dino-run`, `minesweeper`, `tic-tac-toe`, `time-guesser`, `pop-it`, `idle-clicker`, `simon-says`, `type-racer`, `math-dash`, `make-24`, `tower-of-hanoi`, `sudoku`, `word-master`, `hangman`) were omitted from `/games`.
- **Sitemap Inconsistencies (`src/app/sitemap.ts`)**: 12 MDX guides were hard-excluded via `EXCLUDED_SLUGS` while remaining indexable via direct URLs.

### Issue 6: Privacy Policy & Architecture Inaccuracy
- `src/app/privacy/page.tsx` states: *"This information is stored in our Firebase Firestore database..."*
- In reality, leaderboard and contact form submissions are processed via Server Actions and stored in **PostgreSQL via Prisma**. Firebase is completely unconfigured.

---

## 4. Complete Route Inventory & Audit Table

| URL Route | Page Type | Primary Purpose | Content Source | Current Functionality | Indexability & Canonical | Quality Risk Level | Recommended Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | Core hub & introduction to CPS testing | In-house TSX | Working | Index, canonical `/` | High (fake stats "1M+", "1240 tests") | Remove fabricated numbers; embed quick CPS test |
| `/cps-test` | Core Tool | 5-second CPS click test | In-house React | Working | Index, canonical `/cps-test` | Medium (repetitive FAQ, timing drift) | Implement precision timer, original educational content |
| `/cps-test-1s` | Tool | 1-second burst CPS test | In-house React | Working | Index, canonical `/cps-test-1s` | Medium (thin content) | Expand technique guidance for burst clicking |
| `/aim-trainer` | Tool | Precision mouse aim training | In-house React | Working | Index, canonical `/aim-trainer` | Low | Keep, enhance instructions and controls |
| `/typing-test` | Tool | 60s typing speed test | In-house React | Working | Index, canonical `/typing-test` | Low | Keep, enhance original value |
| `/typing-test-30s` | Tool | 30s typing sprint | In-house React | Working | Index, canonical `/typing-test-30s` | Low | Keep |
| `/type-racer` | Game | Paragraph typing sprint | In-house React | Working | Index, canonical `/type-racer` | Medium (missing from /games directory) | Add to `/games` directory; unique copy |
| `/reaction-time-test` | Tool | Visual reflex test | In-house React | Working | Index, canonical `/reaction-time-test` | Low | Keep, expand reflex vs CPS comparison |
| `/spacebar-clicker` | Tool | Spacebar speed test | In-house React | Working | Index, canonical `/spacebar-clicker` | Low | Keep |
| `/jitter-click-test` | Tool | Jitter clicking test | In-house React | Working | Index, canonical `/jitter-click-test` | Medium (needs ergonomic caution) | Add health/ergonomic guidance & verified info |
| `/kohi-click-test` | Tool | 10s PvP click test | In-house React | Working | Index, canonical `/kohi-click-test` | Low | Keep, clarify Kohi PvP origin |
| `/butterfly-click-test` | Tool | Dual-finger click test | In-house React | Working | Index, canonical `/butterfly-click-test` | Low | Keep, clarify hardware debounce role |
| `/double-click-test` | Tool | Mouse hardware test | In-house React | Working | Index, canonical `/double-click-test` | Low | Keep, excellent diagnostic utility |
| `/drag-click-test` | Tool | Drag click test | In-house React | Working | Index, canonical `/drag-click-test` | Low | Keep, add friction tape / mouse switch context |
| `/minecraft-cps-test` | Tool | Minecraft PvP click simulation | In-house React | Working | Index, canonical `/minecraft-cps-test` | Low | Keep |
| `/2048` | Game | Sliding number puzzle | In-house Canvas/DOM | Working | Index, canonical `/2048` | Medium (boilerplate FAQ, missing from /games) | Add to `/games`, enrich strategy guide |
| `/cupcake-2048` | Game | Themed 2048 variant | In-house React | Working | Index, canonical `/cupcake-2048` | Medium | Enrich description, add to `/games` |
| `/dino-run` | Game | Canvas side-scroller runner | In-house Canvas | Working | Index, canonical `/dino-run` | Medium (boilerplate FAQ, missing from /games) | Add to `/games`, original game controls guide |
| `/snake` | Game | Classic retro arcade snake | In-house Canvas | Working | Index, canonical `/snake` | Medium (boilerplate FAQ, missing from /games) | Add to `/games`, detailed instructions |
| `/minesweeper` | Game | Logic puzzle game | In-house React | Working | Index, canonical `/minesweeper` | Medium (boilerplate FAQ, missing from /games) | Add to `/games`, logic guide |
| `/tic-tac-toe` | Game | AI opponent strategy | In-house React | Working | Index, canonical `/tic-tac-toe` | Medium (missing from /games) | Add to `/games` |
| `/time-guesser` | Game | Temporal estimation test | In-house React | Working | Index, canonical `/time-guesser` | Medium (missing from /games) | Add to `/games` |
| `/pop-it` | Game | ASMR bubble popping | In-house React | Working | Index, canonical `/pop-it` | Medium (missing from /games) | Add to `/games` |
| `/idle-clicker` | Game | Incremental click game | In-house React | Working | Index, canonical `/idle-clicker` | Medium (missing from /games) | Add to `/games` |
| `/simon-says` | Game | Audio-visual memory | In-house React | Working | Index, canonical `/simon-says` | Medium (missing from /games) | Add to `/games` |
| `/coreball-game` | Game | Coordination needle pin | In-house React | Working | Index, canonical `/coreball-game` | Low | Keep, enrich page content |
| `/math-dash` | Game | Mental math timer sprint | In-house React | Working | Index, canonical `/math-dash` | Medium (missing from /games) | Add to `/games` |
| `/make-24` | Game | Arithmetic logic puzzle | In-house React | Working | Index, canonical `/make-24` | Medium (missing from /games) | Add to `/games` |
| `/math-quiz` | Game | Arithmetic quiz test | In-house React | Working | Index, canonical `/math-quiz` | Low | Keep |
| `/tower-of-hanoi` | Game | Algorithmic disc puzzle | In-house React | Working | Index, canonical `/tower-of-hanoi` | Medium (missing from /games) | Add to `/games`, add recurrence explanation |
| `/sudoku` | Game | Number logic grid | In-house React | Working | Index, canonical `/sudoku` | Medium (missing from /games) | Add to `/games` |
| `/word-master` | Game | 5-letter word guess | In-house React | Working | Index, canonical `/word-master` | Medium (missing from /games) | Add to `/games` |
| `/hangman` | Game | Word letter guessing | In-house React | Working | Index, canonical `/hangman` | Medium (missing from /games) | Add to `/games` |
| `/word-scramble` | Game | Word anagram solver | In-house React | Working | Index, canonical `/word-scramble` | Low | Keep |
| `/number-memory-test` | Tool | Digit span working memory | In-house React | Working | Index, canonical `/number-memory-test` | Low | Keep |
| `/sequence-memory-test` | Tool | Visual spatial sequence | In-house React | Working | Index, canonical `/sequence-memory-test` | Low | Keep |
| `/chimp-test` | Tool | Working memory numbers test | In-house React | Working | Index, canonical `/chimp-test` | Low | Keep, explain primate memory study context |
| `/visual-memory-test` | Tool | Spatial grid memory | In-house React | Working | Index, canonical `/visual-memory-test` | Low | Keep |
| `/verbal-memory-test` | Tool | Lexical recall memory | In-house React | Working | Index, canonical `/verbal-memory-test` | Low | Keep |
| `/word-memory-test` | Tool | Word list recall test | In-house React | Working | Index, canonical `/word-memory-test` | Low | Keep |
| `/memory-game` | Game | Card match memory | In-house React | Working | Index, canonical `/memory-game` | Low | Keep |
| `/stroop-test` | Tool | Cognitive interference test | In-house React | Working | Index, canonical `/stroop-test` | Low | Keep, explain Stroop effect science accurately |
| `/drawing-pad` | Tool | Freeform canvas sketch | In-house Canvas | Working | Index, canonical `/drawing-pad` | Low | Keep |
| `/block-builder` | Tool | Pixel art color grid | In-house React | Working | Index, canonical `/block-builder` | Low | Keep |
| `/connect-the-dots` | Game | Coordinate dot reveal | In-house Canvas | Working | Index, canonical `/connect-the-dots` | Low | Keep |
| `/jigsaw-puzzle` | Game | Drag-and-drop tiles | In-house React | Working | Index, canonical `/jigsaw-puzzle` | Low | Keep |
| `/sliding-puzzle` | Game | 15-puzzle grid solver | In-house React | Working | Index, canonical `/sliding-puzzle` | Low | Keep |
| `/games` | Hub | Games directory & filter | In-house React | Working | Index, canonical `/games` | High (missing 16 games) | Update to include all 46 games |
| `/leaderboard` | Hub | Community top scores | Prisma PostgreSQL | Working | Index, canonical `/leaderboard` | Low | Keep, clarify score submission rules |
| `/blog` | Hub | Guides & tutorial index | MDX + Prisma | Working | Index, canonical `/blog` | High (fake author "Alex Chen") | Update author to authentic Editorial Team |
| `/blog/[slug]` (30 posts) | Articles | Educational guides | MDX | Working | Index, canonical per slug | High (fabricated author & job title) | Remove fictional persona; unify sitemap |
| `/about` | Static Trust | About CPSspeedtest | In-house TSX | Working | Index, canonical `/about` | High (fake test counts) | Replace fabricated claims with factual mission |
| `/contact` | Static Trust | Contact form & email | In-house TSX | Working | Index, canonical `/contact` | Low | Verified email and working form |
| `/privacy` | Static Trust | Privacy & Cookie Policy | In-house TSX | Working | Index, canonical `/privacy` | Medium (mentions Firebase instead of Prisma) | Accurately disclose PostgreSQL & cookies |
| `/terms` | Static Trust | Terms of Use | In-house TSX | Working | Index, canonical `/terms` | Low | Compliant |
| `/disclaimer` | Static Trust | Disclaimers | In-house TSX | Working | Index, canonical `/disclaimer` | Low | Compliant |
| `/admin/*` | Admin | CMS & Message Inbox | Prisma & Next.js | Working | `noindex, nofollow` | Low | Disallowed via robots.txt and middleware |

---

## 5. Prioritized Action Plan for Subsequent Phases

1. **Phase 2 (Game Provenance)**:
   - Formally document provenance of all 46 games in `audit/game-provenance.csv`.
   - Eliminate duplicated, generic FAQ boilerplate and inject rich, game-specific control schemes, instructions, scoring mechanics, and troubleshooting.
2. **Phase 3 (CPS Tool Transformation)**:
   - Upgrade `src/components/cps-test.tsx` to use high-resolution `performance.now()` elapsed-time measurement.
   - Implement instant-start on first click, local best tracking, keyboard accessibility, and comprehensive educational explanations.
3. **Phase 4 (Content & Authorship)**:
   - Remove fake persona `"Alex Chen, Reflex & Hardware Analyst"` and replace with transparent site publisher / editorial attribution.
   - Reconcile `sitemap.ts` and ensure all quality MDX articles are legitimately indexed.
4. **Phase 5 (Trust, UX & Architecture)**:
   - Remove unverified claims (`1M+ tests`, `1,240 tests today`).
   - Fix `/privacy` to accurately document PostgreSQL storage instead of unconfigured Firebase.
   - Update `/games` directory to include all 46 games across appropriate categories.
5. **Phase 6 (Technical SEO & Performance)**:
   - Resolve root layout SSR bailout (`headers()` call) so public pages become statically generated SSG for ultra-fast TTFB.
   - Fix broken TypeScript definitions in `prisma.config.ts` and remove unused `src/ai`.
