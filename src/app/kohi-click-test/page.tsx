import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Target, Swords, Clock, Activity, Cpu,
  CheckCircle2, HelpCircle, Star, TrendingUp, Lightbulb,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kohi Click Test – 10 Second CPS Stamina Benchmark for Minecraft PvP | CpsSpeedTest",
  description:
    "Take the classic Kohi Click Test — the original 10-second CPS endurance benchmark from the Kohi Minecraft PvP server. Measure sustained clicking stamina and compare with PvP benchmarks.",
  keywords: [
    "kohi click test",
    "kohi cps test",
    "10 second click test",
    "minecraft pvp cps test",
    "kohi network click speed",
    "minecraft clicking speed test",
    "10s cps benchmark",
    "pvp click endurance",
    "kohi server cps",
    "minecraft 1.8 cps test",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/kohi-click-test" },
  openGraph: {
    title: "Kohi Click Test – Classic 10-Second Minecraft PvP CPS Benchmark",
    description: "The original 10-second sustained CPS stamina test from the Kohi Minecraft PvP server. Measure click endurance, not just burst speed.",
    url: "https://www.cpsspeedtest.com/kohi-click-test",
    type: "website",
  },
};

const kohiHowToSteps = [
  { name: "Open the Kohi Click Test", text: "Visit cpsspeedtest.com/kohi-click-test in any desktop browser. No plugins or accounts required." },
  { name: "Position your hand comfortably", text: "Use your regular gaming grip on your mouse. The Kohi test is 10 seconds long — a relaxed grip reduces fatigue." },
  { name: "Click to begin the 10-second timer", text: "Click the test area once to start. The full 10-second window begins on your first click." },
  { name: "Maintain your clicking pace for the full 10 seconds", text: "Unlike a 1-second burst test, the Kohi test requires sustained effort. Focus on smooth, consistent rhythm rather than maximum speed bursts." },
  { name: "Read your endurance CPS result", text: "Your final 10-second average CPS, total clicks, and elapsed time are shown. This is your sustainable clicking speed — closer to real in-game PvP CPS." },
  { name: "Compare with PvP benchmarks", text: "Check your score against the Minecraft PvP benchmark tiers. A score of 8–12 CPS is considered competitive on most servers." },
];

const kohiFaqs = [
  {
    question: "What is the Kohi Click Test and where did it come from?",
    answer:
      "The Kohi Click Test originated on the Kohi Network — a popular Minecraft PvP server active around 2014–2015. Server administrators created an in-game pressure plate arena where players could test their 10-second click speeds to verify they were clicking legitimately rather than using auto-clicker macros. The 10-second format became the community standard for measuring sustained PvP clicking endurance, and the name 'Kohi Click Test' has persisted as a generic term for the 10-second CPS benchmark.",
  },
  {
    question: "Why is the Kohi test 10 seconds instead of 5 seconds?",
    answer:
      "Five seconds measures a mix of burst speed and short-term endurance. Ten seconds is long enough to reveal your true sustained clicking stamina after the initial burst fades. In real Minecraft PvP fights (especially kit PvP and pot PvP), engagements regularly last 5–15 seconds. A 10-second CPS score reflects the click rate you can realistically maintain throughout an entire fight — which is what matters for combat effectiveness.",
  },
  {
    question: "What is a good Kohi Click Test score for Minecraft PvP?",
    answer:
      "For casual Minecraft players, 5–7 CPS over 10 seconds is typical. For competitive PvP on servers like Hypixel Bedwars or Skywars, 8–12 CPS is considered solid. Top players using jitter clicking sustain 11–14 CPS for the full 10 seconds. Butterfly clickers with compatible hardware can maintain 14–20+ CPS. For Minecraft 1.8 PvP specifically, 8–12 CPS is the sweet spot for reliable hit-tick registration without triggering anti-cheat.",
  },
  {
    question: "How does CPS affect hit registration in Minecraft 1.8 PvP?",
    answer:
      "Minecraft Java Edition processes game events at 20 ticks per second (one tick = 50ms). When a player takes a hit, they receive 10 ticks (500ms) of damage immunity. Clicking at 8+ CPS ensures at least one hit attempt lands within every 125ms window — statistically guaranteeing a hit registers within each immunity cooldown cycle. Higher CPS improves your hit probability per second but yields diminishing returns above ~12 CPS due to the tick immunity ceiling.",
  },
  {
    question: "Is there a CPS limit before Minecraft anti-cheat flags my account?",
    answer:
      "Most major Minecraft servers (Hypixel, Mineplex) allow natural clicking up to 15–20 CPS with human-like timing variance. Automated macro clickers that produce perfectly even intervals (zero jitter) or exceed 20–25 CPS consistently will trigger automated anti-cheat flags. Human physical clicking has natural millisecond variance between clicks (standard deviation of 8–20ms) — this is what distinguishes real clicking from macro scripts.",
  },
  {
    question: "How is the Kohi Click Test different from the standard CPS test?",
    answer:
      "The key difference is duration and focus. The standard 5-second CPS test measures a mix of burst speed and short endurance. The Kohi Click Test's 10-second duration specifically measures sustained clicking stamina — your ability to maintain consistent CPS across a longer fight duration. Most players score 1–3 CPS lower on the Kohi test than their 5-second average due to muscle fatigue accumulation.",
  },
  {
    question: "Can I improve my 10-second sustained CPS through training?",
    answer:
      "Yes. The key is training both click speed and endurance separately. Practice 10-second sessions daily, focusing on consistent rhythm rather than maximum speed. Build up your click endurance gradually — starting at a comfortable 7 CPS for 10 seconds and increasing by 0.5 CPS per week. Proper wrist position, grip technique, and regular hand stretching all contribute to sustainable higher CPS over 10 seconds.",
  },
];

