"use server";

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createBlogPost(data: any) {
  try {
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        author_name: data.author_name || "Admin",
        reading_time: data.reading_time || 1,
        seo_title: data.seo_title,
        seo_description: data.seo_description,
        seo_keywords: data.focusKeyword,
        canonical_url: data.canonical_url,
        indexing: data.indexing,
        follow: data.follow,
        og_title: data.og_title,
        og_description: data.og_description,
        og_image: data.og_image,
        cover_image: data.cover_image || data.og_image,
        cover_image_alt: data.cover_image_alt,
        cover_image_caption: data.cover_image_caption,
        schema_type: data.schema_type,
        toc_enabled: data.toc_enabled,
        cta_type: data.cta_type,
        faq: data.faq,
        published: data.published,
      }
    });

    revalidatePath('/blog');
    
    // If published, we can sync with IndexNow here
    if (post.published) {
       await syncWithIndexNow([`https://www.cpsspeedtest.com/blog/${post.slug}`]);
    }

    return { success: true, post };
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    return { success: false, error: error.message };
  }
}

async function syncWithIndexNow(urls: string[]) {
  const host = "www.cpsspeedtest.com";
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    console.warn("No INDEXNOW_KEY found in environment variables. Skipping sync.");
    return;
  }

  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      console.log("Successfully submitted to IndexNow:", urls);
    } else {
      console.error("IndexNow submission failed:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Error connecting to IndexNow:", error);
  }
}

export async function updateBlogPost(id: string, data: any) {
  try {
    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        author_name: data.author_name || "Admin",
        reading_time: data.reading_time || 1,
        seo_title: data.seo_title,
        seo_description: data.seo_description,
        seo_keywords: data.focusKeyword,
        canonical_url: data.canonical_url,
        indexing: data.indexing,
        follow: data.follow,
        og_title: data.og_title,
        og_description: data.og_description,
        og_image: data.og_image,
        cover_image: data.cover_image || data.og_image,
        cover_image_alt: data.cover_image_alt,
        cover_image_caption: data.cover_image_caption,
        schema_type: data.schema_type,
        toc_enabled: data.toc_enabled,
        cta_type: data.cta_type,
        faq: data.faq,
        published: data.published,
      }
    });

    revalidatePath('/blog');
    revalidatePath(`/blog/${post.slug}`);
    
    if (post.published) {
       await syncWithIndexNow([`https://www.cpsspeedtest.com/blog/${post.slug}`]);
    }

    return { success: true, post };
  } catch (error: any) {
    console.error("Error updating blog post:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({ where: { id } });
    revalidatePath('/blog');
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting blog post:", error);
    return { success: false, error: error.message };
  }
}
