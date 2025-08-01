import Link from "next/link";
import { Building2, PlusCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 dark:text-white mb-6">
          Find Your Perfect Apartment in Minutes
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 dark:text-gray-300 mb-8">
          Explore beautiful listings or share your own. Everything starts here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/apartments"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            <Building2 className="mr-2 h-5 w-5" />
            Browse Apartments
          </Link>
          <Link
            href="/apartments/add"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-600 rounded-xl hover:bg-blue-50 transition"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            List Your Apartment
          </Link>
        </div>
      </div>
    </section>
  );
}
