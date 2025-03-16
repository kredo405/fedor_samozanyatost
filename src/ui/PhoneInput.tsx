"use client";

import { useState } from "react";

const PhoneInput = () => {
  const [phone, setPhone] = useState("+375");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Убираем все символы, кроме цифр (игнорируем префикс +375 при обработке)
    value = value.replace(/\D/g, "");

    // Если строка пустая или содержит только код страны, сбрасываем до начального состояния
    if (value.length === 0) {
      setPhone("+375");
      return;
    }

    // Форматируем номер
    let formattedPhone = "+375";

    if (value.length > 0) {
      formattedPhone += ` (${value.slice(0, 2)}`;
      value = value.slice(2);
    }

    if (value.length > 0) {
      formattedPhone += `) ${value.slice(0, 3)}`;
      value = value.slice(3);
    }

    if (value.length > 0) {
      formattedPhone += `-${value.slice(0, 2)}`;
      value = value.slice(2);
    }

    if (value.length > 0) {
      formattedPhone += `-${value.slice(0, 2)}`;
      value = value.slice(2);
    }

    setPhone(formattedPhone);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2">
      <span className="text-white mr-2">+375</span>
      <input
        type="tel"
        value={phone.replace("+375", "").trim()} // Убираем префикс и лишние пробелы при отображении
        onChange={handleChange}
        placeholder="XX XXX-XX-XX"
        className="outline-none w-full"
      />
    </div>
  );
};

export default PhoneInput;
