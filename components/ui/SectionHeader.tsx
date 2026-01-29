"use client";

import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/constants/color";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "light" | "dark";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  variant = "light",
}) => {
  const titleColor = variant === "dark" ? "#ffffff" : colors.text.primary;

  const subtitleColor =
    variant === "dark" ? "rgba(255,255,255,0.75)" : colors.text.secondary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${align === "center" ? "text-center" : "text-left"} mb-16`}
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-xl ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
