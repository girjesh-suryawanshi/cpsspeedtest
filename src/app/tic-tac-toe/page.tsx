import { GameSEO } from "@/components/game-seo";
import { TicTacToe } from "@/components/games/tic-tac-toe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Grid, Trophy, Activity, Brain, HelpCircle,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Sparkles,
  Award, ShieldCheck, Cpu
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe – Play Online vs AI & Game Theory Strategy Guide | CpsSpeedTest",
  description:
    "Play classic Tic-Tac-Toe (Noughts and Crosses) against intelligent AI. Master solved game theory, corner openings, minimax decision trees, and unbeatable fork trap strategies.",
  keywords: [
    "tic-tac-toe",
    "noughts and crosses",
    "tic tac toe online",
    "play vs ai",
    "strategy game",
    "game theory tic tac toe",
    "how to win tic tac toe",
    "minimax game",
    "unbeatable tic tac toe",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/tic-tac-toe",
  },
  openGraph: {
    title: "Tic-Tac-Toe – Play vs AI & Master Game Theory",
    description: "Challenge our AI in classic Tic-Tac-Toe. Learn the mathematical corner traps and fork strategies that guarantee you never lose.",
    url: "https://www.cpsspeedtest.com/tic-tac-toe",
    type: "website",
  },
};

const ticTacToeHowToSteps = [
  {
    name: "Choose your mark and game difficulty",
    text: "Select whether you play as X (first move) or O (second move), and pick your AI opponent's difficulty tier.",
  },
  {
    name: "Open in a corner square when moving first",
    text: "Placing your opening X in any of the four corners yields the strongest mathematical winning chances against human opponents.",
  },
  {
    name: "Claim the center square immediately if moving second",
    text: "If your opponent takes a corner on Move 1, you MUST take the center cell with O to avoid entering an unblockable fork trap.",
  },
  {
    name: "Set up a double-threat 'Fork'",
    text: "Position marks so that two separate winning lines of three-in-a-row are created simultaneously, guaranteeing victory on the next turn.",
  },
  {
    name: "Block opponent two-in-a-row threats",
    text: "Always prioritize blocking an opponent's imminent three-in-a-row completion over pursuing your own non-fatal offensive setups.",
  },
  {
    name: "Achieve three-in-a-row or force a tactical draw",
    text: "Win by aligning three marks horizontally, vertically, or diagonally. Under optimal play from both sides, the game results in a draw (Cat's Game).",
  },
];

const ticTacToeFaqs = [
  {
    question: "Is there a guaranteed winning strategy in classic Tic-Tac-Toe?",
    answer:
      "Tic-Tac-Toe is mathematically proven to be a 'solved game'. Under optimal play from both participants, the theoretical outcome is always a draw (cat's game). However, if you move first and open in a corner, any opponent who fails to respond by taking the exact center square can be forced into an unblockable fork trap that guarantees an absolute victory on move 5.",
  },
  {
    question: "What is a 'fork' in Tic-Tac-Toe game theory?",
    answer:
      "A fork is a tactical board configuration where a player creates two simultaneous, unblocked two-in-a-row threats on a single turn. Because the defending opponent can place only one mark to block on their subsequent move, the attacking player is guaranteed to complete their three-in-a-row on the following turn.",
  },
  {
    question: "How many total possible game states exist on a 3x3 grid?",
    answer:
      "Taking turn order into account, there are 255,168 possible games of Tic-Tac-Toe. However, when accounting for rotational and reflective geometric symmetries across the 3x3 matrix, there are only 26,830 unique games and just 138 terminal board outcomes.",
  },
  {
    question: "What is the mandatory defense if your opponent opens with a corner?",
    answer:
      "If Player 1 places an X in any corner, Player 2 MUST place an O in the exact center square. Taking an edge or an adjacent corner allows Player 1 to set up an unavoidable fork on move 3. If Player 2 takes the center, Player 1 cannot force a win.",
  },
  {
    question: "Why is Tic-Tac-Toe fundamental in artificial intelligence and computer science?",
    answer:
      "Tic-Tac-Toe is the universal benchmark used to teach the Minimax algorithm and alpha-beta pruning in artificial intelligence. Because its entire decision tree can be evaluated in milliseconds, it serves as the foundational stepping stone for understanding game tree traversal in Chess and Go.",
  },
  {
    question: "What happens if Player 1 opens in the center square?",
    answer:
      "Opening in the center allows Player 2 to easily force a draw by simply claiming any corner square. Statistically, corner openings yield higher win rates against human opponents because center openings offer fewer viable fork configurations.",
  },
  {
    question: "What cognitive skills does playing Tic-Tac-Toe develop?",
    answer:
      "Tic-Tac-Toe trains foundational game theory, deductive backward induction, adversarial threat evaluation, and geometric symmetry recognition.",
  },
];

