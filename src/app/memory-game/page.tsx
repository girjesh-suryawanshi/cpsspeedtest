import { GameSEO } from "@/components/game-seo";
import { MemoryGame } from "@/components/memory-game";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Brain, Layers, Activity, Eye, CheckCircle2,
  HelpCircle, Trophy, TrendingUp, Sparkles, Award,
  ArrowRight, ShieldCheck, Grid
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memory Card Matching Game – Visual Concentration & Recall | CpsSpeedTest",
  description:
    "Play the classic Memory card matching game online. Test visual spatial recall, master the mathematical optimal flipping heuristic, track moves and completion time, and exercise cognitive concentration.",
  keywords: [
    "memory game",
    "card matching game",
    "concentration game",
    "pairs game",
    "visual memory test",
    "brain matching game",
    "kai awase",
    "memory matching cards",
    "concentration card game",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/memory-game",
  },
  openGraph: {
    title: "Memory Card Matching Game – Test Your Spatial Pairing Speed",
    description: "Play classic card matching online. Track moves and completion time, apply optimal game theory, and benchmark your concentration score.",
    url: "https://www.cpsspeedtest.com/memory-game",
    type: "website",
  },
};

const memoryHowToSteps = [
  {
    name: "Survey the face-down card grid",
    text: "At the start of the round, 16 cards (8 identical icon pairs) are laid face-down in a randomized 4x4 matrix.",
  },
  {
    name: "Flip the first unrevealed card of your turn",
    text: "Click any unknown card on the board to reveal its icon. Mentally note its exact row and column coordinate.",
  },
  {
    name: "Locate or search for its matching twin",
    text: "If you have already revealed its twin on an earlier turn, flip that specific card to complete the pair. If not, explore a new tile.",
  },
  {
    name: "Collect matches and lock them in place",
    text: "When two matching cards are flipped consecutively, they remain face-up permanently and add to your cleared pairs count.",
  },
  {
    name: "Memorize locations when cards don't match",
    text: "If the two cards differ, they flip back face-down after a brief moment. Mentally index both icons and their exact grid locations.",
  },
  {
    name: "Clear the board in minimal moves and time",
    text: "Repeat the process until all 8 pairs are successfully matched. Review your total move count and completion time against global standards.",
  },
];

const memoryFaqs = [
  {
    question: "What is the mathematically optimal strategy for the Memory card matching game?",
    answer:
      "Game theory establishes a strict heuristic: Always flip an unrevealed card as your first flip of a turn. Never flip a brand-new unknown card on your second flip unless you already know the matching location of the first card from prior turns. If the first card flipped matches a card you revealed earlier, immediately flip that known twin. This simple rule minimizes wasted moves and eliminates accidental dead reveals.",
  },
  {
    question: "What cognitive skills does card matching train neurologically?",
    answer:
      "Card matching actively stimulates the hippocampus and prefrontal cortex. It exercises the visuospatial sketchpad (retaining 2D grid coordinates), episodic short-term memory (recalling prior turn events), and inhibitory executive control (resisting the temptation to click random cards impulsively).",
  },
  {
    question: "What is the historical origin of the Memory card game?",
    answer:
      "The matching pairs concept originated in 12th-century Heian period Japan as Kai-awase (shell matching), where aristocratic courtiers matched 360 decorated clam shells. In 1959, Swiss game designer William Hurter adapted the mechanic with cardboard tiles for Ravensburger under the trademark 'Memory', selling over 75 million sets worldwide.",
  },
  {
    question: "What is considered a good move score on a 16-card (8-pair) board?",
    answer:
      "The absolute theoretical minimum is 8 moves (which requires 100% pure luck). An excellent competitive human score using perfect spatial memory and optimal strategy is 10 to 13 moves completed in under 25 seconds. Average players typically require 14 to 18 moves.",
  },
  {
    question: "How can I avoid forgetting cards that flip back over face-down?",
    answer:
      "Apply verbal dual-coding: as each card reveals itself, speak or whisper the icon name and its coordinate (e.g., 'Apple top-right', 'Star row 3 col 2'). Combining visual sensory memory with auditory phonological coding drastically increases recall durability in working memory.",
  },
  {
    question: "Is card matching beneficial for preventing age-related memory decline?",
    answer:
      "Yes. Regular engagement with spatial matching games exercises associative recall pathways in the medial temporal lobe, maintaining neural density and providing cognitive reserve against normal age-related spatial memory loss.",
  },
  {
    question: "How does grid size impact memory complexity?",
    answer:
      "Memory demand scales quadratically with grid size. While a 16-card board requires tracking 8 items, a 36-card board (18 pairs) requires tracking 18 spatial locations and causes severe proactive interference, where similar icons become confused in working memory.",
  },
];

