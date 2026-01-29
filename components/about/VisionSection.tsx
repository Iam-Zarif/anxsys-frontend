// File: components/about/VisionSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
};

export const VisionSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: colors.background.light }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8 sm:mb-12"
        >
          {/* Left: Title */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left"
            style={{ color: colors.text.primary }}
          >
            {aboutData.vision.title}
          </h2>

          {/* Right: Short Intro */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-left"
            style={{ color: colors.text.secondary }}
          >
            Our vision is built on long-term impact, sustainable growth, and
            meaningful innovation that benefits our customers, our people, and
            society.
          </p>
        </motion.div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {aboutData.vision.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: colors.background.white }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.brand.primary}90, ${colors.brand.secondary})`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: colors.text.inverse }}
                  />
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold mb-4"
                  style={{ color: colors.text.primary }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed line-clamp-3"
                  style={{ color: colors.text.secondary }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};