import { GameSEO } from "@/components/game-seo";
import { WordMaster } from "@/components/games/word-master";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { BookOpen, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Master – 5-Letter Word Deduction & Information Entropy | CpsSpeedTest",
  description: "Play Word Master, the popular 5-letter word deduction game. Guess the secret word in 6 attempts using Shannon information entropy, optimal openers (CRANE, SLATE), and color-coded hints.",
  keywords: ["word master", "wordle alternative", "word game", "vocabulary game", "brain training", "5 letter word guess", "information entropy word game", "crane slate wordle"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/word-master',
  },
  openGraph: {
    title: "Word Master – 5-Letter Word Guessing & Strategy Game",
    description: "Deduce the secret 5-letter word in 6 attempts. Learn optimal opening words and letter elimination algorithms.",
    url: 'https://www.cpsspeedtest.com/word-master',
    type: 'website',
  },
};

const wordMasterHowToSteps = [
  {
    name: "Enter an Optimal High-Entropy Opener",
    text: "Type a mathematically optimized 5-letter starter word such as CRANE, SLATE, or SALET to maximize letter frequency coverage."
  },
  {
    name: "Interpret the Tri-Color Feedback System",
    text: "Green confirms the exact letter in the correct slot. Yellow reveals the letter is present elsewhere. Gray indicates the letter is completely absent."
  },
  {
    name: "Eliminate Unused Letters from Cognition",
    text: "Discard gray letters from mental consideration. Use the virtual on-screen keyboard to track remaining candidate consonants and vowels."
  },
  {
    name: "Formulate a Strategic Second Guess",
    text: "Test complementary high-frequency consonants (e.g., P, M, D, H) and secondary vowels (O, U, Y) to narrow down the target word candidate pool."
  },
  {
    name: "Analyze Orthographic & Phonotactic Rules",
    text: "Apply English phonics rules: look for common digraphs (CH, SH, TH, WH), blend endings (-CK, -NT, -ST), and double vowel clusters."
  },
  {
    name: "Deduce the Secret Word in Sub-6 Turns",
    text: "Synthesize all positional constraints to pinpoint the solitary remaining valid dictionary word and lock in your winning solve."
  }
];

const wordMasterFaqs = [
  {
    question: "What do the tile colors signify in Word Master?",
    answer: "Green indicates the letter is present in the secret word and positioned in the exact correct slot. Yellow indicates the letter exists in the secret word but belongs in a different position. Gray signifies the letter does not appear anywhere in the target word."
  },
  {
    question: "What are the mathematically optimal opening words in 5-letter word deduction?",
    answer: "According to Claude Shannon's information theory and computer simulations across the standard 2,315-word dictionary, words like CRANE, SLATE, SALET, TRACE, and SOARE provide the highest initial expected information entropy (roughly 5.87 bits). These openers maximize the elimination of impossible candidates on your very first guess."
  },
  {
    question: "How does the game handle duplicate letters in guesses?",
    answer: "If you guess a word with two identical letters (such as 'SPEED') but the secret word only contains one 'E', exactly one tile will illuminate green or yellow (prioritizing the exact match), while the secondary tile turns gray. This prevents false positive assumptions about duplicate frequency."
  },
  {
    question: "What is 'Hard Mode' in word deduction games?",
    answer: "In standard play, you can guess words containing completely new letters on turn 2 to eliminate candidates. In Hard Mode, any revealed hints (Green or Yellow letters) must be used in all subsequent guesses, limiting exploratory elimination."
  },
  {
    question: "How does playing Word Master benefit vocabulary and cognition?",
    answer: "Word Master exercises orthographic lexicon retrieval, phonotactic probability recognition (understanding common English letter pairings like CH, TH, SH, CK), and deductive constraint satisfaction, keeping verbal executive function sharp."
  },
  {
    question: "What should you do when stuck in a 'trap' like _IGHT or _OUND?",
    answer: "In standard mode, sacrifice one turn to play an exploratory word containing several potential onset consonants (e.g. playing 'BLIMP' or 'CLAMP' to test B, L, M, and P simultaneously), completely avoiding the trap of burning 4 consecutive guesses."
  },
  {
    question: "What dictionary corpus does Word Master use for valid words?",
    answer: "Word Master utilizes an official curated dictionary of approximately 2,315 common 5-letter target words, backed by an expanded 12,000+ word verification list to ensure any legitimate English guess is accepted as valid."
  }
];

