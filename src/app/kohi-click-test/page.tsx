import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Swords, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Kohi Click Test (10s) - Minecraft PvP Stamina Benchmark',
  description: 'Take the classic 10-second Kohi Click Test. Measure sustained clicking endurance and hit registration speed based on historical Minecraft PvP standards.',
  keywords: ['kohi click test', 'kohi cps test', 'minecraft cps', 'pvp clicking', '10 second click test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/kohi-click-test',
  },
};

const kohiFaqs = [
  {
    question: "What is the historical origin of the Kohi Click Test?",
    answer: "The test originated on the historic 'Kohi' Minecraft PvP practice server in the mid-2010s. Server admins created a 10-second clicking arena to benchmark player click speeds and verify whether players were clicking legitimately or utilizing unauthorized macros and auto-clickers."
  },
  {
    question: "Why is 10 seconds considered the gold standard for PvP click testing?",
    answer: "A 10-second duration tests true muscular endurance rather than brief 1-second burst luck. In competitive Minecraft PvP engagements, fights frequently last several seconds; maintaining a consistent 8–12 CPS cadence while simultaneously tracking opponent movement requires sustained stamina."
  },
  {
    question: "What is a competitive score on the Kohi Click Test?",
    answer: "Using standard regular clicking, 6.5–8.0 CPS is typical. Using jitter clicking, competitive players achieve 10–13 CPS. Using butterfly clicking on low-debounce mechanical switches, experienced players can reach 14–18+ CPS over the full 10-second window."
  }
];

export default function KohiClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Kohi Click Test"
        description="Take the classic 10-second Kohi Click Test. Measure sustained clicking endurance and hit registration speed based on historical Minecraft PvP standards."
        url="https://www.cpsspeedtest.com/kohi-click-test"
        faqs={kohiFaqs}
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Swords className="w-3.5 h-3.5" />
            <span>Classic Minecraft 10-Second PvP Standard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Kohi Click Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The benchmark 10-second test popularized by the Kohi PvP community. Test your stamina, pacing consistency, and fatigue resistance.
          </p>
        </header>

        {/* 10s Kohi Test */}
        <CpsTest gameDuration={10} allowDurationChange={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Why Kohi Pacing Matters in PvP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                In Minecraft 1.8 combat mechanics, damage hit-ticks occur every 0.5 seconds (20 ticks per second, with 10 ticks of invulnerability). However, higher CPS dramatically increases your probability of landing the first hit tick and delivering maximum knockback sprint resets.
              </p>
              <p>
                Testing your click speed for 10 seconds reveals whether your speed drops off midway through an engagement due to hand fatigue.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                10-Second Pacing Advice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Do not over-tense in second 1:</strong> Explosive tensing causes early fore-arm lactic buildup by second 6.</li>
                <li><strong className="text-foreground">Maintain light grip pressure:</strong> Keep your palm loose and focus finger actuation near the switch fulcrum.</li>
                <li><strong className="text-foreground">Inspect your chart:</strong> Review the graph below your score to check if your click rate was steady or sharply declining.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Kohi Click Test FAQs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {kohiFaqs.map((faq, index) => (
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
