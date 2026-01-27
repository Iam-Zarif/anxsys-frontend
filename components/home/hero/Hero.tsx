"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

/* ---------------------------------
   Company logos (replace with real)
---------------------------------- */
const companyLogos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Meta", src: "/logos/meta.svg" },
  { name: "Netflix", src: "/logos/netflix.svg" },
  { name: "Spotify", src: "/logos/spotify.svg" },
];

/* ---------------------------------
   Variants
---------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const Hero = () => {
  /* ---------------------------------
     Scroll-based hero shrink
  ---------------------------------- */
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.92]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.75]);
  const y = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-[#0E39FF]/80 via-[#04C1FC]/70 to-[#31EEDD]/60" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 pt-32 pb-40"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            We Build Scalable Software
            <br />
            <span className="text-white/90">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-4xl mb-10"
          >
            ERP • SaaS • Mobile Apps • AI • Cloud • Digital Transformation
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-white/65 max-w-4xl mb-10"
          >
            Trusted by industry leaders worldwide to deliver innovative tech
            solutions that drive growth and efficiency.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white text-brand-primary rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              <span className="group-hover:tracking-wide transition-all">
                View Our Work
              </span>
              <FiArrowRight className="text-xl -rotate-45 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ---------------------------------
         Company Logos Marquee
      ---------------------------------- */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-8">
        <motion.div
          className="flex items-center gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...companyLogos, ...companyLogos].map((logo, i) => (
            <div
              key={i}
              className="relative h-10 w-36 flex-shrink-0 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