export default function KohiClickTestPage() {
  return (
    <>
      <GameSEO
        name="Kohi Click Test (10s) – Minecraft PvP Benchmark"
        description="Take the classic Kohi Click Test — the original 10-second CPS endurance benchmark from the Kohi Minecraft PvP server. Measure sustained clicking stamina and compare with PvP benchmarks."
        url="https://www.cpsspeedtest.com/kohi-click-test"
        faqs={kohiFaqs}
        howToSteps={kohiHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Kohi Click Test"
        speakableSummary="The Kohi Click Test is a 10-second CPS endurance benchmark originating from the Kohi Minecraft PvP server. Competitive Minecraft players aim for 8–12 CPS sustained. The 10-second format measures real stamina, not just burst speed."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Swords className="w-3.5 h-3.5" />
            <span>Classic Minecraft PvP 10-Second CPS Endurance Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">Kohi Click Test</h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>Kohi Click Test</strong> is the original <strong>10-second CPS stamina benchmark</strong> from
            the legendary Kohi Minecraft PvP server. Unlike 5-second tests, 10 seconds reveals your true
            sustained clicking endurance — the CPS you can actually maintain during a real PvP fight.
          </p>
        </header>

        <CpsTest gameDuration={10} allowDurationChange={false} />

        {/* What Is the Kohi Test? */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              What Is the Kohi Click Test? History & Purpose
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              The <strong>Kohi Click Test</strong> is a 10-second sustained CPS (Clicks Per Second)
              benchmark that originated on the <strong>Kohi Network</strong> — a competitive Minecraft
              PvP server popular around 2014–2015. It measures clicking <em>endurance</em> rather than
              peak burst speed, making it the most relevant CPS benchmark for competitive gaming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
                <p className="font-bold text-foreground text-sm">⚡ 5-Second Standard CPS Test</p>
                <p className="text-xs">Burst speed — influenced by initial peak. Most players score 1–3 CPS higher than their true sustained rate.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
                <p className="font-bold text-foreground text-sm">⚔️ Kohi 10-Second CPS Test</p>
                <p className="text-xs">True endurance CPS — reflects real fighting pace. Fatigue naturally drops score from burst peak. More accurate for PvP skill assessment.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Play */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-primary" />
              How to Take the Kohi Click Test — Step-by-Step
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {kohiHowToSteps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Why Use the Kohi Click Test? Key Benefits for PvP Players
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Measures Real PvP Fighting CPS", body: "10 seconds matches a typical Minecraft duel length. Your Kohi CPS is the click rate you can actually sustain throughout a real fight — not just your first-second peak." },
                { title: "Minecraft 1.8 Hit-Tick Optimization", body: "At 20 ticks/second with 500ms damage immunity, clicking 8–12 CPS maximizes your hit frequency within each immunity window cycle, increasing damage output per engagement." },
                { title: "Reveals Your Endurance vs. Burst Gap", body: "Comparing your 1s and 10s CPS shows your fatigue drop-off rate. A large gap (4+ CPS) indicates need for endurance training. A small gap (<2 CPS) shows excellent stamina." },
                { title: "Anti-Cheat Legitimacy Verification", body: "The Kohi test helps players verify their click patterns look legitimate. Human natural clicking shows 8–20ms standard deviation between clicks — the Kohi test exposes unnaturally perfect intervals." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Minecraft Tick Mechanics */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Minecraft 1.8 PvP Tick Mechanics — How CPS Affects Damage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Understanding how Minecraft&apos;s tick system interacts with CPS unlocks why click speed matters so much in 1.8 PvP:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">CPS Range</th>
                    <th className="py-2.5 px-3 font-bold">Avg. Click Interval</th>
                    <th className="py-2.5 px-3 font-bold">Hits per 10 Seconds</th>
                    <th className="py-2.5 px-3 font-bold">PvP Effectiveness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["4–6 CPS", "167–250ms", "~20 hit attempts", "Casual — misses many immunity windows"],
                    ["7–9 CPS", "111–143ms", "~35–45 hits", "Solid — hits most immunity windows reliably"],
                    ["10–12 CPS", "83–100ms", "~50–60 hits", "Competitive — maximizes hit registration"],
                    ["13–16 CPS", "63–77ms", "~65–80 hits", "High-level — diminishing returns above 12 CPS due to tick ceiling"],
                  ].map(([cps, interval, hits, eff]) => (
                    <tr key={cps}>
                      <td className="py-2 px-3 font-bold text-primary">{cps}</td>
                      <td className="py-2 px-3">{interval}</td>
                      <td className="py-2 px-3">{hits}</td>
                      <td className="py-2 px-3 text-xs">{eff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Benchmarks */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Kohi CPS Score Benchmarks — Minecraft PvP Skill Tiers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🐢", tier: "Casual", range: "1–5 CPS", color: "text-slate-400", desc: "Casual player. Fine for survival Minecraft." },
                { icon: "⚔️", tier: "Beginner PvP", range: "6–8 CPS", color: "text-blue-500", desc: "Competitive but loses most speed duels." },
                { icon: "🏆", tier: "Skilled PvP", range: "9–12 CPS", color: "text-purple-500", desc: "Hits most damage immunity windows reliably." },
                { icon: "🦅", tier: "Top Tier", range: "13+ CPS", color: "text-amber-500", desc: "High-level with jitter or butterfly technique." },
              ].map((t) => (
                <div key={t.tier} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1 text-center">
                  <div className="text-2xl">{t.icon}</div>
                  <div className="font-bold text-foreground text-sm">{t.range}</div>
                  <div className={`text-xs font-semibold uppercase ${t.color}`}>{t.tier}</div>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Improvement Tips */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your 10-Second Sustained CPS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[
              { tip: "Train rhythm over speed", detail: "Consistent clicking rhythm beats burst-and-crash patterns. Practice maintaining steady 8 CPS for 10 seconds before trying to increase." },
              { tip: "Build endurance with repeated sets", detail: "Do 5 sets of 10-second tests with 30-second rest between. Track your average across all 5. Endurance improves through repeated moderate-intensity sets, not one-off max efforts." },
              { tip: "Use a palm or claw grip for less fatigue", detail: "Fingertip grip (most common for FPS) fatigues faster over 10 seconds than claw or palm grip because it relies entirely on finger muscles. Claw grip distributes load across more hand muscles." },
              { tip: "Consider jitter clicking for sustained 11–14 CPS", detail: "Jitter clicking (forearm vibration) produces higher sustained CPS than regular clicking because it uses larger forearm muscles that fatigue less quickly than isolated finger flexors." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.tip}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — Kohi Click Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {kohiFaqs.map((faq, index) => (
                <div key={index} className="py-3.5 space-y-1.5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Swords className="w-5 h-5 text-primary" />
              Related Click Speed Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "CPS Test (5 Seconds)", href: "/cps-test", desc: "Standard 5-second click speed benchmark." },
                { label: "1-Second Burst CPS Test", href: "/cps-test-1s", desc: "Peak burst click speed in one explosive second." },
                { label: "Minecraft CPS Test", href: "/minecraft-cps-test", desc: "CPS test designed specifically for Minecraft PvP." },
                { label: "Jitter Click Test", href: "/jitter-click-test", desc: "Test forearm-tremor jitter clicking speed." },
                { label: "Butterfly Click Test", href: "/butterfly-click-test", desc: "Two-finger dual-tap click speed benchmark." },
                { label: "Drag Click Test", href: "/drag-click-test", desc: "Friction drag click burst speed challenge." },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
