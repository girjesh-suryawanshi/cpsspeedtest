import { GameSEO } from "@/components/game-seo";
import { ChimpTest } from "@/components/chimp-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Brain, Sparkles, Activity, Eye, CheckCircle2, HelpCircle,
  Star, TrendingUp, Lightbulb, Target,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Chimp Test – Working Memory & Photographic Recall Challenge | CpsSpeedTest",
  description:
    "Take the famous Chimp Test to measure your spatial working memory. Based on the Kyoto University Ayumu chimpanzee study — can you beat a chimpanzee's photographic recall?",
  keywords: [
    "chimp test",
    "chimpanzee memory test",
    "ayumu memory test",
    "working memory test",
    "spatial memory test online",
    "photographic memory test",
    "human benchmark chimp test",
    "can humans beat chimpanzees memory",
    "brain memory test online",
    "cognitive memory test",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/chimp-test",
  },
  openGraph: {
    title: "Chimp Test – Can You Beat a Chimpanzee's Memory? | CpsSpeedTest",
    description:
      "Test your spatial working memory with the Chimp Test, inspired by the 2007 Kyoto University Ayumu experiment. Free, no signup required.",
    url: "https://www.cpsspeedtest.com/chimp-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimp Test – Working Memory vs. Chimpanzee",
    description: "Can you beat Ayumu the chimpanzee? Test your photographic spatial memory recall now.",
  },
};

// ─── HowTo Steps ─────────────────────────────────────────────────────────────

const chimpHowToSteps = [
  {
    name: "Open the Chimp Test",
    text: "Navigate to cpsspeedtest.com/chimp-test in any browser. The test works on both desktop and mobile — no download or signup required.",
  },
  {
    name: "Study the numbered squares",
    text: "A grid of numbered squares (starting with numbers 1–4) appears on screen for a brief moment. Memorize the position of each number as quickly as you can.",
  },
  {
    name: "The numbers disappear — white squares remain",
    text: "After the display period, all numbers vanish and are replaced by blank white squares. Your task is to click the squares in ascending numerical order (1, 2, 3, 4...) from memory.",
  },
  {
    name: "Click the squares in ascending order",
    text: "Click where you remember seeing number 1 first, then 2, then 3, and so on. If you click incorrectly, the round fails.",
  },
  {
    name: "Advance to harder levels",
    text: "Successfully completing a level adds one more number to the sequence. Level 5 shows numbers 1–5, Level 6 shows 1–6, and so on. The display time also shortens at higher levels.",
  },
  {
    name: "Track your personal best level",
    text: "The game ends when you click a wrong square. Your highest completed level is your score. Most adults reach level 7–9. Ayumu the chimpanzee achieved level 9 in under 65 milliseconds of display time.",
  },
];

// ─── FAQs (7 high-intent Q&As) ───────────────────────────────────────────────

