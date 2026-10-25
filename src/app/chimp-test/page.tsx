import { GameSEO } from "@/components/game-seo";
import { ChimpTest } from "@/components/chimp-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Brain, Sparkles, Activity, Eye, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Chimp Test – Working Memory & Photographic Recall Challenge | CpsSpeedTest',
  description: 'Test your spatial working memory with the famous Chimp Test, inspired by the Kyoto University Ayumu chimpanzee memory study. Can you outperform a chimpanzee in photographic recall?',
  keywords: ['chimp test', 'chimpanzee memory test', 'ayumu test', 'working memory test', 'spatial memory test', 'photographic memory test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/chimp-test',
  },
};

const chimpFaqs = [
  {
    question: "What is the scientific origin of the Chimp Test?",
    answer: "The Chimp Test is based on groundbreaking 2007 cognitive research at Kyoto University's Primate Research Institute. A young chimpanzee named Ayumu could glance at numbers 1 through 9 scattered on a touch screen for just 65 milliseconds and recall their exact sequential positions with 90% accuracy, vastly outperforming university students."
  },
  {
    question: "Why do chimpanzees outperform humans in working memory recall?",
    answer: "According to the 'Cognitive Trade-Off Hypothesis' proposed by primatologist Tetsuro Matsuzawa, humans evolved complex language, symbolic thinking, and abstract reasoning by sacrificing the brain's raw short-term eidetic (photographic) spatial memory capacity retained by primates for rapid tree navigation and predator detection."
  },
  {
    question: "What is an average human score on the Chimp Test?",
    answer: "Most adult humans can remember 7 to 9 numbers reliably, matching Miller's Law of short-term memory span (7 ± 2 items). Reaching 10 or more numbers requires advanced mental chunking and spatial visualization."
  },
  {
    question: "How can I improve my score on the Chimp Test?",
    answer: "Trace a continuous imaginary line connecting numbers 1 through 5 before clicking, group numbers into geometric clusters (triangles or squares), and maintain a wide, relaxed focus to engage your peripheral vision rather than scanning one number at a time."
  }
];

export default function ChimpTestPage() {
  return (
    <>
      <GameSEO 
        name="Chimp Test – Photographic Memory Challenge"
        description="Test your spatial working memory with the famous Chimp Test, inspired by the Kyoto University Ayumu chimpanzee memory study. Can you outperform a chimpanzee in photographic recall?"
        url="https://www.cpsspeedtest.com/chimp-test"
        faqs={chimpFaqs}
        category="BrainGame"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Kyoto University Cognitive Memory Benchmark</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Chimp Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Are your visual reflexes and working memory sharper than a chimpanzee? Memorize the numbered squares, then click them in ascending order once they turn blank.
          </p>
        </header>

        {/* Core Interactive Tool */}
        <ChimpTest />

        {/* ── Section 1: The Science of Ayumu & The Cognitive Trade-off (AEO) ── */}
        <Card className="bg-card/70 border-border/20 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              The Ayumu Experiment: Can a Chimp Truly Beat a Human?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              In 2007, researchers at Kyoto University&apos;s Primate Research Institute led by <strong>Dr. Tetsuro Matsuzawa</strong> conducted an experiment that shocked evolutionary biologists and psychologists worldwide. They pitted human college students against an adolescent chimpanzee named <strong>Ayumu</strong> in a spatial working memory task.
            </p>
            <p>
              When numbers 1 through 9 flashed on the screen for a mere <strong>0.2 seconds (200ms)</strong>—and in some trials, an astonishing <strong>65 milliseconds</strong>—the human participants were completely overwhelmed, recalling barely 2 or 3 numbers. Ayumu, however, routinely touched all 9 hidden squares in precise numerical order with near-instantaneous speed and an 80–90% success rate.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground text-xs sm:text-sm space-y-2">
              <p className="font-bold text-primary flex items-center gap-1.5">
                🧠 The Cognitive Trade-off Hypothesis:
              </p>
              <p>
                Why did chimpanzees retain this photographic working memory while humans lost it? Evolutionary scientists believe our early ancestors traded eidetic spatial memory capacity in order to develop the neocortex expansion necessary for <strong>complex syntax, grammatical language, abstract tool manipulation, and social communication</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 2: GEO Score Tiers & Memory Benchmarks ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-primary" />
              Chimp Test Score Tiers & Human Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              In this test, the number of squares increases with each successful round. Here is how human performance distributes across levels:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🌱</div>
                <div className="font-bold text-foreground">4 – 6 Numbers</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase">Beginner Baseline</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Easily achieved by almost all adults. Fits comfortably within short-term working memory without strategy.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">⚡</div>
                <div className="font-bold text-foreground">7 – 9 Numbers</div>
                <div className="text-xs font-semibold text-blue-500 uppercase">Average Adult</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Aligns with Miller&apos;s Law (7 ± 2 items). Represents the standard biological capacity of the human phonological loop.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🎯</div>
                <div className="font-bold text-foreground">10 – 12 Numbers</div>
                <div className="text-xs font-semibold text-purple-500 uppercase">Exceptional Memory</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Top 5% of humans. Requires active spatial chunking, geometric pattern grouping, and high focus.</p>
              </div>

              <div className="p-4 rounded-xl border border-border/20 bg-background/50 space-y-1">
                <div className="text-2xl">🐵</div>
                <div className="font-bold text-foreground">13+ Numbers</div>
                <div className="text-xs font-semibold text-amber-500 uppercase">Ayumu Chimp Tier</div>
                <p className="text-xs text-muted-foreground leading-relaxed">True photographic eidetic recall. Rivals the legendary chimpanzee Ayumu&apos;s instinctive visual memory prowess.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Section 3: Mental Strategies to Boost Working Memory ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-primary" />
              4 Techniques to Score Higher on the Chimp Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Because the human brain cannot naturally hold 12 discrete unassociated coordinates simultaneously, high scorers use cognitive compression techniques:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Mental Constellation Mapping:</strong> Connect the positions of numbers 1, 2, 3, and 4 into a geometric shape (e.g., a lightning bolt or triangle) and numbers 5, 6, 7 into a second distinct shape. Remembering two shapes is vastly easier than memorizing 7 coordinates.
              </li>
              <li>
                <strong className="text-foreground">Pre-Route Tracing:</strong> Before clicking square #1 (which turns the rest blank), physically or mentally trace your finger across the first 4 numbers. Let your muscle memory execute the beginning of the sequence.
              </li>
              <li>
                <strong className="text-foreground">Soft Focus / Peripheral Scanning:</strong> Avoid darting your eyes frantically across every cell. Keep your vision centered on the middle of the grid to allow your peripheral rods to capture the overall spatial layout at once.
              </li>
              <li>
                <strong className="text-foreground">Pair with Reflex Training:</strong> Quick decision-making reduces cognitive decay. Practice reflex speed on our <Link href="/reaction-time-test" className="text-primary hover:underline font-semibold">Reaction Time Test</Link> or train visual sequence recognition on <Link href="/simon-says" className="text-primary hover:underline font-semibold">Simon Says</Link>.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Section 4: Frequently Asked Questions (AEO) ── */}
        <Card className="bg-card/70 border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="divide-y divide-border/20">
              {chimpFaqs.map((faq, index) => (
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
