import { GameSEO } from "@/components/game-seo";
import { Cupcake2048 } from "@/components/cupcake-2048";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Cake, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Cupcake 2048 – Merge Dessert Tiles & Corner Anchor Strategy | CpsSpeedTest',
  description: 'Play Cupcake 2048 free online. Slide matching delicious cupcakes to combine treats, unlock rare pastries, and master corner-anchor 2048 strategies.',
  keywords: ['cupcake 2048', 'cupcake 2048 game', '2048 dessert edition', 'play cupcake 2048', 'sliding tile puzzle', 'merge cupcakes', 'cupcake puzzle online', 'corner anchor 2048 strategy'],
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

const cupcake2048HowToSteps = [
  {
    name: "Understand the Pastry Merge Mechanics",
    text: "Slide the 4x4 grid in four directions (Up, Down, Left, Right). Two identical cupcakes colliding merge into the next higher confection in the recipe tree."
  },
  {
    name: "Select Your Dedicated Corner Anchor",
    text: "Commit early to anchoring your highest-tier pastry permanently in one corner (e.g., Bottom-Right) and pledge never to move it away."
  },
  {
    name: "Enforce a Three-Direction Movement Rule",
    text: "Restrict your directional slides to only three keys (e.g., Down, Right, and Left). Avoid pressing the fourth direction (Up) unless forced."
  },
  {
    name: "Maintain Monotonic Descending Chains",
    text: "Organize your cupcakes in descending order along the anchored wall (e.g. 1024 → 512 → 256 → 128), making chain-reaction merges effortless."
  },
  {
    name: "Manage the 90/10 Pastry Spawn Rate",
    text: "Every slide spawns a new tier-1 Vanilla (90%) or tier-2 Chocolate (10%) cupcake in an empty slot. Keep open cells available."
  },
  {
    name: "Unlock the Legendary 2048 Cupcake",
    text: "Continue merging cascading pairs until you successfully bake the ultimate Golden 2048 Cupcake to achieve victory."
  }
];

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
  },
  {
    question: "How does playing 2048 variants exercise cognitive planning and working memory?",
    answer: "Cupcake 2048 requires lookahead tree planning. Players must calculate the cascading consequences of board shifts 3 to 5 moves in advance, exercising the dorsolateral prefrontal cortex and spatial working memory."
  },
  {
    question: "Can you continue playing after creating the 2048 Cupcake?",
    answer: "Yes! Reaching the 2048 confection unlocks endless bonus play, allowing you to chase the mythical 4096 and 8192 super-desserts and maximize your overall high score."
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
        howToSteps={cupcake2048HowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Cake className="w-3.5 h-3.5" />
            <span>Tile Merging &amp; Monotonic Chains</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Cupcake 2048
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Slide and combine matching dessert tiles to bake delicious new confections. Master the corner-anchor strategy and reach the legendary 2048 Cupcake.
          </p>
        </header>

        {/* Interactive Cupcake 2048 Component */}
        <div className="py-2">
          <Cupcake2048 />
        </div>

        {/* ── Section 1: Mathematics of 2048 Merging (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Mathematical Mechanics of Monotonic Tile Merging
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Cupcake 2048 is a tile-sliding optimization puzzle based on powers of two (2ⁿ) and binary tree reduction, adapted from Gabriele Cirulli&apos;s 2014 viral open-source phenomenon. Operating on a 4×4 grid of 16 cells, every legal slide collapses identical adjacent confections into the next recipe tier (2ᵏ + 2ᵏ = 2ᵏ⁺¹). The mathematical key to victory is maintaining a monotonic descending gradient toward an anchored corner.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">16 Cells</div>
                <div className="text-xs text-muted-foreground">4x4 Matrix Frame</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">90% / 10%</div>
                <div className="text-xs text-muted-foreground">Tier 1 vs Tier 2 Spawns</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">11 Merges</div>
                <div className="text-xs text-muted-foreground">Required to Reach 2048</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">20,000+</div>
                <div className="text-xs text-muted-foreground">Target Win Score</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because moving in four chaotic directions fragments high-tier pastries across opposite sides of the board, skilled players restrict moves to a strict 3-directional set (e.g. Down, Right, Left), trapping their master cupcake in a protected corner pocket.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Win Cupcake 2048 in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cupcake2048HowToSteps.map((step, idx) => (
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
                Dorsolateral Working Memory &amp; Lookahead
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Evaluating how an Up or Left slide will shift all 16 tiles simultaneously requires holding multi-step spatial transformations in working memory, strengthening executive cognitive lookahead.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Strategic Invariant Preservation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Preserving the corner anchor despite tempting short-term merges trains long-term strategic impulse control, resisting sub-optimal micro-rewards for grand strategic victory.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Probabilistic Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every slide introduces random tile placement (90% tier-1, 10% tier-2). Managing empty cell density trains players to make decisions that minimize catastrophic failure states under uncertainty.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Pattern Recognition &amp; Visual Chunking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Recognizing paired confections and cascading merger chains at a glance trains the ventral visual stream, building rapid visual categorization skills.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Dessert Recipe Hierarchy ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Cupcake 2048 Dessert Hierarchy &amp; Binary Equivalents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Pastry Tier</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Confection Style</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Binary Value (2ⁿ)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Merge Score Awarded</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Spawn / Crafting Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 1</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">Vanilla Cupcake</td>
                    <td className="py-2.5 px-3 font-mono">2¹ = 2</td>
                    <td className="py-2.5 px-3">0 Points</td>
                    <td className="py-2.5 px-3 text-emerald-500 font-semibold">90% Natural Spawn</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 2</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">Chocolate Cupcake</td>
                    <td className="py-2.5 px-3 font-mono">2² = 4</td>
                    <td className="py-2.5 px-3 font-mono">+4 pts</td>
                    <td className="py-2.5 px-3 text-blue-500 font-semibold">10% Natural Spawn</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 4</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">Strawberry Cupcake</td>
                    <td className="py-2.5 px-3 font-mono">2⁴ = 16</td>
                    <td className="py-2.5 px-3 font-mono">+16 pts</td>
                    <td className="py-2.5 px-3">Merge 2 Chocolate Tiers</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 7</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">Red Velvet Pastry</td>
                    <td className="py-2.5 px-3 font-mono">2⁷ = 128</td>
                    <td className="py-2.5 px-3 font-mono">+128 pts</td>
                    <td className="py-2.5 px-3">Intermediate Milestone</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 10</td>
                    <td className="py-2.5 px-3 font-bold text-foreground">Rainbow Confetti</td>
                    <td className="py-2.5 px-3 font-mono">2¹⁰ = 1024</td>
                    <td className="py-2.5 px-3 font-mono">+1,024 pts</td>
                    <td className="py-2.5 px-3 text-purple-500 font-semibold">Penultimate Pastry</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Tier 11</td>
                    <td className="py-2.5 px-3 font-bold text-amber-500">Golden 2048 Cupcake</td>
                    <td className="py-2.5 px-3 font-mono">2¹¹ = 2048</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-foreground">+2,048 pts</td>
                    <td className="py-2.5 px-3 text-amber-500 font-bold">VICTORY GOAL 🏆</td>
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
              Cupcake 2048 High Score &amp; Tier Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating your strategic tile control and highest confection reached:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Tier 128 – 256</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Baker</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Slides in all 4 directions randomly. Highest cupcake gets dislodged into center cells, causing rapid board gridlock.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Tier 512 – 1024</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Pastry Strategist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Adopts corner anchoring. Avoids pressing the forbidden direction most of the time, reaching the penultimate 1024 pastry.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">2048 Cupcake</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Master Confectioner</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistently reaches the 2048 goal. Flawlessly maintains descending chains and recovers from forced bad slides.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">4096+ Cupcake</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% elite player. Masters complex serpentine wall snake chains, achieving 40,000+ points in endless mode.
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
              4 Golden Rules to Never Lose Cupcake 2048
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Pick One Corner and Never Leave It
                </div>
                <p className="text-xs leading-relaxed">
                  If you pick the bottom-right corner, your highest-value pastry must live in that exact square. If it floats into the middle of the board, your chances drop by 80%.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Keep the Home Row Completely Full
                </div>
                <p className="text-xs leading-relaxed">
                  Ensure all 4 cells along your bottom anchor row are constantly occupied. A gap in that row might force your anchor tile to slide sideways on a lateral move.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Build Descending &ldquo;Snake&rdquo; Chains
                </div>
                <p className="text-xs leading-relaxed">
                  Line up your tiles so that 1024 is adjacent to 512, which touches 256, then 128. When you merge an upgrade, it cascades like falling dominoes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Resist Tempting Small Merges
                </div>
                <p className="text-xs leading-relaxed">
                  Never ruin your orderly wall structure just to combine two tiny Vanilla cupcakes on the opposite side of the screen. Keep long-term architecture intact.
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

        {/* ── Section 8: Related Cognitive & Logic Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Number &amp; Strategy Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your spatial planning, tile manipulation, and algorithmic reasoning across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/2048" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">2048 Classic</span>
                <span className="text-xs text-muted-foreground mt-1">Numerical binary merge &amp; corner anchor →</span>
              </Link>
              <Link href="/sliding-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sliding Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Permutation parity &amp; 15-puzzle →</span>
              </Link>
              <Link href="/make-24" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Make 24</span>
                <span className="text-xs text-muted-foreground mt-1">Combinatorial 4-card arithmetic →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
