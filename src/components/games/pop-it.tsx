"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopIt() {
  const GRID_SIZE = 5;
  const TOTAL_BUBBLES = GRID_SIZE * GRID_SIZE;
  const [bubbles, setBubbles] = useState<boolean[]>(Array(TOTAL_BUBBLES).fill(false));
  const [pops, setPops] = useState(0);

  const handlePop = (index: number) => {
    if (bubbles[index]) return; // Already popped

    setBubbles(prev => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    setPops(p => p + 1);

    // Optional: play an HTML5 audio element here for extra ASMR
  };

  const reset = () => {
    setBubbles(Array(TOTAL_BUBBLES).fill(false));
  };

  useEffect(() => {
    if (bubbles.every(b => b)) {
      setTimeout(() => {
        reset();
      }, 600);
    }
  }, [bubbles]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-border/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Hand className="w-8 h-8 text-pink-500" /> Pop-It Simulator
        </CardTitle>
        <CardDescription className="text-lg">
          Click the bubbles to pop them. Relax and enjoy.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="text-sm font-semibold text-muted-foreground bg-background/50 px-4 py-1 rounded-full border shadow-sm">
          Total Pops: {pops}
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-6 bg-pink-500/20 rounded-3xl shadow-inner border border-pink-500/30">
          {bubbles.map((isPopped, i) => (
            <button
              key={i}
              onClick={() => handlePop(i)}
              className={`
                w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-200 shadow-md flex items-center justify-center border-b-4
                ${isPopped ? "bg-pink-300/50 scale-95 border-b-0 translate-y-1 shadow-inner" : "bg-pink-400 hover:bg-pink-300 border-pink-600 hover:-translate-y-0.5"}
              `}
              aria-label={`Pop bubble ${i + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" onClick={reset}>
          Reset Board
        </Button>
      </CardContent>
    </Card>
  );
}
