import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
  try {
    const post = await prisma.blogPost.create({
      data: {
        title: "Test",
        slug: "test-slug",
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
    console.log("Success:", post.id);
  } catch (e: any) {
    console.error("Prisma Error:", e.message);
  }
}

test();
