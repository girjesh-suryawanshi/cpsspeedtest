import { GameSEO } from "@/components/game-seo";
import { MinecraftCpsTest } from "@/components/minecraft-cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Swords, ShieldAlert, Activity, Compass, CheckCircle2,
  HelpCircle, Zap, Crosshair, Award, Flame, Cpu, ArrowRight,
  TrendingUp, Shield, Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minecraft CPS Test – Click Speed for 1.8 PvP, Knockback & Bridging | CpsSpeedTest",
  description:
    "Test your Minecraft click speed across 1s, 5s, 10s, and 60s intervals. Master 1.8 PvP combat tick mechanics, knockback reduction, Breezily and Godbridging techniques, and anti-cheat safe ranges.",
  keywords: [
    "minecraft cps test",
    "pvp cps test",
    "minecraft click speed",
    "jitter click pvp",
    "butterfly click minecraft",
    "godbridge cps",
    "hypixel cps test",
    "minecraft 1.8 combat clicker",
    "knockback reduction cps",
    "minecraft bridging cps",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/minecraft-cps-test",
  },
  openGraph: {
    title: "Minecraft CPS Test – Benchmark Click Speed for PvP & Bridging",
    description: "Measure your click speed tailored for Minecraft PvP combat, block-hitting, combo locking, and fastbridging across multiple test intervals.",
    url: "https://www.cpsspeedtest.com/minecraft-cps-test",
    type: "website",
  },
};

const minecraftHowToSteps = [
  {
    name: "Select your practice duration",
    text: "Choose your testing interval: 1s for sprint reaction bursts, 5s for standard duel openers, 10s for Kohi-style stamina, or 60s for full marathon endurance.",
  },
  {
    name: "Assume your competitive PvP mouse grip",
    text: "Position your fingers using your actual gaming grip (normal claw, jitter wrist tension, butterfly dual-finger, or drag index tilt) directly over the primary mouse button.",
  },
  {
    name: "Click the target area to begin timing",
    text: "Your first mouse down triggers the timer immediately with zero latency. No countdown delay, simulating actual sudden-encounter PvP engagements.",
  },
  {
    name: "Maintain clicking rhythm and target stability",
    text: "Focus on maintaining steady CPS without trembling your cursor out of alignment. In Minecraft PvP, cursor crosshair tracking on hitboxes is just as vital as raw speed.",
  },
  {
    name: "Analyze your combat CPS tier",
    text: "Review your final average Clicks Per Second, peak burst rate, and consistency score to see which Minecraft PvP tier and bridging method your mechanics support.",
  },
  {
    name: "Calibrate debounce and repeat drills",
    text: "Tune your mouse software debounce settings or adjust your finger angle, rest 30 seconds to prevent muscle strain, and drill again to build reliable muscle memory.",
  },
];

const minecraftCpsFaqs = [
  {
    question: "What is the optimal CPS rate for Minecraft 1.8 PvP combat?",
    answer:
      "For legacy Minecraft 1.8 PvP, 8 to 12 CPS is the universally accepted sweet spot. Because the Minecraft tick engine evaluates entity damage every 10 ticks (0.5 seconds), clicking between 8 and 12 CPS ensures you hit an opponent on the exact millisecond their red damage invulnerability flash concludes. Going higher than 12–14 CPS provides diminishing returns for hit registration but offers significant benefits for knockback dampening.",
  },
  {
    question: "How does high CPS physically reduce knockback in Minecraft 1.8?",
    answer:
      "In the Java 1.8 combat engine, registering an attack on an enemy while simultaneously absorbing incoming damage resets your horizontal momentum vectors. Scoring reciprocal hits during the brief knockback tick window allows the game's physics calculation to counteract a portion of your backward trajectory, effectively making you take less knockback and locking your opponent into a ground combo.",
  },
  {
    question: "What click speed is required for advanced bridging techniques (Godbridge, Breezily, Moonwalk)?",
    answer:
      "Ninja / Fastbridging requires 6–8 well-timed clicks synchronized with shift un-crouching. Breezily bridging requires 12–15 CPS jitter or butterfly clicking while S-tapping and strafing. Godbridging (placing blocks while running backward without crouching) demands 18–25+ CPS, almost exclusively accomplished via drag clicking or zero-debounce butterfly clicking on matte-textured mouse switches.",
  },
  {
    question: "What is the difference between Minecraft Java 1.8 and 1.9+ click mechanics?",
    answer:
      "Minecraft Java 1.8 has no attack cooldown; attacks inflict maximum damage regardless of swing frequency, making high CPS advantageous for combos and knockback. Minecraft 1.9 introduced an attack cooldown indicator (sweep attacks); spam clicking in 1.9+ reduces weapon damage to a fraction of a heart and disables critical strikes. Therefore, CPS tests specifically cater to 1.8 PvP, Bedrock Edition combat, and bridging mechanics.",
  },
  {
    question: "Can high CPS trigger anti-cheat bans on Hypixel or Minemen Club?",
    answer:
      "Natural human clicking within 15–20 CPS will rarely ban you on reputable servers like Hypixel (Watchdog) or MMC (Anti-Cheat), provided there is authentic human click interval variance. Server anti-cheat systems monitor mathematical standard deviation (jitter) and packet cadence. Uniform millisecond intervals (e.g., exactly 50ms between every click) trigger auto-clicker bans, while natural human finger fatigue produces random variance.",
  },
  {
    question: "Which clicking technique is safest for competitive Minecraft gaming?",
    answer:
      "Normal clicking and well-supported butterfly clicking are significantly safer for long sessions than jitter clicking. Jitter clicking relies on tensing the forearm and wrist tendons to induce tremors, which can cause early muscle fatigue, carpal tunnel strain, and tendonitis if performed excessively without breaks. Butterfly clicking distributes effort across two fingers without requiring sustained isometric arm strain.",
  },
  {
    question: "How does mouse debounce time impact Minecraft CPS?",
    answer:
      "Debounce time is the firmware delay that prevents a physical metal switch vibration from registering as multiple false clicks. In standard office mice, debounce is locked to 10–20ms. In dedicated Minecraft gaming mice (such as Glorious Model O, Roccat Kone Pro, or Bloody A70), debounce can be lowered to 0–4ms. Lower debounce allows butterfly and drag clicking to register 2 clicks per finger tap, instantly multiplying your CPS from 10 up to 20+.",
  },
];

