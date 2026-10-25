import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Wind, ShieldAlert, Activity, Cpu, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Jitter Click Test (10s) – Forearm Vibration Technique & Ergonomics | CpsSpeedTest',
  description: 'Measure your jitter clicking speed on our 10-second test. Learn the biomechanics of forearm tremor clicking, mouse grip positioning, and ergonomic injury prevention.',
  keywords: ['jitter click test', 'jitter clicking', 'how to jitter click', 'increase cps', 'jitter click technique', 'forearm clicking'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/jitter-click-test',
  },
};

const jitterFaqs = [
  {
    question: "How does the jitter clicking technique work physiologically?",
    answer: "Jitter clicking relies on generating a rapid, controlled tremor in the forearm flexor and extensor muscles. Rather than executing deliberate individual finger presses, the user contracts opposing forearm muscle groups simultaneously, channeling the resulting oscillation downward through the index finger onto the mouse switch."
  },
  {
    question: "Is jitter clicking dangerous for your wrists or joints?",
    answer: "Excessive or improper jitter clicking carries real risks of Repetitive Strain Injury (RSI), tendonitis, and wrist fatigue due to prolonged isometric muscle tension. You should never practice jitter clicking for extended durations, never click through pain or numbness, and always perform wrist and forearm stretches."
  },
  {
    question: "Why is it difficult to aim while jitter clicking?",
    answer: "Because the forearm vibration shakes the entire hand, mouse sensor stability is compromised. Crosshair micro-adjustments become difficult, which is why competitive players typically only jitter click when target lock is already established or during close-quarters knockback trades."
  },
  {
    question: "What is an average jitter click speed?",
    answer: "Beginners usually start around 8–10 CPS. With practice and proper muscle conditioning, experienced jitter clickers sustain 11 to 14 CPS over a full 10-second test."
  }
];

export default function JitterClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Jitter Click Test"
        description="Measure your jitter clicking speed on our 10-second test. Learn the biomechanics of forearm tremor clicking, ergonomic safety, and tracking trade-offs."
        url="https://www.cpsspeedtest.com/jitter-click-test"
        faqs={jitterFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Wind className="w-3.5 h-3.5" />
            <span>Forearm Oscillation Technique Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Jitter Click Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Test and refine your jitter clicking technique across a 10-second duration. Track your oscillation consistency while keeping ergonomic strain under control.
          </p>
        </header>

        {/* 10s Jitter Test */}
        <CpsTest gameDuration={10} allowDurationChange={false} />

        {/* ── Ergonomic Alert ── */}
        <Card className="border-amber-500/30 bg-amber-500/10 text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2 text-amber-500">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              Ergonomic &amp; Health Safety Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              Jitter clicking requires prolonged isometric contraction of your forearm flexor muscles. <strong>Stop immediately</strong> if you feel sharp pain, burning, tingling, or wrist numbness.
            </p>
            <p>
              Many competitive players now prefer <Link href="/butterfly-click-test" className="text-primary hover:underline font-semibold">Butterfly Clicking</Link> as an alternative, as it utilizes two alternating relaxed fingers and produces comparable or higher CPS (15–20+) with significantly less muscular tension.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 1: Biomechanics & Grip Technique (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Biomechanics of Jitter Clicking: How to Learn the Technique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Unlike standard clicking which relies on isolated finger joint flexion, <strong>jitter clicking</strong> channels involuntary muscle tremors:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Forearm Muscle Co-Contraction:</strong> You simultaneously contract both the <em>flexor digitorum</em> (which closes fingers) and <em>extensor digitorum</em> (which opens fingers). When opposing muscles pull against each other with high tension, they produce an involuntary physiological oscillation (shiver).
              </li>
              <li>
                <strong className="text-foreground">The Claw or Fingertip Grip:</strong> Rest your wrist on the mousepad and arch your index finger into a rigid, claw-like curve. The finger acts as a stiff transmission rod, delivering the wrist vibration directly into the left mouse switch.
              </li>
              <li>
                <strong className="text-foreground">Thumb &amp; Pinky Anchoring:</strong> Squeeze the sides of the mouse firmly with your thumb and ring/pinky finger to keep the mouse sensor from sliding wildly across your mousepad during vibrations.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Benchmark Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Jitter Click Speed Tiers (10-Second Test)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How does your jitter clicking compare to experienced players? Here is the community performance distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">7.0 – 9.9 CPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Beginner Jitter</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Inconsistent muscle shiver. The player experiences rapid forearm fatigue after 3–4 seconds.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚔️</div>
                <div className="font-bold text-foreground">10.0 – 11.9 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Competent Jitterer</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Steady oscillation frequency. Capable of maintaining consistent speed for the full 10-second duration.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">12.0 – 13.9 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced PvP Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Excellent muscle conditioning. Delivers powerful hit registration and combo locks in Minecraft 1.8.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">14.0+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 2% jitter speed. Extreme tremor frequency combined with lightweight mechanical microswitches.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Hardware & Aim Trade-Offs (GEO Matrix) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Hardware Compatibility &amp; The Aiming Trade-Off
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Not all gaming mice are suitable for jitter clicking. Stiff switches (like standard Huano Blue or Zowie mice) require 70–80 grams of force, making sustained vibrations exhausting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">Optimal Mice for Jittering</h4>
                <p className="text-xs text-muted-foreground">
                  Mice featuring light mechanical switches (such as Omron 20M, Kailh GM 8.0, or Razer Optical Gen-3) with short pre-travel actuate with minimal downward pressure, allowing your hand to stay relaxed longer.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">Tracking Accuracy Compromise</h4>
                <p className="text-xs text-muted-foreground">
                  Because whole-arm vibration introduces micro-tremors to the mouse sensor, fine crosshair tracking becomes difficult. Practice target acquisition on our <Link href="/aim-trainer" className="text-primary hover:underline font-semibold">Aim Trainer</Link> to ensure your aim remains true while clicking fast.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Want to test overall clicking stamina? Take the classic <Link href="/kohi-click-test" className="text-primary hover:underline font-semibold">Kohi Click Test</Link> or measure your drag burst rate on the <Link href="/drag-click-test" className="text-primary hover:underline font-semibold">Drag Click Test</Link>.
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
              {jitterFaqs.map((faq, index) => (
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
