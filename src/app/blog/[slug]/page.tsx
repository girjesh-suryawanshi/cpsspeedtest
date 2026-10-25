import { allPosts } from "@/lib/blog";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Clock, Calendar, ShieldCheck, HelpCircle, CheckCircle2, FileText, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { slug: string };
};

const AUXILIARY_GUIDES = new Set([
  'drawing-pad-guide', 'connect-the-dots-guide', 'block-builder-guide',
  'cupcake-2048-guide', 'stimulation-clicker-guide', 'coreball-game-guide',
  'jigsaw-puzzle-guide', 'sliding-puzzle-guide', 'math-quiz-guide', 'word-scramble-guide'
]);

// Verified authentic Q&As for educational guides
const DEFAULT_FAQS: Record<string, Array<{ question: string; answer: string }>> = {
  'how-to-increase-cps': [
    { question: "What is the fastest clicking technique for CPS?", answer: "Butterfly clicking achieves 15-20+ CPS on low-debounce switches. Drag clicking can produce short bursts of 25+ CPS for bridging. Jitter clicking reliably hits 10-14 CPS." },
    { question: "Is jitter clicking safe for your hand?", answer: "Jitter clicking should only be done in short bursts with regular finger and wrist stretches to prevent muscular fatigue and repetitive strain." },
    { question: "Will a higher CPS improve Minecraft PvP performance?", answer: "Yes, higher CPS (10-15+) increases hit-tick registration probability and enables sprint-reset knockback combos in 1.8 PvP combat." }
  ],
  'drag-clicking-vs-butterfly-clicking': [
    { question: "Which is better: Butterfly clicking or Drag clicking?", answer: "Butterfly clicking provides better aiming control and consistent 15-20 CPS. Drag clicking provides short bursts up to 30+ CPS for God-bridging but accelerates switch wear." },
    { question: "Can any mouse drag click?", answer: "No, drag clicking requires a gaming mouse with low debounce time (under 4ms) and a textured matte button surface to create friction vibration." }
  ],
  'best-mouse-for-cps-gaming': [
    { question: "Which mouse switches are best for high CPS?", answer: "Optical switches and low-debounce mechanical switches (such as Kailh GM 8.0 or Omron 20M) offer fast switch reset points for rapid actuation." },
    { question: "What is debounce delay in gaming mice?", answer: "Debounce delay is a firmware delay set to prevent accidental contact bounce double-clicks. Lowering debounce delay allows rapid physical actuations to register as separate clicks." }
  ],
  'cps-test-ultimate-guide': [
    { question: "What is a normal CPS for gamers?", answer: "The average person clicks at 6-7 CPS. Regular gamers typically achieve 7-10 CPS, while competitive PvP players achieve 10-15+ CPS with specialized techniques." },
    { question: "How is CPS calculated?", answer: "CPS (Clicks Per Second) is calculated by dividing total registered clicks by the exact measured elapsed seconds: CPS = Total Clicks ÷ Elapsed Seconds." }
  ]
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isAuxiliary = AUXILIARY_GUIDES.has(params.slug);
  const staticPost = allPosts.find((p) => p.slug === params.slug);

  if (staticPost) {
    return {
      title: `${staticPost.title} | CpsSpeedTest Guide`,
      description: staticPost.description,
      authors: [{ name: "CpsSpeedTest Editorial Team" }],
      robots: isAuxiliary 
        ? { index: false, follow: true } 
        : { index: true, follow: true },
      alternates: {
        canonical: `https://www.cpsspeedtest.com/blog/${staticPost.slug}`,
      },
      openGraph: {
        title: staticPost.title,
        description: staticPost.description,
        url: `https://www.cpsspeedtest.com/blog/${staticPost.slug}`,
        siteName: 'CpsSpeedTest',
        locale: 'en_US',
        type: 'article',
      },
    };
  }

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: params.slug },
    });

    if (post && post.published) {
      return {
        title: post.seo_title || post.title,
        description: post.seo_description || post.excerpt,
        authors: [{ name: post.author_name || "CpsSpeedTest Editorial Team" }],
        robots: { index: true, follow: true },
        alternates: {
          canonical: post.canonical_url || `https://www.cpsspeedtest.com/blog/${post.slug}`,
        },
      };
    }
  } catch (e) {}

  return { title: "Post Not Found" };
}

