import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { allPosts } from '@/lib/blog';

// 10 auxiliary mini-guides are noindex by design; excluded from sitemap to prevent Google Search Console warnings
const EXCLUDED_SLUGS = new Set([
  'test-slug', 'test', 'drawing-pad-guide', 'connect-the-dots-guide',
  'block-builder-guide', 'cupcake-2048-guide', 'stimulation-clicker-guide',
  'coreball-game-guide', 'jigsaw-puzzle-guide', 'sliding-puzzle-guide',
  'math-quiz-guide', 'word-scramble-guide'
]);

// Tier 1: Core CPS & Competitive Gaming Speed Tools (Highest Search Volume & CPC)
const CORE_TOOLS = [
  '/cps-test',
  '/cps-test-1s',
  '/jitter-click-test',
  '/kohi-click-test',
  '/butterfly-click-test',
  '/drag-click-test',
  '/double-click-test',
  '/minecraft-cps-test',
  '/spacebar-clicker',
  '/aim-trainer',
  '/reaction-time-test',
  '/typing-test',
  '/typing-test-30s',
  '/type-racer',
];

// Tier 2: Brain Training, Cognitive & Reflex Tests
const COGNITIVE_TOOLS = [
  '/chimp-test',
  '/number-memory-test',
  '/stroop-test',
  '/sequence-memory-test',
  '/visual-memory-test',
  '/verbal-memory-test',
  '/word-memory-test',
  '/memory-game',
  '/simon-says',
  '/time-guesser',
];

// Tier 3: Casual Games, Math & Word Puzzles
const CASUAL_GAMES = [
  '/2048',
  '/cupcake-2048',
  '/dino-run',
  '/snake',
  '/minesweeper',
  '/tic-tac-toe',
  '/tower-of-hanoi',
  '/sudoku',
  '/math-dash',
  '/make-24',
  '/math-quiz',
  '/word-master',
  '/hangman',
  '/word-scramble',
  '/stimulation-clicker',
  '/idle-clicker',
  '/pop-it',
  '/coreball-game',
  '/drawing-pad',
  '/block-builder',
  '/connect-the-dots',
  '/jigsaw-puzzle',
  '/sliding-puzzle',
];

// Tier 4: Legal, Trust & Verification Pages
const LEGAL_PAGES = [
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/dmca',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.cpsspeedtest.com";
  const now = new Date();

  // 1. Homepage (Top authority)
  const homeRoute = [{
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }];

  // 2. Hub Pages
  const hubRoutes = [
    {
      url: `${baseUrl}/games`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leaderboard`,
      lastModified: now,
      changeFrequency: 'hourly' as const,
      priority: 0.8,
    },
  ];

  // 3. Core CPS & Gaming Tools (Priority 0.9)
  const coreToolRoutes = CORE_TOOLS.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 4. Cognitive & Reflex Tests (Priority 0.8)
  const cognitiveToolRoutes = COGNITIVE_TOOLS.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 5. Casual Games & Puzzles (Priority 0.7)
  const casualGameRoutes = CASUAL_GAMES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 6. Educational Blog Articles (Accurate publication lastModified dates)
  const staticBlogRoutes = allPosts
    .filter((p) => !EXCLUDED_SLUGS.has(p.slug) && !p.slug.includes("test-slug"))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  let dbBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
    dbBlogRoutes = posts
      .filter((p) => !EXCLUDED_SLUGS.has(p.slug) && !p.slug.includes("test-slug"))
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
  } catch (error) {
    // Database fallback
  }

  // Deduplicate blog routes
  const existingUrls = new Set(staticBlogRoutes.map((r) => r.url));
  const mergedBlogRoutes = [
    ...staticBlogRoutes,
    ...dbBlogRoutes.filter((r) => !existingUrls.has(r.url)),
  ];

  // 7. Legal, Compliance & Trust Pages (Priority 0.4)
  const legalRoutes = LEGAL_PAGES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));

  return [
    ...homeRoute,
    ...hubRoutes,
    ...coreToolRoutes,
    ...cognitiveToolRoutes,
    ...casualGameRoutes,
    ...mergedBlogRoutes,
    ...legalRoutes,
  ];
}

