"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Delete, RotateCcw, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// A small list of common 5 letter words
const WORDS = [
  "APPLE", "BRAIN", "CRANE", "DANCE", "EAGLE", "FLAME", "GRAPE", "HOUSE", "IMAGE", "JUICE",
  "KNIFE", "LEMON", "MOUSE", "NIGHT", "OCEAN", "PIZZA", "QUEEN", "RIVER", "SNAKE", "TRAIN",
  "VOICE", "WATER", "YOUTH", "ZEBRA", "GHOST", "PLANT", "HEART", "SMILE", "CLOUD", "BREAD",
  "LIGHT", "SOUND", "WORLD", "SPACE", "EARTH", "TRACK", "SMART", "LOGIC", "LEARN", "THINK"
];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"]
];

export function WordMaster() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [error, setError] = useState("");

  const startNewGame = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    setTargetWord(word);
    setGuesses([]);
    setCurrentGuess("");
    setError("");
    setGameState("playing");
  };

  const handleKeyPress = (key: string) => {
    if (gameState !== "playing") return;
    setError("");

    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        setError("Not enough letters");
        return;
      }
      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      setCurrentGuess("");

      if (currentGuess === targetWord) {
        setGameState("won");
      } else if (newGuesses.length === 6) {
        setGameState("lost");
      }
    } else if (key === "Backspace" || key === "Delete") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key;
      if (key === "Enter" || key === "Backspace" || key === "Delete") {
        handleKeyPress(key);
      } else if (/^[a-zA-Z]$/.test(key)) {
        handleKeyPress(key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameState, targetWord, guesses]);

  // Helper to determine letter status
  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (word[index] === targetWord[index]) return "correct";
    if (targetWord.includes(letter)) return "present";
    return "absent";
  };

  // Keyboard coloring
  const keyColors: Record<string, string> = {};
  guesses.forEach((guess) => {
    for (let i = 0; i < 5; i++) {
      const char = guess[i];
      const status = getLetterStatus(char, i, guess);
      
      // Don't downgrade a correct to a present if guessed again
      if (keyColors[char] === "correct") continue;
      
      if (status === "correct") keyColors[char] = "correct";
      else if (status === "present" && keyColors[char] !== "correct") keyColors[char] = "present";
      else if (status === "absent" && !keyColors[char]) keyColors[char] = "absent";
    }
  });

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <FileText className="w-8 h-8 text-primary" /> Word Master
        </CardTitle>
        <CardDescription className="text-lg">
          Guess the 5-letter word in 6 tries.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 flex flex-col items-center space-y-6">
        
        {gameState === "idle" && (
          <div className="py-10">
            <Button size="lg" onClick={startNewGame} className="font-bold text-xl rounded-full px-8 shadow-lg">
              <Play className="mr-2" /> Start Game
            </Button>
          </div>
        )}

        {gameState !== "idle" && (
          <div className="w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in">
            
            {/* Grid */}
            <div className="grid grid-rows-6 gap-2 w-[280px]">
              {Array.from({ length: 6 }).map((_, rowIndex) => {
                const isCurrentRow = rowIndex === guesses.length;
                const guess = isCurrentRow ? currentGuess : guesses[rowIndex] || "";

                return (
                  <div key={rowIndex} className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 5 }).map((_, colIndex) => {
                      const letter = guess[colIndex] || "";
                      let status = "";
                      
                      if (rowIndex < guesses.length) {
                        status = getLetterStatus(letter, colIndex, guess);
                      }

                      return (
                        <div
                          key={colIndex}
                          className={cn(
                            "w-12 h-12 flex items-center justify-center text-2xl font-bold uppercase border-2",
                            status === "correct" ? "bg-green-500 border-green-500 text-white" :
                            status === "present" ? "bg-yellow-500 border-yellow-500 text-white" :
                            status === "absent" ? "bg-muted border-muted text-muted-foreground" :
                            letter ? "border-primary/50 text-foreground" : "border-border text-transparent"
                          )}
                        >
                          {letter}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Error Message */}
            <div className="h-6 flex items-center justify-center">
              {error && <span className="text-destructive font-bold animate-pulse">{error}</span>}
              {gameState === "won" && <span className="text-green-500 font-bold text-xl">You Won! 🎉</span>}
              {gameState === "lost" && <span className="text-destructive font-bold text-xl">The word was {targetWord}</span>}
            </div>

            {/* Keyboard */}
            <div className="flex flex-col gap-2 w-full">
              {KEYBOARD_ROWS.map((row, i) => (
                <div key={i} className="flex justify-center gap-1 sm:gap-2">
                  {row.map((key) => {
                    const status = keyColors[key];
                    const isEnter = key === "Enter";
                    const isBack = key === "Backspace";

                    return (
                      <button
                        key={key}
                        onClick={() => handleKeyPress(key)}
                        className={cn(
                          "h-12 rounded flex items-center justify-center font-bold text-sm sm:text-base uppercase select-none transition-colors",
                          isEnter || isBack ? "px-2 sm:px-4 text-xs" : "flex-1 max-w-[40px]",
                          status === "correct" ? "bg-green-500 text-white hover:bg-green-600" :
                          status === "present" ? "bg-yellow-500 text-white hover:bg-yellow-600" :
                          status === "absent" ? "bg-muted text-muted-foreground hover:bg-muted/80" :
                          "bg-secondary/50 text-foreground hover:bg-secondary/80"
                        )}
                      >
                        {isBack ? <Delete className="w-5 h-5" /> : key}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Restart Button */}
            {(gameState === "won" || gameState === "lost") && (
              <Button size="lg" onClick={startNewGame} className="mt-4 font-bold w-full max-w-[200px]">
                <RotateCcw className="mr-2" /> Play Again
              </Button>
            )}

          </div>
        )}

      </CardContent>
    </Card>
  );
}
