import { GameSEO } from "@/components/game-seo";

import { DragClickTest } from "@/components/drag-click-test";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drag Clicking Test – Measure Drag CPS & Technique | CpsSpeedTest',
  description: 'Test your drag clicking speed with our precision CPS test. Measure burst CPS across 1s, 5s, 10s, and 30s intervals with friction-capable mice.',
  keywords: ['drag click test', 'drag cps', 'measure drag clicking', 'friction clicking', 'high cps mouse'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/drag-click-test',
  },
};

const dragClickFaqs = [
  {
    question: "What is drag clicking and how does it work?",
    answer: "Drag clicking is an input technique where friction between a textured finger surface and a mouse button causes rapid microscopic vibrations. Each vibration actuates the mechanical switch repeatedly, achieving burst speeds exceeding 25 to 30+ CPS."
  },
  {
    question: "Which mice are compatible with drag clicking?",
    answer: "Mice with matte or textured surfaces and adjustable debounce time (such as Roccat Kone series, Bloody A70/A60, or Glorious Model O) are typically favored because their firmware allows low debounce thresholds (0-4ms) needed to register rapid switch rebounds."
  },
  {
    question: "Does drag clicking increase switch wear?",
    answer: "Yes. Rapid switch friction accelerates wear on mechanical spring contacts. Users practicing drag clicking frequently apply grip tape to maximize surface friction and minimize excessive downward physical pressure."
  }
];

export default function DragClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Drag Clicking Test – Measure Your Drag CPS"
        description="Test your drag clicking speed with our specialized test. Find out your true CPS with a drag-click-capable mouse and improve your gaming performance."
        url="https://www.cpsspeedtest.com/drag-click-test"
        faqs={dragClickFaqs}
        category="UtilityApplication"
      />
<div className="w-full">
        <header className="w-full max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Drag Clicking Test – Measure Your Drag CPS
        </h1>
        <p className="text-muted-foreground mt-1">
          This test is designed for mice capable of drag clicking. Normal mice may not register clicks correctly.
        </p>
      </header>
      <DragClickTest />
      <Card className="w-full max-w-2xl mt-8 mx-auto">
        <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">How to Play</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2">
                    <p>Select your desired time interval (1, 5, 10, or 30 seconds).</p>
                    <p>Click the "Start Test" button. When the test area appears, lightly drag your finger across the mouse button to generate rapid clicks.</p>
                    <p>Your total clicks and live CPS will be displayed. Once the timer ends, your final score and rank will be shown.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">What is Drag Clicking?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>Drag clicking is a technique where you use the friction between your finger and the mouse button to create a vibration, causing the switch to actuate multiple times in a single "drag." It's a way to achieve extremely high clicks per second, often used in games like Minecraft for bridging or PvP.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">Is drag clicking safe for your mouse?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>Drag clicking puts significantly more stress on mouse switches than normal clicking. It can wear them out much faster. It's recommended to only use this technique on mice built for it (often with specific switch types) and to be aware of the potential for reduced lifespan of your device.</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
