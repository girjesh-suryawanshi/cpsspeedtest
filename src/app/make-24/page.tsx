import { GameSEO } from "@/components/game-seo";
import { Make24 } from "@/components/games/make-24";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Calculator, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make 24 Math Puzzle – Mental Arithmetic & Combinatorial Logic | CpsSpeedTest",
  description: "Play the classic Make 24 arithmetic puzzle. Combine four numbers using addition, subtraction, multiplication, and division to reach exactly 24. Test mental math speed.",
  keywords: ["make 24", "24 puzzle", "math game", "arithmetic puzzle", "brain training", "mental math reasoning", "24 game online", "robert sun 24"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/make-24',
  },
  openGraph: {
    title: "Make 24 Math Puzzle – Mental Arithmetic Game",
    description: "Combine four numbers using basic operations (+, -, *, /) to reach 24. Test your mental arithmetic agility.",
    url: 'https://www.cpsspeedtest.com/make-24',
    type: 'website',
  },
};

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
    question: "Who invented the 24 Game?",
    answer: "The 24 Game was invented in 1988 by Chinese-American electrical engineer Robert Sun. It debuted in schools in Pennsylvania and quickly grew into an international mathematics competition format designed to build arithmetic fluency and mental calculation speed."
  },
  {
    question: "Do all 4-card number sets have a valid solution?",
    answer: "No. Out of all 1,820 possible four-card combinations drawn from a standard deck (numbers 1 to 13 with replacement), approximately 80% have at least one valid solution. Our online puzzle generates only verified solvable combinations to ensure fairness."
  },
  {
    question: "How does solving Make 24 benefit brain health?",
    answer: "Make 24 exercises working memory, mental arithmetic retrieval, and cognitive flexibility. Players must rapidly hold intermediate arithmetic values in consciousness while branching through combinatorial decision trees, activating the parietal lobe's numerical processing centers."
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
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Combinatorial Arithmetic &amp; Number Fluency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Make 24 Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Four numbers, four operations (+, -, *, /), one exact target: 24. Use every number exactly once and solve the arithmetic equation as fast as you can.
          </p>
        </header>

        {/* Make 24 Interactive Game */}
        <div className="py-2">
          <Make24 />
        </div>

        {/* ── Section 1: Combinatorial Math & Factor Targeting (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematics of 24: Target Factorization &amp; Heuristics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Why is <strong>24</strong> the universal target for arithmetic card games? Mathematically, 24 is an extraordinarily composite number. In fact, 24 has eight positive divisors: 1, 2, 3, 4, 6, 8, 12, and 24. This exceptional divisibility means that four random integers have numerous algebraic pathways to reach 24.
            </p>
            <p>
              To solve cards in under 5 seconds, master the three primary algebraic heuristics:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Factor Pairs (The 8x3 &amp; 6x4 Anchors):</strong> Scan the four numbers to see if you can form an 8 and a 3, or a 6 and a 4. For instance, with {`[2, 4, 6, 9]`}: (9 - 6) = 3 and (4 × 2) = 8, giving 3 × 8 = 24.
              </li>
              <li>
                <strong className="text-foreground">Additive / Subtractive Anchors (25 - 1, 20 + 4):</strong> If you have a 5 and 5, you can create 25, then look to subtract 1 using the remaining two numbers.
              </li>
              <li>
                <strong className="text-foreground">Fractional Division (The Grandmaster Technique):</strong> When whole-number multiplication fails, look for divisions that produce fractions: $A \div (1 - B/C)$. For example, with {`[3, 3, 7, 7]`}: $7 \times (3 + 3/7) = 24$.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Speed Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Make 24 Solving Speed Tiers (Per Card)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How fast is your mental arithmetic calculation? Compare your average solving speed per puzzle:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">30+ Seconds</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Trial &amp; Error</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tests random permutations without structured factoring. Frequent dead ends on cards lacking obvious 6 or 4 digits.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">15 – 29 Seconds</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Calculator</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Reliably spots 8x3 and 6x4 factor targets. Easily solves medium cards and recognizes common additive combinations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">6 – 14 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Competitive Mathletes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast algebraic factoring. Instantly recognizes multi-step parentheses groupings and inverse multiplication paths.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 5 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Mental Math Prodigy</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% arithmetic fluency. Instant pattern recognition of all 1,820 card combinations, including fractional solutions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Training Tips & Math Agility ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Mental Math Speed Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Eliminate Redundant Pairs:</strong> If you have two identical numbers (e.g., two 4s), see if dividing them yields 1 (e.g. 4/4 = 1) or multiplying them yields 16.
                </li>
                <li>
                  <strong className="text-foreground">Preserve the Target Factor:</strong> If you already have an 8, immediately check if the other three numbers can form a 3 (e.g. 7 - 5 + 1 = 3).
                </li>
                <li>
                  <strong className="text-foreground">Speed Sprint Practice:</strong> Test your raw calculation speed on our <Link href="/math-dash" className="text-primary hover:underline">Math Dash</Link> sprint.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Number &amp; Logic Puzzles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Sharpen numerical reasoning and working memory across our cognitive tests:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/sudoku" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sudoku</span>
                  <span className="text-primary font-mono">Deductive Elimination →</span>
                </Link>
                <Link href="/number-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Number Memory Test</span>
                  <span className="text-primary font-mono">Digit Span Working Memory →</span>
                </Link>
                <Link href="/math-dash" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Math Dash</span>
                  <span className="text-primary font-mono">Speed Arithmetic Sprint →</span>
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
      </div>
    </>
  );
}
