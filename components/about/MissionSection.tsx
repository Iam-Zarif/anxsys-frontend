"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

export const MissionSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* Left: Title */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left"
            style={{ color: colors.text.primary }}
          >
            {aboutData.mission.title}
          </h2>

          {/* Right: Content */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-left"
            style={{ color: colors.text.secondary }}
          >
            {aboutData.mission.statement}
          </p>
        </motion.div>
      </div>
    </section>
  );
};