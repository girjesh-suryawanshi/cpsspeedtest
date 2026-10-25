import { GameSEO } from "@/components/game-seo";
import { DinoRun } from "@/components/games/dino-run";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Zap, Trophy, Activity, Compass, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dino Run – Play Classic Chrome T-Rex Runner Online & Strategy Guide | CpsSpeedTest",
  description: "Play the legendary offline Chrome Dino Run T-Rex game online. Jump cacti and pterodactyls, master jump trajectory physics, and discover high-score strategies.",
  keywords: ['dino run', 't-rex runner', 'chrome dino game', 'offline dinosaur game', 'endless runner online', 'dino jump game'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/dino-run' },
};

const dinoRunFaqs = [
  {
    question: "What is the historical origin of the Dino Run T-Rex game?",
    answer: "Created in September 2014 by Google engineers Sebastien Gabriel, Alan Bettes, and Edward Jung under the internal codename 'Project Bolan' (named after Marc Bolan of 1970s glam rock band T. Rex), the game was an Easter egg designed to entertain users stranded with no internet connection—the prehistoric dinosaur representing an era before Wi-Fi existed."
  },
  {
    question: "How do jump height and duration mechanics work?",
    answer: "The T-Rex's jump height is variable based on actuation duration: tapping the Spacebar or Up Arrow lightly executes a low short-hop, whereas holding the key keeps the dinosaur airborne for maximum clearance across triple-cactus clusters."
  },
  {
    question: "Does the Dino Run game ever end or have a final level?",
    answer: "The game is designed as an endless runner with a mathematical cap of 99,999 points (at which point the score counter rolls over back to 0). It is estimated that reaching the max score requires approximately 17 continuous hours of play without a single collision."
  },
  {
    question: "What is the best eye-tracking strategy for high scores in Dino Run?",
    answer: "Do not look at the dinosaur! High scorers fixate their gaze approximately 2 to 3 inches ahead on the right edge of the screen where obstacles first appear. This gives your visual cortex an extra 100–150ms of reaction buffer before initiating a jump."
  }
];

export default function DinoRunPage() {
  return (
    <>
      <GameSEO 
        name="Dino Run – Classic Chrome T-Rex Runner"
        description="Play the legendary offline Chrome Dino Run T-Rex game online. Jump cacti and pterodactyls, master jump trajectory physics, and discover high-score strategies."
        url="https://www.cpsspeedtest.com/dino-run"
        faqs={dinoRunFaqs}
        category="ArcadeGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>The Iconic &quot;No Internet&quot; Chrome T-Rex Runner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Dino Run
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The legendary offline T-Rex jump game. Leap over desert cacti and flying pterodactyls, time your gravitational arcs, and chase your personal high score.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <div className="py-2">
          <DinoRun />
        </div>

        {/* ── Section 1: History & Project Bolan (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Origins of the T-Rex: The Story Behind &quot;Project Bolan&quot;
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In September 2014, Google Chrome rolled out an Easter egg that would become one of the most played video games in human history. Conceived by Chrome designer <strong>Sebastien Gabriel</strong>, the concept was built around a humorous metaphor: losing your internet connection is like being trapped in the prehistoric age before modern technology.
            </p>
            <p>
              The pixel-art pixelated Tyrannosaurus Rex was codenamed <strong>Project Bolan</strong>, paying homage to Marc Bolan, the lead singer of the 1970s rock band <em>T. Rex</em>. Today, the game logs an estimated <strong>270 million plays per month</strong> worldwide across desktop and mobile devices.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Jump Physics & Obstacle Collision Mechanics ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              Jump Physics &amp; Progressive Speed Acceleration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              While Dino Run appears elementary, its underlying physics engine relies on tight parabolic trajectories:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">Velocity Scaling Over Distance</h4>
                <p className="text-xs text-muted-foreground">
                  The game starts at a leisurely <strong>6 pixels per frame</strong> (roughly 360 px/sec at 60 FPS). Every 100 points, the ground accelerates, reaching maximum terminal speed around score 10,000 where obstacle detection windows shrink to less than 200 milliseconds.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">Hitbox Geometry &amp; Forgiveness</h4>
                <p className="text-xs text-muted-foreground">
                  The T-Rex&apos;s bounding box is slightly smaller than its rendered sprite. This intentional design forgiveness allows for dramatic near-miss leaps over triple-cactus clusters where your tail or snout technically overlaps the pixel boundary.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Score Benchmarks (GEO Tier Table) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Dino Run High Score Tiers &amp; Distance Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How does your survival score compare to global benchmarks? Here is how distances classify:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">0 – 499 Pts</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual Starter</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Baseline navigation pace. The T-Rex moves at slow, comfortable speeds with single cactus obstacles.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">500 – 1,499 Pts</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate Runner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Speed increases noticeably. Pterodactyls begin spawning, requiring duck vs jump decision making.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐆</div>
                <div className="font-bold text-foreground">1,500 – 3,499 Pts</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Survivor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">High speed demands peripheral gaze anticipation and micro-jumps over unevenly spaced clusters.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🦖</div>
                <div className="font-bold text-foreground">3,500+ Pts</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Dino Master Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 2% runner speed. Requires instantaneous muscle reflex and sustained focus over several minutes.</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Looking for more arcade and reflex challenges? Test your visual timing on the <Link href="/reaction-time-test" className="text-primary hover:underline font-semibold">Reaction Time Test</Link> or navigate the retro grid in <Link href="/snake" className="text-primary hover:underline font-semibold">Classic Snake</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 4: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {dinoRunFaqs.map((faq, index) => (
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
