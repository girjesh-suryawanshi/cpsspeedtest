import { GameSEO } from "@/components/game-seo";
import { TowerOfHanoi } from "@/components/games/tower-of-hanoi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tower of Hanoi - Algorithmic Logic Puzzle | CpsSpeedTest",
  description: "Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and recursive algorithmic reasoning across 3 to 7 disk configurations.",
  keywords: ["tower of hanoi", "hanoi puzzle", "logic puzzle", "math game", "brain training", "recursive algorithms"],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/tower-of-hanoi',
  },
};

const hanoiFaqs = [
  {
    question: "What is the minimum number of moves to solve Tower of Hanoi?",
    answer: "The theoretical minimum moves required to solve Tower of Hanoi with n disks is exactly `2^n - 1`. For 3 disks it takes 7 moves; for 4 disks, 15 moves; and for 5 disks, 31 moves."
  },
  {
    question: "What are the core rules of Tower of Hanoi?",
    answer: "Three rules govern movement: only one disk may be moved at a time, each move takes the top disk from one peg to another, and no larger disk may ever rest atop a smaller disk."
  },
  {
    question: "Why is Tower of Hanoi famous in computer science?",
    answer: "It serves as the quintessential demonstration of recursion. Moving n disks from Source to Target via Auxiliary breaks down into: move n-1 disks to Auxiliary, move the largest disk to Target, then move n-1 disks from Auxiliary to Target."
  }
];

export default function TowerOfHanoiPage() {
  return (
    <>
      <GameSEO 
        name="Tower of Hanoi"
        description="Play the classic Tower of Hanoi mathematical puzzle. Test your logic, planning, and algorithmic reasoning by moving the disks to the final peg."
        url="https://www.cpsspeedtest.com/tower-of-hanoi"
        faqs={hanoiFaqs}
        category="BrainGame"
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
