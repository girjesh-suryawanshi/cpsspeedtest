import { GameSEO } from "@/components/game-seo";
import { SpacebarTest } from "@/components/spacebar-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Zap, Trophy, Activity, Keyboard, HelpCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Stimulation Clicker – 30-Second Spacebar Endurance & HPS Benchmark | CpsSpeedTest',
  description: 'Test your keyboard tapping stamina with our 30-second Stimulation Clicker challenge. Measure sustained Hits Per Second (HPS), spacebar fatigue resistance, and thumb ergonomics.',
  keywords: ['stimulation clicker', '30 second spacebar test', 'spacebar clicker 30s', 'keyboard tapping stamina', 'hps test', 'spacebar endurance benchmark', 'keyboard speed challenge'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/stimulation-clicker',
  },
  openGraph: {
    title: 'Stimulation Clicker – 30-Second Spacebar Endurance Challenge',
    description: 'Benchmark your sustained keyboard tapping rate and stamina over an intense 30-second spacebar endurance trial.',
    url: 'https://www.cpsspeedtest.com/stimulation-clicker',
    type: 'website',
  },
};

const stimulationFaqs = [
  {
    question: "What is the difference between a 5-second spacebar test and this 30-second challenge?",
    answer: "A 5-second test measures instantaneous anaerobic burst speed powered by the body's phosphagen energy system (ATP-PC). The 30-second Stimulation Clicker tests sustained neuromuscular endurance, forcing your thumb and forearm flexor muscles to manage lactic acid buildup while maintaining a consistent Hits Per Second (HPS) rhythm."
  },
  {
    question: "What is a good score on the 30-second spacebar stimulation challenge?",
    answer: "A score of 150 to 209 hits (5.0 to 6.9 HPS) represents the typical adult baseline. Reaching 210 to 269 hits (7.0 to 8.9 HPS) reflects advanced endurance, while exceeding 270+ total hits (9.0+ average HPS) places you in the top 2% of competitive keyboard tappers."
  },
  {
    question: "Which tapping technique maintains the highest speed over 30 seconds?",
    answer: "The dual-thumb alternating technique or the thumb-index pinch method. Alternating between the left and right thumbs across the spacebar halves individual muscle fatigue, allowing you to sustain 9 to 12 HPS far longer than single-thumb tapping."
  },
  {
    question: "How do keyboard spacebar stabilizers impact tapping speed?",
    answer: "Because the spacebar is the longest keycap on a keyboard, it utilizes mechanical wire stabilizers (Cherry-style or Costar). High friction or rattling stabilizers absorb downward energy and slow key rebound. Mechanical keyboards with lubed linear switches (like Cherry MX Red or Gateron Yellow) provide superior return snap."
  },
  {
    question: "Can rapid 30-second spacebar tapping cause hand cramps?",
    answer: "Yes. Sustained isometric tension can cause muscle cramping in the thenar eminence (base of the thumb) and forearm. Always stretch your wrists, avoid locking your thumb joint rigid, and stop immediately if you experience sharp pain or burning sensations."
  }
];

