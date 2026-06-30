import { GameSEO } from "@/components/game-seo";
import { MathDash } from "@/components/games/math-dash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Dash - Speed Arithmetic Training | CpsSpeedTest",
  description: "Test your mental math skills with Math Dash. Solve as many arithmetic equations as you can in 60 seconds! Perfect for brain training and students.",
  keywords: ["math dash", "mental math", "speed math", "brain training", "math game", "arithmetic practice"],
  alternates: { canonical: '/math-dash' },
};

export default function MathDashPage() {
  return (
    <>
      <GameSEO 
        name="Math Dash"
        description="Test your mental math skills with Math Dash. Solve as many arithmetic equations as you can in 60 seconds! Perfect for brain training and students."
        url="https://www.cpsspeedtest.com/math-dash"
        faqs={[
  {
    "question": "What is Math Dash?",
    "answer": "Test your mental math skills with Math Dash. Solve as many arithmetic equations as you can in 60 seconds! Perfect for brain training and students."
  },
  {
    "question": "How do I play Math Dash?",
    "answer": "You can play Math Dash directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Math Dash</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How fast is your mental math? Solve addition, subtraction, multiplication, and division problems as quickly as possible.
          </p>
        </div>

        <MathDash />

        <div className="mt-12 space-y-8 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border/50">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About Math Dash</h2>
            <p className="text-muted-foreground leading-relaxed">
              Math Dash is a high-speed arithmetic game designed to train your mental math capabilities. Whether you're a student preparing for exams or just someone looking to keep their brain sharp, this 60-second sprint is the perfect cognitive workout.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>Click <strong>Start Dash</strong> to begin the 60-second timer.</li>
              <li>An equation will appear on screen. Type the correct answer using your keyboard or on-screen numpad.</li>
              <li>Press <strong>Enter</strong> to submit your answer immediately.</li>
              <li>The questions will progressively get harder as your score increases!</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
    </>
  );
}
