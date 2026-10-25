import { GameSEO } from "@/components/game-seo";
import { WordMemoryTest } from "@/components/word-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { BookOpen, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Word Memory Test – Verbal Free Recall & Short-Term Memory Span | CpsSpeedTest',
  description: 'Test your verbal short-term memory on our word recall test. Memorize lists of words, evaluate serial position effects, and measure your verbal retrieval capacity.',
  keywords: ['word memory test', 'verbal memory test', 'free recall test', 'serial position effect', 'short term verbal memory', 'memory recall game', 'verbal span test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/word-memory-test',
  },
  openGraph: {
    title: 'Word Memory Test – Verbal Free Recall & Short-Term Memory Span',
    description: 'Benchmark your verbal working memory and free recall retrieval capacity across escalating lists of randomized words.',
    url: 'https://www.cpsspeedtest.com/word-memory-test',
    type: 'website',
  },
};

const wordMemoryFaqs = [
  {
    question: "What is the psychological basis of the Word Memory Test?",
    answer: "The Word Memory Test is modeled on classical verbal free-recall paradigms first formulated by Hermann Ebbinghaus and formalized by Bennet Murdock in 1962. It tests your brain's capacity to encode lexical items into working memory and retrieve them without sequential cue constraints."
  },
  {
    question: "What is the Serial Position Effect (Primacy and Recency)?",
    answer: "When presented with a list of words, humans recall items at the beginning of the list (Primacy Effect) because they received more attention and rehearsal, transferring them into intermediate memory. Items at the very end of the list are also recalled easily (Recency Effect) because they still reside in the active phonological loop. Words in the middle suffer from retroactive and proactive interference and are forgotten most frequently."
  },
  {
    question: "What is an average score on a word recall test?",
    answer: "When presented with 12 to 15 unrelated words, typical healthy adults accurately recall 6 to 8 words on immediate free recall. Scores of 9 to 12 words represent superior verbal memory, while recalling 13+ words demonstrates advanced mnemonic encoding strategies."
  },
  {
    question: "How does semantic clustering boost word recall scores?",
    answer: "Semantic clustering involves mentally sorting random words into categorical buckets—such as nature, human occupations, physical tools, or emotions. By organizing unlinked words into thematic networks, you create retrieval cues that trigger multiple related words from a single mental category."
  },
  {
    question: "What is the difference between Word Memory and Verbal Memory recognition?",
    answer: "Word Memory relies on free recall (retrieving words entirely from memory without visual prompts), which requires high executive retrieval effort. Verbal Memory (recognition) shows words one by one and asks whether you have seen them previously (SEEN vs. NEW), which tests familiarity thresholds rather than active reconstruction."
  }
];

export default function WordMemoryTestPage() {
  return (
    <>
      <GameSEO 
        name="Word Memory Test"
        description="Test your verbal short-term recall. Memorize a list of words and retrieve as many as you can to benchmark your verbal memory span."
        url="https://www.cpsspeedtest.com/word-memory-test"
        faqs={wordMemoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Verbal Free Recall &amp; Phonological Loop Span</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Memorize the displayed list of words during the inspection window. Once the timer elapses, type as many words as you can recall into the retrieval box.
          </p>
        </header>

        {/* Word Memory Test Interactive Component */}
        <div className="py-2">
          <WordMemoryTest />
        </div>

        {/* ── Section 1: The Neuroscience of Free Recall (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              The Science of Free Recall: How Words Are Encoded &amp; Retrieved
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Word Memory Test</strong> benchmarks the <em>phonological loop</em> and semantic memory networks of your brain. When a list of words flashes on the screen, your brain must perform three distinct computational operations in rapid succession:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Phonological Encoding:</strong> Translating printed text characters into internal subvocal acoustic sounds (mental speech).
              </li>
              <li>
                <strong className="text-foreground">Semantic Association:</strong> Linking word meanings to preexisting knowledge nodes in the temporal lobes to create memory anchors.
              </li>
              <li>
                <strong className="text-foreground">Executive Retrieval:</strong> Searching your internal working memory buffer and suppressing false intrusions (words that feel familiar but were not on the list).
              </li>
            </ol>
            <p className="text-xs">
              Unlike multiple-choice recognition tests where answers are presented directly to your eyes, free recall requires generative cognitive retrieval—the exact same mental mechanism required for public speaking, academic exams, and technical interviews.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Recall Percentiles ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Word Recall Score Tiers &amp; Verbal Span Percentiles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on empirical free-recall testing on 12-to-15 word randomized lists:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">1 – 5 Words</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Low Free Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Recalls only the first or last two items. High susceptibility to retroactive interference from words in the middle of the list.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">6 – 8 Words</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Baseline</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The standard human norm. Captures primacy and recency anchors with partial retention of distinct or emotionally salient middle terms.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">9 – 12 Words</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Superior Verbal Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 10% performance. Actively clusters words into semantic categories or constructs vivid narrative sentence chains.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">13+ Words</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Mnemonic Master</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% verbal memory. Uses the Method of Loci (Memory Palace) or hyper-vivid dual-coding imagery to achieve near-total recall.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Mnemonic Strategies & Retrieval Cues ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Narrative Linking &amp; The Story Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Memory grandmasters utilize the <strong>Story Method</strong> to chain unrelated words into memorable episodic narratives:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Narrative Chaining:</strong> If the words are &quot;Eagle, Clock, River, Hammer&quot;, picture an <em>Eagle</em> checking a giant pocket <em>Clock</em>, dropping it into a <em>River</em>, and retrieving it with a <em>Hammer</em>.
                </li>
                <li>
                  <strong className="text-foreground">Vivid Sensations:</strong> Exaggerate colors, sounds, and absurdity. The human amygdala and hippocampus prioritize bizarre or emotionally intense sensory concepts over bland dictionary definitions.
                </li>
                <li>
                  <strong className="text-foreground">Type Recency Words First:</strong> During the retrieval phase, immediately type the last 3 words you saw while they are still ringing in your phonological loop, then retrieve the narrative story for the rest.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Cognitive Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Test your memory and lexical processing speed across our verbal and cognitive suite:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/verbal-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Verbal Memory Test</span>
                  <span className="text-primary font-mono">Word Recognition (Seen/New) →</span>
                </Link>
                <Link href="/number-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Number Memory Test</span>
                  <span className="text-primary font-mono">Digit Span Capacity →</span>
                </Link>
                <Link href="/typing-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Typing Speed Test</span>
                  <span className="text-primary font-mono">Keystroke Transcription →</span>
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
              Frequently Asked Questions About Word Recall
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {wordMemoryFaqs.map((faq, index) => (
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
