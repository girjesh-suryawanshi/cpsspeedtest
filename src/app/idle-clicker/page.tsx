import { GameSEO } from "@/components/game-seo";
import { IdleClicker } from "@/components/games/idle-clicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Coins, Trophy, Activity, TrendingUp, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Idle Clicker – Incremental Economics & Automated Production Game | CpsSpeedTest",
  description: "Play Idle Clicker online. Click to generate coins, purchase automated generators, optimize exponential return on investment (ROI), and build a passive clicking empire.",
  keywords: ['idle clicker', 'cookie clicker game', 'incremental game', 'browser clicker', 'upgrade game', 'clicker empire', 'exponential growth game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/idle-clicker',
  },
  openGraph: {
    title: "Idle Clicker – Incremental Economics & Automation Game",
    description: "Click to earn coins, unlock exponential automated generators, and optimize production ROI in this browser incremental clicker.",
    url: 'https://www.cpsspeedtest.com/idle-clicker',
    type: 'website',
  },
};

const idleClickerFaqs = [
  {
    question: "How do upgrades and automation work in Idle Clicker?",
    answer: "Manual click upgrades increase the direct coin yield produced with each mouse click or tap. Automated production buildings (Auto-Clickers, Factories, Mines) generate continuous passive coin income every second (Coins Per Second or CPS), even when you are not actively clicking."
  },
  {
    question: "How is upgrade cost scaling calculated mathematically?",
    answer: "Like most incremental games, upgrade costs scale exponentially using the standard formula: Cost = BaseCost × (1.15)^N, where N is the number of upgrades already purchased. This geometric scaling ensures players must continually balance manual clicking with reinvestment into higher-tier automation buildings."
  },
  {
    question: "What is Return on Investment (ROI) and how does it optimize progression?",
    answer: "ROI in clicker games is the payback time in seconds: Cost ÷ Additional Coins Per Second. An upgrade costing 1,000 coins that yields +50 CPS pays for itself in 20 seconds, representing a significantly better immediate investment than an upgrade costing 10,000 coins that yields +100 CPS (100-second payback)."
  },
  {
    question: "Is game progress automatically saved when closing the browser?",
    answer: "Yes, your lifetime coin balance, manual click power, and all purchased automated infrastructure are continuously synchronized to your browser's local storage so you can close the tab and resume anytime."
  },
  {
    question: "Can I use competitive clicking techniques in Idle Clicker?",
    answer: "Absolutely. Techniques like Butterfly Clicking and Jitter Clicking generate 15 to 20+ manual clicks per second, allowing players to supercharge their early-game coin accumulation and purchase the first tiers of automation within seconds."
  }
];

export default function IdleClickerPage() {
  return (
    <>
      <GameSEO 
        name="Idle Clicker"
        description="Click to earn coins, buy upgrades, and build an auto-clicking empire. The ultimate incremental idle clicker game."
        url="https://www.cpsspeedtest.com/idle-clicker"
        faqs={idleClickerFaqs}
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Coins className="w-3.5 h-3.5" />
            <span>Incremental Economy &amp; Automation Optimization</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Idle Clicker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click to generate wealth, purchase compounding production facilities, and optimize your automated return on investment (ROI) to build an unstoppable industrial empire.
          </p>
        </header>

        {/* Idle Clicker Component */}
        <div className="py-2">
          <IdleClicker />
        </div>

        {/* ── Section 1: The Mathematics of Incremental Games (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Economics of Incremental Progression: Exponential Curves
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Pioneered by games like <em>Cookie Clicker</em> and <em>Adventure Capitalist</em>, <strong>incremental games</strong> demonstrate fundamental principles of exponential mathematics, compounding interest, and capital allocation theory.
            </p>
            <p>
              In the early game, progression is constrained by linear human labor (manual clicks per second). However, by reinvesting earned capital into automated production units, the player transitions into an exponential growth phase where passive coin generation dwarfs manual effort.
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground text-center">
              Compounding Wealth: Total Coins(t) = Manual Clicks + ∫ (Passive CPS × Multipliers) dt
            </div>
            <p className="text-xs">
              Because upgrade costs increase by roughly 15% with every level purchased, optimal strategy requires calculating the exact payback period (Cost ÷ CPS) for every available purchase to maximize overall velocity.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Progression Tiers & Economy Milestones ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Economic Empire Progression Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How far has your automated clicking empire expanded? Compare your coin production milestones against player ranks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🪙</div>
                <div className="font-bold text-foreground">Under 100 CPS</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Manual Labor Phase</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  90% of income is generated through physical clicks. Focuses on unlocking the initial tier of automated helpers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">100 – 1,000 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Early Industrialization</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Passive income matches active clicking. The player can afford basic production multipliers and mining upgrades.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏭</div>
                <div className="font-bold text-foreground">1,001 – 50,000 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Factory Conglomerate</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full industrial automation. Income compounds rapidly; manual clicking is reserved for triggering temporary booster spikes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">50,000+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Monopolist Empire</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% economy. Millions of automated coins streaming in every minute, funding late-game production powerhouses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Optimization Strategies & Supercharging ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Capital Allocation: The ROI Payback Rule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Never Hoard Currency:</strong> Idle cash earns zero return. Every unspent coin sitting in your bank represents lost compounding growth. Spend cash immediately on the highest ROI upgrade.
                </li>
                <li>
                  <strong className="text-foreground">Manual Clicking Boosters:</strong> In the first 60 seconds of a fresh game, rapid clicking using <Link href="/butterfly-click-test" className="text-primary hover:underline">Butterfly Clicking</Link> produces 10x more income than early auto-clickers.
                </li>
                <li>
                  <strong className="text-foreground">Balancing Multipliers:</strong> When a building upgrade doubles output (e.g. 2x Factory speed), its effective ROI is doubled, making older buildings temporarily more attractive than newer ones.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Speed &amp; Clicking Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Test your raw physical click speed and sensory reflexes:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/cps-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">CPS Speed Test</span>
                  <span className="text-primary font-mono">Benchmark Raw Clicks/Sec →</span>
                </Link>
                <Link href="/pop-it" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Pop-It Simulator</span>
                  <span className="text-primary font-mono">Sensory ASMR Bubbles →</span>
                </Link>
                <Link href="/spacebar-clicker" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Spacebar Clicker</span>
                  <span className="text-primary font-mono">Keyboard Tapping Speed →</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Idle Clicker
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {idleClickerFaqs.map((faq, index) => (
                <div key={index} className="py-3.5 space-y-1.5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
