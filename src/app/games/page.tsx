"use client";

import { GameSEO } from "@/components/game-seo";

import { useState, useMemo } from "react";
import { GameCard } from '@/components/game-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import {
  Search, Zap, Wind, Target, Keyboard, Type, Timer, Disc, BrainCircuit,
  MousePointerClick, Puzzle, Brain, Eye, MessageSquare, Paintbrush, FileText,
  Grip, GraduationCap, Blocks, Languages, Share2, Mouse, Palette, Gamepad2
} from "lucide-react";
import { cn } from "@/lib/utils";

const CupcakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.5 9.5a2.5 2.5 0 0 0-4-3.26A2.5 2.5 0 0 0 9.5 9.5" />
    <path d="M12 15a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z" />
    <path d="M12 9.5V15" /><path d="M12 21v-3" />
    <path d="m9 18 1.5-1.5" /><path d="m15 18-1.5-1.5" />
  </svg>
);
const ButterflyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/>
    <path d="M10 10H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4"/>
    <path d="m5 11 1-1-1-1"/><path d="m19 11-1-1 1-1"/>
    <path d="m12 10 2-3h-4l2 3z"/><path d="m12 14-2 3h4l-2-3z"/>
  </svg>
);
const DragClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5V2"/><path d="M12 10v3"/><path d="M12 18v-3"/>
    <path d="m15 8-3-3-3 3"/><path d="M9 16.5 12 22l3-5.5"/>
    <rect width="18" height="20" x="3" y="2" rx="4"/>
    <path d="M12 10a2.5 2.5 0 0 1-2.5-2.5V5h5v2.5A2.5 2.5 0 0 1 12 10Z"/>
  </svg>
);

type Category = 'All' | 'Clicking' | 'Typing' | 'Memory' | 'Strategy' | 'Creative' | 'Fun';

const CATEGORIES: Category[] = ['All', 'Clicking', 'Typing', 'Memory', 'Strategy', 'Creative', 'Fun'];

const allGames = [
  { title: 'CPS Test', description: 'Measure your clicks per second in a 5-second challenge.', href: '/cps-test', icon: <Zap />, category: 'Clicking' as Category },
  { title: 'Minecraft CPS Test', description: 'Click speed test tailored for Minecraft PvP battles.', href: '/minecraft-cps-test', icon: <Mouse />, category: 'Clicking' as Category, badge: 'NEW' },
  { title: 'Jitter Click Test', description: 'Master the jitter technique for maximum CPS.', href: '/jitter-click-test', icon: <Wind />, category: 'Clicking' as Category },
  { title: 'Kohi Click Test', description: 'The classic 10-second Minecraft clicking challenge.', href: '/kohi-click-test', icon: <Target />, category: 'Clicking' as Category },
  { title: 'Butterfly Click Test', description: 'Alternate two fingers for record-breaking speed.', href: '/butterfly-click-test', icon: <ButterflyIcon />, category: 'Clicking' as Category },
  { title: 'Drag Click Test', description: 'Measure your drag-clicking technique CPS.', href: '/drag-click-test', icon: <DragClickIcon />, category: 'Clicking' as Category, badge: 'NEW' },
  { title: 'Double Click Test', description: 'Check your mouse for accidental double-click issues.', href: '/double-click-test', icon: <MousePointerClick />, category: 'Clicking' as Category, badge: 'NEW' },
  { title: 'Aim Trainer', description: 'Improve mouse precision and accuracy for FPS games.', href: '/aim-trainer', icon: <Target />, category: 'Clicking' as Category, badge: 'TRENDING' },
  { title: 'Spacebar Clicker', description: 'How many times can you hit the spacebar per second?', href: '/spacebar-clicker', icon: <Keyboard />, category: 'Typing' as Category },
  { title: 'Stimulation Clicker', description: 'A rapid-fire 30-second spacebar challenge.', href: '/stimulation-clicker', icon: <Keyboard />, category: 'Typing' as Category },
  { title: 'Typing Test', description: 'Measure your Words Per Minute with accuracy tracking.', href: '/typing-test', icon: <Type />, category: 'Typing' as Category },
  { title: 'Typing Test (30s)', description: 'A quick 30-second typing speed sprint.', href: '/typing-test-30s', icon: <Type />, category: 'Typing' as Category },
  { title: 'Coreball Game', description: 'A precision game of timing and coordination.', href: '/coreball-game', icon: <Disc />, category: 'Strategy' as Category },
  { title: 'Cupcake 2048', description: 'Merge cupcakes in this delicious 2048 variant.', href: '/cupcake-2048', icon: <CupcakeIcon />, category: 'Strategy' as Category },
  { title: 'Jigsaw Puzzle', description: 'Drag and drop pieces to complete the image.', href: '/jigsaw-puzzle', icon: <Grip />, category: 'Strategy' as Category },
  { title: 'Sliding Puzzle', description: 'Slide tiles into the correct order to solve the puzzle.', href: '/sliding-puzzle', icon: <Puzzle />, category: 'Strategy' as Category },
  { title: 'Reaction Time Test', description: 'Test your reflexes — click when the screen turns green.', href: '/reaction-time-test', icon: <Timer />, category: 'Memory' as Category },
  { title: 'Stroop Test', description: 'Test your cognitive control and focus.', href: '/stroop-test', icon: <Palette />, category: 'Memory' as Category, badge: 'NEW' },
  { title: 'Memory Game', description: 'Find all the matching card pairs.', href: '/memory-game', icon: <BrainCircuit />, category: 'Memory' as Category },
  { title: 'Number Memory', description: 'Memorize the growing number sequence.', href: '/number-memory-test', icon: <Brain />, category: 'Memory' as Category, badge: 'NEW' },
  { title: 'Sequence Memory', description: 'Repeat the flashing tile sequence correctly.', href: '/sequence-memory-test', icon: <BrainCircuit />, category: 'Memory' as Category },
  { title: 'Chimp Test', description: 'Are you smarter than a chimpanzee?', href: '/chimp-test', icon: <Brain />, category: 'Memory' as Category, badge: 'TRENDING' },
  { title: 'Verbal Memory', description: 'Have you seen this word before?', href: '/verbal-memory-test', icon: <MessageSquare />, category: 'Memory' as Category },
  { title: 'Visual Memory', description: 'Memorize and recall highlighted grid squares.', href: '/visual-memory-test', icon: <Eye />, category: 'Memory' as Category },
  { title: 'Word Memory', description: 'Recall as many words as you can from the list.', href: '/word-memory-test', icon: <FileText />, category: 'Memory' as Category },
  { title: 'Math Quiz', description: 'Solve arithmetic problems against the clock.', href: '/math-quiz', icon: <GraduationCap />, category: 'Fun' as Category },
  { title: 'Word Scramble', description: 'Unscramble as many jumbled words as possible.', href: '/word-scramble', icon: <Languages />, category: 'Fun' as Category },
  { title: 'Drawing Pad', description: 'Unleash your creativity on a blank canvas.', href: '/drawing-pad', icon: <Paintbrush />, category: 'Creative' as Category },
  { title: 'Block Builder', description: 'Create pixel art with a color grid builder.', href: '/block-builder', icon: <Blocks />, category: 'Creative' as Category },
  { title: 'Connect the Dots', description: 'Connect numbered dots to reveal the hidden picture.', href: '/connect-the-dots', icon: <Share2 />, category: 'Creative' as Category },
];

