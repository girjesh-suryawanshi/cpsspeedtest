import { GameSEO } from "@/components/game-seo";
import { DinoRun } from "@/components/games/dino-run";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Zap, Trophy, Activity, Compass, CheckCircle2,
  HelpCircle, ArrowRight, TrendingUp, Sparkles, Award,
  ShieldCheck, Eye, Flame
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dino Run – Play Classic Chrome T-Rex Runner Online & Strategy Guide | CpsSpeedTest",
  description:
    "Play the legendary offline Chrome Dino Run T-Rex game online. Jump cacti and duck pterodactyls, master variable jump trajectory physics, navigate night mode, and beat your high score.",
  keywords: [
    "dino run",
    "t-rex runner",
    "chrome dino game",
    "offline dinosaur game",
    "endless runner online",
    "dino jump game",
    "project bolan chrome",
    "chrome t rex high score",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/dino-run" },
  openGraph: {
    title: "Dino Run – Play Classic Chrome T-Rex Runner Online",
    description: "Play the classic Chrome T-Rex endless runner in your browser. Master jump physics and set a new high score.",
    url: "https://www.cpsspeedtest.com/dino-run",
    type: "website",
  },
};

const dinoHowToSteps = [
  {
    name: "Launch the runner with Spacebar or Tap",
    text: "Press the Spacebar or Up Arrow on desktop, or tap the runner console on mobile, to make the T-Rex jump and start the world scrolling.",
  },
  {
    name: "Master variable jump height control",
    text: "Lightly tap Spacebar for a low short-hop over single small cacti; press and hold Spacebar for maximum airtime over triple-cactus clusters.",
  },
  {
    name: "Fast-drop and duck using the Down Arrow",
    text: "Press Down Arrow while airborne to fast-fall back to the ground instantly. On the ground, hold Down Arrow to duck under low-flying pterodactyls.",
  },
  {
    name: "Direct your visual focus ahead of the dinosaur",
    text: "Never look directly at the T-Rex. Fixate your eyes approximately 2 to 3 inches ahead on the right edge of the screen to maximize reaction buffer.",
  },
  {
    name: "Adapt to the day-night color inversion",
    text: "At 700 points, the desert shifts to an inverted night palette. Maintain visual tracking during the 100-point nocturnal transition.",
  },
  {
    name: "Survive accelerating desert scroll speeds",
    text: "Every 100 points, the ground accelerates. Focus on rhythmic muscle memory and rapid landing resets to push past 2,000+ points.",
  },
];

const dinoRunFaqs = [
  {
    question: "What is the historical origin of the Chrome Dino T-Rex game?",
    answer:
      "Created in September 2014 by Google UX designers Sebastien Gabriel, Alan Bettes, and Edward Jung under the internal codename 'Project Bolan' (named after Marc Bolan, lead singer of 1970s glam rock band T. Rex), the game was an Easter egg designed to entertain users stranded without an internet connection—the prehistoric dinosaur representing an era before Wi-Fi existed.",
  },
  {
    question: "How do jump height and airborne duration mechanics work?",
    answer:
      "The T-Rex's jump trajectory is variable and physics-based: a brief tap of the Spacebar or Up Arrow produces a quick short-hop with minimal hang time, while holding the key down sustains upward vertical thrust for maximum clearance across dense triple-cactus clusters. Pressing Down Arrow while airborne applies instant downward gravitational velocity, enabling fast-drops.",
  },
  {
    question: "Does the Dino Run game ever end or have a final level?",
    answer:
      "The game is engineered as an endless runner with an internal mathematical cap of 99,999 points, at which point the score counter rolls back over to zero. Reaching this mathematical cap requires approximately 17 hours of continuous, uninterrupted play without a single obstacle collision.",
  },
  {
    question: "What is the optimal eye-tracking strategy for high scores in Dino Run?",
    answer:
      "Do not watch the dinosaur! Top players anchor their gaze approximately 2 to 3 inches ahead on the right side of the screen where obstacles first emerge from the horizon. This grants your visual cortex an extra 100ms to 150ms of reaction buffer before initiating a jump.",
  },
  {
    question: "At what score does the game shift from day to night mode?",
    answer:
      "The game transitions to an inverted dark mode (black background with white sprites) at 700 points. The night cycle lasts for 100 points before shifting back to day mode at 800 points, repeating this day/night cycle every 700 points throughout the run.",
  },
  {
    question: "How do you dodge pterodactyls safely?",
    answer:
      "Pterodactyls spawn at three distinct flight altitudes: high (clears above you without action), medium (requires holding Down Arrow to duck), and low (requires jumping over them like a cactus). Memorizing these three elevation cues is essential for runs above 1,500 points.",
  },
  {
    question: "What cognitive skills does playing Dino Run develop?",
    answer:
      "Dino Run trains ocular saccadic tracking, rapid visual-motor reaction time, anticipatory motor planning, and stress resilience under escalating velocity pressure.",
  },
];

