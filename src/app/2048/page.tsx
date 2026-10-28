import { GameSEO } from "@/components/game-seo";
import { Game2048 } from "@/components/games/2048";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Grid3X3, Trophy, Activity, Compass, CheckCircle2,
  HelpCircle, ArrowRight, TrendingUp, Sparkles, Award,
  ShieldCheck, LayoutGrid, Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 – Play Classic Number Merge Puzzle Online & Strategy Guide | CpsSpeedTest",
  description:
    "Play the classic 2048 sliding number puzzle online. Master the corner anchor strategy, understand 2 vs 4 spawn probabilities, maintain monotonicity, and reach the 2048 tile.",
  keywords: [
    "2048 game",
    "2048 online",
    "play 2048",
    "2048 strategy",
    "number merge puzzle",
    "2048 corner trick",
    "gabriele cirulli 2048",
    "how to beat 2048",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/2048" },
  openGraph: {
    title: "2048 – Classic Number Merge Sliding Tile Puzzle",
    description: "Slide and merge numbers to reach the legendary 2048 tile. Learn the corner anchor strategy and master spawn probabilities.",
    url: "https://www.cpsspeedtest.com/2048",
    type: "website",
  },
};

const steps2048 = [
  {
    name: "Survey the 4x4 grid and pick an anchor corner",
    text: "At the beginning, pick one permanent corner (e.g., bottom-right). Your highest tile should live in this corner for the entire game.",
  },
  {
    name: "Slide tiles using Arrow Keys, WASD, or swipe gestures",
    text: "Swiping moves all tiles across the grid simultaneously. When two tiles with identical numbers collide, they merge into one tile of double value.",
  },
  {
    name: "Restrict your inputs to 3 primary directions",
    text: "If your anchor is bottom-right, only swipe Down, Right, and Left. NEVER swipe Up unless forced with zero other legal moves.",
  },
  {
    name: "Build monotonic snake rows along the bottom wall",
    text: "Keep your highest numbers lined up in descending numerical order along the anchor edge (e.g., 512, 256, 128, 64).",
  },
  {
    name: "Account for 90% '2' and 10% '4' spawn probabilities",
    text: "A new tile spawns in a random empty cell after every valid slide. Expect a '2' on 9 out of 10 moves and prepare for sudden '4' spawns.",
  },
  {
    name: "Merge pairs into the anchor to unlock the 2048 tile",
    text: "Trigger cascading chain reactions that fold numbers into your anchor corner, culminating in the golden 2048 victory tile.",
  },
];

const faqs2048 = [
  {
    question: "What is the single most effective strategy to reach the 2048 tile?",
    answer:
      "The 'Corner Anchor' strategy: choose one specific corner (typically bottom-right or bottom-left) and permanently anchor your highest-value tile there. Restrict your inputs to only three directions (e.g., Down, Right, and Left) while strictly avoiding the opposite direction (Up). This prevents your high-value tiles from getting trapped in the center surrounded by low numbers.",
  },
  {
    question: "What are the exact spawn probabilities for new tiles in 2048?",
    answer:
      "Every time a move shifts at least one tile, the game engine randomly selects an empty cell and spawns a new tile. It assigns a 90% mathematical probability of spawning a '2' and a 10% probability of spawning a '4'. Factoring in this 10% '4' probability prevents unexpected mergers from blocking your descending rows.",
  },
  {
    question: "What is the theoretical maximum tile achievable in 2048?",
    answer:
      "On a standard 4x4 grid (16 cells), the absolute theoretical ceiling is the 131,072 tile (2^17). Achieving this requires filling all 16 tiles in perfect descending order without a single misplacement, resulting in a theoretical maximum game score of 3,932,156 points.",
  },
  {
    question: "Who created the 2048 game and when was it released?",
    answer:
      "2048 was created over a single weekend in March 2014 by 19-year-old Italian web developer Gabriele Cirulli as an open-source clone of '1024' (by Veewo Studio) and 'Threes!' (by Asher Vollmer). Within two weeks, it attracted over 4 million unique players and became a viral global gaming phenomenon.",
  },
  {
    question: "What does 'monotonicity' mean in 2048 strategy?",
    answer:
      "Monotonicity means organizing your tiles so that their values strictly increase or decrease along rows and columns (e.g., 512 &gt; 256 &gt; 128 &gt; 64). When rows are monotonic, merging one pair automatically triggers a smooth domino cascade that collapses the entire row into your anchor corner.",
  },
  {
    question: "Can you keep playing after reaching the 2048 tile?",
    answer:
      "Yes! While reaching 2048 triggers the victory banner, you can click 'Keep Going' to continue merging toward 4096, 8192, 16384, and beyond until no legal moves remain on the board.",
  },
  {
    question: "What cognitive skills does playing 2048 strengthen?",
    answer:
      "2048 exercises working memory, spatial orientation, inductive logical reasoning, and forward tree pruning (mentally evaluating 2 to 4 moves into the future, similar to chess endgame calculations).",
  },
];

