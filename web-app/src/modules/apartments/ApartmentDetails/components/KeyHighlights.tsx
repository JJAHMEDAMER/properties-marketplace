import React from "react";
import { Bed, Bath, Ruler, Calendar, Check, X } from "lucide-react";
import { Apartment } from "@/types/models";

export default function KeyHighlights({ apartment }: { apartment: Apartment }) {
  return (
    <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-3xl p-8 shadow-lg">
      <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold text-gray-900 dark:text-white mb-8 text-center">
        Key Highlights
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        <ApartmentFeature
          label="Bedrooms"
          value={apartment.numberOfBedrooms}
          Icon={Bed}
          color="text-red-500"
        />
        <ApartmentFeature
          label="Bathrooms"
          value={apartment.numberOfBathrooms}
          Icon={Bath}
          color="text-blue-500"
        />
        <ApartmentFeature
          label="Size"
          value={`${apartment.squareFootage || "—"} sq ft`}
          Icon={Ruler}
          color="text-green-500"
        />
        <ApartmentFeature
          label="Built Year"
          value={apartment.buildYear || "—"}
          Icon={Calendar}
          color="text-purple-500"
        />
        <ApartmentFeature
          label="Availability"
          value={apartment.isAvailable ? "Available" : "Not Available"}
          Icon={apartment.isAvailable ? Check : X}
          color={apartment.isAvailable ? "text-teal-500" : "text-gray-400"}
        />
      </div>
    </section>
  );
}

export function ApartmentFeature({
  label,
  value,
  Icon,
  color,
}: {
  label: string;
  value: React.ReactNode;
  Icon: React.ElementType;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow duration-200">
      <Icon size={28} className={color || "text-indigo-500"} />
      <span className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 dark:text-white mt-1">
        {value}
      </span>
      <span className="text-[clamp(0.75rem,0.875vw,0.875rem)] text-gray-600 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}
