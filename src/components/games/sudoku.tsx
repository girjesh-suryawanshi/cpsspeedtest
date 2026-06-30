"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid3x3, RotateCcw, Play, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Pre-generated Sudoku boards (0 means empty)
// Each puzzle is a tuple: [puzzle, solution]
const puzzles: [number[], number[]][] = [
  [
    [5,3,0,0,7,0,0,0,0, 6,0,0,1,9,5,0,0,0, 0,9,8,0,0,0,0,6,0, 8,0,0,0,6,0,0,0,3, 4,0,0,8,0,3,0,0,1, 7,0,0,0,2,0,0,0,6, 0,6,0,0,0,0,2,8,0, 0,0,0,4,1,9,0,0,5, 0,0,0,0,8,0,0,7,9],
    [5,3,4,6,7,8,9,1,2, 6,7,2,1,9,5,3,4,8, 1,9,8,3,4,2,5,6,7, 8,5,9,7,6,1,4,2,3, 4,2,6,8,5,3,7,9,1, 7,1,3,9,2,4,8,5,6, 9,6,1,5,3,7,2,8,4, 2,8,7,4,1,9,6,3,5, 3,4,5,2,8,6,1,7,9]
  ],
  [
    [0,0,0,2,6,0,7,0,1, 6,8,0,0,7,0,0,9,0, 1,9,0,0,0,4,5,0,0, 8,2,0,1,0,0,0,4,0, 0,0,4,6,0,2,9,0,0, 0,5,0,0,0,3,0,2,8, 0,0,9,3,0,0,0,7,4, 0,4,0,0,5,0,0,3,6, 7,0,3,0,1,8,0,0,0],
    [4,3,5,2,6,9,7,8,1, 6,8,2,5,7,1,4,9,3, 1,9,7,8,3,4,5,6,2, 8,2,6,1,9,5,3,4,7, 3,7,4,6,8,2,9,1,5, 9,5,1,7,4,3,6,2,8, 5,1,9,3,2,6,8,7,4, 2,4,8,9,5,7,1,3,6, 7,6,3,4,1,8,2,5,9]
  ]
];

export function Sudoku() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won">("idle");
  const [board, setBoard] = useState<number[]>(Array(81).fill(0));
  const [initialBoard, setInitialBoard] = useState<number[]>(Array(81).fill(0));
  const [solution, setSolution] = useState<number[]>(Array(81).fill(0));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const startNewGame = () => {
    const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setInitialBoard([...puzzle[0]]);
    setBoard([...puzzle[0]]);
    setSolution([...puzzle[1]]);
    setSelectedCell(null);
    setGameState("playing");
  };

  const handleCellClick = (index: number) => {
    if (gameState !== "playing") return;
    // Don't allow selecting initial cells
    if (initialBoard[index] !== 0) return;
    setSelectedCell(index);
  };

  const handleNumberInput = (num: number) => {
    if (selectedCell === null || gameState !== "playing") return;
    const newBoard = [...board];
    newBoard[selectedCell] = num;
    setBoard(newBoard);

    // Check win condition
    if (!newBoard.includes(0)) {
      if (JSON.stringify(newBoard) === JSON.stringify(solution)) {
        setGameState("won");
        setSelectedCell(null);
      }
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing" || selectedCell === null) return;
      if (e.key >= "1" && e.key <= "9") {
        handleNumberInput(parseInt(e.key));
      } else if (e.key === "Backspace" || e.key === "Delete") {
        handleNumberInput(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, selectedCell, board]);

  return (
    <Card className="w-full max-w-xl mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Grid3x3 className="w-8 h-8 text-indigo-500" /> Sudoku
        </CardTitle>
        <CardDescription className="text-lg">
          Fill the 9x9 grid with numbers 1-9 without repeating in any row, column, or 3x3 block.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-8 space-y-6 flex flex-col items-center">
        
        {gameState === "idle" && (
          <div className="py-12">
            <Button size="lg" onClick={startNewGame} className="font-bold text-xl rounded-full px-8 shadow-lg">
              <Play className="mr-2" /> Start Puzzle
            </Button>
          </div>
        )}

        {gameState !== "idle" && (
          <div className="flex flex-col items-center gap-6 w-full">
            
            {/* Action Bar */}
            <div className="w-full max-w-sm flex justify-between items-center bg-muted/30 p-2 rounded-xl border">
               {gameState === "won" ? (
                 <span className="font-bold text-green-500 flex items-center gap-2 px-4"><Check /> Puzzle Solved!</span>
               ) : (
                 <span className="font-bold text-muted-foreground px-4">Solving...</span>
               )}
               <Button variant="outline" size="sm" onClick={startNewGame} className="font-bold">
                <RotateCcw className="mr-2 w-4 h-4" /> Restart
              </Button>
            </div>

            {/* Board */}
            <div className="grid grid-cols-9 bg-border gap-px border-4 border-border rounded-lg overflow-hidden shrink-0 w-full max-w-sm aspect-square touch-none">
              {board.map((val, i) => {
                const row = Math.floor(i / 9);
                const col = i % 9;
                
                // Add thicker borders for 3x3 blocks
                const borderClasses = [];
                if (col % 3 === 2 && col !== 8) borderClasses.push("border-r-2 border-r-border");
                if (row % 3 === 2 && row !== 8) borderClasses.push("border-b-2 border-b-border");

                const isInitial = initialBoard[i] !== 0;
                const isSelected = selectedCell === i;
                
                // Highlight row, col, and block if a cell is selected
                let isHighlighted = false;
                if (selectedCell !== null && !isSelected) {
                  const selRow = Math.floor(selectedCell / 9);
                  const selCol = selectedCell % 9;
                  const selBlockRow = Math.floor(selRow / 3);
                  const selBlockCol = Math.floor(selCol / 3);
                  
                  if (row === selRow || col === selCol || (Math.floor(row/3) === selBlockRow && Math.floor(col/3) === selBlockCol)) {
                    isHighlighted = true;
                  }
                }

                // Highlight same numbers
                let isSameNumber = false;
                if (selectedCell !== null && board[selectedCell] !== 0 && board[selectedCell] === val) {
                  isSameNumber = true;
                }

                return (
                  <div
                    key={i}
                    onClick={() => handleCellClick(i)}
                    className={cn(
                      "flex items-center justify-center text-lg sm:text-2xl font-semibold cursor-pointer select-none transition-colors",
                      isInitial ? "bg-muted text-foreground font-black" : "bg-background text-primary",
                      isSelected ? "bg-primary/20" : "",
                      !isSelected && isHighlighted ? "bg-primary/5" : "",
                      !isSelected && !isHighlighted && isSameNumber ? "bg-primary/10" : "",
                      ...borderClasses
                    )}
                  >
                    {val !== 0 ? val : ""}
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            {gameState === "playing" && (
              <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 w-full max-w-sm">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <Button
                    key={num}
                    variant="outline"
                    className="h-10 sm:h-12 text-xl font-bold bg-muted/20"
                    onClick={() => handleNumberInput(num)}
                  >
                    {num}
                  </Button>
                ))}
                <Button 
                  variant="destructive" 
                  className="col-span-5 sm:col-span-9 h-10 sm:h-12 font-bold"
                  onClick={() => handleNumberInput(0)}
                >
                  Clear Cell
                </Button>
              </div>
            )}
          </div>
        )}

      </CardContent>
    </Card>
  );
}
