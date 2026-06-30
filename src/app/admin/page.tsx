import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Tags, TrendingUp, Users, Activity, Eye, MousePointerClick, Zap } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
  const [totalPosts, publishedPosts, totalCategories] = await Promise.all([
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { published: true } }),
    prisma.blogCategory.count(),
  ]);

  const draftPosts = totalPosts - publishedPosts;

  const stats = [
    { title: "Total Posts", value: totalPosts, icon: <FileText className="w-5 h-5 text-blue-500" />, trend: "+12% this month" },
    { title: "Published", value: publishedPosts, icon: <Eye className="w-5 h-5 text-emerald-500" />, trend: "Looking good" },
    { title: "Drafts", value: draftPosts, icon: <FileText className="w-5 h-5 text-amber-500" />, trend: "Needs attention" },
    { title: "Categories", value: totalCategories, icon: <Tags className="w-5 h-5 text-purple-500" />, trend: "Active labels" }
  ];

  const recentPosts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    take: 4,
    select: { id: true, title: true, published: true, createdAt: true, category: true }
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">Overview Dashboard</h2>
        <p className="text-muted-foreground">Monitor your blog's performance, drafts, and overall growth metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="p-2 bg-muted/50 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-xs font-semibold text-muted-foreground">{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Recent Blog Activity</CardTitle>
            <CardDescription>The latest posts that have been created or modified.</CardDescription>
          </CardHeader>
          <CardContent>
            {recentPosts.length === 0 ? (
               <div className="text-center py-10">
                 <p className="text-muted-foreground mb-4">No blog posts found.</p>
                 <Button asChild>
                   <Link href="/admin/blog/new">Create your first post</Link>
                 </Button>
               </div>
            ) : (
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                    <div className="flex flex-col gap-1">
                      <Link href={`/admin/blog/edit/${post.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                        {post.title || "Untitled Post"}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="bg-muted px-2 py-0.5 rounded-sm font-medium">{post.category || "Uncategorized"}</span>
                        <span>•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div>
                      {post.published ? (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500">Published</span>
                      ) : (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-500">Draft</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button asChild className="w-full justify-start gap-2 shadow-sm">
              <Link href="/admin/blog/new">
                <FileText className="w-4 h-4" /> Write New Post
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start gap-2 bg-background shadow-sm">
              <Link href="/admin/blog/categories">
                <Tags className="w-4 h-4" /> Manage Categories
              </Link>
            </Button>
            <div className="mt-4 p-4 rounded-xl border border-primary/20 bg-primary/10">
              <h4 className="font-bold text-sm mb-1 text-foreground">SEO Tip</h4>
              <p className="text-xs text-muted-foreground">Publish posts consistently with strong keywords to boost your search rankings.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
