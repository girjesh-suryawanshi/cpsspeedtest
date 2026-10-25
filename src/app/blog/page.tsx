import { allPosts } from "@/lib/blog";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { ChevronRight, Calendar, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Gaming & Click Speed Guides | CpsSpeedTest Blog",
  description: "Explore expert tutorials, hardware reviews, and technique guides to improve your CPS, reaction time, and gaming performance.",
  alternates: {
    canonical: "/blog",
  },
};

// Exclude dummy/test posts and low-value filler guides
const EXCLUDED_SLUGS = new Set([
  'test-slug',
  'test',
  'drawing-pad-guide',
  'connect-the-dots-guide',
  'block-builder-guide',
  'cupcake-2048-guide',
  'stimulation-clicker-guide',
  'coreball-game-guide',
  'jigsaw-puzzle-guide',
  'sliding-puzzle-guide',
  'math-quiz-guide',
  'word-scramble-guide'
]);

const isLegitimatePost = (post: any) => {
  if (!post || !post.slug || !post.title) return false;
  const slug = post.slug.toLowerCase().trim();
  const title = post.title.toLowerCase().trim();
  if (EXCLUDED_SLUGS.has(slug)) return false;
  if (slug === 'test' || slug === 'test-slug' || title === 'test' || title === 'test post' || title.includes('dummy') || title.includes('sample')) return false;
  return true;
};

export default async function BlogIndexPage() {
  // 1. Static MDX posts (Filtered for high quality)
  const staticPosts = allPosts
    .filter(isLegitimatePost)
    .map((p) => ({
      id: p.slug,
      slug: p.slug,
      title: p.title,
      excerpt: p.description,
      category: p.slug.includes("cps") || p.slug.includes("click") ? "Clicking Technique" : p.slug.includes("memory") ? "Brain Training" : "Gaming Guide",
      author_name: "CpsSpeedTest Editorial Team",
      createdAt: p.date ? new Date(p.date) : new Date(),
      reading_time: 5,
    }));

  // 2. Fetch dynamic DB posts if database is connected
  let dbPosts: any[] = [];
  try {
    const rawDb = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    dbPosts = rawDb.filter(isLegitimatePost);
  } catch (e) {
    // Database fallback silently catches if DB is not configured
  }

  // Merge posts avoiding duplicates by slug
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const combinedPosts = [
    ...dbPosts,
    ...staticPosts.filter((p) => !dbSlugs.has(p.slug)),
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <header className="mb-12 text-center max-w-3xl mx-auto">
        <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold text-primary border-primary/30 bg-primary/10">
          Knowledge Base & Guides
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Latest Gaming & Skill Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Master advanced clicking techniques, sharpen your cognitive reflexes, and discover the best gaming hardware to maximize your performance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedPosts.map((post) => (
          <Link key={post.id || post.slug} href={`/blog/${post.slug}`} className="group block h-full">
            <Card className="h-full flex flex-col bg-card/60 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {post.category || "Gaming Guide"}
                  </span>
                  {post.reading_time && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.reading_time} min read
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1 font-medium text-foreground">
                    <User className="w-3 h-3 text-primary" /> {post.author_name || "Alex Chen"}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(post.createdAt), "MMM d, yyyy")}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt || post.description}
                </p>
              </CardContent>
              <CardFooter className="pt-3 border-t border-border/10 mt-auto flex items-center justify-between text-xs font-semibold text-primary">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

