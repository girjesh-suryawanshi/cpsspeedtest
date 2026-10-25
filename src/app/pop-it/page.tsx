import { GameSEO } from "@/components/game-seo";
import { PopIt } from "@/components/games/pop-it";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pop-It Simulator - ASMR Bubble Wrap & Stress Relief | CpsSpeedTest",
  description: "Pop the digital silicone bubbles! A relaxing, hyper-casual ASMR Pop-It simulator to relieve stress, practice mouse coordination, and satisfy clicking impulses.",
  keywords: ['pop-it simulator', 'bubble wrap game', 'asmr clicker', 'stress relief game', 'fidget toy online'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/pop-it',
  },
};

const popItFaqs = [
  {
    question: "What is the Pop-It Simulator?",
    answer: "The Pop-It Simulator is an interactive sensory toy recreation that mimics the tactile and acoustic feedback of silicone bubble fidget toys directly in the web browser."
  },
  {
    question: "Does the Pop-It game track lifetime pops?",
    answer: "Yes, every popped bubble increments a counter preserved in browser local storage, providing visual feedback and relaxing sound cues with each press."
  },
  {
    question: "How do I reset the Pop-It board?",
    answer: "Once all bubbles on the board are popped, the grid automatically resets, allowing continuous fidgeting without navigating away."
  }
];

export default function PopItPage() {
  return (
    <>
      <GameSEO 
        name="Pop-It Simulator"
        description="Pop the bubbles! A relaxing, hyper-casual ASMR Pop-It simulator to relieve stress and satisfy your clicking urge."
        url="https://www.cpsspeedtest.com/pop-it"
        faqs={popItFaqs}
        category="CasualGame"
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Pop-It Simulator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sometimes you just need to click something satisfying. Pop the silicone bubbles in this digital ASMR experience!
        </p>
      </div>

      <div className="py-8">
        <PopIt />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>Why Play Pop-It?</h2>
        <p>
          Pop-It toys became incredibly viral for their satisfying sensory feedback. Our digital Pop-It Simulator recreates that satisfying "click" and visual indentation, serving as the perfect micro-break during a long day of typing or gaming.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Satisfying visual feedback when a bubble is popped.</li>
          <li>Auto-reset when you clear the entire board.</li>
          <li>Tracks your total lifetime pops!</li>
        </ul>
      </div>
    </div>
    </>
  );
}
