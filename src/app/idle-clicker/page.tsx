import { GameSEO } from "@/components/game-seo";
import { IdleClicker } from "@/components/games/idle-clicker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idle Clicker - Incremental Upgrade Game | CpsSpeedTest",
  description: "Click to earn coins, buy upgrades, and build an auto-clicking empire. The ultimate incremental idle clicker game.",
};

export default function IdleClickerPage() {
  return (
    <>
      <GameSEO 
        name="Idle Clicker"
        description="Click to earn coins, buy upgrades, and build an auto-clicking empire. The ultimate incremental idle clicker game."
        url="https://www.cpsspeedtest.com/idle-clicker"
        faqs={[
  {
    "question": "What is Idle Clicker?",
    "answer": "Click to earn coins, buy upgrades, and build an auto-clicking empire. The ultimate incremental idle clicker game."
  },
  {
    "question": "How do I play Idle Clicker?",
    "answer": "You can play Idle Clicker directly in your browser on CpsSpeedTest without any downloads. Just click start and follow the on-screen instructions!"
  }
]}
      />
<div className="container max-w-4xl py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Idle Clicker
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start clicking to earn coins. Spend your coins on upgrades to increase your click power and unlock auto-clickers!
        </p>
      </div>

      <div className="py-8">
        <IdleClicker />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-6 md:p-8 rounded-2xl border shadow-sm mt-12">
        <h2>What are Idle Clicker Games?</h2>
        <p>
          Idle clicker (or incremental) games are highly addictive games where the core mechanic revolves around clicking to generate a currency, and then spending that currency to automate the clicking process. 
        </p>
        <h3>Tips for Success</h3>
        <ul>
          <li><strong>Click Fast:</strong> In the beginning, your manual clicks are your only source of income.</li>
          <li><strong>Invest Early:</strong> Buy the Auto-Clicker upgrade as soon as you can to establish a passive income.</li>
          <li><strong>Balance Upgrades:</strong> Keep a healthy balance between upgrading your manual Click Power and your Auto-Clicker speed.</li>
        </ul>
      </div>
    </div>
    </>
  );
}
