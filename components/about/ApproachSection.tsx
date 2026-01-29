"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Code,
  TestTube,
  Rocket,
};

export const ApproachSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: colors.text.primary }}
          >
            {aboutData.approach.title}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            {aboutData.approach.description}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.approach.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative p-4 sm:p-6 rounded-xl shadow-xs hover:shadow-md hover:border-2 transition-all duration-300 group"
                style={{
                  background: `linear-gradient(to bottom right, ${colors.background.light}, ${colors.background.gray})`,
                  borderColor: colors.brand.secondary,
                }}
              >
                <div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-4xl font-bold group-hover:text-gray-700 transition-colors duration-300"
                  style={{ color: colors.text.muted }}
                >
                  {index + 1}
                </div>
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.brand.primary}90, ${colors.brand.secondary}, ${colors.brand.tertiary})`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: colors.text.inverse }}
                  />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold mb-3"
                  style={{ color: colors.text.primary }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: colors.text.secondary }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};