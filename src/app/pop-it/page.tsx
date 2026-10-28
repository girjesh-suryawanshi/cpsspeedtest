import { GameSEO } from "@/components/game-seo";
import { PopIt } from "@/components/games/pop-it";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Sparkles, Brain, Trophy, Activity, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Award,
  ShieldCheck, Volume2, Smile
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pop-It Simulator – ASMR Sensory Bubble Wrap & Stress Relief Game | CpsSpeedTest",
  description:
    "Play our free Pop-It simulator online. Pop digital silicone bubbles with satisfying ASMR acoustic cues, relieve stress and anxiety, track lifetime pops, and warm up mouse clicks.",
  keywords: [
    "pop-it simulator",
    "bubble wrap game",
    "asmr clicker",
    "stress relief game",
    "fidget toy online",
    "virtual pop it",
    "calming sensory game",
    "mouse warmup pop it",
    "bubble popping game",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/pop-it",
  },
  openGraph: {
    title: "Pop-It Simulator – ASMR Sensory Bubble Game",
    description: "Pop digital silicone bubbles with satisfying ASMR sound cues. A relaxing sensory break for gamers, students, and desk workers.",
    url: "https://www.cpsspeedtest.com/pop-it",
    type: "website",
  },
};

const popItHowToSteps = [
  {
    name: "Hover over the colorful silicone bubble grid",
    text: "Move your cursor or finger over the virtual silicone bubble board to highlight target indentations.",
  },
  {
    name: "Click or tap individual bubbles to pop",
    text: "Clicking a bubble triggers a tactile depression animation accompanied by an authentic acoustic pop tone.",
  },
  {
    name: "Sweep across rows using mouse drag or swipe",
    text: "Hold down the mouse button and sweep across multiple bubbles in a fluid motion to execute rapid multi-pop cascades.",
  },
  {
    name: "Track your lifetime pop counter",
    text: "Every bubble popped automatically increments your persistent score counter, saved locally in your browser storage.",
  },
  {
    name: "Enjoy the seamless auto-restoration reset",
    text: "Once every bubble on the active matrix has been pressed, the board smoothly inverts, resetting all bubbles for continuous popping.",
  },
  {
    name: "Use as a pre-game mouse coordination warmup",
    text: "Gamers can practice rhythmic micro-flicks and finger flexor activation before transitioning to high-intensity CPS or Aim tests.",
  },
];

const popItFaqs = [
  {
    question: "What is the science behind Pop-It fidget toys and stress reduction?",
    answer:
      "Pop-It toys leverage sensory grounding and Autonomous Sensory Meridian Response (ASMR). The combination of visual indentation, tactile mouse actuation, and localized pop acoustic feedback engages the parasympathetic nervous system, helping down-regulate cortisol levels, redirect restless kinesthetic energy, and sustain focus during demanding cognitive tasks.",
  },
  {
    question: "Does the digital Pop-It simulator track lifetime bubble pops?",
    answer:
      "Yes! Every popped bubble automatically increments a cumulative counter persisted in your browser's local storage. You can track your total pops across sessions without losing your progress, providing rewarding sensory progression.",
  },
  {
    question: "How does the board auto-reset mechanism work?",
    answer:
      "Once all bubbles on the active grid have been popped, the simulator triggers a smooth restorative animation, popping all bubbles back out to their initial state so you can enjoy uninterrupted, continuous sensory clicking without manual refreshing.",
  },
  {
    question: "Can desktop mouse users practice speed-clicking on Pop-It?",
    answer:
      "Yes. Many competitive gamers use Pop-It grids as a low-stress mouse accuracy warmup to practice precision cursor placement, micro-flicks, and trigger-finger coordination before transitioning to the Aim Trainer or CPS tests.",
  },
  {
    question: "Is this simulator optimized for touchscreens and mobile devices?",
    answer:
      "Yes, the digital silicone grid supports multi-touch actuation on smartphones and tablets, allowing players to pop multiple bubbles simultaneously using multi-finger sweeps and gestures.",
  },
  {
    question: "Who invented the original bubble wrap and Pop-It concepts?",
    answer:
      "Bubble Wrap was accidentally invented in 1957 by engineers Alfred Fielding and Marc Chavannes in Hawthorne, New Jersey, originally intended as textured wallpaper. The modern silicone Pop-It toy was conceptualized in 1975 by toy inventors Theo and Ora Coster of Theora Design and popularized globally in 2019–2020 via sensory ASMR videos.",
  },
  {
    question: "How does sensory fidgeting assist individuals with ADHD or anxiety?",
    answer:
      "According to the Optimal Stimulation Theory, individuals with ADHD naturally seek mild sensory inputs to bring their arousal level up to an optimal state. Tactile fidgeting acts as an unconscious sensory buffer that absorbs background restlessness, allowing the prefrontal cortex to focus on primary tasks like studying or reading.",
  },
];

