import { GameSEO } from "@/components/game-seo";
import { WordMaster } from "@/components/games/word-master";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Master - Free 5-Letter Word Guessing Game | CpsSpeedTest",
  description: "Play Word Master, the popular 5-letter word deduction game. Test your vocabulary and deductive reasoning across 6 attempts with color-coded hints.",
  keywords: ["word master", "wordle alternative", "word game", "vocabulary game", "brain training", "5 letter word guess"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/word-master',
  },
};

const wordMasterFaqs = [
  {
    question: "What do the tile colors mean in Word Master?",
    answer: "Green indicates the letter is in the target word and in the exact position. Yellow indicates the letter exists in the word but belongs in a different position. Gray signifies the letter does not appear anywhere in the target word."
  },
  {
    question: "What are effective opening words for 5-letter puzzles?",
    answer: "Optimal opening words feature high-frequency vowels and common consonants (e.g., CRANE, SLATE, AUDIO, or ROAST). These words maximize information entropy to eliminate unpromising candidates on attempt 1."
  },
  {
    question: "Can duplicate letters appear in the secret word?",
    answer: "Yes, words may contain duplicate letters (such as 'SPEED' or 'APPLE'). If you guess a word with two instances of a letter when only one exists, only one tile will show yellow or green."
  }
];

export default function WordMasterPage() {
  return (
    <>
      <GameSEO 
        name="Word Master"
        description="Play Word Master, the popular 5-letter word guessing game. Test your vocabulary and deductive reasoning in 6 tries."
        url="https://www.cpsspeedtest.com/word-master"
        faqs={wordMasterFaqs}
        category="WordGame"
      />
<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Word Master</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Can you guess the hidden 5-letter word in 6 tries? Test your vocabulary!
          </p>
        </div>

        <WordMaster />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Word Master</h2>
            <p className="text-muted-foreground leading-relaxed">
              Word Master is a fun and challenging vocabulary game. Your goal is to deduce a hidden 5-letter word within six attempts using color-coded hints. It's excellent for improving spelling and verbal reasoning.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>Guess the Word in 6 tries.</li>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>After each guess, the color of the tiles will change to show how close your guess was.</li>
              <li><strong className="text-green-500">Green</strong>: The letter is in the word and in the correct spot.</li>
              <li><strong className="text-yellow-500">Yellow</strong>: The letter is in the word but in the wrong spot.</li>
              <li><strong className="text-gray-500">Gray</strong>: The letter is not in the word in any spot.</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
    </>
  );
}
