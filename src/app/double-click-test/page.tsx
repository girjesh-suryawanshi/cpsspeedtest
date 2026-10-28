import { GameSEO } from "@/components/game-seo";
import { DoubleClickTest } from "@/components/double-click-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Mouse, ShieldCheck, AlertTriangle, Cpu, Wrench,
  HelpCircle, CheckCircle2, Zap, Star,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Double Click Test – Check Mouse for Unintended Double-Clicks & Switch Chatter | CpsSpeedTest",
  description:
    "Free double click test to detect mouse switch chatter, accidental double-click registration, and hardware debounce failure. Diagnose Omron, Kailh, and optical switches in real time.",
  keywords: [
    "double click test",
    "mouse double click test",
    "mouse switch chatter test",
    "unintended double click fix",
    "mouse debounce test",
    "mouse hardware fault test",
    "omron double click fix",
    "mouse switch test online",
    "mouse clicking bug",
    "mouse switch failure test",
  ],
  alternates: { canonical: "https://www.cpsspeedtest.com/double-click-test" },
  openGraph: {
    title: "Double Click Test – Detect Mouse Switch Chatter & Hardware Faults",
    description: "Free diagnostic tool to test your mouse for accidental double-click registration and switch chatter. No download required.",
    url: "https://www.cpsspeedtest.com/double-click-test",
    type: "website",
  },
};

const doubleClickHowToSteps = [
  { name: "Open the Double Click Test page", text: "Visit cpsspeedtest.com/double-click-test in any desktop browser. No plugins or software download needed — the test works in-browser." },
  { name: "Connect the mouse you want to test", text: "If testing a specific mouse for a hardware fault, connect that mouse now and ensure it is your active pointing device." },
  { name: "Click the test area — deliberately one click at a time", text: "Click the button once, slowly and deliberately. Wait 1 full second between each click. The test records every click event your computer receives from the mouse." },
  { name: "Watch for unexpected double registrations", text: "If your single deliberate click registers as two separate click events on screen, your mouse switch is chattering (producing false double-clicks from switch spring bounce)." },
  { name: "Perform 20–30 test clicks at different speeds", text: "Test at normal speed, slow speed, and firm press speed. Switch chatter is often inconsistent and may only appear under certain pressing conditions." },
  { name: "Interpret your results", text: "Zero double registrations = mouse switch is healthy. 1–5 double registrations = switch showing early chatter — monitor and consider replacement soon. 5+ double registrations = significant switch failure. Consider switch replacement or warranty claim." },
];

