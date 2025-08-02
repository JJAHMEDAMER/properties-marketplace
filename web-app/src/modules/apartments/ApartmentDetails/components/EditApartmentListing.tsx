"use client";
import React, { useState } from "react";
import { Modal } from "@/shared/atoms/Modal";
import { Edit } from "lucide-react";
import { Apartment } from "@/types/models";
import ApartmentCreationForm from "../../components/ApartmentCreationForm";

type EditApartmentListingProps = {
  apartment: Apartment;
};
export default function EditApartmentListing({
  apartment,
}: EditApartmentListingProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex cursor-pointer items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-full shadow-md text-indigo-600 bg-white hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 ease-in-out hover:shadow-lg"
      >
        <Edit size={20} className="mr-2" />
        Edit Listing
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ApartmentCreationForm apartment={apartment} />
      </Modal>
    </>
  );
}
