"use client";
import React from "react";
import { Apartment } from "@/types/models";
import {
  Tag,
  Maximize2,
  Image as ImageIcon,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ apartment }: { apartment: Apartment }) {
  const swiperRef = React.useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="relative">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="rounded-2xl shadow-2xl border border-gray-100"
        >
          {apartment.imageUrls.map((url, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative aspect-video w-full">
                <img
                  src={url}
                  alt={`Apartment image ${idx + 1}`}
                  className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <ImageIcon size={16} />
                  {idx + 1} / {apartment.imageUrls.length}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {apartment.imageUrls.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
}
