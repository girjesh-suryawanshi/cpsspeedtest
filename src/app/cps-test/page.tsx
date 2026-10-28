import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Zap, Calculator, Timer, Cpu, Activity, AlertCircle,
  CheckCircle2, HelpCircle, Star, TrendingUp, Lightbulb, Target,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "CPS Test – Free Clicks Per Second Speed Test & Calculator | CpsSpeedTest",
  description:
    "Take the free CPS Test to measure your clicks per second in real time. Tracks sub-millisecond precision, shows technique benchmarks, and helps you improve your click speed for gaming.",
  keywords: [
    "cps test",
    "click speed test",
    "clicks per second test",
    "cps calculator",
    "mouse click speed test",
    "how fast can i click",
    "click per second counter",
    "cps test for minecraft",
    "free click speed test",
    "kohi cps test",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/cps-test",
  },
  openGraph: {
    title: "CPS Test – Measure Your Click Speed in Seconds | CpsSpeedTest",
    description:
      "Free browser CPS test with sub-millisecond precision. Find out how many clicks per second you can achieve and compare with gamer benchmarks.",
    url: "https://www.cpsspeedtest.com/cps-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPS Test – Free Clicks Per Second Speed Test",
    description:
      "Measure your click speed instantly. Sub-millisecond precision, no download, no signup required.",
  },
};

// ─── HowTo Steps ─────────────────────────────────────────────────────────────

const cpsHowToSteps = [
  {
    name: "Open the CPS Test page",
    text: "Navigate to cpsspeedtest.com/cps-test on any desktop or mobile browser. The test loads instantly — no download, plugin, or account is needed.",
  },
  {
    name: "Choose your test duration",
    text: "Select a duration using the timer buttons above the test area: 1s (burst), 5s (standard), 10s (endurance), 30s, or 60s. The default is 5 seconds, which is the widely accepted benchmark for comparing CPS scores.",
  },
  {
    name: "Click the button to start",
    text: "Click the large 'Click to Start' button once to begin your test. The timer starts on your very first click, so do not click until you are ready.",
  },
  {
    name: "Click as fast as you can",
    text: "Click the test area as rapidly as possible for the full duration. Your live CPS score and total click count update in real time on screen.",
  },
  {
    name: "Read your results",
    text: "When the timer ends, your final CPS score, total clicks, and elapsed time are displayed. Compare your result against the benchmark tiers (Turtle → Rabbit → Cheetah → Falcon).",
  },
  {
    name: "Try again to improve",
    text: "Click 'Try Again' to reset. Repeat 3–5 times and take your best score. Warm up your hand first with 30 seconds of light clicking to improve consistency.",
  },
];

// ─── FAQ Data (7 high-intent Q&As) ───────────────────────────────────────────

