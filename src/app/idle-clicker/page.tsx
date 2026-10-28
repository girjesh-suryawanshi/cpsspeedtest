import { GameSEO } from "@/components/game-seo";
import { IdleClicker } from "@/components/games/idle-clicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Coins, Trophy, Activity, TrendingUp, HelpCircle,
  CheckCircle2, Zap, ArrowRight, Sparkles, Award,
  ShieldCheck, Calculator, Landmark
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Idle Clicker – Incremental Economics & Automated Production Game | CpsSpeedTest",
  description:
    "Play Idle Clicker online. Click to generate coins, purchase automated generators, optimize exponential Return on Investment (ROI), and build a massive passive clicking empire.",
  keywords: [
    "idle clicker",
    "cookie clicker game",
    "incremental game",
    "browser clicker",
    "upgrade game",
    "clicker empire",
    "exponential growth game",
    "passive income game",
    "coins per second clicker",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/idle-clicker",
  },
  openGraph: {
    title: "Idle Clicker – Incremental Economics & Automated Production",
    description: "Click to earn coins, unlock exponential automated generators, and optimize production ROI in this browser incremental clicker.",
    url: "https://www.cpsspeedtest.com/idle-clicker",
    type: "website",
  },
};

const idleHowToSteps = [
  {
    name: "Click the central gold coin to generate income",
    text: "Each mouse click or screen tap mints coins based on your active Click Power. In the early game, rapid clicking drives initial progress.",
  },
  {
    name: "Invest early earnings into Click Multipliers",
    text: "Upgrade your manual click yield to turn 1 coin per click into 5, 25, and 100+ coins per click for faster early capitalization.",
  },
  {
    name: "Unlock automated production buildings",
    text: "Purchase Auto-Clickers, Mining Rigs, and Robotic Factories to generate passive Coins Per Second (CPS) automatically.",
  },
  {
    name: "Calculate Return on Investment (Payback Period)",
    text: "Divide an upgrade's coin cost by its added CPS (Cost ÷ ΔCPS). Always purchase the lowest payback period upgrade first.",
  },
  {
    name: "Balance active clicking with passive automation",
    text: "Use high manual click speeds (Butterfly or Jitter clicking) during bonus phases to bootstrap the purchase of expensive high-tier facilities.",
  },
  {
    name: "Track persistent empire growth across sessions",
    text: "All coins, generators, and upgrade stats are automatically synchronized to your browser's local storage so your empire keeps expanding.",
  },
];

const idleClickerFaqs = [
  {
    question: "How do upgrades and automated buildings work in Idle Clicker?",
    answer:
      "Manual click upgrades increase the direct coin yield produced with each mouse click or tap. Automated production buildings (Auto-Clickers, Mining Rigs, Automated Factories) generate continuous passive coin income every second (Coins Per Second or CPS), even when you are not actively clicking.",
  },
  {
    question: "How is upgrade cost scaling calculated mathematically?",
    answer:
      "Like classical incremental games, upgrade costs scale exponentially using the industry-standard geometric progression formula: `Cost = BaseCost × (1.15)^N`, where N represents the number of upgrades already owned in that category. This geometric curve requires players to balance immediate manual clicking with long-term compound automation.",
  },
  {
    question: "What is Return on Investment (ROI) and how does it optimize progression?",
    answer:
      "ROI in incremental games is the payback time in seconds: `Payback (seconds) = Upgrade Cost ÷ Additional Coins Per Second (ΔCPS)`. An upgrade costing 1,000 coins that yields +50 CPS pays for itself in just 20 seconds, representing a significantly better immediate investment than an upgrade costing 10,000 coins that yields +100 CPS (100-second payback period).",
  },
  {
    question: "Is game progress automatically saved when closing the browser tab?",
    answer:
      "Yes! Your lifetime coin balance, active click power, and all purchased automated infrastructure are continuously synchronized to your browser's local storage. You can close the tab, restart your computer, and return anytime without losing your empire's progress.",
  },
  {
    question: "Can I use competitive clicking techniques like Jitter or Butterfly clicking?",
    answer:
      "Absolutely. High-intensity clicking techniques like Butterfly Clicking (15–20 CPS) or Jitter Clicking (12–14 CPS) allow skilled players to generate hundreds of manual clicks in seconds, supercharging the early-game economy and unlocking advanced automation tiers in record time.",
  },
  {
    question: "What is the historical origin of the idle clicker genre?",
    answer:
      "The incremental clicker genre was popularized in August 2013 by French programmer Julien Thiennot (known online as 'Orteil') with the viral release of 'Cookie Clicker'. Precursors like 'Cow Clicker' (Ian Bogost, 2010) originated as satirical social critiques, but evolved into one of the most engaging game design frameworks in modern digital gaming.",
  },
  {
    question: "What economic concepts does playing incremental clickers illustrate?",
    answer:
      "Idle clickers serve as interactive models of capital accumulation, opportunity cost, diminishing marginal returns, compounding interest, and automated production efficiency.",
  },
];

