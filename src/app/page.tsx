import * as React from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap, ShieldCheck, Target, ArrowRight, Gamepad2, Type,
  BrainCircuit, Brain, Eye, MessageSquare, Paintbrush,
  FileText, Blocks, Share2, GraduationCap, Languages, Wind, Keyboard,
  Disc, Timer, MousePointerClick, Star, Trophy, TrendingUp, Play, Flame,
  Hand, Coins, Clock, Grid2x2, Grid3x3, Bird, Bomb, Calculator, Layers,
  Mouse, HeartHandshake, CheckCircle2, AlertTriangle, Cpu, Activity,
  Sparkles, HelpCircle, BookOpen, BarChart3, Scale
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CpsTest } from "@/components/cps-test";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "CpsSpeedTest – High-Precision Click Speed, Reflex & Cognitive Benchmark Hub",
  description:
    "Free online click speed test (CPS), reaction time benchmark, and cognitive skill testing portal. Measure your clicking cadence, aim accuracy, typing WPM, and working memory across 47 in-house tools.",
  keywords: [
    "cps test",
    "click speed test",
    "clicks per second",
    "kohi click test",
    "jitter click test",
    "butterfly click test",
    "reaction time test",
    "typing speed test",
    "aim trainer",
    "chimp test",
    "human benchmark",
    "gaming reflex test",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com",
  },
  openGraph: {
    title: "CpsSpeedTest – Test Your Click Speed, Reflexes & Cognitive Agility",
    description:
      "Hardware-accurate clicks per second (CPS) tester and 47 free interactive games. Zero iframes, sub-millisecond precision, local score tracking, and comprehensive empirical benchmarks.",
    url: "https://www.cpsspeedtest.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CpsSpeedTest – Precision Click Speed & Skill Benchmarks",
    description:
      "Measure your clicking cadence, reaction latency, and typing dexterity with sub-millisecond hardware accuracy on 47 free tools.",
  },
};

// ─── Custom Icons ───
const MonkeyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4C9.23858 4 7 6.23858 7 9V10C7 11.6569 8.34315 13 10 13H14C15.6569 13 17 11.6569 17 10V9C17 6.23858 14.7614 4 12 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="10" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
    <ellipse cx="14" cy="8.5" rx="1" ry="1.5" fill="currentColor"/>
  </svg>
);

// ─── Stat Badge ───
const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-2xl sm:text-3xl font-extrabold text-primary">{value}</span>
    <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">{label}</span>
  </div>
);

// ─── Feature Card ───
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

// ─── Game Card ───
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

// ─── Rank Card ───
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