export default function TicTacToePage() {
  return (
    <>
      <GameSEO
        name="Tic-Tac-Toe – Classic Game Theory AI"
        description="Challenge our AI in classic Tic-Tac-Toe. Learn the mathematical corner traps and fork strategies that guarantee you never lose."
        url="https://www.cpsspeedtest.com/tic-tac-toe"
        faqs={ticTacToeFaqs}
        howToSteps={ticTacToeHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Master solved game theory and Minimax decision trees, learn unbeatable corner opening fork traps, exercise adversarial threat analysis, and test your skills against intelligent AI."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Solved Zero-Sum Game Theory Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Tic-Tac-Toe Online
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Play against intelligent AI. Learn the mathematical corner traps, master fork setups, and discover why optimal play always results in a draw.
          </p>
        </header>

        {/* Interactive Tic-Tac-Toe Component */}
        <TicTacToe />

        {/* Section 1: What is Tic-Tac-Toe? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is Tic-Tac-Toe in Game Theory?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Tic-Tac-Toe</strong> (also known as <em>Noughts and Crosses</em> or <em>Xs and Os</em>) is a two-player zero-sum game played on a 3x3 grid. In mathematics and computer science, it is classified as a <strong>solved game</strong> with a proven theoretical draw: neither player can force a victory if both sides choose optimal moves. Mastery of the game involves exploiting sub-optimal opponent placements to construct unblockable two-way <strong>fork traps</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Game Classification</span>
                <span className="text-lg font-black text-primary">Solved Zero-Sum</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Theoretical outcome: Draw</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Possible Game States</span>
                <span className="text-lg font-black text-amber-500">255,168 Games</span>
                <span className="text-xs text-muted-foreground block mt-0.5">26,830 unique symmetries</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Optimal Move 1</span>
                <span className="text-lg font-black text-emerald-500">Corner Opening</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Maximizes fork potential</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Play and Never Lose at Tic-Tac-Toe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ticTacToeHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Play Tic-Tac-Toe? Strategic Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive &amp; Strategic Benefits of Tic-Tac-Toe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Brain className="w-4 h-4" />
                  Backward Induction Thinking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Backward induction involves reasoning backward in time from the endgame to determine an optimal initial action. Mastering Tic-Tac-Toe instills this foundational game theory mindset used in business negotiations and economics.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Cpu className="w-4 h-4" />
                  Understanding Artificial Intelligence Trees
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Playing against an unbeatable AI demonstrates Minimax recursive algorithms. Players observe how automated decision systems evaluate utility scores and prune suboptimal branches in real time.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Defensive Parity &amp; Risk Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When moving second, your objective shifts from forcing a win to maintaining defensive parity. This teaches patience, threat identification, and the discipline to secure a guaranteed draw rather than risking an overextended loss.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  Geometric Rotational Symmetry
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Top-left and bottom-right corners are functionally identical due to 90-degree rotational symmetry. Recognizing equivalent board states trains spatial transformation skills in abstract mathematics.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — The Unbeatable Fork Trap */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            The Corner Opening Fork Strategy Matrix
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Turn #</th>
                  <th className="p-3">Player 1 (X) Move</th>
                  <th className="p-3">Player 2 (O) Response</th>
                  <th className="p-3">Board Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Turn 1 &amp; 2</td>
                  <td className="p-3 text-emerald-400 font-semibold">Claim any Corner (e.g., Top-Left)</td>
                  <td className="p-3 text-rose-400 font-semibold">Takes any Edge or Adjacent Corner</td>
                  <td className="p-3">Fatal blunder by Player 2 (P1 victory guaranteed)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Turn 3 &amp; 4</td>
                  <td className="p-3 text-primary font-semibold">Claim Opposite Diagonal Corner</td>
                  <td className="p-3 text-amber-400">Forced to block P1&apos;s 2-in-a-row</td>
                  <td className="p-3">Sets up unblockable two-way fork on Turn 5</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Turn 5</td>
                  <td className="p-3 text-emerald-400 font-bold">Claim remaining corner to complete Fork</td>
                  <td className="p-3">Can only block one of two threats</td>
                  <td className="p-3 text-emerald-400 font-bold">Player 1 wins on Turn 7</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Defensive Parity</td>
                  <td className="p-3 text-emerald-400 font-semibold">Claim any Corner</td>
                  <td className="p-3 text-cyan-400 font-bold">Takes EXACT Center Cell</td>
                  <td className="p-3 text-cyan-400 font-bold">Neutralizes fork; guaranteed Draw</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Tic-Tac-Toe Player Skill Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Novice Tapper</div>
              <div className="text-2xl font-black text-foreground">Casual Guessing</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Opens on edge squares randomly. Fails to notice opponent two-in-a-row threats and falls into simple corner forks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Competent Tactician</div>
              <div className="text-2xl font-black text-primary">Draws vs Easy AI</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Consistently blocks opponent three-in-a-row completions and takes the center square when defending corner openings.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Fork Master</div>
              <div className="text-2xl font-black text-amber-500">100% Win vs Humans</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Executes multi-directional corner traps flawlessly when moving first. Punishes any non-center defensive response.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Minimax Perfection</div>
              <div className="text-2xl font-black text-rose-500">Unbeatable Draw</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Plays with mathematical game-tree perfection. Never loses a single game as either Player 1 or Player 2 against any opponent.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Rules to Never Lose at Tic-Tac-Toe
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Always Move in Corners First</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Opening in a corner creates 3 potential three-in-a-row avenues (one row, one column, one diagonal). Edge squares only create 2 potential lines.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Take the Center When Defending</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If your opponent takes a corner on Move 1, taking the center is the ONLY legal defense that prevents a guaranteed loss. Never take an edge square on Move 2.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Counter Opposite Corner Traps with Edges</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If Player 1 holds two opposite corners and you hold the center, place your next mark on an EDGE, not a corner. This forces Player 1 to defend rather than set up a fork.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Block First, Attack Second</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Before executing an offensive plan, scan the entire 3x3 matrix for opponent two-in-a-row lines. An unblocked opponent line ends the game immediately.
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
            {ticTacToeFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Logic &amp; Strategy Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/connect-the-dots"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Dots and Boxes</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/minesweeper"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Minesweeper</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/2048"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">2048 Puzzle</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/sudoku"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Classic Sudoku</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
