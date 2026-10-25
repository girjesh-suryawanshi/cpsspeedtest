"use client";

import { useState, useMemo } from "react";
import { GameCard } from '@/components/game-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import {
  Search, Zap, Wind, Target, Keyboard, Type, Timer, Disc, BrainCircuit,
  MousePointerClick, Puzzle, Brain, Eye, MessageSquare, Paintbrush, FileText,
  Grip, GraduationCap, Blocks, Languages, Share2, Mouse, Palette, Gamepad2,
  Clock, Hand, Coins, Grid2x2, Grid3x3, Bird, Bomb, Calculator, Layers
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

type Category = 'All' | 'Clicking' | 'Typing' | 'Memory' | 'Strategy' | 'Creative' | 'Arcade';

const CATEGORIES: Category[] = ['All', 'Clicking', 'Typing', 'Memory', 'Strategy', 'Arcade', 'Creative'];

const allGames = [
  // Clicking
  { title: 'CPS Test', description: 'Measure your clicks per second with sub-millisecond precision.', href: '/cps-test', icon: <Zap />, category: 'Clicking' as Category, badge: 'CORE' },
  { title: '1-Second CPS Test', description: 'Measure your explosive 1-second burst clicking speed.', href: '/cps-test-1s', icon: <Zap />, category: 'Clicking' as Category },
  { title: 'Minecraft CPS Test', description: 'Click speed test tailored for Minecraft 1.8 PvP combat.', href: '/minecraft-cps-test', icon: <Mouse />, category: 'Clicking' as Category, badge: 'HOT' },
  { title: 'Jitter Click Test', description: 'Master forearm oscillation for sustained high-speed clicking.', href: '/jitter-click-test', icon: <Wind />, category: 'Clicking' as Category },
  { title: 'Kohi Click Test', description: 'The classic 10-second endurance challenge from Minecraft Kohi.', href: '/kohi-click-test', icon: <Target />, category: 'Clicking' as Category },
  { title: 'Butterfly Click Test', description: 'Alternate two fingers on the mouse button for peak cadence.', href: '/butterfly-click-test', icon: <ButterflyIcon />, category: 'Clicking' as Category },
  { title: 'Drag Click Test', description: 'Measure friction drag-clicking bursts for fast bridging.', href: '/drag-click-test', icon: <DragClickIcon />, category: 'Clicking' as Category, badge: 'NEW' },
  { title: 'Double Click Test', description: 'Diagnostic switch tool to test for accidental hardware double clicks.', href: '/double-click-test', icon: <MousePointerClick />, category: 'Clicking' as Category, badge: 'UTILITY' },
  { title: 'Aim Trainer', description: 'Improve target acquisition speed and flick accuracy for FPS games.', href: '/aim-trainer', icon: <Target />, category: 'Clicking' as Category, badge: 'TRENDING' },
  { title: 'Idle Clicker', description: 'Cookie-clicker style incremental upgrade clicking game.', href: '/idle-clicker', icon: <Coins />, category: 'Clicking' as Category },

  // Typing
  { title: 'Typing Test', description: 'Standard 60-second typing test measuring WPM and accuracy.', href: '/typing-test', icon: <Type />, category: 'Typing' as Category },
  { title: 'Typing Test (30s)', description: 'Quick 30-second typing sprint for rapid baseline evaluation.', href: '/typing-test-30s', icon: <Type />, category: 'Typing' as Category },
  { title: 'Type Racer', description: 'Sprint through text passages with real-time speed feedback.', href: '/type-racer', icon: <Keyboard />, category: 'Typing' as Category },
  { title: 'Spacebar Clicker', description: 'Test how many times you can actuate the spacebar per second.', href: '/spacebar-clicker', icon: <Keyboard />, category: 'Typing' as Category },
  { title: 'Stimulation Clicker', description: 'Endurance 30-second spacebar cadence sprint.', href: '/stimulation-clicker', icon: <Keyboard />, category: 'Typing' as Category },

  // Memory & Cognitive
  { title: 'Reaction Time Test', description: 'Test visual reflexes with millisecond stimulus response tracking.', href: '/reaction-time-test', icon: <Timer />, category: 'Memory' as Category },
  { title: 'Chimp Test', description: 'Working memory test inspired by Kyoto University primate studies.', href: '/chimp-test', icon: <Brain />, category: 'Memory' as Category, badge: 'TRENDING' },
  { title: 'Number Memory', description: 'Digit-span working memory test with increasing length.', href: '/number-memory-test', icon: <Brain />, category: 'Memory' as Category },
  { title: 'Sequence Memory', description: 'Recall flashing grid tile patterns with expanding sequences.', href: '/sequence-memory-test', icon: <BrainCircuit />, category: 'Memory' as Category },
  { title: 'Visual Memory', description: 'Memorize and recall highlighted square patterns on a grid.', href: '/visual-memory-test', icon: <Eye />, category: 'Memory' as Category },
  { title: 'Verbal Memory', description: 'Continuous lexical recognition testing seen vs new words.', href: '/verbal-memory-test', icon: <MessageSquare />, category: 'Memory' as Category },
  { title: 'Word Memory', description: 'Free-recall word list evaluation testing serial position memory.', href: '/word-memory-test', icon: <FileText />, category: 'Memory' as Category },
  { title: 'Memory Game', description: 'Classic card concentration game with flip matching and timer.', href: '/memory-game', icon: <BrainCircuit />, category: 'Memory' as Category },
  { title: 'Stroop Test', description: 'Assess cognitive control and processing speed via color naming.', href: '/stroop-test', icon: <Palette />, category: 'Memory' as Category },
  { title: 'Simon Says', description: 'Audio-visual color tone sequence memory challenge.', href: '/simon-says', icon: <Brain />, category: 'Memory' as Category },
  { title: 'Time Guesser', description: 'Internal clock estimation challenge to stop at exactly 10.00s.', href: '/time-guesser', icon: <Clock />, category: 'Memory' as Category },

  // Strategy & Logic
  { title: '2048', description: 'Classic sliding tile number merge puzzle.', href: '/2048', icon: <Grid2x2 />, category: 'Strategy' as Category, badge: 'CLASSIC' },
  { title: 'Cupcake 2048', description: 'Delicious visual dessert variation of the 2048 puzzle.', href: '/cupcake-2048', icon: <CupcakeIcon />, category: 'Strategy' as Category },
  { title: 'Minesweeper', description: 'Classic deduction puzzle with flagging and probability logic.', href: '/minesweeper', icon: <Bomb />, category: 'Strategy' as Category },
  { title: 'Tic-Tac-Toe', description: 'Play against an unbeatable Minimax AI opponent.', href: '/tic-tac-toe', icon: <Grid3x3 />, category: 'Strategy' as Category },
  { title: 'Tower of Hanoi', description: 'Algorithmic recursive disc stacking puzzle.', href: '/tower-of-hanoi', icon: <Layers />, category: 'Strategy' as Category },
  { title: 'Sudoku', description: 'Classic 9x9 number grid with conflict detection and pencil marks.', href: '/sudoku', icon: <Grid3x3 />, category: 'Strategy' as Category },
  { title: 'Coreball Game', description: 'Rotational pin insertion puzzle testing precision timing.', href: '/coreball-game', icon: <Disc />, category: 'Strategy' as Category },
  { title: 'Make 24', description: 'Use four numbers and basic operations to reach 24.', href: '/make-24', icon: <Brain />, category: 'Strategy' as Category },

  // Arcade
  { title: 'Classic Snake', description: 'Retro 2D arcade snake on HTML5 canvas with score tracking.', href: '/snake', icon: <Gamepad2 />, category: 'Arcade' as Category, badge: 'CLASSIC' },
  { title: 'Dino Run', description: 'Side-scroller endless obstacle jumping game on HTML5 canvas.', href: '/dino-run', icon: <Bird />, category: 'Arcade' as Category, badge: 'POPULAR' },
  { title: 'Pop It Simulator', description: 'Satisfying tactile bubble popping ASMR simulator.', href: '/pop-it', icon: <Hand />, category: 'Arcade' as Category },
  { title: 'Word Master', description: '5-letter word deduction game with color letter feedback.', href: '/word-master', icon: <FileText />, category: 'Arcade' as Category },
  { title: 'Hangman', description: 'Word guessing game with SVG illustration and dictionary bank.', href: '/hangman', icon: <Type />, category: 'Arcade' as Category },
  { title: 'Word Scramble', description: 'Anagram unscrambling game against the clock.', href: '/word-scramble', icon: <Languages />, category: 'Arcade' as Category },
  { title: 'Math Dash', description: 'Rapid mental arithmetic sprint testing speed calculations.', href: '/math-dash', icon: <Calculator />, category: 'Arcade' as Category },
  { title: 'Math Quiz', description: 'Multiple-choice arithmetic challenges across operations.', href: '/math-quiz', icon: <GraduationCap />, category: 'Arcade' as Category },

  // Creative
  { title: 'Drawing Pad', description: 'Digital canvas sketching tool with customizable brushes and export.', href: '/drawing-pad', icon: <Paintbrush />, category: 'Creative' as Category },
  { title: 'Block Builder', description: 'Pixel art color grid designer with custom palettes.', href: '/block-builder', icon: <Blocks />, category: 'Creative' as Category },
  { title: 'Connect the Dots', description: 'Connect numbered coordinates to reveal hidden vector art.', href: '/connect-the-dots', icon: <Share2 />, category: 'Creative' as Category },
  { title: 'Jigsaw Puzzle', description: 'Drag-and-drop piece snapping puzzle with timer.', href: '/jigsaw-puzzle', icon: <Grip />, category: 'Creative' as Category },
  { title: 'Sliding Puzzle', description: 'Classic 15-puzzle grid tile slider.', href: '/sliding-puzzle', icon: <Puzzle />, category: 'Creative' as Category },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Game Library & Skill Tools Directory",
    "description": "Directory of 45+ free browser-based skill tests, clicking benchmarks, and cognitive games on CpsSpeedTest.",
    "url": "https://www.cpsspeedtest.com/games",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allGames.length,
      "itemListElement": allGames.slice(0, 20).map((g, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": g.title,
        "url": `https://www.cpsspeedtest.com${g.href}`
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-6xl mx-auto py-6 px-4">
        <header className="py-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{allGames.length} In-House Interactive Games</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Skill Games & Tools Directory
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover our complete collection of free browser-based tests, clicking tools, cognitive challenges, and classic arcade games.
          </p>
        </header>

        {/* Search bar */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search by game name or skill type..."
            className="pl-10 h-11 bg-card/60 border-border/30 focus:border-primary/50 text-sm"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "h-9 text-xs gap-1.5 rounded-full transition-all",
                activeCategory === cat && "shadow-md shadow-primary/20"
              )}
            >
              {cat}
              <Badge
                variant="secondary"
                className={cn(
                  "h-4 px-1.5 text-[10px] font-bold rounded-full",
                  activeCategory === cat ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                )}
              >
                {categoryCounts[cat] ?? allGames.filter(g => g.category === cat).length}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Results grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-semibold">No games found matching &quot;{search}&quot;</p>
            <Button variant="ghost" size="sm" onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-2 text-primary">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        )}
      </div>
    </>
  );
}
