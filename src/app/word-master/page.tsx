import { GameSEO } from "@/components/game-seo";
import { WordMaster } from "@/components/games/word-master";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { BookOpen, Brain, Trophy, Activity, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Master – 5-Letter Word Deduction & Information Entropy | CpsSpeedTest",
  description: "Play Word Master, the popular 5-letter word deduction game. Guess the secret word in 6 attempts using Shannon information entropy, optimal openers (CRANE, SLATE), and color-coded hints.",
  keywords: ["word master", "wordle alternative", "word game", "vocabulary game", "brain training", "5 letter word guess", "information entropy word game"],
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
    question: "How does the game handle duplicate letters?",
    answer: "If you guess a word with two identical letters (such as 'SPEED') but the secret word only contains one 'E', exactly one tile will illuminate green or yellow (prioritizing the exact match), while the secondary tile turns gray. This prevents false positive assumptions about duplicate frequency."
  },
  {
    question: "What is 'Hard Mode' in word deduction games?",
    answer: "In standard play, you can guess words containing completely new letters on turn 2 to eliminate candidates. In Hard Mode, any revealed hints (Green or Yellow letters) must be used in all subsequent guesses, limiting exploratory elimination."
  },
  {
    question: "How does playing Word Master benefit vocabulary and cognition?",
    answer: "Word Master exercises orthographic lexicon retrieval, phonotactic probability recognition (understanding common English letter pairings like CH, TH, SH, CK), and deductive constraint satisfaction, keeping verbal executive function sharp."
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
        category="WordGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lexical Deduction &amp; Information Entropy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Word Master
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Deduce the secret 5-letter word within six attempts. Analyze color-coded feedback, prune letter candidates, and maximize your guess efficiency.
          </p>
        </header>

        {/* Word Master Interactive Game */}
        <div className="py-2">
          <WordMaster />
        </div>

        {/* ── Section 1: The Mathematics of Information Entropy (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Information Theory in Word Deduction: Shannon Entropy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Underneath the simple grid interface, <strong>Word Master</strong> is a classic manifestation of <em>information theory</em>, pioneered by mathematician Claude Shannon in 1948.
            </p>
            <p>
              At the start of the game, there are approximately 2,315 common 5-letter target words in the English lexicon. Each guess receives one of $3^5 = 243$ possible color feedback patterns (e.g., Green-Gray-Yellow-Gray-Green). An optimal guess is not necessarily one that hits green tiles immediately, but one that divides the remaining candidate pool into the smallest possible uniform clusters, maximizing <strong>entropy</strong>:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              Expected Information E[I] = ∑ P(pattern) × log₂(1 / P(pattern))
            </div>
            <p className="text-xs">
              Openers like <code>CRANE</code> or <code>SLATE</code> eliminate over 90% of the entire dictionary on attempt 1, leaving on average fewer than 60 possible words to analyze on guess two.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Guess Distribution Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Word Master Guess Distribution Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How many attempts does your vocabulary strategy require? Compare your guess distribution against global player averages:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">1 – 2 Guesses</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Statistical Miracle</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Guess 1 is a 1-in-2,300 lucky strike. Guess 2 requires an ideal opener that prunes the candidate field down to 1–3 words.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">3 Guesses</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Expert Deductor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 15% performance. Masterful use of consonant clusters and vowel elimination. The solver avoids repeated dead letters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">📝</div>
                <div className="font-bold text-foreground">4 Guesses</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Population Benchmark</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The mathematical median for skilled human players. Represents clean systematic deduction without reckless guesses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚠️</div>
                <div className="font-bold text-foreground">5 – 6 Guesses</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Close Shave / Trap Words</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Common when trapped by rhyming word families (e.g. _IGHT: LIGHT, MIGHT, NIGHT, SIGHT, TIGHT, RIGHT).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Wordle Traps & Phonotactic Strategies ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                How to Defeat Rhyming &quot;Death Traps&quot;
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                The most dangerous scenario in word deduction is the <strong>rhyming trap</strong>—where you know four letters (e.g. <code>_OUND</code>) but have six candidate letters left (B, F, H, P, R, S) with only 3 attempts remaining:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">The Burner Word Sacrifice:</strong> Rather than guessing <em>BOUND</em> then <em>HOUND</em>, guess a word that combines multiple candidates at once (like <code>SHARP</code>).
                </li>
                <li>
                  <strong className="text-foreground">Vowel Prioritization:</strong> Every English word contains at least one vowel (or &apos;Y&apos;). Testing E, A, I, O in your first two guesses prevents vowel ambiguity.
                </li>
                <li>
                  <strong className="text-foreground">Consonant Pairs:</strong> Common endings like <code>-ER</code>, <code>-ED</code>, <code>-CH</code>, and <code>-ST</code> should be tested early.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Word &amp; Vocabulary Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Explore other verbal deduction and spelling agility tests across our platform:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/hangman" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Hangman</span>
                  <span className="text-primary font-mono">Letter Frequency Guessing →</span>
                </Link>
                <Link href="/word-scramble" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Scramble</span>
                  <span className="text-primary font-mono">Anagram Solving Sprint →</span>
                </Link>
                <Link href="/word-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Word Memory Test</span>
                  <span className="text-primary font-mono">Verbal Free Recall →</span>
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
      </div>
    </>
  );
}
