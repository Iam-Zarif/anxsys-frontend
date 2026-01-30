"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


const companyLogos = [
  { name: "Google", src: "/logos/google.png" },
  { name: "Microsoft", src: "/logos/microsoft.png" },
  { name: "Amazon", src: "/logos/amazon.png" },
  { name: "Meta", src: "/logos/meta.png" },
  { name: "Netflix", src: "/logos/netflex.png" },
  { name: "Spotify", src: "/logos/spotify.png" },
];


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

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 100], [1, 0.92]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.75]);
  const y = useTransform(scrollY, [0, 100], [0, -80]);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="relative mx-auto px-3 w-full max-w-[98%] h-[88vh] overflow-hidden rounded-2xl mt-16"
    >
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
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <motion.div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center">
          {" "}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl  lg:text-7xl font-bold text-white mb-4"
            >
              We Build Scalable Software
              <br />

            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-md md:text-xl text-white/80 max-w-3xl mb-10"
            >
              We build powerful, future-ready software that helps businesses
              move faster, work smarter, and scale without limits. From ERP and
              SaaS platforms to mobile apps, AI-powered solutions, cloud
              systems, and end-to-end digital transformation
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-[#181818] hover:bg-[#181818] hover:text-white  rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                <span className="group-hover:tracking-wide transition-all">
                  View Our Work
                </span>
                <FiArrowRight className="text-xl -rotate-45 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          <Image
            src="https://siteinvention.com/wp-content/uploads/2022/03/new-gf.gif"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-180"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-0 right-0 z-10 overflow-hidden">
        <motion.div
          className="flex items-center gap-12 px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...companyLogos, ...companyLogos].map((logo, i) => (
            <div
              key={i}
              className="
                relative
                h-10
                sm:h-12
                md:h-16
                w-32
                sm:w-36
                md:w-45
                shrink-0
                opacity-90
              "
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
      </div>
    </motion.div>
  );
};

export default Hero;
