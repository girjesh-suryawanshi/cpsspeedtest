import { GameSEO } from "@/components/game-seo";
import { WordScramble } from "@/components/word-scramble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Shuffle, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Word Scramble – 60-Second Anagram Sprint & Vocabulary Agility | CpsSpeedTest',
  description: 'Test your anagram decoding speed on our 60-second Word Scramble game. Unscramble jumbled letters, benchmark lexical processing speed, and expand vocabulary under time pressure.',
  keywords: ['word scramble', 'anagram solver game', 'scrambled words', 'jumbled letters', 'speed vocabulary test', '60 second word sprint', 'boggle style game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/word-scramble',
  },
  openGraph: {
    title: 'Word Scramble – 60-Second Anagram Sprint',
    description: 'How many scrambled words can you decode in 60 seconds? Benchmark your anagram recognition and spelling agility.',
    url: 'https://www.cpsspeedtest.com/word-scramble',
    type: 'website',
  },
};

const wordScrambleFaqs = [
  {
    question: "How does the 60-second Word Scramble game calculate score?",
    answer: "Each correctly unscrambled word submitted within the 60-second window awards 1 point, immediately presenting a new scrambled anagram. Your final score reflects total correctly unscrambled words per minute, tracking lexical retrieval speed and typing accuracy."
  },
  {
    question: "What cognitive strategies help unscramble anagrams faster?",
    answer: "The most effective technique is separating vowels from consonants. Look for common consonant digraphs (such as CH, SH, TH, WH, PH) and frequent morphological affixes (prefixes like UN-, RE-, DIS- and suffixes like -ED, -ER, -ING, -LY). Rearranging letters into a circular mental clock rather than a straight line also prevents linear fixation."
  },
  {
    question: "What is an above-average score on a 60-second Word Scramble?",
    answer: "Most players unscramble between 8 and 14 words in 60 seconds. Competitive word puzzle players and Scrabble enthusiasts routinely achieve 18 to 25+ words per minute."
  },
  {
    question: "Can Word Scramble training improve reading speed and dyslexia symptoms?",
    answer: "Yes. Anagram training enhances orthographic mapping and rapid phonological decoding in the left occipito-temporal visual word form area (VWFA). Repeated practice trains the brain to recognize word components as cohesive chunks rather than struggling through letter-by-letter sound synthesis."
  },
  {
    question: "What happens if I type an incorrect guess in Word Scramble?",
    answer: "If you submit an incorrect word, the input field clears so you can immediately re-attempt the anagram or try an alternative permutation without waiting for a penalty timer."
  }
];

export default function WordScramblePage() {
  return (
    <>
      <GameSEO 
        name="Word Scramble"
        description="Unscramble as many words as you can in 60 seconds! Test your anagram decoding skills, vocabulary, and mental agility."
        url="https://www.cpsspeedtest.com/word-scramble"
        faqs={wordScrambleFaqs}
        category="WordGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Shuffle className="w-3.5 h-3.5" />
            <span>60-Second Anagram Decoding &amp; Lexical Sprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Scramble
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Unscramble jumbled letters into valid English words as fast as you can. Benchmark your anagram pattern recognition and vocabulary retrieval under a 60-second countdown.
          </p>
        </header>

        {/* Word Scramble Interactive Game */}
        <div className="py-2">
          <WordScramble />
        </div>

        {/* ── Section 1: Psycholinguistics of Anagram Resolution (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Cognitive Neuroscience of Anagram Decoding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In psycholinguistics, <strong>anagram solving</strong> is a rigorous test of visual-orthographic working memory and rapid lexical access. When the brain views a jumble of letters like <code>T E R P N A</code>, reading networks attempt to synthesize a familiar word form while executive control networks must inhibit false candidate matches.
            </p>
            <p>
              Top performers do not perform brute-force mathematical permutation (which for a 6-letter word requires evaluating $6! = 720$ combinations). Instead, the brain employs <strong>phonotactic constraints</strong>: it automatically filters out illegal English consonant clusters (such as <em>P-N</em> or <em>T-R-P</em>) and targets valid syllable kernels (like <em>PA-RENT</em> or <em>PAT-TER-N</em>), resolving the jumble in under two seconds.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Words Per Minute ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Word Scramble Score Tiers (60-Second Trial)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How fast can your brain reorder jumbled letters into words? Compare your total correctly unscrambled words in 60 seconds:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 7 Words</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Developing Lexicon</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Requires 8+ seconds per anagram. The solver gets stuck attempting linear reading instead of isolating root syllables.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">8 – 14 Words</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Fluency</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solves common 4-to-5 letter anagrams in 4–5 seconds. Good vowel identification and steady typing speed.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">15 – 22 Words</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Scrambler</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-3s anagram resolution. Rapid detection of prefixes, suffixes, and consonant blends. High keyboard entry cadence.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">23+ Words</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Tournament Scrabble Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% anagram master. Instantaneous holistic word-shape recognition with sub-2 second keyboard submissions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Anagram Solving Tactics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Three Rapid Anagram Shortcuts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Separate Vowels &amp; Consonants:</strong> Group vowels (A, E, I, O, U) together. Since most English syllables alternate between vowels and consonants, pairing one vowel with two consonants immediately suggests valid words.
                </li>
                <li>
                  <strong className="text-foreground">Isolate Common Affixes:</strong> If you see <code>I-N-G</code>, <code>E-D</code>, or <code>R-E</code>, pull those letters to the perimeter and solve the remaining root letters.
                </li>
                <li>
                  <strong className="text-foreground">Circle Visualization:</strong> If you stare at a flat linear string of letters, your brain gets stuck reading it as a nonsense word. Mentally arrange the letters in a circle to eliminate positional bias.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Word &amp; Typing Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pair anagram decoding with typing speed and vocabulary games:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/word-master" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Master</span>
                  <span className="text-primary font-mono">5-Letter Deduction →</span>
                </Link>
                <Link href="/type-racer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Speed Typer</span>
                  <span className="text-primary font-mono">30-Second WPM Sprint →</span>
                </Link>
                <Link href="/hangman" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Hangman</span>
                  <span className="text-primary font-mono">Letter Frequency Deduction →</span>
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
              Frequently Asked Questions About Word Scramble
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {wordScrambleFaqs.map((faq, index) => (
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
