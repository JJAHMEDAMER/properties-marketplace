import { Apartment } from "@/types/models";
import React from "react";
import ApartmentCard from "./ApartmentCard";
import SkeletonBox from "@/shared/skeletons/SkeletonBox";

type ListingProps = { apartment: Apartment[] | undefined };

export default function Listing({ apartment }: ListingProps) {
  if (!apartment) {
    return (
      <div className="app-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="h-96">
            <SkeletonBox />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="app-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {apartment.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
