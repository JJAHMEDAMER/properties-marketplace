"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amina H.",
    role: "Renter in Cairo",
    quote:
      "I found my dream apartment in just two days. Simple, fast, and reliable!",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Youssef K.",
    role: "Owner in Alexandria",
    quote:
      "I listed my flat in 10 minutes and got real inquiries the same day.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara M.",
    role: "Real Estate Agent",
    quote: "This platform streamlined my work and brought me serious clients.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Khaled T.",
    role: "Landlord in Giza",
    quote:
      "Their verification process made me feel secure renting out my property.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Noura F.",
    role: "First-time Renter",
    quote:
      "I loved how simple and stress-free the search was. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Hassan R.",
    role: "Property Manager",
    quote:
      "Managing multiple listings is effortless with their dashboard tools.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Mona A.",
    role: "Investor",
    quote:
      "A reliable channel to showcase premium properties with good visibility.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Omar Z.",
    role: "Freelancer",
    quote:
      "I moved cities and this platform made it painless to find a place remotely.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Laila M.",
    role: "Interior Designer",
    quote:
      "A great place to collaborate with property owners and show off my designs.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Ahmed D.",
    role: "Tech Worker",
    quote:
      "It’s like Airbnb for long-term rentals, but better suited to Egypt.",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black py-24">
      <div className="app-container text-center mb-14">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-gray-900 dark:text-white mb-3">
          What People Are Saying
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 dark:text-gray-300">
          Feedback from our amazing community
        </p>
      </div>

      <div className="app-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative h-full flex flex-col justify-between rounded-3xl p-8 shadow-md transition-all duration-300 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-950"
                    : "bg-blue-50 dark:bg-gray-800"
                }`}
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
                    />
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic text-[clamp(0.95rem,2vw,1.05rem)] mb-6">
                    “{t.quote}”
                  </blockquote>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
