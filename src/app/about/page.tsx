
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Trophy } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CpsSpeedTest",
  description: "Learn about the mission of CpsSpeedTest, the ultimate destination for skill-based browser games designed to test and improve your abilities.",
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-foreground tracking-tight">
          About CpsSpeedTest
        </h1>
        <p className="text-muted-foreground mt-3 text-xl">
          Sharpening skills, one click at a time.
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Target className="text-primary"/> Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our mission at CpsSpeedTest is to provide a fun, engaging, and accessible platform for users of all ages to test, improve, and track their skills. We believe that skill development should be an enjoyable experience, and our diverse collection of games—from click speed and reaction time to memory and typing—is designed to be both entertaining and educational.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Zap className="text-primary"/> What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>CpsSpeedTest is more than just a click test. We host a wide variety of skill-based challenges that cater to different interests. Whether you're a gamer looking to improve your APM and accuracy, a student aiming to type faster, or someone who just loves a good brain-teaser, you'll find something here to challenge and entertain you.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full mb-12">
        <CardHeader className="text-center">
            <CardTitle className="flex items-center gap-3 justify-center"><Users className="text-primary"/> Our Community</CardTitle>
            <CardDescription>Built for players, by players.</CardDescription>
        </CardHeader>
        <CardContent className="text-lg space-y-4 text-center max-w-3xl mx-auto">
            <p>We are a small team of passionate developers and gamers who believe in the power of practice. We started CpsSpeedTest as a simple tool and have been thrilled to see it grow into a vibrant community. We are committed to creating a user-friendly environment where you can compete with yourself, track your progress on our leaderboards, and have a great time doing it.</p>
            <p>Thank you for being a part of our journey. Now, let the games begin!</p>
        </CardContent>
      </Card>
    </div>
  );
}
