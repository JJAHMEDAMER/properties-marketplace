import React from "react";
import ApartmentCreationForm from "./components/ApartmentCreationForm";

export default function AddApartmentPage() {
  return (
    <div className="app-container">
      <h1 className="text-[clamp(1.875rem,3vw,3rem)] font-extrabold">
        Add Apartment
      </h1>

      <ApartmentCreationForm />
    </div>
  );
}
