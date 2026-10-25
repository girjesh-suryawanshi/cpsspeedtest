import { GameSEO } from "@/components/game-seo";
import { DrawingPad } from "@/components/drawing-pad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Paintbrush, Trophy, Activity, Palette, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Drawing Pad – Online Digital Sketching, Brush Canvas & Doodling | CpsSpeedTest',
  description: 'Unleash your creativity with our free browser Drawing Pad. Sketch, paint, doodle with customizable color palettes, dynamic brush stroke sizes, and responsive eraser tools.',
  keywords: ['drawing pad', 'online drawing canvas', 'digital sketchpad', 'free paint tool online', 'doodle pad browser', 'html5 canvas drawing', 'brush sketch tool'],
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
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Paintbrush className="w-3.5 h-3.5" />
            <span>Responsive Digital Canvas &amp; Sketchpad Studio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Drawing Pad
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A free, clean digital sketchpad. Choose vibrant color swatches, calibrate your brush stroke diameter, and sketch, doodle, or illustrate with ultra-low latency.
          </p>
        </header>

        {/* Drawing Pad Interactive Studio */}
        <div className="py-2">
          <DrawingPad />
        </div>

        {/* ── Section 1: The Biomechanics of Motor Artistry (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Biomechanics of Digital Drawing: Arm vs. Wrist Articulation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In digital illustration and mechanical drafting, precision line work relies on proper motor kinetic chains. Beginners frequently draw exclusively through isolated wrist articulation, which limits stroke radius, causes premature tendon fatigue, and produces cramped, hesitant curves.
            </p>
            <p>
              Professional digital illustrators employ three distinct joint pivots:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Shoulder &amp; Elbow Pivoting:</strong> Used for long, sweeping structural curves, horizon lines, and confident silhouette boundaries. Moving from the shoulder maintains consistent curvature.
              </li>
              <li>
                <strong className="text-foreground">Wrist Pivoting:</strong> Reserved for medium-scale contours, hatching, and cross-shading across a 2-to-4 centimeter radius.
              </li>
              <li>
                <strong className="text-foreground">Finger Joint Articulation:</strong> Fine-tunes minute details, crosshair micro-adjustments, highlights, and eye reflections.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Creative Complexity & Session Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Digital Sketching Complexity Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              From quick warmup doodles to fully rendered digital art, explore your creative output:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">✏️</div>
                <div className="font-bold text-foreground">Warmup Doodle</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">1 – 2 Minutes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Quick gesture sketches, handwriting tests, and spontaneous geometric spirals to calibrate mouse friction and hand-eye sync.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎨</div>
                <div className="font-bold text-foreground">Character Concept</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">3 – 5 Minutes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Line-art figures, cartoon caricatures, and expressive faces utilizing multiple stroke weights and outline shading.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🖼️</div>
                <div className="font-bold text-foreground">Full Illustration</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">6 – 15 Minutes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Multi-colored landscapes, mechanical diagrams, and finished compositions with foreground, midground, and background depth.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Master Canvas</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">15+ Minutes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Elaborate digital artworks exhibiting advanced line-weight contrast, intricate hatching, and rich chromatic palettes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Line Weight & Palette Strategies ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Palette className="w-4 h-4 text-primary" />
                Line Weight Dynamics &amp; Hierarchy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Bold Exterior Outlines:</strong> Set the brush slider to 8px–12px for primary outer silhouettes to give your subject visual punch and separation from the canvas.
                </li>
                <li>
                  <strong className="text-foreground">Delicate Interior Details:</strong> Reduce the brush to 2px–3px for facial features, clothing folds, and fine texture hatching.
                </li>
                <li>
                  <strong className="text-foreground">Negative Space Erasing:</strong> Use the eraser tool to carve sharp, tapered points at the tips of lines, simulating professional calligraphy ink pens.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Creative &amp; Precision Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pair freehand drawing with pixel art design and mouse precision trainers:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/block-builder" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Block Builder</span>
                  <span className="text-primary font-mono">Pixel Art Voxel Studio →</span>
                </Link>
                <Link href="/aim-trainer" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Aim Trainer</span>
                  <span className="text-primary font-mono">Precision Target Acquisition →</span>
                </Link>
                <Link href="/connect-the-dots" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Connect the Dots</span>
                  <span className="text-primary font-mono">Sequential Path Tracing →</span>
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
      </div>
    </>
  );
}
