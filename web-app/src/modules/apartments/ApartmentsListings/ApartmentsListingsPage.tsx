"use client";
import React from "react";
import { getApartments } from "@/api/apartments";
import { Apartment } from "@/types/models";
import Listing from "./components/Listing";
import { ApartmentFilters } from "@/types/utils/filters";
import { Filters } from "./components/Filters";

export function ApartmentsListingsPage() {
  const [apartment, setApartment] = React.useState<Apartment[] | undefined>(
    undefined
  );
  const [filters, setFilters] = React.useState<ApartmentFilters>({});

  React.useEffect(() => {
    async function fetchApartment() {
      const apartments = await getApartments(filters);
      setApartment(apartments);
    }
    fetchApartment();
  }, [filters]);

  return (
    <div className="space-y-4">
      <Filters filters={filters} setFilters={setFilters} />
      <Listing apartment={apartment} />
    </div>
  );
}
