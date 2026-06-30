"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Play, RotateCcw, Award } from "lucide-react";
import { ScoreSubmitter } from "../score-submitter";

type Point = { x: number; y: number };

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [score, setScore] = useState(0);

  const directionRef = useRef(INITIAL_DIRECTION);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [showSubmit, setShowSubmit] = useState(false);

  const generateFood = useCallback((currentSnake: Point[]): Point => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      if (!currentSnake.some(s => s.x === newFood.x && s.y === newFood.y)) {
        return newFood;
      }
    }
  }, []);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood(INITIAL_SNAKE));
    setScore(0);
    setGameState("playing");
    setShowSubmit(false);
    containerRef.current?.focus();
  };

  useEffect(() => {
    if (gameState !== "playing") return;

    const moveSnake = () => {
      setSnake(prev => {
        const head = prev[0];
        const newHead = { x: head.x + directionRef.current.x, y: head.y + directionRef.current.y };

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setGameState("gameover");
          return prev;
        }

        // Check self collision
        if (prev.some(s => s.x === newHead.x && s.y === newHead.y)) {
          setGameState("gameover");
          return prev;
        }

        const newSnake = [newHead, ...prev];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // remove tail
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 120);
    return () => clearInterval(interval);
  }, [gameState, food, generateFood]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent scrolling for game keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", " "].includes(e.key)) {
      e.preventDefault();
    }

    if (gameState !== "playing") return;
    
    const { x, y } = directionRef.current;
    switch (e.key) {
      case "ArrowUp":
      case "w":
        if (y !== 1) directionRef.current = { x: 0, y: -1 };
        break;
      case "ArrowDown":
      case "s":
        if (y !== -1) directionRef.current = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
      case "a":
        if (x !== 1) directionRef.current = { x: -1, y: 0 };
        break;
      case "ArrowRight":
      case "d":
        if (x !== -1) directionRef.current = { x: 1, y: 0 };
        break;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (gameState === "playing") {
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || gameState !== "playing") return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;
    
    const { x, y } = directionRef.current;
    
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 30) {
        if (dx > 0 && x !== -1) directionRef.current = { x: 1, y: 0 };
        else if (dx < 0 && x !== 1) directionRef.current = { x: -1, y: 0 };
      }
    } else {
      if (Math.abs(dy) > 30) {
        if (dy > 0 && y !== -1) directionRef.current = { x: 0, y: 1 };
        else if (dy < 0 && y !== 1) directionRef.current = { x: 0, y: -1 };
      }
    }
    setTouchStart(null);
  };

  useEffect(() => {
    // Ensure we can receive focus to capture keys without scrolling
    containerRef.current?.focus();
  }, []);

  return (
    <Card 
      className="w-full max-w-lg mx-auto shadow-lg border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
      tabIndex={0}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Gamepad2 className="w-8 h-8 text-emerald-500" /> Classic Snake
        </CardTitle>
        <CardDescription className="text-lg">
          Eat the food to grow, but don't crash into yourself!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-6">
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-muted px-4 py-1.5 rounded-full border">
            Score: <span className="text-primary">{score}</span>
          </div>
          {gameState === "idle" && (
            <Button onClick={startGame} className="font-bold"><Play className="w-4 h-4 mr-2"/> Start</Button>
          )}
          {gameState === "gameover" && (
            <Button variant="destructive" onClick={startGame} className="font-bold"><RotateCcw className="w-4 h-4 mr-2"/> Retry</Button>
          )}
        </div>

        <div className="relative mx-auto bg-black border-4 border-muted-foreground/20 rounded-xl overflow-hidden aspect-square max-w-[400px]">
          {/* Grid render */}
          <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              
              const isFood = food.x === x && food.y === y;
              const snakeIndex = snake.findIndex(s => s.x === x && s.y === y);
              const isSnake = snakeIndex !== -1;
              const isHead = snakeIndex === 0;

              return (
                <div key={i} className={`
                  ${isFood ? 'bg-red-500 scale-75 rounded-full' : ''}
                  ${isSnake ? (isHead ? 'bg-emerald-400' : 'bg-emerald-600') + ' rounded-sm border border-black/10' : ''}
                `} />
              );
            })}
          </div>

          {gameState === "gameover" && (
             <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center animate-in fade-in z-10">
               <h3 className="text-4xl font-black text-red-500 mb-2 drop-shadow-md">GAME OVER</h3>
               <p className="text-xl text-white font-bold mb-6">Final Score: {score}</p>
               <div className="flex gap-2">
                 <Button size="lg" onClick={startGame} className="font-bold text-lg"><RotateCcw className="mr-2"/> Play Again</Button>
                 <Button size="lg" variant="secondary" onClick={() => setShowSubmit(true)} className="font-bold text-lg"><Award className="mr-2"/> Submit</Button>
               </div>
             </div>
          )}
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Use <strong>WASD</strong>, <strong>Arrow Keys</strong>, or <strong>Swipe</strong> to move.
        </p>

      </CardContent>

      <ScoreSubmitter
        game="snake"
        score={score}
        isOpen={showSubmit}
        onClose={() => setShowSubmit(false)}
        title="Snake High Score!"
        unit="Points"
      />
    </Card>
  );
}
