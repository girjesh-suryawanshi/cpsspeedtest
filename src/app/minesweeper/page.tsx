import { GameSEO } from "@/components/game-seo";
import { Minesweeper } from "@/components/games/minesweeper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minesweeper - Classic Deduction Logic Puzzle | CpsSpeedTest",
  description: "Play classic Minesweeper in your browser. Use numerical deduction and spatial probability to clear the minefield without detonating hidden bombs.",
  keywords: ['minesweeper', 'minesweeper online', 'classic minesweeper', 'logic puzzle', 'deduction game'],
  alternates: { canonical: 'https://www.cpsspeedtest.com/minesweeper' },
};

const minesweeperFaqs = [
  {
    question: "How do the numbers in Minesweeper work?",
    answer: "Each revealed number indicates exactly how many mines are located within the eight adjacent surrounding cells (orthogonally and diagonally). A '1' touching an unopened cell means that cell is guaranteed to be a mine if all other neighbors are cleared."
  },
  {
    question: "What is the 1-2-1 pattern in Minesweeper?",
    answer: "A 1-2-1 sequence along an unopened straight wall indicates that mines are situated behind each '1', while the cell behind the '2' is completely safe to open."
  },
  {
    question: "How do you place flags on mobile touchscreens?",
    answer: "On desktop, right-click to place a flag. On mobile touchscreens, toggle the Flag Mode button in the game header to switch tap actions between clearing and flagging."
  }
];

export default function MinesweeperPage() {
  return (
    <>
      <GameSEO 
        name="Minesweeper"
        description="Play classic Minesweeper in your browser. Use numerical deduction and spatial probability to clear the minefield without detonating hidden bombs."
        url="https://www.cpsspeedtest.com/minesweeper"
        faqs={minesweeperFaqs}
        category="PuzzleGame"
      />
      <div className="container max-w-4xl py-8 space-y-8 animate-in fade-in duration-300">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Minesweeper Logic Puzzle
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deduce the locations of all hidden mines using surrounding numerical clues. Clear every safe square to claim victory.
          </p>
        </div>

        <div className="py-4">
          <Minesweeper />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
          <h2>Deduction Principles for Minesweeper</h2>
          <p>
            Minesweeper is a pure deductive logic puzzle that rewards methodical pattern recognition and probability calculation.
          </p>
          <h3>Core Solving Strategies:</h3>
          <ul>
            <li><strong>The 1-1 Pattern:</strong> When a '1' shares its mystery cells with an adjacent '1', any mystery cells extending beyond that shared boundary are guaranteed safe.</li>
            <li><strong>Chording:</strong> Once you have flagged all mines adjacent to a numbered square, clicking that number will automatically reveal all remaining adjacent unflagged cells.</li>
            <li><strong>Corner Reductions:</strong> Corners with a '1' have only 3 potential neighbors. Isolate corners first to establish safe anchor paths into the board center.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
