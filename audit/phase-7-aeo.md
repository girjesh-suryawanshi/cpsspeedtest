# Phase 7: Answer Engine Optimization (AEO) Strategy & Implementation
**Project**: CPSspeedtest.com  
**Audit Date**: October 25, 2026  
**Auditor Role**: Search Experience & Answer Engine Optimization Specialist  
**Deliverable**: `audit/phase-7-aeo.md`

---

## 1. Real User Search Questions Identified

Rather than generic keyword queries, answer engines (Google AI Overviews, Perplexity, Copilot, ChatGPT Search) answer specific user questions. The following real user questions are directly addressed across the site:

1. **"How is CPS calculated?"**  
   - *Target URL*: [`/cps-test`](file:///f:/reactworkspace/cpsspeedtest/src/app/cps-test/page.tsx) and [`/blog/cps-test-ultimate-guide`](file:///f:/reactworkspace/cpsspeedtest/src/app/blog/content/cps-test-ultimate-guide.mdx)  
   - *Answer Structure*: Mathematical formula `CPS = Total Clicks ÷ Elapsed Seconds` + worked numerical example with actual measured time.

2. **"What is the average CPS for a human / gamer?"**  
   - *Target URL*: [`/blog/how-fast-is-average-cps`](file:///f:/reactworkspace/cpsspeedtest/src/app/blog/content/how-fast-is-average-cps.mdx) and homepage  
   - *Answer Structure*: 5.0–7.9 CPS for regular computer users; 8.0–10.9 CPS for seasoned gamers; 11.0–15.0+ CPS for competitive PvP players using specialized techniques.

3. **"What is the difference between CPS and reaction time?"**  
   - *Target URL*: [`/cps-test`](file:///f:/reactworkspace/cpsspeedtest/src/app/cps-test/page.tsx) and [`/reaction-time-test`](file:///f:/reactworkspace/cpsspeedtest/src/app/reaction-time-test/page.tsx)  
   - *Answer Structure*: Clear contrast between sensory-motor latency (milliseconds to initiate first movement) vs neuromuscular oscillation cadence (actuation repetitions per second).

4. **"Which is faster: Butterfly clicking or Drag clicking?"**  
   - *Target URL*: [`/blog/drag-clicking-vs-butterfly-clicking`](file:///f:/reactworkspace/cpsspeedtest/src/app/blog/content/drag-clicking-vs-butterfly-clicking.mdx)  
   - *Answer Structure*: Drag clicking achieves higher peak bursts (25–40+ CPS) for bridging, whereas butterfly clicking achieves sustained 15–20 CPS with superior aim tracking.

5. **"Why does my mouse double click?"**  
   - *Target URL*: [`/double-click-test`](file:///f:/reactworkspace/cpsspeedtest/src/app/double-click-test/page.tsx) and [`/blog/best-mouse-for-cps-gaming`](file:///f:/reactworkspace/cpsspeedtest/src/app/blog/content/best-mouse-for-cps-gaming.mdx)  
   - *Answer Structure*: Mechanical microswitch contact bounce and degraded firmware debounce delay.

6. **"Is jitter clicking safe for wrists?"**  
   - *Target URL*: [`/jitter-click-test`](file:///f:/reactworkspace/cpsspeedtest/src/app/jitter-click-test/page.tsx)  
   - *Answer Structure*: Direct health warning regarding forearm isometric strain, with actionable ergonomic advice and stretching recommendations.

---

## 2. Structural Patterns Implemented for Answer Extraction

To ensure search engines can extract concise, accurate, and unambiguous answers:
- **Direct Lead Paragraphs**: The first 1–2 sentences following a question heading provide a self-contained, factually complete answer before delving into deeper context.
- **Worked Formulas & Tables**: Technical claims are accompanied by clear tabular summaries (such as the Technique Comparison Matrix).
- **FAQ Schema Without Boilerplate**: Every FAQPage JSON-LD schema contains distinct, non-repetitive answers specific to that exact page topic.
