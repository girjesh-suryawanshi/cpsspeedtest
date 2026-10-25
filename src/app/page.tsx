"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap, ShieldCheck, Target, ArrowRight, Gamepad2, Type,
  BrainCircuit, Brain, Eye, MessageSquare, Paintbrush,
  FileText, Blocks, Share2, GraduationCap, Languages, Wind, Keyboard,
  Disc, Timer, MousePointerClick, Star, Trophy, TrendingUp, Play, Flame, Hand, Coins, Clock, Grid2x2, Grid3x3, Bird, Bomb, Calculator, Layers, Mouse
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CpsTest } from "@/components/cps-test";

/* ── Custom SVG Icons ── */
const JitterClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.5 13.5C5.5 13.5 5.5 19.5 9.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 10.5C11.5 10.5 11.5 13.5 13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 4.5C9.5 4.5 9.5 8.5 12.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 5.5C13.5 5.5 13.5 8.5 15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 4.5C16.5 4.5 16.5 7.5 18.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MonkeyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4C9.23858 4 7 6.23858 7 9V10C7 11.6569 8.34315 13 10 13H14C15.6569 13 17 11.6569 17 10V9C17 6.23858 14.7614 4 12 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="10" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
    <ellipse cx="14" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
  </svg>
);

/* ── Stat Badge ── */
const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-2xl sm:text-3xl font-extrabold text-primary">{value}</span>
    <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">{label}</span>
  </div>
);

/* ── Feature Card ── */
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="relative p-6 bg-card/60 rounded-2xl border border-border/20 shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-primary/10 hover:shadow-xl group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    <div className="relative flex items-start gap-4">
      <div className="text-primary mt-1 p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

