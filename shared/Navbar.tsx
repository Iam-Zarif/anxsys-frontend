"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { colors } from "@/constants/color";
import NavItems from "@/components/shared/navbar/NavItems";
import MobileDrawer from "@/components/shared/navbar/MobileDrawer";

const MenuIcon = memo(FiMenu);
const CloseIcon = memo(FiX);
const ArrowIcon = memo(FiArrowRight);

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        style={{
          width,
          borderRadius: radius,
          marginTop,
          boxShadow: shadow,
          left: "50%",
          translateX: "-50%",
        }}
        className="fixed top-0 bg-[#f7f8fc]  z-50 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl  px-3 py-2 flex items-center justify-between">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <NavItems />

          <div className="flex items-center gap-3">
            <Link
              href="/book-demo"
              className="hidden sm:flex items-center gap-2 rounded-full border-2 px-4 py-2 font-semibold transition"
              style={{
                borderColor: colors.brand.primary,
                color: colors.brand.primary,
              }}
            >
              Get a Quote
              <ArrowIcon className="-rotate-45" />
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition"
              style={{
                backgroundColor: `${colors.brand.primary}1A`,
              }}
            >
              {mobileOpen ? (
                <CloseIcon className="text-xl" />
              ) : (
                <MenuIcon className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {mobileOpen && <MobileDrawer setMobileOpen={setMobileOpen} />}
    </>
  );
};

export default memo(Navbar);
