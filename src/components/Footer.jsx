import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLeaf,
  FaChevronRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", href: "#", color: "#1877F2" },
    { icon: FaTwitter, label: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: FaInstagram, label: "Instagram", href: "#", color: "#E4405F" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#", color: "#0A66C2" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918120121700", color: "#25D366" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-[#1b1b1b] to-[#101010] text-gray-300 border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand Section */}
        <motion.div
          className="lg:col-span-1"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-600/10 px-3 py-1 text-xs uppercase tracking-wider text-green-400"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <FaLeaf className="text-[10px]" />
            </motion.div>
            Trusted Global Agro Partner
          </motion.div>

          <motion.h2
            className="mt-4 text-xl sm:text-2xl font-semibold text-white tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            RUN AGRO OVERSEAS
          </motion.h2>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Certified by APEDA, we deliver quality-focused import and export services
            with dependable logistics, transparent operations, and timely global delivery.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return item.href === "#" ? (
                <motion.button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500/50 transition-all duration-300 overflow-hidden group relative"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: item.color }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div whileHover={{ rotate: 12 }}>
                    <Icon className="text-lg" />
                  </motion.div>
                </motion.button>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500/50 transition-all duration-300 overflow-hidden group relative"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: item.color }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div whileHover={{ rotate: 12 }}>
                    <Icon className="text-lg" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Quick Links - Hidden on Mobile */}
        <motion.div
          className="hidden md:block lg:col-span-1 lg:pl-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-white mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Quick Links
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-2.5 sm:gap-3 max-w-[220px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {quickLinks.map((item, index) => (
              <motion.div key={item.to} variants={itemVariants}>
                <NavLink
                  to={item.to}
                  className="group inline-flex items-center justify-between rounded-md border border-transparent bg-white/[0.02] px-3 py-2.5 text-sm text-gray-400 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/5 transition w-full"
                >
                  <span>{item.label}</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronRight className="text-[10px] text-green-500" />
                  </motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          className="lg:col-span-1"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-white mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          <motion.div
            className="space-y-4 text-sm text-gray-400"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Address */}
            <motion.div className="flex items-start gap-3 group" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.2, color: "#22c55e" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-green-500 mt-0.5 flex-shrink-0" />
              </motion.div>
              <motion.p className="leading-relaxed group-hover:text-green-400 transition">
                40, Vidhya Nagar Mangrul Road,
                <br />
                Khargone (M.P.), India 451001
              </motion.p>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start gap-3 break-all group" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.2, color: "#22c55e" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-green-500 mt-1 flex-shrink-0" />
              </motion.div>
              <div className="group-hover:text-green-400 transition">
                <motion.a
                  href="mailto:runagrooverseas@gmail.com"
                  className="hover:text-green-400 transition block"
                  whileHover={{ x: 5 }}
                >
                  runagrooverseas@gmail.com
                </motion.a>
                <br />
                <motion.a
                  href="mailto:info@runagrooverseas.com"
                  className="hover:text-green-400 transition block"
                  whileHover={{ x: 5 }}
                >
                  info@runagrooverseas.com
                </motion.a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="flex items-center gap-3 group" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.2, color: "#22c55e" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhoneAlt className="text-green-500 flex-shrink-0" />
              </motion.div>
              <motion.a
                href="tel:+918120121700"
                className="hover:text-green-400 transition group-hover:text-green-400"
                whileHover={{ x: 5 }}
              >
                +91 8120 121 700
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Location - Full width on mobile, col-span on desktop */}
        <motion.div
          className="sm:col-span-2 lg:col-span-1"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-white mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h2>

          <motion.div
            className="w-full h-[220px] rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
            whileHover={{ borderColor: "rgb(34, 197, 94)" }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Khargone%20Madhya%20Pradesh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="border-t border-white/10 bg-black/30 text-center py-4 px-4 text-xs sm:text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Copyright © {year}{" "}
        <motion.span
          className="text-green-500 font-medium hover:text-green-400 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Run Agro Overseas
        </motion.span>
        . All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}

export default Footer;