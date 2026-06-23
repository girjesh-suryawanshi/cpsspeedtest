"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

function checkAuth() {
  const session = cookies().get("admin_session")?.value;
  if (session !== "authenticated") {
    throw new Error("Unauthorized");
  }
}

export async function createCategory(data: { name: string; slug: string }) {
  checkAuth();
  try {
    const category = await prisma.blogCategory.create({
      data,
    });
    revalidatePath("/admin/blog/categories");
    return { success: true, data: category };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteCategory(id: string) {
  checkAuth();
  try {
    await prisma.blogCategory.delete({
      where: { id },
    });
    revalidatePath("/admin/blog/categories");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.blogCategory.findMany({
      orderBy: { name: 'asc' }
    });
    return categories;
  } catch (error) {
    return [];
  }
}
