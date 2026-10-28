import { GameSEO } from "@/components/game-seo";
import { TypingTest } from "@/components/typing-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Keyboard, Zap, Trophy, HelpCircle, CheckCircle2,
  Activity, Cpu, Briefcase, TrendingUp, Sparkles,
  ArrowRight, Award
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typing Speed Test (30 Seconds) – Quick WPM Sprint & Accuracy Check | CpsSpeedTest",
  description:
    "Test your keyboard typing sprint speed with our 30-second WPM test. Measure your burst Words Per Minute, character accuracy, career benchmarks, and finger agility.",
  keywords: [
    "typing test 30s",
    "30 second typing test",
    "burst typing test",
    "wpm sprint test",
    "quick typing test",
    "keyboard speed check",
    "30s typing speed",
    "typing speed test 30 seconds",
    "burst wpm benchmark",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/typing-test-30s",
  },
  openGraph: {
    title: "Typing Speed Test (30 Seconds) – Quick WPM Sprint & Accuracy",
    description: "Benchmark your burst typing speed and key accuracy across a rapid 30-second keyboard sprint. Compare with career WPM benchmarks.",
    url: "https://www.cpsspeedtest.com/typing-test-30s",
    type: "website",
  },
};

const typing30sHowToSteps = [
  {
    name: "Place fingers on the home row keys",
    text: "Position your left hand on A-S-D-F and right hand on J-K-L-;. Feel for the tactile bumps on F and J without looking at the keyboard.",
  },
  {
    name: "Begin typing to start the 30-second countdown",
    text: "The timer triggers automatically on your very first keystroke. No preparation delay, testing immediate focus and hand-eye readiness.",
  },
  {
    name: "Read ahead by 2 to 3 words",
    text: "Keep your eyes scanning ahead of what your fingers are actively pressing. Buffer upcoming words mentally to eliminate hesitation between keystrokes.",
  },
  {
    name: "Prioritize uninterrupted accuracy over wild speed",
    text: "In a 30-second test, each second represents 3.3% of your total score. A single backspace penalty can drop your Net WPM by 2 to 4 points.",
  },
  {
    name: "Review your Net WPM and accuracy metrics",
    text: "When the 30 seconds elapse, analyze your Gross WPM, Net WPM, raw keystrokes, and percentage accuracy score.",
  },
  {
    name: "Rest wrists and run 3 warmup sets",
    text: "Use the 30-second sprint as a rapid routine before coding, writing, or gaming. Shake out your fingers between sets to prevent wrist tension.",
  },
];

const typing30sFaqs = [
  {
    question: "Why take a 30-second typing test instead of a 60-second test?",
    answer:
      "A 30-second typing test isolates raw burst speed, neuromuscular agility, and finger velocity without being degraded by forearm lactic acid accumulation or attention fatigue. It serves as the ultimate quick warmup before coding sessions, gaming tournaments, or customer support shifts where instant finger readiness is critical.",
  },
  {
    question: "How is WPM calculated on a 30-second typing test?",
    answer:
      "Typing standards define one standardized 'word' as exactly 5 keystrokes (including letters, spaces, and punctuation). The formula for a 30-second test is: `Gross WPM = (Total Keystrokes ÷ 5) × 2`. To obtain Net WPM, uncorrected errors are deducted: `Net WPM = ((Total Keystrokes ÷ 5) - Uncorrected Errors) × 2`.",
  },
  {
    question: "What is a good score on a 30-second typing sprint?",
    answer:
      "The global casual average is 40–50 WPM. Competent office professionals and touch typists average 60–75 WPM. Advanced typists, programmers, and legal transcriptionists consistently reach 80–100 WPM, while competitive speed typists exceed 110–135+ WPM in short sprints.",
  },
  {
    question: "How much does a single mistake cost on a 30-second test?",
    answer:
      "Because the test is only 30 seconds long, every single second represents 3.3% of the total test duration. Taking 1.2 seconds to recognize an error, hit backspace twice, and re-type the correct character will deduct between 2.5 and 4.0 Net WPM from your final score, proving that accuracy is paramount.",
  },
  {
    question: "Does burst typing speed translate to sustained 5-minute typing?",
    answer:
      "Yes. Short sprint training builds high-frequency n-gram motor reflexes — teaching your brain to execute common letter clusters (like 'tion', 'ing', 'the', 'and') as single automated muscle spasms. Once these motor patterns are effortless, you can maintain them over 5-minute endurance tests with minimal fatigue.",
  },
  {
    question: "Which keyboard layout yields the highest burst typing speed?",
    answer:
      "While QWERTY is universal, alternative ergonomic layouts like Colemak and Dvorak reduce finger travel distance by over 60% by placing the most common English letters on the home row. This dramatic reduction in lateral finger reach allows typists to achieve significantly higher burst speeds with less physical strain.",
  },
  {
    question: "How should I warm up my fingers before taking the test?",
    answer:
      "Gently rotate your wrists clockwise and counter-clockwise, perform finger extensions against a flat desk surface, and run 1 or 2 practice sprint runs at a relaxed 70% pace before attempting a maximum-effort personal best run.",
  },
];