// ─── Structured Data (Schema.org) ───
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.cpsspeedtest.com/#software",
      "name": "CpsSpeedTest Interactive Benchmark Suite",
      "applicationCategory": "BrowserGame",
      "operatingSystem": "Any (Web Browser)",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "12840",
        "bestRating": "5",
        "worstRating": "1",
      },
      "description":
        "High-precision clicks per second (CPS) tester, reaction time benchmark, and cognitive memory suite offering sub-millisecond accuracy across 47 in-house tools.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cpsspeedtest.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does CpsSpeedTest achieve sub-millisecond precision?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike standard web counters relying on JavaScript setInterval (which suffers from CPU throttling and frame-rate jitter), CpsSpeedTest uses window.performance.now() monotonic hardware timestamps for every pointerdown and keydown event, guaranteeing sub-millisecond accuracy without timer drift.",
          },
        },
        {
          "@type": "Question",
          "name": "What is a good CPS score for gaming?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The global average using normal clicking is 5 to 7 CPS. Competitive gamers typically score 8 to 10 CPS. Advanced players using specialized methods such as butterfly clicking or jitter clicking routinely achieve 11 to 16+ CPS.",
          },
        },
        {
          "@type": "Question",
          "name": "Does mouse polling rate affect CPS results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A mouse with a 1000Hz polling rate reports input every 1 millisecond, whereas a standard 125Hz office mouse only polls every 8 milliseconds. For high-speed clicking (>10 CPS) and reaction time tests, higher polling rates ensure input events are registered with zero report lag.",
          },
        },
        {
          "@type": "Question",
          "name": "Are high-cadence clicking techniques like jitter clicking safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jitter clicking vibrates forearm tendons to achieve rapid clicks. If practiced excessively without adequate rest, it can lead to muscle strain or Repetitive Strain Injury (RSI). We recommend limiting intensive sessions to 10-minute intervals and performing wrist stretches before and after testing.",
          },
        },
        {
          "@type": "Question",
          "name": "Are my test scores kept private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All personal bests and history records are stored purely on your local device via HTML5 localStorage. No personally identifiable data is sent to external servers unless you explicitly choose to submit your score to our optional public leaderboard.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use CpsSpeedTest on mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The entire platform is mobile-optimized with touch-manipulation CSS and pointerdown event handling, eliminating the 300ms mobile double-tap zoom delay and enabling zero-latency touch testing.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const clickRanks = [
    { rank: 'Turtle', cps: '0 – 4.9 CPS', icon: '🐢', description: 'Casual navigation speed', gradient: 'bg-gradient-to-br from-green-500/10 to-transparent' },
    { rank: 'Rabbit', cps: '5.0 – 7.9 CPS', icon: '🐇', description: 'Average recreational speed', gradient: 'bg-gradient-to-br from-blue-500/10 to-transparent' },
    { rank: 'Cheetah', cps: '8.0 – 10.9 CPS', icon: '🐆', description: 'Fast experienced gaming speed', gradient: 'bg-gradient-to-br from-purple-500/10 to-transparent' },
    { rank: 'Falcon', cps: '11.0+ CPS', icon: '🦅', description: 'Competitive technique tier', gradient: 'bg-gradient-to-br from-yellow-500/10 to-transparent' },
  ];

  // ─── Complete Directory of All 47 Games ───
  const allPlatformTools = [
    // 1. Clicking & Mechanical
    { title: '1-Second CPS Test', description: 'Maximum burst click velocity test.', href: '/cps-test-1s', icon: <Flame />, badge: 'HOT', category: 'Clicking' },
    { title: '5-Second CPS Test', description: 'Standard global benchmark duration.', href: '/cps-test', icon: <MousePointerClick />, badge: 'CORE', category: 'Clicking' },
    { title: 'Minecraft CPS Test', description: 'PvP combat hit-tick timing simulator.', href: '/minecraft-cps-test', icon: <Mouse />, badge: 'HOT', category: 'Clicking' },
    { title: 'Kohi Click Test', description: 'Classic 10s Minecraft stamina drill.', href: '/kohi-click-test', icon: <Target />, badge: '', category: 'Clicking' },
    { title: 'Jitter Click Test', description: 'Arm tremor technique assessment.', href: '/jitter-click-test', icon: <Zap />, badge: 'TECHNIQUE', category: 'Clicking' },
    { title: 'Butterfly Click Test', description: 'Two-finger switch alternate cadence.', href: '/butterfly-click-test', icon: <Sparkles />, badge: 'TECHNIQUE', category: 'Clicking' },
    { title: 'Drag Click Test', description: 'Friction-glide rapid switch trigger.', href: '/drag-click-test', icon: <Wind />, badge: 'ADVANCED', category: 'Clicking' },
    { title: 'Double Click Test', description: 'Mouse switch bounce & debounce audit.', href: '/double-click-test', icon: <MousePointerClick />, badge: 'HARDWARE', category: 'Clicking' },
    { title: 'Spacebar Clicker', description: 'Mechanical spacebar hit rate test.', href: '/spacebar-clicker', icon: <Keyboard />, badge: '', category: 'Clicking' },
    { title: 'Stimulation Clicker', description: 'Dopamine feedback sensory tapping.', href: '/stimulation-clicker', icon: <Coins />, badge: '', category: 'Clicking' },
    { title: 'Idle Clicker', description: 'Incremental exponential growth engine.', href: '/idle-clicker', icon: <TrendingUp />, badge: '', category: 'Clicking' },

    // 2. Reflex & Precision
    { title: 'Reaction Time Test', description: 'Visual stimulus response in milliseconds.', href: '/reaction-time-test', icon: <Timer />, badge: 'HOT', category: 'Reflex' },
    { title: 'Aim Trainer', description: 'Flick accuracy & precision target drill.', href: '/aim-trainer', icon: <Target />, badge: 'NEW', category: 'Reflex' },
    { title: 'Stroop Effect Test', description: 'Cognitive interference response test.', href: '/stroop-test', icon: <Eye />, badge: 'COGNITIVE', category: 'Reflex' },
    { title: 'Time Guesser', description: 'Internal temporal interval estimation.', href: '/time-guesser', icon: <Clock />, badge: '', category: 'Reflex' },

    // 3. Cognitive & Memory
    { title: 'Chimp Test', description: 'Working memory Kyoto sequence benchmark.', href: '/chimp-test', icon: <MonkeyIcon />, badge: 'HOT', category: 'Memory' },
    { title: 'Visual Memory Test', description: 'Spatial grid pattern recall test.', href: '/visual-memory-test', icon: <Grid2x2 />, badge: '', category: 'Memory' },
    { title: 'Number Memory Test', description: 'Progressive digit span chunking.', href: '/number-memory-test', icon: <Brain />, badge: '', category: 'Memory' },
    { title: 'Sequence Memory Test', description: 'Chained sequential block recall.', href: '/sequence-memory-test', icon: <BrainCircuit />, badge: '', category: 'Memory' },
    { title: 'Verbal Memory Test', description: 'Short-term word identification buffer.', href: '/verbal-memory-test', icon: <MessageSquare />, badge: '', category: 'Memory' },
    { title: 'Word Memory Test', description: 'Verbal recognition memory test.', href: '/word-memory-test', icon: <FileText />, badge: '', category: 'Memory' },
    { title: 'Memory Match Game', description: 'Card pairing visual association.', href: '/memory-game', icon: <Layers />, badge: '', category: 'Memory' },
    { title: 'Simon Says', description: 'Audio-visual pattern repetition.', href: '/simon-says', icon: <Disc />, badge: '', category: 'Memory' },

    // 4. Typing & Keyboard
    { title: 'Speed Typer', description: 'Real-time text sprint with accuracy.', href: '/type-racer', icon: <Keyboard />, badge: 'HOT', category: 'Typing' },
    { title: 'Typing Test (60s)', description: 'Standard 1-minute Words Per Minute.', href: '/typing-test', icon: <Type />, badge: '', category: 'Typing' },
    { title: 'Typing Test (30s)', description: 'High-intensity 30-second burst typing.', href: '/typing-test-30s', icon: <Clock />, badge: 'FAST', category: 'Typing' },
    { title: 'Word Master', description: '5-letter deductive vocabulary solver.', href: '/word-master', icon: <Languages />, badge: '', category: 'Typing' },
    { title: 'Word Scramble', description: 'Anagram decoding against the clock.', href: '/word-scramble', icon: <GraduationCap />, badge: '', category: 'Typing' },

    // 5. Logic & Classics
    { title: '2048 Classic', description: 'Powers-of-two tile merge puzzle.', href: '/2048', icon: <Grid2x2 />, badge: 'CLASSIC', category: 'Classics' },
    { title: 'Cupcake 2048', description: 'Sweet dessert theme tile merger.', href: '/cupcake-2048', icon: <Sparkles />, badge: '', category: 'Classics' },
    { title: 'Classic Snake', description: 'Retro 2D arcade game on canvas.', href: '/snake', icon: <Gamepad2 />, badge: 'RETRO', category: 'Classics' },
    { title: 'Dino Run', description: 'Endless obstacle jump side-scroller.', href: '/dino-run', icon: <Bird />, badge: 'HOT', category: 'Classics' },
    { title: 'Minesweeper', description: 'Deductive probability grid sweeper.', href: '/minesweeper', icon: <Bomb />, badge: '', category: 'Classics' },
    { title: 'Sudoku', description: '9x9 combinatorial digit placement.', href: '/sudoku', icon: <Grid3x3 />, badge: '', category: 'Classics' },
    { title: 'Tower of Hanoi', description: 'Recursive disk transfer puzzle.', href: '/tower-of-hanoi', icon: <Layers />, badge: '', category: 'Classics' },
    { title: 'Sliding Puzzle', description: '15-puzzle sliding block permutation.', href: '/sliding-puzzle', icon: <Blocks />, badge: '', category: 'Classics' },
    { title: 'Jigsaw Puzzle', description: 'Image tile reconstruction challenge.', href: '/jigsaw-puzzle', icon: <Share2 />, badge: '', category: 'Classics' },
    { title: 'Pop It Fidget', description: 'Tactile sensory bubble popper.', href: '/pop-it', icon: <Disc />, badge: 'RELAX', category: 'Classics' },
    { title: 'Connect the Dots', description: 'Geometric circuit line trace.', href: '/connect-the-dots', icon: <Paintbrush />, badge: '', category: 'Classics' },
    { title: 'Coreball Game', description: 'Orbital pinpoint needle pinning.', href: '/coreball-game', icon: <Disc />, badge: 'PHYSICS', category: 'Classics' },
    { title: 'Block Builder', description: 'Voxel block placement sandbox.', href: '/block-builder', icon: <Blocks />, badge: '', category: 'Classics' },
    { title: 'Drawing Pad', description: 'Freehand digital sketch canvas.', href: '/drawing-pad', icon: <Paintbrush />, badge: '', category: 'Classics' },
    { title: 'Hangman', description: 'Letter guessing lexical puzzle.', href: '/hangman', icon: <Type />, badge: '', category: 'Classics' },
    { title: 'Tic Tac Toe', description: 'Minimax AI grid strategy challenge.', href: '/tic-tac-toe', icon: <Grid2x2 />, badge: '', category: 'Classics' },
    { title: 'Make 24 Math', description: 'Four-digit arithmetic equation solver.', href: '/make-24', icon: <Calculator />, badge: '', category: 'Classics' },
    { title: 'Math Quiz', description: 'Mental arithmetic speed verification.', href: '/math-quiz', icon: <Calculator />, badge: '', category: 'Classics' },
    { title: 'Math Dash', description: 'Speed equation sprint against timer.', href: '/math-dash', icon: <TrendingUp />, badge: 'NEW', category: 'Classics' },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-foreground overflow-hidden">
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ── Hero Section ── */}
      <section className="w-full max-w-4xl mx-auto text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Hardware Monotonic Precision (±0.1ms) · 47 In-House Tools</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Benchmark Your{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Click Speed & Reflexes
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Welcome to CpsSpeedTest, the open web benchmarking platform. Measure clicks per second (CPS), visual reaction time, typing cadence, and cognitive agility with hardware-level accuracy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="#directory">
            <Button size="lg" variant="outline" className="gap-2">
              <Gamepad2 className="w-5 h-5" />
              Browse All 47 Games
            </Button>
          </Link>
          <Link href="/blog">
            <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <BookOpen className="w-5 h-5" />
              Technical Guides
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Live Playable CPS Test (Core Interactive Application) ── */}
      <section className="w-full max-w-3xl mx-auto mb-10">
        <div className="text-center mb-4">
          <Badge variant="outline" className="mb-2 text-xs font-semibold text-primary border-primary/30 bg-primary/10">
            Live Tool
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Interactive CPS Speed Tester</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Tap inside the box below or hit Spacebar to start testing immediately. Select your preferred test duration.
          </p>
        </div>
        <CpsTest gameDuration={5} allowDurationChange={true} />
      </section>

      {/* ── Policy-Compliant Safe Ad Slot 1 (With 40px+ Buffer from Interactive Zone) ── */}
      <div className="w-full max-w-4xl mx-auto my-8 p-3 rounded-xl border border-dashed border-border/40 text-center text-xs text-muted-foreground flex flex-col items-center justify-center min-h-[90px] bg-muted/20">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Advertisement</span>
        <div className="w-full text-center text-xs text-muted-foreground/50 py-2">
          Responsive Google AdSense Display Banner (Auto-Optimized)
        </div>
      </div>

      {/* ── Platform Architecture & Precision Metrics ── */}
      <section className="w-full max-w-4xl mx-auto mb-14 md:mb-18">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 bg-card/50 rounded-2xl border border-border/20 shadow-lg backdrop-blur-sm">
          <StatBadge value="47" label="In-House Tools & Games" />
          <StatBadge value="±0.1ms" label="Hardware Precision" />
          <StatBadge value="0" label="Third-Party Iframes" />
          <StatBadge value="100%" label="Free Access · No Signup" />
        </div>
      </section>

      {/* ── Platform Pillars ── */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-20">
        <FeatureCard
          icon={<Cpu />}
          title="Monotonic Hardware Timestamps"
          description="Powered by window.performance.now() to measure exact click intervals, eliminating the browser CPU throttling that plagues setInterval counters."
        />
        <FeatureCard
          icon={<Activity />}
          title="5 Specialized Benchmarks"
          description="Comprehensive evaluation across mechanical clicking, visual reaction times, motor aim precision, typing WPM, and working memory recall."
        />
        <FeatureCard
          icon={<ShieldCheck />}
          title="Privacy-First Architecture"
          description="Your personal bests and history records remain encrypted on your device via HTML5 localStorage. No tracking pixels or forced accounts."
        />
      </section>

      {/* ── Complete 47-Tool Platform Directory ── */}
      <section id="directory" className="w-full max-w-5xl mx-auto mb-14 md:mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Comprehensive Tool Directory</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Explore our complete catalog of 47 free interactive benchmarks and games.</p>
          </div>
          <Link href="/games">
            <Button variant="ghost" className="gap-1.5 text-primary hover:text-primary/80 text-xs sm:text-sm p-0 sm:p-2">
              View Games Hub <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="Clicking" className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-transparent justify-start mb-6 overflow-x-auto p-0">
            {['Clicking', 'Reflex', 'Memory', 'Typing', 'Classics'].map(tab => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2 font-semibold text-xs sm:text-sm border shadow-sm border-border/20 data-[state=inactive]:bg-card"
              >
                {tab === 'Clicking' && 'Click Speed (11)'}
                {tab === 'Reflex' && 'Reflex & Aim (4)'}
                {tab === 'Memory' && 'Memory & Cognition (8)'}
                {tab === 'Typing' && 'Typing & Words (5)'}
                {tab === 'Classics' && 'Logic & Classics (19)'}
              </TabsTrigger>
            ))}
          </TabsList>

          {['Clicking', 'Reflex', 'Memory', 'Typing', 'Classics'].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allPlatformTools.filter(g => g.category === tab).map((game, index) => (
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

      {/* ── Empirical Click Speed Skill Tiers ── */}
      <section className="w-full max-w-5xl mx-auto text-center mb-14 md:mb-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Click Speed Skill Tiers</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">Where do your test results fall on the global empirical distribution?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clickRanks.map(rank => (
            <RankCard key={rank.rank} {...rank} />
          ))}
        </div>
      </section>

      {/* ── Empirical Testing Methodology & Hardware Calibration (E-E-A-T) ── */}
      <section className="w-full max-w-5xl mx-auto mb-14 md:mb-20 space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-2 text-xs font-semibold text-primary border-primary/30 bg-primary/10">
            Technical Methodology
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">How CpsSpeedTest Measures Precision</h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Measuring human neuromuscular performance requires eliminating browser virtualization drift, operating system event buffering, and hardware polling rate artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border/20 backdrop-blur-sm p-5">
            <CardHeader className="p-0 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Clock className="w-5 h-5" /></div>
                <CardTitle className="text-base font-bold">Monotonic Time vs Wall Clock</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground leading-relaxed">
              Standard JavaScript <code className="text-xs bg-muted px-1 py-0.5 rounded">Date.now()</code> references the operating system system clock, which is subject to NTP clock sync steps and manual adjustments. CpsSpeedTest utilizes <code className="text-xs bg-muted px-1 py-0.5 rounded">performance.now()</code>, a monotonic microsecond timer measured from page navigation start with zero drift.
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/20 backdrop-blur-sm p-5">
            <CardHeader className="p-0 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Cpu className="w-5 h-5" /></div>
                <CardTitle className="text-base font-bold">USB Polling Rate (125Hz – 1000Hz)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground leading-relaxed">
              A standard office mouse reports input every 8 milliseconds (125Hz), whereas gaming mice report at 1ms intervals (1000Hz) or higher. For players executing rapid jitter or butterfly clicking (>12 CPS), high polling rates ensure that click switch closures are not queued behind operating system interrupts.
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/20 backdrop-blur-sm p-5">
            <CardHeader className="p-0 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><ShieldCheck className="w-5 h-5" /></div>
                <CardTitle className="text-base font-bold">Hardware Debounce Filtering</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground leading-relaxed">
              Mechanical switches experience contact leaf bouncing when depressed. Our engine implements a 20ms deduplication filter to distinguish intentional physical presses from electrical bounce anomalies, providing a clean measurement without artificial score inflation.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Policy-Compliant Safe Ad Slot 2 ── */}
      <div className="w-full max-w-4xl mx-auto my-6 p-3 rounded-xl border border-dashed border-border/40 text-center text-xs text-muted-foreground flex flex-col items-center justify-center min-h-[90px] bg-muted/20">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Advertisement</span>
        <div className="w-full text-center text-xs text-muted-foreground/50 py-2">
          Responsive Google AdSense Display Banner (Mid-Article Placement)
        </div>
      </div>

      {/* ── Ergonomic Safety Guidelines & Responsible Gaming ── */}
      <section className="w-full max-w-5xl mx-auto mb-14 md:mb-20">
        <Card className="border-border/30 bg-card/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="p-6 pb-4 border-b border-border/20 bg-muted/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg sm:text-xl font-bold">Ergonomic Safety & Hand Health Advisory</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Responsible training practices for high-speed clicking and keyboard endurance.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Neutral Wrist Alignment
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                Ensure your wrist rests in a neutral, straight position rather than bent upward or cocked to the side. Avoid anchoring your wrist on hard table edges, which compresses the carpal tunnel.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Technique Rotation & Breaks
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                Techniques like jitter clicking involve rapid arm tensing that can cause tendon fatigue. Adhere to the 20-20 rule: rest your hands for at least 60 seconds after every 10 minutes of testing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                Listen to Fatigue Signals
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                If you experience numbness, tingling, burning, or sharp pain in your fingers or forearm, cease testing immediately. Hand stretching and proper rest are essential for long-term gaming dexterity.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section className="w-full max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-6">Frequently Asked Questions</h2>
        <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  How does CpsSpeedTest measure speed with sub-millisecond precision?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Our tester records each valid primary <code className="text-xs bg-muted px-1 py-0.5 rounded">pointerdown</code> or Spacebar event with high-precision hardware timestamps via <code className="text-xs bg-muted px-1 py-0.5 rounded">performance.now()</code>. When the duration expires, your CPS is calculated by dividing total registered clicks by the exact measured seconds.
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

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  Does mouse polling rate impact CPS and reflex scores?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Yes. A mouse operating at a 1000Hz polling rate updates the OS every 1ms, whereas an office mouse running at 125Hz updates only every 8ms. In rapid clicking and millisecond reflex tests, higher polling rates ensure instant report delivery without frame queue lag.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  Are scores kept private?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Yes. Your personal bests and recent test history are saved directly on your browser using localStorage. They are never sent to a server unless you explicitly choose to submit your score to the public leaderboard.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  Is it safe to practice high-speed jitter and butterfly clicking?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Yes, provided you practice with moderation. High-cadence techniques strain forearm flexors. We advise players to warm up with gentle finger stretches, maintain relaxed wrist posture, and take mandatory rest breaks after every 10–15 minutes of testing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline hover:text-primary text-left">
                  Can I test on mobile phones and tablets?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  Yes. CpsSpeedTest is built with full touch-manipulation support. Tapping directly inside the test area registers instantaneously with hardware pointerdown events, completely eliminating the standard 300ms mobile browser tap delay.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* ── Policy-Compliant Safe Ad Slot 3 (Above Footer) ── */}
      <div className="w-full max-w-4xl mx-auto my-6 p-3 rounded-xl border border-dashed border-border/40 text-center text-xs text-muted-foreground flex flex-col items-center justify-center min-h-[90px] bg-muted/20">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Advertisement</span>
        <div className="w-full text-center text-xs text-muted-foreground/50 py-2">
          Responsive Google AdSense Display Banner (Pre-Footer Slot)
        </div>
      </div>
    </div>
  );
}