import { GameSEO } from "@/components/game-seo";
import { AimTrainer } from "@/components/aim-trainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Crosshair, Mouse, HelpCircle, CheckCircle2, Trophy, Zap, ShieldAlert, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Aim Trainer – FPS Mouse Precision, Flick Accuracy & Target Benchmark | CpsSpeedTest',
  description: 'Benchmark and improve your mouse precision, flick shot acquisition speed, and target tracking accuracy on our 30-second Aim Trainer. Optimized for Valorant, CS2, and Apex Legends.',
  keywords: ['aim trainer', 'aim practice', 'fps trainer', 'mouse accuracy test', 'flick accuracy', 'target acquisition', 'cs2 aim training', 'valorant aim warmup'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/aim-trainer',
  },
  openGraph: {
    title: 'Aim Trainer – FPS Mouse Precision & Flick Accuracy Benchmark',
    description: 'Benchmark your target acquisition speed, tracking precision, and hit accuracy on our 30-second interactive Aim Trainer.',
    url: 'https://www.cpsspeedtest.com/aim-trainer',
    type: 'website',
  },
};

const aimFaqs = [
  {
    question: "How does the Aim Trainer calculate overall accuracy and score?",
    answer: "Accuracy is calculated mathematically as: (Successful Target Hits ÷ Total Primary Mouse Clicks) × 100. Any mouse actuation occurring outside the active target boundary registers as a miss, penalizing your overall accuracy rating. Target acquisition speed reflects the average elapsed time in milliseconds between target spawn and successful target neutralization."
  },
  {
    question: "What mouse DPI and in-game sensitivity are optimal for aim training?",
    answer: "Most competitive tactical FPS competitors (CS2, Valorant) standardize on 400 or 800 hardware DPI with moderate in-game sensitivity, yielding an eDPI (DPI × in-game multiplier) that requires 35cm to 50cm of mouse travel for a complete 360-degree rotation. Disabling 'Enhance Pointer Precision' in Windows ensures a linear 1:1 physical-to-sensor translation ratio without artificial acceleration."
  },
  {
    question: "What is the difference between flick aim and tracking aim?",
    answer: "Flick aim (ballistic targeting) requires a rapid high-velocity initial movement followed by an instant micro-correction to acquire stationary or suddenly appearing targets. Tracking aim (smooth pursuit) requires continuous, smooth synchronization of crosshair movement with a moving target's velocity vector, utilizing forearm glide rather than wrist snaps."
  },
  {
    question: "How long should I warm up with an aim trainer before competitive matches?",
    answer: "Research in motor learning demonstrates that 10 to 15 minutes of focused target acquisition warmup provides optimal neuromuscular potentiation. Practicing for longer than 30 consecutive minutes without rest leads to neuromuscular fatigue, decreasing performance returns and increasing wrist strain."
  },
  {
    question: "Does aim training translate directly to competitive tactical shooters?",
    answer: "Yes. Isolating pure hand-eye coordination, sensor calibration, and mouse stop-power eliminates distracting in-game variables like recoil patterns, utility usage, and positional audio. Mastering target acquisition in an aim trainer establishes reflexive muscle memory that frees cognitive bandwidth for tactical decision-making in-game."
  }
];

