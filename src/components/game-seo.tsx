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
}

export function GameSEO({ name, description, url, faqs = [] }: GameSEOProps) {
  // SoftwareApplication / Game Schema
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": name,
    "description": description,
    "gameplayMode": "SinglePlayer",
    "applicationCategory": "BrowserGame",
    "operatingSystem": "Web Browser",
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "CpsSpeedTest",
      "url": "https://www.cpsspeedtest.com"
    }
  };

  // FAQ Schema
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
