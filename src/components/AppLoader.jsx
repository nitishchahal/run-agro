import { motion } from "framer-motion";
import { FaLeaf, FaSpinner, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function AppLoader({ duration = 4000 }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 3, repeat: Infinity, ease: "linear" },
    },
  };

  const leafVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      rotate: [0, 360, 0],
      transition: {
        duration: 3,
        delay: i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const completeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.6, delay: isComplete ? 0.2 : 0, ease: "easeInOut" }}
      style={{ 
        pointerEvents: isComplete ? "none" : "auto",
        visibility: isComplete ? "hidden" : "visible",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Loader Container */}
      <motion.div
        className="relative flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isComplete ? "hidden" : "visible"}
      >
        {/* Animated circular loader with multiple rings */}
        <motion.div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-600 border-r-green-400"
            variants={rotateVariants}
            animate="animate"
            style={{ pointerEvents: "none" }}
          />

          {/* Middle pulsing ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-yellow-300"
            variants={pulseVariants}
            animate="animate"
            style={{ pointerEvents: "none" }}
          />

          {/* Center logo area */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative flex items-center justify-center"
              animate={isComplete ? { scale: 0 } : { scale: [1, 1.1, 1] }}
              transition={isComplete ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
                <motion.div
                  animate={isComplete ? { rotate: 0, scale: 0 } : { rotate: 360 }}
                  transition={isComplete ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaLeaf className="text-white text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating leaf decorations */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 text-2xl"
              style={{
                top: "10%",
                left: `${50 + Math.cos((i / 3) * Math.PI * 2) * 40}%`,
                marginLeft: "-12px",
                marginTop: "-12px",
              }}
              custom={i}
              variants={leafVariants}
              animate={isComplete ? "hidden" : "animate"}
            >
              <FaLeaf opacity={0.6} />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={isComplete ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
            transition={isComplete ? { duration: 0.3 } : { delay: 0.5, duration: 0.6 }}
          >
            RUN AGRO OVERSEAS
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
            transition={isComplete ? { duration: 0.3 } : { delay: 0.7, duration: 0.6 }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>

        {/* Animated loading dots */}
        <motion.div
          className="flex items-center gap-2 mt-4"
          variants={itemVariants}
          animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
          transition={isComplete ? { duration: 0.3 } : { duration: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-green-600"
              animate={isComplete ? { y: 0, opacity: 0 } : { y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
              transition={isComplete ? { duration: 0.3 } : { duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>

        {/* Progress bar with gradient */}
        <motion.div
          className="mt-8 w-64 h-1 rounded-full bg-gray-200 overflow-hidden"
          variants={itemVariants}
          animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
          transition={isComplete ? { duration: 0.3 } : { duration: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-600 via-yellow-300 to-green-600 rounded-full"
            animate={isComplete ? { x: "0" } : { x: ["-100%", "100%"] }}
            transition={isComplete ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Status indicator */}
        <motion.div
          className="mt-6 flex items-center gap-2 text-sm text-gray-600"
          variants={itemVariants}
          animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
          transition={isComplete ? { duration: 0.3 } : { duration: 1 }}
        >
          <motion.div
            animate={isComplete ? { rotate: 0, scale: 0 } : { rotate: 360 }}
            transition={isComplete ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <FaSpinner className="text-green-600" />
          </motion.div>
          <span>Preparing quality products for you...</span>
        </motion.div>
      </motion.div>

      {/* Completion Checkmark */}
      {isComplete && (
        <motion.div
          className="relative flex flex-col items-center gap-4"
          variants={completeVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="text-white text-4xl" />
          </motion.div>
          <motion.p
            className="text-lg font-semibold text-green-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ready to explore!
          </motion.p>
        </motion.div>
      )}

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-8 text-xs text-gray-500 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        transition={{ delay: isComplete ? 0 : 1, duration: 0.6 }}
      >
        Trusted by global agricultural enterprises since 2020
      </motion.p>
    </motion.div>
  );
}

export default AppLoader;
