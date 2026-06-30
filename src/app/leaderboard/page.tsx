
import { Leaderboard } from "@/components/leaderboard";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaderboard - Top Player Rankings',
  description: 'Check out the top scores for the CPS Test and other games. See how you stack up against the best players.',
  keywords: ['leaderboard', 'high scores', 'top players', 'cps test ranks'],
   alternates: {
    canonical: '/leaderboard',
  },
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeaderboardPage({ searchParams }: { searchParams?: { game?: string } }) {
  const games = [
    { id: "cps-test", label: "CPS Test" },
    { id: "aim-trainer", label: "Aim Trainer" },
    { id: "typing-test", label: "Typing Test" },
    { id: "reaction-time", label: "Reaction Time" },
    { id: "spacebar-clicker", label: "Spacebar Clicker" },
    { id: "math-dash", label: "Math Dash" },
    { id: "simon-says", label: "Simon Says" },
    { id: "dino-run", label: "Dino Run" },
    { id: "snake", label: "Snake" },
    { id: "2048", label: "2048" }
  ];

  const defaultGame = searchParams?.game || "cps-test";

  return (
    <div className="w-full max-w-4xl mx-auto pb-12">
      <header className="w-full mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">
          Leaderboards
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Click the tabs below to view the top scores for each game!
        </p>
      </header>
      
      <Tabs defaultValue={defaultGame} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0 mb-6">
          {games.map(game => (
            <TabsTrigger 
              key={game.id} 
              value={game.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 shadow-sm px-4 py-2 text-sm sm:text-base font-semibold"
            >
              {game.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {games.map(game => (
          <TabsContent key={game.id} value={game.id} className="mt-0">
            <Leaderboard game={game.id} title={`${game.label} High Scores`} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

    