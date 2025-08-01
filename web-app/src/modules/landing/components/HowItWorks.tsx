import { Search, FilePlus2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Browse Listings",
    description:
      "Explore apartments based on your preferences like city, price, and amenities.",
    icon: Search,
  },
  {
    title: "List Your Property",
    description:
      "Easily add your apartment with details, images, and location in just a few steps.",
    icon: FilePlus2,
  },
  {
    title: "Connect & Close",
    description:
      "Communicate with interested renters or owners and close the deal confidently.",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="app-container text-center mb-16">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-gray-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 dark:text-gray-300">
          A streamlined process for both renters and owners.
        </p>
      </div>

      <div className="app-container grid gap-12 md:grid-cols-3 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-950 shadow hover:shadow-md transition"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-full mb-6">
              <step.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
