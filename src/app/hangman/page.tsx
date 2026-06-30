import { Hangman } from "@/components/games/hangman";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hangman - Free Online Word Guessing Game | CPS Test",
  description: "Play the classic game of Hangman online. Guess the hidden word letter by letter before you run out of attempts.",
  keywords: ["hangman", "word game", "guessing game", "vocabulary game", "online hangman"],
};

export default function HangmanPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Hangman</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guess the hidden word before it's too late! Test your vocabulary and deductive skills.
          </p>
        </div>

        <Hangman />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Hangman</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hangman is a classic paper-and-pencil guessing game. The goal is to figure out a hidden word by guessing its letters one at a time. It's a great way to build vocabulary, practice spelling, and improve pattern recognition.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>You will see a series of blank spaces representing the letters in a secret word.</li>
              <li>Guess a letter using the on-screen keyboard or your physical keyboard.</li>
              <li>If the letter is in the word, it will be revealed in its correct position(s).</li>
              <li>If the letter is NOT in the word, a part of the "hangman" figure is drawn.</li>
              <li>You win if you guess the entire word before the drawing is complete (6 mistakes).</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