export default function DinoRunPage() {
  return (
    <>
      <GameSEO
        name="Dino Run – Classic Chrome T-Rex Runner"
        description="Play the legendary offline Chrome Dino Run T-Rex game online. Jump cacti and pterodactyls, master jump trajectory physics, and discover high-score strategies."
        url="https://www.cpsspeedtest.com/dino-run"
        faqs={dinoRunFaqs}
        howToSteps={dinoHowToSteps}
        category="ArcadeGame"
        lastUpdated="October 2026"
        benefits="Sharpen high-speed visual-motor reaction time, master variable jump trajectory physics, enhance anticipatory eye-tracking, and enjoy classic Google Chrome arcade nostalgia."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Google Chrome &apos;Project Bolan&apos; (2014) Endless Runner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Dino Run T-Rex Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Jump over cacti, duck beneath pterodactyls, master variable jump physics, and navigate day-night cycles in this browser arcade classic.
          </p>
        </header>

        {/* Interactive Game Component */}
        <DinoRun />

        {/* Section 1: What is Dino Run? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Chrome Dino Run Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Dino Run</strong> (officially known as the <em>Chrome Dino</em> or <em>T-Rex Runner</em>) is an endless side-scrolling runner game originally integrated into Google Chrome in 2014. The player guides a pixelated Tyrannosaurus rex across a prehistoric desert landscape, jumping over cacti and ducking under pterodactyls at continuously accelerating speeds to achieve the highest possible distance score.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Origin Project</span>
                <span className="text-lg font-black text-primary">Project Bolan</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Google Chrome (Sept 2014)</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Night Mode Shift</span>
                <span className="text-lg font-black text-amber-500">700 Points</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Inverts day/night palette</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Max Score Limit</span>
                <span className="text-lg font-black text-emerald-500">99,999 Points</span>
                <span className="text-xs text-muted-foreground block mt-0.5">~17 hours continuous run</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Play and Survive Longer in Dino Run
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {dinoHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Play Dino Run? Cognitive Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive &amp; Reflex Benefits of Playing Dino Run
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Eye className="w-4 h-4" />
                  Anticipatory Saccadic Eye-Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Fixating your gaze on the emerging right horizon forces your visual system to decode obstacles in peripheral awareness, training rapid saccadic eye movements used in sports, driving, and fast-paced gaming.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Zap className="w-4 h-4" />
                  Variable Neuromuscular Timing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Alternating between light short-hops and deep sustained key-holds develops fine motor discrimination in finger flexor muscles, preventing heavy-handed spastic tapping.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Visual Inversion Adaptation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When the world inverts from daytime white to nocturnal dark mode at 700 points, your rod and cone photoreceptors must adapt instantly without dropping attention or mistiming a jump.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Flame className="w-4 h-4" />
                  High-Speed Sensory Filtering
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Beyond 2,000 points, ground speed exceeds 1,000 pixels per second. Surviving at top speeds forces the brain to filter out decorative background clouds and focus purely on obstacle hitboxes.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Jump Trajectory & Obstacle Types */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Obstacle Breakdown &amp; Ideal Evasion Mechanics
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Obstacle Threat</th>
                  <th className="p-3">Appearance Threshold</th>
                  <th className="p-3">Required Action</th>
                  <th className="p-3">Common Failure Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Single Small Cactus</td>
                  <td className="p-3">Level Start (0 pts)</td>
                  <td className="p-3 text-emerald-400 font-semibold">Light Tap (Short Hop)</td>
                  <td className="p-3">Over-jumping and landing on a consecutive cactus</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Triple Cactus Cluster</td>
                  <td className="p-3">400+ Points</td>
                  <td className="p-3 text-primary font-semibold">Full Key-Hold (Max Hang Time)</td>
                  <td className="p-3">Jumping too late and clipping the third cactus tail</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">High Pterodactyl</td>
                  <td className="p-3">450+ Points</td>
                  <td className="p-3 text-emerald-400 font-semibold">Do Nothing (Walks beneath)</td>
                  <td className="p-3 text-rose-400 font-bold">Panic-jumping into the bird&apos;s wings</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Medium Pterodactyl</td>
                  <td className="p-3">500+ Points</td>
                  <td className="p-3 text-amber-400 font-semibold">Hold Down Arrow (Duck)</td>
                  <td className="p-3">Attempting to jump over and clipping the beak</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Low Pterodactyl</td>
                  <td className="p-3">600+ Points</td>
                  <td className="p-3 text-rose-400 font-semibold">Standard Jump (Clear over top)</td>
                  <td className="p-3">Attempting to duck under ground-level flight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Dino Run Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Casual Hopper</div>
              <div className="text-2xl font-black text-foreground">100 – 499 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Easily clears early single cacti but struggles when the desert begins accelerating toward 500 points.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Desert Veteran</div>
              <div className="text-2xl font-black text-primary">500 – 1,499 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Smoothly navigates the first day-night inversion at 700 points and dodges basic pterodactyl flight patterns.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Reflex Master</div>
              <div className="text-2xl font-black text-amber-500">1,500 – 3,999 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 5% arcade tier. Flawless variable jump height, instant fast-drop resets, and relaxed peripheral horizon gaze.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Prehistoric Legend</div>
              <div className="text-2xl font-black text-rose-500">4,000 – 10,000+ Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite tier. Survives maximum terminal desert velocity across multiple day-night cycles with microsecond precision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Tips to Push Your High Score Beyond 2,000 Points
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Use Fast-Drop (Down Arrow) Generously</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Once your T-Rex clears an obstacle, tap Down Arrow in mid-air to slam down to earth immediately. This resets your jump readiness before the next cactus arrives.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Never Watch the Dinosaur</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Looking at the dinosaur creates visual latency. Focus your eyes 2 to 3 inches ahead on the right edge of the canvas to see obstacles the moment they spawn.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Differentiate High vs Medium Birds</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    High pterodactyls fly above your head and require zero input. Ducking or jumping under high birds wastes focus and misaligns your rhythm for the next jump.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Keep Hands Relaxed on Arrow Keys</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Position your index finger on Up Arrow and middle finger on Down Arrow. Relax your wrist to avoid isometric tension during long runs.
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
            {dinoRunFaqs.map((faq, index) => (
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
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Classic Arcade Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/snake"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Classic Snake</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/aim-trainer"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">FPS Aim Trainer</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/2048"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">2048 Puzzle</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