export default function PopItPage() {
  return (
    <>
      <GameSEO
        name="Pop-It Simulator – ASMR Sensory Bubble Wrap"
        description="Pop digital silicone bubbles with satisfying ASMR tactile sound cues. A relaxing sensory break for gamers, students, and desk workers."
        url="https://www.cpsspeedtest.com/pop-it"
        faqs={popItFaqs}
        howToSteps={popItHowToSteps}
        category="ArcadeGame"
        lastUpdated="October 2026"
        benefits="Reduce cognitive anxiety through ASMR sensory feedback, redirect restless fidgeting energy, practice low-stress mouse micro-flicks, and enjoy endless soothing bubble wrap popping."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tactile ASMR Sensory &amp; Stress Relief Simulator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Pop-It Simulator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pop virtual silicone bubbles with authentic ASMR acoustic feedback. Unwind from stress, redirect restless fidgeting energy, and warm up your mouse clicks.
          </p>
        </header>

        {/* Interactive Pop-It Component */}
        <PopIt />

        {/* Section 1: What is Pop-It? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Pop-It Simulator?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Pop-It Simulator</strong> is an interactive digital adaptation of the popular silicone fidget toy and classic bubble wrap. Designed for relaxation, sensory grounding, and mouse dexterity warmup, it provides satisfying tactile visual depressions accompanied by calibrated <strong>ASMR acoustic sound pulses</strong> that engage the parasympathetic nervous system to soothe anxiety and redirect restlessness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Acoustic Feedback</span>
                <span className="text-lg font-black text-primary">Calibrated ASMR</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Authentic silicone pop cues</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Primary Function</span>
                <span className="text-lg font-black text-amber-500">Stress Reduction</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Parasympathetic down-regulation</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Progress Tracking</span>
                <span className="text-lg font-black text-emerald-500">Persistent Pops</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Stored locally across sessions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Use the Pop-It Simulator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {popItHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Use Pop-It? Sensory Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Sensory &amp; Relaxation Benefits of Virtual Fidgeting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Smile className="w-4 h-4" />
                  Stress &amp; Cortisol Down-Regulation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Repetitive sensory micro-actions trigger mild dopamine release while down-regulating autonomic stress hormones. Taking a 2-minute Pop-It break between work calls resets mental tension without cognitive strain.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Brain className="w-4 h-4" />
                  Sensory Grounding for ADHD &amp; Anxiety
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Grounding your senses through predictable physical clicks prevents overthinking and mental spiraling. It provides an unobtrusive motor outlet that helps neurodiverse users channel surplus kinesthetic energy.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Volume2 className="w-4 h-4" />
                  ASMR Auditory Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Clean, low-frequency bubble pop sound cues stimulate the auditory cortex without loudness fatigue. The rhythmic popping provides auditory satisfaction that promotes calm emotional focus.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  Low-Intensity Mouse Warmup
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Before jumping into intense competitive shooters or rapid CPS tests, sweeping across the bubble grid warms up your forearm muscles and calibrates mouse grip tension with zero penalty pressure.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Tactile Sensory Mechanics */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Comparison: Digital Pop-It vs Physical Fidget Toys
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Feature Dimension</th>
                  <th className="p-3">Virtual Pop-It Simulator</th>
                  <th className="p-3">Physical Silicone Toy</th>
                  <th className="p-3">Traditional Bubble Wrap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Reset Mechanism</td>
                  <td className="p-3 text-emerald-400 font-semibold">Instant Automatic Reset</td>
                  <td className="p-3">Manual flip required</td>
                  <td className="p-3 text-rose-400 font-semibold">Single-use (plastic waste)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Audio Customization</td>
                  <td className="p-3 text-primary font-semibold">Calibrated volume / mute options</td>
                  <td className="p-3">Fixed sound level</td>
                  <td className="p-3">Loud sharp burst</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Score Persistence</td>
                  <td className="p-3 text-emerald-400 font-bold">Local storage lifetime counter</td>
                  <td className="p-3">None</td>
                  <td className="p-3">None</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Mouse Coordination</td>
                  <td className="p-3 text-cyan-400 font-semibold">Direct cursor tracking practice</td>
                  <td className="p-3">Finger touch only</td>
                  <td className="p-3">Finger pinch only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Pop-It Lifetime Milestone Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Break</div>
              <div className="text-2xl font-black text-foreground">50 – 250 Pops</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A brief 60-second sensory pause to reset eyes and fingers during intense computer study or work sessions.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Sensory Regular</div>
              <div className="text-2xl font-black text-primary">500 – 1,500 Pops</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Consistent fidget companion. Used regularly during podcast listening, webinar viewing, or gaming queue times.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">ASMR Enthusiast</div>
              <div className="text-2xl font-black text-amber-500">2,000 – 5,000 Pops</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dedicated bubble popper. Smooth multi-row sweeping technique and high persistent counter milestones.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Zen Grandmaster</div>
              <div className="text-2xl font-black text-rose-500">10,000+ Pops</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ultimate popping dedication. Completely stress-free, zen-like state with effortless rhythmic sweeps.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Relaxation Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            How to Get the Most Out of Your Pop-It Session
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Wear Headphones for Spatial ASMR</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Listening with stereo headphones enhances the localized acoustic resonance of each pop, maximizing parasympathetic calming effects.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Sync Popping with Deep Breathing</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Inhale slowly for 4 pops, hold for 4 pops, and exhale for 4 pops (Box Breathing). Combining breathwork with tactile clicking reduces heart rate.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Practice Fluid Sweeping Gestures</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Instead of clicking every bubble individually, hold down the mouse button and sweep continuously along rows like playing an accordion.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Use as a Gaming Queue Filler</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Keep the Pop-It tab open in the background to pop bubbles while waiting in matchmaking queues (League of Legends, Valorant, Overwatch).
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
            {popItFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Arcade Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Relaxing Games &amp; Clickers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/idle-clicker"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Idle Clicker</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/drawing-pad"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Drawing Pad</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/cps-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">CPS Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/aim-trainer"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Aim Trainer</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
