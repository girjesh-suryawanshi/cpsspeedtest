
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Zap, ShieldCheck, Target, Search, ArrowRight, Gamepad2, Type,
  BrainCircuit, Grip, Puzzle, Brain, Eye, MessageSquare, Paintbrush,
  FileText, Blocks, Share2, GraduationCap, Languages, Wind, Keyboard,
  Disc, Timer, MousePointerClick, Star, Trophy, TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


/* ─────────────────── Custom SVG Icons ─────────────────── */
const JitterClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.5 13.5C5.5 13.5 5.5 19.5 9.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 10.5C11.5 10.5 11.5 13.5 13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 4.5C9.5 4.5 9.5 8.5 12.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 5.5C13.5 5.5 13.5 8.5 15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 4.5C16.5 4.5 16.5 7.5 18.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 21L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.25 15.5L14.75 13.5L12.25 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 9.5L20.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 12.5C3.5 12.5 2 13 2 15C2 17 3.5 17.5 4.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 14C20.5 14 22 14.5 22 16.5C22 18.5 20.5 19 19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MonkeyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4C9.23858 4 7 6.23858 7 9V10C7 11.6569 8.34315 13 10 13H14C15.6569 13 17 11.6569 17 10V9C17 6.23858 14.7614 4 12 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 9H7C6.44772 9 6 9.44772 6 10V11C6 11.5523 6.44772 12 7 12H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 9H17C17.5523 9 18 9.44772 18 10V11C18 11.5523 17.5523 12 17 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="10" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
    <ellipse cx="14" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
  </svg>
);

/* ─────────────────── Animated CPS Gauge ─────────────────── */
const AnimatedCpsGauge = () => (
  <div className="relative w-64 h-40 sm:w-80 sm:h-52 flex items-center justify-center">
    <svg className="w-full h-full" viewBox="0 0 120 75" fill="none">
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Track */}
      <path d="M10 65 A50 50 0 0 1 110 65" stroke="hsl(var(--secondary))" strokeWidth="7" strokeLinecap="round"/>
      {/* Fill */}
      <path
        d="M10 65 A50 50 0 0 1 110 65"
        stroke="url(#gaugeGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="157"
        strokeDashoffset="70"
        className="animate-gauge-fill"
        filter="url(#glow)"
      />
      {/* Tick marks */}
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
        const angle = -180 + t * 180;
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 44 * Math.cos(rad);
        const y1 = 65 + 44 * Math.sin(rad);
        const x2 = 60 + 50 * Math.cos(rad);
        const y2 = 65 + 50 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeLinecap="round"/>;
      })}
      {/* Needle */}
      <line
        x1="60" y1="65" x2="28" y2="28"
        stroke="hsl(var(--foreground))"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transformOrigin: '60px 65px', animation: 'gauge-needle 2.5s ease-out forwards' }}
      />
      <circle cx="60" cy="65" r="5" fill="hsl(var(--primary))" filter="url(#glow)"/>
      <circle cx="60" cy="65" r="2.5" fill="hsl(var(--foreground))"/>
    </svg>
    {/* Center label */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums" style={{ animation: 'counter-up 2.5s ease-out forwards' }}>
        14.2
      </div>
      <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">CPS</div>
    </div>
    <style jsx>{`
      @keyframes gauge-fill {
        from { stroke-dashoffset: 157; }
        to { stroke-dashoffset: 70; }
      }
      @keyframes gauge-needle {
        from { transform: rotate(-90deg); }
        to { transform: rotate(-42deg); }
      }
      .animate-gauge-fill { animation: gauge-fill 2.5s ease-out forwards; }
    `}</style>
  </div>
);

/* ─────────────────── Stat Badge ─────────────────── */
const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-2xl sm:text-3xl font-extrabold text-primary">{value}</span>
    <span className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</span>
  </div>
);

/* ─────────────────── Feature Card ─────────────────── */
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

