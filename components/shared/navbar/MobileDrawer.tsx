"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiX } from "react-icons/fi";
import { colors } from "@/constants/color";
import { navItems } from "@/constants/navItems";

type MobileDrawerProps = {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ArrowIcon = memo(FiArrowRight);
const ChevronDown = memo(FiChevronDown);
const CloseIcon = memo(FiX);

const mobileDropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const MobileDrawer = ({ setMobileOpen }: MobileDrawerProps) => {
  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: colors.background.overlay }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileOpen(false)}
        />

        <motion.div
          className="absolute right-0 top-0 h-full w-full shadow-xl flex flex-col max-w-xs"
          style={{ backgroundColor: colors.background.white }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-300">
            <Image src="/logo.svg" alt="Logo" width={110} height={36} />
            <button onClick={() => setMobileOpen(false)}>
              <CloseIcon className="text-2xl" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isOpen = openDropdown === item.label;

              return (
                <div key={item.label}>
                  <button
                    onClick={() => hasDropdown && toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl font-semibold ${
                      !hasDropdown ? "cursor-default" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown />
                      </motion.div>
                    )}
                  </button>

                  {/* Dropdown Items */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={mobileDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="ml-4 space-y-2"
                        >
                          {item.dropdown!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between px-4 py-3 rounded-lg border transition hover:scale-105"
                              style={{ borderColor: colors.border.accent }}
                            >
                              {sub.label}
                              <ArrowIcon className="-rotate-45" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(MobileDrawer);
