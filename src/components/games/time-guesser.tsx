"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Timer, RotateCcw } from "lucide-react";

export function TimeGuesser() {
  const [gameState, setGameState] = useState<"idle" | "running" | "finished">("idle");
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsed, setElapsed] = useState<number>(0);
  const [diff, setDiff] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setGameState("running");
    setStartTime(performance.now());
    setElapsed(0);
  };

  const stopTimer = () => {
    if (gameState !== "running") return;
    const now = performance.now();
    const finalElapsed = now - startTime;
    setElapsed(finalElapsed);
    setDiff(finalElapsed - 10000);
    setGameState("finished");
  };

  const resetTimer = () => {
    setGameState("idle");
    setElapsed(0);
    setDiff(0);
  };

  useEffect(() => {
    if (gameState === "running") {
      timerRef.current = setInterval(() => {
        setElapsed(performance.now() - startTime);
      }, 10);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, startTime]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Timer className="w-8 h-8 text-primary" /> Time Guesser
        </CardTitle>
        <CardDescription className="text-lg">
          Stop the timer at exactly <strong>10.000 seconds</strong>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="text-6xl md:text-8xl font-black font-mono tracking-tighter tabular-nums drop-shadow-sm text-foreground">
          {(elapsed / 1000).toFixed(3)}<span className="text-3xl md:text-5xl text-muted-foreground">s</span>
        </div>

        {gameState === "finished" && (
          <div className="text-center animate-in zoom-in duration-300">
            <p className="text-xl font-medium mb-1">
              You were off by:
            </p>
            <p className={`text-4xl font-black ${Math.abs(diff) < 100 ? "text-emerald-500" : Math.abs(diff) < 500 ? "text-amber-500" : "text-destructive"}`}>
              {Math.abs(diff / 1000).toFixed(3)}s
            </p>
            <p className="text-muted-foreground mt-2">
              {diff > 0 ? "Too slow!" : diff < 0 ? "Too early!" : "Perfect!"}
            </p>
          </div>
        )}

        <div className="flex gap-4 w-full px-4">
          {gameState === "idle" && (
            <Button size="lg" className="w-full text-xl h-16 font-bold" onClick={startTimer}>
              Start Timer
            </Button>
          )}
          {gameState === "running" && (
            <Button size="lg" variant="destructive" className="w-full text-xl h-16 font-bold animate-pulse" onClick={stopTimer}>
              STOP!
            </Button>
          )}
          {gameState === "finished" && (
            <Button size="lg" variant="outline" className="w-full text-xl h-16 font-bold" onClick={resetTimer}>
              <RotateCcw className="mr-2" /> Try Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
