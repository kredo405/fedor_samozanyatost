"use client"; // Добавляем, так как используем анимации

import { FC } from "react";
import Image from "next/image";
import Form from "@/ui/Form";
import Header from "../ui/Nav";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: FC = () => {
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

  const buttonHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <main className="font-sans antialiased bg-gray-100 text-gray-900">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative text-white py-10 md:py-42 text-center bg-contains md:bg-cover bg-right md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fon.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 py-10 md:py-18 bg-black/30 rounded-xl">
          <motion.h1
            className="text-4xl font-bold mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Установка и ремонт дверей, штукатурные работы
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Качественные работы с гарантией!
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
            variants={buttonHover}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Оставить заявку
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-16 px-6">
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
            <Link
              href="/doorInstallation"
              className="text-blue-600 hover:text-blue-800 font-bold"
            >
              Узнать больше →
            </Link>
          </motion.div>
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
            <Link
              href="/plasteringWork"
              className="text-blue-600 hover:text-blue-800 font-bold"
            >
              Узнать больше →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Почему выбирают нас?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-4 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/remont1.jpg"
                  alt="Опыт"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт</h3>
              <p className="text-gray-700">
                Более 10 лет успешной работы в сфере ремонта и установки дверей.
              </p>
            </motion.div>
            <motion.div
              className="p-4 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/remont.jpg"
                  alt="Качество"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-700">
                Мы используем только проверенные материалы и соблюдаем все
                стандарты качества.
              </p>
            </motion.div>
            <motion.div
              className="p-4 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/remont3.jpg"
                  alt="Гарантия"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-700">
                На все виды работ предоставляется гарантия до 5 лет.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Цены на услуги
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4">
                Установка дверного полотна
              </h3>
              <p className="text-gray-700 mb-4">
                Профессиональная установка дверей с гарантией качества.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                120 BYN
              </div>
              <motion.a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
                variants={buttonHover}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Заказать
              </motion.a>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4">
                Ремонт дверной коробки
              </h3>
              <p className="text-gray-700 mb-4">
                Восстановление и ремонт дверных коробок любой сложности.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                80 BYN
              </div>
              <motion.a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
                variants={buttonHover}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Заказать
              </motion.a>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4">Штукатурные работы</h3>
              <p className="text-gray-700 mb-4">
                Ровные стены и качественная отделка с использованием лучших
                материалов.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                от 50 BYN / м²
              </div>
              <motion.a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
                variants={buttonHover}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Заказать
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Form />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Штукатурные работы и установка дверей.
          Все права защищены.
        </p>
      </footer>
    </main>
  );
};

export default Home;
