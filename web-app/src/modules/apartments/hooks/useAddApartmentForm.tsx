"use client";
import { Apartment } from "@/types/models";
import { useForm } from "react-hook-form";

export function useAddApartmentForm(initialValues?: Apartment) {
  const {
    register,
    handleSubmit,
    formState: { errors, disabled, isSubmitting, isValid, isValidating },
  } = useForm<Apartment>({
    ...(initialValues ? { defaultValues: initialValues } : {}),
    mode: "onTouched",
  });

  const title = register("title", { required: "Title is required" });
  const description = register("description");
  const address = register("address", { required: "Address is required" });
  const city = register("city", { required: "City is required" });
  const state = register("state");
  const zipCode = register("zipCode");
  const country = register("country", { required: "Country is required" });

  const lat = register("lat", {
    required: "Latitude is required",
    valueAsNumber: true,
    validate: (value) =>
      (!isNaN(value) && value >= -90 && value <= 90) ||
      "Invalid latitude (must be between -90 and 90)",
  });
  const lng = register("lng", {
    required: "Longitude is required",
    valueAsNumber: true,
    validate: (value) =>
      (!isNaN(value) && value >= -180 && value <= 180) ||
      "Invalid longitude (must be between -180 and 180)",
  });

  const price = register("price", {
    required: "Price is required",
    valueAsNumber: true,
    min: { value: 0, message: "Price must be a positive number" },
    validate: (value) => !isNaN(value) || "Price must be a number",
  });
  const currency = register("currency", { required: "Currency is required" });
  const numberOfBedrooms = register("numberOfBedrooms", {
    required: "Number of bedrooms is required",
    valueAsNumber: true,
    min: { value: 0, message: "Number of bedrooms cannot be negative" },
    validate: (value) =>
      (Number.isInteger(value) && !isNaN(value)) ||
      "Number of bedrooms must be an integer",
  });
  const numberOfBathrooms = register("numberOfBathrooms", {
    required: "Number of bathrooms is required",
    valueAsNumber: true,
    min: { value: 0, message: "Number of bathrooms cannot be negative" },
    validate: (value) =>
      (Number.isInteger(value) && !isNaN(value)) ||
      "Number of bathrooms must be an integer",
  });
  // const imageUrls = register("imageUrls", {
  //   validate: (value) =>
  //     (Array.isArray(value) && value.every((url) => typeof url === "string")) ||
  //     "Image URLs must be an array of strings",
  // });
  const squareFootage = register("squareFootage", {
    valueAsNumber: true,
    min: { value: 0, message: "Square footage cannot be negative" },
    validate: (value) =>
      value === undefined || !isNaN(value) || "Square footage must be a number",
  });

  const isAvailable = register("isAvailable", {});

  const buildYear = register("buildYear", {
    valueAsNumber: true,
    min: {
      value: 1000,
      message: "Build year must be a valid year (e.g., 1900)",
    },
    max: {
      value: new Date().getFullYear() + 5, // Allow for future construction
      message: "Build year cannot be in the far future",
    },
    validate: (value) =>
      value === undefined ||
      (Number.isInteger(value) && !isNaN(value)) ||
      "Build year must be an integer",
  });
  const contactEmail = register("contactEmail", {
    required: "Contact email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  });
  const contactPhone = register("contactPhone");

  return {
    register,
    handleSubmit,
    errors,
    title,
    description,
    address,
    city,
    state,
    zipCode,
    country,
    lat,
    lng,
    price,
    currency,
    numberOfBedrooms,
    numberOfBathrooms,
    // imageUrls,
    squareFootage,
    isAvailable,
    buildYear,
    contactEmail,
    contactPhone,
    isDisabled: disabled || isSubmitting || !isValid,
    isSubmitting,
  };
}
