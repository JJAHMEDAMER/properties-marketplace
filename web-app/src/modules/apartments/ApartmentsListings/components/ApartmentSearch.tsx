import React from "react";
import AppInput from "@/shared/atoms/AppInput";
import { ApartmentFilters } from "@/types/utils/filters";

type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
};

export default function ApartmentSearch({ filters, setFilters }: Props) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({ ...filters, page: 1 });
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.searchTerm]);

  return (
    <div className="app-container">
      <AppInput
        placeholder="Search..."
        value={filters.searchTerm}
        onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
      />
    </div>
  );
}
