"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

// ─── In-memory rate limiter (per IP) ─────────────────────────────────────────
// Allows a maximum of 5 score submissions per 5 minutes per IP.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
  const MAX_REQUESTS = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

// ─── Per-game score bounds (to prevent fake/inflated scores) ─────────────────
const GAME_SCORE_LIMITS: Record<string, { min: number; max: number }> = {
  "cps-test":        { min: 0, max: 30 },
  "aim-trainer":     { min: 0, max: 200 },
  "typing-test":     { min: 0, max: 300 },
  "reaction-time":   { min: 0, max: 2000 },
  "spacebar-clicker":{ min: 0, max: 30 },
  "math-dash":       { min: 0, max: 100 },
  "simon-says":      { min: 0, max: 100 },
  "dino-run":        { min: 0, max: 99999 },
  "snake":           { min: 0, max: 10000 },
  "2048":            { min: 0, max: 131072 },
};

// ─── Sanitize name: allow only alphanumeric, spaces, hyphens, underscores ────
function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9 _\-]/g, "").trim().slice(0, 20);
}

export async function saveScore(game: string, name: string, score: number) {
  try {
    // 1. Rate limit check
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim()
      || headersList.get("x-real-ip")
      || "unknown";

    if (isRateLimited(ip)) {
      return { success: false, error: "Too many submissions. Please wait 5 minutes and try again." };
    }

    // 2. Sanitize name
    const cleanName = sanitizeName(name);
    if (!cleanName || cleanName.length < 1) {
      return { success: false, error: "Invalid player name." };
    }

    // 3. Validate game
    const knownGames = Object.keys(GAME_SCORE_LIMITS);
    if (!knownGames.includes(game)) {
      return { success: false, error: "Unknown game." };
    }

    // 4. Validate score
    const bounds = GAME_SCORE_LIMITS[game];
    const numericScore = Number(score);
    if (isNaN(numericScore) || numericScore < bounds.min || numericScore > bounds.max) {
      return { success: false, error: `Score out of valid range for ${game}.` };
    }

    // 5. Save to DB
    const entry = await prisma.leaderboard.create({
      data: {
        game,
        name: cleanName,
        score: numericScore,
      },
    });

    revalidatePath("/leaderboard");
    revalidatePath(`/${game}`);

    return { success: true, entry };
  } catch (error: any) {
    console.error("Failed to save score:", error);
    return { success: false, error: "Server error. Please try again." };
  }
}

export async function getTopScores(game: string, limit: number = 10) {
  try {
    const scores = await prisma.leaderboard.findMany({
      where: { game },
      orderBy: { score: "desc" },
      take: limit,
    });
    return scores;
  } catch (error) {
    console.error("Failed to get scores:", error);
    return [];
  }
}

