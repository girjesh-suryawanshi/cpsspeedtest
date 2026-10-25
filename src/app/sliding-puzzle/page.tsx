import { GameSEO } from "@/components/game-seo";
import { SlidingPuzzle } from "@/components/sliding-puzzle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Move, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sliding Puzzle – Classic 15-Puzzle, Permutation Parity & Strategy Guide | CpsSpeedTest',
  description: 'Play the classic 15 Sliding Puzzle online. Slide numbered tiles to restore sequential 1–15 order. Master row-by-row algorithms, permutation parity math, and corner positioning.',
  keywords: ['sliding puzzle', '15 puzzle', 'gem puzzle', 'boss puzzle', 'sliding tile puzzle', 'sliding block puzzle', 'permutation parity 15 puzzle'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/sliding-puzzle',
  },
  openGraph: {
    title: 'Sliding Puzzle – Classic 15-Puzzle & Algorithmic Strategy',
    description: 'Slide numbered tiles into numerical order on the classic 4x4 grid. Learn the row-by-row algorithm and test your minimal-move efficiency.',
    url: 'https://www.cpsspeedtest.com/sliding-puzzle',
    type: 'website',
  },
};

const slidingPuzzleFaqs = [
  {
    question: "What are the rules and objective of the classic 15 Sliding Puzzle?",
    answer: "The puzzle features a 4x4 frame containing 15 numbered square tiles (1 through 15) and one empty space. You can slide any tile horizontally or vertically adjacent to the empty spot into that space. The goal is to arrange the tiles into ascending order from 1 to 15, reading left-to-right, top-to-bottom, leaving the empty space in the bottom-right corner."
  },
  {
    question: "What is the mathematical 'Inversion Parity' theorem of the 15-Puzzle?",
    answer: "Proven by mathematicians William Woolsey Johnson and William E. Story in 1879, exactly 50% of all random 15-puzzle permutations are mathematically impossible to solve. A configuration is solvable if and only if the parity (even/odd) of tile inversions matches the row distance of the empty blank square. Our engine guarantees that every shuffled board is 100% solvable."
  },
  {
    question: "What is the standard step-by-step method to solve a sliding puzzle?",
    answer: "The universal technique is the row-by-row method: 1) Solve Row 1 in order (1, 2, 3, 4). 2) Solve Row 2 in order (5, 6, 7, 8). 3) For the remaining bottom two rows, solve the columns from left to right (placing 9 and 13, then 10 and 14). 4) Cycle the remaining four tiles (11, 12, 15, and blank) into their final slots."
  },
  {
    question: "How do you place the last two tiles in a row (e.g., 3 and 4)?",
    answer: "Trying to slide the last tile directly into place blocks previous tiles. Instead, place tile 4 where tile 3 belongs, place tile 3 directly beneath it, and then cycle them together as a 2-tile train into the corner."
  },
  {
    question: "Who invented the 15-Puzzle?",
    answer: "The puzzle was invented around 1874 by Noyes Palmer Chapman, a postmaster in Canastota, New York. It became an international craze in 1880 after being popularized by puzzle promoter Sam Loyd."
  }
];

export default function SlidingPuzzlePage() {
  return (
    <>
      <GameSEO 
        name="Sliding Puzzle"
        description="Slide the numbered tiles into numerical order on the classic 4x4 grid. Test your logic, planning, and minimal-move efficiency."
        url="https://www.cpsspeedtest.com/sliding-puzzle"
        faqs={slidingPuzzleFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Move className="w-3.5 h-3.5" />
            <span>Permutation Group Theory &amp; Spatial Algorithms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Sliding Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The legendary 15-Puzzle. Slide tiles sequentially into the single empty space to arrange numbers 1 through 15 in ascending numerical order in minimal moves.
          </p>
        </header>

        {/* Sliding Puzzle Interactive Component */}
        <div className="py-2">
          <SlidingPuzzle />
        </div>

        {/* ── Section 1: The Mathematics of Inversion Parity (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematics of the 15-Puzzle: Permutation Parity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In abstract algebra and group theory, the 15-Puzzle represents an alternating group $A_{15}$ acting on the tile positions. In 1879, mathematicians Johnson and Story published the famous <strong>Inversion Parity Theorem</strong> in the <em>American Journal of Mathematics</em>:
            </p>
            <p>
              An <em>inversion</em> occurs whenever a higher-numbered tile precedes a lower-numbered tile in the linear read order. Every horizontal tile slide changes the order of adjacent tiles without changing overall parity. A vertical slide moves a tile across three other tiles, changing the number of inversions by an odd amount ($\pm 1$ or $\pm 3$) while shifting the blank row by $\pm 1$.
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              Solvability Criterion: Inversions + Row(Blank) ≡ Target Parity (mod 2)
            </div>
            <p className="text-xs">
              Because exactly half of all $16! \approx 2.09 \times 10^{13}$ configurations have mismatched parity, random physical assembly produces an impossible puzzle 50% of the time. Our digital engine rigorously checks parity to guarantee 100% mathematical solvability.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Move Efficiency ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Sliding Puzzle Performance Tiers (Solving Speed &amp; Moves)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly and efficiently can you solve a shuffled 15-puzzle? Compare your results:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">3+ Minutes</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Trial &amp; Error</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Over 250 moves. The solver accidentally dislodges previously completed rows while attempting to insert bottom-row tiles.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">90 – 179 Seconds</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  120–200 moves. Clear understanding of the row-by-row method. Solves rows 1 and 2 easily with minor hesitation on the final four tiles.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">45 – 89 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Speedcuber</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  75–110 moves. Fluid rotational cycles. Uses lookahead to position corner pairs without stopping the slide momentum.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 45 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster 15-Puzzle</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% international speed solving. Sub-70 moves near God&apos;s Number (80 moves maximum from any state) with rapid touch sliding.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: The Row-by-Row Algorithm ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                The Universal Row-by-Row Algorithm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Row 1:</strong> Place tiles 1 and 2. Move tile 4 into position 3, place tile 3 beneath it, and rotate them together into slots 3 and 4.
                </li>
                <li>
                  <strong className="text-foreground">Row 2:</strong> Repeat the exact same corner-train technique for tiles 5, 6, 7, and 8.
                </li>
                <li>
                  <strong className="text-foreground">Column 1 (Left):</strong> Pair tiles 9 and 13 into a vertical train and slide them into the left column.
                </li>
                <li>
                  <strong className="text-foreground">Final Cycle:</strong> Rotate the remaining tiles (10, 11, 12, 14, 15) around the remaining open loop until all fall into position.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Algorithmic &amp; Logic Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Continue training spatial permutations and recursive mathematical reasoning:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/tower-of-hanoi" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Tower of Hanoi</span>
                  <span className="text-primary font-mono">Recursive Move Optimization →</span>
                </Link>
                <Link href="/2048" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">2048</span>
                  <span className="text-primary font-mono">Monotonic Sliding Grid →</span>
                </Link>
                <Link href="/jigsaw-puzzle" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Jigsaw Puzzle</span>
                  <span className="text-primary font-mono">Image Tile Reconstruction →</span>
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
              Frequently Asked Questions About the 15-Puzzle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {slidingPuzzleFaqs.map((faq, index) => (
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
