import { GameSEO } from "@/components/game-seo";
import { TypeRacer } from "@/components/games/type-racer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Keyboard, Zap, Award, HelpCircle, CheckCircle2, Activity, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speed Typer – 30-Second WPM Typing Sprint & Accuracy Benchmark | CpsSpeedTest",
  description: "Test your keyboard typing speed and accuracy in a 30-second WPM sprint. Benchmark your Words Per Minute, character accuracy percentage, and typing mechanics.",
  keywords: ['typing speed test', 'wpm test', 'speed typer', '30 second typing test', 'keyboard accuracy test', 'type racer test', 'burst wpm benchmark'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/type-racer',
  },
  openGraph: {
    title: "Speed Typer – 30-Second WPM Typing Sprint",
    description: "Benchmark your typing speed, Words Per Minute (WPM), and key accuracy in this 30-second high-intensity keyboard sprint.",
    url: 'https://www.cpsspeedtest.com/type-racer',
    type: 'website',
  },
};

const typeRacerFaqs = [
  {
    question: "How is Words Per Minute (WPM) calculated mathematically?",
    answer: "Standardized typing algorithms standardize one 'word' as exactly 5 keystrokes (including letters, spaces, and punctuation). Gross WPM is calculated as: `(Total Keystrokes ÷ 5) ÷ (Elapsed Seconds ÷ 60)`. Net WPM penalizes uncorrected keystroke errors: `((Total Keystrokes ÷ 5) - Uncorrected Errors) ÷ (Elapsed Seconds ÷ 60)`."
  },
  {
    question: "What is considered a fast typing speed on a 30-second test?",
    answer: "While the worldwide office average is roughly 40 WPM, a 30-second sprint measures anaerobic burst capability. Speeds of 60–79 WPM represent competent typists, 80–99 WPM represent advanced transcription speed, and 100+ WPM places you in the top 2% of competitive typists."
  },
  {
    question: "Why is burst WPM typically higher than sustained 60-second typing speed?",
    answer: "A 30-second sprint minimizes muscular lactic acid buildup in the forearm flexors and requires less sustained attentional vigilance. Typists can aggressively push their raw finger velocity without encountering the micro-stamina drops characteristic of 2-to-5 minute transcription blocks."
  },
  {
    question: "How can I break through a typing speed plateau?",
    answer: "Focus 100% on accuracy rather than speed. Typing at 98–100% accuracy prevents the catastrophic time penalty of error recognition, backspacing, and re-striking. Once muscle memory locks in zero-error pathways, finger speed accelerates naturally without conscious effort."
  },
  {
    question: "Which keyboard switch type is best for competitive speed typing?",
    answer: "Most speed typists prefer light linear mechanical switches (like Cherry MX Red, Gateron Yellow, or optical switches with 45g actuation force) or light tactile switches (like Cherry MX Brown). Linear switches provide zero tactile resistance, facilitating effortless finger gliding across rapid word sequences."
  }
];

export default function TypeRacerPage() {
  return (
    <>
      <GameSEO 
        name="Speed Typer"
        description="Test your keyboard typing speed and accuracy in a 30-second WPM sprint. Benchmark your Words Per Minute and accuracy percentage."
        url="https://www.cpsspeedtest.com/type-racer"
        faqs={typeRacerFaqs}
        category="SkillGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>High-Velocity 30-Second WPM Sprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Speed Typer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            How fast can your fingers fly across the keys? Test your raw burst Words Per Minute (WPM), character accuracy, and keystroke rhythm in this intense 30-second typing sprint.
          </p>
        </header>

        {/* Speed Typer Component */}
        <div className="py-2">
          <TypeRacer />
        </div>

        {/* ── Section 1: Standardized WPM Formula & Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Science of Words Per Minute (WPM) &amp; Keystroke Dynamics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In typing ergonomics and standardized keyboard certification, human language contains words of radically varying lengths—from two-letter prepositions (&quot;in&quot;, &quot;at&quot;) to multisyllabic scientific terms (&quot;photosynthesis&quot;). To establish a rigorous scientific benchmark, international typing standards define <strong>one standard word as exactly 5 keystrokes</strong>.
            </p>
            <p>
              If you type 250 characters in 30 seconds with zero errors:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground">
              Gross WPM = (250 characters ÷ 5 characters/word) ÷ (30 seconds ÷ 60 seconds/min) = 50 ÷ 0.5 = 100 WPM
            </div>
            <p className="text-xs">
              Every keystroke error carries a severe double penalty: not only is the character discounted, but the mental pause required to detect the error and actuate Backspace consumes between 250ms and 450ms of valuable sprint time.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Benchmark Distribution ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Award className="w-5 h-5 text-primary" />
              Typing Speed Tiers &amp; Global Distribution (30-Second Sprint)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where does your typing speed rank compared to millions of computer users and competitive gamers worldwide?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 40 WPM</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Hunt &amp; Peck Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Relies on visual keyboard searching. Uses 2 to 4 fingers without fixed home-row spatial awareness.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">41 – 65 WPM</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Office Standard</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Solid touch-typing foundation. Can transcribe emails, essays, and code without constantly glancing at keycaps.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">66 – 90 WPM</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Speed Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Excellent muscle memory. Instantaneous word chunking and automatic finger rolling across common letter n-grams.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">91+ WPM</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Elite / Competitive Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% of all computer users. Flawless 98%+ accuracy with rapid sub-100ms inter-keystroke intervals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Motor Learning & Ergonomics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-primary" />
                Touch Typing Mechanics &amp; Word Chunking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Elite typists do not read and type individual letters. Instead, they practice <strong>lexical chunking</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">N-Gram Automation:</strong> Frequent character combinations (such as &quot;the&quot;, &quot;ing&quot;, &quot;tion&quot;, &quot;and&quot;) are executed as a single fluid motor reflex (finger roll) rather than individual decisions.
                </li>
                <li>
                  <strong className="text-foreground">Preview Buffering:</strong> While your fingers are typing word N, your eyes should be reading word N+2. This optical lookahead buffers words into working memory, eliminating stop-and-go stuttering.
                </li>
                <li>
                  <strong className="text-foreground">Home-Row Anchoring:</strong> Keep index fingers resting lightly on the F and J tactile homing bumps.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Hardware &amp; Switch Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">N-Key Rollover (NKRO):</strong> Gaming keyboards register all simultaneous keypresses without ghosting or dropped inputs.
                </li>
                <li>
                  <strong className="text-foreground">Actuation Distance:</strong> Speed switches (like Cherry MX Speed Silver with 1.2mm actuation) trigger 40% faster than standard 2.0mm switches.
                </li>
                <li>
                  <strong className="text-foreground">Complementary Key Benchmarks:</strong> Test your single-key burst speed on our <Link href="/spacebar-clicker" className="text-primary hover:underline">Spacebar Clicker</Link> or measure full endurance on the <Link href="/typing-test" className="text-primary hover:underline">60-Second Typing Test</Link>.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions About Typing Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {typeRacerFaqs.map((faq, index) => (
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
