import { GameSEO } from "@/components/game-seo";
import { CoreballGame } from "@/components/coreball-game";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Coreball Game – Rotational Needle Timing & Reflex Arcade | CpsSpeedTest',
  description: 'Play Coreball online free. Launch numbered pins into a spinning central core without colliding with existing needles. Test angular timing, reflexes, and rhythm.',
  keywords: ['coreball game', 'coreball online', 'aa game online', 'rotational timing game', 'pin needle circle game', 'arcade reflex test', 'core ball unblocked'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/coreball-game',
  },
  openGraph: {
    title: 'Coreball Game – Rotational Needle Timing Arcade',
    description: 'Launch needles into a rotating core without triggering collisions. Benchmark your millisecond angular timing across escalating difficulty stages.',
    url: 'https://www.cpsspeedtest.com/coreball-game',
    type: 'website',
  },
};

const coreballFaqs = [
  {
    question: "What are the core mechanics of the Coreball game?",
    answer: "A central sphere rotates continuously in the center of the screen with a set of pre-attached spokes. You control a queue of numbered balls at the bottom of the canvas. Clicking the mouse or tapping the spacebar launches the front ball along a straight vertical trajectory toward the core. If the ball embeds cleanly into an open angular gap, it becomes attached. If it collides with any existing pin, the level immediately fails."
  },
  {
    question: "How does difficulty scale as you advance through Coreball levels?",
    answer: "Higher levels introduce faster rotational angular velocities, sudden direction reversals (alternating between clockwise and counterclockwise spin), variable-speed sinusoidal oscillation, and tighter angular clearance margins with dozens of pre-attached spokes."
  },
  {
    question: "What timing technique is best for clearing dense needle stages?",
    answer: "Rhythmic cadence shooting. Rather than watching the rotating needles themselves, fix your gaze on the empty gap. Time your click so the ball launches just as the trailing spoke clears the trajectory path, allowing the ball to slide into the front edge of the empty arc."
  },
  {
    question: "What was the original inspiration for the Coreball game?",
    answer: "Coreball is modeled after the viral minimalist arcade game 'aa' developed by General Adaptive Apps in 2014. Its focus on stark geometry, clean rotational physics, and unforgiving timing made it an instant classic in precision arcade gaming."
  },
  {
    question: "Does Coreball help improve reaction time and hand-eye coordination?",
    answer: "Yes. Coreball exercises dynamic visual tracking, predictive motor lead timing (anticipating where a rotating target will be 150ms in the future), and fine motor impulse control."
  }
];

export default function CoreballGamePage() {
  return (
    <>
      <GameSEO 
        name="Coreball Game"
        description="Attach the balls to the rotating central core without collision. Play Coreball online and test your angular timing and reflexes."
        url="https://www.cpsspeedtest.com/coreball-game"
        faqs={coreballFaqs}
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Rotational Timing &amp; Predictive Ballistic Arcade</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Coreball Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Attach every ball in your queue to the rotating core without triggering a needle collision. Time your launches, anticipate angular momentum, and conquer escalating levels.
          </p>
        </header>

        {/* Coreball Interactive Game */}
        <div className="py-2">
          <CoreballGame />
        </div>

        {/* ── Section 1: The Physics of Angular Velocity & Interception (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Physics of Coreball: Angular Velocity &amp; Lead Interception
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In classical mechanics, the core rotates at an angular frequency $\omega$ (measured in radians per second). When you trigger a launch, the ball travels vertically at constant linear velocity $v$ toward the core&apos;s perimeter radius $R$.
            </p>
            <p>
              Because the ball takes a finite duration $\Delta t = d / v$ to reach the surface, players cannot aim directly at an empty gap. Instead, the brain must perform <strong>predictive lead targeting</strong>: calculating where the rotating gap will be when the ball arrives:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              Target Angle θ(t + Δt) = θ(t) + ω × Δt
            </div>
            <p className="text-xs">
              When cores reverse rotation direction abruptly, the nervous system must instantly recalibrate the lead offset from positive to negative, making Coreball a supreme benchmark of sensory-motor adaptation.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Level Milestones ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Coreball Performance Tiers (Level Milestones)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How far into the gauntlet of rotating needles can your reflexes carry you?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Levels 1 – 10</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Foundational Timing</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Slow, steady constant-speed rotation. Ample angular clearance between spokes. Solvable with single-shot patience.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Levels 11 – 30</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate Rhythm</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Introduces direction reversals and tighter gaps. Requires consistent rhythmic tapping to place 2–3 balls into a single opening.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Levels 31 – 60</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Precision</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-speed oscillation and dense pin arrays. Narrow millisecond launch windows requiring rapid subconscious muscle memory.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Levels 61+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Timing</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% elite arcade reflexes. Flawless execution across erratic rotational speeds, microscopic clearances, and reverse spikes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Rhythmic Launch Tactics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                The Double-Tap &amp; Trailing Edge Tactics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Shoot the Trailing Edge:</strong> Never shoot for the exact center of a moving gap. Fire just as the preceding spoke sweeps past your firing line. This leaves maximum clearance for the remainder of the gap.
                </li>
                <li>
                  <strong className="text-foreground">The Rapid Double-Tap:</strong> When you encounter a wide open gap, execute a fast double-click using <Link href="/cps-test" className="text-primary hover:underline">high CPS burst clicking</Link> to fit two balls into a single revolution.
                </li>
                <li>
                  <strong className="text-foreground">Use the Spacebar:</strong> On desktop computers, tapping the Spacebar provides faster, more consistent mechanical rebound than mouse clicks.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Reflex &amp; Timing Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pair angular timing with pure millisecond reflex and speed benchmarks:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/reaction-time-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Reaction Time Test</span>
                  <span className="text-primary font-mono">Measure Visual Stimulus Latency →</span>
                </Link>
                <Link href="/time-guesser" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Time Guesser</span>
                  <span className="text-primary font-mono">10-Second Internal Clock →</span>
                </Link>
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Target Acquisition Speed →</span>
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
              Frequently Asked Questions About Coreball
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {coreballFaqs.map((faq, index) => (
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
