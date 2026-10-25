import { GameSEO } from "@/components/game-seo";
import { DinoRun } from "@/components/games/dino-run";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dino Run - Classic Endless Runner Online | CpsSpeedTest",
  description: "Play the legendary offline Dino Run game in your browser! Jump over cacti and pterodactyls, time your leaps, and set a new personal high score.",
  keywords: ['dino run', 'dinosaur game', 'endless runner', 'chrome dino offline', 'arcade runner'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/dino-run' },
};

const dinoRunFaqs = [
  {
    question: "What are the controls for Dino Run?",
    answer: "Press the Spacebar or Up Arrow key on desktop, or tap the game screen on mobile and touchscreens to make the dinosaur jump over obstacles."
  },
  {
    question: "How does the game speed increase over time?",
    answer: "The runner starts at a baseline scrolling speed and accelerates continuously as your survival distance increases. Obstacle spacing tightens, demanding quicker reflex response."
  },
  {
    question: "How is the high score recorded?",
    answer: "Your highest distance reached is automatically recorded in your browser's local storage so you can challenge your personal best in future sessions."
  }
];

export default function DinoRunPage() {
  return (
    <>
      <GameSEO 
        name="Dino Run"
        description="Play the legendary offline Dino Run game in your browser! Jump over obstacles and set a new high score."
        url="https://www.cpsspeedtest.com/dino-run"
        faqs={dinoRunFaqs}
        category="ArcadeGame"
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
