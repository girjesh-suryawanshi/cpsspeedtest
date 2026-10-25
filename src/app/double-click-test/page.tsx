import { GameSEO } from "@/components/game-seo";
import { DoubleClickTest } from "@/components/double-click-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Mouse, ShieldCheck, AlertTriangle, Cpu, Wrench, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Double Click Test – Check Mouse Switches for Chatter & Hardware Faults | CpsSpeedTest',
  description: 'Test your mouse switches for hardware switch chatter, unintentional double-clicking, and debounce failure. Verify Omron, Kailh, Huano, and optical gaming mice with real-time millisecond diagnostics.',
  keywords: ['double click test', 'mouse switch test', 'unwanted double clicks', 'mouse hardware debounce test', 'switch chatter', 'mouse debounce test', 'omron double click fix'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/double-click-test',
  },
  openGraph: {
    title: 'Double Click Test – Diagnose Hardware Switch Chatter & Debounce Issues',
    description: 'Verify whether your mouse switch is registering accidental double clicks with real-time millisecond contact bounce detection.',
    url: 'https://www.cpsspeedtest.com/double-click-test',
    type: 'website',
  },
};

const doubleClickFaqs = [
  {
    question: "How does this tool detect unintentional double-clicking?",
    answer: "The Double Click Test measures raw pointerdown events using the high-precision Performance API. If a second consecutive click event registers within an abnormally brief window (typically under 80 milliseconds) without an intentional mechanical release and repress cycle, the event is flagged as hardware switch bounce (chatter)."
  },
  {
    question: "What causes mechanical mouse switches to double-click involuntarily?",
    answer: "Traditional mechanical microswitches (such as classic Omron D2FC-F-7N or Huano Blue Shell) rely on curved metallic spring contacts. Over millions of actuations, contact oxidation, dust particles, and metal fatigue cause the leaf spring to physically oscillate upon impact. This mechanical rebound produces multiple electrical contact pulses from a single physical finger press."
  },
  {
    question: "Can adjusting mouse debounce settings solve the double-clicking problem?",
    answer: "Yes, to an extent. Gaming mice companion software (such as Glorious Core, Roccat Swarm, or Razer Synapse) provides a debounce algorithm slider. Increasing the debounce delay from 2ms or 4ms up to 8ms–12ms instructs the mouse microcontroller to ignore secondary switch bounces occurring immediately after actuation, masking early contact degradation."
  },
  {
    question: "Do optical mouse switches ever suffer from double clicking?",
    answer: "Optical switches (such as Razer Optical Gen 2/Gen 3 or Bloody Light Strike) utilize an infrared light beam interrupted by a physical shutter instead of metallic contact pins. Because there is no electrical contact bounce, optical switches are physically immune to contact wear and switch chatter double-clicking."
  },
  {
    question: "Can a double-clicking mouse switch be repaired without replacing the mouse?",
    answer: "Yes. Enthusiasts frequently repair chattering mice by opening the chassis and applying electronic contact cleaner (such as DeoxIT D5 or 99% isopropyl alcohol) directly into the switch housing. Alternatively, desoldering the worn switch and soldering high-durability replacement switches (like Kailh GM 8.0, TTC Gold, or Huano Transparent Blue Pink Dot) completely restores factory performance."
  }
];

