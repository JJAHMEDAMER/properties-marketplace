import React from "react";
import { MapPin } from "lucide-react";
import EditApartmentListing from "./EditApartmentListing";
import DeleteApartmentButton from "./DeleteApartmentButton";
import Carousel from "./Carousel";
import { Apartment } from "@/types/models";

export default function ApartmentHeader({
  apartment,
}: {
  apartment: Apartment;
}) {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl p-8 shadow-xl overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="space-y-6 text-gray-900 dark:text-white pb-8 lg:pb-0">
          <h1 className="text-[clamp(1.875rem,3vw,3rem)] font-extrabold">
            {apartment.title}
          </h1>
          <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-indigo-700 dark:text-indigo-300">
            {apartment.currency} {apartment.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-3 text-[clamp(1rem,1.5vw,1.125rem)] text-gray-600 dark:text-gray-300">
            <MapPin size={24} className="text-indigo-500" />
            <span>
              {apartment.address}, {apartment.city}
              {apartment.state ? `, ${apartment.state}` : ""}
              {apartment.zipCode ? ` ${apartment.zipCode}` : ""},{" "}
              {apartment.country}
            </span>
          </div>
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-gray-700 dark:text-gray-400 max-w-lg">
            {apartment.description?.substring(0, 150)}...
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact-section"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg"
            >
              Contact Agent
            </a>
            <EditApartmentListing apartment={apartment} />
            <DeleteApartmentButton apartmentId={apartment.id} />
          </div>
        </div>
        <Carousel apartment={apartment} />
      </div>
    </section>
  );
}
