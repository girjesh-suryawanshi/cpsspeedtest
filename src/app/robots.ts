import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.cpsspeedtest.com";

  return {
    rules: [
      // Standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/upload'],
      },
      // OpenAI — ChatGPT Search & GPT knowledge crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Perplexity AI search engine
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Anthropic Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Google Gemini / Vertex AI indexing
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Apple Intelligence
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Amazon Alexa / Rufus
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
