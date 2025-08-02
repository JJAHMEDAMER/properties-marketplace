export type ApartmentFilters = Partial<{
  city: string;
  numberOfBedrooms: number;
  squareFootage: number;
  isAvailable: boolean;
  minPrice: number;
  maxPrice: number;
  sortBy: "price" | "createdAt" | "numberOfBedrooms";
  order: "asc" | "desc";
}>;
