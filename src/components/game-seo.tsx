import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, User } from "lucide-react";

// ─── Type Definitions ──────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;        // Short step title, e.g. "Click the Start button"
  text: string;        // Full step description (1–2 sentences)
}

export interface GameSEOProps {
  /** Full display name of the game/tool, e.g. "Clicks Per Second (CPS) Test" */
  name: string;
  /** 140–160 char meta description — also used in SoftwareApplication schema */
  description: string;
  /** Canonical page URL, e.g. "https://www.cpsspeedtest.com/cps-test" */
  url: string;
  /**
   * Schema.org application category.
   * Common values: "BrowserGame" | "ArcadeGame" | "PuzzleGame" | "SkillGame"
   *               | "BrainGame" | "UtilityApplication" | "EducationalGame"
   */
  category?: string;
  /** 6–8 FAQ pairs for FAQPage schema + People Also Ask targets */
  faqs?: FAQ[];
  /**
   * Optional HowTo steps for Google HowTo Rich Results.
   * Provide 5–7 steps. When supplied, a HowTo JSON-LD block is emitted.
   */
  howToSteps?: HowToStep[];
  /**
   * Short human-readable date, e.g. "October 2026".
   * Renders the author attribution bar and populates schema dateModified.
   */
  lastUpdated?: string;
  /**
   * ISO-8601 date for schema datePublished, e.g. "2024-03-01".
   * Falls back to lastUpdated if omitted.
   */
  datePublished?: string;
  /**
   * Primary keyword / short page topic for Speakable headline targeting.
   * Defaults to `name` if not provided.
   */
  primaryKeyword?: string;
  /** Direct-answer summary sentence (≤ 60 words) read by voice assistants. */
  speakableSummary?: string;
}

// ─── Component ─────────────────────────────────────────────────────────────

export function GameSEO({
  name,
  description,
  url,
  faqs = [],
  howToSteps,
  category = "BrowserGame",
  lastUpdated,
  datePublished,
  primaryKeyword,
  speakableSummary,
}: GameSEOProps) {
  const siteUrl = "https://www.cpsspeedtest.com";
  const publishedDate = datePublished ?? "2024-01-01";
  const modifiedDate = lastUpdated ? `2026-${lastUpdated}` : new Date().toISOString().split("T")[0];
  const keyword = primaryKeyword ?? name;

  // ── 1. SoftwareApplication / Game Schema (enriched) ──────────────────────
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": ["Game", "SoftwareApplication"],
    "@id": `${url}#game`,
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "gameplayMode": "SinglePlayer",
    "interactivityType": "Active",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "CpsSpeedTest",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/apple-touch-icon.png`,
        "width": 180,
        "height": 180,
      },
      "sameAs": [
        "https://www.cpsspeedtest.com",
      ],
    },
    "author": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "CpsSpeedTest Editorial Team",
    },
    "potentialAction": {
      "@type": "PlayAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": url,
        "actionPlatform": "https://schema.org/WebPlatform",
      },
    },
    // Speakable specification — targets voice assistants & AI answer engines
    ...(speakableSummary
      ? {
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".aeo-direct-answer", ".aeo-speakable"],
          },
        }
      : {}),
  };

  // ── 2. BreadcrumbList Schema ──────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "All Games", "item": `${siteUrl}/games` },
      { "@type": "ListItem", "position": 3, "name": name, "item": url },
    ],
  };

  // ── 3. FAQPage Schema (AEO — People Also Ask) ─────────────────────────────
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  // ── 4. HowTo Schema (AEO — Rich Results & Voice Search) ──────────────────
  const howToSchema =
    howToSteps && howToSteps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": `How to Play ${name}`,
          "description": `Step-by-step guide to using the ${name} on CpsSpeedTest.`,
          "totalTime": "PT2M",
          "tool": [{ "@type": "HowToTool", "name": "Web Browser" }],
          "supply": [{ "@type": "HowToSupply", "name": "Mouse or Keyboard" }],
          "step": howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "url": `${url}#step-${index + 1}`,
          })),
        }
      : null;

  // ── 5. WebPage + Speakable Schema ────────────────────────────────────────
  const webPageSchema = speakableSummary
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": name,
        "description": speakableSummary,
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".aeo-direct-answer", ".aeo-speakable"],
          "xpath": [
            "/html/body//p[contains(@class,'aeo-direct-answer')]",
          ],
        },
        "keywords": keyword,
        "inLanguage": "en",
        "dateModified": modifiedDate,
      }
    : null;

  return (
    <>
      {/* ── Visual Breadcrumb Navigation ─────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="w-full max-w-4xl mx-auto mb-3 px-2 sm:px-4">
        <ol
          className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
            <Link
              href="/"
              className="hover:text-primary transition-colors font-medium"
              itemProp="item"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 mx-0.5" />
          </li>
          <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
            <Link
              href="/games"
              className="hover:text-primary transition-colors font-medium"
              itemProp="item"
            >
              <span itemProp="name">All Games</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 mx-0.5" />
          </li>
          <li
            className="text-foreground font-semibold truncate max-w-[180px] sm:max-w-none"
            aria-current="page"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <span itemProp="name">{name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Author & Last Updated Bar ─────────────────────────────────── */}
      {lastUpdated && (
        <div className="w-full max-w-4xl mx-auto mb-4 px-2 sm:px-4">
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1.5">
              <User className="w-3 h-3 shrink-0" />
              <span className="font-semibold text-foreground/80">
                CpsSpeedTest Editorial Team
              </span>
            </span>
            <span className="text-border" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 shrink-0" />
              <span>Last updated: {lastUpdated}</span>
            </span>
            <span className="text-border" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-muted-foreground/70 italic">
              Researched &amp; verified by the CpsSpeedTest team
            </span>
          </div>
        </div>
      )}

      {/* ── JSON-LD Structured Data Blocks ───────────────────────────── */}

      {/* 1. Game / SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      {/* 2. BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 3. FAQPage — People Also Ask */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* 4. HowTo — Step-by-step Rich Results */}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* 5. WebPage + Speakable — Voice Search & AI Answer Engines */}
      {webPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      )}
    </>
  );
}
