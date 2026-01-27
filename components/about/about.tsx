"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const aboutData = {
  hero: {
    headline: "About Anxsys !",
    description:
      "We're a dynamic software firm specializing in cutting-edge digital solutions that help businesses navigate the fast-paced tech world. Our expertise includes bespoke software, cloud architectures, and digital strategies, transforming obstacles into efficient, scalable systems.",
    stats: [
      { value: "27+", label: "Projects Completed" },
      { value: "18+", label: "Skilled Professionals" },
      { value: "10+", label: "Global Reach" },
    ],
  },
  mission: {
    title: "Our Mission",
    statement:
      "To equip global organizations with advanced software that sparks innovation, boosts efficiency, and delivers enduring value. We're devoted to excellence in tech, helping clients meet their objectives and lead in the digital era.",
  },
  vision: {
    title: "Our Vision",
    pillars: [
      {
        icon: Users,
        title: "Client Empowerment",
        description:
          "We focus on providing tangible results and building enduring collaborations. Your success drives us, and we strive to surpass expectations in every interaction.",
      },
      {
        icon: TrendingUp,
        title: "Team Growth",
        description:
          "We nurture our talent with ongoing education, skill enhancement, and advancement paths. Creativity blooms when our team is empowered to excel.",
      },
      {
        icon: Heart,
        title: "Community Impact",
        description:
          "We prioritize ethical operations and positive contributions to society and the environment. Sustainability and community involvement define us.",
      },
    ],
  },
  values: [
    {
      title: "Uncompromising Quality",
      description:
        "We uphold superior standards in all endeavors. From coding to UX, excellence is paramount. Our thorough testing guarantees durable, dependable, and scalable products.",
    },
    {
      title: "Empathetic Partnership",
      description:
        "We grasp clients' distinct needs and offer supportive, attentive assistance. Our team is committed to building trust through every engagement.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We own our responsibilities and pursue enhancement relentlessly. Our culture of accountability fosters growth for team and clients alike.",
    },
    {
      title: "Collaborative Innovation",
      description:
        "Ideas thrive in a supportive, joyful setting. We promote teamwork, creativity, and well-being to fuel innovation.",
    },
  ],
  leadership: [
    {
      name: "Michael Anderson",
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      name: "David Martinez",
      position: "COO",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    },
    {
      name: "Emily Thompson",
      position: "Head of Projects",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      name: "James Wilson",
      position: "Innovation Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    },
    {
      name: "Rachel Foster",
      position: "Client Success Director",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop",
    },
  ],
  approach: {
    title: "Our Methodology",
    description:
      "Blending agile practices with technical prowess, we create innovative, practical, and long-lasting solutions.",
    steps: [
      {
        icon: Lightbulb,
        title: "Ideation & Planning",
        description:
          "We delve into your objectives, hurdles, and aspirations to craft a customized strategy.",
      },
      {
        icon: Code,
        title: "Build & Innovate",
        description:
          "Our specialists develop robust, performant systems with the latest tech.",
      },
      {
        icon: TestTube,
        title: "Validation & QA",
        description:
          "Comprehensive testing secures reliability and deployment readiness.",
      },
      {
        icon: Rocket,
        title: "Launch & Maintain",
        description:
          "Seamless rollout and continuous support optimize your ROI.",
      },
    ],
  },
  compliance: {
    title: "Ethics & Compliance",
    description:
      "ANXSYS adheres to top-tier standards in security, privacy, and ethics. We ensure data protection and compliance with global regs like GDPR, ISO 27001, and SOC 2. Trust is built on transparency and integrity.",
  },
  roadmap: {
    title: "Future Roadmap",
    description:
      "Looking ahead, we're advancing AI, cloud tech, and partnerships to amplify client value.",
    milestones: [
      {
        year: "2025",
        title: "AI & Automation Rollout",
        description:
          "Introducing AI tools for enhanced productivity and insights.",
      },
      {
        year: "2026",
        title: "International Growth",
        description: "Expanding presence in Europe and Asia-Pacific markets.",
      },
      {
        year: "2027",
        title: "Eco-Innovation",
        description:
          "Pioneering sustainable tech and achieving net-zero goals.",
      },
    ],
  },
};

