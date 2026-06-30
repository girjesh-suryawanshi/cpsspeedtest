import { GameSEO } from "@/components/game-seo";
import { TypeRacer } from "@/components/games/type-racer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speed Typer - 30s Typing Race | CpsSpeedTest",
  description: "Test your typing speed! See how many Words Per Minute (WPM) you can type in this 30-second speed typing test.",
};

export default function TypeRacerPage() {
  return (
    <>
      <GameSEO 
        name="Speed Typer"
        description="Test your typing speed! See how many Words Per Minute (WPM) you can type in this 30-second speed typing test."
        url="https://www.cpsspeedtest.com/type-racer"
        faqs={[
  {
    "question": "What is Speed Typer?",
    "answer": "Test your typing speed! See how many Words Per Minute (WPM) you can type in this 30-second speed typing test."
  },
  {
    "question": "How do I play Speed Typer?",
    "answer": "You can play Speed Typer directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
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