export default function MemoryGamePage() {
  return (
    <>
      <GameSEO
        name="Memory Card Matching Game"
        description="Play the classic Memory card matching game online. Test visual spatial recall, track moves and completion time, and exercise cognitive concentration."
        url="https://www.cpsspeedtest.com/memory-game"
        faqs={memoryFaqs}
        howToSteps={memoryHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Exercise hippocampal visuospatial memory, apply game-theory optimal card flipping heuristics, enhance episodic working memory retention, and benchmark completion time against global norms."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Classic Kai-awase Visuospatial Matching Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Memory Card Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Flip cards to find matching icon pairs. Master the optimal game-theory heuristic, minimize wasted moves, and benchmark your visual memory concentration.
          </p>
        </header>

        {/* Interactive Memory Game Component */}
        <MemoryGame />

        {/* Section 1: What is the Memory Game? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Memory Card Matching Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Memory Card Game</strong> (also known as <em>Concentration</em> or <em>Pairs</em>) is a classic cognitive puzzle where all cards are laid face down and two cards are flipped face up on each turn. The objective is to identify and match all identical icon pairs in the minimum number of moves and elapsed seconds, exercising the brain&apos;s visuospatial sketchpad and episodic coordinate recall.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Grid Layout</span>
                <span className="text-lg font-black text-primary">4 x 4 (16 Cards)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">8 distinct matching pairs</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Optimal Human Moves</span>
                <span className="text-lg font-black text-emerald-500">10 – 13 Moves</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Using game-theory heuristic</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Human Moves</span>
                <span className="text-lg font-black text-amber-500">14 – 18 Moves</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Casual play without indexing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Play and Minimize Moves
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {memoryHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Card Matching Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Cognitive Benefits of Spatial Card Matching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Grid className="w-4 h-4" />
                  Spatial Indexing &amp; Coordinate Memory
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Remembering where items were placed in your house (keys, wallet, phone) relies on the same hippocampal coordinate mapping exercised when you mentally catalog card locations on a 4x4 grid.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Layers className="w-4 h-4" />
                  Working Memory Consolidation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every failed turn forces the brain to store two new coordinate-symbol associations while simultaneously preserving previously cataloged cards, strengthening neuroplastic density in the prefrontal cortex.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Inhibitory Impulse Suppression
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Untrained players flip cards randomly and impulsively. Mastering the game demands patient self-control—inhibiting random clicks to systematically execute mathematical information-gathering turns.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Activity className="w-4 h-4" />
                  Dual-Coding Mnemonic Association
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Simultaneously using visual imagery (icon shape) and phonological labels (verbal coordinate names) trains dual-coding mechanisms in both hemispheres, increasing everyday learning efficiency.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Game Theory & Optimal Heuristic */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Game-Theory Decision Matrix for Maximum Efficiency
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Turn Phase</th>
                  <th className="p-3">Current Board State</th>
                  <th className="p-3">Optimal Action</th>
                  <th className="p-3">Information Yield</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Flip #1 (First Card)</td>
                  <td className="p-3">Any state</td>
                  <td className="p-3 text-emerald-400 font-semibold">Always flip an UNREVEALED card</td>
                  <td className="p-3">Gathers guaranteed new information with zero waste</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Flip #2 (Scenario A)</td>
                  <td className="p-3">Flip #1 revealed an icon seen before</td>
                  <td className="p-3 text-primary font-semibold">Flip the KNOWN matching card</td>
                  <td className="p-3">Guaranteed match (Score +1 pair)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Flip #2 (Scenario B)</td>
                  <td className="p-3">Flip #1 revealed a brand-new icon</td>
                  <td className="p-3 text-amber-400 font-semibold">Flip an UNKNOWN card</td>
                  <td className="p-3">Explores new tile; if match occurs, score; if not, catalog both</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Anti-Pattern (Mistake)</td>
                  <td className="p-3">Flip #1 was known; user guesses blindly on Flip #2</td>
                  <td className="p-3 text-rose-400 font-semibold">NEVER do this</td>
                  <td className="p-3 text-rose-400 font-bold">Wastes a turn and reveals an unmatched card</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Memory Card Game Performance Tiers (16 Cards)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Casual Player</div>
              <div className="text-2xl font-black text-foreground">19 – 25+ Moves</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relies on impulsive guessing. Frequently re-flips cards whose locations were already revealed on earlier turns.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Competent Recall</div>
              <div className="text-2xl font-black text-primary">14 – 18 Moves</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Solid visual memory. Systematically avoids re-checking known tiles and clears the board in under 40 seconds.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Tactical Strategist</div>
              <div className="text-2xl font-black text-amber-500">11 – 13 Moves</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% performance. Strict execution of the optimal game-theory heuristic combined with zero coordinate memory lapse.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Memory Grandmaster</div>
              <div className="text-2xl font-black text-rose-500">8 – 10 Moves</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Near-theoretical minimum. Flawless spatial retention combined with exceptional initial placement luck.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            How to Clear the Board with Fewer Moves
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Explore Corners and Borders First</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Corner and perimeter cards are easier to anchor mentally than interior tiles because they have distinct spatial borders (top-left, bottom-right).
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Whisper Coordinate Labels (Dual-Coding)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Say &quot;Star row 2, col 1&quot; out loud or in your mind. The auditory loop retains information up to 3 times longer than a passive glance.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Strictly Avoid Impulsive Re-Flips</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Never re-flip a card just to &quot;check what it was&quot;. Trust your initial mental index; unnecessary re-flips add moves and waste valuable time.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Group Similar Icons by Semantic Category</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If cards have fruit, animal, or tool themes, categorize them in your mind to avoid mixing up similar shapes (e.g., orange vs apple).
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
            {memoryFaqs.map((faq, index) => (
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
              href="/visual-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Visual Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/sequence-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Sequence Memory</span>
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
              href="/number-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Number Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
