import { GameSEO } from "@/components/game-seo";
import { SnakeGame } from "@/components/games/snake";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Gamepad2, Trophy, Activity, Compass, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Snake Game – Play Retro Arcade Online & Strategy Guide | CpsSpeedTest",
  description: "Play the legendary Classic Snake arcade game online. Learn the mathematical Hamiltonian cycle strategy, master S-curve zig-zag pathing, and beat your high score.",
  keywords: ['snake game', 'classic snake', 'retro arcade', 'nokia snake online', 'browser snake game', 'hamiltonian cycle snake'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/snake' },
};

const snakeFaqs = [
  {
    question: "What are the optimal controls for Classic Snake?",
    answer: "On desktop keyboards, steer the snake using Arrow Keys or WASD. On mobile or touchscreen tablets, swipe in the direction you want the snake to turn. Your directional inputs are queued per grid tick to prevent accidental self-collision."
  },
  {
    question: "How is the score calculated in Classic Snake?",
    answer: "Each consumed food pellet (apple) awards 10 points and adds one body segment to the snake. As your score increases, the snake moves slightly faster, demanding tighter reaction timing."
  },
  {
    question: "Can you beat the Snake game by filling the entire screen?",
    answer: "Yes! A 20x20 grid contains 400 total cells. If your snake achieves 400 segments without colliding with a wall or its own body, you achieve a perfect theoretical victory. This is accomplished using a mathematical Hamiltonian cycle."
  },
  {
    question: "What is the 'Tail Chasing' survival rule in Snake?",
    answer: "If you find yourself trapped inside a coiled loop of your own body, steer your head directly behind your tail segment. Because the tail moves forward every tick, the cell directly behind it is guaranteed to clear, opening an escape corridor."
  }
];

export default function SnakePage() {
  return (
    <>
      <GameSEO 
        name="Classic Snake Game"
        description="Play the legendary Classic Snake arcade game online. Learn the mathematical Hamiltonian cycle strategy, master S-curve zig-zag pathing, and beat your high score."
        url="https://www.cpsspeedtest.com/snake"
        faqs={snakeFaqs}
        category="ArcadeGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Timeless 1997 Nokia Arcade Classic</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Classic Snake Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The quintessential retro arcade challenge. Steer your snake, consume food pellets, grow your body, and navigate an increasingly crowded grid without crashing into walls or yourself.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <div className="py-2">
          <SnakeGame />
        </div>

        {/* ── Section 1: History & Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              History of Snake: From 1976 Arcades to the Nokia Revolution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>Snake</strong> concept first surfaced in the monochrome 1976 arcade game <em>Blockade</em>, developed by Gremlin Industries. However, it achieved worldwide cultural ubiquity in 1997 when Nokia engineer <strong>Taneli Armanto</strong> embedded a custom version onto the <strong>Nokia 6110</strong> mobile phone.
            </p>
            <p>
              Underneath its simple surface lies a brilliant exercise in <strong>spatial risk management and graph theory</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Continuous Forward Momentum:</strong> Unlike turn-based puzzles, the snake cannot halt. It moves forward one grid cell per clock tick.</li>
              <li><strong>The Growth Dilemma:</strong> Each consumed item extends the body by one cell, decreasing the remaining maneuverable surface area of the grid.</li>
              <li><strong>Self-Obstruction:</strong> As the snake exceeds 50+ segments, your past navigational decisions become lethal physical barriers that restrict future movement.</li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 2: Mathematical Strategy: The Hamiltonian Cycle ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              Advanced Strategy: The Hamiltonian Cycle &amp; Zig-Zag Pathing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              In discrete mathematics and graph theory, a <strong>Hamiltonian Cycle</strong> is a closed loop through a graph that visits every vertex (grid cell) exactly once before returning to the start.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-xs sm:text-sm space-y-2">
              <p className="font-bold text-primary">📐 The Indestructible Snake Algorithm:</p>
              <p>
                If a grid has an even number of rows or columns (such as our 20x20 grid), a Hamiltonian cycle is mathematically guaranteed to exist. By sweeping back and forth in horizontal &quot;S-curves&quot; and leaving one dedicated vertical column open as a return highway along the left edge, the snake will <strong>never trap its own head</strong>, guaranteeing a 100% win rate if followed strictly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">1. The S-Curve Switchback</h4>
                <p className="text-xs text-muted-foreground">
                  Traverse rows like a comb. Move across the width, drop down one row, and sweep back. Keep your tail directly behind you to prevent dead ends.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">2. The Dedicated Return Highway</h4>
                <p className="text-xs text-muted-foreground">
                  Never fill the outermost border column. Reserve column 0 as an unobstructed express corridor to sprint from bottom to top safely.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Score Benchmarks (GEO Tier Table) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Classic Snake Score Tiers &amp; Length Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wondering how your high score compares? Here is how scores rank based on apple count (10 points per apple):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">0 – 150 Pts</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Beginner (&lt;15 Apples)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Typical for early games where players rush food directly without planning an escape trajectory.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">160 – 350 Pts</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Intermediate (16–35 Apples)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Solid spatial awareness. The player understands how to loop around their own tail when turning.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐆</div>
                <div className="font-bold text-foreground">360 – 650 Pts</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced (36–65 Apples)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Snake covers over 25% of the board. Requires disciplined zig-zag pathing and edge hugging.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐉</div>
                <div className="font-bold text-foreground">660+ Pts</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Snake Master (66+ Apples)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Legendary tier. Requires executing full Hamiltonian cycle discipline on an ultra-crowded board.</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Looking for another classic arcade reflex challenge? Play the offline <Link href="/dino-run" className="text-primary hover:underline font-semibold">Dino Run</Link> or test your clicking frequency on the <Link href="/cps-test" className="text-primary hover:underline font-semibold">CPS Speed Test</Link>.
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
              {snakeFaqs.map((faq, index) => (
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
