import { Apartments, Prisma } from "@prisma/client";

export type pathParams = {
  apartmentId: Apartments["id"];
};