export default function IdleClickerPage() {
  return (
    <>
      <GameSEO
        name="Idle Clicker – Incremental Economics Game"
        description="Click to earn coins, unlock exponential automated generators, and optimize production ROI in this browser incremental clicker."
        url="https://www.cpsspeedtest.com/idle-clicker"
        faqs={idleClickerFaqs}
        howToSteps={idleHowToSteps}
        category="ArcadeGame"
        lastUpdated="October 2026"
        benefits="Master incremental compounding economics, calculate Return on Investment (ROI) payback periods, practice high-CPS mouse clicking, and build an automated clicking empire."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Coins className="w-3.5 h-3.5" />
            <span>Julien Thiennot (2013) Incremental Economics Simulation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Idle Clicker Game
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click to mint coins, unlock automated generators, optimize your production ROI, and scale your passive clicking empire to billions.
          </p>
        </header>

        {/* Interactive Idle Clicker Component */}
        <IdleClicker />

        {/* Section 1: What is Idle Clicker? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Idle Clicker Game?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Idle Clicker</strong> is an incremental strategy game based on the mathematical mechanics popularized by games like Cookie Clicker. Players start by manually clicking a central asset to generate currency, subsequently reinvesting revenue into exponential automated production facilities (Coins Per Second) and algorithmic multipliers to achieve compounding exponential growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Cost Scaling Curve</span>
                <span className="text-lg font-black text-primary">Cost = Base × 1.15^N</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Exponential progression</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Core Metric</span>
                <span className="text-lg font-black text-amber-500">Coins Per Second</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Automated passive rate</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Decision Driver</span>
                <span className="text-lg font-black text-emerald-500">Payback Period (ROI)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Cost ÷ Added CPS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Build an Efficient Clicking Empire
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {idleHowToSteps.map((step, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-border/80 bg-card/40 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {step.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Play Idle Clickers? Economic & Cognitive Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Economic &amp; Strategic Benefits of Incremental Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Calculator className="w-4 h-4" />
                  Intuition for Compound Exponential Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Humans struggle to intuitively grasp exponential curves. Playing incremental clickers vividly illustrates how small compound percentage increases snowball into massive orders of magnitude over time.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Landmark className="w-4 h-4" />
                  Capital Allocation &amp; Opportunity Cost
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every coin spent on an immediate manual upgrade is a coin not invested in compound passive automation. Players learn to weigh short-term rewards against long-term operational cash flows.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <TrendingUp className="w-4 h-4" />
                  Return on Investment (ROI) Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                By comparing payback periods (Cost ÷ Added CPS), players apply corporate financial capital budgeting formulas to determine which asset delivers the quickest return on capital.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  CPS Burst Speed Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Gamer click techniques like Butterfly and Jitter clicking directly accelerate early-game progress. Combining high manual CPS with automated scaling bridges gaming agility with economic strategy.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Exponential Scaling Math */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Incremental Upgrade Cost Progression Math
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Building Tier</th>
                  <th className="p-3">Base Cost</th>
                  <th className="p-3">Base Output (CPS)</th>
                  <th className="p-3">Initial Payback Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Auto-Clicker</td>
                  <td className="p-3 font-mono text-primary font-semibold">15 Coins</td>
                  <td className="p-3 text-emerald-400 font-semibold">+0.5 CPS</td>
                  <td className="p-3 text-emerald-400 font-bold">30.0 Seconds</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Coin Mine</td>
                  <td className="p-3 font-mono text-primary font-semibold">100 Coins</td>
                  <td className="p-3 text-emerald-400 font-semibold">+4.0 CPS</td>
                  <td className="p-3 text-emerald-400 font-bold">25.0 Seconds (Best ROI)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Robotic Factory</td>
                  <td className="p-3 font-mono text-primary font-semibold">1,100 Coins</td>
                  <td className="p-3 text-emerald-400 font-semibold">+32.0 CPS</td>
                  <td className="p-3 text-primary font-bold">34.4 Seconds</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Crypto Server Farm</td>
                  <td className="p-3 font-mono text-primary font-semibold">12,000 Coins</td>
                  <td className="p-3 text-emerald-400 font-semibold">+260.0 CPS</td>
                  <td className="p-3 text-primary font-bold">46.1 Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Idle Clicker Production Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Manual Apprentice</div>
              <div className="text-2xl font-black text-foreground">&lt; 50 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relies primarily on direct manual clicks. Unlocks basic auto-clickers and early coin mining equipment.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Industrial Mogul</div>
              <div className="text-2xl font-black text-primary">100 – 1,000 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automated factories and mining shafts running. Passive coin generation surpasses manual finger clicks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Tech Conglomerate</div>
              <div className="text-2xl font-black text-amber-500">5,000 – 50,000 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Compound automation with server farms and research labs. Coins accumulate exponentially by millions.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Galactic Tycoon</div>
              <div className="text-2xl font-black text-rose-500">100,000+ CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% economy. Billions of coins generated passively; fully optimized ROI progression.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Tips to Maximize Your Coins Per Second (CPS)
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Prioritize Lowest Payback Period</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Always buy the building with the lowest Payback Time (Cost ÷ Added CPS). An upgrade that pays for itself in 20 seconds is always superior to one that takes 60 seconds.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Burst Click in the Early Game</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    In the first 3 minutes, manual clicking is 10x faster than early passive income. Use two-finger butterfly clicking to bootstrap your first 1,000 coins in seconds.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Don&apos;t Hoard Inactive Coins</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Unspent coins generate zero interest. Reinvest your balance immediately into revenue-generating facilities to keep your compound growth curve steep.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Let Automation Work in Background Tabs</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Our idle clicker engine maintains tick loops while running in background tabs, allowing your empire to generate millions of coins while you work or study.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {idleClickerFaqs.map((faq, index) => (
              <Card key={index} className="border-border/70 bg-card/40">
                <CardHeader className="py-3.5 px-4 sm:px-5">
                  <CardTitle className="text-sm sm:text-base font-semibold text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 pb-4 px-4 sm:px-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cross-linking Related Clickers */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Clicker &amp; Speed Tests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/cps-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">CPS Speed Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pop-it"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Pop-It Fidget</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/butterfly-click-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Butterfly Clicker</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/spacebar-clicker"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Spacebar Clicker</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
