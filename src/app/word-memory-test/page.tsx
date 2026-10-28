import { GameSEO } from "@/components/game-seo";
import { WordMemoryTest } from "@/components/word-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  BookOpen, Brain, Trophy, Activity, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Sparkles,
  Award, ShieldCheck, ListOrdered
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Memory Test – Verbal Free Recall & Short-Term Memory Span | CpsSpeedTest",
  description:
    "Test your verbal short-term memory on our standardized word recall test. Memorize randomized word lists, evaluate the Serial Position Effect (Primacy and Recency), and benchmark your verbal retrieval capacity.",
  keywords: [
    "word memory test",
    "verbal memory test",
    "free recall test",
    "serial position effect",
    "short term verbal memory",
    "memory recall game",
    "verbal span test",
    "ebbinghaus free recall",
    "word list recall",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/word-memory-test",
  },
  openGraph: {
    title: "Word Memory Test – Verbal Free Recall & Short-Term Memory Span",
    description: "Benchmark your verbal working memory and free recall retrieval capacity across escalating lists of randomized words.",
    url: "https://www.cpsspeedtest.com/word-memory-test",
    type: "website",
  },
};

const wordHowToSteps = [
  {
    name: "Study the randomized word list",
    text: "A list of unrelated English words will be displayed on screen for a fixed memorization period (typically 30 to 45 seconds).",
  },
  {
    name: "Organize words into semantic clusters",
    text: "Mentally categorize words into thematic groups (e.g., tools, animals, natural objects, emotions) to create interconnected retrieval cues.",
  },
  {
    name: "Rehearse the primacy words immediately",
    text: "Pay concentrated attention to the first 3 or 4 words on the list, mentally repeating them so they transfer into intermediate memory.",
  },
  {
    name: "Wait for the recall phase to unlock",
    text: "Once the countdown expires, the list disappears completely and an interactive text entry console or word selection grid unlocks.",
  },
  {
    name: "Retrieve the most recent words first",
    text: "Immediately recall the final words from the bottom of the list while their auditory echo still reverberates in your active phonological loop.",
  },
  {
    name: "Submit your recalled words and examine your score",
    text: "Review your total correct word count, omission errors, and analyze your position curve against standardized Ebbinghaus recall norms.",
  },
];

const wordMemoryFaqs = [
  {
    question: "What is the psychological basis of the Word Memory Test?",
    answer:
      "The Word Memory Test is modeled on classical verbal free-recall paradigms first formulated by pioneering memory researcher Hermann Ebbinghaus in 1885 and mathematically formalized by Bennet Murdock in 1962. It evaluates your brain's executive capacity to encode unstructured lexical items into working memory and reconstruct them without external cues.",
  },
  {
    question: "What is the Serial Position Effect (Primacy and Recency)?",
    answer:
      "When humans memorize a list of words, recall probability follows a distinct U-shaped curve. Items at the very beginning are recalled with high fidelity (Primacy Effect) because they received focused attention and transferred to intermediate memory. Items at the very end are also recalled easily (Recency Effect) because they still reside in the active phonological loop. Words in the middle suffer from retroactive and proactive interference and are forgotten most frequently.",
  },
  {
    question: "What is an average score on an unprompted word recall test?",
    answer:
      "When presented with a list of 12 to 15 unrelated words, typical healthy adults accurately recall 6 to 8 words on immediate free recall. Scoring 9 to 11 words indicates superior verbal retrieval and strong associative encoding, while recalling 12+ words places a participant in the top 2% of unassisted verbal memory capacity.",
  },
  {
    question: "How does semantic clustering boost word recall scores?",
    answer:
      "Semantic clustering involves mentally sorting random words into categorical buckets—such as nature, human occupations, physical tools, or abstract concepts. By organizing unlinked words into thematic networks, you create retrieval cues where recalling a single word automatically unlocks other words within the same mental bucket.",
  },
  {
    question: "What is the difference between Word Memory (Free Recall) and Verbal Memory (Recognition)?",
    answer:
      "Word Memory relies on free recall (retrieving words entirely from memory without visual prompts), which requires high executive retrieval effort in the hippocampus and prefrontal cortex. Verbal Memory (recognition) shows words one by one and asks whether you have seen them previously (SEEN vs. NEW), which tests familiarity thresholds rather than active reconstruction.",
  },
  {
    question: "Why do unrelated words cause more memory fatigue than structured sentences?",
    answer:
      "In sentences, grammatical syntax and narrative logic provide natural scaffolding that constrains word candidates. In random word lists, words share zero syntactic or semantic dependencies, forcing the brain to expend maximum metabolic energy maintaining disconnected neural representations in working memory.",
  },
  {
    question: "Can word recall training improve vocabulary retention and public speaking?",
    answer:
      "Yes. Practicing active retrieval strengthens frontal-temporal neural tracts used in spontaneous speech production. It reduces tip-of-the-tongue phenomena, accelerates lexical access during debates or presentations, and enhances long-term retention of technical terminology.",
  },
];

