import { GameSEO } from "@/components/game-seo";
import { JigsawPuzzle } from "@/components/jigsaw-puzzle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Puzzle, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Jigsaw Puzzle – Visual Tile Reconstruction & Spatial Assembly | CpsSpeedTest',
  description: 'Play our free Jigsaw Puzzle online. Unscramble image tiles using drag-and-drop mechanics, edge piece sorting, and color gradient alignment. Test visual assembly speed.',
  keywords: ['jigsaw puzzle', 'play jigsaw puzzle online', 'tile swap puzzle', 'image puzzle game', 'spatial assembly game', 'visual problem solving', 'free online jigsaw', 'john spilsbury puzzle'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/jigsaw-puzzle',
  },
  openGraph: {
    title: 'Jigsaw Puzzle – Visual Tile Reconstruction Online',
    description: 'Swap and unscramble image tiles to assemble beautiful illustrations. Benchmark your visuospatial problem-solving speed.',
    url: 'https://www.cpsspeedtest.com/jigsaw-puzzle',
    type: 'website',
  },
};

const jigsawHowToSteps = [
  {
    name: "Survey the Scrambled Image Grid",
    text: "Scan the scattered image tiles across the grid canvas to identify prominent landmarks, distinctive textures, and color gradients."
  },
  {
    name: "Isolate Edge and Corner Pieces First",
    text: "Identify tiles with straight borders or corner boundaries. Constructing the outer frame provides immediate spatial context."
  },
  {
    name: "Group by Dominant Chromatic Clusters",
    text: "Sort remaining interior tiles into color clusters (e.g. vibrant skies, earthy foliage, or architectural elements)."
  },
  {
    name: "Drag and Swap Tiles into Correct Slots",
    text: "Click and drag one tile directly over another to exchange their positions. The engine validates alignment in real time."
  },
  {
    name: "Verify Continuity Across Neighboring Seams",
    text: "Examine edge transitions between adjacent tiles. Align fine details like horizon lines, horizons, and object contours."
  },
  {
    name: "Complete the Final Picture Assembly",
    text: "Swap the final mismatched tiles to trigger full-image validation and record your official completion time."
  }
];

const jigsawFaqs = [
  {
    question: "How does the tile swapping mechanic work in this digital Jigsaw Puzzle?",
    answer: "The full image is divided into a scrambled grid of rectangular tiles. Clicking and dragging one tile over another swaps their grid positions. When all tiles are restored to their correct coordinates, the engine validates the image and displays your final completion time."
  },
  {
    question: "What is the most effective strategy for solving jigsaw puzzles quickly?",
    answer: "Focus on identifying high-contrast border and corner tiles first. After establishing the outer frame, group interior tiles by chromatic clusters (e.g. blue sky, green grass) and unique focal landmarks before filling in textured gradients."
  },
  {
    question: "Who invented the original jigsaw puzzle and what is its origin?",
    answer: "The jigsaw puzzle was invented around 1760 by English mapmaker and cartographer John Spilsbury. He mounted a map of the world onto a sheet of hardwood and cut around national borders with a marquetry saw, creating an educational geography tool called a 'dissected map'."
  },
  {
    question: "What cognitive benefits come from solving digital jigsaw puzzles?",
    answer: "Jigsaw puzzles exercise dual-hemisphere brain function: the left brain analyzes pieces logically and sequentially, while the right brain visualizes holistic form, color gradients, and spatial orientation. It improves visual working memory and lowers stress by promoting flow state immersion."
  },
  {
    question: "Can I play this Jigsaw Puzzle on mobile phones and touchscreens?",
    answer: "Yes, the puzzle supports touch drag-and-drop gestures across smartphones, tablets, and desktop mice, providing responsive visual feedback during tile swaps."
  },
  {
    question: "How does jigsaw solving impact neuroplasticity and memory in adults?",
    answer: "Neuroscientific research shows that engaging in spatial assembly puzzles stimulates the production of dopamine and strengthens neural connections in the parietal and occipital lobes, supporting cognitive reserve against age-related decline."
  },
  {
    question: "What should you do if two interior tiles look virtually identical?",
    answer: "Examine sub-pixel textural details and color temperature. Look closely at contrast gradations along the seams where the tile connects with already-verified neighbor pieces."
  }
];

