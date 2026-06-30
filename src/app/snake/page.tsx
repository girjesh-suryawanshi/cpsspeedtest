import { GameSEO } from "@/components/game-seo";
import { SnakeGame } from "@/components/games/snake";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Snake Game - Retro Arcade | CpsSpeedTest",
  description: "Play the legendary Classic Snake game in your browser! Eat the apples, grow your snake, and don't hit the walls.",
  keywords: ['snake game', 'classic snake', 'retro arcade', 'nokia snake', 'browser game'],
  alternates: { canonical: '/snake' },
};

export default function SnakePage() {
  return (
    <>
      <GameSEO 
        name="Classic Snake Game"
        description="Play the legendary Classic Snake game in your browser! Eat the apples, grow your snake, and don"
        url="https://www.cpsspeedtest.com/snake"
        faqs={[
  {
    "question": "What is Classic Snake Game?",
    "answer": "Play the legendary Classic Snake game in your browser! Eat the apples, grow your snake, and don"
  },
  {
    "question": "How do I play Classic Snake Game?",
    "answer": "You can play Classic Snake Game directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Classic Snake
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The retro arcade legend. Guide the snake to eat the food, but be careful not to crash into your own growing tail!
        </p>
      </div>

      <div className="py-8">
        <SnakeGame />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>About Snake</h2>
        <p>
          Originating in the late 1970s and made massively popular by Nokia mobile phones in the 1990s, Snake is a true classic.
        </p>
        <h3>How to Play</h3>
        <ul>
          <li><strong>Controls:</strong> Use WASD or your Arrow Keys to change direction.</li>
          <li><strong>Goal:</strong> Eat the red apples to increase your score and length.</li>
          <li><strong>Danger:</strong> Running into the walls or your own tail results in an instant Game Over!</li>
        </ul>
      </div>
    </div>
    </>
  );
}
