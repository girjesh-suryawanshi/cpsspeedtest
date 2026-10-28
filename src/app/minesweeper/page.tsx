import { GameSEO } from "@/components/game-seo";
import { Minesweeper } from "@/components/games/minesweeper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Bomb, Trophy, Activity, Compass, CheckCircle2,
  HelpCircle, ArrowRight, TrendingUp, Sparkles, Award,
  ShieldCheck, Flag, Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Minesweeper Online – Deduction Logic Puzzle & Strategy Guide | CpsSpeedTest",
  description:
    "Play classic Minesweeper online. Learn mathematical patterns (1-2-1, 1-2-2-1), master chording efficiency, understand NP-complete complexity, and beat expert completion times.",
  keywords: [
    "minesweeper",
    "classic minesweeper",
    "minesweeper online",
    "minesweeper patterns",
    "minesweeper 1 2 1",
    "logic puzzle game",
    "minesweeper strategy",
    "play minesweeper free",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/minesweeper" },
  openGraph: {
    title: "Classic Minesweeper Online – Deduction Logic Puzzle",
    description: "Play classic Minesweeper in your browser. Master 1-2-1 pattern deduction, chording speed, and solve expert boards.",
    url: "https://www.cpsspeedtest.com/minesweeper",
    type: "website",
  },
};

const minesweeperHowToSteps = [
  {
    name: "Click any cell to open the board safely",
    text: "The first click is always guaranteed to be safe and will open an expansive clearing of zeroes with surrounding numbers.",
  },
  {
    name: "Interpret numbers as adjacent mine counts",
    text: "Each revealed number (1 through 8) explicitly states how many mines reside in the eight surrounding adjacent cells.",
  },
  {
    name: "Right-click to flag confirmed mine locations",
    text: "When a number touches only that exact number of unopened tiles (e.g., a '1' touching a solitary unrevealed corner cell), right-click to place a flag.",
  },
  {
    name: "Use Chording (Double-Click) to clear safe tiles",
    text: "When a number has all its surrounding mines flagged, click it to automatically reveal all remaining unflagged neighbor cells at once.",
  },
  {
    name: "Apply 1-2-1 and 1-2-2-1 pattern rules",
    text: "Use mathematical deduction on perimeter walls: in a 1-2-1 straight line, mines always sit behind the ones, while the space behind the two is safe.",
  },
  {
    name: "Clear all non-mine tiles to achieve victory",
    text: "You win when every single non-mine tile is opened. Review your completion time and benchmark against global speed records.",
  },
];

const minesweeperFaqs = [
  {
    question: "How do the numbers work in Minesweeper mathematically?",
    answer:
      "Every revealed number (1 through 8) indicates the exact count of mines concealed in the 8 adjacent neighboring squares (horizontally, vertically, and diagonally). If a cell displays '1', exactly one of its eight neighboring squares contains a mine. A blank tile indicates zero adjacent mines, which automatically triggers a recursive flood-fill cascade clearing surrounding safe squares.",
  },
  {
    question: "What is the famous 1-2-1 pattern in Minesweeper?",
    answer:
      "When the numbers 1, 2, and 1 appear in a straight row along an unrevealed wall edge, mathematical logic dictates that mines are situated directly behind both '1's, while the square directly behind the '2' is 100% safe to open. Memorizing this pattern eliminates hesitation and allows instantaneous clearing.",
  },
  {
    question: "What is 'Chording' and how does it save time?",
    answer:
      "Chording occurs when you click a revealed number whose required surrounding mines have already been flagged. Clicking that number instantaneously reveals all remaining unflagged adjacent neighbor cells simultaneously, reducing individual mouse clicks by up to 50% and vastly lowering clear times.",
  },
  {
    question: "Is every randomly generated Minesweeper board 100% logically solvable?",
    answer:
      "No. On standard random boards, players occasionally encounter an unavoidable 50/50 guessing deadlock—a situation where two symmetric unopened tiles have identical 50% mathematical probabilities of concealing a bomb, requiring a blind guess regardless of logic.",
  },
  {
    question: "Who invented Minesweeper and when was it created?",
    answer:
      "Minesweeper was programmed in 1989 by Curt Johnson and Robert Donner, employees at Microsoft, under the name 'Mine'. It was officially bundled with the Microsoft Entertainment Pack in 1990 and became pre-installed on Windows 3.1 in 1992, originally designed to covertly teach users how to use the left and right mouse buttons effectively.",
  },
  {
    question: "Is Minesweeper related to computer science and NP-completeness?",
    answer:
      "Yes! In 2000, mathematician Richard Kaye published a famous mathematical proof demonstrating that determining whether a given Minesweeper board has a consistent valid solution is an NP-complete problem, establishing formal ties between Minesweeper deduction and the greatest unsolved problem in mathematics (P vs NP).",
  },
  {
    question: "What cognitive skills does playing Minesweeper sharpen?",
    answer:
      "Minesweeper exercises deductive logic, spatial pattern recognition, working memory updating, and probabilistic risk evaluation under timed pressure.",
  },
];

