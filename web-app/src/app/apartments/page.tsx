import { ApartmentsListingsPage } from "@/modules/apartments/ApartmentsListings/ApartmentsListingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Our Exclusive Apartments | Find Your Dream Home",
  description:
    "Discover a curated selection of premium apartments for rent and sale. Browse high-quality listings, detailed descriptions, and stunning photos to find your perfect home. Your ideal living space awaits!",
  openGraph: {
    title: "Explore Our Exclusive Apartments | Find Your Dream Home",
    description:
      "Discover a curated selection of premium apartments for rent and sale. Browse high-quality listings, detailed descriptions, and stunning photos to find your perfect home. Your ideal living space awaits!",
    url: "https://www.yourwebsite.com/apartments",
    siteName: "Real Estate Platform",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Beautiful apartment interior with modern design",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <ApartmentsListingsPage />;
}
