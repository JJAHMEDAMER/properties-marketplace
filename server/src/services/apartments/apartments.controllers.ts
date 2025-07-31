import { Request, Response } from "express";
import { pathParams } from "./types";
import { prisma } from "../../config/prisma.config";

export async function getApartments(req: Request, res: Response) {
  const apartments = await prisma.apartments.findMany();
  return res.status(200).send(apartments);
}

export function getApartment(req: Request<pathParams>, res: Response) {
  return {};
}

export function addApartment(req: Request, res: Response) {
  return {};
}

export function deleteApartment(req: Request<pathParams>, res: Response) {
  return {};
}

export function updateApartment(req: Request<pathParams>, res: Response) {
  return {};
}
