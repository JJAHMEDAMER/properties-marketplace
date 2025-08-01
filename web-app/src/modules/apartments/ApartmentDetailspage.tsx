import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Bed,
  Bath,
  Ruler,
  Calendar,
  Check,
  X,
  Star,
} from "lucide-react";
import { getApartment } from "@/api/apartments";
import Carousel from "./components/Carousel";
import ApartmentActions from "./components/ApartmentActions";
import { Apartment } from "@/types/models";

type Props = {
  apartmentId: Apartment["id"];
};

export default async function ApartmentDetailsPage({ apartmentId }: Props) {
  const apartment = await getApartment(apartmentId);

  return (
    <div className="app-container py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
          <div className="space-y-6 text-gray-900 pb-8 lg:pb-0">
            <h1 className="text-[clamp(1.875rem,3vw,3rem)] font-extrabold leading-tight tracking-tight">
              {apartment.title}
            </h1>
            <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-indigo-700">
              {apartment.currency} {apartment.price.toLocaleString()}
            </p>
            <div className="flex items-center gap-3 text-[clamp(1rem,1.5vw,1.125rem)] text-gray-600">
              <MapPin size={24} className="text-indigo-500" />
              <span>
                {apartment.address}, {apartment.city}
                {apartment.state ? `, ${apartment.state}` : ""}
                {apartment.zipCode ? ` ${apartment.zipCode}` : ""},{" "}
                {apartment.country}
              </span>
            </div>
            <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-gray-700 max-w-lg">
              {apartment.description?.substring(0, 150)}...
            </p>
            <div>
              <ApartmentActions apartment={apartment} />
            </div>
          </div>

          <Carousel apartment={apartment} />
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 my-10" aria-hidden="true"></div>

      {/* Quick Overview Section */}
      <section className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
        <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold text-gray-900 mb-8 text-center">
          Key Highlights
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          <Feature
            label="Bedrooms"
            value={apartment.numberOfBedrooms}
            Icon={Bed}
            color="text-red-500"
          />
          <Feature
            label="Bathrooms"
            value={apartment.numberOfBathrooms}
            Icon={Bath}
            color="text-blue-500"
          />
          <Feature
            label="Size"
            value={`${apartment.squareFootage || "—"} sq ft`}
            Icon={Ruler}
            color="text-green-500"
          />
          <Feature
            label="Built Year"
            value={apartment.buildYear || "—"}
            Icon={Calendar}
            color="text-purple-500"
          />
          <Feature
            label="Availability"
            value={apartment.isAvailable ? "Available" : "Not Available"}
            Icon={apartment.isAvailable ? Check : X}
            color={apartment.isAvailable ? "text-teal-500" : "text-gray-400"}
          />
        </div>
      </section>

      {/* Detailed Description */}
      {apartment.description && (
        <section className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold text-gray-900 mb-6">
            About This Home
          </h2>
          <div className="prose-lg max-w-none text-gray-700 leading-relaxed text-[clamp(1rem,1.5vw,1.125rem)]">
            <p>{apartment.description}</p>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section
        id="contact-section"
        className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl p-8 shadow-2xl text-center"
      >
        <h2 className="text-[clamp(1.875rem,5vw,3rem)] font-extrabold mb-4">
          Interested? Get In Touch!
        </h2>
        <p className="text-[clamp(1.125rem,2vw,1.25rem)] mb-8 opacity-90">
          Reach out to us for more information or to schedule a viewing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={`mailto:${apartment.contactEmail}`}
            className="inline-flex items-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail size={24} />
            <span>Email Us</span>
          </a>
          {apartment.contactPhone && (
            <a
              href={`tel:${apartment.contactPhone}`}
              className="inline-flex items-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-gray-200">
        <h2 className="sr-only">Location Map</h2>
        <iframe
          src={`https://www.google.com/maps?q=${apartment.lat},${apartment.lng}&output=embed&z=15`}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
}

function Feature({
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
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <Icon size={28} className={color || "text-indigo-500"} />
      <span className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mt-1">
        {value}
      </span>
      <span className="text-[clamp(0.75rem,0.875vw,0.875rem)] text-gray-600">
        {label}
      </span>
    </div>
  );
}
