import { GameSEO } from "@/components/game-seo";
import { StroopTest } from "@/components/stroop-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Eye, Brain, Trophy, Activity, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Sparkles,
  Award, ShieldCheck, Focus
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stroop Test – Cognitive Control, Inhibition & Semantic Interference | CpsSpeedTest",
  description:
    "Take the classic Stroop Effect test online. Measure cognitive inhibition, selective attention, and mental processing latency under semantic color-word interference against clinical neuropsychological benchmarks.",
  keywords: [
    "stroop test",
    "stroop effect",
    "cognitive interference test",
    "color word test",
    "selective attention",
    "processing speed test",
    "executive function test",
    "anterior cingulate cortex",
    "cognitive inhibition test",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/stroop-test",
  },
  openGraph: {
    title: "Stroop Test – Cognitive Control & Semantic Interference",
    description: "Benchmark your brain's executive inhibition and mental processing speed on the interactive Stroop color-word interference test.",
    url: "https://www.cpsspeedtest.com/stroop-test",
    type: "website",
  },
};

const stroopHowToSteps = [
  {
    name: "Focus on the physical font ink color",
    text: "At each trial, a color word (such as 'BLUE', 'RED', or 'GREEN') will be displayed. Your sole task is to identify the font color, not the written word.",
  },
  {
    name: "Suppress the automatic reading reflex",
    text: "Your brain will involuntarily attempt to read the word text. Consciously inhibit this automated reading impulse in your anterior cingulate cortex.",
  },
  {
    name: "Identify the color of the ink visually",
    text: "Direct your visual focus purely to the physical wavelength/hue of the letters (e.g., if the word 'RED' is rendered in green ink, the answer is GREEN).",
  },
  {
    name: "Click the matching color response button",
    text: "Select the corresponding color button on screen or use designated keyboard shortcuts as rapidly as possible without guessing.",
  },
  {
    name: "Complete both congruent and incongruent trials",
    text: "The test presents both congruent trials (word matches ink) and incongruent trials (word conflicts with ink) to establish your baseline reaction speed.",
  },
  {
    name: "Analyze your Stroop interference latency in milliseconds",
    text: "Review your average response times. The difference in milliseconds between incongruent and congruent trials represents your semantic interference index.",
  },
];

const stroopFaqs = [
  {
    question: "What is the cognitive principle behind the Stroop Test?",
    answer:
      "First published by psychologist John Ridley Stroop in 1935 in the Journal of Experimental Psychology, the Stroop effect demonstrates semantic interference. For literate humans, reading printed text is an involuntary, automated cognitive process. When the semantic meaning of a word conflicts with the physical font color (for instance, the word 'BLUE' printed in red ink), the anterior cingulate cortex must actively suppress the automatic reading impulse to allow the visual cortex to identify the font color, introducing a measurable millisecond delay.",
  },
  {
    question: "What is the typical Stroop interference latency in milliseconds?",
    answer:
      "In psychological research, response time to congruent stimuli (e.g., 'RED' printed in red ink) averages roughly 500ms to 600ms. In incongruent trials (e.g., 'RED' printed in green ink), response time increases to 700ms to 850ms. The difference—typically between 150ms and 250ms—is the exact quantitative measurement of semantic interference in your executive system.",
  },
  {
    question: "Which brain structures are actively exercised during the Stroop Test?",
    answer:
      "The Stroop task primarily recruits two critical neuro-anatomical regions: the Anterior Cingulate Cortex (ACC), which is responsible for conflict monitoring and error detection, and the Dorsolateral Prefrontal Cortex (DLPFC), which implements top-down attentional control, working memory rules, and goal-directed motor inhibition.",
  },
  {
    question: "How can someone artificially minimize the Stroop effect?",
    answer:
      "A common perceptual bypass technique is to de-focus your gaze or focus narrowly on an isolated character stroke (such as the tip of the letter 'E') rather than the word as a whole. By preventing the word's full orthographic form from entering the visual word form area (VWFA), you suppress automated semantic decoding and process it purely as raw color wavelength.",
  },
  {
    question: "Is the Stroop Test used in medical and clinical neuropsychology?",
    answer:
      "Yes. The Stroop test is a gold-standard diagnostic instrument utilized worldwide to assess executive dysfunction, ADHD, traumatic brain injury (TBI), early Alzheimer's disease, and cognitive fatigue in commercial pilots, surgeons, and high-performance esports athletes.",
  },
  {
    question: "Does bilingualism affect Stroop Test performance?",
    answer:
      "Yes! Extensive cognitive neuroscience studies show that bilingual individuals exhibit significantly smaller Stroop interference effects (often 50–80ms lower latency). Managing two active language systems constantly trains prefrontal inhibitory control mechanisms, resulting in superior executive conflict resolution.",
  },
  {
    question: "How does mental fatigue or lack of sleep impact Stroop scores?",
    answer:
      "Executive inhibition is the most metabolically expensive cognitive operation in the human brain. Sleep deprivation and mental exhaustion dramatically degrade prefrontal inhibitory efficiency, causing Stroop interference latency to widen by 100ms to 200ms and significantly increasing error rates.",
  },
];

