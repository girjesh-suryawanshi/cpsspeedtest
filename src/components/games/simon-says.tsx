"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Play, RotateCcw, Award } from "lucide-react";
import { ScoreSubmitter } from "../score-submitter";

const COLORS = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
const HIGHLIGHTS = ["bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300"];

export function SimonSays() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "watching" | "finished">("idle");
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setSequence([Math.floor(Math.random() * 4)]);
    setPlayerIndex(0);
    setScore(0);
    setGameState("watching");
    setShowSubmit(false);
  };

  const playSequence = async () => {
    for (let i = 0; i < sequence.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setActiveButton(sequence[i]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setActiveButton(null);
    }
    setGameState("playing");
  };

  useEffect(() => {
    if (gameState === "watching" && sequence.length > 0) {
      playSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence, gameState]);

  const handleButtonClick = (index: number) => {
    if (gameState !== "playing") return;

    setActiveButton(index);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveButton(null), 200);

    if (index !== sequence[playerIndex]) {
      setGameState("finished");
    } else {
      const nextIndex = playerIndex + 1;
      if (nextIndex === sequence.length) {
        setScore(sequence.length);
        setGameState("watching");
        setTimeout(() => {
          setSequence(prev => [...prev, Math.floor(Math.random() * 4)]);
          setPlayerIndex(0);
        }, 1000);
      } else {
        setPlayerIndex(nextIndex);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Brain className="w-8 h-8 text-primary" /> Simon Says
        </CardTitle>
        <CardDescription className="text-lg">
          Watch the pattern and repeat it back.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 flex flex-col items-center space-y-8">
        <div className="text-xl font-bold">
          Score: {score}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {COLORS.map((color, idx) => (
            <button
              key={idx}
              onClick={() => handleButtonClick(idx)}
              disabled={gameState !== "playing"}
              className={`
                w-28 h-28 sm:w-32 sm:h-32 rounded-xl transition-all duration-150 shadow-md border-b-4 border-black/20
                ${activeButton === idx ? HIGHLIGHTS[idx] + " scale-95 border-b-0 translate-y-1 opacity-100" : color + " hover:opacity-90"}
                ${gameState !== "playing" ? "cursor-default" : "cursor-pointer hover:scale-[1.02]"}
              `}
              aria-label={`Color button ${idx}`}
            />
          ))}
        </div>

        {gameState === "idle" && (
          <Button size="lg" className="w-full text-xl font-bold rounded-full" onClick={startGame}>
            <Play className="mr-2 fill-current" /> Start Game
          </Button>
        )}

        {gameState === "finished" && (
          <div className="text-center animate-in zoom-in duration-300 w-full space-y-4">
            <h3 className="text-2xl font-bold text-destructive">Game Over!</h3>
            <div className="flex gap-2">
              <Button size="lg" variant="outline" className="w-full text-xl font-bold rounded-full" onClick={startGame}>
                <RotateCcw className="mr-2" /> Play Again
              </Button>
              <Button size="lg" variant="default" className="w-full text-xl font-bold rounded-full" onClick={() => setShowSubmit(true)}>
                <Award className="mr-2" /> Submit Score
              </Button>
            </div>
          </div>
        )}

        {(gameState === "watching" || gameState === "playing") && (
          <div className="h-10 flex items-center justify-center text-lg font-bold text-muted-foreground animate-pulse">
            {gameState === "watching" ? "Watch carefully..." : "Your turn!"}
          </div>
        )}
      </CardContent>

      <ScoreSubmitter
        game="simon-says"
        score={score}
        isOpen={showSubmit}
        onClose={() => setShowSubmit(false)}
        title="Simon Says High Score!"
        unit="Level"
      />
    </Card>
  );
}
