"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { colors } from "@/constants/color";

type LeaderType = {
  name: string;
  position: string;
  image: string;
};

export const LeadershipCard = ({ leader }: { leader: LeaderType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-bl-2xl rounded-tr-2xl shadow-lg cursor-pointer aspect-square max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Image
        src={leader.image}
        alt={leader.name}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 flex flex-row justify-between items-center"
      >
        <div>
          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
            {leader.name}
          </h3>
          <p className="text-cyan-300 text-sm sm:text-md font-bold">
            {leader.position}
          </p>
        </div>

        <div className="flex gap-2">
          <div
            className="p-1 sm:p-2 bg-white rounded-full"
            style={{ backgroundColor: colors.background.white }}
          >
            <IoMdMail
              className="w-4 h-4 sm:w-4.5 sm:h-4.5"
              style={{ color: colors.text.primary }}
            />{" "}
          </div>
          <div
            className="p-1 sm:p-2 bg-white rounded-full"
            style={{ backgroundColor: colors.background.white }}
          >
            <FaLinkedinIn
              className="w-4 h-4 sm:w-4.5 sm:h-4.5"
              style={{ color: colors.text.primary }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
