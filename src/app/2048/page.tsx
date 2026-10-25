import { GameSEO } from "@/components/game-seo";
import { Game2048 } from "@/components/games/2048";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Grid3X3, Trophy, Activity, Compass, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 – Play Classic Number Merge Puzzle Online & Strategy Guide | CpsSpeedTest",
  description: "Play the classic 2048 sliding number puzzle online. Master the corner anchor strategy, understand spawn probabilities, maintain monotonicity, and reach the 2048 tile.",
  keywords: ['2048 game', '2048 online', 'play 2048', '2048 strategy', 'number merge puzzle', '2048 corner trick'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/2048' },
};

const faqs2048 = [
  {
    question: "What is the single most effective strategy to reach the 2048 tile?",
    answer: "The 'Corner Anchor' strategy: pick one corner of the board (e.g., bottom-right) and never move your highest tile out of that spot. Restrict your inputs to three directions (Down, Right, and Left) while strictly avoiding the opposite direction (Up). This keeps your highest tile locked in position."
  },
  {
    question: "What are the spawn probabilities for new tiles in 2048?",
    answer: "Every time you make a move that shifts at least one tile, a new tile spawns in a randomly selected empty cell. The game engine assigns a 90% probability of spawning a '2' and a 10% probability of spawning a '4'."
  },
  {
    question: "What is the theoretical maximum tile achievable in 2048?",
    answer: "On a standard 4x4 grid, the absolute mathematical ceiling is the 131,072 tile (2^17). Achieving this requires filling all 16 tiles in perfect descending order without a single misplacement, resulting in a maximum possible game score of 3,932,156 points."
  },
  {
    question: "Can you continue playing after reaching the 2048 tile?",
    answer: "Yes! Reaching 2048 is technically the primary victory condition, but the game permits endless play, allowing you to merge toward 4096, 8192, and beyond until no legal moves remain."
  }
];

export default function Page2048() {
  return (
    <>
      <GameSEO 
        name="2048 – Classic Number Merge Puzzle"
        description="Play the classic 2048 sliding number puzzle online. Master the corner anchor strategy, understand spawn probabilities, maintain monotonicity, and reach the 2048 tile."
        url="https://www.cpsspeedtest.com/2048"
        faqs={faqs2048}
        category="PuzzleGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>The Iconic 2014 Mathematical Sliding Puzzle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            2048 Puzzle
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Slide tiles with arrow keys or swipes. When two identical numbers collide, they merge into their sum. Plan your trajectory, anchor your highest tile, and reach the legendary 2048 tile.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <div className="py-2">
          <Game2048 />
        </div>

        {/* ── Section 1: History & How 2048 Works (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Origins of 2048: The Viral Weekend Project of Gabriele Cirulli
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In March 2014, 19-year-old Italian developer <strong>Gabriele Cirulli</strong> coded 2048 over a single weekend as a coding exercise, posting the open-source code on GitHub. Within a week, the game went viral, capturing over <strong>4 million visitors in seven days</strong> and sparking a worldwide mathematical puzzle phenomenon.
            </p>
            <p>
              The rules are elegantly minimalist:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>The 4×4 Grid:</strong> 16 cells where powers of 2 (2, 4, 8, 16, 32...) slide in unison in the chosen cardinal direction.</li>
              <li><strong>Binary Fusion:</strong> Adjacent tiles with identical values fuse into their double (e.g., 64 + 64 = 128).</li>
              <li><strong>Random Spawn:</strong> After every legal slide, a new tile appears in an empty slot (90% chance of a &apos;2&apos;, 10% chance of a &apos;4&apos;).</li>
              <li><strong>Game Over Condition:</strong> The grid completely fills with zero adjacent matching tiles, leaving zero legal moves.</li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 2: Advanced Strategy: The Corner Anchor & Monotonicity ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              The Corner Anchor Method &amp; Monotonic Snake Rows
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Randomly sliding tiles in all four directions will quickly crowd your grid and scatter high-value tiles. To reliably conquer 2048, implement the two core heuristics used by AI solvers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">1. Choose One Anchor Corner (Never Break the Rule)</h4>
                <p className="text-xs text-muted-foreground">
                  Pick one corner (e.g., bottom-left) and declare it the permanent home of your highest tile. Once settled, <strong>never press the UP arrow</strong>! Pressing Up forces your highest tile out of the corner, allowing a stray &apos;2&apos; to spawn underneath and ruin your cascade.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h4 className="font-bold text-foreground text-sm">2. Maintain Monotonicity (Descending Value Chains)</h4>
                <p className="text-xs text-muted-foreground">
                  Arrange tiles in strictly descending numerical order along your anchor row (e.g., 512 &gt; 256 &gt; 128 &gt; 64). When a new 64 is merged, it triggers an instantaneous chain reaction that cascades all the way into the 512 to produce a 1024!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Score Benchmarks & Milestone Matrix (GEO Table) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              2048 Score Benchmarks &amp; Tile Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wondering how your maximum tile ranks against global players? Here is the progression distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">512 Tile</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual Player (~5,000 pts)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Achieved easily by anyone with basic awareness of tile merging and spatial clustering.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">1024 Tile</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate (~10,000 pts)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">The threshold where random sliding fails. Requires adopting a basic corner anchoring mindset.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏆</div>
                <div className="font-bold text-foreground">2048 Tile</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Official Victor (~20,000 pts)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">True victory milestone. Requires maintaining clean monotonic descending rows without jamming.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">4096 – 8192+</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster (40,000+ pts)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% puzzle master tier. Demands flawless secondary row building and advanced space recovery.</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Looking for more mathematical puzzle action? Solve the classic <Link href="/minesweeper" className="text-primary hover:underline font-semibold">Minesweeper</Link> or test your arithmetic speed on <Link href="/math-dash" className="text-primary hover:underline font-semibold">Math Dash</Link>.
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
              {faqs2048.map((faq, index) => (
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
