"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Keyboard, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const WORDS = [
  "the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog",
  "speed", "type", "keyboard", "challenge", "viral", "trend", "game",
  "test", "your", "limits", "focus", "reaction", "skill", "accuracy",
  "words", "per", "minute", "typing", "fast", "champion", "click", "race"
];

export function TypeRacer() {
  const [gameState, setGameState] = useState<"idle" | "running" | "finished">("idle");
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    const shuffled = [...WORDS].sort(() => 0.5 - Math.random());
    // Create a long array of words for the test
    let testWords = [];
    for(let i=0; i<10; i++) testWords.push(...shuffled);
    
    setWords(testWords);
    setCurrentWordIndex(0);
    setInput("");
    setTimeLeft(30);
    setGameState("running");
    setWpm(0);
  };

  useEffect(() => {
    if (gameState === "running") {
      inputRef.current?.focus();
      const timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            setGameState("finished");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === "finished") {
      // Calculate WPM: words typed correctly / 0.5 minutes
      const finalWpm = currentWordIndex * 2; 
      setWpm(finalWpm);
    }
  }, [gameState, currentWordIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.endsWith(" ")) {
      const typedWord = val.trim();
      if (typedWord === words[currentWordIndex]) {
        setCurrentWordIndex(prev => prev + 1);
        setInput("");
      }
    } else {
      setInput(val);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Keyboard className="w-8 h-8 text-blue-500" /> Speed Typer
        </CardTitle>
        <CardDescription className="text-lg">
          Type as many words as you can in 30 seconds!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-8">
        
        <div className="flex justify-between items-center px-4">
          <div className="text-2xl font-black tabular-nums text-foreground">
            {timeLeft}s
          </div>
          <div className="text-2xl font-black text-muted-foreground">
            {currentWordIndex * 2} WPM
          </div>
        </div>

        {gameState === "idle" && (
          <div className="flex justify-center py-12">
            <Button size="lg" className="w-48 h-16 text-xl font-bold rounded-full shadow-lg" onClick={startGame}>
              <Play className="mr-2 fill-current" /> Start Race
            </Button>
          </div>
        )}

        {gameState === "running" && (
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border shadow-inner text-2xl leading-relaxed max-h-[120px] overflow-hidden relative">
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {words.slice(currentWordIndex, currentWordIndex + 15).map((word, i) => {
                  const isCurrent = i === 0;
                  let colorClass = "text-muted-foreground opacity-50";
                  if (isCurrent) {
                    if (word.startsWith(input)) {
                      colorClass = "text-primary font-bold bg-primary/10 px-1 rounded";
                    } else {
                      colorClass = "text-destructive font-bold bg-destructive/10 px-1 rounded";
                    }
                  }
                  return (
                    <span key={i} className={`transition-colors ${colorClass}`}>
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              className="w-full text-2xl p-4 rounded-xl border-2 border-primary bg-background focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-lg text-center font-bold"
              placeholder="Type here..."
              autoFocus
            />
          </div>
        )}

        {gameState === "finished" && (
          <div className="text-center py-8 animate-in zoom-in duration-300">
            <h3 className="text-3xl font-black mb-2 text-foreground">Time's Up!</h3>
            <p className="text-6xl font-black text-blue-500 my-6 drop-shadow-md">{wpm} WPM</p>
            <Button size="lg" variant="outline" className="w-48 h-16 text-xl font-bold rounded-full shadow-sm mt-4" onClick={startGame}>
              <RotateCcw className="mr-2" /> Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
