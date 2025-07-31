import { Apartment } from "@/types/models";

const baseUrl = "http://localhost:5000";

export async function getApartments() {
  const res = await fetch(`${baseUrl}/apartments`);
  const apartments: Apartment[] = await res.json();
  return apartments;
}
