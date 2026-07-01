"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const gotcha = formData.get("_gotcha") as string;

    // Basic honeypot spam protection
    if (gotcha) {
      return { success: true }; // Silently ignore spam
    }

    if (!name || !email || !subject || !message) {
      return { error: "All fields are required." };
    }

    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    revalidatePath("/admin/messages"); // Revalidate admin dashboard if needed
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
