"use client";
import React from "react";
import { getApartments } from "@/api/apartments";
import { Apartment } from "@/types/models";
import Listing from "./components/Listing";
import { ApartmentFilters } from "@/types/utils/filters";
import { Filters } from "./components/Filters";
import { Pagination } from "./components/Pagination";
import ApartmentSearch from "./components/ApartmentSearch";
import { useSearchParams } from "next/navigation";

type SuccessResponse = Awaited<ReturnType<typeof getApartments>>;
export function ApartmentsListingsPage() {
  const [apartment, setApartment] = React.useState<Apartment[] | undefined>(
    undefined
  );
  const [pagination, setPagination] =
    React.useState<SuccessResponse["metadata"]>();

  const search = useSearchParams();
  const searchObj = Object.fromEntries(search.entries());
  const [filters, setFilters] = React.useState<ApartmentFilters>({
    order: "asc",
    sortBy: "price",
    page: 1,
    ...searchObj,
  });

  React.useEffect(() => {
    const newFilters: Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value === "" || value === undefined) {
        delete filters[key as keyof ApartmentFilters];
      }
      newFilters[key] = value?.toString();
    });

    async function fetchApartment() {
      setApartment(undefined);
      const { apartments, metadata } = await getApartments(filters);
      setPagination(metadata);
      setApartment(apartments);
      window.history.pushState(
        null,
        document.title,
        `?${new URLSearchParams(newFilters)}`
      );
    }

    const timeout = setTimeout(() => fetchApartment(), 200);
    return () => clearTimeout(timeout);
  }, [filters]);

  return (
    <div className="space-y-4 py-6 md:py-8">
      <Filters filters={filters} setFilters={setFilters} />
      <ApartmentSearch filters={filters} setFilters={setFilters} />
      <div className="w-fit mx-auto mt-16 md:mt-0">
        <Pagination
          pagination={pagination}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <Listing apartment={apartment} />
    </div>
  );
}
