"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@smastrom/react-rating";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { colors } from "@/constants/color";
import testimonials from "@/constants/Testimonials-data .json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@smastrom/react-rating/style.css";

const ratingStyles = {
  itemShapes: (
    <path d="M12 2L15.1 8.3L22 9.3L17 14.1L18.2 21L12 17.8L5.8 21L7 14.1L2 9.3L8.9 8.3L12 2Z" />
  ),
  activeFillColor: "#FFB800",
  inactiveFillColor: "#E5E7EB",
};

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: colors.gradient.brand }}
            >
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by teams worldwide for delivering reliable software
            solutions.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={6000}
          transitionTime={700}
          onChange={setActive}
          renderArrowPrev={(click, hasPrev) =>
            hasPrev && (
              <Arrow onClick={click} position="left">
                <ChevronLeft />
              </Arrow>
            )
          }
          renderArrowNext={(click, hasNext) =>
            hasNext && (
              <Arrow onClick={click} position="right">
                <ChevronRight />
              </Arrow>
            )
          }
        >
          {testimonials.map((t, index) => (
            <div key={t.id} className="px-4 pb-16">
              <div className="bg-white rounded-2xl shadow-xl grid md:grid-cols-[320px,1fr] overflow-hidden">
                {/* Image */}
                <div className="flex flex-col items-center justify-center bg-gray-50 p-10">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      priority={active === index}
                    />
                  </div>

                  <Rating
                    className="mt-4"
                    style={{ maxWidth: 140 }}
                    value={t.rating}
                    readOnly
                    itemStyles={ratingStyles}
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-gray-200 mb-4" />

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    “{t.feedback}”
                  </p>

                  <div className="border-t pt-6">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-sm font-medium text-blue-600">
                      {t.designation}
                    </p>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

/* Arrow Component */
function Arrow({
  onClick,
  position,
  children,
}: {
  onClick: () => void;
  position: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white
      ${position === "left" ? "left-4" : "right-4"}`}
      style={{ background: colors.gradient.brand }}
      aria-label={position === "left" ? "Previous" : "Next"}
    >
      {children}
    </button>
  );
}
