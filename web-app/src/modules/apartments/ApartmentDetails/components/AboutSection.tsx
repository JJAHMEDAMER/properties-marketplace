import React from "react";

export default function AboutSection({ description }: { description: string }) {
  return (
    <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-3xl p-8 shadow-lg">
      <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold text-gray-900 dark:text-white mb-6">
        About This Home
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-[clamp(1rem,1.5vw,1.125rem)]">
        <p>{description}</p>
      </div>
    </section>
  );
}
