"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import { FiCalendar, FiArrowRight, FiChevronDown } from "react-icons/fi";

const CalendarIcon = memo(FiCalendar);
const ArrowIcon = memo(FiArrowRight);
const ChevronDown = memo(FiChevronDown);

const navItems = [
  { label: "Products", href: "/products" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
  { label: "Stack", href: "/stack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-0 py-3">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ label, href, dropdown }) => {
            const isActive = pathname === href;

            if (dropdown) {
              return (
                <div
                  key={label}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-2 text-sm transition-all duration-500 ${
                      isActive
                        ? "font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))]"
                        : "font-medium text-gray-700 hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))]"
                    } cursor-pointer`}
                  >
                    {label}
                    <ChevronDown className="text-xs text-gray-700 group-hover:text-(--color-tertiary) transition-colors duration-300" />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 z-50">
                      {dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-(--color-tertiary) hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                        >
                          <span>{item.label}</span>
                          <ArrowIcon className="text-gray-400 group-hover:text-(--color-tertiary) transition-colors duration-300" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={label}
                href={href}
                className={`transition-all duration-500 px-2 text-sm cursor-pointer ${
                  isActive
                    ? "font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))]"
                    : "font-medium text-gray-700 hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="inline-block transition-transform duration-300 hover:scale-102 rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))] p-0.5">
          <Link
            href="/book-demo"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold cursor-pointer"
          >
            <CalendarIcon className="text-(--color-primary)" />
            <span className="text-transparent flex items-center gap-1 bg-clip-text bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary),var(--color-tertiary))]">
              <span className="hidden sm:block"> Get a </span>Quote
            </span>
            <ArrowIcon className="text-(--color-tertiary)" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
