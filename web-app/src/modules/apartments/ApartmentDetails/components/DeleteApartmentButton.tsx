"use client";
import { deleteApartment } from "@/api/apartments";
import { Apartment } from "@/types/models";
import { Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DeleteApartmentButton({
  apartmentId,
}: {
  apartmentId: Apartment["id"];
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteApartment(apartmentId);
      router.push("/apartments");
    } catch (err: any) {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-red-600 text-base font-medium rounded-full shadow-md text-white bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDeleting ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Trash2 className="mr-2 h-5 w-5" />
      )}
      {isDeleting ? "Deleting..." : "Delete Listing"}
    </button>
  );
}
