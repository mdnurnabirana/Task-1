"use client";

import Image from "next/image";
import { MdStar } from "react-icons/md";
import { motion } from "motion/react";

type Props = {
  userImg: string;
};

const ReviewCard = ({ userImg }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
      className="bg-[#FAFAFA] rounded-2xl sm:rounded-4xl"
    >
      <div className="p-4 sm:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-2xl">Good Quality</h1>
            <p className="text-[16px] font-open-sans text-[#232321]">
              I highly recommend shopping from kicks
            </p>
          </div>
          <Image src={userImg} alt="Review User Image" height={64} width={64} />
        </div>
        <div className="flex items-center mt-2">
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <span className="font-semibold text-[16px] ml-2 font-open-sans">
            5.0
          </span>
        </div>
      </div>

      <Image
        src="/review1.png"
        alt="review"
        height={325}
        width={430}
        className="rounded-b-2xl sm:rounded-b-4xl"
      />
    </motion.div>
  );
};

export default ReviewCard;