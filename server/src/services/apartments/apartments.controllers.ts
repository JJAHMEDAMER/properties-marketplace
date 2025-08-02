import { NextFunction, Request, Response } from "express";
import { apartmentFilterSchema, apartmentSchema, pathParams } from "./types";
import { prisma } from "../../config/prisma.config";
import { Apartments, Prisma } from "@prisma/client";
import { AppError, ZodValidationError } from "../../utils/app-error";
import z from "zod";

export async function getApartments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = apartmentFilterSchema.safeParse(req.query);

    if (!query.success) {
      throw new ZodValidationError(query.error);
    }
    // Now, `validatedFilters` contains the parsed and type-safe query parameters
    const validatedFilters = query.data;

    // Construct the 'where' object for Prisma query
    const where: any = {};

    if (validatedFilters.city) {
      where.city = {
        contains: validatedFilters.city,
        mode: "insensitive", // Case-insensitive search for city
      };
    }

    if (validatedFilters.numberOfBedrooms) {
      where.numberOfBedrooms = validatedFilters.numberOfBedrooms;
    }

    if (validatedFilters.squareFootage) {
      where.squareFootage = validatedFilters.squareFootage;
    }

    if (validatedFilters.isAvailable !== undefined) {
      where.isAvailable = validatedFilters.isAvailable;
    }

    if (validatedFilters.minPrice || validatedFilters.maxPrice) {
      where.price = {};
      if (validatedFilters.minPrice) {
        where.price.gte = validatedFilters.minPrice;
      }
      if (validatedFilters.maxPrice) {
        where.price.lte = validatedFilters.maxPrice;
      }
    }

    const apartments = await prisma.apartments.findMany({
      where,
      orderBy: validatedFilters.sortBy
        ? { [validatedFilters.sortBy]: validatedFilters.order || "asc" }
        : undefined,
    });

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

    if (!apartment) throw new AppError("Apartment not found", 404);

    return res.status(200).json(apartment);
  } catch (error) {
    next(error);
  }
}

export async function addApartment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = apartmentSchema.safeParse(req.body);

    if (!data.success) {
      throw new ZodValidationError(data.error);
    }

    const apartment = await prisma.apartments.create({ data: data.data });

    return res.status(201).json({ status: "success", data: apartment });
  } catch (error) {
    console.log(error);
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
    const data = apartmentSchema.partial().safeParse(req.body);

    if (!data.success) {
      throw new ZodValidationError(data.error);
    }

    const apartment = await prisma.apartments.update({
      where: { id: Number(apartmentId) },
      data: data.data,
    });

    return res.status(200).json({ status: "success", data: apartment });
  } catch (error) {
    next(error);
  }
}
