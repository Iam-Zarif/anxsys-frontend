"use client";

import React, { useState, useEffect, useRef } from "react";
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

const servicesData = [
  {
    id: 1,
    icon: Code2,
    title: "Custom Software Development",
    shortDesc:
      "Tailored software solutions designed to meet your unique business requirements.",
    description:
      "We build scalable, robust applications that drive efficiency and innovation. Our expert team uses cutting-edge technologies to create custom solutions that perfectly align with your business goals and processes.",
    features: [
      "Enterprise-grade architecture",
      "Agile development methodology",
      "Legacy system modernization",
      "API development & integration",
      "Microservices architecture",
      "Performance optimization",
    ],
    technologies: ["React", "Node.js", "Python", "Java", ".NET"],
    benefits: [
      "Reduced operational costs by 40%",
      "Faster time-to-market",
      "Scalable infrastructure",
      "24/7 technical support",
    ],
  },
  {
    id: 2,
    icon: Database,
    title: "ERP & Business Systems",
    shortDesc:
      "Comprehensive ERP solutions that streamline operations and improve productivity.",
    description:
      "Our ERP systems provide real-time insights across your entire organization, automating processes and improving decision-making with integrated business intelligence.",
    features: [
      "End-to-end ERP implementation",
      "Business process automation",
      "Supply chain management",
      "Custom module development",
      "Financial management integration",
      "Inventory & warehouse management",
    ],
    technologies: ["SAP", "Oracle", "Odoo", "Microsoft Dynamics"],
    benefits: [
      "Centralized data management",
      "Improved collaboration",
      "Real-time reporting",
      "Regulatory compliance",
    ],
  },
  {
    id: 3,
    icon: Cloud,
    title: "SaaS Product Development",
    shortDesc:
      "Build and launch scalable SaaS products with multi-tenant architecture.",
    description:
      "From concept to market, we help you create successful SaaS products with subscription management, seamless user experiences, and scalable infrastructure.",
    features: [
      "Multi-tenant architecture",
      "Payment gateway integration",
      "Analytics & reporting dashboards",
      "Scalable infrastructure design",
      "User management & authentication",
      "Automated billing systems",
    ],
    technologies: ["AWS", "Stripe", "Auth0", "PostgreSQL"],
    benefits: [
      "Recurring revenue model",
      "Global scalability",
      "Reduced infrastructure costs",
      "Rapid feature deployment",
    ],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc:
      "Native and cross-platform mobile applications for iOS and Android.",
    description:
      "We deliver exceptional mobile experiences that engage users and drive business growth, using the latest frameworks and best practices in mobile development.",
    features: [
      "iOS & Android development",
      "React Native & Flutter",
      "App Store optimization",
      "Push notifications & analytics",
      "Offline functionality",
      "In-app purchases",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    benefits: [
      "Cross-platform compatibility",
      "Enhanced user engagement",
      "Faster development cycles",
      "App store compliance",
    ],
  },
  {
    id: 5,
    icon: Globe,
    title: "Web Application Development",
    shortDesc:
      "Modern, responsive web applications built with cutting-edge technologies.",
    description:
      "We create fast, secure, and engaging web experiences that work seamlessly across all devices and browsers, from simple landing pages to complex enterprise applications.",
    features: [
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "E-commerce platforms",
      "Content management systems",
      "Responsive design",
      "SEO optimization",
    ],
    technologies: ["React", "Vue.js", "Next.js", "TypeScript"],
    benefits: [
      "Lightning-fast performance",
      "Mobile-first design",
      "Enhanced SEO rankings",
      "Offline capabilities",
    ],
  },
  {
    id: 6,
    icon: Brain,
    title: "AI & Data Solutions",
    shortDesc:
      "Harness the power of AI and machine learning for intelligent automation.",
    description:
      "We help you unlock insights, automate processes, and drive intelligent decision-making through advanced AI, machine learning, and data analytics solutions.",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Predictive analytics",
      "Computer vision solutions",
      "Data pipeline automation",
      "AI-powered chatbots",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python"],
    benefits: [
      "Automated decision-making",
      "Predictive insights",
      "Reduced manual work",
      "Competitive advantage",
    ],
  },
  {
    id: 7,
    icon: Server,
    title: "Cloud & DevOps Services",
    shortDesc:
      "Cloud migration and DevOps practices for reliability and scalability.",
    description:
      "We ensure your infrastructure is optimized for performance, security, and cost-efficiency with modern cloud architecture and automated deployment pipelines.",
    features: [
      "AWS, Azure, GCP migration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & optimization",
      "Container orchestration",
      "Security & compliance",
    ],
    technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
    benefits: [
      "99.9% uptime guarantee",
      "Automated deployments",
      "Cost optimization",
      "Enhanced security",
    ],
  },
];

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

  const Icon = service.icon;

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
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group"
      style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    >
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${colors.brand.secondary}, ${colors.brand.tertiary})`,
        }}
      />

      <div className="p-8">
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
          className="leading-relaxed mb-6"
          style={{ color: colors.text.secondary }}
        >
          {service.shortDesc}
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

type ServiceType = (typeof servicesData)[number];

const ServiceDetailModal = ({
  service,
  onClose,
}: {
  service: ServiceType | null;
  onClose: () => void;
}) => {
  if (!service) return null;

  const Icon = service.icon;

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
                <p className="text-blue-100 mt-1">{service.shortDesc}</p>
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
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

              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.text.primary }}
                >
                  Business Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: colors.brand.tertiary }}
                      />
                      <span style={{ color: colors.text.secondary }}>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.text.primary }}
              >
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      backgroundColor: colors.background.gray,
                      color: colors.brand.primary,
                    }}
                  >
                    {tech}
                  </motion.span>
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
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background.light }}
    >
      {/* Services Grid Section */}
      <section className="py-20 lg:py-28">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
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