const chimpFaqs = [
  {
    question: "What is the Chimp Test and where did it originate?",
    answer:
      "The Chimp Test is a spatial working memory challenge based on a landmark 2007 study at Kyoto University's Primate Research Institute led by primatologist Dr. Tetsuro Matsuzawa. In the study, a young chimpanzee named Ayumu could see numbers 1–9 scattered on a touchscreen for just 65 milliseconds and recall their exact sequential positions with 80–90% accuracy — vastly outperforming university students. The digital version replicates this test to benchmark human spatial short-term memory.",
  },
  {
    question: "Why do chimpanzees outperform humans in this working memory test?",
    answer:
      "According to Dr. Matsuzawa's 'Cognitive Trade-Off Hypothesis', humans evolved complex language, symbolic reasoning, and long-term semantic memory by sacrificing the brain's raw short-term eidetic (photographic) spatial memory capacity. Chimpanzees, lacking complex language, retained this rapid spatial snapshot ability as an evolutionary advantage for navigating tree canopies and detecting predators at speed. Humans traded photographic spatial memory for abstract thinking.",
  },
  {
    question: "What is a good score on the Chimp Test?",
    answer:
      "Most adults successfully complete up to level 7–9, which aligns with George Miller's famous 1956 psychological paper establishing short-term memory capacity as '7 ± 2 items' (known as Miller's Law). Reaching level 10 or above requires advanced spatial chunking and visualization strategies. Scores above 12 are exceptional and are typically achieved through dedicated memory training rather than innate ability.",
  },
  {
    question: "What is working memory and why does it matter?",
    answer:
      "Working memory is the cognitive system that temporarily holds and manipulates information during active tasks — it is your brain's mental scratchpad. It determines how many items you can track simultaneously, how well you follow multi-step instructions, and how quickly you can process complex situations. Strong working memory is associated with higher academic performance, faster learning, better decision-making, and improved performance in fast-paced games.",
  },
  {
    question: "Can I improve my score on the Chimp Test with practice?",
    answer:
      "Yes. Specific strategies that help include: visualizing a continuous line connecting numbers 1 through N before they disappear (the 'mental tracing' technique), grouping numbers into geometric clusters (triangle, square), maintaining a relaxed wide-field focus rather than scanning one number at a time (peripheral vision is faster for spatial location recall), and regular practice with sequential memory tasks.",
  },
  {
    question: "How does the Chimp Test differ from other memory tests on this site?",
    answer:
      "The Chimp Test specifically measures spatial working memory — your ability to recall where things were located, not what they were. The Number Memory Test measures forward digit span (how many sequential digits you can repeat). The Visual Memory Test measures grid pattern recall. The Sequence Memory Test measures auditory or visual pattern sequence recall. Each targets a different dimension of working memory.",
  },
  {
    question: "Does poor performance on the Chimp Test indicate low intelligence?",
    answer:
      "No. The Chimp Test specifically measures one narrow dimension of cognitive function: short-term spatial eidetic recall. It is not an IQ test, and a low score does not reflect general intelligence. Humans' relative weakness in this specific task is a normal evolutionary trade-off. Many highly intelligent people score lower than average on spatial working memory tests while excelling in verbal reasoning, analytical thinking, and creative problem-solving.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChimpTestPage() {
  return (
    <>
      <GameSEO
        name="Chimp Test – Photographic Memory Challenge"
        description="Take the famous Chimp Test to measure your spatial working memory. Based on the Kyoto University Ayumu chimpanzee study — can you beat a chimpanzee's photographic recall?"
        url="https://www.cpsspeedtest.com/chimp-test"
        faqs={chimpFaqs}
        howToSteps={chimpHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Chimp Test"
        speakableSummary="The Chimp Test measures spatial working memory based on the 2007 Kyoto University Ayumu experiment. Most adults reach level 7–9, matching Miller's Law of 7±2 items. Chimpanzees outperform humans in this specific test due to the Cognitive Trade-Off Hypothesis."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">

        {/* ── HERO ── */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Based on the Kyoto University Ayumu Study · Free · No Signup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Chimp Test
          </h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>Chimp Test</strong> challenges your <strong>spatial working memory</strong> — the same
            cognitive skill tested in the famous 2007 Kyoto University experiment where a chimpanzee named
            Ayumu outperformed human students. Memorize the number positions, then click them in order once
            they vanish. How far can you go?
          </p>
        </header>

        {/* ── Interactive Tool ── */}
        <ChimpTest />

        {/* ── SECTION 1: What Is the Chimp Test? (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              What Is the Chimp Test? — The Science Behind the Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              The <strong>Chimp Test</strong> is a spatial working memory benchmark inspired by a landmark
              2007 experiment at Kyoto University&apos;s Primate Research Institute. Researchers led by
              Dr. Tetsuro Matsuzawa discovered that a young chimpanzee named <strong>Ayumu</strong> could
              memorize the positions of numbers 1–9 on a touchscreen after just <strong>65 milliseconds</strong> of
              exposure — vastly outperforming university student volunteers who struggled to recall even
              3–4 positions.
            </p>
            <p>
              In the digital version of this test, numbers appear briefly on a grid and then disappear,
              replaced by blank white squares. Your challenge is to click the squares in ascending
              numerical order, purely from memory. Each successful level increases the number count
              by one, making the task progressively harder.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-center font-bold sm:text-lg">
              Your Score = Highest Level Completed (Number of Squares Memorized)
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm space-y-1.5">
              <p className="font-semibold text-primary">The Cognitive Trade-Off Hypothesis (Dr. Matsuzawa, 2007):</p>
              <p>
                Humans evolved advanced language and abstract reasoning by trading away the raw short-term
                eidetic spatial memory that chimpanzees retained for rapid tree navigation and predator
                detection. Our brains are better at storing <em>meaning</em>; chimp brains are better at
                storing <em>locations</em> at extreme speed.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 2: How to Play (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Play the Chimp Test — Step-by-Step Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {chimpHowToSteps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-xs bg-secondary/30 p-3 rounded-lg border border-border/20">
              💡 <strong>Mental Tracing Trick:</strong> Before the numbers disappear, quickly trace an
              imaginary curved line from 1 → 2 → 3 → 4 → 5 in your mind. This converts 5 separate
              location memories into a single continuous path memory — much easier to hold.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 3: Benefits of Working Memory Training (GEO / User Value) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Benefits of Testing & Training Working Memory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Working memory is not just a gaming skill — it underpins nearly every complex cognitive
              activity in daily life. Here is why training it matters:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Academic & Professional Performance",
                  body: "Working memory capacity strongly predicts reading comprehension, mathematical problem solving, and the ability to follow multi-step instructions. Students with stronger working memory perform measurably better in standardized academic tests across all subjects.",
                },
                {
                  title: "Gaming & Esports Performance",
                  body: "In fast-paced games, working memory determines how many enemy positions, teammate locations, and tactical variables you can simultaneously track. Higher working memory capacity lets you play more 'chess moves ahead' in any strategy or multiplayer game.",
                },
                {
                  title: "Cognitive Health & Aging",
                  body: "Working memory capacity naturally declines with age, but cognitive exercises that challenge spatial and sequential memory have been shown to slow this decline. Regular memory training maintains neural plasticity and supports long-term brain health.",
                },
                {
                  title: "Everyday Decision Making",
                  body: "Remembering directions while navigating, keeping track of a conversation while formulating your response, mentally calculating change at a checkout — all rely on working memory. Even modest improvements to working memory capacity yield noticeable daily life benefits.",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 4: The Ayumu Experiment Deep-Dive (GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-primary" />
              The Ayumu Experiment — Full Scientific Deep Dive
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              In 2007, researchers at Kyoto University&apos;s Primate Research Institute set up a
              head-to-head working memory competition between human university students and{" "}
              <strong>Ayumu</strong> — a 5-year-old male chimpanzee born and raised in the lab.
            </p>
            <p>
              Nine numbers (1–9) appeared on a touchscreen for exposures ranging from{" "}
              <strong>650 milliseconds down to 65 milliseconds</strong>. After the numbers vanished,
              both human and chimp had to touch the blank squares in ascending order. The results:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Exposure Duration</th>
                    <th className="py-2.5 px-3 font-bold">Ayumu (Chimp) Accuracy</th>
                    <th className="py-2.5 px-3 font-bold">Human Students Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["650 ms (long)", "~90%", "~80%"],
                    ["430 ms (medium)", "~90%", "~60%"],
                    ["210 ms (short)", "~80%", "~40%"],
                    ["65 ms (extreme)", "~80%", "~20%"],
                  ].map(([dur, chimp, human]) => (
                    <tr key={dur}>
                      <td className="py-2 px-3 font-medium text-foreground">{dur}</td>
                      <td className="py-2 px-3 text-emerald-500 font-bold">{chimp}</td>
                      <td className="py-2 px-3 text-red-400 font-bold">{human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The study, published in <em>Current Biology</em> (Inoue &amp; Matsuzawa, 2007), sparked worldwide
              discussion about evolutionary cognition and the nature of human uniqueness. It revealed that
              humans&apos; cognitive supremacy is not universal — it comes with specific biological trade-offs.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 5: Score Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Chimp Test Score Benchmarks — What Is a Good Score?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🧠", tier: "Average Adult", range: "Level 4–6", color: "text-blue-500", desc: "Normal for adults tested without prior training. Matches lower end of Miller's Law (7±2)." },
                { icon: "⭐", tier: "Good", range: "Level 7–9", color: "text-purple-500", desc: "Core working memory capacity range. Matches the average chimpanzee performance window." },
                { icon: "🏆", tier: "Excellent", range: "Level 10–12", color: "text-amber-500", desc: "Above-average spatial recall. Typically achieved with mental tracing or chunking strategies." },
                { icon: "🦍", tier: "Ayumu Level", range: "Level 9 in 65ms", color: "text-emerald-500", desc: "The chimpanzee benchmark. At full human display speed, this level is achievable with practice." },
              ].map((t) => (
                <div key={t.tier} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1 text-center">
                  <div className="text-2xl">{t.icon}</div>
                  <div className="font-bold text-foreground text-sm">{t.range}</div>
                  <div className={`text-xs font-semibold uppercase ${t.color}`}>{t.tier}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 6: How to Improve ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your Chimp Test Score — 5 Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[
              { tip: "Mental tracing — connect numbers into a path", detail: "Before numbers vanish, quickly trace an imaginary line connecting 1 → 2 → 3 → 4 in sequence. Remembering one continuous path is cognitively easier than remembering 4 separate locations." },
              { tip: "Peripheral vision scanning — see all at once", detail: "Instead of reading numbers left-to-right (which misses peripheral numbers), fix your gaze at the center of the grid and absorb all positions simultaneously. Peripheral vision processes spatial location faster than sequential scanning." },
              { tip: "Geometric clustering — group into shapes", detail: "If numbers form a triangle or L-shape, remember the shape instead of individual positions. Your spatial memory handles geometric forms more efficiently than arbitrary point lists." },
              { tip: "Practice daily in 5–10 minute sessions", detail: "Working memory responds to deliberate practice, but fatigues quickly. Short daily sessions (5–10 minutes) outperform long infrequent ones for sustained improvement." },
              { tip: "Combine with other memory tests", detail: "Cross-training with Number Memory (forward digit span), Visual Memory (grid patterns), and Sequence Memory (Simon Says) engages different working memory sub-systems and accelerates overall improvement." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.tip}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ── SECTION 7: FAQ ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — Chimp Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {chimpFaqs.map((faq, index) => (
                <div key={index} className="py-3.5 space-y-1.5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 8: Related Tools ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              Related Memory & Cognitive Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Number Memory Test", href: "/number-memory-test", desc: "Test forward digit span — how many numbers can you hold in sequence?" },
                { label: "Sequence Memory Test", href: "/sequence-memory-test", desc: "Simon-pattern sequential memory challenge." },
                { label: "Visual Memory Test", href: "/visual-memory-test", desc: "Spatial grid pattern memorization test." },
                { label: "Verbal Memory Test", href: "/verbal-memory-test", desc: "Word recognition and verbal recall benchmark." },
                { label: "Reaction Time Test", href: "/reaction-time-test", desc: "Measure your visual reflex speed alongside memory." },
                { label: "Stroop Test", href: "/stroop-test", desc: "Test cognitive interference and processing speed." },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
