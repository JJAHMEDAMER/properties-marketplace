import { AddApartmentPage } from "@/modules/apartments/AddApartment/AddApartmentPage";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Add Apartment | Nawy",
  description: "Add a new apartment to Nawy",
};

export default function page() {
  return <AddApartmentPage />;
}
