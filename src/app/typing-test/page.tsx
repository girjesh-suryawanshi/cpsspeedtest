import { GameSEO } from "@/components/game-seo";
import { TypingTest } from "@/components/typing-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Keyboard, Trophy, Activity, HelpCircle, CheckCircle2,
  Cpu, Zap, Star, TrendingUp, Lightbulb, Target,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Typing Speed Test – Free WPM Test & Accuracy Benchmark (60 Seconds) | CpsSpeedTest",
  description:
    "Free 60-second typing speed test that measures your Words Per Minute (WPM) and accuracy. Compare your typing speed with career benchmarks and learn how to type faster.",
  keywords: [
    "typing speed test",
    "wpm test",
    "words per minute test",
    "typing test 60 seconds",
    "free typing test",
    "online typing test",
    "touch typing practice",
    "how fast can i type",
    "typing accuracy test",
    "keyboard speed test",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/typing-test",
  },
  openGraph: {
    title: "Typing Speed Test – Measure Your WPM & Accuracy | CpsSpeedTest",
    description:
      "Free 60-second typing test. Measure your Words Per Minute, keystroke accuracy, and compare with career benchmarks.",
    url: "https://www.cpsspeedtest.com/typing-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing Speed Test – Free WPM Benchmark",
    description: "How fast do you type? Take the free 60-second WPM test. No signup required.",
  },
};

// ─── HowTo Steps ─────────────────────────────────────────────────────────────

const typingHowToSteps = [
  {
    name: "Open the typing test page",
    text: "Navigate to cpsspeedtest.com/typing-test on any desktop browser. The test is optimized for physical keyboards — on-screen keyboards are not recommended for accurate WPM testing.",
  },
  {
    name: "Click inside the text input area to focus",
    text: "Click on the typing area so your keyboard input is captured. A blinking cursor will appear, indicating the test is ready to start.",
  },
  {
    name: "Begin typing when you are ready",
    text: "Start typing the displayed words. The 60-second timer begins automatically on your first keystroke. Type each word exactly as shown, including capitalization and punctuation.",
  },
  {
    name: "Continue typing without stopping",
    text: "Type continuously through the word list. Incorrectly typed characters are highlighted in red. You can backspace to correct errors — but uncorrected errors reduce your Net WPM score.",
  },
  {
    name: "Read your WPM and accuracy results",
    text: "When the 60 seconds expire, your Gross WPM, Net WPM, and accuracy percentage are displayed. Gross WPM counts all keystrokes; Net WPM deducts uncorrected errors.",
  },
  {
    name: "Practice again with focus on accuracy first",
    text: "For improvement, always prioritize accuracy over speed. Type at a pace where you maintain 98%+ accuracy. Muscle memory built at high accuracy automatically converts to higher speed over time.",
  },
];

// ─── FAQs (7 high-intent questions) ──────────────────────────────────────────

