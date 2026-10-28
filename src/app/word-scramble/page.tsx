import { GameSEO } from "@/components/game-seo";
import { WordScramble } from "@/components/word-scramble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Shuffle, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Word Scramble – 60-Second Anagram Sprint & Vocabulary Agility | CpsSpeedTest',
  description: 'Test your anagram decoding speed on our 60-second Word Scramble game. Unscramble jumbled letters, benchmark lexical processing speed, and expand vocabulary under time pressure.',
  keywords: ['word scramble', 'anagram solver game', 'scrambled words', 'jumbled letters', 'speed vocabulary test', '60 second word sprint', 'boggle style game', 'rapid anagram test'],
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

const wordScrambleHowToSteps = [
  {
    name: "Start the 60-Second Countdown",
    text: "Click Start or press Enter to trigger the timer. The first scrambled anagram appears immediately in high-contrast lettering."
  },
  {
    name: "Isolate Vowels from Consonants Mentally",
    text: "Quickly scan for vowel anchors (A, E, I, O, U) to establish where syllable nuclei will form within the scrambled letter cluster."
  },
  {
    name: "Identify Common Consonant Digraphs",
    text: "Search for high-frequency letter pairs that stick together naturally, such as CH, SH, TH, WH, PH, CL, ST, or TR."
  },
  {
    name: "Spot Morphological Prefixes and Suffixes",
    text: "Extract common grammatical affixes like -ED, -ING, -ER, -LY, or UN- from the scrambled set to drastically reduce remaining root letters."
  },
  {
    name: "Type and Submit with Enter Instantly",
    text: "Type your unscrambled word directly into the field and press Enter. The validation engine awards a point and loads the next anagram."
  },
  {
    name: "Maximize Solved Words per Minute",
    text: "Maintain rapid keyboard momentum until the 60 seconds elapse, then review your total solved words, accuracy rate, and average latency."
  }
];

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
  },
  {
    question: "Are proper nouns and abbreviations allowed in Word Scramble?",
    answer: "No. The dictionary corpus strictly adheres to standard English common nouns, verbs, adjectives, and adverbs. Brand names, proper geographical nouns, slang acronyms, and hyphenated terms are excluded."
  },
  {
    question: "Why does the brain experience 'anagram blindness' on simple words?",
    answer: "Anagram blindness occurs when the scrambled letter arrangement accidentally spells out a recognizable non-target pattern or pseudo-syllable. The brain's pattern-recognition system latches onto this misleading schema, suppressing the true semantic target until the letters are mentally scrambled."
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
        howToSteps={wordScrambleHowToSteps}
        category="WordGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Shuffle className="w-3.5 h-3.5" />
            <span>Anagram Decoding &amp; Lexical Processing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Scramble
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The 60-second rapid-fire anagram challenge. Unscramble jumbled letters into valid English words under intense time pressure to benchmark lexical retrieval fluency.
          </p>
        </header>

        {/* Interactive Word Scramble Component */}
        <div className="py-2">
          <WordScramble />
        </div>

        {/* ── Section 1: Anagram Processing Neuroscience (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Neuroscience of Rapid Anagram Decoding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Word Scramble is a high-speed anagram decoding sprint that evaluates orthographic processing velocity, working memory manipulation, and lexical retrieval. Solving an anagram requires the left occipito-temporal visual word form area (VWFA) to decompose a jumbled letter string into phonemes, discard misleading combinations, and match valid orthographic candidates against long-term lexical memory in under 3 seconds per word.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">60 Seconds</div>
                <div className="text-xs text-muted-foreground">Standardized Test Sprint</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">8 – 14 WPM</div>
                <div className="text-xs text-muted-foreground">Adult Average Baseline</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">N! Combinations</div>
                <div className="text-xs text-muted-foreground">Mathematical Search Space</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">&lt; 3.0s</div>
                <div className="text-xs text-muted-foreground">Target Word Solve Time</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              For a 6-letter word, there are 6! = 720 theoretical letter permutations. The human brain does not brute-force these 720 sequences; rather, it applies phonotactic heuristics (grouping vowels and common consonant blends) to prune 98% of impossible English sequences instantaneously.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Excel at Word Scramble in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wordScrambleHowToSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{step.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Cognitive & Real-World Benefits ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Orthographic Mapping &amp; Reading Fluency
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Unscrambling letters exercises the cognitive neural bridge between phonological sound units and visual orthographic word shapes, directly boosting reading comprehension speed and spelling precision.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Working Memory &amp; Mental Rotation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mentally transposing letter positions without physical manipulation demands intense executive control from the dorsolateral prefrontal cortex, expanding active working memory workspace.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Cognitive Flexibility &amp; Unblocking Bias
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              When an anagram presents an intuitive false word, players must suppress the incorrect schema and deliberately rebuild the letter order. This trains inhibitory control and intellectual flexibility.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Competitive Word Game Mastery (Scrabble, Boggle)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Scrabble and tournament Boggle championships are won by the speed at which a player recognizes high-scoring anagrams from random tile racks. Daily practice automates this visual recognition.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Word Length vs Permutations ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Anagram Length Complexity &amp; Permutation Space
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Word Length</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Permutations (N!)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Key Solving Heuristic</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Average Human Solve Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">4 Letters</td>
                    <td className="py-2.5 px-3 font-mono">4! = 24</td>
                    <td className="py-2.5 px-3">Spot C-V-C-V or C-C-V-C standard patterns</td>
                    <td className="py-2.5 px-3">&lt; 1.2 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">5 Letters</td>
                    <td className="py-2.5 px-3 font-mono">5! = 120</td>
                    <td className="py-2.5 px-3">Isolate vowel pair and test initial consonant blends</td>
                    <td className="py-2.5 px-3">1.5 – 2.5 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">6 Letters</td>
                    <td className="py-2.5 px-3 font-mono">6! = 720</td>
                    <td className="py-2.5 px-3">Extract common suffixes (-ED, -ER, -LY, -ES)</td>
                    <td className="py-2.5 px-3">2.5 – 4.5 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">7 Letters</td>
                    <td className="py-2.5 px-3 font-mono">7! = 5,040</td>
                    <td className="py-2.5 px-3">Identify compound words or prefix + root structure</td>
                    <td className="py-2.5 px-3">5.0 – 9.0 seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Performance Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Word Scramble 60-Second Performance Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Benchmark your 60-second anagram score against global player distributions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">4 – 7 Words</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Experiences frequent anagram blindness. Fixates on the initial jumbled letter sequence and struggles to reposition vowels.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">8 – 14 Words</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Average</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid anagram recognition. Smoothly identifies common 4 and 5 letter words with occasional pauses on uncommon consonant clusters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">15 – 21 Words</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Scrabble Competitor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-3 second average decode speed. Instant affix decomposition and fluid, touch-typed keyboard submissions.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">22+ Words</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% globally. Instantaneous holistic word perception, zero perceptual fixation, and lightning-fast typing velocity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 6: Actionable Improvement Tips ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              4 Proven Tips to Speed Up Anagram Decoding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Visualize Letters Arranged in a Circle
                </div>
                <p className="text-xs leading-relaxed">
                  When letters are displayed in a straight horizontal line, the brain instinctively reads them left-to-right. Mentally placing them in a circle breaks this bias and reveals new combinations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Pull Out Consonant Pairs Immediately
                </div>
                <p className="text-xs leading-relaxed">
                  If the scrambled letters contain &lsquo;C&rsquo; and &lsquo;H&rsquo;, pair them as CH immediately. Look for SH, TH, ST, PL, and TR. Grouping consonants reduces a 6-letter puzzle to a 4-chunk problem.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Look for Suffix Endings (-ED, -ING, -ER)
                </div>
                <p className="text-xs leading-relaxed">
                  If an anagram contains E and D or I, N, and G, mentally detach them to the right. Unscrambling the remaining 3 or 4 letters takes less than one second.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Keep Your Fingers Hovering Over the Home Row
                </div>
                <p className="text-xs leading-relaxed">
                  Physical typing latency can consume 40% of your 60-second timer. Use touch-typing on the keyboard so you can submit your answer the moment your brain perceives the solution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 7: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
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

        {/* ── Section 8: Related Cognitive & Word Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Word &amp; Vocabulary Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your vocabulary agility, anagram solving, and letter frequency deduction:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/word-master" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Word Master</span>
                <span className="text-xs text-muted-foreground mt-1">5-letter information entropy deduction →</span>
              </Link>
              <Link href="/hangman" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Hangman</span>
                <span className="text-xs text-muted-foreground mt-1">Letter frequency analysis puzzle →</span>
              </Link>
              <Link href="/typing-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Typing Test</span>
                <span className="text-xs text-muted-foreground mt-1">Touch-typing speed &amp; accuracy →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
