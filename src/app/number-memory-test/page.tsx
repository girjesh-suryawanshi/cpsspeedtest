import { GameSEO } from "@/components/game-seo";
import { NumberMemoryTest } from "@/components/number-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Hash, Brain, Activity, Sparkles, CheckCircle2,
  HelpCircle, Trophy, TrendingUp, Cpu, Award, ArrowRight,
  Lightbulb, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Number Memory Test – Digit Span Working Memory Benchmark | CpsSpeedTest",
  description:
    "Test your short-term working memory with the standardized Digit Span test. Memorize increasingly long numerical sequences, master phone-number chunking techniques, and compare your score to global psychological benchmarks.",
  keywords: [
    "number memory test",
    "digit span test",
    "working memory test",
    "short term memory test",
    "memory capacity test",
    "chunking memory",
    "phonological loop test",
    "miller magical number 7",
    "digit span working memory",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/number-memory-test",
  },
  openGraph: {
    title: "Number Memory Test – How Many Digits Can Your Brain Hold?",
    description: "Benchmark your digit span capacity against global neuro-psychological standards. Train phonological loop recall with chunking strategies.",
    url: "https://www.cpsspeedtest.com/number-memory-test",
    type: "website",
  },
};

const numberMemoryHowToSteps = [
  {
    name: "Observe the displayed number sequence",
    text: "At the start of each level, a randomized number appears on screen for a timed duration proportional to its length.",
  },
  {
    name: "Encode the digits using phonological rehearsal or chunking",
    text: "Silently recite the digits or mentally group them into 2-digit or 3-digit clusters (e.g., viewing 9-4-1-8 as '94' and '18').",
  },
  {
    name: "Wait for the input console to unlock",
    text: "Once the countdown timer expires, the number vanishes and an interactive numeric keypad or input field appears.",
  },
  {
    name: "Type the exact sequence in identical order",
    text: "Enter the digits sequentially using your physical keyboard or the on-screen keypad, then submit your answer.",
  },
  {
    name: "Advance to the next digit length",
    text: "A correct response advances you to the next tier, adding one additional digit to the sequence and increasing cognitive demand.",
  },
  {
    name: "Review your digit span score and global percentile",
    text: "If you submit an incorrect sequence, the test concludes. Review your highest digit milestone and compare it with clinical WAIS norms.",
  },
];

const numberMemoryFaqs = [
  {
    question: "What does the Number Memory Test measure neurologically?",
    answer:
      "The Number Memory Test measures the capacity of your short-term phonological working memory—specifically your forward 'digit span'. This is a standardized psychometric benchmark utilized in clinical neuro-assessments, including the Wechsler Adult Intelligence Scale (WAIS) and Wechsler Memory Scale (WMS). It tests how many discrete items your prefrontal cortex can hold actively without decay.",
  },
  {
    question: "What is an average human score on the digit span test?",
    answer:
      "The average healthy human adult digit span is 7 digits (with a standard deviation of 5 to 9 digits). This directly validates cognitive psychologist George A. Miller's landmark 1956 research, 'The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information'.",
  },
  {
    question: "What is chunking and how does it help recall longer numbers?",
    answer:
      "Chunking is a cognitive compression mechanism where individual digits are grouped into meaningful multi-digit clusters (such as pairing 8-4-2-1 into '84' and '21'). Because the prefrontal cortex evaluates each consolidated chunk as a single informational slot, chunking allows trained individuals to store 12 to 16+ digits within standard 7-slot working memory limits.",
  },
  {
    question: "How do memory athletes memorize 50+ digits in competitions?",
    answer:
      "Memory grandmasters rely on the Mnemonic Major System or PAO (Person-Action-Object) method. They convert 2-digit pairs (00 to 99) into predetermined phonetic consonants, transform them into vivid mental characters performing actions on objects, and mentally place these scenes along an imaginary physical journey known as a 'Memory Palace' (Method of Loci).",
  },
  {
    question: "Does forward digit span correlate with general intelligence (IQ)?",
    answer:
      "Yes. Working memory capacity shares a strong statistical correlation (r = 0.5 to 0.7) with fluid intelligence (Gf). The ability to hold and mentally manipulate multiple informational items concurrently is foundational to reading comprehension, mathematical problem solving, and complex logical reasoning.",
  },
  {
    question: "What is the difference between forward and backward digit span?",
    answer:
      "Forward digit span tests passive phonological storage (repeating digits in presented order). Backward digit span requires you to reverse the sequence in your mind before answering, heavily engaging central executive processing and mental manipulation in the dorsolateral prefrontal cortex.",
  },
  {
    question: "Can daily digit span training prevent age-related cognitive decline?",
    answer:
      "Engaging in regular working memory exercises stimulates neuroplasticity in frontoparietal networks. While natural working memory peaks in early adulthood (ages 20–25) and gradually declines with age, targeted mnemonic practice maintains high retrieval agility and functional working memory reserve into older adulthood.",
  },
];

