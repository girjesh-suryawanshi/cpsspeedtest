import { TimeGuesser } from "@/components/games/time-guesser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Guesser - 10 Second Reflex Test | CpsSpeedTest",
  description: "Test your internal clock and reflexes. Can you stop the timer at exactly 10.000 seconds? Try the Time Guesser now.",
};

export default function TimeGuesserPage() {
  return (
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
  );
}
