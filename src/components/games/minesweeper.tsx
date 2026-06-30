"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bomb, Flag, RotateCcw } from "lucide-react";

type Cell = {
  row: number;
  col: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
};

type Board = Cell[][];

const ROWS = 10;
const COLS = 10;
const MINES_COUNT = 15;

const generateBoard = (): Board => {
  const board: Board = [];
  for (let r = 0; r < ROWS; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push({ row: r, col: c, isMine: false, isRevealed: false, isFlagged: false, neighborMines: 0 });
    }
    board.push(row);
  }

  // Place mines
  let minesPlaced = 0;
  while (minesPlaced < MINES_COUNT) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!board[r][c].isMine) {
      board[r][c].isMine = true;
      minesPlaced++;
    }
  }

  // Calculate neighbors
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!board[r][c].isMine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].isMine) {
              count++;
            }
          }
        }
        board[r][c].neighborMines = count;
      }
    }
  }
  return board;
};

export function Minesweeper() {
  const [board, setBoard] = useState<Board>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [flagsLeft, setFlagsLeft] = useState(MINES_COUNT);
  const [flagMode, setFlagMode] = useState(false);

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  const resetGame = () => {
    setBoard(generateBoard());
    setGameOver(false);
    setWin(false);
    setFlagsLeft(MINES_COUNT);
  };

  const revealCell = (r: number, c: number, currentBoard: Board) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
    const cell = currentBoard[r][c];
    if (cell.isRevealed || cell.isFlagged) return;

    cell.isRevealed = true;
    if (cell.neighborMines === 0 && !cell.isMine) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          revealCell(r + dr, c + dc, currentBoard);
        }
      }
    }
  };

  const checkWin = (currentBoard: Board) => {
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = currentBoard[r][c];
        if (!cell.isMine && !cell.isRevealed) return false;
      }
    }
    return true;
  };

  const handleCellClick = (r: number, c: number) => {
    if (gameOver || win) return;

    const newBoard = [...board];
    const cell = newBoard[r][c];

    if (flagMode) {
      handleRightClick(r, c, { preventDefault: () => {} } as any);
      return;
    }

    if (cell.isFlagged || cell.isRevealed) return;

    if (cell.isMine) {
      cell.isRevealed = true;
      setGameOver(true);
      // Reveal all mines
      newBoard.forEach(row => row.forEach(cl => { if (cl.isMine) cl.isRevealed = true; }));
    } else {
      revealCell(r, c, newBoard);
      if (checkWin(newBoard)) {
        setWin(true);
      }
    }
    setBoard([...newBoard]);
  };

  const handleRightClick = (r: number, c: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (gameOver || win) return;

    const newBoard = [...board];
    const cell = newBoard[r][c];

    if (cell.isRevealed) return;

    if (!cell.isFlagged && flagsLeft > 0) {
      cell.isFlagged = true;
      setFlagsLeft(prev => prev - 1);
    } else if (cell.isFlagged) {
      cell.isFlagged = false;
      setFlagsLeft(prev => prev + 1);
    }
    setBoard([...newBoard]);
  };

  if (board.length === 0) return null;

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Bomb className="w-8 h-8 text-destructive" /> Minesweeper
        </CardTitle>
        <CardDescription className="text-lg">
          Clear the board without hitting a mine!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-6">
        
        <div className="flex justify-between items-center">
          <div className="bg-muted px-4 py-2 rounded-lg text-center shadow-inner border flex items-center gap-2">
            <Flag className="w-4 h-4 text-red-500" />
            <span className="font-bold tabular-nums text-lg">{flagsLeft}</span>
          </div>
          
          <Button variant="outline" size="sm" onClick={() => setFlagMode(!flagMode)} className={`md:hidden font-bold ${flagMode ? "bg-red-500/10 text-red-500 border-red-500/50" : ""}`}>
             <Flag className="w-4 h-4 mr-2" /> {flagMode ? "Flag Mode ON" : "Flag Mode OFF"}
          </Button>

          <Button variant="outline" onClick={resetGame} className="font-bold">
            <RotateCcw className="w-4 h-4 mr-2" /> Restart
          </Button>
        </div>

        {gameOver && (
          <div className="bg-destructive/10 border-destructive/20 text-destructive text-center p-3 rounded-lg font-bold animate-in zoom-in">
            BOOM! You hit a mine.
          </div>
        )}
        {win && (
          <div className="bg-emerald-500/10 border-emerald-500/20 text-emerald-500 text-center p-3 rounded-lg font-bold animate-in zoom-in">
            You cleared the minefield!
          </div>
        )}

        <div className="flex justify-center">
          <div className="grid grid-cols-10 gap-1 bg-muted p-2 rounded-lg border shadow-inner">
            {board.map((row, r) =>
              row.map((cell, c) => (
                <button
                  key={`${r}-${c}`}
                  onClick={() => handleCellClick(r, c)}
                  onContextMenu={(e) => handleRightClick(r, c, e)}
                  className={`
                    w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center font-bold text-xs sm:text-sm rounded-sm transition-all
                    ${cell.isRevealed ? "bg-background border shadow-inner" : "bg-primary/20 hover:bg-primary/30 border border-primary/10 shadow-sm cursor-pointer"}
                    ${cell.isRevealed && cell.isMine ? "bg-destructive/20 border-destructive text-destructive" : ""}
                  `}
                >
                  {cell.isRevealed ? (
                    cell.isMine ? <Bomb className="w-4 h-4 sm:w-5 sm:h-5" /> : (cell.neighborMines > 0 ? (
                      <span className={`
                        ${cell.neighborMines === 1 ? 'text-blue-500' : ''}
                        ${cell.neighborMines === 2 ? 'text-green-500' : ''}
                        ${cell.neighborMines === 3 ? 'text-red-500' : ''}
                        ${cell.neighborMines === 4 ? 'text-purple-500' : ''}
                        ${cell.neighborMines > 4 ? 'text-amber-500' : ''}
                      `}>
                        {cell.neighborMines}
                      </span>
                    ) : null)
                  ) : (
                    cell.isFlagged ? <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" /> : null
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Desktop: <strong>Right-Click</strong> to flag. Mobile: Toggle <strong>Flag Mode</strong>.
        </p>

      </CardContent>
    </Card>
  );
}
