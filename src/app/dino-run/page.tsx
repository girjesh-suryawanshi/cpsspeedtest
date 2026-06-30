import { GameSEO } from "@/components/game-seo";
import { DinoRun } from "@/components/games/dino-run";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dino Run - Classic Endless Runner | CpsSpeedTest",
  description: "Play the legendary offline Dino Run game in your browser! Jump over obstacles and set a new high score.",
  keywords: ['dino run', 'dinosaur game', 'endless runner', 'chrome dino', 'offline game'],
  alternates: { canonical: '/dino-run' },
};

export default function DinoRunPage() {
  return (
    <>
      <GameSEO 
        name="Dino Run"
        description="Play the legendary offline Dino Run game in your browser! Jump over obstacles and set a new high score."
        url="https://www.cpsspeedtest.com/dino-run"
        faqs={[
  {
    "question": "What is Dino Run?",
    "answer": "Play the legendary offline Dino Run game in your browser! Jump over obstacles and set a new high score."
  },
  {
    "question": "How do I play Dino Run?",
    "answer": "You can play Dino Run directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Dino Run
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The legendary "No Internet" game. Keep jumping to survive and beat your high score!
        </p>
      </div>

      <div className="py-8">
        <DinoRun />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>About Dino Run</h2>
        <p>
          Originally created as an Easter egg in Google Chrome to entertain users when they lost their internet connection, the endless running T-Rex game has become a massive cultural icon, especially among students!
        </p>
        <h3>How to Play</h3>
        <ul>
          <li><strong>Jump:</strong> Press the Spacebar, Up Arrow, or tap the game screen to make the Dino jump.</li>
          <li><strong>Timing:</strong> The game speeds up as you go. Focus on the gap between obstacles to time your jumps perfectly.</li>
        </ul>
      </div>
    </div>
    </>
  );
}