const cpsFaqs = [
  {
    question: "What is a CPS test and what does it measure?",
    answer:
      "A CPS test (Clicks Per Second test) is a digital tool that counts how many times you can click a mouse button within a set time period and divides that by the elapsed seconds to calculate your clicking cadence. It is widely used by competitive gamers (especially Minecraft PvP players), esports athletes, and anyone who wants to benchmark or improve their clicking speed.",
  },
  {
    question: "How is Clicks Per Second (CPS) calculated?",
    answer:
      "CPS is calculated by dividing your total validated click inputs by the exact elapsed duration in seconds: CPS = Total Clicks ÷ Elapsed Seconds. For example, if you register 48 valid clicks over 5.012 seconds, your final score is 48 ÷ 5.012 = 9.58 CPS. Our tool uses performance.now() for sub-millisecond elapsed time accuracy instead of imprecise setInterval timers.",
  },
  {
    question: "What is a good CPS score?",
    answer:
      "A good CPS score depends on your goal. For casual computer use, 3–5 CPS is typical. For general gaming, 6–8 CPS is average. Competitive Minecraft PvP players aim for 8–12 CPS using regular clicking. With advanced techniques like butterfly clicking or jitter clicking, skilled gamers regularly reach 12–20+ CPS.",
  },
  {
    question: "Why do CPS scores vary across different test durations?",
    answer:
      "Shorter tests (1-second sprints) measure your peak burst speed before muscle fatigue begins, often yielding 10–14+ CPS. Longer tests (10s, 30s, 60s) demand muscular endurance, causing average scores to drop by 15–30% as finger flexors accumulate lactic acid and neuromuscular fatigue sets in.",
  },
  {
    question: "How does mouse hardware affect CPS test results?",
    answer:
      "Hardware plays a major role. Key factors include: switch debounce delay (lower = more rapid clicks registered), microswitch type (optical switches eliminate contact bounce entirely), USB polling rate (1000Hz reports clicks every 1ms vs 125Hz at 8ms), and actuation force (lighter springs = less finger fatigue). A gaming mouse with 0–4ms debounce can register butterfly clicks that a standard office mouse at 10–12ms debounce would miss.",
  },
  {
    question: "What is the difference between CPS and reaction time?",
    answer:
      "CPS measures sustained motor cadence — how fast you can repeat click cycles once you have started. Reaction time measures latency between seeing a stimulus and clicking once — typically 200–250ms for humans. High CPS does not mean fast reaction time, and vice versa. Competitive gamers ideally need both: fast initial reaction and high sustained click rate.",
  },
  {
    question: "What should I do if my clicks are not registering in the test?",
    answer:
      "First, make sure the browser tab has active focus (click inside the test area). Disable browser extensions like ad blockers or auto-clicker plugins that can interfere with click event listeners. Check that your mouse is not experiencing switch bounce chatter (which auto-clicker protection may suppress), and ensure you are clicking within the designated test boundary on screen.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CpsTestPage() {
  return (
    <>
      <GameSEO
        name="Clicks Per Second (CPS) Test"
        description="Take the free CPS Test to measure your clicks per second in real time. Tracks sub-millisecond precision, shows technique benchmarks, and helps you improve your click speed for gaming."
        url="https://www.cpsspeedtest.com/cps-test"
        faqs={cpsFaqs}
        howToSteps={cpsHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="CPS Test"
        speakableSummary="A CPS test measures how many times you can click per second. The average person clicks 5–7 CPS, regular gamers reach 8–10 CPS, and competitive players using butterfly or jitter clicking can exceed 12–20 CPS."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">

        {/* ── HERO ── */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Sub-Millisecond Precision · No Download · 100% Free</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            CPS Test — Click Speed Test
          </h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>CPS Test</strong> measures how many clicks per second your mouse can register.
            Choose a duration, click as fast as you can, and instantly see your Clicks Per Second score
            with sub-millisecond timing accuracy. No downloads, no signup — completely free.
          </p>
        </header>

        {/* ── Interactive Tool ── */}
        <CpsTest gameDuration={5} allowDurationChange={true} />

        {/* ── SECTION 1: What Is a CPS Test? (AEO Direct Answer) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-primary" />
              What Is a CPS Test? — Plain-English Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              A <strong>CPS test</strong> (Clicks Per Second test) is a free online benchmark that counts
              how many times you can click your mouse button within a fixed time window and divides by
              the elapsed seconds to produce your <em>clicks per second</em> rate. It is one of the most
              popular speed benchmarks in the gaming community — particularly among <strong>Minecraft PvP</strong>{" "}
              players, esports athletes, and anyone competing in fast-paced browser or PC games.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              CPS = Total Valid Clicks ÷ Exact Elapsed Time (seconds)
            </div>
            <p>
              Most online click counters use JavaScript&apos;s <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">setInterval</code>{" "}
              or <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">setTimeout</code>, which
              can drift by up to 15–30ms per tick due to browser CPU throttling. Our tool eliminates
              measurement error by using the browser&apos;s{" "}
              <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">performance.now()</code>{" "}
              API synchronized with{" "}
              <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">requestAnimationFrame</code>,
              delivering true sub-millisecond accuracy.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-1.5">
              <p className="font-semibold text-primary">Worked Example:</p>
              <p>• Total Validated Clicks: <strong>48 clicks</strong></p>
              <p>• High-Resolution Elapsed Time: <strong>5.012 seconds</strong></p>
              <p>• Your CPS Score: 48 ÷ 5.012 = <strong>9.58 CPS</strong></p>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 2: How to Use the CPS Test (HowTo Schema Target) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Use the CPS Test — Step-by-Step Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Getting an accurate CPS score takes less than 30 seconds. Here is the exact process:
            </p>
            <ol className="space-y-3" id="how-to-steps">
              {cpsHowToSteps.map((step, i) => (
                <li
                  key={i}
                  id={`step-${i + 1}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg border border-border/20">
              💡 <strong>Pro tip:</strong> Run 3–5 back-to-back tests and take your average rather than
              your single best result. This gives a more consistent reflection of your true clicking ability.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 3: Why Take a CPS Test? (Benefits / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Why Take a CPS Test? Real Benefits for Gamers & Beyond
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The CPS test is not just a fun novelty — it has genuine, measurable value for competitive
              gamers, developers, and everyday computer users:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Minecraft PvP & Competitive Gaming",
                  body: "In Minecraft 1.8 PvP, your CPS directly affects hit-tick registration. Players with 8–12 CPS land more hits per sprint-reset and can execute faster sprint-attack combos. Higher CPS also matters in games like Roblox, Hypixel, and browser-based clicking games.",
                },
                {
                  title: "Finger Dexterity & Hand-Eye Coordination",
                  body: "Regular CPS practice strengthens the flexor digitorum superficialis muscles in your forearm and builds neuromuscular motor patterns that improve hand-eye coordination for all precision computer tasks — not just gaming.",
                },
                {
                  title: "Mouse Hardware Diagnostics",
                  body: "The CPS test is an effective tool for checking whether your mouse is functioning correctly. If your score is unexpectedly low despite fast clicking, it may indicate switch debounce issues, double-click failures, or a faulty polling rate.",
                },
                {
                  title: "Progress Tracking & Personal Bests",
                  body: "Taking the test regularly lets you track improvement over time as you practice new clicking techniques. Many players use it as a daily warm-up before competitive gaming sessions to activate their clicking muscles and sharpen reflexes.",
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

        {/* ── SECTION 4: 4 Clicking Techniques (Technical Deep-Dive / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              4 Proven Clicking Techniques — From Beginner to Advanced
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Your CPS ceiling is determined by both your biology and your technique. Here are the four
              main clicking methods, ordered from easiest to most advanced:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  n: 1, title: "Regular Clicking", range: "5–8 CPS",
                  body: "Using one index finger with isolated joint flexion. Most comfortable and precise for aiming.",
                  note: "Best for: Beginners, aim-sensitive games (FPS). Ceiling: ~8–9 CPS.",
                },
                {
                  n: 2, title: "Jitter Clicking", range: "10–14 CPS",
                  body: "Tensing your forearm to induce an involuntary tremor that transmits rapid clicks down through your finger.",
                  note: "Best for: Minecraft PvP on standard mice. Warning: High wrist fatigue; limit to 5–10 min sessions.",
                },
                {
                  n: 3, title: "Butterfly Clicking", range: "12–20+ CPS",
                  body: "Alternating your index and middle fingers on the same mouse button in a rapid drumming motion.",
                  note: "Requires a mouse with <4ms debounce (e.g., Glorious Model O, Roccat Kone). Best for bridging.",
                },
                {
                  n: 4, title: "Drag Clicking", range: "20–30+ CPS",
                  body: "Dragging a slightly tacky finger across a matte mouse button to generate friction-induced rapid micro-actuations.",
                  note: "Only 0.5–1 second bursts. Best for god-bridging. Wears out switches quickly.",
                },
              ].map((t) => (
                <div key={t.n} className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                  <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                      {t.n}
                    </span>
                    {t.title} — <span className="text-primary">{t.range}</span>
                  </h3>
                  <p className="text-xs leading-relaxed">{t.body}</p>
                  <p className="text-xs font-medium text-muted-foreground/80 italic">{t.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 5: Hardware Factors Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Mouse Hardware & How It Limits Your CPS Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Even the fastest clicker is constrained by their mouse hardware. These four specs create
              hard physical limits on how fast your clicks can register:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Hardware Variable</th>
                    <th className="py-2.5 px-3 font-bold">Standard Value</th>
                    <th className="py-2.5 px-3 font-bold">Optimal for High CPS</th>
                    <th className="py-2.5 px-3 font-bold">CPS Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Switch Debounce Delay", "8–12 ms", "0–4 ms", "High debounce masks rapid taps; low debounce enables 15+ CPS techniques."],
                    ["Microswitch Technology", "Mechanical (Omron 20M)", "Optical / Kailh GM 8.0", "Optical switches actuate with light — zero contact bounce delay."],
                    ["USB Polling Rate", "125 Hz (8ms report rate)", "1,000–4,000 Hz", "1000Hz reports each click to the OS every 1ms, minimising input jitter."],
                    ["Actuation Force", "65–75 gram-force (gf)", "45–60 gram-force (gf)", "Lighter springs reduce finger fatigue during long 15s–60s click tests."],
                  ].map(([spec, std, opt, impact]) => (
                    <tr key={spec}>
                      <td className="py-2 px-3 font-medium text-foreground">{spec}</td>
                      <td className="py-2 px-3">{std}</td>
                      <td className="py-2 px-3 text-emerald-500 font-semibold">{opt}</td>
                      <td className="py-2 px-3 text-xs">{impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 6: Score Benchmark Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              CPS Score Benchmarks — What Does Your Score Mean?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How your click speed compares across skill levels, based on empirical data from thousands of test sessions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🐢", tier: "Casual", range: "0–4.9 CPS", color: "text-green-500", desc: "Standard navigation and office computer use. No technique required." },
                { icon: "🐇", tier: "Average Gamer", range: "5.0–7.9 CPS", color: "text-blue-500", desc: "Typical regular-click speed for most recreational PC gamers." },
                { icon: "🐆", tier: "Fast / Skilled", range: "8.0–10.9 CPS", color: "text-purple-500", desc: "Experienced action and shooter game players using burst clicking." },
                { icon: "🦅", tier: "Competitive", range: "11.0+ CPS", color: "text-amber-500", desc: "Requires jitter, butterfly, or drag clicking with low-debounce hardware." },
              ].map((t) => (
                <div key={t.tier} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1 text-center">
                  <div className="text-2xl">{t.icon}</div>
                  <div className="font-bold text-foreground text-sm">{t.range}</div>
                  <div className={`text-xs font-semibold uppercase ${t.color}`}>{t.tier}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 7: How to Improve Your CPS ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your CPS Score — 6 Practical Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Improving your CPS is a skill that responds well to structured practice. Here is a
              proven approach that can raise your score by 2–4 CPS within a few weeks:
            </p>
            <div className="space-y-3">
              {[
                { tip: "Warm up before every session", detail: "Spend 30–60 seconds clicking loosely to increase blood flow to your finger flexors. Cold muscles are slower and more injury-prone." },
                { tip: "Master one technique at a time", detail: "Start with regular clicking until you hit 7 CPS, then graduate to jitter clicking. Do not attempt butterfly or drag clicking until your regular technique is solid." },
                { tip: "Use 5-second tests for training, not 1-second", detail: "1-second sprints reflect peak burst speed but not sustainable technique. Training on 5-second tests builds the muscular endurance that transfers to real gaming." },
                { tip: "Track your average, not your best", detail: "Run 5 tests in a row and note the average. Your average is your real skill level — single best scores are often outliers." },
                { tip: "Upgrade your mouse if you have hit a hardware ceiling", detail: "If you are clicking 12+ CPS but your score caps at 10, your mouse debounce delay is the bottleneck. Switches with 0–4ms debounce unlock butterfly and drag clicking scores." },
                { tip: "Rest your wrist — never click through pain", detail: "Tendons need 24–48 hours to recover from strain. If you feel any sharp wrist or finger pain, stop and rest. Consistent safe practice outperforms aggressive sessions that cause injury." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                  <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.tip}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 8: Safety ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-primary" />
              Hand Health & Ergonomic Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Rapid clicking engages the <em>flexor digitorum superficialis</em> and <em>extensor digitorum</em>{" "}
              muscles in your forearm. While practising in short sessions is safe, aggressive clicking
              without proper form can lead to repetitive strain injuries (RSI).
            </p>
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-destructive flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Crucial Safety Rules:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Stop if you feel pain:</strong> Sharp tendon pain, burning, or numbness means stop immediately and rest 24–48 hours.</li>
                <li><strong>Neutral wrist position:</strong> Keep your forearm parallel to the desk surface. Avoid harsh upward wrist bending.</li>
                <li><strong>20-20 Rest Rule:</strong> Take a 30-second break every 20 minutes. Gently roll your wrists and stretch your fingers.</li>
                <li><strong>Limit jitter clicking:</strong> Isometric forearm tension is especially demanding on carpal ligaments — cap sessions at 5–10 minutes.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 9: FAQ ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — CPS Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {cpsFaqs.map((faq, index) => (
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

        {/* ── SECTION 10: Related Tools ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Timer className="w-5 h-5 text-primary" />
              Related Click Speed Tests & Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "1-Second CPS Test", href: "/cps-test-1s", desc: "Measure your peak burst click speed in just 1 second." },
                { label: "Kohi Click Test", href: "/kohi-click-test", desc: "The classic 10-second CPS stamina benchmark." },
                { label: "Jitter Click Test", href: "/jitter-click-test", desc: "Test forearm-tremor rapid clicking technique." },
                { label: "Butterfly Click Test", href: "/butterfly-click-test", desc: "Two-finger alternating click speed benchmark." },
                { label: "Drag Click Test", href: "/drag-click-test", desc: "Friction-drag click burst speed challenge." },
                { label: "How to Increase CPS Guide", href: "/blog/how-to-increase-cps", desc: "Step-by-step guide: beginner to pro clicking techniques." },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1"
                >
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
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
