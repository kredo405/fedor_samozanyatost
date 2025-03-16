"use client";

import PhoneInput from "./PhoneInput";

const Form = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Свяжитесь с нами
        </h2>
        <form className="max-w-lg mx-auto">
          {/* Ваше имя */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full p-3 text-white border border-gray-300 rounded-lg text-gray-800 placeholder-white/80"
            />
          </div>
          {/* Телефон */}
          <div className="mb-4">
            <PhoneInput />
          </div>
          {/* Ваше сообщение */}
          <div className="mb-4">
            <textarea
              placeholder="Ваше сообщение"
              className="w-full p-3 text-white border border-gray-300 rounded-lg text-gray-800 h-32 placeholder-white/80"
            ></textarea>
          </div>
          {/* Кнопка */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Оставить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
