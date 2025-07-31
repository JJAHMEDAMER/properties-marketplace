import { NextFunction, Request, Response } from "express";
import { pathParams } from "./types";
import { prisma } from "../../config/prisma.config";
import { Apartments } from "@prisma/client";

export async function getApartments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const apartments = await prisma.apartments.findMany();
    return res.status(200).json(apartments);
  } catch (error) {
    next(error);
  }
}

export async function getApartment(
  req: Request<pathParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { apartmentId } = req.params;
    const apartment = await prisma.apartments.findUniqueOrThrow({
      where: { id: Number(apartmentId) },
    });
    return res.status(200).json(apartment);
  } catch (error) {
    next(error);
  }
}

export async function addApartment(
  req: Request<any, any, Apartments, any>,
  res: Response,
  next: NextFunction
) {
  try {
    const apartment = await prisma.apartments.create({ data: req.body });
    return res.status(201).json({ status: "success", data: apartment });
  } catch (error) {
    next(error);
  }
}

export async function deleteApartment(
  req: Request<pathParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { apartmentId } = req.params;
    await prisma.apartments.delete({ where: { id: Number(apartmentId) } });
    return res.status(200).json({ status: "success" });
  } catch (error) {
    next(error);
  }
}

export async function updateApartment(
  req: Request<pathParams, any, Partial<Apartments>, any>,
  res: Response,
  next: NextFunction
) {
  try {
    const { apartmentId } = req.params;
    const apartment = await prisma.apartments.update({
      where: { id: Number(apartmentId) },
      data: req.body,
    });

    return res.status(200).json({ status: "success", data: apartment });
  } catch (error) {
    next(error);
  }
}
