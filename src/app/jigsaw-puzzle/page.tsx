import { GameSEO } from "@/components/game-seo";
import { JigsawPuzzle } from "@/components/jigsaw-puzzle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Puzzle, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Jigsaw Puzzle – Visual Tile Reconstruction & Spatial Assembly | CpsSpeedTest',
  description: 'Play our free Jigsaw Puzzle online. Unscramble image tiles using drag-and-drop mechanics, edge piece sorting, and color gradient alignment. Test visual assembly speed.',
  keywords: ['jigsaw puzzle', 'play jigsaw puzzle online', 'tile swap puzzle', 'image puzzle game', 'spatial assembly game', 'visual problem solving', 'free online jigsaw'],
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
    question: "Who invented the original jigsaw puzzle?",
    answer: "The jigsaw puzzle was invented around 1760 by English mapmaker and cartographer John Spilsbury. He mounted a map of the world onto a sheet of hardwood and cut around national borders with a marquetry saw, creating an educational geography tool called a 'dissected map'."
  },
  {
    question: "What cognitive benefits come from solving digital jigsaw puzzles?",
    answer: "Jigsaw puzzles exercise dual-hemisphere brain function: the left brain analyzes pieces logically and sequentially, while the right brain visualizes holistic form, color gradients, and spatial orientation. It improves visual working memory and lowers stress by promoting flow state immersion."
  },
  {
    question: "Can I play this Jigsaw Puzzle on mobile phones and touchscreens?",
    answer: "Yes, the puzzle supports touch drag-and-drop gestures across smartphones, tablets, and desktop mice, providing responsive visual feedback during tile swaps."
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
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Visuospatial Tile Reconstruction &amp; Assembly</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Jigsaw Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Drag, swap, and reconstruct scrambled tiles to reassemble the complete visual artwork. Benchmark your spatial assembly speed and chromatic pattern matching.
          </p>
        </header>

        {/* Jigsaw Puzzle Interactive Game */}
        <div className="py-2">
          <JigsawPuzzle />
        </div>

        {/* ── Section 1: The Cognitive Science of Visual Assembly (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Cognitive Science of Visual Assembly &amp; Feature Binding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Reconstructing a scrambled image requires your visual cortex to perform continuous <strong>feature binding</strong>. The ventral visual stream (the &quot;what&quot; pathway) analyzes color frequencies, edge orientations, and texture patterns on individual tiles, while the dorsal visual stream (the &quot;where&quot; pathway) computes spatial relationships relative to the entire canvas frame.
            </p>
            <p>
              When two matching edges align, your brain experiences a miniature &quot;Aha!&quot; moment, releasing small bursts of dopamine that reinforce spatial problem-solving pathways and sustain immersive flow.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Assembly Speed ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Assembly Speed Tiers (Standard Tile Grid)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly can you unscramble the full visual scene? Compare your solving times against community puzzle ranks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">2+ Minutes</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Puzzler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Trial-and-error tile swaps. Swaps pieces without first categorizing by color family or border frame alignment.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">60 – 119 Seconds</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid feature matching. Swiftly assembles prominent central objects, then methodically solves surrounding background areas.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">35 – 59 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Visual Assembler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High spatial awareness. Reconstructs border framing in under 15 seconds, followed by rapid gradient-based tile placements.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 30 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Speed Puzzler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% assembly speed. Near-instant visual recognition of target coordinates with fluid mouse drag-and-drop swaps.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Solving Tactics & Gradient Grouping ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Strategic Assembly Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Edge Sorting:</strong> Inspect tiles for straight linear edges that form the top, bottom, and side boundaries of the puzzle frame.
                </li>
                <li>
                  <strong className="text-foreground">Chromatic Clustering:</strong> Group tiles sharing distinct color palettes (such as high-saturation reds or continuous gradient blues) together in your mind.
                </li>
                <li>
                  <strong className="text-foreground">Focal Landmarks:</strong> Reconstruct high-contrast focal points (like human faces, eyes, text logos, or buildings) before tackling subtle textures like grass or water.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Spatial &amp; Logic Puzzles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Continue sharpening your visual processing and spatial reasoning across our puzzle games:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/sliding-puzzle" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sliding Puzzle</span>
                  <span className="text-primary font-mono">15-Tile Numerical Slide →</span>
                </Link>
                <Link href="/connect-the-dots" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Connect the Dots</span>
                  <span className="text-primary font-mono">Visual Pathfinding →</span>
                </Link>
                <Link href="/visual-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Visual Memory Test</span>
                  <span className="text-primary font-mono">Grid Pattern Recall →</span>
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
              Frequently Asked Questions About Jigsaw Puzzles
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
      </div>
    </>
  );
}
