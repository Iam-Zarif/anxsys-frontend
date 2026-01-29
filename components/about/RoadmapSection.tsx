"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

export const RoadmapSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: colors.background.light }}
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
            {aboutData.roadmap.title}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            {aboutData.roadmap.description}
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {aboutData.roadmap.milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 md:pb-12 last:pb-0"
            >
              <div
                className="absolute left-0 top-0 w-1 h-full"
                style={{
                  background: `linear-gradient(to bottom, ${colors.brand.primary}, ${colors.brand.secondary}, ${colors.brand.tertiary})`,
                }}
              ></div>
              <div
                className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 -ml-1 sm:-ml-1.5 rounded-full shadow-lg"
                style={{
                  backgroundColor: colors.brand.secondary,
                  border: `4px solid ${colors.background.white}`,
                }}
              ></div>
              <div
                className="p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: colors.background.white }}
              >
                <div
                  className="text-lg sm:text-xl font-bold mb-2"
                  style={{ color: colors.text.primary }}
                >
                  {milestone.year}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: colors.text.primary }}
                >
                  {milestone.title}
                </h3>
                <p style={{ color: colors.text.secondary }}>
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};