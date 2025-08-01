import AddApartmentPage from "@/modules/apartments/AddApartmentPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Apartment | Nawy",
  description: "Add a new apartment to Nawy",
};

export default function page() {
  return <AddApartmentPage />;
}