export default function WordMemoryTestPage() {
  return (
    <>
      <GameSEO
        name="Word Memory Test – Verbal Free Recall Benchmark"
        description="Benchmark your verbal working memory and free recall retrieval capacity across escalating lists of randomized words."
        url="https://www.cpsspeedtest.com/word-memory-test"
        faqs={wordMemoryFaqs}
        howToSteps={wordHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Evaluate verbal free-recall working memory, master semantic clustering mnemonics, leverage the Serial Position Effect (Primacy and Recency), and strengthen spontaneous lexical retrieval."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Murdock Free-Recall Psychometric Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Memorize lists of randomized words, master semantic clustering, and test your free-recall retrieval capacity against global psychological benchmarks.
          </p>
        </header>

        {/* Interactive Word Memory Component */}
        <WordMemoryTest />

        {/* Section 1: What is Word Memory? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Word Memory Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Word Memory Test</strong> is a standardized implementation of the classical <strong>Verbal Free-Recall Task</strong>, originally formulated by cognitive psychologists to measure unassisted retrieval from short-term and intermediate memory. Unlike recognition tests where choices are provided, this test evaluates your brain&apos;s ability to actively reconstruct and retrieve words from scratch without visual prompts or sequential order constraints.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Cognitive Paradigm</span>
                <span className="text-lg font-black text-primary">Free Recall</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Zero external retrieval prompts</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Human Recall</span>
                <span className="text-lg font-black text-amber-500">6 – 8 Words</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Out of 15 randomized items</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Superior Mnemonic Recall</span>
                <span className="text-lg font-black text-emerald-500">12 – 15 Words</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Using semantic clustering</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Master Word Free Recall
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {wordHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Word Recall Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Free Recall Matters: Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <ListOrdered className="w-4 h-4" />
                  Exam Performance &amp; Academic Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Academic examinations (short-answer, essay, medical board exams) demand pure free recall rather than multiple-choice recognition. Training free-recall pathways builds resilient long-term retrieval routes that resist test anxiety.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  Spontaneous Public Speaking &amp; Fluency
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                During debates, interviews, or executive keynote speeches, notes are rarely accessible. High free-recall capacity allows you to spontaneously retrieve key data points, facts, and eloquent phrasing on demand without awkward pauses.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Zap className="w-4 h-4" />
                  Eliminating Tip-of-the-Tongue States
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Tip-of-the-tongue lethargy occurs when phonological retrieval disconnects from semantic knowledge. Regular word memory drills strengthen the left arcuate fasciculus, enabling instantaneous word retrieval under conversational pressure.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  Executive Frontal Lobe Health
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Active free recall forces the dorsolateral prefrontal cortex to conduct structured memory searches through temporal cortex schemas, serving as an exceptional mental workout for neuroplastic maintenance.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Serial Position Effect Science */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            The Serial Position Effect: Primacy vs Recency Dynamics
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">List Position</th>
                  <th className="p-3">Cognitive Effect</th>
                  <th className="p-3">Recall Probability</th>
                  <th className="p-3">Neurological Storage Subsystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Beginning (Words 1 – 3)</td>
                  <td className="p-3 text-emerald-400 font-semibold">Primacy Effect</td>
                  <td className="p-3 text-emerald-400 font-bold">75% – 90%</td>
                  <td className="p-3">Transferred into Hippocampus / Long-Term Store</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Middle (Words 4 – 11)</td>
                  <td className="p-3 text-rose-400 font-semibold">Asymptote (Dip)</td>
                  <td className="p-3 text-rose-400 font-bold">25% – 45%</td>
                  <td className="p-3">Suffers proactive &amp; retroactive interference</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">End (Words 12 – 15)</td>
                  <td className="p-3 text-primary font-semibold">Recency Effect</td>
                  <td className="p-3 text-primary font-bold">80% – 95%</td>
                  <td className="p-3">Resides in active Phonological Working Memory loop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Word Memory Performance Tiers (15-Word Standard)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Developing Span</div>
              <div className="text-2xl font-black text-foreground">3 – 5 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Captures only the immediate recency echo. Words from the beginning and middle of the list fade before retrieval begins.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Healthy Baseline</div>
              <div className="text-2xl font-black text-primary">6 – 8 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard healthy adult baseline. Successfully retains primacy and recency words with typical mid-list omission.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Recall</div>
              <div className="text-2xl font-black text-amber-500">9 – 12 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% cognitive performance. Demonstrates active semantic clustering, grouping words into thematic buckets during study time.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Mnemonic Master</div>
              <div className="text-2xl font-black text-rose-500">13 – 15 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite recall. Utilizes narrative visualization or memory palace loci to achieve near-perfect retrieval of all 15 words.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Techniques to Master Word Free Recall
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Dump Recency Words First</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    The moment the recall phase begins, immediately type out the last 3 words you saw. These words are held in fragile auditory echo memory that evaporates within 15 seconds.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Group into Thematic Triads</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Scan the list and mentally link unrelated words into triads using action verbs. For instance, link &quot;TIGER - CHAIR - OCEAN&quot; into a tiger resting on a chair floating in the ocean.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Spend Extra Attention on the Middle Words</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Because the middle of the list suffers the highest rate of memory decay, deliberately allocate 60% of your study time to linking words 5 through 10 into memorable pictures.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Vocalize or Whisper Distinct Tones</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Subvocalizing words with exaggerated pitch variations attaches acoustic uniqueness to each term, preventing generic words from blurring together during retrieval.
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
            {wordMemoryFaqs.map((faq, index) => (
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
              href="/verbal-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Verbal Recognition</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/number-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Number Memory</span>
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
              href="/stroop-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Stroop Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
