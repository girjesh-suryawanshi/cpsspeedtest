import { GameSEO } from "@/components/game-seo";
import { VisualMemoryTest } from "@/components/visual-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Eye, Grid, Trophy, Brain, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Sparkles,
  LayoutGrid, Award, ShieldCheck, Activity
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visual Memory Test – Visuospatial Pattern Recall & Grid Memory | CpsSpeedTest",
  description:
    "Test your visuospatial working memory on our interactive grid pattern test. Memorize flashing square positions across expanding grids and benchmark your visual recall against global psychological standards.",
  keywords: [
    "visual memory test",
    "spatial memory test",
    "pattern memory game",
    "grid memory test",
    "visuospatial sketchpad",
    "working memory test",
    "visual recall game",
    "baddeley working memory",
    "spatial pattern recall",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/visual-memory-test",
  },
  openGraph: {
    title: "Visual Memory Test – Visuospatial Pattern Recall & Grid Memory",
    description: "Benchmark your visual working memory span and spatial pattern recall capacity across expanding grid challenges.",
    url: "https://www.cpsspeedtest.com/visual-memory-test",
    type: "website",
  },
};

const visualHowToSteps = [
  {
    name: "Inspect the starting grid dimensions",
    text: "The test begins on a compact 3x3 grid. As you advance through levels, the grid expands to 4x4, 5x5, 6x6, and beyond.",
  },
  {
    name: "Observe the flashing white target tiles",
    text: "Target squares will illuminate in white for roughly one second. Keep your gaze centered on the grid rather than tracking tiles individually.",
  },
  {
    name: "Encode the tiles as a unified Gestalt shape",
    text: "Mentally group the illuminated squares into recognizable letters (like 'L', 'T', 'X'), geometric clusters, or diagonal constellations.",
  },
  {
    name: "Wait for the tiles to flip face down",
    text: "The grid flips over and returns to a uniform neutral state, unlocking click interaction for pattern reproduction.",
  },
  {
    name: "Click all previously illuminated tiles",
    text: "Click the exact squares that were highlighted. You have 3 lives (strikes); selecting an empty square costs one strike.",
  },
  {
    name: "Advance to higher grid levels",
    text: "Successfully identifying all target tiles advances you to the next tier, expanding grid size and increasing target count to challenge your visuospatial limits.",
  },
];

const visualMemoryFaqs = [
  {
    question: "What cognitive subsystem does the Visual Memory Test evaluate?",
    answer:
      "The Visual Memory Test specifically benchmarks the 'visuospatial sketchpad' component of working memory, as formulated in the Baddeley-Hitch multicomponent working memory model. It tests your brain's right-hemisphere ability to temporarily retain, organize, and mentally manipulate spatial coordinates and geometric patterns without converting them into words.",
  },
  {
    question: "What is an average score on the Visual Memory Test?",
    answer:
      "Across global population datasets, the average adult reaches Level 9 to 11 (recalling approximately 6 to 8 highlighted tiles on a 5x5 grid). Reaching Level 14+ places a participant in the top 5% of visuospatial processing capacity, while scores above Level 16 represent the top 1% elite tier.",
  },
  {
    question: "How does Gestalt pattern chunking improve visual memory scores?",
    answer:
      "Rather than attempting to memorize individual grid coordinate pairs (e.g., Row 2 Col 3, Row 4 Col 1), high scorers group illuminated tiles into recognizable Gestalt shapes—such as letters ('L', 'T', 'X'), geometric constellations, or diagonal lines. This collapses multiple distinct pieces of data into a single cognitive chunk, bypassing the standard 7-slot working memory limit.",
  },
  {
    question: "Why do grid tests get drastically harder when dimensions expand?",
    answer:
      "When grid sizes expand from 3x3 to 6x6 and beyond, spatial interference increases exponentially. The brain must track not only where squares were present, but also suppress the dozens of surrounding empty candidate squares, creating massive spatial noise and requiring intense prefrontal inhibitory control.",
  },
  {
    question: "Can training on visual memory games improve real-world spatial skills?",
    answer:
      "Yes. Visuospatial training enhances mental rotation, navigational map reading, surgical dexterity, architectural blueprint comprehension, driving hazard awareness, and tactical radar/mini-map awareness in competitive gaming titles (like League of Legends, Valorant, and CS2).",
  },
  {
    question: "How is Visual Memory different from Sequence Memory?",
    answer:
      "Visual Memory presents all target items simultaneously as a static spatial picture, evaluating your visuospatial pattern capacity. Sequence Memory presents items sequentially over time, requiring your brain to track both location and temporal chronological order.",
  },
  {
    question: "Does visual working memory decline with age, and can it be trained?",
    answer:
      "Biological visuospatial capacity peaks between ages 20 and 26 and experiences gradual decline. However, practicing regular pattern recognition and Gestalt chunking exercises builds cognitive reserve and significantly mitigates age-related spatial memory loss.",
  },
];

