"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Play, RefreshCw, Award, Trophy, Timer, MousePointer, Keyboard, History, Info, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ScoreSubmitter } from './score-submitter';

const SUPPORTED_DURATIONS = [1, 3, 5, 10, 15, 30, 60];

type GameState = 'idle' | 'waiting' | 'running' | 'finished';
type StartMode = 'instant' | 'countdown';

interface ClickData {
  second: string;
  clicks: number;
}

interface AttemptHistory {
  date: string;
  duration: number;
  clicks: number;
  cps: number;
}

interface CpsTestProps {
  gameDuration?: number;
  allowDurationChange?: boolean;
}

export function CpsTest({ gameDuration = 5, allowDurationChange = true }: CpsTestProps) {
  const [duration, setDuration] = useState<number>(gameDuration);
  const [startMode, setStartMode] = useState<StartMode>('instant');
  const [gameState, setGameState] = useState<GameState>('idle');
  const [countdown, setCountdown] = useState<number>(3);
  const [clickCount, setClickCount] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(gameDuration);
  const [finalCps, setFinalCps] = useState<number>(0);
  const [actualDuration, setActualDuration] = useState<number>(gameDuration);
  const [clickTimestamps, setClickTimestamps] = useState<number[]>([]);
  const [personalBest, setPersonalBest] = useState<number | null>(null);
  const [isNewPersonalBest, setIsNewPersonalBest] = useState<boolean>(false);
  const [localHistory, setLocalHistory] = useState<AttemptHistory[]>([]);
  const [showSubmitDialog, setShowSubmitDialog] = useState<boolean>(false);
  const [inputMethod, setInputMethod] = useState<'mouse' | 'touch' | 'keyboard'>('mouse');

  const startTimeRef = useRef<number>(0);
  const timestampsRef = useRef<number[]>([]);
  const rafIdRef = useRef<number | null>(null);
  const countdownIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastPointerDownTimeRef = useRef<number>(0);
  const clickAreaRef = useRef<HTMLDivElement>(null);

  // Sync prop changes
  useEffect(() => {
    if (gameState === 'idle') {
      setDuration(gameDuration);
      setTimeRemaining(gameDuration);
    }
  }, [gameDuration, gameState]);

  // Load Personal Best and History from localStorage on mount & duration change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storedPb = localStorage.getItem(`cps_pb_${duration}s`);
      if (storedPb) {
        setPersonalBest(parseFloat(storedPb));
      } else {
        setPersonalBest(null);
      }

      const storedHistory = localStorage.getItem('cps_recent_history');
      if (storedHistory) {
        setLocalHistory(JSON.parse(storedHistory).slice(0, 5));
      }
    } catch {
      // localStorage may be disabled in private browsing
    }
  }, [duration]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, []);

  // End Test Function - High precision calculation
  const endTest = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const endTime = performance.now();
    const actualSeconds = Math.max(0.1, (endTime - startTimeRef.current) / 1000);
    const recordedClicks = timestampsRef.current.length;
    const computedCps = parseFloat((recordedClicks / actualSeconds).toFixed(2));

    setClickCount(recordedClicks);
    setActualDuration(parseFloat(actualSeconds.toFixed(2)));
    setFinalCps(computedCps);
    setClickTimestamps([...timestampsRef.current]);
    setTimeRemaining(0);
    setGameState('finished');

    // Update Personal Best & History
    try {
      const pbKey = `cps_pb_${duration}s`;
      const currentPb = localStorage.getItem(pbKey);
      const prevPbValue = currentPb ? parseFloat(currentPb) : 0;

      if (computedCps > prevPbValue && recordedClicks > 0) {
        localStorage.setItem(pbKey, computedCps.toString());
        setPersonalBest(computedCps);
        setIsNewPersonalBest(true);
      } else {
        setIsNewPersonalBest(false);
      }

      const newHistoryItem: AttemptHistory = {
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        duration,
        clicks: recordedClicks,
        cps: computedCps,
      };

      const updatedHistory = [newHistoryItem, ...localHistory].slice(0, 5);
      setLocalHistory(updatedHistory);
      localStorage.setItem('cps_recent_history', JSON.stringify(updatedHistory));
    } catch {
      // Storage unavailable
    }
  }, [duration, localHistory]);

  // High-precision RAF loop
  const startTimerLoop = useCallback((startMs: number, targetDurationSec: number) => {
    startTimeRef.current = startMs;
    const durationMs = targetDurationSec * 1000;

    const tick = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const remainingMs = Math.max(0, durationMs - elapsed);

      setTimeRemaining(parseFloat((remainingMs / 1000).toFixed(1)));

      if (elapsed >= durationMs) {
        endTest();
      } else {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);
  }, [endTest]);

  // Begin Running State
  const beginRunning = useCallback(() => {
    setGameState('running');
    const now = performance.now();
    startTimerLoop(now, duration);
  }, [duration, startTimerLoop]);

  // Start with Countdown
  const startCountdown = useCallback(() => {
    setGameState('waiting');
    setCountdown(3);
    setClickCount(0);
    timestampsRef.current = [];
    setClickTimestamps([]);
    setIsNewPersonalBest(false);

    let count = 3;
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    countdownIntervalRef.current = setInterval(() => {
      count -= 1;
      if (count <= 0) {
        if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
        beginRunning();
      } else {
        setCountdown(count);
      }
    }, 1000);
  }, [beginRunning]);

  // Start Trigger Handler
  const handleStartButton = useCallback(() => {
    if (gameState === 'waiting' || gameState === 'running') return;

    if (startMode === 'countdown') {
      startCountdown();
    } else {
      // Instant mode: reset state to idle and prompt first click
      setGameState('idle');
      setClickCount(0);
      setTimeRemaining(duration);
      timestampsRef.current = [];
      setClickTimestamps([]);
      setIsNewPersonalBest(false);
      clickAreaRef.current?.focus();
    }
  }, [gameState, startMode, startCountdown, duration]);

  // Pointer Down (Mouse & Touch deduplication)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return; // Only left clicks

    // Deduplicate touch/pen bounce events within 20ms
    const now = performance.now();
    if (now - lastPointerDownTimeRef.current < 20) return;
    lastPointerDownTimeRef.current = now;

    if (e.pointerType === 'touch') {
      setInputMethod('touch');
    } else {
      setInputMethod('mouse');
    }

    if (gameState === 'idle') {
      if (startMode === 'instant') {
        // First click immediately activates running state and counts as click #1
        timestampsRef.current = [now];
        setClickCount(1);
        setGameState('running');
        startTimerLoop(now, duration);
      }
      return;
    }

    if (gameState === 'running') {
      timestampsRef.current.push(now);
      setClickCount(timestampsRef.current.length);
    }
  };

  // Keyboard Spacebar Support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      if (e.repeat) return; // Prevent key-repeat inflation

      const now = performance.now();
      setInputMethod('keyboard');

      if (gameState === 'idle' && startMode === 'instant') {
        timestampsRef.current = [now];
        setClickCount(1);
        setGameState('running');
        startTimerLoop(now, duration);
        return;
      }

      if (gameState === 'running') {
        timestampsRef.current.push(now);
        setClickCount(timestampsRef.current.length);
      }
    }
  };

  // Reset to clean idle
  const handleReset = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    setGameState('idle');
    setClickCount(0);
    setTimeRemaining(duration);
    timestampsRef.current = [];
    setClickTimestamps([]);
    setIsNewPersonalBest(false);
  };

  // Rank determination based on verified community percentiles
  const clickRank = useMemo(() => {
    if (finalCps < 5) return { title: 'Turtle', icon: '🐢', description: 'Relaxed / Casual Speed', color: 'text-emerald-500' };
    if (finalCps < 8) return { title: 'Rabbit', icon: '🐇', description: 'Average User Speed', color: 'text-blue-500' };
    if (finalCps < 11) return { title: 'Cheetah', icon: '🐆', description: 'Experienced Fast Gamer', color: 'text-purple-500' };
    return { title: 'Falcon', icon: '🦅', description: 'Elite Competitor Tier', color: 'text-amber-500' };
  }, [finalCps]);

  // Chart data: buckets per 1-second interval
  const chartData = useMemo((): ClickData[] => {
    if (clickTimestamps.length === 0 || startTimeRef.current === 0) {
      return Array.from({ length: duration }, (_, i) => ({ second: `${i + 1}s`, clicks: 0 }));
    }

    const bucketCount = Math.max(1, Math.ceil(duration));
    const buckets: number[] = Array(bucketCount).fill(0);
    const start = startTimeRef.current;

    clickTimestamps.forEach(ts => {
      const sec = Math.floor((ts - start) / 1000);
      if (sec >= 0 && sec < bucketCount) {
        buckets[sec]++;
      }
    });

    return buckets.map((clicks, i) => ({
      second: `${i + 1}s`,
      clicks,
    }));
  }, [clickTimestamps, duration]);

  const chartConfig = {
    clicks: {
      label: "Clicks per Second",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
      {/* ── Mode & Duration Selectors ── */}
      {gameState === 'idle' && allowDurationChange && (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-card/60 border border-border/20 backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duration:</span>
            <div className="flex flex-wrap gap-1">
              {SUPPORTED_DURATIONS.map((d) => (
                <Button
                  key={d}
                  variant={duration === d ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setDuration(d);
                    setTimeRemaining(d);
                  }}
                  className="h-8 px-2.5 text-xs font-medium"
                >
                  {d}s
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trigger:</span>
            <div className="flex gap-1">
              <Button
                variant={startMode === 'instant' ? "default" : "outline"}
                size="sm"
                onClick={() => setStartMode('instant')}
                className="h-8 text-xs"
              >
                Instant Click
              </Button>
              <Button
                variant={startMode === 'countdown' ? "default" : "outline"}
                size="sm"
                onClick={() => setStartMode('countdown')}
                className="h-8 text-xs"
              >
                3s Countdown
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Interactive Test Card ── */}
      <Card className="w-full shadow-2xl overflow-hidden bg-card/80 backdrop-blur-md border border-border/30 relative">
        {/* Personal Best Ribbon */}
        {personalBest !== null && (
          <div className="absolute top-3 left-4 z-10 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-background/80 px-2.5 py-1 rounded-full border border-border/30">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Best ({duration}s): <strong className="text-foreground">{personalBest} CPS</strong></span>
          </div>
        )}

        {/* Live Timer & Input Indicator */}
        {gameState === 'running' && (
          <div className="absolute top-3 right-4 z-10 flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-sm px-2.5 py-0.5">
              {timeRemaining.toFixed(1)}s
            </Badge>
          </div>
        )}

        {/* Click Target Area */}
        <CardContent
          ref={clickAreaRef}
          tabIndex={0}
          role="button"
          aria-label={gameState === 'running' ? "Click area active, click rapidly" : "Click to start CPS test"}
          className={cn(
            "p-0 cursor-pointer select-none touch-manipulation outline-none transition-all duration-150 flex items-center justify-center min-h-[340px]",
            gameState === 'running' && "bg-primary/10 active:bg-primary/20 shadow-[inset_0_0_60px_rgba(var(--primary),0.25)]",
            gameState === 'waiting' && "bg-secondary/40 cursor-wait",
            gameState === 'finished' && "cursor-default"
          )}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
        >
          {gameState === 'idle' && (
            <div className="text-center p-8 space-y-3 pointer-events-none">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                <MousePointer className="w-8 h-8 animate-bounce" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {startMode === 'instant' ? "Click anywhere inside to start!" : "Ready for the countdown?"}
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {startMode === 'instant' 
                  ? `Your ${duration}-second timer starts immediately on your very first click or Spacebar tap.`
                  : "Click the Start button below to trigger the 3-second preparation countdown."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MousePointer className="w-3.5 h-3.5 text-primary" /> Left Mouse</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-primary" /> Touchscreen</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Keyboard className="w-3.5 h-3.5 text-primary" /> Spacebar</span>
              </div>
            </div>
          )}

          {gameState === 'waiting' && (
            <div className="text-center p-6 space-y-2 pointer-events-none animate-in zoom-in-95 duration-200">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Get Ready...</p>
              <div className="text-8xl sm:text-9xl font-black text-primary font-mono tracking-tighter">
                {countdown}
              </div>
              <p className="text-xs text-muted-foreground">Prepare to click as fast as possible</p>
            </div>
          )}

          {gameState === 'running' && (
            <div className="text-center p-6 space-y-2 pointer-events-none select-none">
              <div className="text-8xl sm:text-9xl font-black text-primary font-mono tabular-nums leading-none tracking-tight">
                {clickCount}
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-foreground/80 animate-pulse">
                Click Click Click!
              </p>
            </div>
          )}

          {gameState === 'finished' && (
            <div className="text-center p-6 sm:p-8 space-y-4 w-full max-w-lg mx-auto animate-in fade-in duration-300">
              {isNewPersonalBest && (
                <Badge className="bg-amber-500 hover:bg-amber-500 text-white gap-1 px-3 py-1 text-xs">
                  <Trophy className="w-3.5 h-3.5" /> New Personal Best!
                </Badge>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Score</p>
                <div className="text-6xl sm:text-7xl font-black text-primary font-mono tracking-tight my-1">
                  {finalCps}
                </div>
                <p className="text-sm font-semibold text-foreground">Clicks Per Second (CPS)</p>
              </div>

              {/* Score Breakdown pill */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-secondary/40 rounded-xl border border-border/20 text-xs">
                <div>
                  <div className="text-muted-foreground">Total Clicks</div>
                  <div className="font-bold text-foreground text-sm font-mono">{clickCount}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Actual Time</div>
                  <div className="font-bold text-foreground text-sm font-mono">{actualDuration}s</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Skill Tier</div>
                  <div className={cn("font-bold text-sm flex items-center justify-center gap-1", clickRank.color)}>
                    <span>{clickRank.icon}</span> {clickRank.title}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        {/* ── Control Footer ── */}
        <CardFooter className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-t border-border/20 bg-background/40 gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {gameState === 'finished' ? (
              <Button size="lg" onClick={handleReset} className="w-full sm:w-auto font-bold gap-2">
                <RefreshCw className="w-4 h-4" /> Try Again
              </Button>
            ) : gameState === 'idle' && startMode === 'countdown' ? (
              <Button size="lg" onClick={handleStartButton} className="w-full sm:w-auto font-bold gap-2">
                <Play className="w-4 h-4" /> Start Countdown
              </Button>
            ) : gameState === 'running' ? (
              <Button size="sm" variant="ghost" onClick={handleReset} className="text-xs text-muted-foreground">
                Cancel Test
              </Button>
            ) : (
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-primary" />
                <span>Timer precision: <strong>±1ms (performance.now)</strong></span>
              </div>
            )}
          </div>

          {gameState === 'finished' && (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowSubmitDialog(true)}
                className="w-full sm:w-auto gap-2 border-primary/30 hover:border-primary"
              >
                <Award className="w-4 h-4 text-primary" />
                Save to Leaderboard
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      {/* ── Performance Chart & Local History Breakdown ── */}
      {gameState === 'finished' && (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
          <Card className="md:col-span-2 shadow-lg bg-card/60 backdrop-blur-sm border-border/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Click Rate Over Time (Seconds)
              </CardTitle>
              <CardDescription className="text-xs">
                Examine your pacing consistency across each second of the test.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <LineChart data={chartData} margin={{ top: 10, right: 15, left: -15, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="second" tickLine={false} axisLine={false} tickMargin={6} textAnchor="middle" />
                  <YAxis tickLine={false} axisLine={false} tickMargin={6} allowDecimals={false} />
                  <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />
                  <Line
                    dataKey="clicks"
                    type="monotone"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2.5}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Local History Box */}
          <Card className="shadow-lg bg-card/60 backdrop-blur-sm border-border/20 flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <History className="w-4 h-4 text-primary" />
                Recent Attempts
              </CardTitle>
              <CardDescription className="text-xs">
                Stored in browser memory only.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4 pt-1">
              {localHistory.length === 0 ? (
                <p className="text-xs text-muted-foreground py-4 text-center">No previous attempts recorded yet.</p>
              ) : (
                <div className="space-y-2">
                  {localHistory.map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg bg-secondary/30 border border-border/10">
                      <div>
                        <span className="font-semibold text-foreground">{h.cps} CPS</span>
                        <span className="text-muted-foreground ml-1.5 font-mono">({h.clicks} clicks / {h.duration}s)</span>
                      </div>
                      <span className="text-[11px] text-muted-foreground">{h.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Leaderboard Submission Modal */}
      <ScoreSubmitter
        game="cps-test"
        score={finalCps}
        isOpen={showSubmitDialog}
        onClose={() => setShowSubmitDialog(false)}
        title="CPS Test Score"
        unit="CPS"
      />
    </div>
  );
}

export default CpsTest;
