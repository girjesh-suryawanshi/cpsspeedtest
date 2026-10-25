import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Sliders, Cpu, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Butterfly Click Test - Dual-Finger Alternating CPS Benchmark',
  description: 'Test your butterfly clicking cadence. Learn how alternating two fingers on low-debounce mechanical switches achieves 15-20+ CPS with minimal strain.',
  keywords: ['butterfly click test', 'butterfly clicking', 'high cps test', 'double clicking', 'debounce time butterfly'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/butterfly-click-test',
  },
};

const butterflyFaqs = [
  {
    question: "What is butterfly clicking and how does it work?",
    answer: "Butterfly clicking is an input method where the user rests both the index and middle finger on the primary mouse button, rapidly alternating tap strokes like a drumming cadence. Because two fingers share the workload, actuation frequency is essentially doubled compared to single-finger clicking."
  },
  {
    question: "Why does butterfly clicking achieve higher CPS on certain mice?",
    answer: "Mice with adjustable firmware debounce delay (such as the Glorious Model O or Roccat Kone Pro) allow users to lower the debounce threshold down to 2ms or 4ms. This allows the switch contact bounce upon release to register as an intentional secondary click (double-clicking), easily yielding 16–22+ CPS."
  },
  {
    question: "Is butterfly clicking allowed on competitive gaming servers?",
    answer: "Rules vary by server and game. Some competitive Minecraft PvP servers (such as Hypixel) enforce strict anti-cheat click limits (often flagging sustained speeds exceeding 15–20 CPS) because double-clicking can mimic auto-clicker packet signatures. Always verify your server's specific input rules."
  }
];

export default function ButterflyClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Butterfly Click Test"
        description="Test your butterfly clicking cadence. Learn how alternating two fingers on low-debounce mechanical switches achieves 15-20+ CPS with minimal strain."
        url="https://www.cpsspeedtest.com/butterfly-click-test"
        faqs={butterflyFaqs}
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
            Master the alternating two-finger rhythm. Benchmark your actuation cadence, verify switch reset responsiveness, and inspect your click pacing.
          </p>
        </header>

        {/* CpsTest configured for standard 10s benchmark */}
        <CpsTest gameDuration={10} allowDurationChange={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-primary" />
                The Role of Debounce Delay
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Standard office mice enforce a 10ms–20ms debounce delay in firmware to prevent aged switches from registering unintended double-clicks.
              </p>
              <p>
                To achieve high butterfly CPS (15+), gamers use mice whose companion software allows setting debounce to 2ms–4ms. Test if your mouse registers double-clicks on our <Link href="/double-click-test" className="text-primary hover:underline font-semibold">Double Click Test</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Ergonomic Comparison vs. Jitter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Butterfly clicking distributes mechanical work between the flexor muscles of two fingers rather than forcing an isometric arm tremor.
              </p>
              <p>
                Consequently, butterfly clicking generally induces significantly less forearm fatigue than jitter clicking, making it more sustainable during longer gameplay sessions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Butterfly Clicking FAQs
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
