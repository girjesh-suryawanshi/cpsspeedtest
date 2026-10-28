import { GameSEO } from "@/components/game-seo";
import { SequenceMemoryTest } from "@/components/sequence-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Layers, Brain, Trophy, Activity, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Sparkles,
  Compass, Award, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sequence Memory Test – Spatial Pattern Order & Corsi Block Span | CpsSpeedTest",
  description:
    "Test your sequential visuospatial memory on our Corsi-inspired grid test. Watch flashing squares in order, memorize the spatial trajectory, and reproduce the sequence with zero mistakes.",
  keywords: [
    "sequence memory test",
    "corsi block test",
    "sequential memory span",
    "spatial order memory",
    "pattern recall test",
    "working memory test",
    "corsi block tapping task",
    "spatial trajectory memory",
    "sequence pattern game",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/sequence-memory-test",
  },
  openGraph: {
    title: "Sequence Memory Test – Spatial Pattern Order & Corsi Block Span",
    description: "Benchmark your sequential spatial memory span on an escalating grid. Reproduce growing paths and measure your working memory limits.",
    url: "https://www.cpsspeedtest.com/sequence-memory-test",
    type: "website",
  },
};

const sequenceHowToSteps = [
  {
    name: "Focus on the 3x3 grid matrix",
    text: "At the start of each level, observe the 9 square tiles without blinking to maintain full peripheral coverage.",
  },
  {
    name: "Track the chronological flashing sequence",
    text: "Squares will illuminate one by one in a specific sequence. Watch both the individual tile locations and the chronological order of illumination.",
  },
  {
    name: "Visualize the path as a continuous geometric trajectory",
    text: "Rather than naming squares, mentally draw a continuous connecting line from point to point, turning discrete flashes into a single spatial contour.",
  },
  {
    name: "Wait for the active playback signal",
    text: "Once the illumination sequence concludes, the grid enables click input, allowing you to reproduce the memorized pattern.",
  },
  {
    name: "Tap the tiles in exact chronological order",
    text: "Click each square in the precise order it appeared. One wrong click immediately ends the round.",
  },
  {
    name: "Advance through expanding sequence lengths",
    text: "Every cleared level appends one additional flash to the sequence, testing the absolute biological limit of your Corsi spatial span.",
  },
];

const sequenceMemoryFaqs = [
  {
    question: "What scientific test is the Sequence Memory Test based on?",
    answer:
      "The Sequence Memory Test is a direct digital implementation of the Corsi Block-Tapping Task, formulated by Canadian neuropsychologist Philip Michael Corsi in 1972 at McGill University. It remains the global gold standard for assessing non-verbal, visuospatial short-term memory span and right-hemisphere hippocampal function in clinical and neuropsychological evaluations.",
  },
  {
    question: "What is an average Corsi span score on a sequence memory test?",
    answer:
      "In clinical neuropsychology literature, the average healthy adult Corsi span is 5.4 to 6.2 blocks. Completing sequences of 7 to 9 steps indicates high-level spatial memory capacity, while reaching Level 11+ places a participant in the top 3% of spatial working memory capacity worldwide.",
  },
  {
    question: "How does spatial path trajectory encoding help remember long sequences?",
    answer:
      "Rather than memorizing separate square positions (e.g. Center, Top-Left, Bottom-Right), top performers visualize a continuous moving line—like drawing a single continuous stroke or tracing a constellation across the 3x3 matrix. This converts discrete events into one holistic geometric movement, drastically lowering cognitive load.",
  },
  {
    question: "What is the difference between Visual Memory and Sequence Memory?",
    answer:
      "Visual Memory presents all target items simultaneously as a static spatial picture, evaluating your visuospatial pattern capacity. Sequence Memory presents items sequentially over time, requiring your brain to track both location and temporal chronological order.",
  },
  {
    question: "Can sequence memory training help improve gaming and daily focus?",
    answer:
      "Yes. Sequential working memory is heavily engaged when executing ability rotations in MMOs/MOBAs, predicting enemy movement paths in tactical shooters, remembering multi-step instructions, and performing complex mental calculations without losing your place.",
  },
  {
    question: "Why do sequence memory scores degrade rapidly when tired or distracted?",
    answer:
      "Temporal order encoding relies on the dorsolateral prefrontal cortex (DLPFC) and parietal lobes working in tandem. Mental fatigue, sleep deprivation, or background noise impairs the central executive's ability to maintain timestamped neural tokens, causing sequence order to scramble even when tile locations are remembered.",
  },
  {
    question: "What is the difference between forward and backward sequence memory?",
    answer:
      "Forward sequence memory tests chronological reproduction. Backward sequence memory requires repeating the pattern in reverse order (last tile to first tile). Backward recall demands significantly greater executive manipulation and correlates even more strongly with general fluid reasoning (Gf).",
  },
];

