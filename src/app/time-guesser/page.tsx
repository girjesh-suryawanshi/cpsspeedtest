import { GameSEO } from "@/components/game-seo";
import { TimeGuesser } from "@/components/games/time-guesser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Guesser - 10-Second Internal Clock Test | CpsSpeedTest",
  description: "Test your internal clock and estimation accuracy. Can you stop the timer at exactly 10.000 seconds? Measure your variance in milliseconds.",
  keywords: ['time guesser', '10 second test', 'internal clock test', 'chronometric estimation', 'reflex timer'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/time-guesser',
  },
};

const timeGuesserFaqs = [
  {
    question: "How does the Time Guesser measure accuracy?",
    answer: "The tool initiates high-precision performance timing on 'Start' and hides the running display. When 'Stop' is clicked, it calculates the absolute difference between your stop timestamp and the exact 10.000-second target."
  },
  {
    question: "What is an excellent score on the 10-second test?",
    answer: "Stopping within ±100 milliseconds (0.100s) of 10.000s reflects exceptional internal tempo estimation. Most unpracticed participants land within ±300 to 600 milliseconds."
  },
  {
    question: "How can I improve internal cadence counting?",
    answer: "Subvocal counting using rhythmic syllables (such as 'one-one-thousand, two-one-thousand') calibrated against a 60 BPM metronome significantly tightens internal time estimation."
  }
];

export default function TimeGuesserPage() {
  return (
    <>
      <GameSEO 
        name="Time Guesser"
        description="Test your internal clock and reflexes. Can you stop the timer at exactly 10.000 seconds? Try the Time Guesser now."
        url="https://www.cpsspeedtest.com/time-guesser"
        faqs={timeGuesserFaqs}
        category="CasualGame"
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Time Guesser
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your internal clock! Hit start, wait exactly 10 seconds, and hit stop. Are your reflexes sharp enough?
        </p>
      </div>

      <div className="py-8">
        <TimeGuesser />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>What is the Time Guesser Test?</h2>
        <p>
          The Time Guesser (or 10-Second Timer test) is a highly viral challenge that tests your perception of time and your reaction speed. The goal is simple: stop the timer as close to exactly 10.000 seconds as possible.
        </p>
        <h3>How to play</h3>
        <ol>
          <li>Click the <strong>Start Timer</strong> button.</li>
          <li>Count exactly 10 seconds in your head.</li>
          <li>Click the <strong>STOP!</strong> button.</li>
          <li>See how many milliseconds you were off by!</li>
        </ol>
      </div>
    </div>
    </>
  );
}
