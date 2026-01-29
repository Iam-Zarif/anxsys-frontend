// File: components/service/ServiceDetailModal.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
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

export const ServiceDetailModal = ({
  service,
  onClose,
}: {
  service: ServiceType | null;
  onClose: () => void;
}) => {
  if (!service) return null;

  const Icon = iconMap[service.icon];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div
            className="p-6 text-white relative"
            style={{
              background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Icon className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-blue-100 mt-1">{service.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.text.primary }}
              >
                Overview
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                {service.description}
              </p>
            </div>

            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.text.primary }}
              >
                Key Features
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: colors.brand.secondary }}
                    />
                    <span style={{ color: colors.text.secondary }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2"
                style={{
                  background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                }}
              >
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-8 py-3 rounded-lg font-semibold border-2"
                style={{
                  borderColor: colors.brand.primary,
                  color: colors.brand.primary,
                }}
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};