import { GameSEO } from "@/components/game-seo";
import { Hangman } from "@/components/games/hangman";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { HelpCircle, CheckCircle2, Trophy, Activity, Brain, BookOpen, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hangman – Letter Frequency Analysis & Cryptographic Word Deduction | CpsSpeedTest",
  description: "Play classic Hangman online. Deduce secret words letter by letter using English letter frequency tables (ETAOIN SHRDLU), morphological phonics, and vowel elimination.",
  keywords: ["hangman", "word game", "guessing game", "vocabulary game", "online hangman", "letter frequency", "etaoin shrdlu", "cryptanalysis word game", "free hangman game"],
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

const hangmanHowToSteps = [
  {
    name: "Inspect Word Length and Blank Underscores",
    text: "Examine the number of blank spaces. The total character count instantly restricts the candidate vocabulary pool."
  },
  {
    name: "Probe High-Frequency Vowels (E, A, I, O)",
    text: "Begin with letter E (12.7% frequency) followed by A, I, or O. Revealing vowel coordinates exposes the underlying syllable structure."
  },
  {
    name: "Deploy Dominant Consonants (T, N, S, R, H)",
    text: "Test high-probability consonants according to the ETAOIN SHRDLU distribution to unlock common word prefixes and suffixes."
  },
  {
    name: "Identify Morphological Prefixes and Suffixes",
    text: "Look for standard morphological affixes such as -ING, -ED, -TION, -ER, -LY, or prefixes like UN-, RE-, and DIS-."
  },
  {
    name: "Avoid Low-Probability Trap Letters",
    text: "Never guess low-frequency consonants like J, Q, X, or Z early in the round, as each strike brings the gallows illustration closer to completion."
  },
  {
    name: "Complete the Word Before 6 Strikes",
    text: "Synthesize phonetics and vocabulary context to guess the remaining consonants and solve the secret word with zero margin for error."
  }
];

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
    question: "Who invented the game of Hangman and what are its origins?",
    answer: "The exact origins date back to Victorian-era parlor games in England, first documented as 'Gallows' by Alice Bertha Gomme in her 1894 book 'The Traditional Games of England, Scotland, and Ireland'. It was adapted for books and commercial games in the 1900s."
  },
  {
    question: "Why is guessing vowels first so critical in word deduction?",
    answer: "Nearly all English syllables require a vowel nucleus. Revealing whether a word contains 'E' or 'A' instantly exposes whether it follows common structural patterns like C-V-C (consonant-vowel-consonant) or contains silent ending markers (like -E or -ING), narrowing candidate vocabulary dramatically."
  },
  {
    question: "What are the rarest letters in the English language?",
    answer: "The least frequent letters are Z (0.07%), Q (0.10%), X (0.15%), J (0.15%), and K (0.77%). Guessing these letters early in a game of Hangman carries an enormous risk of wasting one of your 6 allowed strikes."
  },
  {
    question: "Can Hangman help children and second-language learners with English spelling?",
    answer: "Yes. Hangman reinforces orthographic phonics, word morphology, and syllable construction. It teaches learners how consonants and vowels interact in valid English spelling rules while expanding active vocabulary."
  },
  {
    question: "How does Hangman relate to cryptography and codebreaking?",
    answer: "Hangman utilizes the exact same frequency analysis principles used in classical cryptanalysis to decipher substitution ciphers. By mapping letter frequencies and spotting bigram patterns (TH, ER, ON), players execute elementary codebreaking."
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
        howToSteps={hangmanHowToSteps}
        category="WordGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Letter Frequency &amp; Classical Deduction</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Hangman Online
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The timeless word deduction game. Uncover the secret word letter by letter using English letter frequencies and phonotactic rules before the gallows completes.
          </p>
        </header>

        {/* Interactive Hangman Game Component */}
        <div className="py-2">
          <Hangman />
        </div>

        {/* ── Section 1: Frequency Analysis & Cryptanalysis (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Frequency Analysis: The ETAOIN SHRDLU Hierarchy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Hangman is a classic linguistic deduction and cryptanalysis game where players reveal an unknown word by predicting single letters. Dating back to Victorian parlor games documented by Alice Gomme in 1894, optimal gameplay relies on the English letter frequency distribution (ETAOIN SHRDLU). Players have exactly 6 permitted strikes before the gallows illustration is completed, making uncalculated guesses statistically fatal.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">6 Strikes</div>
                <div className="text-xs text-muted-foreground">Allowed Error Limit</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">12.7% &apos;E&apos;</div>
                <div className="text-xs text-muted-foreground">Highest Frequency Letter</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">ETAOIN</div>
                <div className="text-xs text-muted-foreground">Top 6 Consonant/Vowel Set</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">&lt; 0.1%</div>
                <div className="text-xs text-muted-foreground">Rarity of Q, X, Z</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because nearly every English word requires at least one vowel nucleus to form a pronounceable syllable, targeting E, A, and I early reveals syllable boundaries, allowing players to predict consonant digraphs like TH, SH, and CH with high statistical confidence.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Win at Hangman Consistently in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hangmanHowToSteps.map((step, idx) => (
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
                Orthographic Phonics &amp; Lexical Access
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Deducing missing letters strengthens mental representations of word spellings and phonological chunks, reinforcing the visual word form area (VWFA) responsible for rapid, fluent reading comprehension.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Probabilistic Reasoning Under Uncertainty
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every turn forces players to balance risk versus expected information gain. Weighing the likelihood of a high-frequency consonant like T versus a specific contextual letter builds robust probabilistic decision-making.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Morphological Pattern Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Recognizing recurring structural morphemes (such as prefixes like PRE-, RE-, and suffixes like -ABLE, -ING) teaches players to view words as composite modules rather than arbitrary letter sequences.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Impulse Control &amp; Error Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              With only 6 allowed mistakes, impulsive guessing results in immediate failure. Hangman instills disciplined verification habits and restraint before executing choices.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: English Letter Frequencies ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              English Letter Frequency Spectrum &amp; Strike Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Letter Tier</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Letters</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Corpus Frequency (%)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Tactical Role in Hangman</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Strike Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground">Tier 1: Core Vowels</td>
                    <td className="py-2.5 px-3 font-mono">E, A, I, O</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">7.5% – 12.7%</td>
                    <td className="py-2.5 px-3">Anchor syllable structure; mandatory early probes</td>
                    <td className="py-2.5 px-3 text-emerald-500 font-semibold">Very Low</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground">Tier 2: Prime Consonants</td>
                    <td className="py-2.5 px-3 font-mono">T, N, S, R, H</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">6.1% – 9.1%</td>
                    <td className="py-2.5 px-3">Unlocks common digraphs (TH, SH) and plural endings</td>
                    <td className="py-2.5 px-3 text-emerald-500 font-semibold">Low</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground">Tier 3: Moderate Consonants</td>
                    <td className="py-2.5 px-3 font-mono">L, D, C, U, M, W</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">2.4% – 4.0%</td>
                    <td className="py-2.5 px-3">Test after word root skeleton is established</td>
                    <td className="py-2.5 px-3 text-amber-500 font-semibold">Moderate</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground">Tier 4: Contextual Letters</td>
                    <td className="py-2.5 px-3 font-mono">F, G, Y, P, B, V, K</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">0.8% – 2.2%</td>
                    <td className="py-2.5 px-3">Only guess when phonetic context directly demands them</td>
                    <td className="py-2.5 px-3 text-rose-500 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-foreground">Tier 5: Fatal Traps</td>
                    <td className="py-2.5 px-3 font-mono">J, X, Q, Z</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">&lt; 0.2%</td>
                    <td className="py-2.5 px-3">Never guess unless all other letters are fully revealed</td>
                    <td className="py-2.5 px-3 text-rose-600 font-bold">Extreme</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Win Rate Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Hangman Win Rate &amp; Efficiency Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Performance in Hangman is evaluated by long-term win percentage across 50+ randomized games:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">&lt; 60% Win Rate</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Guesser</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Guesses letters based on random intuition. Often tests low-frequency letters (Z, X) and exhausts strikes on turn 4.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">60% – 79% Win Rate</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Deductor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistently begins with E and T. Identifies obvious word endings (-ING, -ED) and keeps strikes under 4 per game.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">80% – 94% Win Rate</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Master Linguist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Systematic ETAOIN execution. Recognizes uncommon phonetic patterns and rarely accumulates more than 2 strikes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">95%+ Win Rate</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Near-flawless performance. Masterful dictionary recall, instantaneous morpheme recognition, and zero impulsive strikes.
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
              4 Proven Tips to Never Lose at Hangman
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Always Start with &lsquo;E&rsquo; and &lsquo;A&rsquo;
                </div>
                <p className="text-xs leading-relaxed">
                  Letter E appears in over 11% of all dictionary words, with A close behind. Locating vowels gives you the skeleton of the word and confirms syllable breaks.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Target Suffixes on Longer Words
                </div>
                <p className="text-xs leading-relaxed">
                  If the word is 7+ letters long, test common suffix letters like I, N, G, or E, D. Uncovering the suffix often cuts the unknown word portion in half.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Never Guess Z, X, Q, or J First
                </div>
                <p className="text-xs leading-relaxed">
                  Combined, these four letters appear in less than 0.5% of English words. Guessing one early is almost always a guaranteed wasted strike.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Consider &lsquo;Y&rsquo; If No Standard Vowels Appear
                </div>
                <p className="text-xs leading-relaxed">
                  If you have tested E, A, and I and found zero matches in a short word, immediately guess &lsquo;Y&rsquo; (words like RHYTHM, CRYPT, DRY, FLY).
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
              Continue testing your vocabulary, spelling agility, and deductive reasoning across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/word-master" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Word Master</span>
                <span className="text-xs text-muted-foreground mt-1">5-letter information entropy deduction →</span>
              </Link>
              <Link href="/word-scramble" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Word Scramble</span>
                <span className="text-xs text-muted-foreground mt-1">60-second rapid anagram sprint →</span>
              </Link>
              <Link href="/typing-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Typing Test</span>
                <span className="text-xs text-muted-foreground mt-1">Keystroke speed &amp; accuracy benchmark →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
