import { GameSEO } from "@/components/game-seo";
import { BlockBuilder } from "@/components/block-builder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Box, Trophy, Activity, Palette, Brain, HelpCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Target, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Block Builder – Digital Pixel Art, Voxel Grid & Sprite Studio | CpsSpeedTest',
  description: 'Create pixel art and block designs in our free browser Block Builder. Paint color swatches, master 8-bit sprite design, dithering, and grid ergonomics.',
  keywords: ['block builder', 'pixel art maker', 'online voxel editor', 'sprite designer', 'grid painting tool', 'pixel art studio', 'browser block builder', '8 bit sprite maker'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/block-builder',
  },
  openGraph: {
    title: 'Block Builder – Digital Pixel Art & Voxel Studio',
    description: 'Design pixel art sprites and voxel block creations on an interactive digital canvas. Master color palettes and retro 8-bit design.',
    url: 'https://www.cpsspeedtest.com/block-builder',
    type: 'website',
  },
};

const blockBuilderHowToSteps = [
  {
    name: "Choose a Palette Swatch",
    text: "Select a color from the vibrant palette bar to load into your active painting cursor, or pick neutral grays for outlines."
  },
  {
    name: "Click or Drag to Paint Grid Cells",
    text: "Click an individual cell to place a discrete colored block, or hold down the mouse button and drag across the canvas to draw continuous pixel paths."
  },
  {
    name: "Utilize the Precision Eraser Mode",
    text: "Toggle Eraser mode to restore selected cells back to transparent/empty background states without altering adjacent blocks."
  },
  {
    name: "Deploy Flood-Fill for Large Areas",
    text: "Use the paint bucket fill tool to flood enclosed bounded regions with a solid uniform color instantly."
  },
  {
    name: "Apply Dithering for Gradients and Shading",
    text: "Alternate two contrasting shades in an alternating checkerboard pattern to simulate intermediate lighting gradients and texture."
  },
  {
    name: "Export or Reset the Grid Canvas",
    text: "Inspect your finished 8-bit or 16-bit retro sprite, save your design via screenshot, or reset the grid to begin a new voxel creation."
  }
];

const blockBuilderFaqs = [
  {
    question: "What tools and features are included in Block Builder?",
    answer: "Block Builder features a full chromatic color palette selector, single-click and drag-to-paint block placement, precision eraser mode, flood-fill paint bucket for rapid background generation, and an instant canvas reset tool."
  },
  {
    question: "What is pixel art and how does it differ from digital painting?",
    answer: "Pixel art is a digital art discipline where images are built at the individual pixel or block level. Unlike smooth vector or high-resolution digital painting with anti-aliasing brushes, pixel art relies on precise placement of individual square units, strict color palette limits, and manual dithering to convey depth and lighting."
  },
  {
    question: "What is 'dithering' in pixel art?",
    answer: "Dithering is a technique where two contrasting colors are interleaved in a checkerboard or crosshatch pattern to create the optical illusion of a third intermediate tone or smooth gradient, originating from retro hardware with limited color palettes (like the NES or Game Boy)."
  },
  {
    question: "Does Block Builder support mouse drag-drawing?",
    answer: "Yes, you can click and hold your primary mouse button while dragging across the grid canvas to paint continuous lines and fill large shapes smoothly."
  },
  {
    question: "Can Block Builder be used to design game sprites?",
    answer: "Yes. The grid structure mirrors the standard 16x16, 24x24, and 32x32 sprite dimensions utilized in 2D retro indie game development, making it an excellent prototyping studio for character designs and environmental tiles."
  },
  {
    question: "How does grid-based pixel construction exercise spatial cognition?",
    answer: "Working within a rigid, low-resolution grid forces the brain to simplify complex organic shapes into minimal geometric silhouettes, developing high-level spatial abstraction and visual chunking."
  },
  {
    question: "Is Block Builder mobile-friendly?",
    answer: "Yes, the grid responds to tap and drag touch gestures on smartphones, tablets, and desktop mice with responsive cell highlighting."
  }
];

