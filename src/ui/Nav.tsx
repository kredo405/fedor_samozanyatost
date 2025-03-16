"use client"; // Добавляем директиву, так как используем состояние и анимации

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для бургер-меню

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Варианты анимации
  const fadeInUp = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1, // Задержка между дочерними элементами
      },
    },
  };

  const linkHover = {
    whileHover: { scale: 1.1, color: "#60A5FA", transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className="bg-white shadow-md fixed top-0 w-full z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={200}
              height={50}
              className="mr-4"
            />
          </Link>
        </motion.div>

        {/* Кнопка бургер-меню (показывается только на мобильных) */}
        <motion.button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>

        {/* Навигация */}
        <motion.nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10 shadow-md md:shadow-none`}
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          // Для десктопа всегда видимый
          {...(isOpen === false && {
            initial: "visible",
            animate: "visible",
          })}
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col md:flex-row md:space-x-6"
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/servicesPage"
                className="block md:inline-block hover:text-blue-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Услуги
                </motion.span>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contactsPage"
                className="block md:inline-block hover:text-blue-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Контакты
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