export default function MinecraftCpsTestPage() {
  return (
    <>
      <GameSEO
        name="Minecraft CPS Test – 1.8 PvP & Bridging Benchmark"
        description="Improve your Minecraft PvP combos, hit registration, and bridging speed. Measure CPS in 1s, 5s, 10s, and 60s intervals with zero latency."
        url="https://www.cpsspeedtest.com/minecraft-cps-test"
        faqs={minecraftCpsFaqs}
        howToSteps={minecraftHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        benefits="Enhance Minecraft 1.8 hit registration, improve sprint combo locks, reduce combat knockback, master breezily and godbridging block placement, and calibrate mouse debounce settings."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Swords className="w-3.5 h-3.5" />
            <span>Minecraft 1.8 Combat &amp; Bridging Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Minecraft CPS Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your click speed tailored for Minecraft PvP, block-hitting, combo locking, and fastbridging across multiple test intervals.
          </p>
        </header>

        {/* Game Component */}
        <MinecraftCpsTest />

        {/* Section 1: What is Minecraft CPS Test? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Minecraft CPS Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Minecraft CPS Test</strong> is a dedicated click-speed training tool designed to measure your Clicks Per Second specifically for Minecraft Java Edition 1.8 combat and Bedrock Edition mechanics. Unlike generic clickers, it evaluates how your sustained burst rates align with Minecraft&apos;s 20-tick internal engine, PvP hit registration, knockback mechanics, and high-frequency bridging techniques like Godbridging and Breezily.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Tick Rate Standard</span>
                <span className="text-lg font-black text-primary">20 Ticks / Sec</span>
                <span className="text-xs text-muted-foreground block mt-0.5">50ms internal game loop</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Damage Immunity Window</span>
                <span className="text-lg font-black text-amber-500">10 Ticks (0.5s)</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Max 2 registered hits/sec</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Ideal PvP Benchmark</span>
                <span className="text-lg font-black text-emerald-500">8 – 12 CPS</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Optimal combo hit cadence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Test & Practice (HowTo Schema) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Test and Improve Your Minecraft CPS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {minecraftHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Minecraft CPS Matters — Combat & Bridging Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            Why High CPS Matters in Minecraft: Combos, Knockback &amp; Bridging
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Swords className="w-4 h-4" />
                  Instant Combo Locking (First-Hit Advantage)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When two players charge each other at full sprint, the player who clicks faster is mathematically more likely to land their sword hit on the precise 50ms tick frame they enter weapon range (3.0 blocks). Landing that initial blow knocks the opponent upward and backward, putting them out of reach and trapping them in a continuous sprint combo.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <Shield className="w-4 h-4" />
                  Dynamic Knockback Reduction (Anti-Recoil)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In Minecraft 1.8, player collision physics calculate horizontal impulse vectors on every tick. If you strike an opponent at the exact moment they strike you, your outgoing attack packet mitigates your backward acceleration. Sustaining 10–14 CPS effectively acts as an organic anchor, keeping your boots firmly grounded during tight trading trades.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Compass className="w-4 h-4" />
                  Fastbridging, Breezily &amp; Godbridging
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Placing blocks under yourself while sprinting backward requires continuous placement packets. While Ninja bridging can be done with timed 6–8 CPS, Godbridging requires 18–25+ CPS to eliminate crouching entirely. High right-click CPS prevents block-placement ghosting and prevents you from plummeting into the void in Bedwars and Skywars.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Crosshair className="w-4 h-4" />
                  Block-Hitting &amp; Defense Canceling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Block-hitting combines left-click sword attacks with right-click defensive guard toggles in rapid succession. Mastering simultaneous high left-click and timed right-click cadence grants a 50% damage reduction on incoming sword strikes while keeping your sprint combo reset active in tight 1x1 corridor encounters.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Minecraft Combat Physics & Tick Math */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-500" />
            Minecraft 1.8 Combat Engine vs 1.9+ Mechanics
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Combat Dimension</th>
                  <th className="p-3">Java 1.8 Combat (Spam Era)</th>
                  <th className="p-3">Java 1.9+ Combat (Cooldown Era)</th>
                  <th className="p-3">Bedrock Edition (Crossplay)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Attack Cooldown</td>
                  <td className="p-3 text-emerald-400 font-semibold">None (Full damage on all hits)</td>
                  <td className="p-3 text-amber-400 font-semibold">0.6s – 1.2s weapon gauge</td>
                  <td className="p-3 text-emerald-400 font-semibold">None (Spam allowed)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Damage Invulnerability</td>
                  <td className="p-3">10 game ticks (500ms red flash)</td>
                  <td className="p-3">10 game ticks (500ms red flash)</td>
                  <td className="p-3">10 game ticks (500ms red flash)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Value of High CPS</td>
                  <td className="p-3 text-primary font-bold">Critical (Combos &amp; KB reduction)</td>
                  <td className="p-3 text-rose-400">Low (Penalty on spam attacks)</td>
                  <td className="p-3 text-primary font-bold">High (Fast click hit registration)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Primary Techniques</td>
                  <td className="p-3">Butterfly (12-20), Jitter (10-14)</td>
                  <td className="p-3">Timed rhythm click (1.5 - 2.5)</td>
                  <td className="p-3">Normal click, Butterfly click</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Competitive Servers</td>
                  <td className="p-3">Hypixel, Minemen Club, Lunar</td>
                  <td className="p-3">PvP Legacy, Vanilla Survival</td>
                  <td className="p-3">Hive, Cubecraft, NetherGames</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Minecraft Performance Benchmark Tiers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Minecraft CPS Skill Tiers &amp; Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Tier 1: Novice</div>
              <div className="text-2xl font-black text-foreground">4 – 7 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard office mouse normal clicking. Sufficient for survival mining and single-player PvE, but vulnerable to combo-locks in multiplayer duels.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Tier 2: Competitor</div>
              <div className="text-2xl font-black text-primary">8 – 12 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fast normal or steady jitter clicking. Optimal hit-cadence on 1.8 servers; reliably registers hits the instant entity invulnerability drops.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Tier 3: Ranked Gladiator</div>
              <div className="text-2xl font-black text-amber-500">13 – 17 CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Experienced butterfly or fast jitter clickers. Noticeable knockback reduction, seamless Breezily bridging, and aggressive wall combo locking.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Tier 4: Elite / Godbridger</div>
              <div className="text-2xl font-black text-rose-500">18 – 25+ CPS</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Low-debounce butterfly or drag clicking. Allows backward sprint Godbridging without shift-tapping and near-zero knockback absorption.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Training Routine */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            How to Improve Your Minecraft PvP Click Speed
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Prioritize Aim Stability Over Raw Numbers</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    A player clicking 9 CPS with 95% crosshair accuracy will easily beat a 18 CPS player who misses the opponent&apos;s hitbox. Train your aiming tracking while clicking.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Lower Mouse Debounce Time to 2–4ms</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If using a gaming mouse with customizable software (Glorious, Roccat, Bloody), drop debounce from default 10ms down to 2–4ms to register dual-switch bounces cleanly.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Master W-Tapping and S-Tapping</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    High CPS alone won&apos;t hold a combo. Reset your sprint between hits using brief W-key releases or tap S to control your attack distance and keep opponents airborne.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Incorporate 10-Second Stamina Drills</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    PvP duels last significantly longer than 1-second sprint tests. Practice daily on our 10-second interval to build tendon stamina and prevent wrist locking.
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
            {minecraftCpsFaqs.map((faq, index) => (
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

        {/* Cross-linking Related Tools */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Clicking &amp; Aim Benchmarks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/kohi-click-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Kohi Click Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/butterfly-click-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Butterfly Click Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/jitter-click-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Jitter Click Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/aim-trainer"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">FPS Aim Trainer</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
