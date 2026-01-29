// File: components/service/ServiceCard.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Brain,
  Server,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { colors } from "@/constants/color";


const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Brain,
  Server,
};

type ServiceType = {
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
};

export const ServiceCard = ({
  service,
  index,
  onClick,
}: {
  service: ServiceType;
  index: number;
  onClick: (service: ServiceType) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      { threshold: 0.1 },
    );

    const node = cardRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [index]);

  const Icon = iconMap[service.icon];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      onClick={() => onClick(service)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group relative"
      style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity"
        style={{
          background: `radial-gradient(circle, ${colors.brand.tertiary} 0%, transparent 100%)`,
        }}
      />
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${colors.brand.secondary}, ${colors.brand.tertiary})`,
        }}
      />

      <div className="p-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.brand.secondary})`,
          }}
        >
          <Icon className="w-8 h-8" style={{ color: colors.text.inverse }} />
        </motion.div>

        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: colors.text.primary }}
        >
          {service.title}
        </h3>

        <p
          className="leading-relaxed mb-6 text-sm md:text-base"
          style={{ color: colors.text.secondary }}
        >
          {service.description}
        </p>

        <div className="space-y-3 mb-6">
          {service.features.slice(0, 4).map((feature: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: colors.brand.secondary }}
              />
              <span
                className="text-sm"
                style={{ color: colors.text.secondary }}
              >
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 font-semibold"
          style={{ color: colors.brand.primary }}
        >
          View Details
          <ArrowRight className="w-6 h-6 -rotate-50" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="h-1 origin-left"
        style={{
          background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
        }}
      />
    </motion.div>
  );
};