"use client";
import React from "react";
import { getApartments } from "@/api/apartments";
import { Apartment } from "@/types/models";
import Listing from "./components/Listing";
import { ApartmentFilters } from "@/types/utils/filters";
import { Filters } from "./components/Filters";
import { Pagination } from "./components/Pagination";

export function ApartmentsListingsPage() {
  const [apartment, setApartment] = React.useState<Apartment[] | undefined>(
    undefined
  );

  const [filters, setFilters] = React.useState<ApartmentFilters>({
    order: "asc",
    sortBy: "createdAt",
    page: 1,
  });

  React.useEffect(() => {
    async function fetchApartment() {
      setApartment(undefined);
      const apartments = await getApartments(filters);
      setApartment(apartments);
    }
    fetchApartment();
  }, [filters]);

  return (
    <div className="space-y-4 py-6 md:py-8">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="w-fit mx-auto mt-16 md:mt-0">
        <Pagination filters={filters} setFilters={setFilters} />
      </div>
      <Listing apartment={apartment} />
    </div>
  );
}
