// File: components/about/ComplianceSection.tsx
"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

export const ComplianceSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 lg:py-32 text-white"
      style={{ backgroundColor: colors.background.dark }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {aboutData.compliance.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
            {aboutData.compliance.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};