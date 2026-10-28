import { GameSEO } from "@/components/game-seo";
import { ConnectTheDots } from "@/components/connect-the-dots";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { PenTool, Trophy, Activity, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Connect the Dots – Visual Pathfinding & Fine Motor Coordination | CpsSpeedTest',
  description: 'Play Connect the Dots free online. Link numbered points in sequential order to reveal hidden illustrations. Benchmark visual search saccades and mouse precision.',
  keywords: ['connect the dots', 'dot to dot online', 'visual search puzzle', 'mouse precision game', 'fine motor control', 'number sequencing game', 'fitts law mouse accuracy'],
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

const connectDotsHowToSteps = [
  {
    name: "Locate Starting Vertex (Dot #1)",
    text: "Scan the canvas to find the prominent initial dot labeled #1. Your path begins here."
  },
  {
    name: "Click and Hold to Form Vector Lines",
    text: "Click the primary mouse button on Dot #1 and prepare to glide your cursor towards the next numbered coordinate."
  },
  {
    name: "Perform Visual Saccades to Locate Target #2",
    text: "Use rapid peripheral eye movements to identify Dot #2, planning your cursor path before moving your hand."
  },
  {
    name: "Execute Smooth Ballistic Mouse Motion",
    text: "Apply Fitts's Law principles: initiate rapid cursor acceleration followed by micro-deceleration directly over the numbered dot."
  },
  {
    name: "Follow Strict Ascending Number Order",
    text: "Connect dots in exact ascending order (1, 2, 3, 4...). Out-of-order clicks are ignored to ensure geometric integrity."
  },
  {
    name: "Complete the Sequence to Reveal Artwork",
    text: "Link the final numbered vertex back to Dot #1 to close the vector loop, revealing the full vibrant illustration."
  }
];

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
  },
  {
    question: "Who invented Connect the Dots puzzles?",
    answer: "Dot-to-dot puzzles were popularized in the early 20th century in children's educational magazines and newspapers. They were patented as an instructional drawing tool in the United States around 1926 by Adele C. V. Stern."
  },
  {
    question: "How does Gestalt perceptual closure function in this puzzle?",
    answer: "Gestalt psychology demonstrates that human vision naturally seeks to complete incomplete shapes. As lines are drawn between dots, your visual cortex automatically fills in the missing contours before the final vertex is reached."
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
        howToSteps={connectDotsHowToSteps}
        category="CasualGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <PenTool className="w-3.5 h-3.5" />
            <span>Visual Search &amp; Motor Saccades</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Connect the Dots
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Link numbered vertices in ascending order to unveil the hidden illustration. Test ocular visual search speed, Fitts&apos;s Law pointer accuracy, and motor precision.
          </p>
        </header>

        {/* Interactive Connect the Dots Component */}
        <div className="py-2">
          <ConnectTheDots />
        </div>

        {/* ── Section 1: Visual Search & Fitts's Law (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Fitts&apos;s Law, Ocular Saccades &amp; Motor Precision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Connect the Dots is an empirical test of ocular visual search velocity, spatial pathfinding, and mouse motor precision governed by Fitts&apos;s Law. Navigating sequentially between numbered coordinates requires rapid eye saccades to locate the next numerical vertex, followed by ballistic mouse acceleration and fine proprioceptive deceleration to trigger the target dot without overshoot errors.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Strict Order</div>
                <div className="text-xs text-muted-foreground">1 → 2 → 3 → N</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Fitts&apos;s Law</div>
                <div className="text-xs text-muted-foreground">Distance vs Width Math</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">&lt; 400ms</div>
                <div className="text-xs text-muted-foreground">Pro Target Acquisition</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Vector Loop</div>
                <div className="text-xs text-muted-foreground">Gestalt Art Closure</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because modern gaming aim trainers (like KovaaK&apos;s or Aim Lab) isolate the exact same target-switching motor patterns, playing Connect the Dots serves as an engaging, stress-free routine to build fine motor cursor dexterity.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Complete Connect the Dots in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {connectDotsHowToSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{step.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: GEO Cognitive & Real-World Benefits ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Ocular Saccadic Eye Movements
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Scanning non-linear numbers across a 2D plane exercises the frontal eye fields (FEF) and superior colliculus, boosting reading scanning speed and visual search efficiency.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                FPS Flick Aim &amp; Micro-Adjustment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Target switching between scattered dots mirrors tactical shooter flick aim. Players learn to accelerate across open space and decelerate cleanly without overshooting target hitboxes.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Sequential Number Working Memory
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Holding the active target index (e.g. &ldquo;seeking 17 next&rdquo;) while filtering out distracting nearby numbers trains executive attentional filtering and working memory capacity.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Gestalt Perceptual Anticipation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The human brain craves visual closure. Anticipating the hidden illustration before connecting all dots activates right-hemisphere holistic pattern synthesis.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Vertex Density & Latency ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Vertex Density &amp; Path Acquisition Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Puzzle Tier</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Vertex Count</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Average Search Saccade</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Target Completion Pace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Introductory</td>
                    <td className="py-2.5 px-3 font-mono">10 – 20 Dots</td>
                    <td className="py-2.5 px-3">Direct adjacent linear paths</td>
                    <td className="py-2.5 px-3">&lt; 15 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Intermediate</td>
                    <td className="py-2.5 px-3 font-mono">21 – 40 Dots</td>
                    <td className="py-2.5 px-3">Cross-quadrant ocular jumps</td>
                    <td className="py-2.5 px-3">20 – 40 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Advanced</td>
                    <td className="py-2.5 px-3 font-mono">41 – 60 Dots</td>
                    <td className="py-2.5 px-3">High vertex density with visual clustering</td>
                    <td className="py-2.5 px-3">45 – 90 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Master Illustration</td>
                    <td className="py-2.5 px-3 font-mono">60+ Dots</td>
                    <td className="py-2.5 px-3">Intricate vector outlines &amp; curves</td>
                    <td className="py-2.5 px-3">90+ seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Performance Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Pathfinding Speed &amp; Accuracy Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating visual search latency and pointer deceleration efficiency:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">&gt; 1.5s / Dot</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Casual Searcher</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Scans the screen sequentially row by row. Pauses at each vertex to figure out which direction the next number lies.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">0.8s – 1.4s / Dot</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Proficient Tracker</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Smooth cursor motion. Spots the next dot while the current line is being completed, minimizing hesitations.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">0.4s – 0.7s / Dot</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Precision Navigator</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rapid ballistic mouse flicks. Exceptional peripheral vision locates upcoming numbers 2 to 3 steps ahead.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">&lt; 0.4s / Dot</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 1% speed. Lightning-fast ocular saccades, zero overshoot errors, and fluid sub-second vector drawing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 6: Actionable Improvement Tips ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-primary" />
              4 Proven Tips to Accelerate Dot Connection Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Use Peripheral Vision for Pre-Targeting
                </div>
                <p className="text-xs leading-relaxed">
                  While your mouse is traveling to dot #8, your eyes should already be hunting for dot #9. Pre-targeting cuts transition delay to zero.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Anticipate the Object Contour
                </div>
                <p className="text-xs leading-relaxed">
                  If the emerging shape looks like a bicycle or animal, use your anatomical intuition to guess where the next line must logically flow.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Optimize Mouse Sensitivity
                </div>
                <p className="text-xs leading-relaxed">
                  If you frequently overshoot target vertices, your mouse DPI is too high. Moderate DPI (800–1200) balances fast sweeps with crisp stopping precision.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Keep an Unbroken Smooth Drag Rhythm
                </div>
                <p className="text-xs leading-relaxed">
                  Avoid lifting your finger or pausing after every point. Move in one uninterrupted flowing dance from vertex to vertex.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 7: AEO FAQ Accordion ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
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

        {/* ── Section 8: Related Cognitive & Aim Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Visual Precision &amp; Aim Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your hand-eye coordination, reaction timing, and visual motor control:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/aim-trainer" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Aim Trainer</span>
                <span className="text-xs text-muted-foreground mt-1">Reflex mouse flick target tracking →</span>
              </Link>
              <Link href="/drawing-pad" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Drawing Pad</span>
                <span className="text-xs text-muted-foreground mt-1">Digital sketchpad canvas &amp; doodling →</span>
              </Link>
              <Link href="/reaction-time-test" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Reaction Time</span>
                <span className="text-xs text-muted-foreground mt-1">Millisecond neurological benchmark →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
