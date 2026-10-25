import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Zap, Timer, Flame, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: '1 Second CPS Test - Peak Burst Click Speed Challenge',
  description: 'Test your maximum single-second burst clicking speed. Measure your peak actuation rate without fatigue distortion on our high-precision click counter.',
  keywords: ['1 second cps test', 'cps test 1s', 'quick cps test', 'burst click speed', 'fastest click test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/cps-test-1s',
  },
};

const faqs1s = [
  {
    question: "What does the 1-second CPS test specifically measure?",
    answer: "The 1-second CPS test measures peak anaerobic burst speed. Because the test concludes before muscle fatigue and lactic acid accumulation occur, it reflects your highest potential instantaneous clicking cadence."
  },
  {
    question: "Why is a 1-second CPS score usually higher than a 5-second or 10-second score?",
    answer: "In a 1-second sprint, you can tense your hand for an explosive micro-burst without having to pace your muscular rhythm. Over 5 to 10 seconds, cardiovascular and muscular stamina cause click intervals to widen, lowering your average CPS."
  },
  {
    question: "What is a good score on a 1-second click test?",
    answer: "Recreational users typically hit 6 to 9 clicks in one second. Players employing jitter or butterfly clicking techniques frequently register 12 to 16+ clicks in a single second."
  }
];

export default function CpsTest1sPage() {
  return (
    <>
      <GameSEO 
        name="1 Second CPS Test"
        description="Test your maximum single-second burst clicking speed. Measure your peak actuation rate without fatigue distortion on our high-precision click counter."
        url="https://www.cpsspeedtest.com/cps-test-1s"
        faqs={faqs1s}
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Peak Anaerobic Burst Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            1 Second CPS Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click as many times as possible within a single explosive second. Measure your peak neuromuscular twitch rate before fatigue sets in.
          </p>
        </header>

        {/* 1s CPS Test with locked initial duration */}
        <CpsTest gameDuration={1} allowDurationChange={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                Burst Speed vs. Sustained Speed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                In competitive gaming (such as fast inventory management in Minecraft or quick trigger pulls in tactical shooters), a 1-second burst is often what decides an engagement.
              </p>
              <p>
                To compare your burst speed against sustained endurance, try our standard <Link href="/cps-test" className="text-primary hover:underline font-semibold">5-Second CPS Test</Link> or the extended <Link href="/kohi-click-test" className="text-primary hover:underline font-semibold">10-Second Kohi Challenge</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Maximizing 1-Second Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Finger Priming:</strong> Position your finger just barely above the switch surface to minimize pre-travel distance.</li>
                <li><strong className="text-foreground">Instant Trigger Mode:</strong> In instant mode, your initial contact counts as click #1 and instantly starts the 1-second window.</li>
                <li><strong className="text-foreground">Debounce Awareness:</strong> Make sure your mouse switch resets completely between rapid clicks.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              1-Second CPS FAQs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {faqs1s.map((faq, index) => (
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
