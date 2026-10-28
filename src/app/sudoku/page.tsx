import { GameSEO } from "@/components/game-seo";
import { Sudoku } from "@/components/games/sudoku";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Grid, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Play Sudoku Free Online – Deductive Logic & Number Grid Puzzle | CpsSpeedTest",
  description: "Play free online Sudoku with multiple difficulty tiers. Master naked singles, hidden pairs, and advanced grid elimination techniques with real-time validation.",
  keywords: ["sudoku", "online sudoku", "logic puzzle", "number puzzle", "brain training", "deductive reasoning", "free sudoku game", "nikoli puzzle", "sudoku solver strategies"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/sudoku',
  },
  openGraph: {
    title: "Play Sudoku Free Online – Deductive Logic Puzzle",
    description: "Benchmark your logical deduction and pattern recognition on our clean, interactive 9x9 Sudoku grid with instant validation.",
    url: 'https://www.cpsspeedtest.com/sudoku',
    type: 'website',
  },
};

const sudokuHowToSteps = [
  {
    name: "Understand the 9x9 Grid Constraints",
    text: "The standard board comprises 81 squares partitioned into nine 3x3 blocks. Digits 1 through 9 must appear exactly once in each row, column, and 3x3 box without duplication."
  },
  {
    name: "Inspect Given Clues and Initial Digits",
    text: "Examine the pre-populated clues. High-clue boards are easier; identify which digits (1–9) appear most frequently to begin cross-referencing immediately."
  },
  {
    name: "Perform Visual Crosshatching (Scanning)",
    text: "Trace horizontal rows and vertical columns containing a selected digit into a target 3x3 block. Cross out blocked cells to pinpoint the solitary available square."
  },
  {
    name: "Identify Naked and Hidden Singles",
    text: "Spot cells where all digits except one are ruled out by peer cells (Naked Single), or digits that can only legally occupy one specific position in a row or box (Hidden Single)."
  },
  {
    name: "Deploy Candidate Pencil Marking",
    text: "For intermediate and hard puzzles, mentally or digitally mark potential candidates. Look for locked candidates, pointing pairs, and naked pairs ([3,7] in two cells)."
  },
  {
    name: "Complete the Board Deterministically",
    text: "Never guess. Every valid Sudoku puzzle possesses a deterministic logical pathway. Continue cascading deductions until all 81 cells are validated."
  }
];

const sudokuFaqs = [
  {
    question: "What are the fundamental rules of classic 9x9 Sudoku?",
    answer: "A standard Sudoku board consists of 81 cells organized into nine 3x3 blocks. The objective is to fill every cell with a digit from 1 to 9 such that each number appears exactly once in every horizontal row, every vertical column, and every 3x3 subgrid without repetition."
  },
  {
    question: "Does solving Sudoku require mathematical or arithmetic ability?",
    answer: "No. Although digits 1 through 9 are traditionally employed, Sudoku requires zero mathematical calculation or arithmetic operations. It is purely an exact cover constraint satisfaction problem based on relational logic and the process of elimination. The numbers could be replaced with letters, colors, or symbols without altering the solution."
  },
  {
    question: "What is the difference between a 'Naked Single' and a 'Hidden Single'?",
    answer: "A 'Naked Single' occurs when an individual cell has only one legal candidate remaining because all other 8 digits are already present in its intersecting row, column, or 3x3 block. A 'Hidden Single' occurs when a digit can only legally fit into one specific cell within a block or row, even though that cell may appear to have multiple candidate numbers."
  },
  {
    question: "What is the minimum number of clues required for a unique Sudoku puzzle?",
    answer: "In 2012, mathematician Gary McGuire proved via an exhaustive supercomputer search that no valid Sudoku puzzle can exist with fewer than 17 clues. Any board with 16 or fewer initial clues inevitably yields multiple non-unique solutions."
  },
  {
    question: "Who invented modern Sudoku and what is its history?",
    answer: "Modern Sudoku was invented in 1979 by 74-year-old American architect Howard Garns and published under the name 'Number Place' by Dell Magazines. It was introduced to Japan in 1984 by Maki Kaji (founder of puzzle company Nikoli), who renamed it 'Sudoku'—an abbreviation of 'Sūji wa dokushin ni kagiru' ('the numbers must be single')."
  },
  {
    question: "What is an 'X-Wing' and when should you use advanced techniques?",
    answer: "An X-Wing is an advanced elimination pattern where a specific candidate digit appears exactly twice in two parallel rows, and those candidates fall into the exact same two columns. This rectangular alignment proves the candidate must occupy one of two diagonal pairs, permitting you to eliminate that candidate from all other cells in both intersecting columns."
  },
  {
    question: "How does daily Sudoku practice impact cognitive longevity and brain health?",
    answer: "Regular deductive puzzle solving engages the prefrontal cortex, exercising working memory, relational reasoning, and pattern recognition. Studies in cognitive aging demonstrate that adults who frequently engage in number puzzles maintain higher problem-solving fluency and executive function."
  }
];

