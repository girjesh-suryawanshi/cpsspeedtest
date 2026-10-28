import { GameSEO } from "@/components/game-seo";
import { SpacebarTest } from "@/components/spacebar-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Zap, Trophy, Activity, Keyboard, HelpCircle, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass, Brain } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Stimulation Clicker – 30-Second Spacebar Endurance & HPS Benchmark | CpsSpeedTest',
  description: 'Test your keyboard tapping stamina with our 30-second Stimulation Clicker challenge. Measure sustained Hits Per Second (HPS), spacebar fatigue resistance, and thumb ergonomics.',
  keywords: ['stimulation clicker', '30 second spacebar test', 'spacebar clicker 30s', 'keyboard tapping stamina', 'hps test', 'spacebar endurance benchmark', 'keyboard speed challenge', 'spacebar tapping fatigue'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/stimulation-clicker',
  },
  openGraph: {
    title: 'Stimulation Clicker – 30-Second Spacebar Endurance Challenge',
    description: 'Benchmark your sustained keyboard tapping rate and stamina over an intense 30-second spacebar endurance trial.',
    url: 'https://www.cpsspeedtest.com/stimulation-clicker',
    type: 'website',
  },
};

const stimulationHowToSteps = [
  {
    name: "Position Thumbs Over the Spacebar Center",
    text: "Place your keyboard flat on your desk and rest your dominant thumb (or both thumbs) near the mechanical center switch to avoid stabilizer rattle."
  },
  {
    name: "Tap Spacebar to Trigger the 30-Second Trial",
    text: "Strike the spacebar once or click the target box to start the 30-second countdown immediately. The timer tracks every millisecond actuation."
  },
  {
    name: "Adopt a Sustainable Pacing Cadence",
    text: "Resist burning out all stamina in the first 5 seconds. Aim for an even, metronomic cadence (e.g. 7–8 HPS) that you can sustain for half a minute."
  },
  {
    name: "Deploy Dual-Thumb Alternating Taps",
    text: "For maximum stamina, alternate rapid taps between your left and right thumbs. This splits muscular workload and delays lactic acid fatigue."
  },
  {
    name: "Fight Late-Stage Forearm Fatigue",
    text: "Between seconds 20 and 30, muscle burn intensifies. Keep your wrists relaxed and tap from the knuckles rather than tensing the entire forearm."
  },
  {
    name: "Review Total Hits and Average HPS",
    text: "When 30 seconds expire, analyze your total hits, average Hits Per Second, and fatigue decay curve across the trial."
  }
];

const stimulationFaqs = [
  {
    question: "What is the difference between a 5-second spacebar test and this 30-second challenge?",
    answer: "A 5-second test measures instantaneous anaerobic burst speed powered by the body's phosphagen energy system (ATP-PC). The 30-second Stimulation Clicker tests sustained neuromuscular endurance, forcing your thumb and forearm flexor muscles to manage lactic acid buildup while maintaining a consistent Hits Per Second (HPS) rhythm."
  },
  {
    question: "What is a good score on the 30-second spacebar stimulation challenge?",
    answer: "A score of 150 to 209 hits (5.0 to 6.9 HPS) represents the typical adult baseline. Reaching 210 to 269 hits (7.0 to 8.9 HPS) reflects advanced endurance, while exceeding 270+ total hits (9.0+ average HPS) places you in the top 2% of competitive keyboard tappers."
  },
  {
    question: "Which tapping technique maintains the highest speed over 30 seconds?",
    answer: "The dual-thumb alternating technique or the thumb-index pinch method. Alternating between the left and right thumbs across the spacebar halves individual muscle fatigue, allowing you to sustain 9 to 12 HPS far longer than single-thumb tapping."
  },
  {
    question: "How do keyboard spacebar stabilizers impact tapping speed?",
    answer: "Because the spacebar is the longest keycap on a keyboard, it utilizes mechanical wire stabilizers (Cherry-style or Costar). High friction or rattling stabilizers absorb downward energy and slow key rebound. Mechanical keyboards with lubed linear switches (like Cherry MX Red or Gateron Yellow) provide superior return snap."
  },
  {
    question: "Can rapid 30-second spacebar tapping cause hand cramps?",
    answer: "Yes. Sustained isometric tension can cause muscle cramping in the thenar eminence (base of the thumb) and forearm. Always stretch your wrists, avoid locking your thumb joint rigid, and stop immediately if you experience sharp pain or burning sensations."
  },
  {
    question: "How does spacebar tapping stamina transfer to competitive gaming?",
    answer: "Many esports genres (bunny-hopping in Counter-Strike/Valorant, rhythm games like osu!mania, and platformer speedruns) require precise, sustained actuation cadence. Developing stamina ensures jump inputs register consistently without late-match finger fatigue."
  },
  {
    question: "Does the spacebar size and profile affect your HPS score?",
    answer: "Yes. Low-profile mechanical switches and shorter travel distances (such as 1.2mm actuation on speed switches vs 2.0mm standard) reduce actuation time by up to 30%, resulting in higher sustained HPS with significantly less finger exertion."
  }
];

