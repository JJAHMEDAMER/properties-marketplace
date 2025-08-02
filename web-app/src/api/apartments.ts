import { Apartment } from "@/types/models";
import { ApartmentFilters } from "@/types/utils/filters";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export async function getApartments(filters: ApartmentFilters = {}) {
  let strFilters: Record<string, string> = {};

  Object.entries(filters).forEach(([key, value]) => {
    strFilters[key] = value?.toString();
  });

  const url = `${baseUrl}/apartments?${new URLSearchParams(strFilters)}`;
  const res = await fetch(url);
  const apartments: Apartment[] = await res.json();
  return apartments;
}

export async function getApartment(id: Apartment["id"]) {
  const res = await fetch(`${baseUrl}/apartments/${id}`);
  const apartment: Apartment = await res.json();
  return apartment;
}

export async function createApartment(
  apartment: Apartment & { image: FileList }
) {
  const { image, ...restOfApartmentData } = apartment;

  const formData = new FormData();
  Object.entries(restOfApartmentData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  if (image) {
    formData.append("image", image[0], image[0].name); // 'image' is the field name on the server
  }

  const res = await fetch(`${baseUrl}/apartments`, {
    method: "POST",
    body: formData,
  });

  const newApartment: { status: string; data: Apartment } = await res.json();
  return newApartment;
}

export async function updateApartment(apartment: Apartment) {
  const res = await fetch(`${baseUrl}/apartments/${apartment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(apartment),
  });
  const updatedApartment: Apartment = await res.json();
  return updatedApartment;
}

export async function deleteApartment(id: Apartment["id"]) {
  const res = await fetch(`${baseUrl}/apartments/${id}`, { method: "DELETE" });
  return res.json();
}
