import { GameSEO } from "@/components/game-seo";
import { TicTacToe } from "@/components/games/tic-tac-toe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe - Play Against AI Online | CpsSpeedTest",
  description: "Play classic Tic-Tac-Toe (Noughts and Crosses) against computer AI. Test your corner opening strategies and fork traps in your browser.",
  keywords: ['tic-tac-toe', 'noughts and crosses', 'tic tac toe online', 'play vs ai', 'strategy game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/tic-tac-toe',
  },
};

const ticTacToeFaqs = [
  {
    question: "Is there a guaranteed winning strategy in Tic-Tac-Toe?",
    answer: "Tic-Tac-Toe is a mathematically solved zero-sum game. When both players play optimally, the game always ends in a draw. However, seizing corners first creates fork opportunities against non-optimal opponents."
  },
  {
    question: "What is a 'fork' in Tic-Tac-Toe?",
    answer: "A fork occurs when a player creates two simultaneous, unblocked winning threats (two lines of two marks). The opposing player can only block one threat, ensuring a win on the subsequent turn."
  },
  {
    question: "Can I play Tic-Tac-Toe on mobile devices?",
    answer: "Yes, the 3x3 interactive board supports responsive touch inputs across smartphones, tablets, and desktop mice with instant state evaluation."
  }
];

export default function TicTacToePage() {
  return (
    <>
      <GameSEO 
        name="Tic-Tac-Toe"
        description="Play the classic game of Tic-Tac-Toe against the computer. Can you outsmart the AI?"
        url="https://www.cpsspeedtest.com/tic-tac-toe"
        faqs={ticTacToeFaqs}
        category="BoardGame"
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
