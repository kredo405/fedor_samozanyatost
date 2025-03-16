"use client"; // Клиентский компонент для анимаций и слайдера

import { FC } from "react";
import Image from "next/image";
import Header from "@/ui/Nav";
import Form from "@/ui/Form";
import WorkExamplesSlider from "@/ui/slider";
import { motion } from "framer-motion";

const examples = [
  "/example1.jpg",
  "/example2.jpg",
  "/example3.jpg",
  "/example4.jpg",
];

const DoorInstallationAndRepairPage: FC = () => {
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

  const linkHover = {
    whileHover: { scale: 1.1, color: "#60A5FA", transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-32 text-center mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Установка и ремонт дверей
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Быстро, качественно и с гарантией. Ваши двери — наша забота!
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition"
            variants={buttonHover}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Заказать услугу
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Наши услуги
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Установка дверей",
                desc: "Межкомнатные и входные двери.",
              },
              {
                title: "Ремонт дверей",
                desc: "Замена петель, замков, фурнитуры.",
              },
              { title: "Перестановка дверей", desc: "Выравнивание и перенос." },
              {
                title: "Установка замков",
                desc: "Надежные замки для безопасности.",
              },
              { title: "Реставрация", desc: "Обновление старых дверей." },
              {
                title: "Шумоизоляция дверей",
                desc: "Улучшение звукоизоляции для комфорта.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Examples Slider */}
      <section id="works" className="py-20 bg-gray-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Примеры работ
        </motion.h2>
        <WorkExamplesSlider workExamples={examples} />
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Почему выбирают нас
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Опыт",
                desc: "Более 10 лет на рынке.",
                image: "/expirience.png",
              },
              {
                title: "Качество",
                desc: "Только проверенные материалы.",
                image: "/kach.png",
              },
              {
                title: "Быстрота",
                desc: "Работаем быстро и в срок.",
                image: "/speed.png",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="p-6 flex flex-col items-center"
                variants={fadeInUp}
              >
                <Image
                  src={advantage.image}
                  alt={advantage.title}
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  {advantage.title}
                </h3>
                <p className="text-gray-700">{advantage.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
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
            {[
              {
                title: "Установка дверей",
                price: "от 100 BYN",
                desc: "Межкомнатные и входные.",
              },
              {
                title: "Ремонт дверей",
                price: "от 50 BYN",
                desc: "Замена фурнитуры.",
              },
              {
                title: "Перестановка",
                price: "от 70 BYN",
                desc: "Выравнивание дверей.",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600">{plan.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Отзывы клиентов
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "Анна", text: "Быстро установили дверь, всё аккуратно!" },
              {
                name: "Игорь",
                text: "Отремонтировали старую дверь, как новая.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                variants={fadeInUp}
              >
                <p className="text-gray-700 mb-4 italic">{review.text}</p>
                <p className="font-semibold text-blue-600">{review.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
            © 2025 Штукатурные работы и установка дверей. Все права защищены
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

export default DoorInstallationAndRepairPage;