const doubleClickFaqs = [
  {
    question: "What is double-click chatter and why does it happen?",
    answer:
      "Mouse switch chatter is a hardware fault where a single deliberate mouse click registers as two or more separate click events. It is caused by mechanical switch spring fatigue — the metal leaf spring inside the microswitch begins to bounce on contact instead of settling cleanly. As the spring ages and loses tension, the electrical contacts briefly disconnect and reconnect during a single press, generating multiple rapid click signals that the operating system and games interpret as separate clicks. It typically appears after 1–3 years of heavy use.",
  },
  {
    question: "How do I know if my mouse is double-clicking unintentionally?",
    answer:
      "Common symptoms include: accidentally selecting text when you intended to single-click, files opening when you meant to single-click on the desktop, double-clicking in Minecraft or FPS games when you clicked once, and drag-and-drop failing because the mouse releases and re-grabs the item. This double-click test diagnoses it directly: if one deliberate click registers as two events on screen, your switch is chattering.",
  },
  {
    question: "Can mouse double-click chatter be fixed without replacing the mouse?",
    answer:
      "Several software-level workarounds exist: increase your operating system's double-click speed threshold in Control Panel → Mouse → Buttons so rapid pairs are less likely to be distinguished. Windows also has a registry value (DoubleClickTime, default 500ms) that can be adjusted. However, these only mask the symptom. The proper hardware fix is switch replacement — an experienced repair person can desolder and replace the Omron D2FC-F-7N switch (the most common chattering switch) for approximately $1–5 in parts.",
  },
  {
    question: "Which mouse switches are most prone to double-click chatter?",
    answer:
      "The Omron D2FC-F-7N (rated 5 million actuations) is the most widely reported chattering switch, as it is used in budget to mid-range Logitech, Razer, and many generic gaming mice. The Omron D2F-01F (10M rated) has a better track record. Kailh GM 8.0 switches are also prone to chatter on older specimens. Optical switches (Razer Optical Gen-3, Glorious Optical, LK Optical) do not use mechanical spring contacts and are essentially immune to traditional chatter.",
  },
  {
    question: "Does high CPS clicking (butterfly/drag) cause permanent double-click chatter?",
    answer:
      "Yes — butterfly and drag clicking dramatically accelerate mechanical switch degradation. These techniques generate 10–50× more actuations per session than normal clicking. What would normally be 5 million lifetime actuations can be consumed in months of intensive butterfly or drag clicking. This is why optical switches are strongly recommended for players who use these techniques regularly, as optical detection has no mechanical fatigue.",
  },
  {
    question: "How do I fix Windows 10/11 double-click issues that are not hardware related?",
    answer:
      "Occasionally Windows accumulates driver conflicts or pointer settings that cause false double-click detection. Try: (1) Control Panel → Mouse → Buttons → move the double-click speed slider to 'Slow'. (2) Device Manager → uninstall mouse driver → reconnect mouse. (3) Check for Windows updates (pointer driver updates). (4) Test in a different USB port. If the problem persists across different ports and with a freshly reinstalled driver, the issue is hardware (switch chatter) rather than software.",
  },
  {
    question: "Is there a test to distinguish hardware chatter from Windows double-click settings?",
    answer:
      "Yes — our double click test bypasses Windows' double-click threshold and logs every individual raw click event. If our test shows double registrations from a single deliberate click, the problem is hardware switch chatter regardless of your Windows double-click speed setting. If the test shows clean single registrations but you still experience double-click issues in applications, the issue is Windows pointer settings or application-level sensitivity.",
  },
];

