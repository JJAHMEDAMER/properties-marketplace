"use client"; // This directive makes this a Client Component

import React, { useState } from "react";
import { Edit, XCircle } from "lucide-react"; // Icons for edit, delete, close modal
import { Apartment } from "@/types/models";
import DeleteApartmentButton from "./DeleteApartmentButton";

type ApartmentActionsProps = {
  apartment: Apartment;
};

export default function ApartmentActions({ apartment }: ApartmentActionsProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Apartment>>(apartment); // Initialize form with current apartment data

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setError(null);

    try {
      // In a real app, you'd call your API here (e.g., PUT or PATCH)
      // const response = await fetch(`/api/apartments/${apartment.id}`, {
      //   method: 'PUT', // or 'PATCH'
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) {
      //   throw new Error('Failed to update apartment');
      // }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Apartment updated:", formData);
      alert("Apartment updated successfully!");

      // Optional: Revalidate path or refresh page data if needed
      // router.refresh(); // For full page data refresh (Next.js 13+)

      setShowEditModal(false); // Close modal on success
    } catch (err: any) {
      setError(err.message || "An error occurred during update.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a
        href="#contact-section"
        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:shadow-lg"
      >
        Contact Agent
      </a>

      <button
        onClick={() => setShowEditModal(true)}
        className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-full shadow-md text-indigo-600 bg-white hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 ease-in-out hover:shadow-lg"
      >
        <Edit size={20} className="mr-2" />
        Edit Listing
      </button>

      <DeleteApartmentButton apartmentId={apartment.id} />

      {error && (
        <p className="text-red-500 text-sm mt-2 col-span-full">{error}</p>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Edit Apartment Listing
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <XCircle size={28} />
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleFormChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price ({apartment.currency})
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleFormChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleFormChange}
                  rows={5}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>

              {/* Example of a checkbox field */}
              <div className="flex items-center">
                <input
                  id="isAvailable"
                  name="isAvailable"
                  type="checkbox"
                  checked={formData.isAvailable || false}
                  onChange={handleFormChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isAvailable"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Is Available
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUpdating ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