export default async function BlogPostPage({ params }: Props) {
  const staticPost = allPosts.find((p) => p.slug === params.slug);

  let dbPost = null;
  if (!staticPost) {
    try {
      dbPost = await prisma.blogPost.findUnique({
        where: { slug: params.slug },
      });
    } catch (e) {}
  }

  if (!staticPost && (!dbPost || !dbPost.published)) {
    notFound();
  }

  const title = staticPost ? staticPost.title : dbPost!.title;
  const description = staticPost ? staticPost.description : dbPost!.excerpt;
  const authorName = "CpsSpeedTest Editorial Team";
  const dateStr = staticPost ? staticPost.date : dbPost!.createdAt.toISOString();
  const dateFormatted = new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const category = dbPost?.category || (params.slug.includes("cps") || params.slug.includes("click") ? "Clicking Technique" : "Gaming Guide");

  const ContentComponent = staticPost ? staticPost.content : null;

  // Extract FAQs for Schema
  const articleFaqs = DEFAULT_FAQS[params.slug] || [
    { question: `What is covered in ${title}?`, answer: description || `This comprehensive guide covers practical strategies, technique breakdowns, and hardware performance tips.` },
    { question: "Where can I test my CPS score?", answer: "You can test your clicking speed for free on the CpsSpeedTest interactive click tester." }
  ];

  // Schema.org Structured Data with honest Organization author
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "mainEntityOfPage": `https://www.cpsspeedtest.com/blog/${params.slug}`,
        "author": {
          "@type": "Organization",
          "name": "CpsSpeedTest Editorial Team",
          "url": "https://www.cpsspeedtest.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CpsSpeedTest",
          "url": "https://www.cpsspeedtest.com",
        },
        "datePublished": dateStr,
        "dateModified": dateStr,
      },
      {
        "@type": "FAQPage",
        "mainEntity": articleFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cpsspeedtest.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.cpsspeedtest.com/blog" },
          { "@type": "ListItem", "position": 3, "name": title, "item": `https://www.cpsspeedtest.com/blog/${params.slug}` },
        ]
      }
    ]
  };

  const isTechniquePost = params.slug.includes("cps") || params.slug.includes("clicking") || params.slug.includes("butterfly") || params.slug.includes("jitter");

  return (
    <article className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to All Guides
            </Link>

            <div className="p-4 bg-card/60 rounded-xl border border-border/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Editorial Standards
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Researched and reviewed using browser input timing benchmarks, mouse hardware data, and verified cognitive science references.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Interactive Tool
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Test the concepts explained in this guide directly on our free click speed tester.
              </p>
              <Link
                href="/cps-test"
                className="inline-block text-xs font-semibold text-primary hover:underline pt-1"
              >
                Launch CPS Test &rarr;
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs font-bold text-primary bg-primary/10">
                {category}
              </Badge>
              <Badge variant="outline" className="text-[10px] font-semibold border-primary/20 text-muted-foreground">
                Educational Guide
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2 border-b border-border/20 pb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-xs">
                  CP
                </div>
                <div>
                  <span className="font-semibold text-foreground block text-xs">{authorName}</span>
                  <span className="text-[10px] text-muted-foreground">Technical & Gaming Research</span>
                </div>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-xs">
                <Calendar className="h-3.5 w-3.5" /> {dateFormatted}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="h-3.5 w-3.5" /> 5 min read
              </div>
            </div>
          </header>

          {/* Key Takeaways & Summary Box */}
          {description && (
            <div className="bg-gradient-to-br from-primary/10 via-card/80 to-accent/5 border border-primary/30 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <FileText className="w-4 h-4" /> Key Takeaways & Summary
              </div>
              <p className="text-foreground font-medium text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Technique Comparison Matrix */}
          {isTechniquePost && (
            <div className="p-5 bg-card/60 border border-border/30 rounded-2xl space-y-3 my-6">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Comparison of Common Clicking Techniques
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/30 text-muted-foreground uppercase tracking-wider">
                      <th className="py-2 px-3">Technique</th>
                      <th className="py-2 px-3">Typical CPS</th>
                      <th className="py-2 px-3">Physical Demand</th>
                      <th className="py-2 px-3">Aim Stability</th>
                      <th className="py-2 px-3">Primary Gaming Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20 text-foreground font-medium">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-primary">Standard Clicking</td>
                      <td className="py-2.5 px-3">4 – 7 CPS</td>
                      <td className="py-2.5 px-3">Low</td>
                      <td className="py-2.5 px-3">High (100%)</td>
                      <td className="py-2.5 px-3">General Gaming & Precision FPS</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-primary">Jitter Clicking</td>
                      <td className="py-2.5 px-3">10 – 14 CPS</td>
                      <td className="py-2.5 px-3">High (Forearm Tension)</td>
                      <td className="py-2.5 px-3">Moderate (~60%)</td>
                      <td className="py-2.5 px-3">Minecraft PvP Knockback Combos</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-primary">Butterfly Clicking</td>
                      <td className="py-2.5 px-3">15 – 20+ CPS</td>
                      <td className="py-2.5 px-3">Moderate (Two Fingers)</td>
                      <td className="py-2.5 px-3">Good (~80%)</td>
                      <td className="py-2.5 px-3">High-CPS PvP Trades</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-primary">Drag Clicking</td>
                      <td className="py-2.5 px-3">25 – 40+ CPS (Burst)</td>
                      <td className="py-2.5 px-3">Specialized (Friction)</td>
                      <td className="py-2.5 px-3">Low (~30%)</td>
                      <td className="py-2.5 px-3">Fast Bridging & Block Clutching</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-img:rounded-2xl">
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: dbPost!.content }} />
            )}
          </div>

          {/* FAQ Section */}
          {articleFaqs.length > 0 && (
            <div className="mt-12 p-6 bg-card/60 border border-primary/20 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {articleFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-background/50 border border-border/20 rounded-xl space-y-1">
                    <h4 className="font-bold text-sm text-foreground">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editorial Attribution & Contact Box */}
          <div className="mt-8 p-6 bg-card/80 border border-border/30 rounded-2xl flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary shrink-0 text-base">
              CP
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-foreground">Published by the CpsSpeedTest Editorial Team</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our educational guides are produced through practical browser input testing, official mouse hardware specifications, and established cognitive science references. We welcome feedback, inquiries, and correction requests at{" "}
                <a href="mailto:contact@cpsspeedtest.com" className="text-primary hover:underline">
                  contact@cpsspeedtest.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
