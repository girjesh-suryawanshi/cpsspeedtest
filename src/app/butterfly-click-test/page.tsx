import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Sliders, Cpu, Activity, Zap, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Butterfly Click Test – Dual-Finger Alternating Cadence Benchmark | CpsSpeedTest',
  description: 'Test your butterfly clicking speed and cadence. Learn how alternating index and middle fingers on low-debounce mechanical switches achieves 15–20+ CPS with minimal strain.',
  keywords: ['butterfly click test', 'butterfly clicking', 'high cps test', 'double clicking mouse', 'debounce time butterfly', 'minecraft pvp butterfly'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/butterfly-click-test',
  },
};

const butterflyFaqs = [
  {
    question: "What is butterfly clicking and how does it work?",
    answer: "Butterfly clicking is an advanced input method where the user rests both their index and middle finger on the primary left mouse button, rapidly alternating tap strokes like a drumming cadence. Because two fingers share the workload, actuation frequency is essentially doubled compared to single-finger clicking."
  },
  {
    question: "Why does butterfly clicking achieve higher CPS on certain mice?",
    answer: "Mice with adjustable firmware debounce delay (such as the Glorious Model O, Bloody A70, or Roccat Kone Pro) allow users to lower the debounce threshold down to 0ms–4ms. This allows the switch contact bounce upon release to register as an intentional secondary click (double-clicking), easily yielding 16–22+ CPS."
  },
  {
    question: "Is butterfly clicking allowed on competitive gaming servers?",
    answer: "Rules vary by server and game. Some competitive Minecraft PvP servers (such as Hypixel) enforce strict anti-cheat click limits (often flagging sustained speeds exceeding 15–20 CPS) because double-clicking can mimic auto-clicker packet signatures. Always verify your server's specific input rules."
  },
  {
    question: "How do I choose the best mouse for butterfly clicking?",
    answer: "Look for mice with wide, flat left-click buttons (to fit two fingers comfortably side-by-side), mechanical switches (Omron, Kailh GM 8.0, or Huano Blue Shell Pink Dot), and companion software that allows lowering debounce time to under 4ms."
  }
];

export default function ButterflyClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Butterfly Click Test – Dual-Finger Alternating Benchmark"
        description="Test your butterfly clicking cadence. Learn how alternating two fingers on low-debounce mechanical switches achieves 15-20+ CPS with minimal strain."
        url="https://www.cpsspeedtest.com/butterfly-click-test"
        faqs={butterflyFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <span className="text-base">🦋</span>
            <span>Alternating Two-Finger Cadence Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Butterfly Click Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Master the alternating two-finger rhythm. Benchmark your actuation cadence, verify switch reset responsiveness, and inspect your click pacing across selectable durations.
          </p>
        </header>

        {/* CpsTest configured for standard 10s benchmark */}
        <CpsTest gameDuration={10} allowDurationChange={true} />

        {/* ── Section 1: Mechanics & Finger Placement (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              What is Butterfly Clicking &amp; How Does the Two-Finger Cadence Work?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong>Butterfly clicking</strong> is an input technique widely regarded as the most efficient way to generate ultra-high click speeds (15–20+ CPS) without the aggressive forearm fatigue associated with jitter clicking.
            </p>
            <p>
              The movement resembles a drummer playing a drum roll with two drumsticks:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Dual-Finger Rest:</strong> Position both your index finger and middle finger side-by-side on the primary left mouse button.
              </li>
              <li>
                <strong className="text-foreground">Alternating Tap Cycle:</strong> As your index finger descends to actuate the switch, your middle finger is already rising. As the index finger recoils, the middle finger immediately strikes down.
              </li>
              <li>
                <strong className="text-foreground">The Double-Click Physics:</strong> On mice with low debounce delay (0–4ms), each finger stroke produces two electrical actuations—one on initial compression and a second as the metallic leaf contact bounces during release. Two fingers striking twice each cycle produces 4 clicks per round, turning a modest 5 Hz hand rhythm into a blistering <strong>20 CPS</strong>.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Benchmark Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Butterfly Click Speed Tiers (10-Second Test)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How does your butterfly clicking compare to competitive benchmarks? Here is the community performance distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">8.0 – 11.9 CPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Learning Cadence</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Standard single-switch response. Both fingers are tapping, but double-clicking is not yet registering.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚔️</div>
                <div className="font-bold text-foreground">12.0 – 15.9 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Competent PvP Player</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Smooth alternating rhythm. Provides strong hit registration and smooth knockback combos.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">16.0 – 19.9 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Duelist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Consistently double-clicking on both strokes. Common among high-ranked Bedwars and Skywars players.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">20.0+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">God Tier Cadence</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% butterfly speed. Requires low debounce settings (0–2ms) and calibrated mechanical microswitches.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Debounce Delay & Switch Mechanics (GEO Matrix) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sliders className="w-5 h-5 text-primary" />
              The Role of Debounce Delay &amp; Switch Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The single biggest factor determining your maximum butterfly score is your mouse&apos;s <strong>firmware debounce time</strong>:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Debounce Setting</th>
                    <th className="py-2.5 px-3 font-bold">Typical Mice</th>
                    <th className="py-2.5 px-3 font-bold">Double-Click Behavior</th>
                    <th className="py-2.5 px-3 font-bold">Max Realistic CPS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">0 ms – 4 ms</td>
                    <td className="py-2 px-3">Glorious Model O, Bloody A70, Roccat Kone</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">Registers rebound bounces as valid secondary clicks</td>
                    <td className="py-2 px-3 font-bold">18 – 24+ CPS</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">8 ms – 12 ms</td>
                    <td className="py-2 px-3">Logitech G Pro, Razer Mechanical</td>
                    <td className="py-2 px-3">Suppresses contact bounce to prevent unwanted double clicks</td>
                    <td className="py-2 px-3">12 – 14 CPS</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Optical Switches</td>
                    <td className="py-2 px-3">Razer Viper V2/V3, DeathAdder V3</td>
                    <td className="py-2 px-3 text-amber-500">Zero physical debounce, but no physical bounce double-clicking</td>
                    <td className="py-2 px-3">11 – 13 CPS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Want to verify if your mouse switch is registering secondary clicks? Use our <Link href="/double-click-test" className="text-primary hover:underline font-semibold">Double Click Test</Link> or benchmark your Minecraft PvP performance on the <Link href="/minecraft-cps-test" className="text-primary hover:underline font-semibold">Minecraft CPS Test</Link>.
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
              {butterflyFaqs.map((faq, index) => (
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
