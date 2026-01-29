"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { colors } from "@/constants/color";

type ValueType = {
  title: string;
  description: string;
};

export const ValueAccordion = ({ values }: { values: ValueType[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {values.map((value, index) => (
        <motion.div
          key={index}
          className="border rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300"
          style={{
            borderColor: colors.border.light,
            backgroundColor: colors.background.white,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-4 sm:px-6 sm:py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <span
              className="text-base sm:text-lg font-semibold"
              style={{ color: colors.text.primary }}
            >
              {value.title}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: colors.text.muted }}
              />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-4 pb-4 sm:px-6 sm:pb-4 text-sm sm:text-base leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              {value.description}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};