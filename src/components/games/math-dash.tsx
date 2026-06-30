"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Play, RotateCcw, Brain, Timer } from "lucide-react";

type Operator = "+" | "-" | "×" | "÷";

interface Equation {
  num1: number;
  num2: number;
  op: Operator;
  answer: number;
}

const generateEquation = (difficulty: number): Equation => {
  const ops: Operator[] = ["+", "-", "×", "÷"];
  // Weight ops based on difficulty: more addition early, more division/multiplication later
  let op: Operator = "+";
  if (difficulty < 5) op = ops[Math.floor(Math.random() * 2)]; // +, -
  else if (difficulty < 15) op = ops[Math.floor(Math.random() * 3)]; // +, -, *
  else op = ops[Math.floor(Math.random() * 4)]; // All

  let num1 = 0;
  let num2 = 0;
  let answer = 0;

  const maxVal = Math.min(10 + difficulty * 2, 100);

  switch (op) {
    case "+":
      num1 = Math.floor(Math.random() * maxVal) + 1;
      num2 = Math.floor(Math.random() * maxVal) + 1;
      answer = num1 + num2;
      break;
    case "-":
      num1 = Math.floor(Math.random() * maxVal) + 5;
      num2 = Math.floor(Math.random() * num1); // Ensure positive result
      answer = num1 - num2;
      break;
    case "×":
      const maxMul = Math.min(5 + Math.floor(difficulty / 2), 20);
      num1 = Math.floor(Math.random() * maxMul) + 2;
      num2 = Math.floor(Math.random() * 10) + 2;
      answer = num1 * num2;
      break;
    case "÷":
      const maxDiv = Math.min(5 + Math.floor(difficulty / 2), 15);
      num2 = Math.floor(Math.random() * 10) + 2; // divisor
      answer = Math.floor(Math.random() * maxDiv) + 2; // result
      num1 = num2 * answer; // Ensure clean division
      break;
  }

  return { num1, num2, op, answer };
};

export function MathDash() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [equation, setEquation] = useState<Equation | null>(null);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameState("playing");
    setEquation(generateEquation(0));
    setInputVal("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("gameover");
    }
  }, [gameState, timeLeft]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (gameState !== "playing" || !equation) return;

    if (parseInt(inputVal) === equation.answer) {
      setScore(s => s + 1);
      setEquation(generateEquation(score + 1));
      setInputVal("");
    } else {
      // Penalty? Flash red? Just clear for now
      setInputVal("");
    }
    inputRef.current?.focus();
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Calculator className="w-8 h-8 text-blue-500" /> Math Dash
        </CardTitle>
        <CardDescription className="text-lg">
          Solve as many equations as you can in 60 seconds!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-6">
        
        {/* Header Stats */}
        <div className="flex justify-between items-center bg-muted/50 p-4 rounded-xl shadow-inner border border-border/50">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1"><Brain className="w-3 h-3"/> Score</span>
            <span className="text-3xl font-black text-primary">{score}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1"><Timer className="w-3 h-3"/> Time</span>
            <span className={`text-3xl font-black ${timeLeft <= 10 ? 'text-destructive animate-pulse' : 'text-foreground'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Game Area */}
        <div className="relative h-48 bg-background border-2 border-primary/20 rounded-2xl flex flex-col items-center justify-center shadow-sm overflow-hidden">
          
          {gameState === "idle" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10 animate-in fade-in">
              <Button size="lg" onClick={startGame} className="font-bold text-xl rounded-full px-8 shadow-lg">
                <Play className="mr-2" /> Start Dash
              </Button>
            </div>
          )}

          {gameState === "gameover" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 z-10 animate-in zoom-in-95 duration-300">
              <h3 className="text-3xl font-black text-primary mb-2 tracking-wide">Time's Up!</h3>
              <p className="text-muted-foreground font-semibold mb-1">Final Score</p>
              <p className="text-6xl font-black text-foreground mb-6 drop-shadow-md">{score}</p>
              <Button size="lg" variant="default" onClick={startGame} className="font-bold shadow-lg">
                <RotateCcw className="mr-2" /> Play Again
              </Button>
            </div>
          )}

          {gameState === "playing" && equation && (
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full px-6 animate-in slide-in-from-bottom-2 fade-in">
              <div className="text-5xl md:text-6xl font-black tracking-tighter mb-6 flex items-center gap-4">
                <span>{equation.num1}</span>
                <span className="text-primary">{equation.op}</span>
                <span>{equation.num2}</span>
                <span className="text-muted-foreground">=</span>
              </div>
              <Input
                ref={inputRef}
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="text-center text-3xl font-bold h-16 w-full max-w-[200px] border-primary shadow-sm"
                placeholder="?"
                autoFocus
                autoComplete="off"
              />
            </form>
          )}

        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Press <strong>Enter</strong> to submit your answer quickly!
        </p>

      </CardContent>
    </Card>
  );
}
