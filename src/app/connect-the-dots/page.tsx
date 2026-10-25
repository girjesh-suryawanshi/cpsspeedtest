import { GameSEO } from "@/components/game-seo";
import { ConnectTheDots } from "@/components/connect-the-dots";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { PenTool, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Connect the Dots – Visual Pathfinding & Fine Motor Coordination | CpsSpeedTest',
  description: 'Play Connect the Dots free online. Link numbered points in sequential order to reveal hidden illustrations. Benchmark visual search saccades and mouse precision.',
  keywords: ['connect the dots', 'dot to dot online', 'visual search puzzle', 'mouse precision game', 'fine motor control', 'number sequencing game'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/connect-the-dots',
  },
  openGraph: {
    title: 'Connect the Dots – Visual Pathfinding & Motor Precision Game',
    description: 'Connect numbered vertices in sequential order to reveal intricate hidden illustrations. Benchmark your visual search speed and mouse precision.',
    url: 'https://www.cpsspeedtest.com/connect-the-dots',
    type: 'website',
  },
};

const connectDotsFaqs = [
  {
    question: "What cognitive skills are exercised in Connect the Dots?",
    answer: "Connect the Dots exercises ocular visual search saccades, sequential working memory, fine motor cursor stabilization, and Gestalt perceptual closure (anticipating the emerging holistic contour before the final lines are drawn)."
  },
  {
    question: "How does Fitts's Law apply to digital Connect the Dots?",
    answer: "Fitts's Law (MT = a + b log₂(2D/W)) dictates that movement time between points depends on the distance (D) to the target dot and the target's interactive click width (W). Speed in dot-to-dot puzzles requires smooth ballistic cursor movement followed by micro-deceleration directly over the numbered vertex."
  },
  {
    question: "What happens if a dot is clicked out of sequence?",
    answer: "The game engine enforces strict numerical progression. If you click a dot out of order, the input is ignored without penalty, requiring you to locate and connect the true next sequential number."
  },
  {
    question: "Can Connect the Dots help gamers improve mouse accuracy?",
    answer: "Yes. For PC gamers, rapidly navigating through non-linear coordinates trains micro-flick precision, raw pointer deceleration, and hand-eye target acquisition—skills that transfer directly to tactical first-person shooters."
  },
  {
    question: "Is this game suitable for children and touchscreen devices?",
    answer: "Yes, the interactive canvas responds intuitively to finger taps on smartphones, tablets, and interactive whiteboards, making it an excellent educational tool for number sequencing and motor coordination."
  }
];

export default function ConnectTheDotsPage() {
  return (
    <>
      <GameSEO 
        name="Connect the Dots"
        description="Click the dots in ascending numerical order to reveal the hidden illustration. Benchmark your visual search speed and mouse coordination."
        url="https://www.cpsspeedtest.com/connect-the-dots"
        faqs={connectDotsFaqs}
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <PenTool className="w-3.5 h-3.5" />
            <span>Visual Search &amp; Fine Motor Coordination</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Connect the Dots
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trace connecting paths between numbered vertices in ascending numerical order. Reconstruct hidden illustrations while training visual search saccades and cursor precision.
          </p>
        </header>

        {/* Connect the Dots Interactive Game */}
        <div className="py-2">
          <ConnectTheDots />
        </div>

        {/* ── Section 1: The Neuroscience of Visual Saccades (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Neuroscience of Visual Search &amp; Gestalt Emergence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              When confronted with a scattered field of numbered dots, your visual cortex performs rapid ballistic eye movements known as <strong>saccades</strong>. Between saccadic jumps, your fovea focuses on candidate clusters for 200–300 milliseconds to identify the target numeral $N+1$.
            </p>
            <p>
              As line segments connect vertex to vertex, the brain&apos;s lateral occipital complex performs <strong>perceptual grouping (Gestalt closure)</strong>. Long before the final dot is clicked, your visual system interpolates missing contours, predicting the hidden shape and guiding your hand toward the anticipated sequence path.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Performance Tiers & Completion Time ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Completion Speed Tiers (Standard 30-Dot Illustration)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How quickly can your eyes locate numbers and guide your cursor? Compare your puzzle completion times:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">50+ Seconds</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Relaxed Exploration</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Careful searching. The user searches for each number sequentially after clicking the previous one without lookahead.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">35 – 49 Seconds</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult Searcher</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Steady visual scanning. Good peripheral detection of nearby numbers with minimal back-and-forth cursor drift.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">22 – 34 Seconds</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Advanced Visual Tracker</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Concurrent lookahead: while the mouse moves toward dot N, the eyes are already scanning and locking onto dot N+1.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Under 20 Seconds</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Esports Precision Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% visual-motor coordination. Seamless ballistic flicks directly onto dot centers with sub-600ms inter-click latency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Visual Search Optimization ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Lookahead Buffering Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Decouple Gaze from Mouse:</strong> Never follow your mouse cursor with your eyes. Once you commit a flick toward dot N, immediately launch your visual gaze to search for dot N+1.
                </li>
                <li>
                  <strong className="text-foreground">Follow the Emerging Silhouette:</strong> Most connect-the-dots puzzles trace the outer perimeter of an object. If you understand the silhouette (e.g., an animal ear or bicycle wheel), you know roughly where the next number must be located.
                </li>
                <li>
                  <strong className="text-foreground">Fitts&apos;s Law Optimization:</strong> Practice smooth acceleration and deceleration to avoid overshooting small circular dot boundaries.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Motor &amp; Accuracy Warmups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Enhance your mouse control, flick accuracy, and visual memory across complementary tools:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Flick &amp; Target Acquisition →</span>
                </Link>
                <Link href="/visual-memory-test" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Visual Memory Test</span>
                  <span className="text-primary font-mono">Spatial Grid Recall →</span>
                </Link>
                <Link href="/drawing-pad" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Drawing Pad</span>
                  <span className="text-primary font-mono">Freeform Canvas Art →</span>
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
              Frequently Asked Questions About Connect the Dots
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {connectDotsFaqs.map((faq, index) => (
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
