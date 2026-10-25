import { GameSEO } from "@/components/game-seo";
import { Sudoku } from "@/components/games/sudoku";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Sudoku Free Online - Logic Number Grid Puzzle | CpsSpeedTest",
  description: "Play free online Sudoku with multiple difficulty tiers. Exercise logical deduction, pencil marking, and grid elimination in your browser.",
  keywords: ["sudoku", "online sudoku", "logic puzzle", "number puzzle", "brain training", "deductive reasoning"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/sudoku',
  },
};

const sudokuFaqs = [
  {
    question: "What are the fundamental rules of Sudoku?",
    answer: "A standard 9x9 Sudoku grid requires placing digits 1 through 9 such that each digit appears exactly once in every row, column, and 3x3 non-overlapping block without repetition."
  },
  {
    question: "Does solving Sudoku require arithmetic or math?",
    answer: "No. Although digits 1-9 are traditionally used, Sudoku is purely a game of deductive logic and spatial elimination. Letters, symbols, or distinct colors could mathematically substitute for the numbers."
  },
  {
    question: "What basic techniques help beginners solve cells?",
    answer: "Scanning rows and columns for 'naked singles' (cells with only one candidate remaining) and 'hidden singles' (digits that can only fit in one specific cell within a block) solves most introductory boards."
  }
];

export default function SudokuPage() {
  return (
    <>
      <GameSEO 
        name="Play Sudoku Free Online"
        description="Play free online Sudoku. Exercise your brain, improve logical reasoning, and solve challenging number puzzles."
        url="https://www.cpsspeedtest.com/sudoku"
        faqs={sudokuFaqs}
        category="BrainGame"
      />
<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Sudoku</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The classic logic-based number placement puzzle. Challenge your brain!
          </p>
        </div>

        <Sudoku />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Sudoku</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sudoku is one of the most popular logic-based puzzles in the world. It requires no math skills—just logical deduction and pattern recognition. It's a fantastic brain exercise that can help improve memory, concentration, and cognitive speed.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>The board is a 9x9 grid, divided into nine 3x3 blocks.</li>
              <li>You must fill the empty squares with numbers from 1 to 9.</li>
              <li>Each number (1-9) can only appear <strong>once</strong> in each row.</li>
              <li>Each number (1-9) can only appear <strong>once</strong> in each column.</li>
              <li>Each number (1-9) can only appear <strong>once</strong> in each 3x3 block.</li>
              <li>Use the on-screen keypad or your keyboard (1-9) to input numbers.</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
    </>
  );
}
