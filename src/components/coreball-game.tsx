"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play, RefreshCw } from 'lucide-react';

const CORE_RADIUS = 50;
const BALL_RADIUS = 10;
const ORBIT_RADIUS = 120;
const BALL_SPEED = 20;

type GameState = 'idle' | 'playing' | 'gameover' | 'levelComplete';

interface Ball {
  angle: number;
}

interface MovingBall {
  y: number;
}

export function CoreballGame() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [ballsLeft, setBallsLeft] = useState(15);
  const [level, setLevel] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Physics state kept in refs to prevent 60fps React re-renders
  const rotationRef = useRef(0);
  const attachedBallsRef = useRef<Ball[]>([]);
  const movingBallRef = useRef<MovingBall | null>(null);
  const collidingBallRef = useRef<Ball | null>(null);
  const gameStateRef = useRef<GameState>('idle'); // sync with React state for fast access in rAF
  const ballsLeftRef = useRef(15);
  const levelRef = useRef(1);

  const [themeColors, setThemeColors] = useState({
      background: '#0a0a0a',
      foreground: '#fcfcfc',
      primary: 'hsl(0 72% 51%)',
      destructive: 'hsl(0 62.8% 30.6%)',
  });

  // Sync refs with state when they change
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => { ballsLeftRef.current = ballsLeft; }, [ballsLeft]);
  useEffect(() => { levelRef.current = level; }, [level]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.documentElement);
      setThemeColors({
        background: `hsl(${computedStyle.getPropertyValue('--background').trim()})`,
        foreground: `hsl(${computedStyle.getPropertyValue('--foreground').trim()})`,
        primary: `hsl(${computedStyle.getPropertyValue('--primary').trim()})`,
        destructive: `hsl(${computedStyle.getPropertyValue('--destructive').trim()})`,
      });
    }
  }, []);

  const resetGame = useCallback((newLevel = 1) => {
    setLevel(newLevel);
    setGameState('playing');
    setBallsLeft(12 + newLevel - (newLevel > 1 ? 2 : 1));
    
    // Reset refs
    attachedBallsRef.current = newLevel > 1 ? [{angle: 0}, {angle: Math.PI}] : [{angle: 0}];
    movingBallRef.current = null;
    collidingBallRef.current = null;
    rotationRef.current = 0;
  }, []);

  const handleStart = () => {
    resetGame(1);
  };
  
  const handleNextLevel = () => {
    resetGame(level + 1);
  };

  const draw = useCallback((ctx: CanvasRenderingContext2D, center: { x: number, y: number }, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw background
    ctx.fillStyle = themeColors.background;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw core with pulse effect
    const pulse = Math.sin(frameCount * 0.05) * 2;
    ctx.beginPath();
    ctx.arc(center.x, center.y, CORE_RADIUS + pulse, 0, 2 * Math.PI);
    ctx.fillStyle = themeColors.foreground;
    ctx.fill();
    ctx.closePath();
    
    ctx.fillStyle = themeColors.background;
    ctx.font = 'bold 30px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(levelRef.current.toString(), center.x, center.y);

    // Draw attached balls and lines
    attachedBallsRef.current.forEach(ball => {
      const angle = ball.angle + rotationRef.current;
      const x = center.x + ORBIT_RADIUS * Math.cos(angle);
      const y = center.y + ORBIT_RADIUS * Math.sin(angle);

      // Draw line
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = themeColors.foreground;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      // Draw ball
      ctx.beginPath();
      ctx.arc(x, y, BALL_RADIUS, 0, 2 * Math.PI);
       if (collidingBallRef.current && ball.angle === collidingBallRef.current.angle && Math.floor(frameCount / 10) % 2 === 0) {
        ctx.fillStyle = themeColors.destructive;
      } else {
        ctx.fillStyle = themeColors.foreground;
      }
      ctx.fill();
      ctx.closePath();
    });

    // Draw moving ball
    if (movingBallRef.current) {
      ctx.beginPath();
      ctx.arc(center.x, movingBallRef.current.y, BALL_RADIUS, 0, 2 * Math.PI);
       if (collidingBallRef.current && Math.floor(frameCount / 10) % 2 === 0) {
        ctx.fillStyle = themeColors.destructive;
      } else {
        ctx.fillStyle = themeColors.primary;
      }
      ctx.fill();
      ctx.closePath();
    }
    
    // Draw balls left count
    ctx.fillStyle = themeColors.foreground;
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Balls left: ${ballsLeftRef.current}`, center.x, 30);

  }, [themeColors]);


  const shoot = useCallback(() => {
    if (gameStateRef.current === 'playing' && ballsLeftRef.current > 0 && !movingBallRef.current) {
      movingBallRef.current = { y: 500 };
      setBallsLeft(prev => prev - 1);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        shoot();
      }
    };
    const handleCanvasClick = (e: MouseEvent) => {
      if(canvasRef.current?.contains(e.target as Node)) {
        shoot();
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleCanvasClick);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleCanvasClick);
    };
  }, [shoot]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const center = { x: canvas.width / 2, y: 200 };
    let animationFrameId: number;
    let frameCount = 0;

    const gameLoop = () => {
      frameCount++;
      if (gameStateRef.current === 'playing') {
        rotationRef.current += 0.005 * (1 + levelRef.current * 0.2);

        if (movingBallRef.current) {
          const newY = movingBallRef.current.y - BALL_SPEED;
          if (newY <= center.y + ORBIT_RADIUS) {
            // Collision check
            const newAngle = -Math.PI / 2 - rotationRef.current;
            
            let collision = false;
            let hitBall: Ball | null = null;
            for (const ball of attachedBallsRef.current) {
                const angleDiff = Math.abs(newAngle - ball.angle) % (2 * Math.PI);
                if (Math.min(angleDiff, 2 * Math.PI - angleDiff) < (BALL_RADIUS * 2) / ORBIT_RADIUS) {
                    collision = true;
                    hitBall = ball;
                    break;
                }
            }

            if (collision) {
              collidingBallRef.current = hitBall;
              setGameState('gameover');
            } else {
              attachedBallsRef.current.push({ angle: newAngle });
              movingBallRef.current = null;
              if (ballsLeftRef.current === 0) {
                setGameState('levelComplete');
              }
            }
          } else {
            movingBallRef.current.y = newY;
          }
        }
      }
      
      draw(context, center, frameCount);
      animationFrameId = requestAnimationFrame(gameLoop);
    }

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  const renderOverlay = () => {
    if (gameState === 'gameover') {
      return (
        <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-destructive">Game Over</h2>
            <p className="text-muted-foreground mt-2">You reached level {level}</p>
        </div>
      );
    }
     if (gameState === 'levelComplete') {
      return (
        <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-primary">Level {level} Complete!</h2>
            <p className="text-muted-foreground mt-2">Get ready for the next one.</p>
        </div>
      );
    }
     if (gameState === 'idle') {
      return (
        <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">Coreball</h2>
            <p className="text-muted-foreground mt-2">Click or press Space to attach balls to the core.</p>
        </div>
      );
    }
    return null;
  }

  return (
     <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-8">
      <Card className="w-full shadow-xl overflow-hidden bg-card/60 backdrop-blur-sm border-border/20 transition-all duration-500 hover:border-primary/30 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <CardContent className="p-0 relative cursor-pointer z-10">
          <canvas ref={canvasRef} width="500" height="550" />
           {renderOverlay()}
        </CardContent>
         <CardFooter className="flex justify-center p-6 border-t border-border/10 bg-background/30 relative z-10">
            {gameState === 'idle' && (
               <Button size="lg" onClick={handleStart} className="w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                  <Play className="mr-2"/> Start Game
               </Button>
            )}
             {(gameState === 'gameover' || gameState === 'playing') && (
                 <Button size="lg" onClick={handleStart} className="w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                      <RefreshCw className="mr-2"/> Restart
                   </Button>
            )}
             {gameState === 'levelComplete' && (
                   <Button size="lg" onClick={handleNextLevel} className="w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                      <Play className="mr-2"/> Next Level
                   </Button>
            )}
        </CardFooter>
      </Card>
    </div>
  );
}
