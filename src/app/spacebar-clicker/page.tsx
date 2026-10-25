import { GameSEO } from "@/components/game-seo";
import { SpacebarTest } from "@/components/spacebar-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Keyboard, Zap, Activity, Cpu, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Spacebar Clicker Test – Benchmark Spacebar Tapping Speed (HPS) | CpsSpeedTest',
  description: 'Measure your spacebar clicking speed in Hits Per Second (HPS) with our precision 15-second test. Explore keyboard switch travel depth, thumb tapping techniques, and benchmark scores.',
  keywords: ['spacebar clicker', 'spacebar test', 'spacebar speed test', 'spacebar counter', 'hits per second', 'keyboard speed test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/spacebar-clicker',
  },
};

const spacebarFaqs = [
  {
    question: "What is a good score on the Spacebar Clicker test?",
    answer: "For most users, 6 to 8 Hits Per Second (HPS) is average. Competitive players utilizing two thumbs or dual-finger alternating technique can achieve 9 to 12+ HPS."
  },
  {
    question: "How does mechanical keyboard switch travel affect spacebar speed?",
    answer: "Standard mechanical switches feature a 4.0mm total travel depth with a 2.0mm actuation point. Low-profile or speed switches (such as Cherry MX Silver or Kailh Speed) actuate at just 1.1–1.2mm, reducing the physical distance your thumb must press by nearly 50%."
  },
  {
    question: "Why is spacebar clicking harder than mouse clicking?",
    answer: "A spacebar keycap is the widest key on a keyboard (typically 6.25u) and relies on metallic stabilizer wires and heavier spring return resistance (often 60–80g) compared to mouse microswitches (which actuate at ~50g with sub-millimeter travel)."
  },
  {
    question: "How do I prevent key jamming or missed hits?",
    answer: "Press firmly near the center of the spacebar directly above the central switch stem rather than on the extreme outer corners to prevent stabilizer tilting and key binding."
  }
];

