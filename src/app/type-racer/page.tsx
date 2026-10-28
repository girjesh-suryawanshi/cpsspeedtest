import { GameSEO } from "@/components/game-seo";
import { TypeRacer } from "@/components/games/type-racer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Keyboard, Zap, Award, HelpCircle, CheckCircle2,
  Activity, Cpu, Trophy, Flag, TrendingUp, Sparkles,
  ArrowRight, ShieldCheck, Layers
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speed Typer – 30-Second WPM Typing Sprint & Accuracy Benchmark | CpsSpeedTest",
  description:
    "Test your keyboard typing speed and accuracy in a high-intensity 30-second WPM sprint. Benchmark your Words Per Minute, character accuracy, keyboard layout efficiency, and typing mechanics.",
  keywords: [
    "typing speed test",
    "wpm test",
    "speed typer",
    "30 second typing test",
    "keyboard accuracy test",
    "type racer test",
    "burst wpm benchmark",
    "sentence typing test",
    "typing race online",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/type-racer",
  },
  openGraph: {
    title: "Speed Typer – 30-Second WPM Typing Sprint & Accuracy Benchmark",
    description: "Benchmark your typing speed, Words Per Minute (WPM), and key accuracy in this 30-second high-intensity keyboard sprint.",
    url: "https://www.cpsspeedtest.com/type-racer",
    type: "website",
  },
};

const typeRacerHowToSteps = [
  {
    name: "Inspect the starting text passage",
    text: "Read the opening sentence of the test passage to mentally prepare for capitalization, punctuation, and uncommon vocabulary.",
  },
  {
    name: "Position hands on standard home row",
    text: "Anchor your index fingers on the F and J tactile markers. Relax your shoulders and elevate your palms slightly off the desk.",
  },
  {
    name: "Type the first character to launch the race",
    text: "The timer triggers automatically on your initial stroke. Type fluidly without hesitating between word spaces.",
  },
  {
    name: "Correct mistakes instantly to resume progress",
    text: "If you mistype a letter, the text highlights red. Backspace and correct the keystroke immediately, as the racer requires valid input to advance.",
  },
  {
    name: "Cross the finish line and analyze WPM",
    text: "Review your final Net Words Per Minute, gross keystroke count, total errors, and overall accuracy percentage.",
  },
  {
    name: "Analyze problem words and retry",
    text: "Identify words or punctuation sequences that interrupted your typing flow, stretch your fingers, and race again to set a new personal record.",
  },
];

const typeRacerFaqs = [
  {
    question: "How is Words Per Minute (WPM) calculated mathematically?",
    answer:
      "Standardized typing engines define one 'word' as exactly 5 keystrokes (including alphanumeric letters, spaces, and punctuation). Gross WPM is calculated as: `(Total Keystrokes ÷ 5) ÷ (Elapsed Seconds ÷ 60)`. Net WPM penalizes uncorrected errors: `((Total Keystrokes ÷ 5) - Uncorrected Errors) ÷ (Elapsed Seconds ÷ 60)`. In a 30-second sprint, this simplifies to `(Corrected Words) × 2`.",
  },
  {
    question: "What is considered a fast typing speed on a 30-second sprint?",
    answer:
      "While the global office average is approximately 40 WPM, a 30-second sprint measures anaerobic burst capability. Speeds of 60–79 WPM represent competent typists, 80–99 WPM represent advanced transcription fluency, and 100+ WPM places you in the top 2% of competitive typists worldwide.",
  },
  {
    question: "How is Speed Typer different from a standard random-word typing test?",
    answer:
      "A standard typing test presents random unconnected words (e.g., 'cat dog blue run'). Speed Typer challenges you with coherent grammatical sentences containing proper capitalization, commas, periods, and realistic syntactic rhythm. This mirrors real-world document writing, coding, and chat communication far more accurately than disconnected word lists.",
  },
  {
    question: "Why is burst WPM typically higher than sustained 5-minute typing speed?",
    answer:
      "A 30-second sprint minimizes muscular lactic acid buildup in the forearm flexors and requires less sustained attentional stamina. Typists can aggressively push their raw finger velocity without encountering the micro-stamina drops and cognitive fatigue characteristic of prolonged transcription blocks.",
  },
  {
    question: "How can I break through a stubborn typing speed plateau?",
    answer:
      "Focus 100% on accuracy rather than speed. Typing at 98–100% accuracy eliminates the catastrophic time penalty of error recognition, backspacing, and re-striking. Once muscle memory locks in zero-error pathways, finger speed accelerates naturally without conscious effort.",
  },
  {
    question: "Which keyboard switch type is best for competitive speed typing?",
    answer:
      "Most competitive typists prefer light linear mechanical switches (like Cherry MX Red, Gateron Yellow, or optical switches with 45g actuation force) or light tactile switches (like Cherry MX Brown). Linear switches provide zero tactile resistance, facilitating effortless finger gliding across rapid word sequences.",
  },
  {
    question: "Do alternative keyboard layouts like Colemak or Dvorak improve typing speed?",
    answer:
      "Yes. The QWERTY layout was engineered in the 1870s for mechanical typewriters to prevent mechanical arm jams by separating common letter pairs. Modern layouts like Colemak and Dvorak concentrate 70%+ of keystrokes on the home row, reducing finger travel distance by over 60% and significantly lowering fatigue during rapid typing.",
  },
];