const ValueAccordion = ({ values }: { values: typeof aboutData.values }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {values.map((value, index) => (
        <motion.div
          key={index}
          className="border border-gray-300 rounded-xs overflow-hidden bg-gray-100 shadow-xs hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-lg font-semibold text-gray-900">
              {value.title}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              {value.description}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const LeadershipCard = ({
  leader,
}: {
  leader: (typeof aboutData.leadership)[0];
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-bl-2xl rounded-tr-2xl shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: 400, height: 400 }}
    >
      {/* Image */}
      <Image
        src={leader.image}
        alt={leader.name}
        fill
        className="object-cover transition-transform duration-300"
        sizes="400px"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 flex flex-row justify-between items-center"
        style={{ height: "25%" }}
      >
        <div>
          <h3 className="text-white font-semibold text-2lg">{leader.name}</h3>
          <p className="text-cyan-300 text-md font-bold">{leader.position}</p>
        </div>

        <div className="flex gap-2">
          <div className="p-2 bg-white rounded-full">
            <IoMdMail size={18} color="#181818" />
          </div>
          <div className="p-2 bg-white rounded-full">
            <FaLinkedinIn size={18} color="#181818" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-black py-16 md:py-24 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#181818] font-bold mb-4 leading-tight">
                {aboutData.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                {aboutData.hero.description}
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {aboutData.hero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#181818]">
                      {stat.value}
                    </div>
                    <div className="text-md sm:text-lg text-[#181818] mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 sm:h-80 md:h-96 lg:h-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            {/* Left: Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181818] text-left">
              {aboutData.mission.title}
            </h2>

            {/* Right: Content */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-left">
              {aboutData.mission.statement}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12"
          >
            {/* Left: Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181818] text-left">
              {aboutData.vision.title}
            </h2>

            {/* Right: Short Intro (optional) */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-left">
              Our vision is built on long-term impact, sustainable growth, and
              meaningful innovation that benefits our customers, our people, and
              society.
            </p>
          </motion.div>

          {/* Vision Pillars */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {aboutData.vision.pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-[#0E39FF90] to-[#04C1FC] rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 line-clamp-2 lg:line-clamp-3 leading-relaxed text-sm md:text-base">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Left Side – Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818]">
              Core Values
            </h2>

            {/* Right Side – Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full"
            >
              <ValueAccordion values={aboutData.values} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Leadership Section */}
      <section className="py-16 md:py-24 lg:py-22 text-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#181818] font-bold text-center mb-4"
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-base md:text-lg"
          >
            Discover the leaders propelling ANXSYS forward with vision and
            expertise.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {aboutData.leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <LeadershipCard leader={leader} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-16 md:py-24 lg:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818] mb-4">
              {aboutData.approach.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              {aboutData.approach.description}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.approach.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-xs hover:shadow-md hover:border-[#04C1FC] border-2 border-transparent transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-4xl font-bold text-gray-300 group-hover:text-gray-700 transition-colors duration-300">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-linear-to-br from-[#0E39FF90] via-[#04C1FC] to-[#31EEDD] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Compliance Section */}
      <section className="py-16 md:py-24 lg:py-22 bg-[#06283d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.compliance.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              {aboutData.compliance.description}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Future Roadmap Section */}
      <section className="py-16 md:py-24 lg:py-22 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818] mb-4">
              {aboutData.roadmap.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              {aboutData.roadmap.description}
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {aboutData.roadmap.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 pb-8 md:pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-[#0E39FF] via-[#04C1FC] to-[#31EEDD]"></div>
                <div className="absolute left-0 top-0 w-4 h-4 -ml-1.5 rounded-full bg-[#04C1FC] border-4 border-white shadow-lg"></div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xl font-bold text-[#181818] mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