export default function Page2048() {
  return (
    <>
      <GameSEO
        name="2048 – Classic Number Merge Puzzle"
        description="Play the classic 2048 sliding number puzzle online. Master the corner anchor strategy, understand spawn probabilities, maintain monotonicity, and reach the 2048 tile."
        url="https://www.cpsspeedtest.com/2048"
        faqs={faqs2048}
        howToSteps={steps2048}
        category="PuzzleGame"
        lastUpdated="October 2026"
        benefits="Exercise inductive logical reasoning, master game-theory corner anchor strategies, practice forward decision-tree pruning, and strengthen spatial pattern awareness."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Gabriele Cirulli (2014) Sliding Number Puzzle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            2048 Puzzle Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Slide and merge identical numbers across the 4x4 grid. Lock your anchor corner, maintain monotonic chains, and conquer the legendary 2048 tile.
          </p>
        </header>

        {/* Interactive 2048 Game Component */}
        <Game2048 />

        {/* Section 1: What is 2048? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the 2048 Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>2048</strong> is a viral single-player sliding block puzzle game engineered on a 4x4 grid. When two numbered tiles bearing the same value collide during a directional slide, they merge into a single tile displaying their sum. The objective is to apply strategic spatial organization to merge numbers sequentially from 2 up to the ultimate <strong>2048 tile</strong> without exhausting empty grid cells.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Grid Layout</span>
                <span className="text-lg font-black text-primary">4 x 4 (16 Cells)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Sliding block puzzle</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Spawn Probabilities</span>
                <span className="text-lg font-black text-amber-500">90% [2] / 10% [4]</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Random empty cell spawn</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Theoretical Ceiling</span>
                <span className="text-lg font-black text-emerald-500">131,072 Tile</span>
                <span className="text-xs text-muted-foreground block mt-0.5">3,932,156 max score</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Play and Win 2048
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {steps2048.map((step, index) => (
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

        {/* Section 3: Why Play 2048? Cognitive Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive Benefits of Playing 2048
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Compass className="w-4 h-4" />
                  Forward Decision-Tree Pruning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Like grandmasters calculating chess endgames, advanced 2048 players simulate future tile placements 3 to 5 moves in advance. This exercises the brain&apos;s ability to evaluate probabilistic branching choices under uncertainty.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <LayoutGrid className="w-4 h-4" />
                  Monotonic Spatial Organization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Maintaining descending number chains across a 2D matrix trains inductive spatial organization. It exercises the brain&apos;s ability to establish structured hierarchical order out of chaotic, randomized inputs.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Impulse Inhibition (Avoiding Up Swipes)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The hardest skill in 2048 is resisting the urge to make an enticing quick merge that violates your anchor strategy. This directly trains prefrontal inhibitory control and discipline over immediate gratification.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  Mental Math &amp; Powers of Two
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Repeatedly working with binary multiples (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048) builds instinctive fluency with exponential scaling, computer byte storage hierarchies, and mental arithmetic.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Corner Strategy & Monotonic Chains */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            The Corner Anchor Strategy &amp; Monotonic Chains
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Strategy Phase</th>
                  <th className="p-3">Permitted Swipes</th>
                  <th className="p-3">Forbidden Swipe</th>
                  <th className="p-3">Tactical Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Bottom-Right Anchor</td>
                  <td className="p-3 text-emerald-400 font-semibold">Down, Right, Left</td>
                  <td className="p-3 text-rose-400 font-bold">UP (Never swipe up)</td>
                  <td className="p-3">Locks max tile into row 4 col 4; fills bottom row as a solid barrier</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Bottom Row Packing</td>
                  <td className="p-3 text-primary font-semibold">Keep Row 4 Full (4 tiles)</td>
                  <td className="p-3 text-amber-400">Swiping left when row 4 has empty slot</td>
                  <td className="p-3">Prevents highest tile from shifting left and getting dislodged</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Snake Chain Formation</td>
                  <td className="p-3 text-cyan-400 font-semibold">Row 4 right-to-left, Row 3 left-to-right</td>
                  <td className="p-3 text-rose-400">Scattering high tiles on top rows</td>
                  <td className="p-3">Creates an S-shaped numerical pipeline that cascades cleanly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            2048 Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Novice Slider</div>
              <div className="text-2xl font-black text-foreground">128 – 256 Tile</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Random swiping in all 4 directions. Board fills with small numbers and locks up due to lack of empty space.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Intermediate Player</div>
              <div className="text-2xl font-black text-primary">512 – 1024 Tile</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Understands corner anchoring but occasionally makes panic up-swipes, dislodging the high tile in the endgame.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">2048 Victor</div>
              <div className="text-2xl font-black text-amber-500">2048 Tile (~20k Pts)</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Strict adherence to 3-direction discipline and monotonic chains. Achieves the primary game victory consistently.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Master Mathematician</div>
              <div className="text-2xl font-black text-rose-500">4096 – 8192+ Tile</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite tier. Deep forward decision-tree pruning, snake chain management, and recovery from bad 4-spawns.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Top Tips to Beat 2048
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Keep Your Anchor Row 100% Full</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If your anchor is bottom-right, keep all 4 tiles in the bottom row occupied at all times. If row 4 has an empty slot and you swipe left, your high tile will slide out of the corner.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Plan Merges in Descending Order</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Always merge small numbers to build intermediate tiles before trying to touch your anchor. Let numbers flow into the anchor rather than pulling the anchor toward small numbers.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Recovering from a Forced Up-Swipe</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If no legal left/right/down moves exist and you are forced to swipe up, immediately swipe back down on the very next turn to restore your anchor tile to the bottom edge.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Don&apos;t Rush (No Speed Bonus)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    2048 is not a reaction test. Take 5 to 10 seconds before making critical late-game moves to examine how the resulting empty cell will affect your monotonic chain.
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
            {faqs2048.map((faq, index) => (
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

        {/* Cross-linking Related Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Logic &amp; Strategy Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/cupcake-2048"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Cupcake 2048</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/snake"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Classic Snake</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/minesweeper"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Minesweeper</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/sliding-puzzle"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Sliding Puzzle</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