/* ── Game Card ── */
const GameCard = ({ title, description, href, icon, badge }: {
  title: string; description: string; href: string; icon: React.ReactNode; badge?: string;
}) => (
  <Link href={href} className="group block h-full">
    <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/10 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-primary/10 hover:shadow-xl hover:bg-card">
      <CardContent className="p-5 flex items-start gap-4">
        <div className="mt-0.5 text-primary p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
          {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-sm font-bold group-hover:text-primary transition-colors mb-0.5 leading-snug">{title}</CardTitle>
            {badge && (
              <Badge
                variant={badge === 'NEW' || badge === 'HOT' ? 'default' : 'secondary'}
                className={cn(
                  "text-[10px] px-1.5 py-0 h-4 shrink-0",
                  badge === 'NEW' && "bg-blue-500 hover:bg-blue-500",
                  badge === 'HOT' && "bg-orange-500 hover:bg-orange-500"
                )}
              >
                {badge}
              </Badge>
            )}
          </div>
          <CardDescription className="text-xs leading-relaxed">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  </Link>
);

/* ── Rank Card ── */
const RankCard = ({ rank, cps, icon, description, gradient }: {
  rank: string; cps: string; icon: string; description: string; gradient: string;
}) => (
  <div className={cn(
    "relative bg-card border border-border/20 rounded-2xl p-5 text-center transition-all duration-300",
    "hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
    "flex flex-col items-center overflow-hidden group"
  )}>
    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", gradient)} />
    <div className="relative text-5xl mb-3">{icon}</div>
    <div className="relative font-bold text-base text-foreground">{rank}</div>
    <div className="relative text-sm text-primary font-semibold">{cps}</div>
    <div className="relative text-xs text-muted-foreground mt-1">{description}</div>
  </div>
);

export default function Home() {
  const clickRanks = [
    { rank: 'Turtle', cps: '0 – 4.9 CPS', icon: '🐢', description: 'Casual navigation speed', gradient: 'bg-gradient-to-br from-green-500/10 to-transparent' },
    { rank: 'Rabbit', cps: '5.0 – 7.9 CPS', icon: '🐇', description: 'Average recreational speed', gradient: 'bg-gradient-to-br from-blue-500/10 to-transparent' },
    { rank: 'Cheetah', cps: '8.0 – 10.9 CPS', icon: '🐆', description: 'Fast experienced gaming speed', gradient: 'bg-gradient-to-br from-purple-500/10 to-transparent' },
    { rank: 'Falcon', cps: '11.0+ CPS', icon: '🦅', description: 'Competitive technique tier', gradient: 'bg-gradient-to-br from-yellow-500/10 to-transparent' },
  ];

  const featuredGames = [
    { title: '1-Second CPS Test', description: 'Peak burst speed challenge.', href: '/cps-test-1s', icon: <Flame />, badge: 'HOT', category: 'Clicking' },
    { title: 'Minecraft CPS Test', description: 'PvP combat hit-tick simulator.', href: '/minecraft-cps-test', icon: <Mouse />, badge: 'HOT', category: 'Clicking' },
    { title: 'Kohi Click Test', description: 'Classic 10s stamina benchmark.', href: '/kohi-click-test', icon: <Target />, badge: '', category: 'Clicking' },
    { title: 'Aim Trainer', description: 'Target acquisition & precision.', href: '/aim-trainer', icon: <Target />, badge: 'NEW', category: 'Clicking' },

    { title: 'Speed Typer', description: 'Paragraph typing sprint.', href: '/type-racer', icon: <Keyboard />, badge: 'HOT', category: 'Typing' },
    { title: 'Typing Test (60s)', description: 'Words Per Minute & accuracy.', href: '/typing-test', icon: <Type />, badge: '', category: 'Typing' },
    { title: 'Spacebar Clicker', description: 'Spacebar actuation cadence.', href: '/spacebar-clicker', icon: <Keyboard />, badge: '', category: 'Typing' },

    { title: 'Chimp Test', description: 'Working memory Kyoto benchmark.', href: '/chimp-test', icon: <MonkeyIcon />, badge: 'HOT', category: 'Memory' },
    { title: 'Reaction Time Test', description: 'Visual stimulus response latency.', href: '/reaction-time-test', icon: <Timer />, badge: '', category: 'Memory' },
    { title: 'Number Memory', description: 'Digit span chunking capacity.', href: '/number-memory-test', icon: <Brain />, badge: '', category: 'Memory' },

    { title: '2048', description: 'Sliding tile number merge logic.', href: '/2048', icon: <Grid2x2 />, badge: 'CLASSIC', category: 'Classics' },
    { title: 'Classic Snake', description: 'Retro 2D arcade game on canvas.', href: '/snake', icon: <Gamepad2 />, badge: '', category: 'Classics' },
    { title: 'Dino Run', description: 'Endless obstacle jump runner.', href: '/dino-run', icon: <Bird />, badge: 'HOT', category: 'Classics' },
    { title: 'Minesweeper', description: 'Deductive logic grid puzzle.', href: '/minesweeper', icon: <Bomb />, badge: '', category: 'Classics' },

    { title: 'Math Dash', description: 'Arithmetic sprint against time.', href: '/math-dash', icon: <Calculator />, badge: 'NEW', category: 'Education' },
    { title: 'Tower of Hanoi', description: 'Recursive disk transfer puzzle.', href: '/tower-of-hanoi', icon: <Layers />, badge: '', category: 'Education' },
    { title: 'Sudoku', description: '9x9 logical deduction matrix.', href: '/sudoku', icon: <Grid3x3 />, badge: '', category: 'Education' },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-foreground overflow-hidden">

      {/* ── Hero ── */}
      <section className="w-full max-w-4xl mx-auto text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Hardware Clock Precision (±1ms) · Zero Iframes</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          How fast can you{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            click?
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Test your clicking speed, reaction time, and keyboard dexterity with high-precision browser benchmarks. Explore 45+ free interactive tools and educational guides.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/games">
            <Button size="lg" variant="outline" className="gap-2">
              <Gamepad2 className="w-5 h-5" />
              Explore All 45+ Games
            </Button>
          </Link>
          <Link href="/blog">
            <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <FileText className="w-5 h-5" />
              Guides & Tutorials
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Live Playable CPS Test (Core Product Directly on Homepage) ── */}
      <section className="w-full max-w-3xl mx-auto mb-14 md:mb-18">
        <div className="text-center mb-4">
          <Badge variant="outline" className="mb-2 text-xs font-semibold text-primary border-primary/30 bg-primary/10">
            Live Tool
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Interactive CPS Tester</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Tap inside the box below or press Spacebar to start testing immediately.
          </p>
        </div>
        <CpsTest gameDuration={5} allowDurationChange={true} />
      </section>

      {/* ── Verified Stats Bar ── */}
      <section className="w-full max-w-4xl mx-auto mb-14 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-card/50 rounded-2xl border border-border/20 shadow-lg backdrop-blur-sm">
          <StatBadge value="45+" label="In-House Tools & Games" />
          <StatBadge value="±1ms" label="Hardware Precision" />
          <StatBadge value="100%" label="Free Access · No Signup" />
        </div>
      </section>

      {/* ── Features ── */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-20">
        <FeatureCard icon={<Zap />} title="Sub-Millisecond Timing" description="High-resolution performance.now() tracking eliminates browser timer drift for exact CPS results." />
        <FeatureCard icon={<TrendingUp />} title="Comprehensive Skill Suite" description="Benchmark aim precision, typing WPM, visual reaction time, and working memory." />
        <FeatureCard icon={<Trophy />} title="Local Best & Community Board" description="Track personal bests on your device with optional opt-in submission to public rankings." />
      </section>

      {/* ── Featured Games Grid ── */}
      <section className="w-full max-w-5xl mx-auto mb-14 md:mb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Featured Challenges</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Explore our most popular tests and arcade titles.</p>
          </div>
          <Link href="/games">
            <Button variant="ghost" className="gap-1.5 text-primary hover:text-primary/80 text-xs sm:text-sm">
              View All 45+ <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <Tabs defaultValue="Clicking" className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-transparent justify-start mb-6 overflow-x-auto p-0">
            {['Clicking', 'Typing', 'Memory', 'Classics', 'Education'].map(tab => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2 font-semibold text-xs sm:text-sm border shadow-sm border-border/20 data-[state=inactive]:bg-card"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {['Clicking', 'Typing', 'Memory', 'Classics', 'Education'].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredGames.filter(g => g.category === tab).map((game, index) => (
                  <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    href={game.href}
                    icon={game.icon}
                    badge={game.badge || undefined}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* ── Click Speed Ranks ── */}
      <section className="w-full max-w-5xl mx-auto text-center mb-14 md:mb-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Click Speed Skill Tiers</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">Where do your test results fall on the empirical scale?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clickRanks.map(rank => (
            <RankCard key={rank.rank} {...rank} />
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-6">Frequently Asked Questions</h2>
        <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  How does the CpsSpeedTest counter measure speed?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Our tester records each valid primary pointerdown or Spacebar event with high-precision hardware timestamps via performance.now(). When the duration expires, your CPS is calculated by dividing total registered clicks by the exact measured seconds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  What is considered a normal CPS score?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  The average person using standard single-finger clicking scores between 5 and 7 CPS. Experienced gamers typically reach 8 to 10 CPS. Competitive players utilizing specialized techniques like butterfly clicking or jitter clicking can sustain 11 to 15+ CPS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  Are scores kept private?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Yes. Your personal bests and recent test history are saved directly on your browser using localStorage. They are never sent to a server unless you explicitly choose to submit your score to the public leaderboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}