import { GameSEO } from "@/components/game-seo";
import { DragClickTest } from "@/components/drag-click-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Flame, ShieldAlert, Cpu, Award, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Drag Clicking Test – Measure Drag CPS, Stick-Slip Friction & Bridging Speed | CpsSpeedTest',
  description: 'Benchmark your drag clicking speed across 1s, 5s, 10s, and 30s intervals. Master stick-slip friction physics, mouse debounce settings, and Minecraft bridging techniques.',
  keywords: ['drag click test', 'drag cps', 'measure drag clicking', 'friction clicking', 'high cps mouse', 'godbridging cps', 'roccat kone drag click', 'bloody a70 drag click'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/drag-click-test',
  },
  openGraph: {
    title: 'Drag Clicking Test – Benchmark Stick-Slip Friction & Burst CPS',
    description: 'Measure your drag clicking clicks-per-second, test friction tape techniques, and benchmark your speed against top competitive Minecraft bridgers.',
    url: 'https://www.cpsspeedtest.com/drag-click-test',
    type: 'website',
  },
};

const dragClickFaqs = [
  {
    question: "What is drag clicking and how does it generate 25+ CPS?",
    answer: "Drag clicking is an advanced input technique that leverages the stick-slip friction phenomenon. By dragging a textured fingertip or grip-taped finger along the surface of a mouse button at an angle, the skin rapidly alternates between adhering to and sliding across the plastic. Each microscopic slip cycle causes the button to vibrate and actuate the internal microswitch, registering 20 to 50+ clicks per second."
  },
  {
    question: "Which gaming mice are capable of drag clicking effectively?",
    answer: "Mice best suited for drag clicking feature textured matte finishes and companion software that allows lowering debounce time down to 0ms–4ms. Top community choices include the Roccat Kone AIMO, Roccat Kone Pro, Bloody A70/A60/Abbedless, and the Glorious Model O/Model D. Standard office mice and mice with locked 10ms+ firmware debounce filters cannot register rapid drag pulses."
  },
  {
    question: "Does drag clicking damage mouse switches or void warranties?",
    answer: "Yes, drag clicking subjects mechanical microswitches to intense vibrational stress and high cycle counts in brief periods. While it does not immediately break the mouse, it accelerates leaf spring fatigue and can induce switch chatter over time. To minimize damage, rely on surface friction rather than pressing down with heavy physical force."
  },
  {
    question: "How do players use friction tape to improve drag clicking?",
    answer: "Players frequently apply specialized gaming grip tape, matte electrical tape, or razer mouse grips to the left and right buttons. The increased surface coefficient of friction allows the fingertip to generate clean, consistent stick-slip vibrations without requiring sweaty or moist skin."
  },
  {
    question: "What is drag clicking primarily used for in gaming?",
    answer: "Drag clicking is most renowned in Minecraft 1.8.9 competitive multiplayer, specifically for high-speed bridging styles such as Godbridging, Telly bridging, Moonwalking, and Breezily bridging where players place blocks beneath themselves continuously without sneaking."
  }
];

