import { GameSEO } from "@/components/game-seo";
import { ReactionTimeTest } from "@/components/reaction-time-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Timer, Zap, Cpu, Activity, Brain,
  CheckCircle2, HelpCircle, Star, TrendingUp, Lightbulb, Target,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reaction Time Test – Measure Your Reflex Speed in Milliseconds | CpsSpeedTest",
  description:
    "Free online reaction time test that measures your visual reflex speed in milliseconds. See how your reaction time compares to average human benchmarks and professional gamers.",
  keywords: [
    "reaction time test",
    "reflex test",
    "reaction speed test",
    "human benchmark reaction time",
    "visual reaction time",
    "gaming reaction time test",
    "average human reaction time",
    "how fast are my reflexes",
    "online reflex tester",
    "reaction time for gaming",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/reaction-time-test",
  },
  openGraph: {
    title: "Reaction Time Test – How Fast Are Your Reflexes? | CpsSpeedTest",
    description:
      "Measure your visual reaction time in milliseconds. Compare your reflex speed with average humans, casual gamers, and esports professionals.",
    url: "https://www.cpsspeedtest.com/reaction-time-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reaction Time Test – Benchmark Your Reflexes in Milliseconds",
    description:
      "Free reflex speed test. When the screen turns green, click as fast as you can. No download required.",
  },
};

// ─── HowTo Steps ─────────────────────────────────────────────────────────────

const reactionHowToSteps = [
  {
    name: "Open the test page",
    text: "Navigate to cpsspeedtest.com/reaction-time-test in any modern web browser on desktop or mobile. The test loads in under 1 second — no plugins required.",
  },
  {
    name: "Read the instructions and click to arm",
    text: "Click the test area once to arm the test. The screen will turn red, signalling the waiting phase has begun.",
  },
  {
    name: "Wait for the green signal — do not anticipate",
    text: "The screen remains red for a randomized delay of 2 to 5 seconds. Do not click during this phase. Clicking early triggers a 'Too Soon' false-start penalty and restarts the round.",
  },
  {
    name: "Click the instant the screen turns green",
    text: "The moment the display changes to green, click as quickly as possible. Your reaction time in milliseconds is calculated from the instant the color changes to the moment the click event registers.",
  },
  {
    name: "Review your result",
    text: "Your reaction time is displayed on screen. Results under 200ms are excellent; 200–250ms is average. Compare your score with the benchmark tiers listed below.",
  },
  {
    name: "Run 5 rounds and average your results",
    text: "A single reaction time measurement can vary by 20–40ms due to momentary attention lapses. Run at least 5 rounds and use your average as your true baseline score.",
  },
];

// ─── FAQs (7 high-intent questions) ──────────────────────────────────────────

