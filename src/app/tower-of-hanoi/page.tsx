import { GameSEO } from "@/components/game-seo";
import { TowerOfHanoi } from "@/components/games/tower-of-hanoi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Disc, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tower of Hanoi – Recursive Algorithm Puzzle & Minimal Move Solver | CpsSpeedTest",
  description: "Play the legendary Tower of Hanoi mathematical puzzle. Test your recursive logic, disk transfer sequencing, and minimal move efficiency across 3 to 7 disks.",
  keywords: ["tower of hanoi", "hanoi puzzle", "logic puzzle", "math game", "brain training", "recursive algorithms", "tower of brahma", "edouard lucas puzzle"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/tower-of-hanoi',
  },
  openGraph: {
    title: "Tower of Hanoi – Recursive Algorithmic Logic Puzzle",
    description: "Benchmark your strategic planning and recursive problem-solving against the legendary Tower of Hanoi puzzle with move efficiency scoring.",
    url: 'https://www.cpsspeedtest.com/tower-of-hanoi',
    type: 'website',
  },
};

const hanoiFaqs = [
  {
    question: "What is the theoretical minimum number of moves to solve Tower of Hanoi?",
    answer: "For a tower of n disks, the exact minimum number of moves is given by the recursive formula: M(n) = 2^n - 1. For 3 disks, the minimum is 7 moves (2^3 - 1); for 4 disks, 15 moves; for 5 disks, 31 moves; and for 7 disks, 127 moves. Any additional move represents an inefficiency or backtracking error."
  },
  {
    question: "What are the three inviolable rules of Tower of Hanoi?",
    answer: "Rule 1: Only one single disk may be moved during any turn. Rule 2: Each move consists of picking up the top disk from one peg and sliding it onto another peg. Rule 3: No larger disk may ever be placed on top of a smaller disk at any point in the game."
  },
  {
    question: "Why is Tower of Hanoi the classic teaching problem for computer science recursion?",
    answer: "Solving n disks naturally breaks down into three recursive subproblems: 1) Move the top n-1 disks from Source to Auxiliary peg. 2) Move the single largest disk directly from Source to Destination peg. 3) Move the n-1 disks from Auxiliary to Destination peg. This divide-and-conquer structure is the quintessential demonstration of mathematical induction and recursive call stacks."
  },
  {
    question: "What is the mythical origin story of the Tower of Brahma?",
    answer: "When French mathematician Édouard Lucas published the puzzle in 1883 under the pseudonym N. Claus de Siam, he included an ancient Hindu legend. The myth claimed that Brahmin priests in a temple at Kashi were transferring 64 golden disks across three diamond needles. Legend held that when the priests completed the 2^64 - 1 moves (over 18.4 quintillion moves, taking 585 billion years at 1 move per second), the universe would end."
  },
  {
    question: "How does the iterative solution work using binary Gray code?",
    answer: "Tower of Hanoi can be solved mechanically without recursion using binary Gray code or simple parity rules. On every odd-numbered move (1st, 3rd, 5th, etc.), you always move the smallest disk in a fixed direction (clockwise for odd disk counts, counterclockwise for even disk counts). On even-numbered moves, you make the only other legal move available."
  }
];

export default function TowerOfHanoiPage() {
  return (
    <>
      <GameSEO 
        name="Tower of Hanoi"
        description="Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and recursive algorithmic reasoning across multiple disk configurations."
        url="https://www.cpsspeedtest.com/tower-of-hanoi"
        faqs={hanoiFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Disc className="w-3.5 h-3.5" />
            <span>Recursive Graph Theory &amp; Algorithmic Puzzle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Tower of Hanoi
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The legendary mathematical puzzle invented by Édouard Lucas. Move the entire pyramid of disks from the first peg to the final peg without ever placing a larger disk onto a smaller one.
          </p>
        </header>

        {/* Tower of Hanoi Interactive Game */}
        <div className="py-2">
          <TowerOfHanoi />
        </div>

        {/* ── Section 1: The Mathematics of 2^n - 1 (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematics of Recursion: The 2^n - 1 Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Invented in 1883 by French mathematician <strong>Édouard Lucas</strong>, the <strong>Tower of Hanoi</strong> is more than a toy—it is a fundamental bridge between mathematical induction, computer science call stacks, and cognitive executive function.
            </p>
            <p>
              The minimum number of moves required to solve a puzzle with $n$ disks obeys the recurrence relation $M(n) = 2M(n-1) + 1$, which resolves to the closed-form equation:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              Minimum Moves M(n) = 2^n - 1
            </div>
            <p className="text-xs">
              Every added disk doubles the total complexity plus one. While a 3-disk game requires just 7 moves, a 7-disk game requires 127 moves. One single misplacement on move 40 can trap your large disks, requiring dozens of remedial moves to correct.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Disk Tiers & Optimal Move Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Tower of Hanoi Complexity &amp; Move Efficiency Benchmark
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verify your solution efficiency against the theoretical mathematical optimum:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🥉</div>
                <div className="font-bold text-foreground">3 Disks (7 Moves)</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Introductory Logic</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Easily solved through trial-and-error. Solvable in under 15 seconds. Introduces basic auxiliary peg staging.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🥈</div>
                <div className="font-bold text-foreground">4 Disks (15 Moves)</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate Planning</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Requires forward planning. A mistake on move 4 causes significant disk blocking and wasted transfers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🥇</div>
                <div className="font-bold text-foreground">5 Disks (31 Moves)</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Recursive Mastery</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Demands disciplined application of recursive sub-tree transfers. Achieving exactly 31 moves reflects flawless planning.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">6–7 Disks (63–127 Moves)</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Algorist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% executive working memory. The player maintains internal state tracking over 100+ consecutive transfers with 100% efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: The Parity Rule & Binary Solution ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                The Parity Rule: Never Make a Guess
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                You can solve any Tower of Hanoi puzzle without thinking by following two alternating rules:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Odd Move Rule:</strong> Always move the smallest disk (Disk 1). If total disks is odd, move it clockwise (A → C → B → A). If total disks is even, move it counterclockwise (A → B → C → A).
                </li>
                <li>
                  <strong className="text-foreground">Even Move Rule:</strong> On the very next turn, there is exactly one legal move between the two larger disks. Make that move.
                </li>
              </ol>
              <p className="text-xs">
                By alternating between moving Disk 1 and making the only other legal move, you guarantee the mathematical minimum solution.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Logic &amp; Deductive Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Exercise logical deduction, graph theory, and working memory across our puzzle games:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/sudoku" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sudoku</span>
                  <span className="text-primary font-mono">Deductive Grid Elimination →</span>
                </Link>
                <Link href="/make-24" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Make 24</span>
                  <span className="text-primary font-mono">Arithmetic Combinatorics →</span>
                </Link>
                <Link href="/minesweeper" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Minesweeper</span>
                  <span className="text-primary font-mono">Constraint Satisfaction →</span>
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
              Frequently Asked Questions About Tower of Hanoi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {hanoiFaqs.map((faq, index) => (
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