export default function DragClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Drag Clicking Test – Measure Drag CPS"
        description="Test your drag clicking speed with our specialized friction test. Measure burst CPS across customizable intervals with low-debounce mice."
        url="https://www.cpsspeedtest.com/drag-click-test"
        faqs={dragClickFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Friction Vibration &amp; Burst CPS Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Drag Clicking Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your burst clicks-per-second using the stick-slip drag clicking technique. Benchmark short 1-second burst drags or sustained 5 to 10-second endurance trials.
          </p>
        </header>

        {/* Drag Click Test Interactive Component */}
        <DragClickTest />

        {/* ── Switch Longevity Notice ── */}
        <Card className="border-amber-500/30 bg-amber-500/10 text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2 text-amber-500">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              Hardware Note: Low Debounce Mouse Required
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              Standard office mice and mice with non-adjustable 8ms+ firmware debounce filters will actively suppress consecutive rapid switch rebounds, capping your drag score at 8–10 CPS.
            </p>
            <p>
              To record true drag bursts exceeding 20–40 CPS, utilize a mouse with an adjustable debounce setting (such as a Roccat, Bloody, or Glorious mouse set to 0–4ms). You can verify your switch health on our <Link href="/double-click-test" className="text-primary hover:underline font-semibold">Double Click Test</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 1: Physics & Biomechanics of Stick-Slip Dragging (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              The Physics of Drag Clicking: Stick-Slip Friction &amp; Mechanics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong>Drag clicking</strong> operates on the exact same physical principle that produces sound from a violin bow or makes squealing tires skid: <em>stick-slip friction</em>.
            </p>
            <p>
              When you glide your finger over the mouse button with gentle downward tension, microscopic ridges on your skin latch onto the mouse casing (static friction). As your arm continues moving, shear force overcomes static friction, causing the skin to slip forward. The finger immediately latches again, repeating this cycle at frequencies between 30Hz and 70Hz.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Surface Texture:</strong> Glossy mouse shells lack the micro-texture required to generate alternating friction. Players apply matte grip tape or electrical tape to induce clean stick-slip cycles.
              </li>
              <li>
                <strong className="text-foreground">Angle of Incidence:</strong> Keep your finger at an angle between 30° and 45° relative to the mouse shell. Dragging completely flat prevents the finger from rebounding off the switch plunger.
              </li>
              <li>
                <strong className="text-foreground">Firmware Debounce Setting:</strong> Reduce software debounce to 2ms or 0ms in your manufacturer&apos;s companion app so the mouse controller registers every microsecond rebound.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Drag CPS Score Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Award className="w-5 h-5 text-primary" />
              Drag Click Performance Tiers &amp; CPS Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Drag clicking produces the highest burst clicks per second of any human input technique. Here is how your score ranks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 15 CPS</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Short Drag / Standard Mouse</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The mouse debounce filter is suppressing pulses, or the finger is sliding smoothly without sufficient stick-slip friction.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">16 – 24 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Bridger</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Clean stick-slip vibration. Excellent cadence for Moonwalk bridging, clutch water bucket placement, and Minecraft defensive wall building.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">25 – 35 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Godbridger</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exceptional friction consistency. Sustains continuous block placement without shifting or sneaking across full Minecraft bridges.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">36+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Long Drag Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% drag performance. Achieved on optimized mice (Bloody A70, Roccat Kone) with specialized grip tape and low debounce delay.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Comparison with Other Clicking Techniques ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Drag Clicking vs. Butterfly vs. Jitter Clicking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Each competitive clicking technique has specific strengths and trade-offs in modern multiplayer gaming:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-bold text-foreground">Drag Clicking</div>
                <div className="text-xs text-primary font-semibold">25 – 45+ Peak CPS</div>
                <p className="text-xs text-muted-foreground">
                  <strong>Pros:</strong> Insane burst clicks; unmatched for Minecraft bridging and block placement.<br />
                  <strong>Cons:</strong> Difficult to aim during a drag; cannot easily track moving targets.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-bold text-foreground">Butterfly Clicking</div>
                <div className="text-xs text-primary font-semibold">14 – 22 Sustainable CPS</div>
                <p className="text-xs text-muted-foreground">
                  <strong>Pros:</strong> Sustainable for minutes; low muscle fatigue; excellent for PvP hit trading.<br />
                  <strong>Cons:</strong> Requires wide mouse buttons for two fingers. Check our <Link href="/butterfly-click-test" className="text-primary hover:underline">Butterfly Test</Link>.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-bold text-foreground">Jitter Clicking</div>
                <div className="text-xs text-primary font-semibold">11 – 14 Sustainable CPS</div>
                <p className="text-xs text-muted-foreground">
                  <strong>Pros:</strong> Works on standard mice; effective for close-range knockback reduction.<br />
                  <strong>Cons:</strong> High forearm fatigue and RSI strain. Check our <Link href="/jitter-click-test" className="text-primary hover:underline">Jitter Test</Link>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Drag Clicking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {dragClickFaqs.map((faq, index) => (
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