export default function SudokuPage() {
  return (
    <>
      <GameSEO 
        name="Play Sudoku Free Online"
        description="Play free online Sudoku with multiple difficulty tiers. Exercise your brain, improve logical reasoning, and solve challenging 9x9 number placement puzzles."
        url="https://www.cpsspeedtest.com/sudoku"
        faqs={sudokuFaqs}
        howToSteps={sudokuHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Constraint Satisfaction &amp; Deductive Logic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Sudoku Online
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The world&apos;s most beloved logic grid puzzle. Deduce cell positions across rows, columns, and 3x3 blocks using systematic elimination without guessing.
          </p>
        </header>

        {/* Sudoku Interactive Game */}
        <div className="py-2">
          <Sudoku />
        </div>

        {/* ── Section 1: Mathematics of Constraint Satisfaction (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Logic of Sudoku: Exact Cover &amp; Constraint Elimination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Sudoku is a combinatorial number-placement puzzle based on exact cover constraint satisfaction. In computational mathematics, solving an arbitrary N×N Sudoku grid is NP-complete. Every individual cell on the 9×9 board is simultaneously bound by three non-negotiable rules: each horizontal row, vertical column, and 3×3 subgrid must contain digits 1 through 9 exactly once.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">81 Cells</div>
                <div className="text-xs text-muted-foreground">9x9 Total Matrix</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">17 Minimum</div>
                <div className="text-xs text-muted-foreground">Clues for Unique Soln</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">20 Peers</div>
                <div className="text-xs text-muted-foreground">Intersecting Units/Cell</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">6.67 x 10²¹</div>
                <div className="text-xs text-muted-foreground">Total Valid Grids</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because every single cell shares direct unit constraints with exactly 20 peer cells (8 in its row, 8 in its column, and 4 remaining in its 3×3 box), each placed number eliminates potential candidates across nearly 25% of the entire grid. High-speed solving hinges on identifying these cascading chain reactions.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve Sudoku Systematically in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sudokuHowToSteps.map((step, idx) => (
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
                Working Memory &amp; Cognitive Reserve
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Sudoku requires maintaining multiple hypothetical candidate sets simultaneously. Holding possible digits across intersecting units without writing them down directly exercises the dorsolateral prefrontal cortex, enhancing short-term memory capacity and resisting age-related cognitive decline.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Deductive Logic &amp; Constraint Thinking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Unlike trial-and-error games, Sudoku strictly rewards deterministic reasoning. Players learn to identify &ldquo;if-then&rdquo; dependencies, eliminating false assumptions before committing to decisions—a mental framework highly applicable to software engineering, law, and financial auditing.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Sustained Focus &amp; Flow State Induction
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              With 81 cells demanding rigorous concentration, a single lapse in attention can corrupt the entire board. Sudoku naturally creates a deep state of cognitive immersion (flow), lowering cortisol levels and blocking out external digital distractions.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Pattern Recognition &amp; Visual Saccades
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mastering speed Sudoku trains the eyes to perform rapid horizontal and vertical visual saccades. The visual cortex learns to process 3×3 clusters as holistic shapes and candidate sets rather than scanning individual cells sequentially.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Sudoku Solving Techniques ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Sudoku Strategy Taxonomy &amp; Complexity Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Technique</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Complexity Tier</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Underlying Mechanism</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Impact on Solving Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Crosshatching</td>
                    <td className="py-2.5 px-3">Beginner</td>
                    <td className="py-2.5 px-3">Visual scanning of 1 number across rows/columns in a box</td>
                    <td className="py-2.5 px-3">Solves 60% of all easy-tier board cells</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Naked Single</td>
                    <td className="py-2.5 px-3">Beginner</td>
                    <td className="py-2.5 px-3">Only 1 legal candidate remaining in a cell across 20 peers</td>
                    <td className="py-2.5 px-3">Instant placement without candidate notes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Hidden Single</td>
                    <td className="py-2.5 px-3">Intermediate</td>
                    <td className="py-2.5 px-3">Digit has only 1 valid cell in a whole row, column, or block</td>
                    <td className="py-2.5 px-3">Crucial breakthrough technique on medium grids</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Naked &amp; Hidden Pairs</td>
                    <td className="py-2.5 px-3">Intermediate</td>
                    <td className="py-2.5 px-3">2 cells in a unit share identical 2 candidates, pruning others</td>
                    <td className="py-2.5 px-3">Removes 4 to 8 candidates across intersecting units</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Pointing Pairs / Triples</td>
                    <td className="py-2.5 px-3">Advanced</td>
                    <td className="py-2.5 px-3">Candidates confined to a single line in a box eliminate line peers</td>
                    <td className="py-2.5 px-3">Unlocks blocked rows across neighboring 3x3 boxes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">X-Wing &amp; Swordfish</td>
                    <td className="py-2.5 px-3">Master</td>
                    <td className="py-2.5 px-3">2 or 3 parallel rows share identical column candidate slots</td>
                    <td className="py-2.5 px-3">Resolves deadlocks in tournament-grade puzzles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Solving Time Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Sudoku Solving Speed Tiers (Standard 9x9 Intermediate Board)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly can your brain process interlocking grid constraints? Benchmark your intermediate solving times against competitive metrics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">15+ Minutes</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solves predominantly through naked singles. Relies heavily on pencil marks and experiences frequent hesitations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">8 – 14 Minutes</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Deductor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast candidate scanning. Rapidly identifies hidden singles and pointing pairs across rows and boxes without delay.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">4 – 7 Minutes</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Speed Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-speed visual crosshatching. Fluid recognition of naked pairs and box-line reductions without pencil markings.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 3 Minutes</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% competitive solving speed. Flawless pattern perception, instantaneous candidate pruning, and rapid keyboard entry.
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
              4 Proven Tips to Accelerate Sudoku Solving Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Cycle Numbers in Numerical Sequence (1 to 9)
                </div>
                <p className="text-xs leading-relaxed">
                  Avoid bouncing haphazardly around the board. Scan all 1s across the entire 9x9 grid, then all 2s, through to 9s. This systematic pass exposes obvious placements effortlessly.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Target Highly Populated Rows and Boxes First
                </div>
                <p className="text-xs leading-relaxed">
                  If a row or 3x3 block already contains 6 or 7 clues, it only has 2 or 3 missing digits. Check those few candidates against intersecting columns to finish the unit immediately.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Never Guess on a 50/50 Branch
                </div>
                <p className="text-xs leading-relaxed">
                  Guessing creates subtle downstream contradictions that often take 20 moves to discover. Sudoku is 100% deterministic; if stuck, look for a hidden single or pointing line.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Master Numpad Keyboard Navigation
                </div>
                <p className="text-xs leading-relaxed">
                  Clicking the on-screen number palette with a mouse costs 400ms per cell. Use your arrow keys to navigate and your right hand on the numeric keypad to place digits instantly.
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
              Frequently Asked Questions About Sudoku
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {sudokuFaqs.map((faq, index) => (
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
              Explore More Logic &amp; Mathematical Puzzles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue sharpening your deductive reasoning, numerical fluency, and strategic problem-solving across our interactive suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/minesweeper" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Minesweeper</span>
                <span className="text-xs text-muted-foreground mt-1">Probabilistic grid deduction →</span>
              </Link>
              <Link href="/make-24" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Make 24</span>
                <span className="text-xs text-muted-foreground mt-1">Arithmetic combinatorial logic →</span>
              </Link>
              <Link href="/tower-of-hanoi" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Tower of Hanoi</span>
                <span className="text-xs text-muted-foreground mt-1">Recursive algorithm puzzle →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
