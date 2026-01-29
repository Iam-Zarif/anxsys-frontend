"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

export const HeroSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      style={{ color: colors.text.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ color: colors.text.primary }}
            >
              {aboutData.hero.headline}
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-8"
              style={{ color: colors.text.secondary }}
            >
              {aboutData.hero.description}
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {aboutData.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div
                    className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
                    style={{ color: colors.text.primary }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm sm:text-md md:text-lg mt-2"
                    style={{ color: colors.text.primary }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[5/3] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
