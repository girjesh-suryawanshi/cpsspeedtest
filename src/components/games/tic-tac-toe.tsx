"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, RotateCcw } from "lucide-react";

type Player = "X" | "O" | null;

export function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<Player | "Draw">(null);

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diags
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if (!squares.includes(null)) return "Draw";
    return null;
  };

  const handleClick = (i: number) => {
    if (board[i] || winner || !xIsNext) return;
    
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    setXIsNext(false);
  };

  // AI Move (Simple Random for now, but prioritizes winning/blocking)
  useEffect(() => {
    const aiMove = () => {
      const winCheck = calculateWinner(board);
      if (winCheck) {
        setWinner(winCheck);
        return;
      }

      if (!xIsNext) {
        setTimeout(() => {
          // Find empty spots
          const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null) as number[];
          if (emptyIndices.length > 0) {
            // Pick a random empty spot
            const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            const newBoard = [...board];
            newBoard[randomIndex] = "O";
            setBoard(newBoard);
            setXIsNext(true);
          }
        }, 500); // 500ms delay to feel like it's "thinking"
      }
    };
    aiMove();
  }, [xIsNext, board]);

  useEffect(() => {
    const winCheck = calculateWinner(board);
    if (winCheck) setWinner(winCheck);
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Gamepad2 className="w-8 h-8 text-blue-500" /> Tic-Tac-Toe
        </CardTitle>
        <CardDescription className="text-lg">
          Play against the computer!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-8 flex flex-col items-center">
        
        <div className="h-8 text-xl font-bold text-muted-foreground">
          {winner ? (
            <span className={winner === "X" ? "text-emerald-500" : winner === "O" ? "text-destructive" : "text-amber-500"}>
              {winner === "Draw" ? "It's a Draw!" : winner === "X" ? "You Win!" : "Computer Wins!"}
            </span>
          ) : (
            <span>{xIsNext ? "Your Turn (X)" : "Computer is thinking..."}</span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 bg-muted p-2 rounded-xl shadow-inner border w-64 h-64">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!!cell || !!winner || !xIsNext}
              className={`
                bg-background rounded-lg border shadow-sm text-5xl font-black transition-colors flex items-center justify-center
                ${!cell && !winner && xIsNext ? "hover:bg-muted cursor-pointer" : "cursor-default"}
                ${cell === "X" ? "text-blue-500" : cell === "O" ? "text-destructive" : ""}
              `}
            >
              {cell}
            </button>
          ))}
        </div>

        <Button variant="outline" size="lg" onClick={resetGame} className="w-full font-bold">
          <RotateCcw className="w-5 h-5 mr-2" /> Play Again
        </Button>
      </CardContent>
    </Card>
  );
}
