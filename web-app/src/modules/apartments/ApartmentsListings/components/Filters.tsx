import { Select } from "@/shared/atoms/Select";
import { Slider } from "@/shared/atoms/Slider";
import { ApartmentFilters } from "@/types/utils/filters";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
};

export function Filters({ filters, setFilters }: Props) {
  return (
    <div className="app-container flex h-48 items-end">
      <div>
        <MinMaxPrice filters={filters} setFilters={setFilters} />
      </div>
      <div className="ms-auto flex flex-col items-end space-y-2">
        <Order filters={filters} setFilters={setFilters} />
        <SortBy filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}

function MinMaxPrice({ filters, setFilters }: Props) {
  const [minMaxValue, setMinMaxValue] = React.useState<[number, number]>([
    filters.minPrice || 1,
    filters.maxPrice || 5_000,
  ]);

  const handleValueChange = (value: [number, number]) => {
    setMinMaxValue(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({
        ...filters,
        minPrice: minMaxValue[0],
        maxPrice: minMaxValue[1],
      });
    }, 150);
    return () => clearTimeout(timeout);
  }, [minMaxValue]);

  return (
    <Slider
      minimum={1}
      maximum={5_000}
      minMaxValue={minMaxValue}
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
    <div className="flex gap-1 w-fit items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700">
      <span
        onClick={() => setFilters({ ...filters, order: "asc" })}
        className={`${
          filters.order === "asc"
            ? "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-white"
            : "bg-white text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        } cursor-pointer flex text-xs items-center gap-2 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700`}
      >
        <ArrowUp size={14} /> Ascending
      </span>
      <span
        onClick={() => setFilters({ ...filters, order: "desc" })}
        className={`${
          filters.order === "desc"
            ? "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-white"
            : "bg-white text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        } cursor-pointer flex text-xs items-center gap-2 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700`}
      >
        <ArrowDown size={14} /> Descending
      </span>
    </div>
  );
}
