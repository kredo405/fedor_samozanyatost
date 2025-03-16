"use client"; // Клиентский компонент для интерактивности формы и анимаций

import { FC } from "react";
// import { FC, FormEvent, useState } from "react";
import Header from "@/ui/Nav";
import Form from "@/ui/Form";
import { motion } from "framer-motion";

const ContactsPage: FC = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("Форма отправлена:", { name, phone, message });
  //   setSubmitted(true);
  //   setName("");
  //   setPhone("");
  //   setMessage("");
  // };

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
            Контакты
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Свяжитесь с нами для консультации или заказа услуг!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Наши контакты
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Телефон
              </h3>
              <p className="text-gray-700">
                <motion.a
                  href="tel:+375298142031"
                  className="hover:text-blue-600"
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  +375 (29) 814-20-31
                </motion.a>
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Email
              </h3>
              <p className="text-gray-700">
                <motion.a
                  href="mailto:info@example.com"
                  className="hover:text-blue-600"
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  info@example.com
                </motion.a>
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Мессенджеры
              </h3>
              <p className="text-gray-700 space-x-2">
                <motion.a
                  href="tg://resolve?domain=YourUsername"
                  className="hover:text-blue-600"
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Telegram
                </motion.a>
                <span>|</span>
                <motion.a
                  href="viber://chat?number=%2B375298142031"
                  className="hover:text-blue-600"
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Viber
                </motion.a>
                <span>|</span>
                <motion.a
                  href="https://wa.me/375298142031"
                  className="hover:text-blue-600"
                  variants={linkHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  WhatsApp
                </motion.a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <Form />
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Где нас найти
          </motion.h2>
          <motion.div
            className="w-full max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ivanava+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
        </div>
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
            © 2025 Штукатурные работы и установка дверей. Все права защищены.
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
              href="viber://chat?number=%2B375298142031"
              className="hover:text-blue-400"
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Viber
            </motion.a>
            <motion.a
              href="https://wa.me/375298142031"
              className="hover:text-blue-400"
              variants={linkHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ContactsPage;
