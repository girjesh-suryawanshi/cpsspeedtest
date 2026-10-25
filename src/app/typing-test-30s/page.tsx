import { GameSEO } from "@/components/game-seo";
import { TypingTest } from "@/components/typing-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Keyboard, Zap, Trophy, HelpCircle, CheckCircle2, Activity, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Typing Speed Test (30 Seconds) – Quick WPM Sprint & Accuracy Check | CpsSpeedTest',
  description: 'Test your keyboard typing sprint speed with our 30-second WPM test. Measure your burst Words Per Minute, key accuracy, and warm up your fingers for typing or gaming.',
  keywords: ['typing test 30s', '30 second typing test', 'burst typing test', 'wpm sprint test', 'quick typing test', 'keyboard speed check'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/typing-test-30s',
  },
  openGraph: {
    title: 'Typing Speed Test (30 Seconds) – Quick WPM Sprint',
    description: 'Benchmark your burst typing speed and key accuracy across a quick 30-second keyboard sprint.',
    url: 'https://www.cpsspeedtest.com/typing-test-30s',
    type: 'website',
  },
};

const typing30sFaqs = [
  {
    question: "Why take a 30-second typing test instead of a 60-second test?",
    answer: "A 30-second typing test isolates raw burst speed and anaerobic finger agility without the influence of muscular fatigue or attention drift. It serves as an ideal quick warmup before competitive gaming matches, code sprints, or workplace writing tasks."
  },
  {
    question: "How is WPM calculated on a 30-second typing test?",
    answer: "Every 5 keystrokes count as one standard word. The 30-second formula is: `(Total Keystrokes ÷ 5) ÷ (30 ÷ 60)` which simplifies to `(Total Keystrokes ÷ 5) × 2`. Any uncorrected errors are deducted from the gross score to yield your Net WPM."
  },
  {
    question: "What is a good score on a 30-second typing sprint?",
    answer: "Average typists typically score between 40 and 55 WPM on a 30-second sprint. Intermediate touch typists reach 60 to 80 WPM, while experienced speed typists frequently achieve 90 to 120+ WPM."
  },
  {
    question: "How does error recovery impact a 30-second score?",
    answer: "In a 30-second sprint, every second accounts for 3.3% of the total test duration. Spending 1 second recognizing a mistake, hitting backspace, and re-typing costs between 2 and 4 Net WPM off your final score, making clean accuracy essential."
  },
  {
    question: "Can taking short 30-second tests improve long-term typing endurance?",
    answer: "Yes. Short sprint training builds high-velocity neural pathways (n-gram motor automation). Once your fingers learn to execute common words at 80+ WPM in short bursts, you can gradually expand that speed into sustained 1-minute and 5-minute transcription sessions."
  }
];

export default function TypingTest30sPage() {
  return (
    <>
      <GameSEO 
        name="Typing Speed Test (30 Seconds)"
        description="Test your keyboard typing sprint speed with our 30-second WPM test. Benchmark your burst Words Per Minute and character accuracy."
        url="https://www.cpsspeedtest.com/typing-test-30s"
        faqs={typing30sFaqs}
        category="SkillGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Intensity 30-Second Keyboard Sprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Typing Speed Test (30 Seconds)
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A high-intensity 30-second typing sprint. Benchmark your peak anaerobic finger acceleration, burst Words Per Minute (WPM), and instantaneous character accuracy.
          </p>
        </header>

        {/* 30s Typing Test Component */}
        <div className="py-2">
          <TypingTest gameDuration={30} />
        </div>

        {/* ── Section 1: The Physiology of Sprint Typing (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mechanics of Burst Typing: Anaerobic Acceleration &amp; Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>30-Second Typing Sprint</strong> measures peak velocity rather than aerobic stamina. In motor physiology, short sprints engage fast-twitch muscle fibers in the hands and forearms, allowing typists to operate at the absolute upper ceiling of their neuromuscular capacity.
            </p>
            <p>
              Because the duration is brief, mental fatigue and posture slumping do not have time to set in. Typists can unleash maximum cadence across familiar English word patterns. However, the margin for error is razor-thin: committing just two typos in a 30-second window can drop your recorded WPM by as much as 10 to 15 percent.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Sprint Percentiles ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              30-Second Typing Sprint Benchmark Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How does your burst typing speed compare to other computer users? Here is the distribution for 30-second tests:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 40 WPM</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual / Visual Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hesitation between words. The typist checks the keyboard periodically, causing brief 200–400ms pauses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">41 – 65 WPM</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Competent Touch Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistent finger flow without looking down. Capable of executing common words at steady conversational speed.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">66 – 95 WPM</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Sprint Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High burst acceleration. Smooth finger rolling across frequent n-grams with 96%+ character accuracy.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">96+ WPM</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master Sprint Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% burst capability. Sub-80ms inter-keystroke intervals with continuous optical lookahead buffering.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Sprint Strategies & Keypad Ergonomics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-primary" />
                Maximizing Sprint Velocity: Lookahead Buffering
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                In a 30-second sprint, your visual focus should never dwell on the word currently being typed:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Two-Word Lookahead:</strong> Read 1 to 2 words ahead of your active keystrokes. This allows your subconscious motor cortex to prepare finger positions before the current word finishes.
                </li>
                <li>
                  <strong className="text-foreground">Do Not Stop on Typos:</strong> In a sprint test, if you make a minor spelling mistake, maintain your rhythm rather than repeatedly hitting Backspace and destroying your momentum.
                </li>
                <li>
                  <strong className="text-foreground">Stamina Comparison:</strong> For full 1-minute endurance testing, practice on our standard <Link href="/typing-test" className="text-primary hover:underline">60-Second Typing Test</Link>.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Related Mechanical Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Improve your keyboard and mouse mechanical reflexes across complementary testing tools:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/spacebar-clicker" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Spacebar Clicker</span>
                  <span className="text-primary font-mono">Thumb Speed &amp; HPS →</span>
                </Link>
                <Link href="/cps-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">CPS Speed Test</span>
                  <span className="text-primary font-mono">Mouse Click Benchmark →</span>
                </Link>
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Target Acquisition →</span>
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
              Frequently Asked Questions About 30-Second Typing Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {typing30sFaqs.map((faq, index) => (
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
