import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface GameSEOProps {
  name: string;
  description: string;
  url: string;
  faqs?: FAQ[];
  category?: string;
}

export function GameSEO({ name, description, url, faqs = [], category = "BrowserGame" }: GameSEOProps) {
  const siteUrl = "https://www.cpsspeedtest.com";

  // Enhanced SoftwareApplication / Game Schema
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": ["Game", "SoftwareApplication"],
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "gameplayMode": "SinglePlayer",
    "interactivityType": "Active",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CpsSpeedTest",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/apple-touch-icon.png`
      }
    },
    "potentialAction": {
      "@type": "PlayAction",
      "target": url
    }
  };

  // Breadcrumb Schema for GEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Games", "item": `${siteUrl}/games` },
      { "@type": "ListItem", "position": 3, "name": name, "item": url },
    ]
  };

  // FAQ Schema (AEO - People Also Ask)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
