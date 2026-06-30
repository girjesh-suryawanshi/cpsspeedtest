"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, RotateCcw, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const WORDS = [
  "EDUCATION", "COMPUTER", "SCIENCE", "LOGIC", "PUZZLE", "JAVASCRIPT", "REACT",
  "PROGRAMMING", "INTERNET", "WEBSITE", "ALGORITHM", "DEVELOPER", "DATABASE",
  "KEYBOARD", "MONITOR", "BROWSER", "VARIABLE", "FUNCTION", "COMPONENT"
];

const MAX_MISTAKES = 6;

export function Hangman() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [targetWord, setTargetWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  
  const mistakes = Array.from(guessedLetters).filter(l => !targetWord.includes(l)).length;

  const startNewGame = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    setTargetWord(word);
    setGuessedLetters(new Set());
    setGameState("playing");
  };

  const guess = (letter: string) => {
    if (gameState !== "playing") return;
    if (guessedLetters.has(letter)) return;

    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    // Check win/loss
    const newMistakes = Array.from(newGuessed).filter(l => !targetWord.includes(l)).length;
    
    if (newMistakes >= MAX_MISTAKES) {
      setGameState("lost");
    } else {
      // Check if all letters in word are guessed
      const isWon = targetWord.split("").every(char => newGuessed.has(char));
      if (isWon) {
        setGameState("won");
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;
      if (/^[a-zA-Z]$/.test(e.key)) {
        guess(e.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, guessedLetters, targetWord]);

  // Hangman SVG parts based on mistakes
  const parts = [
    // 1: Base & Pole
    <path key="pole" d="M10,290 L90,290 M50,290 L50,20 L150,20 L150,50" stroke="currentColor" strokeWidth="6" fill="none" />,
    // 2: Head
    <circle key="head" cx="150" cy="80" r="30" stroke="currentColor" strokeWidth="6" fill="none" />,
    // 3: Body
    <line key="body" x1="150" y1="110" x2="150" y2="190" stroke="currentColor" strokeWidth="6" />,
    // 4: Left Arm
    <line key="l-arm" x1="150" y1="130" x2="110" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />,
    // 5: Right Arm
    <line key="r-arm" x1="150" y1="130" x2="190" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />,
    // 6: Left Leg
    <line key="l-leg" x1="150" y1="190" x2="110" y2="250" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />,
    // 7: Right Leg (Game Over)
    <line key="r-leg" x1="150" y1="190" x2="190" y2="250" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  ];

  const visibleParts = parts.slice(0, mistakes + 1);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Brain className="w-8 h-8 text-primary" /> Hangman
        </CardTitle>
        <CardDescription className="text-lg">
          Guess the hidden word before you run out of tries!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-8 flex flex-col items-center">
        
        {gameState === "idle" && (
          <div className="py-12">
            <Button size="lg" onClick={startNewGame} className="font-bold text-xl rounded-full px-8 shadow-lg">
              <Play className="mr-2" /> Start Game
            </Button>
          </div>
        )}

        {gameState !== "idle" && (
          <div className="w-full flex flex-col items-center gap-8 animate-in fade-in">
            
            {/* Top Bar */}
            <div className="w-full max-w-md flex justify-between items-center bg-muted/30 px-6 py-4 rounded-xl border">
              <div className="text-lg font-bold">
                Mistakes: <span className="text-destructive ml-2 text-2xl">{mistakes}</span> / {MAX_MISTAKES}
              </div>
              <Button variant="outline" size="sm" onClick={startNewGame} className="font-bold">
                <RotateCcw className="mr-2 w-4 h-4" /> Restart
              </Button>
            </div>

            {/* Drawing & Word Area */}
            <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
              
              {/* SVG Drawing */}
              <div className="w-48 h-64 bg-muted/10 rounded-xl border-2 border-border/50 flex items-center justify-center shrink-0">
                <svg width="200" height="300" viewBox="0 0 300 300" className="text-foreground/80 scale-[0.6]">
                  {visibleParts}
                </svg>
              </div>

              {/* The Word */}
              <div className="flex flex-wrap gap-2 justify-center">
                {targetWord.split("").map((letter, i) => {
                  const isRevealed = guessedLetters.has(letter) || gameState === "lost";
                  const isMissed = gameState === "lost" && !guessedLetters.has(letter);
                  
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "w-10 h-12 md:w-12 md:h-16 border-b-4 flex items-center justify-center text-3xl md:text-4xl font-black uppercase transition-colors",
                        isMissed ? "text-destructive border-destructive" : "text-foreground border-primary"
                      )}
                    >
                      {isRevealed ? letter : ""}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* End Game Status */}
            {(gameState === "won" || gameState === "lost") && (
              <div className={cn(
                "w-full max-w-md p-6 rounded-2xl text-center shadow-lg border-2 animate-in zoom-in-95",
                gameState === "won" ? "bg-green-500/10 border-green-500/50" : "bg-destructive/10 border-destructive/50"
              )}>
                <h3 className={cn("text-3xl font-black mb-4", gameState === "won" ? "text-green-500" : "text-destructive")}>
                  {gameState === "won" ? "You Won! 🎉" : "Game Over"}
                </h3>
                <Button size="lg" onClick={startNewGame} className="font-bold text-lg w-full">
                  Play Again
                </Button>
              </div>
            )}

            {/* Keyboard */}
            {gameState === "playing" && (
              <div className="w-full max-w-2xl flex flex-wrap justify-center gap-2">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
                  const isGuessed = guessedLetters.has(letter);
                  const isCorrect = isGuessed && targetWord.includes(letter);
                  const isWrong = isGuessed && !targetWord.includes(letter);

                  return (
                    <button
                      key={letter}
                      onClick={() => guess(letter)}
                      disabled={isGuessed}
                      className={cn(
                        "w-10 h-12 sm:w-12 sm:h-14 rounded-lg font-bold text-lg sm:text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                        isCorrect ? "bg-green-500 text-white" :
                        isWrong ? "bg-muted text-muted-foreground opacity-50" :
                        "bg-secondary text-foreground hover:bg-secondary/80 shadow-sm border border-border"
                      )}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </CardContent>
    </Card>
  );
}
