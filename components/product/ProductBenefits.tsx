// components/ProductBenefits.tsx
// New component: Similar to ProductFeatures but with different title and optional customizations.
// Uses same animations and styles for consistency.
'use client';
import { colors } from "@/constants/color";
import { motion } from "framer-motion";

interface ProductBenefitsProps {
  title?: string;
  items: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ProductBenefits({
  title = "Key Benefits",
  items,
}: ProductBenefitsProps) {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: colors.background.gray }} // Slightly darker gray for variation
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: colors.text.primary }}
        >
          {title}
        </h2>

        <motion.ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="p-6 rounded-xl border"
              style={{
                background: colors.gradient.card,
                boxShadow: colors.shadow.lg, // Larger shadow for emphasis
                borderColor: colors.border.default,
              }}
            >
              <span
                className="block text-lg font-medium"
                style={{ color: colors.text.accent }} // Accent color for benefits text
              >
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}