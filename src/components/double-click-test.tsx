
"use client";

import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RefreshCw, MousePointerClick } from 'lucide-react';
import { cn } from '@/lib/utils';

type GameState = 'idle' | 'running' | 'finished';
type Target = { x: number; y: number };

const TOTAL_TARGETS = 20;
const DOUBLE_CLICK_THRESHOLD = 50; // ms

export function DoubleClickTest() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [target, setTarget] = useState<Target | null>(null);
  const [targetCount, setTargetCount] = useState(0);
  const [singleClicks, setSingleClicks] = useState(0);
  const [doubleClicks, setDoubleClicks] = useState(0);
  const [misses, setMisses] = useState(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  
  const lastClickTimeRef = useRef(0);
  const targetAppearTimeRef = useRef(0);

  const spawnTarget = useCallback(() => {
    if (targetCount >= TOTAL_TARGETS) {
      setGameState('finished');
      setTarget(null);
      return;
    }
    setTargetCount(prev => prev + 1);
    targetAppearTimeRef.current = Date.now();
    setTarget({
      x: Math.random() * 85 + 5, // % from 5 to 90
      y: Math.random() * 85 + 5, // % from 5 to 90
    });
  }, [targetCount]);

  const handleStart = () => {
    setGameState('running');
    setTargetCount(0);
    setSingleClicks(0);
    setDoubleClicks(0);
    setMisses(0);
    setReactionTimes([]);
    spawnTarget();
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gameState !== 'running' || !target) return;

    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;
    lastClickTimeRef.current = now;

    if (timeSinceLastClick < DOUBLE_CLICK_THRESHOLD) {
      setDoubleClicks(prev => prev + 1);
      // Don't spawn a new target, as this is part of the previous click's error
      return;
    }

    setReactionTimes(prev => [...prev, now - targetAppearTimeRef.current]);
    setSingleClicks(prev => prev + 1);
    setTarget(null); // Hide target
    setTimeout(spawnTarget, 500); // Spawn next target after a delay
  };

  const handleMiss = () => {
    if (gameState === 'running' && target) {
      setMisses(prev => prev + 1);
      setTarget(null);
      setTimeout(spawnTarget, 500);
    }
  };

  const avgReactionTime = useMemo(() => {
    if (reactionTimes.length === 0) return 0;
    const sum = reactionTimes.reduce((a, b) => a + b, 0);
    return Math.round(sum / reactionTimes.length);
  }, [reactionTimes]);
  
  const renderContent = () => {
    switch (gameState) {
      case 'idle':
        return (
          <div className="text-center p-6 flex flex-col items-center">
            <MousePointerClick className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-2xl font-semibold">Double Click Test</h2>
            <p className="text-muted-foreground mt-2">Click "Start" then click the box once when it appears.</p>
          </div>
        );
      case 'running':
        return (
          <div className="relative w-full h-full cursor-pointer" onClick={handleMiss}>
            {target && (
              <div
                className="absolute w-20 h-20 bg-primary rounded-lg shadow-lg flex items-center justify-center text-primary-foreground font-bold"
                style={{ left: `${target.x}%`, top: `${target.y}%` }}
                onClick={handleTargetClick}
              >
                Click
              </div>
            )}
          </div>
        );
      case 'finished':
        const issuePercentage = (doubleClicks / (singleClicks + doubleClicks)) * 100 || 0;
        return (
          <div className="text-center p-6 w-full">
            <h2 className="text-3xl font-bold">Test Complete!</h2>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center max-w-md mx-auto">
              <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Correct Clicks</p><p className="text-3xl font-bold text-green-400">{singleClicks}</p></div>
              <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Unwanted Double Clicks</p><p className="text-3xl font-bold text-destructive">{doubleClicks}</p></div>
              <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Missed Clicks</p><p className="text-3xl font-bold text-orange-400">{misses}</p></div>
              <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Avg. Reaction</p><p className="text-3xl font-bold text-primary">{avgReactionTime}ms</p></div>
            </div>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <h3 className="font-semibold text-lg">Recommendation</h3>
              <p className="text-accent-foreground">{issuePercentage > 5 ? "Your mouse appears to have a double-clicking issue." : "Your mouse seems to be working correctly."}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg bg-background/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle>Test Area</CardTitle>
        {gameState === 'running' && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Target: {targetCount}/{TOTAL_TARGETS}</span>
            <span>Double Clicks: <span className="text-destructive font-bold">{doubleClicks}</span></span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] bg-background/50 rounded-lg relative overflow-hidden">
          {renderContent()}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-6 border-t bg-card/50">
        <Button size="lg" onClick={handleStart}>
          {gameState === 'idle' ? <Play className="mr-2" /> : <RefreshCw className="mr-2" />}
          {gameState === 'idle' ? 'Start Test' : 'Try Again'}
        </Button>
      </CardFooter>
    </Card>
  );
}
