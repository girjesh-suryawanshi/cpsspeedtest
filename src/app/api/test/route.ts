import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const post = await prisma.blogPost.create({
      data: {
        title: "Test API Post",
        slug: "test-api-post",
        excerpt: "",
        content: "<p>test</p>",
        category: "Uncategorized",
        tags: ["SEO"],
        author_name: "Admin",
        seo_title: "",
        seo_description: "",
        seo_keywords: "",
        canonical_url: "",
        indexing: "index",
        follow: "follow",
        og_title: "",
        og_description: "",
        og_image: "",
        cover_image: "",
        cover_image_alt: "",
        cover_image_caption: "",
        schema_type: "BlogPosting",
        toc_enabled: true,
        cta_type: "none",
        faq: [],
        published: false,
      }
    });
    
    // delete it immediately
    await prisma.blogPost.delete({ where: { id: post.id } });

    return NextResponse.json({ success: true, post });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message, stack: e.stack });
  }
}
