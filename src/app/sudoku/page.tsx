import { GameSEO } from "@/components/game-seo";
import { Sudoku } from "@/components/games/sudoku";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Grid, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Play Sudoku Free Online – Deductive Logic & Number Grid Puzzle | CpsSpeedTest",
  description: "Play free online Sudoku with multiple difficulty tiers. Master naked singles, hidden pairs, and advanced grid elimination techniques with real-time validation.",
  keywords: ["sudoku", "online sudoku", "logic puzzle", "number puzzle", "brain training", "deductive reasoning", "free sudoku game", "nikoli puzzle"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/sudoku',
  },
  openGraph: {
    title: "Play Sudoku Free Online – Deductive Logic Puzzle",
    description: "Benchmark your logical deduction and pattern recognition on our clean, interactive 9x9 Sudoku grid.",
    url: 'https://www.cpsspeedtest.com/sudoku',
    type: 'website',
  },
};

const sudokuFaqs = [
  {
    question: "What are the fundamental rules of classic 9x9 Sudoku?",
    answer: "A standard Sudoku board consists of 81 cells organized into nine 3x3 blocks. The objective is to fill every cell with a digit from 1 to 9 such that each number appears exactly once in every horizontal row, every vertical column, and every 3x3 subgrid without repetition."
  },
  {
    question: "Does solving Sudoku require mathematical or arithmetic ability?",
    answer: "No. Although digits 1 through 9 are traditionally employed, Sudoku requires zero mathematical calculation or arithmetic operations. It is purely a problem of constraint satisfaction, relational logic, and process of elimination. The numbers could be replaced with letters, colors, or geometric icons without changing the logic."
  },
  {
    question: "What is the difference between a 'Naked Single' and a 'Hidden Single'?",
    answer: "A 'Naked Single' occurs when a cell has only one possible candidate remaining because all other 8 digits are already present in its intersecting row, column, or 3x3 block. A 'Hidden Single' occurs when a digit can only legally fit into one specific cell within a block or row, even though that cell may appear to have other possible candidates."
  },
  {
    question: "What is the minimum number of clues required for a unique Sudoku puzzle?",
    answer: "In 2012, mathematician Gary McGuire proved via complex supercomputer computation that no valid Sudoku puzzle can exist with fewer than 17 clues. Any puzzle with 16 or fewer clues inevitably contains multiple non-unique solutions."
  },
  {
    question: "Who invented modern Sudoku?",
    answer: "Modern Sudoku was invented in 1979 by 74-year-old American architect Howard Garns and published under the name 'Number Place' by Dell Magazines. It was introduced to Japan in 1984 by Maki Kaji (the founder of puzzle company Nikoli), who coined the name 'Sudoku'—an abbreviation of 'Sūji wa dokushin ni kagiru' ('the numbers must be single')."
  }
];

export default function SudokuPage() {
  return (
    <>
      <GameSEO 
        name="Play Sudoku Free Online"
        description="Play free online Sudoku. Exercise your brain, improve logical reasoning, and solve challenging 9x9 number placement puzzles."
        url="https://www.cpsspeedtest.com/sudoku"
        faqs={sudokuFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Constraint Satisfaction &amp; Deductive Logic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Sudoku
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
            <p>
              In computational complexity theory, solving a generalized $N \times N$ Sudoku board is classified as <strong>NP-complete</strong>. Mathematically, it is an instance of the <em>exact cover problem</em>, famously solvable by Donald Knuth&apos;s Algorithm X (Dancing Links).
            </p>
            <p>
              Every cell in a 9x9 board is subject to three simultaneous, interlocking constraints:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Row Constraint:</strong> Digits 1 through 9 must be placed exactly once in each of the 9 horizontal rows.
              </li>
              <li>
                <strong className="text-foreground">Column Constraint:</strong> Digits 1 through 9 must be placed exactly once in each of the 9 vertical columns.
              </li>
              <li>
                <strong className="text-foreground">Subgrid Box Constraint:</strong> Digits 1 through 9 must be placed exactly once in each 3x3 non-overlapping block.
              </li>
            </ol>
            <p className="text-xs">
              Every cell intersects with exactly 20 peer cells (8 in its row, 8 in its column, and 4 remaining in its 3x3 box). By cross-referencing candidate sets across these 20 peers, you eliminate false candidates until only a single truth remains.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Difficulty & Solving Time Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Sudoku Solving Speed Tiers (Standard 9x9 Board)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly can your brain analyze grid constraints? Here are the benchmark solving times for intermediate difficulty boards:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">15+ Minutes</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solves predominantly through naked singles. Relies on pencil marks and encounters frequent dead ends due to premature guesses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">8 – 14 Minutes</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Deductor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast candidate scanning. Rapidly identifies hidden singles and pointing pairs across rows and boxes without hesitating.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">4 – 7 Minutes</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Speed Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-speed visual crosshatching. Fluid recognition of naked pairs and box-line reductions without needing pencil marks.
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

        {/* ── Section 3: Step-by-Step Solving Strategies ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Essential Solving Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Crosshatching (Scanning):</strong> Focus on one number at a time (e.g. 1 through 9). Trace rows and columns containing that number across a 3x3 block to eliminate candidate cells.
                </li>
                <li>
                  <strong className="text-foreground">Naked Pairs:</strong> If two cells within the same row, column, or block contain only the identical pair of candidates (e.g. [3, 7]), those two numbers can be removed as candidates from all other cells in that unit.
                </li>
                <li>
                  <strong className="text-foreground">Never Guess:</strong> Every properly constructed Sudoku puzzle has a unique, deterministic logical pathway. If you guess, you risk invalidating the board dozens of moves later.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Mathematical &amp; Logic Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Continue training your logic, pattern matching, and working memory across our cognitive puzzle suite:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/minesweeper" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Minesweeper</span>
                  <span className="text-primary font-mono">Probabilistic Deduction →</span>
                </Link>
                <Link href="/make-24" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Make 24</span>
                  <span className="text-primary font-mono">Arithmetic Operations →</span>
                </Link>
                <Link href="/tower-of-hanoi" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Tower of Hanoi</span>
                  <span className="text-primary font-mono">Recursive Algorithms →</span>
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
      </div>
    </>
  );
}
