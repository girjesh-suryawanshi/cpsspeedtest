import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

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
  '/games', '/leaderboard', '/about', '/contact', '/privacy', '/terms', '/disclaimer', '/blog',
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
    changeFrequency: (route === '/leaderboard' ? 'hourly' : 'monthly') as const,
    priority: route.startsWith('/cps-test') || route === '/games' ? 0.9 : 0.8,
  }));

  // 3. Dynamic Blog Posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap: Error fetching blog posts:", error);
  }

  return [...homeRoute, ...gameRoutes, ...blogRoutes];
}
