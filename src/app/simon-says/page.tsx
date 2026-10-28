import { GameSEO } from "@/components/game-seo";
import { SimonSays } from "@/components/games/simon-says";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Brain, Trophy, Activity, HelpCircle, CheckCircle2,
  Zap, ArrowRight, TrendingUp, Sparkles, Award,
  ShieldCheck, Volume2, Music
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simon Says – Sequential Working Memory & Auditory-Visual Recall | CpsSpeedTest",
  description:
    "Test your sequential working memory and pattern recall on our digital Simon Says challenge. Watch escalating colored light and sound sequences and repeat them without errors against global psychological benchmarks.",
  keywords: [
    "simon says",
    "memory test",
    "sequential memory",
    "pattern recall game",
    "working memory training",
    "audio visual memory",
    "cognitive pattern game",
    "ralph baer simon",
    "simon game online",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/simon-says",
  },
  openGraph: {
    title: "Simon Says – Sequential Working Memory & Pattern Recall",
    description: "Benchmark your sequential pattern recall, working memory span, and audio-visual synchronization across escalating difficulty levels.",
    url: "https://www.cpsspeedtest.com/simon-says",
    type: "website",
  },
};

const simonHowToSteps = [
  {
    name: "Initialize the 4-quadrant console",
    text: "Click 'Start Game' to launch the round. The 4 colored quadrants (Green, Red, Yellow, Blue) will calibrate.",
  },
  {
    name: "Observe the flashing color and acoustic pitch",
    text: "Simon illuminates one quadrant with an optical flash accompanied by a distinct harmonic frequency tone.",
  },
  {
    name: "Repeat the exact sequence in identical order",
    text: "Click the corresponding colored quadrant. Each correct sequence awards one point and increases your active streak.",
  },
  {
    name: "Encode the growing chain using audio-visual dual coding",
    text: "With each round, Simon appends one additional random color. Combine visual position with the acoustic pitch to anchor recall.",
  },
  {
    name: "Apply spatial chunking as lengths exceed 7 steps",
    text: "Group colors into trios or geometric shapes (e.g., clockwise triangles) to bypass the standard working memory bottleneck.",
  },
  {
    name: "Avoid mistakes to push your high-score record",
    text: "A single mistimed or incorrect button press ends the game immediately. Review your maximum sequence length against global norms.",
  },
];

const simonSaysFaqs = [
  {
    question: "How does Simon Says measure sequential working memory capacity?",
    answer:
      "Simon Says directly benchmarks the capacity of your short-term phonological loop and visuospatial sketchpad. With each completed round, the sequence extends by one additional random unit. According to cognitive psychologist George Miller's Law, typical human working memory holds 7 ± 2 discrete items. Advancing beyond 9 to 12 steps requires active cognitive chunking and cross-modal encoding.",
  },
  {
    question: "What cognitive strategies help achieve scores above 15 in Simon Says?",
    answer:
      "Top performers utilize spatial chunking and verbal narrative encoding. Instead of memorizing individual colors in isolation (e.g., Red, Blue, Green, Red), they group signals into trios, visualize geometric paths (such as clockwise triangles or diagonal crosses), or assign numerical digits (1 to 4) and subvocalize them rhythmically.",
  },
  {
    question: "How does dual audio-visual stimulation assist sequence recall?",
    answer:
      "Paivio's Dual-Coding Theory demonstrates that when stimuli are presented simultaneously as an optical flash (visuospatial) and a unique auditory tone (phonological), the brain generates two distinct, parallel memory traces. This multisensory redundancy makes recall significantly more resilient against attentional lapse than pure silent visual observation.",
  },
  {
    question: "Who originally invented the electronic Simon game?",
    answer:
      "The electronic Simon toy was invented by Ralph Baer (the legendary 'Father of Video Games' and creator of the Magnavox Odyssey) and Howard J. Morrison. Released by Milton Bradley at Studio 54 in New York in 1978, it was inspired by Atari's 1974 arcade game 'Touch Me' and became a cultural defining icon of the 1980s.",
  },
  {
    question: "What is the difference between Simon Says and the Corsi Sequence Memory Test?",
    answer:
      "The Corsi Sequence Memory Test uses an un-tinted, un-toned 3x3 grid testing pure spatial location order without sound. Simon Says uses a 4-color layout with fixed geometric positions and synchronized acoustic pitches, heavily recruiting musical pitch memory and dual-hemisphere auditory-visual processing.",
  },
  {
    question: "Can playing sequential memory games improve daily focus and executive function?",
    answer:
      "Yes. Regular practice with escalating sequential tasks enhances selective attention, working memory updating, and impulse inhibition in the prefrontal cortex—vital skills for following multi-step work instructions and maintaining concentration in distracting environments.",
  },
  {
    question: "Why do sequence memory scores degrade rapidly when tired or distracted?",
    answer:
      "Maintaining ordered neural tokens in working memory requires sustained metabolic energy in the dorsolateral prefrontal cortex (DLPFC). Mental fatigue causes item timestamping to scramble, leading to misplaced clicks even when all individual colors were correctly remembered.",
  },
];

