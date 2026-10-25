import { GameSEO } from "@/components/game-seo";
import { SequenceMemoryTest } from "@/components/sequence-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Layers, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sequence Memory Test – Spatial Pattern Order & Corsi Block Span | CpsSpeedTest',
  description: 'Test your sequential visual memory on our Corsi-inspired grid test. Watch flashing squares in order, memorize the spatial trajectory, and reproduce the sequence with zero mistakes.',
  keywords: ['sequence memory test', 'corsi block test', 'sequential memory span', 'spatial order memory', 'pattern recall test', 'working memory test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/sequence-memory-test',
  },
  openGraph: {
    title: 'Sequence Memory Test – Spatial Pattern Order & Corsi Block Span',
    description: 'Benchmark your sequential spatial memory span on an escalating grid. Reproduce growing paths and measure your working memory limits.',
    url: 'https://www.cpsspeedtest.com/sequence-memory-test',
    type: 'website',
  },
};

const sequenceMemoryFaqs = [
  {
    question: "What scientific test is the Sequence Memory Test based on?",
    answer: "The Sequence Memory Test is a digital implementation of the Corsi Block-Tapping Task, developed by neuropsychologist Philip Michael Corsi in 1972 at McGill University. It remains the clinical gold standard for measuring visuospatial short-term memory span and non-verbal working memory."
  },
  {
    question: "What is an average Corsi span score on a sequence memory test?",
    answer: "In clinical neuropsychological literature, the average human Corsi span is 5.4 to 6.2 blocks for healthy adults. Completing sequences of 8 to 11 steps reflects advanced sequential recall, while scores of 12+ place you in the top 3% of spatial working memory capacity."
  },
  {
    question: "How does spatial path trajectory encoding help remember long sequences?",
    answer: "Rather than memorizing separate square positions (e.g. Center, Top-Left, Bottom-Right), top performers visualize a continuous moving line—like drawing a single continuous stroke or tracing a constellation across the 3x3 matrix. This converts discrete events into one holistic geometric movement."
  },
  {
    question: "What is the difference between Visual Memory and Sequence Memory?",
    answer: "Visual Memory presents all target items simultaneously as a static spatial picture, evaluating your visuospatial pattern capacity. Sequence Memory presents items sequentially over time, requiring your brain to track both location and temporal chronological order."
  },
  {
    question: "Can sequence memory training help improve gaming and daily focus?",
    answer: "Yes. Sequential working memory is heavily engaged when executing ability rotations in MMOs/MOBAs, predicting enemy movement paths in tactical shooters, remembering multi-step instructions, and performing complex mental calculations."
  }
];

export default function SequenceMemoryTestPage() {
  return (
    <>
      <GameSEO 
        name="Sequence Memory Test"
        description="Test your sequential visual memory on our Corsi-inspired grid test. Memorize the spatial trajectory of flashing squares and repeat them in order."
        url="https://www.cpsspeedtest.com/sequence-memory-test"
        faqs={sequenceMemoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Corsi Block Span &amp; Spatial Trajectory Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Sequence Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A sequence of squares will illuminate one by one across the 3x3 grid. Memorize the chronological order and click the squares in the exact same sequence.
          </p>
        </header>

        {/* Sequence Memory Test Component */}
        <div className="py-2">
          <SequenceMemoryTest />
        </div>

        {/* ── Section 1: The Corsi Block-Tapping Task (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              The Corsi Block Task: Temporal Order in Working Memory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In 1972, Canadian psychologist Philip Corsi created the <strong>Block-Tapping Task</strong> to explore how the brain stores non-verbal, spatial-temporal information. While the famous Digit Span test measures verbal auditory memory, the Sequence Memory test directly isolates the right hemisphere&apos;s spatial networks (specifically the right parietal cortex and hippocampus).
            </p>
            <p>
              Each level adds exactly one new step to the tail of the sequence. To succeed as the chain lengthens, your brain must execute continuous working memory updating: holding previously learned positions in rehearsal while simultaneously appending the newest square without overwriting the sequence start.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Corsi Span Percentiles ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Sequence Memory Span Tiers (Completed Sequence Length)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compare your maximum completed sequence length against global cognitive benchmarks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Steps 1 – 5</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Basic Spatial Span</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Relies on raw visual tracking. The participant loses track when the sequence requires crossing over previously activated squares.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Steps 6 – 8</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Corsi Span</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Matches typical healthy human working memory capacity (5.5–6.5 items). Good focus on intermediate directional transitions.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Steps 9 – 12</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Memorizer</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 10% performance. Successfully chunks the sequence into continuous vector strokes (e.g., &quot;Z-pattern followed by clockwise loop&quot;).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Steps 13+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master Spatial Span</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% elite tier. Flawless spatial trajectory visualization, dual motor-visual encoding, and rock-solid concentration under pressure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Trajectory Chunking Strategies ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Kinesthetic Path Tracing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Continuous Motion Line:</strong> Imagine a glowing laser line drawn between each sequential tile. Recalling the continuous motion path is far easier than remembering disconnected grid coordinates.
                </li>
                <li>
                  <strong className="text-foreground">Numpad Keypad Mapping:</strong> Map the 3x3 grid to the standard PC numpad (1 to 9). Subvocalize the numbers as a phone number (e.g. &quot;7-5-3, 9-1-2&quot;).
                </li>
                <li>
                  <strong className="text-foreground">Rhythmic Tapping:</strong> Physically move your mouse cursor along with the flashing lights in real time during the presentation phase to build motor memory.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Explore Related Memory &amp; Cognitive Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Strengthen all dimensions of working memory and mental agility:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/visual-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Visual Memory Test</span>
                  <span className="text-primary font-mono">Simultaneous Pattern Recall →</span>
                </Link>
                <Link href="/simon-says" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Simon Says</span>
                  <span className="text-primary font-mono">Audio-Visual Pattern Recall →</span>
                </Link>
                <Link href="/chimp-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Chimp Test</span>
                  <span className="text-primary font-mono">Primate Working Memory →</span>
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
              Frequently Asked Questions About Sequence Memory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {sequenceMemoryFaqs.map((faq, index) => (
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
