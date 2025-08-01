"use client";

import React from "react";
import { useAddApartmentForm } from "../hooks/useAddApartmentForm";
import AppInput from "@/shared/atoms/AppInput";
import { SubmitHandler } from "react-hook-form";
import { Apartment } from "@/types/models";

export default function ApartmentCreationForm() {
  const { handleSubmit, errors, ...registers } = useAddApartmentForm();

  const submit: SubmitHandler<Apartment> = (data) => {
    console.log(data);
    // Here you would typically send the data to your API
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4 p-4">
      {/* Title and Description */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Title"
            placeholder="Cozy Apartment in City Center"
            {...registers.title}
            error={errors.title?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Description"
            placeholder="A spacious apartment with great views..."
            {...registers.description}
            error={errors.description?.message}
          />
        </div>
      </div>

      {/* Address, City, State */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Address"
            placeholder="123 Main St"
            {...registers.address}
            error={errors.address?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="City"
            placeholder="New York"
            {...registers.city}
            error={errors.city?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="State/Province"
            placeholder="NY"
            {...registers.state}
            error={errors.state?.message}
          />
        </div>
      </div>

      {/* Zip Code, Country */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Zip Code"
            placeholder="10001"
            {...registers.zipCode}
            error={errors.zipCode?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Country"
            placeholder="USA"
            {...registers.country}
            error={errors.country?.message}
          />
        </div>
      </div>

      {/* Latitude, Longitude */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Latitude"
            type="number"
            placeholder="40.7128"
            {...registers.lat}
            error={errors.lat?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Longitude"
            type="number"
            placeholder="-74.0060"
            {...registers.lng}
            error={errors.lng?.message}
          />
        </div>
      </div>

      {/* Price, Currency */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Price"
            type="number"
            placeholder="1500"
            {...registers.price}
            error={errors.price?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Currency"
            placeholder="USD"
            {...registers.currency}
            error={errors.currency?.message}
          />
        </div>
      </div>

      {/* Number of Bedrooms, Number of Bathrooms */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Bedrooms"
            type="number"
            placeholder="2"
            {...registers.numberOfBedrooms}
            error={errors.numberOfBedrooms?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Bathrooms"
            type="number"
            placeholder="1"
            {...registers.numberOfBathrooms}
            error={errors.numberOfBathrooms?.message}
          />
        </div>
      </div>

      {/* Square Footage, Build Year */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Square Footage (sqft)"
            type="number"
            placeholder="800"
            {...registers.squareFootage}
            error={errors.squareFootage?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Build Year"
            type="number"
            placeholder="2005"
            {...registers.buildYear}
            error={errors.buildYear?.message}
          />
        </div>
      </div>

      {/* Contact Email, Contact Phone */}
      <div className="flex gap-4">
        <div className="flex-1">
          <AppInput
            label="Contact Email"
            type="email"
            placeholder="agent@example.com"
            {...registers.contactEmail}
            error={errors.contactEmail?.message}
          />
        </div>
        <div className="flex-1">
          <AppInput
            label="Contact Phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...registers.contactPhone}
            error={errors.contactPhone?.message}
          />
        </div>
      </div>

      {/* Image URLs - You might want a more sophisticated component for this,
          e.g., an array of inputs, a file uploader, or a component to manage multiple URLs.
          For simplicity, this assumes a single input that takes comma-separated URLs or
          the input field will be managed differently. A more robust solution might
          involve `Controller` from react-hook-form or a custom component.
          For now, it's just a text input.
      */}
      <div>
        <AppInput
          label="Image URLs (comma-separated)"
          placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
          {...registers.imageUrls}
          // Note: The validation for imageUrls expects an array of strings.
          // If using a single text input, you'd need to parse this in submit()
          // or use a custom component for array input with react-hook-form's Controller.
          error={errors.imageUrls?.message}
        />
      </div>

      {/* Is Available */}
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...registers.isAvailable} />
          <span>Available for Rent/Sale</span>
        </label>
        {errors.isAvailable && (
          <p className="text-red-500 text-sm mt-1">
            {errors.isAvailable.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Create Apartment
      </button>
    </form>
  );
}
