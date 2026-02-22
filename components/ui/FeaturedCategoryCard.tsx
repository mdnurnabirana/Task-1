"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

type Props = {
  image: string;
  title: string;
  active?: boolean;
};

const FeaturedCategoryCard = ({ image, title, active }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
      className={`relative bg-[#ECEEF0]
        shrink-0
        min-w-86 md:min-w-160
        h-80 md:h-120
        ${active ? "rounded-tl-[64px]" : ""}
        overflow-hidden`}
    >
      <div className="absolute bottom-3 sm:bottom-7 left-0 w-full flex justify-between items-center px-5 sm:px-25 z-10">
        <h1 className="font-semibold text-2xl md:text-4xl uppercase">
          {title}
        </h1>

        <button className="bg-[#232321] rounded-lg p-2 md:p-3">
          <GoArrowUpRight size={22} color="#E7E7E3" />
        </button>
      </div>

      <div className="absolute inset-0 flex items-end justify-center">
        <Image
          src={image}
          alt={title}
          width={700}
          height={500}
          className="object-contain w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default FeaturedCategoryCard;