import { GameSEO } from "@/components/game-seo";
import { VisualMemoryTest } from "@/components/visual-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Eye, Grid, Trophy, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Visual Memory Test – Visuospatial Pattern Recall & Grid Memory | CpsSpeedTest',
  description: 'Test your visuospatial working memory on our interactive grid pattern test. Memorize flashing square positions across expanding grids and test your visual recall capacity.',
  keywords: ['visual memory test', 'spatial memory test', 'pattern memory game', 'grid memory test', 'visuospatial sketchpad', 'working memory test', 'visual recall game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/visual-memory-test',
  },
  openGraph: {
    title: 'Visual Memory Test – Visuospatial Pattern Recall & Grid Memory',
    description: 'Benchmark your visual working memory span and spatial pattern recall capacity on expanding grid challenges.',
    url: 'https://www.cpsspeedtest.com/visual-memory-test',
    type: 'website',
  },
};

const visualMemoryFaqs = [
  {
    question: "What cognitive subsystem does the Visual Memory Test evaluate?",
    answer: "The Visual Memory Test specifically benchmarks the 'visuospatial sketchpad' component of working memory, as formulated in the Baddeley-Hitch multicomponent working memory model. It tests your ability to temporarily retain, organize, and mentally manipulate spatial coordinates and geometric patterns."
  },
  {
    question: "What is an average score on the Visual Memory Test?",
    answer: "Across general populations, the average adult reaches Level 9 to 11 (recalling approximately 6 to 8 highlighted tiles on a 5x5 grid). Reaching Level 14+ places a participant in the top 5% of visuospatial processing capacity."
  },
  {
    question: "How does Gestalt pattern chunking improve visual memory?",
    answer: "Rather than attempting to memorize individual grid coordinate pairs (e.g., Row 2 Col 3, Row 4 Col 1), high scorers group illuminated tiles into recognizable Gestalt shapes—such as letters ('L', 'T', 'X'), geometric constellations, or diagonal lines. This collapses multiple distinct pieces of data into a single cognitive chunk."
  },
  {
    question: "Why do grid tests get harder when grid dimensions expand?",
    answer: "When grid sizes expand from 3x3 to 6x6 and beyond, spatial interference increases dramatically. The brain must track not only where squares were present, but also suppress the dozens of surrounding empty candidate squares, creating spatial noise."
  },
  {
    question: "Can training on visual memory games improve real-world spatial skills?",
    answer: "Yes. Visuospatial training enhances mental rotation, navigational map reading, surgical dexterity, architectural blueprint comprehension, and mini-map awareness in competitive gaming titles (like MOBAs and tactical FPS)."
  }
];

export default function VisualMemoryTestPage() {
  return (
    <>
      <GameSEO 
        name="Visual Memory Test"
        description="Test your visuospatial working memory. Memorize flashing patterns on an expanding grid and repeat them accurately."
        url="https://www.cpsspeedtest.com/visual-memory-test"
        faqs={visualMemoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Visuospatial Sketchpad &amp; Grid Pattern Recall</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Visual Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A pattern of illuminated squares will flash briefly across a matrix. Memorize the spatial configuration and click the correct squares without exhausting your lives.
          </p>
        </header>

        {/* Visual Memory Test Interactive Component */}
        <div className="py-2">
          <VisualMemoryTest />
        </div>

        {/* ── Section 1: The Visuospatial Sketchpad (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              The Visuospatial Sketchpad: How Your Brain Stores Spatial Grids
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In cognitive psychology, working memory is divided into distinct modalities: auditory/verbal data is processed by the <em>phonological loop</em>, while visual scenes and physical coordinates are handled by the <strong>visuospatial sketchpad</strong>.
            </p>
            <p>
              When the grid illuminates for less than two seconds, your retina captures a raw optical image (iconic memory). Your parietal and occipital lobes immediately extract geometric relationships, attempting to create a mental map before the retinal after-image fades:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Feature Binding:</strong> Combining individual illuminated tiles into recognizable clusters.
              </li>
              <li>
                <strong className="text-foreground">Spatial Reference Anchoring:</strong> Gauging tile positions relative to the static perimeter boundaries and corners of the grid.
              </li>
              <li>
                <strong className="text-foreground">Motor Retrieval:</strong> Systematically translating the remembered mental image into accurate mouse clicks while suppressing distracting empty squares.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Grid Levels ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Visual Memory Benchmark Tiers (Grid Levels)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How strong is your spatial recall? Here is the distribution of final levels achieved across the global testing community:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Levels 1 – 6</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Developing Spatial Memory</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  3x3 to 4x4 grids (3–5 tiles). The player remembers tiles individually without grouping them into holistic shapes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Levels 7 – 10</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Baseline</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  5x5 grids (6–8 tiles). Standard adult capacity. Successfully uses basic perimeter anchoring to locate outer tiles.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Levels 11 – 14</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Visual Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  6x6 grids (9–11 tiles). Top 10% performance. Employs Gestalt constellation grouping and sub-cluster chunking.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Levels 15+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Photographic / Elite Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% eidetic recall. Exceptional capacity to preserve vivid mental snapshots of 12+ simultaneous coordinates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Gestalt Memory Strategies ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                Gestalt Grouping &amp; Constellation Mapping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                To consistently surpass Level 10, utilize structural visualization techniques:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Look for Letter Glyphs:</strong> Illuminated tiles often resemble letters (C, H, L, T) or familiar symbols. Remembering a single letter name encodes 4–5 squares effortlessly.
                </li>
                <li>
                  <strong className="text-foreground">Divide Into Quadrants:</strong> Mentally split larger 5x5 and 6x6 grids into four mini-quadrants (Top-Left, Top-Right, Bottom-Left, Bottom-Right) and count tiles per sector.
                </li>
                <li>
                  <strong className="text-foreground">Identify Outliers First:</strong> Click the isolated corner and border tiles first, then reconstruct the dense central cluster from your lingering mental image.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Cognitive Memory Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Explore other dimensions of working memory and rapid sensory perception:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/chimp-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Chimp Test</span>
                  <span className="text-primary font-mono">Sequential Working Memory →</span>
                </Link>
                <Link href="/sequence-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sequence Memory Test</span>
                  <span className="text-primary font-mono">Temporal Pattern Recall →</span>
                </Link>
                <Link href="/simon-says" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Simon Says</span>
                  <span className="text-primary font-mono">Audio-Visual Recall →</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Visual Memory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {visualMemoryFaqs.map((faq, index) => (
                <div key={index} className="py-3.5 space-y-1.5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
