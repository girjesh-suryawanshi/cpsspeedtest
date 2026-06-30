"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, RotateCcw, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const DISK_COUNT = 5;

type Peg = number[];
type Pegs = [Peg, Peg, Peg];

const generateInitialPegs = (count: number): Pegs => {
  const firstPeg = Array.from({ length: count }, (_, i) => count - i);
  return [firstPeg, [], []];
};

const DISK_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500"
];

export function TowerOfHanoi() {
  const [pegs, setPegs] = useState<Pegs>(generateInitialPegs(DISK_COUNT));
  const [selectedPeg, setSelectedPeg] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const resetGame = () => {
    setPegs(generateInitialPegs(DISK_COUNT));
    setSelectedPeg(null);
    setMoves(0);
    setWon(false);
  };

  const handlePegClick = (pegIndex: number) => {
    if (won) return;

    if (selectedPeg === null) {
      // Selecting a peg to move FROM
      if (pegs[pegIndex].length > 0) {
        setSelectedPeg(pegIndex);
      }
    } else {
      // Selecting a peg to move TO
      if (selectedPeg === pegIndex) {
        // Deselect
        setSelectedPeg(null);
        return;
      }

      const sourcePeg = pegs[selectedPeg];
      const destPeg = pegs[pegIndex];

      const diskToMove = sourcePeg[sourcePeg.length - 1];
      const topDestDisk = destPeg.length > 0 ? destPeg[destPeg.length - 1] : Infinity;

      if (diskToMove < topDestDisk) {
        // Valid move
        const newPegs = [...pegs] as Pegs;
        const disk = newPegs[selectedPeg].pop()!;
        newPegs[pegIndex].push(disk);
        
        setPegs(newPegs);
        setMoves(m => m + 1);
        setSelectedPeg(null);

        // Check win condition (all disks on peg 2 or 3)
        if (newPegs[2].length === DISK_COUNT || newPegs[1].length === DISK_COUNT) {
          setWon(true);
        }
      } else {
        // Invalid move
        setSelectedPeg(null);
      }
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Layers className="w-8 h-8 text-indigo-500" /> Tower of Hanoi
        </CardTitle>
        <CardDescription className="text-lg">
          Move all disks to the rightmost peg. Larger disks cannot be placed on smaller ones.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-8">
        
        <div className="flex justify-between items-center bg-muted/30 px-6 py-4 rounded-xl border">
          <div className="text-lg font-bold">
            Moves: <span className="text-primary text-2xl ml-2">{moves}</span>
          </div>
          <Button variant="outline" onClick={resetGame} className="font-bold">
            <RotateCcw className="mr-2 w-4 h-4" /> Restart
          </Button>
        </div>

        <div className="relative h-64 sm:h-80 bg-background border-2 border-border/50 rounded-xl flex items-end justify-around pb-6 px-4 pt-16">
          
          {won && (
            <div className="absolute inset-0 z-10 bg-background/80 flex flex-col items-center justify-center animate-in fade-in rounded-xl backdrop-blur-sm">
              <h3 className="text-4xl font-black text-green-500 mb-2">Puzzle Solved!</h3>
              <p className="text-lg font-bold text-muted-foreground mb-6">Completed in {moves} moves.</p>
              <Button size="lg" onClick={resetGame} className="font-bold text-lg shadow-lg">
                <Play className="mr-2" /> Play Again
              </Button>
            </div>
          )}

          {pegs.map((peg, pegIndex) => (
            <div 
              key={pegIndex}
              className={`relative w-1/4 h-full flex flex-col justify-end items-center cursor-pointer group ${selectedPeg === pegIndex ? 'bg-primary/5 rounded-t-full' : 'hover:bg-muted/30 rounded-t-full transition-colors'}`}
              onClick={() => handlePegClick(pegIndex)}
            >
              {/* The Peg Pole */}
              <div className={`absolute bottom-0 w-3 md:w-4 h-[90%] rounded-t-full ${selectedPeg === pegIndex ? 'bg-primary' : 'bg-secondary-foreground/20 group-hover:bg-secondary-foreground/40'} transition-colors z-0`} />
              
              {/* Base */}
              <div className="w-full h-4 bg-secondary-foreground/30 rounded-full z-0 mb-[-8px] md:mb-[-12px]" />
              
              {/* Disks */}
              <div className="absolute bottom-4 flex flex-col items-center w-full z-10 space-y-1">
                {[...peg].reverse().map((disk, diskIndex, arr) => {
                  const isTopDisk = diskIndex === 0;
                  const isSelected = selectedPeg === pegIndex && isTopDisk;
                  // disk sizes from 1 to DISK_COUNT
                  const widthPercent = 30 + (disk / DISK_COUNT) * 70; 
                  
                  return (
                    <div
                      key={disk}
                      className={cn(
                        "h-6 md:h-8 rounded-full border-2 border-black/20 shadow-sm transition-transform duration-200",
                        DISK_COLORS[(disk - 1) % DISK_COLORS.length],
                        isSelected ? "-translate-y-8 shadow-xl border-white/50" : ""
                      )}
                      style={{ width: `${widthPercent}%` }}
                    />
                  );
                })}
              </div>

              {selectedPeg === pegIndex && (
                <div className="absolute -top-10 text-primary font-bold animate-bounce text-sm uppercase">Selected</div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Click a peg to select its top disk, then click another peg to drop it. Minimum possible moves: {Math.pow(2, DISK_COUNT) - 1}.
        </p>

      </CardContent>
    </Card>
  );
}
