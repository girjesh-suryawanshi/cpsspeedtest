import { GameSEO } from "@/components/game-seo";
import { ReactionTimeTest } from "@/components/reaction-time-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Timer, Zap, Cpu, Activity, Brain, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Reaction Time Test – Benchmark Reflex Speed in Milliseconds | CpsSpeedTest',
  description: 'Test your visual reaction time with our high-precision reflex tester. Measure millisecond response latency, explore human neurological pathways, and compare with global gamer benchmarks.',
  keywords: ['reaction time test', 'reflex test', 'reaction speed test', 'human benchmark reflex', 'visual reaction time', 'gaming reaction test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/reaction-time-test',
  },
};

const reactionFaqs = [
  {
    question: "What is an average human reaction time to visual stimuli?",
    answer: "The average human visual reaction time ranges between 200 and 250 milliseconds (ms). Auditory reaction times are faster (~170ms) and tactile responses are fastest (~150ms) due to fewer synaptic delays along sensory pathways."
  },
  {
    question: "Can reaction time be permanently improved with training?",
    answer: "Yes, consistent reaction practice, target anticipation drills, and physical exercise can shave 20–50ms off baseline latency by strengthening neural conductivity and eliminating motor decision hesitation."
  },
  {
    question: "How much does monitor refresh rate affect reaction time test scores?",
    answer: "Significantly. A 60Hz monitor refreshes every 16.6ms, while a 144Hz monitor refreshes every 6.9ms, and a 240Hz monitor refreshes every 4.16ms. Higher refresh rates present the green visual cue 10–12ms sooner, resulting in measurably faster scores."
  },
  {
    question: "Why do I get 'Too Soon' warnings during the test?",
    answer: "The test uses a randomized delay between 2 and 5 seconds before turning green. Clicking during the red waiting phase counts as an anticipatory false start to ensure you are measuring genuine visual response rather than a random guess."
  }
];

