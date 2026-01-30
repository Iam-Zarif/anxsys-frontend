"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { colors } from "@/constants/color";

const ArrowIcon = memo(FiArrowRight);
const ChevronDown = memo(FiChevronDown);
const MenuIcon = memo(FiMenu);
const CloseIcon = memo(FiX);

const navItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Custom Software Development",
        href: "/services/custom-software",
      },
      { label: "ERP & Business Systems", href: "/services/erp" },
      { label: "SaaS Product Development", href: "/services/saas" },
      { label: "Mobile App Development", href: "/services/mobile" },
      { label: "Web Application Development", href: "/services/web" },
      { label: "AI & Data Solutions", href: "/services/ai-data" },
      { label: "Cloud & DevOps Services", href: "/services/cloud-devops" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Medical ERP System", href: "/products/medical-erp" },
      {
        label: "Clinic/Diagnostic Center Management",
        href: "/products/clinic-diagnostic",
      },
      { label: "Live MCQ Exam System", href: "/products/live-mcq-exam" },
      { label: "LC Automation System", href: "/products/lc-automation" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// Define animation variants for dropdowns and drawer
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
    y: -20,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const mobileDropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const drawerVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [isDesktop, setIsDesktop] = useState(false);

  /* DESKTOP DROPDOWN STATE */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /* MOBILE STATE */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  /* Detect desktop */
  useEffect(() => {
    const resize = () => setIsDesktop(window.innerWidth >= 1024);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Scroll animation – desktop only */
  const width = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["100%", "50rem"] : ["100%", "100%"],
  );

  const radius = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["0px", "9999px"] : ["0px", "0px"],
  );

  const marginTop = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["0rem", "0.5rem"] : ["0rem", "0rem"],
  );

  const shadow = useTransform(
    scrollY,
    [0, 300],
    ["0 0 0 rgba(0,0,0,0)", colors.shadow.lg],
  );

  /* Lock body scroll on mobile */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        style={{
          width,
          borderRadius: radius,
          marginTop,
          boxShadow: shadow,
          left: "50%",
          translateX: "-50%",
          backgroundColor: colors.background.white,
        }}
        className="fixed top-0 z-50 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
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
                      className="flex items-center gap-1 text-sm font-medium"
                      style={{
                        color: isOpen
                          ? colors.brand.primary
                          : colors.text.primary,
                      }}
                    >
                      {label}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown />
                      </motion.div>
                    </button>

                    {/* Desktop Dropdown with Framer Motion */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[720px] max-w-[95vw] rounded-2xl border overflow-hidden"
                          style={{
                            backgroundColor: colors.background.white,
                            borderColor: colors.border.light,
                            boxShadow: colors.shadow.lg,
                          }}
                        >
                          <div className="grid sm:grid-cols-2 gap-4 p-5">
                            {dropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between p-4 rounded-xl border transition hover:scale-105"
                                style={{ borderColor: colors.border.default }}
                              >
                                <span>{item.label}</span>
                                <ArrowIcon className="-rotate-45" />
                              </Link>
                            ))}
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
                  className="text-sm font-medium"
                  style={{
                    color: active ? colors.brand.primary : colors.text.primary,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-demo"
              className="hidden sm:flex items-center gap-2 rounded-full border-2 px-5 py-2 font-semibold"
              style={{
                borderColor: colors.brand.primary,
                color: colors.brand.primary,
              }}
            >
              Get a Quote
              <ArrowIcon className="-rotate-45" />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.brand.primary}1A` }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              style={{ backgroundColor: colors.background.overlay }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-xs overflow-hidden"
              style={{ backgroundColor: colors.background.white }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <Image src="/logo.svg" alt="Logo" width={110} height={36} />
                <button onClick={() => setMobileOpen(false)}>
                  <CloseIcon className="text-2xl" />
                </button>
              </div>

              <nav className="px-6 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    const isOpen = mobileDropdown === item.label;

                    return (
                      <div key={item.label}>
                        <button
                          onClick={() =>
                            setMobileDropdown(isOpen ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-4 py-4 rounded-xl font-semibold"
                        >
                          <span>{item.label}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="ml-4 space-y-2"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between px-4 py-3 rounded-lg border transition hover:scale-105"
                                  style={{
                                    borderColor: colors.border.accent,
                                  }}
                                >
                                  {sub.label}
                                  <ArrowIcon className="-rotate-45" />
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-4 rounded-xl font-semibold"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
