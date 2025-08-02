import { Select } from "@/shared/atoms/Select";
import { ApartmentFilters } from "@/types/utils/filters";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
};

export function Filters({ filters, setFilters }: Props) {
  return (
    <div className="app-container ">
      <div className="ms-auto flex flex-col items-end space-y-2">
        <Order filters={filters} setFilters={setFilters} />
        <SortBy filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}

function SortBy({ filters, setFilters }: Props) {
  const options = [
    {
      value: "price",
      label: "Price",
    },
    {
      value: "createdAt",
      label: "Date",
    },
    {
      value: "numberOfBedrooms",
      label: "Bedrooms",
    },
  ];

  const handleSelect = (value: string) => {
    setFilters({ ...filters, sortBy: value as ApartmentFilters["sortBy"] });
  };

  return (
    <Select
      value={filters.sortBy || "price"}
      onSelect={handleSelect}
      options={options}
    />
  );
}

function Order({ filters, setFilters }: Props) {
  return (
    <div className="flex gap-1 w-fit items-center bg-gray-50 dark:bg-zinc-900 p-1 rounded-xl border border-gray-100 dark:border-zinc-700">
      <span
        onClick={() => setFilters({ ...filters, order: "asc" })}
        className={`${
          filters.order === "asc" ? "bg-gray-200" : "dark:bg-zinc-700"
        } cursor-pointer flex text-xs items-center gap-2 p-2 rounded-xl border border-gray-100 dark:border-zinc-700`}
      >
        <ArrowUp size={14} /> Ascending
      </span>
      <span
        onClick={() => setFilters({ ...filters, order: "desc" })}
        className={`${
          filters.order === "desc" ? "bg-gray-200" : "dark:bg-zinc-700"
        } cursor-pointer flex text-xs items-center gap-2 b p-2 rounded-xl border border-gray-100 dark:border-zinc-700`}
      >
        <ArrowDown size={14} /> Descending
      </span>
    </div>
  );
}
