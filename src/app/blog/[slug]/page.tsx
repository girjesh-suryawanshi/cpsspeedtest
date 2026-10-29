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
  ],
  'optical-vs-mechanical-switches-gaming-cps': [
    { question: "Can you butterfly click on an optical mouse?", answer: "Yes, but you will only get 1 click per finger strike (~10-12 CPS). You cannot achieve the 18-25 CPS numbers seen on mechanical mice because optical switches never bounce to produce double-clicks." },
    { question: "Do optical switches improve reaction time in gaming?", answer: "Yes. Optical switches eliminate the mandatory 2ms to 8ms firmware debounce delay required by mechanical switches, delivering true sub-millisecond actuation." },
    { question: "Why do mechanical mouse switches double click after a while?", answer: "Over millions of clicks, moisture, dust, and electrical arcing oxidize the metal spring leaves, causing the firmware debounce filter to fail to suppress contact bounce." }
  ],
  'mouse-debounce-time-guide-lower-cps': [
    { question: "What is mouse debounce time?", answer: "Debounce time is a firmware delay (measured in milliseconds) programmed into mechanical gaming mice to ignore false contact bounces produced when metal switch leaves collide." },
    { question: "Does lowering debounce time increase CPS?", answer: "Yes. Lowering debounce time below 4ms allows rapid vibrations from butterfly clicking or drag clicking to register as separate clicks, dramatically boosting CPS." },
    { question: "Can lowering debounce time cause double clicking?", answer: "Yes. If debounce time is set below the switch's mechanical bounce duration, normal single clicks will register as unintentional double clicks during desktop use or inventory management." }
  ],
  'best-mouse-grip-styles-cps-aim': [
    { question: "What is the best mouse grip style for high CPS?", answer: "Claw grip and fingertip grip are the best styles for high CPS because they isolate finger muscles from the palm, enabling rapid butterfly and jitter clicking movements." },
    { question: "Which grip style is best for tactical FPS aiming?", answer: "Palm grip offers the highest tracking stability for tactical shooters like CS2 and Valorant, but limits maximum clicking speed to 6-8 CPS." },
    { question: "Can fingertip grip cause wrist fatigue?", answer: "Fingertip grip relies on micro-finger adjustments and arm movement. When paired with an ultra-lightweight mouse under 60g, it significantly minimizes wrist strain compared to forceful jitter clicking." }
  ],
  'roblox-blade-ball-bedwars-clicking-guide': [
    { question: "What CPS do you need for Roblox Blade Ball?", answer: "Blade Ball prioritizes reaction timing and spatial anticipation over raw CPS. While 8-12 CPS ensures safe parry registration during high-speed clash volleys, sub-200ms visual reaction time is far more critical." },
    { question: "How much CPS is needed for Roblox Bedwars?", answer: "In Bedwars, 12-16 CPS allows you to maintain hit advantage and combo locks during sword fights, while drag clicking enables fast block bridging across islands." },
    { question: "Does Roblox cap mouse clicks per second?", answer: "Roblox physics tick rate operates at 60 Hz, meaning input events are processed in 16.6ms intervals. Extremely erratic clicking above 30 CPS can occasionally drop clicks if unsynchronized with engine frames." }
  ],
  'monitor-refresh-rate-human-reaction-time': [
    { question: "Does a 240Hz monitor improve human reaction time?", answer: "A 240Hz monitor reduces display frame latency from 16.6ms (at 60Hz) down to 4.16ms, saving approximately 12.5ms of end-to-end hardware latency. While it does not alter human biological nerve conduction speed, you perceive target motion earlier." },
    { question: "Is upgrading from 144Hz to 240Hz noticeable?", answer: "The jump from 60Hz to 144Hz saves ~9.7ms of frame delay, whereas 144Hz to 240Hz saves only ~2.8ms. Most competitive players feel the smoother motion clarity and lower motion blur, but reaction improvements are incremental." },
    { question: "How can I measure my true human reaction time?", answer: "You can test your visual reaction baseline using an online reaction speed test. Testing across different monitor refresh rates lets you quantify display lag improvements." }
  ],
  'how-to-train-reaction-time-esports': [
    { question: "Can you permanently improve your reaction time?", answer: "Yes. While raw simple visual reaction time has biological limits (180-220ms), esports reaction time involves cognitive choice reaction, target recognition, and motor execution, which can be improved by 30-50ms through deliberate practice." },
    { question: "What factors slow down gamer reflexes?", answer: "Sleep deprivation, high cortisol, chronic eye fatigue, physical dehydration, and input lag from unoptimized hardware significantly degrade human reaction speed." },
    { question: "What tools should I use to practice reflexes?", answer: "Combine target acquisition drills on an aim trainer with color-change reaction time tests to build both neuro-visual processing speed and precise muscle memory." }
  ],
  'stroop-effect-cognitive-interference-test': [
    { question: "What causes the Stroop effect?", answer: "The Stroop effect occurs because word reading is an automatic, deeply ingrained cognitive process. When the ink color conflicts with the printed word, the brain's anterior cingulate cortex must expend extra processing time to suppress the conflicting reading response." },
    { question: "What is a normal Stroop effect interference delay?", answer: "Most healthy adults experience an incongruent delay of 50 to 150 milliseconds compared to congruent stimuli where the word and ink color match." },
    { question: "Can you train your brain to overcome the Stroop effect?", answer: "Repeated cognitive inhibition training can reduce your Stroop interference latency by strengthening executive control and selective visual attention." }
  ],
  'how-to-type-100-wpm-progression-guide': [
    { question: "How long does it take to reach 100 WPM?", answer: "Typists with 40-50 WPM baseline typically require 2 to 4 months of consistent daily 15-minute deliberate practice focusing on touch typing fundamentals and 98%+ accuracy." },
    { question: "What is the key difference between 60 WPM and 100 WPM typists?", answer: "Typists at 60 WPM read and process text word-by-word. 100+ WPM typists read 2-3 words ahead in buffer memory and execute n-gram character combinations as fluid, single motor chunks." },
    { question: "Should I prioritize speed or accuracy when typing?", answer: "Always prioritize accuracy. Aim for 98% or higher accuracy. Typing fast with frequent errors forces constant backspacing, which severely destroys typing rhythm and overall WPM." }
  ],
  'linear-vs-tactile-vs-clicky-switches-gaming': [
    { question: "Which switch type is fastest for competitive gaming?", answer: "Linear switches (like Cherry MX Red or Hall effect magnetic switches) are the fastest because they feature smooth, uninterrupted travel with no tactile bump or click hysteresis to slow down rapid key actuation." },
    { question: "Are clicky switches bad for gaming?", answer: "Clicky switches (like Cherry MX Blue) have separate slider mechanisms with higher reset hysteresis, making rapid double-tapping slightly slower and generating audible noise on microphone streams." },
    { question: "What are magnetic Hall effect switches?", answer: "Hall effect switches use magnetic field sensors instead of physical metal contacts, enabling rapid trigger technology where keys reset the instant your finger moves upward by as little as 0.1mm." }
  ],
  'spacebar-actuation-physics-bhop-guide': [
    { question: "Why is bunny hopping harder on a heavy spacebar?", answer: "Bunny hopping requires jumping on the exact ground-touch frame. Heavy spacebars with stiff springs (60g+) and unlubricated wire stabilizers have sluggish return velocity, causing missed jump inputs." },
    { question: "What is the average Spacebar CPS score?", answer: "Average users hit 6-8 clicks per second on a spacebar using single-thumb tapping. Using two-thumb alternating flutter clicking can achieve 11-14 CPS." },
    { question: "How do stabilizers affect spacebar tapping speed?", answer: "Poorly balanced or rattling wire stabilizers introduce mechanical binding and extra friction at the edges, slowing down switch rebound and reducing actuation consistency." }
  ],
  'kyoto-chimp-test-working-memory-science': [
    { question: "Can chimpanzees really beat humans at working memory tasks?", answer: "Yes. In the Kyoto University primate research experiments, young chimpanzee Ayumu memorized the spatial locations of numerals 1 through 9 presented for only 210 milliseconds with over 80% accuracy, outperforming human adults." },
    { question: "Why is chimpanzee working memory faster than human memory?", answer: "The cognitive trade-off hypothesis suggests early human evolution sacrificed rapid photographic visual working memory to develop complex symbolic language and abstract reasoning." },
    { question: "How high can a normal human score on the Chimp Test?", answer: "Most untrained human adults can consistently recall 6 to 8 numbers before short-term memory chunking limits cause sequencing errors under rapid exposure times." }
  ],
  'miller-law-digit-span-working-memory': [
    { question: "What is Miller's Law in cognitive psychology?", answer: "Formulated in 1956 by George A. Miller, Miller's Law states that human short-term working memory capacity is limited to 7 ± 2 discrete informational chunks." },
    { question: "What is a normal forward digit span score?", answer: "A typical healthy adult forward digit span score is 7 digits (with a normal range of 5 to 9 digits). Practiced individuals using mnemonic chunking techniques can retain 12+ digits." },
    { question: "What is chunking and how does it improve memory?", answer: "Chunking is the cognitive process of grouping individual data points into meaningful larger units (like grouping a phone number into 3-digit and 4-digit blocks), allowing you to store far more information within your 7 memory slots." }
  ],
  'gamer-guide-preventing-carpal-tunnel-rsi': [
    { question: "What are the earliest warning signs of gamer RSI?", answer: "Early indicators include dull forearm aching, tingling or numbness in the thumb, index, and middle fingers, morning wrist stiffness, and localized burning sensations after extended gaming sessions." },
    { question: "Does high-CPS clicking cause carpal tunnel syndrome?", answer: "Forceful, sustained high-CPS techniques like jitter clicking create extreme continuous muscular tension in the forearm flexor tendons. Without proper rest, warmups, and ergonomic posture, this increases the risk of tendon inflammation and median nerve compression." },
    { question: "How often should gamers take breaks during sessions?", answer: "Apply the 50/10 rule or the 20-20-20 rule: every 50 minutes of intense gaming or typing, take a 5 to 10 minute rest break to shake out hands, stretch forearm flexors, and reset posture." }
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