export default function SimonSaysPage() {
  return (
    <>
      <GameSEO
        name="Simon Says – Audio-Visual Working Memory Challenge"
        description="Benchmark your sequential pattern recall, working memory span, and audio-visual synchronization across escalating difficulty levels."
        url="https://www.cpsspeedtest.com/simon-says"
        faqs={simonSaysFaqs}
        howToSteps={simonHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Exercise audio-visual dual coding, expand sequential working memory span past Miller's 7±2 limit, enhance rhythmic pattern chunking, and stimulate prefrontal executive networks."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Ralph Baer (1978) Audio-Visual Memory Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Simon Says Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Watch the flashing lights, listen to the musical tones, and repeat the escalating sequences. Test your audio-visual working memory against global standards.
          </p>
        </header>

        {/* Interactive Simon Says Component */}
        <SimonSays />

        {/* Section 1: What is Simon Says? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Simon Says Memory Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Simon Says</strong> is a classic electronic sequential memory game invented in 1978 by Ralph Baer and Howard J. Morrison. The device generates random sequences of lights and associated harmonic tones across four colored quadrants. Players must reproduce the entire sequence in exact chronological order, with each successful round appending one new step to test the outer limits of human working memory span.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Invention Year</span>
                <span className="text-lg font-black text-primary">1978</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Ralph Baer &amp; Howard Morrison</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Cognitive Threshold</span>
                <span className="text-lg font-black text-amber-500">7 – 9 Steps</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Miller&apos;s working memory limit</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Elite Mnemonic Tier</span>
                <span className="text-lg font-black text-emerald-500">15 – 25+ Steps</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Using geometric chunking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Master Simon Says Sequences
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {simonHowToSteps.map((step, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-border/80 bg-card/40 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {step.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Play Simon Says? Cognitive Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive Benefits of Audio-Visual Sequence Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Volume2 className="w-4 h-4" />
                  Multisensory Dual-Coding
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                By binding visual color flashes to distinct acoustic pitches, Simon exercises cross-modal sensory integration. This strengthens neural connectivity between the primary visual cortex (occipital lobe) and auditory processing areas (temporal lobe).
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Zap className="w-4 h-4" />
                  Working Memory Updating
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every round forces your brain to recall an existing sequence and immediately append a new item without corrupting the chronological order of earlier steps, directly training the n-back updating functions of the prefrontal cortex.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Music className="w-4 h-4" />
                  Rhythm &amp; Pitch Discrimination
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Musicians and gamers learn to perceive sequences as melodic phrases rather than abstract colors. Auditory pattern recognition allows players to &quot;hear&quot; the correct buttons before conscious thought initiates.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  Impulse Gating &amp; Error Avoidance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Simon Says enforces strict instant-death consequences: a single wrong click ends the game. This demands unwavering attentional discipline, eliminating hasty premature clicks during playback.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Paivio Dual-Coding & Audio-Visual Frequencies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Audio-Visual Harmonic Profiles in Simon
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Quadrant Color</th>
                  <th className="p-3">Quadrant Position</th>
                  <th className="p-3">Standard Acoustic Frequency</th>
                  <th className="p-3">Musical Tone Equivalent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-emerald-400 font-semibold">Green</td>
                  <td className="p-3">Top-Left</td>
                  <td className="p-3 text-foreground font-mono">415 Hz</td>
                  <td className="p-3 text-primary font-bold">G#4</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-rose-400 font-semibold">Red</td>
                  <td className="p-3">Top-Right</td>
                  <td className="p-3 text-foreground font-mono">310 Hz</td>
                  <td className="p-3 text-primary font-bold">D#4</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-400 font-semibold">Yellow</td>
                  <td className="p-3">Bottom-Left</td>
                  <td className="p-3 text-foreground font-mono">252 Hz</td>
                  <td className="p-3 text-primary font-bold">B3</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-cyan-400 font-semibold">Blue</td>
                  <td className="p-3">Bottom-Right</td>
                  <td className="p-3 text-foreground font-mono">209 Hz</td>
                  <td className="p-3 text-primary font-bold">G#3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Simon Says Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Novice Observer</div>
              <div className="text-2xl font-black text-foreground">1 – 6 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Memorizes colors as isolated visual events. Loses track when sequence crosses the standard short-term memory limit.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Average Adult</div>
              <div className="text-2xl font-black text-primary">7 – 10 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Matches global human baseline (Miller&apos;s 7 ± 2). Demonstrates reliable dual-coding across moderate sequence lengths.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Advanced Chunking</div>
              <div className="text-2xl font-black text-amber-500">11 – 15 Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% cognitive performance. Groups colors into triplets or recognizable melodic phrases with rhythmic subvocalization.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Simon Grandmaster</div>
              <div className="text-2xl font-black text-rose-500">16 – 25+ Steps</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite memory tier. Seamless combination of spatial geometry, melodic pitch memory, and numerical motor mapping.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Tips to Reach 15+ Steps in Simon Says
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Assign Numbers (1, 2, 3, 4)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Saying &quot;Yellow, Green, Red&quot; takes too many syllables. Number the quadrants (1 = Green, 2 = Red, 3 = Yellow, 4 = Blue) and recite them as quick single-digit numbers.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Chunk Into Rhythmic Triplets</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Group incoming signals into groups of three (e.g., &quot;1-2-4&quot;, pause, &quot;3-3-1&quot;). Grouping prevents memory overload and resets attentional focus between beats.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Listen to the Musical Melody</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Because each quadrant has a unique pitch, the sequence creates a musical tune. Humming the tune activates the auditory cortex, adding a second layer of recall insurance.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Trace Spatial Shapes with Fingers</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Lightly hover your finger over the quadrants as they flash. Kinesthetic muscle memory reinforces visual signals and makes input execution automatic.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {simonSaysFaqs.map((faq, index) => (
              <Card key={index} className="border-border/70 bg-card/40">
                <CardHeader className="py-3.5 px-4 sm:px-5">
                  <CardTitle className="text-sm sm:text-base font-semibold text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 pb-4 px-4 sm:px-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cross-linking Related Memory Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Cognitive Memory Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/sequence-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Sequence Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/visual-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Visual Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/chimp-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Chimp Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/memory-game"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Card Matching</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
