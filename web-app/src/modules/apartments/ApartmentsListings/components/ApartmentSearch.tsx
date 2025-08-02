import React from "react";
import AppInput from "@/shared/atoms/AppInput";
import { ApartmentFilters } from "@/types/utils/filters";

type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
};

export default function ApartmentSearch({ filters, setFilters }: Props) {
  const [searchTerm, setSearchTerm] = React.useState<
    ApartmentFilters["searchTerm"]
  >(filters.searchTerm);

  React.useEffect(() => {
    if (searchTerm === undefined) return;
    const timeout = setTimeout(() => {
      setFilters({ ...filters, searchTerm });
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="app-container">
      <AppInput
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
