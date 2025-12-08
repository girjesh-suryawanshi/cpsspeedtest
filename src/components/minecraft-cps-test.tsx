
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RefreshCw } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

type GameState = 'idle' | 'waiting' | 'running' | 'finished';
type ClickMode = 'normal' | 'jitter' | 'butterfly' | 'drag';

const WAIT_DURATION = 3;

const getRank = (cps: number): string => {
    if (cps < 6) return 'Casual';
    if (cps < 9) return 'Decent';
    if (cps < 12) return 'Good';
    if (cps < 15) return 'Sweaty';
    return 'Insane';
};

export function MinecraftCpsTest() {
    const [gameState, setGameState] = useState<GameState>('idle');
    const [gameDuration, setGameDuration] = useState(10);
    const [clickMode, setClickMode] = useState<ClickMode>('normal');
    const [countdown, setCountdown] = useState(WAIT_DURATION);
    const [gameTimer, setGameTimer] = useState(gameDuration);
    const [clickCount, setClickCount] = useState(0);
    const [bestScores, setBestScores] = useState<Record<ClickMode, number>>({ normal: 0, jitter: 0, butterfly: 0, drag: 0 });

    useEffect(() => {
        try {
            const storedBests = localStorage.getItem('minecraftCpsBests');
            if (storedBests) {
                setBestScores(JSON.parse(storedBests));
            }
        } catch (e) {
            console.error("Failed to parse best scores from localStorage", e);
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
            const currentBest = bestScores[clickMode] || 0;
            if (cps > currentBest) {
                const newBests = { ...bestScores, [clickMode]: cps };
                setBestScores(newBests);
                localStorage.setItem('minecraftCpsBests', JSON.stringify(newBests));
            }
        }
    }, [gameState, cps, clickMode, bestScores]);

    const renderContent = () => {
        switch (gameState) {
            case 'idle':
                return <div className="text-center p-6"><h2 className="text-2xl font-semibold text-foreground/90">Minecraft CPS Test</h2><p className="text-muted-foreground mt-2">Choose your mode and duration, then press start.</p></div>;
            case 'waiting':
                return <div className="text-center"><p className="text-8xl font-bold font-mono text-primary">{countdown}</p></div>;
            case 'running':
                return (
                    <div className="text-center relative w-full h-full flex flex-col justify-center items-center">
                        <div className="absolute top-4 right-4 text-2xl font-semibold text-primary">{gameTimer}s</div>
                        <p className="text-8xl font-bold font-mono text-primary">{clickCount}</p>
                        <p className="text-2xl font-semibold text-accent">{cps.toFixed(2)} CPS</p>
                    </div>
                );
            case 'finished':
                return (
                    <div className="text-center p-6 flex flex-col items-center">
                        <p className="text-7xl font-bold font-mono text-primary">{cps}</p>
                        <p className="text-muted-foreground">Clicks Per Second</p>
                        <p className="text-3xl font-bold text-accent mt-4">{getRank(cps)}</p>
                        <p className="mt-4 text-lg">Best ({clickMode}): <span className="font-bold text-foreground">{bestScores[clickMode].toFixed(2)} CPS</span></p>
                    </div>
                );
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg overflow-hidden bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
                <div className="flex justify-between items-center gap-4">
                    <Tabs defaultValue="normal" onValueChange={(val) => setClickMode(val as ClickMode)}>
                        <TabsList>
                            <TabsTrigger value="normal">Normal</TabsTrigger>
                            <TabsTrigger value="jitter">Jitter</TabsTrigger>
                            <TabsTrigger value="butterfly">Butterfly</TabsTrigger>
                            <TabsTrigger value="drag">Drag</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Select value={gameDuration.toString()} onValueChange={(val) => setGameDuration(parseInt(val))} disabled={gameState === 'running' || gameState === 'waiting'}>
                        <SelectTrigger className="w-[100px]"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5">5s</SelectItem>
                            <SelectItem value="10">10s</SelectItem>
                            <SelectItem value="60">60s</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div 
                    onClick={handleClick}
                    className={cn(
                        "flex items-center justify-center min-h-[350px] transition-colors cursor-pointer",
                        "bg-slate-800/40 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.1)_75%),linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.1)_75%)] [background-position:0_0,10px_10px] [background-size:20px_20px]",
                         gameState === 'running' && 'bg-primary/5'
                    )}
                >
                    {renderContent()}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center p-6 border-t bg-card/50">
                <Button size="lg" onClick={handleStart} disabled={gameState === 'running' || gameState === 'waiting'}>
                     {gameState === 'idle' ? <Play className="mr-2" /> : <RefreshCw className="mr-2" />}
                     {gameState === 'idle' ? 'Start Test' : 'Try Again'}
                </Button>
            </CardFooter>
        </Card>
    );
}
