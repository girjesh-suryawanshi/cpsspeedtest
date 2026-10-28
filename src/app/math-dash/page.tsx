import { GameSEO } from "@/components/game-seo";
import { MathDash } from "@/components/games/math-dash";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Zap, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Calculator, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Math Dash – 60-Second Speed Arithmetic Sprint & Brain Training | CpsSpeedTest",
  description: "Test your mental calculation speed with Math Dash. Solve escalating arithmetic equations (+, -, *, /) under a 60-second countdown. Benchmark mental calculation fluency.",
  keywords: ["math dash", "mental math", "speed math", "brain training", "math game", "arithmetic practice", "calculation speed", "60 second math sprint", "numpad math test"],
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

const mathDashHowToSteps = [
  {
    name: "Position Hand on Numeric Keypad",
    text: "Desktop users should place their right hand on the physical Numpad with index on 4, middle on 5, ring on 6, and pinky hovering over Enter."
  },
  {
    name: "Initiate the 60-Second Sprint",
    text: "Click Start or press Enter/Spacebar to begin the 60-second timer. The first randomized arithmetic equation displays instantly."
  },
  {
    name: "Compute Solutions Mentally Left-to-Right",
    text: "Calculate additions, subtractions, multiplications, and divisions using mental math decomposition without relying on scratch paper."
  },
  {
    name: "Input Answers with Rapid Enter Submissions",
    text: "Type your numerical solution into the input field and press Enter. The game engine validates responses in sub-millisecond real time."
  },
  {
    name: "Adapt to Progressive Equation Difficulty",
    text: "As correct answers accumulate, the equation complexity progressively scales from single-digit operations to double-digit mixed factors."
  },
  {
    name: "Review Final Calculation Fluency Score",
    text: "When the 60-second countdown expires, inspect your total correct equations, accuracy percentage, and average response latency per problem."
  }
];

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
  },
  {
    question: "How does Math Dash handle incorrect submissions?",
    answer: "Incorrect submissions immediately clear the input box and display a brief visual indicator, allowing you to re-type or advance. Maintaining 95%+ accuracy is vital because erroneous inputs waste 1 to 2 seconds of the 60-second countdown."
  },
  {
    question: "How does speed math training assist in standardized exams (SAT, GMAT, GRE)?",
    answer: "Standardized quantitative exams place heavy time pressure on test-takers. Rapid arithmetic recall eliminates calculator dependency for intermediate steps, saving 15 to 30 seconds per problem and preventing mental fatigue during multi-hour tests."
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
        howToSteps={mathDashHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Mental Arithmetic &amp; Processing Speed</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Math Dash
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The 60-second rapid-fire arithmetic challenge. Solve addition, subtraction, multiplication, and division equations under time pressure to benchmark mental calculation fluency.
          </p>
        </header>

        {/* Interactive Game Component */}
        <div className="py-2">
          <MathDash />
        </div>

        {/* ── Section 1: Cognitive Neuroscience of Mental Math (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Neuroscience of Rapid Arithmetic Fluency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Math Dash is a timed mental arithmetic benchmark evaluating mathematical processing speed, working memory retrieval, and numerical magnitude representation. Rapid calculation engages the bilateral intraparietal sulcus (IPS) and the left angular gyrus, translating symbolic digits into quantitative operations and executing automated arithmetic retrieval in under 1,500 milliseconds.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">60 Seconds</div>
                <div className="text-xs text-muted-foreground">Sprint Duration</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">4 Operations</div>
                <div className="text-xs text-muted-foreground">+, −, ×, ÷ Arithmetic</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">25 – 35 EQ</div>
                <div className="text-xs text-muted-foreground">Proficient Baseline</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">&lt; 1.5s</div>
                <div className="text-xs text-muted-foreground">Target Problem Latency</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Under strict time decay, human working memory transitions from slow algorithmic counting (e.g. finger addition) to instantaneous semantic fact retrieval (direct arithmetic recall from long-term memory). Math Dash isolates and accelerates this neural transition.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Maximize Your Math Dash Score in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mathDashHowToSteps.map((step, idx) => (
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
                Working Memory &amp; Cognitive Throughput
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Holding two operands, an operator, and intermediate carry-over digits in mind while simultaneously preparing the motor keystroke heavily trains the central executive of working memory, expanding real-time information processing capacity.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                STEM &amp; Quantitative Academic Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Students and professionals who automate elementary arithmetic free up valuable prefrontal cognitive bandwidth for high-order conceptual analysis, advanced calculus, linear algebra, and data science algorithms.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Decision-Making Under Extreme Time Constraints
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The continuous 60-second countdown induces mild physiological stress. Repeated training desensitizes the autonomic nervous system, fostering calm, analytical clarity in high-pressure trading, emergency triage, and competitive gaming.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Fine Motor Keystroke Coordination
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Using the physical Numpad keypad builds tactile muscle memory and ballistic finger dexterity. Rapidly touch-typing numerical sequences without looking down accelerates daily spreadsheet entry and coding velocity.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Arithmetic Heuristics ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Mental Math Deconstruction Techniques &amp; Expected Latency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Arithmetic Pattern</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Mental Shortcut (Heuristic)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Example Breakdown</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Target Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Single-Digit Addition</td>
                    <td className="py-2.5 px-3">Direct long-term memory retrieval</td>
                    <td className="py-2.5 px-3 font-mono">7 + 8 = 15</td>
                    <td className="py-2.5 px-3">&lt; 0.6 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Near-Ten Addition</td>
                    <td className="py-2.5 px-3">Round up to 10/20, then subtract offset</td>
                    <td className="py-2.5 px-3 font-mono">38 + 25 = 40 + 25 - 2 = 63</td>
                    <td className="py-2.5 px-3">0.8 – 1.2 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Complement Subtraction</td>
                    <td className="py-2.5 px-3">Subtract from 100 then add remainder</td>
                    <td className="py-2.5 px-3 font-mono">100 - 37 = (9-3)(10-7) = 63</td>
                    <td className="py-2.5 px-3">0.9 – 1.4 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Distributive Multiplication</td>
                    <td className="py-2.5 px-3">Split into tens and units multiplication</td>
                    <td className="py-2.5 px-3 font-mono">14 × 6 = (10×6) + (4×6) = 60 + 24 = 84</td>
                    <td className="py-2.5 px-3">1.2 – 1.8 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Even Factor Division</td>
                    <td className="py-2.5 px-3">Halve both dividend and divisor repeatedly</td>
                    <td className="py-2.5 px-3 font-mono">96 ÷ 4 = 48 ÷ 2 = 24</td>
                    <td className="py-2.5 px-3">1.1 – 1.7 seconds</td>
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
              Math Dash 60-Second Performance Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on global test data across 50,000+ speed arithmetic sessions, benchmark your 60-second score:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">10 – 19 Equations</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Developing Speed</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Relies on mental counting or sub-vocalizing intermediate steps. Pauses when transitioning between addition and division.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">20 – 29 Equations</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Calculator</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid arithmetic fluency. Instant recall on single-digit operations with brief pauses on double-digit multiplication.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">30 – 39 Equations</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Mathlete</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-1.5 second retrieval time. Seamless distributive factoring and rapid touch-typing on the numeric keypad.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">40+ Equations</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% globally. Phenomenal numerical intuition, zero hesitation, near-100% accuracy, and instantaneous motor input.
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
              4 Proven Tips to Accelerate Mental Math Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Use the Physical Numeric Keypad (Numpad)
                </div>
                <p className="text-xs leading-relaxed">
                  Never use the top horizontal number row. The 3x3 layout of the Numpad allows one-handed touch typing with your thumb or pinky resting permanently on the Enter key.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Calculate Left-to-Right Mentally
                </div>
                <p className="text-xs leading-relaxed">
                  While school teaches right-to-left pencil calculations, mental math is fastest from left-to-right (most significant digit first). For 56 + 37, compute (50+30) = 80, then add (6+7) = 13 → 93.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Suppress Sub-Vocalization
                </div>
                <p className="text-xs leading-relaxed">
                  Avoid internally sounding out the full question like &ldquo;twenty-four times three equals...&rdquo; The inner auditory voice caps your processing speed at conversational speaking rates (~150 words/min).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Protect Accuracy Over Wild Guessing
                </div>
                <p className="text-xs leading-relaxed">
                  A wrong submission wastes valuable seconds re-clearing and typing. Operating at a steady 98% accuracy beats rushing at 75% accuracy every single time.
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

        {/* ── Section 8: Related Cognitive & Logic Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Quantitative &amp; Cognitive Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your numerical reasoning, working memory, and mental calculation speed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/math-quiz" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Math Quiz</span>
                <span className="text-xs text-muted-foreground mt-1">Rapid arithmetic speed quiz →</span>
              </Link>
              <Link href="/make-24" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Make 24</span>
                <span className="text-xs text-muted-foreground mt-1">Combinatorial 4-card arithmetic →</span>
              </Link>
              <Link href="/number-memory-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Number Memory</span>
                <span className="text-xs text-muted-foreground mt-1">Digit span working memory test →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
