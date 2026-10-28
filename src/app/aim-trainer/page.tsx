import { GameSEO } from "@/components/game-seo";
import { AimTrainer } from "@/components/aim-trainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Target, Crosshair, Mouse, HelpCircle, CheckCircle2,
  Trophy, Zap, Activity, Star, TrendingUp, Lightbulb,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Aim Trainer – Free FPS Mouse Precision & Accuracy Training Tool | CpsSpeedTest",
  description:
    "Free browser aim trainer to improve your mouse precision, flick shot speed, and target acquisition accuracy. Perfect warm-up for Valorant, CS2, Apex Legends, and Overwatch 2.",
  keywords: [
    "aim trainer",
    "aim practice",
    "fps aim trainer",
    "mouse accuracy test",
    "flick shot trainer",
    "target acquisition training",
    "cs2 aim training",
    "valorant aim warmup",
    "free aim trainer browser",
    "aim trainer online no download",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/aim-trainer",
  },
  openGraph: {
    title: "Aim Trainer – Free FPS Mouse Precision & Accuracy Training | CpsSpeedTest",
    description:
      "Train your flick shot accuracy, target acquisition speed, and mouse precision in 30 seconds. No download — runs directly in your browser.",
    url: "https://www.cpsspeedtest.com/aim-trainer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Aim Trainer – Improve FPS Mouse Accuracy Online",
    description:
      "Browser-based aim trainer for Valorant, CS2 & Apex. Train flick shots, track targets, measure accuracy. No download.",
  },
};

// ─── HowTo Steps ─────────────────────────────────────────────────────────────

const aimHowToSteps = [
  {
    name: "Open the Aim Trainer page",
    text: "Navigate to cpsspeedtest.com/aim-trainer on any desktop browser. Use a physical mouse — trackpad aiming is inaccurate and not recommended for serious training.",
  },
  {
    name: "Set your desired session duration",
    text: "Select 15s (quick warm-up), 30s (standard benchmark), or 60s (endurance training). The 30-second session is the standard for comparing accuracy scores.",
  },
  {
    name: "Click 'Start' to begin the session",
    text: "Targets (circular click zones) will begin appearing at randomized positions across the training canvas. Your 30-second timer starts immediately.",
  },
  {
    name: "Click targets as quickly and accurately as possible",
    text: "Click the center of each target the moment it appears. Speed and accuracy are both measured. Missing the target boundary registers as a miss and lowers your accuracy score.",
  },
  {
    name: "Review your accuracy, hits, misses, and average reaction",
    text: "When the session ends, your Hit %, total hits, total misses, and average target acquisition time (in ms) are displayed. This is your baseline to beat.",
  },
  {
    name: "Focus on one metric per session",
    text: "On some sessions, focus purely on accuracy (slow down, aim carefully). On others, push for speed. Alternating between accuracy-mode and speed-mode sessions develops both simultaneously.",
  },
];

// ─── FAQs (7 high-intent Q&As) ───────────────────────────────────────────────

