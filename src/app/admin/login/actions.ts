"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  const adminEmail = process.env.ADMIN_EMAIL || "admin@cpsspeedtest.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123"; // Fallback for local dev if not set

  if (email === adminEmail && password === adminPassword) {
    // Set HTTP-only cookie
    cookies().set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    return { success: true };
  } else {
    return { success: false, error: "Invalid email or password" };
  }
}

export async function logoutAdmin() {
  cookies().delete("admin_session");
  redirect("/admin/login");
}
