"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { colors } from "@/constants/color";

export type ValueType = {
  title: string;
  description: string;
};

interface ValueAccordionProps {
  values: readonly ValueType[];
}

export const ValueAccordion = ({ values }: ValueAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {values.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className="border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold"
              style={{ color: colors.text.primary }}
            >
              {item.title}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                className="px-5 pb-4 text-sm leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