export default function MinesweeperPage() {
  return (
    <>
      <GameSEO
        name="Minesweeper – Classic Logic Puzzle"
        description="Play classic Minesweeper online. Learn mathematical patterns (1-2-1, 1-2-2-1), master chording efficiency, understand NP-complete complexity, and beat expert times."
        url="https://www.cpsspeedtest.com/minesweeper"
        faqs={minesweeperFaqs}
        howToSteps={minesweeperHowToSteps}
        category="PuzzleGame"
        lastUpdated="October 2026"
        benefits="Sharpen deductive Boolean logic, master mathematical 1-2-1 pattern rules, leverage chording click efficiency, and benchmark clear times on Beginner, Intermediate, and Expert boards."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Bomb className="w-3.5 h-3.5" />
            <span>Windows 3.1 (1992) Deductive Logic Classic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Classic Minesweeper
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Uncover safe squares, flag hidden mines, master chording efficiency, and apply 1-2-1 deduction patterns to beat your best completion times.
          </p>
        </header>

        {/* Interactive Game Component */}
        <Minesweeper />

        {/* Section 1: What is Minesweeper? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Minesweeper Puzzle?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Minesweeper</strong> is a classic single-player deduction logic puzzle where the objective is to clear a grid of covered tiles without detonating hidden landmines. By analyzing revealed numbers that detail adjacent mine counts, players systematically deduce safe coordinates and flag dangerous squares using Boolean logic and mathematical elimination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Beginner Board</span>
                <span className="text-lg font-black text-primary">9 x 9 (10 Mines)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">12.3% mine density</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Intermediate Board</span>
                <span className="text-lg font-black text-amber-500">16 x 16 (40 Mines)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">15.6% mine density</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Expert Board</span>
                <span className="text-lg font-black text-emerald-500">30 x 16 (99 Mines)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">20.6% mine density</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Solve Minesweeper Efficiently
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {minesweeperHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Play Minesweeper? Cognitive Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive Benefits of Playing Minesweeper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Compass className="w-4 h-4" />
                  Deductive Constraint Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Minesweeper is an interactive demonstration of constraint satisfaction problems. Solving overlapping number constraints trains formal logical deduction used in mathematical proof formulation and systems engineering.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Zap className="w-4 h-4" />
                  High-Speed Information Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Speed Minesweeper players scan dozens of numbers in seconds, using automated pattern recognition to flag and chord at 4+ clicks per second without conscious calculation pauses.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Calculated Risk Evaluation (50/50s)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When forced into probabilistic corners, players must calculate percentage odds across adjacent candidate cells, training rational decision-making in financial investing and risk management.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Flag className="w-4 h-4" />
                  Micro-Mouse Accuracy &amp; Coordination
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Navigating dense 30x16 grids requires surgical mouse tracking. Alternating between left clicks, right-click flags, and double-click chords builds pinpoint cursor precision for competitive gaming.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — 1-2-1 Pattern & Chording */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Core Mathematical Patterns in Minesweeper
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Pattern Name</th>
                  <th className="p-3">Wall Sequence</th>
                  <th className="p-3">Mine Placement Rule</th>
                  <th className="p-3">Safe Square Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">1-2-1 Straight Wall</td>
                  <td className="p-3 font-mono text-primary font-bold">1 - 2 - 1</td>
                  <td className="p-3 text-rose-400 font-semibold">Mines behind both 1s</td>
                  <td className="p-3 text-emerald-400 font-bold">Square behind the 2 is safe</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">1-2-2-1 Double Wall</td>
                  <td className="p-3 font-mono text-primary font-bold">1 - 2 - 2 - 1</td>
                  <td className="p-3 text-rose-400 font-semibold">Mines behind both 2s</td>
                  <td className="p-3 text-emerald-400 font-bold">Squares behind both 1s are safe</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Corner 1 Anchor</td>
                  <td className="p-3 font-mono text-primary font-bold">Corner with solitary &apos;1&apos;</td>
                  <td className="p-3 text-rose-400 font-semibold">Mine in solitary diagonal cell</td>
                  <td className="p-3 text-emerald-400 font-bold">Adjacent lateral cells are safe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Minesweeper Clear Time Benchmarks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Beginner (9x9)</div>
              <div className="text-2xl font-black text-foreground">&lt; 15s (Pro: &lt; 5s)</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Requires opening 71 safe tiles. Pro record is under 1 second using lucky flood-fills and chording.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Intermediate (16x16)</div>
              <div className="text-2xl font-black text-primary">&lt; 60s (Pro: &lt; 20s)</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Requires opening 216 safe tiles with 40 mines. Demands fast perimeter scanning and zero hesitation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Expert (30x16)</div>
              <div className="text-2xl font-black text-amber-500">&lt; 180s (Pro: &lt; 50s)</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Requires opening 381 safe tiles among 99 mines. World records hover under 30 seconds.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">3BV Efficiency</div>
              <div className="text-2xl font-black text-rose-500">&gt; 2.5 Clicks/Sec</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Benchmark measuring minimum clicks required to solve a board without flags (Bechtel&apos;s Board Benchmark Value).
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Tips to Improve Your Minesweeper Speed
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Chord Relentlessly</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Never click individual safe tiles around an already-flagged number. Click the number directly to trigger chords that reveal all safe neighbors in a single stroke.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Solve From Edges Inward</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Tiles bordering empty space provide the highest mathematical certainty. Work along established perimeters rather than clicking random blind squares in the interior.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Take 50/50 Guesses Immediately</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If an unavoidable 50/50 guess appears, resolve it immediately. Don&apos;t spend 3 minutes solving the rest of the board only to lose on an unavoidable coin flip at the end.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Try &apos;No-Flag&apos; Speedrunning</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Advanced players solve boards without placing any flags at all. Leaving mines unflagged eliminates right-clicks entirely, drastically boosting raw completion speed.
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
            {minesweeperFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Strategy Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Logic &amp; Strategy Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/sudoku"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Classic Sudoku</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/2048"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">2048 Puzzle</span>
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
              href="/tic-tac-toe"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Tic-Tac-Toe AI</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
