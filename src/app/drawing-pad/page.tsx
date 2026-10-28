import { GameSEO } from "@/components/game-seo";
import { DrawingPad } from "@/components/drawing-pad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Paintbrush, Trophy, Activity, Palette, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Drawing Pad – Online Digital Sketching, Brush Canvas & Doodling | CpsSpeedTest',
  description: 'Unleash your creativity with our free browser Drawing Pad. Sketch, paint, doodle with customizable color palettes, dynamic brush stroke sizes, and responsive eraser tools.',
  keywords: ['drawing pad', 'online drawing canvas', 'digital sketchpad', 'free paint tool online', 'doodle pad browser', 'html5 canvas drawing', 'brush sketch tool', 'mouse dexterity drawing'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/drawing-pad',
  },
  openGraph: {
    title: 'Drawing Pad – Free Online Digital Sketching Canvas',
    description: 'Sketch, doodle, and illustrate on a responsive HTML5 digital canvas with customizable brush sizes and rich color palettes.',
    url: 'https://www.cpsspeedtest.com/drawing-pad',
    type: 'website',
  },
};

const drawingPadHowToSteps = [
  {
    name: "Select Your Preferred Brush Color",
    text: "Click on any color swatch in the palette bar to assign your active drawing hue, or pick white/light tones for background blending."
  },
  {
    name: "Adjust the Stroke Thickness Slider",
    text: "Slide the brush size controller from 1px (fine line sketching, linework) up to 30px+ (bold coloring and silhouette fills)."
  },
  {
    name: "Begin Drawing with Smooth Mouse/Touch Gestures",
    text: "Click and hold the left mouse button, or glide your stylus/finger across the responsive HTML5 canvas to lay down fluid vector strokes."
  },
  {
    name: "Deploy the Precision Eraser Tool",
    text: "Toggle Eraser mode to gently sculpt shapes, correct stray lines, or carve out negative space highlights using the brush diameter slider."
  },
  {
    name: "Experiment with Color Layering & Shading",
    text: "Switch between contrasting shades to build depth, crosshatching textures, and vibrant visual hierarchy directly inside the browser."
  },
  {
    name: "Clear or Save Your Digital Creation",
    text: "Use the instant Clear Canvas control to start fresh on a pristine slate, or capture your artwork using standard browser screen clipping."
  }
];

const drawingPadFaqs = [
  {
    question: "What creative controls are available on the Drawing Pad?",
    answer: "The Drawing Pad provides a vibrant spectrum color palette, a continuous brush stroke thickness slider, a precision eraser mode that shares brush sizing, and a complete one-click canvas clear button."
  },
  {
    question: "How does the canvas render smooth lines during rapid mouse movement?",
    answer: "The tool utilizes HTML5 2D Canvas rendering with anti-aliasing and sub-pixel path stroke smoothing, interpolating coordinates between successive mousemove events to prevent jagged or broken strokes even during high-velocity gestures."
  },
  {
    question: "Can I use Drawing Pad with a stylus or graphics tablet?",
    answer: "Yes, the canvas fully supports Pointer Events, responding seamlessly to passive touch, capacitive styluses, graphics tablets (Wacom, Huion), and standard desktop mouse input."
  },
  {
    question: "How does freeform digital sketching train motor coordination?",
    answer: "Drawing requires continuous proprioceptive feedback, fine motor wrist stabilization, and smooth visual tracking. Practicing deliberate line strokes improves fine motor control and mouse cursor stability for competitive gaming."
  },
  {
    question: "What is the best way to erase small mistakes without clearing the entire canvas?",
    answer: "Click the eraser icon and adjust the brush size slider to a narrow diameter (2px–4px) to perform detailed surgical corrections without disturbing surrounding artwork."
  },
  {
    question: "Is there any software download or plugin required to use this canvas?",
    answer: "No. The Drawing Pad runs 100% client-side in your modern web browser using native HTML5 and WebGL canvas acceleration, with zero plugins or installation necessary."
  },
  {
    question: "How does digital doodling benefit stress reduction and cognitive focus?",
    answer: "Psychological research demonstrates that unstructured doodling activates the brain's default mode network (DMN), lowering cortisol levels, calming anxiety, and improving information retention during passive listening."
  }
];

