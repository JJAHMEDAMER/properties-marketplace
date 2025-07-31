import { prisma } from "../config/prisma.config";
import apartments from "./apartments.json";

export async function populateDb() {
  await prisma.apartments.createMany({ data: apartments });
}