export default function ReactionTimeTestPage() {
  return (
    <>
      <GameSEO 
        name="Reaction Time Test"
        description="Test your visual reaction time with our high-precision reflex tester. Measure millisecond response latency, explore human neurological pathways, and compare with global gamer benchmarks."
        url="https://www.cpsspeedtest.com/reaction-time-test"
        faqs={reactionFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Timer className="w-3.5 h-3.5" />
            <span>High-Precision Visual Reflex Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Reaction Time Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            When the screen turns green, click as fast as you can. Benchmark your reflex speed in milliseconds with zero synthetic input latency.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <ReactionTimeTest />

        {/* ── Section 1: Definition & The Neurological Response Pathway (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              What is Reaction Time & How Does the Brain Process Reflexes?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong>Reaction time</strong> is the elapsed duration (measured in milliseconds) between the presentation of an unexpected sensory stimulus and the physical execution of a motor response. In competitive gaming (such as counter-strafing in <em>Valorant</em> or reacting to a flashbang in <em>CS2</em>), reflex latency often determines who wins a duel.
            </p>
            <p>
              When this test screen changes from red to green, your central nervous system executes a rapid physiological chain reaction:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Photoreceptor Activation:</strong> Photons from the green screen strike rod and cone photoreceptors in your retina (~15–30ms).
              </li>
              <li>
                <strong className="text-foreground">Optic Nerve Transmission:</strong> Electrochemical signals travel along the optic nerve through the lateral geniculate nucleus to your visual cortex (~20–40ms).
              </li>
              <li>
                <strong className="text-foreground">Cognitive Processing & Decision:</strong> The primary visual cortex interprets the color shift and signals the motor cortex to initiate the programmed response (~50–80ms).
              </li>
              <li>
                <strong className="text-foreground">Efferent Nerve Conduction:</strong> Motor impulses travel down your spinal cord and along peripheral arm nerves to your index finger&apos;s <em>flexor digitorum</em> muscles (~30–50ms).
              </li>
              <li>
                <strong className="text-foreground">Mechanical Switch Actuation:</strong> Finger muscles contract, depressing the mouse microswitch past its actuation point (~15–30ms).
              </li>
            </ol>
            <p className="text-xs bg-secondary/50 p-3 rounded-lg border border-border/30">
              💡 <strong>Total Biological Baseline:</strong> The absolute biological limit for human visual reaction is approximately <strong>130–150 milliseconds</strong>. Anyone consistently scoring under 120ms is anticipating the stimulus rather than purely reacting.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Gamer Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Reaction Time Benchmarks & Score Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on empirical data across hundreds of thousands of reflex trials, here is how reaction latency is distributed across the human population:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">&lt; 160 ms</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite Esports Pro</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% reflex speeds. Found in professional FPS athletes, fighter jet pilots, and Olympic sprinters.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">160 – 200 ms</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Competitive Gamer</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Fast, well-trained reflexes typical of high-ranked competitive players with optimal gaming setups.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👤</div>
                <div className="font-bold text-foreground">200 – 250 ms</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Average Adult</div>
                <p className="text-xs text-muted-foreground leading-relaxed">The global median for healthy young adults using standard 60Hz displays and office peripherals.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">☕</div>
                <div className="font-bold text-foreground">250 – 350+ ms</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Casual / Fatigued</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Normal when tired, dehydrated, or testing on high-latency mobile screens or wireless office mice.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Hardware Latency & Input Lag Matrix (GEO Table) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Hardware Factors: How Monitors & Mice Introduce Hidden Latency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Your true biological reflex speed is often masked by <strong>system end-to-end latency</strong>. A person with 180ms biological reflexes may score 240ms on a standard laptop due to cumulative hardware delays:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Hardware Component</th>
                    <th className="py-2.5 px-3 font-bold">Standard Office Setup</th>
                    <th className="py-2.5 px-3 font-bold">Competitive Gaming Setup</th>
                    <th className="py-2.5 px-3 font-bold">Latency Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Monitor Refresh Rate</td>
                    <td className="py-2 px-3">60 Hz (16.6ms frame time)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">144 Hz – 240 Hz (4.1ms frame time)</td>
                    <td className="py-2 px-3">Saves up to 12.5 ms in display visual delivery.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Display Panel Response</td>
                    <td className="py-2 px-3">Standard IPS/VA (~8–15ms)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">Fast IPS / OLED (~0.03–1ms)</td>
                    <td className="py-2 px-3">Eliminates pixel transition ghosting and delay.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Mouse Polling Rate</td>
                    <td className="py-2 px-3">125 Hz (8ms report rate)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">1,000 Hz – 4,000 Hz (0.25–1ms)</td>
                    <td className="py-2 px-3">Reports your physical click up to 7ms faster to the OS.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Operating System Compositor</td>
                    <td className="py-2 px-3">Windowed DWM with VSync (+15–30ms)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">Hardware GPU Acceleration enabled</td>
                    <td className="py-2 px-3">Bypasses frame buffer buffering delays.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 4: Reaction Time vs CPS (Cross-Linking) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              Reaction Time vs. Click Speed (CPS): What&apos;s the Difference?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Visitors often assume that someone with a fast reaction time will automatically have high clicks per second. In reality, they measure completely different physical traits:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <h3 className="font-bold text-foreground">Reaction Time (Latency)</h3>
                <p className="text-xs text-muted-foreground">
                  Measures your response delay to an unexpected event. It depends on visual perception speed, neural conduction, and cognitive focus.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <h3 className="font-bold text-foreground">Click Speed (CPS - Cadence)</h3>
                <p className="text-xs text-muted-foreground">
                  Measures repetitive muscle oscillation speed over sustained periods. (Test your cadence on our <Link href="/cps-test" className="text-primary hover:underline font-semibold">CPS Speed Test</Link>).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: Proven Tips to Improve Reflexes ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              How to Train and Shave 20–50ms Off Your Reaction Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Get 7–8 Hours of Sleep:</strong> Sleep deprivation slows cognitive reaction time by 20–40%, equivalent to mild blood-alcohol intoxication.
              </li>
              <li>
                <strong className="text-foreground">Maintain Hydration:</strong> Even 1–2% dehydration measurably impairs attention and visual processing speed.
              </li>
              <li>
                <strong className="text-foreground">Pre-Tense Your Finger Muscles:</strong> Keeping your index finger resting lightly on the mouse switch button eliminates the 20ms slack needed to move your finger from the air onto the button.
              </li>
              <li>
                <strong className="text-foreground">Practice Peripheral Anticipation:</strong> Rather than hyper-focusing on a single pixel, relax your gaze slightly to allow your rod-dense peripheral vision (which processes motion and light changes faster than foveal vision) to register the color change.
              </li>
              <li>
                <strong className="text-foreground">Warm Up with Aim Training:</strong> Use our <Link href="/aim-trainer" className="text-primary hover:underline font-semibold">Aim Trainer</Link> before competitive sessions to wake up eye-hand neural pathways.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 6: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {reactionFaqs.map((faq, index) => (
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
