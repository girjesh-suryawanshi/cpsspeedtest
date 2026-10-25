import { GameSEO } from "@/components/game-seo";
import { CpsTest } from "@/components/cps-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Zap, Calculator, Timer, Cpu, Activity, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Clicks Per Second (CPS) Test - Measure Your Real Click Speed',
  description: 'Test your clicking speed with our high-precision CPS tester. Features sub-millisecond elapsed-time tracking, live rate distribution charts, and technique diagnostics.',
  keywords: ['cps test', 'click speed test', 'clicks per second', 'cps calculator', 'mouse click speed', 'minecraft cps'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/cps-test',
  },
};

const cpsFaqs = [
  {
    question: "How is Clicks Per Second (CPS) calculated?",
    answer: "CPS is calculated by dividing your total validated click inputs by the exact elapsed duration in seconds: CPS = Total Clicks ÷ Elapsed Seconds. For instance, if you register 48 valid clicks over an exact measured duration of 5.012 seconds, your final score is 48 ÷ 5.012 = 9.58 CPS."
  },
  {
    question: "What is the difference between CPS and reaction time?",
    answer: "Reaction time measures the latency (in milliseconds) between perceiving a sensory stimulus and initiating a physical response (typically 200–250ms for humans). In contrast, CPS measures sustained motor cadence and neuromuscular oscillation frequency—how rapidly your finger or hand can repeat actuation cycles once initiated."
  },
  {
    question: "Why do CPS scores vary across different test durations?",
    answer: "Shorter tests (like 1-second sprints) measure peak burst speed before muscle fatigue begins, often yielding 10–14+ CPS. Extended tests (like 10s, 30s, or 60s) demand cardiovascular and muscular endurance, causing average scores to decrease as finger muscles experience lactic acid buildup and neuromuscular fatigue."
  },
  {
    question: "How does mouse hardware affect click speed test results?",
    answer: "Hardware factors play a major role: mechanical switch resistance (measured in gram-force), key travel depth, switch reset points, firmware debounce delay (which ignores rapid electrical contact bounces to prevent accidental double-clicks), and mouse polling rate (500Hz vs 1000Hz)."
  },
  {
    question: "What should I do if my clicks are not registering properly?",
    answer: "Ensure your browser tab has active focus, disable aggressive browser extensions (such as script blockers or auto-clicker plugins), verify that your mouse is not experiencing switch bounce chatter, and avoid dragging the pointer outside the active testing boundary."
  }
];

