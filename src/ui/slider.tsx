"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { ChevronLeft, ChevronRight } from "lucide-react";
interface WorkExamplesSliderProps {
  workExamples: string[];
}

// Основной компонент слайдера
const WorkExamplesSlider: React.FC<WorkExamplesSliderProps> = (
  workExamples
) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="relative max-w-4xl mx-auto">
          {/* Левая стрелка */}
          <button
            className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-md hidden md:flex"
            aria-label="Предыдущий"
          ></button>

          {/* Слайдер */}
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
            className="rounded-lg shadow-lg"
          >
            {workExamples.workExamples.map((src: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Пример работы ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Правая стрелка */}
          <button
            className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10  text-white p-3 rounded-full shadow-md hidden md:flex"
            aria-label="Следующий"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default WorkExamplesSlider;