const aimFaqs = [
  {
    question: "What is an aim trainer and how does it help with FPS games?",
    answer:
      "An aim trainer is an isolated target-clicking exercise that builds your mouse control, target acquisition speed, and flick shot precision outside of a live game environment. By removing in-game distractions (recoil, sound, opponents), it lets you develop pure hand-eye coordination muscle memory. This muscle memory then transfers directly to FPS games like Valorant, CS2, and Apex Legends, allowing you to aim reflexively rather than consciously.",
  },
  {
    question: "How is aim trainer accuracy calculated?",
    answer:
      "Accuracy is calculated as: (Total Target Hits ÷ Total Mouse Clicks) × 100%. Any click that lands outside the active target boundary is counted as a miss. A score of 80%+ is considered good; 90%+ is excellent. Lower accuracy with higher speed is normal for beginners — prioritize accuracy first and allow speed to develop naturally.",
  },
  {
    question: "What mouse DPI and sensitivity should I use for aim training?",
    answer:
      "Most competitive FPS players use 400 or 800 hardware DPI combined with a low in-game sensitivity, targeting an eDPI (DPI × in-game sensitivity) between 200–800. This typically requires 35–50cm of physical mouse movement for a 360° turn. In Windows, disable 'Enhance Pointer Precision' (mouse acceleration) in Settings → Mouse → Additional Settings for a true 1:1 sensor-to-cursor relationship. Mouse acceleration makes your aim inconsistent and unpredictable.",
  },
  {
    question: "What is the difference between flick aiming and tracking aiming?",
    answer:
      "Flick aiming (ballistic targeting) is a rapid wrist or arm snap to a stationary or suddenly appearing target, followed by a micro-correction click. It is used for pre-aiming angles and reacting to sudden enemies. Tracking aiming is continuously synchronizing your crosshair with a moving target's velocity using smooth, controlled forearm movement. Different games favor different styles: CS2 rewards flick shots, Apex and Overwatch reward tracking. A complete aim trainer works both.",
  },
  {
    question: "How long should I warm up with an aim trainer before ranked matches?",
    answer:
      "Research in motor learning shows 10–15 minutes of focused aim training provides optimal neuromuscular potentiation for competitive play. This activates your dominant-hand muscle motor patterns without inducing fatigue. Warming up for longer than 30 consecutive minutes without rest causes neuromuscular fatigue that can actually reduce in-game performance. Treat it like an athlete's pre-game warm-up: purposeful, focused, not exhausting.",
  },
  {
    question: "Does playing an online aim trainer actually improve in-game performance?",
    answer:
      "Yes, consistently. Studies in sports science show that isolated skill drills that match the movement patterns of the target activity transfer positively to that activity. Aim training builds the specific motor patterns (small rapid wrist movements, precise stopping accuracy) used in FPS gunfights. However, aim training alone is not sufficient — game sense, crosshair placement, and positional awareness require actual in-game practice.",
  },
  {
    question: "What is a good aim trainer score for a competitive FPS player?",
    answer:
      "Accuracy above 80% on a 30-second standard session is a good target for most players. Intermediate players typically achieve 70–85% accuracy with an average acquisition time of 450–700ms. Advanced competitive players achieve 85–95% accuracy with sub-400ms average target acquisition. Professional-level players consistently hit 90%+ accuracy with acquisition times under 300ms.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AimTrainerPage() {
  return (
    <>
      <GameSEO
        name="Aim Trainer"
        description="Free browser aim trainer to improve your mouse precision, flick shot speed, and target acquisition accuracy. Perfect warm-up for Valorant, CS2, Apex Legends, and Overwatch 2."
        url="https://www.cpsspeedtest.com/aim-trainer"
        faqs={aimFaqs}
        howToSteps={aimHowToSteps}
        category="SkillGame"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Aim Trainer"
        speakableSummary="An aim trainer is a target-clicking exercise that builds mouse precision and flick shot speed for FPS games. Good accuracy is 80%+ on a 30-second session. Professional players achieve 90%+ with sub-400ms average target acquisition time."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">

        {/* ── HERO ── */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Free Browser Aim Trainer · CS2 · Valorant · Apex · No Download</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Aim Trainer
          </h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Train your <strong>mouse precision, flick shot accuracy, and target acquisition speed</strong> with
            this free browser aim trainer. Click targets as fast and accurately as you can — your hit rate,
            misses, and average reaction time update in real time.
          </p>
        </header>

        {/* ── Interactive Tool ── */}
        <AimTrainer />

        {/* ── SECTION 1: What Is an Aim Trainer? (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Crosshair className="w-5 h-5 text-primary" />
              What Is an Aim Trainer? — Plain-English Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              An <strong>aim trainer</strong> is an isolated target-clicking exercise designed to build
              the specific mouse control skills used in first-person shooter (FPS) games — without the
              complexity of a live match. By removing recoil, enemy behavior, sound, and tactical
              decisions, aim training lets you focus purely on the core mechanical skill of moving your
              crosshair to a target and clicking accurately at speed.
            </p>
            <p>
              This kind of isolated deliberate practice is the same approach used by elite athletes:
              a tennis player practicing serving drills, a basketball player shooting free throws
              repeatedly. The goal is to build reflexive, automatic motor patterns that operate without
              conscious thought — so in-game, your hands aim while your mind focuses on tactics.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              Accuracy (%) = (Target Hits ÷ Total Clicks) × 100
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm space-y-1">
              <p className="font-semibold text-primary">Two Key Metrics This Trainer Measures:</p>
              <p>• <strong>Accuracy %</strong> — What percentage of your clicks land on target</p>
              <p>• <strong>Avg. Acquisition Time (ms)</strong> — Average time from target spawn to successful hit</p>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 2: How to Use (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Use the Aim Trainer — Step-by-Step
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {aimHowToSteps.map((step, i) => (
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

        {/* ── SECTION 3: Benefits (GEO / User Value) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Why Use an Aim Trainer? Real Benefits for FPS Players
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Faster Target Acquisition in Gunfights",
                  body: "Regular aim training conditions your hand to snap to head-level positions automatically. In a real gunfight, this means your crosshair reaches the target 50–150ms faster than an untrained player — often the entire margin between winning and losing the duel.",
                },
                {
                  title: "Consistent Pre-Game Warm-Up Routine",
                  body: "10–15 minutes of aim training before ranked matches activates your dominant-hand motor neurons and establishes baseline mouse feel. Professional esports players universally warm up before competitive play, just as athletes warm up before sport.",
                },
                {
                  title: "Identify & Fix Mouse Sensitivity Issues",
                  body: "If your accuracy is consistently low on one side of the screen vs. the other, your mousepad may be causing tracking inconsistency, or your DPI/sensitivity combination may not match your natural arm movement arc. The aim trainer reveals these issues quickly.",
                },
                {
                  title: "Build Confidence & Reduce Aim Anxiety",
                  body: "Repeated success on aim trainer targets builds neural confidence in your aim. Players who train regularly report feeling less hesitant to take difficult shots in-game, because their hands have already solved similar targeting problems thousands of times.",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 4: Flick vs Tracking + DPI Guide (Technical / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Mouse className="w-5 h-5 text-primary" />
              Flick Aim vs Tracking Aim & DPI Setup Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-sm">⚡ Flick Aiming (Ballistic)</h3>
                <p className="text-xs">A rapid wrist or arm snap to a stationary or suddenly appearing target, followed by a micro-correction click. Used for reacting to peekers, pre-aiming angles.</p>
                <p className="text-xs font-medium text-primary">Best for: CS2, Valorant (stationary enemies)</p>
                <p className="text-xs">Training focus: High-speed, smaller targets. Accuracy 60–70% acceptable while building speed.</p>
              </div>
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-sm">🎯 Tracking Aim (Smooth Pursuit)</h3>
                <p className="text-xs">Continuously synchronizing your crosshair with a moving target using smooth, controlled forearm movement. Requires consistent mouse velocity matching.</p>
                <p className="text-xs font-medium text-primary">Best for: Apex Legends, Overwatch 2 (moving enemies)</p>
                <p className="text-xs">Training focus: Smooth movement precision. Jerky micro-corrections indicate over-correction — slow down.</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground text-sm mb-3">📐 Recommended DPI & Sensitivity Settings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border/40 text-foreground">
                      <th className="py-2.5 px-3 font-bold">Game</th>
                      <th className="py-2.5 px-3 font-bold">Recommended DPI</th>
                      <th className="py-2.5 px-3 font-bold">Target eDPI Range</th>
                      <th className="py-2.5 px-3 font-bold">360° Turn Distance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {[
                      ["CS2 / CSGO", "400 or 800", "400–800", "40–80 cm"],
                      ["Valorant", "400 or 800", "200–600", "45–90 cm"],
                      ["Apex Legends", "800 or 1600", "800–1600", "25–50 cm"],
                      ["Overwatch 2", "800 or 1600", "800–2000", "20–45 cm"],
                    ].map(([game, dpi, edpi, dist]) => (
                      <tr key={game}>
                        <td className="py-2 px-3 font-medium text-foreground">{game}</td>
                        <td className="py-2 px-3">{dpi}</td>
                        <td className="py-2 px-3 text-primary font-semibold">{edpi}</td>
                        <td className="py-2 px-3">{dist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2">
                eDPI = Hardware DPI × In-Game Sensitivity. Lower eDPI = slower, more precise aim.
                Always disable <strong>Enhance Pointer Precision</strong> (mouse acceleration) in Windows for consistent 1:1 tracking.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 5: Score Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Aim Trainer Score Benchmarks — How Do You Compare?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Based on 30-second standard session data, here is how accuracy and acquisition time compare across skill levels:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Skill Tier</th>
                    <th className="py-2.5 px-3 font-bold">Accuracy</th>
                    <th className="py-2.5 px-3 font-bold">Avg Acquisition Time</th>
                    <th className="py-2.5 px-3 font-bold">Typical Player</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["🐢 Beginner", "< 60%", "> 800ms", "New to mouse aiming or FPS games"],
                    ["📈 Developing", "60–74%", "600–800ms", "Casual gamer, irregular aim training"],
                    ["🎮 Intermediate", "75–84%", "400–600ms", "Regular gamer, some deliberate practice"],
                    ["⭐ Advanced", "85–92%", "300–400ms", "Competitive ranked player, daily training"],
                    ["🏆 Pro Level", "93%+", "< 300ms", "Esports or semi-pro, 30+ min daily training"],
                  ].map(([tier, acc, time, desc]) => (
                    <tr key={tier}>
                      <td className="py-2 px-3 font-medium text-foreground">{tier}</td>
                      <td className="py-2 px-3 text-primary font-semibold">{acc}</td>
                      <td className="py-2 px-3 font-semibold">{time}</td>
                      <td className="py-2 px-3 text-xs">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 6: Improvement Tips ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your Aim — 6 Proven Training Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[
              { tip: "Lower your sensitivity until you are forced to use your arm", detail: "Most beginners use sensitivity that is too high, relying entirely on wrist micro-movements. Lower eDPI forces large arm swings for big targets and wrist corrections for small ones — the correct FPS aiming technique." },
              { tip: "Train accuracy before speed — every single session", detail: "Start each session by clicking slowly and precisely at 80%+ accuracy. Then progressively push speed while maintaining 75%+. Never sacrifice precision for speed during warm-up." },
              { tip: "Use a large, smooth mousepad", detail: "A pad smaller than 35cm × 30cm limits your arm movement arc, forcing unnatural wrist compensation. Most pro players use XL pads (45–90cm wide). A smooth cloth surface ensures consistent sensor tracking." },
              { tip: "Disable Enhance Pointer Precision in Windows", detail: "Mouse acceleration artificially speeds up your cursor based on how fast you move the mouse, making your aiming inconsistent. Disable it in Control Panel → Mouse → Pointer Options → uncheck 'Enhance Pointer Precision'." },
              { tip: "Warm up 10–15 minutes before ranked play — not longer", detail: "Aim training is most effective as a pre-game activator, not a standalone practice. 10–15 minutes gets your motor neurons firing. More than 30 minutes causes fatigue that carries into your actual games." },
              { tip: "Alternate between flick and tracking sessions", detail: "Spend one session focusing only on fast flick targets (speed priority), the next on slow moving targets (tracking precision). Mixing both in every session dilutes the training signal for each skill." },
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

        {/* ── SECTION 7: FAQ ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — Aim Trainer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {aimFaqs.map((faq, index) => (
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

        {/* ── SECTION 8: Related Tools ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              Related Reflex & Precision Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Reaction Time Test", href: "/reaction-time-test", desc: "Measure your visual reflex speed in milliseconds." },
                { label: "CPS Test", href: "/cps-test", desc: "Benchmark your click speed alongside aiming precision." },
                { label: "Chimp Test", href: "/chimp-test", desc: "Test spatial working memory — another key gaming skill." },
                { label: "Stroop Test", href: "/stroop-test", desc: "Measure cognitive processing speed and focus under pressure." },
                { label: "Double Click Test", href: "/double-click-test", desc: "Verify your mouse double-click registration speed." },
                { label: "Aim Trainer Guide", href: "/blog/aim-trainer-guide", desc: "Full guide: sensitivity setup, techniques, and training plans." },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
