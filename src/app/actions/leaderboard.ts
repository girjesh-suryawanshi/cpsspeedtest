"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveScore(game: string, name: string, score: number) {
  try {
    const entry = await prisma.leaderboard.create({
      data: {
        game,
        name,
        score,
      },
    });

    revalidatePath("/leaderboard");
    revalidatePath(`/${game}`);

    return { success: true, entry };
  } catch (error: any) {
    console.error("Failed to save score:", error);
    return { success: false, error: error.message };
  }
}

export async function getTopScores(game: string, limit: number = 10) {
  try {
    const scores = await prisma.leaderboard.findMany({
      where: { game },
      orderBy: { score: 'desc' }, // Assuming higher score is better for CPS. Wait, if lower is better for some games, we might need a dynamic order. But for CPS, desc is right.
      take: limit,
    });
    return scores;
  } catch (error) {
    console.error("Failed to get scores:", error);
    return [];
  }
}
