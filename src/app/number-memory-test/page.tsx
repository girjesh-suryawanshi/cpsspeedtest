import { GameSEO } from "@/components/game-seo";
import { NumberMemoryTest } from "@/components/number-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Hash, Brain, Activity, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Number Memory Test – Digit Span Working Memory Benchmark | CpsSpeedTest',
  description: 'Test your working memory with the classic Digit Span test. Memorize increasingly long numerical sequences, learn phone-number chunking strategies, and compare your score to global benchmarks.',
  keywords: ['number memory test', 'digit span test', 'working memory test', 'short term memory test', 'memory capacity test', 'chunking memory'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/number-memory-test',
  },
};

const numberMemoryFaqs = [
  {
    question: "What does the Number Memory Test measure?",
    answer: "It measures the capacity of your short-term phonological working memory—specifically your 'digit span'. This is a standardized psychometric benchmark used in clinical cognitive assessments, including the Wechsler Adult Intelligence Scale (WAIS)."
  },
  {
    question: "What is an average human score on the digit span test?",
    answer: "The average human digit span is 7 digits (typically ranging between 5 and 9), directly reflecting George Miller's famous 1956 psychological benchmark 'The Magical Number Seven, Plus or Minus Two'."
  },
  {
    question: "What is chunking and how does it help recall longer numbers?",
    answer: "Chunking is a cognitive process where individual digits are grouped into meaningful multi-digit clusters (e.g., remembering 8-4-2-1 as '84' and '21'). Because the brain treats each chunk as a single informational unit, you can recall 12+ digits within the same 7-slot working memory limit."
  },
  {
    question: "How do competitive memory athletes memorize 50+ digits?",
    answer: "Memory champions use the Mnemonic Major System or PAO (Person-Action-Object) method, converting numbers into phonetic consonants, visualizing words, and storing them in an imaginary 'Memory Palace' (Method of Loci)."
  }
];

export default function NumberMemoryTestPage() {
  return (
    <>
      <GameSEO 
        name="Number Memory Test"
        description="Test your working memory with the classic Digit Span test. Memorize increasingly long numerical sequences, learn phone-number chunking strategies, and compare your score to global benchmarks."
        url="https://www.cpsspeedtest.com/number-memory-test"
        faqs={numberMemoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Hash className="w-3.5 h-3.5" />
            <span>WAIS Digit Span Cognitive Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Number Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Memorize the number displayed on the screen, then type it back accurately. The sequence adds one additional digit after every successful round.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <NumberMemoryTest />

        {/* ── Section 1: The Digit Span Task & Miller's Law (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              What is the Digit Span Task & Why Does Memory Cap at 7 Digits?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Number Memory Test</strong> (scientifically known as the <em>Digit Span Task</em>) is one of the most widely administered cognitive instruments in neuroscience and psychology. First introduced in the 19th century by English psychologist John Jacobs, it is a primary component of the <strong>Wechsler Adult Intelligence Scale (WAIS)</strong> working memory index.
            </p>
            <p>
              In 1956, Harvard cognitive psychologist <strong>George A. Miller</strong> published his landmark paper, <em>&quot;The Magical Number Seven, Plus or Minus Two.&quot;</em> Miller demonstrated that human immediate conscious memory is fundamentally constrained to roughly <strong>7 ± 2 discrete informational units</strong> (chunks).
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-xs sm:text-sm space-y-2">
              <p className="font-bold text-primary flex items-center gap-1.5">
                🗣️ The Phonological Loop:
              </p>
              <p>
                When you see numbers flashing on the screen, your brain translates the visual symbols into subvocal speech sounds in your <strong>phonological loop</strong>—an internal auditory tape loop lasting roughly 2 seconds. If a number sequence is too long to rehearse aloud in your head within 2 seconds, earlier digits decay from memory before you can type them.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Digit Span Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Digit Span Score Tiers & Population Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wondering how your maximum digit recall compares to the general population? Here is the clinical distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">4 – 6 Digits</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Below Baseline</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Typical for young children, distracted individuals, or adults suffering from severe fatigue or mental fog.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👤</div>
                <div className="font-bold text-foreground">7 – 9 Digits</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Standard adult baseline (Miller&apos;s 7 ± 2). Represents the natural uncompressed limit of working memory.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">10 – 12 Digits</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Superior Capacity</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 10% of adults. Indicates intuitive chunking ability or high mental concentration.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏆</div>
                <div className="font-bold text-foreground">13+ Digits</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Mnemonic Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Exceptional memory athlete tier. Usually achieved by applying phonetic peg systems or rhythmic sub-vocalization.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: The Chunking Secret (How to Score 12+ Digits) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              The Chunking Secret: How Phone Numbers Hack Your Working Memory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Ever wonder why telephone numbers across North America and Europe are formatted as <code className="text-primary font-mono bg-secondary px-1.5 py-0.5 rounded">XXX-XXX-XXXX</code> rather than a continuous 10-digit block like <code className="font-mono bg-secondary px-1.5 py-0.5 rounded">5550192841</code>?
            </p>
            <p>
              The telecommunications industry designed phone numbers specifically around <strong>Miller&apos;s chunking theory</strong>. By breaking 10 individual numbers into three chunks (3-3-4), your brain only has to store <strong>3 items</strong> in working memory instead of 10.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">❌ Unchunked (Fails at 8 digits):</h4>
                <p className="text-xs font-mono text-muted-foreground bg-secondary/30 p-2 rounded">
                  7 • 2 • 9 • 4 • 1 • 8 • 3 • 5
                </p>
                <p className="text-xs text-muted-foreground">Brain tries to hold 8 discrete slots. Rehearsal loop overflows and drops the middle numbers.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">✅ Chunked in Pairs (Effortlessly recalled):</h4>
                <p className="text-xs font-mono text-primary bg-primary/10 p-2 rounded">
                  &quot;72&quot; • &quot;94&quot; • &quot;18&quot; • &quot;35&quot;
                </p>
                <p className="text-xs text-muted-foreground">Brain stores only 4 compound units (&quot;seventy-two, ninety-four, eighteen, thirty-five&quot;), well below the 7-item cap!</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Want to test other dimensions of your cognitive capacity? Challenge your sequential recall on <Link href="/chimp-test" className="text-primary hover:underline font-semibold">The Chimp Test</Link> or test your card concentration on <Link href="/memory-game" className="text-primary hover:underline font-semibold">Memory Game</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 4: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {numberMemoryFaqs.map((faq, index) => (
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
