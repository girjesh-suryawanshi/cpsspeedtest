import { GameSEO } from "@/components/game-seo";
import { SnakeGame } from "@/components/games/snake";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Gamepad2, Trophy, Activity, Compass, CheckCircle2,
  HelpCircle, ArrowRight, TrendingUp, Sparkles, Award,
  ShieldCheck, Route, Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Snake Game – Play Retro Arcade Online & Strategy Guide | CpsSpeedTest",
  description:
    "Play the legendary Classic Snake arcade game online. Master the mathematical Hamiltonian cycle, learn zig-zag S-curve pathing, understand collision mechanics, and beat your high score.",
  keywords: [
    "snake game",
    "classic snake",
    "retro arcade",
    "nokia snake online",
    "browser snake game",
    "hamiltonian cycle snake",
    "snake game strategy",
    "play snake online free",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/snake" },
  openGraph: {
    title: "Classic Snake Game – Play Retro Arcade Online",
    description: "Play classic Snake in your browser. Master Hamiltonian cycles, zig-zag pathing, and chase your high score.",
    url: "https://www.cpsspeedtest.com/snake",
    type: "website",
  },
};

const snakeHowToSteps = [
  {
    name: "Initialize the game grid",
    text: "Click 'Start Game' or press any Arrow Key to set the snake into motion across the 20x20 cell arena.",
  },
  {
    name: "Steer using Arrow Keys or WASD",
    text: "Direct the snake toward the glowing food pellet (apple). On mobile or tablet, swipe in the desired direction.",
  },
  {
    name: "Grow your snake with each consumed pellet",
    text: "Each apple consumed awards 10 points and appends one segment to your snake's tail, increasing its length.",
  },
  {
    name: "Avoid wall collisions and self-bites",
    text: "Crashing into the outer boundary walls or intersecting your own body triggers an immediate game over.",
  },
  {
    name: "Adopt S-curve zig-zag pathing in the mid-game",
    text: "As your tail lengthens past 20 segments, weave across columns in tight S-curves to compact your body and preserve open space.",
  },
  {
    name: "Execute the tail-chasing loop in tight emergencies",
    text: "If trapped inside a coiled loop of your own body, steer directly behind your tail tip—every tick, the space behind it clears.",
  },
];

const snakeFaqs = [
  {
    question: "What is the history and origin of the Snake game?",
    answer:
      "Snake originated in October 1976 as the arcade game 'Blockade', designed by Gremlin Industries. It achieved worldwide cultural ubiquity in December 1997 when Nokia engineer Taneli Armanto programmed 'Snake' as a pre-installed title on the Nokia 6110 handset. It is recognized by the Guinness World Records as the most widely played mobile game in history, embedded on over 400 million handsets worldwide.",
  },
  {
    question: "What are the optimal controls for playing Snake on desktop?",
    answer:
      "On desktop keyboards, steer using either the Arrow Keys or WASD. Our game engine incorporates an input queue buffer that registers directional turns on each discrete grid tick, preventing accidental self-collision when executing lightning-fast double turns.",
  },
  {
    question: "Can you beat the Snake game by filling the entire screen?",
    answer:
      "Yes! A standard 20x20 grid contains 400 total cells. If your snake achieves 400 segments without colliding with a wall or its own body, you achieve a perfect theoretical victory. This is mathematically achieved using a Hamiltonian cycle.",
  },
  {
    question: "What is a Hamiltonian Cycle in Snake game theory?",
    answer:
      "In graph theory, a Hamiltonian cycle is a closed loop through a graph that visits every vertex (grid cell) exactly once before returning to the start. By tracing a pre-planned Hamiltonian cycle across the 20x20 grid, a player or algorithm can guarantee a 100% win rate without ever getting trapped, regardless of where food pellets spawn.",
  },
  {
    question: "What is the 'Tail Chasing' survival rule in Snake?",
    answer:
      "If you find yourself trapped inside a coiled loop of your own body, steer your head directly behind your tail segment. Because the tail moves forward on every tick, the cell directly behind it is guaranteed to clear, opening a dynamic escape corridor.",
  },
  {
    question: "What cognitive skills does playing Snake exercise?",
    answer:
      "Snake actively trains visuospatial planning, mental path projection, and inhibitory motor control. Players must anticipate how their growing body will restrict future movement corridors 10 to 20 moves in advance.",
  },
  {
    question: "Does the snake's speed increase as the score rises?",
    answer:
      "Yes. The tick duration gradually decreases every 50 points, subtly accelerating the snake's velocity. This ramps up cognitive pressure, requiring tighter reaction reflexes and automated hand-eye coordination in the endgame.",
  },
];

