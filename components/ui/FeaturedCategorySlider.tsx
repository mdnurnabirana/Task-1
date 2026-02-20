"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import { useRef, useState, useEffect } from "react";

type Category = {
  id: number;
  name: string;
  image: string;
};

const FeaturedCategorySlider = ({ categories }: { categories: Category[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const checkScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setIsStart(scrollLeft <= 5);
    setIsEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  const scroll = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = 700;
    slider.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkScroll();
    slider.addEventListener("scroll", checkScroll);

    return () => slider.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold uppercase text-white text-3xl md:text-7xl">
          Categories
        </h1>

        <div className="flex gap-4">
          <button
            disabled={isStart}
            onClick={() => scroll("left")}
            className="bg-[#E7E7E3] rounded-lg p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleLeft className="text-[#232321]" />
          </button>

          <button
            disabled={isEnd}
            onClick={() => scroll("right")}
            className="bg-[#E7E7E3] rounded-lg p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleRight className="text-[#232321]" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="
          mt-10 md:mt-16
          flex
          overflow-x-auto
          overflow-y-hidden
          scroll-smooth
          no-scrollbar
        "
      >
        {categories.map((category, index) => (
          <FeaturedCategoryCard
            key={category.id}
            title={category.name}
            image={category.image}
            active={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategorySlider;