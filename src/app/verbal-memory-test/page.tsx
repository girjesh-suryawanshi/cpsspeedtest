import { GameSEO } from "@/components/game-seo";
import { VerbalMemoryTest } from "@/components/verbal-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { BookOpen, Brain, Activity, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Verbal Memory Test – Continuous Word Recognition Benchmark | CpsSpeedTest',
  description: 'Test your vocabulary recall and verbal working memory. Determine whether each word is NEW or SEEN in this continuous recognition memory challenge.',
  keywords: ['verbal memory test', 'word memory test', 'continuous recognition task', 'lexical recall', 'short term verbal memory', 'memory recognition test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/verbal-memory-test',
  },
};

const verbalMemoryFaqs = [
  {
    question: "How does the Verbal Memory Test work?",
    answer: "You are presented with a continuous stream of words, one at a time. For each word, you must decide: is this the first time the word has appeared in the session (click 'NEW'), or have you encountered it previously (click 'SEEN')? You have 3 strikes before the test concludes."
  },
  {
    question: "What is an average human score on the Verbal Memory Test?",
    answer: "The average adult score is approximately 30 to 50 words. Scoring above 60 indicates exceptional lexical recognition, while scores above 90 place you in the top 1% of verbal memory capacity."
  },
  {
    question: "Why does the test get progressively more difficult?",
    answer: "As your mental list of seen words grows from 10 to 50+, your brain experiences 'Proactive Interference'—a cognitive phenomenon where previously stored words blur together with newly presented terms, making familiar words feel brand new and vice versa."
  },
  {
    question: "What strategy helps achieve higher verbal memory scores?",
    answer: "Form a vivid mental image or story connecting words as they appear, or associate new words with physical locations or distinct emotions. Semantic encoding dramatically outperforms passive rote reading."
  }
];

export default function VerbalMemoryTestPage() {
  return (
    <>
      <GameSEO 
        name="Verbal Memory Test"
        description="Test your vocabulary recall and verbal working memory. Determine whether each word is NEW or SEEN in this continuous recognition memory challenge."
        url="https://www.cpsspeedtest.com/verbal-memory-test"
        faqs={verbalMemoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Continuous Lexical Recognition Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Verbal Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            You will be shown a continuous sequence of words. For each word, decide if you have already encountered it (SEEN) or if it is appearing for the first time (NEW).
          </p>
        </header>

        {/* Core Interactive Tool */}
        <VerbalMemoryTest />

        {/* ── Section 1: The Continuous Recognition Memory Paradigm (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              What is the Verbal Memory Test & How Does Lexical Recognition Work?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Verbal Memory Test</strong> is an adaptation of the <em>Continuous Recognition Paradigm (CRP)</em>, first formulated by cognitive psychologist Robert Shepard in the 1960s to study how the human mind encodes, indexes, and recognizes linguistic information over time.
            </p>
            <p>
              Unlike free-recall tests (where you must recite a list of items from memory), this test evaluates <strong>item recognition memory</strong>. When a word appears, your brain executes a two-stage cognitive query:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Familiarity Assessment:</strong> A rapid, subconscious signal from the perirhinal cortex estimating how &quot;familiar&quot; the word feels within milliseconds.
              </li>
              <li>
                <strong className="text-foreground">Recollection & Verification:</strong> A slower, conscious search governed by the hippocampus to retrieve the specific context in which you saw the word earlier in this session.
              </li>
            </ol>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-xs sm:text-sm space-y-1.5">
              <p className="font-bold text-primary">🧠 Proactive Interference:</p>
              <p>
                The primary enemy of a high score is <strong>proactive interference</strong>. Once you have seen 40+ words, your mental working buffer begins to saturate. Words with similar semantic meanings (e.g., <em>boat</em> vs <em>ship</em>) or similar spellings begin to trigger false familiarity signals, leading to costly mistakes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Population Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Verbal Memory Score Tiers & Population Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              In this test, every correct decision awards 1 point until you exhaust your 3 lives. Here is how scores distribute across the general population:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">10 – 25 Words</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual / Beginner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Common when rushing through cards without active semantic visualization or while mentally fatigued.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👤</div>
                <div className="font-bold text-foreground">26 – 50 Words</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult</div>
                <p className="text-xs text-muted-foreground leading-relaxed">The global median score. Reflects healthy working memory and standard lexical recognition capacity.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">51 – 85 Words</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Exceptional Vocabulary</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 10% of participants. Achieved by actively categorizing words or creating episodic mental imagery.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏆</div>
                <div className="font-bold text-foreground">86+ Words</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master Lexical Recall</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% memory athlete level. Demands disciplined mnemonic pegging and high resistance to interference.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Semantic Encoding Strategies to Score 70+ ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              How to Score Higher: Dual-Coding & Semantic Visualization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Research into Allan Paivio&apos;s <strong>Dual-Coding Theory</strong> proves that visual and verbal information are processed along distinct channels in the human mind. If you only read words as text, you only activate the verbal channel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">1. Instant Mental Imagery</h4>
                <p className="text-xs text-muted-foreground">
                  When the word <em>&quot;BICYCLE&quot;</em> appears, do not just read the letters. Instantly picture a bright red bicycle in your mind. The visual image creates an independent memory trace that is twice as durable.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">2. Emotional Tagging</h4>
                <p className="text-xs text-muted-foreground">
                  The amygdala prioritizes memories with an emotional charge. For abstract words like <em>&quot;JUSTICE&quot;</em> or <em>&quot;DECISION&quot;</em>, link them to a personal feeling or strong opinion for instant later recognition.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Interested in training your numerical memory instead? Try our <Link href="/number-memory-test" className="text-primary hover:underline font-semibold">Number Memory Test</Link> or test your motor reflexes on the <Link href="/cps-test" className="text-primary hover:underline font-semibold">CPS Speed Test</Link>.
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
              {verbalMemoryFaqs.map((faq, index) => (
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
