import { GameSEO } from "@/components/game-seo";
import { SimonSays } from "@/components/games/simon-says";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simon Says - Audio/Visual Memory Test | CpsSpeedTest",
  description: "Test your sequential memory. Watch the pattern of lights and repeat it back. How long of a sequence can you remember?",
  keywords: ['simon says', 'memory test', 'sequential memory', 'pattern game', 'brain training'],
  alternates: { canonical: '/simon-says' },
};

export default function SimonSaysPage() {
  return (
    <>
      <GameSEO 
        name="Simon Says"
        description="Test your sequential memory. Watch the pattern of lights and repeat it back. How long of a sequence can you remember?"
        url="https://www.cpsspeedtest.com/simon-says"
        faqs={[
  {
    "question": "What is Simon Says?",
    "answer": "Test your sequential memory. Watch the pattern of lights and repeat it back. How long of a sequence can you remember?"
  },
  {
    "question": "How do I play Simon Says?",
    "answer": "You can play Simon Says directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Simon Says
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate test of your sequential memory. Watch the colors light up, and repeat the pattern exactly.
        </p>
      </div>

      <div className="py-8">
        <SimonSays />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>About Simon Says</h2>
        <p>
          Simon Says is a classic electronic game of memory skill. The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.
        </p>
        <h3>Benefits of playing</h3>
        <ul>
          <li><strong>Short-term memory:</strong> Training your brain to hold sequences of information.</li>
          <li><strong>Focus:</strong> Requires intense concentration to not miss a step in longer sequences.</li>
          <li><strong>Cognitive agility:</strong> Helps improve processing speed.</li>
        </ul>
      </div>
    </div>
    </>
  );
}
