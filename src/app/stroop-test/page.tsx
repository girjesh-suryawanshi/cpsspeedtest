import { GameSEO } from "@/components/game-seo";
import { StroopTest } from "@/components/stroop-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Eye, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Stroop Test – Cognitive Control, Inhibition & Semantic Interference | CpsSpeedTest',
  description: 'Take the classic Stroop Effect test. Measure your cognitive inhibition, selective attention, and mental processing latency under semantic color-word interference.',
  keywords: ['stroop test', 'stroop effect', 'cognitive interference test', 'color word test', 'selective attention', 'processing speed test', 'executive function test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/stroop-test',
  },
  openGraph: {
    title: 'Stroop Test – Cognitive Control & Semantic Interference',
    description: 'Benchmark your brain\'s executive inhibition and mental processing speed on the interactive Stroop color-word interference test.',
    url: 'https://www.cpsspeedtest.com/stroop-test',
    type: 'website',
  },
};

const stroopFaqs = [
  {
    question: "What is the cognitive principle behind the Stroop Test?",
    answer: "Published by psychologist John Ridley Stroop in 1935, the Stroop effect demonstrates semantic interference. For literate adults, reading printed text is an involuntary, automated cognitive process. When the semantic meaning of a word conflicts with the physical font color (for instance, the word 'BLUE' printed in red ink), the anterior cingulate cortex must actively suppress the automatic reading impulse to allow the visual cortex to identify the font color, introducing measurable millisecond delay."
  },
  {
    question: "What is the typical Stroop interference latency in milliseconds?",
    answer: "In psychological literature, reaction time to congruent stimuli (e.g., 'RED' printed in red ink) averages roughly 500ms to 600ms. In incongruent trials (e.g., 'RED' printed in green ink), reaction time increases to 700ms to 850ms. The difference—between 150ms and 250ms—is the exact quantitative measurement of semantic interference."
  },
  {
    question: "Which brain structures are actively exercised during the Stroop Test?",
    answer: "The Stroop task primarily recruits the anterior cingulate cortex (ACC), which is responsible for conflict monitoring and error detection, and the dorsolateral prefrontal cortex (DLPFC), which implements top-down attentional control and goal-directed motor planning."
  },
  {
    question: "How can someone artificially minimize the Stroop effect?",
    answer: "A common perceptual bypass technique is to de-focus your gaze or focus narrowly on an isolated character stroke (such as the tip of the letter 'E') rather than the word as a whole. By preventing the word's full orthographic form from entering the visual word form area (VWFA), you suppress automated semantic decoding."
  },
  {
    question: "Is the Stroop Test used in medical and neuropsychological diagnostics?",
    answer: "Yes. The Stroop test is a gold-standard diagnostic instrument utilized worldwide to assess executive dysfunction, ADHD, traumatic brain injury (TBI), early Alzheimer's disease, and cognitive fatigue in pilots and athletes."
  }
];

export default function StroopTestPage() {
  return (
    <>
      <GameSEO 
        name="Stroop Test – Color vs Text Challenge"
        description="Take the classic Stroop Test to measure cognitive control, selective attention, and mental processing speed under semantic interference."
        url="https://www.cpsspeedtest.com/stroop-test"
        faqs={stroopFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>Executive Inhibition &amp; Semantic Conflict Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Stroop Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click the button matching the physical FONT COLOR, not the written word. Challenge your brain&apos;s executive control against powerful automated reading habits.
          </p>
        </header>

        {/* Stroop Test Interactive Component */}
        <div className="py-2">
          <StroopTest />
        </div>

        {/* ── Section 1: Cognitive Neuroscience of the Stroop Effect (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              The Stroop Effect: Automaticity vs. Cognitive Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              When you glance at a word in your native language, your brain decodes its meaning automatically and involuntarily within approximately 200 milliseconds. This process—known in cognitive psychology as <strong>automaticity</strong>—is what enables you to read effortlessly without sounding out every letter.
            </p>
            <p>
              However, when a word says &quot;YELLOW&quot; but is painted in deep violet ink, two conflicting neural pathways activate simultaneously:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">The Fast Automatic Path:</strong> The orthographic reading network identifies the lexical concept &quot;YELLOW&quot; and prepares a motor command to click Yellow.
              </li>
              <li>
                <strong className="text-foreground">The Slow Controlled Path:</strong> The visual color-processing cortex analyzes the optical wavelength of the ink and identifies Violet.
              </li>
            </ol>
            <p className="text-xs">
              Your <em>anterior cingulate cortex</em> must intercept the incorrect automatic response, apply inhibitory brake pressure, and redirect motor control to the correct color button. The time required to resolve this mental tug-of-war is your Stroop interference latency.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Response Latencies ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Stroop Test Performance Tiers &amp; Reaction Latency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on empirical reaction times across thousands of incongruent color-word trials:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Under 650 ms</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite Inhibition</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Near-zero semantic delay. Exceptional prefrontal inhibitory control; suppresses automatic reading almost instantaneously.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">651 – 800 ms</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Above Average</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast conflict resolution with high accuracy (&gt;95%). Characteristic of gamers and individuals with high attentional flexibility.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⏱️</div>
                <div className="font-bold text-foreground">801 – 1,000 ms</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Standard Adult Baseline</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Typical human interference curve. The participant feels the conscious mental hesitation before selecting the font color.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">1,000+ ms</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">High Interference / Fatigue</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Frequent hesitation or false-start clicks. Often caused by lack of sleep, cognitive fatigue, or high distractibility.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Cognitive Strategies & Cross-Training ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Strategies to Overcome Semantic Bias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Defocusing Visual Text:</strong> Relax your eyes so the letters blur into a solid chromatic patch. If your foveal vision cannot resolve the letter glyphs, semantic processing is blocked.
                </li>
                <li>
                  <strong className="text-foreground">Spatial Button Mapping:</strong> Memorize the physical layout of the color buttons (e.g. Red Top-Left, Blue Top-Right) so your finger moves reflexively without needing visual search.
                </li>
                <li>
                  <strong className="text-foreground">Subvocal Color Naming:</strong> Verbally say the font color aloud to prime your motor response before the printed word can register.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Cognitive Reflex Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Benchmark your sensory speed and working memory across our cognitive testing suite:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/reaction-time-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Reaction Time Test</span>
                  <span className="text-primary font-mono">Simple Stimulus Latency →</span>
                </Link>
                <Link href="/chimp-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Chimp Test</span>
                  <span className="text-primary font-mono">Spatial Working Memory →</span>
                </Link>
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Motor Coordination →</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About the Stroop Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {stroopFaqs.map((faq, index) => (
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
