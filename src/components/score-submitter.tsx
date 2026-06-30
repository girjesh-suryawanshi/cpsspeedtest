"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveScore } from "@/app/actions/leaderboard";
import { Loader2, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

interface ScoreSubmitterProps {
  game: string;
  score: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  unit?: string;
}

export function ScoreSubmitter({ game, score, isOpen, onClose, title = "New High Score!", unit = "CPS" }: ScoreSubmitterProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setLoading(true);
    const result = await saveScore(game, name.trim(), score);
    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      // Try to use alert if available
      try {
        alert("Score submitted successfully!");
      } catch (e) {
      }
      setTimeout(() => {
        onClose();
        router.push(`/leaderboard?game=${game}`);
      }, 1500);
    } else {
      try {
        alert("Failed to submit score. Try again.");
      } catch (e) {
        alert("Failed to submit score.");
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <Trophy className="text-yellow-500 w-6 h-6" />
            {title}
          </DialogTitle>
          <DialogDescription>
            You scored <strong className="text-foreground text-lg">{score} {unit}</strong>! Enter your name to join the leaderboard.
          </DialogDescription>
        </DialogHeader>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Player Name</label>
              <Input
                id="name"
                placeholder="Enter your nickname..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                required
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                Skip
              </Button>
              <Button type="submit" disabled={!name.trim() || loading} className="font-bold">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Score
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-8 text-center animate-in fade-in zoom-in space-y-2">
            <Trophy className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-green-500">Score Saved!</h3>
            <p className="text-muted-foreground">Redirecting...</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
