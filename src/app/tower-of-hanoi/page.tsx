import { GameSEO } from "@/components/game-seo";
import { TowerOfHanoi } from "@/components/games/tower-of-hanoi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Disc, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tower of Hanoi – Recursive Algorithm Puzzle & Minimal Move Solver | CpsSpeedTest",
  description: "Play the legendary Tower of Hanoi mathematical puzzle. Test your recursive logic, disk transfer sequencing, and minimal move efficiency across 3 to 7 disks.",
  keywords: ["tower of hanoi", "hanoi puzzle", "logic puzzle", "math game", "brain training", "recursive algorithms", "tower of brahma", "edouard lucas puzzle", "minimal move solver"],
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

const hanoiHowToSteps = [
  {
    name: "Understand the Inviolable Rules",
    text: "Move one disk at a time between three pegs (Source, Auxiliary, Destination). A larger disk may never rest on top of a smaller disk at any stage."
  },
  {
    name: "Identify the Recursive Base Case",
    text: "To move a tower of n disks from Peg A to Peg C, you must first move the top n-1 disks to Peg B, move disk n to Peg C, and transfer the n-1 disks from B to C."
  },
  {
    name: "Determine the First Move Parity",
    text: "If the total number of disks is odd, move the smallest disk directly to the Destination peg. If even, move the smallest disk to the Auxiliary peg."
  },
  {
    name: "Follow the Alternating Step Cadence",
    text: "Every alternate move must involve the smallest disk. On every odd turn, shift the smallest disk; on every even turn, make the only other legal move available."
  },
  {
    name: "Never Place Larger Disks on Smaller Ones",
    text: "Constantly verify peg hierarchy before releasing a disk. Backtracking due to an illegal move adds penalty turns that corrupt minimal efficiency."
  },
  {
    name: "Complete the Sequence in 2ⁿ - 1 Moves",
    text: "Reach the target Destination peg with zero extraneous moves, achieving 100% minimal move efficiency (7 moves for 3 disks, 15 for 4, 31 for 5)."
  }
];