export default function CpsTestPage() {
  return (
    <>
      <GameSEO 
        name="Clicks Per Second (CPS) Test"
        description="Test your clicking speed with our high-precision CPS tester. Features sub-millisecond elapsed-time tracking, live rate distribution charts, and technique diagnostics."
        url="https://www.cpsspeedtest.com/cps-test"
        faqs={cpsFaqs}
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Precision Browser Click Counter</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Clicks Per Second (CPS) Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your mouse clicking cadence with sub-millisecond precision. Choose your duration, select instant or countdown trigger, and inspect your click consistency over time.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <CpsTest gameDuration={5} allowDurationChange={true} />

        {/* ── Section 1: Direct Definition & Measurement Formula (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-primary" />
              What is a CPS Test & How is Click Speed Calculated?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              A <strong>Clicks Per Second (CPS) test</strong> is a digital benchmark that measures how many times you can actuate a primary mouse button or touchscreen within a fixed duration. It serves as an essential metric across competitive esports (notably <em>Minecraft PvP</em>, fast-paced MOBAs, and real-time strategy titles) as well as UI responsiveness testing and repetitive motor-control research.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground font-mono text-center sm:text-lg font-bold">
              CPS = Valid Primary Clicks ÷ Exact Elapsed Time (Seconds)
            </div>
            <p>
              Most online counters rely on simple JavaScript <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">setInterval</code> or <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">setTimeout</code> functions. Unfortunately, these legacy timers drift by up to 15–30 milliseconds per tick due to browser CPU throttling. Our tool eliminates measurement error by utilizing the browser&apos;s high-resolution <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">performance.now()</code> API synchronized with <code className="text-primary font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">requestAnimationFrame</code>, delivering true sub-millisecond accuracy.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-1.5">
              <p className="font-semibold text-primary">Worked Numerical Example:</p>
              <p>• Total Validated Clicks Registered: <strong>48 clicks</strong></p>
              <p>• High-Resolution Elapsed Time: <strong>5.012 seconds</strong></p>
              <p>• Mathematical Result: 48 ÷ 5.012 = <strong>9.58 CPS</strong></p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: Detailed Clicking Techniques Guide ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              4 Proven Clicking Techniques & How to Master Them
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Achieving high click speeds is not just about muscle strength—it is fundamentally a matter of technique and neuromuscular coordination. Gamers primarily use four recognized clicking methods:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                  Regular Single-Finger Clicking (5–8 CPS)
                </h3>
                <p>
                  The standard method used by everyday computer users. You rest your index finger on the left mouse button and click using isolated finger joint flexion.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Pros:</strong> Effortless control, perfect crosshair aim stability.<br />
                  <strong>Cons:</strong> Hard biological ceiling around 8–9 CPS due to finger flexor recovery time.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                  Butterfly Clicking (12–20+ CPS)
                </h3>
                <p>
                  Alternating your index and middle finger rapidly on the same mouse button. While one finger is depressing the switch, the other is recoiling.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Pros:</strong> High sustainable CPS with minimal physical fatigue.<br />
                  <strong>Cons:</strong> Requires a mouse with wide buttons and low debounce firmware (e.g., Glorious Model O, Roccat Kone).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                  Jitter Clicking (10–14 CPS)
                </h3>
                <p>
                  Tensing your entire forearm and wrist muscles to induce an involuntary physiological tremor that transmits down through your index finger.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Pros:</strong> Works on standard mice without low debounce settings.<br />
                  <strong>Cons:</strong> Difficult to aim; high wrist fatigue; potential risk of muscle strain if practiced excessively.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/30 bg-background/50 space-y-2">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</span>
                  Drag Clicking (20–30+ CPS)
                </h3>
                <p>
                  Dragging a slightly tacky finger across a matte mouse button. Friction creates rapid microscopic stick-slip vibrations that actuate the switch repeatedly.
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  <strong>Pros:</strong> Massive burst speeds essential for advanced Minecraft bridging.<br />
                  <strong>Cons:</strong> Only works in short 0.5–1s bursts; wears switch leaf springs quickly; requires grip tape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Citation Matrix: Hardware & Switch Physics ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Hardware Factors: How Mice, Switches & Latency Shape CPS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Your physiological tapping frequency is only half of the equation. Physical hardware specs create hard mathematical boundaries for how fast inputs can register:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Hardware Variable</th>
                    <th className="py-2.5 px-3 font-bold">Standard Value</th>
                    <th className="py-2.5 px-3 font-bold">Optimal Gaming Value</th>
                    <th className="py-2.5 px-3 font-bold">Impact on CPS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Switch Debounce Delay</td>
                    <td className="py-2 px-3">8 ms – 12 ms</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">0 ms – 4 ms</td>
                    <td className="py-2 px-3">High debounce masks rapid double-taps; lower debounce enables 15+ CPS butterfly/drag clicking.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Microswitch Technology</td>
                    <td className="py-2 px-3">Mechanical (Omron 20M/50M)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">Optical / Kalih GM 8.0</td>
                    <td className="py-2 px-3">Optical switches actuate with light beams, eliminating metallic contact bounce delay entirely.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">USB Polling Rate</td>
                    <td className="py-2 px-3">125 Hz (8ms report rate)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">1,000 Hz – 4,000 Hz</td>
                    <td className="py-2 px-3">1000Hz reports clicks to the OS every 1 millisecond, reducing input jitter and click timing drift.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-foreground">Switch Actuation Force</td>
                    <td className="py-2 px-3">65 – 75 gram-force (gf)</td>
                    <td className="py-2 px-3 text-emerald-500 font-semibold">50 – 60 gram-force (gf)</td>
                    <td className="py-2 px-3">Lighter actuation force reduces finger fatigue during sustained 15s–60s clicking tests.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 4: CPS Score Benchmarks (GEO Tier Table) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Verified Community Score Ranges & Performance Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on empirical testing across thousands of mouse input trials, here is how click speeds generally classify across different skill levels and gaming genres:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐢</div>
                <div className="font-bold text-foreground">0 – 4.9 CPS</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Casual / Standard</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Typical navigation speed for office workflows, reading, and non-competitive computer usage.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐇</div>
                <div className="font-bold text-foreground">5.0 – 7.9 CPS</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Regular</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Standard single-finger clicking rate achieved by most recreational gamers without specialized hand grips.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐆</div>
                <div className="font-bold text-foreground">8.0 – 10.9 CPS</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Fast / Experienced</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Attained by experienced action, MOBA, or shooter players using controlled burst clicking and high focus.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🦅</div>
                <div className="font-bold text-foreground">11.0+ CPS</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Competitive Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Requires advanced clicking methods such as butterfly clicking, jitter clicking, or low-debounce drag clicking.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: Ergonomics, Safety & Best Practices ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-primary" />
              Ergonomic Safety & Hand Health Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Rapid clicking engages the <em>flexor digitorum superficialis</em> and <em>extensor digitorum</em> muscles in your forearm. While practicing click speed tests is safe in moderation, aggressive technique without proper form can lead to repetitive strain injuries (RSI).
            </p>
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive-foreground text-xs sm:text-sm space-y-1.5">
              <p className="font-semibold text-destructive flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Crucial Safety Rules:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Never click through pain:</strong> If you feel sharp tendon pain, burning, or numbness, stop immediately and rest for 24–48 hours.</li>
                <li><strong>Keep your wrist neutral:</strong> Avoid harsh upward wrist extension. Use a desk height where your forearms rest parallel to the floor.</li>
                <li><strong>Follow the 20-20 Rule:</strong> Take a 30-second break every 20 minutes of intense clicking practice. Gently stretch your fingers and rotate wrists.</li>
                <li><strong>Jitter click with caution:</strong> Continuous isometric forearm tension is particularly demanding on carpal ligaments. Limit jitter practice sessions to 5–10 minutes.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 6: Frequently Asked Questions & Troubleshooting (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
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
