import { GameSEO } from "@/components/game-seo";
import { BlockBuilder } from "@/components/block-builder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Box, Trophy, Activity, Palette, HelpCircle, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Block Builder – Digital Pixel Art, Voxel Grid & Sprite Studio | CpsSpeedTest',
  description: 'Create pixel art and block designs in our free browser Block Builder. Paint color swatches, master 8-bit sprite design, dithering, and grid ergonomics.',
  keywords: ['block builder', 'pixel art maker', 'online voxel editor', 'sprite designer', 'grid painting tool', 'pixel art studio', 'browser block builder'],
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
        category="CasualGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Box className="w-3.5 h-3.5" />
            <span>Digital Pixel Art &amp; Voxel Grid Studio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Block Builder
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Construct vibrant pixel art, retro character sprites, and architectural voxel mosaics. Select custom color swatches, drag-paint blocks, and experiment with 8-bit digital creativity.
          </p>
        </header>

        {/* Block Builder Interactive Studio */}
        <div className="py-2">
          <BlockBuilder />
        </div>

        {/* ── Section 1: The Art & Geometry of Pixel Design (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              The Geometry of Pixel Art: Constraints Breed Creativity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In digital media history, <strong>pixel art</strong> emerged from early computer graphics hardware constraints (such as 8-bit microprocessors with limited VRAM). When an artist has only a modest grid of blocks and a curated color palette, every single square must carry intentional visual meaning.
            </p>
            <p>
              Creating compelling block art requires mastering three fundamental visual principles:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-foreground">Silhouette Clarity:</strong> Before adding interior details, establish a bold, recognizable outer silhouette. If the shape is identifiable in pure solid black, the sprite will be instantly readable when colored.
              </li>
              <li>
                <strong className="text-foreground">Consistent Light Source:</strong> Select a single light angle (conventionally top-left) and shade exposed top and left surfaces with brighter tints while casting darker shadow tones on bottom and right faces.
              </li>
              <li>
                <strong className="text-foreground">Clean Lines (No &quot;Jaggies&quot;):</strong> Curves should follow consistent stepping ratios (e.g. 3-2-1-2-3 pixels) rather than irregular zigzags to produce smooth optical contours.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Creative Complexity Tiers ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-primary" />
              Pixel Art Complexity &amp; Block Count Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              How intricate is your block construction? Compare your canvas against artistic complexity tiers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">Under 100 Blocks</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase">Minimalist Icon</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Basic geometric shapes, hearts, emoticons, and mini swords. Quick 2-minute visual experiments.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎨</div>
                <div className="font-bold text-foreground">100 – 499 Blocks</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Retro Game Sprite</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Classic 8-bit characters (Mario, Space Invaders, Pokémon monsters). Includes multi-color shading and outlines.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🏰</div>
                <div className="font-bold text-foreground">500 – 1,499 Blocks</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Voxel Architecture</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Isometric buildings, castle facades, and detailed environmental scenery with textured dither gradients.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">👑</div>
                <div className="font-bold text-foreground">1,500+ Blocks</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Master Mosaic Studio</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top 2% creative dedication. Elaborate pixel tapestries, complex lighting models, and fully realized digital art pieces.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Shading & Dithering Techniques ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Palette className="w-4 h-4 text-primary" />
                Color Harmony &amp; Contrast
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">Limit Your Palette:</strong> Restricting a design to 4–6 cohesive colors forces stronger visual contrast and creates a unified aesthetic.
                </li>
                <li>
                  <strong className="text-foreground">Hue Shifting:</strong> Instead of simply making shadows darker gray, shift shadow tones toward cool hues (blue/purple) and highlight tones toward warm hues (yellow/gold).
                </li>
                <li>
                  <strong className="text-foreground">Bucket Fill First:</strong> Use the paint bucket to apply a dark or saturated background before drawing foreground objects to evaluate contrast in real time.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Related Creative &amp; Spatial Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Explore other interactive creative canvases and spatial puzzle games:
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <Link href="/drawing-pad" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Drawing Pad</span>
                  <span className="text-primary font-mono">Freehand Canvas Art →</span>
                </Link>
                <Link href="/connect-the-dots" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Connect the Dots</span>
                  <span className="text-primary font-mono">Sequential Form Art →</span>
                </Link>
                <Link href="/jigsaw-puzzle" className="p-2.5 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 transition-colors flex justify-between items-center">
                  <span className="font-semibold text-foreground">Jigsaw Puzzle</span>
                  <span className="text-primary font-mono">Visual Tile Assembly →</span>
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
      </div>
    </>
  );
}
