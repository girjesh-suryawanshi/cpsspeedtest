
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

export default function LeaderboardPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="w-full mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">
          Leaderboard
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          See who has the fastest clicks on the block.
        </p>
      </header>
      <Leaderboard game="cps-test" title="CPS Test High Scores" />
    </div>
  );
}

    