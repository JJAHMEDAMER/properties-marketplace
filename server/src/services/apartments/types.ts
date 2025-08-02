import { Apartments, Prisma } from "@prisma/client";
import z from "zod";

export type pathParams = {
  apartmentId: Apartments["id"];
};

export const multerFileSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: z
    .string()
    .refine((mimetype) => mimetype.startsWith("image/"), {
      message: "Only image files are allowed",
    })
    .optional(),
  size: z.number().max(5 * 1024 * 1024, {
    message: "File size must be less than 5MB",
  }), // Max 5MB
  destination: z.string(),
  filename: z.string(),
  path: z.string(),
});

export const apartmentFilterSchema = z.object({
  searchTerm: z.string().optional(),
  page: z.preprocess(
    (val) => (val ? parseInt(String(val), 10) : undefined),
    z
      .number()
      .int()
      .positive("Page number must be a positive integer.")
      .optional()
  ),
  city: z.string().optional(),
  numberOfBedrooms: z.preprocess(
    (val) => (val ? parseInt(String(val), 10) : undefined),
    z
      .number()
      .int()
      .positive("Number of bedrooms must be a positive integer.")
      .optional()
  ),
  squareFootage: z.preprocess(
    (val) => (val ? parseInt(String(val), 10) : undefined),
    z
      .number()
      .int()
      .positive("Square footage must be a positive integer.")
      .optional()
  ),
  isAvailable: z.preprocess((val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    return undefined;
  }, z.boolean().optional()),
  minPrice: z.preprocess(
    (val) => (val ? parseFloat(String(val)) : undefined),
    z.number().positive("Minimum price must be a positive number.").optional()
  ),
  maxPrice: z.preprocess(
    (val) => (val ? parseFloat(String(val)) : undefined),
    z.number().positive("Maximum price must be a positive number.").optional()
  ),
  sortBy: z.enum(["price", "createdAt", "numberOfBedrooms"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export const apartmentSchema = z.object({
  title: z.string({
    error: (iss) =>
      iss.input === undefined ? "Title is required." : "Title must be a string",
  }),
  description: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Description is required."
          : "Description must be a string",
    })
    .optional(),
  address: z.string({
    error: (iss) =>
      iss.input === undefined
        ? "Address is required."
        : "Address must be a string",
  }),
  city: z.string({
    error: (iss) =>
      iss.input === undefined ? "City is required." : "City must be a string",
  }),
  state: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "State is required."
          : "State must be a string",
    })
    .optional(),
  zipCode: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Zip code is required."
          : "Zip code must be a string",
    })
    .optional(),
  country: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Country is required."
          : "Country must be a string",
    })
    .default("Egypt"),
  lat: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Latitude is required."
          : "Latitude must be a number",
    })
    .positive("Must be a positive number"),
  lng: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Longitude is required."
          : "Longitude must be a number",
    })
    .positive("Must be a positive number"),
  price: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Price is required."
          : "Price must be a number",
    })
    .positive("Must be a positive number"),
  currency: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Currency is required."
          : "Currency must be a string",
    })
    .default("EGP"),
  numberOfBedrooms: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Number of bedrooms is required."
          : "Number of bedrooms must be a number",
    })
    .int("Must be an integer")
    .min(0, "Must be at least 0"),
  numberOfBathrooms: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Number of bathrooms is required."
          : "Number of bathrooms must be a number",
    })
    .int("Must be an integer")
    .min(0, "Must be at least 0"),
  squareFootage: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Square footage is required."
          : "Square footage must be a number",
    })
    .int("Must be an integer")
    .positive("Must be a positive number")
    .optional(),
  isAvailable: z.coerce
    .boolean({
      error: (iss) =>
        iss.input === undefined
          ? "Availability flag is required."
          : "Availability flag must be a boolean",
    })
    .default(true),
  buildYear: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Build year is required."
          : "Build year must be a number",
    })
    .int("Must be an integer")
    .optional(),
  contactEmail: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Contact email is required."
          : "Contact email must be a valid email",
    })
    .email(),
  contactPhone: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Contact phone is required."
          : "Contact phone must be a string",
    })
    .optional(),
});
