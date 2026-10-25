import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Wind, ShieldAlert, Activity, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Jitter Click Test (10s) - Measure Jitter Speed & Technique',
  description: 'Measure your jitter clicking speed on our 10-second test. Learn the biomechanics of forearm vibration clicking, ergonomic safety, and tracking trade-offs.',
  keywords: ['jitter click test', 'jitter clicking', 'how to jitter click', 'increase cps', 'jitter click technique'],
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
  }
];

export default function JitterClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Jitter Click Test"
        description="Measure your jitter clicking speed on our 10-second test. Learn the biomechanics of forearm vibration clicking, ergonomic safety, and tracking trade-offs."
        url="https://www.cpsspeedtest.com/jitter-click-test"
        faqs={jitterFaqs}
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
              Ergonomic & Health Safety Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              Jitter clicking requires prolonged isometric contraction of your forearm. <strong>Stop immediately</strong> if you feel pain, tingling, or wrist soreness.
            </p>
            <p>
              Many competitive players now prefer <Link href="/butterfly-click-test" className="text-primary hover:underline font-semibold">Butterfly Clicking</Link> as an alternative, as it utilizes two alternating relaxed fingers and produces comparable or higher CPS with significantly less muscular tension.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Biomechanical Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Unlike standard clicking which averages 6–8 CPS, jitter clicking can reach 11–14 CPS. The limiting factor is not finger agility, but neurological tremor frequency and the mechanical reset spring inside your mouse switch.
              </p>
              <p>
                A mouse with stiff switches (such as heavy Huano switches) makes jittering fatiguing, whereas lighter switches (like Omron 20M or Kailh 8.0) actuate with less required downward force.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Wind className="w-4 h-4 text-primary" />
                The Aim Trade-Off
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                A high CPS score is counterproductive if you cannot keep your crosshair on target. In fast-paced FPS or combat titles, smooth mouse tracking is more valuable than erratic 13 CPS bursts.
              </p>
              <p>
                Test your tracking accuracy alongside your clicking speed on our dedicated <Link href="/aim-trainer" className="text-primary hover:underline font-semibold">Aim Trainer</Link>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Jitter Clicking FAQs
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
