
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Trophy, Gamepad2, Star, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CpsSpeedTest",
  description: "Learn about the mission of CpsSpeedTest — the ultimate free destination for 30+ skill-based browser games. Fast, accessible, and fun.",
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  { value: "30+", label: "Free Games", icon: <Gamepad2 className="w-6 h-6 text-primary" /> },
  { value: "1M+", label: "Tests Taken", icon: <Zap className="w-6 h-6 text-primary" /> },
  { value: "100%", label: "Free Access", icon: <Heart className="w-6 h-6 text-primary" /> },
  { value: "6", label: "Game Categories", icon: <Star className="w-6 h-6 text-primary" /> },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          About CpsSpeedTest
        </h1>
        <p className="text-muted-foreground mt-3 text-lg sm:text-xl max-w-xl mx-auto">
          Sharpening skills, one click at a time — completely free, forever.
        </p>
      </header>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card/50 border border-border/20 rounded-2xl p-5 text-center hover:border-primary/40 transition-colors"
          >
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
            <p className="text-muted-foreground leading-relaxed">
              Our mission at CpsSpeedTest is to provide a fun, engaging, and accessible platform for users of all ages to test, improve, and track their skills. We believe that skill development should be an enjoyable experience, and our diverse collection of games — from click speed and reaction time to memory and typing — is designed to be both entertaining and educational.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Zap className="text-primary w-5 h-5" />
              What We Offer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              CpsSpeedTest is more than just a click test. We host 30+ skill-based challenges spanning clicking, typing, memory, strategy, and creative categories. Whether you are a competitive gamer improving your APM, a student building typing speed, or someone who loves brain teasers, you will find a challenge here.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center gap-3 justify-center">
            <Users className="text-primary w-5 h-5" />
            Our Community
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-4 max-w-2xl mx-auto text-center leading-relaxed">
          <p>
            We are a passionate team of developers and gamers who believe in the power of practice. CpsSpeedTest was founded as a simple CPS tool and has grown into a vibrant platform with millions of tests completed and a growing global community.
          </p>
          <p>
            We are committed to keeping this platform 100% free with no paywalls, no pop-ups, and no mandatory account required. Non-intrusive advertising helps support server costs and ongoing feature development. Thank you for being a part of our journey — now, let the games begin!
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Trophy className="text-primary w-5 h-5" />
            Our Promise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Always free — no paywalls, no subscriptions",
              "No mandatory account creation",
              "Lightweight, non-intrusive advertising that respects your user experience",
              "Regular new games and improvements",
              "Fast, responsive, mobile-friendly design",
              "Honest, accurate skill measurement tools",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Star className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

