"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteBlogPost } from "@/app/admin/blog/actions";
import { useRouter } from "next/navigation";

export function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this blog post? This cannot be undone.")) {
      startTransition(async () => {
        const result = await deleteBlogPost(id);
        if (result.success) {
          router.refresh();
        } else {
          alert("Failed to delete post: " + result.error);
        }
      });
    }
  };

  return (
    <Button 
      variant="destructive" 
      size="icon" 
      onClick={handleDelete} 
      disabled={isPending}
      title="Delete Post"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
