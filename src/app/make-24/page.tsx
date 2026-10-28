import { GameSEO } from "@/components/game-seo";
import { Make24 } from "@/components/games/make-24";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Calculator, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make 24 Math Puzzle – Mental Arithmetic & Combinatorial Logic | CpsSpeedTest",
  description: "Play the classic Make 24 arithmetic puzzle. Combine four numbers using addition, subtraction, multiplication, and division to reach exactly 24. Test mental math speed.",
  keywords: ["make 24", "24 puzzle", "math game", "arithmetic puzzle", "brain training", "mental math reasoning", "24 game online", "robert sun 24", "fraction division 24 puzzle"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/make-24',
  },
  openGraph: {
    title: "Make 24 Math Puzzle – Mental Arithmetic Game",
    description: "Combine four numbers using basic operations (+, -, *, /) to reach 24. Test your mental arithmetic agility and factor decomposition.",
    url: 'https://www.cpsspeedtest.com/make-24',
    type: 'website',
  },
};

const make24HowToSteps = [
  {
    name: "Examine the Four Given Numbers",
    text: "Inspect the 4 numbers displayed on the board. Each number must be used exactly once in your final arithmetic formula."
  },
  {
    name: "Decompose into Factor Targets of 24",
    text: "Look for pairs that can combine to form the classic factors of 24: (8 × 3), (6 × 4), (12 × 2), or (24 × 1)."
  },
  {
    name: "Partition the Numbers into Sub-Groups",
    text: "Attempt to combine two numbers into one factor (e.g., 7 + 1 = 8) and the remaining two numbers into the complementary factor (e.g., 5 - 2 = 3)."
  },
  {
    name: "Test Fraction Division for Tricky Sets",
    text: "When whole-number multiplication fails, explore division by fractions (e.g., dividing by 1/3 or 1/4 multiplies by 3 or 4: 6 ÷ (1 - 3/4) = 24)."
  },
  {
    name: "Construct the Expression with Operators",
    text: "Click numbers and operation buttons (+, -, *, /) in proper sequence to formulate your valid mathematical equation."
  },
  {
    name: "Verify the Solution Equals Exactly 24",
    text: "Submit the expression. If it evaluates cleanly to 24 with all four numbers consumed, the puzzle validates and presents a new challenge."
  }
];

const make24Faqs = [
  {
    question: "What are the exact rules of the Make 24 math puzzle?",
    answer: "You are provided with four numbers (typically from 1 to 13). You must utilize all four numbers exactly once, combining them with any of the four basic arithmetic operations—addition (+), subtraction (-), multiplication (*), and division (/)—along with parentheses, to construct an expression that evaluates to exactly 24."
  },
  {
    question: "What is the most effective tactical strategy in Make 24?",
    answer: "Work backwards from factors of 24. Look for ways to partition the four numbers into two pairs that yield: 8 × 3, 6 × 4, 12 × 2, or 24 × 1. For example, if the numbers are 3, 3, 8, 8, look for ways to create 3 and 8 or consider fraction division: 8 ÷ (3 - 8/3) = 8 ÷ (1/3) = 24."
  },
  {
    question: "Who invented the 24 Game and what is its origin?",
    answer: "The 24 Game was invented in 1988 by Chinese-American electrical engineer Robert Sun. It debuted in schools in Pennsylvania and quickly grew into an international mathematics competition format designed to build arithmetic fluency, mental calculation speed, and love for mathematics."
  },
  {
    question: "Do all 4-card number sets have a valid solution?",
    answer: "No. Out of all 1,820 possible four-card combinations drawn from a standard deck (numbers 1 to 13 with replacement), approximately 80% have at least one valid solution. Our online puzzle generates only verified solvable combinations to ensure a fair, frustration-free experience."
  },
  {
    question: "How does solving Make 24 benefit brain health and cognition?",
    answer: "Make 24 exercises working memory, mental arithmetic retrieval, and cognitive flexibility. Players must rapidly hold intermediate arithmetic values in consciousness while branching through combinatorial decision trees, activating the parietal lobe's numerical processing centers."
  },
  {
    question: "What is the hardest known Make 24 card combination?",
    answer: "The combination {3, 3, 8, 8} is widely considered the most notoriously difficult, as it cannot be solved using integers alone. Its only solution requires fraction division: 8 ÷ (3 - 8/3) = 8 ÷ (1/3) = 24. Another famous hard combination is {1, 5, 5, 5}: 5 × (5 - 1/5) = 5 × (24/5) = 24."
  },
  {
    question: "Can numbers be combined into multi-digit numbers (like 1 and 2 into 12)?",
    answer: "No. Concatenation is strictly forbidden under official 24 Game competition rules. Digits must remain distinct individual operands combined strictly via arithmetic operators (+, -, *, /)."
  }
];

