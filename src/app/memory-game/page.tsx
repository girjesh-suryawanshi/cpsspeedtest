import { GameSEO } from "@/components/game-seo";
import { MemoryGame } from "@/components/memory-game";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Brain, Layers, Activity, Eye, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Memory Card Matching Game – Visual Concentration & Recall | CpsSpeedTest',
  description: 'Play the classic Memory card matching game online. Test visual spatial recall, track moves and completion time, and exercise cognitive concentration.',
  keywords: ['memory game', 'card matching game', 'concentration game', 'pairs game', 'visual memory test', 'brain matching game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/memory-game',
  },
};

const memoryFaqs = [
  {
    question: "What is the optimal strategy to solve the Memory card game with minimum moves?",
    answer: "Always turn over an unrevealed card as your first flip of a turn. Never flip a brand new card on your second flip unless you already know the matching location of the first card from prior turns. This simple heuristic prevents accidentally revealing two new cards that cannot be matched."
  },
  {
    question: "What cognitive skills does card matching train?",
    answer: "It actively stimulates the hippocampus and prefrontal cortex, exercising visuospatial sketchpad memory, spatial location indexing, and inhibitory cognitive control (resisting the urge to randomly flip cards)."
  },
  {
    question: "What is the historical origin of the Memory card game?",
    answer: "The matching pairs concept originated in 12th-century Japan as Kai-awase (shell matching). In 1959, Swiss game designer William Hurter adapted it with cardboard tiles for Ravensburger under the name 'Memory', selling tens of millions of copies worldwide."
  },
  {
    question: "What is a good score on an 8-pair (16-card) board?",
    answer: "The theoretical minimum is 8 moves (requiring perfect luck). A competitive human score using sound spatial memory is 10 to 14 moves completed in under 30 seconds."
  }
];

export default function MemoryGamePage() {
  return (
    <>
      <GameSEO 
        name="Memory Card Matching Game"
        description="Play the classic Memory card matching game online. Test visual spatial recall, track moves and completion time, and exercise cognitive concentration."
        url="https://www.cpsspeedtest.com/memory-game"
        faqs={memoryFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Visual Spatial Concentration Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Memory Matching Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Flip cards to reveal hidden symbols and find all matching pairs. Exercise your visual spatial recall with move-tracking and precision timer diagnostics.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <MemoryGame />

        {/* ── Section 1: History & Cognitive Science (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-primary" />
              Origins & Cognitive Science of the Pairs Matching Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Memory Game</strong> (historically known as <em>Concentration</em>, <em>Pelmanism</em>, or <em>Pairs</em>) is one of the oldest and most universally studied visual retention puzzles in cognitive psychology. While popularized commercially in 1959 by German board game manufacturer Ravensburger, the concept dates back to 12th-century Heian period Japan, where aristocrats played <em>Kai-awase</em> using hand-painted clam shells.
            </p>
            <p>
              When playing a matching card puzzle, your brain must coordinate three distinct cognitive systems:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong className="text-foreground">Visuospatial Sketchpad:</strong> Temporarily encodes the physical (x, y) coordinates of newly revealed symbols within your working memory.
              </li>
              <li>
                <strong className="text-foreground">Semantic Association:</strong> Tags abstract icons with mental labels (e.g., &quot;blue star&quot; or &quot;green diamond&quot;) to enable rapid recognition when their twin appears.
              </li>
              <li>
                <strong className="text-foreground">Inhibitory Control:</strong> Suppresses impulsive random clicking, forcing the player to recall previously revealed positions before making a move.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 2: Mathematical Strategy for Minimum Moves ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-primary" />
              The Mathematically Optimal Memory Game Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Many players flip cards haphazardly, doubling their total move count. Game theory and computer scientists have demonstrated a simple, provably optimal heuristic to solve the board with the fewest possible moves:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base">
                  Rule 1: First Card is Always an Unknown
                </h3>
                <p>
                  Always pick a completely unrevealed card on your <strong>first flip</strong> of a turn. This maximizes information gain. If it reveals a symbol you have already seen in an earlier turn, you can immediately match it on flip #2!
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base">
                  Rule 2: Never Guess on the Second Card
                </h3>
                <p>
                  If card #1 revealed a symbol you have never seen before, <strong>do not pick another completely random card</strong>. Instead, systematically flip an unexplored tile in a fixed grid pattern (e.g., top-to-bottom, left-to-right) to index the board efficiently.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Score Tiers & Efficiency Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Performance Tiers: 8-Pair (16-Card) Move Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              For an 8-pair (16-card) board, the absolute theoretical minimum is 8 moves (requiring 100% blind luck). Here is how human move efficiency ranks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏆</div>
                <div className="font-bold text-foreground">8 – 11 Moves</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master / Photographic</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Exceptional memory with zero wasted moves. Remembers every single card revealed on the first exposure.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">12 – 15 Moves</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Proficient / Sharp</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Solid working memory. Minimal duplicate reveals and fast card identification.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👤</div>
                <div className="font-bold text-foreground">16 – 22 Moves</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Regular</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Typical score for casual players who occasionally forget cards revealed several turns earlier.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐢</div>
                <div className="font-bold text-foreground">23+ Moves</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Needs Practice</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Indicates distracted or impulsive clicking. Slow down, breathe, and verbally name the symbols.</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Looking for more brain training? Challenge your numerical working memory on the <Link href="/chimp-test" className="text-primary hover:underline font-semibold">Chimp Test</Link> or test sequential audio-visual memory on <Link href="/simon-says" className="text-primary hover:underline font-semibold">Simon Says</Link>.
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
              {memoryFaqs.map((faq, index) => (
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
