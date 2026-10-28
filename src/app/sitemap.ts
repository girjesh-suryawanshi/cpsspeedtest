import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { allPosts } from '@/lib/blog';

const EXCLUDED_SLUGS = new Set([
  'test-slug', 'test', 'drawing-pad-guide', 'connect-the-dots-guide',
  'block-builder-guide', 'cupcake-2048-guide', 'stimulation-clicker-guide',
  'coreball-game-guide', 'jigsaw-puzzle-guide', 'sliding-puzzle-guide',
  'math-quiz-guide', 'word-scramble-guide'
]);

// All game/tool pages on the site
const GAME_ROUTES = [
  '/cps-test', '/cps-test-1s', '/aim-trainer', '/typing-test', '/typing-test-30s',
  '/type-racer', '/reaction-time-test', '/spacebar-clicker', '/jitter-click-test',
  '/kohi-click-test', '/butterfly-click-test', '/double-click-test', '/drag-click-test',
  '/minecraft-cps-test',
  '/simon-says', '/snake', '/dino-run', '/2048', '/minesweeper', '/tic-tac-toe',
  '/cupcake-2048', '/stimulation-clicker', '/coreball-game', '/idle-clicker',
  '/pop-it', '/time-guesser',
  '/math-dash', '/make-24', '/math-quiz', '/tower-of-hanoi', '/sudoku',
  '/word-master', '/hangman', '/word-scramble',
  '/number-memory-test', '/chimp-test', '/sequence-memory-test', '/visual-memory-test',
  '/verbal-memory-test', '/word-memory-test', '/memory-game', '/stroop-test',
  '/drawing-pad', '/block-builder', '/connect-the-dots', '/jigsaw-puzzle',
  '/sliding-puzzle',
  '/games', '/leaderboard', '/about', '/contact', '/privacy', '/terms', '/disclaimer', '/dmca', '/blog',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.cpsspeedtest.com";
  const now = new Date();

  // 1. Homepage (highest priority)
  const homeRoute = [{
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }];

  // 2. All game and static pages
  const gameRoutes = GAME_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/leaderboard' ? ('hourly' as const) : ('monthly' as const),
    priority: route.startsWith('/cps-test') || route === '/games' ? 0.9 : 0.8,
  }));

  // 3. Static & Dynamic Blog Posts
  const staticBlogRoutes = allPosts
    .filter((p) => !EXCLUDED_SLUGS.has(p.slug) && !p.slug.includes("test-slug"))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
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
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
  } catch (error) {
    // Database fallback
  }

  // Merge unique blog routes
  const existingUrls = new Set(staticBlogRoutes.map((r) => r.url));
  const mergedBlogRoutes = [
    ...staticBlogRoutes,
    ...dbBlogRoutes.filter((r) => !existingUrls.has(r.url)),
  ];

  return [...homeRoute, ...gameRoutes, ...mergedBlogRoutes];
}