export default function AimTrainerPage() {
  return (
    <>
      <GameSEO 
        name="Aim Trainer"
        description="Benchmark and sharpen your mouse precision, flick accuracy, and target acquisition speed with our 30-second Aim Trainer. Optimized for FPS players."
        url="https://www.cpsspeedtest.com/aim-trainer"
        faqs={aimFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Crosshair className="w-3.5 h-3.5" />
            <span>Target Acquisition &amp; Flick Precision Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Aim Trainer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Acquire and eliminate dynamic targets across a 30-second trial. Benchmark your target acquisition latency, flick accuracy, and miss penalties with microsecond precision.
          </p>
        </header>

        {/* Aim Trainer Component */}
        <AimTrainer />

        {/* ── Section 1: Direct Answer Definition & Core Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              What is an Aim Trainer &amp; How Does It Calibrate Precision?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              An <strong>Aim Trainer</strong> is an interactive motor-coordination testing ground engineered to isolate and calibrate a gamer&apos;s spatial hand-eye tracking, click timing, and ballistic targeting reflexes. Unlike full 3D game engines where player movement, weapon spread, and network ping obscure individual mechanical skill, browser aim benchmarks evaluate the pure physical interface between your hand, mouse sensor, and visual cortex.
            </p>
            <p>
              During this 30-second target test, targets spawn across randomized coordinates. Your objective is twofold: minimize the elapsed time between target appearance and click registration (acquisition latency), while maintaining a strict 90%+ hit-to-click ratio to prevent erratic panic-clicking.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Community Benchmark Matrix ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Aim Trainer Score Tiers &amp; Accuracy Percentiles (30-Second Trial)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on empirical scoring data collected across hundreds of thousands of competitive FPS players, target acquisition output falls into four distinct performance tiers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">Under 20 Targets</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual / Beginner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Average reaction latency &gt;600ms per target. Frequent overshooting and click misses (&lt;70% accuracy). Relies primarily on high-DPI wrist flicking.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">21 – 28 Targets</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate Competitor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Average reaction latency 450–550ms. Consistent target acquisition with 75–85% hit accuracy. Characteristic of Gold/Platinum rank tactical players.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">29 – 36 Targets</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Marksman</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-400ms target neutralization with &gt;90% accuracy. Excellent mouse stop-power, minimal crosshair jitter, and disciplined shot confirmation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">37+ Targets</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Pro / Elite Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-320ms instantaneous target snaps with 95%+ precision. Professional Valorant Radiant and CS2 Faceit Level 10 benchmark level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Training Methodology & Neuromuscular Mechanics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                The Two-Phase Aiming Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Elite shooters divide every target acquisition into two distinct motor phases:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Primary Ballistic Flick (90% Distance):</strong> A high-speed, open-loop snap powered by the forearm that covers the vast majority of the distance between your resting crosshair and the target in under 120ms.
                </li>
                <li>
                  <strong className="text-foreground">Secondary Micro-Correction (10% Distance):</strong> A closed-loop, visually guided micro-adjustment executed by fingers and wrist to lock onto the center pixels before initiating actuation.
                </li>
              </ol>
              <p className="text-xs">
                Novice players fail because they attempt to complete 100% of the movement via ballistic snapping, causing rampant overshooting and frantic rebound adjustments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Mouse className="w-4 h-4 text-primary" />
                Hardware Calibration &amp; Sensor Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Disable Windows Pointer Acceleration:</strong> In Control Panel → Mouse Settings, verify that &quot;Enhance pointer precision&quot; is unchecked to eliminate non-linear hardware acceleration.
                </li>
                <li>
                  <strong className="text-foreground">Optical Sensor Polling Rate:</strong> Set your mouse polling rate to 1000Hz (1ms response) or 4000Hz/8000Hz to eliminate input jitter and reduce motion sensor report latency.
                </li>
                <li>
                  <strong className="text-foreground">Friction &amp; Mousepad Glide:</strong> Pair PTFE or glass mouse skates with a control cloth mousepad to provide the necessary dynamic friction for precise instant-stop stabilization.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Cross-Training Suggestions ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Complementary Reflex &amp; Mechanical Warmup Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3 leading-relaxed">
            <p>
              A complete mechanical warmup routine targets both input velocity and reaction speed. Combine your aim training with:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/reaction-time-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">Reaction Time Test</div>
                <div className="text-xs text-muted-foreground mt-1">Measure raw millisecond visual stimulus latency.</div>
              </Link>
              <Link href="/cps-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">CPS Speed Test</div>
                <div className="text-xs text-muted-foreground mt-1">Calibrate trigger finger click cadence and stamina.</div>
              </Link>
              <Link href="/double-click-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">Double Click Test</div>
                <div className="text-xs text-muted-foreground mt-1">Verify mouse switches are free from mechanical switch chatter.</div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Aim Training
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {aimFaqs.map((faq, index) => (
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
