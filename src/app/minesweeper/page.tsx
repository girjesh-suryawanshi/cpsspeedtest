import { GameSEO } from "@/components/game-seo";
import { Minesweeper } from "@/components/games/minesweeper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Bomb, Trophy, Activity, Compass, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Minesweeper Online – Deduction Logic Puzzle & Strategy Guide | CpsSpeedTest",
  description: "Play classic Minesweeper online. Learn mathematical patterns (1-2-1, 1-2-2-1), master chording efficiency, understand NP-complete complexity, and beat expert times.",
  keywords: ['minesweeper', 'classic minesweeper', 'minesweeper online', 'minesweeper patterns', 'minesweeper 1 2 1', 'logic puzzle game'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/minesweeper' },
};

const minesweeperFaqs = [
  {
    question: "How do the numbers work in Minesweeper?",
    answer: "Every revealed number (1 through 8) explicitly states how many mines reside in the eight surrounding adjacent cells (horizontally, vertically, and diagonally). A '1' touching only one unopened cell guarantees that cell is a mine."
  },
  {
    question: "What is the 1-2-1 pattern in Minesweeper?",
    answer: "When numbers 1, 2, and 1 appear in a straight row along an unopened wall, mathematical deduction proves that mines are located behind both '1's, while the square directly behind the '2' is 100% safe to open."
  },
  {
    question: "What is 'Chording' and how does it save time?",
    answer: "Chording occurs when you click a number that already has all its required mines flagged. Clicking that number will instantaneously reveal all remaining unflagged neighbor cells simultaneously, saving up to 50% of individual mouse clicks."
  },
  {
    question: "Is every Minesweeper board 100% logically solvable?",
    answer: "Not all randomly generated boards can be solved with pure logic alone. Occasionally, a 50/50 guessing deadlock occurs in the endgame where two symmetric unrevealed squares have equal 50% mathematical probabilities of concealing a bomb."
  }
];

export default function MinesweeperPage() {
  return (
    <>
      <GameSEO 
        name="Minesweeper – Classic Logic Puzzle"
        description="Play classic Minesweeper online. Learn mathematical patterns (1-2-1, 1-2-2-1), master chording efficiency, understand NP-complete complexity, and beat expert times."
        url="https://www.cpsspeedtest.com/minesweeper"
        faqs={minesweeperFaqs}
        category="PuzzleGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Bomb className="w-3.5 h-3.5" />
            <span>Classic Windows Deduction &amp; Probability Puzzle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Minesweeper
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Deduce the locations of all hidden mines using surrounding numerical clues. Clear every safe square, place precision flags, and solve the grid in record time.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <div className="py-2">
          <Minesweeper />
        </div>

        {/* ── Section 1: Origins & Why Windows Included Minesweeper (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Origins of Minesweeper: The Secret Purpose Behind Windows 3.1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Created in 1989 by Microsoft developers <strong>Robert Donner and Curt Johnson</strong>, Minesweeper made its official Windows operating system debut in 1992 with Windows 3.1.
            </p>
            <p>
              While millions regarded it as an addictive time-killer, Microsoft deliberately bundled the game with an ulterior motive: <strong>to teach computer users how to use a computer mouse</strong>. In 1992, most PC users were accustomed to keyboard command-line interfaces. Minesweeper trained people in two critical GUI skills:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Left-Clicking:</strong> Accurate point-and-click targeting on a micro-grid.</li>
              <li><strong>Right-Clicking:</strong> Introducing the concept of secondary context menus by requiring right-clicks to place flags on potential bombs.</li>
            </ul>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-xs sm:text-sm space-y-1.5">
              <p className="font-bold text-primary">🎓 NP-Complete Mathematical Complexity:</p>
              <p>
                In 2000, mathematician Richard Kaye published a famous mathematical proof demonstrating that deciding whether a given Minesweeper configuration has a valid solution is <strong>NP-complete</strong>—placing it in the same complexity class as the Traveling Salesperson Problem.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: Essential Solving Patterns (GEO Matrix) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              The 3 Golden Deduction Patterns for Flawless Clearing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Professional Minesweeper players do not count cells one by one; they scan for recognized geometric pattern formations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">1. The 1-2-1 Wall Pattern</h4>
                <p className="text-xs text-muted-foreground">
                  When numbers <strong>1 - 2 - 1</strong> appear along an unopened boundary, the two &apos;1&apos;s conceal the mines, and the space directly behind the central &apos;2&apos; is <strong>guaranteed 100% safe</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">2. The 1-2-2-1 Double Pattern</h4>
                <p className="text-xs text-muted-foreground">
                  When numbers <strong>1 - 2 - 2 - 1</strong> align along a straight wall, the mines are located directly behind both &apos;2&apos;s, while the spaces behind the outer &apos;1&apos;s are completely safe.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">3. The 1-1 Corner Reduction</h4>
                <p className="text-xs text-muted-foreground">
                  If two &apos;1&apos;s share adjacent mystery tiles and the inner &apos;1&apos; touches no other cells, any tiles extending beyond the shared boundary must be safe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Difficulty Tiers & Speed Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Standard Difficulty Tiers &amp; Completion Time Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard competitive Minesweeper recognizes three official grid configurations:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Difficulty Tier</th>
                    <th className="py-2.5 px-3 font-bold">Grid Dimensions</th>
                    <th className="py-2.5 px-3 font-bold">Total Mines</th>
                    <th className="py-2.5 px-3 font-bold">Casual Time</th>
                    <th className="py-2.5 px-3 font-bold">Competitive Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Beginner</td>
                    <td className="py-2 px-3">9 × 9 (81 cells)</td>
                    <td className="py-2 px-3">10 mines (12.3%)</td>
                    <td className="py-2 px-3">30 – 60 seconds</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">&lt; 5 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Intermediate</td>
                    <td className="py-2 px-3">16 × 16 (256 cells)</td>
                    <td className="py-2 px-3">40 mines (15.6%)</td>
                    <td className="py-2 px-3">2 – 5 minutes</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">&lt; 35 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Expert</td>
                    <td className="py-2 px-3">30 × 16 (480 cells)</td>
                    <td className="py-2 px-3">99 mines (20.6%)</td>
                    <td className="py-2 px-3">8 – 15 minutes</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">&lt; 90 seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Want to test more deductive logic and puzzle-solving skills? Play our number slide puzzle <Link href="/2048" className="text-primary hover:underline font-semibold">2048</Link> or tackle algorithmic recursion on <Link href="/tower-of-hanoi" className="text-primary hover:underline font-semibold">Tower of Hanoi</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 4: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {minesweeperFaqs.map((faq, index) => (
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
