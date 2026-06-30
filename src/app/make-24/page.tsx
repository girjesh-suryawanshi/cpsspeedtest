import { GameSEO } from "@/components/game-seo";
import { Make24 } from "@/components/games/make-24";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make 24 Math Puzzle - Arithmetic Brain Game | CPS Test",
  description: "Play the classic Make 24 math puzzle. Use addition, subtraction, multiplication, and division to make the number 24 from four given numbers.",
  keywords: ["make 24", "24 puzzle", "math game", "arithmetic puzzle", "brain training", "logical reasoning"],
};

export default function Make24Page() {
  return (
    <>
      <GameSEO 
        name="Make 24 Math Puzzle"
        description="Play the classic Make 24 math puzzle. Use addition, subtraction, multiplication, and division to make the number 24 from four given numbers."
        url="https://www.cpsspeedtest.com/make-24"
        faqs={[
  {
    "question": "What is Make 24 Math Puzzle?",
    "answer": "Play the classic Make 24 math puzzle. Use addition, subtraction, multiplication, and division to make the number 24 from four given numbers."
  },
  {
    "question": "How do I play Make 24 Math Puzzle?",
    "answer": "You can play Make 24 Math Puzzle directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Make 24 Puzzle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A classic mathematical puzzle. Can you use all four numbers to equal exactly 24?
          </p>
        </div>

        <Make24 />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Make 24</h2>
            <p className="text-muted-foreground leading-relaxed">
              Make 24 is a famous arithmetic card game and math puzzle used in classrooms worldwide to teach pattern recognition and mental math agility. You are given four numbers and must manipulate them using basic math operations to arrive at the number 24.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>You MUST use all four numbers shown.</li>
              <li>You can only use each number exactly once.</li>
              <li>You can use addition (+), subtraction (-), multiplication (*), and division (/).</li>
              <li>Parentheses `()` are allowed and encouraged to group operations!</li>
              <li>Example: For numbers <code>1, 2, 3, 4</code>, you can type <code>1 * 2 * 3 * 4</code>.</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
    </>
  );
}