export default function VisualMemoryTestPage() {
  return (
    <>
      <GameSEO
        name="Visual Memory Test – Visuospatial Pattern Recall"
        description="Benchmark your visual working memory span and spatial pattern recall capacity across expanding grid challenges."
        url="https://www.cpsspeedtest.com/visual-memory-test"
        faqs={visualMemoryFaqs}
        howToSteps={visualHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Evaluate visuospatial sketchpad working memory, train Gestalt visual chunking, enhance mini-map and blueprint spatial awareness, and benchmark against global percentile data."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>Baddeley Visuospatial Sketchpad Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Visual Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Memorize the flashing square positions across expanding grid matrices. Test your visuospatial pattern recall, learn Gestalt chunking, and push your working memory limits.
          </p>
        </header>

        {/* Interactive Visual Memory Component */}
        <VisualMemoryTest />

        {/* Section 1: What is Visual Memory? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Visual Memory Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Visual Memory Test</strong> is a standardized psychometric benchmark that evaluates the <strong>visuospatial sketchpad</strong>—the cognitive subsystem of human working memory responsible for temporarily storing visual features, spatial locations, and geometric shapes. By flashing highlighted tiles on an escalating grid, it measures your ability to encode, maintain, and retrieve non-verbal spatial patterns under increasing cognitive load.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Cognitive System</span>
                <span className="text-lg font-black text-primary">Visuospatial Sketchpad</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Baddeley-Hitch memory model</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Adult Tier</span>
                <span className="text-lg font-black text-amber-500">Level 9 – 11</span>
                <span className="text-xs text-muted-foreground block mt-0.5">6 to 8 tiles on 5x5 grid</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Top 5% Elite Tier</span>
                <span className="text-lg font-black text-emerald-500">Level 14+</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Gestalt shape chunking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Take the Visual Memory Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {visualHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Visual Memory Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Visuospatial Memory Matters: Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <LayoutGrid className="w-4 h-4" />
                  Tactical Gaming &amp; Mini-Map Awareness
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In competitive tactical games (Valorant, CS2, League of Legends, Dota 2), glancing at the mini-map for 200ms requires instantly absorbing the spatial positions of 5 teammates and enemy pings without looking away from your crosshair.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Grid className="w-4 h-4" />
                  Architecture, CAD &amp; Engineering Design
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Engineers, architects, and industrial designers continuously visualize 3D cross-sections, structural tolerances, and component layouts. A strong visuospatial scratchpad enables effortless mental rotation of 3D objects.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Activity className="w-4 h-4" />
                  Surgical &amp; Medical Dexterity
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Laparoscopic and robotic surgeons navigate anatomical planes through 2D camera monitors, mentally translating 2D video feeds into precise 3D spatial coordinates within the patient&apos;s body.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  Driving &amp; Situational Road Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                High-speed highway navigation involves tracking the positions, relative speeds, and blind-spot trajectories of multiple surrounding vehicles concurrently to anticipate lane changes and emergency braking.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Gestalt Psychology & Grid Scaling */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Grid Difficulty Scaling &amp; Target Distribution
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Level Bracket</th>
                  <th className="p-3">Grid Size</th>
                  <th className="p-3">Target Squares</th>
                  <th className="p-3">Spatial Interference Index</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Levels 1 – 2</td>
                  <td className="p-3">3 x 3 (9 tiles)</td>
                  <td className="p-3 text-emerald-400 font-semibold">3 – 4 tiles</td>
                  <td className="p-3 text-emerald-400">Low (Instant visual capture)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Levels 3 – 5</td>
                  <td className="p-3">4 x 4 (16 tiles)</td>
                  <td className="p-3 text-primary font-semibold">5 – 6 tiles</td>
                  <td className="p-3 text-primary">Moderate (Subitizing threshold)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Levels 6 – 9</td>
                  <td className="p-3">5 x 5 (25 tiles)</td>
                  <td className="p-3 text-amber-400 font-semibold">7 – 8 tiles</td>
                  <td className="p-3 text-amber-400">High (Requires Gestalt chunking)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Levels 10 – 14</td>
                  <td className="p-3">6 x 6 (36 tiles)</td>
                  <td className="p-3 text-rose-400 font-semibold">9 – 11 tiles</td>
                  <td className="p-3 text-rose-400">Very High (High candidate noise)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Levels 15+</td>
                  <td className="p-3">7 x 7+ (49+ tiles)</td>
                  <td className="p-3 text-purple-400 font-bold">12 – 15+ tiles</td>
                  <td className="p-3 text-purple-400 font-bold">Extreme (Top 1% memory limits)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Visual Memory Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Novice Observer</div>
              <div className="text-2xl font-black text-foreground">Level 1 – 6</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relies on individual tile counting. Struggles once grid expands beyond 4x4 or when targets exceed 5 tiles.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Average Adult</div>
              <div className="text-2xl font-black text-primary">Level 7 – 11</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard population benchmark. Handles 5x5 grids reliably with occasional errors on scattered asymmetric patterns.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Recall</div>
              <div className="text-2xl font-black text-amber-500">Level 12 – 14</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% cognitive tier. Consciously chunks illuminated tiles into letters, triangles, or negative-space silhouettes.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Visual Master</div>
              <div className="text-2xl font-black text-rose-500">Level 15 – 20+</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite spatial capacity. Instantaneous photographic pattern encoding on large 6x6 and 7x7 matrices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Techniques to Master Visual Memory Grids
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Soak in the Whole Grid (Soft Gaze)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Fixate your eyes directly on the center crosshair of the grid and soften your focus. Using peripheral vision captures the entire constellation simultaneously without eye-darting lag.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Name the Shapes (Gestalt Coding)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If three squares form a corner, think &quot;L-shape top-right&quot;. If four squares form a diagonal line, think &quot;slash&quot;. Converting spatial clusters into recognized shapes cuts memory load by 70%.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Remember the Negative Space (Empty Tiles)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    On higher levels where 10 out of 16 tiles illuminate, it is vastly easier to memorize the 6 empty dark squares than the 10 lit squares. Invert your strategy when density exceeds 50%.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Click Confident Clusters First</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Begin clicking the easiest, most obvious shape cluster immediately while it is fresh. Getting early points builds confidence and narrows down candidate coordinates.
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
            {visualMemoryFaqs.map((faq, index) => (
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
              href="/chimp-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Chimp Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/sequence-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Sequence Memory</span>
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
