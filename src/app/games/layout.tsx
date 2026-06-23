import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games - Browse 30+ Free Skill Games',
  description: 'Browse our complete collection of 30+ free browser-based skill games. Clicking tests, typing games, memory challenges, aim trainers, puzzles, and more.',
  keywords: ['free games', 'skill games', 'cps test', 'typing test', 'memory game', 'aim trainer', 'reaction time'],
  alternates: {
    canonical: '/games',
  },
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
