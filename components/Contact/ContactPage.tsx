"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building2,
  Clock,
  Globe,
  CheckCircle2,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  HeadphonesIcon,
} from "lucide-react";
import { colors } from "@/constants/color";
import { Variants } from "framer-motion";




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@xpartex.com", "support@xpartex.com"],
      link: "mailto:info@xpartex.com",
      color: colors.brand.primary,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567",
      color: colors.brand.secondary,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Tech Street, Suite 400", "San Francisco, CA 94107"],
      link: "https://maps.google.com",
      color: colors.brand.tertiary,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
      link: null,
      color: colors.status.info,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // now TypeScript is happy
    },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }, // ✅ cast string
  },
};

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Banner Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&fit=crop"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.brand.primary}E6 50%, ${colors.brand.secondary}CC 50%, ${colors.brand.tertiary}B3 100%)`,
            }}
          />
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full opacity-20"
            style={{ background: colors.background.white }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full opacity-10"
            style={{ background: colors.background.white }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <motion.div
              className="max-w-4xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30"
              >
                <HeadphonesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
              >
                Let&apos;s Build Something{" "}
                <span className="block mt-2">Amazing Together</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-md md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              >
                Have a project in mind? We&apos;d love to hear from you. Our team is
                ready to transform your ideas into reality.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </a>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Chat
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  {/* Gradient Accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                    style={{ background: colors.gradient.brand }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: info.color + "15",
                    }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: info.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}

                  {/* Link */}
                  {info.link && (
                    <a
                      href={info.link}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold group-hover:gap-3 transition-all"
                      style={{ color: info.color }}
                    >
                      Learn More
                      <Send className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section id="contact-form" className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.brand.primary} 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full"
              style={{
                backgroundColor: colors.brand.primary + "10",
                border: `2px solid ${colors.brand.primary}30`,
              }}
            >
              <MessageSquare
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: colors.brand.primary }}
              />
              <span
                className="text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase"
                style={{ color: colors.brand.primary }}
              >
                Send Us A Message
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Have a Project?{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: colors.gradient.brand }}
              >
                Let&apos;s Talk
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within
              24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company & Subject */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 appearance-none bg-white cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="project">New Project</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none text-gray-900"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 sm:py-5 rounded-xl font-bold text-white text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    style={{
                      background: submitSuccess
                        ? colors.status.success
                        : colors.gradient.brand,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Google Map */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-[300px] sm:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977804107473!2d-122.41941548468146!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: colors.brand.primary + "15" }}
                  >
                    <Globe
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: colors.brand.primary }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Connect With Us
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Follow us on social media for updates, insights, and more!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all group"
                      >
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: social.color + "15" }}
                        >
                          <Icon
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{ color: social.color }}
                          />
                        </div>
                        <span className="font-semibold text-gray-700">
                          {social.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.3 }}
        />
      </motion.a>
    </div>
  );
};

export default ContactPage;
