import { Request, Response } from "express";
import { pathParams } from "./types";

export function getApartments(req: Request, res: Response) {
  return res.status(200).send([]);
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