export default function StroopTestPage() {
  return (
    <>
      <GameSEO
        name="Stroop Test – Cognitive Control & Interference"
        description="Benchmark your brain's executive inhibition and mental processing speed on the interactive Stroop color-word interference test."
        url="https://www.cpsspeedtest.com/stroop-test"
        faqs={stroopFaqs}
        howToSteps={stroopHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Evaluate executive inhibition and selective attention, measure semantic interference latency in milliseconds, stimulate anterior cingulate cortex conflict monitoring, and benchmark against clinical neuropsychological standards."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>John Ridley Stroop (1935) Executive Inhibition Paradigm</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Stroop Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Name the font ink color while suppressing the automated impulse to read the written word. Measure your executive inhibition latency in milliseconds.
          </p>
        </header>

        {/* Interactive Stroop Component */}
        <StroopTest />

        {/* Section 1: What is the Stroop Test? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Stroop Effect Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Stroop Test</strong> is a classic neuropsychological assessment that measures <strong>cognitive control</strong> and <strong>semantic interference</strong>. Developed by John Ridley Stroop in 1935, it exposes the conflict between automated reading (an involuntary reflex) and conscious color perception. The difference in reaction time between congruent trials and conflicting incongruent trials reveals your brain&apos;s executive inhibition efficiency in milliseconds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Discovery Year</span>
                <span className="text-lg font-black text-primary">1935</span>
                <span className="text-xs text-muted-foreground block mt-0.5">J. Ridley Stroop landmark study</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Interference</span>
                <span className="text-lg font-black text-amber-500">150 – 250 ms</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Incongruent vs Congruent delta</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Primary Brain Hub</span>
                <span className="text-lg font-black text-emerald-500">ACC &amp; DLPFC</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Anterior cingulate cortex</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Take the Stroop Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {stroopHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Executive Inhibition Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Executive Inhibition Matters: Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Focus className="w-4 h-4" />
                  Selective Attention &amp; Distraction Filtering
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In open workspaces or noisy environments, sensory distractions constantly vie for working memory slots. Strong prefrontal inhibition suppresses irrelevant auditory and visual background noise, sustaining deep analytical focus.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  Impulse Control &amp; Decision Making
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Executive inhibition is the neurological brake system of the human brain. It enables traders to resist panic selling during market drops, drivers to avoid sudden erratic swerving, and gamers to hold fire on teammates.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Zap className="w-4 h-4" />
                  Esports Split-Second Conflict Resolution
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Competitive gamers must instantly distinguish between enemy ability flashes and allied effects. Fast conflict resolution prevents hesitation and ensures instantaneous trigger discipline in tactical shooters.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Activity className="w-4 h-4" />
                  Neurological Fatigue Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Because executive inhibition is the first cognitive capacity to degrade when overtired, tracking your Stroop interference latency provides an objective biomarker of sleep deprivation and mental burnout.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Congruent vs Incongruent Reaction Time */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Congruent vs Incongruent Reaction Time Dynamics
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Trial Condition</th>
                  <th className="p-3">Example Stimulus</th>
                  <th className="p-3">Average Reaction Time</th>
                  <th className="p-3">Executive Processing Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Congruent (Facilitation)</td>
                  <td className="p-3 text-emerald-400 font-semibold">Word &apos;RED&apos; in red ink</td>
                  <td className="p-3 text-emerald-400 font-bold">520 – 600 ms</td>
                  <td className="p-3">Semantic and visual channels agree; zero conflict delay</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Neutral Baseline</td>
                  <td className="p-3 text-primary font-semibold">Word &apos;DOG&apos; in red ink</td>
                  <td className="p-3 text-primary font-bold">580 – 660 ms</td>
                  <td className="p-3">Unrelated word meaning; minimal semantic interference</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Incongruent (Interference)</td>
                  <td className="p-3 text-rose-400 font-semibold">Word &apos;RED&apos; in green ink</td>
                  <td className="p-3 text-rose-400 font-bold">720 – 850 ms</td>
                  <td className="p-3">ACC detects conflict; DLPFC suppresses reading pathway (+180ms delay)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Stroop Interference Latency Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">High Interference</div>
              <div className="text-2xl font-black text-rose-500">&gt; 280 ms</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pronounced semantic conflict. High susceptibility to automated impulses; often indicates acute mental fatigue or sleep debt.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Normal Adult</div>
              <div className="text-2xl font-black text-primary">160 – 260 ms</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard healthy human baseline. Demonstrates typical prefrontal inhibitory control and error conflict resolution.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Control</div>
              <div className="text-2xl font-black text-amber-500">100 – 150 ms</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% executive control. Strong attentional focus and fast perceptual gating; common among competitive gamers and bilinguals.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Elite Inhibitor</div>
              <div className="text-2xl font-black text-emerald-400">&lt; 90 ms</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% executive speed. Instantaneous suppression of lexical processing, treating text purely as optical color data.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Techniques to Minimize Semantic Interference
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">De-Focus Your Eyes (Soft Gaze)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Slightly unfocus your vision so the letters blur into a blob of color. If your visual cortex cannot resolve letter shapes, automated reading cannot trigger.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Fixate on an Isolated Letter Stroke</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Look strictly at the bottom curve of the first letter or the dot of an &apos;i&apos;. Viewing an isolated stroke prevents the visual word form area (VWFA) from recognizing the full word.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Suppress Subvocalization (Don&apos;t Say Words)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Never silently read the word in your mind. Keep your vocal cords relaxed and bypass your inner speech system entirely by converting color directly to finger clicks.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Rest Before Testing</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Because conflict resolution relies on high prefrontal glucose consumption, testing while sleep-deprived or mentally fatigued widens interference by up to 150ms.
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
            {stroopFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Brain Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Cognitive Benchmarks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/verbal-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Verbal Memory</span>
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
              href="/sequence-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Sequence Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
