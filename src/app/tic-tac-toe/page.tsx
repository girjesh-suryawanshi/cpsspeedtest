import { GameSEO } from "@/components/game-seo";
import { TicTacToe } from "@/components/games/tic-tac-toe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe - Play Against AI | CpsSpeedTest",
  description: "Play the classic game of Tic-Tac-Toe against the computer. Can you outsmart the AI?",
};

export default function TicTacToePage() {
  return (
    <>
      <GameSEO 
        name="Tic-Tac-Toe"
        description="Play the classic game of Tic-Tac-Toe against the computer. Can you outsmart the AI?"
        url="https://www.cpsspeedtest.com/tic-tac-toe"
        faqs={[
  {
    "question": "What is Tic-Tac-Toe?",
    "answer": "Play the classic game of Tic-Tac-Toe against the computer. Can you outsmart the AI?"
  },
  {
    "question": "How do I play Tic-Tac-Toe?",
    "answer": "You can play Tic-Tac-Toe directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Tic-Tac-Toe
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate classic time-killer. Play a quick game of Tic-Tac-Toe against our computer AI!
        </p>
      </div>

      <div className="py-8">
        <TicTacToe />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>About Tic-Tac-Toe</h2>
        <p>
          Also known as Noughts and Crosses, this is one of the oldest and most universally known games in the world. It is the perfect mini-game for a quick mental break.
        </p>
        <h3>Can you win?</h3>
        <p>
          Our AI plays semi-randomly, so there are definitely opportunities to trap it and score a win! Try setting up a fork (where you have two winning moves at once).
        </p>
      </div>
    </div>
    </>
  );
}
