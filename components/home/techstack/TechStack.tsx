"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Smartphone, Cloud, Server, Layers, Cpu } from "lucide-react";

import techStackData from "./techStackData.json";
import SectionHeader from "@/components/ui/SectionHeader";

const tabIconMap: Record<string, any> = {
  frontend: Code2,
  backend: Server,
  mobile: Smartphone,
  cloud: Cloud,
  devops: Layers,
  ai: Cpu,
};

const iconMap: Record<string, string> = {
  javascript: "/tech/javascript.avif",
  react: "/tech/react.avif",
  vue: "/tech/vuejs.avif",
  angular: "/tech/angular.avif",
  svelte: "/tech/svelte.avif",
  nodejs: "/tech/nodejs.avif",
  python: "/tech/python.avif",
  django: "/tech/django.avif",
  dotnet: "/tech/dotnet.avif",
  springboot: "/tech/Spring-Boot.webp",
  flutter: "/tech/flutter-icon.svg",
  swift: "/tech/Swift.webp",
  kotlin: "/tech/Kotlin.webp",
  aws: "/tech/aws-lambda.avif",
  gcp: "/tech/Google-Cloud.avif",
  azure: "/tech/Azure-Cloud.avif",
  docker: "/tech/docker.png",
  kubernetes: "/tech/kubernetes.jfif",
  cicd: "/tech/ci-cd.png",
  tensorflow: "/tech/tensorflow.jfif",
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeTechnologies =
    techStackData.tabs.find((tab) => tab.id === activeTab)?.technologies || [];

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-black/90 bg-linear-to-br from-[#0E39FF]/30 via-[#04C1FC]/20 to-[#31EEDD]/30 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Technology Stack"
          subtitle="Technologies we trust to build secure, and high-performance solutions."
          variant="dark"
        />

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {techStackData.tabs.map((tab) => {
            const Icon = tabIconMap[tab.id];
            const active = tab.id === activeTab;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all
                  ${
                    active
                      ? "bg-white/5 text-gray-300 border-white/10 hover:border-brand-primary"
                      : "bg-linear-to-r from-brand-primary to-brand-secondary text-white border-transparent"
                  }`}
              >
                <Icon size={18} />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6"
          >
            {activeTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 text-center backdrop-blur-md hover:border-brand-secondary transition"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(49,238,221,0.25),_transparent_70%)] opacity-0 hover:opacity-100 transition pointer-events-none" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Image
                    src={iconMap[tech.icon]}
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="mx-auto object-contain"
                  />
                </motion.div>

                <h4 className="mt-4 text-white text-sm font-semibold tracking-wide uppercase opacity-90">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
