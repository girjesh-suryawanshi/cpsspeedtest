import { GameSEO } from "@/components/game-seo";
import { TypingTest } from "@/components/typing-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Keyboard, Trophy, Activity, HelpCircle, CheckCircle2, Cpu, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Typing Speed Test (60 Seconds) – Words Per Minute & Accuracy Benchmark | CpsSpeedTest',
  description: 'Test your touch typing speed on our standardized 60-second typing test. Measure your Words Per Minute (WPM), character accuracy, and keystroke errors.',
  keywords: ['typing speed test', 'typing test 60s', 'wpm test', 'words per minute test', 'keyboard accuracy test', 'touch typing practice', 'online typing test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/typing-test',
  },
  openGraph: {
    title: 'Typing Speed Test (60 Seconds) – Benchmark Your WPM & Accuracy',
    description: 'Measure your touch-typing speed, character accuracy percentage, and Words Per Minute over a standardized 1-minute test.',
    url: 'https://www.cpsspeedtest.com/typing-test',
    type: 'website',
  },
};

const typingFaqs = [
  {
    question: "What is the global average typing speed on a 1-minute test?",
    answer: "Across international workplace and academic testing datasets, the worldwide average touch-typing speed is approximately 40 Words Per Minute (WPM) with roughly 92% accuracy. Professional software developers, medical transcriptionists, and legal secretaries typically maintain 65 to 85+ WPM."
  },
  {
    question: "How does the 60-second typing test calculate Net WPM vs. Gross WPM?",
    answer: "Gross WPM counts all keystrokes divided by 5 (standard word length), normalized to one minute: `(Keystrokes ÷ 5) ÷ (Time in Minutes)`. Net WPM subtracts uncorrected errors: `((Keystrokes ÷ 5) - Uncorrected Errors) ÷ (Time in Minutes)`. Net WPM is the universally accepted standard for certification."
  },
  {
    question: "What is touch typing and why is it superior to hunt-and-peck?",
    answer: "Touch typing is typing based on spatial tactile muscle memory without using visual gaze to identify keys. Typists anchor their index fingers to the F and J keys (which have raised tactile homing bars) and assign specific fingers to distinct vertical key columns. Touch typing dramatically increases speed and frees visual focus for reading and editing."
  },
  {
    question: "How does keyboard layout affect typing speed (QWERTY vs. Dvorak vs. Colemak)?",
    answer: "QWERTY was designed in the 1870s for mechanical typewriters to prevent jammed typebars, scattering common letter pairs across rows. Alternative layouts like Dvorak and Colemak place high-frequency vowels and consonants on the home row, reducing finger travel distance by over 50%. While Colemak and Dvorak reduce ergonomic strain, QWERTY remains the global standard due to universal device compatibility."
  },
  {
    question: "How many minutes a day should I practice to increase my WPM?",
    answer: "Consistent deliberate practice of 15 to 20 minutes daily yields the highest neuromuscular adaptation rate. Practicing in brief, high-focus sessions focusing strictly on maintaining 98%+ accuracy prevents repetitive strain and accelerates muscle memory formation."
  }
];

export default function TypingTestPage() {
  return (
    <>
      <GameSEO 
        name="Typing Speed Test"
        description="Benchmark your touch typing speed on our standardized 60-second typing test. Measure Words Per Minute (WPM), accuracy, and keystroke consistency."
        url="https://www.cpsspeedtest.com/typing-test"
        faqs={typingFaqs}
        category="SkillGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Standardized 60-Second WPM Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Typing Speed Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Measure your typing velocity and keystroke precision across a standard 1-minute benchmark. Find your certified Words Per Minute (WPM) and accuracy percentage.
          </p>
        </header>

        {/* Typing Test Component */}
        <div className="py-2">
          <TypingTest gameDuration={60} />
        </div>

        {/* ── Section 1: Standardized WPM Definition & Touch Typing (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              How Does the 60-Second Typing Test Benchmark Your Skills?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              The <strong>60-Second Typing Speed Test</strong> is the global benchmark for keyboard dexterity, transcription proficiency, and digital workplace efficiency. Unlike brief sprints, a full 60-second test measures your sustained stamina, rhythm stability, and real-time error recovery.
            </p>
            <p>
              In accordance with international typing certification guidelines, typing speed is quantified using standardized 5-character increments:
            </p>
            <div className="p-3.5 rounded-xl border border-border/20 bg-background/50 font-mono text-xs sm:text-sm text-foreground">
              Net WPM = ((Total Characters Typed ÷ 5) - Uncorrected Errors) ÷ 1.0 Minute
            </div>
            <p className="text-xs">
              Maintaining high accuracy is vital: typing at 90 WPM with 85% accuracy produces far lower net output than typing at 75 WPM with 99% accuracy, because uncorrected errors incur severe net score penalties.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Global Performance Matrix ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Typing Speed Score Tiers &amp; Accuracy Percentiles (60s Standard)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compare your 1-minute Net WPM result against global population statistics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 35 WPM</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Novice Typist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Relies on visual hunting across the keyboard. Pauses frequently between words to locate punctuation and capital letters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">36 – 55 WPM</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Computer User</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The median global range. Sufficient for standard office correspondence, web browsing, and everyday computer tasks.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">56 – 80 WPM</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Proficient Professional</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Established touch typist. Clean home-row mechanics with 95%+ accuracy. Characteristic of coders, journalists, and editors.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">81+ WPM</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master Transcriptionist</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 3% elite tier. Sub-100ms key transitions with effortless multi-word optical lookahead and near-zero typo rate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Touch Typing Methodology & Ergonomic Posture ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-primary" />
                The Home-Row Touch Typing Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Tactile Anchoring:</strong> Rest your left index finger on &quot;F&quot; and your right index finger on &quot;J&quot;. Feel the raised ridges on these keycaps to confirm positioning without looking down.
                </li>
                <li>
                  <strong className="text-foreground">Finger Column Allocation:</strong> Each finger is strictly responsible for its designated diagonal column (e.g., left pinky manages Q, A, Z; left ring finger manages W, S, X).
                </li>
                <li>
                  <strong className="text-foreground">Thumbs on Spacebar:</strong> Use the dominant thumb to actuate the spacebar immediately after each word boundary.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Keyboard Ergonomics &amp; Mechanical Switches
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Wrist Elevation:</strong> Keep wrists hovering neutrally or supported on a firm palm rest. Resting wrist joints heavily on a hard desk table compresses the median nerve.
                </li>
                <li>
                  <strong className="text-foreground">Mechanical Switch Selection:</strong> Tactile switches (e.g., Gateron Brown) provide physical actuation feedback without loud click noise, helping typists avoid bottoming out keys with excessive force.
                </li>
                <li>
                  <strong className="text-foreground">Short Sprint Alternative:</strong> Want to test your maximum 30-second burst speed? Try our <Link href="/typing-test-30s" className="text-primary hover:underline">30-Second Typing Sprint</Link> or <Link href="/type-racer" className="text-primary hover:underline">Speed Typer</Link>.
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
              {typingFaqs.map((faq, index) => (
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
