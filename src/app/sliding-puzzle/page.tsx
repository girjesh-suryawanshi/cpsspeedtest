import { GameSEO } from "@/components/game-seo";
import { SlidingPuzzle } from "@/components/sliding-puzzle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Move, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sliding Puzzle – Classic 15-Puzzle, Permutation Parity & Strategy Guide | CpsSpeedTest',
  description: 'Play the classic 15 Sliding Puzzle online. Slide numbered tiles to restore sequential 1–15 order. Master row-by-row algorithms, permutation parity math, and corner positioning.',
  keywords: ['sliding puzzle', '15 puzzle', 'gem puzzle', 'boss puzzle', 'sliding tile puzzle', 'sliding block puzzle', 'permutation parity 15 puzzle', 'how to solve 15 puzzle'],
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

const slidingPuzzleHowToSteps = [
  {
    name: "Understand Grid Layout & Empty Space",
    text: "The board consists of a 4x4 grid with 15 numbered square tiles (1 to 15) and one empty blank space. Tiles slide orthogonally into the open slot."
  },
  {
    name: "Solve the First Row in Order (1, 2, 3, 4)",
    text: "Slide tiles 1, 2, and 3 into their final top slots. To place tile 4, position it in the top-right corner with 3 beneath it and cycle them into place."
  },
  {
    name: "Complete the Second Row (5, 6, 7, 8)",
    text: "Follow the identical technique for row two: position 5, 6, and 7 sequentially, then train-cycle tile 8 into the rightmost slot."
  },
  {
    name: "Solve the Bottom-Left Columns (9 and 13)",
    text: "Work vertically for the bottom two rows. Place tile 9 in the bottom-left slot, position tile 13 directly beside it, and rotate them into position."
  },
  {
    name: "Align the Next Column Pair (10 and 14)",
    text: "Position tile 10 in the third column and tile 14 beneath it, rotating them cleanly into place without disturbing solved rows."
  },
  {
    name: "Cycle the Final 2x2 Sub-Grid (11, 12, 15)",
    text: "Rotate the remaining three tiles around the empty slot until 11, 12, and 15 lock into their ascending home coordinates."
  }
];

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
    question: "Who invented the 15-Puzzle and what is its history?",
    answer: "The puzzle was invented around 1874 by Noyes Palmer Chapman, a postmaster in Canastota, New York. It became an international craze in 1880 after being popularized by puzzle promoter Sam Loyd, who famously offered a $1,000 prize to solve an intentionally impossible 14-15 inverted configuration."
  },
  {
    question: "What is the theoretical maximum number of moves needed to solve any 15-puzzle?",
    answer: "In 2005, computer scientists proved that the diameter of the 15-puzzle state space is 80 moves. Any solvable 15-puzzle board can be solved in 80 moves or fewer from any legal starting permutation."
  },
  {
    question: "How does solving sliding puzzles build algorithmic planning skills?",
    answer: "Sliding puzzles require sequential dependency planning. Because moving a piece into position often temporarily displaces previously aligned tiles, players develop spatial lookahead, state preservation, and working memory manipulation."
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
        howToSteps={slidingPuzzleHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Move className="w-3.5 h-3.5" />
            <span>Permutation Parity &amp; Row Algorithms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            15 Sliding Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The classic 15-puzzle invented by Noyes Chapman in 1874. Slide numbered tiles to restore sequential 1–15 order using algorithmic row-by-row techniques.
          </p>
        </header>

        {/* Interactive Sliding Puzzle Component */}
        <div className="py-2">
          <SlidingPuzzle />
        </div>

        {/* ── Section 1: Mathematics of Permutation Parity (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematics of Permutation Inversion Parity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              The 15-Puzzle is a classical permutation puzzle consisting of a 4×4 frame with 15 numbered square tiles and one blank space. Proven by mathematicians Johnson and Story in 1879, exactly half (50%) of all randomly placed initial permutations are mathematically unsolvable. A state is solvable if and only if the parity of its permutation inversions matches the row distance of the empty blank square. Every puzzle on this platform is guaranteed 100% solvable.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">15 Tiles</div>
                <div className="text-xs text-muted-foreground">4x4 Matrix Frame</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">10.4 Trillion</div>
                <div className="text-xs text-muted-foreground">Solvable States (16! / 2)</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">80 Moves</div>
                <div className="text-xs text-muted-foreground">God&apos;s Number Diameter</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Row-by-Row</div>
                <div className="text-xs text-muted-foreground">Standard Solving Algorithm</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because moving a single tile merely permutes elements within an alternating symmetric group, solving the puzzle requires systematic invariant preservation rather than random moves.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve the 15-Puzzle Algorithmically in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slidingPuzzleHowToSteps.map((step, idx) => (
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
                Sequential Lookahead &amp; Working Memory
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Moving tile 4 into place requires planning a 5-step detour that temporarily disrupts other tiles. This prospective memory planning strengthens the prefrontal cortex and suppresses short-sighted moves.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Algorithmic Decomposition &amp; Invariants
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The row-by-row method teaches players to lock completed sub-problems permanently (invariants) and solve remaining sections within reduced coordinate frames, mirroring recursive computer science algorithms.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Spatial Orientation &amp; Mental Rotation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Navigating empty space through dense tile clusters exercises the parietal lobe, developing acute 2D spatial awareness and pathfinding reflexes.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Inhibition Control &amp; Patience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Random sliding without strategy results in endless circular loops. The puzzle instills disciplined problem-solving restraint and systematic execution.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Algorithm Stages ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Row-by-Row Algorithm Breakdown &amp; Sub-Goal Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Stage</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Target Tiles</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Key Technical Manoeuvre</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Remaining State Space</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Stage 1: Top Row</td>
                    <td className="py-2.5 px-3 font-mono">1, 2, 3, 4</td>
                    <td className="py-2.5 px-3">Direct placement of 1,2,3; 2-tile train cycle for 3 and 4</td>
                    <td className="py-2.5 px-3">Reduces board from 4x4 to 3x4</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Stage 2: Second Row</td>
                    <td className="py-2.5 px-3 font-mono">5, 6, 7, 8</td>
                    <td className="py-2.5 px-3">Identical train cycle for tiles 7 and 8</td>
                    <td className="py-2.5 px-3">Reduces board from 3x4 to 2x4</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Stage 3: Left Columns</td>
                    <td className="py-2.5 px-3 font-mono">9, 13, 10, 14</td>
                    <td className="py-2.5 px-3">Vertical pairing: rotate 9 and 13 into column 1</td>
                    <td className="py-2.5 px-3">Reduces board to final 2x2 corner</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Stage 4: Final 2x2</td>
                    <td className="py-2.5 px-3 font-mono">11, 12, 15</td>
                    <td className="py-2.5 px-3">Simple circular cycle around the remaining blank slot</td>
                    <td className="py-2.5 px-3">100% Puzzle Solved</td>
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
              15-Puzzle Move Efficiency &amp; Speed Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating solving efficiency and speed on standard scrambled configurations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">200+ Moves / &gt; 3 Min</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Trial &amp; Error</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Accidentally dismantles completed rows. Struggles with the last two tiles in a row and slides without clear sub-goals.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">120 – 199 Moves / 1–3 Min</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Algorithmic Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understands row-by-row mechanics. Smoothly executes the corner train cycle and reaches the final 2x2 without frustration.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">70 – 119 Moves / 30–60 Sec</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Speedcuber Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fluid, rapid finger slides. Pairs tiles in transit and solves columns with minimal circular displacement moves.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">&lt; 70 Moves / &lt; 30 Sec</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Near God&apos;s Number efficiency. Sub-second state evaluation, phenomenal hand speed, and flawless algorithmic execution.
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
              4 Proven Tips to Master Sliding Tile Puzzles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Never Place the Last Row Tile Directly
                </div>
                <p className="text-xs leading-relaxed">
                  Placing tile 3 and trying to push tile 4 in blocks the path. Place 4 in slot #3, place 3 beneath it in slot #7, then rotate them together clockwise.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Lock Completed Rows Inviolably
                </div>
                <p className="text-xs leading-relaxed">
                  Once Row 1 is solved (1, 2, 3, 4), pretend it no longer exists. Never move those tiles again; solve the rest of the puzzle in the remaining 3x4 grid.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Work Vertically for Bottom Rows
                </div>
                <p className="text-xs leading-relaxed">
                  For the final two rows, solving horizontally is extremely difficult. Instead, solve vertically: pair 9 and 13 as a column, then 10 and 14.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Guide the Empty Space Rather Than the Tiles
                </div>
                <p className="text-xs leading-relaxed">
                  Advanced solvers think about steering the empty hole around the board to pull desired tiles toward their targets, minimizing wasted maneuvers.
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
              Frequently Asked Questions About Sliding Puzzle
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

        {/* ── Section 8: Related Cognitive & Logic Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Logic &amp; Spatial Puzzles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue challenging your spatial reasoning, recursive logic, and working memory across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/tower-of-hanoi" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Tower of Hanoi</span>
                <span className="text-xs text-muted-foreground mt-1">Recursive minimal-move puzzle →</span>
              </Link>
              <Link href="/jigsaw-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Jigsaw Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Tile swap image reconstruction →</span>
              </Link>
              <Link href="/2048" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">2048</span>
                <span className="text-xs text-muted-foreground mt-1">Number merge &amp; corner anchor strategy →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
