import { Select } from "@/shared/atoms/Select";
import { Slider } from "@/shared/atoms/Slider";
import SkeletonBox from "@/shared/skeletons/SkeletonBox";
import { GetApartmentsResponse } from "@/types/api/apartments";
import { ApartmentFilters } from "@/types/utils/filters";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect } from "react";

type SuccessResponse = Extract<GetApartmentsResponse, { status: "success" }>;
type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
  metadata?: SuccessResponse["metadata"];
};

export function Filters({ metadata, filters, setFilters }: Props) {
  return (
    <div className="app-container gap-4 flex-col md:flex-row flex h-48 items-end">
      <div className="w-full md:w-80">
        <MinMaxPrice
          metadata={metadata}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <div className="ms-auto w-full flex flex-col items-end space-y-2">
        <div className="w-full md:w-fit">
          <Order filters={filters} setFilters={setFilters} />
        </div>
        <div className="w-full md:w-64">
          <SortBy filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

function MinMaxPrice({ metadata, filters, setFilters }: Props) {
  const [minMaxValue, setMinMaxValue] = React.useState<[number, number] | null>(
    null
  );

  const handleValueChange = (value: [number, number]) => {
    setMinMaxValue(value);
  };

  useEffect(() => {
    if (!minMaxValue) return;
    const timeout = setTimeout(() => {
      setFilters({
        ...filters,
        minPrice: minMaxValue?.[0],
        maxPrice: minMaxValue?.[1],
      });
    }, 150);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minMaxValue]);

  if (!metadata) {
    return (
      <div className="h-28 rounded-2xl overflow-hidden">
        <SkeletonBox />
      </div>
    );
  }

  return (
    <Slider
      minimum={metadata?.priceRange.min || 1}
      maximum={metadata?.priceRange.max || 5_000}
      minMaxValue={
        minMaxValue || [
          metadata?.priceRange.min || 1,
          metadata?.priceRange.max || 5_000,
        ]
      }
      onValueChange={handleValueChange}
    />
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
    <div className="flex gap-1 w-full md:w-fit items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700">
      <span
        onClick={() => setFilters({ ...filters, order: "asc" })}
        className={`${
          filters.order === "asc"
            ? "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-white"
            : "bg-white text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        } cursor-pointer flex flex-1 text-xs items-center gap-2 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700`}
      >
        <ArrowUp size={14} /> Ascending
      </span>
      <span
        onClick={() => setFilters({ ...filters, order: "desc" })}
        className={`${
          filters.order === "desc"
            ? "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-white"
            : "bg-white text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        } cursor-pointer flex flex-1 text-xs items-center gap-2 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700`}
      >
        <ArrowDown size={14} /> Descending
      </span>
    </div>
  );
}
