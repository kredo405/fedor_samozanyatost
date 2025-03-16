"use client"; // Клиентский компонент для анимаций и слайдера

import { FC } from "react";
import Image from "next/image";
import Header from "@/ui/Nav";
import Form from "@/ui/Form";
import WorkExamplesSlider from "@/ui/slider";
import { motion } from "framer-motion";

const PlasteringWorksPage: FC = () => {
  const examples = ["/ex1.jpeg", "/ex2.jpg", "/ex3.jpg", "/ex4.jpg"];

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
            className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Штукатурные работы
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Идеально ровные стены и потолки с гарантией качества!
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
            className="text-4xl font-bold text-center mb-12 text-gray-800"
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
                title: "Штукатурка стен",
                desc: "Выравнивание и подготовка под отделку.",
              },
              {
                title: "Декоративная штукатурка",
                desc: "Стильные текстуры для интерьера.",
              },
              {
                title: "Штукатурка потолков",
                desc: "Гладкие потолки без дефектов.",
              },
              {
                title: "Фасадная штукатурка",
                desc: "Защита и декор внешних стен.",
              },
              {
                title: "Машинная штукатурка",
                desc: "Быстрая обработка больших площадей.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Examples Slider */}
      <section id="works" className="py-20 bg-gray-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
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
            className="text-4xl font-bold mb-12 text-gray-800"
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
                desc: "Более 10 лет в штукатурных работах.",
                image: "/expirience.png",
              },
              {
                title: "Качество",
                desc: "Премиум-материалы для долговечности.",
                image: "/kach.png",
              },
              {
                title: "Быстрота",
                desc: "Сдаем проекты точно в срок.",
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
            className="text-4xl font-bold mb-12 text-gray-800"
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
                title: "Штукатурка стен",
                price: "от 15 BYN/м²",
                desc: "Гладкая отделка под покраску.",
              },
              {
                title: "Декоративная штукатурка",
                price: "от 25 BYN/м²",
                desc: "Уникальный дизайн стен.",
              },
              {
                title: "Фасадная штукатурка",
                price: "от 20 BYN/м²",
                desc: "Прочное покрытие фасада.",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {plan.title}
                </h3>
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
            className="text-4xl font-bold mb-12 text-gray-800"
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
              { name: "Елена", text: "Стены стали идеально ровными!" },
              { name: "Дмитрий", text: "Декоративная штукатурка — супер!" },
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

export default PlasteringWorksPage;
