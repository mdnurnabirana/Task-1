"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FeaturedProductCard from "../ui/FeaturedProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const RecommendedProductSlider = ({ products }: { products: Product[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();

    updateNavButtons();
  }, []);

  const updateNavButtons = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    setCanLeft(!swiper.isBeginning);
    setCanRight(!swiper.isEnd);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-3xl sm:text-5xl">
          You may also like
        </h1>
        <div className="flex gap-3">
          <button
            ref={prevRef}
            disabled={!canLeft}
            className="bg-[#232321] p-2 md:p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleLeft className="text-white" />
          </button>
          <button
            ref={nextRef}
            disabled={!canRight}
            className="bg-[#232321] p-2 md:p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleRight className="text-white" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={updateNavButtons}
        onReachBeginning={() => setCanLeft(false)}
        onReachEnd={() => setCanRight(false)}
        onFromEdge={() => {
          setCanLeft(true);
          setCanRight(true);
        }}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            grid: { rows: 2, fill: "row" },
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            grid: { rows: 1, fill: "row" },
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <FeaturedProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProductSlider;