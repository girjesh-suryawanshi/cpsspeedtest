import { GameSEO } from "@/components/game-seo";
import { MathDash } from "@/components/games/math-dash";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Zap, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Calculator } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Math Dash – 60-Second Speed Arithmetic Sprint & Brain Training | CpsSpeedTest",
  description: "Test your mental calculation speed with Math Dash. Solve escalating arithmetic equations (+, -, *, /) under a 60-second countdown. Benchmark mental calculation fluency.",
  keywords: ["math dash", "mental math", "speed math", "brain training", "math game", "arithmetic practice", "calculation speed", "60 second math sprint"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/math-dash',
  },
  openGraph: {
    title: "Math Dash – 60-Second Speed Arithmetic Sprint",
    description: "Benchmark your mental math calculation speed and numerical retrieval fluency across a 60-second progressive sprint.",
    url: 'https://www.cpsspeedtest.com/math-dash',
    type: 'website',
  },
};

const mathDashFaqs = [
  {
    question: "How does Math Dash train rapid mental calculation?",
    answer: "Math Dash presents rapidly cycling arithmetic problems (+, -, *, /) under a strict 60-second countdown. As correct answers accumulate, the game progressively scales problem complexity—advancing from single-digit operations to double-digit mixed operations—forcing the brain to optimize numerical retrieval pathways."
  },
  {
    question: "What is considered an impressive score on the 60-second Math Dash sprint?",
    answer: "Solving 20 to 29 equations correctly within 60 seconds reflects strong everyday arithmetic fluency. Scores of 30 to 39 indicate advanced mental calculation capability, while solving 40+ equations places a participant in the top 2% of competitive mental mathletes."
  },
  {
    question: "How does mental calculation improve general cognitive function?",
    answer: "Speed arithmetic heavily exercises the dorsolateral prefrontal cortex (working memory) and the intraparietal sulcus (numerical magnitude representation). Regular practice accelerates cognitive processing speed, improves focus under time pressure, and strengthens quantitative problem-solving."
  },
  {
    question: "Can I use the keyboard numpad for faster answer input?",
    answer: "Yes. Desktop users are strongly advised to use the physical numeric keypad (Numpad) with the right hand while resting the thumb or pinky on the Enter key. This tactile layout allows touch-typing answers in sub-200ms without glancing down."
  },
  {
    question: "What mental math shortcuts help increase speed in Math Dash?",
    answer: "Key heuristics include: rounding to the nearest ten and compensating (e.g. 47 + 28 = 47 + 30 - 2 = 75), decomposing multiplication into distributive parts (e.g. 14 × 6 = 10×6 + 4×6 = 84), and utilizing complementary subtraction from 100."
  }
];

export default function MathDashPage() {
  return (
    <>
      <GameSEO 
        name="Math Dash"
        description="Test your mental math skills with Math Dash. Solve as many arithmetic equations as you can in 60 seconds! Benchmark your calculation speed."
        url="https://www.cpsspeedtest.com/math-dash"
        faqs={mathDashFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Velocity Mental Arithmetic Sprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Math Dash
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            How fast is your internal calculator? Solve rapidly escalating addition, subtraction, multiplication, and division equations under a 60-second countdown.
          </p>
        </header>

        {/* Math Dash Interactive Game */}
        <div className="py-2">
          <MathDash />
        </div>

        {/* ── Section 1: The Neuroscience of Mental Arithmetic (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Neuroscience of Speed Math: Number Fact Retrieval
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In educational psychology, mental calculation relies on two distinct cognitive architectures: <strong>arithmetic fact retrieval</strong> (direct memory lookup from the left angular gyrus for basic single-digit math) and <strong>algorithmic procedural computation</strong> (executive working memory manipulation in the intraparietal sulcus for complex multi-step problems).
            </p>
            <p>
              In a 60-second sprint like Math Dash, your brain learns to shift procedural calculations into automatic fact retrieval. Instead of manually counting <code>7 + 8 = 7 + 3 + 5 = 15</code>, consistent speed training creates an immediate, reflexive neural pathway connecting the visual stimulus &quot;7 + 8&quot; directly to motor execution of &quot;15&quot;.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Calculations Per Minute ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Math Dash Score Tiers &amp; Accuracy Percentiles (60s Sprint)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How many arithmetic problems can your brain solve in one minute? Compare your performance against global community benchmarks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 15 Solved</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Developing Speed</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Average time per equation &gt;4 seconds. Relies on finger counting or procedural addition for multi-digit equations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">16 – 28 Solved</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Fluency</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Average time 2.1–3.5s per equation. Fast single-digit retrieval; mild hesitation on mixed multiplication and division.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">29 – 39 Solved</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Mental Mathlete</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-2s per equation. Fluent decomposition strategies. Strong numpad touch typing with high accuracy (&gt;95%).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">40+ Solved</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Calculator</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% elite calculation speed. Instantaneous subconscious answer generation under 1.5 seconds per problem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Speed Calculation Heuristics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Calculator className="w-4 h-4 text-primary" />
                Three Essential Mental Math Shortcuts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Left-to-Right Addition:</strong> For two-digit numbers, add the tens column first, then the units (e.g. 56 + 37: 50+30=80, 6+7=13, 80+13=93). This matches how the brain reads numbers.
                </li>
                <li>
                  <strong className="text-foreground">Factor Pairs for Multiplication:</strong> Multiply by 4 by doubling twice. Multiply by 5 by halving the number and adding a zero (e.g. 18 × 5 = 9 × 10 = 90).
                </li>
                <li>
                  <strong className="text-foreground">Touch-Type the Numpad:</strong> Rest your middle finger on the 5-key tactile bump to submit answers without looking down.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Related Mathematical &amp; Logic Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Continue training quantitative fluency and algorithmic problem solving:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/make-24" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Make 24</span>
                  <span className="text-primary font-mono">Algebraic Combinatorics →</span>
                </Link>
                <Link href="/math-quiz" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Math Quiz</span>
                  <span className="text-primary font-mono">Targeted Arithmetic Sprint →</span>
                </Link>
                <Link href="/number-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Number Memory Test</span>
                  <span className="text-primary font-mono">Digit Span Working Memory →</span>
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
              Frequently Asked Questions About Math Dash
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {mathDashFaqs.map((faq, index) => (
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