export default function DoubleClickTestPage() {
  return (
    <>
      <GameSEO
        name="Double Click Test – Mouse Switch Chatter Diagnostic"
        description="Free double click test to detect mouse switch chatter, accidental double-click registration, and hardware debounce failure. Diagnose Omron, Kailh, and optical switches in real time."
        url="https://www.cpsspeedtest.com/double-click-test"
        faqs={doubleClickFaqs}
        howToSteps={doubleClickHowToSteps}
        category="UtilityApplication"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Double Click Test"
        speakableSummary="The Double Click Test detects mouse switch chatter — when a single click registers as two events due to mechanical spring fatigue. Omron D2FC-F-7N switches are the most common chattering switch. Optical switches are immune to mechanical chatter."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Mouse className="w-3.5 h-3.5" />
            <span>Mouse Switch Chatter Diagnostic · Hardware Health Check · Free</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">Double Click Test</h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The <strong>Double Click Test</strong> is a hardware diagnostic tool that detects whether your
            mouse switch is registering unintended double-clicks from a single physical press — the
            symptom of <strong>mechanical switch chatter</strong> caused by spring fatigue inside your mouse microswitch.
          </p>
        </header>

        <DoubleClickTest />

        {/* What Is Switch Chatter? */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-primary" />
              What Is Mouse Switch Chatter? — Plain-English Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              <strong>Mouse switch chatter</strong> is a hardware fault where a single deliberate mouse click
              registers as two or more separate click events. It is caused by the metal leaf spring inside
              your mouse microswitch losing tension over time. When the spring becomes fatigued, it bounces
              on contact instead of settling cleanly — creating rapid electrical reconnections that the
              operating system interprets as multiple separate clicks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-2">
                <p className="font-bold text-foreground text-sm">✅ Healthy Switch</p>
                <p className="text-xs">1 physical click → 1 electrical contact → 1 click event registered. Spring closes and stays closed cleanly until released.</p>
              </div>
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 space-y-2">
                <p className="font-bold text-destructive text-sm">⚠️ Chattering Switch</p>
                <p className="text-xs">1 physical click → spring bounces on contact → 2–4 rapid electrical contacts → 2–4 click events registered. Appears as unintended double-click.</p>
              </div>
            </div>
            <div className="text-xs bg-secondary/50 p-3 rounded-lg border border-border/30">
              💡 <strong>Common Symptoms:</strong> Files opening instead of selecting · Text highlighting instead of cursor placement · Inventory duplication in games · Drag-and-drop failing · Double-purchases in shop interfaces
            </div>
          </CardContent>
        </Card>

        {/* How to Use */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-primary" />
              How to Use the Double Click Test — Diagnostic Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {doubleClickHowToSteps.map((step, i) => (
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

        {/* Switch Types Comparison */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Mouse Switch Types — Chatter Susceptibility Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Switch Type</th>
                    <th className="py-2.5 px-3 font-bold">Rating</th>
                    <th className="py-2.5 px-3 font-bold">Chatter Risk</th>
                    <th className="py-2.5 px-3 font-bold">Common Mice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Omron D2FC-F-7N", "5M clicks", "🔴 High (most reported)", "Logitech G203, Zowie EC2, many gaming mice"],
                    ["Omron D2F-01F", "10M clicks", "🟡 Medium", "Higher-end Logitech, SteelSeries"],
                    ["Kailh GM 8.0", "80M clicks", "🟢 Low", "Glorious, Vaxee, Endgame Gear"],
                    ["Razer Gen-3 Optical", "Unlimited*", "✅ None (no contacts)", "Razer DeathAdder V3, Viper V3"],
                    ["Glorious Optical", "Unlimited*", "✅ None (no contacts)", "Glorious Model O/D/I"],
                    ["LK Optical (Bloody)", "Unlimited*", "✅ None (no contacts)", "Bloody A70, A60, TL70"],
                  ].map(([sw, rating, risk, mice]) => (
                    <tr key={sw}>
                      <td className="py-2 px-3 font-medium text-foreground">{sw}</td>
                      <td className="py-2 px-3">{rating}</td>
                      <td className="py-2 px-3">{risk}</td>
                      <td className="py-2 px-3 text-xs">{mice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs">*Optical switches detect click via infrared light beam interruption — no mechanical spring contacts that can fatigue or bounce.</p>
          </CardContent>
        </Card>

        {/* Health Check Results Guide */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-primary" />
              How to Interpret Your Test Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "✅", status: "Healthy", count: "0 double registrations", color: "border-emerald-500/30 bg-emerald-500/10", desc: "Your switch contacts are clean. No replacement needed. Retest in 6 months or when symptoms appear." },
                { icon: "⚠️", status: "Early Chatter", count: "1–4 doubles in 30 clicks", color: "border-amber-500/30 bg-amber-500/10", desc: "Spring showing early fatigue. Monitor weekly. Software mitigation (increase double-click interval in OS) can help temporarily." },
                { icon: "🔴", status: "Switch Failure", count: "5+ doubles in 30 clicks", color: "border-red-500/30 bg-red-500/10", desc: "Switch replacement required. Contact manufacturer warranty if under 1–2 years old, or replace Omron switch ($1–5 in parts)." },
              ].map((r) => (
                <div key={r.status} className={`p-4 rounded-xl border ${r.color} space-y-2 text-center`}>
                  <div className="text-2xl">{r.icon}</div>
                  <p className="font-bold text-foreground text-sm">{r.status}</p>
                  <p className="text-xs text-primary font-semibold">{r.count}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
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
              Frequently Asked Questions — Double Click Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {doubleClickFaqs.map((faq, index) => (
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
              Related Mouse Tests & Click Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "CPS Test", href: "/cps-test", desc: "Measure your standard clicking speed." },
                { label: "Butterfly Click Test", href: "/butterfly-click-test", desc: "High-CPS two-finger technique benchmark." },
                { label: "Drag Click Test", href: "/drag-click-test", desc: "Friction click speed — diagnose hardware limits." },
                { label: "Reaction Time Test", href: "/reaction-time-test", desc: "Test reflexes alongside hardware health." },
                { label: "Jitter Click Test", href: "/jitter-click-test", desc: "Forearm-vibration click speed test." },
                { label: "Kohi Click Test (10s)", href: "/kohi-click-test", desc: "10-second Minecraft PvP endurance test." },
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