export default function DrawingPadPage() {
  return (
    <>
      <GameSEO 
        name="Drawing Pad"
        description="Unleash your creativity! Use intuitive brush and color controls to sketch, doodle, and paint on our free online canvas."
        url="https://www.cpsspeedtest.com/drawing-pad"
        faqs={drawingPadFaqs}
        howToSteps={drawingPadHowToSteps}
        category="CasualGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Paintbrush className="w-3.5 h-3.5" />
            <span>Digital Canvas &amp; Motor Coordination</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Drawing Pad
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Freeform digital sketchpad. Create illustrations, practice mouse cursor precision, and express creative ideas with customizable brushes and vivid color palettes.
          </p>
        </header>

        {/* Interactive Drawing Pad Component */}
        <div className="py-2">
          <DrawingPad />
        </div>

        {/* ── Section 1: Digital Canvas Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              HTML5 Canvas Mechanics &amp; Sub-Pixel Stroke Smoothing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              The Drawing Pad is a client-side digital illustration canvas powered by the HTML5 2D Canvas API. Utilizing native vector path interpolation, quadratic curve smoothing, and hardware-accelerated anti-aliasing, the pad translates rapid cursor and touch pointer events into fluid, continuous brush strokes with zero input lag.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">60 FPS</div>
                <div className="text-xs text-muted-foreground">Smooth Canvas Refresh</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">1px – 30px</div>
                <div className="text-xs text-muted-foreground">Dynamic Stroke Range</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Pointer Events</div>
                <div className="text-xs text-muted-foreground">Mouse, Stylus &amp; Touch</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Zero Latency</div>
                <div className="text-xs text-muted-foreground">Direct Client Execution</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Beyond artistic illustration, freehand mouse sketching serves as an excellent fine motor training exercise for competitive gamers. Controlling cursor velocity across tight curves develops tactile sensorimotor stabilization in the wrist and forearm.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Master the Drawing Pad in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {drawingPadHowToSteps.map((step, idx) => (
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
                Default Mode Network &amp; Stress Relief
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Spontaneous freehand sketching induces non-linear thinking, calming an overactive nervous system and stimulating subconscious creative synthesis and emotional decompression.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Fine Motor Control &amp; Mouse Stability
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Drawing smooth circular arcs and straight lines with a desktop mouse forces you to micro-adjust cursor positioning, dramatically improving hand-eye coordination for precision tactical gaming.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Visuospatial Proportion &amp; Form Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Translating 3D concepts into 2D canvas lines trains the parietal lobe to analyze spatial relationships, foreshortening, and geometric symmetry.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Rapid Ideation &amp; UI Wireframing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Product designers, software architects, and educators can sketch instant conceptual diagrams, UI wireframes, and mathematical schematics without loading bulky design software.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Canvas Tools & Technical Specs ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Digital Canvas Specifications &amp; Interaction Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Tool / Mode</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Parameter Range</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Rendering Mechanism</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Primary Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Fine Line Pen</td>
                    <td className="py-2.5 px-3">1px – 3px</td>
                    <td className="py-2.5 px-3 font-mono">ctx.lineWidth = 2</td>
                    <td className="py-2.5 px-3">Intricate linework, text annotation, contour outlines</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Medium Brush</td>
                    <td className="py-2.5 px-3">4px – 12px</td>
                    <td className="py-2.5 px-3 font-mono">ctx.lineWidth = 8</td>
                    <td className="py-2.5 px-3">Freehand sketching, calligraphic strokes, doodling</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Thick Marker</td>
                    <td className="py-2.5 px-3">13px – 30px</td>
                    <td className="py-2.5 px-3 font-mono">ctx.lineWidth = 24</td>
                    <td className="py-2.5 px-3">Silhouette fills, backdrop washes, bold highlights</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Precision Eraser</td>
                    <td className="py-2.5 px-3">Synchronized diameter</td>
                    <td className="py-2.5 px-3 font-mono">ctx.strokeStyle = &apos;#ffffff&apos;</td>
                    <td className="py-2.5 px-3">Negative space sculpting and surgical stroke correction</td>
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
              Fine Motor Mouse Drawing Proficiency Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Drawing smooth geometric shapes using a standard desktop mouse reflects high-level fine motor sensorimotor coordination:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Beginner</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Erratic Strokes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Struggles with jagged lines due to high mouse DPI. Lacks micro-correction control during curved gestures.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Intermediate</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Controlled Cursor</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Smooth linear strokes. Able to draw clean geometric polygons and basic recognizable cartoon characters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Advanced</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Digital Illustrator</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fluid circular contours, controlled line weight variation, and clean negative space eraser sculpting.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Master Stylist</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exceptional wrist stabilization. Produces near-vector precision freehand art using mouse or graphics tablet.
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
              4 Tips for Smoother Freehand Digital Sketching
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Lower Your Mouse DPI for Finer Line Control
                </div>
                <p className="text-xs leading-relaxed">
                  High sensitivity (1600+ DPI) amplifies minor hand tremors into jagged canvas lines. Lower your mouse DPI to 800 or 400 for buttery smooth curves.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Draw from the Elbow Rather Than the Wrist
                </div>
                <p className="text-xs leading-relaxed">
                  Locking your wrist and initiating sweeping strokes from your forearm and elbow produces natural, confident long arcs without hand fatigue.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Sculpt with the Eraser Tool
                </div>
                <p className="text-xs leading-relaxed">
                  Don&apos;t worry if a thick stroke extends past your intended border. Switch to a 3px eraser and carve away the excess to achieve crisp outlines.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Build Light Values Before Dark Contrast
                </div>
                <p className="text-xs leading-relaxed">
                  Lay down broad, lighter strokes first to establish overall silhouette proportions before applying high-contrast dark linework.
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
              Frequently Asked Questions About Drawing Pad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {drawingPadFaqs.map((faq, index) => (
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

        {/* ── Section 8: Related Creative & Motor Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Creative &amp; Precision Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your fine motor control, pixel design, and spatial coordination across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/block-builder" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Block Builder</span>
                <span className="text-xs text-muted-foreground mt-1">Pixel art maker &amp; sprite designer →</span>
              </Link>
              <Link href="/connect-the-dots" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Connect the Dots</span>
                <span className="text-xs text-muted-foreground mt-1">Visual pathfinding &amp; precision clicker →</span>
              </Link>
              <Link href="/aim-trainer" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Aim Trainer</span>
                <span className="text-xs text-muted-foreground mt-1">FPS mouse flick &amp; reflex target test →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