export default function WordMasterPage() {
  return (
    <>
      <GameSEO 
        name="Word Master"
        description="Play Word Master, the popular 5-letter word guessing game. Test your vocabulary and deductive reasoning in 6 tries."
        url="https://www.cpsspeedtest.com/word-master"
        faqs={wordMasterFaqs}
        howToSteps={wordMasterHowToSteps}
        category="WordGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Information Entropy &amp; Orthographic Deduction</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Master
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Deduce the secret 5-letter word in 6 attempts. Use color-coded tile feedback, letter frequency modeling, and information theory to eliminate candidates.
          </p>
        </header>

        {/* Interactive Word Master Game Component */}
        <div className="py-2">
          <WordMaster />
        </div>

        {/* ── Section 1: Information Theory & Word Deduction (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Information Entropy: Shannon Bits in Word Deduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Word Master is a combinatorial word-deduction game evaluated through Claude Shannon&apos;s information theory. Out of 2,315 valid target words, each guess partitions the remaining search space into 3⁵ = 243 possible color pattern buckets. Optimal starter words (such as CRANE, SLATE, and SALET) deliver an expected entropy yield of approximately 5.87 bits of information, shrinking the candidate pool by over 95% on turn one.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">6 Attempts</div>
                <div className="text-xs text-muted-foreground">Maximum Guess Limit</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">2,315 Words</div>
                <div className="text-xs text-muted-foreground">Curated Target Corpus</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">5.87 Bits</div>
                <div className="text-xs text-muted-foreground">Optimal Opener Entropy</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">3.60 Turns</div>
                <div className="text-xs text-muted-foreground">Theoretical Average Solve</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Novice players often guess based on sentiment or random vocabulary. In contrast, advanced players analyze phonetic constraints and letter positional probabilities, avoiding repeated letters until key consonants (R, T, N, S, L) and vowels (E, A, I, O) are determined.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Solve Word Master Systematically in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wordMasterHowToSteps.map((step, idx) => (
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
                Orthographic Lexicon Retrieval
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Searching your mental dictionary for words matching specific letter constraints directly exercises the left hemisphere&apos;s visual word form area (VWFA), strengthening rapid vocabulary access and semantic fluency.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Information Elimination &amp; Pruning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Each guess produces 5 data points that immediately invalidate thousands of candidates. Learning to interpret negative feedback (gray tiles) as valuable information builds rigorous scientific hypothesis-testing habits.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Phonotactic Probability Awareness
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Players naturally absorb English spelling frequencies and allowable letter clusters (e.g. noticing that Q is followed by U, and initial S pairs with P, T, or K), improving reading comprehension and spelling accuracy.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Working Memory &amp; Cognitive Flexibility
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Balancing yellow letters across prospective positions while excluding gray letters forces the prefrontal cortex to hold multiple dynamic constraints simultaneously, expanding active working memory capacity.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Optimal Openers & Entropy ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Mathematically Verified Top Openers (Shannon Entropy)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Opener Word</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Vowels Included</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Consonants Included</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Expected Bits (Entropy)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Average Steps to Solve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground font-mono">SALET</td>
                    <td className="py-2.5 px-3 font-mono">A, E</td>
                    <td className="py-2.5 px-3 font-mono">S, L, T</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">5.88 Bits</td>
                    <td className="py-2.5 px-3">3.42 Guesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground font-mono">CRANE</td>
                    <td className="py-2.5 px-3 font-mono">A, E</td>
                    <td className="py-2.5 px-3 font-mono">C, R, N</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">5.87 Bits</td>
                    <td className="py-2.5 px-3">3.43 Guesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground font-mono">SLATE</td>
                    <td className="py-2.5 px-3 font-mono">A, E</td>
                    <td className="py-2.5 px-3 font-mono">S, L, T</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">5.86 Bits</td>
                    <td className="py-2.5 px-3">3.44 Guesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground font-mono">TRACE</td>
                    <td className="py-2.5 px-3 font-mono">A, E</td>
                    <td className="py-2.5 px-3 font-mono">T, R, C</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">5.83 Bits</td>
                    <td className="py-2.5 px-3">3.48 Guesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground font-mono">ADIEU</td>
                    <td className="py-2.5 px-3 font-mono">A, I, E, U</td>
                    <td className="py-2.5 px-3 font-mono">D</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">5.52 Bits</td>
                    <td className="py-2.5 px-3">3.71 Guesses</td>
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
              Word Master Solving Performance Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Performance in word deduction is evaluated by your historical average guess count across 100+ puzzles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">5.0 – 6.0 Guesses</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Guesser</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Chooses random starter words with duplicate letters. Frequently repeats eliminated gray letters or falls into letter traps.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">4.0 – 4.9 Guesses</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistently uses high-vowel openers. Accurately tracks keyboard letters and solves standard puzzles comfortably on turn 4.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">3.5 – 3.9 Guesses</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Strategic Deductor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Optimized turn-1 and turn-2 coverage. Leverages exploratory words in standard mode to evade rhyming trap families.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">&lt; 3.5 Guesses</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Near theoretical limit. Flawless mathematical decision branching, extensive 5-letter vocabulary, and sub-60 second solve times.
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
              4 Proven Tips to Lower Your Average Guess Count
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Avoid Duplicate Letters in Your First Two Turns
                </div>
                <p className="text-xs leading-relaxed">
                  Never start with words like &ldquo;APPLE&rdquo; or &ldquo;SPEED&rdquo;. Using words with five distinct letters tests 10 different letters across turns 1 and 2, eliminating ~40% of the alphabet.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Consonants Are More Informative Than Vowels
                </div>
                <p className="text-xs leading-relaxed">
                  While openers like &ldquo;ADIEU&rdquo; find vowels quickly, vowels appear in almost every word and give little positional power. Identifying consonants like R, S, T, and L partitions the dictionary much faster.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Sacrifice a Turn to Escape Rhyme Traps
                </div>
                <p className="text-xs leading-relaxed">
                  If you have _IGHT and candidates include SIGHT, MIGHT, FIGHT, LIGHT, NIGHT, do not guess them one by one. Play &ldquo;FLAMS&rdquo; on turn 3 to test F, L, M, and S simultaneously in one stroke.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Watch for Unconventional Letter Y and Double Letters
                </div>
                <p className="text-xs leading-relaxed">
                  If turn 3 reveals zero standard vowels (A, E, I, O, U), the word almost certainly uses &lsquo;Y&rsquo; as a vowel (e.g. GLYPH, NYMPH, CRYPT) or contains duplicate letters (e.g. WHICH, KNOCK).
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
              Frequently Asked Questions About Word Master
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {wordMasterFaqs.map((faq, index) => (
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
              Sharpen your verbal fluency, anagram decoding, and vocabulary recognition across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/hangman" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Hangman</span>
                <span className="text-xs text-muted-foreground mt-1">Letter frequency &amp; cryptographic deduction →</span>
              </Link>
              <Link href="/word-scramble" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Word Scramble</span>
                <span className="text-xs text-muted-foreground mt-1">60-second rapid anagram sprint →</span>
              </Link>
              <Link href="/typing-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Typing Test</span>
                <span className="text-xs text-muted-foreground mt-1">WPM speed &amp; keystroke accuracy →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
