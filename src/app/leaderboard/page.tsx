
import { Leaderboard } from "@/components/leaderboard";
import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// This page reads searchParams and uses Prisma — must be dynamic
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Leaderboard - Top Player Rankings | CpsSpeedTest',
  description: 'Check out the top scores for all games on CpsSpeedTest. See how you stack up against the best players worldwide.',
  keywords: ['leaderboard', 'high scores', 'top players', 'cps test ranks', 'game scores'],
  alternates: {
    canonical: '/leaderboard',
  },
};

export default function LeaderboardPage({ searchParams }: { searchParams?: { game?: string } }) {
  const games = [
    { id: "cps-test", label: "CPS Test" },
    { id: "aim-trainer", label: "Aim Trainer" },
    { id: "typing-test", label: "Typing Test" },
    { id: "reaction-time", label: "Reaction Time" },
    { id: "spacebar-clicker", label: "Spacebar" },
    { id: "math-dash", label: "Math Dash" },
    { id: "simon-says", label: "Simon Says" },
    { id: "dino-run", label: "Dino Run" },
    { id: "snake", label: "Snake" },
    { id: "2048", label: "2048" }
  ];

  const defaultGame = games.find(g => g.id === searchParams?.game)?.id || "cps-test";

  return (
    <div className="w-full max-w-4xl mx-auto pb-12 px-2 sm:px-4">
      <header className="w-full mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Leaderboards
        </h1>
        <p className="text-muted-foreground mt-2 text-base sm:text-lg">
          Compete with players worldwide — see who has the top scores!
        </p>
      </header>
      
      <Tabs defaultValue={defaultGame} className="w-full">
        {/* Mobile: horizontal scrollable tab bar */}
        <ScrollArea className="w-full mb-6">
          <TabsList className="flex w-max min-w-full gap-1.5 bg-transparent p-1 h-auto justify-start sm:justify-center sm:flex-wrap sm:w-full">
            {games.map(game => (
              <TabsTrigger 
                key={game.id} 
                value={game.id}
                className="shrink-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 shadow-sm px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap"
              >
                {game.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        {games.map(game => (
          <TabsContent key={game.id} value={game.id} className="mt-0">
            <Leaderboard game={game.id} title={`${game.label} High Scores`} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}