import { Mail, Phone } from "lucide-react";
import React from "react";

export default function ContactSection({
  email,
  phone,
}: {
  email: string;
  phone?: string;
}) {
  return (
    <section
      id="contact-section"
      className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl p-8 shadow-2xl text-center"
    >
      <h2 className="text-[clamp(1.875rem,5vw,3rem)] font-extrabold mb-4">
        Interested? Get In Touch!
      </h2>
      <p className="text-[clamp(1.125rem,2vw,1.25rem)] mb-8 opacity-90">
        Reach out to us for more information or to schedule a viewing.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <Mail size={24} />
          <span>Email Us</span>
        </a>
        {phone && (
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone size={24} />
            <span>Call Now</span>
          </a>
        )}
      </div>
    </section>
  );
}
