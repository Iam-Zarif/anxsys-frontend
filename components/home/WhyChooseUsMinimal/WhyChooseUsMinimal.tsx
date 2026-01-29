"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Network,
  MessageSquare,
  Clock,
  Headphones,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group"
    >
      <div className="flex items-center gap-4 p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 text-gray-700 group-hover:bg-gray-100 transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSimple: React.FC = () => {
  const features = [
    {
      icon: <Users size={22} strokeWidth={2} />,
      title: "Experienced Engineers",
    },
    {
      icon: <Zap size={22} strokeWidth={2} />,
      title: "Agile Development Process",
    },
    {
      icon: <Network size={22} strokeWidth={2} />,
      title: "Scalable Architecture",
    },
    {
      icon: <MessageSquare size={22} strokeWidth={2} />,
      title: "Transparent Communication",
    },
    { icon: <Clock size={22} strokeWidth={2} />, title: "On-time Delivery" },
    {
      icon: <Headphones size={22} strokeWidth={2} />,
      title: "Post-Deployment Support",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Why Choose Us"
          subtitle="Partner with a team that values excellence, transparency, and your
            success."
          variant="light"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSimple;
