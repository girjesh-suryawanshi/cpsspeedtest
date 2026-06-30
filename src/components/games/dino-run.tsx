"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bird, Play, RotateCcw } from "lucide-react";

export function DinoRun() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [score, setScore] = useState(0);
  
  // Render states
  const [dinoY, setDinoY] = useState(0); 
  const [obstacleX, setObstacleX] = useState(100); 
  
  // Physics Refs (to avoid stale closures in requestAnimationFrame)
  const gameStateRef = useRef(gameState);
  const dinoYRef = useRef(0);
  const velocityRef = useRef(0);
  const obstacleXRef = useRef(100);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>();

  const gravity = 0.8;
  const jumpStrength = 15;
  const groundLevel = 0;
  const obstacleSpeed = 0.5; // Speed percentage per ms

  // Sync ref with state
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const update = useCallback((time: number) => {
    if (gameStateRef.current !== "playing") return;

    if (lastTimeRef.current !== undefined) {
      const deltaTime = time - lastTimeRef.current;
      
      // Update Physics
      velocityRef.current -= gravity;
      dinoYRef.current += velocityRef.current;
      
      if (dinoYRef.current <= groundLevel) {
        dinoYRef.current = groundLevel;
        velocityRef.current = 0;
      }

      obstacleXRef.current -= obstacleSpeed * (deltaTime / 10);
      if (obstacleXRef.current < -10) {
        obstacleXRef.current = 100 + Math.random() * 20;
        setScore(s => s + 100);
      }

      // Check collision
      if (obstacleXRef.current < 20 && obstacleXRef.current > 5 && dinoYRef.current < 20) {
        setGameState("gameover");
        gameStateRef.current = "gameover";
        return; // Stop the loop
      }

      // Sync to render state
      setDinoY(dinoYRef.current);
      setObstacleX(obstacleXRef.current);
    }
    
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(update);
  }, []);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    
    // Reset Physics
    dinoYRef.current = groundLevel;
    velocityRef.current = 0;
    obstacleXRef.current = 100;
    
    // Reset Render State
    setDinoY(groundLevel);
    setObstacleX(100);
    
    lastTimeRef.current = performance.now();
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(update);
    containerRef.current?.focus();
  };

  const jump = () => {
    if (gameStateRef.current === "playing" && dinoYRef.current <= groundLevel) {
      velocityRef.current = jumpStrength;
    } else if (gameStateRef.current === "idle" || gameStateRef.current === "gameover") {
      startGame();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "Space" || e.code === "ArrowUp") {
      e.preventDefault();
      jump();
    }
  };

  useEffect(() => {
    containerRef.current?.focus();
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <Card 
      className="w-full max-w-2xl mx-auto shadow-lg border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
      tabIndex={0}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Bird className="w-8 h-8 text-primary" /> Dino Run
        </CardTitle>
        <CardDescription className="text-lg">
          Jump over the obstacles. Press Space to jump!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-8 flex flex-col items-center space-y-6">
        
        <div className="w-full flex justify-between items-center px-4">
          <span className="text-xl font-bold font-mono tracking-widest text-muted-foreground">SCORE: {Math.floor(score).toString().padStart(5, '0')}</span>
        </div>

        {/* Game Window */}
        <div 
          className="relative w-full h-48 md:h-64 bg-background border-b-2 border-primary/50 overflow-hidden shadow-inner cursor-pointer"
          onClick={jump}
        >
          {/* Ground Line */}
          <div className="absolute bottom-0 w-full h-1 bg-primary/20"></div>

          {/* Dino */}
          <div 
            className="absolute left-[10%] w-8 h-12 md:w-10 md:h-14 bg-foreground rounded-t-lg transition-transform"
            style={{ bottom: `${dinoY}%` }}
          />

          {/* Obstacle */}
          <div 
            className="absolute bottom-0 w-4 h-8 md:w-6 md:h-10 bg-destructive rounded-t-sm"
            style={{ left: `${obstacleX}%` }}
          />

          {/* Overlay states */}
          {gameState === "idle" && (
            <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center">
              <Button size="lg" onClick={startGame} className="font-bold text-xl rounded-full px-8 shadow-lg">
                <Play className="mr-2" /> Start Run
              </Button>
            </div>
          )}
          {gameState === "gameover" && (
            <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center animate-in fade-in">
              <h3 className="text-4xl font-black text-destructive mb-6 tracking-widest">GAME OVER</h3>
              <Button size="lg" variant="outline" onClick={startGame} className="font-bold">
                <RotateCcw className="mr-2" /> Try Again
              </Button>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Tip: You can use <strong>Spacebar</strong>, <strong>Arrow Up</strong>, or <strong>Click</strong> the game area to jump.
        </p>

      </CardContent>
    </Card>
  );
}
