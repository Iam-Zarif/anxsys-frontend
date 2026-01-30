"use client";

import Link from "next/link";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { navItems } from "@/constants/navItems";
import { colors } from "@/constants/color";
import ServiceDropdownCard from "./ServiceDropdownCard";

const ChevronDown = memo(FiChevronDown);

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const NavItems = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map(({ label, href, dropdown }) => {
        const active = pathname === href;
        const isOpen = openDropdown === label;

        if (dropdown) {
          return (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium cursor-pointer transition-all hover:text-brand-primary"
                style={{
                  color: active ? colors.brand.primary : colors.text.primary,
                }}
              >
                {label}
                <ChevronDown
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial="hidden"
                    className="absolute top-1 "
                    animate="visible"
                    exit="exit"
                    style={{ borderColor: colors.border.light }}
                    variants={dropdownVariants}
                  >
                    <div className="mt-8 left-1/2 -translate-x-[40%] border-blue-100  w-7xl max-w-[95vw] rounded-3xl border bg-blue-50 shadow-2xl z-50 overflow-hidden ">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
                        {dropdown?.map((item, index) => (
                          <ServiceDropdownCard key={item.label} item={item} index={index} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link
            key={label}
            href={href}
            className="text-sm font-medium transition-all hover:text-brand-primary"
            style={{
              color: active ? colors.brand.primary : colors.text.primary,
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(NavItems);
