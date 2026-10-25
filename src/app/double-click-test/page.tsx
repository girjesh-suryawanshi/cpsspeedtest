import { GameSEO } from "@/components/game-seo";

import { DoubleClickTest } from "@/components/double-click-test";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Double Click Test – Check Mouse Switches for Chatter & Issues | CpsSpeedTest',
  description: 'Use our Double Click Test to detect hardware switch chatter, unintentional double-clicks, and verify mouse debounce responsiveness.',
  keywords: ['double click test', 'mouse switch test', 'unwanted double clicks', 'mouse hardware debounce test', 'switch chatter'],
  alternates: {
    canonical: 'https://www.cpsspeedtest.com/double-click-test',
  },
};

const doubleClickFaqs = [
  {
    question: "How does this tool detect unintentional double-clicking?",
    answer: "The test monitors raw pointerdown events. If a second click occurs within a window under 80 milliseconds without an intentional mechanical release and repress, the event is flagged as hardware switch bounce (chatter)."
  },
  {
    question: "What causes mechanical mouse switches to double-click?",
    answer: "Mechanical microswitches (such as standard Omron or Huano switches) rely on metallic spring contacts. Over millions of actuations, contact oxidation, dust, or metal fatigue cause the contact leaf to bounce, registering two electrical signals from a single physical press."
  },
  {
    question: "Can mouse debounce settings fix switch chatter?",
    answer: "Many gaming mice allow adjusting the debounce delay (e.g., from 4ms to 10ms) in their companion software. Increasing debounce time can mask minor switch bounce, though severe switch degradation will eventually require switch replacement or cleaning."
  }
];

export default function DoubleClickTestPage() {
  return (
    <>
      <GameSEO 
        name="Double Click Test – Check Your Mouse for Issues"
        description="Use our Double Click Test to check if your mouse is registering unintentional double clicks or to measure your double-clicking speed."
        url="https://www.cpsspeedtest.com/double-click-test"
        faqs={doubleClickFaqs}
        category="UtilityApplication"
      />
<div className="w-full">
        <header className="w-full max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Double Click Test
        </h1>
        <p className="text-muted-foreground mt-1">
          Check if your mouse has a double-clicking issue or measure your intentional double-click speed.
        </p>
      </header>
      <DoubleClickTest />
      <Card className="w-full max-w-2xl mt-8 mx-auto">
        <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">How to Use the Test</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2">
                    <p>Click "Start Test" and then click the target box each time it appears on the screen.</p>
                    <p>The test will track how many times you click. If you click more than once within a very short timeframe, it will be registered as an "unwanted double-click."</p>
                    <p>After 20 targets, the test will provide a summary of your mouse's performance.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">What is a double-clicking issue?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>A double-clicking issue occurs when you press your mouse button once, but it registers two or more clicks. This is usually caused by a faulty or worn-out mechanical switch inside the mouse. It can be very disruptive in both gaming and regular computer use.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">What do my results mean?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>If you have 0 unwanted double-clicks, your mouse is likely working perfectly. If you see one or more unwanted clicks (and you were trying to click only once), your mouse switch may be failing and you might need to consider a replacement.</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