export default function SequenceMemoryTestPage() {
  return (
    <>
      <GameSEO
        name="Sequence Memory Test – Corsi Block Span"
        description="Benchmark your sequential spatial memory span on an escalating grid. Reproduce growing paths and measure your working memory limits."
        url="https://www.cpsspeedtest.com/sequence-memory-test"
        faqs={sequenceMemoryFaqs}
        howToSteps={sequenceHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Evaluate visuospatial sequential working memory, train spatial trajectory mental mapping, enhance pattern tracking for tactical gaming, and benchmark against clinical Corsi span standards."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Corsi Block-Tapping Visuospatial Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Sequence Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Watch the flashing grid tiles in order, memorize the spatial path, and repeat the sequence with zero mistakes. Test your Corsi spatial working memory span.
          </p>
        </header>

        {/* Interactive Sequence Test */}
        <SequenceMemoryTest />

        {/* Section 1: What is the Sequence Memory Test? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Sequence Memory Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Sequence Memory Test</strong> is a digitized adaptation of the clinical <strong>Corsi Block-Tapping Task</strong>, developed in 1972 to evaluate the capacity of human visuospatial working memory. Unlike static pattern tests, it challenges your brain to record not just <em>where</em> events occur in space, but the exact <em>chronological order</em> in which they transpire, measuring the upper limits of your non-verbal memory span.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Clinical Benchmark</span>
                <span className="text-lg font-black text-primary">Corsi Span</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Visuospatial memory index</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Human Adult Average</span>
                <span className="text-lg font-black text-amber-500">5.4 – 6.2 Steps</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Healthy un-trained baseline</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Elite Spatial Span</span>
                <span className="text-lg font-black text-emerald-500">10 – 14+ Steps</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Top 3% spatial memory</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Master the Sequence Memory Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {sequenceHowToSteps.map((step, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-border/80 bg-card/40 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {step.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Sequence Memory Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Sequential Memory Matters: Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Compass className="w-4 h-4" />
                  Spatial Navigation &amp; Mental Mapping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Remembering turns while driving through an unfamiliar city, tracking multi-floor indoor blueprints, or orienting yourself in open-world games relies on the exact hippocampal sequence-encoding pathways evaluated by the Corsi test.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  Gaming Ability Rotations &amp; Combos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Executing complex fighting game combos (Tekken, Street Fighter) or precise skill rotations in MMOs/MOBAs (World of Warcraft, League of Legends) requires executing sequential inputs under tight temporal constraints.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Zap className="w-4 h-4" />
                  Algorithmic Thinking &amp; Coding
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Software developers trace execution stacks, recursion loops, and nested logic branches sequentially. A larger sequential working memory span makes it effortless to mentally simulate code execution without losing track of variable state.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  Multi-Step Procedural Following
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether executing surgical protocols, following laboratory chemistry procedures, or assembling intricate mechanical equipment, sequential memory prevents omitting crucial mid-sequence steps.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Corsi Span Science */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Corsi Block-Tapping Span Scientific Benchmarks
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Population Group</th>
                  <th className="p-3">Average Sequence Span</th>
                  <th className="p-3">Upper 10th Percentile</th>
                  <th className="p-3">Dominant Encoding Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Competitive Action Gamers</td>
                  <td className="p-3 text-emerald-400 font-semibold">8.2 – 9.8 Steps</td>
                  <td className="p-3 text-emerald-400 font-bold">12+ Steps</td>
                  <td className="p-3">Continuous spatial path vectorization</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Healthy Adults (Ages 18–35)</td>
                  <td className="p-3 text-primary font-semibold">5.8 – 6.4 Steps</td>
                  <td className="p-3 text-primary font-bold">8.5 Steps</td>
                  <td className="p-3">Hybrid verbal naming + spatial glance</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Adults (Ages 36–55)</td>
                  <td className="p-3">5.2 – 5.9 Steps</td>
                  <td className="p-3">7.8 Steps</td>
                  <td className="p-3">Discrete tile-by-tile recall</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Older Adults (Ages 65+)</td>
                  <td className="p-3">4.4 – 5.1 Steps</td>
                  <td className="p-3">6.5 Steps</td>
                  <td className="p-3">Short-term visual chunking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Performance Tiers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Sequence Memory Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Developing Span</div>
              <div className="text-2xl font-black text-foreground">1 – 4 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Initial stage or high mental fatigue. Participant attempts to memorize squares as disconnected random blinks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Healthy Baseline</div>
              <div className="text-2xl font-black text-primary">5 – 7 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Matches global human Corsi standard (5.4–6.2). Demonstrates reliable short-term spatial retention across standard sequences.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Memory</div>
              <div className="text-2xl font-black text-amber-500">8 – 11 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% cognitive performance. Actively encodes patterns into geometric lines or rhythmically chunked sub-groups.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Spatial Genius</div>
              <div className="text-2xl font-black text-rose-500">12 – 16+ Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite spatial memory. Flawless mental trajectory drawing with instant non-verbal procedural execution.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Techniques to Increase Your Sequence Memory Score
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Trace a Continuous Imaginary Path</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Treat each flash as a waypoint on a single continuous road. Connect the dots with an imaginary laser line. Remembering one continuous shape is far easier than remembering 8 separate tiles.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Break Sequences into 3-Beat Triplets</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If a sequence has 9 flashes, chunk it into three distinct triplets (1-2-3, 4-5-6, 7-8-9). Mentally pausing between triplets resets your attention and prevents item bleeding.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Anchor on the Center and Corners</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Use the center square and the 4 corner squares as spatial landmark anchors. Describing movement relative to landmarks (&quot;corner to center to bottom edge&quot;) provides clear directional cues.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Quiet Inner Speech (Don&apos;t Say Names)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Saying &quot;top left, middle, right...&quot; is too slow and causes bottleneck lag when flashes speed up. Rely on pure visual memory without verbal narration.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {sequenceMemoryFaqs.map((faq, index) => (
              <Card key={index} className="border-border/70 bg-card/40">
                <CardHeader className="py-3.5 px-4 sm:px-5">
                  <CardTitle className="text-sm sm:text-base font-semibold text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 pb-4 px-4 sm:px-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cross-linking Related Brain Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Cognitive Benchmarks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/visual-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Visual Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/chimp-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Chimp Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/number-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Number Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
