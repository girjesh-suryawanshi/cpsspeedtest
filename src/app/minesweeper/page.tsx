import { Minesweeper } from "@/components/games/minesweeper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minesweeper - Classic Logic Puzzle | CpsSpeedTest",
  description: "Play classic Minesweeper in your browser. Use logic to clear the board without detonating any hidden bombs!",
};

export default function MinesweeperPage() {
  return (
    <div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Minesweeper
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The legendary logic puzzle. Clear the board by using numbers to deduce where the mines are hidden.
        </p>
      </div>

      <div className="py-8">
        <Minesweeper />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>How to Play Minesweeper</h2>
        <p>
          Minesweeper is a logic puzzle game where your goal is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them.
        </p>
        <h3>The Rules</h3>
        <ul>
          <li><strong>Numbers:</strong> A revealed cell with a number tells you exactly how many mines are adjacent to it (including diagonally).</li>
          <li><strong>Flags:</strong> If you are certain a cell contains a mine, right-click (or use flag mode on mobile) to place a flag on it.</li>
          <li><strong>Winning:</strong> You win by revealing all the cells that do NOT contain a mine!</li>
        </ul>
      </div>
    </div>
  );
}
