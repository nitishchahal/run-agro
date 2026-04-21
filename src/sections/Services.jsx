import { motion } from "framer-motion";
import exportImg from "../assets/export.jpg";
import importImg from "../assets/import.jpg";
import { Link } from "react-router-dom";
import { FaGlobeAsia, FaFileSignature, FaShippingFast, FaCheckCircle, FaArrowRight } from "react-icons/fa";

function Services() {
  const importPoints = [
    "Quality Agricultural Products: We source the finest agricultural products from around the globe.",
    "Customs Clearance: Our team handles all customs procedures smoothly.",
    "Logistics and Transportation: End-to-end logistics for timely delivery.",
  ];

  const exportPoints = [
    "Market Access: Helping you reach global markets.",
    "Compliance and Documentation: Ensuring all export standards.",
    "Global Network: Reliable and cost-effective export solutions.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const checkVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-b from-white via-green-50/30 to-gray-100 py-12 sm:py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 -left-32 w-80 h-80 bg-green-200/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-32 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">

        {/* 🔹 IMPORT SERVICES */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)" }}
        >
          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-yellow-50/0 group-hover:from-green-50/40 group-hover:to-yellow-50/40 transition-all duration-500 pointer-events-none"
          />

          {/* Left Content */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-green-700 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-green-700 shadow-md"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaShippingFast className="text-lg" />
              </motion.span>
              Import Services
            </motion.h2>

            <motion.ul className="space-y-4 text-gray-700 leading-relaxed" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {importPoints.map((point, index) => (
                <motion.li key={point} className="flex gap-3 group/item" variants={itemVariants}>
                  <motion.div
                    custom={index}
                    variants={checkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <FaCheckCircle className="text-green-500 text-lg group-hover/item:text-green-600 transition-colors" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="group-hover/item:text-green-700 transition-colors"
                  >
                    {point}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            <Link to="/services">
              <motion.button
                className="mt-8 px-7 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group/btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                VIEW MORE
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="overflow-hidden rounded-2xl relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={importImg}
              alt="Import"
              className="w-full h-64 sm:h-[300px] object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-yellow-300/0 to-green-400/0 group-hover:from-green-400/10 group-hover:via-yellow-300/10 group-hover:to-green-400/10 transition-all duration-300 rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* 🔹 EXPORT SERVICES (Reverse Layout) */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)" }}
        >
          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-yellow-50/0 group-hover:from-green-50/40 group-hover:to-yellow-50/40 transition-all duration-500 pointer-events-none"
          />

          {/* Left Image */}
          <motion.div
            className="overflow-hidden rounded-2xl relative order-2 md:order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={exportImg}
              alt="Export"
              className="w-full h-64 sm:h-[300px] object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-yellow-300/0 to-green-400/0 group-hover:from-green-400/10 group-hover:via-yellow-300/10 group-hover:to-green-400/10 transition-all duration-300 rounded-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-green-700 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-green-700 shadow-md"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaGlobeAsia className="text-lg" />
              </motion.span>
              Export Services
            </motion.h2>

            <motion.ul className="space-y-4 text-gray-700 leading-relaxed" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {exportPoints.map((point, index) => (
                <motion.li key={point} className="flex gap-3 group/item" variants={itemVariants}>
                  <motion.div
                    custom={index}
                    variants={checkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    {index === 1 ? (
                      <FaFileSignature className="text-green-500 text-lg group-hover/item:text-green-600 transition-colors" />
                    ) : (
                      <FaCheckCircle className="text-green-500 text-lg group-hover/item:text-green-600 transition-colors" />
                    )}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="group-hover/item:text-green-700 transition-colors"
                  >
                    {point}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            <Link to="/services">
              <motion.button
                className="mt-8 px-7 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group/btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                VIEW MORE
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}

export default Services;