export default function JigsawPuzzlePage() {
  return (
    <>
      <GameSEO 
        name="Jigsaw Puzzle"
        description="Unscramble the tiles to reveal the hidden image. Play our free Jigsaw Puzzle online and benchmark your spatial assembly speed."
        url="https://www.cpsspeedtest.com/jigsaw-puzzle"
        faqs={jigsawFaqs}
        howToSteps={jigsawHowToSteps}
        category="CasualGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Visuospatial Assembly &amp; Tile Matching</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Jigsaw Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reconstruct beautiful images tile by tile. Exercise spatial reasoning, edge detection, and visual working memory in our clean interactive jigsaw studio.
          </p>
        </header>

        {/* Interactive Jigsaw Puzzle Component */}
        <div className="py-2">
          <JigsawPuzzle />
        </div>

        {/* ── Section 1: Spatial Assembly Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Visuospatial Processing: From John Spilsbury to Modern Grids
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Jigsaw puzzles are visual reconstruction challenges that engage dual-hemisphere cognitive processing. Invented in 1760 by English cartographer John Spilsbury as an educational &ldquo;dissected map,&rdquo; modern digital tile puzzles require players to swap scrambled rectangular fragments into coherent spatial order. Solving speed depends on rapid edge classification, chromatic clustering, and mental image synthesis.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Tile Swapping</div>
                <div className="text-xs text-muted-foreground">Drag &amp; Drop Mechanics</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Edge Sorting</div>
                <div className="text-xs text-muted-foreground">Boundary Anchor First</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Dual-Brain</div>
                <div className="text-xs text-muted-foreground">Logic + Spatial Vision</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">1760 Origin</div>
                <div className="text-xs text-muted-foreground">Historical Dissected Maps</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              The human brain reconstructs images through Gestalt laws of visual grouping: similarity (matching color swatches), continuity (aligning lines), and closure (perceiving the completed scene before all tiles are in position).
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve Jigsaw Puzzles Fast in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jigsawHowToSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{step.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Cognitive & Real-World Benefits ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Visual Working Memory &amp; Pattern Matching
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Holding a target pattern in working memory while scanning dozens of scrambled alternatives directly engages the occipito-parietal visual pathway, enhancing mental rotation and spatial reasoning.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Dopamine Reinforcement &amp; Intrinsic Motivation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every successfully placed tile triggers a minor release of dopamine in the brain&apos;s reward center, reinforcing patience, focus, and sustained problem-solving stamina.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Mindful Immersion &amp; Cortisol Reduction
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The methodical process of organizing tiles promotes deep meditative flow states. Clinical studies show 20 minutes of jigsaw assembly significantly reduces resting cortisol and physiological stress markers.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Cognitive Longevity &amp; Neuroprotection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Regular spatial puzzle solving maintains synaptic integrity and cognitive reserve across older adults, mitigating the onset of mild cognitive impairment and dementia symptoms.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Grid Sizes & Combinations ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Tile Grid Complexity &amp; State Permutations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Grid Configuration</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Total Tile Count</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Possible Permutations (N!)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Optimal Assembly Method</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Target Solving Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">3 × 3 Grid</td>
                    <td className="py-2.5 px-3 font-mono">9 Tiles</td>
                    <td className="py-2.5 px-3 font-mono">362,880</td>
                    <td className="py-2.5 px-3">Corner anchors + central landmark match</td>
                    <td className="py-2.5 px-3">&lt; 30 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">4 × 4 Grid</td>
                    <td className="py-2.5 px-3 font-mono">16 Tiles</td>
                    <td className="py-2.5 px-3 font-mono">2.09 × 10¹³</td>
                    <td className="py-2.5 px-3">Full perimeter frame, then interior quadrant split</td>
                    <td className="py-2.5 px-3">1 – 2 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">5 × 5 Grid</td>
                    <td className="py-2.5 px-3 font-mono">25 Tiles</td>
                    <td className="py-2.5 px-3 font-mono">1.55 × 10²⁵</td>
                    <td className="py-2.5 px-3">Color cluster partitioning + seam tracking</td>
                    <td className="py-2.5 px-3">3 – 5 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Performance Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Jigsaw Assembly Performance Tiers (Standard 4x4 Grid)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Benchmark your tile reconstruction speed on standard scrambled configurations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">&gt; 3.0 Minutes</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Puzzler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Swaps tiles randomly. Struggles to identify subtle edge borders and frequently mismatches textured gradient tiles.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">1.5 – 3.0 Minutes</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Assembler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Systematic perimeter construction. Easily recognizes prominent landmarks and finishes interior areas with few errant swaps.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">45 – 89 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Speed Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rapid visual cross-referencing. Connects color clusters seamlessly and swaps multiple tiles in continuous fluid strokes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">&lt; 45 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% competitive assembly speed. Instant photographic memory of the complete image, zero misplacements, and lightning execution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 6: Actionable Improvement Tips ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              4 Proven Tips to Speed Up Image Reconstruction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Lock the 4 Corners First
                </div>
                <p className="text-xs leading-relaxed">
                  Corner tiles have two distinct flat edges. Placing all four corners first establishes the absolute perimeter boundary of the entire canvas.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Follow High-Contrast Horizon Lines
                </div>
                <p className="text-xs leading-relaxed">
                  Trace continuous linear elements like horizon boundaries, building roofs, or roads across adjacent tiles to link entire rows quickly.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Leave Monochromatic Sky for Last
                </div>
                <p className="text-xs leading-relaxed">
                  Tiles with solid blue sky or dark shadows have few distinguishing features. Assemble high-detail focal areas first so sky tiles simply fall into remaining slots.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Watch Edge Pixel Continuities
                </div>
                <p className="text-xs leading-relaxed">
                  Look closely at the 2-pixel margin along each tile edge. Even tiny brush marks or subtle color temperature shifts reveal exact neighbor alignments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 7: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Jigsaw Puzzle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {jigsawFaqs.map((faq, index) => (
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

        {/* ── Section 8: Related Cognitive & Spatial Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Spatial &amp; Visual Logic Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your spatial assembly, tile manipulation, and memory across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/sliding-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sliding Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Permutation parity &amp; 15-puzzle →</span>
              </Link>
              <Link href="/block-builder" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Block Builder</span>
                <span className="text-xs text-muted-foreground mt-1">Pixel art maker &amp; sprite studio →</span>
              </Link>
              <Link href="/visual-memory-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Visual Memory</span>
                <span className="text-xs text-muted-foreground mt-1">Spatial grid pattern recall test →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