const reactionFaqs = [
  {
    question: "What is reaction time and what does it measure?",
    answer:
      "Reaction time is the elapsed duration between the presentation of an unexpected sensory stimulus and the start of your physical motor response to it, measured in milliseconds (ms). This test specifically measures simple visual reaction time — the speed between seeing a green visual signal and clicking your mouse. It is a standard metric used in neuroscience research, sports performance science, and esports player benchmarking.",
  },
  {
    question: "What is an average human reaction time?",
    answer:
      "The average human visual reaction time is 200–250 milliseconds. Auditory reaction time is faster at approximately 170ms because auditory nerve pathways have fewer synaptic relays than the visual cortex pathway. Elite esports athletes and fighter pilots typically achieve sustained visual reaction times of 150–190ms through dedicated training and anticipation pattern recognition.",
  },
  {
    question: "What is a good reaction time for gaming?",
    answer:
      "For casual gaming, reaction times of 200–250ms are normal. For competitive FPS games (Valorant, CS2, Apex Legends), a target of 180–220ms is considered competitive. Professional esports players typically maintain 150–190ms reaction times, partly due to trained anticipation, pre-aiming habits, and familiarity with opponent movement patterns rather than pure biological reflex improvement.",
  },
  {
    question: "Can reaction time be improved with training?",
    answer:
      "Yes. Consistent practice on reaction time tests, aim trainer tools, and target anticipation drills can reduce your baseline by 20–50ms over weeks. Physical conditioning (aerobic fitness, sleep quality, hydration) also meaningfully affects neural transmission speed. However, the absolute biological floor for human visual reaction is approximately 130–150ms — no training can overcome the physical speed of photoreceptor signaling and nerve conduction.",
  },
  {
    question: "How does monitor refresh rate affect reaction time test scores?",
    answer:
      "Significantly. A 60Hz monitor refreshes every 16.6ms, a 144Hz monitor every 6.9ms, and a 240Hz monitor every 4.16ms. A higher refresh rate delivers the green visual cue to your eyes up to 12ms sooner than a 60Hz panel. On a 60Hz monitor, an extra half-frame of display lag adds ~8ms to your score. For the most accurate comparison, users should test on the same monitor.",
  },
  {
    question: "Why does the test use a randomized delay instead of a fixed countdown?",
    answer:
      "A fixed countdown (e.g., always 3 seconds) allows your brain to anticipate the stimulus and initiate a click slightly before the cue appears — producing scores that reflect prediction speed rather than true reflex latency. The 2–5 second randomized delay prevents timing prediction and forces a genuine stimulus-response measurement every round.",
  },
  {
    question: "Does age affect reaction time scores?",
    answer:
      "Yes. Human visual reaction time is fastest in the 18–24 age range, averaging around 200–210ms. By age 40, average reaction time increases to approximately 230–250ms due to gradual reduction in nerve conduction velocity and synaptic efficiency. Regular physical activity and cognitive exercises help maintain faster reaction times as age increases.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReactionTimeTestPage() {
  return (
    <>
      <GameSEO
        name="Reaction Time Test"
        description="Free online reaction time test that measures your visual reflex speed in milliseconds. See how your reaction time compares to average human benchmarks and professional gamers."
        url="https://www.cpsspeedtest.com/reaction-time-test"
        faqs={reactionFaqs}
        howToSteps={reactionHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Reaction Time Test"
        speakableSummary="The average human visual reaction time is 200–250 milliseconds. Gamers typically achieve 170–200ms. Elite esports players maintain 150–190ms through training. This free test measures your exact reaction speed in milliseconds."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">

        {/* ── HERO ── */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Timer className="w-3.5 h-3.5" />
            <span>High-Precision Visual Reflex Benchmark · Free · No Download</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Reaction Time Test
          </h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>Reaction Time Test</strong> measures how quickly you respond to a visual stimulus.
            When the screen turns green, click as fast as you can. Your reflex speed is captured in
            milliseconds — the same measurement used in neuroscience labs and esports performance testing.
          </p>
        </header>

        {/* ── Interactive Tool ── */}
        <ReactionTimeTest />

        {/* ── SECTION 1: What Is Reaction Time? (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-primary" />
              What Is Reaction Time? — A Plain-English Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              <strong>Reaction time</strong> is the elapsed time — measured in milliseconds — between a sensory
              stimulus appearing and your body beginning its physical response. In this test, that means the gap
              between the screen changing from red to green and your mouse button being clicked. It is a
              fundamental performance metric in sports science, neurology, military pilot testing, and
              competitive gaming.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              Reaction Time (ms) = Time of Click − Time Screen Turned Green
            </div>
            <p>
              The human brain processes a visual signal through a five-stage neurological chain before a click occurs.
              Understanding this chain explains why 130ms is the absolute biological floor — it takes time for
              photons to become a nerve signal, travel to the visual cortex, be processed, and trigger a muscle:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Photoreceptor Activation:</strong> Photons from the green screen
                strike rod and cone photoreceptors in your retina (~15–30ms).
              </li>
              <li>
                <strong className="text-foreground">Optic Nerve Transmission:</strong> Electrochemical signals travel
                along the optic nerve to your visual cortex via the lateral geniculate nucleus (~20–40ms).
              </li>
              <li>
                <strong className="text-foreground">Cognitive Processing &amp; Decision:</strong> The visual cortex
                interprets the color change and signals the motor cortex to initiate a response (~50–80ms).
              </li>
              <li>
                <strong className="text-foreground">Efferent Nerve Conduction:</strong> Motor impulses travel down
                the spinal cord and peripheral arm nerves to your index finger (~30–50ms).
              </li>
              <li>
                <strong className="text-foreground">Mechanical Actuation:</strong> Finger muscles contract and depress
                the mouse microswitch past its actuation point (~15–30ms).
              </li>
            </ol>
            <div className="text-xs bg-secondary/50 p-3 rounded-lg border border-border/30">
              💡 <strong>Biological Floor:</strong> The absolute minimum for human visual reaction is approximately{" "}
              <strong>130–150 milliseconds</strong>. Anyone scoring consistently under 120ms is anticipating
              the stimulus, not reacting to it.
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 2: How to Take the Test (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Take the Reaction Time Test — Step-by-Step
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Follow these steps for an accurate reaction time measurement:</p>
            <ol className="space-y-3">
              {reactionHowToSteps.map((step, i) => (
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
            <p className="text-xs bg-secondary/30 p-3 rounded-lg border border-border/20">
              💡 <strong>Important:</strong> Your reaction time varies by 20–40ms between individual trials due to
              momentary attention fluctuations. Always use a 5-round average for an accurate baseline.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 3: Why Train Reaction Time? (Benefits / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Why Test & Train Your Reaction Time? Real Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Reaction time is not just a gaming metric — it affects performance across a wide range of
              everyday activities and professional pursuits:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Competitive FPS & Esports Gaming",
                  body: "In games like Valorant, CS2, and Apex Legends, the player who clicks first in a gunfight wins. A 50ms reaction time advantage translates to winning approximately 90% of equal-skill duels. Regular reaction training is a standard component of professional esports coaching programs.",
                },
                {
                  title: "Driving Safety & Road Awareness",
                  body: "Average human visual reaction time of 250ms translates to approximately 5.5 meters of travel distance at 80 km/h before braking begins. Faster reaction times directly reduce stopping distances and accident severity — reaction time training has real road safety value.",
                },
                {
                  title: "Sports Performance",
                  body: "From batting in cricket to sprinting off a starting block, faster visual reaction times give athletes a measurable performance advantage. Track sprinters in sub-10-second 100m races have reaction times of 130–160ms from the starter's gun.",
                },
                {
                  title: "Cognitive Health & Brain Fitness",
                  body: "Reaction time is a validated biomarker for overall cognitive health. Age-related cognitive decline typically shows up as increasing reaction times. Regular mental exercises, physical fitness, and adequate sleep all maintain faster neural processing speeds.",
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

        {/* ── SECTION 4: Factors That Affect Reaction Time (Technical / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Hardware & Biological Factors That Affect Your Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Multiple layers of hardware and biology sit between the stimulus and your registered click:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Factor</th>
                    <th className="py-2.5 px-3 font-bold">Typical Delay Added</th>
                    <th className="py-2.5 px-3 font-bold">How to Minimise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Monitor Refresh Rate", "+8–16ms (60Hz) vs +4ms (144Hz)", "Use a 144Hz or 240Hz monitor for competitive testing"],
                    ["Monitor Input Lag", "+1–5ms (gaming) vs +20–60ms (TV mode)", "Enable 'Game Mode' on display; disable post-processing"],
                    ["Mouse Polling Rate", "+8ms (125Hz) vs +1ms (1000Hz)", "Set mouse polling to 1000Hz in driver software"],
                    ["Mouse Click Debounce", "+4–12ms (mechanical) vs 0–2ms (optical)", "Use optical switch mouse for lowest latency"],
                    ["Caffeine / Alertness", "−20–30ms improvement when alert", "Test when rested and mentally alert; avoid fatigue"],
                    ["Age", "+20–40ms per decade after age 24", "Regular physical exercise slows age-related decline"],
                  ].map(([factor, delay, fix]) => (
                    <tr key={factor}>
                      <td className="py-2 px-3 font-medium text-foreground">{factor}</td>
                      <td className="py-2 px-3 text-xs">{delay}</td>
                      <td className="py-2 px-3 text-xs text-emerald-500">{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 5: Benchmark Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Reaction Time Benchmark Tiers — What Does Your Score Mean?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              How your reaction time compares to global human benchmarks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🐢", tier: "Slow", range: "300ms+", color: "text-slate-400", desc: "Fatigue, distraction, or age-related reduction. Normal for non-gaming adults." },
                { icon: "🙂", tier: "Average Human", range: "200–299ms", color: "text-blue-500", desc: "Standard range for most adults. 200–250ms is the documented human average." },
                { icon: "🎮", tier: "Gamer", range: "150–199ms", color: "text-purple-500", desc: "Achieved through regular gaming and reaction training. Above average globally." },
                { icon: "⚡", tier: "Pro / Elite", range: "100–149ms", color: "text-amber-500", desc: "Esports professionals and elite athletes. Combines training with anticipation pattern recognition." },
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

        {/* ── SECTION 6: How to Improve Reaction Time ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your Reaction Time — 6 Proven Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[
              { tip: "Practice daily with this test (5–10 minutes)", detail: "Consistent, short daily sessions build the neural pathways faster than infrequent long sessions. Aim for 5 rounds per session and track your weekly average." },
              { tip: "Use an aim trainer for predictive anticipation", detail: "Tools like our Aim Trainer build stimulus anticipation through target sequencing — you learn to predict where the next stimulus appears, reducing effective response time in games." },
              { tip: "Prioritize sleep — 7–9 hours per night", detail: "Neural transmission speed drops significantly with even partial sleep deprivation. A single night of 6 hours sleep increases average reaction time by 30–50ms." },
              { tip: "Stay hydrated during test sessions", detail: "Mild dehydration (just 1–2% body weight) reduces cognitive processing speed. Keep water nearby and drink 200–300ml before a serious reaction time session." },
              { tip: "Upgrade your monitor to 144Hz+", detail: "A 60Hz to 144Hz monitor upgrade alone can improve your measurable score by 8–12ms by delivering the green cue to your eyes faster — without any biological training required." },
              { tip: "Exercise regularly — it improves neural speed", detail: "Aerobic exercise increases brain-derived neurotrophic factor (BDNF), which promotes faster synaptic connections. Even 30 minutes of moderate cardio 3× per week measurably improves reaction time scores within 8 weeks." },
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
              Frequently Asked Questions — Reaction Time Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {reactionFaqs.map((faq, index) => (
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
              Related Reflex & Speed Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Aim Trainer", href: "/aim-trainer", desc: "Train target acquisition speed, precision, and tracking." },
                { label: "CPS Test", href: "/cps-test", desc: "Benchmark your clicks per second alongside reflex speed." },
                { label: "Chimp Test", href: "/chimp-test", desc: "Test spatial working memory — the other pillar of gaming performance." },
                { label: "Stroop Test", href: "/stroop-test", desc: "Measure cognitive processing speed and selective attention." },
                { label: "Visual Memory Test", href: "/visual-memory-test", desc: "Test spatial visual pattern recall under pressure." },
                { label: "Reaction Time Test Guide", href: "/blog/reaction-time-test-guide", desc: "Full science guide: what affects reaction speed and how to improve." },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1"
                >
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
