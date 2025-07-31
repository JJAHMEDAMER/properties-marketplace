import { Apartments, Prisma } from "@prisma/client";
import z from "zod";

export type pathParams = {
  apartmentId: Apartments["id"];
};
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
  lat: z
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Latitude is required."
          : "Latitude must be a number",
    })
    .positive("Must be a positive number"),
  lng: z
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Longitude is required."
          : "Longitude must be a number",
    })
    .positive("Must be a positive number"),
  price: z
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
  numberOfBedrooms: z
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Number of bedrooms is required."
          : "Number of bedrooms must be a number",
    })
    .int("Must be an integer")
    .min(0, "Must be at least 0"),
  numberOfBathrooms: z
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Number of bathrooms is required."
          : "Number of bathrooms must be a number",
    })
    .int("Must be an integer")
    .min(0, "Must be at least 0"),
  imageUrls: z.array(z.string().url()).default([]),
  squareFootage: z
    .number({
      error: (iss) =>
        iss.input === undefined
          ? "Square footage is required."
          : "Square footage must be a number",
    })
    .int("Must be an integer")
    .positive("Must be a positive number")
    .optional(),
  isAvailable: z
    .boolean({
      error: (iss) =>
        iss.input === undefined
          ? "Availability flag is required."
          : "Availability flag must be a boolean",
    })
    .default(true),
  buildYear: z
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
