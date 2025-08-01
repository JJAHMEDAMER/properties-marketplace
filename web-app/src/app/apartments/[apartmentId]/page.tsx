import ApartmentDetailspage from "@/modules/apartments/ApartmentDetails/ApartmentDetailsPage";
import React from "react";
import type { Metadata } from "next";
import { getApartment } from "@/api/apartments";

type Props = {
  params: Promise<{ apartmentId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { apartmentId } = await params;
  const product = await getApartment(Number(apartmentId));

  return {
    title: `${product.title} | Nawy`,
    description: product.description,
    openGraph: {
      images: [product.imageUrls[0]],
    },
  };
}

export default async function page({ params }: Props) {
  const { apartmentId } = await params;
  return <ApartmentDetailspage apartmentId={Number(apartmentId)} />;
}
