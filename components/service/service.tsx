"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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

const colors = {
  brand: {
    primary: "#0E39FF",
    secondary: "#04C1FC",
    tertiary: "#31EEDD",
  },
  text: {
    primary: "#181818",
    secondary: "#4B5563",
    muted: "#9CA3AF",
    inverse: "#FFFFFF",
    accent: "#04C1FC",
  },
  background: {
    white: "#FFFFFF",
    light: "#F9FAFB",
    gray: "#F3F4F6",
    dark: "#06283D",
  },
};

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

const ServiceCard = ({
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

const ServiceDetailModal = ({
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

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  );

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/service`)
      .then((response) => {
        if (response.data.success) {
          setServices(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background.light }}
    >
      {/* Services Grid Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: colors.text.primary }}
            >
              What We Offer
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.text.secondary }}
            >
              From concept to deployment, we provide end-to-end software
              solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                onClick={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
