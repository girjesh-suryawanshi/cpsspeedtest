import { GameSEO } from "@/components/game-seo";
import { Game2048 } from "@/components/games/2048";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2048 - Classic Number Merge Puzzle | CpsSpeedTest",
  description: "Play the classic 2048 puzzle game. Slide tiles, merge numbers, and try to reach the legendary 2048 tile!",
};

export default function Page2048() {
  return (
    <>
      <GameSEO 
        name="2048"
        description="Play the classic 2048 puzzle game. Slide tiles, merge numbers, and try to reach the legendary 2048 tile!"
        url="https://www.cpsspeedtest.com/2048"
        faqs={[
  {
    "question": "What is 2048?",
    "answer": "Play the classic 2048 puzzle game. Slide tiles, merge numbers, and try to reach the legendary 2048 tile!"
  },
  {
    "question": "How do I play 2048?",
    "answer": "You can play 2048 directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          2048
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Merge the numbers to reach the ultimate 2048 tile! A classic logic puzzle loved by students worldwide.
        </p>
      </div>

      <div className="py-8">
        <Game2048 />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>How to Play 2048</h2>
        <p>
          2048 is a surprisingly deep logic puzzle that requires planning and strategy.
        </p>
        <h3>Rules & Tips</h3>
        <ul>
          <li><strong>Move:</strong> Use your Arrow Keys to slide all tiles in that direction.</li>
          <li><strong>Merge:</strong> When two tiles with the same number touch, they merge into one!</li>
          <li><strong>Strategy:</strong> Try to keep your highest number tile in one of the corners. This prevents it from getting stuck in the middle of the board!</li>
        </ul>
      </div>
    </div>
    </>
  );
}
