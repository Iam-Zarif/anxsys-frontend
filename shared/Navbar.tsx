"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiCalendar, FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const CalendarIcon = memo(FiCalendar);
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
  { label: "Technology Stack", href: "/stack" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? "py-3" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={isScrolled ? 100 : 120}
              height={isScrolled ? 33 : 40}
              priority
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, href, dropdown }) => {
              const isActive = pathname === href;

              if (dropdown) {
                return (
                  <div
                    key={label}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-2 text-base transition-all duration-300 ${
                        isActive
                          ? "font-bold text-[#0E39FF]"
                          : "font-medium text-[#181818] hover:text-[#0E39FF] hover:font-semibold"
                      } cursor-pointer relative`}
                    >
                      {label}
                      <ChevronDown
                        className={`text-base transition-all duration-300 ${
                          servicesOpen
                            ? "rotate-180 text-[#0E39FF]"
                            : "rotate-0 text-[#4B5563]"
                        }`}
                      />
                      {/* Animated underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#0E39FF] transition-all duration-300 ${
                          servicesOpen ? "w-full" : "w-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu - Grid Layout */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[95vw] max-w-[700px] lg:w-[700px] rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden transition-all duration-500 origin-top ${
                        servicesOpen
                          ? "opacity-100 scale-100 translate-y-0 visible"
                          : "opacity-0 scale-95 -translate-y-4 invisible"
                      }`}
                      style={{
                        boxShadow: "0 20px 60px rgba(14, 57, 255, 0.15)",
                        maxHeight: "550px",
                      }}
                    >
                      {/* Arrow pointing up */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#E5E7EB] rotate-45" />

                      {/* Grid Container */}
                      <div
                        className="relative bg-white p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto"
                        style={{ maxHeight: "530px" }}
                      >
                        {dropdown.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group/item flex items-center justify-between px-6 py-5 text-base text-[#181818] rounded-xl border border-[#E5E7EB] hover:border-[#04C1FC] hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden"
                            style={{
                              animationDelay: servicesOpen
                                ? `${index * 40}ms`
                                : "0ms",
                            }}
                          >
                            {/* Gradient background effect on hover */}
                            <span
                              className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(14, 57, 255, 0.03), rgba(4, 193, 252, 0.05))",
                              }}
                            />

                            <span className="relative z-10 font-medium group-hover/item:text-[#0E39FF] group-hover/item:translate-x-1 transition-all duration-300">
                              {item.label}
                            </span>
                            <ArrowIcon className="relative z-10 text-[#9CA3AF] group-hover/item:text-[#04C1FC] group-hover/item:translate-x-1 transition-all duration-300" />
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
                  className={`transition-all duration-300 px-2 text-base cursor-pointer relative group ${
                    isActive
                      ? "font-bold text-[#0E39FF]"
                      : "font-medium text-[#181818] hover:text-[#0E39FF] hover:font-semibold"
                  }`}
                >
                  {label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#0E39FF] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side: CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <div
              className={`relative inline-block transition-all duration-300 hover:scale-105 rounded-full p-0.5 ${
                isScrolled ? "scale-95" : "scale-100"
              }`}
            >
              <Link
                href="/book-demo"
                className="flex items-center gap-2 rounded-full bg-white border-2 border-[#0E39FF] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold cursor-pointer group relative overflow-hidden"
                onClick={closeMobileMenu}
              >
                <span className="relative z-10 font-semibold group-hover:tracking-wide transition-all duration-300">
                  <span className="hidden sm:inline">Get a </span>Quote
                </span>
                <ArrowIcon className="relative z-10 -rotate-45 size-4 sm:size-5 text-[#0E39FF] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E39FF]/10 hover:bg-[#0E39FF]/20 transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="text-[#0E39FF] text-2xl transition-transform duration-300 rotate-90" />
              ) : (
                <MenuIcon className="text-[#0E39FF] text-2xl transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </header>

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
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#0E39FF] to-[#04C1FC] px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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