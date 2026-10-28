import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Sliders, Cpu, Activity, Zap,
  CheckCircle2, HelpCircle, Star, TrendingUp, Lightbulb, Target, ShieldAlert,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Butterfly Click Test – Two-Finger Dual-Tap CPS Speed Benchmark | CpsSpeedTest",
  description:
    "Free butterfly click test to measure your two-finger alternating click speed. Learn the butterfly clicking technique, which mice support it, and how to achieve 14–22+ CPS safely.",
  keywords: [
    "butterfly click test",
    "butterfly clicking",
    "butterfly clicking technique",
    "how to butterfly click",
    "butterfly click cps",
    "best mouse for butterfly clicking",
    "butterfly clicking speed test",
    "dual finger clicking",
    "butterfly click vs jitter click",
    "minecraft butterfly clicking",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/butterfly-click-test" },
  openGraph: {
    title: "Butterfly Click Test – Dual-Finger Alternating CPS Benchmark",
    description: "Measure your butterfly clicking CPS. Learn the technique, required hardware, and how it compares to jitter and drag clicking.",
    url: "https://www.cpsspeedtest.com/butterfly-click-test",
    type: "website",
  },
};

const butterflyHowToSteps = [
  { name: "Verify your mouse supports butterfly clicking", text: "Butterfly clicking requires a mouse with debounce delay of 4ms or less. Mice with 10ms+ debounce (most office mice) will suppress rapid alternating inputs and show artificially low CPS." },
  { name: "Position both index and middle fingers on the left button", text: "Rest both fingertips lightly side-by-side on the left mouse button. Neither finger should be pressing — they should float lightly, ready to tap." },
  { name: "Begin alternating taps in a drumming rhythm", text: "Tap index finger → middle finger → index finger → middle finger in a rapid alternating drumming motion. Think of it like two-fingered piano playing — alternate, not simultaneous." },
  { name: "Keep taps light and fast — avoid pressing hard", text: "Heavy pressing slows down the cycle and fatigues your fingers faster. Light, rapid surface taps allow the natural spring force of the switch to reset before the next finger arrives." },
  { name: "Start the test and maintain rhythm for 10 seconds", text: "Begin the test with your first tap. Keep the alternating rhythm consistent for the full 10 seconds. Focus on smoothness rather than maximum force." },
  { name: "Check your CPS and hardware compatibility", text: "If your score is under 10 CPS but your rhythm feels fast, your mouse debounce is filtering inputs. If you score 14–22+ CPS, butterfly clicking is working correctly with your hardware." },
];

