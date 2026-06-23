import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ChevronLeft, Share2, Clock, Calendar } from "lucide-react";

// Dynamic route parameters
type Props = {
  params: { slug: string };
};

// 1. DYNAMIC METADATA (Replaces Express Pre-render)
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug }
  });

  if (!post || !post.published) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.seo_keywords,
    authors: [{ name: post.author_name }],
    alternates: {
      canonical: post.canonical_url || `https://www.cpsspeedtest.com/blog/${post.slug}`,
    },
    robots: {
      index: post.indexing === "index",
      follow: post.follow === "follow",
    },
    openGraph: {
      title: post.og_title || post.seo_title || post.title,
      description: post.og_description || post.seo_description || post.excerpt || "",
      url: `https://www.cpsspeedtest.com/blog/${post.slug}`,
      siteName: 'CpsSpeedTest',
      images: post.og_image ? [{ url: post.og_image, width: 1200, height: 630 }] : [],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: post.twitter_card as "summary" | "summary_large_image",
      title: post.og_title || post.title,
      description: post.og_description || post.excerpt || "",
      images: post.og_image ? [post.og_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug }
  });

  const isAdmin = cookies().get("admin_session")?.value === "authenticated";

  if (!post || (!post.published && !isAdmin)) {
    notFound();
  }

  // 2. DYNAMIC JSON-LD (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": post.schema_type,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.cover_image,
        "author": {
          "@type": "Person",
          "name": post.author_name
        },
        "publisher": {
          "@type": "Organization",
          "name": "CpsSpeedTest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.cpsspeedtest.com/logo.png"
          }
        },
        "datePublished": post.createdAt.toISOString(),
        "dateModified": post.updatedAt.toISOString(),
      },
      // Optional FAQ Schema
      ...(post.faq && Array.isArray(post.faq) && post.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": post.faq.map((q: any) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <article className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Editorial Sticky 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: TOC & Social (Sticky) */}
        <aside className="hidden lg:block lg:col-span-2">
          <div className="sticky top-24 space-y-8">
            <Link href="/blog" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            
            {post.toc_enabled && (
              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">On this page</h4>
                <nav className="flex flex-col space-y-2 text-sm">
                  {/* TOC items would be dynamically generated here */}
                  <a href="#" className="text-muted-foreground hover:text-foreground">Introduction</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Key Concepts</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Conclusion</a>
                </nav>
              </div>
            )}

            <div className="pt-4 border-t border-border/20">
               <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-4 w-4" /> Share Article
               </button>
            </div>
          </div>
        </aside>

        {/* Center Column: Main Content */}
        <div className="lg:col-span-7 space-y-8">
           {/* Header */}
           {!post.published && (
             <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-600 dark:text-yellow-400 p-4 rounded-xl flex items-center gap-2 font-medium">
               This is a preview. The post is currently saved as a draft.
             </div>
           )}
           <header className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <span>{post.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline text-foreground leading-[1.1]">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                     {post.author_name.charAt(0)}
                   </div>
                   <span className="font-medium text-foreground">{post.author_name}</span>
                </div>
                <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(post.createdAt).toLocaleDateString()}</div>
                {post.reading_time && <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.reading_time} min read</div>}
              </div>
           </header>

           {/* LCP Cover Image */}
           {post.cover_image && (
             <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-border/20">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src={post.cover_image} 
                 alt={post.cover_image_alt || post.title} 
                 // Performance: LCP Image Preloading
                 loading="eager" 
                 fetchPriority="high"
                 className="object-cover w-full h-full"
               />
               {post.cover_image_caption && (
                 <figcaption className="absolute bottom-0 w-full bg-background/80 backdrop-blur-sm p-2 text-center text-xs text-muted-foreground border-t border-border/20">
                   {post.cover_image_caption}
                 </figcaption>
               )}
             </figure>
           )}

           {/* AEO Key Takeaways Block */}
           {post.excerpt && (
             <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-inner">
               <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                 Key Takeaways & Executive Summary
               </h3>
               <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-wrap text-lg">
                 {post.excerpt}
               </p>
             </div>
           )}

           {/* HTML Body */}
           <div 
             className="prose prose-lg md:prose-xl dark:prose-invert max-w-none font-serif prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-28 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-md"
             dangerouslySetInnerHTML={{ __html: post.content }}
           />
        </div>

        {/* Right Column: Sidebar / Widgets */}
        <aside className="hidden lg:block lg:col-span-3 space-y-8">
           <div className="sticky top-24">
             <div className="bg-card border border-border/20 rounded-xl p-6 shadow-sm">
               <h4 className="font-bold text-lg mb-4">Recommended</h4>
               <p className="text-sm text-muted-foreground mb-4">Discover more tests and tools to improve your skills.</p>
               <Link href="/games" className="block w-full py-2 px-4 bg-primary text-primary-foreground text-center rounded-md font-medium hover:bg-primary/90 transition-colors">
                 Play Games
               </Link>
             </div>
           </div>
        </aside>

      </div>
    </article>
  );
}
