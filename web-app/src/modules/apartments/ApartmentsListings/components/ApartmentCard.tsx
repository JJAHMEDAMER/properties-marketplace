import { Apartment } from "@/types/models";
import Link from "next/link";
import React from "react";

type props = {
  apartment: Apartment;
};
export default function ApartmentCard({ apartment }: props) {
  return (
    <div className="card-link-container rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900 transition-all border border-gray-200 dark:border-neutral-800">
      <img
        className="w-full h-48 object-cover"
        src={apartment.imageUrls[0]}
        alt={apartment.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1 dark:text-white">
          {apartment.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {apartment.address}, {apartment.city}, {apartment.country}
        </p>
        <div className="flex flex-wrap text-sm text-gray-800 dark:text-gray-300 gap-2 mb-4">
          <span>{apartment.numberOfBedrooms} Beds</span>
          <span>{apartment.numberOfBathrooms} Baths</span>
          <span>{apartment.squareFootage} m²</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">
            {apartment.price} {apartment.currency}
          </p>
          {apartment.isAvailable ? (
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Available
            </span>
          ) : (
            <span className="text-sm text-red-500">Unavailable</span>
          )}
        </div>
        <Link
          href={`/apartments/${apartment.id}`}
          className="card-link block mt-4 text-sm text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
