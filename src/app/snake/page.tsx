import { GameSEO } from "@/components/game-seo";
import { SnakeGame } from "@/components/games/snake";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Snake Game - Retro Arcade Online | CpsSpeedTest",
  description: "Play the legendary Classic Snake arcade game online. Navigate the grid, collect apples, grow your snake, and avoid running into walls or your tail.",
  keywords: ['snake game', 'classic snake', 'retro arcade', 'nokia snake', 'browser snake game'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/snake' },
};

const snakeFaqs = [
  {
    question: "What are the controls for Classic Snake?",
    answer: "On desktop, steer the snake using Arrow Keys or WASD. On mobile or touchscreen devices, swipe in the direction you want the snake to turn."
  },
  {
    question: "How is the score calculated in Snake?",
    answer: "Each consumed apple adds 10 points to your score and extends your snake by one body segment. Your personal best is automatically recorded in your browser's local storage."
  },
  {
    question: "What is the optimal pathing strategy for high scores in Snake?",
    answer: "The safest strategy as the snake grows is the Hamiltonian cycle or zig-zag pattern: sweep back and forth across the grid in rows. This leaves an escape lane along the border, preventing the snake from trapping its own head."
  }
];

export default function SnakePage() {
  return (
    <>
      <GameSEO 
        name="Classic Snake Game"
        description="Play the legendary Classic Snake arcade game online. Navigate the grid, collect apples, grow your snake, and avoid running into walls or your tail."
        url="https://www.cpsspeedtest.com/snake"
        faqs={snakeFaqs}
        category="ArcadeGame"
      />
      <div className="container max-w-4xl py-8 space-y-8 animate-in fade-in duration-300">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Classic Snake
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The timeless retro arcade experience. Steer your snake, consume food, and navigate carefully as each bite increases your body length.
          </p>
        </div>

        <div className="py-4">
          <SnakeGame />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
          <h2>Origins and Strategy for Classic Snake</h2>
          <p>
            First introduced in the 1976 arcade game <em>Blockade</em> and popularized globally on Nokia mobile devices in the late 1990s, Snake remains a masterclass in spatial risk management.
          </p>
          <h3>Tactical Guidance:</h3>
          <ul>
            <li><strong>Keep an Escape Route:</strong> Never dive directly into a pocket surrounded by your body segments unless you can see a guaranteed exit path.</li>
            <li><strong>Embrace Edge Hugging:</strong> Hug the outer borders early in the game to preserve the open center for maneuvering during high-speed turns.</li>
            <li><strong>Control Pacing:</strong> Keep your fingers lightly resting on WASD or arrow keys to make quick directional pivots without delay.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
