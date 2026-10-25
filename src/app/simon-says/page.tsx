import { GameSEO } from "@/components/game-seo";
import { SimonSays } from "@/components/games/simon-says";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simon Says – Sequential Working Memory & Auditory-Visual Recall | CpsSpeedTest",
  description: "Test your sequential working memory and pattern recall on our Simon Says challenge. Watch escalating colored light and sound sequences and repeat them without errors.",
  keywords: ['simon says', 'memory test', 'sequential memory', 'pattern recall game', 'working memory training', 'audio visual memory', 'cognitive pattern game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/simon-says',
  },
  openGraph: {
    title: "Simon Says – Sequential Working Memory & Pattern Recall",
    description: "Benchmark your sequential pattern recall, working memory span, and audio-visual synchronization across escalating difficulty levels.",
    url: 'https://www.cpsspeedtest.com/simon-says',
    type: 'website',
  },
};

const simonSaysFaqs = [
  {
    question: "How does Simon Says measure sequential working memory capacity?",
    answer: "Simon Says evaluates the capacity of your short-term phonological loop and visuospatial sketchpad. With each round, the sequence extends by one additional random unit. According to cognitive psychologist George Miller's Law, typical human working memory holds 7 ± 2 discrete items. Advancing beyond 9 to 12 items requires active cognitive chunking."
  },
  {
    question: "What cognitive strategies help achieve scores above 15 in Simon Says?",
    answer: "Top scorers apply spatial chunking and verbal narrative encoding. Instead of memorizing individual colors (e.g., Red, Blue, Green, Red), they group signals into trios, visualize geometric paths (such as clockwise triangles), or assign numbers (1 to 4) and subvocalize them rhythmically."
  },
  {
    question: "How does dual audio-visual stimulation assist sequence recall?",
    answer: "Dual coding theory (Paivio) demonstrates that when information is presented simultaneously as an optical flash (visuospatial) and a unique auditory pitch (phonological), the brain encodes two distinct memory traces in parallel. This redundancy makes recall significantly more resilient than pure visual observation."
  },
  {
    question: "Who originally invented the electronic Simon game?",
    answer: "The original Simon electronic toy was created by Ralph Baer (the father of home video games and inventor of the Magnavox Odyssey) and Howard J. Morrison, released by Milton Bradley in 1978. It was inspired by Atari's 1974 arcade game Touch Me."
  },
  {
    question: "Can playing sequential memory games improve focus and cognitive health?",
    answer: "Regular practice with escalating sequential tasks enhances selective attention, working memory updating, and executive function. It exercises the prefrontal cortex networks responsible for holding structured temporal information in conscious awareness."
  }
];

export default function SimonSaysPage() {
  return (
    <>
      <GameSEO 
        name="Simon Says"
        description="Test your sequential working memory and pattern recall on our Simon Says challenge. Watch escalating sequences and repeat them accurately."
        url="https://www.cpsspeedtest.com/simon-says"
        faqs={simonSaysFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Sequential Working Memory &amp; Pattern Recall</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Simon Says
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Watch the colored quadrants illuminate with distinct audio frequencies, memorize the growing temporal sequence, and reproduce the exact pattern without making a mistake.
          </p>
        </header>

        {/* Simon Says Interactive Game */}
        <div className="py-2">
          <SimonSays />
        </div>

        {/* ── Section 1: Cognitive Psychology of Sequential Recall (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Science of Sequential Memory: Overcoming Miller&apos;s Law
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong>Simon Says</strong> is one of the world&apos;s most celebrated benchmarks of temporal pattern recall and working memory updating. In 1956, cognitive psychologist George A. Miller published the foundational paper <em>The Magical Number Seven, Plus or Minus Two</em>, establishing that the human brain can hold between 5 and 9 discrete units in working memory before new incoming inputs displace older ones.
            </p>
            <p>
              In Simon Says, the difficulty escalates non-linearly. By round 7, raw unassisted working memory becomes saturated. To reach sequences of 10, 15, or 20+ steps, your prefrontal cortex must transition from simple passive storage to active <strong>information chunking</strong>—combining 3 or 4 sequential button presses into a single consolidated mental unit.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Sequence Length Percentiles ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Simon Says Score Tiers &amp; Working Memory Percentiles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How deep into the sequence can your working memory reach? Compare your maximum completed round against community cognitive benchmarks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Rounds 1 – 6</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Baseline Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Operates within immediate sensory working memory. The player has not yet adopted active chunking or spatial pathing strategies.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Rounds 7 – 10</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Human Span</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Matches standard adult working memory capacity (Miller&apos;s 7 ± 2 boundary). Good attentional focus with minor hesitation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Rounds 11 – 15</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Memorizer</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Active chunking in trios or directional vectors. Strong audio-visual phonological loop synchronization.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Rounds 16+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% memory span. Seamless spatial pattern abstraction, rhythmic tempo encoding, and rock-solid attentional discipline.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Pattern Chunking Techniques ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Three Proven Chunking Strategies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Numerical Subvocalization:</strong> Assign numbers 1 (Top), 2 (Right), 3 (Bottom), 4 (Left). Whisper numbers rhythmically (e.g. &quot;1-2-1, 4-3-2&quot;) to store the pattern as auditory speech loops.
                </li>
                <li>
                  <strong className="text-foreground">Spatial Geometric Lines:</strong> Trace invisible lines connecting consecutive buttons (e.g., &quot;clockwise circle&quot;, &quot;diagonal cross&quot;, &quot;zigzag&quot;).
                </li>
                <li>
                  <strong className="text-foreground">Rhythmic Tonal Chords:</strong> Listen to the pitches as musical melodies. If you recognize intervals, you can play back the sequence like singing a song.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Cognitive &amp; Reflex Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pair sequential pattern recall with complementary memory and cognitive inhibition benchmarks:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/chimp-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Chimp Test</span>
                  <span className="text-primary font-mono">Working Spatial Memory →</span>
                </Link>
                <Link href="/stroop-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Stroop Test</span>
                  <span className="text-primary font-mono">Cognitive Interference →</span>
                </Link>
                <Link href="/number-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Number Memory Test</span>
                  <span className="text-primary font-mono">Digit Span Benchmark →</span>
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
              Frequently Asked Questions About Simon Says
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {simonSaysFaqs.map((faq, index) => (
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
