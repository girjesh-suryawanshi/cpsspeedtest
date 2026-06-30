import { GameSEO } from "@/components/game-seo";

import { StroopTest } from "@/components/stroop-test";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stroop Test – Color vs Text Challenge',
  description: 'Take the classic Stroop Test to measure your cognitive control, focus, and mental processing speed. Can you click the color of the word, not the word itself?',
  keywords: ['stroop test', 'cognitive test', 'brain game', 'focus test', 'processing speed'],
   alternates: {
    canonical: '/stroop-test',
  },
};

export default function StroopTestPage() {
  return (
    <>
      <GameSEO 
        name="Stroop Test – Color vs Text Challenge"
        description="Take the classic Stroop Test to measure your cognitive control, focus, and mental processing speed. Can you click the color of the word, not the word itself?"
        url="https://www.cpsspeedtest.com/stroop-test"
        faqs={[
  {
    "question": "What is Stroop Test – Color vs Text Challenge?",
    "answer": "Take the classic Stroop Test to measure your cognitive control, focus, and mental processing speed. Can you click the color of the word, not the word itself?"
  },
  {
    "question": "How do I play Stroop Test – Color vs Text Challenge?",
    "answer": "You can play Stroop Test – Color vs Text Challenge directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="w-full">
      <header className="w-full max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Stroop Test – Color vs Text Challenge
        </h1>
        <p className="text-muted-foreground mt-1">
          A test of your focus and cognitive processing. Click the button that matches the FONT COLOR, not the word.
        </p>
      </header>
      <StroopTest />
      <Card className="w-full max-w-2xl mt-8 mx-auto">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">What is the Stroop Effect?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>The Stroop Effect is a famous phenomenon in psychology that demonstrates the interference in reaction time of a task. When the name of a color (e.g., "blue," "green," or "red") is printed in a color which is not denoted by the name (e.g., the word "red" printed in blue ink), naming the color of the word takes longer and is more prone to errors than when the color of the ink matches the name of the color.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">What does this test measure?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>This test measures your selective attention, cognitive flexibility, and processing speed. Your brain's automatic response is to read the word. Overriding that impulse to instead name the font color requires significant mental effort. A high score indicates strong executive function and focus.</p>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