export default function DoubleClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Double Click Test – Check Mouse Switches for Chatter"
        description="Test your mouse switches for hardware switch chatter, unintentional double-clicks, and debounce failure with our real-time millisecond diagnostics."
        url="https://www.cpsspeedtest.com/double-click-test"
        faqs={doubleClickFaqs}
        category="UtilityApplication"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Mouse className="w-3.5 h-3.5" />
            <span>Hardware Switch Chatter &amp; Debounce Diagnostic Tool</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Double Click Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Verify whether your mouse switch is functioning flawlessly or suffering from internal spring fatigue, contact oxidation, or unintentional double-click chatter.
          </p>
        </header>

        {/* Double Click Test Interactive Component */}
        <DoubleClickTest />

        {/* ── Section 1: Direct Answer Definition & Switch Biomechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-primary" />
              What is Mouse Switch Chatter &amp; How Does This Test Work?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              A <strong>Double Click Test</strong> is an essential diagnostic utility engineered to detect <em>switch chatter</em>—a common hardware defect where pressing a mouse button once causes the internal microswitch to register two or more rapid electrical signals. This defect disrupts drag-and-drop file operations, ruins text selection, and causes weapon firing malfunctions in competitive gaming.
            </p>
            <p>
              When you click the target pad on this page, the browser engine records the timestamp between successive <code>pointerdown</code> and <code>pointerup</code> events down to fractions of a millisecond. If two click signals register within an interval shorter than humanly possible for an intentional distinct press (under 80ms), the system flags the actuation as a hardware bounce fault.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Diagnostic Health Benchmark Matrix ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Mouse Hardware Health Tiers (100-Click Diagnostic)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Execute 50 to 100 single, deliberate clicks on the diagnostic area. Compare your registered chatter incidents against hardware quality tiers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">✅</div>
                <div className="font-bold text-foreground">0 Unwanted Clicks</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Flawless Switch Health</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  100% clean contact signal. The leaf spring retains optimal mechanical elasticity and the microcontroller debounce filter is functioning perfectly.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚠️</div>
                <div className="font-bold text-foreground">1 – 3 Unwanted Clicks</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Early Contact Degradation</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Minor switch bounce or dust accumulation. Increase debounce delay to 8ms in your mouse software to filter out electrical chatter.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">❌</div>
                <div className="font-bold text-foreground">4 – 9 Unwanted Clicks</div>
                <div className="text-xs font-semibold text-orange-500 uppercase">Moderate Switch Failure</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Noticeable interference with desktop navigation and gaming. The internal copper contact has sustained oxidation or microscopic deformation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🚨</div>
                <div className="font-bold text-foreground">10+ Unwanted Clicks</div>
                <div className="text-xs font-semibold text-red-500 uppercase">Critical Hardware Defect</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Terminal switch failure. The switch cannot maintain clean circuit continuity. Requires microswitch replacement or RMA warranty claim.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Technical Causes & Remediation Guide ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Root Causes of Mechanical Switch Chatter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Surface Oxidation:</strong> Low electrical wetting current in modern wireless low-power mice prevents self-cleaning spark discharge, allowing micro-corrosion to form on silver-plated contacts.
                </li>
                <li>
                  <strong className="text-foreground">Leaf Spring Elastic Fatigue:</strong> After millions of high-impact clicks (especially from techniques like <Link href="/jitter-click-test" className="text-primary hover:underline">Jitter Clicking</Link>), the spring loses tension, causing it to vibrate upon rebound.
                </li>
                <li>
                  <strong className="text-foreground">Aggressive Debounce Settings:</strong> Setting firmware debounce to 0ms or 2ms to maximize Minecraft PvP CPS makes mice extremely vulnerable to registering standard mechanical vibrations.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                Step-by-Step Fixes for Double-Clicking Mice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Adjust Companion Software Debounce:</strong> Open your mouse software (e.g. Glorious Core, Logitech G HUB) and increase the debounce slider to 6ms–10ms.
                </li>
                <li>
                  <strong className="text-foreground">Clean the Microswitch:</strong> Unplug the mouse, open the shell, and spray a small drop of electronic contact cleaner or 99% isopropyl alcohol into the switch plunger gap, followed by 50 rapid clicks to displace dust.
                </li>
                <li>
                  <strong className="text-foreground">Switch Replacement:</strong> Desolder the faulty microswitch and solder in gold-plated contact switches such as Kailh GM 8.0, Huano Blue Pink Dot, or TTC Dustproof Gold.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Related Input Diagnostic Tools ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Related Mouse &amp; Clicking Diagnostics
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3 leading-relaxed">
            <p>
              Once your mouse switch health is confirmed, test your maximum input cadence and mechanical responsiveness across specialized click speed engines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/drag-click-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">Drag Click Test</div>
                <div className="text-xs text-muted-foreground mt-1">Measure friction-induced multi-actuation burst clicking.</div>
              </Link>
              <Link href="/cps-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">CPS Speed Test</div>
                <div className="text-xs text-muted-foreground mt-1">Benchmark your standard clicks-per-second rate.</div>
              </Link>
              <Link href="/aim-trainer" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground text-sm">Aim Trainer</div>
                <div className="text-xs text-muted-foreground mt-1">Test mouse sensor tracking and click precision under pressure.</div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Double-Clicking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {doubleClickFaqs.map((faq, index) => (
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
