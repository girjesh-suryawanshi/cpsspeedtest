import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Trophy, Gamepad2, Star, Heart, ShieldCheck, Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CpsSpeedTest - Mission, Standards & Architecture",
  description: "Learn about CpsSpeedTest — an independent free web platform dedicated to high-precision input speed testing, cognitive benchmarks, and educational gaming guides.",
  alternates: {
    canonical: "https://www.cpsspeedtest.com/about",
  },
};

const stats = [
  { value: "45+", label: "In-House Tools & Games", icon: <Gamepad2 className="w-6 h-6 text-primary" /> },
  { value: "±1ms", label: "Hardware Clock Precision", icon: <Zap className="w-6 h-6 text-primary" /> },
  { value: "100%", label: "Free · No Account Required", icon: <Heart className="w-6 h-6 text-primary" /> },
  { value: "7", label: "Diverse Skill Categories", icon: <Star className="w-6 h-6 text-primary" /> },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="text-center mb-12 space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          About CpsSpeedTest
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Accurate input measurement, cognitive skill testing, and actionable gaming benchmarks — accessible to everyone.
        </p>
      </header>

      {/* Verified Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card/50 border border-border/20 rounded-2xl p-5 text-center hover:border-primary/40 transition-colors"
          >
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="text-primary w-5 h-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              CpsSpeedTest was created to provide gamers, typists, and computer users with transparent, high-precision tools to measure and improve their physical input cadence and cognitive reflexes. We believe performance measurement should be honest, accessible, and grounded in real browser APIs—not arbitrary numbers.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Zap className="text-primary w-5 h-5" />
              What Makes Us Different
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Unlike arcade aggregators that host external iframes of unknown origin, every single game and tool on CpsSpeedTest is built in-house using modern React, HTML5 Canvas 2D, and Web Audio APIs. Our CPS tools utilize high-resolution <code className="text-primary text-xs font-mono">performance.now()</code> hardware clocks to prevent timer drift.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full mb-8 bg-card/60 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <ShieldCheck className="text-primary w-5 h-5" />
            Editorial Integrity & Standards
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm sm:text-base leading-relaxed">
          <p>
            Our educational guides and tutorials are written by our in-house technical team. We evaluate physical input switches, debounce delay algorithms, and ergonomics based on manufacturer datasheets and empirical testing.
          </p>
          <p>
            We strictly reject fabricated traffic metrics, fictional author personas, and misleading claims. If you notice any technical discrepancy or have a suggestion, we encourage you to contact our editorial desk at{" "}
            <a href="mailto:contact@cpsspeedtest.com" className="text-primary hover:underline font-semibold">
              contact@cpsspeedtest.com
            </a>.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Trophy className="text-primary w-5 h-5" />
            Our Core Principles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
            {[
              "100% Free Access — No paywalls, no subscriptions, no forced account creation",
              "Local-First Privacy — High scores and personal bests stay on your device unless you explicitly submit to the public leaderboard",
              "Sub-Millisecond Timing — High-resolution performance APIs eliminate inaccurate timer drift",
              "Zero Third-Party Iframes — Safe, responsive, lightweight code built directly in our repository",
              "Accessible Everywhere — Optimized for desktop mice, mechanical keyboards, laptops, and mobile touchscreens",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
