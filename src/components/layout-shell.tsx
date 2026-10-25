"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  SidebarProvider, Sidebar, SidebarInset, SidebarTrigger,
  SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarGroup,
  SidebarGroupLabel, SidebarContent, SidebarSeparator
} from '@/components/ui/sidebar';
import { SidebarNavLink } from '@/components/sidebar-nav-link';
import { CollapsibleMenu } from '@/components/sidebar-collapsible';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import {
  Zap, HomeIcon, Wind, Target, Keyboard, Type, Timer, Disc, Crosshair,
  BrainCircuit, MousePointerClick, Puzzle, Brain, Eye, MessageSquare,
  Paintbrush, FileText, Grip, GraduationCap, Blocks, Languages, Share2,
  Trophy, Gamepad2, Mouse, Palette, TrendingUp, Hand, Coins, Clock,
  Grid2x2, Grid3x3, Bird, Bomb, Calculator, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CupcakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.5 9.5a2.5 2.5 0 0 0-4-3.26A2.5 2.5 0 0 0 9.5 9.5" />
    <path d="M12 15a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z" />
    <path d="M12 9.5V15" />
    <path d="M12 21v-3" />
    <path d="m9 18 1.5-1.5" />
    <path d="m15 18-1.5-1.5" />
  </svg>
);

const ButterflyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/><path d="M10 10H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4"/>
    <path d="m5 11 1-1-1-1"/><path d="m19 11-1-1 1-1"/><path d="m12 10 2-3h-4l2 3z"/><path d="m12 14-2 3h4l-2-3z"/>
  </svg>
);

const DragClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5V2"/><path d="M12 10v3"/><path d="M12 18v-3"/><path d="m15 8-3-3-3 3"/><path d="M9 16.5 12 22l3-5.5"/>
    <rect width="18" height="20" x="3" y="2" rx="4"/><path d="M12 10a2.5 2.5 0 0 1-2.5-2.5V5h5v2.5A2.5 2.5 0 0 1 12 10Z"/>
  </svg>
);

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-3 p-2 hover:opacity-90 transition-opacity">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">
              CpsSpeedTest
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarNavLink href="/">
                <HomeIcon />
                Home
              </SidebarNavLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarNavLink href="/leaderboard">
                <Trophy />
                Leaderboard
              </SidebarNavLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarNavLink href="/games">
                <Gamepad2 />
                Games Directory
              </SidebarNavLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarNavLink href="/blog">
                <FileText />
                Guides & Articles
              </SidebarNavLink>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 text-primary font-bold">
              <TrendingUp className="text-primary" /> Popular & Arcade
            </SidebarGroupLabel>
            <CollapsibleMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/time-guesser">
                  <Clock />
                  Time Guesser
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/pop-it">
                  <Hand />
                  Pop-It Simulator
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/idle-clicker">
                  <Coins />
                  Idle Clicker
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/simon-says">
                  <Brain />
                  Simon Says
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/type-racer">
                  <Keyboard />
                  Speed Typer
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/2048">
                  <Grid2x2 />
                  2048
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/dino-run">
                  <Bird />
                  Dino Run
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/snake">
                  <Gamepad2 />
                  Classic Snake
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/minesweeper">
                  <Bomb />
                  Minesweeper
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/tic-tac-toe">
                  <Grid3x3 />
                  Tic-Tac-Toe
                </SidebarNavLink>
              </SidebarMenuItem>
            </CollapsibleMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 font-bold">
              <MousePointerClick className="text-primary" /> Click Speed Tools
            </SidebarGroupLabel>
            <CollapsibleMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/cps-test">
                  <Zap />
                  CPS Test (5s)
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/cps-test-1s">
                  <Zap />
                  1-Second CPS Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/minecraft-cps-test">
                  <Mouse />
                  Minecraft CPS
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/jitter-click-test">
                  <Wind />
                  Jitter Click Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/kohi-click-test">
                  <Target />
                  Kohi Click Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/butterfly-click-test">
                  <ButterflyIcon />
                  Butterfly Click
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/drag-click-test">
                  <DragClickIcon />
                  Drag Click Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/double-click-test">
                  <MousePointerClick />
                  Double Click Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/aim-trainer">
                  <Crosshair />
                  Aim Trainer
                </SidebarNavLink>
              </SidebarMenuItem>
            </CollapsibleMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 font-bold">
              <Keyboard className="text-primary" /> Typing & Spacebar
            </SidebarGroupLabel>
            <CollapsibleMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/spacebar-clicker">
                  <Keyboard />
                  Spacebar Clicker
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/stimulation-clicker">
                  <Keyboard />
                  Stimulation Clicker
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/typing-test">
                  <Type />
                  Typing Test (60s)
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/typing-test-30s">
                  <Type />
                  Typing Test (30s)
                </SidebarNavLink>
              </SidebarMenuItem>
            </CollapsibleMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 font-bold">
              <Brain className="text-primary" /> Cognitive & Memory
            </SidebarGroupLabel>
            <CollapsibleMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/reaction-time-test">
                  <Timer />
                  Reaction Time Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/chimp-test">
                  <Brain />
                  Chimp Test
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/number-memory-test">
                  <BrainCircuit />
                  Number Memory
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/sequence-memory-test">
                  <BrainCircuit />
                  Sequence Memory
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/visual-memory-test">
                  <Eye />
                  Visual Memory
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/verbal-memory-test">
                  <MessageSquare />
                  Verbal Memory
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/word-memory-test">
                  <FileText />
                  Word Memory
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/memory-game">
                  <BrainCircuit />
                  Memory Cards
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/stroop-test">
                  <Palette />
                  Stroop Effect Test
                </SidebarNavLink>
              </SidebarMenuItem>
            </CollapsibleMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 font-bold">
              <Puzzle className="text-primary" /> Strategy & Puzzles
            </SidebarGroupLabel>
            <CollapsibleMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/coreball-game">
                  <Disc />
                  Coreball Game
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/cupcake-2048">
                  <CupcakeIcon />
                  Cupcake 2048
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/tower-of-hanoi">
                  <Layers />
                  Tower of Hanoi
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/sudoku">
                  <Grid3x3 />
                  Sudoku
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/make-24">
                  <Brain />
                  Make 24
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/jigsaw-puzzle">
                  <Grip />
                  Jigsaw Puzzle
                </SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/sliding-puzzle">
                  <Puzzle />
                  Sliding Puzzle
                </SidebarNavLink>
              </SidebarMenuItem>
            </CollapsibleMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <FileText /> Legal & Trust
            </SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarNavLink href="/about">About Us</SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/blog">Blog & Guides</SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/contact">Contact Us</SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/privacy">Privacy Policy</SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/terms">Terms of Use</SidebarNavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarNavLink href="/disclaimer">Disclaimer</SidebarNavLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex-1">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border/20 bg-background/80 backdrop-blur-xl px-4 shadow-sm md:h-14">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden h-10 w-10 shrink-0 text-primary bg-primary/5 hover:bg-primary/20 border border-border/50 shadow-sm rounded-md transition-colors" />
            <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl transition-opacity hover:opacity-80">
              <Zap className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              <span className="sm:inline">CpsSpeedTest</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 text-xs sm:text-sm font-medium">
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/games">Games</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/leaderboard">Leaderboard</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/blog">Guides</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 lg:px-3 text-xs sm:text-sm" asChild>
                <Link href="/privacy">Privacy</Link>
              </Button>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-2 sm:p-4 md:p-6 flex flex-col items-center overflow-x-hidden">
          {children}
        </main>

        <footer className="mt-auto border-t bg-background/50">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CpsSpeedTest. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Link href="/about" className="text-sm hover:underline">About</Link>
              <Link href="/blog" className="text-sm hover:underline">Blog</Link>
              <Link href="/contact" className="text-sm hover:underline">Contact</Link>
              <Link href="/privacy" className="text-sm hover:underline">Privacy</Link>
              <Link href="/terms" className="text-sm hover:underline">Terms</Link>
              <Link href="/disclaimer" className="text-sm hover:underline">Disclaimer</Link>
            </nav>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
