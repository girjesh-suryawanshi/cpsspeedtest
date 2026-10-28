import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Games & Tools – Browse 45+ Free Browser Skill Games | CpsSpeedTest",
  description:
    "Explore CpsSpeedTest's complete collection of 45+ free browser games and tools — click speed tests, typing challenges, memory benchmarks, puzzles, and creative sandboxes. No downloads, no accounts required.",
  keywords: [
    "free browser games",
    "click speed games",
    "typing games online",
    "memory test games",
    "puzzle games online",
    "cps test games",
    "brain games free",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/games",
  },
  openGraph: {
    title: "All Games & Tools – 45+ Free Browser Skill Games | CpsSpeedTest",
    description:
      "Browse CpsSpeedTest's full catalog: click speed tests, typing challenges, cognitive benchmarks, strategy puzzles, and creative tools — all free, in-browser, no account needed.",
    url: "https://www.cpsspeedtest.com/games",
  },
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