export default function TypingTest30sPage() {
  return (
    <>
      <GameSEO
        name="Typing Speed Test (30 Seconds)"
        description="Test your keyboard typing sprint speed with our 30-second WPM test. Benchmark your burst Words Per Minute, key accuracy, and finger agility."
        url="https://www.cpsspeedtest.com/typing-test-30s"
        faqs={typing30sFaqs}
        howToSteps={typing30sHowToSteps}
        category="SkillGame"
        lastUpdated="October 2026"
        benefits="Warm up fingers before coding or gaming, measure anaerobic typing sprint speed, optimize touch typing accuracy, and evaluate mechanical keyboard switches."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>30-Second WPM Sprint &amp; Warmup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            30-Second Typing Speed Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your burst Words Per Minute (WPM) and key accuracy in a rapid 30-second keyboard sprint. The ultimate finger agility warmup.
          </p>
        </header>

        {/* Interactive Typing Test Component */}
        <TypingTest gameDuration={30} />

        {/* Section 1: What is the 30-Second Typing Test? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the 30-Second Typing Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>30-Second Typing Test</strong> is a high-intensity keyboard benchmark engineered to measure your maximum burst typing speed without the degradation of muscular fatigue. By compressing the standard 1-minute transcription test into an explosive 30-second sprint, it isolates your instantaneous n-gram motor memory, visual word buffering, and raw finger velocity in Words Per Minute (WPM).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Calculation Formula</span>
                <span className="text-lg font-black text-primary">WPM = (Chars ÷ 5) × 2</span>
                <span className="text-xs text-muted-foreground block mt-0.5">5 characters = 1 standard word</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Target Accuracy</span>
                <span className="text-lg font-black text-emerald-500">96% – 99%</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Prevents backspace penalties</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Global Median</span>
                <span className="text-lg font-black text-amber-500">45 – 55 WPM</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Casual office computer users</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Take the Test (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Take the 30-Second Typing Sprint
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {typing30sHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Test 30-Second Sprint Speed? */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Why 30-Second Sprints Matter: Neurological &amp; Career Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Activity className="w-4 h-4" />
                  Pre-Game &amp; Pre-Work Warmup
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Just as sprinters stretch before a race, 30-second typing drills activate synaptic transmission in the motor cortex and stimulate blood circulation to the extensor tendons, priming your hands for peak reaction speed in gaming or software development.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Briefcase className="w-4 h-4" />
                  Professional Workplace Productivity
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                An increase from 40 WPM to 70 WPM saves the average knowledge worker approximately 21 days of working time every single year when drafting emails, technical documentation, spreadsheets, and chat messages.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Cpu className="w-4 h-4" />
                  Cognitive Load Reduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When your fingers execute keystrokes autonomously via subconscious muscle memory, your working memory remains 100% focused on creative thought, problem solving, and sentence structure rather than hunting for keys.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Trophy className="w-4 h-4" />
                  Rapid Diagnostic of Finger Asymmetry
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Short sprints reveal weaknesses in specific fingers — such as weak pinky reach for P, Q, or Shift keys, or right-hand dominance over the left hand — enabling targeted finger strengthening drills.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Career WPM Benchmarks & Layout Comparison */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            Typing Speed Benchmarks Across Modern Careers
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Profession / Role</th>
                  <th className="p-3">Average WPM</th>
                  <th className="p-3">Top 10% Benchmark</th>
                  <th className="p-3">Key Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Court Reporter / Stenographer</td>
                  <td className="p-3 text-emerald-400 font-semibold">180 – 225 WPM</td>
                  <td className="p-3 text-emerald-400 font-bold">250+ WPM</td>
                  <td className="p-3">Steno chord keyboard machine</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Medical Transcriptionist / Legal Secretary</td>
                  <td className="p-3 text-primary font-semibold">75 – 90 WPM</td>
                  <td className="p-3 text-primary font-bold">100+ WPM</td>
                  <td className="p-3">99%+ absolute accuracy standard</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Software Engineer / Programmer</td>
                  <td className="p-3">60 – 80 WPM</td>
                  <td className="p-3">95+ WPM</td>
                  <td className="p-3">Special characters, brackets, syntax</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Executive Assistant / Data Entry</td>
                  <td className="p-3">55 – 70 WPM</td>
                  <td className="p-3">85+ WPM</td>
                  <td className="p-3">Speed with 10-key numeric keypad</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Casual Office Employee</td>
                  <td className="p-3">38 – 48 WPM</td>
                  <td className="p-3">65 WPM</td>
                  <td className="p-3">General email correspondence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Performance Tiers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            30-Second Sprint Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Novice Typist</div>
              <div className="text-2xl font-black text-foreground">20 – 39 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Visual hunt-and-peck typist. Eyes frequently glance down to keyboard; occasional finger hunting for symbol keys.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Touch Typist</div>
              <div className="text-2xl font-black text-primary">40 – 64 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard home-row touch typing. Solid everyday fluency with steady cadence and occasional backspace corrections.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Advanced Pro</div>
              <div className="text-2xl font-black text-amber-500">65 – 89 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                High-speed text streaming with 97%+ accuracy. Automatic n-gram muscle memory with minimal visual checking.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Master Typist</div>
              <div className="text-2xl font-black text-rose-500">90 – 120+ WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite typing velocity. Complete keyboard automation, continuous word buffering, and effortless finger flight.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Improvement Drills */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Techniques to Accelerate Your 30-Second WPM
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Buffer Words Mentally in Advance</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Never look at the character your fingers are currently striking. Direct your vision 2 to 3 words ahead to build a continuous pipeline of muscle instructions.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Strict 98% Accuracy Discipline</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Slow down your raw stroke rate until you can complete 3 consecutive tests with zero backspacing. Precision builds speed; speed never builds precision.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Keep Wrists Elevated and Flat</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Resting your wrists on the desk forces fingers to reach upwards at an angle, restricting tendon glide. Float your wrists slightly above the desk for maximum agility.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Target High-Frequency Bigrams</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Over 50% of English text consists of just 20 common character pairs (th, he, in, er, an, re). Drilling these bigrams creates lightning-fast compound strokes.
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
            {typing30sFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Tools */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Typing &amp; Reflex Tests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/typing-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">60s Typing Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/type-racer"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Speed Typer Race</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/spacebar-clicker"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Spacebar Clicker</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
