import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { BlogEditor } from "@/components/admin/blog-editor";

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id }
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Edit Post</h1>
        <p className="text-muted-foreground">Update the content, SEO, and settings for this article.</p>
      </div>
      <BlogEditor initialData={post} postId={post.id} />
    </div>
  );
}
