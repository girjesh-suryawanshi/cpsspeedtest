import { GameSEO } from "@/components/game-seo";
import { MathQuiz } from "@/components/math-quiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Calculator, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Math Quiz – 60-Second Rapid Arithmetic & Calculation Speed Test | CpsSpeedTest',
  description: 'Challenge your mental arithmetic on our 60-second Math Quiz. Solve rapid-fire addition, subtraction, and multiplication equations. Benchmark speed and accuracy.',
  keywords: ['math quiz', 'mental arithmetic quiz', 'math speed test', 'rapid math test', '60 second math challenge', 'brain training math', 'arithmetic calculation test', 'standardized test math prep'],
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

const mathQuizHowToSteps = [
  {
    name: "Anchor at the Numpad Keypad",
    text: "Position your right hand with the middle finger resting on the tactile bump of the 5-key on your physical numeric keypad, thumb or pinky on Enter."
  },
  {
    name: "Click Start to Trigger the 60s Timer",
    text: "Press Start to begin the 60-second countdown. The first randomized arithmetic equation will render instantly in high contrast."
  },
  {
    name: "Perform Rapid Mental Synthesis",
    text: "Read the operands and operation (+, -, *, /) simultaneously. Compute the integer answer mentally without looking away from the screen."
  },
  {
    name: "Touch-Type and Submit with Enter",
    text: "Enter your solution on the numpad and strike Enter immediately. The validation engine registers inputs with zero latency."
  },
  {
    name: "Maintain an Unbroken Solving Rhythm",
    text: "Avoid hesitations. If you encounter a complex double-digit multiplication, apply distributive decomposition (e.g., 18×4 = 10×4 + 8×4 = 72)."
  },
  {
    name: "Evaluate Final Velocity & Accuracy Metrics",
    text: "Review your completed equations, correct submission percentage, and average milliseconds per problem upon timer expiration."
  }
];

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
  },
  {
    question: "How does Math Quiz differ from Math Dash?",
    answer: "While Math Dash features progressive difficulty escalation that introduces complex multi-step fractions and division, Math Quiz focuses heavily on pure cadence, rapid-fire integer operations, and standardized calculation speed benchmarks."
  },
  {
    question: "Does mental arithmetic practice prevent age-related cognitive decline?",
    answer: "Yes. Neuroimaging studies demonstrate that rapid mental calculation activates fronto-parietal neural networks responsible for working memory and fluid intelligence, preserving neural plasticity and cognitive processing speed as you age."
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
        howToSteps={mathQuizHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Mental Arithmetic Speed Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Math Quiz
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Solve as many mental arithmetic equations as possible in 60 seconds. Test numerical fluency, calculation velocity, and precision under time pressure.
          </p>
        </header>

        {/* Interactive Math Quiz Component */}
        <div className="py-2">
          <MathQuiz />
        </div>

        {/* ── Section 1: Quantitative Fluency & AEO ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Science of Rapid Numerical Calculation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Math Quiz is an empirical calculation rate test designed to evaluate mathematical fluency, working memory retrieval, and cognitive processing velocity. By solving randomized addition, subtraction, and multiplication equations under a 60-second countdown, participants activate the intraparietal sulcus and bilateral prefrontal cortices, converting symbolic numbers into immediate motor responses.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">60 Seconds</div>
                <div className="text-xs text-muted-foreground">Standardized Test Window</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">22 – 28 EQ</div>
                <div className="text-xs text-muted-foreground">Average Adult Baseline</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">95%+</div>
                <div className="text-xs text-muted-foreground">Optimal Target Accuracy</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">&lt; 1.8s</div>
                <div className="text-xs text-muted-foreground">Average Problem Pace</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Standardized tests such as the SAT, GMAT, and GRE place severe penalties on slow calculation. Automating simple integer arithmetic frees up vital executive bandwidth, enabling test-takers to focus entirely on high-level quantitative problem modeling.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Excel in the 60-Second Math Quiz in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mathQuizHowToSteps.map((step, idx) => (
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
                Working Memory &amp; Cognitive Resilience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Holding two operands and performing mental carryovers without scratch paper directly exercises the phonological loop and central executive, enhancing general fluid intelligence and analytical reasoning.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Standardized Exam Fluency (GMAT, GRE, SAT)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In non-calculator exam sections, manual calculations represent the leading cause of time deficits and minor arithmetic errors. Training daily eliminates computational hesitation and builds test-day confidence.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Stress Inoculation &amp; Composure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Practicing under an active countdown clock conditions the brain to maintain executive composure during high-stakes deadlines, financial trading decisions, and rapid workplace problem-solving.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Tactile Numpad Typing Precision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mastering touch-typing on the numeric keypad translates into massive productivity gains for accounting, spreadsheet modeling, data entry, and software engineering.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Operation Types & Cognitive Demands ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Operation Taxonomy &amp; Processing Demands
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Operation</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Typical Range</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Cognitive Pathway</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Common Error Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Direct Addition</td>
                    <td className="py-2.5 px-3">1 + 1 to 99 + 99</td>
                    <td className="py-2.5 px-3">Direct fact retrieval + left-to-right tens sum</td>
                    <td className="py-2.5 px-3">Off-by-ten errors during carryover</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Subtractive Borrowing</td>
                    <td className="py-2.5 px-3">15 - 8 to 98 - 49</td>
                    <td className="py-2.5 px-3">Complementary arithmetic from nearest decade</td>
                    <td className="py-2.5 px-3">Forgetting to decrement the tens digit</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Multiplication Table</td>
                    <td className="py-2.5 px-3">2 × 2 to 12 × 12</td>
                    <td className="py-2.5 px-3">Automated verbal memory recall (auditory cortex)</td>
                    <td className="py-2.5 px-3">Confusion between adjacent multiples (7×8 vs 7×9)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Mixed Operations</td>
                    <td className="py-2.5 px-3">Alternating operators</td>
                    <td className="py-2.5 px-3">Executive cognitive task switching</td>
                    <td className="py-2.5 px-3">Applying addition operator to a subtraction problem</td>
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
              Math Quiz 60-Second Performance Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Benchmark your 60-second score against standardized performance distributions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">10 – 17 Equations</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Foundational</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hesitates on mental borrow/carry operations. May glance down at keyboard keys while typing answers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">18 – 27 Equations</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Average</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid calculation speed. Consistent on single-digit multiplication and rapid on standard addition.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">28 – 38 Equations</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Competitive Mathlete</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-1.8 second average submission speed. Seamless numpad touch-typing and near-perfect accuracy.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">39+ Equations</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% globally. Instantaneous semantic retrieval, flawless composure, and hyper-rapid numpad entry.
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
              4 Proven Tips to Boost Your Arithmetic Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Anchor to the Numpad 5-Key
                </div>
                <p className="text-xs leading-relaxed">
                  Feel for the tactile physical ridge on the 5 key with your right middle finger. Rest your pinky on Enter so you can submit answers without moving your wrist.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Deconstruct Multiplication Mentally
                </div>
                <p className="text-xs leading-relaxed">
                  When faced with 17 × 4, calculate (10 × 4) = 40 and (7 × 4) = 28, then combine 40 + 28 = 68. Breaking numbers into manageable chunks is faster than brute-force memorization.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Work Left-to-Right for Rapid Addition
                </div>
                <p className="text-xs leading-relaxed">
                  For 46 + 38, mentally add the tens first (40 + 30 = 70) then the units (6 + 8 = 14) to reach 84. Left-to-right addition matches how you type digits on screen.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Maintain a Consistent Breathing Cadence
                </div>
                <p className="text-xs leading-relaxed">
                  Avoid holding your breath under the countdown. Smooth, rhythmic breathing keeps oxygen flowing to the prefrontal cortex and prevents panic-induced computational blanks.
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
              Frequently Asked Questions About Math Quiz
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

        {/* ── Section 8: Related Cognitive & Logic Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Quantitative &amp; Memory Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your numerical reasoning, working memory, and mental calculation speed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/math-dash" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Math Dash</span>
                <span className="text-xs text-muted-foreground mt-1">Escalating arithmetic challenge sprint →</span>
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
