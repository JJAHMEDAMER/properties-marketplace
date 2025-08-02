import React from "react";

export default function MapSection({ lat, lng }: { lat: number; lng: number }) {
  return (
    <section className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-gray-200 dark:border-zinc-700">
      <h2 className="sr-only">Location Map</h2>
      <iframe
        src={`https://www.google.com/maps?q=${lat},${lng}&output=embed&z=15`}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0"
      ></iframe>
    </section>
  );
}
