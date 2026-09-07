"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Apple, Cat, Dog, Car, Plane, Gift, Ghost, Bomb, Star, Sun } from 'lucide-react';

const ICONS = [
  { icon: Apple, name: 'apple' }, { icon: Cat, name: 'cat' }, { icon: Dog, name: 'dog' },
  { icon: Car, name: 'car' }, { icon: Plane, name: 'plane' }, { icon: Gift, name: 'gift' },
  { icon: Ghost, name: 'ghost' }, { icon: Bomb, name: 'bomb' }, { icon: Star, name: 'star'}, { icon: Sun, name: 'sun'}
];

type CardData = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type GameState = 'idle' | 'playing' | 'finished';

const createGameBoard = (): CardData[] => {
  const selectedIcons = ICONS.sort(() => 0.5 - Math.random()).slice(0, 8);
  const gameCards = [...selectedIcons, ...selectedIcons]
    .map((iconData, index) => ({
      id: index,
      icon: iconData.icon,
      name: iconData.name,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);
  return gameCards;
};

export function MemoryGame() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCards(createGameBoard());
    setFlippedCards([]);
    setMoves(0);
    setTimer(0);
  };

  const handleCardClick = (id: number) => {
    if (gameState !== 'playing' || flippedCards.length === 2) return;

    const clickedCard = cards.find(card => card.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    setCards(prevCards => prevCards.map(card => card.id === id ? { ...card, isFlipped: true } : card));

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstCardId);
      const secondCard = cards.find(c => c.id === secondCardId);

      if (firstCard && secondCard && firstCard.name === secondCard.name) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.name === firstCard.name ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              newFlippedCards.includes(card.id) ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  
  useEffect(() => {
    if(cards.length > 0 && cards.every(c => c.isMatched)) {
        setGameState('finished');
    }
  }, [cards])

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
      <Card className="w-full shadow-xl overflow-hidden bg-card/60 backdrop-blur-sm border-border/20 transition-all duration-500 hover:border-primary/30 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <CardContent className="p-6 relative z-10">
          {gameState === 'playing' || gameState === 'finished' ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg">Moves: <span className="font-bold text-primary">{moves}</span></div>
                <div className="text-lg">Time: <span className="font-bold text-primary">{timer}s</span></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {cards.map(card => (
                  <div key={card.id} onClick={() => handleCardClick(card.id)} className="perspective-1000">
                    <div className={cn(
                      "w-full h-24 rounded-xl transform-style-3d transition-transform duration-500 cursor-pointer",
                      card.isFlipped || card.isMatched ? 'rotate-y-180' : 'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20'
                    )}>
                      <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gradient-to-br from-primary to-primary/60 rounded-xl shadow-md border border-white/10">
                        
                      </div>
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-card rounded-xl shadow-inner border border-border/50">
                         <card.icon className={cn("w-12 h-12", card.isMatched ? "text-green-400" : "text-primary")} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
             <div className="text-center p-6 flex flex-col items-center justify-center min-h-[350px]">
                <h2 className="text-2xl font-semibold text-foreground/90">Memory Game</h2>
                <p className="text-muted-foreground mt-2">Find all the matching pairs!</p>
            </div>
          )}

          {gameState === 'finished' && (
             <div className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold text-primary">Congratulations!</h2>
                <p className="text-muted-foreground mt-2">You completed the game in {moves} moves and {timer} seconds.</p>
            </div>
          )}
        </CardContent>
        {(gameState === 'idle' || gameState === 'finished') && (
          <CardFooter className="flex justify-center p-6 border-t border-border/10 bg-background/30 relative z-10">
            <Button size="lg" onClick={startGame} className="w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
              {gameState === 'idle' ? <Play className="mr-2" /> : <RefreshCw className="mr-2" />}
              {gameState === 'idle' ? 'Start Game' : 'Play Again'}
            </Button>
          </CardFooter>
        )}
      </Card>
       <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