const butterflyFaqs = [
  {
    question: "What is butterfly clicking and how does it work?",
    answer:
      "Butterfly clicking is an advanced mouse clicking technique where both the index and middle finger rest on the primary mouse button and alternate in a rapid drumming pattern. Because two fingers share the workload, the theoretical click rate doubles compared to single-finger clicking. When correctly executed on a compatible mouse, butterfly clicking can achieve 14–22+ CPS — compared to 6–8 CPS for regular single-finger clicking.",
  },
  {
    question: "What mouse debounce setting is needed for butterfly clicking?",
    answer:
      "Butterfly clicking requires a mouse debounce delay of 0–4 milliseconds. Standard office mice use 10–16ms debounce to prevent accidental double-clicks, which actively suppresses rapid butterfly inputs. Gaming mice like the Glorious Model O, Bloody A70, and Roccat Kone Pro allow reducing debounce via companion software to 0–4ms. Without a compatible mouse, registered CPS will be capped below what your clicking rate actually produces.",
  },
  {
    question: "Is butterfly clicking the same as double-clicking?",
    answer:
      "No — but they are related. True butterfly clicking is two separate, intentional, sequential finger taps at high speed. Double-clicking is when a single physical click registers two electrical contacts due to mechanical switch bounce (worn springs). Some players deliberately exploit double-clicking behavior (switch bounce) to achieve very high CPS, but this is technically a hardware malfunction, not butterfly clicking. Most server anti-cheat systems treat exploited double-clicking differently from natural butterfly clicking.",
  },
  {
    question: "Is butterfly clicking allowed in Minecraft PvP servers?",
    answer:
      "Rules vary by server. Most Minecraft PvP servers allow butterfly clicking because it is a legitimate physical technique. However, servers using strict anti-cheat (like Hypixel) flag CPS sustained above 15–20 CPS for extended periods as suspicious. At 14–18 CPS sustainable butterfly clicking, most servers will not flag your account. Always check your specific server's rules on clicking techniques before using butterfly in competitive play.",
  },
  {
    question: "How does butterfly clicking compare to jitter clicking?",
    answer:
      "Butterfly clicking (14–22 CPS) produces higher peak scores than jitter clicking (10–14 CPS) and is significantly easier to aim with since your mouse doesn't shake. However, butterfly clicking requires a compatible low-debounce mouse. Jitter clicking works on any mouse but causes the entire hand to vibrate, disrupting aim. For Minecraft PvP, butterfly clicking is generally preferred when hardware supports it.",
  },
  {
    question: "What is the best mouse for butterfly clicking?",
    answer:
      "The best butterfly clicking mice feature: wide flat left buttons (to accommodate two fingertips side-by-side), adjustable debounce settings (0–4ms capable), mechanical switches with light actuation (40–55g force), and good build quality. Top community picks include the Glorious Model O and O Minus, Bloody A70 and A60, Roccat Kone Pro, and Zowie EC2 (for the button shape). The Glorious O and Bloody A70 are particularly popular for their software debounce control.",
  },
  {
    question: "Does butterfly clicking damage your fingers or cause RSI?",
    answer:
      "Butterfly clicking is generally safer than jitter clicking because it uses deliberate finger movements rather than sustained isometric forearm tension. The main risk is finger extensor tendon overuse if practiced for extended periods daily. Safe practices: limit sessions to 15–20 minutes, take 5-minute breaks between sets, stretch your fingers and wrists before and after, and stop immediately if you feel tendon soreness above the wrist. Unlike jitter clicking, butterfly clicking does not strain wrist ligaments significantly.",
  },
];

