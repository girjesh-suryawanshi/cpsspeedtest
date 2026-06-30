"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid2x2, RotateCcw } from "lucide-react";

type Board = number[][];

const GRID_SIZE = 4;

const initializeBoard = (): Board => {
  const board = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0));
  addRandomTile(board);
  addRandomTile(board);
  return board;
};

const addRandomTile = (board: Board) => {
  const emptyCells = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (board[r][c] === 0) emptyCells.push({ r, c });
    }
  }
  if (emptyCells.length > 0) {
    const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
  }
};

const getTileColor = (val: number) => {
  const colors: Record<number, string> = {
    0: "bg-muted/30 text-transparent",
    2: "bg-[#eee4da] text-[#776e65]",
    4: "bg-[#ede0c8] text-[#776e65]",
    8: "bg-[#f2b179] text-white",
    16: "bg-[#f59563] text-white",
    32: "bg-[#f67c5f] text-white",
    64: "bg-[#f65e3b] text-white",
    128: "bg-[#edcf72] text-white shadow-[0_0_10px_rgba(237,207,114,0.5)]",
    256: "bg-[#edcc61] text-white shadow-[0_0_15px_rgba(237,204,97,0.6)]",
    512: "bg-[#edc850] text-white shadow-[0_0_20px_rgba(237,200,80,0.7)]",
    1024: "bg-[#edc53f] text-white shadow-[0_0_25px_rgba(237,197,63,0.8)] text-3xl",
    2048: "bg-[#edc22e] text-white shadow-[0_0_30px_rgba(237,194,46,0.9)] text-3xl",
  };
  return colors[val] || "bg-[#3c3a32] text-[#f9f6f2] text-2xl";
};

export function Game2048() {
  const [board, setBoard] = useState<Board>(initializeBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);

  const resetGame = () => {
    setBoard(initializeBoard());
    setScore(0);
    setGameOver(false);
    containerRef.current?.focus();
  };

  const move = useCallback((direction: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
    if (gameOver) return;

    let newBoard = JSON.parse(JSON.stringify(board));
    let moved = false;
    let newScore = score;

    const slide = (row: number[]) => {
      let arr = row.filter(val => val);
      let missing = GRID_SIZE - arr.length;
      let zeros = Array(missing).fill(0);
      return arr.concat(zeros);
    };

    const combine = (row: number[]) => {
      for (let i = 0; i < GRID_SIZE - 1; i++) {
        if (row[i] !== 0 && row[i] === row[i + 1]) {
          row[i] *= 2;
          newScore += row[i];
          row[i + 1] = 0;
        }
      }
      return row;
    };

    if (direction === "LEFT" || direction === "RIGHT") {
      for (let r = 0; r < GRID_SIZE; r++) {
        let row = newBoard[r];
        if (direction === "RIGHT") row.reverse();
        row = slide(row);
        row = combine(row);
        row = slide(row);
        if (direction === "RIGHT") row.reverse();
        
        if (newBoard[r].join(",") !== board[r].join(",")) moved = true;
        newBoard[r] = row;
      }
    } else if (direction === "UP" || direction === "DOWN") {
      for (let c = 0; c < GRID_SIZE; c++) {
        let col = [newBoard[0][c], newBoard[1][c], newBoard[2][c], newBoard[3][c]];
        if (direction === "DOWN") col.reverse();
        col = slide(col);
        col = combine(col);
        col = slide(col);
        if (direction === "DOWN") col.reverse();
        
        for (let r = 0; r < GRID_SIZE; r++) {
          if (newBoard[r][c] !== col[r]) moved = true;
          newBoard[r][c] = col[r];
        }
      }
    }

    if (moved) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(newScore);
      checkGameOver(newBoard);
    }
  }, [board, score, gameOver]);

  const checkGameOver = (b: Board) => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (b[r][c] === 0) return;
        if (c < GRID_SIZE - 1 && b[r][c] === b[r][c + 1]) return;
        if (r < GRID_SIZE - 1 && b[r][c] === b[r + 1][c]) return;
      }
    }
    setGameOver(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault(); // Stop scrolling
    }
    if (e.key === "ArrowUp") move("UP");
    if (e.key === "ArrowDown") move("DOWN");
    if (e.key === "ArrowLeft") move("LEFT");
    if (e.key === "ArrowRight") move("RIGHT");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 30) move(dx > 0 ? "RIGHT" : "LEFT");
    } else {
      if (Math.abs(dy) > 30) move(dy > 0 ? "DOWN" : "UP");
    }
    setTouchStart(null);
  };

  useEffect(() => {
    // Auto-focus the game on load so keyboard works immediately
    containerRef.current?.focus();
  }, []);

  return (
    <Card 
      className="w-full max-w-md mx-auto shadow-lg border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
      tabIndex={0}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Grid2x2 className="w-8 h-8 text-orange-500" /> 2048
        </CardTitle>
        <CardDescription className="text-lg">
          Join the numbers to get the 2048 tile!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-6">
        
        <div className="flex justify-between items-center">
          <div className="bg-muted px-4 py-2 rounded-lg text-center shadow-inner border">
            <span className="block text-xs font-bold text-muted-foreground uppercase">Score</span>
            <span className="block text-xl font-black">{score}</span>
          </div>
          <Button variant="outline" onClick={resetGame} className="font-bold">
            <RotateCcw className="w-4 h-4 mr-2" /> New Game
          </Button>
        </div>

        <div className="relative bg-[#bbada0] p-3 rounded-xl shadow-inner max-w-sm mx-auto aspect-square">
          {gameOver && (
            <div className="absolute inset-0 bg-black/50 z-10 rounded-xl flex flex-col items-center justify-center animate-in fade-in">
              <h2 className="text-4xl font-black text-white mb-4 drop-shadow-md">Game Over!</h2>
              <Button onClick={resetGame} size="lg" className="font-bold shadow-lg">Try Again</Button>
            </div>
          )}
          <div className="grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 w-full h-full">
            {board.map((row, r) =>
              row.map((val, c) => (
                <div
                  key={`${r}-${c}`}
                  className={`flex items-center justify-center rounded-sm sm:rounded-md font-bold text-2xl sm:text-4xl transition-all duration-150 ${getTileColor(val)}`}
                >
                  {val > 0 ? val : ""}
                </div>
              ))
            )}
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Use your <strong>Arrow Keys</strong> or <strong>Swipe</strong> to move the tiles.
        </p>
      </CardContent>
    </Card>
  );
}
