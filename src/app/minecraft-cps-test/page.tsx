
import { MinecraftCpsTest } from "@/components/minecraft-cps-test";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minecraft CPS Test – Click Speed for PvP',
  description: 'Improve your Minecraft PvP skills with our dedicated CPS test. Practice jitter, butterfly, and drag clicking to dominate in combat and bridging.',
  keywords: ['minecraft cps test', 'pvp cps test', 'minecraft click speed', 'jitter click', 'butterfly click'],
   alternates: {
    canonical: '/minecraft-cps-test',
  },
};

export default function MinecraftCpsTestPage() {
  return (
    <div className="w-full">
      <header className="w-full max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Minecraft CPS Test – Click Speed for PvP
        </h1>
        <p className="text-muted-foreground mt-1">
          Perfect for bridging, PvP combos, and block hitting practice.
        </p>
      </header>
      <MinecraftCpsTest />
      <Card className="w-full max-w-2xl mt-8 mx-auto">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">Recommended CPS for Minecraft PvP</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2">
                    <p><strong>6-8 CPS:</strong> Considered a good baseline for PvP. At this speed, you can hit consistently and trade blows effectively.</p>
                    <p><strong>9-12 CPS:</strong> This is a strong advantage. You can land more hits, break opponent combos, and build faster.</p>
                    <p><strong>13+ CPS:</strong> Elite level. At this speed, you can perform advanced techniques like resetting your sprint-hit cooldown faster, giving you a significant edge in combat.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">How to Improve Minecraft CPS Safely</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p>Focus on proper technique rather than brute force. For jitter clicking, try to tense your forearm to create a vibration. For butterfly clicking, use two fingers and find a rhythm. Don't press too hard, and take breaks to avoid strain or injury (Repetitive Strain Injury is a real risk).</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">FAQ</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <p><strong>Does higher CPS guarantee a win?</strong> No. While high CPS is an advantage, movement, aim, and strategy are just as important. However, a higher CPS allows you to execute your strategies more effectively.</p>
                     <p><strong>Can I get banned for high CPS?</strong> Most large servers like Hypixel have anti-cheat systems that can detect unnaturally high or consistent click speeds (e.g., 25+ CPS that doesn't vary). Clicking fast legitimately is fine, but using autoclickers will get you banned.</p>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
