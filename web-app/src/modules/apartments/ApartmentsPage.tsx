import React from "react";
import ApartmentCard from "./components/ApartmentCard";
import { getApartments } from "@/api/apartments";

export default async function ApartmentsPage() {
  const apartment = await getApartments();

  return (
    <div className="py-8 app-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {apartment.map((apartment: any) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
