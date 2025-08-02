import { NextFunction, Request, Response } from "express";
import {
  apartmentFilterSchema,
  apartmentSchema,
  multerFileSchema,
  pathParams,
} from "./types";
import { prisma } from "../../config/prisma.config";
import { Apartments } from "@prisma/client";
import { AppError, ZodValidationError } from "../../utils/app-error";
import { config } from "../../config/base";

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
    const validatedFilters = query.data;

    const where: any = {};

    if (validatedFilters.searchTerm) {
      where.OR = [
        {
          title: { contains: validatedFilters.searchTerm, mode: "insensitive" },
        },
        {
          city: { contains: validatedFilters.searchTerm, mode: "insensitive" },
        },
        {
          address: {
            contains: validatedFilters.searchTerm,
            mode: "insensitive",
          },
        },
      ];
    }

    if (validatedFilters.city) {
      where.city = {
        contains: validatedFilters.city,
        mode: "insensitive",
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
      skip: ((validatedFilters.page || 1) - 1) * 10,
      take: 10,
    });

    const count = await prisma.apartments.count({ where });
    const priceRange = await prisma.apartments.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
    });

    const minPrice = priceRange._min.price ?? 0;
    const maxPrice = priceRange._max.price ?? 0;

    const metadata = {
      count,
      page: validatedFilters.page,
      numberOfPages: Math.ceil(count / 10),
      priceRange: { min: minPrice, max: maxPrice },
    };

    return res.status(200).json({
      status: "success",
      metadata,
      data: apartments,
    });
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

    return res.status(200).json({ status: "success", data: apartment });
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

    const image = multerFileSchema.safeParse(req.file);
    if (!image.success) {
      throw new ZodValidationError(image.error);
    }

    const host = config.nodeEnv === "production" ? "server" : "localhost";
    const imageUrl = `http://${host}:${config.port}/uploads/${image.data.originalname}`;

    const apartment = await prisma.apartments.create({
      data: { ...data.data, imageUrls: [imageUrl] },
    });

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