/* ─────────────────── Game Card (Homepage) ─────────────────── */
const GameCard = ({ title, description, href, icon, badge }: {
  title: string; description: string; href: string; icon: React.ReactNode; badge?: string;
}) => (
  <Link href={href} className="group block">
    <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/10 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-primary/10 hover:shadow-xl hover:bg-card">
      <CardContent className="p-5 flex items-start gap-4">
        <div className="mt-0.5 text-primary p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
          {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-sm font-bold group-hover:text-primary transition-colors mb-0.5 leading-snug">{title}</CardTitle>
            {badge && (
              <Badge
                variant={badge === 'NEW' || badge === 'TRENDING' ? 'default' : 'secondary'}
                className={cn(
                  "text-[10px] px-1.5 py-0 h-4 shrink-0",
                  badge === 'NEW' && "bg-blue-500 hover:bg-blue-500",
                  badge === 'TRENDING' && "bg-orange-500 hover:bg-orange-500"
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

/* ─────────────────── Rank Card ─────────────────── */
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

/* ─────────────────── Main Page ─────────────────── */
export default function Home() {
  const clickRanks = [
    { rank: 'Turtle', cps: '0–4 CPS', icon: '🐢', description: 'Casual clicker', gradient: 'bg-gradient-to-br from-green-500/10 to-transparent' },
    { rank: 'Rabbit', cps: '4–7 CPS', icon: '🐇', description: 'Above average', gradient: 'bg-gradient-to-br from-blue-500/10 to-transparent' },
    { rank: 'Cheetah', cps: '7–10 CPS', icon: '🐆', description: 'Pro level', gradient: 'bg-gradient-to-br from-purple-500/10 to-transparent' },
    { rank: 'Falcon', cps: '10+ CPS', icon: '🦅', description: 'Elite gamer', gradient: 'bg-gradient-to-br from-yellow-500/10 to-transparent' },
  ];

  const featuredGames = [
    { title: 'CPS Test', description: 'Click as fast as you can and measure your clicks per second score.', href: '/cps-test', icon: <MousePointerClick />, badge: '' },
    { title: 'Jitter Click Test', description: 'Master the jitter technique to achieve superhuman clicking speeds.', href: '/jitter-click-test', icon: <JitterClickIcon />, badge: '' },
    { title: 'Typing Test', description: 'Measure your words per minute and typing accuracy.', href: '/typing-test', icon: <Type />, badge: '' },
    { title: 'Kohi Click Test', description: 'The classic 10-second Minecraft PvP clicking challenge.', href: '/kohi-click-test', icon: <Target />, badge: '' },
    { title: 'Number Memory', description: 'How many digits can you remember? Test your working memory.', href: '/number-memory-test', icon: <Brain />, badge: '' },
    { title: 'Chimp Test', description: 'Are you smarter than a chimpanzee? Test your short-term memory.', href: '/chimp-test', icon: <MonkeyIcon />, badge: 'TRENDING' },
    { title: 'Block Builder', description: 'Create pixel art and build anything you can imagine.', href: '/block-builder', icon: <Blocks />, badge: 'TRENDING' },
    { title: 'Aim Trainer', description: 'Sharpen your mouse precision and accuracy for FPS games.', href: '/aim-trainer', icon: <Target />, badge: 'NEW' },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 text-foreground overflow-hidden">

      {/* ── Hero ── */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-8 mb-14 md:mb-20">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-primary" />
            <span>Trusted by 1M+ Gamers Worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            Test Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Click Speed
            </span>{" "}
            &amp; Reflexes
          </h1>

          <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
            30+ free skill-based games to sharpen your clicking speed, reaction time, typing accuracy, and cognitive performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
            <Link href="/cps-test" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 gap-2">
                <Zap className="w-5 h-5" />
                Start CPS Test
              </Button>
            </Link>
            <Link href="/games" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-base gap-2 hover:-translate-y-0.5 transition-all">
                <Gamepad2 className="w-5 h-5" />
                Browse All Games
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <AnimatedCpsGauge />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="w-full max-w-6xl mx-auto mb-14 md:mb-20">
        <div className="grid grid-cols-3 gap-4 p-6 bg-card/50 rounded-2xl border border-border/20 shadow-lg backdrop-blur-sm">
          <StatBadge value="30+" label="Free Games" />
          <StatBadge value="1M+" label="Tests Taken" />
          <StatBadge value="0" label="Ads · Free Forever" />
        </div>
      </section>

      {/* ── Features ── */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-20">
        <FeatureCard icon={<Zap />} title="Measure Your CPS" description="Accurately measure clicks per second across 1s, 5s, and 10s intervals with performance charting." />
        <FeatureCard icon={<TrendingUp />} title="Improve Your Skills" description="Practice aim training, typing, memory, and more — all designed to sharpen your real gaming performance." />
        <FeatureCard icon={<ShieldCheck />} title="100% Free, No Ads" description="Enjoy a completely clean, uninterrupted gaming experience with zero advertisements. Always free." />
      </section>

      {/* ── Featured Games Grid ── */}
      <section className="w-full max-w-6xl mx-auto mb-14 md:mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Featured Games</h2>
          <Link href="/games">
            <Button variant="ghost" className="gap-1.5 text-primary hover:text-primary/80">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
          {featuredGames.map((game, index) => (
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
      </section>

      {/* ── Click Speed Ranks ── */}
      <section className="w-full max-w-6xl mx-auto text-center mb-14 md:mb-20">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Your Click Speed Rank</h2>
        <p className="text-muted-foreground mb-8">Where do you fall on the scale?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clickRanks.map(rank => (
            <RankCard key={rank.rank} {...rank} />
          ))}
        </div>
      </section>

      {/* ── Leaderboard CTA ── */}
      <section className="w-full max-w-6xl mx-auto mb-14 md:mb-20">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-accent/5 p-8 text-center shadow-xl">
          <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
          <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold mb-2">Compete Globally</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Submit your CPS score and see how you rank against players from around the world.</p>
          <Link href="/leaderboard">
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
              <Trophy className="w-5 h-5" />
              View Leaderboard
            </Button>
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-8">Frequently Asked Questions</h2>
        <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold hover:no-underline hover:text-primary text-left">
                  How does the CPS Test work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                  The Clicks Per Second (CPS) test is a simple timed challenge. When you start the test, a 3-second countdown begins. Once active, click the designated area as many times as you can before the time runs out. Your score is calculated by dividing the total number of clicks by the duration of the test.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold hover:no-underline hover:text-primary text-left">
                  How are the Click Speed Ranks calculated?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                  Your rank is determined by your CPS score:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><b>Turtle 🐢 (0–4 CPS):</b> A relaxed, casual clicking speed.</li>
                    <li><b>Rabbit 🐇 (4–7 CPS):</b> Above-average, common for regular users.</li>
                    <li><b>Cheetah 🐆 (7–10 CPS):</b> Very fast, typical of experienced gamers.</li>
                    <li><b>Falcon 🦅 (10+ CPS):</b> Elite clicking speed for competitive gamers.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold hover:no-underline hover:text-primary text-left">
                  What is the average CPS for a gamer?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                  The average person clicks at about 6–7 CPS. Casual gamers typically reach 7–10 CPS. Professional Minecraft PvP players often achieve 10–15 CPS using techniques like jitter clicking or butterfly clicking. The world record for CPS exceeds 20 using specialized methods.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}