export default function BlockBuilderPage() {
  return (
    <>
      <GameSEO 
        name="Block Builder"
        description="Let your imagination run wild! Create pixel art, designs, or sprites on our digital grid canvas. Free browser pixel art studio."
        url="https://www.cpsspeedtest.com/block-builder"
        faqs={blockBuilderFaqs}
        howToSteps={blockBuilderHowToSteps}
        category="CasualGame"
        lastUpdated="October 2026"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Box className="w-3.5 h-3.5" />
            <span>Pixel Art &amp; Voxel Grid Design</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Block Builder
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Create retro 8-bit sprites, voxel characters, and pixel art on an interactive digital canvas. Master color palettes, grid alignment, and manual dithering.
          </p>
        </header>

        {/* Interactive Block Builder Component */}
        <div className="py-2">
          <BlockBuilder />
        </div>

        {/* ── Section 1: Pixel Art Mechanics (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Art &amp; Discipline of Discrete Pixel Construction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="speakable-content">
              Block Builder is a browser-based pixel art and voxel sprite studio operating on a discrete 2D matrix. Unlike continuous vector illustration, pixel art requires every individual square cell to contribute meaningfully to silhouette readability, value shading, and color contrast. Utilizing low-resolution constraints reminiscent of classic 8-bit and 16-bit arcade gaming, players develop acute spatial abstraction and visual discipline.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Discrete Grid</div>
                <div className="text-xs text-muted-foreground">Matrix-Based Placement</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Drag &amp; Paint</div>
                <div className="text-xs text-muted-foreground">Continuous Mouse Input</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Full Palette</div>
                <div className="text-xs text-muted-foreground">Vibrant Color Swatches</div>
              </div>
              <div className="p-3 rounded-lg border border-border/20 bg-background/50 text-center space-y-0.5">
                <div className="text-lg font-bold text-foreground">Zero Latency</div>
                <div className="text-xs text-muted-foreground">Real-Time State Sync</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm">
              Because every block is rendered without anti-aliasing interpolation, artists achieve the iconic crisp retro aesthetic used in indie games like Minecraft, Terraria, and Stardew Valley.
            </p>
          </CardContent>
        </Card>

        {/* ── Section 2: Step-by-Step Solving Guide (HowTo) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-primary" />
              How to Create Pro Pixel Art in 6 Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blockBuilderHowToSteps.map((step, idx) => (
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
                Spatial Abstraction &amp; Simplification
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Rendering a human face or sword in just 16x16 blocks forces the brain to identify essential distinguishing features, training high-level artistic abstraction and visual chunking.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Retro Game Development Prototyping
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Game developers and modders can rapidly storyboard character sprites, tilemaps, and item icons directly inside the browser before importing into game engines like Unity or Godot.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Mindful Focus &amp; Meditative State
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Placing blocks methodically one by one creates a soothing, rhythmic feedback loop, reducing stress and inducing deep creative flow states similar to assembling Lego bricks or cross-stitching.
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Color Theory &amp; Value Contrast
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Limited palettes teach artists how to use hue-shifting (warm highlights and cool shadows) to convey three-dimensional volume without relying on blending blurs.
            </CardContent>
          </Card>
        </div>

        {/* ── Section 4: Deep Dive Table: Pixel Art Resolutions ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              Standard Pixel Grid Resolutions &amp; Technical Demands
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/30 bg-muted/40 text-left">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Resolution Standard</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Total Pixel Count</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Historical Platform</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Common Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-muted-foreground">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">16 × 16 Grid</td>
                    <td className="py-2.5 px-3 font-mono">256 Blocks</td>
                    <td className="py-2.5 px-3">NES, Game Boy, Pico-8</td>
                    <td className="py-2.5 px-3">RPG inventory icons, mini-sprites, terrain tiles</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">24 × 24 Grid</td>
                    <td className="py-2.5 px-3 font-mono">576 Blocks</td>
                    <td className="py-2.5 px-3">Sega Master System</td>
                    <td className="py-2.5 px-3">Medium creature designs, animated combat avatars</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">32 × 32 Grid</td>
                    <td className="py-2.5 px-3 font-mono">1,024 Blocks</td>
                    <td className="py-2.5 px-3">SNES, Game Boy Advance</td>
                    <td className="py-2.5 px-3">Detailed character portraits, bosses, UI elements</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">64 × 64 Grid</td>
                    <td className="py-2.5 px-3 font-mono">4,096 Blocks</td>
                    <td className="py-2.5 px-3">Neo Geo, Modern Indie</td>
                    <td className="py-2.5 px-3">Complex isometric environments and cinematic stills</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 5: GEO Difficulty & Design Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Pixel Art Skill Progression Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evaluating artistic mastery in low-resolution grid construction:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Beginner</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Flat Colors</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Creates simple 2D shapes without shading. Relies heavily on thick black borders and struggles with jagged diagonals.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">Intermediate</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Shaded Sprite</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Applies directional light sources. Uses 2 to 3 color ramp values per material and achieves clean 1-pixel line curves.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🔥</div>
                <div className="font-bold text-foreground">Advanced</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Voxel Artisan</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mastery of manual dithering patterns. Implements selective outlining (sel-out) and hue-shifted shadow gradients.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">Master Pixel Artist</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Grandmaster Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Flawless sub-pixel visual readability. Produces breathtaking retro game assets and intricate isometric scenes.
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
              4 Golden Rules for Crisp Pixel Art
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  Eliminate &ldquo;Jaggies&rdquo; on Curves
                </div>
                <p className="text-xs leading-relaxed">
                  Curves must step down predictably (e.g. 3 blocks, then 2 blocks, then 1 block). Inconsistent stepping (like 3-1-2-1) makes outlines look broken and amateurish.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  Avoid &ldquo;Pillow Shading&rdquo;
                </div>
                <p className="text-xs leading-relaxed">
                  Never shade inward from all borders toward the center like a puffed pillow. Establish one single light source (usually top-left) and shade consistently away from it.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  Use Hue Shifting for Realistic Depth
                </div>
                <p className="text-xs leading-relaxed">
                  Don&apos;t just add black to create shadows. Shift your hue towards cold blues or purples for shadows, and shift towards warm yellows for highlights.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1.5">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  Zoom Out Frequently to Check the Silhouette
                </div>
                <p className="text-xs leading-relaxed">
                  A great sprite is instantly recognizable from its raw outline alone. Check your drawing from a distance to ensure the silhouette is clear and readable.
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
              Frequently Asked Questions About Block Builder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {blockBuilderFaqs.map((faq, index) => (
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

        {/* ── Section 8: Related Creative & Logic Games ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Explore More Creative &amp; Spatial Games
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Continue testing your spatial design, fine motor control, and pattern assembly across our suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <Link href="/drawing-pad" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Drawing Pad</span>
                <span className="text-xs text-muted-foreground mt-1">Freehand digital sketchpad canvas →</span>
              </Link>
              <Link href="/sliding-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Sliding Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Permutation parity &amp; 15-puzzle →</span>
              </Link>
              <Link href="/jigsaw-puzzle" className="p-3 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Jigsaw Puzzle</span>
                <span className="text-xs text-muted-foreground mt-1">Visual tile swap &amp; image assembly →</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
