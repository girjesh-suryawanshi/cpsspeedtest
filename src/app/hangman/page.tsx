import { GameSEO } from "@/components/game-seo";
import { Hangman } from "@/components/games/hangman";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { HelpCircle, CheckCircle2, Trophy, Activity, Brain, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hangman – Letter Frequency Analysis & Cryptographic Word Deduction | CpsSpeedTest",
  description: "Play classic Hangman online. Deduce secret words letter by letter using English letter frequency tables (ETAOIN SHRDLU), morphological phonics, and vowel elimination.",
  keywords: ["hangman", "word game", "guessing game", "vocabulary game", "online hangman", "letter frequency", "etaoin shrdlu", "cryptanalysis word game"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/hangman',
  },
  openGraph: {
    title: "Hangman – Letter Frequency Analysis & Word Deduction",
    description: "Play classic Hangman online. Master English letter frequency tables and deduce secret words before running out of guesses.",
    url: 'https://www.cpsspeedtest.com/hangman',
    type: 'website',
  },
};

const hangmanFaqs = [
  {
    question: "What is the mathematically optimal letter guessing sequence in Hangman?",
    answer: "Statistical corpus analysis of the English language shows that letters follow the famous 'ETAOIN SHRDLU' distribution. The optimal strategy begins by probing high-frequency vowels (E, A, I, O) to expose syllable structure, followed immediately by dominant consonants (T, N, S, R, H, L, D)."
  },
  {
    question: "How many incorrect guesses are permitted before losing?",
    answer: "The classic game permits exactly 6 incorrect guesses (head, torso, left arm, right arm, left leg, and right leg). A 7th mistake completes the gallows illustration, resulting in a loss and revealing the secret word."
  },
  {
    question: "Who invented the game of Hangman?",
    answer: "The exact origins date back to Victorian-era parlor games in England, first documented as 'Gallows' by Alice Bertha Gomme in her 1894 book 'The Traditional Games of England, Scotland, and Ireland'. It was adapted for books and commercial games in the 1900s."
  },
  {
    question: "Why is guessing vowels first so critical in word deduction?",
    answer: "Nearly all English syllables require a vowel nucleus. Revealing whether a word contains 'E' or 'A' instantly exposes whether it follows common structural patterns like C-V-C (consonant-vowel-consonant) or contains silent ending markers (like -E or -ING), narrowing candidate vocabulary dramatically."
  },
  {
    question: "What are the rarest letters in the English language?",
    answer: "The least frequent letters are Z (0.07%), Q (0.10%), X (0.15%), J (0.15%), and K (0.77%). Guessing these letters early in a game of Hangman carries an enormous risk of wasting one of your 6 allowed strikes."
  }
];

export default function HangmanPage() {
  return (
    <>
      <GameSEO 
        name="Hangman"
        description="Play the classic game of Hangman online. Guess the hidden word letter by letter using letter frequency analysis before your attempts run out."
        url="https://www.cpsspeedtest.com/hangman"
        faqs={hangmanFaqs}
        category="WordGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cryptanalysis &amp; Letter Frequency Deduction</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Hangman
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The classic word deduction game. Guess the secret word letter by letter using statistical letter distributions before exhausting your 6 allowed strikes.
          </p>
        </header>

        {/* Hangman Interactive Game */}
        <div className="py-2">
          <Hangman />
        </div>

        {/* ── Section 1: Cryptanalysis & ETAOIN SHRDLU (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Cryptanalysis of Hangman: The ETAOIN SHRDLU Principle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In classical cryptography, solving a game of <strong>Hangman</strong> is functionally identical to performing a frequency attack on a monoalphabetic substitution cipher. Letters do not appear at random in English; their distribution is heavily skewed:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              E (12.7%) &gt; T (9.1%) &gt; A (8.2%) &gt; O (7.5%) &gt; I (7.0%) &gt; N (6.7%) &gt; S (6.3%)
            </div>
            <p className="text-xs">
              Together, the 12 letters in <em>ETAOIN SHRDLU</em> account for over 80% of all character occurrences in standard English texts. Choosing letters outside this frequency list before confirming vowels is a statistical blunder that severely increases your strike rate.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Win Rate & Vocabulary Benchmark Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Hangman Performance Tiers &amp; Vocabulary Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How effective is your word deduction strategy? Compare your long-term win percentage across randomized vocabulary draws:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 50% Win Rate</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Random Guesser</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Guesses low-frequency consonants (Z, Q, X, K, J) early based on hunches, wasting strikes before syllable patterns are established.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">50% – 74% Win Rate</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Word Solver</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistently tests E and A first. Wins standard 4-to-6 letter words but struggles against uncommon consonant blends (like RHYTHM or SYZYGY).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">75% – 89% Win Rate</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Cryptanalyst</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Applies morphological n-gram analysis (-ING, -TION, UN-). Solves long multisyllabic words with 2 or fewer strikes remaining.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">90%+ Win Rate</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Lexicographer</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% vocabulary mastery. Flawless letter frequency prioritization, rapid phonotactic pattern recognition, and near-zero failed games.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Word Morphology & Digraph Tactics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                The Three-Phase Hangman Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Phase 1: Vowel Probing (E, A, I, O):</strong> Reveal where syllables reside. If all four vowels miss, the word almost certainly uses &apos;Y&apos; (e.g. GLYPH, MYTH, CRYPT).
                </li>
                <li>
                  <strong className="text-foreground">Phase 2: Common Consonant Blends:</strong> Look for classic digraphs. If you have an &apos;H&apos;, test T, S, C, W (TH, SH, CH, WH). If you see <code>_IN_</code>, test G to complete <code>-ING</code>.
                </li>
                <li>
                  <strong className="text-foreground">Phase 3: Lexicon Reconstruction:</strong> Once 50% of the blanks are filled, mentally scan rhyming dictionary candidates before clicking the remaining letters.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Word &amp; Brain Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Continue building lexical agility and verbal memory across our word puzzles:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/word-master" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Master</span>
                  <span className="text-primary font-mono">5-Letter Wordle Deduction →</span>
                </Link>
                <Link href="/word-scramble" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Scramble</span>
                  <span className="text-primary font-mono">Fast Anagram Decoding →</span>
                </Link>
                <Link href="/word-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Memory Test</span>
                  <span className="text-primary font-mono">Verbal Working Memory →</span>
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
              Frequently Asked Questions About Hangman
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {hangmanFaqs.map((faq, index) => (
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