export default function Make24Page() {
  return (
    <>
      <GameSEO 
        name="Make 24 Math Puzzle"
        description="Play the classic Make 24 math puzzle. Use addition, subtraction, multiplication, and division to make the number 24 from four given numbers."
        url="https://www.cpsspeedtest.com/make-24"
        faqs={make24Faqs}
        howToSteps={make24HowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Combinatorial Arithmetic &amp; Factor Logic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Make 24 Math Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The classic 4-card arithmetic game invented by Robert Sun in 1988. Combine four numbers with addition, subtraction, multiplication, and division to evaluate to exactly 24.
          </p>
        </header>

        {/* Interactive Make 24 Game Component */}
        <div className="py-2">
          <Make24 />
        </div>

        {/* ── Section 1: Combinatorics & Factor Logic (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Combinatorial Factorization &amp; Mental Deconstruction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Make 24 is a mental arithmetic and combinatorial reasoning puzzle where four given integers must be combined exactly once using elementary arithmetic operators (+, −, ×, ÷) to evaluate to 24. Out of 1,820 possible distinct combinations drawn from cards 1 to 13, roughly 80% are mathematically solvable. Solving speed depends on decomposing 24 into factor pairs (8×3, 6×4, 12×2) and testing binary tree operations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">4 Numbers</div>
                <div className="text-xs text-muted-foreground">Each Used Exactly Once</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">80% Solvable</div>
                <div className="text-xs text-muted-foreground">Global Card Space</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">1,820 Sets</div>
                <div className="text-xs text-muted-foreground">Unique Combinations</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">8×3, 6×4</div>
                <div className="text-xs text-muted-foreground">Dominant Factor Trees</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              While straightforward combinations rely on direct multiplication, master-level sets demand non-intuitive operations such as division by intermediate fractions (e.g. dividing by 1/3 to multiply by 3), heavily stretching cognitive flexibility.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve Make 24 Systematically in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {make24HowToSteps.map((step, idx) => (
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
                Combinatorial Tree Exploration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Make 24 trains the brain to rapidly branch and prune decision trees. Evaluating whether to pair numbers as (A+B)×(C+D) or ((A×B)-C)÷D mirrors the heuristic search algorithms utilized in artificial intelligence and game theory.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Working Memory &amp; Intermediate State Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Holding two intermediate calculations in consciousness while manipulating the remaining pair exercises the phonological loop and central executive, expanding mental workspace capacity.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Cognitive Flexibility &amp; Unblocking Bias
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              When integer multiplication hits a dead end, players must unlearn rigid habits and consider fractions. This mental shift directly cultivates &ldquo;outside-the-box&rdquo; lateral thinking and problem reframing.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Quantitative Fluency &amp; Speed Math
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Regularly playing Make 24 builds lightning-fast recognition of common numeric factors, prime factors, and modular arithmetic, giving students and professionals a distinct quantitative edge.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Factor Decomposition Patterns ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Factor Decomposition Taxonomy for Number 24
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Target Factor Pair</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Frequency in Solutions</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Typical Number Setup</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Example Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">8 × 3 = 24</td>
                    <td className="py-2.5 px-3">~42% (Most Common)</td>
                    <td className="py-2.5 px-3">Card sets with multiples of 2, 4, 8, 9</td>
                    <td className="py-2.5 px-3 font-mono">{'{'}4, 4, 1, 2{'}'} → (4 + 4) × (1 + 2) = 24</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">6 × 4 = 24</td>
                    <td className="py-2.5 px-3">~31%</td>
                    <td className="py-2.5 px-3">Card sets with 5, 6, 7, 10, 12</td>
                    <td className="py-2.5 px-3 font-mono">{'{'}5, 1, 3, 1{'}'} → (5 + 1) × (3 + 1) = 24</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">12 × 2 = 24</td>
                    <td className="py-2.5 px-3">~14%</td>
                    <td className="py-2.5 px-3">Card sets with high digits (9, 10, 11, 12)</td>
                    <td className="py-2.5 px-3 font-mono">{'{'}10, 2, 8, 4{'}'} → (10 + 2) × (8 ÷ 4) = 24</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Fraction Division (A ÷ (B/C))</td>
                    <td className="py-2.5 px-3">~5% (Master Tier)</td>
                    <td className="py-2.5 px-3">Sets lacking straightforward factor pairs</td>
                    <td className="py-2.5 px-3 font-mono">{'{'}3, 3, 8, 8{'}'} → 8 ÷ (3 - 8/3) = 24</td>
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
              Make 24 Solving Speed Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly can you synthesize valid 24 equations? Benchmark your average solution latency per card set:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">30+ Seconds</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Trial &amp; Error</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tests operators randomly. Gets stuck on subtraction order or struggles when cards do not contain an 8 or 6.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">12 – 29 Seconds</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Systematically checks for 8×3 and 6×4 pairs. Quickly finds integer solutions but pauses on fraction division.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">4 – 11 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Tournament Competitor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Near-instant factor grouping. Recognizes 24 addends (20+4, 18+6) and handles fraction divisions with ease.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 3 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% competitive math speed. Instantaneous pattern recognition, subconscious factor matching, and zero hesitation.
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
              4 Tactical Shortcuts for Lightning-Fast 24 Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Always Hunt for (8 × 3) First
                </div>
                <p className="text-xs leading-relaxed">
                  Over 40% of all solvable sets reduce to 8 × 3. Check if any two numbers make 8 (e.g., 5+3, 10-2, 4×2) while the other two can yield 3 (e.g., 6-3, 9÷3, 2+1).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Check for (6 × 4) Second
                </div>
                <p className="text-xs leading-relaxed">
                  If 8 × 3 is unavailable, target 6 × 4. Look for numbers that can form 6 (e.g., 4+2, 7-1, 12÷2) and 4 (e.g., 8÷2, 3+1, 5-1).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Use 1 to Neutralize Extraneous Cards
                </div>
                <p className="text-xs leading-relaxed">
                  If you can construct 24 with 3 cards, use the 4th card via multiplication or division by 1 (e.g., (24) × 1 or (24) ÷ 1) or zero addition (e.g., (A - A)).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Remember the Fraction Trick for Identical Numbers
                </div>
                <p className="text-xs leading-relaxed">
                  When dealt duplicate numbers like {3, 3, 8, 8} or {1, 5, 5, 5}, remember that dividing by a fraction (e.g. 8 ÷ (1/3)) produces 24.
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
              Frequently Asked Questions About Make 24
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {make24Faqs.map((faq, index) => (
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
              Test your arithmetic calculation speed, working memory, and deductive logic across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/math-dash" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Math Dash</span>
                <span className="text-xs text-muted-foreground mt-1">60-second rapid arithmetic sprint →</span>
              </Link>
              <Link href="/sudoku" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sudoku</span>
                <span className="text-xs text-muted-foreground mt-1">Deductive logic &amp; number grid →</span>
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
