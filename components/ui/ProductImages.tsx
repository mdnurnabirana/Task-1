"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";

type Props = {
  images: string[];
  title: string;
};

const ProductImages = ({ images, title }: Props) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="flex-1 rounded-xl">
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`${title}-${idx}`}
                  width={430}
                  height={510}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbClick(idx)}
              className={`min-w-16 h-16 rounded-lg overflow-hidden border-2 ${
                activeIndex === idx ? "border-[#4A69E2]" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`thumb-${idx}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden">
            <Image
              src={img}
              alt={`${title}-${idx}`}
              width={430}
              height={510}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;