"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { colors } from "@/constants/color";

const ArrowIcon = memo(FiArrowRight);
const ChevronDown = memo(FiChevronDown);
const MenuIcon = memo(FiMenu);
const CloseIcon = memo(FiX);

const navItems = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Custom Software Development", href: "/services/custom-software" },
      { label: "ERP & Business Systems", href: "/services/erp" },
      { label: "SaaS Product Development", href: "/services/saas" },
      { label: "Mobile App Development", href: "/services/mobile" },
      { label: "Web Application Development", href: "/services/web" },
      { label: "AI & Data Solutions", href: "/services/ai-data" },
      { label: "Cloud & DevOps Services", href: "/services/cloud-devops" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Technology Stack", href: "/services/stack" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [isDesktop, setIsDesktop] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* Desktop detection */
  useEffect(() => {
    const resize = () => setIsDesktop(window.innerWidth >= 1024);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Scroll animation – DESKTOP ONLY */
  const width = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["100%", "60rem"] : ["100%", "100%"]
  );

  const radius = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["0px", "9999px"] : ["0px", "0px"]
  );

  const marginTop = useTransform(
    scrollY,
    [0, 400],
    isDesktop ? ["0rem", "0.5rem"] : ["0rem", "0rem"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 300],
    ["0 0 0 rgba(0,0,0,0)", colors.shadow.lg]
  );

  /* Lock body scroll on mobile */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR SHELL */}
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
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, href, dropdown }) => {
              const active = pathname === href;

              if (dropdown) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-medium transition"
                      style={{
                        color: active
                          ? colors.brand.primary
                          : colors.text.primary,
                      }}
                    >
                      {label}
                      <ChevronDown
                        className={`transition ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        style={{
                          color: servicesOpen
                            ? colors.brand.primary
                            : colors.text.primary,
                        }}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[720px] max-w-[95vw] rounded-2xl border transition-all ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-3"
                      }`}
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
                            className="flex items-center justify-between p-4 rounded-xl border transition"
                            style={{
                              borderColor: colors.border.default,
                            }}
                          >
                            <span>{item.label}</span>
                            <ArrowIcon className="-rotate-45" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium transition"
                  style={{
                    color: active
                      ? colors.brand.primary
                      : colors.text.primary,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-demo"
              className="hidden sm:flex items-center gap-2 rounded-full border-2 px-5 py-2 font-semibold transition"
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
              style={{
                backgroundColor: `${colors.brand.primary}1A`,
              }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: colors.background.overlay }}
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm shadow-xl"
            style={{ backgroundColor: colors.background.white }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <Image src="/logo.svg" alt="Logo" width={110} height={36} />
              <button onClick={() => setMobileOpen(false)}>
                <CloseIcon className="text-2xl" />
              </button>
            </div>

            <nav className="px-6 py-6 space-y-2 overflow-y-auto">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-4 rounded-xl font-semibold"
              >
                <span>Services</span>
                <ChevronDown
                  className={`transition ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 space-y-2">
                  {navItems[0].dropdown!.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border"
                      style={{ borderColor: colors.border.accent }}
                    >
                      {item.label}
                      <ArrowIcon className="-rotate-45" />
                    </Link>
                  ))}
                </div>
              )}

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-4 rounded-xl font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Navbar);
