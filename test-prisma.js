const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

// Try initializing Prisma Client
async function main() {
  try {
    const prisma = new PrismaClient({
      adapter: { url: process.env.DATABASE_URL }
    });
    const result = await prisma.blogPost.findMany();
    console.log("SUCCESS:", result);
  } catch (e) {
    console.error("ERROR 1:", e.message);
    try {
      const prisma2 = new PrismaClient();
      const result2 = await prisma2.blogPost.findMany();
      console.log("SUCCESS 2:", result2);
    } catch (e2) {
      console.error("ERROR 2:", e2.message);
    }
  }
}

main();
