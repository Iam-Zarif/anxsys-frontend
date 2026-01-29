"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const ArrowIcon = memo(FiArrowRight);
const ChevronDown = memo(FiChevronDown);
const MenuIcon = memo(FiMenu);
const CloseIcon = memo(FiX);

const navItems = [
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
  { label: "Products", href: "/products" },
  { label: "Technology Stack", href: "/services/stack" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  /* Detect screen size for responsive animations */
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* HERO-AWARE SCROLL ANIMATION - Adjusted for responsiveness */
  const maxWidth = useTransform(
    scrollY,
    [0, 600],
    isLargeScreen ? ["100%", "65rem"] : ["100%", "100%"], // 1280px = 80rem; full width on mobile
  );
  const borderRadius = useTransform(
    scrollY,
    [0, 600],
    isLargeScreen ? ["0px", "9999px"] : ["0px", "0px"],
  );
  const marginTop = useTransform(
    scrollY,
    [0, 600],
    isLargeScreen ? ["0rem", ".5rem"] : ["0rem", "0rem"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 500],
    ["0 0 0 rgba(0,0,0,0)", "0 20px 40px rgba(0,0,0,0.15)"],
  );
  const paddingX = useTransform(
    scrollY,
    [0, 400],
    isLargeScreen ? ["2rem", "1.5rem"] : ["0rem", "0rem"], // Reduced padding values for realism; none on mobile to rely on inner px
  );

  /* Prevent body scroll when mobile menu open */
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* Animated Navbar */}
      <motion.header
        style={{
          width: maxWidth,
          maxWidth: "100vw", // Prevent overflow on smaller screens
          borderRadius,
          marginTop,
          boxShadow,
          left: "50%",
          translateX: "-50%",
          paddingLeft: paddingX,
          paddingRight: paddingX,
        }}
        className="fixed top-0 z-50 bg-white/95 backdrop-blur-md transition-colors"
      >
        <div className="mx-auto flex max-w-7xl justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, href, dropdown }) => {
              const isActive = pathname === href;

              if (dropdown) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-medium transition text-sm ${
                        isActive
                          ? "text-[#0E39FF] font-semibold"
                          : "text-[#181818] hover:text-[#0E39FF]"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`transition ${
                          servicesOpen ? "rotate-180 text-[#0E39FF]" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown - Made slightly responsive with max-width */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[700px] max-w-[90vw] rounded-2xl bg-white border shadow-xl transition-all ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-4 invisible"
                      }`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                        {dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between p-4 rounded-xl border hover:border-[#04C1FC] hover:shadow-md transition"
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
                  className={`font-medium transition text-sm ${
                    isActive
                      ? "text-[#0E39FF] font-semibold"
                      : "text-[#181818] hover:text-[#0E39FF]"
                  }`}
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
              className="hidden sm:flex items-center gap-2 rounded-full border-2 border-[#0E39FF] px-5 py-2 font-semibold hover:bg-[#0E39FF] hover:text-white transition"
            >
              Get a Quote
              <ArrowIcon className="-rotate-45" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-[#0E39FF]/10 flex items-center justify-center"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E7EB]">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={110}
                height={37}
                priority
                className="cursor-pointer"
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E39FF]/10 hover:bg-[#0E39FF]/20 transition-all duration-300"
              aria-label="Close menu"
            >
              <CloseIcon className="text-[#0E39FF] text-2xl" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col px-6 py-6 overflow-y-auto h-[calc(100%-80px)]">
            {navItems.map(({ label, href, dropdown }) => {
              const isActive = pathname === href;

              if (dropdown) {
                return (
                  <div key={label} className="mb-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between w-full px-4 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive || mobileServicesOpen
                          ? "bg-[#0E39FF]/10 text-[#0E39FF]"
                          : "text-[#181818] hover:bg-gray-100"
                      }`}
                    >
                      <span>{label}</span>
                      <ChevronDown
                        className={`text-lg transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        mobileServicesOpen
                          ? "max-h-[1000px] opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-2 pl-4">
                        {dropdown.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="group/item flex items-center justify-between px-4 py-3.5 text-base text-[#181818] rounded-lg border border-[#E5E7EB] hover:border-[#04C1FC] hover:bg-gradient-to-r hover:from-[#0E39FF]/5 hover:to-[#04C1FC]/5 transition-all duration-300 cursor-pointer"
                            style={{
                              animationDelay: mobileServicesOpen
                                ? `${index * 30}ms`
                                : "0ms",
                            }}
                          >
                            <span className="font-medium group-hover/item:text-[#0E39FF] transition-colors duration-300">
                              {item.label}
                            </span>
                            <ArrowIcon className="text-[#9CA3AF] group-hover/item:text-[#04C1FC] group-hover/item:translate-x-1 transition-all duration-300" />
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
                  onClick={closeMobileMenu}
                  className={`px-4 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer mb-2 ${
                    isActive
                      ? "bg-[#0E39FF]/10 text-[#0E39FF]"
                      : "text-[#181818] hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile CTA in Sidebar */}
            <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
              <Link
                href="/book-demo"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-linear-to-r from-[#0E39FF] to-[#04C1FC] px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowIcon className="-rotate-45 size-5" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
