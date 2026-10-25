import { GameSEO } from "@/components/game-seo";
import { AimTrainer } from "@/components/aim-trainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Crosshair, Mouse, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Aim Trainer - Mouse Precision & Target Acquisition Practice',
  description: 'Sharpen your mouse precision and flick accuracy with our 30-second target acquisition trainer. Measure hit rate, target acquisition speed, and miss percentage.',
  keywords: ['aim trainer', 'aim practice', 'fps trainer', 'mouse accuracy test', 'flick accuracy'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/aim-trainer',
  },
};

const aimFaqs = [
  {
    question: "How does the Aim Trainer calculate overall accuracy?",
    answer: "Accuracy is calculated as: (Successful Target Hits ÷ Total Primary Mouse Clicks) × 100. Any click occurring outside the active target boundary registers as a miss, reducing your percentage."
  },
  {
    question: "What mouse DPI is optimal for target acquisition training?",
    answer: "Most competitive FPS players utilize 400 to 800 DPI with Windows 'Enhance Pointer Precision' disabled (raw input). Lower DPI with moderate in-game sensitivity encourages arm aiming from the elbow rather than wrist-only micro-movements, resulting in greater muscle memory consistency."
  },
  {
    question: "How does target acquisition practice translate to gaming performance?",
    answer: "Repeated target acquisition develops spatial motor coordination and reduces visual reaction latency. Consistent daily practice of 10–15 minutes builds muscle memory for flick shots and target switching without fatiguing your wrist flexors."
  }
];

export default function AimTrainerPage() {
  return (
    <>
      <GameSEO 
        name="Aim Trainer"
        description="Sharpen your mouse precision and flick accuracy with our 30-second target acquisition trainer. Measure hit rate, target acquisition speed, and miss percentage."
        url="https://www.cpsspeedtest.com/aim-trainer"
        faqs={aimFaqs}
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Crosshair className="w-3.5 h-3.5" />
            <span>Target Acquisition & Flick Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Aim Trainer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Acquire and eliminate targets within a 30-second window. Benchmark target acquisition speed, tracking accuracy, and missed click percentage.
          </p>
        </header>

        {/* Aim Trainer Component */}
        <AimTrainer />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Accuracy Over Raw Speed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                In competitive shooters (Valorant, CS2, Apex Legends), hitting 25 targets with 95% accuracy is far superior to rushing 35 targets with 60% accuracy.
              </p>
              <p>
                Focus on smooth, decisive crosshair movements from the target center rather than wild flicking that results in overshooting.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Mouse className="w-4 h-4 text-primary" />
                Input Settings Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Disable Mouse Acceleration:</strong> In Windows Mouse Settings, uncheck &quot;Enhance pointer precision&quot; to ensure a 1:1 linear physical-to-screen movement ratio.</li>
                <li><strong className="text-foreground">Use a Large Mousepad:</strong> Ample surface area allows arm-level panning for large distances while reserving wrist articulation for fine adjustments.</li>
                <li><strong className="text-foreground">Check Click Latency:</strong> Measure your reaction time on our <Link href="/reaction-time-test" className="text-primary hover:underline font-semibold">Reaction Time Test</Link>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Aim Training FAQs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {aimFaqs.map((faq, index) => (
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
