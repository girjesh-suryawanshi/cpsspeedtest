"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Zap, MousePointer2 } from "lucide-react";

export function IdleClicker() {
  const [coins, setCoins] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoPower, setAutoPower] = useState(0);

  const costs = {
    clickUpgrade: Math.floor(10 * Math.pow(1.5, clickPower - 1)),
    autoUpgrade: Math.floor(50 * Math.pow(1.5, autoPower)),
  };

  const handleClick = () => {
    setCoins(prev => prev + clickPower);
  };

  const buyClickUpgrade = () => {
    if (coins >= costs.clickUpgrade) {
      setCoins(prev => prev - costs.clickUpgrade);
      setClickPower(prev => prev + 1);
    }
  };

  const buyAutoUpgrade = () => {
    if (coins >= costs.autoUpgrade) {
      setCoins(prev => prev - costs.autoUpgrade);
      setAutoPower(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (autoPower === 0) return;
    const interval = setInterval(() => {
      setCoins(prev => prev + autoPower);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoPower]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center bg-muted/20 border-b border-border/50">
        <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
          <Coins className="w-8 h-8 text-yellow-500" /> Idle Clicker
        </CardTitle>
        <CardDescription className="text-lg">
          Click to earn coins. Buy upgrades to earn coins automatically!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-8">
        
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl font-black tabular-nums tracking-tighter text-yellow-500 drop-shadow-md">
            {coins.toLocaleString()}
          </span>
          <span className="text-lg font-bold text-muted-foreground uppercase tracking-widest">
            Total Coins
          </span>
          <div className="flex gap-4 mt-2 text-sm font-semibold text-muted-foreground">
            <span>+{clickPower} per click</span>
            <span>|</span>
            <span>+{autoPower} per second</span>
          </div>
        </div>

        <div className="flex justify-center py-6">
          <button
            onClick={handleClick}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl border-4 border-orange-300 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center group"
          >
            <Coins className="w-24 h-24 text-white opacity-90 group-active:scale-90 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border-border/50 bg-background shadow-sm hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <MousePointer2 className="w-5 h-5 text-blue-500" /> Click Power
                  </h3>
                  <p className="text-sm text-muted-foreground">Level {clickPower}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-yellow-500">{costs.clickUpgrade} C</span>
                </div>
              </div>
              <Button 
                onClick={buyClickUpgrade} 
                disabled={coins < costs.clickUpgrade}
                className="w-full font-bold"
                variant={coins >= costs.clickUpgrade ? "default" : "secondary"}
              >
                Upgrade Click
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background shadow-sm hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-500" /> Auto Clicker
                  </h3>
                  <p className="text-sm text-muted-foreground">Level {autoPower}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-yellow-500">{costs.autoUpgrade} C</span>
                </div>
              </div>
              <Button 
                onClick={buyAutoUpgrade} 
                disabled={coins < costs.autoUpgrade}
                className="w-full font-bold"
                variant={coins >= costs.autoUpgrade ? "default" : "secondary"}
              >
                Buy Auto-Clicker
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
