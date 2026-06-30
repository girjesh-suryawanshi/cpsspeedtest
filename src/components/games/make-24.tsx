"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Play, RotateCcw, HelpCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Famous solvable 24 puzzles
const puzzles = [
  [1, 1, 4, 6], [1, 2, 3, 4], [2, 3, 4, 8], [2, 4, 6, 8], [3, 3, 8, 8],
  [4, 4, 4, 4], [5, 5, 5, 1], [6, 6, 6, 6], [8, 8, 3, 3], [1, 5, 5, 5],
  [2, 7, 7, 10], [3, 3, 7, 7], [4, 4, 7, 7], [5, 7, 7, 11], [2, 2, 13, 13],
  [3, 8, 8, 10], [5, 6, 6, 9], [1, 3, 4, 6], [2, 2, 4, 6], [1, 2, 7, 8]
];

export function Make24() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won">("idle");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);

  const startNewPuzzle = () => {
    const p = puzzles[Math.floor(Math.random() * puzzles.length)];
    // Shuffle the numbers
    setNumbers([...p].sort(() => Math.random() - 0.5));
    setInputVal("");
    setError("");
    setGameState("playing");
  };

  const evaluateExpression = (expr: string) => {
    try {
      // Basic sanitization
      if (!/^[0-9+*/() -]+$/.test(expr)) return null;
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${expr}`)();
      if (!isFinite(result)) return null;
      return result;
    } catch (e) {
      return null;
    }
  };

  const checkWin = () => {
    if (!inputVal) return;
    
    // 1. Check if they used exactly the right numbers
    const usedNumbers = inputVal.match(/\\d+/g)?.map(Number) || [];
    const requiredNumbers = [...numbers].sort((a,b) => a-b);
    const sortedUsed = [...usedNumbers].sort((a,b) => a-b);

    if (JSON.stringify(requiredNumbers) !== JSON.stringify(sortedUsed)) {
      setError("You must use all four numbers exactly once!");
      return;
    }

    // 2. Evaluate
    const result = evaluateExpression(inputVal);
    
    if (result === null) {
      setError("Invalid math expression.");
      return;
    }

    if (Math.abs(result - 24) < 0.0001) {
      setScore(s => s + 1);
      setGameState("won");
      setError("");
    } else {
      setError(`Expression evaluates to ${result}, not 24.`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      checkWin();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Brain className="w-8 h-8 text-primary" /> Make 24
        </CardTitle>
        <CardDescription className="text-lg">
          Use +, -, *, / and ( ) to equal 24.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-6">
        
        <div className="flex justify-between items-center text-muted-foreground font-bold text-sm uppercase">
          <span>Puzzles Solved: <span className="text-primary text-xl ml-2">{score}</span></span>
        </div>

        {gameState === "idle" && (
          <div className="flex justify-center py-10">
             <Button size="lg" onClick={startNewPuzzle} className="font-bold text-xl rounded-full px-8 shadow-lg">
                <Play className="mr-2" /> Play Now
              </Button>
          </div>
        )}

        {gameState !== "idle" && (
          <div className="space-y-6 animate-in fade-in">
            {/* Number Display */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {numbers.map((n, i) => (
                <div key={i} className="aspect-square flex items-center justify-center text-4xl sm:text-5xl font-black bg-primary/10 text-primary border-2 border-primary/20 rounded-2xl shadow-sm">
                  {n}
                </div>
              ))}
            </div>

            {gameState === "won" ? (
              <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-2xl text-center space-y-4 animate-in zoom-in-95">
                <h3 className="text-2xl font-black text-green-500">Correct!</h3>
                <p className="text-lg font-bold">{inputVal} = 24</p>
                <Button onClick={startNewPuzzle} className="w-full font-bold" size="lg">Next Puzzle</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. (8 - 2) * 4"
                  className="text-center text-2xl font-bold h-16 shadow-sm"
                  autoFocus
                  autoComplete="off"
                />
                
                {error && (
                  <Alert variant="destructive" className="py-2">
                    <AlertDescription className="font-semibold text-center">{error}</AlertDescription>
                  </Alert>
                )}

                <Button onClick={checkWin} className="w-full font-bold h-12 text-lg">
                  Check Answer
                </Button>
              </div>
            )}
          </div>
        )}

      </CardContent>
    </Card>
  );
}
