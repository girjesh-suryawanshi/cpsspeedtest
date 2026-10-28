import { GameSEO } from "@/components/game-seo";
import { CoreballGame } from "@/components/coreball-game";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Coreball Game – Rotational Needle Timing & Reflex Arcade | CpsSpeedTest',
  description: 'Play Coreball online free. Launch numbered pins into a spinning central core without colliding with existing needles. Test angular timing, reflexes, and rhythm.',
  keywords: ['coreball game', 'coreball online', 'aa game online', 'rotational timing game', 'pin needle circle game', 'arcade reflex test', 'core ball unblocked', 'rotational speed arcade'],
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

const coreballHowToSteps = [
  {
    name: "Observe Central Core Rotation Speed",
    text: "Examine the rotating central sphere. Track its rotational direction (clockwise vs. counterclockwise) and angular velocity."
  },
  {
    name: "Inspect Available Angular Windows",
    text: "Scan the perimeter to identify the widest open arcs between pre-attached spokes where your next launched ball can fit cleanly."
  },
  {
    name: "Account for Pin Launch Flight Time",
    text: "Anticipate the physical flight duration of the pin traveling from the bottom queue to the core boundary (~150ms lead time)."
  },
  {
    name: "Click or Tap Spacebar to Launch",
    text: "Click the primary mouse button or tap the spacebar at the precise split-second your target gap sweeps past the launch vector."
  },
  {
    name: "Adapt to Sudden Spin Reversals",
    text: "Advanced stages feature sudden rotational direction reversals and variable sinusoidal speed changes mid-spin. Stay poised."
  },
  {
    name: "Empty Your Ball Queue to Clear the Level",
    text: "Successfully attach all numbered balls in your queue without a single pin collision to advance to the next level."
  }
];

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
  },
  {
    question: "Can I play Coreball using keyboard controls?",
    answer: "Yes, you can launch balls by tapping the Spacebar or Up Arrow key, as well as clicking with your mouse or tapping touchscreens on mobile."
  },
  {
    question: "What causes instantaneous defeat in Coreball?",
    answer: "A defeat trigger occurs if the bounding circle of a launched ball intersects with the hitbox of any existing spoke or previously attached pin, requiring an immediate level restart."
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
        howToSteps={coreballHowToSteps}
        category="CasualGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Rotational Timing &amp; Angular Reflexes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Coreball Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The viral rotational arcade challenge inspired by &lsquo;aa&rsquo;. Launch needles into a spinning central core without triggering collisions across escalating stages.
          </p>
        </header>

        {/* Interactive Coreball Game Component */}
        <div className="py-2">
          <CoreballGame />
        </div>

        {/* ── Section 1: Rotational Physics & Reflexes (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Rotational Kinematics &amp; Angular Hitbox Interception
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Coreball is a rotational timing arcade game rooted in circular kinematics and millisecond predictive motor control. Inspired by the 2014 viral mobile hit &lsquo;aa&rsquo; by General Adaptive Apps, players launch numbered pins into a central rotating disc without triggering collisions with existing spokes. Success requires accounting for ball flight velocity, angular clearance margins, and sudden sinusoidal direction reversals.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Angular Physics</div>
                <div className="text-xs text-muted-foreground">Rotational Clearance Arc</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">~150ms Lead</div>
                <div className="text-xs text-muted-foreground">Ball Trajectory Travel Time</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Zero Margin</div>
                <div className="text-xs text-muted-foreground">Instant Collision Failure</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Space / Click</div>
                <div className="text-xs text-muted-foreground">Low Latency Input</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because human visual reaction time averages ~200ms and ball travel consumes ~150ms, reactive clicking after seeing an opening is physically impossible on high-speed levels. Players must execute predictive lead targeting, launching pins based on rhythmic cadence.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Beat Challenging Coreball Levels in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreballHowToSteps.map((step, idx) => (
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
                Dynamic Visual Tracking (Smooth Pursuit)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tracking high-speed rotating spokes trains smooth pursuit eye movements in the ocular motor system, accelerating visual information processing for high-speed sports and racing.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Predictive Lead Timing (Interceptor Reflexes)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Hitting an angular window on a spinning wheel requires leading the target by an exact angular offset ($\omega \times \Delta t$), building precise motor anticipation used in batting, archery, and esports aim.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Rhythmic Cadence &amp; Motor Synchronization
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              When clearing identical gaps in sequence, players synchronize muscle contractions with internal metronomic rhythm, exercising the cerebellum and supplementary motor area (SMA).
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Impulse Inhibition &amp; Micro-Patience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A single premature click destroys an entire attempt. Coreball heavily disciplines impulse control, training players to withhold clicks until optimal alignment occurs.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Rotational Dynamics ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Coreball Escalation Dynamics &amp; Angular Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Stage Tier</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Rotational Velocity (RPM)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Spin Behavior</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Angular Margin of Error</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Recommended Technique</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Early Stages (1–15)</td>
                    <td className="py-2.5 px-3 font-mono">20 – 35 RPM</td>
                    <td className="py-2.5 px-3">Constant unidirectional spin</td>
                    <td className="py-2.5 px-3 text-emerald-500 font-semibold">Generous (&gt; 35°)</td>
                    <td className="py-2.5 px-3">Visual reactive single-click firing</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Mid Stages (16–35)</td>
                    <td className="py-2.5 px-3 font-mono">40 – 60 RPM</td>
                    <td className="py-2.5 px-3">Periodic speed bursts &amp; pauses</td>
                    <td className="py-2.5 px-3 text-amber-500 font-semibold">Moderate (20° – 34°)</td>
                    <td className="py-2.5 px-3">Wait for velocity deceleration dips</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Hard Stages (36–55)</td>
                    <td className="py-2.5 px-3 font-mono">60 – 85 RPM</td>
                    <td className="py-2.5 px-3">Sudden full-spin reversals</td>
                    <td className="py-2.5 px-3 text-rose-500 font-semibold">Tight (12° – 19°)</td>
                    <td className="py-2.5 px-3">Predictive lead shooting on trailing edges</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Nightmare (56+)</td>
                    <td className="py-2.5 px-3 font-mono">85+ RPM</td>
                    <td className="py-2.5 px-3">Sinusoidal oscillation + rapid reversals</td>
                    <td className="py-2.5 px-3 text-rose-600 font-bold">Sub-pixel (&lt; 10°)</td>
                    <td className="py-2.5 px-3">Strict metronomic cadence bursting</td>
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
              Coreball Reflex &amp; Stage Mastery Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating angular timing precision and stage progression:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Stages 1 – 15</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Cadet</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Relies on slow reaction timing. Struggles when needle count exceeds 8 or when core rotation exceeds 35 RPM.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Stages 16 – 35</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Timing Specialist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid lead prediction. Smoothly handles speed fluctuations and times launches into 25° gaps with consistency.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Stages 36 – 55</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Reflex Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Instant adaptation to direction reversals. Deploys rapid double-tap burst launches into passing narrow clearances.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Stages 56+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% globally. Flawless millisecond execution, subconscious lead calculation, and mastery of chaotic oscillations.
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
              4 Pro Tips for Conquering High Coreball Stages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Focus on the Gap, Not the Pins
                </div>
                <p className="text-xs leading-relaxed">
                  Tracking moving needles induces motion sickness and eye strain. Fix your gaze on the bottom launch coordinates and wait for empty space to arrive.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Shoot the Trailing Edge of a Spoke
                </div>
                <p className="text-xs leading-relaxed">
                  Fire immediately after a pin passes the vertical centerline. Because the pin is moving away from the launch path, your collision risk is virtually zero.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Use the Spacebar on Keyboard
                </div>
                <p className="text-xs leading-relaxed">
                  Clicking a mouse button can cause micro-deflections in your hand posture. Tapping the Spacebar offers a direct, travel-efficient tactile actuation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Deploy Rapid Burst Launches on Wide Arcs
                </div>
                <p className="text-xs leading-relaxed">
                  When a massive 90° opening sweeps past, do not shoot just one ball. Double-tap or triple-tap in rhythm to clear 3 balls in a single rotation.
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

        {/* ── Section 8: Related Cognitive & Reflex Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Reflex &amp; Arcade Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your millisecond timing, reaction speed, and precision reflexes across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/reaction-time-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Reaction Time</span>
                <span className="text-xs text-muted-foreground mt-1">Millisecond neurological benchmark →</span>
              </Link>
              <Link href="/aim-trainer" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Aim Trainer</span>
                <span className="text-xs text-muted-foreground mt-1">Reflex target flick accuracy →</span>
              </Link>
              <Link href="/dino-run" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Dino Run</span>
                <span className="text-xs text-muted-foreground mt-1">Side-scroller reflex jump arcade →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