export default function NumberMemoryTestPage() {
  return (
    <>
      <GameSEO
        name="Number Memory Test – Digit Span Benchmark"
        description="Test your working memory with the classic Digit Span test. Memorize increasingly long numerical sequences, learn phone-number chunking strategies, and compare your score to global benchmarks."
        url="https://www.cpsspeedtest.com/number-memory-test"
        faqs={numberMemoryFaqs}
        howToSteps={numberMemoryHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Evaluate forward digit span working memory, practice phonological chunking techniques, strengthen prefrontal cortex focus, and benchmark cognitive retention against clinical WAIS norms."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Hash className="w-3.5 h-3.5" />
            <span>Standardized Digit Span Cognitive Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Number Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Memorize increasingly long sequences of numbers. Test your phonological loop capacity, practice chunking, and benchmark your score against global working memory data.
          </p>
        </header>

        {/* Interactive Game Component */}
        <NumberMemoryTest />

        {/* Section 1: What is the Number Memory Test? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Number Memory Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Number Memory Test</strong> is a standardized implementation of the clinical <strong>Digit Span Task</strong>, originally engineered by psychologists to assess the storage capacity of human working memory. By presenting numbers of increasing length (starting from 1 digit and scaling upward), it measures how many discrete numerical items your phonological loop can maintain and accurately recall without cognitive decay.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Psychological Law</span>
                <span className="text-lg font-black text-primary">Miller&apos;s Law (7 ± 2)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">5 to 9 discrete memory slots</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Human Span</span>
                <span className="text-lg font-black text-amber-500">7 Digits</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Healthy adult baseline</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Chunked Champion Span</span>
                <span className="text-lg font-black text-emerald-500">12 – 16+ Digits</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Using PAO / Major mnemonic systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Take the Digit Span Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {numberMemoryHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Train Number Memory? (Real-World Value) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Working Memory Capacity Matters: Real-World Gains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Cpu className="w-4 h-4" />
                  Enhanced Mental Math &amp; Calculation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Performing mental arithmetic requires holding intermediate figures in mind while executing subsequent operations. Expanding your digit span prevents mental overflow and reduces calculation errors in financial planning, engineering, and coding.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  Fluid Intelligence &amp; Multi-Tasking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Working memory is the cognitive scratchpad that fuels fluid intelligence. A larger functional digit span enables you to track complex multi-variable problems, synthesize research papers, and follow convoluted legal contracts with ease.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Activity className="w-4 h-4" />
                  Protection Against Cognitive Interference
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Individuals with trained working memory demonstrate superior attentional filtering. They resist distractions in noisy open-office environments and maintain deep focus when writing, studying, or debugging code.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Trophy className="w-4 h-4" />
                  Everyday Recall Fluency
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Practicing chunking makes it second nature to remember two-factor authentication SMS codes, phone numbers, passport credentials, credit card CVVs, and license plates without frantic double-checking.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Clinical Benchmarks & Age Norms */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" />
            Digit Span Working Memory Norms by Age Group
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Age Bracket</th>
                  <th className="p-3">Average Forward Span</th>
                  <th className="p-3">Average Backward Span</th>
                  <th className="p-3">Cognitive Peak Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Ages 7 – 12</td>
                  <td className="p-3">5.2 – 5.8 Digits</td>
                  <td className="p-3">3.8 – 4.4 Digits</td>
                  <td className="p-3">Developmental maturation</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Ages 16 – 29</td>
                  <td className="p-3 text-emerald-400 font-semibold">7.1 – 7.8 Digits</td>
                  <td className="p-3 text-emerald-400 font-semibold">5.4 – 6.1 Digits</td>
                  <td className="p-3 text-emerald-400 font-bold">Peak Biological Capacity</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Ages 30 – 49</td>
                  <td className="p-3">6.8 – 7.4 Digits</td>
                  <td className="p-3">5.1 – 5.6 Digits</td>
                  <td className="p-3">Stable cognitive plateau</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Ages 50 – 69</td>
                  <td className="p-3">6.2 – 6.7 Digits</td>
                  <td className="p-3">4.5 – 5.0 Digits</td>
                  <td className="p-3">Mild natural latency decline</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Ages 70+</td>
                  <td className="p-3">5.5 – 6.1 Digits</td>
                  <td className="p-3">3.9 – 4.4 Digits</td>
                  <td className="p-3">Responds well to mnemonic training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Performance Tiers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Number Memory Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Developing Span</div>
              <div className="text-2xl font-black text-foreground">4 – 5 Digits</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Below average working memory span. Often caused by lack of sleep, stress, or treating digits as isolated entities without grouping.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Healthy Average</div>
              <div className="text-2xl font-black text-primary">6 – 8 Digits</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard human baseline (Miller&apos;s 7 ± 2). Typical capacity for remembering verification codes and standard phone numbers.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Memory</div>
              <div className="text-2xl font-black text-amber-500">9 – 11 Digits</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% working memory capacity. Demonstrates natural or learned chunking habits and strong phonological loop rehearsal.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Mnemonic Master</div>
              <div className="text-2xl font-black text-rose-500">12 – 16+ Digits</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite recall. Utilizes advanced chunking, rhythm grouping, or mnemonic phonetic systems to shatter biological limits.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Chunking Drills */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            How to Boost Your Digit Span Using Proven Chunking Methods
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Apply Phone Number Grouping (3-3-4)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Instead of reading 8-3-1-9-5-2-7 as seven individual numbers, read it as &quot;831 - 952 - 7&quot;. This compresses 7 cognitive items down to only 3 manageable chunks.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Subvocalize with Musical Rhythm</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Whisper or internally sing the numbers with a distinct cadence or melodic rhythm. Auditory rhythm engages both hemispheres and significantly increases retention time.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Associate Digits with Historical Dates</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If you spot &quot;1984&quot;, &quot;2020&quot;, or &quot;1776&quot; within a longer sequence, link them to the famous book or year. Semantic associations consume almost zero working memory.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Avoid Visual Over-Fixation</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Don&apos;t just stare at the digits passively. Immediately convert the visual symbols into auditory inner speech to activate the brain&apos;s phonological store.
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
            {numberMemoryFaqs.map((faq, index) => (
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
              href="/verbal-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Verbal Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
