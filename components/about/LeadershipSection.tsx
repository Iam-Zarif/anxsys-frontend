// File: components/about/LeadershipSection.tsx
"use client";

import { motion } from "framer-motion";
import { LeadershipCard } from "@/components/about/LeadershipCard";
import { aboutData } from "@/constants/aboutData";
import { colors } from "@/constants/color";

export const LeadershipSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      style={{
        backgroundColor: colors.background.light,
        color: colors.text.primary,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          style={{ color: colors.text.primary }}
        >
          Leadership Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
          style={{ color: colors.text.muted }}
        >
          Discover the leaders propelling ANXSYS forward with vision and
          expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {aboutData.leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <LeadershipCard leader={leader} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};