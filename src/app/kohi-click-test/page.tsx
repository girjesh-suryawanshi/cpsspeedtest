import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Target, Swords, Clock, Activity, Cpu, ShieldAlert, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Kohi Click Test (10s) – Minecraft PvP Stamina Benchmark | CpsSpeedTest',
  description: 'Take the classic 10-second Kohi Click Test. Benchmark sustained clicking endurance, learn 1.8 hit-tick registration mechanics, and compare your score to PvP benchmarks.',
  keywords: ['kohi click test', 'kohi cps test', 'minecraft cps', 'pvp clicking', '10 second click test', 'kohi network click test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/kohi-click-test',
  },
};

const kohiFaqs = [
  {
    question: "What is the historical origin of the Kohi Click Test?",
    answer: "The test originated on the historic Kohi Network Minecraft PvP server around 2014–2015. Server administrators built an in-game clicking arena where players stood on iron pressure plates to test their 10-second click speeds, verifying whether players were clicking legitimately or utilizing blacklisted auto-clickers and macro scripts."
  },
  {
    question: "Why is 10 seconds considered the gold standard for Minecraft PvP?",
    answer: "A 10-second window tests true neuromuscular endurance rather than brief 1-second burst luck. In competitive Minecraft 1.8 pot-PvP, rod-PvP, or combo duels, fights frequently last several seconds; maintaining a consistent 10–14 CPS cadence while aiming and strafing demands sustained stamina."
  },
  {
    question: "How does CPS affect hit registration and knockback in Minecraft 1.8?",
    answer: "Minecraft processes game events at 20 ticks per second (1 tick = 50ms). When a player takes damage, they experience 10 ticks (500ms) of damage immunity. Clicking at 12+ CPS ensures your weapon attacks register on the exact tick the immunity window expires, maximizing hit frequency, sprint-reset knockback, and combo locking."
  },
  {
    question: "Can high Kohi CPS trigger anti-cheat bans on modern servers?",
    answer: "Legitimate physical clicking with natural human millisecond variance (standard deviation) is accepted on servers like Hypixel. However, automated macro clickers that produce constant zero-jitter intervals or exceed 25+ CPS will trigger automated anti-cheat flags."
  }
];

export default function KohiClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Kohi Click Test (10s) – Minecraft PvP Benchmark"
        description="Take the classic 10-second Kohi Click Test. Benchmark sustained clicking endurance, learn 1.8 hit-tick registration mechanics, and compare your score to PvP benchmarks."
        url="https://www.cpsspeedtest.com/kohi-click-test"
        faqs={kohiFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Swords className="w-3.5 h-3.5" />
            <span>Classic Minecraft 10-Second PvP Standard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Kohi Click Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The benchmark 10-second test popularized by the Kohi PvP community. Test your stamina, pacing consistency, and fatigue resistance over a full combat round.
          </p>
        </header>

        {/* 10s Kohi Test */}
        <CpsTest gameDuration={10} allowDurationChange={false} />

        {/* ── Section 1: The Kohi Origin & Minecraft 1.8 Combat Science (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Swords className="w-5 h-5 text-primary" />
              Origins of Kohi &amp; Why Click Speed Dictates Minecraft PvP
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In the golden era of competitive Minecraft (2014–2016), the <strong>Kohi Network</strong> and later <strong>Badlion</strong> popularized practice arenas where players honed their mechanical combat skills. Server administrators introduced the 10-second click test to establish verifiable community benchmarks and evaluate player legitimacy.
            </p>
            <p>
              Why did the community obsess over 10-second CPS? The answer lies in the fundamental internal mechanics of the <strong>Minecraft 1.8 combat engine</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong className="text-foreground">The 20-Tick Engine:</strong> Minecraft evaluates combat interactions at 20 discrete ticks per second (1 tick = 50ms).
              </li>
              <li>
                <strong className="text-foreground">Damage Invulnerability Window:</strong> When an entity takes damage, it enters a 10-tick (500ms) invulnerable grace period indicated by a red flash.
              </li>
              <li>
                <strong className="text-foreground">Hit-Tick Probability:</strong> If you only click at 5 CPS (1 click every 200ms), you may miss the exact tick the red damage flash ends, giving your opponent a 50–150ms window to retaliate. At 12–15 CPS (1 click every ~70ms), you are statistically guaranteed to register your sword on the very first frame vulnerability reopens.
              </li>
              <li>
                <strong className="text-foreground">Combo Locking &amp; Knockback:</strong> Landing consecutive hits while sprint-resetting (via W-tapping or S-tapping) continuously pushes opponents backward through the air, preventing them from hitting you back.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & 10-Second Stamina Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Kohi Click Speed Tiers (10-Second PvP Standards)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Because maintaining high speed for 10 full seconds causes muscle fatigue, scores on the Kohi test are typically 1–2 CPS lower than 1-second sprints. Here is how players classify:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">5.0 – 6.9 CPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual Player</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Standard single-finger clicking. Struggles against high-speed combo players on PvP servers.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚔️</div>
                <div className="font-bold text-foreground">7.0 – 9.9 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Solid Combatant</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Competitive baseline. Capable of trading blows evenly and executing basic W-tap combos.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">10.0 – 13.9 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">PvP Specialist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Achieved via controlled jitter clicking or entry butterfly clicking. Delivers heavy combo locks.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">14.0+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Kohi Legend Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 1% duelists using advanced double-clicking switches with low debounce firmware.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: 10-Second Pacing & Fatigue Management ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-primary" />
              10-Second Pacing Strategy &amp; Fatigue Resistance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Many players burst at 14 CPS in the first 2 seconds, only to collapse to 6 CPS by second 8 due to forearm lactic acid accumulation. To maximize your 10-second aggregate score:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">Pacing Over Sprinting</h4>
                <p className="text-xs text-muted-foreground">
                  Aim for a sustainable, metronomic cadence. A steady 11 CPS for 10 seconds yields 110 total hits—far better than starting at 14 and plummeting to 7 (88 total hits).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-1.5">
                <h4 className="font-bold text-foreground text-sm">Loose Wrist Grip</h4>
                <p className="text-xs text-muted-foreground">
                  Do not squeeze your mouse shell. Keep your palm relaxed and actuate switches close to the front edge where the mechanical lever advantage is greatest.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Looking to isolate your raw 1-second burst speed? Try the <Link href="/cps-test-1s" className="text-primary hover:underline font-semibold">1-Second CPS Test</Link> or master dual-finger clicking on the <Link href="/butterfly-click-test" className="text-primary hover:underline font-semibold">Butterfly Click Test</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 4: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {kohiFaqs.map((faq, index) => (
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
