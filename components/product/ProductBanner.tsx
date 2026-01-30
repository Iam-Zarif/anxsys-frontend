// components/ProductBanner.tsx
// Updated: Added Framer Motion for text fade-in/slide, used gradient overlay from colors,
// improved responsiveness, added subtle image zoom animation.
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/constants/color";

interface ProductBannerProps {
  title: string;
  description: string;
  image: string;
}

export default function ProductBanner({
  title,
  description,
  image,
}: ProductBannerProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image src={image} alt={title} fill priority className="object-cover" />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: colors.gradient.darkOverlay }} // Using gradient overlay for modern look
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ color: colors.text.inverse }} // White for contrast
          >
            {title}
          </h1>
          <p
            className="mt-4 max-w-2xl text-lg"
            style={{ color: colors.text.muted }} // Muted for subtlety
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
