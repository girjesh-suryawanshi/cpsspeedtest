import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Blog - CPS Speed Test",
  description: "Read the latest tips, guides, and tutorials to improve your click speed and gaming performance.",
};

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Latest Articles</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert guides and tips to enhance your gaming performance and click speed.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border/50">
          <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
          <p className="text-muted-foreground">Check back later for new content!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors overflow-hidden">
                {post.og_image && (
                  <div className="w-full h-48 relative overflow-hidden bg-muted">
                    <img 
                      src={post.og_image} 
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                    {post.category}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <span>{post.author_name}</span>
                    <span>•</span>
                    <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 border-t border-border/10 mt-auto flex items-center justify-between text-sm font-medium text-primary">
                  <span className="py-4">Read Article</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