const hanoiFaqs = [
  {
    question: "What is the theoretical minimum number of moves to solve Tower of Hanoi?",
    answer: "For a tower of n disks, the exact minimum number of moves is given by the recurrence formula: M(n) = 2ⁿ - 1. For 3 disks, the minimum is 7 moves (2³ - 1); for 4 disks, 15 moves; for 5 disks, 31 moves; and for 7 disks, 127 moves. Any additional move represents an inefficiency or backtracking error."
  },
  {
    question: "What are the three inviolable rules of Tower of Hanoi?",
    answer: "Rule 1: Only one single disk may be moved during any turn. Rule 2: Each move consists of picking up the top disk from one peg and sliding it onto another peg. Rule 3: No larger disk may ever be placed on top of a smaller disk at any point in the game."
  },
  {
    question: "Why is Tower of Hanoi the quintessential teaching problem for recursion?",
    answer: "Solving n disks naturally breaks down into three self-similar subproblems: 1) Move the top n-1 disks from Source to Auxiliary peg. 2) Move the single largest disk directly from Source to Destination peg. 3) Move the n-1 disks from Auxiliary to Destination peg. This divide-and-conquer structure is the gold standard for teaching mathematical induction and recursive call stacks."
  },
  {
    question: "What is the mythical origin story of the Tower of Brahma?",
    answer: "When French mathematician Édouard Lucas published the puzzle in 1883 under the pseudonym N. Claus de Siam, he included an ancient Hindu legend. The myth claimed that Brahmin priests in a temple at Kashi were transferring 64 golden disks across three diamond needles. Legend held that when the priests completed the 2⁶⁴ - 1 moves (over 18.4 quintillion moves, taking 585 billion years at 1 move per second), the universe would end."
  },
  {
    question: "How does the iterative solution work using binary Gray code?",
    answer: "Tower of Hanoi can be solved mechanically without recursion using binary Gray code or simple parity rules. On every odd-numbered move (1st, 3rd, 5th, etc.), you always move the smallest disk in a fixed direction (clockwise for odd disk counts, counterclockwise for even disk counts). On even-numbered moves, you make the only other legal move available."
  },
  {
    question: "How does solving Tower of Hanoi improve executive cognitive planning?",
    answer: "Tower of Hanoi is heavily utilized in neuropsychological assessments (such as the Delis-Kaplan Executive Function System) to measure frontal lobe function. It evaluates goal-directed behavior, prospective memory, inhibition of impulsive moves, and long-range algorithmic planning."
  },
  {
    question: "What is the Frame-Stewart algorithm for Tower of Hanoi with 4 or more pegs?",
    answer: "When played with 4 pegs (Reve's Puzzle) or more, the minimum move problem becomes significantly more complex. The Frame-Stewart algorithm provides the presumed optimal solution by partitioning the n disks into two groups (k and n-k), moving k disks using all pegs, and the remainder with fewer pegs, reducing the move count drastically compared to 3 pegs."
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
        howToSteps={hanoiHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Disc className="w-3.5 h-3.5" />
            <span>Recursive Algorithms &amp; Minimal Moves</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Tower of Hanoi
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The legendary mathematical puzzle invented by Édouard Lucas in 1883. Transfer all disks from source to destination peg with optimal minimal moves.
          </p>
        </header>

        {/* Interactive Game Component */}
        <div className="py-2">
          <TowerOfHanoi />
        </div>

        {/* ── Section 1: Mathematics of Recursive Induction (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Recurrence Formula: M(n) = 2ⁿ - 1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              The Tower of Hanoi is a classical mathematical puzzle demonstrating recursive decomposition and exponential time complexity. To move a tower of n disks from a starting peg to a target peg using three pegs, the exact minimal move sequence is governed by the recurrence relation M(n) = 2M(n-1) + 1, resolving to the closed-form equation M(n) = 2ⁿ - 1.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">3 Disks</div>
                <div className="text-xs text-muted-foreground">7 Minimal Moves</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">4 Disks</div>
                <div className="text-xs text-muted-foreground">15 Minimal Moves</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">5 Disks</div>
                <div className="text-xs text-muted-foreground">31 Minimal Moves</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">O(2ⁿ)</div>
                <div className="text-xs text-muted-foreground">Time Complexity</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because each additional disk doubles the total number of required moves plus one, the solution space scales exponentially. Any mistake or backtracking move instantly drops the player&apos;s move efficiency score below the theoretical optimal threshold.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve Tower of Hanoi in 6 Minimal Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hanoiHowToSteps.map((step, idx) => (
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
                Recursive Algorithmic Thinking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Playing Tower of Hanoi trains your brain to break large, seemingly intractable problems into identical self-similar sub-problems. This divide-and-conquer mental architecture is fundamental to computer programming, data structures, and mathematical induction.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Working Memory &amp; Lookahead Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Achieving the minimum move score requires planning 3 to 7 moves in advance before making a physical click. This prospective memory planning strengthens the prefrontal cortex and suppresses impulsive, suboptimal trial-and-error actions.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Inhibition Control &amp; Error Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Because an illegal move (placing a larger disk on a smaller disk) or a misguided transfer ruins the entire sequential chain, players develop rigorous metacognitive monitoring and visual verification habits before committing to an action.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Cognitive Assessment Standard
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tower of Hanoi is widely utilized by neuropsychologists and cognitive scientists to evaluate executive functioning, rule learning, and frontal lobe integrity in both clinical and competitive performance research.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Move Complexity & Parity ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Disk Count vs. Minimal Move Recurrence Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Disks (n)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Formula (2ⁿ - 1)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Minimal Moves</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">First Move Target</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Estimated Solving Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">3 Disks</td>
                    <td className="py-2.5 px-3 font-mono">2³ - 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">7</td>
                    <td className="py-2.5 px-3">Destination (Peg C)</td>
                    <td className="py-2.5 px-3">5 – 10 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">4 Disks</td>
                    <td className="py-2.5 px-3 font-mono">2⁴ - 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">15</td>
                    <td className="py-2.5 px-3">Auxiliary (Peg B)</td>
                    <td className="py-2.5 px-3">15 – 30 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">5 Disks</td>
                    <td className="py-2.5 px-3 font-mono">2⁵ - 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">31</td>
                    <td className="py-2.5 px-3">Destination (Peg C)</td>
                    <td className="py-2.5 px-3">45 – 90 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">6 Disks</td>
                    <td className="py-2.5 px-3 font-mono">2⁶ - 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">63</td>
                    <td className="py-2.5 px-3">Auxiliary (Peg B)</td>
                    <td className="py-2.5 px-3">2 – 4 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">7 Disks</td>
                    <td className="py-2.5 px-3 font-mono">2⁷ - 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">127</td>
                    <td className="py-2.5 px-3">Destination (Peg C)</td>
                    <td className="py-2.5 px-3">5 – 10 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Move Efficiency Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Tower of Hanoi Efficiency Tiers (Move Efficiency Ratio)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Efficiency is measured by dividing the theoretical minimal move count by your actual moves taken. Benchmark your score:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">&lt; 70% Efficiency</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Trial &amp; Error</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Frequent circular backtracking and accidental disk shuffling. Loses track of the destination sub-goal mid-sequence.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">70% – 85% Efficiency</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Strategic Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understands recursive sub-towers. Occasional 2-to-4 move deviations when shifting larger intermediate base plates.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">86% – 99% Efficiency</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Algorithmic Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Flawless alternating smallest-disk cadence. Near-perfect memory retention across 5+ disk configurations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">100% Minimal Moves</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exact theoretical minimum (e.g. exactly 31 moves for 5 disks). Zero wasted clicks and rapid mechanical execution.
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
              4 Golden Rules for 100% Minimal Move Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Memorize the First Move Direction
                </div>
                <p className="text-xs leading-relaxed">
                  Count your total disks. If the total count is odd (3, 5, 7), place disk 1 onto Peg C (Destination). If even (4, 6), place disk 1 onto Peg B (Auxiliary). This single choice guarantees a minimal path.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Maintain the Smallest Disk Cadence
                </div>
                <p className="text-xs leading-relaxed">
                  Every other move in the entire game involves Disk 1. Never move a larger disk twice in a row. Smallest disk, other disk, smallest disk, other disk—this rhythm removes decision paralysis.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Never Reverse the Previous Move
                </div>
                <p className="text-xs leading-relaxed">
                  On even-numbered turns (when moving a disk other than Disk 1), there is always exactly one legal move that does not undo the immediately preceding placement. Make that solitary move.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Visualize Sub-Towers as Single Units
                </div>
                <p className="text-xs leading-relaxed">
                  Treat the top 3 disks as a single cohesive pyramid that needs to park on the temporary peg before moving disk 4. Chunking eliminates the mental strain of tracking individual disks.
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
              Test your algorithmic reasoning, working memory, and constraint satisfaction across our puzzle suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/sudoku" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sudoku</span>
                <span className="text-xs text-muted-foreground mt-1">Constraint elimination &amp; exact cover →</span>
              </Link>
              <Link href="/make-24" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Make 24</span>
                <span className="text-xs text-muted-foreground mt-1">Arithmetic combinatorial logic →</span>
              </Link>
              <Link href="/sliding-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sliding Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Permutation parity &amp; 15-puzzle →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
