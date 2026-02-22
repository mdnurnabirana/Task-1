"use client";

import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import ButtonOne from "../ui/ButtonOne";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="mt-4">
      <Container>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-bold uppercase text-[58px] sm:text-[216px]"
        >
          Do it <span className="text-[#4A69E2]">Right</span>
        </motion.h1>

        <section className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 bg-[url('/hero-mobile.png')] sm:bg-[url('/hero.png')] h-95.5 sm:h-187.5 w-full object-fit sm:object-fill flex justify-between items-end-safe pl-4 sm:pl-12 pr-4 sm:pr-8"
          >
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-4 sm:pb-12 max-w-56 sm:max-w-125"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-semibold text-2xl sm:text-7xl text-white"
              >
                NIKE AIR MAX
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="font-open-sans text-sm sm:text-2xl text-[#E7E7E3]"
              >
                Nike introducing the new air max for everyone's comfort
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ButtonOne extraClass="mt-2 sm:mt-6">Shop Now</ButtonOne>
              </motion.div>
            </motion.div>

            {/* Right Small Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-2 sm:gap-4 pb-4 sm:pb-8"
            >
              <Image
                src="/hero1.png"
                alt="Hero Small Image One"
                height={160}
                width={160}
                className="w-16 h-16 sm:w-40 sm:h-40"
              />
              <Image
                src="/hero2.png"
                alt="Hero Small Image Two"
                height={160}
                width={160}
                className="w-16 h-16 sm:w-40 sm:h-40"
              />
            </motion.div>
          </motion.div>

          {/* Side Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#232321] rounded-b-2xl -rotate-90 w-39 sm:w-59 absolute -left-15 sm:-left-20.5 top-20 sm:top-40"
          >
            <h4 className="text-[#E7E7E3] p-2 sm:p-6 font-semibold text-[12px] sm:text-[16px]">
              Nike product of the year
            </h4>
          </motion.div>
        </section>
      </Container>
    </section>
  );
};

export default Hero;