import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiInfo,
  FiBox,
  FiTool,
  FiMail,
  FiMenu,
  FiX,
  FiPhone,
} from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { to: "/", label: "Home", icon: FiHome },
    { to: "/about", label: "About", icon: FiInfo },
    { to: "/products", label: "Products", icon: FiBox },
    { to: "/services", label: "Services", icon: FiTool },
    { to: "/contact", label: "Contact", icon: FiMail },
  ];

  const getNavClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 scale-110 font-semibold"
      : "text-white hover:text-yellow-300 hover:scale-110 font-medium transition-all duration-300";

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0, y: -20, scaleY: 0.95, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const hamburgerVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <motion.div
      className="sticky top-0 z-50 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white shadow-lg shadow-green-900/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center gap-4">
          {/* Logo & Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/"
              className="text-lg sm:text-xl md:text-lg lg:text-2xl font-bold md:tracking-tight lg:tracking-widest text-white hover:text-yellow-300 transition-colors duration-300 whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              Run Agro Overseas
            </NavLink>
          </motion.div>

          {/* Hamburger Menu Button */}
          <motion.button
            type="button"
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-colors duration-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <FiX size={24} className="text-white" />
              ) : (
                <FiMenu size={24} className="text-white" />
              )}
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2 lg:gap-6 font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.to}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-yellow-300 bg-white/10"
                          : "text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="hidden md:inline">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-yellow-300 rounded-t-full"
                            layoutId="navbar-underline"
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="md:hidden mt-4 space-y-2 pb-2"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.to} variants={itemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            size={22}
                            className={`flex-shrink-0 ${
                              isActive ? "text-yellow-300" : "text-white"
                            }`}
                          />
                          <span>{item.label}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto text-yellow-300"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              →
                            </motion.div>
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Navbar;