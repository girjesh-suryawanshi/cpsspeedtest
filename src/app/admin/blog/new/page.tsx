import { BlogEditor } from "@/components/admin/blog-editor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Blog Post | Admin",
  robots: { index: false, follow: false },
};

export default function NewBlogPostPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create Blog Post</h1>
        <p className="text-muted-foreground mt-2">Write, optimize, and publish highly converting editorial content.</p>
      </div>
      
      <BlogEditor />
    </div>
  );
}
