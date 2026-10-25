import { GameSEO } from "@/components/game-seo";
import { TypeRacer } from "@/components/games/type-racer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speed Typer - 30-Second WPM Typing Speed Test | CpsSpeedTest",
  description: "Test your keyboard typing speed and accuracy. Find out your true Words Per Minute (WPM) and accuracy percentage in this intense 30-second typing sprint.",
  keywords: ['typing speed test', 'wpm test', 'speed typer', '30 second typing test', 'keyboard accuracy test'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/type-racer',
  },
};

const typeRacerFaqs = [
  {
    question: "How is Words Per Minute (WPM) calculated?",
    answer: "Standard typing speed formula defines one 'word' as 5 keystrokes (including spaces and punctuation). Gross WPM is `(total keystrokes / 5) / (elapsed seconds / 60)`. Net WPM penalizes uncorrected keystroke errors."
  },
  {
    question: "What is considered an above-average typing speed?",
    answer: "The global average typing speed is roughly 40 WPM. Professional transcribers, programmers, and competitive typists frequently exceed 75 to 100+ WPM with over 95% accuracy."
  },
  {
    question: "How can I improve typing speed without losing accuracy?",
    answer: "Maintain home-row finger placement (ASDF JKL;) and avoid glancing down at keyboard keycaps. Prioritizing rhythm and 98%+ accuracy allows muscle memory to accelerate naturally over time."
  }
];

export default function TypeRacerPage() {
  return (
    <>
      <GameSEO 
        name="Speed Typer"
        description="Test your typing speed! See how many Words Per Minute (WPM) you can type in this 30-second speed typing test."
        url="https://www.cpsspeedtest.com/type-racer"
        faqs={typeRacerFaqs}
        category="SkillGame"
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Speed Typer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          How fast can your fingers fly? Find out your exact WPM (Words Per Minute) in this intense 30-second typing sprint.
        </p>
      </div>

      <div className="py-8">
        <TypeRacer />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>What is a good typing speed?</h2>
        <p>
          The average typing speed is around 40 WPM (Words Per Minute). However, professionals and hardcore gamers often average between 70 to 120 WPM. Our 30-second Speed Typer test is designed to measure your burst speed.
        </p>
        <h3>How to improve</h3>
        <ul>
          <li><strong>Look at the screen:</strong> Try not to look down at your keyboard. Let your muscle memory guide you.</li>
          <li><strong>Posture:</strong> Keep your wrists slightly elevated and fingers resting gently on the home row (ASDF JKL;).</li>
          <li><strong>Accuracy over speed:</strong> At first, focus on hitting the right keys. Speed will naturally follow.</li>
        </ul>
      </div>
    </div>
    </>
  );
}
