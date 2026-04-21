import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaGlobeAsia,
  FaLeaf,
  FaSearchDollar,
  FaShippingFast,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

function Services() {
  const serviceSections = [
    {
      title: "Import Services",
      icon: FaShippingFast,
      description:
        "At Run Agro Overseas, we provide comprehensive import services designed to facilitate the smooth and efficient procurement of high-quality agricultural products from around the world.",
      points: [
        "Product Sourcing: Our team identifies and secures high-quality products from reliable international suppliers.",
        "Customs Clearance: We handle all customs procedures, ensuring compliance with regulations.",
        "Logistics Management: Efficient transportation and warehousing for timely delivery.",
      ],
    },
    {
      title: "Export Services",
      icon: FaGlobeAsia,
      description:
        "Our export services are tailored to help you expand your business globally and reach new markets.",
      points: [
        "Market Research: Identifying profitable markets to maximize growth.",
        "Documentation: Managing export paperwork and certifications.",
        "Freight Forwarding: Reliable shipping ensuring safe delivery.",
      ],
    },
    {
      title: "Consulting Services",
      icon: FaUserTie,
      description:
        "We offer expert consulting services to help businesses navigate international trade complexities.",
      points: [
        "Trade Compliance: Guidance on laws and regulations.",
        "Risk Management: Strategies to minimize business risks.",
        "Market Entry Strategies: Helping you expand globally.",
      ],
    },
  ];

  const featureCards = [
    { icon: FaSearchDollar, label: "Strategic Planning", title: "Data-driven Market Decisions" },
    { icon: FaClipboardCheck, label: "Compliance", title: "Documentation & Standards" },
    { icon: FaShieldAlt, label: "Reliability", title: "Secure Global Operations" },
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

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    rest: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px rgba(34, 197, 94, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-b from-green-50/60 via-white to-green-50/50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        {/* Header Section */}
        <motion.div className="text-center max-w-3xl mx-auto" variants={headerVariants} initial="hidden" animate="visible">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs uppercase tracking-wider text-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <FaLeaf className="text-[11px]" />
            </motion.div>
            End-to-End Trade Solutions
          </motion.div>

          <motion.h1
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Services
          </motion.h1>

          <motion.p
            className="mt-3 text-sm sm:text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We provide full-spectrum import, export, and consulting support to help your
            business scale confidently across global markets.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="rounded-xl border border-green-100 bg-white/60 backdrop-blur-sm p-4 sm:p-5 shadow-sm hover:shadow-md transition cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-700 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.15, rotate: 12 }}
                  >
                    <Icon className="text-lg" />
                  </motion.span>
                  <div>
                    <motion.p className="text-xs uppercase tracking-wider text-gray-500">{card.label}</motion.p>
                    <motion.p className="text-base font-semibold text-gray-800">{card.title}</motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Service Sections */}
        <motion.div
          className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.title}
                className="rounded-2xl border border-green-100 bg-white/70 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-green-100 transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ pointerEvents: "none" }}
                />

                <div className="relative flex items-center gap-3">
                  <motion.span
                    className="h-11 w-11 rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-700 flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Icon className="text-xl" />
                  </motion.span>
                  <motion.h2
                    className="text-xl font-semibold text-green-700"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {section.title}
                  </motion.h2>
                </div>

                <motion.p
                  className="mt-4 text-gray-700 leading-relaxed relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {section.description}
                </motion.p>

                <motion.ul
                  className="mt-4 space-y-3 relative"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {section.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + index * 0.1 + pointIndex * 0.05 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 + pointIndex * 0.05, duration: 0.4 }}
                      >
                        <FaCheckCircle className="mt-0.5 text-green-500 shrink-0" />
                      </motion.div>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="mt-8 sm:mt-10 rounded-2xl border border-green-100 bg-gradient-to-br from-white/80 to-green-50/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ boxShadow: "0 20px 25px rgba(34, 197, 94, 0.1)" }}
        >
          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-green-400/0 via-yellow-300/20 to-green-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ pointerEvents: "none" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative">
            <motion.h3
              className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Why Choose Us?
            </motion.h3>

            <motion.p
              className="mt-3 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              At Run Agro Overseas, we are committed to delivering exceptional service and value.
              Our experience, expertise, and dedication to quality make us the ideal partner for
              your import and export needs.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;