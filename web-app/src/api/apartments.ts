import { Apartment } from "@/types/models";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export async function getApartments() {
  const res = await fetch(`${baseUrl}/apartments`);
  const apartments: Apartment[] = await res.json();
  return apartments;
}

export async function getApartment(id: Apartment["id"]) {
  const res = await fetch(`${baseUrl}/apartments/${id}`);
  const apartment: Apartment = await res.json();
  return apartment;
}

export async function createApartment(apartment: Apartment) {
  const res = await fetch(`${baseUrl}/apartments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(apartment),
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
