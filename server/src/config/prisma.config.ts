import { PrismaClient } from "@prisma/client";
import { populateDb } from "../utils/populatedb";

export const prisma = new PrismaClient();

export async function prismaConnect() {
  try {
    await prisma.$connect();
    console.log("prisma connected");

    const apartments = await prisma.apartments.findMany();
    if (apartments.length === 0) {
      await populateDb();
      console.log(
        "db populated with fake data from 'server/src/utils/populatedb.ts'"
      );
    }
  } catch (error) {
    console.log("prisma not connected");
    console.log(error);
  }
}