export default function StimulationClickerPage() {
  return (
    <>
      <GameSEO 
        name="Stimulation Clicker"
        description="A 30-second spacebar endurance challenge. Benchmark your tapping speed, stamina, and Hits Per Second (HPS) over an extended trial."
        url="https://www.cpsspeedtest.com/stimulation-clicker"
        faqs={stimulationFaqs}
        category="SkillGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>30-Second Spacebar Endurance &amp; Stamina Trial</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Stimulation Clicker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A demanding 30-second spacebar tapping gauntlet. Measure your sustained mechanical Hits Per Second (HPS), stave off lactic muscle fatigue, and benchmark your keyboard endurance.
          </p>
        </header>

        {/* 30s Spacebar Component */}
        <div className="py-2">
          <SpacebarTest gameDuration={30} />
        </div>

        {/* ── Ergonomic Notice ── */}
        <Card className="border-amber-500/30 bg-amber-500/10 text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2 text-amber-500">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              Ergonomic &amp; Muscle Pacing Advisory
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              Tapping the spacebar continuously for 30 seconds requires intense contraction of the <em>flexor pollicis brevis</em> and thenar muscle groups. If you start sprinting at 100% capacity in the first 3 seconds, your muscles will experience acute lactic fatigue by second 15, causing your tapping speed to drop sharply.
            </p>
            <p>
              Aim for a consistent, rhythmic cadence rather than frantic thrashing. For short burst speed testing without stamina decay, try our <Link href="/spacebar-clicker" className="text-primary hover:underline font-semibold">5-Second Spacebar Clicker</Link>.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 1: Physiology of 30-Second Keyboard Stamina (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Physiology of 30-Second Key Tapping: Anaerobic Glycolysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In exercise physiology, high-speed motor activities undergo three metabolic phases over 30 seconds:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Seconds 0 – 6 (Phosphagen Burst):</strong> Stored adenosine triphosphate (ATP) and creatine phosphate power explosive fast-twitch muscle contractions, producing peak tapping velocities of 9–14 HPS.
              </li>
              <li>
                <strong className="text-foreground">Seconds 7 – 20 (Glycolytic Transition):</strong> As creatine phosphate depletes, anaerobic glycolysis takes over, breaking down glycogen into lactic acid. The build-up of hydrogen ions creates noticeable forearm heaviness and finger sluggishness.
              </li>
              <li>
                <strong className="text-foreground">Seconds 21 – 30 (Terminal Stamina Floor):</strong> Your nervous system must maintain motor unit recruitment despite muscular discomfort. The player who paces their rhythm effectively maintains 8+ HPS, whereas unpaced players drop to under 4 HPS.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & HPS Percentiles ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              30-Second Spacebar Performance Tiers (Total Hits &amp; HPS)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where does your 30-second keyboard tapping endurance rank? Compare your total score and sustained Hits Per Second:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 150 Hits</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">&lt; 5.0 HPS (Beginner)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Single-finger tapping with high muscle tension. Experiences complete forearm fatigue and stuttered rhythm after 10 seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">150 – 209 Hits</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">5.0 – 6.9 HPS (Competent)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Standard gaming baseline. Steady single-thumb rhythm with moderate slowdown in the final 10-second segment.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">210 – 269 Hits</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">7.0 – 8.9 HPS (Advanced)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Excellent muscle conditioning. Uses relaxed wrist bouncing or alternating thumb technique to sustain high output throughout.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">270+ Hits</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">9.0+ HPS (Elite Master)</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% endurance master. Flawless alternating thumb cadence on mechanical switches with zero drop-off across all 30 seconds.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Dual-Thumb Alternating Strategy ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-primary" />
                The Dual-Thumb Alternating Technique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                The spacebar is wide enough to accommodate both hands simultaneously. Master the dual-thumb technique to conquer 30-second tests:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Positioning:</strong> Place your left thumb on the left third of the spacebar and your right thumb on the right third.
                </li>
                <li>
                  <strong className="text-foreground">Gallop Rhythm:</strong> Tap left-right-left-right in a rapid alternating drum roll. Because each thumb only executes half the total actuations, fatigue accumulation is reduced by 50%.
                </li>
                <li>
                  <strong className="text-foreground">Rebound Spring Release:</strong> Allow the spacebar switch to push your thumb back up naturally rather than forcing a heavy downward bottom-out.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Speed &amp; Stamina Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Benchmark your speed across keyboard and mouse endurance tests:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/spacebar-clicker" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Spacebar Clicker (5s)</span>
                  <span className="text-primary font-mono">Anaerobic Burst Speed →</span>
                </Link>
                <Link href="/typing-test-30s" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Typing Test 30s</span>
                  <span className="text-primary font-mono">Full Keyboard Sprint →</span>
                </Link>
                <Link href="/cps-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">CPS Speed Test</span>
                  <span className="text-primary font-mono">Mouse Click Speed →</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Stimulation Clicker
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {stimulationFaqs.map((faq, index) => (
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
