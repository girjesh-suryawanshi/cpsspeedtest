import { GameSEO } from "@/components/game-seo";
import { Cupcake2048 } from "@/components/cupcake-2048";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Cake, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Cupcake 2048 – Merge Dessert Tiles & Corner Anchor Strategy | CpsSpeedTest',
  description: 'Play Cupcake 2048 free online. Slide matching delicious cupcakes to combine treats, unlock rare pastries, and master corner-anchor 2048 strategies.',
  keywords: ['cupcake 2048', 'cupcake 2048 game', '2048 dessert edition', 'play cupcake 2048', 'sliding tile puzzle', 'merge cupcakes', 'cupcake puzzle online'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/cupcake-2048',
  },
  openGraph: {
    title: 'Cupcake 2048 – Merge Delicious Pastries Online',
    description: 'Slide and combine decadent cupcakes to unlock the ultimate dessert. Master monotonic chain and corner-anchor tile strategies.',
    url: 'https://www.cpsspeedtest.com/cupcake-2048',
    type: 'website',
  },
};

const cupcake2048Faqs = [
  {
    question: "How does Cupcake 2048 differ from classic numerical 2048?",
    answer: "Cupcake 2048 uses the exact mathematical mechanics of Gabriele Cirulli's 2048, but replaces plain numerical values (2, 4, 8, 16... 2048) with progressively elaborate, handcrafted dessert illustrations (from simple Vanilla and Chocolate cupcakes up to Rainbow Confetti and the Golden Cupcake). Merging two identical cupcakes creates the next higher confection in the recipe tree."
  },
  {
    question: "What is the most reliable strategy to reach the 2048 Cupcake?",
    answer: "The 'Corner Anchor' strategy is essential. Pick one corner (e.g., Bottom-Right) and pledge never to move your highest-tier cupcake away from that tile. By restricting your movement to only three directions (Down, Right, and Left) and never pressing Up unless forced, you maintain a monotonic descending chain of cupcakes that easily merge into your anchor."
  },
  {
    question: "What is the spawn probability of new cupcakes after each slide?",
    answer: "Identical to original 2048, whenever you slide the board, a new pastry spawns in a random unoccupied cell: 90% of spawns produce the tier-1 cupcake (Vanilla), while 10% spawn the tier-2 cupcake (Chocolate)."
  },
  {
    question: "What causes a Game Over in Cupcake 2048?",
    answer: "A loss occurs when all 16 grid cells are completely occupied and no two adjacent cupcakes share the same tier horizontally or vertically, leaving zero legal merge slides available."
  },
  {
    question: "Can I play Cupcake 2048 with swipe controls on mobile?",
    answer: "Yes, the game board supports responsive touch gestures (swiping up, down, left, right) on mobile devices, as well as arrow keys and WASD on desktop keyboards."
  }
];

export default function Cupcake2048Page() {
  return (
    <>
      <GameSEO 
        name="Cupcake 2048"
        description="Slide and combine delicious cupcakes to create new confections. Play Cupcake 2048 online and master the corner-anchor strategy."
        url="https://www.cpsspeedtest.com/cupcake-2048"
        faqs={cupcake2048Faqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Cake className="w-3.5 h-3.5" />
            <span>Pastry Merge &amp; Sliding Tile Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Cupcake 2048
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A delightful, confectionery twist on the legendary 2048 puzzle. Slide matching cupcakes together, build monotonic chains, and unlock the ultimate 2048 dessert.
          </p>
        </header>

        {/* Cupcake 2048 Interactive Component */}
        <div className="py-2">
          <Cupcake2048 />
        </div>

        {/* ── Section 1: The Mathematics of Sliding Merges (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematics of 2048: Powers of Two &amp; Monotonic Order
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              While <strong>Cupcake 2048</strong> features charming dessert graphics, its underlying engine is governed by strict binary combinatorics. Reaching the final 2048 Cupcake requires executing exactly 1,024 successful merges of Tier-1 cupcakes without ever filling the 16-cell board into a gridlock.
            </p>
            <p>
              In computer science, winning strategies for sliding-block games rely on creating <strong>monotonic matrix gradients</strong>: arranging tiles so that values strictly decrease as you move away from your anchor corner (e.g., Corner = 1024 → 512 → 256 → 128). This geometric gradient ensures that newly formed cupcakes cascade naturally into higher-tier confections like falling dominoes.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Pastry Chef Ranks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Cupcake 2048 Performance Tiers &amp; Score Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How high can you build your bakery empire? Compare your final score and unlocked dessert tiers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🧁</div>
                <div className="font-bold text-foreground">Under 3,000 Pts</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Apprentice Baker</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Reaches the 128 or 256 cupcake. Moves the board in all 4 directions randomly, leading to premature board gridlock.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🍰</div>
                <div className="font-bold text-foreground">3,000 – 7,999 Pts</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Pastry Chef (512)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistently unlocks the 512 Red Velvet Cupcake. Uses basic corner positioning with occasional emergency recovery slides.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎂</div>
                <div className="font-bold text-foreground">8,000 – 19,999 Pts</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Master Confectioner (1024)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Unlocks the 1024 tier. Disciplined 3-direction control with clean monotonic snake lines along the bottom row.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">20,000+ Pts</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Pastry Chef (2048+)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% elite victory. Unlocks the mythical 2048 Rainbow Cupcake with flawless corner anchoring and spatial foresight.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: The Golden Corner Anchor Strategy ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                The 3-Direction Rule: Never Press Up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                To consistently win Cupcake 2048, follow these strict tactical rules:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Anchor Bottom-Right:</strong> Keep your largest cupcake locked in the bottom-right corner at all times.
                </li>
                <li>
                  <strong className="text-foreground">The 3-Direction Rule:</strong> Only slide <strong>DOWN</strong>, <strong>RIGHT</strong>, and occasionally <strong>LEFT</strong>. Never press UP, because pressing UP allows a low-tier Vanilla cupcake to spawn beneath your highest-value dessert.
                </li>
                <li>
                  <strong className="text-foreground">Pack the Bottom Row:</strong> Keep the bottom four cells completely packed with high-value treats so that sliding left and right does not dislodge your anchor cupcake.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Puzzle &amp; Logic Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Exercise spatial planning and deductive strategy across our puzzle collection:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/2048" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Classic 2048</span>
                  <span className="text-primary font-mono">Original Number Puzzle →</span>
                </Link>
                <Link href="/sliding-puzzle" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sliding Puzzle</span>
                  <span className="text-primary font-mono">15-Tile Order Challenge →</span>
                </Link>
                <Link href="/sudoku" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Sudoku</span>
                  <span className="text-primary font-mono">9x9 Deductive Grid →</span>
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
              Frequently Asked Questions About Cupcake 2048
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {cupcake2048Faqs.map((faq, index) => (
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
