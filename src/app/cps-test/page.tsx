import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Zap, Calculator, Timer, Cpu, Activity, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Clicks Per Second (CPS) Test - Measure Your Real Click Speed',
  description: 'Test your clicking speed with our high-precision CPS tester. Features sub-millisecond elapsed-time tracking, live rate distribution charts, and technique diagnostics.',
  keywords: ['cps test', 'click speed test', 'clicks per second', 'cps calculator', 'mouse click speed', 'minecraft cps'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/cps-test',
  },
};

const cpsFaqs = [
  {
    question: "How is Clicks Per Second (CPS) calculated?",
    answer: "CPS is calculated by dividing your total validated click inputs by the exact elapsed duration in seconds: CPS = Total Clicks ÷ Elapsed Seconds. For instance, if you register 48 valid clicks over an exact measured duration of 5.012 seconds, your final score is 48 ÷ 5.012 = 9.58 CPS."
  },
  {
    question: "What is the difference between CPS and reaction time?",
    answer: "Reaction time measures the latency (in milliseconds) between perceiving a sensory stimulus and initiating a physical response (typically 200–250ms for humans). In contrast, CPS measures sustained motor cadence and neuromuscular oscillation frequency—how rapidly your finger or hand can repeat actuation cycles once initiated."
  },
  {
    question: "Why do CPS scores vary across different test durations?",
    answer: "Shorter tests (like 1-second sprints) measure peak burst speed before muscle fatigue begins, often yielding 10–14+ CPS. Extended tests (like 10s, 30s, or 60s) demand cardiovascular and muscular endurance, causing average scores to decrease as finger muscles experience lactic acid buildup and neuromuscular fatigue."
  },
  {
    question: "How does mouse hardware affect click speed test results?",
    answer: "Hardware factors play a major role: mechanical switch resistance (measured in gram-force), key travel depth, switch reset points, firmware debounce delay (which ignores rapid electrical contact bounces to prevent accidental double-clicks), and mouse polling rate (500Hz vs 1000Hz)."
  },
  {
    question: "What should I do if my clicks are not registering properly?",
    answer: "Ensure your browser tab has active focus, disable aggressive browser extensions (such as script blockers or auto-clicker plugins), verify that your mouse is not experiencing switch bounce chatter, and avoid dragging the pointer outside the active testing boundary."
  }
];

export default function CpsTestPage() {
  return (
    <>
      <GameSEO 
        name="Clicks Per Second (CPS) Test"
        description="Test your clicking speed with our high-precision CPS tester. Features sub-millisecond elapsed-time tracking, live rate distribution charts, and technique diagnostics."
        url="https://www.cpsspeedtest.com/cps-test"
        faqs={cpsFaqs}
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Precision Browser Click Counter</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Clicks Per Second (CPS) Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your mouse clicking cadence with sub-millisecond precision. Choose your duration, select instant or countdown trigger, and inspect your click consistency over time.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <CpsTest gameDuration={5} allowDurationChange={true} />

        {/* ── Section 1: Measurement Method & Formula ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-primary" />
              How CPS Is Measured & Calculated
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Clicks Per Second (CPS) is the standard metric used in competitive gaming, UI research, and input benchmarking to quantify how frequently a user can actuate a primary input device.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              CPS = Total Valid Clicks ÷ Actual Elapsed Seconds
            </div>
            <p>
              Unlike basic web counters that rely on standard browser <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">setInterval</code> clocks (which are subject to heavy background tab throttling and timing drift), this tool captures exact timestamps using the browser&apos;s high-resolution <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">performance.now()</code> API (accurate to fractions of a millisecond).
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-1">
              <p className="font-semibold text-primary">Worked Numerical Example:</p>
              <p>• Recorded Clicks: <strong>47 clicks</strong></p>
              <p>• Measured Test Duration: <strong>5.004 seconds</strong></p>
              <p>• Calculation: 47 ÷ 5.004 = <strong>9.39 CPS</strong></p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: CPS vs Reaction Time ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                CPS vs. Reaction Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Visitors frequently confuse click speed with reaction latency. They test two distinct neurological and motor pathways:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-foreground">Reaction Time:</strong> Measures the millisecond delay between perceiving an external visual cue (e.g., green screen) and muscle contraction initiation. (Test yours on our <Link href="/reaction-time-test" className="text-primary hover:underline">Reaction Time Test</Link>).
                </li>
                <li>
                  <strong className="text-foreground">Click Speed (CPS):</strong> Measures repetitive neuromuscular oscillation speed—the rate at which your flexor digitorum muscles can rapidly contract and relax.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Hardware & Input Influences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Your score is strongly influenced by your physical input hardware:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-foreground">Debounce Delay:</strong> Mechanical microswitches oscillate upon impact. Firmware debounce delay filters these bounces to prevent duplicate registrations.
                </li>
                <li>
                  <strong className="text-foreground">Switch Type:</strong> Optical switches break light beams rather than physical contacts, eliminating debounce latency.
                </li>
                <li>
                  <strong className="text-foreground">Polling Rate:</strong> 1000Hz gaming mice report updates every 1ms, whereas 125Hz office mice report every 8ms.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 3: Click Speed Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Verified Community Score Ranges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Based on empirical testing across different input styles, here is how click speeds generally classify:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐢</div>
                <div className="font-bold text-foreground">0 – 4.9 CPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual / Standard</div>
                <p className="text-xs text-muted-foreground">Typical navigation speed for office workflows and non-competitive computer use.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">5.0 – 7.9 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Regular</div>
                <p className="text-xs text-muted-foreground">Standard single-finger clicking rate achieved by most recreational gamers without specialized technique.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐆</div>
                <div className="font-bold text-foreground">8.0 – 10.9 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Fast / Experienced</div>
                <p className="text-xs text-muted-foreground">Attained by experienced action, MOBA, or shooter players using controlled burst clicking.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🦅</div>
                <div className="font-bold text-foreground">11.0+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Competitive Tier</div>
                <p className="text-xs text-muted-foreground">Requires advanced clicking methods such as butterfly clicking, jitter clicking, or low-debounce drag clicking.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 4: What This Tool Measures & Ergonomics ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-primary" />
              Scope of Measurement & Ergonomic Safety
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong>What this tool measures:</strong> Raw mechanical input frequency delivered through a browser window within a controlled duration.
            </p>
            <p>
              <strong>What this tool does not measure:</strong> This tool is not a medical or neurological diagnostic device. CPS scores do not equate to overall gaming skill, strategic intelligence, or aim precision.
            </p>
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive-foreground text-xs sm:text-sm">
              <p className="font-semibold text-destructive flex items-center gap-1.5 mb-1">
                <AlertCircle className="w-4 h-4" /> Health & Ergonomic Advisory
              </p>
              <p>
                High-frequency clicking techniques (particularly jitter clicking) involve rapid forearm tension that can strain your flexor tendons. Never click through wrist pain, numbness, or tingling sensations. Take regular breaks and practice wrist stretches.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: Troubleshooting ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions & Troubleshooting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {cpsFaqs.map((faq, index) => (
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
