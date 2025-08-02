import { getApartment } from "@/api/apartments";
import ApartmentHeader from "./components/ApartmentHeader";
import KeyHighlights from "./components/KeyHighlights";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import { Apartment } from "@/types/models";

type Props = { apartmentId: Apartment["id"] };

export default async function ApartmentDetailsPage({ apartmentId }: Props) {
  const apartment = await getApartment(apartmentId);

  return (
    <div className="app-container py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ApartmentHeader apartment={apartment} />
      <div
        className="w-full h-px bg-gray-200 dark:bg-zinc-700 my-10"
        aria-hidden="true"
      />
      <KeyHighlights apartment={apartment} />
      {apartment.description && (
        <AboutSection description={apartment.description} />
      )}
      <ContactSection
        email={apartment.contactEmail}
        phone={apartment.contactPhone}
      />
      <MapSection lat={apartment.lat} lng={apartment.lng} />
    </div>
  );
}
