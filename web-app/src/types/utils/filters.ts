import { GetApartmentsResponse } from "../api/apartments";

type SuccessResponse = Extract<GetApartmentsResponse, { status: "success" }>;

export type ApartmentFilters = Partial<{
  city: string;
  numberOfBedrooms: number;
  squareFootage: number;
  isAvailable: boolean;
  minPrice: number;
  maxPrice: number;
  sortBy: "price" | "createdAt" | "numberOfBedrooms";
  order: "asc" | "desc";
  page: number;
  searchTerm: string;
  pagination: SuccessResponse["metadata"];
}>;