const categoryCounts = CATEGORIES.slice(1).reduce<Record<string, number>>((acc, cat) => {
  acc[cat] = allGames.filter(g => g.category === cat).length;
  return acc;
}, {});
categoryCounts['All'] = allGames.length;

export default function GamesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    return allGames.filter(game => {
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      const matchesSearch = !term || game.title.toLowerCase().includes(term) || game.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      <GameSEO 
        name="CPS Test"
        description="Measure your clicks per second in a 5-second challenge."
        url="https://www.cpsspeedtest.com/games"
        faqs={[
  {
    "question": "What is CPS Test?",
    "answer": "Measure your clicks per second in a 5-second challenge."
  },
  {
    "question": "How do I play CPS Test?",
    "answer": "You can play CPS Test directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="w-full max-w-6xl mx-auto">
      <header className="py-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>{allGames.length} Free Games</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Game Library</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-lg mx-auto">
          Browse our full collection of free skill-based games.
        </p>
      </header>

      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Search games by name or description..."
          className="pl-10 h-11 bg-card/50 border-border/30 focus:border-primary/50"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map(cat => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "h-8 text-xs gap-1.5 transition-all",
              activeCategory === cat && "shadow-md shadow-primary/20"
            )}
          >
            {cat}
            <Badge
              variant="secondary"
              className={cn(
                "h-4 px-1.5 text-[10px] font-bold",
                activeCategory === cat ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
            >
              {categoryCounts[cat] ?? allGames.filter(g => g.category === cat).length}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> game{filtered.length !== 1 ? 's' : ''}
        {search && <span> for &ldquo;<span className="text-primary">{search}</span>&rdquo;</span>}
        {activeCategory !== 'All' && <span> in <span className="text-primary">{activeCategory}</span></span>}
      </p>

      {/* Game grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              href={game.href}
              icon={game.icon}
              badge={game.badge}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p className="text-lg font-medium">No games found</p>
          <p className="text-sm mt-1">Try a different search term or category.</p>
          <Button variant="ghost" className="mt-4" onClick={() => { setSearch(''); setActiveCategory('All'); }}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
    </>
  );
}
