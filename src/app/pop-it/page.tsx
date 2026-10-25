import { GameSEO } from "@/components/game-seo";
import { PopIt } from "@/components/games/pop-it";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Sparkles, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pop-It Simulator – ASMR Sensory Bubble Wrap & Stress Relief Game | CpsSpeedTest",
  description: "Play our free Pop-It simulator online. Pop digital silicone bubbles with satisfying ASMR acoustic cues, relax your mind, and benchmark sensory click coordination.",
  keywords: ['pop-it simulator', 'bubble wrap game', 'asmr clicker', 'stress relief game', 'fidget toy online', 'virtual pop it', 'calming sensory game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/pop-it',
  },
  openGraph: {
    title: "Pop-It Simulator – ASMR Sensory Bubble Game",
    description: "Pop digital silicone bubbles with satisfying ASMR tactile sound cues. A relaxing sensory break for gamers and desk workers.",
    url: 'https://www.cpsspeedtest.com/pop-it',
    type: 'website',
  },
};

const popItFaqs = [
  {
    question: "What is the science behind Pop-It toys and stress reduction?",
    answer: "Pop-It toys leverage sensory grounding and Autonomous Sensory Meridian Response (ASMR). The combination of visual indentation, tactile mouse actuation, and localized pop acoustic feedback engages the parasympathetic nervous system, helping down-regulate cortisol levels and redirect restless fidgeting energy during high-cognitive tasks."
  },
  {
    question: "Does the digital Pop-It simulator track lifetime bubble pops?",
    answer: "Yes, every popped bubble automatically increments a cumulative counter persisted in your browser's local storage. You can track your total pops across sessions without losing your progress."
  },
  {
    question: "How does the board auto-reset mechanism work?",
    answer: "Once all bubbles on the active grid have been popped, the simulator triggers a smooth restorative animation, popping all bubbles back out to their initial state so you can enjoy uninterrupted, continuous sensory clicking without manual refreshing."
  },
  {
    question: "Can desktop mouse users practice speed-clicking on Pop-It?",
    answer: "Yes. Many competitive gamers use Pop-It grids as a low-stress mouse accuracy warmup to practice precision cursor placement, micro-flicks, and trigger-finger coordination before transitioning to the Aim Trainer or CPS tests."
  },
  {
    question: "Is this simulator optimized for touchscreens and mobile devices?",
    answer: "Yes, the digital silicone grid supports multi-touch actuation on smartphones and tablets, allowing players to pop multiple bubbles simultaneously using multi-finger sweeps."
  }
];

export default function PopItPage() {
  return (
    <>
      <GameSEO 
        name="Pop-It Simulator"
        description="Pop the bubbles! A relaxing, hyper-casual ASMR Pop-It simulator to relieve stress, practice mouse precision, and satisfy clicking urges."
        url="https://www.cpsspeedtest.com/pop-it"
        faqs={popItFaqs}
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sensory ASMR &amp; Tactile Stress Relief</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Pop-It Simulator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pop digital silicone bubbles in this satisfying ASMR sensory experience. Relieve mental fatigue, satisfy clicking impulses, and track your total lifetime pops.
          </p>
        </header>

        {/* Pop-It Component */}
        <div className="py-2">
          <PopIt />
        </div>

        {/* ── Section 1: Sensory Psychology & Attention Restoration (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Psychology of Fidgeting &amp; Attention Restoration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In behavioral psychology, tactile fidgeting is not a sign of distraction—it is a physiological mechanism known as <strong>sensory grounding</strong>. According to <em>Attention Restoration Theory</em> (ART), prolonged intense cognitive focus (such as coding, reading, or competitive gaming) depletes directed attentional reserves in the prefrontal cortex.
            </p>
            <p>
              Interacting with a repetitive, low-cognitive sensory activity like a digital Pop-It allows voluntary attention networks to rest while engaging passive involuntary attention. The auditory click paired with visual indentation releases subtle dopamine pulses, resetting mental clarity in just 60 to 90 seconds.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Sensory Tiers & Lifetime Pop Milestones ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Sensory Fidgeting Milestones (Lifetime Bubble Pops)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where does your lifetime bubble popping count stand? Compare your fidgeting score against community milestones:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🫧</div>
                <div className="font-bold text-foreground">Under 100 Pops</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Micro-Break</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A quick sensory reset between tasks. Clears a single board to relieve typing stiffness.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">✨</div>
                <div className="font-bold text-foreground">100 – 499 Pops</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Sensory Enthusiast</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Regular desk fidgeter. Clears multiple boards while listening to podcasts or thinking through code problems.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">500 – 2,499 Pops</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Master Popper</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High motor coordination. Rapid finger and mouse sweep patterns that clear entire 25-bubble grids in seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">2,500+ Pops</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Zen Grandmaster</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% sensory dedication. Thousands of pops registered, utilizing the simulator as a daily stress-relief anchor.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Fine Motor Warmup & Gaming Benefits ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Fine Motor Warmup for Esports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Flick &amp; Target Practice:</strong> Practice clicking bubbles in randomized non-adjacent order to warm up mouse sensor tracking and index finger stop-power.
                </li>
                <li>
                  <strong className="text-foreground">Tendon Relaxation:</strong> Popping bubbles with a light, relaxed finger motion alleviates forearm tightness caused by intense jitter clicking.
                </li>
                <li>
                  <strong className="text-foreground">Bilateral Finger Conditioning:</strong> Alternate between clicking with your index and middle fingers to prepare for <Link href="/butterfly-click-test" className="text-primary hover:underline">Butterfly Clicking</Link>.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Speed &amp; Clicking Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                From casual relaxation to high-speed competitive tests, explore our full clicking suite:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/idle-clicker" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Idle Clicker</span>
                  <span className="text-primary font-mono">Incremental Wealth Building →</span>
                </Link>
                <Link href="/cps-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">CPS Speed Test</span>
                  <span className="text-primary font-mono">Measure Clicks Per Second →</span>
                </Link>
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Precision Target Snapping →</span>
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
              Frequently Asked Questions About Pop-It
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {popItFaqs.map((faq, index) => (
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
