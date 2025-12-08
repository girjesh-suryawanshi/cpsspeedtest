
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RefreshCw, Trophy } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from '@/lib/utils';

type GameState = 'idle' | 'waiting' | 'running' | 'finished';

const WAIT_DURATION = 3;

export function DragClickTest() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [gameDuration, setGameDuration] = useState(10);
  const [countdown, setCountdown] = useState(WAIT_DURATION);
  const [gameTimer, setGameTimer] = useState(gameDuration);
  const [clickCount, setClickCount] = useState(0);
  const [personalBest, setPersonalBest] = useState(0);
  const [rank, setRank] = useState("Beginner");

  useEffect(() => {
    const best = localStorage.getItem('dragCpsBest');
    if (best) {
      setPersonalBest(parseFloat(best));
    }
  }, []);

  const handleStart = useCallback(() => {
    setGameState('waiting');
    setCountdown(WAIT_DURATION);
    setClickCount(0);
    setGameTimer(gameDuration);
  }, [gameDuration]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (gameState === 'waiting' && countdown > 0) {
      intervalId = setInterval(() => setCountdown(prev => prev - 1), 1000);
    } else if (gameState === 'waiting' && countdown === 0) {
      setGameState('running');
    }
    return () => clearInterval(intervalId);
  }, [gameState, countdown]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (gameState === 'running' && gameTimer > 0) {
      intervalId = setInterval(() => setGameTimer(prev => prev - 1), 1000);
    } else if (gameState === 'running' && gameTimer === 0) {
      setGameState('finished');
    }
    return () => clearInterval(intervalId);
  }, [gameState, gameTimer]);

  const handleClick = () => {
    if (gameState === 'running') {
      setClickCount(prev => prev + 1);
    }
  };

  const cps = useMemo(() => {
    return gameDuration > 0 ? parseFloat((clickCount / gameDuration).toFixed(2)) : 0;
  }, [clickCount, gameDuration]);

  useEffect(() => {
    if (gameState === 'finished') {
      if (cps > personalBest) {
        setPersonalBest(cps);
        localStorage.setItem('dragCpsBest', cps.toString());
      }
      if (cps < 15) setRank("Beginner");
      else if (cps < 30) setRank("Intermediate");
      else if (cps < 50) setRank("Pro");
      else setRank("Godlike");
    }
  }, [gameState, cps, personalBest]);

  const renderContent = () => {
    switch (gameState) {
      case 'idle':
        return (
          <div className="text-center p-6">
            <h2 className="text-2xl font-semibold text-foreground/90">Drag Clicking Test</h2>
            <p className="text-muted-foreground mt-2">Select a duration and click start.</p>
          </div>
        );
      case 'waiting':
        return (
          <div className="text-center">
            <p className="text-xl text-muted-foreground font-medium">Get ready...</p>
            <p className="text-8xl font-bold font-headline text-primary">{countdown}</p>
          </div>
        );
      case 'running':
        return (
          <div className="text-center relative w-full h-full flex flex-col justify-center items-center">
            <div className="absolute top-4 right-4 text-2xl font-semibold text-primary">{gameTimer}s</div>
            <p className="text-8xl font-bold font-headline text-primary">{clickCount}</p>
            <p className="text-2xl font-semibold text-accent">{cps.toFixed(2)} CPS</p>
          </div>
        );
      case 'finished':
        return (
          <div className="text-center p-6 flex flex-col items-center">
            <p className="text-lg text-muted-foreground">Your Score</p>
            <p className="text-7xl font-bold font-headline text-primary">{cps}</p>
            <p className="text-muted-foreground">Clicks Per Second</p>
            <p className="text-2xl font-bold text-accent mt-4">{rank}</p>
            <div className="mt-4 text-lg">Personal Best: <span className="font-bold text-foreground">{personalBest.toFixed(2)} CPS</span></div>
          </div>
        );
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg overflow-hidden bg-background/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Test Area</CardTitle>
          <Select
            value={gameDuration.toString()}
            onValueChange={(val) => setGameDuration(parseInt(val))}
            disabled={gameState === 'running' || gameState === 'waiting'}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1s</SelectItem>
              <SelectItem value="5">5s</SelectItem>
              <SelectItem value="10">10s</SelectItem>
              <SelectItem value="30">30s</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent
        className={cn("p-0 cursor-pointer", gameState === 'running' && 'bg-primary/5')}
        onClick={handleClick}
      >
        <div className="flex items-center justify-center min-h-[350px] transition-colors bg-grid-slate-700/[0.1] [background-position:10px_10px]">
          {renderContent()}
        </div>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row justify-center p-6 border-t bg-card/50 gap-4">
        <Button size="lg" onClick={handleStart} className="w-full sm:w-auto" disabled={gameState === 'running' || gameState === 'waiting'}>
          {gameState === 'idle' ? <Play className="mr-2" /> : <RefreshCw className="mr-2" />}
          {gameState === 'idle' ? 'Start Test' : 'Try Again'}
        </Button>
      </CardFooter>
    </Card>
  );
}