export default function SnakePage() {
  return (
    <>
      <GameSEO
        name="Classic Snake Game"
        description="Play the legendary Classic Snake arcade game online. Learn the mathematical Hamiltonian cycle strategy, master S-curve zig-zag pathing, and beat your high score."
        url="https://www.cpsspeedtest.com/snake"
        faqs={snakeFaqs}
        howToSteps={snakeHowToSteps}
        category="ArcadeGame"
        lastUpdated="October 2026"
        benefits="Exercise visuospatial trajectory planning, master mathematical Hamiltonian cycles, enhance reflex reaction under accelerating speed, and enjoy retro arcade nostalgia."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Nokia 6110 Retro Arcade Classic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Classic Snake Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Eat apples, grow your tail, and avoid crashing into walls or your own body. Learn Hamiltonian cycle strategy and chase your personal best score.
          </p>
        </header>

        {/* Interactive Game Component */}
        <SnakeGame />

        {/* Section 1: What is Snake? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Classic Snake Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Classic Snake</strong> is an iconic arcade video game where the player maneuvers a growing line that becomes a primary obstacle to itself. First introduced in 1976 and immortalized globally on Nokia handsets in 1997, the game challenges your spatial foresight: every food item consumed adds to your length and score, steadily constricting the available navigable cells on the 20x20 grid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Grid Matrix</span>
                <span className="text-lg font-black text-primary">20 x 20 Cells</span>
                <span className="text-xs text-muted-foreground block mt-0.5">400 total grid tiles</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Points Per Apple</span>
                <span className="text-lg font-black text-amber-500">10 Points</span>
                <span className="text-xs text-muted-foreground block mt-0.5">+1 body segment per food</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Max Theoretical Score</span>
                <span className="text-lg font-black text-emerald-500">3,990 Points</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Full Hamiltonian board fill</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Play and Survive Longer in Snake
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {snakeHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Play Snake? Real-World Cognitive Gains */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Cognitive Benefits of Playing Classic Snake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Compass className="w-4 h-4" />
                  Forward Spatial Projection
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Novices look only at the food; masters project the future coordinates of their tail 15 ticks ahead. Playing Snake trains proactive spatial forecasting, an essential skill in driving, chess, and software systems design.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Zap className="w-4 h-4" />
                  Accelerated Microsecond Reflexes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                As the game ticks faster, reaction windows narrow from 150ms down to sub-80ms. Executing tight 90-degree corner turns without wall collision hones high-velocity neuromuscular reflexes.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <ShieldCheck className="w-4 h-4" />
                  Crisis Management &amp; Path Recovery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Finding yourself boxed into a corner by your own tail produces sudden panic. Mastering the &quot;tail-chasing escape loop&quot; instills calm analytical poise under high-stress gaming situations.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Route className="w-4 h-4" />
                  Algorithmic Route Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Applying Hamiltonian cycles introduces players to graph traversal concepts used in computer science, robotics, circuit board routing, and autonomous logistics dispatch.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Hamiltonian Cycle & S-Curve Geometry */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Snake Pathing Strategies: Zig-Zag vs Hamiltonian Cycle
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Strategy</th>
                  <th className="p-3">Survival Reliability</th>
                  <th className="p-3">Average Completion Time</th>
                  <th className="p-3">Core Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Greedy Direct Pathing</td>
                  <td className="p-3 text-rose-400 font-semibold">Low (Traps around 100 pts)</td>
                  <td className="p-3 text-emerald-400 font-bold">Fast (Direct sprints)</td>
                  <td className="p-3">Always takes shortest path to food; inevitably traps own head</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">S-Curve Perimeter Weaving</td>
                  <td className="p-3 text-primary font-semibold">High (Reaches 200–300 pts)</td>
                  <td className="p-3 text-primary font-bold">Medium</td>
                  <td className="p-3">Serpentines across columns, keeping tail compacted along borders</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Full Hamiltonian Cycle</td>
                  <td className="p-3 text-emerald-400 font-semibold">100% Guaranteed Win</td>
                  <td className="p-3 text-amber-400 font-bold">Slow (Fixed loop)</td>
                  <td className="p-3">Traverses every cell in an unbroken loop; mathematically unlosable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Classic Snake Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Casual Player</div>
              <div className="text-2xl font-black text-foreground">50 – 120 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Applies greedy direct pathing. Experiences accidental wall or tail collisions as snake length surpasses 12 segments.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Skilled Arcade Gamer</div>
              <div className="text-2xl font-black text-primary">130 – 240 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Competent perimeter control. Weaves through open spaces cleanly and navigates medium-speed acceleration easily.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Retro Veteran</div>
              <div className="text-2xl font-black text-amber-500">250 – 380 Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 5% global ranking. Employs S-curve compaction and tail-chasing escapes on a crowded board with over 30 segments.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Hamiltonian Master</div>
              <div className="text-2xl font-black text-rose-500">400+ Pts</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fills the entire 20x20 arena with a solid body mass, achieving the legendary complete board victory.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Tips to Beat Your Snake High Score
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Hug the Perimeter Walls</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Always return to the perimeter wall after snatching an apple in the center. Encircling the board keeps the central territory open for safe maneuvers.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Never Double Back on Yourself</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Avoid making immediate 180-degree U-turns in narrow corridors. If you are moving right, don&apos;t turn down and immediately left unless you have at least 3 tiles of clearance.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Follow Your Tail Tip</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    When cornered with no obvious exit, steer your head directly behind your retreating tail. As long as you follow the tail at equal speed, you cannot crash into it.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Compact with S-Weaves</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    When crossing from one side of the arena to the other, weave up and down adjacent columns like an accordion. This occupies minimal horizontal space.
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
            {snakeFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Arcade Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Classic Arcade Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/2048"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">2048 Puzzle</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dino-run"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Chrome Dino Run</span>
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
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
