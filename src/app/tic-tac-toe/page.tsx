import { GameSEO } from "@/components/game-seo";
import { TicTacToe } from "@/components/games/tic-tac-toe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Grid, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe – Play Online vs AI & Game Theory Strategy Guide | CpsSpeedTest",
  description: "Play classic Tic-Tac-Toe (Noughts and Crosses) against intelligent AI. Master solved game theory, corner openings, and unbeatable fork trap strategies.",
  keywords: ['tic-tac-toe', 'noughts and crosses', 'tic tac toe online', 'play vs ai', 'strategy game', 'game theory tic tac toe', 'how to win tic tac toe', 'minimax game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/tic-tac-toe',
  },
  openGraph: {
    title: "Tic-Tac-Toe – Play vs AI & Master Game Theory",
    description: "Challenge our AI in classic Tic-Tac-Toe. Learn the mathematical corner traps and fork strategies that guarantee you never lose.",
    url: 'https://www.cpsspeedtest.com/tic-tac-toe',
    type: 'website',
  },
};

const ticTacToeFaqs = [
  {
    question: "Is there a guaranteed winning strategy in classic Tic-Tac-Toe?",
    answer: "Tic-Tac-Toe is mathematically classified as a 'solved game'. Under optimal play from both participants, the theoretical outcome is always a draw (cat's game). However, if you move first and open in a corner, any opponent who fails to respond by taking the exact center square can be forced into an unblockable fork trap that guarantees a win."
  },
  {
    question: "What is a 'fork' in Tic-Tac-Toe game theory?",
    answer: "A fork is a tactical board state where a player creates two simultaneous, unblocked two-in-a-row threats on a single turn. Because the defending opponent can only place one mark to block on their subsequent move, the attacking player is guaranteed to complete their three-in-a-row on the following turn."
  },
  {
    question: "How many total possible game states exist on a 3x3 grid?",
    answer: "There are 255,168 possible games of Tic-Tac-Toe (taking turn order into account). However, when accounting for geometric rotational and reflective symmetries across the board, there are only 26,830 unique games and just 138 terminal board outcomes."
  },
  {
    question: "What is the best defense if your opponent opens with a corner?",
    answer: "If Player 1 places an X in any corner, Player 2 MUST place an O in the exact center square. Taking an edge or an adjacent corner allows Player 1 to set up an unavoidable fork on move 3."
  },
  {
    question: "Why is Tic-Tac-Toe fundamental in artificial intelligence?",
    answer: "Tic-Tac-Toe is the classic toy problem used to teach the Minimax algorithm and alpha-beta pruning in computer science. Because its entire decision tree can be evaluated in milliseconds, it serves as the foundation for modern AI game engines in chess and Go."
  }
];

export default function TicTacToePage() {
  return (
    <>
      <GameSEO 
        name="Tic-Tac-Toe"
        description="Play classic Tic-Tac-Toe against the computer AI. Master solved game theory, corner openings, and fork traps."
        url="https://www.cpsspeedtest.com/tic-tac-toe"
        faqs={ticTacToeFaqs}
        category="BoardGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Zero-Sum Game Theory &amp; Minimax Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Tic-Tac-Toe
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The world&apos;s quintessential strategic game of Noughts and Crosses. Challenge our computer AI, execute lethal fork traps, and explore solved combinatorial game theory.
          </p>
        </header>

        {/* Tic-Tac-Toe Interactive Game */}
        <div className="py-2">
          <TicTacToe />
        </div>

        {/* ── Section 1: Solved Game Theory & The Minimax Theorem (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Game Theory: Why Tic-Tac-Toe is a Solved Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In mathematics, <strong>Tic-Tac-Toe</strong> (known as <em>Noughts and Crosses</em> in the UK and <em>X&apos;s and O&apos;s</em> worldwide) is classified as a <strong>two-player zero-sum game with perfect information</strong>. Because no hidden elements or randomized dice rolls exist, every future board position can be computed deterministically from the very first move.
            </p>
            <p>
              Under John von Neumann&apos;s <em>Minimax Theorem</em>, if both Player 1 and Player 2 select mathematically optimal moves, the game is guaranteed to end in a draw. However, against human opponents and imperfect AI bots, opening with a corner square creates severe tactical vulnerabilities that force opponent blunders.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Strategy Guide: The Unbeatable Corner Fork ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              How to Win Every Game: The Corner Opening Trap
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              When playing first (as X), follow this exact decision tree to force a win or an honorable draw:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="text-2xl">1️⃣</div>
                <div className="font-bold text-foreground">Turn 1: Take Any Corner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Always place your first mark in a corner (Top-Left, Top-Right, Bottom-Left, or Bottom-Right). This single move controls three distinct winning lines.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="text-2xl">2️⃣</div>
                <div className="font-bold text-foreground">Turn 2: Trap Their Response</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If your opponent plays anywhere <em>except</em> the center, take another corner. You now threaten two separate winning trajectories simultaneously.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="text-2xl">3️⃣</div>
                <div className="font-bold text-foreground">Turn 3: The Unblockable Fork</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your opponent can only block one of your two paths. Place your third mark in the open line to claim guaranteed victory.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Defensive Protocol (Playing Second as O) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Defensive Mastery: How Never to Lose as &apos;O&apos;
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                When moving second, your goal is to deny your opponent the ability to fork:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">If X Takes a Corner:</strong> You MUST place O in the center. If you place O anywhere else, X has a forced win.
                </li>
                <li>
                  <strong className="text-foreground">If X Takes the Center:</strong> Place O in any corner. Never play an edge on move 1.
                </li>
                <li>
                  <strong className="text-foreground">Prioritize Block Over Threat:</strong> Always block an opponent&apos;s two-in-a-row before attempting to construct your own offensive lines.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Strategic Logic Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Exercise combinatorial planning and predictive spatial reasoning across our brain training suite:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/minesweeper" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Minesweeper</span>
                  <span className="text-primary font-mono">Deductive Grid Strategy →</span>
                </Link>
                <Link href="/tower-of-hanoi" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Tower of Hanoi</span>
                  <span className="text-primary font-mono">Recursive Move Efficiency →</span>
                </Link>
                <Link href="/sudoku" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sudoku</span>
                  <span className="text-primary font-mono">9x9 Constraint Logic →</span>
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
              Frequently Asked Questions About Tic-Tac-Toe
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {ticTacToeFaqs.map((faq, index) => (
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
