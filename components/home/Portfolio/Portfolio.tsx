"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  industry: string;
  techStack: string[];
  image: string;
  caseStudyUrl: string;
}
import { projects } from "@/constants/projects";
import SectionHeader from "@/components/ui/SectionHeader";

interface SimpleProjectCardProps {
  project: Project;
  index: number;
}

const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({
  project,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group"
    >
      <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-96 bg-gray-100 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          {/* Industry Tag */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-md shadow-sm">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:text-gray-700"
          >
            View Case Study
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

const Portfolio: React.FC = () => {
  const projectReduce = projects.slice(0, 4);
  console.log("new", projectReduce);
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Our Recent Projects"
          subtitle="Showcasing our latest work and digital innovations."
          variant="light"
        />

        {/* Grid - 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projectReduce.map((project, index) => (
            <SimpleProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
