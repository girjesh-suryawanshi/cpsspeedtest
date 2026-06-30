import { GameSEO } from "@/components/game-seo";
import { TowerOfHanoi } from "@/components/games/tower-of-hanoi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tower of Hanoi - Algorithmic Logic Puzzle | CPS Test",
  description: "Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and algorithmic reasoning by moving the disks to the final peg.",
  keywords: ["tower of hanoi", "hanoi puzzle", "logic puzzle", "math game", "brain training", "algorithms"],
};

export default function TowerOfHanoiPage() {
  return (
    <>
      <GameSEO 
        name="Tower of Hanoi"
        description="Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and algorithmic reasoning by moving the disks to the final peg."
        url="https://www.cpsspeedtest.com/tower-of-hanoi"
        faqs={[
  {
    "question": "What is Tower of Hanoi?",
    "answer": "Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and algorithmic reasoning by moving the disks to the final peg."
  },
  {
    "question": "How do I play Tower of Hanoi?",
    "answer": "You can play Tower of Hanoi directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Tower of Hanoi</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The legendary algorithmic puzzle. Can you move all the disks to the last peg without breaking the rules?
          </p>
        </div>

        <TowerOfHanoi />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Tower of Hanoi</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Tower of Hanoi is a mathematical game or puzzle invented by the French mathematician Édouard Lucas in 1883. It is widely used in computer science to teach recursive algorithms, and in cognitive psychology to assess problem-solving skills and executive function.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>Only one disk may be moved at a time.</li>
              <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.</li>
              <li><strong>No larger disk may be placed on top of a smaller disk.</strong></li>
            </ul>
          </section>
        </div>

      </div>
    </div>
    </>
  );
}
