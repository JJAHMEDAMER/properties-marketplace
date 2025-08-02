"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ApartmentFilters } from "@/types/utils/filters";
import { GetApartmentsResponse } from "@/types/api/apartments";
import SkeletonBox from "@/shared/skeletons/SkeletonBox";

type SuccessResponse = Extract<GetApartmentsResponse, { status: "success" }>;

type Props = {
  filters: ApartmentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ApartmentFilters>>;
  totalPages?: number;
  pagination?: SuccessResponse["metadata"];
};

export function Pagination({
  filters,
  setFilters,
  pagination,
  totalPages = 5,
}: Props) {
  const { page = 1 } = filters;

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  if (!pagination)
    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: 5 }, (_, i) => i).map((p) => (
          <span
            key={p}
            className="w-8 h-8 overflow-hidden rounded-full text-sm flex items-center justify-center"
          >
            <SkeletonBox />
          </span>
        ))}
      </div>
    );

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
        className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: pagination?.numberOfPages || 3 },
        (_, i) => i + 1
      ).map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={`w-8 h-8 rounded-full text-sm flex items-center justify-center
            ${
              p === page
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }
            transition`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page >= pagination?.numberOfPages}
        className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