const typingFaqs = [
  {
    question: "What is WPM and how is typing speed calculated?",
    answer:
      "WPM stands for Words Per Minute. Since words vary in length, the typing industry standardized one 'word' as exactly 5 keystrokes (including spaces). Gross WPM = (Total Keystrokes ÷ 5) ÷ (Time in Minutes). Net WPM = Gross WPM − (Uncorrected Errors ÷ Time in Minutes). Net WPM is the universally accepted standard used in employment typing tests and certification exams.",
  },
  {
    question: "What is the average typing speed?",
    answer:
      "The worldwide average typing speed on a 60-second test is approximately 40 Words Per Minute (WPM) with 92% accuracy. Office professionals typically range from 40–55 WPM. Programmers and writers average 60–80 WPM. Professional touch typists and data entry specialists reach 80–100+ WPM. The all-time world record is 216 WPM achieved by Stella Pajunas in 1946 on an IBM electric typewriter.",
  },
  {
    question: "What is a good typing speed for a job application or employment test?",
    answer:
      "Required typing speeds vary by role. Administrative assistants: 40–50 WPM minimum. Legal secretaries and court reporters: 65–80 WPM. Medical transcriptionists: 60–75 WPM. Data entry operators: 45–60 WPM. Software developers: 60–80 WPM is typical (though not always formally tested). For most office roles, 50+ WPM at 95%+ accuracy satisfies all standard requirements.",
  },
  {
    question: "What is touch typing and how is it different from hunt-and-peck?",
    answer:
      "Touch typing is a typing method based on spatial muscle memory rather than visual key-searching. Your index fingers anchor to the F and J keys (which have tactile homing bumps), and each finger is assigned specific vertical columns of keys. This frees your eyes to read the source text rather than hunt for keys. Hunt-and-peck typists (who look for each key) typically plateau at 30–40 WPM, while touch typists routinely reach 60–100+ WPM.",
  },
  {
    question: "Does keyboard layout affect typing speed (QWERTY vs. Dvorak vs. Colemak)?",
    answer:
      "QWERTY was designed in the 1870s for mechanical typewriters to prevent jammed typebars — not for typing efficiency. Alternative layouts like Dvorak and Colemak place the most common English letters (e, t, a, o, i, n) on the home row, reducing finger travel distance by 50–60%. However, switching from QWERTY carries a 3–6 month relearning period and reduces performance on unfamiliar keyboards. Most speed records are held on QWERTY due to its global dominance.",
  },
  {
    question: "How many minutes a day should I practice typing to improve my WPM?",
    answer:
      "15–20 minutes of daily deliberate practice produces the fastest improvement for most typists. The key is maintaining 98%+ accuracy throughout practice — never sacrifice accuracy for speed. Speed follows accuracy naturally as muscle memory solidifies. Random short bursts of fast typing build bad habits. Structured daily sessions on a proper typing practice site yield the best long-term WPM gains.",
  },
  {
    question: "Does typing on a mechanical keyboard improve WPM compared to a membrane keyboard?",
    answer:
      "Mechanical keyboards can improve typing speed and comfort due to tactile switch feedback (which tells your fingers to release before full key travel, saving time), consistent actuation force (45–60gf), and reduced bottoming-out impact. Clicky switches (Cherry MX Blue) give auditory confirmation. However, the WPM gain from mechanical vs. quality membrane keyboards is typically 3–8% — not dramatic. Technique improvement yields far greater gains than hardware alone.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TypingTestPage() {
  return (
    <>
      <GameSEO
        name="Typing Speed Test"
        description="Free 60-second typing speed test that measures your Words Per Minute (WPM) and accuracy. Compare your typing speed with career benchmarks and learn how to type faster."
        url="https://www.cpsspeedtest.com/typing-test"
        faqs={typingFaqs}
        howToSteps={typingHowToSteps}
        category="SkillGame"
        lastUpdated="October 2026"
        datePublished="2024-01-15"
        primaryKeyword="Typing Speed Test"
        speakableSummary="The average typing speed is 40 Words Per Minute (WPM). Office professionals average 45–55 WPM. Programmers and writers typically reach 60–80 WPM. This free 60-second test measures your exact WPM and accuracy."
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">

        {/* ── HERO ── */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Standardized 60-Second WPM Benchmark · Free · No Signup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Typing Speed Test
          </h1>
          <p className="aeo-direct-answer text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The free <strong>Typing Speed Test</strong> measures your <strong>Words Per Minute (WPM)</strong> and
            keystroke accuracy over a standardized 60-second window. Start typing to begin — your WPM,
            accuracy, and error count are shown the moment the timer ends.
          </p>
        </header>

        {/* ── Interactive Tool ── */}
        <div className="py-2">
          <TypingTest gameDuration={60} />
        </div>

        {/* ── SECTION 1: What Is a Typing Speed Test? (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Keyboard className="w-5 h-5 text-primary" />
              What Is a Typing Speed Test? — Plain-English Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="aeo-speakable">
              A <strong>typing speed test</strong> is a standardized benchmark that measures how many
              words you can type per minute (WPM) and how accurately you type them. You are shown a
              passage of common English words and must type them correctly within a fixed time window —
              typically 60 seconds. It is used by employers, educational institutions, and individuals
              to certify typing proficiency and track improvement over time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground space-y-2">
                <p className="font-bold text-sm">Gross WPM (Raw Speed)</p>
                <p className="font-mono text-xs">(Total Keystrokes ÷ 5) ÷ Time (minutes)</p>
                <p className="text-xs text-muted-foreground">Counts all keystrokes including errors. Represents maximum raw speed.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground space-y-2">
                <p className="font-bold text-sm">Net WPM (Certified Speed)</p>
                <p className="font-mono text-xs">Gross WPM − (Uncorrected Errors ÷ Time)</p>
                <p className="text-xs text-muted-foreground">The universally accepted standard. Penalizes unfix mistakes. Used in all job applications.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-xs sm:text-sm">
              <p className="font-semibold text-primary mb-1">Worked Example:</p>
              <p>You typed <strong>350 keystrokes</strong> in 60 seconds with <strong>2 uncorrected errors</strong>:</p>
              <p>Gross WPM = (350 ÷ 5) ÷ 1 = <strong>70 WPM</strong></p>
              <p>Net WPM = 70 − 2 = <strong>68 Net WPM</strong></p>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 2: How to Take the Test (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Target className="w-5 h-5 text-primary" />
              How to Take the Typing Test — Step-by-Step
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <ol className="space-y-3">
              {typingHowToSteps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-xs bg-secondary/30 p-3 rounded-lg border border-border/20">
              💡 <strong>Key insight:</strong> Always prioritize accuracy over speed. Type slower and accurately —
              Net WPM rewards accuracy, and muscle memory built at high accuracy naturally converts to higher
              speed over 2–4 weeks of consistent practice.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 3: Why Test Typing Speed? (Benefits / GEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Star className="w-5 h-5 text-primary" />
              Why Test Your Typing Speed? Benefits Across Work & Life
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Typing speed has a direct, measurable impact on productivity, career opportunities, and
              the quality of work you produce. Here is why benchmarking your WPM matters:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Career & Employment Certification",
                  body: "Many employers require minimum WPM scores for administrative, legal, medical, and data entry roles. Knowing your WPM lets you assess whether you meet role requirements or need to improve before applying.",
                },
                {
                  title: "Productivity Multiplier",
                  body: "Doubling your WPM from 40 to 80 effectively halves the time you spend on any text-heavy task — emails, reports, code, documentation. For knowledge workers, this translates to hours of saved time every week.",
                },
                {
                  title: "Track Touch Typing Progress",
                  body: "If you are learning touch typing from scratch, the WPM test is your primary progress metric. Beginners typically start at 20–30 WPM and reach 60+ WPM within 3–6 months of consistent daily practice.",
                },
                {
                  title: "Competitive Typing & Typing Games",
                  body: "Typing speed is the core metric in competitive typing communities (typeracer.com, monkeytype.com). Knowing your baseline WPM lets you compete meaningfully in timed typing races and track where you rank globally.",
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

        {/* ── SECTION 4: Career WPM Benchmark Table ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              WPM Benchmarks by Career & Skill Level
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Here is how average typing speeds compare across different professions and skill levels,
              based on industry employment standards and international benchmark datasets:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Career / User Type</th>
                    <th className="py-2.5 px-3 font-bold">Typical WPM Range</th>
                    <th className="py-2.5 px-3 font-bold">Minimum Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["Everyday Computer User", "20–40 WPM", "No formal requirement"],
                    ["Administrative Assistant / Secretary", "45–65 WPM", "40 WPM (most employers)"],
                    ["Legal Secretary / Paralegal", "65–80 WPM", "60–65 WPM"],
                    ["Medical Transcriptionist", "60–80 WPM", "55–60 WPM"],
                    ["Data Entry Operator", "50–70 WPM", "45–50 WPM"],
                    ["Software Developer / Programmer", "60–80 WPM", "No formal requirement"],
                    ["Court Reporter (Stenography)", "225+ WPM", "225 WPM (NCRA certified)"],
                    ["Professional Touch Typist", "80–120 WPM", "N/A (self-driven)"],
                  ].map(([role, range, req]) => (
                    <tr key={role}>
                      <td className="py-2 px-3 font-medium text-foreground">{role}</td>
                      <td className="py-2 px-3 text-primary font-semibold">{range}</td>
                      <td className="py-2 px-3 text-xs">{req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── SECTION 5: Typing Speed Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              WPM Score Benchmarks — Where Do You Rank?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🐢", tier: "Beginner", range: "< 30 WPM", color: "text-slate-400", desc: "Hunt-and-peck typist or new learner. Touch typing practice recommended." },
                { icon: "📝", tier: "Average", range: "30–55 WPM", color: "text-blue-500", desc: "Typical for most adults. Sufficient for general office work and daily tasks." },
                { icon: "⌨️", tier: "Proficient", range: "55–80 WPM", color: "text-purple-500", desc: "Strong touch typist. Meets all standard employment typing requirements." },
                { icon: "🚀", tier: "Expert", range: "80+ WPM", color: "text-amber-500", desc: "Top 10% of typists globally. Writers, programmers, and dedicated speed typists." },
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

        {/* ── SECTION 6: Keyboard Layout Comparison ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              Keyboard Layout Comparison: QWERTY vs Dvorak vs Colemak
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Your keyboard layout affects how far your fingers travel and how ergonomically the common
              letters are distributed. Here is how the three main layouts compare:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-foreground">
                    <th className="py-2.5 px-3 font-bold">Layout</th>
                    <th className="py-2.5 px-3 font-bold">Home Row Letters</th>
                    <th className="py-2.5 px-3 font-bold">Finger Travel vs QWERTY</th>
                    <th className="py-2.5 px-3 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    ["QWERTY", "ASDFGHJKL", "Baseline (1.0×)", "Universal compatibility — works everywhere, global standard"],
                    ["Dvorak", "AOEUIDHTNS", "~40% less travel", "Ergonomics-focused typists willing to relearn for 3–6 months"],
                    ["Colemak", "ARSTDHNEIO", "~35% less travel", "Best balance of ergonomics and QWERTY similarity — easiest switch"],
                  ].map(([layout, home, travel, use]) => (
                    <tr key={layout}>
                      <td className="py-2 px-3 font-bold text-foreground">{layout}</td>
                      <td className="py-2 px-3 font-mono text-xs">{home}</td>
                      <td className="py-2 px-3 text-emerald-500 font-medium">{travel}</td>
                      <td className="py-2 px-3 text-xs">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs">
              <strong>Bottom line:</strong> For most people, mastering QWERTY touch typing is the most
              practical path to 70+ WPM. The efficiency gains from alternative layouts are real but modest
              compared to the productivity cost of relearning and the incompatibility on shared devices.
            </p>
          </CardContent>
        </Card>

        {/* ── SECTION 7: How to Improve WPM ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-primary" />
              How to Improve Your Typing Speed — 6 Practical Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[
              { tip: "Learn proper finger placement (home row anchoring)", detail: "Place your left index finger on F and right index finger on J. Each finger owns specific key columns. Never look at the keyboard — this forces muscle memory formation." },
              { tip: "Accuracy first, speed second — always", detail: "Type at a speed where you can maintain 98%+ accuracy. Your speed will naturally increase as accuracy becomes automatic. Rushing and making errors builds bad habits that are hard to unlearn." },
              { tip: "Practice 15–20 minutes daily, not sporadic long sessions", detail: "Short, focused daily sessions beat occasional long marathons. Your brain consolidates motor patterns during sleep — daily practice allows overnight memory consolidation." },
              { tip: "Identify and drill your weakest key combinations", detail: "After each test, note which letters caused errors most often. Deliberately practice words containing those letter combinations until the awkward muscle movements become fluid." },
              { tip: "Use a proper typing posture", detail: "Sit with your feet flat on the floor, back straight, elbows at 90°, and wrists floating slightly above the keyboard (not resting). Poor posture leads to wrist strain and caps your speed ceiling." },
              { tip: "Increase test duration gradually as you improve", detail: "Start with 30-second tests when learning, then move to 60-second, and eventually 5-minute tests. Longer tests build typing endurance and reveal stamina-related speed drops." },
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

        {/* ── SECTION 8: FAQ ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions — Typing Speed Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border/20">
              {typingFaqs.map((faq, index) => (
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

        {/* ── SECTION 9: Related Tools ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              Related Typing Tests & Keyboard Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "30-Second Typing Test", href: "/typing-test-30s", desc: "Quick 30-second WPM sprint benchmark." },
                { label: "Type Racer", href: "/type-racer", desc: "Sentence-by-sentence competitive typing race." },
                { label: "Spacebar Clicker", href: "/spacebar-clicker", desc: "Test your spacebar hitting speed in HPS." },
                { label: "Reaction Time Test", href: "/reaction-time-test", desc: "Benchmark visual reflex speed in milliseconds." },
                { label: "CPS Test", href: "/cps-test", desc: "Test mouse clicking speed alongside typing speed." },
                { label: "Typing Speed Improvement Guide", href: "/blog/typing-speed-improvement-guide", desc: "Complete guide to going from 40 WPM to 80+ WPM." },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="group p-3 rounded-xl border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 space-y-1">
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
