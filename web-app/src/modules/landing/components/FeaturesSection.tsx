import { ShieldCheck, Search, UploadCloud } from "lucide-react";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is manually reviewed to ensure authenticity and accuracy.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Search",
    description:
      "Find apartments by location, price, bedrooms, and more with ease.",
    icon: Search,
  },
  {
    title: "Easy Listing",
    description:
      "List your apartment in minutes and connect with thousands of renters.",
    icon: UploadCloud,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24">
      <div className="app-container text-center mb-16">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Our Platform?
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 dark:text-gray-300">
          Designed to make apartment hunting and listing effortless and secure.
        </p>
      </div>
      <div className="app-container grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
          >
            <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
