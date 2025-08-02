"use client";

import React from "react";
import { useAddApartmentForm } from "../hooks/useAddApartmentForm";
import AppInput from "@/shared/atoms/AppInput";
import { SubmitHandler } from "react-hook-form";
import { Apartment } from "@/types/models";
import { createApartment, updateApartment } from "@/api/apartments";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

type ApartmentCreationFormProps = {
  apartment?: Apartment;
};

export default function ApartmentCreationForm({
  apartment,
}: ApartmentCreationFormProps) {
  const router = useRouter();
  const { handleSubmit, errors, isDisabled, isSubmitting, ...registers } =
    useAddApartmentForm(apartment);

  const submit: SubmitHandler<Apartment> = async (data) => {
    if (apartment) {
      await updateApartment(data);
      router.refresh();
    } else {
      const { data: apartment } = await createApartment(data);
      router.push("/apartments/" + apartment.id);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6 p-4 max-w-5xl mx-auto"
    >
      {/* Title and Description */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Title"
          placeholder="Cozy Apartment in City Center"
          {...registers.title}
          error={errors.title?.message}
        />
        <AppInput
          label="Description"
          placeholder="A spacious apartment with great views..."
          {...registers.description}
          error={errors.description?.message}
        />
      </div>

      {/* Address, City, State */}
      <div className="grid gap-4 md:grid-cols-3">
        <AppInput
          label="Address"
          placeholder="123 Main St"
          {...registers.address}
          error={errors.address?.message}
        />
        <AppInput
          label="City"
          placeholder="New York"
          {...registers.city}
          error={errors.city?.message}
        />
        <AppInput
          label="State/Province"
          placeholder="NY"
          {...registers.state}
          error={errors.state?.message}
        />
      </div>

      {/* Zip Code, Country */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Zip Code"
          placeholder="10001"
          {...registers.zipCode}
          error={errors.zipCode?.message}
        />
        <AppInput
          label="Country"
          placeholder="USA"
          {...registers.country}
          error={errors.country?.message}
        />
      </div>

      {/* Latitude, Longitude */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Latitude"
          placeholder="40.7128"
          {...registers.lat}
          error={errors.lat?.message}
        />
        <AppInput
          label="Longitude"
          placeholder="-74.0060"
          {...registers.lng}
          error={errors.lng?.message}
        />
      </div>

      {/* Price, Currency */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Price"
          placeholder="1500"
          {...registers.price}
          error={errors.price?.message}
        />
        <AppInput
          label="Currency"
          placeholder="USD"
          {...registers.currency}
          error={errors.currency?.message}
        />
      </div>

      {/* Bedrooms, Bathrooms */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Bedrooms"
          placeholder="2"
          {...registers.numberOfBedrooms}
          error={errors.numberOfBedrooms?.message}
        />
        <AppInput
          label="Bathrooms"
          placeholder="1"
          {...registers.numberOfBathrooms}
          error={errors.numberOfBathrooms?.message}
        />
      </div>

      {/* Square Footage, Build Year */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Square Footage (sqft)"
          placeholder="800"
          {...registers.squareFootage}
          error={errors.squareFootage?.message}
        />
        <AppInput
          label="Build Year"
          placeholder="2005"
          {...registers.buildYear}
          error={errors.buildYear?.message}
        />
      </div>

      {/* Contact Email, Phone */}
      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          label="Contact Email"
          type="email"
          placeholder="agent@example.com"
          {...registers.contactEmail}
          error={errors.contactEmail?.message}
        />
        <AppInput
          label="Contact Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          {...registers.contactPhone}
          error={errors.contactPhone?.message}
        />
      </div>

      {/* Image URLs */}
      {/* <AppInput
        label="Image URLs (comma-separated)"
        placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
        {...registers.imageUrls}
        error={errors.imageUrls?.message}
      /> */}

      {/* Is Available */}
      <label className="flex cursor-pointer items-center space-x-3">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          {...registers.isAvailable}
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Available for Rent/Sale
        </span>
      </label>
      {errors.isAvailable && (
        <p className="text-sm text-pink-600">{errors.isAvailable.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="block w-full md:w-auto mt-4 px-6 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting && (
          <span className="flex items-center gap-2">
            <Loader className="animate-spin mr-2 h-4 w-4" />
            {apartment ? "Updating..." : "Creating..."}
          </span>
        )}

        {!isSubmitting && (apartment ? "Update Apartment" : "Create Apartment")}
      </button>
    </form>
  );
}
