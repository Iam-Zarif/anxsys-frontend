"use client";
import { colors } from "@/constants/color";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductOverviewProps {
  solution: string;
  image: string;
  title: string;
}

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function ProductOverview({
  solution,
  image,
  title,
}: ProductOverviewProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-5 md:gap-10 md:flex-row md:items-center">
      {/* Text */}
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: colors.text.primary }}
        >
          What is the Solution?
        </h2>
        <p
          className="text-lg leading-relaxed max-w-3xl"
          style={{ color: colors.text.secondary }}
        >
          {solution}
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
