import { GameSEO } from "@/components/game-seo";
import { MathQuiz } from "@/components/math-quiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Calculator, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Math Quiz – 60-Second Rapid Arithmetic & Calculation Speed Test | CpsSpeedTest',
  description: 'Challenge your mental arithmetic on our 60-second Math Quiz. Solve rapid-fire addition, subtraction, and multiplication equations. Benchmark speed and accuracy.',
  keywords: ['math quiz', 'mental arithmetic quiz', 'math speed test', 'rapid math test', '60 second math challenge', 'brain training math', 'arithmetic calculation test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/math-quiz',
  },
  openGraph: {
    title: 'Math Quiz – 60-Second Rapid Arithmetic Speed Test',
    description: 'Solve as many mental math equations as possible in 60 seconds. Benchmark your calculation rate and accuracy against global averages.',
    url: 'https://www.cpsspeedtest.com/math-quiz',
    type: 'website',
  },
};

const mathQuizFaqs = [
  {
    question: "What types of operations are featured in the 60-second Math Quiz?",
    answer: "The Math Quiz presents randomized fundamental operations including addition, subtraction, and single-to-double digit multiplication. The engine prioritizes mental agility by delivering clear, integer-based solutions that can be computed without scratch paper."
  },
  {
    question: "What is an average score on this 60-second arithmetic quiz?",
    answer: "Most adult computer users and students solve between 18 and 26 problems correctly within 60 seconds. Reaching 30 to 39 problems indicates superior mental calculation fluency, while scores above 40 place you in the top 2% of speed math competitors."
  },
  {
    question: "How does the quiz handle incorrect answers?",
    answer: "If you submit an incorrect answer, the quiz immediately clears the field and advances to the next equation without awarding a point. Maintaining 95%+ accuracy is vital, as guessing wastes precious seconds typing and submitting erroneous values."
  },
  {
    question: "How can students use this quiz for standardized test prep?",
    answer: "Standardized examinations (such as SAT, ACT, GMAT, and GRE) require fast quantitative reasoning under severe time constraints. Practicing 5 to 10 minutes daily on this quiz eliminates mental fatigue during non-calculator sections and prevents simple computational blunders."
  },
  {
    question: "What is the fastest way to input answers on desktop keyboards?",
    answer: "Use your right hand exclusively on the dedicated Numpad keypad (with the middle finger resting on the 5-key anchor) and press Enter with your pinky finger. This allows you to submit answers in less than 200 milliseconds per problem."
  }
];

export default function MathQuizPage() {
  return (
    <>
      <GameSEO 
        name="Math Quiz"
        description="Challenge your mental arithmetic on our 60-second Math Quiz. Solve rapid-fire math problems and benchmark your calculation speed."
        url="https://www.cpsspeedtest.com/math-quiz"
        faqs={mathQuizFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>60-Second Rapid-Fire Arithmetic Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Math Quiz
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Test your mental math agility under pressure. Solve as many addition, subtraction, and multiplication problems as possible before the 60-second timer hits zero.
          </p>
        </header>

        {/* Math Quiz Component */}
        <div className="py-2">
          <MathQuiz />
        </div>

        {/* ── Section 1: The Physiology of Mental Calculation (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Cognitive Architecture of Rapid Mental Calculation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              When a math problem appears on screen, your brain executes a rapid sequence of neural operations: optical character recognition in the visual cortex, translation into mathematical magnitude representations in the <em>intraparietal sulcus (IPS)</em>, and retrieval of stored arithmetic associations from the <em>left angular gyrus</em>.
            </p>
            <p>
              The <strong>60-Second Math Quiz</strong> tests the throughput efficiency of this neural pipeline. By working under time pressure, you condition your brain to bypass slow vocalized deliberation and access quantitative facts directly through reflexive memory.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Calculations Per Minute ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Math Quiz Performance Tiers &amp; Accuracy Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where do your mental calculation capabilities rank? Compare your total correctly solved problems in 60 seconds against community statistics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 15 Correct</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Foundational Level</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Requires 4+ seconds per equation. The solver sub-vocalizes full steps and experiences hesitation on multiplication tables.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">16 – 26 Correct</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Benchmark</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid arithmetic fluency (2.3–3.7 seconds per equation). Fluid addition and subtraction with high overall accuracy.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">27 – 38 Correct</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Speed Mathlete</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 10% calculation velocity. Fast procedural shortcuts, instantaneous multiplication recall, and clean keyboard rhythm.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">39+ Correct</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Prodigy / Elite Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% international math competition level. Sub-1.5 second instantaneous calculation with flawless accuracy under pressure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Speed Math Techniques ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Mental Arithmetic Shortcuts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Near-Tens Compensation:</strong> When adding or subtracting 9, 8, 19, or 28, round to the nearest 10 and adjust by the difference (e.g., 64 - 19 = 64 - 20 + 1 = 45).
                </li>
                <li>
                  <strong className="text-foreground">Splitting Multipliers:</strong> Break difficult multiplication into distributive halves (e.g. 16 × 7 = (10 × 7) + (6 × 7) = 70 + 42 = 112).
                </li>
                <li>
                  <strong className="text-foreground">Never Dwell on Misses:</strong> If an answer doesn&apos;t come immediately within 3 seconds, make an educated guess and proceed to the next question to maintain your overall velocity.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Cognitive &amp; Number Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Cross-train your numerical calculation with logic and memory benchmarks:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/math-dash" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Math Dash</span>
                  <span className="text-primary font-mono">Progressive Complexity Sprint →</span>
                </Link>
                <Link href="/make-24" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Make 24</span>
                  <span className="text-primary font-mono">Four-Number Combinatorics →</span>
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
              Frequently Asked Questions About the Math Quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {mathQuizFaqs.map((faq, index) => (
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
