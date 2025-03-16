"use client"; // Клиентский компонент для анимаций

import { FC } from "react";
import Header from "@/ui/Nav";
import Form from "@/ui/Form";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesPage: FC = () => {
  // Варианты анимации
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Задержка между дочерними элементами
      },
    },
  };

  const linkHover = {
    whileHover: {
      scale: 0.95,
      color: "#60A5FA",
      transition: { duration: 0.3 },
    }, // Увеличение и смена цвета
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Services Section */}
      <section id="services" className="container mx-auto py-20 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Наши услуги
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Установка и ремонт дверей */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">
              Установка и ремонт дверей
            </h3>
            <p className="text-gray-700 mb-4">
              Профессиональный монтаж и ремонт дверных полотен, коробок и
              замков. Гарантия качества!
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Доступно только в Ивановском, Дрогиченском и Пинском районе
            </p>
            <motion.div
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Link
                href="/doorInstallation"
                className="text-blue-600 hover:text-blue-800 font-bold"
              >
                Узнать больше →
              </Link>
            </motion.div>
          </motion.div>

          {/* Штукатурные работы */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Штукатурные работы</h3>
            <p className="text-gray-700 mb-4">
              Ровные стены и идеальная отделка! Профессиональная штукатурка с
              использованием качественных материалов.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Доступно только в Ивановском, Дрогиченском и Пинском районе
            </p>
            <motion.div
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Link
                href="/plasteringWork"
                className="text-blue-600 hover:text-blue-800 font-bold"
              >
                Узнать больше →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section>
        <Form />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            © 2025 Штукатурные работы. Все права защищены.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href="tg://resolve?domain=YourUsername"
              className="hover:text-blue-400"
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Telegram
            </motion.a>
            <motion.a
              href="https://wa.me/375291234567"
              className="hover:text-blue-400"
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="viber://chat?number=%2B375291234567"
              className="hover:text-blue-400"
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Viber
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