export default function StimulationClickerPage() {
  return (
    <>
      <GameSEO 
        name="Stimulation Clicker"
        description="A 30-second spacebar endurance challenge. Benchmark your tapping speed, stamina, and Hits Per Second (HPS) over an extended trial."
        url="https://www.cpsspeedtest.com/stimulation-clicker"
        faqs={stimulationFaqs}
        howToSteps={stimulationHowToSteps}
        category="SkillGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Neuromuscular Stamina &amp; 30s HPS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Stimulation Clicker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The 30-second spacebar endurance benchmark. Test muscular stamina, fight lactic acid fatigue in your thumb, and sustain peak Hits Per Second (HPS) over a grueling half-minute trial.
          </p>
        </header>

        {/* Spacebar Test Component */}
        <div className="py-2">
          <SpacebarTest defaultDuration={30} availableDurations={[5, 10, 15, 30, 60]} />
        </div>

        {/* ── Section 1: Neuromuscular Physiology & AEO ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Physiology of 30-Second Spacebar Stamina (HPS)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              The Stimulation Clicker is an endurance tapping benchmark evaluating sustained neuromuscular output and motor stamina over 30 continuous seconds. Measured in Hits Per Second (HPS), maintaining high repetition rates forces thumb and forearm flexor muscles to transition from rapid ATP-CP phosphagen power into anaerobic glycolysis, measuring resistance to peripheral fatigue and stabilizer friction.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">30 Seconds</div>
                <div className="text-xs text-muted-foreground">Endurance Duration</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">HPS Metric</div>
                <div className="text-xs text-muted-foreground">Hits Per Second</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">180 – 240 Hits</div>
                <div className="text-xs text-muted-foreground">Adult Average Baseline</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Sub-ms Timing</div>
                <div className="text-xs text-muted-foreground">performance.now() Engine</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              While a 5-second test reflects raw explosive power, the 30-second trial exposes fatigue decay. Tappers who start at 10 HPS frequently plummet to 4 HPS by second 25 unless they employ alternating two-thumb pacing techniques.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Maximize Your 30s Spacebar Score in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stimulationHowToSteps.map((step, idx) => (
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
                Motor Endurance &amp; Pacing Discipline
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Managing muscle output across 30 seconds requires metabolic pacing control in the motor cortex, conditioning the central nervous system to allocate physical energy strategically without premature exhaustion.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Esports Movement Precision (Bunny-Hopping)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Competitive games like CS2, Apex Legends, and Quake rely heavily on rhythmic spacebar jumping for movement tech. Conditioning your thumb prevents input stutter and late-game fatigue during tournament matches.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Lactic Acid Tolerance &amp; Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Repeated high-frequency trials condition forearm flexor and thumb thenar muscles to buffer lactic acid, building localized muscular stamina and accelerating inter-round recovery.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Hardware Switch Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A 30-second trial exposes switch bounce delay, stabilizer rattle, and heavy spring weights, giving gamers objective telemetry on whether their keyboard hardware is optimized for speed.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Duration vs Stamina Decay ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Duration Scaling &amp; Neuromuscular Fatigue Decay Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Trial Duration</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Primary Energy System</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Average Adult HPS</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Fatigue Factor</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Optimal Tapping Technique</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">5 Seconds</td>
                    <td className="py-2.5 px-3">ATP-CP Phosphagen (Pure Burst)</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">8.2 – 11.5 HPS</td>
                    <td className="py-2.5 px-3 text-emerald-500 font-semibold">&lt; 5% Decay</td>
                    <td className="py-2.5 px-3">Single-thumb maximum effort burst</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">15 Seconds</td>
                    <td className="py-2.5 px-3">Phosphagen to Anaerobic Glycolytic</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">7.0 – 9.2 HPS</td>
                    <td className="py-2.5 px-3 text-amber-500 font-semibold">10% – 18% Decay</td>
                    <td className="py-2.5 px-3">Steady wrist posture with index assist</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">30 Seconds</td>
                    <td className="py-2.5 px-3">Sustained Anaerobic Glycolysis</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">5.8 – 7.8 HPS</td>
                    <td className="py-2.5 px-3 text-rose-500 font-semibold">25% – 35% Decay</td>
                    <td className="py-2.5 px-3">Dual-thumb alternating stamina rhythm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">60 Seconds</td>
                    <td className="py-2.5 px-3">Aerobic / Anaerobic Threshold</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">4.5 – 6.2 HPS</td>
                    <td className="py-2.5 px-3 text-rose-600 font-bold">40%+ Decay</td>
                    <td className="py-2.5 px-3">Strict metronomic micro-taps</td>
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
              30-Second Spacebar Stamina Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating your sustained 30-second Hits Per Second (HPS) against global benchmark metrics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">&lt; 150 Hits (&lt; 5.0 HPS)</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Tapper</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Heavy finger fatigue sets in by second 10. Relies on whole-arm presses with significant stabilizer friction.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">150 – 209 Hits (5.0–6.9 HPS)</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Average</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid rhythm. Maintains consistent tapping through second 20 before moderate late-stage deceleration.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">210 – 269 Hits (7.0–8.9 HPS)</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Stamina Athlete</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dual-thumb alternating proficiency. Sub-15% fatigue decay across the entire half-minute window.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">270+ Hits (9.0+ HPS)</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% competitive endurance. Blistering metronomic cadence, low-travel switches, and near-zero fatigue decay.
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
              4 Proven Tips to Prevent Fatigue During 30s Spacebar Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Alternate Thumbs (Left and Right)
                </div>
                <p className="text-xs leading-relaxed">
                  Never rely entirely on your right thumb for 30 seconds. Tapping Left-Right-Left-Right halves individual muscle fatigue and keeps your rhythm lively.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Tap Near the Center Switch
                </div>
                <p className="text-xs leading-relaxed">
                  Tapping the far left or right edge of a spacebar forces the keycap to tilt, increasing friction along the stabilizer wire. Striking center guarantees crisp actuations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Keep Thumb Elevation Low
                </div>
                <p className="text-xs leading-relaxed">
                  Lifting your thumb 2 inches above the key wastes time and energy. Hover within 3mm of the keycap surface so every micro-flex registers instantly.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Stretch the Thenar Muscle Between Sets
                </div>
                <p className="text-xs leading-relaxed">
                  Gently pull your thumb backward away from your palm after a grueling session to stretch the thenar muscle and release lactic acid buildup.
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
              Frequently Asked Questions About Stimulation Clicker
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {stimulationFaqs.map((faq, index) => (
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

        {/* ── Section 8: Related Keyboard & Speed Tests ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Keyboard &amp; Tapping Speed Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your keystroke velocity, typing stamina, and burst speed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/spacebar-clicker" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Spacebar Clicker</span>
                <span className="text-xs text-muted-foreground mt-1">Multi-interval HPS benchmark (1s–60s) →</span>
              </Link>
              <Link href="/typing-test-30s" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Typing Test 30s</span>
                <span className="text-xs text-muted-foreground mt-1">30-second WPM typing sprint →</span>
              </Link>
              <Link href="/kohi-click-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Kohi Click Test</span>
                <span className="text-xs text-muted-foreground mt-1">10-second mouse clicking stamina →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