export default function SpacebarClickerPage() {
  return (
    <>
      <GameSEO 
        name="Spacebar Clicker Test"
        description="Measure your spacebar clicking speed in Hits Per Second (HPS) with our precision 15-second test. Explore keyboard switch travel depth, thumb tapping techniques, and benchmark scores."
        url="https://www.cpsspeedtest.com/spacebar-clicker"
        faqs={spacebarFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>High-Precision Keyboard Tapping Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Spacebar Clicker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hit your spacebar as many times as you can in 15 seconds. Benchmark your tapping frequency in Hits Per Second (HPS) with sub-millisecond precision.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <SpacebarTest gameDuration={15} />

        {/* ── Section 1: Definition & How HPS is Calculated (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              What is the Spacebar Clicker & How is Tapping Speed Measured?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Spacebar Clicker test</strong> (or Spacebar Speed Test) is a keyboard performance challenge that calculates how many times you can actuate your keyboard&apos;s spacebar within a designated countdown (standardized at 15 seconds). It is widely used by gamers playing rhythm games (like <em>osu!</em> and <em>Friday Night Funkin&apos;</em>), platformers requiring bunny-hopping, and typists benchmarking thumb dexterity.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              Hits Per Second (HPS) = Total Spacebar Actuations ÷ Test Duration (15 Seconds)
            </div>
            <p>
              Our tool uses raw native browser keyboard event listeners with automatic operating system key-repeat suppression (<code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">e.repeat === false</code>). This prevents users from simply holding down the spacebar to generate artificial hits, ensuring that every registered hit corresponds to an authentic physical keypress and release cycle.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Techniques for Higher Spacebar Speed ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Keyboard className="w-5 h-5 text-primary" />
              3 Proven Spacebar Tapping Techniques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Just as mouse clicking has jitter and butterfly techniques, spacebar tapping has specialized hand postures that dramatically increase your Hits Per Second:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base">
                  1. Dominant Thumb Tap (5–7 HPS)
                </h3>
                <p>
                  The natural posture used while typing. You rest your dominant hand on the keyboard and actuate the spacebar using your right or left thumb.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Best for:</strong> Natural posture, low fatigue.<br />
                  <strong>Limitation:</strong> Muscle rebound limits burst speed.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base">
                  2. Dual-Thumb Alternation (8–11 HPS)
                </h3>
                <p>
                  Positioning both hands slightly inward so both your left and right thumbs hover over the spacebar. Alternate tapping in a steady, rhythmic left-right gallop.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Best for:</strong> High sustained speed across 15 seconds.<br />
                  <strong>Tip:</strong> Keep a relaxed tempo to avoid thumbs hitting simultaneously.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base">
                  3. Index & Middle Finger Flutter (10–13+ HPS)
                </h3>
                <p>
                  Turning your hand sideways and using your index and middle finger to drum down rapidly on the spacebar keycap, similar to piano trill technique.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Best for:</strong> Maximum record-breaking burst rates.<br />
                  <strong>Tip:</strong> Requires a sturdy keyboard with lubricated stabilizers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Score Tiers & Benchmark Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Spacebar Speed Tiers & Community Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wondering where your 15-second score stands? Here is the verified community distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐢</div>
                <div className="font-bold text-foreground">0 – 4.9 HPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual / Beginner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Standard casual pace for everyday typing and office tasks (&lt; 75 total hits in 15s).</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">5.0 – 7.9 HPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Regular</div>
                <p className="text-xs text-muted-foreground leading-relaxed">The typical score for gamers and active computer users (75–119 total hits in 15s).</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐆</div>
                <div className="font-bold text-foreground">8.0 – 10.9 HPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Fast / Advanced</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Strong rhythm and dual-thumb coordination. Excellent for bunny-hopping (120–164 hits in 15s).</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🦅</div>
                <div className="font-bold text-foreground">11.0+ HPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% speed. Achieved through high-speed finger fluttering or specialized mechanical switches (165+ hits).</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 4: Keyboard Hardware Physics (GEO Matrix) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Keyboard Mechanics: How Switches & Stabilizers Impact Your Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Unlike standard keyboard keys, a spacebar rests on a wide stabilization wire with two dummy stems flanking the central switch. These physical components heavily dictate how quickly the key returns to rest:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Keyboard Type</th>
                    <th className="py-2.5 px-3 font-bold">Actuation Travel</th>
                    <th className="py-2.5 px-3 font-bold">Spring Resistance</th>
                    <th className="py-2.5 px-3 font-bold">Speed Characteristic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Linear Mechanical (Red/Silver)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">1.2 – 2.0 mm</td>
                    <td className="py-2 px-3">45 – 50 gf</td>
                    <td className="py-2 px-3">Smooth downward travel with zero tactile bump enables the fastest rapid resets.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Tactile / Clicky (Blue/Brown)</td>
                    <td className="py-2 px-3">2.0 – 2.2 mm</td>
                    <td className="py-2 px-3">55 – 65 gf</td>
                    <td className="py-2 px-3">Tactile hysteresis requires releasing the switch past the reset point before re-actuation.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Membrane / Dome Keyboard</td>
                    <td className="py-2 px-3">3.5 – 4.0 mm</td>
                    <td className="py-2 px-3">60 – 75 gf</td>
                    <td className="py-2 px-3">Squishy bottom-out and sluggish rubber dome rebound can limit maximum HPS to 7–8.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Laptop Scissor Switch</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">1.0 – 1.5 mm</td>
                    <td className="py-2 px-3">55 – 65 gf</td>
                    <td className="py-2 px-3">Very short travel enables quick taps, but rigid bottom-out can cause thumb fatigue.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Want to compare your keyboard speed with your mouse speed? Check out our <Link href="/cps-test" className="text-primary hover:underline font-semibold">CPS Speed Test</Link> or test your typing fluency on our <Link href="/type-racer" className="text-primary hover:underline font-semibold">Speed Typer</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 5: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {spacebarFaqs.map((faq, index) => (
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
