
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RefreshCw, BrainCircuit } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from '@/lib/utils';

type GameState = 'idle' | 'running' | 'finished';
type ColorOption = { name: string; hex: string };

const COLORS: ColorOption[] = [
    { name: 'RED', hex: '#ef4444' },
    { name: 'BLUE', hex: '#3b82f6' },
    { name: 'GREEN', hex: '#22c55e' },
    { name: 'YELLOW', hex: '#eab308' },
];

const getFeedback = (accuracy: number, avgTime: number): string => {
    if (accuracy < 70) return 'Poor';
    if (accuracy < 85) return 'Average';
    if (accuracy < 95 && avgTime < 1200) return 'Good';
    if (accuracy >= 95 && avgTime < 900) return 'Excellent';
    return 'Good';
};

export function StroopTest() {
    const [gameState, setGameState] = useState<GameState>('idle');
    const [gameDuration, setGameDuration] = useState(30);
    const [timeLeft, setTimeLeft] = useState(gameDuration);
    const [score, setScore] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [wordText, setWordText] = useState('RED');
    const [wordColor, setWordColor] = useState('#3b82f6'); // blue
    const [responseTimes, setResponseTimes] = useState<number[]>([]);
    const lastWordTimeRef = useRef(0);

    const generateNewProblem = useCallback(() => {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        let randomWord = COLORS[Math.floor(Math.random() * COLORS.length)];
        
        // 50% chance to be mismatched
        if (Math.random() < 0.5) {
            while (randomWord.name === randomColor.name) {
                randomWord = COLORS[Math.floor(Math.random() * COLORS.length)];
            }
        } else {
             randomWord = randomColor;
        }

        setWordText(randomWord.name);
        setWordColor(randomColor.hex);
        lastWordTimeRef.current = Date.now();
    }, []);

    const handleStart = useCallback(() => {
        setGameState('running');
        setTimeLeft(gameDuration);
        setScore(0);
        setMistakes(0);
        setResponseTimes([]);
        generateNewProblem();
    }, [gameDuration, generateNewProblem]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameState === 'running' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && gameState === 'running') {
            setGameState('finished');
        }
        return () => clearInterval(timer);
    }, [gameState, timeLeft]);

    const handleAnswer = (chosenColor: string) => {
        if (gameState !== 'running') return;
        
        const responseTime = Date.now() - lastWordTimeRef.current;
        setResponseTimes(prev => [...prev, responseTime]);

        if (chosenColor === wordColor) {
            setScore(prev => prev + 1);
        } else {
            setMistakes(prev => prev + 1);
        }
        generateNewProblem();
    };

    const accuracy = useMemo(() => {
        const total = score + mistakes;
        return total === 0 ? 100 : Math.round((score / total) * 100);
    }, [score, mistakes]);
    
    const avgResponseTime = useMemo(() => {
        if (responseTimes.length === 0) return 0;
        const sum = responseTimes.reduce((a, b) => a + b, 0);
        return Math.round(sum / responseTimes.length);
    }, [responseTimes]);

    const renderContent = () => {
        switch (gameState) {
            case 'idle':
                return <div className="text-center p-6 flex flex-col items-center"><BrainCircuit className="w-16 h-16 text-primary mb-4" /><h2 className="text-2xl font-semibold">Stroop Test</h2><p className="text-muted-foreground mt-2">Click the button corresponding to the word's color.</p></div>;
            case 'running':
                return (
                    <div className="text-center p-6 flex flex-col items-center justify-center min-h-[300px]">
                        <h3 className="text-7xl font-extrabold" style={{ color: wordColor }}>{wordText}</h3>
                    </div>
                );
            case 'finished':
                return (
                    <div className="text-center p-6 w-full">
                        <h2 className="text-3xl font-bold">Test Over!</h2>
                        <p className="text-xl font-semibold text-primary mt-2">{getFeedback(accuracy, avgResponseTime)}</p>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                            <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Accuracy</p><p className="text-4xl font-bold text-primary">{accuracy}%</p></div>
                            <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Avg. Response</p><p className="text-4xl font-bold text-primary">{avgResponseTime}ms</p></div>
                             <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Correct</p><p className="text-4xl font-bold text-green-400">{score}</p></div>
                            <div className="p-4 rounded-lg bg-muted"><p className="text-muted-foreground text-sm">Mistakes</p><p className="text-4xl font-bold text-destructive">{mistakes}</p></div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                        <div><span className="text-sm text-muted-foreground">Time Left: </span><span className="font-bold text-primary">{timeLeft}s</span></div>
                        <div><span className="text-sm text-muted-foreground">Correct: </span><span className="font-bold text-green-400">{score}</span></div>
                        <div><span className="text-sm text-muted-foreground">Mistakes: </span><span className="font-bold text-destructive">{mistakes}</span></div>
                    </div>
                    <Select value={gameDuration.toString()} onValueChange={(v) => setGameDuration(parseInt(v))} disabled={gameState==='running'}>
                        <SelectTrigger className="w-[100px] ml-4"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30s</SelectItem>
                            <SelectItem value="60">60s</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="w-full h-[300px] bg-background/50 rounded-lg flex items-center justify-center">
                    {renderContent()}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center p-6 border-t bg-card/50">
                {gameState === 'running' ? (
                    <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                        {COLORS.map(color => (
                            <Button key={color.name} style={{backgroundColor: color.hex}} className="text-white font-bold text-lg" onClick={() => handleAnswer(color.hex)}>
                                {color.name}
                            </Button>
                        ))}
                    </div>
                ) : (
                    <Button size="lg" onClick={handleStart}>
                        {gameState === 'idle' ? <Play className="mr-2"/> : <RefreshCw className="mr-2" />}
                        {gameState === 'idle' ? 'Start Test' : 'Try Again'}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