export default function TypeRacerPage() {
  return (
    <>
      <GameSEO
        name="Speed Typer – 30-Second WPM Sprint"
        description="Test your keyboard typing speed and accuracy in a 30-second WPM sprint. Benchmark your Words Per Minute and accuracy percentage."
        url="https://www.cpsspeedtest.com/type-racer"
        faqs={typeRacerFaqs}
        howToSteps={typeRacerHowToSteps}
        category="SkillGame"
        lastUpdated="October 2026"
        benefits="Master grammatical sentence typing rhythm, eliminate backspacing latency, improve touch typing accuracy, and benchmark Words Per Minute against global standards."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>High-Intensity Sentence Typing Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Speed Typer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Test your keyboard typing speed and accuracy in a 30-second WPM sprint. Type realistic sentences, maintain accuracy, and benchmark your Words Per Minute.
          </p>
        </header>

        {/* Game Component */}
        <TypeRacer />

        {/* Section 1: What is Speed Typer? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Speed Typer Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              <strong>Speed Typer</strong> is a competitive 30-second sentence typing benchmark that measures your typing velocity in <strong>Words Per Minute (WPM)</strong> using real, grammatically structured English passages. Unlike tests using isolated random words, Speed Typer tests your ability to handle natural capitalization, commas, apostrophes, and word transitions under strict real-time accuracy enforcement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Metric Standard</span>
                <span className="text-lg font-black text-primary">Net WPM</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Penalizes uncorrected typos</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Text Format</span>
                <span className="text-lg font-black text-emerald-500">Sentence Syntax</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Real punctuation &amp; casing</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Sprint Duration</span>
                <span className="text-lg font-black text-amber-500">30 Seconds</span>
                <span className="text-xs text-muted-foreground block mt-0.5">High-intensity burst benchmark</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Race and Benchmark Your WPM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {typeRacerHowToSteps.map((step, index) => (
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

        {/* Section 3: Why Speed Typer Matters (Benefits & Real-World Value) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Why Sentence Typing Sprints Matter: Real-World Gains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <Flag className="w-4 h-4" />
                  Realistic Syntactic Fluency
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Typing random words like &quot;apple dog stone&quot; fails to train your hands for shift-key capitalization, punctuation transitions, or sentence cadence. Speed Typer trains the exact muscle memory you need when writing professional emails, reports, or articles.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  Instant Error Correction Discipline
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Because you cannot proceed past a mistyped character without fixing it, Speed Typer builds the reflex of immediate typo recognition and rapid pinky backspacing, preventing error cascades from ruining your output.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Activity className="w-4 h-4" />
                  Visual Text Buffering
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Competitive typists maintain an eye-to-finger buffer of 8 to 15 characters ahead of their active stroke. Sentence racing forces your ocular system to scan full phrases in chunks rather than letter-by-letter, dramatically accelerating processing speed.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <Trophy className="w-4 h-4" />
                  Gamified Daily Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Competing against the 30-second clock provides immediate gamified feedback. Tracking your personal bests creates a rewarding daily practice habit that translates directly into measurable career productivity gains.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Keyboard Layout Comparison */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-500" />
            Keyboard Layout Efficiency: QWERTY vs Colemak vs Dvorak
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Layout</th>
                  <th className="p-3">Home Row %</th>
                  <th className="p-3">Daily Finger Travel (Miles)</th>
                  <th className="p-3">Same-Finger Bigrams</th>
                  <th className="p-3">Ergonomic Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Colemak</td>
                  <td className="p-3 text-emerald-400 font-semibold">74% of keystrokes</td>
                  <td className="p-3 text-emerald-400 font-bold">~1.1 miles</td>
                  <td className="p-3 text-emerald-400 font-bold">1.6% (Lowest)</td>
                  <td className="p-3 text-emerald-400 font-bold">★★★★★ (Optimal for speed)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Dvorak Simplified</td>
                  <td className="p-3 text-cyan-400 font-semibold">70% of keystrokes</td>
                  <td className="p-3">~1.4 miles</td>
                  <td className="p-3">2.6%</td>
                  <td className="p-3 text-cyan-400 font-bold">★★★★☆ (High hand alternation)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">QWERTY Standard</td>
                  <td className="p-3 text-rose-400 font-semibold">32% of keystrokes</td>
                  <td className="p-3 text-rose-400 font-bold">~2.8 miles</td>
                  <td className="p-3 text-rose-400 font-bold">6.4% (Frequent strain)</td>
                  <td className="p-3 text-amber-400 font-bold">★★★☆☆ (Universal standard)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Speed Typer Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Casual Typist</div>
              <div className="text-2xl font-black text-foreground">25 – 44 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Normal conversational typing speed. Relies on visual feedback and takes frequent pauses between clauses.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Skilled Typist</div>
              <div className="text-2xl font-black text-primary">45 – 69 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Proficient touch typist. Handles common sentence punctuation smoothly with an accuracy rate above 94%.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Advanced Racer</div>
              <div className="text-2xl font-black text-amber-500">70 – 94 WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fast, rhythmic typing execution. Continuous word buffering with minimal backspace usage and 97%+ accuracy.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Elite Racer</div>
              <div className="text-2xl font-black text-rose-500">95 – 125+ WPM</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Competitive speed typist tier. Near-instantaneous word recognition, zero visual checking, and top 2% global ranking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Improvement Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            How to Increase Your Speed Typer WPM
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Eliminate Staccato Typing Rhythm</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Avoid typing fast bursts followed by long hesitations. Aim for a smooth, metronome-like keystroke rhythm across every word and space.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Use Opposite-Hand Shift Keys</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    When capitalizing a left-hand letter (like &apos;T&apos; or &apos;A&apos;), press the right Shift key with your right pinky. Never contort one hand to press Shift and a letter simultaneously.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Master the Ctrl + Backspace Shortcut</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    If you make multiple typos in a long word, pressing Ctrl + Backspace deletes the entire word in a single stroke, saving valuable seconds compared to single-character deletion.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Target 100% Accuracy First</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Speed naturally develops from effortless muscle memory. Every typo resets your momentum. Maintain 98%+ accuracy, and speed will follow automatically.
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
            {typeRacerFaqs.map((faq, index) => (
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
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Typing &amp; Reflex Tests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/typing-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">60s Typing Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/typing-test-30s"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">30s Typing Sprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/spacebar-clicker"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Spacebar Clicker</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/reaction-time-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Reaction Time Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
