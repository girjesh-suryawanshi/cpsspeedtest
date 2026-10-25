import { GameSEO } from "@/components/game-seo";
import { Game2048 } from "@/components/games/2048";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2048 - Classic Number Merge Puzzle | CpsSpeedTest",
  description: "Play the classic 2048 puzzle game online. Slide tiles, merge identical numbers, and master corner positioning strategy to reach the 2048 tile.",
  keywords: ['2048 game', 'number puzzle', 'merge tiles', '2048 online', 'math puzzle game', '2048 strategy'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/2048' },
};

const faqs2048 = [
  {
    question: "What is the optimal strategy to reach the 2048 tile?",
    answer: "The most effective technique is the corner strategy: choose one corner (usually bottom-right or bottom-left) to anchor your highest number tile and never move it away from that corner. Chain descending numbers along that edge so subsequent merges naturally cascade into your anchor tile."
  },
  {
    question: "What causes a game over in 2048?",
    answer: "A game over occurs when all 16 board tiles are filled and no adjacent tiles share identical values in any direction, leaving zero legal moves."
  },
  {
    question: "Can you continue playing after reaching 2048?",
    answer: "Yes, reaching the 2048 tile completes the primary objective, but you can continue merging toward 4096, 8192, and beyond to achieve the highest possible numerical score."
  }
];

export default function Page2048() {
  return (
    <>
      <GameSEO 
        name="2048"
        description="Play the classic 2048 puzzle game online. Slide tiles, merge identical numbers, and master corner positioning strategy to reach the 2048 tile."
        url="https://www.cpsspeedtest.com/2048"
        faqs={faqs2048}
        category="PuzzleGame"
      />
      <div className="container max-w-4xl py-8 space-y-8 animate-in fade-in duration-300">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            2048 Puzzle
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Slide tiles with arrow keys or swipes. When two tiles with the same number touch, they merge into one. Plan your moves to construct the legendary 2048 tile.
          </p>
        </div>

        <div className="py-4">
          <Game2048 />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
          <h2>Rules & Proven Strategy for 2048</h2>
          <p>
            Originally created in 2014, 2048 is a mathematical sliding puzzle played on a 4x4 grid. Each turn, a new tile (valued 2 or 4) spawns in an empty spot.
          </p>
          <h3>Key Tactical Principles:</h3>
          <ul>
            <li><strong>Pick One Corner Anchor:</strong> Never press the opposite direction of your chosen corner. If your anchor is bottom-right, strictly use Down, Right, and occasional Left strokes—avoid pressing Up.</li>
            <li><strong>Build a Monotonic Row:</strong> Ensure the bottom row forms a descending sequence (e.g., 512 &gt; 256 &gt; 128 &gt; 64). This prevents lower numbers from getting trapped behind your anchor.</li>
            <li><strong>Keep Your Anchor Row Filled:</strong> Keep all 4 tiles in your anchor row occupied to prevent new random spawns from taking the corner spot.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