export default function ButterflyClickTestPage() {
  return (
    <>
      <GameSEO
        name="Butterfly Click Test – Dual-Finger Alternating Benchmark"
        description="Free butterfly click test to measure your two-finger alternating click speed. Learn the butterfly clicking technique, which mice support it, and how to achieve 14–22+ CPS safely."
        url="https://www.cpsspeedtest.com/butterfly-click-test"
        faqs={butterflyFaqs}
        howToSteps={butterflyHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Butterfly Click Test"
        speakableSummary="Butterfly clicking is a two-finger alternating tap technique that achieves 14–22+ CPS by sharing the workload between index and middle fingers. It requires a mouse with 0–4ms debounce settings. It is safer than jitter clicking and does not disrupt aim significantly."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>Two-Finger Dual-Tap Technique · 10-Second Benchmark · Free</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">Butterfly Click Test</h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>Butterfly Click Test</strong> measures your two-finger alternating click speed.
            Butterfly clicking alternates index and middle fingers on the same button in a drumming pattern,
            achieving <strong>14–22+ CPS</strong> — significantly higher than single-finger or jitter clicking —
            on compatible low-debounce mice.
          </p>
        </header>

        <CpsTest gameDuration={10} allowDurationChange={false} />

        {/* What Is Butterfly Clicking? */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Sliders className="w-5 h-5 text-primary" />
              What Is Butterfly Clicking? Technique & Mechanics Explained
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              <strong>Butterfly clicking</strong> is an advanced mouse clicking technique where both the
              index and middle finger rest on the primary mouse button and alternate tapping in a rapid
              drumming pattern. Because the workload is split between two fingers, the effective click
              rate nearly doubles compared to single-finger clicking — achieving <strong>14–22+ CPS</strong> on
              compatible hardware.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Technique</th>
                    <th className="py-2.5 px-3 font-bold">Typical CPS</th>
                    <th className="py-2.5 px-3 font-bold">Aim Impact</th>
                    <th className="py-2.5 px-3 font-bold">Hardware Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Regular (1 finger)", "6–9 CPS", "None", "Any mouse"],
                    ["Jitter Clicking", "10–14 CPS", "High — hand shakes", "Any mouse"],
                    ["Butterfly Clicking", "14–22 CPS", "Low — minimal shake", "≤4ms debounce required"],
                    ["Drag Clicking", "20–30+ CPS", "None (no movement)", "Matte button + ≤4ms debounce"],
                  ].map(([tech, cps, aim, hw]) => (
                    <tr key={tech}>
                      <td className="py-2 px-3 font-medium text-foreground">{tech}</td>
                      <td className="py-2 px-3 text-primary font-bold">{cps}</td>
                      <td className="py-2 px-3 text-xs">{aim}</td>
                      <td className="py-2 px-3 text-xs">{hw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs">
              <p className="font-semibold text-amber-500">⚠️ Hardware Requirement:</p>
              <p className="mt-1">Butterfly clicking <strong>will not produce high CPS</strong> on mice with 10ms+ debounce. You must verify your mouse supports low debounce (0–4ms) via companion software before expecting 14+ CPS results.</p>
            </div>
          </CardContent>
        </Card>

        {/* How to Butterfly Click */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Butterfly Click — Step-by-Step Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {butterflyHowToSteps.map((step, i) => (
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

        {/* Best Mice */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Best Mice for Butterfly Clicking — Hardware Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Butterfly clicking requires mice with adjustable debounce settings. Here are the community favorites:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Mouse</th>
                    <th className="py-2.5 px-3 font-bold">Min. Debounce</th>
                    <th className="py-2.5 px-3 font-bold">Switch Type</th>
                    <th className="py-2.5 px-3 font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Glorious Model O / O Minus", "0ms", "Omron / Optical", "⭐⭐⭐⭐⭐"],
                    ["Bloody A70 / A60 / TL7", "0ms", "LK Optical", "⭐⭐⭐⭐⭐"],
                    ["Roccat Kone Pro", "4ms", "Titan Optical", "⭐⭐⭐⭐"],
                    ["Razer DeathAdder V3", "0ms (Optical)", "Razer Gen-3 Optical", "⭐⭐⭐⭐"],
                    ["Logitech G Pro X Superlight 2", "2ms", "HERO Optical", "⭐⭐⭐⭐"],
                  ].map(([mouse, debounce, sw, rating]) => (
                    <tr key={mouse}>
                      <td className="py-2 px-3 font-medium text-foreground">{mouse}</td>
                      <td className="py-2 px-3 text-emerald-500 font-bold">{debounce}</td>
                      <td className="py-2 px-3 text-xs">{sw}</td>
                      <td className="py-2 px-3 text-xs">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Score Benchmarks */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Butterfly Click Speed Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🌱", tier: "Learning", range: "8–12 CPS", color: "text-green-500", desc: "Technique not yet refined or mouse has 10ms+ debounce." },
                { icon: "⚡", tier: "Working", range: "13–16 CPS", color: "text-blue-500", desc: "Low-debounce mouse + developing alternation rhythm." },
                { icon: "🔥", tier: "Proficient", range: "17–20 CPS", color: "text-purple-500", desc: "Clean alternation on compatible hardware. Competitive level." },
                { icon: "🏆", tier: "Expert", range: "21+ CPS", color: "text-amber-500", desc: "Excellent hardware + highly optimized technique." },
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

        {/* FAQ */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — Butterfly Click Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {butterflyFaqs.map((faq, index) => (
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
              <Zap className="w-5 h-5 text-primary" />
              Related Click Speed Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Jitter Click Test", href: "/jitter-click-test", desc: "Test forearm-tremor click speed (no hardware needed)." },
                { label: "Drag Click Test", href: "/drag-click-test", desc: "Friction drag clicking — highest possible CPS." },
                { label: "CPS Test (5 Seconds)", href: "/cps-test", desc: "Standard 5-second CPS benchmark." },
                { label: "Kohi Click Test (10s)", href: "/kohi-click-test", desc: "10-second Minecraft PvP endurance test." },
                { label: "Double Click Test", href: "/double-click-test", desc: "Test mouse hardware for double-click faults." },
                { label: "Minecraft CPS Test", href: "/minecraft-cps-test", desc: "CPS benchmark tailored for Minecraft PvP." },
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
